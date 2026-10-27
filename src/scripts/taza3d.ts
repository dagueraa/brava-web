/* =====================================================================
 *  La taza 3D de la portada, en clave de foto de producto.
 *  Vaso de papel Brava (logo oficial) sobre una superficie con luz de
 *  estudio, sombras reales, latte art, vapor y unos granos apoyados al pie.
 *  `setProgress(p)` recibe el avance del scroll (0 → 1) y la escena se
 *  coreografía sola; el puntero (o el giroscopio) mueve un poco la cámara.
 * ===================================================================== */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const C = {
  brown: '#443631',
  kraft: '#cbbb9f', // vaso de papel de las fotos reales de Brava
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
  // papel: base kraft con un degradado suave de fabricación
  const g0 = x.createLinearGradient(0, 0, 0, H);
  g0.addColorStop(0, '#d3c4a9');
  g0.addColorStop(1, '#c4b397');
  x.fillStyle = g0;
  x.fillRect(0, 0, W, H);
  const g = x.getImageData(0, 0, W, H);
  for (let i = 0; i < g.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 10;
    g.data[i] += n; g.data[i + 1] += n; g.data[i + 2] += n;
  }
  x.putImageData(g, 0, 0);
  // tinta: un pelín transparente para que el papel se note debajo
  x.globalAlpha = 0.93;
  const ww = 780, wh = Math.round(ww * 686 / 2052);
  x.save();
  x.translate(W * 0.5 + wh * 0.5, H * 0.5);
  x.rotate(-Math.PI / 2);
  x.drawImage(tinted(word, C.brown, ww, wh), -ww / 2, -wh / 2 - 6, ww, wh);
  x.restore();
  const mw = 250, mh = Math.round(mw * 1383 / 1439);
  const lw = 300, lh = Math.round(lw * 698 / 2681);
  for (const cx of [60 + mw / 2, W - 60 - mw / 2]) {
    x.drawImage(tinted(mono, C.brown, mw, mh), cx - mw / 2, H * 0.5 - mh / 2 - 60, mw, mh);
    x.drawImage(tinted(lock, C.brown, lw, lh), cx - lw / 2 + 25, H * 0.5 + mh / 2 - 30, lw, lh);
  }
  x.globalAlpha = 1;
  // costura del vaso
  const seam = x.createLinearGradient(W * 0.25 - 10, 0, W * 0.25 + 10, 0);
  seam.addColorStop(0, 'rgba(68,54,49,0)');
  seam.addColorStop(0.5, 'rgba(68,54,49,.14)');
  seam.addColorStop(1, 'rgba(68,54,49,0)');
  x.fillStyle = seam;
  x.fillRect(W * 0.25 - 10, 0, 20, H);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = maxAniso;
  return t;
}

/* Relieve del papel: fibras finas + las líneas del pegado arriba y abajo. */
function paperBump() {
  const W = 1024, H = 512;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const x = c.getContext('2d')!;
  x.fillStyle = '#808080';
  x.fillRect(0, 0, W, H);
  for (let i = 0; i < 9000; i++) {
    const v = 110 + Math.random() * 40;
    x.strokeStyle = `rgba(${v},${v},${v},.35)`;
    x.lineWidth = Math.random() * 1.2;
    const px = Math.random() * W, py = Math.random() * H, a = Math.random() * Math.PI;
    x.beginPath();
    x.moveTo(px, py);
    x.lineTo(px + Math.cos(a) * 6, py + Math.sin(a) * 6);
    x.stroke();
  }
  // acanaladuras del fondo y del borde superior
  for (const y of [10, 18, 26, H - 14, H - 24]) {
    x.fillStyle = 'rgba(40,40,40,.55)';
    x.fillRect(0, y, W, 3);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
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
  for (let i = 0; i < 10; i++) {
    const y = 770 - i * 48, w = 380 - i * 27, h = 92 - i * 4.5;
    const wob = Math.sin(i * 1.7) * 6;
    x.beginPath();
    x.moveTo(r - w / 2 + wob, y - h * 0.15);
    x.quadraticCurveTo(r + wob, y + h * 1.25, r + w / 2 + wob, y - h * 0.15);
    x.quadraticCurveTo(r + wob, y + h * 0.3, r - w / 2 + wob, y - h * 0.15);
    x.fill();
  }
  x.beginPath();
  x.moveTo(r, 300);
  x.bezierCurveTo(r - 90, 240, r - 60, 170, r, 205);
  x.bezierCurveTo(r + 60, 170, r + 90, 240, r, 300);
  x.fill();
  x.restore();
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
        float t = uTime * 0.3 + uSeed * 7.0;
        float y = vUv.y;
        float x = vUv.x - 0.5 - 0.14 * sin(y * 5.0 - t * 2.2 + uSeed * 3.0) * y;
        float body = smoothstep(0.22, 0.0, abs(x) * (1.25 - y * 0.6));
        float noise = fbm(vec2(vUv.x * 3.0, y * 2.2 - t * 1.4));
        float a = body * smoothstep(0.38, 0.8, noise) * smoothstep(0.0, 0.2, y) * smoothstep(1.0, 0.4, y);
        gl_FragColor = vec4(vec3(1.0, 0.97, 0.93), a * 0.35 * uAlpha);
      }`,
  });
}

/* Grano de café tostado: elipsoide con la hendidura en S en la cara plana. */
function beanGeometry() {
  const g = new THREE.SphereGeometry(1, 48, 32);
  const p = g.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    // cara plana (z > 0) aplastada y con el surco
    if (v.z > 0) {
      v.z *= 0.55;
      const cx = 0.1 * Math.sin(v.y * 2.8);
      v.z -= 0.38 * Math.exp(-((v.x - cx) ** 2) / 0.008) * Math.max(0, 1 - Math.abs(v.y) * 0.9);
    }
    p.setXYZ(i, v.x * 0.15, v.y * 0.2, v.z * 0.11);
  }
  g.computeVertexNormals();
  return g;
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const seg = (p: number, a: number, b: number) => ease(clamp01((p - a) / (b - a)));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export async function crearTaza(canvas: HTMLCanvasElement, opts: { onReady?: () => void } = {}) {
  const small = Math.min(window.innerWidth, window.innerHeight) < 700;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  // Resolución contenida (la diferencia no se ve y el rendimiento sí); baja sola si el equipo va justo.
  let dpr = Math.min(window.devicePixelRatio, 1.5);
  renderer.setPixelRatio(dpr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.type = THREE.VSMShadowMap; // sombra difusa, de caja de luz

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.42;

  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100);

  // luz de estudio: principal cálida desde la izquierda, relleno suave y un contraluz que recorta el borde
  const key = new THREE.DirectionalLight('#ffe6c7', 2.6);
  key.position.set(-4.5, 6.5, 4.5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = key.shadow.camera.bottom = -3.5;
  key.shadow.camera.right = key.shadow.camera.top = 3.5;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 20;
  key.shadow.bias = -0.0008;
  key.shadow.normalBias = 0.02;
  key.shadow.radius = 14;
  key.shadow.blurSamples = 12;
  const back = new THREE.DirectionalLight('#fff3e6', 1.6);
  back.position.set(3.5, 4, -6);
  scene.add(back, new THREE.HemisphereLight('#fff1e2', '#2c211d', 0.45));

  /* ---- el vaso ---- */
  const world = new THREE.Group();
  const rig = new THREE.Group();   // vaso + granos + sombras: se mueven juntos
  const cup = new THREE.Group();
  scene.add(world);
  world.add(rig);
  rig.add(cup);
  // la luz principal va dentro del grupo del vaso: la sombra es la misma esté donde esté
  rig.add(key, key.target);
  key.target.position.set(0, 0, 0);

  const H = 2.6, RT = 1, RB = 0.76;
  const bump = paperBump();
  const wall = new THREE.MeshPhysicalMaterial({
    map: await cupTexture(renderer.capabilities.getMaxAnisotropy()),
    bumpMap: bump,
    bumpScale: 1.4,
    roughness: 0.78,
    sheen: 0.35,
    sheenRoughness: 0.8,
    sheenColor: new THREE.Color('#fff4e2'),
  });
  const outer = new THREE.Mesh(new THREE.CylinderGeometry(RT, RB, H, 160, 1, true), wall);
  outer.rotation.y = Math.PI; // centro de la textura (u = 0,5) mirando a cámara
  outer.castShadow = true; // el vaso es redondo: su sombra no cambia al girar
  const inner = new THREE.Mesh(
    new THREE.CylinderGeometry(RT * 0.975, RB * 0.975, H, 96, 1, true),
    new THREE.MeshStandardMaterial({ color: '#d8ccb6', roughness: 0.9, side: THREE.BackSide }),
  );
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(RB, 64), new THREE.MeshStandardMaterial({ color: '#b9a88c', roughness: 0.9 }));
  bottom.rotation.x = Math.PI / 2;
  bottom.position.y = -H / 2 + 0.06;
  // borde enrollado del vaso
  const lip = new THREE.Mesh(new THREE.TorusGeometry(RT * 0.988, 0.045, 20, 160), new THREE.MeshPhysicalMaterial({ color: '#e4d8c3', roughness: 0.55, sheen: 0.3 }));
  lip.rotation.x = Math.PI / 2;
  lip.position.y = H / 2;
  lip.castShadow = true;
  const coffeeY = H / 2 - 0.16;
  const rAt = (y: number) => (RB + ((y + H / 2) / H) * (RT - RB)) * 0.972;
  const coffee = new THREE.Mesh(
    new THREE.CircleGeometry(rAt(coffeeY), 128),
    new THREE.MeshPhysicalMaterial({ map: latteTexture(), roughness: 0.28, clearcoat: 0.8, clearcoatRoughness: 0.15 }),
  );
  coffee.rotation.x = -Math.PI / 2;
  coffee.rotation.z = Math.PI;
  coffee.position.y = coffeeY;
  cup.add(outer, inner, bottom, lip, coffee);

  /* ---- superficie: solo recibe sombras (el fondo lo pone la web) ---- */
  const floorY = -H / 2;
  const catcher = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.ShadowMaterial({ opacity: 0.42, color: '#120b08' }));
  catcher.rotation.x = -Math.PI / 2;
  catcher.position.y = floorY;
  catcher.receiveShadow = true;
  rig.add(catcher);
  // oclusión de contacto: oscurece justo el pie del vaso
  const sc = document.createElement('canvas');
  sc.width = sc.height = 256;
  const sx = sc.getContext('2d')!;
  const sg = sx.createRadialGradient(128, 128, 30, 128, 128, 128);
  sg.addColorStop(0, 'rgba(10,6,4,.7)');
  sg.addColorStop(0.55, 'rgba(10,6,4,.25)');
  sg.addColorStop(1, 'rgba(10,6,4,0)');
  sx.fillStyle = sg;
  sx.fillRect(0, 0, 256, 256);
  const ao = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
  ao.rotation.x = -Math.PI / 2;
  ao.position.y = floorY + 0.004;
  rig.add(ao);

  /* ---- granos apoyados al pie del vaso, como en una foto de producto ---- */
  const beanMat = new THREE.MeshPhysicalMaterial({ roughness: 0.42, clearcoat: 0.5, clearcoatRoughness: 0.35 });
  const beanSpots: [number, number, number][] = [
    // [ángulo, distancia, escala] — delante y a los lados; nunca detrás tapando el logo
    [0.25, 1.35, 1], [0.55, 1.75, 0.92], [0.9, 1.25, 1.05], [-0.15, 1.55, 0.95],
    [-0.5, 1.2, 1], [-0.85, 1.85, 0.9], [1.35, 1.6, 0.95], [-1.3, 1.45, 1.02],
    [0.05, 2.15, 0.88], [1.0, 2.25, 0.9], [-0.6, 2.4, 0.86],
  ];
  const spots = small ? beanSpots.slice(0, 8) : beanSpots;
  const beans = new THREE.InstancedMesh(beanGeometry(), beanMat, spots.length);
  beans.castShadow = true;
  beans.receiveShadow = true;
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), scl = new THREE.Vector3();
  const tonos = ['#3b2216', '#45291b', '#352015', '#4d2f1f'];
  spots.forEach(([a, d, s], i) => {
    const caraArriba = i % 3 !== 0; // unos enseñan el surco y otros el lomo
    // apoyado sobre el lomo redondo (surco arriba) o sobre la cara plana
    pos.set(Math.sin(a) * d, floorY + (caraArriba ? 0.11 : 0.11 * 0.55) * s, Math.cos(a) * d);
    e.set(caraArriba ? -Math.PI / 2 : Math.PI / 2, 0, i * 1.9);
    q.setFromEuler(e);
    scl.setScalar(s);
    m4.compose(pos, q, scl);
    beans.setMatrixAt(i, m4);
    beans.setColorAt(i, new THREE.Color(tonos[i % tonos.length]));
  });
  rig.add(beans);

  /* ---- vapor ---- */
  const steam = new THREE.Group();
  const steamMats: THREE.ShaderMaterial[] = [];
  for (let i = 0; i < 3; i++) {
    const m = steamMaterial(i * 1.37);
    steamMats.push(m);
    const s = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.4), m);
    s.position.set((i - 1) * 0.28, 1.15 + i * 0.06, (i - 1) * 0.1);
    steam.add(s);
  }
  steam.position.y = H / 2;
  rig.add(steam);

  /* ---- cámara y coreografía ---- */
  let target = 0, prog = 0, aspect = 1;
  let px = 0, py = 0, tx = 0, ty = 0;
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
    const fit = narrow ? Math.min(1.9, 0.95 / Math.max(aspect, 0.42)) : 1;

    // 0–0,3: presentación · 0,3–0,6: cenital sobre el latte art · 0,6–1: vuelta al plano de producto
    const top = seg(p, 0.28, 0.5) * (1 - seg(p, 0.62, 0.82));
    const dist = lerp(10.6, 8, top) * fit;
    const elev = lerp(1.6, 10.6, top) * (narrow ? lerp(1, 1.45, top) : 1);
    const lz = top * (narrow ? 1.7 : 0.8);
    camera.position.set(px * 0.5 * (1 - top), elev - py * 0.3 * (1 - top), Math.max(1, dist - top * (dist - 1.3)) + lz);
    look.set(0, lerp(-0.1, coffeeY, top), lz);
    camera.lookAt(look);

    // en escritorio el vaso vive a la derecha (el texto, a la izquierda); en la vista cenital se centra
    rig.position.x = narrow ? 0 : lerp(1.75, 0, top);
    rig.position.y = narrow ? lerp(1.45, 1.05, seg(p, 0.66, 0.9)) + Math.max(0, 0.52 - aspect) * 2 : 0;
    rig.scale.setScalar(narrow ? 1.05 : 1);
    cup.rotation.y = Math.sin(t * 0.4) * 0.22 + p * Math.PI * 2;

    steamMats.forEach((m) => { m.uniforms.uTime.value = t; m.uniforms.uAlpha.value = 1 - top * 0.85; });
    steam.quaternion.copy(camera.quaternion);

    renderer.render(scene, camera);
    // si van varios fotogramas lentos seguidos, bajamos resolución (hasta 1x)
    lentos = dt > 0.024 ? lentos + 1 : Math.max(0, lentos - 1);
    if (lentos > 40 && dpr > 1) {
      dpr = Math.max(1, dpr - 0.25);
      renderer.setPixelRatio(dpr);
      resize();
      lentos = 0;
    }
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
