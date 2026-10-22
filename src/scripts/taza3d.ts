/* =====================================================================
 *  La taza 3D de la portada.
 *  Vaso de papel Brava (logo oficial), latte art, vapor y granos de café,
 *  con las ilustraciones oficiales del brandbook extruidas en 3D flotando.
 *  `setProgress(p)` recibe el avance del scroll (0 → 1) y la escena se
 *  coreografía sola; el puntero (o el giroscopio) inclina el conjunto.
 * ===================================================================== */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import icons from '../data/brandIcons.json';

const C = {
  brown: '#443631',
  cream: '#fef9f5',
  cream2: '#f7ede3',
  fresh: '#e7e251',
  calm: '#6cb3e3',
  kraft: '#cbbb9f', // vaso de papel de las fotos reales de Brava
  bag: '#e2c9a0',   // kraft de las bolsas del brandbook
};

const loadImg = (src: string) =>
  new Promise<HTMLImageElement>((ok, ko) => {
    const i = new Image();
    i.onload = () => ok(i);
    i.onerror = ko;
    i.src = src;
  });

/* Pinta un logo (PNG negro con alfa) del color que toque. */
function tinted(img: HTMLImageElement, color: string, w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const x = c.getContext('2d')!;
  x.drawImage(img, 0, 0, w, h);
  x.globalCompositeOperation = 'source-in';
  x.fillStyle = color;
  x.fillRect(0, 0, w, h);
  return c;
}

/* Textura del vaso: papel kraft, "brava" en vertical y el monograma bv al dorso. */
async function cupTexture(maxAniso: number) {
  const [word, mono, lock] = await Promise.all([
    loadImg('/brand/wordmark.png'),
    loadImg('/brand/monogram.png'),
    loadImg('/brand/lockup.png'),
  ]);
  const W = 2048, H = 1024;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const x = c.getContext('2d')!;
  x.fillStyle = C.kraft;
  x.fillRect(0, 0, W, H);
  // grano del papel
  const g = x.getImageData(0, 0, W, H);
  for (let i = 0; i < g.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 14;
    g.data[i] += n; g.data[i + 1] += n; g.data[i + 2] += n;
  }
  x.putImageData(g, 0, 0);
  // "brava" en vertical, leyendo de abajo arriba (como el vaso real)
  const ww = 780, wh = Math.round(ww * 686 / 2052);
  x.save();
  x.translate(W * 0.5 + wh * 0.5, H * 0.5);
  x.rotate(-Math.PI / 2);
  x.drawImage(tinted(word, C.brown, ww, wh), -ww / 2, -wh / 2 - 6, ww, wh);
  x.restore();
  // dorso: monograma + lockup
  const mw = 250, mh = Math.round(mw * 1383 / 1439);
  x.drawImage(tinted(mono, C.brown, mw, mh), W * 0.0 + 1024 * 0.0 + 60, H * 0.5 - mh / 2 - 60, mw, mh);
  x.drawImage(tinted(mono, C.brown, mw, mh), W - mw - 60, H * 0.5 - mh / 2 - 60, mw, mh);
  const lw = 300, lh = Math.round(lw * 698 / 2681);
  x.drawImage(tinted(lock, C.brown, lw, lh), W - lw - 34, H * 0.5 + mh / 2 - 30, lw, lh);
  x.drawImage(tinted(lock, C.brown, lw, lh), 34, H * 0.5 + mh / 2 - 30, lw, lh);
  // costura del vaso
  x.fillStyle = 'rgba(68,54,49,.10)';
  x.fillRect(W * 0.25 - 3, 0, 6, H);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = maxAniso;
  return t;
}

/* Latte art: crema con una rosetta dibujada a mano (procedural). */
function latteTexture() {
  const S = 1024;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d')!;
  const r = S / 2;
  const grd = x.createRadialGradient(r, r * 1.05, 20, r, r, r);
  grd.addColorStop(0, '#c99c6e');
  grd.addColorStop(0.55, '#a8754b');
  grd.addColorStop(0.86, '#7c4f33');
  grd.addColorStop(1, '#4a2f20');
  x.fillStyle = grd;
  x.fillRect(0, 0, S, S);
  // motas de crema
  for (let i = 0; i < 1400; i++) {
    const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * r * 0.95;
    x.fillStyle = `rgba(${Math.random() < 0.5 ? '230,190,140' : '90,55,35'},${Math.random() * 0.12})`;
    x.beginPath();
    x.arc(r + Math.cos(a) * d, r + Math.sin(a) * d, Math.random() * 6 + 1, 0, Math.PI * 2);
    x.fill();
  }
  x.save();
  x.shadowColor = 'rgba(250,240,225,.9)';
  x.shadowBlur = 14;
  x.fillStyle = '#f8efe2';
  // hojas de la rosetta: medias lunas apiladas que se estrechan hacia arriba
  for (let i = 0; i < 10; i++) {
    const y = 770 - i * 48, w = 380 - i * 27, h = 92 - i * 4.5;
    const wob = Math.sin(i * 1.7) * 6;
    x.beginPath();
    x.moveTo(r - w / 2 + wob, y - h * 0.15);
    x.quadraticCurveTo(r + wob, y + h * 1.25, r + w / 2 + wob, y - h * 0.15);
    x.quadraticCurveTo(r + wob, y + h * 0.3, r - w / 2 + wob, y - h * 0.15);
    x.fill();
  }
  // corazón de remate
  x.beginPath();
  x.moveTo(r, 300);
  x.bezierCurveTo(r - 90, 240, r - 60, 170, r, 205);
  x.bezierCurveTo(r + 60, 170, r + 90, 240, r, 300);
  x.fill();
  x.restore();
  // el corte final de la jarra, de arriba abajo
  x.strokeStyle = '#a8754b';
  x.lineCap = 'round';
  for (let i = 0; i < 24; i++) {
    x.lineWidth = 10 - i * 0.38;
    x.beginPath();
    x.moveTo(r, 190 + i * 24);
    x.lineTo(r, 214 + i * 24);
    x.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/* Vapor: planos con un shader de ruido que sube y se enrosca. */
function steamMaterial(seed: number) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: { value: 0 }, uSeed: { value: seed }, uAlpha: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform float uTime, uSeed, uAlpha;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a*n(p); p *= 2.03; a *= 0.5; } return v; }
      void main() {
        float t = uTime * 0.35 + uSeed * 7.0;
        float y = vUv.y;
        float x = vUv.x - 0.5 - 0.16 * sin(y * 5.5 - t * 2.4 + uSeed * 3.0) * y;
        float body = smoothstep(0.24, 0.0, abs(x) * (1.3 - y * 0.6));
        float noise = fbm(vec2(vUv.x * 3.0, y * 2.4 - t * 1.6));
        float a = body * smoothstep(0.35, 0.75, noise) * smoothstep(0.0, 0.18, y) * smoothstep(1.0, 0.45, y);
        gl_FragColor = vec4(vec3(1.0, 0.97, 0.93), a * 0.55 * uAlpha);
      }`,
  });
}

/* Grano de café: esfera achatada con la hendidura en S. */
function beanGeometry() {
  const g = new THREE.SphereGeometry(1, 28, 20);
  const p = g.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    if (v.z > 0) {
      const cx = 0.12 * Math.sin(v.y * 2.6);
      v.z -= 0.42 * Math.exp(-((v.x - cx) ** 2) / 0.012) * v.z;
    }
    p.setXYZ(i, v.x * 0.15, v.y * 0.21, v.z * 0.1);
  }
  g.computeVertexNormals();
  return g;
}

/* Ilustración oficial del brandbook → pieza 3D extruida, centrada y a escala. */
function iconMesh(name: keyof typeof icons, color: string, size: number) {
  const ic = icons[name];
  const data = new SVGLoader().parse(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ic.w} ${ic.h}"><path d="${ic.d}"/></svg>`);
  const shapes = data.paths.flatMap((p) => SVGLoader.createShapes(p));
  const k = size / Math.max(ic.w, ic.h);
  const geo = new THREE.ExtrudeGeometry(shapes, {
    depth: 0.16 / k,
    bevelEnabled: true,
    bevelThickness: 0.035 / k,
    bevelSize: 0.03 / k,
    bevelSegments: 3,
    curveSegments: 10,
  });
  geo.center();
  geo.scale(k, -k, k);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0 });
  return new THREE.Mesh(geo, mat);
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const seg = (p: number, a: number, b: number) => ease(clamp01((p - a) / (b - a)));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export async function crearTaza(canvas: HTMLCanvasElement, opts: { onReady?: () => void } = {}) {
  const small = Math.min(window.innerWidth, window.innerHeight) < 700;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: window.devicePixelRatio < 2, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.75 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.5;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const key = new THREE.DirectionalLight('#ffe8cc', 2.2);
  key.position.set(4, 6, 5);
  scene.add(key, new THREE.AmbientLight('#fff4e8', 0.35));
  const rim = new THREE.DirectionalLight(C.calm, 1.1);
  rim.position.set(-5, 2, -4);
  scene.add(rim);

  /* ---- el vaso ---- */
  const world = new THREE.Group(); // inclinación por puntero
  const rig = new THREE.Group();   // posición según scroll
  const cup = new THREE.Group();
  scene.add(world);
  world.add(rig);
  rig.add(cup);

  const H = 2.6, RT = 1, RB = 0.76;
  const wallTex = await cupTexture(renderer.capabilities.getMaxAnisotropy());
  const outer = new THREE.Mesh(
    new THREE.CylinderGeometry(RT, RB, H, 128, 1, true),
    new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.82, metalness: 0 }),
  );
  outer.rotation.y = Math.PI; // centro de la textura (u = 0,5) mirando a cámara
  const inner = new THREE.Mesh(
    new THREE.CylinderGeometry(RT * 0.975, RB * 0.975, H, 96, 1, true),
    new THREE.MeshStandardMaterial({ color: '#cbbca3', roughness: 0.9, side: THREE.BackSide }),
  );
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(RB, 64), new THREE.MeshStandardMaterial({ color: '#bfae93', roughness: 0.9 }));
  bottom.rotation.x = Math.PI / 2;
  bottom.position.y = -H / 2;
  const lip = new THREE.Mesh(new THREE.TorusGeometry(RT * 0.99, 0.038, 16, 128), new THREE.MeshStandardMaterial({ color: '#e6dccb', roughness: 0.6 }));
  lip.rotation.x = Math.PI / 2;
  lip.position.y = H / 2;
  const coffeeY = H / 2 - 0.16;
  const rAt = (y: number) => (RB + ((y + H / 2) / H) * (RT - RB)) * 0.972;
  const coffee = new THREE.Mesh(
    new THREE.CircleGeometry(rAt(coffeeY), 96),
    new THREE.MeshPhysicalMaterial({ map: latteTexture(), roughness: 0.32, clearcoat: 0.7, clearcoatRoughness: 0.18 }),
  );
  coffee.rotation.x = -Math.PI / 2;
  coffee.rotation.z = Math.PI; // la rosetta apuntando hacia el fondo, como al servirla
  coffee.position.y = coffeeY;
  cup.add(outer, inner, bottom, lip, coffee);

  // sombra de contacto suave (sin coste de sombras reales)
  const sc = document.createElement('canvas');
  sc.width = sc.height = 256;
  const sx = sc.getContext('2d')!;
  const sg = sx.createRadialGradient(128, 128, 10, 128, 128, 128);
  sg.addColorStop(0, 'rgba(20,12,8,.55)');
  sg.addColorStop(1, 'rgba(20,12,8,0)');
  sx.fillStyle = sg;
  sx.fillRect(0, 0, 256, 256);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.4), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -H / 2 - 0.02;
  rig.add(shadow);

  /* ---- vapor ---- */
  const steam = new THREE.Group();
  const steamMats: THREE.ShaderMaterial[] = [];
  for (let i = 0; i < 3; i++) {
    const m = steamMaterial(i * 1.37);
    steamMats.push(m);
    const s = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 2.6), m);
    s.position.set((i - 1) * 0.32, H / 2 + 1.25 + i * 0.08, (i - 1) * 0.1);
    steam.add(s);
  }
  rig.add(steam);

  /* ---- granos ---- */
  const nBeans = small ? 34 : 64;
  const beans = new THREE.InstancedMesh(
    beanGeometry(),
    new THREE.MeshPhysicalMaterial({ color: '#5b3826', roughness: 0.38, clearcoat: 0.45, clearcoatRoughness: 0.3 }),
    nBeans,
  );
  const beanData = Array.from({ length: nBeans }, (_, i) => ({
    a: (i / nBeans) * Math.PI * 2 + Math.random() * 0.4,
    r: 2.3 + Math.random() * 2.8,
    y: (Math.random() - 0.5) * 3.6,
    s: 0.45 + Math.random() * 0.4,
    sp: 0.08 + Math.random() * 0.12,
    rx: Math.random() * 6, ry: Math.random() * 6,
    rs: (Math.random() - 0.5) * 1.6,
  }));
  scene.add(beans);

  /* ---- ilustraciones oficiales en 3D ---- */
  const pieces: { mesh: THREE.Mesh; a: number; r: number; y: number; spin: number; bob: number }[] = [];
  const list: [keyof typeof icons, string, number][] = [
    ['croissant', C.fresh, 0.95], ['cookie', C.bag, 0.75], ['taza', C.calm, 0.8],
    ['muffin', C.fresh, 0.75], ['tostada', C.bag, 0.8], ['lechera', C.calm, 0.8],
    ['smoothie', C.fresh, 0.8], ['pan', C.bag, 1.0],
  ];
  const usados = small ? list.slice(0, 6) : list;
  usados.forEach(([name, color, size], i) => {
    const mesh = iconMesh(name, color, size);
    const a = (i / usados.length) * Math.PI * 2 + 0.35;
    pieces.push({ mesh, a, r: 2.6 + (i % 2) * 0.9, y: ((i % 3) - 1) * 1.15, spin: (i % 2 ? 1 : -1) * (0.25 + i * 0.03), bob: i * 0.9 });
    scene.add(mesh);
  });

  /* ---- cámara y coreografía ---- */
  let target = 0, prog = 0, aspect = 1;
  let px = 0, py = 0, tx = 0, ty = 0;
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), scl = new THREE.Vector3();
  const look = new THREE.Vector3();

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

  function onPointer(ev: PointerEvent) {
    tx = (ev.clientX / window.innerWidth) * 2 - 1;
    ty = (ev.clientY / window.innerHeight) * 2 - 1;
  }
  window.addEventListener('pointermove', onPointer, { passive: true });

  const clock = new THREE.Clock();
  let visible = true, raf = 0, ready = false;

  function frame() {
    raf = requestAnimationFrame(frame);
    if (!visible) return;
    const dt = Math.min(0.1, clock.getDelta());
    const t = clock.elapsedTime;
    // suavizado independiente de los FPS (igual en un móvil lento que en un PC)
    prog += (target - prog) * (1 - Math.exp(-dt * 6));
    px += (tx - px) * (1 - Math.exp(-dt * 3));
    py += (ty - py) * (1 - Math.exp(-dt * 3));
    const p = prog;
    const narrow = aspect < 0.85;
    const fit = narrow ? 1.55 / Math.max(aspect, 0.42) * 0.62 : 1; // en móvil la cámara se aleja para que quepa

    // 0–0,3: presentación girando · 0,3–0,6: cenital sobre el latte art · 0,6–1: se aparta a la derecha
    const top = seg(p, 0.28, 0.5) * (1 - seg(p, 0.62, 0.82));
    const aside = seg(p, 0.66, 0.9);
    const dist = lerp(8.4, 6.3, top) * fit;
    const elev = lerp(1.15, 8.6, top) * (narrow ? lerp(1, 1.45, top) : 1);
    // en la vista cenital miramos un poco por delante del vaso para que quede arriba y el texto respire
    const lz = top * (narrow ? 1.5 : 0.55);
    camera.position.set(Math.sin(px * 0.25) * 0.6, elev + (-py * 0.35), Math.max(0.9, dist - top * (dist - 1.2)) + lz);
    look.set(0, lerp(0.15, coffeeY, top), lz);
    camera.lookAt(look);

    rig.position.x = narrow ? 0 : lerp(0, 1.75, aside);
    rig.position.y = narrow ? lerp(1.15, 0.6, aside) : 0;
    const s = narrow ? lerp(0.86, 0.72, aside) : 1;
    rig.scale.setScalar(s);
    cup.rotation.y = Math.sin(t * 0.45) * 0.38 + p * Math.PI * 2;
    cup.rotation.z = Math.sin(t * 0.6) * 0.035 * (1 - top);
    world.rotation.x = py * 0.08;
    world.rotation.y = px * 0.18;

    steamMats.forEach((m) => { m.uniforms.uTime.value = t; m.uniforms.uAlpha.value = 1 - top * 0.85; });
    steam.quaternion.copy(camera.quaternion);
    steam.position.y = (1 - top) * 0;

    // los granos y las piezas se abren al bajar y vuelven a orbitar al final
    const burst = 1 + seg(p, 0.2, 0.45) * 0.9 - seg(p, 0.7, 1) * 0.45;
    beanData.forEach((b, i) => {
      const a = b.a + t * b.sp;
      pos.set(Math.cos(a) * b.r * burst, b.y * burst + Math.sin(t * 0.8 + i) * 0.12, Math.sin(a) * b.r * burst * 0.5 - 1.2);
      pos.x += rig.position.x * 0.6;
      e.set(b.rx + t * b.rs, b.ry + t * b.rs * 0.7, 0);
      q.setFromEuler(e);
      scl.setScalar(b.s);
      m4.compose(pos, q, scl);
      beans.setMatrixAt(i, m4);
    });
    beans.instanceMatrix.needsUpdate = true;

    pieces.forEach((pc) => {
      const a = pc.a + t * 0.07;
      pc.mesh.position.set(Math.cos(a) * pc.r * burst + rig.position.x * 0.5, pc.y * burst + Math.sin(t * 0.9 + pc.bob) * 0.18, Math.sin(a) * pc.r * burst * 0.5 - 0.8);
      pc.mesh.rotation.set(Math.sin(t * 0.5 + pc.bob) * 0.35, t * pc.spin, Math.cos(t * 0.4 + pc.bob) * 0.2);
    });

    renderer.render(scene, camera);
    if (!ready) {
      ready = true;
      opts.onReady?.();
    }
  }
  frame();

  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0 });
  io.observe(canvas);

  return {
    setProgress(p: number) { target = clamp01(p); },
    setTilt(x: number, y: number) { tx = x; ty = y; },
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointer);
      renderer.dispose();
    },
  };
}
