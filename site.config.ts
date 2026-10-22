/* =====================================================================
 *  BRAVA — Configuración editable por el cliente
 * ---------------------------------------------------------------------
 *  Edita SOLO este archivo para cambiar textos clave, horario, dirección,
 *  teléfono, WhatsApp y redes. No hace falta tocar el resto del código.
 *
 *  Los valores marcados con  // (confirmar)  o  {{...}}  están pendientes
 *  de validación por el cliente (ver PENDIENTE_CLIENTE.md).
 *
 *  Datos extraídos de la tarjeta de visita y redes oficiales de Brava.
 * ===================================================================== */

export const siteConfig = {
  nombre: 'Brava',
  tagline: 'coffee and brunch',
  // Claim de marca (provisional alineado al tono del brandbook; confirmar)
  claim: 'Café de especialidad y brunch, hecho con calma.',
  descripcionSEO:
    'Brava — cafetería de especialidad, brunch y repostería en La Ñora (Murcia). Carta digital, combos, brunch saludable y opciones para llevar.',

  // --- Contacto ---
  direccion: 'Calle Mayor, 71, La Ñora, Murcia',
  ciudad: 'La Ñora',
  provincia: 'Murcia',
  cp: '30830', // (confirmar) CP de La Ñora
  pais: 'España',
  telefono: '868 620 516',          // fijo de Brava
  telefonoE164: '+34868620516',     // para enlaces tel:
  whatsapp: '34658520040',          // WhatsApp de Brava — formato wa.me (sin + ni espacios)
  email: 'bravabrunch@gmail.com',

  // --- Horario (real) ---
  // Lun-Sáb: 8:00–14:00 y 17:00–20:00 · Domingo cerrado
  horario: {
    lunes: '8:00–14:00 · 17:00–20:00',
    martes: '8:00–14:00 · 17:00–20:00',
    miercoles: '8:00–14:00 · 17:00–20:00',
    jueves: '8:00–14:00 · 17:00–20:00',
    viernes: '8:00–14:00 · 17:00–20:00',
    sabado: '8:00–14:00 · 17:00–20:00',
    domingo: 'Cerrado',
  } as Record<string, string>,
  horarioResumen: 'Lun–Sáb 8:00–14:00 y 17:00–20:00',

  // --- Ubicación / mapa ---
  // Enlace a la ficha EXACTA de Brava en Google Maps (por CID del local).
  mapsUrl: 'https://www.google.com/maps?cid=11248234258423200686',
  // URL de embed (iframe) — opcional; usa la versión "compartir > insertar un mapa" de Google
  mapsEmbed:
    'https://www.google.com/maps?q=Calle+Mayor+71+La+%C3%91ora+Murcia&output=embed',
  geo: { lat: 38.0009, lng: -1.1869 }, // (confirmar) aprox. La Ñora

  // --- Redes ---
  redes: {
    instagram: 'https://instagram.com/hellobravaes',
    instagramHandle: '@hellobravaes',
    tiktok: 'https://tiktok.com/@hellobravaes',
    tiktokHandle: '@hellobravaes',
    facebook: '',
  },

  // --- Google (reseñas + enlace para reseñar) ---
  google: {
    // Place ID (formato ChIJ...) — necesario para el formulario de reseña directo
    // y para traer reseñas reales automáticamente (con GOOGLE_PLACES_API_KEY).
    placeId: 'ChIJFVsZQxSBYw0RrruxW3bBGZw',
    // CID del local (sale de la URL de la ficha). Sirve para enlazar a la ficha exacta.
    cid: '11248234258423200686',
    // Enlace de reseña OFICIAL (el que da Google Business: g.page/r/.../review).
    // Si se rellena, el botón "Dejar reseña" abre directamente ese formulario.
    reviewUrl: '',
    // Cómo actualiza el script de reseñas cuando hay API key en el build:
    //   'meta' → actualiza SOLO la nota y el total de Google, conservando las
    //            reseñas elegidas a mano en resenas.json (recomendado).
    //   'full' → sustituye también las reseñas por las que devuelva Google (máx. 5).
    reviewsMode: 'meta',
    // Google Analytics 4. Es público y tiene el formato G-XXXXXXXXXX.
    // Se completará al crear la propiedad de Analytics de Brava.
    analyticsMeasurementId: 'G-G8B3K41EGR',
  },

  // --- Brava To Go (para llevar) ---
  toGo: {
    activo: true,
    mensajeWhatsApp: '¡Hola Brava! Me gustaría pedir para llevar:',
    tiempoPreparacionMin: '10–15', // (confirmar)
    plataformas: {
      glovo: '',
      uberEats: '',
      justEat: '',
    },
  },

  // --- Brava Pass (tarjeta de fidelidad digital) ---
  bravaPass: {
    activo: true,
    objetivo: 10, // cafés para conseguir 1 gratis
    // El enlace para dejar la reseña se calcula automáticamente (ver `reviewLink` abajo):
    // usa el Place ID si está, y si no abre la ficha de Brava en Google Maps.
    // PIN del personal para validar cada café y el canjeo. Cámbialo por el vuestro.
    // ⚠️ En esta versión sin backend el PIN viaja en el sitio (visible para alguien técnico).
    //    Frena el auto-sellado del cliente casual; la validación blindada llega con la v2 (backend).
    pin: '2468',
    // Texto de privilegios (editable)
    privilegios: [
      { icono: '10', titulo: '10 cafés = 1 gratis', desc: 'Suma un sello con cada café. Al llegar a 10, el siguiente te lo regalamos.' },
      { icono: 'cake', titulo: 'Brunch gratis en tu cumpleaños', desc: 'Guarda tu fecha y celébralo con nosotros invitando nosotros.' },
      { icono: 'star', titulo: 'Acceso anticipado', desc: 'Eventos y nueva carta antes que nadie.' },
    ],
  },

  // --- Campaña de Halloween (datos de la guía «Photocall Halloween · Team Brava») ---
  halloween: {
    activo: true,
    lema: 'Un café de miedo.',
    noche: '2026-10-31', // cuenta atrás
    promo: {
      nombre: 'Latte macchiato + cookie especial Halloween',
      precio: '5,90',
      frase: 'Un café de miedo y una foto inolvidable.',
    },
    // Cuenta de Instagram que da la guía de la campaña. OJO: no coincide con redes.instagramHandle
    // (@hellobravaes). Confirmar con Brava cuál es la buena antes de publicar.
    instagramCampana: '@brava.coffeeandbrunch',
    // En la guía figura como «Propuesta». Confirmar con Brava (y redactar bases legales) antes de publicar.
    concurso: {
      activo: true,
      premio: 'un brunch para dos',
      texto: 'Entre todas las fotos del photocall publicadas y etiquetadas durante octubre.',
    },
  },

  // --- El Alma de Brava (historia) ---
  historia: {
    titulo: 'El Alma de Brava',
    frase: 'No es solo un café. Es un sitio al que siempre te apetece volver.',
    // Foto de la fundadora — la aporta el cliente (placeholder marcado)
    fotoFundadora: '', // ver PENDIENTE_CLIENTE.md
  },

  // --- Datos de la empresa (titular legal) — para aviso legal y privacidad ---
  empresa: {
    razonSocial: 'Universe of God, S.L.',
    nif: 'B75747170',
    // Domicilio social/fiscal (puede diferir de la dirección del local de cara al público)
    domicilioLegal: 'Calle Olivo, 1, La Ñora, 30830 Murcia',
    // Datos fiscales adicionales aportados por la titular:
    aeat: 'Administración de la AEAT de Murcia (30601)',
    fechaNif: '14-01-2025',
  },

  legal: { aviso: '/aviso-legal', privacidad: '/privacidad', cookies: '/cookies' },
} as const;

export type SiteConfig = typeof siteConfig;

/* Helpers de contacto reutilizables en toda la web */
export const waLink = (text = siteConfig.toGo.mensajeWhatsApp) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${siteConfig.telefonoE164}`;

/* Enlace para dejar una reseña en Google (por orden de preferencia):
   1) reviewUrl oficial (g.page/r/.../review) → abre el formulario directo.
   2) Place ID (ChIJ...)                       → abre el formulario directo.
   3) CID del local                            → abre la ficha exacta (1 toque para reseñar).
   4) Búsqueda por nombre/dirección            → último recurso. */
export const reviewLink = siteConfig.google.reviewUrl
  ? siteConfig.google.reviewUrl
  : siteConfig.google.placeId
    ? `https://search.google.com/local/writereview?placeid=${siteConfig.google.placeId}`
    : siteConfig.google.cid
      ? `https://www.google.com/maps?cid=${siteConfig.google.cid}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${siteConfig.nombre} ${siteConfig.direccion}`,
        )}`;

export const horarioDias: { dia: string; horas: string }[] = [
  ['Lunes', siteConfig.horario.lunes],
  ['Martes', siteConfig.horario.martes],
  ['Miércoles', siteConfig.horario.miercoles],
  ['Jueves', siteConfig.horario.jueves],
  ['Viernes', siteConfig.horario.viernes],
  ['Sábado', siteConfig.horario.sabado],
  ['Domingo', siteConfig.horario.domingo],
].map(([dia, horas]) => ({ dia, horas }));
