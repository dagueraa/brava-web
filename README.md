# Brava — Web

Web informativa, mobile-first y estática para **Brava** (café de especialidad + brunch, La Ñora, Murcia).
Carta digital + información del local + **Brava To Go** (pedido por WhatsApp/teléfono) + **El Alma de Brava** (historia).

Construida con **Astro + Tailwind CSS v4**. Sin backend, sin JS innecesario, optimizada para velocidad en móvil.

---

## Requisitos
- Node.js 18+ (probado con Node 24).

## Empezar
```bash
npm install      # instala dependencias
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en /dist
npm run preview  # sirve /dist en local para revisar el build
```

## Editar la web (para el cliente, sin tocar código)
Casi todo se cambia en **un solo archivo**: [`site.config.ts`](site.config.ts)
- Dirección, teléfono, WhatsApp, email, horario, mapa, redes.
- Textos de **Brava To Go** (mensaje de WhatsApp, plataformas, tiempo de preparación).
- Datos de **El Alma de Brava**.

La **carta** se edita en [`src/data/menu.ts`](src/data/menu.ts) (precios, productos, descripciones).
Es la **fuente de verdad**: las páginas se renderizan desde ahí. No hay precios escritos a mano en las páginas.

Las **fotos** están en `src/assets/fotos/`. Para cambiarlas, sustituye el archivo manteniendo el nombre
o actualiza [`src/assets/images.ts`](src/assets/images.ts).

> Pendientes de datos reales: ver [PENDIENTE_CLIENTE.md](PENDIENTE_CLIENTE.md).

## Estructura
```
site.config.ts          # configuración editable por el cliente
src/
  data/menu.ts          # la carta (fuente de verdad)
  assets/fotos/         # fotos reales (optimizadas en build)
  assets/images.ts      # selección de imágenes usadas
  components/           # UI (Logo, Header, Footer, ToGoBlock, ToGoOrder, HistoriaSection, MenuCategory…)
  layouts/Base.astro    # layout + <head> + SEO
  pages/                # /, /carta, /to-go, /historia, /local, /contacto, legales, 404
  styles/global.css     # tokens de marca (@theme) + base
public/                 # favicon, og-image, robots.txt
```

## Reseñas reales de Google (apartado en la home)
El carrusel de reseñas lee de `src/data/resenas.json`. Para mostrar **reseñas reales que se actualizan solas**:
1. Consigue tu **Place ID** y ponlo en `siteConfig.google.placeId` ([cómo](https://developers.google.com/maps/documentation/places/web-service/place-id)).
2. Crea una **API key** de Google con la *Places API* activada.
3. Define la variable de entorno antes de construir:
   ```bash
   GOOGLE_PLACES_API_KEY="tu_api_key" npm run build
   ```
   El hook `prebuild` ejecuta `scripts/fetch-resenas.mjs`, que trae las reseñas reales y reescribe `resenas.json`. En cada build/deploy se refrescan. (Para forzarlo sin construir: `npm run reviews`.)

Sin claves, se muestran reseñas de **ejemplo marcadas**; también puedes editarlas a mano en `resenas.json`.

> Nota: la Places API devuelve hasta 5 reseñas. Para un muro con todas y actualización en tiempo real sin rebuild, ver la opción v2 en [NOTAS_UPSELL.md](NOTAS_UPSELL.md).

## Despliegue
El build (`npm run build`) genera **`/dist`**, una carpeta estática que se publica en cualquier hosting estático.

### Antes de publicar: fijar el dominio
El sitemap, las URL canónicas y Open Graph usan `SITE_URL`. Pásalo al construir:
```bash
SITE_URL="https://tudominio.com" npm run build
```
(o edita el valor por defecto en [`astro.config.mjs`](astro.config.mjs)).

### Opciones de hosting (cualquiera vale)
- **Netlify:** arrastra la carpeta `dist/` a https://app.netlify.com/drop, o conecta el repo (build: `npm run build`, publish: `dist`).
- **Vercel:** importa el proyecto (framework: Astro; output detectado automáticamente).
- **Cloudflare Pages:** build command `npm run build`, output `dist`.
- **Cualquier hosting/FTP:** sube el contenido de `dist/`.

Incluye `robots.txt` y `sitemap-index.xml` generados automáticamente.

## Características técnicas
- 100 % estático, imágenes en WebP/AVIF responsive (astro:assets), `loading="lazy"`, sin CLS.
- Fuentes self-hosted (DM Sans + Caveat), sin Google Fonts en runtime.
- SEO: meta + Open Graph + Twitter Card + `sitemap.xml` + `robots.txt` + JSON-LD `Restaurant`.
- Accesibilidad: semántica correcta, foco visible, navegación por teclado, `alt`, `prefers-reduced-motion`.
- Sin tracking ni cookies de terceros (salvo el mapa de Google al interactuar).

## Documentación del proyecto
- [BRAND_TOKENS.md](BRAND_TOKENS.md) — colores/tipos del brandbook.
- [DECISIONES.md](DECISIONES.md) — ambigüedades resueltas.
- [PENDIENTE_CLIENTE.md](PENDIENTE_CLIENTE.md) — datos que faltan por aportar.
- [NOTAS_UPSELL.md](NOTAS_UPSELL.md) — ideas fuera del presupuesto.
- [QA_REPORT.md](QA_REPORT.md) — resultados de QA.
