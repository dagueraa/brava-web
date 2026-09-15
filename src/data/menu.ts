/* Carta transcrita del "Menú impreso final_corregido.pdf" de BRAVA.
 * El PDF es la referencia de nombres, ingredientes, precios y orden.
 * La información detallada de alérgenos se solicita en barra.
 */
export type Dieta = 'vegano' | 'vegetariano' | 'sin-gluten' | 'sin-lactosa';
export type Alergeno = 'gluten' | 'lacteos' | 'huevo' | 'frutos-secos' | 'cacahuete' | 'pescado' | 'apio';
export interface MenuItem {
  nombre: string;
  precio?: string;
  desc?: string;
  dietas?: Dieta[];
  alergenos?: Alergeno[];
  foto?: string;
  cafe?: string;
  destacado?: boolean; // fondo azul y estrella en las focaccias señaladas en el PDF
}
export type MenuIcono = 'vaso' | 'taza' | 'pan' | 'batido' | 'te' | 'extras' | 'especiales' | 'magdalena';
export interface Subseccion {
  titulo: string;
  items: MenuItem[];
  nota?: string;
  foto?: string;
  fotos?: string[];
  icono?: MenuIcono;
}
export interface TostadaRow { nombre: string; media: string | null; entera: string | null }
export interface Categoria {
  id: 'combos' | 'drinks' | 'brunch' | 'treats';
  titulo: string;
  icono?: MenuIcono;
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
    id: 'combos', titulo: 'Combos',
    items: [
      { nombre: 'Desayuno Brava', precio: '4,50', desc: 'Café de especialidad + Croissant o Napolitana', foto: 'croissant', cafe: 'cafe-teal' },
      { nombre: 'Capricho Brava', precio: '6,50', desc: 'Café de especialidad + Cookie de Pistacho, Dubai o Brownie', foto: 'cookie', cafe: 'cafe-amarillo' },
      { nombre: 'Brunch Brava', precio: '8,90', desc: 'Café de especialidad + Fit Bagel', foto: 'bagel', cafe: 'cafe-art' },
    ],
    nota: 'Opcional: Añade Zumo natural por +2,80 €',
  },
  {
    id: 'drinks', titulo: 'Drinks',
    subsecciones: [
      { titulo: 'Clásicos', icono: 'vaso', items: [
        { nombre: 'Espresso', precio: '1,70' }, { nombre: 'Espresso Doble', precio: '2,00' },
        { nombre: 'Americano', precio: '1,90' }, { nombre: 'Cortado', precio: '1,80' },
        { nombre: 'Manchado', precio: '1,80' }, { nombre: 'Café con Leche', precio: '2,00' },
        { nombre: 'Cappuccino', precio: '3,30' }, { nombre: 'Flat White', precio: '2,40' },
        { nombre: 'Bombón', precio: '1,80' }, { nombre: 'Iced Latte', precio: '3,90' },
      ] },
      { titulo: 'Latte Macchiato Especiales', icono: 'vaso', items: [
        { nombre: 'Caramelo Salado', precio: '4,20' }, { nombre: 'Vainilla', precio: '4,20' },
        { nombre: 'Avellana Tostada', precio: '4,20' }, { nombre: 'Pistacho', precio: '4,30' },
        { nombre: 'Iced Latte Macchiato a elegir', precio: '4,70' },
        { nombre: 'Brava Coffee', precio: '4,60', desc: 'Naranja y chocolate' },
      ] },
      { titulo: 'Tés e infusiones', icono: 'taza', items: [
        { nombre: 'Blue Matcha', precio: '4,70', desc: 'Infusión de flor mariposa azul y leche vegetal.' },
        { nombre: 'Golden Milk', precio: '4,20', desc: 'Cúrcuma, jengibre molido, pimienta negra, canela, leche vegetal y agave.' },
        { nombre: 'Pink Latte', precio: '4,20', desc: 'Remolacha, canela, leche vegetal y agave.' },
        { nombre: 'Uve Latte', precio: '5,90', desc: 'Boniato morado, vainilla, leche vegetal y azúcar de caña.' },
        { nombre: 'English Breakfast', precio: '2,50' }, { nombre: 'Earl Grey', precio: '2,50' },
        { nombre: 'Frutos del Bosque', precio: '2,50' }, { nombre: 'Menta Poleo', precio: '2,50' },
        { nombre: 'Té Rojo Pu-erh', precio: '2,50' }, { nombre: 'Té Verde Hierbabuena', precio: '2,50' },
        { nombre: 'Té Verde Gunpowder', precio: '2,50' }, { nombre: 'Manzanilla', precio: '2,50' },
        { nombre: 'Rooibos Sabor Chocolate', precio: '2,50' }, { nombre: 'Chai Canela', precio: '2,50' },
        { nombre: 'Rooibos Original', precio: '2,50' }, { nombre: 'Tila Relax', precio: '2,50' },
      ] },
      { titulo: 'Matcha', icono: 'taza', items: [
        { nombre: 'Matcha Tradicional', precio: '3,90' }, { nombre: 'Matcha Latte', precio: '4,10' },
        { nombre: 'Matcha Latte Pistacho', precio: '4,50' }, { nombre: 'Matcha Mango', precio: '4,50' },
        { nombre: 'Iced Matcha Latte a elegir', precio: '4,90' },
      ] },
      { titulo: 'Batidos funcionales', icono: 'batido', items: [
        { nombre: 'Iced Brava', precio: '6,50', desc: 'Plátano, cacao, crema de cacahuete con un toque de naranja.' },
        { nombre: 'Fresh Lime', precio: '5,90', desc: 'Manzana, pepino, apio, espinaca con toque cítrico.' },
        { nombre: 'Golden Boost', precio: '5,90', desc: 'Zanahoria, naranja, jengibre, cúrcuma y toque de pimienta negra.' },
        { nombre: 'Deep Green', precio: '5,90', desc: 'Aguacate, pera, kiwi, espinaca, agua de coco y crema de cacahuete.' },
        { nombre: 'Berry Blast', precio: '5,90', desc: 'Plátano, fresa, arándanos, zumo de manzana y açai.' },
        { nombre: 'Sweet Berry', precio: '5,90', desc: 'Plátano, fresa y açai.' },
        { nombre: 'Green Power', precio: '5,90', desc: 'Piña, manzana, zanahoria, apio, espinaca y agua de coco.' },
      ] },
      { titulo: 'Extras', icono: 'extras', items: [
        { nombre: 'Bebida vegetal', precio: '+0,20', desc: 'Coco, arroz, avena, soja o almendra' },
        { nombre: 'Sirope de sabor', precio: '+1,00' }, { nombre: 'Vaso comestible', precio: '+1,50' },
        { nombre: 'Proteína vegetal', precio: '+1,00' }, { nombre: 'Adaptógenos', precio: '+1,50' },
      ], nota: 'Maca: Raíz andina que aporta energía natural y vitalidad. Ashwagandha: Adaptógeno que ayuda a equilibrar cuerpo y mente. Espirulina: Alga rica en nutrientes y proteínas de origen vegetal. Açaí: Fruta amazónica rica en antioxidantes y sabor a frutos rojos.' },
    ],
  },
  {
    id: 'brunch', titulo: 'Brunch',
    tostadas: {
      titulo: 'Tostadas', icono: 'pan', columnas: ['Media', 'Entera'],
      bases: [
        { nombre: 'Pan blanco', media: '1,40', entera: '2,60' },
        { nombre: 'Pan de semillas', media: '1,80', entera: '3,40' },
        { nombre: 'Pan integral', media: '1,60', entera: '3,00' },
        { nombre: 'Pan de centeno', media: '1,80', entera: '3,40' },
        { nombre: 'Pan sin gluten', media: null, entera: '4,00' },
      ],
      toppings: [
        { nombre: 'Tomate rallado', media: '1,00', entera: '1,60' },
        { nombre: 'Aguacate', media: '1,80', entera: '2,80' },
        { nombre: 'Atún', media: '1,20', entera: '2,20' },
        { nombre: 'Salmón marinado', media: '4,00', entera: '7,80' },
        { nombre: 'Jamón serrano', media: '1,80', entera: '2,80' },
        { nombre: 'Jamón york', media: '1,30', entera: '2,40' },
        { nombre: 'Pavo', media: '1,40', entera: '2,30' },
        { nombre: 'Queso semi curado', media: '1,20', entera: '2,00' },
        { nombre: 'Queso tostado', media: '1,30', entera: '2,20' },
      ],
    },
    especiales: { titulo: 'Brunch especiales', icono: 'especiales', items: [
      { nombre: 'Salmone Brioche', precio: '9,90', desc: 'Salmón marinado, parmesano, pesto rojo, rúcula, ralladura de lima, semillas de amapola, sal negra y aceite brava.', foto: 'esp-salmone-brioche' },
      { nombre: 'Brava Brioche', precio: '8,90', desc: 'Huevo cocido, mayonesa de trufa, maíz tostado, sal negra y aceite brava.', foto: 'esp-brava-brioche' },
      { nombre: 'Mortadella Bagel', precio: '8,90', desc: 'Bagel, mortadella citterio, mascarpone, canónigos y pesto rojo.', foto: 'esp-mortadella-bagel' },
      { nombre: 'Salmone Bagel', precio: '9,90', desc: 'Bagel de amapola, salmón, mascarpone, aguacate, pepino, mostaza y pimienta negra.', foto: 'esp-salmone-baguel' },
      { nombre: 'Fit Bagel', precio: '8,90', desc: 'Bagel, atún, mascarpone, rúcula, pepino, huevo cocido y aceite brava.', foto: 'bagel' },
      { nombre: 'Focaccia Pompeyana', precio: '8,90', desc: 'Focaccia, mortadella, aceitunas verdes, pesto verde, limón, AOVE, orégano y aceite brava.', foto: 'focaccia-pompeyana', destacado: true },
      { nombre: 'Focaccia Especial', precio: '8,90', desc: 'Focaccia, jamón york, mascarpone, mayonesa de trufa, pesto rojo, canónigos, limón y aceite brava.', foto: 'focaccia-especial', destacado: true },
      { nombre: 'Savori Focaccia', precio: '8,90', desc: 'Focaccia, mortadella, parmesano, praliné de pistacho, pistacho molido, AOVE y aceite', foto: 'savori-focaccia', destacado: true },
      { nombre: 'Focaccia Formaggiosa', precio: '8,90', desc: 'Focaccia, queso semicurado, queso tostado, mascarpone, parmesano, mostaza Savora, pimienta negra y aceite brava.' },
      { nombre: 'Focaccia Serrana', precio: '8,90', desc: 'Focaccia, jamón serrano, tomate, sal negra, semillas de amapola, AOVE y aceite brava.' },
      { nombre: 'Focaccia Power', precio: '8,90', desc: 'Focaccia, pavo york, pimentón ahumado, pesto verde, kikos, sésamo negro, AOVE y aceite brava.' },
      { nombre: 'Piadina Bikini', precio: '8,90', desc: 'Piadina, queso semi curado, jamón york, queso tostado y tomate seco en aceite.' },
    ] },
    nota: 'Todas nuestras focaccias se preparan al momento y se sirven con una pequeña ensalada aliñada.',
  },
  {
    id: 'treats', titulo: 'Treats',
    especiales: { titulo: 'Treats especiales', icono: 'pan', items: [
      { nombre: 'Pistachio Brioche', precio: '6,50', desc: 'Brioche, praliné de pistacho, mascarpone y pistacho en polvo.', foto: 'esp-pistachio' },
      { nombre: 'Nutella Brioche', precio: '6,50', desc: 'Brioche, nutella, nueces pecán y azúcar glas.', foto: 'esp-nutella' },
      { nombre: 'Focaccia Lotus', precio: '6,50', desc: 'Focaccia, crema Lotus, cacahuete picado, helado de vainilla y Oreo molida.', foto: 'focaccia-lotus' },
      { nombre: 'Brava Pop', precio: '6,50', desc: 'Focaccia, dulce de leche, helado de vainilla, kikos molidos, sal negra y palomitas dulces.', foto: 'brava-pop' },
    ] },
    horneado: {
      titulo: 'Horneado', icono: 'magdalena',
      intro: 'Nuestra vitrina no tiene una carta fija y cambia según el día, pero siempre encontrarás algo recién horneado que merezca la pena. Pásate y echa un vistazo o pregúntanos.',
      items: [
        { nombre: 'Cookies', foto: 'horn-cookies' }, { nombre: 'Hojaldres' },
        { nombre: 'Vegano', foto: 'horn-vegano' },
        { nombre: 'Sin Gluten', desc: 'Pregúntanos por los productos sin gluten disponibles.' },
      ],
    },
  },
];
export const alergenos = 'Disponemos de una carta específica con información detallada de alérgenos. Puedes solicitarla en barra siempre que la necesites.';
export const dietaLabels: Record<Dieta, string> = {
  vegano: 'Vegano', vegetariano: 'Vegetariano', 'sin-gluten': 'Sin gluten', 'sin-lactosa': 'Sin lactosa',
};
export const alergenoLabels: Record<Alergeno, string> = {
  gluten: 'Gluten', lacteos: 'Lácteos', huevo: 'Huevo', 'frutos-secos': 'Frutos secos',
  cacahuete: 'Cacahuete', pescado: 'Pescado', apio: 'Apio',
};
