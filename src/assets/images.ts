/* Imágenes reales de Brava seleccionadas y optimizadas en build (astro:assets).
   Todas verificadas sin marcas de agua ni subtítulos quemados en las piezas clave.
   Si el cliente aporta fotos nuevas, sustituye los archivos en /src/assets/fotos. */
import hero from './fotos/brava-hero.jpg';          // taza Brava + iced coffee (bv) + gofre
import founderEntrance from './fotos/brava-fundadora.jpg'; // retrato real de la fundadora (rótulo de musgo brava)
import founderSpace from './fotos/brava-duena.jpg';  // la dueña de Brava junto al rótulo de musgo
import smoothieStreet from './fotos/brava-22.jpg';  // vaso brava para llevar en la calle
import storefront from './fotos/brava-20.jpg';      // fachada con rótulo brava
import bagel from './fotos/brava-23.jpg';           // bagel salmón y aguacate
import piadina from './fotos/brava-15.jpg';         // piadina con pesto
import latteArt from './fotos/brava-27.jpg';        // latte con sello bv
import smoothieSandwich from './fotos/brava-25.jpg';// smoothie + sándwich
import interior from './fotos/brava-12.jpg';        // interior del local
// Galería de /historia (fotos reales aportadas por la clienta)
import gallery1 from './fotos/gallery-1.jpg';        // interior: rótulo de musgo + sofá
import gallery2 from './fotos/gallery-2.jpg';        // latte art
import gallery3 from './fotos/gallery-3.jpg';        // máquina de espresso
import gallery4 from './fotos/gallery-4.jpg';        // fachada con rótulo brava
import entrada from './fotos/brava-entrada.jpg';      // entrada: rótulo brava sobre pared vegetal + puerta

export const img = {
  hero,
  founderEntrance,
  founderSpace,
  smoothieStreet,
  storefront,
  bagel,
  piadina,
  latteArt,
  smoothieSandwich,
  interior,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  entrada,
};

export type ImgKey = keyof typeof img;
