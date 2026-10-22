/* =====================================================================
 *  Pedido para llevar: cómo se añade cada cosa de la carta.
 *  Las opciones salen SOLO de lo que dice la carta (menu.ts). Si la carta
 *  no concreta (p. ej. el sabor del sirope), se pide como nota libre.
 * ===================================================================== */
import { categorias, type MenuItem } from './menu';

export interface Anadible {
  id: string;
  nombre: string;           // como saldrá en el mensaje
  precio: number | null;    // céntimos; null = precio en tienda (vitrina)
  opciones?: { titulo: string; valores: string[] };
  extras?: Extra[];
  pista?: string;           // texto de ayuda para la nota (cuando la carta deja elegir sin decir qué)
}

export interface Extra { nombre: string; precio: number; valores?: string[] }

export const centimos = (p?: string | null) =>
  p ? Math.round(parseFloat(p.replace('+', '').replace(',', '.')) * 100) : null;

const slug = (t: string) =>
  t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/* Opciones que la propia carta enumera */
const OPCIONES: Record<string, Anadible['opciones']> = {
  'Desayuno Brava': { titulo: 'Para acompañar', valores: ['Croissant', 'Napolitana'] },
  'Capricho Brava': { titulo: 'Para acompañar', valores: ['Cookie de pistacho', 'Dubai', 'Brownie'] },
  'Iced Latte Macchiato a elegir': { titulo: 'Sabor', valores: ['Caramelo salado', 'Vainilla', 'Avellana tostada', 'Pistacho'] },
  'Bebida vegetal': { titulo: 'Bebida', valores: ['Coco', 'Arroz', 'Avena', 'Soja', 'Almendra'] },
  'Adaptógenos': { titulo: 'Adaptógeno', valores: ['Maca', 'Ashwagandha', 'Espirulina', 'Açaí'] },
};
const PISTAS: Record<string, string> = {
  'Iced Matcha Latte a elegir': '¿Cuál quieres?',
  'Sirope de sabor': '¿De qué sabor?',
  'Sin Gluten': '¿Qué te apetece? Te decimos lo que hay hoy',
  'Vegano': '¿Qué te apetece? Te decimos lo que hay hoy',
  'Cookies': '¿De cuál? Te decimos las de hoy',
  'Hojaldres': '¿De cuál? Te decimos los de hoy',
};

/* Extras de bebida: los del apartado «Extras» de Drinks, con sus tipos si la carta los da
   (bebida vegetal: coco, arroz…; adaptógenos: maca, ashwagandha…). */
const apartadoExtras = categorias.find((c) => c.id === 'drinks')?.subsecciones?.find((s) => s.titulo === 'Extras');
export const extrasBebida: Extra[] = (apartadoExtras?.items ?? []).map((i) => ({
  nombre: i.nombre,
  precio: centimos(i.precio)!,
  valores: OPCIONES[i.nombre]?.valores,
}));
/* Apartados de Drinks donde se ofrecen esos extras (todas las bebidas: la carta no los limita) */
export const APARTADOS_BEBIDA = ['Clásicos', 'Latte Macchiato Especiales', 'Tés e infusiones', 'Matcha', 'Batidos funcionales'];

/* contexto: subsección de la carta, para que el mensaje no sea ambiguo
   ("Vainilla" → "Latte macchiato Vainilla"; "Bebida vegetal" → "Extra: Bebida vegetal") */
export function anadible(item: MenuItem, contexto = '', extraCombo?: Extra): Anadible {
  let nombre = item.nombre.replace(/\s+a elegir$/i, ''); // lo elegido va entre paréntesis o en la nota
  if (contexto === 'Latte Macchiato Especiales' && !/latte|brava coffee/i.test(nombre)) nombre = `Latte macchiato ${nombre}`;
  if (contexto === 'Extras') nombre = `Extra: ${nombre}`;
  return {
    id: slug(`${contexto}-${item.nombre}`),
    nombre,
    precio: centimos(item.precio),
    opciones: OPCIONES[item.nombre],
    extras: extraCombo ? [extraCombo] : APARTADOS_BEBIDA.includes(contexto) ? extrasBebida : undefined,
    pista: PISTAS[item.nombre],
  };
}

/* "Opcional: Añade Zumo natural por +2,80 €" → extra para los combos */
export function extraDeNota(nota?: string) {
  const m = nota?.match(/A[ñn]ade\s+(.+?)\s+por\s+\+?([\d,]+)/i);
  return m ? { nombre: m[1].trim(), precio: centimos(m[2])! } : undefined;
}
