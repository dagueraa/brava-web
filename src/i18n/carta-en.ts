/* =====================================================================
 *  La carta en inglés: cada texto de src/data/menu.ts (y de las opciones del
 *  pedido, src/data/pedido.ts) con su traducción. La clave es el texto en
 *  español TAL CUAL está en la carta.
 *  - Si cambias un nombre o una descripción en menu.ts, cámbialo también aquí.
 *  - Si falta una traducción, en la web inglesa sale en español (no se rompe nada).
 *    `node scripts/carta-sin-traducir.mjs` dice qué textos faltan.
 *  Los nombres propios de la casa (Fit Bagel, Brava Pop, Iced Brava…) no se traducen.
 *  Al pedido por WhatsApp siempre le llega el nombre en español (con el inglés al lado).
 * ===================================================================== */
export const CARTA_EN: Record<string, string> = {
  /* ---------- Combos ---------- */
  'Desayuno Brava': 'Brava Breakfast',
  'Café de especialidad + Croissant o Napolitana': 'Specialty coffee + croissant or napolitana (chocolate pastry)',
  'Capricho Brava': 'Brava Treat',
  'Café de especialidad + Cookie de Pistacho, Dubai o Brownie': 'Specialty coffee + pistachio cookie, Dubai cookie or brownie',
  'Brunch Brava': 'Brava Brunch',
  'Café de especialidad + Fit Bagel': 'Specialty coffee + Fit Bagel',
  'Opcional: Añade Zumo natural por +2,80 €': 'Optional: add a fresh juice for +2,80 €',
  'Zumo natural': 'Fresh juice',
  'Para acompañar': 'To go with it',
  'Napolitana': 'Napolitana (chocolate pastry)',
  'Cookie de pistacho': 'Pistachio cookie',
  'Dubai': 'Dubai cookie',

  /* ---------- Drinks ---------- */
  'Clásicos': 'Classics',
  'Espresso Doble': 'Double Espresso',
  'Manchado': 'Manchado (milk with a dash of coffee)',
  'Café con Leche': 'Café con Leche (coffee with milk)',
  'Bombón': 'Bombón (espresso with condensed milk)',

  'Latte Macchiato Especiales': 'Special Latte Macchiatos',
  'Caramelo Salado': 'Salted Caramel',
  'Vainilla': 'Vanilla',
  'Avellana Tostada': 'Toasted Hazelnut',
  'Pistacho': 'Pistachio',
  'Iced Latte Macchiato a elegir': 'Iced Latte Macchiato, any flavour',
  'Iced Latte Macchiato': 'Iced Latte Macchiato',
  'Naranja y chocolate': 'Orange and chocolate',
  'Sabor': 'Flavour',
  'Caramelo salado': 'Salted caramel',
  'Avellana tostada': 'Toasted hazelnut',

  'Tés e infusiones': 'Teas & infusions',
  'Infusión de flor mariposa azul y leche vegetal.': 'Butterfly pea flower infusion with plant-based milk.',
  'Cúrcuma, jengibre molido, pimienta negra, canela, leche vegetal y agave.': 'Turmeric, ground ginger, black pepper, cinnamon, plant-based milk and agave.',
  'Remolacha, canela, leche vegetal y agave.': 'Beetroot, cinnamon, plant-based milk and agave.',
  'Boniato morado, vainilla, leche vegetal y azúcar de caña.': 'Purple sweet potato, vanilla, plant-based milk and cane sugar.',
  'Frutos del Bosque': 'Forest Fruits',
  'Menta Poleo': 'Pennyroyal Mint',
  'Té Rojo Pu-erh': 'Pu-erh Red Tea',
  'Té Verde Hierbabuena': 'Green Tea with Spearmint',
  'Té Verde Gunpowder': 'Gunpowder Green Tea',
  'Manzanilla': 'Chamomile',
  'Rooibos Sabor Chocolate': 'Chocolate Rooibos',
  'Chai Canela': 'Cinnamon Chai',
  'Rooibos Original': 'Original Rooibos',
  'Tila Relax': 'Linden Relax',

  'Matcha Tradicional': 'Traditional Matcha',
  'Matcha Latte Pistacho': 'Pistachio Matcha Latte',
  'Matcha Mango': 'Mango Matcha',
  'Iced Matcha Latte a elegir': 'Iced Matcha Latte, your choice',
  'Iced Matcha Latte': 'Iced Matcha Latte',

  'Batidos funcionales': 'Functional smoothies',
  'Plátano, cacao, crema de cacahuete con un toque de naranja.': 'Banana, cocoa and peanut butter with a hint of orange.',
  'Manzana, pepino, apio, espinaca con toque cítrico.': 'Apple, cucumber, celery and spinach with a citrus twist.',
  'Zanahoria, naranja, jengibre, cúrcuma y toque de pimienta negra.': 'Carrot, orange, ginger, turmeric and a touch of black pepper.',
  'Aguacate, pera, kiwi, espinaca, agua de coco y crema de cacahuete.': 'Avocado, pear, kiwi, spinach, coconut water and peanut butter.',
  'Plátano, fresa, arándanos, zumo de manzana y açai.': 'Banana, strawberry, blueberries, apple juice and açaí.',
  'Plátano, fresa y açai.': 'Banana, strawberry and açaí.',
  'Piña, manzana, zanahoria, apio, espinaca y agua de coco.': 'Pineapple, apple, carrot, celery, spinach and coconut water.',

  'Bebida vegetal': 'Plant-based milk',
  'Coco, arroz, avena, soja o almendra': 'Coconut, rice, oat, soy or almond',
  'Sirope de sabor': 'Flavoured syrup',
  'Vaso comestible': 'Edible cup',
  'Proteína vegetal': 'Plant protein',
  'Adaptógenos': 'Adaptogens',
  'Maca: Raíz andina que aporta energía natural y vitalidad. Ashwagandha: Adaptógeno que ayuda a equilibrar cuerpo y mente. Espirulina: Alga rica en nutrientes y proteínas de origen vegetal. Açaí: Fruta amazónica rica en antioxidantes y sabor a frutos rojos.':
    'Maca: an Andean root that gives natural energy and vitality. Ashwagandha: an adaptogen that helps balance body and mind. Spirulina: an algae rich in nutrients and plant protein. Açaí: an Amazonian fruit rich in antioxidants, with a berry flavour.',
  'Bebida': 'Milk',
  'Coco': 'Coconut', 'Arroz': 'Rice', 'Avena': 'Oat', 'Soja': 'Soy', 'Almendra': 'Almond',
  'Adaptógeno': 'Adaptogen',
  'Espirulina': 'Spirulina',

  /* ---------- Brunch ---------- */
  'Tostadas': 'Toast',
  'Media': 'Half',
  'Entera': 'Whole',
  'Pan blanco': 'White bread',
  'Pan de semillas': 'Seeded bread',
  'Pan integral': 'Wholemeal bread',
  'Pan de centeno': 'Rye bread',
  'Pan sin gluten': 'Gluten-free bread',
  'Tomate rallado': 'Grated tomato',
  'Aguacate': 'Avocado',
  'Atún': 'Tuna',
  'Salmón marinado': 'Marinated salmon',
  'Jamón serrano': 'Serrano ham',
  'Jamón york': 'Cooked ham',
  'Pavo': 'Turkey',
  'Queso semi curado': 'Semi-cured cheese',
  'Queso tostado': 'Toasted cheese',

  'Brunch especiales': 'Brunch specials',
  'Salmón marinado, parmesano, pesto rojo, rúcula, ralladura de lima, semillas de amapola, sal negra y aceite brava.': 'Marinated salmon, parmesan, red pesto, rocket, lime zest, poppy seeds, black salt and Brava oil.',
  'Huevo cocido, mayonesa de trufa, maíz tostado, sal negra y aceite brava.': 'Boiled egg, truffle mayo, toasted corn, black salt and Brava oil.',
  'Bagel, mortadella citterio, mascarpone, canónigos y pesto rojo.': 'Bagel, Citterio mortadella, mascarpone, lamb’s lettuce and red pesto.',
  'Bagel de amapola, salmón, mascarpone, aguacate, pepino, mostaza y pimienta negra.': 'Poppy seed bagel, salmon, mascarpone, avocado, cucumber, mustard and black pepper.',
  'Bagel, atún, mascarpone, rúcula, pepino, huevo cocido y aceite brava.': 'Bagel, tuna, mascarpone, rocket, cucumber, boiled egg and Brava oil.',
  'Focaccia, mortadella, aceitunas verdes, pesto verde, limón, AOVE, orégano y aceite brava.': 'Focaccia, mortadella, green olives, green pesto, lemon, extra virgin olive oil, oregano and Brava oil.',
  'Focaccia, jamón york, mascarpone, mayonesa de trufa, pesto rojo, canónigos, limón y aceite brava.': 'Focaccia, cooked ham, mascarpone, truffle mayo, red pesto, lamb’s lettuce, lemon and Brava oil.',
  'Focaccia, mortadella, parmesano, praliné de pistacho, pistacho molido, AOVE y aceite': 'Focaccia, mortadella, parmesan, pistachio praline, ground pistachio, extra virgin olive oil and oil',
  'Focaccia, queso semicurado, queso tostado, mascarpone, parmesano, mostaza Savora, pimienta negra y aceite brava.': 'Focaccia, semi-cured cheese, toasted cheese, mascarpone, parmesan, Savora mustard, black pepper and Brava oil.',
  'Focaccia, jamón serrano, tomate, sal negra, semillas de amapola, AOVE y aceite brava.': 'Focaccia, Serrano ham, tomato, black salt, poppy seeds, extra virgin olive oil and Brava oil.',
  'Focaccia, pavo york, pimentón ahumado, pesto verde, kikos, sésamo negro, AOVE y aceite brava.': 'Focaccia, cooked turkey, smoked paprika, green pesto, kikos (toasted corn), black sesame, extra virgin olive oil and Brava oil.',
  'Piadina, queso semi curado, jamón york, queso tostado y tomate seco en aceite.': 'Piadina, semi-cured cheese, cooked ham, toasted cheese and sun-dried tomato in oil.',
  'Todas nuestras focaccias se preparan al momento y se sirven con una pequeña ensalada aliñada.': 'All our focaccias are made to order and served with a small dressed salad.',

  /* ---------- Treats ---------- */
  'Treats especiales': 'Special treats',
  'Brioche, praliné de pistacho, mascarpone y pistacho en polvo.': 'Brioche, pistachio praline, mascarpone and pistachio powder.',
  'Brioche, nutella, nueces pecán y azúcar glas.': 'Brioche, Nutella, pecans and icing sugar.',
  'Focaccia, crema Lotus, cacahuete picado, helado de vainilla y Oreo molida.': 'Focaccia, Lotus spread, chopped peanuts, vanilla ice cream and crushed Oreo.',
  'Focaccia, dulce de leche, helado de vainilla, kikos molidos, sal negra y palomitas dulces.': 'Focaccia, dulce de leche, vanilla ice cream, crushed kikos (toasted corn), black salt and sweet popcorn.',
  'Horneado': 'Freshly baked',
  'Nuestra vitrina no tiene una carta fija y cambia según el día, pero siempre encontrarás algo recién horneado que merezca la pena. Pásate y echa un vistazo o pregúntanos.':
    'Our display case has no fixed menu and changes every day, but there’s always something freshly baked worth trying. Come by and have a look, or just ask us.',
  'Hojaldres': 'Puff pastries',
  'Vegano': 'Vegan',
  'Sin Gluten': 'Gluten-free',
  'Pregúntanos por los productos sin gluten disponibles.': 'Ask us which gluten-free products we have today.',

  'Disponemos de una carta específica con información detallada de alérgenos. Puedes solicitarla en barra siempre que la necesites.':
    'We have a separate menu with detailed allergen information. Just ask for it at the counter whenever you need it.',

  /* ---------- Pedido: pistas para la nota ---------- */
  '¿Cuál quieres?': 'Which one would you like?',
  '¿De qué sabor?': 'Which flavour?',
  '¿Qué te apetece? Te decimos lo que hay hoy': 'What do you fancy? We’ll tell you what we have today',
  '¿De cuál? Te decimos las de hoy': 'Which one? We’ll tell you today’s',
  '¿De cuál? Te decimos los de hoy': 'Which one? We’ll tell you today’s',
};
