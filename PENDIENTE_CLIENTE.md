# Pendiente de aportar por el cliente — Brava

Todo lo de abajo se edita en **`site.config.ts`** (salvo fotos y textos largos). La web ya funciona con
valores reales o provisionales; sustituir cuando se disponga de lo definitivo.

## Datos de contacto / negocio
- [ ] **Email de contacto** (`siteConfig.email`) → ahora vacío; aparece como `{{email}}` en legales.
- [ ] **CP exacto** de La Ñora (`siteConfig.cp`, ahora `30830` aproximado).
- [ ] **Coordenadas geo** exactas del local (`siteConfig.geo`) para el JSON-LD y mapa.
- [ ] **Horario de domingo** (ahora asumido "Cerrado").
- [ ] **Enlace exacto de Google Maps** del local (ahora búsqueda por dirección). Pega el enlace de "Compartir" en `siteConfig.mapsUrl` y el de "Insertar un mapa" en `siteConfig.mapsEmbed`.
- [ ] **Claim oficial de marca** (`siteConfig.claim`, ahora provisional alineado al tono).

## Brava To Go
- [ ] **Tiempo medio de preparación** (`siteConfig.toGo.tiempoPreparacionMin`, ahora "10–15").
- [ ] **Enlaces de plataformas** (Glovo / Uber Eats / Just Eat) si se usan (`siteConfig.toGo.plataformas`). Vacíos = no se muestran.
- [ ] Confirmar el **mensaje prerredactado** de WhatsApp.

## El Alma de Brava (`/historia`)
- [ ] **Retrato definitivo de la fundadora** (sustituir `src/assets/fotos/brava-17.jpg` o fijar `siteConfig.historia.fotoFundadora`). La foto actual es real del local pero está marcada como provisional en la web.
- [ ] **Texto de historia definitivo** (3 beats: nacimiento, inspiración, filosofía). El copy actual es **provisional de calidad** en `src/components/HistoriaSection.astro`; ajústalo con la historia real (sin inventar datos biográficos).
- [ ] **Fotos del local** para la galería editorial (si se quieren cambiar las actuales).

## Legal (obligatorio en España)
- [ ] **Aviso legal:** titular, NIF/CIF, email (`src/pages/aviso-legal.astro`).
- [ ] **Política de privacidad:** responsable y email (`src/pages/privacidad.astro`).
- [ ] **Política de cookies:** revisar si se añade analítica (entonces hará falta banner de consentimiento).

## Reseñas (apartado en la home)
- [ ] **Place ID de Google** (`siteConfig.google.placeId`). Con él, el botón "Dejar reseña" abre el formulario directo y se pueden traer las reseñas reales. Sin él, "Dejar reseña" abre tu ficha en Google Maps (funciona igual, un paso más).
- [ ] **Reseñas reales** — dos formas:
  - **Automática:** define la variable de entorno `GOOGLE_PLACES_API_KEY` (API key con *Places API* activada) y el Place ID; en cada build/deploy se traen solas (`npm run reviews` o automáticamente con `npm run build`).
  - **Manual:** edita `src/data/resenas.json` con tus reseñas reales (autor, estrellas, texto).
- Mientras tanto se muestran **3 reseñas de ejemplo claramente marcadas** — sustitúyelas antes de publicar.

## Brava Pass (tarjeta de fidelidad digital)
- [ ] **Enlace de reseña de Google** (`siteConfig.bravaPass.reviewUrl`, ahora `{{ENLACE_RESEÑA_GOOGLE}}`). Cómo obtenerlo: en tu ficha de Google Business → "Pedir reseñas" → copia el enlace corto; o con el "Place ID Finder" de Google y `https://search.google.com/local/writereview?placeid=TU_PLACE_ID`.
- [ ] **PIN del personal** (`siteConfig.bravaPass.pin`, ahora `2468`). Cámbialo por uno vuestro y no lo compartáis con clientes.
- [ ] (Opcional) Ajustar textos de privilegios y el objetivo de cafés (`siteConfig.bravaPass`).

## Redes
- [ ] **TikTok / Facebook** si existen (`siteConfig.redes`).
- [x] Instagram actualizado a **@hellobravaes**.

## Dominio y despliegue
- [ ] **Dominio definitivo** → fijar `SITE_URL` (ver [README.md](README.md)). Ahora se usa `https://brava-brunch.es` como marcador para sitemap/canonical/OG.
