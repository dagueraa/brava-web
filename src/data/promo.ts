/* Textos de la promoción que se repiten en varias páginas (site.config → promo) */
import { siteConfig } from '../../site.config';

const p = siteConfig.promo;
const f = (s: string, conMes: boolean) =>
  new Date(`${s}T12:00:00`).toLocaleDateString('es-ES', conMes ? { day: 'numeric', month: 'long' } : { day: 'numeric' });
const mismoMes = p.desde.slice(0, 7) === p.hasta.slice(0, 7);

/** «del 23 al 27 de noviembre» (o «del 28 de noviembre al 2 de diciembre») */
export const fechasPromo = `del ${f(p.desde, !mismoMes)} al ${f(p.hasta, true)}`;
/** Versión corta para el móvil: «del 23 al 27» (si cambia de mes, «del 28 nov al 2 dic») */
export const fechasPromoCortas = mismoMes
  ? `del ${f(p.desde, false)} al ${f(p.hasta, false)}`
  : `del ${f(p.desde, true).replace(/ de (\w{3})\w*/, ' $1')} al ${f(p.hasta, true).replace(/ de (\w{3})\w*/, ' $1')}`;
