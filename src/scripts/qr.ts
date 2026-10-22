/* QR en SVG (nítido a cualquier tamaño) y escáner con la cámara del móvil.
   El escáner usa BarcodeDetector (Android/Chrome) y, si no existe (iPhone),
   carga jsQR solo en ese momento. */
import qrcode from 'qrcode-generator';

export function qrSvg(texto: string, color = '#443631') {
  const qr = qrcode(0, 'M');
  qr.addData(texto);
  qr.make();
  const n = qr.getModuleCount();
  let d = '';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qr.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;
  return `<svg viewBox="-2 -2 ${n + 4} ${n + 4}" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Código QR"><rect x="-2" y="-2" width="${n + 4}" height="${n + 4}" fill="#fff"/><path d="${d}" fill="${color}"/></svg>`;
}

export async function escanear(video: HTMLVideoElement, alLeer: (texto: string) => void) {
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
  video.srcObject = stream;
  video.setAttribute('playsinline', '');
  await video.play();

  let parar = false;
  const BD = (window as any).BarcodeDetector;
  const detector = BD && (await BD.getSupportedFormats?.())?.includes('qr_code') ? new BD({ formats: ['qr_code'] }) : null;
  const jsQR = detector ? null : (await import('jsqr')).default;
  const lienzo = document.createElement('canvas');
  const ctx = lienzo.getContext('2d', { willReadFrequently: true })!;

  const vuelta = async () => {
    if (parar) return;
    try {
      if (video.readyState >= 2) {
        let texto = '';
        if (detector) {
          const r = await detector.detect(video);
          texto = r[0]?.rawValue ?? '';
        } else if (jsQR) {
          const w = 480, h = Math.round((video.videoHeight / video.videoWidth) * w) || 480;
          lienzo.width = w;
          lienzo.height = h;
          ctx.drawImage(video, 0, 0, w, h);
          texto = jsQR(ctx.getImageData(0, 0, w, h).data, w, h, { inversionAttempts: 'dontInvert' })?.data ?? '';
        }
        if (texto) {
          detener();
          alLeer(texto);
          return;
        }
      }
    } catch { /* fotograma ilegible: seguimos */ }
    setTimeout(vuelta, 160);
  };
  const detener = () => {
    parar = true;
    stream.getTracks().forEach((t) => t.stop());
    video.srcObject = null;
  };
  vuelta();
  return detener;
}

/* Llamada a la API del pass. Lanza Error con el mensaje del servidor. */
export async function api<T = any>(accion: string, datos?: Record<string, unknown>, staff?: string): Promise<T> {
  const opts: RequestInit = { headers: { 'Content-Type': 'application/json', ...(staff ? { 'X-Staff': staff } : {}) } };
  let url = `/api/pass.php?a=${accion}`;
  if (datos && accion !== 'estado' && accion !== 'hoy' && accion !== 'qr') {
    opts.method = 'POST';
    opts.body = JSON.stringify(datos);
  } else if (datos) {
    url += '&' + new URLSearchParams(datos as Record<string, string>).toString();
  }
  let res: Response;
  try {
    res = await fetch(url, opts);
  } catch {
    throw new Error('Sin conexión. Prueba otra vez.');
  }
  const j = await res.json().catch(() => ({ ok: false, error: 'El servidor no responde.' }));
  if (!j.ok) throw Object.assign(new Error(j.error || 'Algo ha fallado.'), { status: res.status });
  return j;
}
