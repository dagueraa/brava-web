/* =====================================================================
 *  BRAVA — Reseñas
 * ---------------------------------------------------------------------
 *  Lee de `resenas.json`. Ese archivo se rellena de dos formas:
 *   1) AUTOMÁTICA: el script `scripts/fetch-resenas.mjs` trae las reseñas
 *      reales de Google (Place ID + GOOGLE_PLACES_API_KEY) en cada build.
 *   2) MANUAL: editas `resenas.json` con tus reseñas reales.
 *  Mientras `source` sea "ejemplos", se muestran ejemplos marcados.
 * ===================================================================== */
import data from './resenas.json';

export interface Resena {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
  profilePhoto?: string;
}

export const resenas: Resena[] = (data.items ?? []) as Resena[];
export const resenasMeta = {
  source: data.source ?? 'ejemplos',
  rating: Number(data.rating) || 5,
  total: Number(data.total) || 0,
  updatedAt: data.updatedAt ?? '',
};
export const sonEjemplos = resenasMeta.source === 'ejemplos';
