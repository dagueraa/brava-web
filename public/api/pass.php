<?php
/* =====================================================================
 *  BRAVA PASS v2 — API (PHP + SQLite, sin dependencias)
 * ---------------------------------------------------------------------
 *  Cliente:
 *    POST alta        {nombre, cumple?}          → crea el pass (token secreto + código corto)
 *    GET  estado      ?t=TOKEN                   → sellos, cafés gratis, historial
 *    POST reclamar    {t, s}                     → canjea un QR de mostrador de un solo uso (+N sellos)
 *  Personal (cabecera X-Staff: token de sesión):
 *    POST login       {pin}                      → sesión de 12 h (intentos limitados por IP)
 *    POST buscar      {codigo}                   → ficha del cliente (código corto o QR del pass)
 *    POST sellar      {codigo, n}                → suma N cafés
 *    POST canjear     {codigo, tipo:cafe|cumple} → canjea café gratis o brunch de cumpleaños
 *    POST mostrador   {n}                        → genera un QR de un solo uso (90 s) para que lo escanee el cliente
 *    GET  hoy                                    → estadísticas y actividad reciente
 *    POST pin         {actual, nuevo}            → cambia el PIN del personal
 *  Todo se valida en el servidor: el cliente no puede sellarse a sí mismo.
 * ===================================================================== */
declare(strict_types=1);

const OBJETIVO = 10;              // cafés para 1 gratis
const PIN_INICIAL = '2468';       // se guarda cifrado la primera vez; cámbialo desde /barra
const SESION_HORAS = 12;
const QR_SEGUNDOS = 90;           // vida de un QR de mostrador
const MAX_SELLOS_DIA = 6;         // tope de sellos por pass y día (anti-abuso)

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function salir(array $data, int $code = 200): never {
  http_response_code($code);
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
  exit;
}
function fallo(string $msg, int $code = 400): never { salir(['ok' => false, 'error' => $msg], $code); }

/* ---------- Base de datos ---------- */
// Fuera de la carpeta pública si se puede (así republicar la web no toca los datos).
$fuera = dirname(__DIR__, 2) . '/brava-pass-data';
$dir = (is_dir($fuera) || @mkdir($fuera, 0750, true)) && is_writable($fuera) ? $fuera : __DIR__ . '/data';
if (!is_dir($dir)) mkdir($dir, 0750, true);
if (!file_exists("$dir/.htaccess")) file_put_contents("$dir/.htaccess", "Require all denied\nDeny from all\n");
$db = new PDO("sqlite:$dir/brava-pass.sqlite", null, null, [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);
$db->exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;');
$db->exec(<<<SQL
CREATE TABLE IF NOT EXISTS ajustes (k TEXT PRIMARY KEY, v TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS clientes (
  id INTEGER PRIMARY KEY,
  token TEXT UNIQUE NOT NULL,
  codigo TEXT UNIQUE NOT NULL,
  nombre TEXT NOT NULL,
  cumple TEXT,
  sellos INTEGER NOT NULL DEFAULT 0,
  gratis INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL DEFAULT 0,
  cumple_usado INTEGER,
  creado INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS movimientos (
  id INTEGER PRIMARY KEY,
  cliente_id INTEGER NOT NULL REFERENCES clientes(id),
  tipo TEXT NOT NULL,
  n INTEGER NOT NULL DEFAULT 1,
  via TEXT NOT NULL,
  ts INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS qr_mostrador (codigo TEXT PRIMARY KEY, n INTEGER NOT NULL, expira INTEGER NOT NULL, usado_por INTEGER);
CREATE TABLE IF NOT EXISTS intentos (ip TEXT NOT NULL, tipo TEXT NOT NULL, ts INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS mov_cliente ON movimientos(cliente_id, ts);
CREATE INDEX IF NOT EXISTS intentos_ip ON intentos(ip, tipo, ts);
SQL);

function ajuste(PDO $db, string $k, ?callable $crear = null): string {
  $st = $db->prepare('SELECT v FROM ajustes WHERE k = ?');
  $st->execute([$k]);
  $v = $st->fetchColumn();
  if ($v === false && $crear) {
    $v = $crear();
    $db->prepare('INSERT INTO ajustes (k, v) VALUES (?, ?)')->execute([$k, $v]);
  }
  return (string) $v;
}
$secreto = ajuste($db, 'secreto', fn() => bin2hex(random_bytes(32)));
ajuste($db, 'pin', fn() => password_hash(PIN_INICIAL, PASSWORD_DEFAULT));

/* ---------- Utilidades ---------- */
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? '0';
$ahora = time();
$db->prepare('DELETE FROM intentos WHERE ts < ?')->execute([$ahora - 86400]);
$db->prepare('DELETE FROM qr_mostrador WHERE expira < ?')->execute([$ahora - 86400]);

/* $contar = false solo comprueba (p. ej. el PIN, donde solo cuentan los fallos). */
function limitar(PDO $db, string $ip, string $tipo, int $max, int $ventana, bool $contar = true): void {
  $st = $db->prepare('SELECT COUNT(*) FROM intentos WHERE ip = ? AND tipo = ? AND ts > ?');
  $st->execute([$ip, $tipo, time() - $ventana]);
  if ((int) $st->fetchColumn() >= $max) fallo('Demasiados intentos. Prueba en unos minutos.', 429);
  if ($contar) apuntar($db, $ip, $tipo);
}
function apuntar(PDO $db, string $ip, string $tipo): void {
  $db->prepare('INSERT INTO intentos (ip, tipo, ts) VALUES (?, ?, ?)')->execute([$ip, $tipo, time()]);
}
function entrada(): array {
  $raw = file_get_contents('php://input') ?: '';
  $j = json_decode($raw, true, 8, JSON_INVALID_UTF8_SUBSTITUTE);
  return is_array($j) ? $j : $_POST;
}
function codigoCorto(): string {
  $abc = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'; // sin 0/O/1/I/L para dictarlo sin errores
  $c = '';
  for ($i = 0; $i < 6; $i++) $c .= $abc[random_int(0, strlen($abc) - 1)];
  return $c;
}
function esCumple(?string $cumple, ?int $usado): bool {
  if (!$cumple) return false;
  $hoy = date('m-d');
  return substr($cumple, 5) === $hoy && (int) $usado !== (int) date('Y');
}
function ficha(PDO $db, array $c, bool $conHistorial = true): array {
  $out = [
    'codigo' => $c['codigo'],
    'nombre' => $c['nombre'],
    'cumple' => $c['cumple'],
    'sellos' => (int) $c['sellos'],
    'gratis' => (int) $c['gratis'],
    'total' => (int) $c['total'],
    'objetivo' => OBJETIVO,
    'cumpleHoy' => esCumple($c['cumple'], $c['cumple_usado'] !== null ? (int) $c['cumple_usado'] : null),
    'desde' => (int) $c['creado'],
  ];
  if ($conHistorial) {
    $st = $db->prepare('SELECT tipo, n, via, ts FROM movimientos WHERE cliente_id = ? ORDER BY ts DESC LIMIT 12');
    $st->execute([$c['id']]);
    $out['historial'] = $st->fetchAll();
  }
  return $out;
}
function sellosHoy(PDO $db, int $id): int {
  $st = $db->prepare("SELECT COALESCE(SUM(n),0) FROM movimientos WHERE cliente_id = ? AND tipo = 'sello' AND ts >= ?");
  $st->execute([$id, strtotime('today')]);
  return (int) $st->fetchColumn();
}
/* Suma sellos y convierte cada bloque de OBJETIVO en un café gratis. Devuelve cuántos gratis se han ganado. */
function sellar(PDO $db, array $c, int $n, string $via): int {
  $sellos = (int) $c['sellos'] + $n;
  $nuevos = intdiv($sellos, OBJETIVO);
  $sellos %= OBJETIVO;
  $db->prepare('UPDATE clientes SET sellos = ?, gratis = gratis + ?, total = total + ? WHERE id = ?')
     ->execute([$sellos, $nuevos, $n, $c['id']]);
  $db->prepare("INSERT INTO movimientos (cliente_id, tipo, n, via, ts) VALUES (?, 'sello', ?, ?, ?)")
     ->execute([$c['id'], $n, $via, time()]);
  return $nuevos;
}
function porToken(PDO $db, string $t): ?array {
  if (!preg_match('/^[a-f0-9]{40}$/', $t)) return null;
  $st = $db->prepare('SELECT * FROM clientes WHERE token = ?');
  $st->execute([$t]);
  return $st->fetch() ?: null;
}
/* Acepta el código corto (lo que se dicta) o el contenido del QR del pass ("BRAVA:CODIGO"). */
function porCodigo(PDO $db, string $codigo): ?array {
  $codigo = strtoupper(trim(preg_replace('/^BRAVA:/i', '', $codigo)));
  if (!preg_match('/^[2-9A-Z]{6}$/', $codigo)) return null;
  $st = $db->prepare('SELECT * FROM clientes WHERE codigo = ?');
  $st->execute([$codigo]);
  return $st->fetch() ?: null;
}

/* ---------- Sesión del personal (token firmado con HMAC, sin guardar estado) ---------- */
function firmar(string $secreto, int $exp): string {
  return $exp . '.' . hash_hmac('sha256', "staff|$exp", $secreto);
}
function exigirPersonal(string $secreto): void {
  $t = $_SERVER['HTTP_X_STAFF'] ?? '';
  [$exp, $mac] = array_pad(explode('.', $t, 2), 2, '');
  if (!ctype_digit($exp) || (int) $exp < time() || !hash_equals(hash_hmac('sha256', "staff|$exp", $secreto), $mac)) {
    fallo('Sesión caducada. Vuelve a entrar con el PIN.', 401);
  }
}

/* ---------- Rutas ---------- */
$accion = $_GET['a'] ?? '';
$in = $_SERVER['REQUEST_METHOD'] === 'POST' ? entrada() : $_GET;

switch ($accion) {
  case 'alta': {
    limitar($db, $ip, 'alta', 5, 3600);
    $nombre = trim(mb_substr(strip_tags((string) ($in['nombre'] ?? '')), 0, 40));
    if ($nombre === '') fallo('Dinos tu nombre.');
    $cumple = (string) ($in['cumple'] ?? '');
    if ($cumple !== '' && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $cumple)) $cumple = '';
    $token = bin2hex(random_bytes(20));
    do { $codigo = codigoCorto(); $st = $db->prepare('SELECT 1 FROM clientes WHERE codigo = ?'); $st->execute([$codigo]); } while ($st->fetchColumn());
    $db->prepare('INSERT INTO clientes (token, codigo, nombre, cumple, creado) VALUES (?, ?, ?, ?, ?)')
       ->execute([$token, $codigo, $nombre, $cumple ?: null, $ahora]);
    $c = porToken($db, $token);
    salir(['ok' => true, 'token' => $token, 'pass' => ficha($db, $c)]);
  }

  case 'estado': {
    $c = porToken($db, (string) ($in['t'] ?? ''));
    if (!$c) fallo('Pass no encontrado.', 404);
    salir(['ok' => true, 'pass' => ficha($db, $c)]);
  }

  case 'reclamar': {
    limitar($db, $ip, 'reclamar', 20, 600);
    $c = porToken($db, (string) ($in['t'] ?? ''));
    if (!$c) fallo('Pass no encontrado.', 404);
    $s = (string) ($in['s'] ?? '');
    $db->beginTransaction();
    $st = $db->prepare('SELECT * FROM qr_mostrador WHERE codigo = ?');
    $st->execute([$s]);
    $qr = $st->fetch();
    if (!$qr) { $db->rollBack(); fallo('Este QR no es válido. Pide que te lo generen de nuevo.'); }
    if ($qr['usado_por'] !== null) { $db->rollBack(); fallo((int) $qr['usado_por'] === (int) $c['id'] ? 'Este café ya está sellado en tu pass.' : 'Este QR ya se ha usado.'); }
    if ((int) $qr['expira'] < $ahora) { $db->rollBack(); fallo('Este QR ha caducado. Pide uno nuevo en barra.'); }
    if (sellosHoy($db, (int) $c['id']) + (int) $qr['n'] > MAX_SELLOS_DIA) { $db->rollBack(); fallo('Has llegado al máximo de sellos de hoy.'); }
    $db->prepare('UPDATE qr_mostrador SET usado_por = ? WHERE codigo = ?')->execute([$c['id'], $s]);
    $nuevos = sellar($db, $c, (int) $qr['n'], 'qr');
    $db->commit();
    salir(['ok' => true, 'sumados' => (int) $qr['n'], 'nuevosGratis' => $nuevos, 'pass' => ficha($db, porToken($db, $c['token']))]);
  }

  case 'login': {
    limitar($db, $ip, 'login', 6, 900, false);
    if (!password_verify((string) ($in['pin'] ?? ''), ajuste($db, 'pin'))) { apuntar($db, $ip, 'login'); fallo('PIN incorrecto.', 403); }
    salir(['ok' => true, 'staff' => firmar($secreto, $ahora + SESION_HORAS * 3600), 'objetivo' => OBJETIVO]);
  }

  case 'buscar': {
    exigirPersonal($secreto);
    $c = porCodigo($db, (string) ($in['codigo'] ?? ''));
    if (!$c) fallo('No hay ningún pass con ese código.', 404);
    salir(['ok' => true, 'pass' => ficha($db, $c)]);
  }

  case 'sellar': {
    exigirPersonal($secreto);
    $c = porCodigo($db, (string) ($in['codigo'] ?? ''));
    if (!$c) fallo('No hay ningún pass con ese código.', 404);
    $n = max(1, min(5, (int) ($in['n'] ?? 1)));
    $nuevos = sellar($db, $c, $n, 'barra');
    salir(['ok' => true, 'sumados' => $n, 'nuevosGratis' => $nuevos, 'pass' => ficha($db, porCodigo($db, $c['codigo']))]);
  }

  case 'canjear': {
    exigirPersonal($secreto);
    $c = porCodigo($db, (string) ($in['codigo'] ?? ''));
    if (!$c) fallo('No hay ningún pass con ese código.', 404);
    if (($in['tipo'] ?? 'cafe') === 'cumple') {
      if (!esCumple($c['cumple'], $c['cumple_usado'] !== null ? (int) $c['cumple_usado'] : null)) fallo('Hoy no es su cumpleaños (o ya lo ha canjeado este año).');
      $db->prepare('UPDATE clientes SET cumple_usado = ? WHERE id = ?')->execute([(int) date('Y'), $c['id']]);
      $db->prepare("INSERT INTO movimientos (cliente_id, tipo, n, via, ts) VALUES (?, 'cumple', 1, 'barra', ?)")->execute([$c['id'], $ahora]);
    } else {
      if ((int) $c['gratis'] < 1) fallo('Todavía no tiene ningún café gratis.');
      $db->prepare('UPDATE clientes SET gratis = gratis - 1 WHERE id = ?')->execute([$c['id']]);
      $db->prepare("INSERT INTO movimientos (cliente_id, tipo, n, via, ts) VALUES (?, 'gratis', 1, 'barra', ?)")->execute([$c['id'], $ahora]);
    }
    salir(['ok' => true, 'pass' => ficha($db, porCodigo($db, $c['codigo']))]);
  }

  case 'mostrador': {
    exigirPersonal($secreto);
    $n = max(1, min(5, (int) ($in['n'] ?? 1)));
    $codigo = rtrim(strtr(base64_encode(random_bytes(12)), '+/', '-_'), '=');
    $db->prepare('INSERT INTO qr_mostrador (codigo, n, expira) VALUES (?, ?, ?)')->execute([$codigo, $n, $ahora + QR_SEGUNDOS]);
    salir(['ok' => true, 's' => $codigo, 'n' => $n, 'expira' => $ahora + QR_SEGUNDOS, 'segundos' => QR_SEGUNDOS]);
  }

  case 'qr': {
    // La tablet pregunta si su QR ya se ha usado, para pasar al siguiente cliente sola.
    exigirPersonal($secreto);
    $st = $db->prepare('SELECT q.usado_por, c.nombre FROM qr_mostrador q LEFT JOIN clientes c ON c.id = q.usado_por WHERE q.codigo = ?');
    $st->execute([(string) ($in['s'] ?? '')]);
    $r = $st->fetch();
    salir(['ok' => true, 'usado' => $r && $r['usado_por'] !== null, 'nombre' => $r['nombre'] ?? null]);
  }

  case 'hoy': {
    exigirPersonal($secreto);
    $desde = strtotime('today');
    $q = fn(string $sql, array $p = []) => (function () use ($db, $sql, $p) { $st = $db->prepare($sql); $st->execute($p); return $st->fetchColumn(); })();
    $st = $db->prepare('SELECT m.tipo, m.n, m.via, m.ts, c.nombre, c.codigo FROM movimientos m JOIN clientes c ON c.id = m.cliente_id ORDER BY m.ts DESC LIMIT 15');
    $st->execute();
    salir(['ok' => true,
      'clientes' => (int) $q('SELECT COUNT(*) FROM clientes'),
      'nuevosHoy' => (int) $q('SELECT COUNT(*) FROM clientes WHERE creado >= ?', [$desde]),
      'sellosHoy' => (int) $q("SELECT COALESCE(SUM(n),0) FROM movimientos WHERE tipo = 'sello' AND ts >= ?", [$desde]),
      'gratisHoy' => (int) $q("SELECT COUNT(*) FROM movimientos WHERE tipo IN ('gratis','cumple') AND ts >= ?", [$desde]),
      'pendientes' => (int) $q('SELECT COALESCE(SUM(gratis),0) FROM clientes'),
      'cumplesHoy' => (int) $q("SELECT COUNT(*) FROM clientes WHERE substr(cumple, 6) = ?", [date('m-d')]),
      'actividad' => $st->fetchAll(),
    ]);
  }

  case 'pin': {
    exigirPersonal($secreto);
    limitar($db, $ip, 'login', 6, 900, false);
    if (!password_verify((string) ($in['actual'] ?? ''), ajuste($db, 'pin'))) { apuntar($db, $ip, 'login'); fallo('El PIN actual no es correcto.', 403); }
    $nuevo = (string) ($in['nuevo'] ?? '');
    if (!preg_match('/^\d{4,8}$/', $nuevo)) fallo('El PIN nuevo debe tener entre 4 y 8 números.');
    $db->prepare("UPDATE ajustes SET v = ? WHERE k = 'pin'")->execute([password_hash($nuevo, PASSWORD_DEFAULT)]);
    salir(['ok' => true]);
  }

  default:
    fallo('Acción desconocida.', 404);
}
