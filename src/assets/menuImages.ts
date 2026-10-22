/* Fotografías reales de los menús oficiales de BRAVA. Las nuevas focaccias y
   treats se extrajeron como imágenes originales del último PDF impreso; el resto
   sigue la versión anterior cuando el producto y la foto coinciden.
   Astro las optimiza a WebP durante el build. */
import type { ImageMetadata } from 'astro';

import cafeTeal from './menu-cut/cafe-teal.png';
import cafeAmarillo from './menu-cut/cafe-amarillo.png';
import cafeArt from './menu-cut/cafe-art.png';
import icedBrava from './menu-cut/iced-brava.png';
import blueMatcha from './menu-cut/blue-matcha.png';
import croissant from './menu-cut/croissant.png';
import cookie from './menu-cut/cookie.png';
import palmeras from './menu-cut/palmeras.png';
import empanada from './menu-cut/empanada.png';
import bagel from './menu-cut/bagel.png';
import tostadaSalmon from './menu-cut/tostada-salmon.png';
import tostadaAguacate from './menu-cut/tostada-aguacate.png';
import panSemillas from './menu-cut/pan-semillas.png';
import tostadasTrio from './menu-cut/tostadas-trio.png';
// Fotos enmarcadas de Drinks (recorte exacto del menú sobre crema)
import drinksClasicos from './menu-cut/drinks-clasicos.png';
import drinksBatidos from './menu-cut/drinks-batidos.png';
import drinksTes from './menu-cut/drinks-tes.png';
// Especiales y horneado — recortes LIMPIOS del PDF (producto sobre crema, sin knockout)
import espSalmoneBrioche from './menu-cut/esp-salmone-brioche.png';
import espBravaBrioche from './menu-cut/esp-brava-brioche.png';
import espSalmoneBaguel from './menu-cut/esp-salmone-baguel.png';
import espMortadellaBagel from './menu-cut/esp-mortadella-bagel.png';
import espPistachio from './menu-cut/esp-pistachio.png';
import espNutella from './menu-cut/esp-nutella.png';
import hornCookies from './menu-cut/horn-cookies.png';
import hornHojaldres from './menu-cut/horn-hojaldres.png';
import hornVegano from './menu-cut/horn-vegano.png';
import hornSinGluten from './menu-cut/horn-singluten.png';
// Nuevas fotografías originales extraídas del menú impreso actualizado.
import focacciaPompeyana from './menu-cut/focaccia-pompeyana.png';
import focacciaEspecial from './menu-cut/focaccia-especial.png';
import savoriFocaccia from './menu-cut/savori-focaccia.png';
import focacciaLotus from './menu-cut/focaccia-lotus.png';
import bravaPop from './menu-cut/brava-pop.png';

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
