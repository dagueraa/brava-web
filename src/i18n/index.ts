/* =====================================================================
 *  Idiomas de la web: español (/) e inglés (/en/).
 *  Cada página está UNA sola vez en src/pages/[...lang]/ y se genera dos veces,
 *  así que lo que cambie en la carta o en site.config cambia en los dos idiomas.
 *  - En el código de una página o componente:  const { t, tr, l } = useLang(Astro.url)
 *      t('Hola', 'Hello')   → el texto en el idioma de la página
 *      tr('Pan blanco')     → traducción de un texto de la carta (src/i18n/carta-en.ts)
 *      l('/carta')          → el enlace en el idioma de la página (/en/carta)
 *  - En los <script>: document.documentElement.lang === 'en'
 * ===================================================================== */
import { CARTA_EN } from './carta-en';

export type Lang = 'es' | 'en';

/** Rutas que existen en los dos idiomas (la inglesa es la misma con /en delante) */
export const RUTAS_BILINGUES = ['/', '/carta', '/to-go', '/brava-pass', '/historia', '/local', '/contacto', '/black-week', '/comparte', '/aviso-legal', '/privacidad', '/cookies'];

/** Para el getStaticPaths de las páginas de src/pages/[...lang]/ */
export const rutasIdioma = () => [{ params: { lang: undefined } }, { params: { lang: 'en' } }];

export const getLang = (url: URL): Lang => (/^\/en(\/|$)/.test(url.pathname) ? 'en' : 'es');

const sinBarra = (p: string) => p.replace(/\/+$/, '') || '/';
/** Ruta española de cualquier ruta (/en/carta/ → /carta) */
export const rutaEs = (p: string) => sinBarra(p.replace(/^\/en(?=\/|$)/, '') || '/');
/** Ruta en un idioma a partir de la española */
export const rutaEn = (lang: Lang, p: string) => {
  if (lang === 'es') return p;
  const [base, resto = ''] = p.split(/(?=[#?])/);
  if (!RUTAS_BILINGUES.includes(sinBarra(base))) return p; // /promo/…, /barra, enlaces de fuera
  return (base === '/' ? '/en/' : `/en${base}`) + resto;
};

/** Traducción de un texto de la carta; si falta, se queda en español */
export const trCarta = (s: string | undefined, lang: Lang) => (s && lang === 'en' ? CARTA_EN[s] ?? s : s);

export function useLang(url: URL) {
  const lang = getLang(url);
  const en = lang === 'en';
  return {
    lang,
    en,
    t: <T>(es: T, ing: T): T => (en ? ing : es),
    tr: <S extends string | undefined>(s: S) => trCarta(s, lang) as S,
    l: (href: string) => (href.startsWith('/') ? rutaEn(lang, href) : href),
  };
}

/* Fechas y días */
export const DIAS: Record<string, { es: string; en: string }> = {
  lunes: { es: 'Lunes', en: 'Monday' }, martes: { es: 'Martes', en: 'Tuesday' }, miercoles: { es: 'Miércoles', en: 'Wednesday' },
  jueves: { es: 'Jueves', en: 'Thursday' }, viernes: { es: 'Viernes', en: 'Friday' }, sabado: { es: 'Sábado', en: 'Saturday' }, domingo: { es: 'Domingo', en: 'Sunday' },
};
/** «8:00–14:00 · 17:00–20:00» se queda igual; «Cerrado» → «Closed» */
export const horas = (h: string, lang: Lang) => (lang === 'en' && h === 'Cerrado' ? 'Closed' : h);
