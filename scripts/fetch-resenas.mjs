/* =====================================================================
 *  Trae las reseñas reales de Google y las vuelca a src/data/resenas.json.
 *  Se ejecuta automáticamente antes de cada build (npm "prebuild").
 *
 *  Requiere:
 *   - Variable de entorno  GOOGLE_PLACES_API_KEY  (API key con Places API)
 *   - Place ID: variable  GOOGLE_PLACE_ID  o el campo `google.placeId` de site.config.ts
 *
 *  Si falta cualquiera de los dos, NO toca el archivo y sale sin error
 *  (la web sigue mostrando lo que haya en resenas.json: ejemplos o tus reseñas).
 * ===================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'src', 'data', 'resenas.json');

const log = (m) => console.log(`[reseñas] ${m}`);

async function main() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  // Place ID y modo: env o, si no, los leemos de site.config.ts
  let placeId = process.env.GOOGLE_PLACE_ID;
  let mode = process.env.REVIEWS_MODE;
  try {
    const cfg = fs.readFileSync(path.join(__dirname, '..', 'site.config.ts'), 'utf8');
    if (!placeId) {
      const m = cfg.match(/placeId:\s*'([^']*)'/);
      if (m) placeId = m[1];
    }
    if (!mode) {
      const mm = cfg.match(/reviewsMode:\s*'([^']*)'/);
      if (mm) mode = mm[1];
    }
  } catch {}
  mode = mode === 'full' ? 'full' : 'meta'; // por defecto: conserva las reseñas elegidas

  if (!apiKey || !placeId) {
    log('Sin GOOGLE_PLACES_API_KEY o Place ID → se mantiene resenas.json actual (no se actualiza).');
    return;
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=reviews,rating,user_ratings_total` +
    `&reviews_sort=newest&language=es&key=${apiKey}`;

  const res = await fetch(url);
  const json = await res.json();
  if (json.status !== 'OK') {
    log(`Google respondió ${json.status} (${json.error_message || 'sin detalle'}) → no se actualiza.`);
    return;
  }

  const rating = json.result.rating ?? 5;
  const total = json.result.user_ratings_total ?? 0;

  // Modo 'meta': solo actualiza nota y total; conserva las reseñas elegidas a mano.
  if (mode === 'meta') {
    let current = { items: [], source: 'google' };
    try {
      current = JSON.parse(fs.readFileSync(OUT, 'utf8'));
    } catch {}
    const payload = {
      source: 'google',
      updatedAt: new Date().toISOString(),
      rating,
      total,
      items: current.items ?? [],
    };
    fs.writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
    log(`(meta) Actualizados nota ${rating} y total ${total}; se conservan ${payload.items.length} reseñas elegidas.`);
    return;
  }

  // Modo 'full': sustituye también las reseñas por las de Google (máx. 5).
  const reviews = (json.result.reviews || [])
    .filter((r) => (r.text || '').trim().length > 0)
    .map((r) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text.trim(),
      relativeTime: r.relative_time_description || '',
      profilePhoto: r.profile_photo_url || '',
    }));

  if (!reviews.length) {
    log('Google no devolvió reseñas con texto → se mantiene el archivo actual.');
    return;
  }

  const payload = {
    source: 'google',
    updatedAt: new Date().toISOString(),
    rating,
    total: total || reviews.length,
    items: reviews,
  };
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  log(`(full) Actualizadas ${reviews.length} reseñas reales de Google (rating ${payload.rating}, ${payload.total} en total).`);
}

main().catch((e) => {
  // Nunca rompemos el build por las reseñas
  console.log(`[reseñas] Aviso: no se pudieron actualizar (${e.message}). Se mantiene resenas.json.`);
});
