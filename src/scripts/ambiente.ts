/* Ambiente de Halloween generado en el navegador (sin archivos de audio):
   viento que va y viene, un fondo grave muy suave y un búho de vez en cuando.
   Solo suena si la persona lo activa. */
export function crearAmbiente() {
  const AC = window.AudioContext || (window as any).webkitAudioContext;
  const ctx: AudioContext = new AC();
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  // viento: ruido filtrado con un filtro que se mueve despacio
  const len = ctx.sampleRate * 4;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let b = 0;
  for (let i = 0; i < len; i++) { b = (b + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = b * 3.5; } // ruido marrón
  const ruido = ctx.createBufferSource();
  ruido.buffer = buf;
  ruido.loop = true;
  const filtro = ctx.createBiquadFilter();
  filtro.type = 'bandpass';
  filtro.frequency.value = 500;
  filtro.Q.value = 0.8;
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.07;
  const lfoG = ctx.createGain();
  lfoG.gain.value = 320;
  lfo.connect(lfoG).connect(filtro.frequency);
  const vientoG = ctx.createGain();
  vientoG.gain.value = 0.55;
  const lfo2 = ctx.createOscillator();
  lfo2.frequency.value = 0.11;
  const lfo2G = ctx.createGain();
  lfo2G.gain.value = 0.3;
  lfo2.connect(lfo2G).connect(vientoG.gain);
  ruido.connect(filtro).connect(vientoG).connect(master);

  // fondo grave (dos notas casi iguales que "laten")
  const dron = ctx.createGain();
  dron.gain.value = 0.05;
  [55, 55.6, 82.4].forEach((f) => {
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.value = f;
    o.connect(dron);
    o.start();
  });
  dron.connect(master);

  ruido.start();
  lfo.start();
  lfo2.start();

  // búho: dos ululatos con la frecuencia cayendo
  let timer = 0;
  const buho = () => {
    const t0 = ctx.currentTime + 0.05;
    [0, 0.55].forEach((dt, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(440 - i * 25, t0 + dt);
      o.frequency.exponentialRampToValueAtTime(360 - i * 25, t0 + dt + 0.42);
      g.gain.setValueAtTime(0, t0 + dt);
      g.gain.linearRampToValueAtTime(0.07, t0 + dt + 0.06);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dt + 0.5);
      o.connect(g).connect(master);
      o.start(t0 + dt);
      o.stop(t0 + dt + 0.55);
    });
    timer = window.setTimeout(buho, 9000 + Math.random() * 9000);
  };

  return {
    async encender() {
      await ctx.resume();
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 2);
      clearTimeout(timer);
      timer = window.setTimeout(buho, 3500);
    },
    apagar() {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
      clearTimeout(timer);
      setTimeout(() => ctx.suspend(), 700);
    },
  };
}
