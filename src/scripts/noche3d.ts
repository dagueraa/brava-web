/* =====================================================================
 *  Halloween en Brava: la escena nocturna de la portada.
 *  El vaso Brava de siempre, de noche: luz de luna, calabazas del photocall
 *  (marrones, con su cara blanca sonriente y una vela dentro), el fantasma
 *  que se asoma por detrás del vaso y se esconde si te acercas, murciélagos
 *  al fondo, latte art de telaraña y la cookie de calabaza de la promo.
 *  `setProgress(p)` recibe el avance del scroll (0 → 1).
 * ===================================================================== */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { cupTexture, paperBump, steamMaterial, beanGeometry } from './taza3d';

const MARRON = '#443631';
const CREMA = '#f3ece2';

/* ---------- texturas pintadas a mano (canvas) ---------- */

/* Latte art de telaraña: espuma con la tela en chocolate */
function telaranaTexture() {
  const S = 1024, r = S / 2;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d')!;
  const g = x.createRadialGradient(r, r, 30, r, r, r);
  g.addColorStop(0, '#f5ead9');
  g.addColorStop(0.62, '#ead6b8');
  g.addColorStop(0.8, '#b98457');
  g.addColorStop(0.93, '#7a4c30');
  g.addColorStop(1, '#4a2f20');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);
  for (let i = 0; i < 900; i++) {
    const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * r * 0.8;
    x.fillStyle = `rgba(160,110,70,${Math.random() * 0.08})`;
    x.beginPath();
    x.arc(r + Math.cos(a) * d, r + Math.sin(a) * d, Math.random() * 5 + 1, 0, Math.PI * 2);
    x.fill();
  }
  x.strokeStyle = '#4a2a1a';
  x.lineCap = 'round';
  x.lineJoin = 'round';
  const N = 12;
  // radios
  x.lineWidth = 5;
  for (let k = 0; k < N; k++) {
    const a = (k / N) * Math.PI * 2;
    x.beginPath();
    x.moveTo(r, r);
    x.lineTo(r + Math.cos(a) * r * 0.74, r + Math.sin(a) * r * 0.74);
    x.stroke();
  }
  // anillos que se combran hacia dentro entre radio y radio
  for (let ring = 1; ring <= 6; ring++) {
    const rr = ring * r * 0.115;
    x.lineWidth = 7 - ring * 0.5;
    x.beginPath();
    for (let k = 0; k <= N; k++) {
      const a0 = (k / N) * Math.PI * 2, a1 = ((k + 1) / N) * Math.PI * 2, am = (a0 + a1) / 2;
      const p0 = [r + Math.cos(a0) * rr, r + Math.sin(a0) * rr];
      const p1 = [r + Math.cos(a1) * rr, r + Math.sin(a1) * rr];
      const cm = [r + Math.cos(am) * rr * 0.82, r + Math.sin(am) * rr * 0.82];
      if (k === 0) x.moveTo(p0[0], p0[1]);
      if (k < N) x.quadraticCurveTo(cm[0], cm[1], p1[0], p1[1]);
    }
    x.stroke();
  }
  // arañita de chocolate colgando de un hilo
  x.lineWidth = 2;
  x.beginPath();
  x.moveTo(r + 150, r - 150);
  x.lineTo(r + 205, r - 40);
  x.stroke();
  x.fillStyle = '#3a2216';
  x.beginPath();
  x.ellipse(r + 210, r - 28, 16, 20, 0.4, 0, Math.PI * 2);
  x.fill();
  x.lineWidth = 4;
  for (const s of [-1, 1]) for (let l = 0; l < 4; l++) {
    x.beginPath();
    x.moveTo(r + 210, r - 30 + l * 7);
    x.quadraticCurveTo(r + 210 + s * 26, r - 46 + l * 10, r + 210 + s * 34, r - 18 + l * 12);
    x.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/* Cara de las calabazas del photocall (ojos «^ ^» y sonrisa con dos dientes).
   Se pinta en la franja frontal de la esfera (u = 0,25). */
function caraCalabaza(fondo: string, cara: string) {
  const W = 1024, H = 512;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const x = c.getContext('2d')!;
  x.fillStyle = fondo;
  x.fillRect(0, 0, W, H);
  const cx = W * 0.25, cy = H * 0.5;
  x.strokeStyle = cara;
  x.fillStyle = cara;
  x.lineCap = 'round';
  x.lineWidth = 15;
  for (const dx of [-44, 44]) {
    x.beginPath();
    x.arc(cx + dx, cy - 18, 24, Math.PI * 1.08, Math.PI * 1.92);
    x.stroke();
  }
  x.beginPath();
  x.moveTo(cx - 78, cy + 8);
  x.quadraticCurveTo(cx, cy + 22, cx + 78, cy + 8);
  x.quadraticCurveTo(cx + 70, cy + 92, cx, cy + 96);
  x.quadraticCurveTo(cx - 70, cy + 92, cx - 78, cy + 8);
  x.fill();
  x.fillStyle = fondo;
  x.fillRect(cx - 22, cy + 11, 16, 20);
  x.fillRect(cx + 6, cy + 11, 16, 20);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/* Cookie de calabaza: galleta dorada con la cara en chocolate */
function cookieTexture() {
  const S = 512, r = S / 2;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d')!;
  const g = x.createRadialGradient(r, r, 20, r, r, r);
  g.addColorStop(0, '#d99a58');
  g.addColorStop(0.75, '#c4823f');
  g.addColorStop(1, '#8e5527');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);
  for (let i = 0; i < 2500; i++) {
    x.fillStyle = `rgba(${Math.random() < 0.5 ? '120,70,30' : '240,190,120'},${Math.random() * 0.25})`;
    x.fillRect(Math.random() * S, Math.random() * S, Math.random() * 4, Math.random() * 4);
  }
  // grietas
  x.strokeStyle = 'rgba(110,60,25,.45)';
  x.lineWidth = 3;
  for (let i = 0; i < 9; i++) {
    const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 140;
    x.beginPath();
    x.moveTo(r + Math.cos(a) * d, r + Math.sin(a) * d);
    x.lineTo(r + Math.cos(a + 0.3) * (d + 40), r + Math.sin(a + 0.3) * (d + 40));
    x.stroke();
  }
  // cara de chocolate
  x.fillStyle = '#3a2216';
  x.shadowColor = 'rgba(255,230,200,.35)';
  x.shadowOffsetX = -2;
  x.shadowOffsetY = -2;
  const tri = (cx: number, cy: number, s: number) => { x.beginPath(); x.moveTo(cx, cy - s); x.lineTo(cx + s, cy + s * 0.7); x.lineTo(cx - s, cy + s * 0.7); x.closePath(); x.fill(); };
  tri(r - 62, r - 40, 34);
  tri(r + 62, r - 40, 34);
  tri(r, r + 8, 18);
  x.beginPath();
  x.moveTo(r - 110, r + 50);
  const dientes = [[-80, 92], [-55, 70], [-30, 100], [0, 75], [30, 100], [55, 70], [80, 92]];
  x.quadraticCurveTo(r, r + 80, r + 110, r + 50);
  for (let i = dientes.length - 1; i >= 0; i--) x.lineTo(r + dientes[i][0], r + dientes[i][1]);
  x.closePath();
  x.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/* Cara del fantasma (como el del photocall): ojos ovalados y boca abierta.
   El torno pone u = 0,5 detrás: la cara va en u = 0 / 1 (se pinta partida en los bordes). */
function caraFantasma() {
  const W = 1024, H = 512;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const x = c.getContext('2d')!;
  x.fillStyle = CREMA;
  x.fillRect(0, 0, W, H);
  const pinta = (cx: number) => {
    x.fillStyle = '#2b201c';
    x.beginPath(); x.ellipse(cx - 46, H * 0.27, 17, 26, 0.1, 0, Math.PI * 2); x.fill();
    x.beginPath(); x.ellipse(cx + 46, H * 0.27, 17, 26, -0.1, 0, Math.PI * 2); x.fill();
    x.beginPath(); x.ellipse(cx + 4, H * 0.4, 20, 24, 0, 0, Math.PI * 2); x.fill();
    x.fillStyle = 'rgba(214,150,140,.35)';
    x.beginPath(); x.ellipse(cx - 78, H * 0.35, 18, 9, 0, 0, Math.PI * 2); x.fill();
    x.beginPath(); x.ellipse(cx + 82, H * 0.35, 18, 9, 0, 0, Math.PI * 2); x.fill();
  };
  pinta(0);
  pinta(W);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/* ---------- geometrías ---------- */

function calabazaGeo() {
  const g = new THREE.SphereGeometry(1, 72, 48);
  const p = g.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const phi = Math.atan2(v.z, v.x);
    const gajos = 0.93 + 0.07 * Math.pow(Math.abs(Math.cos(phi * 4)), 0.6);
    const hueco = 1 - 0.22 * Math.exp(-(v.x * v.x + v.z * v.z) / 0.06) * Math.sign(v.y);
    p.setXYZ(i, v.x * gajos, v.y * 0.76 * hueco, v.z * gajos);
  }
  g.computeVertexNormals();
  return g;
}

function fantasmaGeo() {
  const pts: THREE.Vector2[] = [];
  const N = 40;
  for (let i = 0; i <= N; i++) {
    const y = -0.9 + (i / N) * 1.9;
    const r = y < 0.4 ? 0.6 + Math.max(0, -y) * 0.08 : 0.6 * Math.sqrt(Math.max(0, 1 - ((y - 0.4) / 0.6) ** 2));
    pts.push(new THREE.Vector2(Math.max(r, 0.0001), y));
  }
  return new THREE.LatheGeometry(pts, 64);
}

function murcielagoAla() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.02);
  s.quadraticCurveTo(0.25, 0.2, 0.62, 0.2);
  s.quadraticCurveTo(0.78, 0.18, 0.9, 0.06);
  s.quadraticCurveTo(0.78, -0.02, 0.72, -0.1);
  s.quadraticCurveTo(0.62, -0.02, 0.52, -0.1);
  s.quadraticCurveTo(0.42, -0.02, 0.32, -0.12);
  s.quadraticCurveTo(0.2, -0.04, 0.06, -0.08);
  s.closePath();
  return new THREE.ShapeGeometry(s, 12);
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const seg = (p: number, a: number, b: number) => ease(clamp01((p - a) / (b - a)));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export async function crearNoche(canvas: HTMLCanvasElement, opts: { onReady?: () => void; onBu?: () => void; foto?: boolean } = {}) {
  const small = Math.min(window.innerWidth, window.innerHeight) < 700;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  let dpr = Math.min(window.devicePixelRatio, 1.5);
  renderer.setPixelRatio(dpr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.type = THREE.VSMShadowMap;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.16; // de noche: casi todo lo pone la luna y las velas

  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100);
  const world = new THREE.Group();
  const rig = new THREE.Group();
  const cup = new THREE.Group();
  scene.add(world);
  world.add(rig);
  rig.add(cup);

  // luna: fría, desde atrás a la izquierda; recorta el vaso y proyecta sombras largas
  const luna = new THREE.DirectionalLight('#c9d4ff', 2.1);
  luna.position.set(-5, 6.5, -1.5);
  luna.castShadow = true;
  luna.shadow.mapSize.set(1024, 1024);
  luna.shadow.camera.left = luna.shadow.camera.bottom = -4.5;
  luna.shadow.camera.right = luna.shadow.camera.top = 4.5;
  luna.shadow.camera.near = 1;
  luna.shadow.camera.far = 24;
  luna.shadow.radius = 12;
  luna.shadow.blurSamples = 12;
  luna.shadow.bias = -0.0008;
  rig.add(luna, luna.target);
  const relleno = new THREE.DirectionalLight('#ffd9b0', 0.55);
  relleno.position.set(4, 3, 6);
  scene.add(relleno, new THREE.HemisphereLight('#8a90b8', '#1a120f', 0.35));

  /* ---- vaso (el mismo de Brava) ---- */
  const H = 2.6, RT = 1, RB = 0.76;
  const wall = new THREE.MeshPhysicalMaterial({
    map: await cupTexture(renderer.capabilities.getMaxAnisotropy()),
    bumpMap: paperBump(), bumpScale: 1.4, roughness: 0.78, sheen: 0.35, sheenRoughness: 0.8, sheenColor: new THREE.Color('#fff4e2'),
  });
  const outer = new THREE.Mesh(new THREE.CylinderGeometry(RT, RB, H, 160, 1, true), wall);
  outer.rotation.y = Math.PI;
  outer.castShadow = true;
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(RT * 0.975, RB * 0.975, H, 96, 1, true), new THREE.MeshStandardMaterial({ color: '#d8ccb6', roughness: 0.9, side: THREE.BackSide }));
  const lip = new THREE.Mesh(new THREE.TorusGeometry(RT * 0.988, 0.045, 20, 160), new THREE.MeshPhysicalMaterial({ color: '#e4d8c3', roughness: 0.55, sheen: 0.3 }));
  lip.rotation.x = Math.PI / 2;
  lip.position.y = H / 2;
  const coffeeY = H / 2 - 0.16;
  const rAt = (y: number) => (RB + ((y + H / 2) / H) * (RT - RB)) * 0.972;
  const coffee = new THREE.Mesh(new THREE.CircleGeometry(rAt(coffeeY), 128), new THREE.MeshPhysicalMaterial({ map: telaranaTexture(), roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.15 }));
  coffee.rotation.x = -Math.PI / 2;
  coffee.position.y = coffeeY;
  cup.add(outer, inner, lip, coffee);

  const floorY = -H / 2;
  const catcher = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), new THREE.ShadowMaterial({ opacity: 0.55, color: '#05030a' }));
  catcher.rotation.x = -Math.PI / 2;
  catcher.position.y = floorY;
  catcher.receiveShadow = true;
  rig.add(catcher);

  /* ---- calabazas con vela dentro ---- */
  const geoCal = calabazaGeo();
  const calabazas: { luz: THREE.PointLight; mat: THREE.MeshStandardMaterial; fase: number }[] = [];
  const ponerCalabaza = (px: number, pz: number, s: number, giro: number) => {
    const mat = new THREE.MeshStandardMaterial({
      map: caraCalabaza('#4a3329', '#f4e9d8'),
      emissiveMap: caraCalabaza('#000000', '#ffffff'),
      emissive: new THREE.Color('#ffc477'),
      emissiveIntensity: 0.9,
      roughness: 0.62,
    });
    const m = new THREE.Mesh(geoCal, mat);
    m.scale.setScalar(s);
    m.position.set(px, floorY + 0.76 * s * 0.98, pz);
    m.rotation.y = giro;
    m.castShadow = true;
    const tallo = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.32, 10), new THREE.MeshStandardMaterial({ color: '#5a4a32', roughness: 0.8 }));
    tallo.position.set(0, 0.85, 0);
    tallo.rotation.z = 0.25;
    m.add(tallo);
    const luz = new THREE.PointLight('#ffb15c', 1.6, 3.2, 1.6);
    luz.position.set(px, floorY + 0.7 * s, pz + 0.55 * s);
    rig.add(m, luz);
    calabazas.push({ luz, mat, fase: Math.random() * 10 });
  };
  ponerCalabaza(-1.55, 0.35, 0.62, 0.25);
  ponerCalabaza(1.45, 0.9, 0.44, -0.35);

  /* ---- cookie de calabaza (la de la promo) ---- */
  const cookie = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.53, 0.11, 72),
    [new THREE.MeshStandardMaterial({ color: '#a8692f', roughness: 0.85 }), new THREE.MeshStandardMaterial({ map: cookieTexture(), roughness: 0.75 }), new THREE.MeshStandardMaterial({ color: '#8e5527' })],
  );
  cookie.position.set(-0.55, floorY + 0.06, 1.55);
  cookie.rotation.set(0.05, Math.PI / 2 + 0.12, -0.04); // la tapa del cilindro pone el «arriba» de la textura hacia +x
  cookie.castShadow = cookie.receiveShadow = true;
  rig.add(cookie);

  /* ---- granos sueltos ---- */
  const spots: [number, number, number][] = [[0.6, 1.45, 1], [0.95, 1.95, 0.9], [-1.0, 1.9, 0.95], [0.25, 2.3, 0.85], [-1.6, 1.25, 0.9]];
  const beans = new THREE.InstancedMesh(beanGeometry(), new THREE.MeshPhysicalMaterial({ color: '#3b2216', roughness: 0.42, clearcoat: 0.5 }), spots.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), scl = new THREE.Vector3();
  spots.forEach(([a, d, s], i) => {
    pos.set(Math.sin(a) * d, floorY + 0.11 * s, Math.cos(a) * d);
    e.set(-Math.PI / 2, 0, i * 1.7);
    m4.compose(pos, q.setFromEuler(e), scl.setScalar(s));
    beans.setMatrixAt(i, m4);
  });
  beans.castShadow = true;
  rig.add(beans);

  /* ---- el fantasma ---- */
  const fantasma = new THREE.Group();
  const geoF = fantasmaGeo();
  const base = Float32Array.from((geoF.attributes.position as THREE.BufferAttribute).array as Float32Array);
  const matF = new THREE.MeshPhysicalMaterial({ map: caraFantasma(), roughness: 0.55, sheen: 0.6, sheenColor: new THREE.Color('#ffffff'), emissive: new THREE.Color('#d9e2ff'), emissiveIntensity: 0.22 });
  const cuerpo = new THREE.Mesh(geoF, matF);
  const brazoGeo = new THREE.SphereGeometry(1, 24, 16);
  const brazoI = new THREE.Mesh(brazoGeo, matF);
  brazoI.scale.set(0.16, 0.3, 0.14);
  brazoI.position.set(-0.6, -0.05, 0.05);
  brazoI.rotation.z = -0.6;
  const brazoD = new THREE.Mesh(brazoGeo, matF);
  brazoD.scale.set(0.16, 0.32, 0.14);
  const hombro = new THREE.Group();
  hombro.position.set(0.55, 0.15, 0.05);
  brazoD.position.set(0.12, 0.22, 0);
  hombro.add(brazoD);
  fantasma.add(cuerpo, brazoI, hombro);
  fantasma.scale.setScalar(0.85);
  const luzF = new THREE.PointLight('#dfe6ff', 0.6, 3, 2); // brillo fantasmal
  fantasma.add(luzF);
  rig.add(fantasma);

  /* ---- murciélagos al fondo ---- */
  const geoAla = murcielagoAla();
  const matBat = new THREE.MeshBasicMaterial({ color: '#16100e', side: THREE.DoubleSide });
  const murcielagos = Array.from({ length: small ? 4 : 7 }, (_, i) => {
    const g = new THREE.Group();
    const cuerpoB = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), matBat);
    cuerpoB.scale.set(1, 1.6, 1);
    const alaD = new THREE.Mesh(geoAla, matBat);
    const alaI = new THREE.Mesh(geoAla, matBat);
    alaI.scale.x = -1;
    g.add(cuerpoB, alaD, alaI);
    g.scale.setScalar(0.55 + (i % 3) * 0.18);
    scene.add(g);
    return { g, alaD, alaI, fase: i * 1.37, vel: 0.12 + (i % 4) * 0.03, alto: 1.8 + (i % 3) * 0.7, fondo: -4.5 - (i % 3) * 1.4 };
  });

  /* ---- vapor ---- */
  const steam = new THREE.Group();
  const steamMats: THREE.ShaderMaterial[] = [];
  for (let i = 0; i < 2; i++) {
    const m = steamMaterial(i * 1.9);
    steamMats.push(m);
    const s = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.4), m);
    s.position.set((i - 0.5) * 0.3, 1.15, 0);
    steam.add(s);
  }
  steam.position.y = H / 2;
  rig.add(steam);

  /* ---- cámara, interacción y bucle ---- */
  let target = 0, prog = 0, aspect = 1, px = 0, py = 0, tx = 0, ty = 0;
  let escondido = 0, susto = 0, porTacto = 0;
  const look = new THREE.Vector3(), proy = new THREE.Vector3();
  let raton: { x: number; y: number } | null = null;

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    aspect = w / h;
    renderer.setSize(w, h, false);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  const onPointer = (ev: PointerEvent) => {
    tx = (ev.clientX / window.innerWidth) * 2 - 1;
    ty = (ev.clientY / window.innerHeight) * 2 - 1;
    const r = canvas.getBoundingClientRect();
    raton = ev.pointerType === 'mouse' ? { x: ((ev.clientX - r.left) / r.width) * 2 - 1, y: -(((ev.clientY - r.top) / r.height) * 2 - 1) } : null;
  };
  window.addEventListener('pointermove', onPointer, { passive: true });
  // en el móvil: tocar la escena le da un susto al fantasma
  const onTap = () => { porTacto = 2.2; susto = 1; opts.onBu?.(); };
  canvas.addEventListener('pointerdown', onTap);

  const clock = new THREE.Clock();
  let visible = true, raf = 0, ready = false, lentos = 0;
  renderer.shadowMap.needsUpdate = true;

  function frame() {
    raf = requestAnimationFrame(frame);
    if (!visible) return;
    const dt = Math.min(0.1, clock.getDelta());
    const t = clock.elapsedTime;
    prog += (target - prog) * (1 - Math.exp(-dt * 6));
    px += (tx - px) * (1 - Math.exp(-dt * 2.5));
    py += (ty - py) * (1 - Math.exp(-dt * 2.5));
    const p = prog;
    const narrow = aspect < 0.85;
    const fit = narrow ? Math.min(2.1, 1.05 / Math.max(aspect, 0.42)) : 1;

    // 0–0,28: noche · 0,28–0,55: cenital (telaraña + cookie) · 0,62–1: el fantasma sale a saludar
    const top = seg(p, 0.28, 0.48) * (1 - seg(p, 0.58, 0.76));
    const fuera = seg(p, 0.72, 0.92);
    const dist = lerp(11.5, 9, top) * fit;
    const elev = lerp(1.7, 11, top) * (narrow ? lerp(1, 1.4, top) : 1);
    const lz = top * (narrow ? 2.1 : 1.1);
    camera.position.set(px * 0.5 * (1 - top), elev - py * 0.3 * (1 - top), Math.max(1, dist - top * (dist - 1.6)) + lz);
    look.set(0, lerp(-0.05, coffeeY, top), lz);
    camera.lookAt(look);

    rig.position.x = narrow ? 0 : lerp(1.6, 0.2, top);
    rig.position.y = narrow ? lerp(1.4, 1.0, fuera) + Math.max(0, 0.52 - aspect) * 2 : 0;
    rig.scale.setScalar(narrow ? 0.95 : 1);
    cup.rotation.y = Math.sin(t * 0.35) * 0.18 + p * Math.PI * 2;

    // velas que parpadean
    calabazas.forEach((c) => {
      const f = 0.75 + 0.18 * Math.sin(t * 9 + c.fase) + 0.12 * Math.sin(t * 23 + c.fase * 2) + (Math.random() - 0.5) * 0.08;
      c.luz.intensity = 1.6 * f;
      c.mat.emissiveIntensity = 0.85 * f;
    });

    // el fantasma: se asoma por la derecha del vaso; si el ratón se acerca, se esconde
    let quiereEsconderse = 0;
    if (raton) {
      proy.copy(fantasma.position).applyMatrix4(rig.matrixWorld).project(camera);
      if (Math.hypot(proy.x - raton.x, (proy.y - raton.y) / Math.max(aspect, 0.5)) < 0.35) quiereEsconderse = 1;
    } else if (!narrow || true) {
      quiereEsconderse = Math.sin(t * 0.9) > 0.55 ? 1 : 0; // en móvil se asoma y se esconde solo
    }
    if (porTacto > 0) { porTacto -= dt; quiereEsconderse = 1; }
    if (fuera > 0.05) quiereEsconderse = 0; // al final sale a saludar sí o sí
    if (quiereEsconderse && escondido < 0.5) susto = 1;
    escondido += (quiereEsconderse - escondido) * (1 - Math.exp(-dt * (quiereEsconderse ? 9 : 2.2)));
    susto = Math.max(0, susto - dt * 1.8);
    const asomado = 1 - escondido;
    const fx = lerp(0.35, 1.25, asomado) + fuera * 0.35;
    fantasma.position.set(fx, 0.35 + Math.sin(t * 1.6) * 0.12 + fuera * 0.45, lerp(-1.1, -0.6, asomado) + fuera * 1.1);
    fantasma.rotation.z = -0.22 * asomado * (1 - fuera) + Math.sin(t * 1.3) * 0.05;
    fantasma.rotation.y = -0.35 * (1 - fuera) + susto * Math.sin(t * 40) * 0.08;
    hombro.rotation.z = -0.4 - Math.max(0, Math.sin(t * 5)) * 0.9 * (0.4 + fuera); // saluda
    const pos = geoF.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const bx = base[i * 3], by = base[i * 3 + 1], bz = base[i * 3 + 2];
      if (by < -0.5) {
        const a = Math.atan2(bz, bx);
        const k = (-0.5 - by) / 0.4;
        pos.setY(i, by + Math.sin(a * 6 + t * 3) * 0.07 * k);
        pos.setX(i, bx * (1 + Math.sin(t * 2 + by * 3) * 0.04 * k));
        pos.setZ(i, bz * (1 + Math.cos(t * 2 + by * 3) * 0.04 * k));
      }
    }
    pos.needsUpdate = true;
    luzF.intensity = 0.5 + 0.2 * Math.sin(t * 2);

    // murciélagos: aleteo y vuelo en ochos al fondo
    murcielagos.forEach((b) => {
      const a = t * b.vel + b.fase;
      b.g.position.set(Math.sin(a) * 6.5, b.alto + Math.sin(a * 2) * 0.6, b.fondo + Math.cos(a) * 1.2);
      b.g.rotation.y = Math.cos(a) > 0 ? 0 : Math.PI;
      b.g.rotation.z = Math.sin(a * 2) * 0.2;
      const aleteo = Math.sin(t * 14 + b.fase) * 0.9;
      b.alaD.rotation.y = aleteo;
      b.alaI.rotation.y = -aleteo;
      b.g.visible = top < 0.5;
    });

    steamMats.forEach((m) => { m.uniforms.uTime.value = t; m.uniforms.uAlpha.value = 0.8 * (1 - top * 0.9); });
    steam.quaternion.copy(camera.quaternion);

    if (opts.foto) {
      // modo «foto de producto» (para generar la imagen de la promo): solo vaso, cookie y calabazas
      camera.position.set(0.3, 6.4, 10.2);
      look.set(-0.2, -0.35, 0.55);
      camera.lookAt(look);
      rig.position.set(0, 0, 0);
      rig.scale.setScalar(1);
      cup.rotation.y = -0.35;
      fantasma.visible = false;
      steam.visible = false;
      murcielagos.forEach((b) => (b.g.visible = false));
    }
    renderer.render(scene, camera);
    lentos = dt > 0.024 ? lentos + 1 : Math.max(0, lentos - 1);
    if (lentos > 40 && dpr > 1) { dpr = Math.max(1, dpr - 0.25); renderer.setPixelRatio(dpr); resize(); lentos = 0; }
    if (!ready) { ready = true; opts.onReady?.(); }
  }
  frame();

  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0 });
  io.observe(canvas);

  return {
    setProgress(p: number) { target = clamp01(p); },
    setTilt(x: number, y: number) { tx = x; ty = y; },
  };
}
