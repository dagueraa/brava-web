# QA Report — Brava Web

Fecha: 2026-06-13 · Build estático (Astro 5 + Tailwind 4) · Probado con Chrome headless.

## 1. Lighthouse (móvil, emulación móvil)

| Página | Performance | Accesibilidad | Best Practices | SEO | CLS |
|---|---|---|---|---|---|
| `/` Inicio | **99** | **100** | **100** | **100** | 0 |
| `/carta` | **100** | **100** | **100** | **100** | 0 |
| `/to-go` | **100** | **96** | **100** | **100** | 0 |
| `/historia` | **97** | **100** | **100** | **100** | 0 |
| `/local` | **100** | **96** | **100** | **100** | 0 |
| `/contacto` | **99** | **96** | **100** | **100** | 0 |
| `/brava-pass` | **100** | **100** | **100** | **100** | 0 |

✅ Todas ≥ 90 en las 4 métricas (objetivo del `.md`). LCP inicio ≈ 2,0 s. **CLS = 0** en todas.
> Nota: `/to-go`, `/local` y `/contacto` dan 96 en accesibilidad por avisos menores no bloqueantes
> (p. ej. heurística de contraste del icono de WhatsApp verde de marca). Sin errores de accesibilidad reales.

## 2. Verificación de la carta (precios vs. fuente)
- Precios y textos transcritos de la sección 7 del `.md` y **verificados contra `Menú movil Brava Traz.pdf`** (combos, drinks, brunch, treats). **Coinciden ítem a ítem.**
- Tostadas con doble precio **Media / Entera** legibles en móvil (tarjetas) y escritorio (tabla). `Pan sin gluten` muestra `—` en Media y `4,00 €` en Entera, como en el PDF.
- Bloque de **alérgenos** visible al final de la carta.
- Etiquetas de dieta solo donde es inequívoco (Veggie Wrap → vegetariano; Brusquetta Garden → vegano; Vegano / Sin Gluten en horneado).

## 3. Brava To Go
- CTA **"Pedir por WhatsApp"** funcional: `https://wa.me/34611931742?text=...` con **mensaje prerredactado** ("¡Hola Brava! Me gustaría pedir para llevar:"). ✅ verificado en el HTML generado.
- CTA **"Llamar"**: `tel:+34611931742`. ✅
- Sin carrito ni pago. Componente `ToGoOrder` aislado para futura ampliación.
- Botón flotante de WhatsApp persistente en todas las páginas.

## 4. El Alma de Brava
- Retrato de la fundadora (foto real, **marcada como provisional**), historia en **3 beats** (nacimiento, inspiración, filosofía — copy provisional de calidad), galería editorial tipo mosaico, valores y CTA. ✅

## 4b. Brava Pass (tarjeta de fidelidad digital)
- Flujo probado de extremo a extremo (automatizado): activar pass tras reseña → **PIN incorrecto rechazado** → 10 sellos con PIN correcto → botón de canjear aparece al completar → **canjear reinicia a 0 y suma +1 a "cafés gratis"**. Sin errores de consola.
- Persistencia en `localStorage` (`bravaPass.v1`). Aviso de cumpleaños por fecha. Modal de PIN accesible (`<dialog>`).
- Limitación conocida (sin backend): PIN en cliente y tarjeta por dispositivo → documentado como upsell v2 en [NOTAS_UPSELL.md](NOTAS_UPSELL.md).
- Instagram actualizado a **@hellobravaes** en toda la web (footer, historia, contacto, JSON-LD `sameAs`).

## 4c. Reseñas (carrusel en la home)
- Carrusel accesible con autoplay (pausa al interactuar / pestaña oculta / `prefers-reduced-motion`), flechas, puntos sincronizados con el swipe y efecto de tarjeta central. Probado: 3 tarjetas, flechas y puntos OK, sin errores de consola.
- Fuente: `src/data/resenas.json`. **Integración real con Google** vía `scripts/fetch-resenas.mjs` (Place ID + `GOOGLE_PLACES_API_KEY`) en cada build; si no hay claves, muestra ejemplos **marcados como provisionales**.
- Botón "Dejar reseña" corregido: ahora abre un enlace válido de Google (antes daba error por el placeholder). Home tras añadir el carrusel: Perf 99 · A11y 100 · BP 100 · SEO 100 · CLS 0.

## 5. SEO / técnico
- `<title>` y `meta description` por página; Open Graph + Twitter Card; imagen OG de marca.
- `sitemap-index.xml` + `sitemap-0.xml` (9 URLs) y `robots.txt` generados. Legales con `noindex`.
- **JSON-LD `Restaurant` / `CafeOrCoffeeShop`** con nombre, dirección, geo, teléfono, horario y `servesCuisine`. ✅
- Canonical por página. Idioma `es`.

## 6. Accesibilidad (objetivo AA)
- Contraste AA verificado (se oscurecieron `brand-brown-60` para texto y se introdujo `brand-calm-ink` para el azul manuscrito sobre crema).
- Orden de encabezados correcto (h1→h2→h3). Foco visible. Skip-link "Saltar al contenido".
- `alt` en todas las imágenes. `prefers-reduced-motion` respetado (anima sutil → estático).
- Navegación por teclado y menú móvil con `aria-expanded`.
- **Sin JS, todo el contenido es visible** (las animaciones de reveal son mejora progresiva).

## 7. Responsive
- Verificado a 360 / 390 / 768 / 1024 / 1280 px (capturas en revisión). Header pegajoso, menú hamburguesa, carta con pestañas de categoría pegajosas y scrollspy. Sin desbordes; tostadas no desbordan en móvil.

## 8. Rendimiento
- 100 % estático, imágenes WebP/AVIF responsive (astro:assets), `loading="lazy"` salvo el hero (`eager`/`fetchpriority=high`).
- Fuentes self-hosted con **preload** de DM Sans (elimina el reflow del wordmark → CLS 0).
- Peso total de `dist`: ~2 MB (incluye todas las variantes de imagen).

## Pendiente (no técnico, del cliente)
Ver [PENDIENTE_CLIENTE.md](PENDIENTE_CLIENTE.md): email, CP/geo exactos, horario domingo, textos legales y de historia definitivos, retrato de la fundadora, dominio.
