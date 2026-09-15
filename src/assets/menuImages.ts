/* Fotografías reales de los menús oficiales de BRAVA. Las nuevas focaccias y
   treats se extrajeron como imágenes originales del último PDF impreso; el resto
   sigue la versión anterior cuando el producto y la foto coinciden.
   Astro las optimiza a WebP durante el build. */
import type { ImageMetadata } from 'astro';

import cafeTeal from './menu/cafe-teal.png';
import cafeAmarillo from './menu/cafe-amarillo.png';
import cafeArt from './menu/cafe-art.png';
import icedBrava from './menu/iced-brava.png';
import blueMatcha from './menu/blue-matcha.png';
import croissant from './menu/croissant.png';
import cookie from './menu/cookie.png';
import palmeras from './menu/palmeras.png';
import empanada from './menu/empanada.png';
import bagel from './menu/bagel.png';
import tostadaSalmon from './menu/tostada-salmon.png';
import tostadaAguacate from './menu/tostada-aguacate.png';
import panSemillas from './menu/pan-semillas.png';
import tostadasTrio from './menu/tostadas-trio.png';
// Fotos enmarcadas de Drinks (recorte exacto del menú sobre crema)
import drinksClasicos from './menu/drinks-clasicos.png';
import drinksBatidos from './menu/drinks-batidos.png';
import drinksTes from './menu/drinks-tes.png';
// Especiales y horneado — recortes LIMPIOS del PDF (producto sobre crema, sin knockout)
import espSalmoneBrioche from './menu/esp-salmone-brioche.png';
import espBravaBrioche from './menu/esp-brava-brioche.png';
import espSalmoneBaguel from './menu/esp-salmone-baguel.png';
import espMortadellaBagel from './menu/esp-mortadella-bagel.png';
import espPistachio from './menu/esp-pistachio.png';
import espNutella from './menu/esp-nutella.png';
import hornCookies from './menu/horn-cookies.png';
import hornHojaldres from './menu/horn-hojaldres.png';
import hornVegano from './menu/horn-vegano.png';
import hornSinGluten from './menu/horn-singluten.png';
// Nuevas fotografías originales extraídas del menú impreso actualizado.
import focacciaPompeyana from './menu/focaccia-pompeyana.png';
import focacciaEspecial from './menu/focaccia-especial.png';
import savoriFocaccia from './menu/savori-focaccia.png';
import focacciaLotus from './menu/focaccia-lotus.png';
import bravaPop from './menu/brava-pop.png';

export const menuFotos = {
  'cafe-teal': cafeTeal,
  'cafe-amarillo': cafeAmarillo,
  'cafe-art': cafeArt,
  'iced-brava': icedBrava,
  'blue-matcha': blueMatcha,
  croissant,
  cookie,
  palmeras,
  empanada,
  bagel,
  'tostada-salmon': tostadaSalmon,
  'tostada-aguacate': tostadaAguacate,
  'pan-semillas': panSemillas,
  'tostadas-trio': tostadasTrio,
  'drinks-clasicos': drinksClasicos,
  'drinks-batidos': drinksBatidos,
  'drinks-tes': drinksTes,
  'esp-salmone-brioche': espSalmoneBrioche,
  'esp-brava-brioche': espBravaBrioche,
  'esp-salmone-baguel': espSalmoneBaguel,
  'esp-mortadella-bagel': espMortadellaBagel,
  'esp-pistachio': espPistachio,
  'esp-nutella': espNutella,
  'horn-cookies': hornCookies,
  'horn-hojaldres': hornHojaldres,
  'horn-vegano': hornVegano,
  'horn-singluten': hornSinGluten,
  'focaccia-pompeyana': focacciaPompeyana,
  'focaccia-especial': focacciaEspecial,
  'savori-focaccia': savoriFocaccia,
  'focaccia-lotus': focacciaLotus,
  'brava-pop': bravaPop,
} satisfies Record<string, ImageMetadata>;

export type MenuFotoKey = keyof typeof menuFotos;
