# BRAVA — Traspaso para nuevo chat

> Pega este archivo entero como primer mensaje en el chat nuevo. Contiene todo lo
> necesario para continuar la web de Brava sin repetir trabajo.

---

## 0. Qué es esto
Web estática (Astro + Tailwind v4) para **Brava** — cafetería de especialidad + brunch en
La Ñora, Murcia. Mobile-first, rápida, en español. La clienta **se fija en TODOS los detalles**:
la carta de la web debe quedar **EXACTAMENTE igual que el menú en PDF**, y el logo y los
iconos deben ser los **oficiales** (no recreaciones ni aproximaciones).

## 1. Rutas y carpetas (Windows)
- **Proyecto web:** `c:\Users\j.agueraa\Desktop\Orquestador-Programacion-main\Orquestador-Programacion-main\proyectos\BRAVA`
- **Fuentes oficiales (NO usar otras):** `C:\Users\j.agueraa\Desktop\necesidades brava\`
  - `Brava's Brandbook.pdf` (manda en lo visual)
  - `Menú movil Brava Traz.pdf` (manda en la carta — la web debe clavar su estructura)
  - `BRAVA_WEB_SPEC.md` (alcance del proyecto, 400 €)
- **Herramientas de extracción (scripts node, fuera del proyecto):**
  `c:\Users\j.agueraa\Desktop\Orquestador-Programacion-main\_pdftool\`
  - PDFs copiados a nombre ASCII: `brandbook_src.pdf`, `menu_src.pdf` (el apóstrofo del
    nombre original rompe Node; usar siempre las copias ASCII).
  - Deps: `@napi-rs/canvas`, `pdfjs-dist`, `potrace`, `puppeteer-core`.
  - Chrome para screenshots/Lighthouse: `C:/Program Files/Google/Chrome/Application/chrome.exe`

## 2. Cómo trabajar (comandos)
- Bash tool: usar `MSYS_NO_PATHCONV=1` al pasar rutas con `/` a node+puppeteer.
- Build: `cd .../proyectos/BRAVA && npm run build`
- Servir (ya suele estar levantado en :4321): `npm run preview` → http://localhost:4321/
- Screenshots: `_pdftool/shot.mjs` (puppeteer-core, headless). Para zooms uso scripts node
  inline con `deviceScaleFactor:2` y `el.scrollIntoView()`.
- Lighthouse móvil: `npx lighthouse@12 <url> --form-factor=mobile --screenEmulation.mobile
  --chrome-flags="--headless --no-sandbox" --output=json --output-path=...`
- Renders del PDF ya hechos: `_pdftool/menuhi/p{1-4}.png` (menú, escala 6, **fondo crema
  #fef9f5**), `_pdftool/brand/p{01-51}.png` (brandbook).
- Coordenadas de las imágenes del menú: `_pdftool/menu_places.json` (rects por placement,
  escala 6). Recortes exactos: `_pdftool/xcrops/` + `manifest.json`.

## 3. LO QUE YA FUNCIONA Y NO HAY QUE ROMPER

### Logo (oficial, exacto)
- Extraído como **render del PDF usado como máscara CSS** (NO potrace — potrace lo deforma).
- Archivos: `public/brand/wordmark.png`, `lockup.png`, `monogram.png` (negro sobre
  transparente; se recolorean con `currentColor` vía `mask-image`).
- Componente: `src/components/Logo.astro` con `variant="wordmark|lockup|monogram"` y `suffix`.
- Aspect ratios en el componente: wordmark 2052/686, lockup 2681/698, monogram 1439/1383.

### Iconos de cabecera del menú (oficiales, exactos del PDF)
- `public/brand/menu/vaso.png` (vaso take-away) y `pan.png` (pan de molde).
- En `SectionHeading.astro` como máscara. `menu.ts` → `icono?: 'vaso' | 'pan'`.
- Reglas del menú: **Combos NO lleva icono**; Drinks = vaso; Brunch/Treats = pan.

### Iconos de alérgenos (siluetas oficiales del menú)
- `public/brand/diet/` → `gluten, lacteos, huevo, frutos-secos, cacahuete, pescado, apio`.
- Componente `src/components/AllergenIcons.astro` (máscaras, `role="img"` con aria-label).
- Datos por plato en `menu.ts` campo `alergenos: Alergeno[]` (derivados de los ingredientes,
  igual que el menú). Leyenda al pie de la carta. Aviso: el detalle oficial se pide en barra.

### Fotos de producto (LIMPIAS — esto fue lo más difícil)
- Método correcto: **recorte EXACTO del rect de cada foto del render del menú (escala 6,
  fondo crema), SIN knockout.** El knockout dejaba rectángulos blancos/bordes → NO usarlo
  para fotos enmarcadas.
- En `src/assets/menu/`:
  - Brunch especiales (las 4 primeras, como el PDF): `esp-salmone-brioche, esp-brava-brioche,
    esp-salmone-baguel, esp-mortadella-bagel`. (Fit Baguel y siguientes = SOLO texto, igual que el menú.)
  - Treats especiales: `esp-pistachio, esp-nutella`.
  - Horneado: `horn-cookies` (galleta), `horn-hojaldres` (croissant), `horn-vegano` (empanada),
    `horn-singluten` (palmeras).
  - Tostadas: `tostadas-trio` (los 3 panes, completos).
  - Combos/Drinks (home + vitrina): `croissant, cookie, bagel, cafe-teal, cafe-amarillo,
    cafe-art, iced-brava, blue-matcha`.
- Mapa de imports: `src/assets/menuImages.ts`. Datos: `src/data/menu.ts` campo `foto`.
- Scripts que los generan (en `_pdftool/`): `menu_render.mjs` (render escala 6 crema),
  `menu_places.mjs` (rects), `crop_exact.mjs` (recortes), `finalize_clean.mjs` (recorta a
  contenido + 6% margen, sobre crema, máx 760px → copia al proyecto). `diet_extract.mjs` +
  `diet_finalize.mjs` (alérgenos). `icon_extract.mjs` (vaso/pan). `logo_raster.mjs` (logo).

### Carta (`src/components/MenuCategory.astro`) — fiel al menú
- Texto SIEMPRE marrón sobre crema (sin azul/amarillo). Color = fotos.
- Especiales = tarjetas con foto enmarcada (object-contain, fondo crema) + nombre subrayado +
  precio marrón + desc en cursiva + fila de iconos de alérgenos.
- Drinks = lista limpia (sin miniaturas), con iconos de alérgenos en los batidos.
- Tostadas = foto de los 3 panes + tabla Media/Entera.
- Horneado = tarjetas con foto.

### Brava Pass (`src/components/BravaPass.astro`)
- Tarjeta fidelidad digital (localStorage, sin backend). Sellos = monograma `bv` sobre blob
  amarillo (estilo "brava /points" del brandbook). **PIN del personal: 2468.**
- Objetivo actual **10 cafés = 1 gratis** (decisión del cliente). OJO: el brandbook dice
  "9 veces". Pendiente de confirmar con la clienta. Config en `site.config.ts → bravaPass`.

### Otros
- `site.config.ts`: único archivo editable por el cliente (dirección, tel `611 931 742`,
  WhatsApp E.164 `34611931742`, horario L-S 7:00–21:00 / domingo cerrado, Instagram
  **@hellobravaes**, Brava Pass, historia, legal).
- Footer: ya NO tiene la tira de iconos (se quitó por petición del cliente).
- Lighthouse móvil actual: Home ~96-99, Carta 100 · Accesibilidad 99 · SEO/BP 100. CLS 0.
- Build OK: 11 páginas. Páginas: `/ , /carta, /to-go, /historia, /local, /contacto,
  /brava-pass, /aviso-legal, /privacidad, /cookies, /404`.

## 4. PREFERENCIAS DEL CLIENTE (críticas)
- Quiere la carta **idéntica al PDF del menú**, sin inventar. Nada de fotos pequeñas
  flotando, nada de colores de letra raros (todo marrón), iconos exactos del PDF.
- Detecta cualquier detalle: fotos mal recortadas, iconos repetidos o fuera de sitio,
  elementos "de más". Verificar SIEMPRE con screenshot antes de decir que está hecho.
- Tono: directo. Si algo no está como el menú, lo dice sin rodeos.

## 5. PENDIENTE / POSIBLES SIGUIENTES PASOS

### ⚠️ LO PRIMERO en el chat nuevo (lo dijo el cliente)
- [ ] **La CARTA todavía NO está bien — hay que modificarla.** No darla por buena. El cliente
      indicará en el chat nuevo qué cambiar exactamente. Trabajar SIEMPRE contra el PDF
      `Menú movil Brava Traz.pdf` y verificar con screenshot antes de decir "hecho".
- [ ] **El resto de la web necesita "ligeros cambios"** (home, historia, to-go, local,
      contacto, brava-pass…). El cliente los irá detallando. Son retoques, no rehacer.
- [ ] Preguntar al cliente, plato a plato / sección a sección, qué no cuadra, en vez de
      asumir. El cliente se fija en todo.

### Otros pendientes
- [ ] Revisar que CADA foto cuadra con su plato (mapeo hecho por posición en el PDF; la
      clienta puede pedir ajustes por nombre).
- [ ] ¿Combos de la carta con foto+flecha como la página 1 del menú? (ahora es lista). El
      home sí tiene combos con foto+blob+flecha.
- [ ] Confirmar 9 vs 10 cafés en Brava Pass.
- [ ] Datos reales pendientes del cliente: foto + texto definitivo de la fundadora
      (`/historia`), textos legales reales + email, dominio definitivo (`SITE_URL`),
      Google Place ID + API key (reseñas reales + enlace de reseña del Pass).
- [ ] **Despliegue:** el cliente quiere subirla a su **VPS de Hostinger** cuando dé el OK
      (servir `dist/` con Nginx, o Node+PM2). Primero revisión en local (ya hecho).

## 6. ESTADO DE LA CONVERSACIÓN ANTERIOR
Se rehízo a fondo: logo oficial (máscara), carta fiel al menú (fotos enmarcadas limpias sin
knockout, 4 especiales de brunch con foto + resto texto, treats + horneado, 3 panes,
iconos de alérgenos bajo cada plato + leyenda, iconos de cabecera vaso/pan del PDF, todo
marrón), se quitaron: tira de iconos del footer, imagen de pie de carta, icono de vaso en
Combos. Último Lighthouse Carta 100/99/100/100.
