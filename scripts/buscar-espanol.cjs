// Busca textos en español que se hayan quedado en la web inglesa (dist/en).
// Uso: npm run build && node scripts/buscar-espanol.cjs
// Lista textos visibles y atributos (alt, aria-label, placeholder, title) con pinta de español.
const fs = require('fs');
const path = require('path');
const DIST = path.join(__dirname, '..', 'dist', 'en');

// Lo que puede quedarse en español a propósito (nombres propios, nombres de la carta, avisos a Brava)
const PERMITIDO = [
  /La Ñora/g, /Calle (Mayor|Olivo)/g, /Café con Leche/g, /Bombón/g, /Napolitana/g, /Manchado/g,
  /Universe of God/g, /Entre Musgo/g, /España/g, /Agencia Española/g, /Lucía/g, /Açaí|açaí/g,
  /Pedido desde la web en inglés/g, /Spanish version/g, /Español/g, /Administración/g,
];
const ES = /[áéíóúñ¿¡]|\b(el|la|los|las|del|para|con|por|una|tu|tus|nuestro|nuestra|pedido|carta|añadir|ver|hoy|cerrado|abierto|horario|llevar|recoger|cafés?)\b/i;

const hallados = new Map();
function revisar(file) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
  const textos = [];
  for (const m of html.matchAll(/\b(alt|aria-label|placeholder|title|content)="([^"]+)"/g)) textos.push(`[${m[1]}] ${m[2]}`);
  for (const m of html.replace(/<[^>]+>/g, '\n').split('\n')) { const t = m.trim(); if (t) textos.push(t); }
  for (let t of textos) {
    let limpio = t;
    for (const p of PERMITIDO) limpio = limpio.replace(p, '');
    if (/\[lang="es"\]/.test(t)) continue;
    if (ES.test(limpio)) {
      const k = t.slice(0, 160);
      if (!hallados.has(k)) hallados.set(k, new Set());
      hallados.get(k).add(path.relative(DIST, file));
    }
  }
}
(function andar(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) andar(p);
    else if (f.endsWith('.html')) revisar(p);
  }
})(DIST);
for (const [t, fs_] of hallados) console.log(`${t}\n    → ${[...fs_].join(', ')}`);
console.log(`\n${hallados.size} textos sospechosos`);
