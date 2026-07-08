# Revisión exhaustiva — Brava Web

Auditoría completa del estado de la web frente al brandbook, la carta y el `.md`, con lo **hecho** y lo
**recomendado**. Marcado con prioridad: 🔴 alta · 🟡 media · 🟢 opcional.

---

## ✅ Hecho en esta revisión (ilustraciones del brandbook)

- **Extraídas las 13 ilustraciones oficiales** del brandbook (PDF → vectorizadas a SVG, no recreaciones):
  `muffin, tostada, croissant, cookie, cafe, smoothie, cuenco, cuenco-takeaway, bolsa, botella, taza, lechera, pan`.
  → en [`src/data/brandIcons.json`](src/data/brandIcons.json), servidas por [`BrandIcon.astro`](src/components/BrandIcon.astro) con `currentColor`.
- **Sustituidas** las recreaciones anteriores por las reales en: cabeceras de carta (`brava /combos`, `/drinks`, `/brunch`, `/treats`), pasos de **Brava To Go**, sellos del **Brava Pass**, **404** y **combos** de la home.
- **Tira decorativa** de ilustraciones en el footer (recurso de marca del brandbook).
- **Favicon** rehecho con la ilustración real de la **taza** sobre marrón Brava.

---

## 1. Marca y visual

- [x] Colores oficiales del brandbook aplicados (brown, cream, fresh, calm).
- [x] Tipografías oficiales (DM Sans + Caveat), self-hosted.
- [x] Lockup `brava /categoría`, blobs y flechas dibujadas.
- [x] Ilustraciones oficiales (esta revisión).
- 🟡 **Logo "brava" oficial en SVG.** Ahora el wordmark se compone con DM Sans + serif itálica para la "v" (muy fiel). Si la fundadora tiene el **SVG/AI original** del logo, lo integramos para fidelidad 100 % (incluida la "v" exacta y el monograma "bv").
- 🟢 **Imagen OG** (`public/og-image.png`): generada con el wordmark; si integramos el SVG oficial, la regeneramos con él.
- 🟢 **Patrones de líneas/texturas** del brandbook (además de las rayas): se podrían usar como fondos de sección puntuales.

## 2. Contenido y fotografía

- [x] Carta completa con precios verificados contra el PDF.
- [x] Fotos reales del local y producto (hero, To Go, historia, local).
- 🔴 **Foto real de la fundadora** para `/historia` (ahora hay una provisional marcada).
- 🔴 **Texto definitivo de "El Alma de Brava"** (ahora copy provisional de calidad).
- 🟡 **Fotos de producto en la carta.** El brandbook presenta la carta con foto de cada producto sobre blob. La web la dejó tipográfica (más rápida en móvil). Si quieres, añadimos **foto a los destacados** (combos, especiales) sin penalizar rendimiento. Decisión de diseño/cliente.
- 🟡 **Iconos de dieta del brandbook.** Si el brandbook/carta tienen un set propio (vegano, sin gluten, sin lactosa…), lo extraemos como hicimos con las ilustraciones. Ahora se usan glifos discretos propios y se etiqueta solo lo inequívoco.

## 3. Funcionalidad

- [x] **Brava Pass** digital (sellos + PIN + canjeo + cumpleaños), por dispositivo.
- [x] **Reseñas** con carrusel; integración con Google lista (Place ID + API key).
- [x] **Brava To Go** por WhatsApp/teléfono (sin carrito).
- 🔴 **Place ID + API key de Google** → activa reseñas reales y el enlace de reseña directo del Pass.
- 🟡 **Brava Pass v2 (con backend)**: cuentas, validación a prueba de manipulación, reseña verificada (ver [NOTAS_UPSELL.md](NOTAS_UPSELL.md)).
- 🟢 Enlaces de **Glovo/Uber Eats/Just Eat** si trabajáis con ellos (`site.config` → `toGo.plataformas`).

## 4. Datos del negocio (en `site.config.ts`)

- [x] Dirección, teléfono, WhatsApp, horario, Instagram (**@hellobravaes**).
- 🔴 **Email** de contacto (aparece en legales).
- 🟡 **CP exacto** de La Ñora y **coordenadas geo** (para JSON-LD/mapa).
- 🟡 **Horario de domingo** (asumido "Cerrado").
- 🟡 **Enlace exacto de Google Maps** del local (ahora búsqueda por dirección).
- 🟢 **Claim oficial** de marca (ahora provisional).

## 5. SEO, legal y rendimiento

- [x] Meta + Open Graph + Twitter Card + sitemap + robots + JSON-LD `Restaurant`.
- [x] Páginas legales creadas (aviso, privacidad, cookies) con `noindex`.
- [x] Lighthouse 97–100 en las 4 métricas, **CLS 0**.
- 🔴 **Textos legales reales** (titular, NIF/CIF, email) — placeholders marcados.
- 🟡 **Dominio definitivo** → fijar `SITE_URL` antes de publicar (sitemap/canonical/OG).
- 🟢 Analítica respetuosa (Plausible) + banner de cookies, solo si la queréis.

## 6. Accesibilidad

- [x] AA: contraste, foco visible, teclado, `alt`, semántica, `prefers-reduced-motion`, skip-link.
- [x] Carrusel y Brava Pass accesibles (dialog, target-size, roles).

---

## Resumen de prioridades para salir a producción

🔴 **Imprescindible antes de publicar:** foto + texto de la fundadora · textos legales reales · email · dominio (`SITE_URL`) · (recomendado) Place ID + API key de Google para reseñas reales.
🟡 **Mejora a corto plazo:** fotos de producto en carta · iconos de dieta oficiales · datos finos (CP, geo, domingo, Maps).
🟢 **Cuando toque:** SVG oficial del logo · plataformas delivery · analítica · Brava Pass v2.

> Todo lo 🔴/🟡 de datos se edita en `site.config.ts`. Ver también [PENDIENTE_CLIENTE.md](PENDIENTE_CLIENTE.md).
