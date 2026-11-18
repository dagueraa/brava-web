// ¿Qué textos de la carta no tienen inglés? Uso: node scripts/carta-sin-traducir.mjs
// Mira src/data/menu.ts y src/i18n/carta-en.ts. Los nombres que son iguales en inglés
// (Espresso, Fit Bagel…) van en MISMO_EN, abajo, para que no salgan.
import { categorias, alergenos } from '../src/data/menu.ts';
import { CARTA_EN } from '../src/i18n/carta-en.ts';

const MISMO_EN = new Set([
  'Combos', 'Drinks', 'Brunch', 'Treats', 'Extras', 'Matcha',
  'Espresso', 'Americano', 'Cortado', 'Cappuccino', 'Flat White', 'Iced Latte', 'Brava Coffee',
  'Blue Matcha', 'Golden Milk', 'Pink Latte', 'Uve Latte', 'English Breakfast', 'Earl Grey', 'Matcha Latte',
  'Iced Brava', 'Fresh Lime', 'Golden Boost', 'Deep Green', 'Berry Blast', 'Sweet Berry', 'Green Power',
  'Salmone Brioche', 'Brava Brioche', 'Mortadella Bagel', 'Salmone Bagel', 'Fit Bagel', 'Focaccia Pompeyana',
  'Focaccia Especial', 'Savori Focaccia', 'Focaccia Formaggiosa', 'Focaccia Serrana', 'Focaccia Power', 'Piadina Bikini',
  'Pistachio Brioche', 'Nutella Brioche', 'Focaccia Lotus', 'Brava Pop', 'Cookies',
]);

const textos = new Set([alergenos]);
const poner = (s) => s && textos.add(s);
for (const c of categorias) {
  poner(c.titulo); poner(c.nota);
  for (const i of c.items ?? []) { poner(i.nombre); poner(i.desc); }
  for (const s of c.subsecciones ?? []) { poner(s.titulo); poner(s.nota); for (const i of s.items) { poner(i.nombre); poner(i.desc); } }
  if (c.tostadas) { poner(c.tostadas.titulo); c.tostadas.columnas.forEach(poner); [...c.tostadas.bases, ...c.tostadas.toppings].forEach((r) => poner(r.nombre)); }
  if (c.especiales) { poner(c.especiales.titulo); for (const i of c.especiales.items) { poner(i.nombre); poner(i.desc); } }
  if (c.horneado) { poner(c.horneado.titulo); poner(c.horneado.intro); for (const i of c.horneado.items) { poner(i.nombre); poner(i.desc); } }
}
const faltan = [...textos].filter((s) => !(s in CARTA_EN) && !MISMO_EN.has(s));
if (faltan.length) {
  console.log(`Faltan ${faltan.length} textos en src/i18n/carta-en.ts (en la web inglesa salen en español):\n`);
  faltan.forEach((s) => console.log(`  '${s}': '',`));
  process.exitCode = 1;
} else console.log(`La carta está entera en inglés (${textos.size} textos).`);
