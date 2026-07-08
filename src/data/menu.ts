/* =====================================================================
 *  BRAVA — Datos de la carta (FUENTE DE VERDAD)
 * ---------------------------------------------------------------------
 *  Transcrito de BRAVA_WEB_SPEC.md (sección 7) y verificado contra
 *  "Menú movil Brava Traz.pdf". Precios en euros, formato español (coma).
 *  No hardcodear precios en las páginas: todo sale de aquí.
 *
 *  Dietas: se etiquetan SOLO donde el nombre/carta lo indica sin ambigüedad.
 *  La información detallada de alérgenos se solicita en barra (ver `alergenos`).
 * ===================================================================== */

export type Dieta = 'vegano' | 'vegetariano' | 'sin-gluten' | 'sin-lactosa';

// Alérgenos señalados con los iconos oficiales del menú (bajo cada plato).
export type Alergeno = 'gluten' | 'lacteos' | 'huevo' | 'frutos-secos' | 'cacahuete' | 'pescado' | 'apio';

export interface MenuItem {
  nombre: string;
  precio?: string;
  desc?: string;
  dietas?: Dieta[];
  alergenos?: Alergeno[]; // iconos de alérgenos como en el menú original
  foto?: string; // clave en menuImages.ts (foto real del producto)
  cafe?: string; // clave en menuImages.ts: taza que acompaña al combo (página de Combos del menú)
}

export type MenuIcono = 'vaso' | 'taza' | 'pan' | 'batido' | 'te' | 'extras' | 'especiales' | 'magdalena';

export interface Subseccion {
  titulo: string;
  items: MenuItem[];
  nota?: string;
  foto?: string; // foto decorativa de la subsección (como en la carta)
  fotos?: string[]; // varias fotos enmarcadas (p. ej. los 3 cafés de Clásicos)
  icono?: MenuIcono; // icono oficial del menú junto al subtítulo
}

export interface TostadaRow {
  nombre: string;
  media: string | null;
  entera: string | null;
}

export interface Categoria {
  id: 'combos' | 'drinks' | 'brunch' | 'treats';
  titulo: string;
  icono?: MenuIcono; // (no se usa en cabecera: el menú pone el icono en cada subsección)
  items?: MenuItem[];
  subsecciones?: Subseccion[];
  nota?: string;
  tostadas?: {
    titulo: string;
    columnas: [string, string];
    bases: TostadaRow[];
    toppings: TostadaRow[];
    foto?: string;
    icono?: MenuIcono;
  };
  especiales?: Subseccion;
  horneado?: { titulo: string; intro: string; items: MenuItem[]; icono?: MenuIcono };
}

export const moneda = 'EUR' as const;

export const categorias: Categoria[] = [
  {
    id: 'combos',
    titulo: 'Combos',
    items: [
      { nombre: 'Desayuno Brava', precio: '4,90', desc: 'Café de especialidad + croissant o napolitana', foto: 'croissant', cafe: 'cafe-teal' },
      { nombre: 'Capricho Brava', precio: '6,20', desc: 'Café de especialidad + cookie gourmet', foto: 'cookie', cafe: 'cafe-amarillo' },
      { nombre: 'Brunch Brava', precio: '8,20', desc: 'Café de especialidad + Fit baguel', foto: 'bagel', cafe: 'cafe-art' },
    ],
    nota: 'Opcional: añade Zumo natural por +2,80 €',
  },
  {
    id: 'drinks',
    titulo: 'Drinks',
    icono: 'vaso',
    subsecciones: [
      {
        titulo: 'Clásicos',
        icono: 'vaso',
        foto: 'drinks-clasicos',
        items: [
          { nombre: 'Espresso', precio: '1,50' },
          { nombre: 'Espresso Doble', precio: '2,00' },
          { nombre: 'Americano', precio: '1,70' },
          { nombre: 'Cortado', precio: '1,60' },
          { nombre: 'Manchado', precio: '1,60' },
          { nombre: 'Café con Leche', precio: '1,90' },
          { nombre: 'Capuccino', precio: '3,20' },
          { nombre: 'Flat White', precio: '2,20' },
          { nombre: 'Bombón', precio: '1,70' },
          { nombre: 'Iced Latte', precio: '3,10' },
        ],
      },
      {
        titulo: 'Latte Macchiato Especiales',
        icono: 'vaso',
        items: [
          { nombre: 'Caramelo Salado', precio: '3,80' },
          { nombre: 'Vainilla', precio: '3,80' },
          { nombre: 'Avellana Tostada', precio: '3,80' },
          { nombre: 'Pistacho', precio: '4,00' },
          { nombre: 'Iced Latte Macchiato (a elegir)', precio: '4,50' },
          { nombre: 'Brava Coffee', precio: '4,50', desc: 'Naranja y chocolate' },
        ],
      },
      {
        titulo: 'Matcha',
        icono: 'taza',
        items: [
          { nombre: 'Matcha tradicional', precio: '3,60' },
          { nombre: 'Matcha Latte', precio: '3,80' },
          { nombre: 'Matcha Latte Pistacho', precio: '4,00' },
          { nombre: 'Matcha Mango', precio: '4,00' },
          { nombre: 'Iced Matcha Latte (a elegir)', precio: '4,50' },
        ],
      },
      {
        titulo: 'Batidos funcionales',
        icono: 'batido',
        foto: 'drinks-batidos',
        items: [
          { nombre: 'Iced Brava', precio: '6,00', desc: 'Plátano, cacao, crema de cacahuete, con un toque de naranja', alergenos: ['cacahuete'] },
          { nombre: 'Fresh Lime', precio: '5,00', desc: 'Manzana, pepino, apio y espinaca con toque cítrico', alergenos: ['apio'] },
          { nombre: 'Golden Boost', precio: '5,00', desc: 'Zanahoria, naranja, jengibre, cúrcuma y toque de pimienta negra' },
          { nombre: 'Deep Green', precio: '5,00', desc: 'Aguacate, pera, kiwi, espinaca, agua de coco y crema de cacahuete', alergenos: ['cacahuete'] },
          { nombre: 'Berry Blast', precio: '5,00', desc: 'Plátano, fresa, arándanos, zumo de manzana y açai' },
          { nombre: 'Sweet Berry', precio: '5,00', desc: 'Plátano, fresa y açai' },
          { nombre: 'Green Power', precio: '5,50', desc: 'Piña, manzana, zanahoria, apio, espinaca y agua de coco', alergenos: ['apio'] },
        ],
      },
      {
        titulo: 'Tés e infusiones',
        icono: 'taza',
        foto: 'drinks-tes',
        items: [
          { nombre: 'Blue Matcha', precio: '4,50', desc: 'Infusión de flor de mariposa azul y leche vegetal' },
          { nombre: 'Golden Milk', precio: '4,00', desc: 'Cúrcuma, jengibre molido, pimienta negra, canela, leche vegetal y agave' },
          { nombre: 'Pink Latte', precio: '4,00', desc: 'Remolacha, canela, leche vegetal y agave' },
          { nombre: 'English Breakfast', precio: '2,10' },
          { nombre: 'Earl Grey', precio: '2,10' },
          { nombre: 'Frutos del Bosque', precio: '2,10' },
          { nombre: 'Menta Poleo', precio: '2,10' },
          { nombre: 'Té Rojo Pu-erh', precio: '2,10' },
          { nombre: 'Té Verde Hierbabuena', precio: '2,10' },
          { nombre: 'Té Verde Gunpowder', precio: '2,10' },
          { nombre: 'Manzanilla', precio: '2,10' },
          { nombre: 'Rooibos Sabor Chocolate', precio: '2,10' },
          { nombre: 'Chai Canela', precio: '2,10' },
          { nombre: 'Rooibos Original', precio: '2,10' },
          { nombre: 'Tila Relax', precio: '2,10' },
        ],
      },
      {
        titulo: 'Extras',
        icono: 'extras',
        items: [
          { nombre: 'Bebida vegetal', precio: '+0,20', desc: 'Coco, arroz, avena, soja o almendra' },
          { nombre: 'Sirope de sabor', precio: '+0,60' },
          { nombre: 'Vaso comestible', precio: '+1,50' },
          { nombre: 'Proteína vegetal', precio: '+1,00' },
          { nombre: 'Adaptógenos', precio: '+1,50' },
        ],
        nota:
          'Maca: raíz andina que aporta energía natural y vitalidad. Ashwagandha: adaptógeno que ayuda a equilibrar cuerpo y mente. Espirulina: alga rica en nutrientes y proteínas de origen vegetal. Açaí: fruta amazónica rica en antioxidantes y sabor a frutos rojos.',
      },
    ],
  },
  {
    id: 'brunch',
    titulo: 'Brunch',
    icono: 'pan',
    tostadas: {
      titulo: 'Tostadas',
      icono: 'pan',
      foto: 'tostadas-trio',
      columnas: ['Media', 'Entera'],
      bases: [
        { nombre: 'Pan blanco', media: '1,40', entera: '2,60' },
        { nombre: 'Pan de semillas', media: '1,80', entera: '3,40' },
        { nombre: 'Pan integral', media: '1,60', entera: '3,00' },
        { nombre: 'Pan de centeno', media: '1,80', entera: '3,40' },
        { nombre: 'Pan sin gluten', media: null, entera: '4,00' },
      ],
      toppings: [
        { nombre: 'Tomate rallado', media: '0,80', entera: '1,40' },
        { nombre: 'Aguacate', media: '1,50', entera: '2,80' },
        { nombre: 'Atún', media: '1,00', entera: '1,80' },
        { nombre: 'Salmón marinado', media: '4,00', entera: '7,80' },
        { nombre: 'Jamón serrano', media: '1,50', entera: '2,80' },
        { nombre: 'Jamón york', media: '1,20', entera: '2,20' },
        { nombre: 'Pavo', media: '1,20', entera: '2,20' },
        { nombre: 'Queso semi curado', media: '1,00', entera: '1,80' },
        { nombre: 'Queso tostado', media: '1,10', entera: '2,00' },
      ],
    },
    especiales: {
      titulo: 'Especiales',
      icono: 'especiales',
      items: [
        { nombre: 'Salmone Brioche', precio: '8,90', desc: 'Salmón marinado, parmesano, pesto rojo, rúcula, ralladura de lima, semillas de amapola, sal negra y aceite brava.', foto: 'esp-salmone-brioche', alergenos: ['gluten', 'lacteos', 'huevo', 'pescado'] },
        { nombre: 'Brava Brioche', precio: '7,50', desc: 'Huevo cocido, mayonesa de trufa, maíz tostado, sal negra y aceite brava.', foto: 'esp-brava-brioche', alergenos: ['gluten', 'lacteos', 'huevo'] },
        { nombre: 'Salmone Baguel', precio: '9,00', desc: 'Baguel de amapola, salmón, mascarpone, aguacate, pepino, mostaza y pimienta negra.', foto: 'esp-salmone-baguel', alergenos: ['gluten', 'lacteos', 'pescado'] },
        { nombre: 'Mortadella Bagel', precio: '7,00', desc: 'Baguel, mortadela citterio, mascarpone, canónigos y pesto rojo.', foto: 'esp-mortadella-bagel', alergenos: ['gluten', 'lacteos'] },
        { nombre: 'Fit Baguel', precio: '7,50', desc: 'Baguel, atún, mascarpone, rúcula, pepino, huevo cocido y aceite brava.', alergenos: ['gluten', 'lacteos', 'huevo', 'pescado'] },
        { nombre: 'Fresh Tramezzino', precio: '8,50', desc: 'Pan tramezzino, mascarpone, pavo, aguacate, pepino, tomate, mostaza y aceite brava.', alergenos: ['gluten', 'lacteos'] },
        { nombre: 'Piadina Siciliana', precio: '6,00', desc: 'Piadina, mortadella citterio, mascarpone, pistacho en polvo, praliné de pistacho y aceite brava.', alergenos: ['gluten', 'lacteos', 'frutos-secos'] },
        { nombre: 'Piadina Caprese', precio: '6,50', desc: 'Piadina, mozzarella fresca, tomate, parmesano en lascas, tomate seco en aceite y aceite brava.', alergenos: ['gluten', 'lacteos'] },
        { nombre: 'Piadina Bikini', precio: '5,50', desc: 'Piadina, queso semi curado, jamón york, queso tostado y tomate seco en aceite.', alergenos: ['gluten', 'lacteos'] },
        { nombre: 'Veggie Wrap', precio: '8,00', desc: 'Wrap, aguacate, tomate, pepino, mozzarella fresca, hummus, cebolla encurtida y aceite brava.', dietas: ['vegetariano'], alergenos: ['gluten', 'lacteos'] },
        { nombre: 'Tuna Truffle Focaccia', precio: '8,90', desc: 'Focaccia, atún, mayonesa de trufa, canónigos, queso semi curado y aceite brava.', alergenos: ['gluten', 'lacteos', 'huevo', 'pescado'] },
        { nombre: 'Bruschetta Serrana', precio: '7,50', desc: 'Bruschetta, jamón serrano, tomate, AOVE, sal, pimentón ahumado y aceite brava.', alergenos: ['gluten'] },
        { nombre: 'Brusquetta Garden', precio: '8,50', desc: 'Brusquetta, hummus, sésamo negro, orégano, ralladura de lima, brotes, pimentón ahumado y aceite brava.', dietas: ['vegano'], alergenos: ['gluten'] },
      ],
    },
  },
  {
    id: 'treats',
    titulo: 'Treats',
    icono: 'pan',
    especiales: {
      titulo: 'Especiales',
      icono: 'pan',
      items: [
        { nombre: 'Pistachio Brioche', precio: '6,00', desc: 'Brioche, praliné de pistacho, mascarpone y pistacho en polvo.', foto: 'esp-pistachio', alergenos: ['gluten', 'lacteos', 'huevo', 'frutos-secos', 'cacahuete'] },
        { nombre: 'Nutella Brioche', precio: '6,00', desc: 'Brioche, nutella, nueces pecán y azúcar glas.', foto: 'esp-nutella', alergenos: ['gluten', 'lacteos', 'huevo', 'frutos-secos'] },
      ],
    },
    horneado: {
      titulo: 'Horneado',
      icono: 'magdalena',
      intro:
        'Nuestra vitrina no tiene una carta fija y cambia según el día, pero siempre encontrarás algo recién horneado que merezca la pena. Pásate y echa un vistazo o pregúntanos.',
      items: [
        { nombre: 'Cookies', foto: 'horn-cookies', alergenos: ['gluten', 'lacteos', 'huevo'] },
        { nombre: 'Hojaldres', foto: 'horn-hojaldres', alergenos: ['gluten', 'lacteos', 'huevo'] },
        { nombre: 'Vegano', dietas: ['vegano'], foto: 'horn-vegano', alergenos: ['gluten'] },
        { nombre: 'Sin Gluten', desc: 'Pregúntanos por los productos sin gluten disponibles.', dietas: ['sin-gluten'], foto: 'horn-singluten' },
      ],
    },
  },
];

export const alergenos =
  '¿Tienes alguna alergia o intolerancia? Disponemos de una carta específica con información detallada de alérgenos. Puedes solicitarla en barra siempre que la necesites.';

export const dietaLabels: Record<Dieta, string> = {
  vegano: 'Vegano',
  vegetariano: 'Vegetariano',
  'sin-gluten': 'Sin gluten',
  'sin-lactosa': 'Sin lactosa',
};

// Iconos de alérgenos oficiales del menú (silueta en /public/brand/diet/).
export const alergenoLabels: Record<Alergeno, string> = {
  gluten: 'Gluten',
  lacteos: 'Lácteos',
  huevo: 'Huevo',
  'frutos-secos': 'Frutos secos',
  cacahuete: 'Cacahuete',
  pescado: 'Pescado',
  apio: 'Apio',
};
