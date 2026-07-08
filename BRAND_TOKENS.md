# Brand Tokens — Brava

Fuente oficial: **`Brava's Brandbook.pdf`**. El brandbook manda sobre todo lo visual.
Los tokens están definidos en [`src/styles/global.css`](src/styles/global.css) (`@theme`) y se usan en toda la web.

## Colores (oficiales del brandbook, sección 03)

| Token | HEX | RGB | Origen | Uso en la web |
|---|---|---|---|---|
| `brand-brown` | `#443631` | 68 54 49 | **Brandbook** (Brava brown) | Texto principal, logotipo, fondos oscuros, footer |
| `brand-cream` | `#fef9f5` | 254 249 245 | **Brandbook** (Brava cream) | Fondo principal |
| `brand-fresh` | `#e7e251` | 231 226 81 | **Brandbook** (Brava fresh) | Acento amarillo (badge "Hoy", detalles) |
| `brand-calm` | `#6cb3e3` | 108 179 227 | **Brandbook** (Brava calm) | Acento azul: CTA "Para llevar", titulares de apoyo |
| `brand-brown-80` | `#6c5e57` | — | Derivado (escala 80 % del brown) | Texto secundario |
| `brand-brown-60` | `#948983` | — | Derivado (escala 60 % del brown) | Texto terciario, descripciones |
| `brand-cream-2` | `#f7ede3` | — | Derivado (crema más cálida) | Tarjetas, blobs, fondos suaves |
| `brand-line` | brown @ 18 % | — | Derivado | Líneas finas bajo títulos (`.rule-soft`) |

> El patrón de **rayas verticales crema** del brandbook se implementa en `.bg-stripes` (sutil, sobre el fondo crema).

## Tipografías (oficiales del brandbook, sección 04)

| Rol | Fuente | Origen | Notas |
|---|---|---|---|
| Principal (cuerpo y titulares) | **DM Sans** (variable, self-hosted vía `@fontsource-variable/dm-sans`) | **Brandbook** | Todos los pesos |
| Apoyo / frases destacadas | **Caveat** (variable, self-hosted) | **Brandbook** | Manuscrita, para acentos emotivos (historia, valores) |

### Logotipo — SVG OFICIAL (vectorizado del brandbook)
- **El logo ya es el oficial**, vectorizado **directamente del PDF del brandbook** (no es una recreación con fuentes). Vive en [`src/data/brandLogo.json`](src/data/brandLogo.json) y lo sirve [`Logo.astro`](src/components/Logo.astro) como SVG inline con `currentColor`:
  - `variant="wordmark"` → la palabra **brava** con la "v" de swash oficial (*Neighbor Medium* + *Argent CF Demi Bold Italic*).
  - `variant="lockup"` → wordmark + **coffee and brunch** (bloque oficial; hero y footer).
  - `variant="monogram"` → el monograma **bv** (sellos del Brava Pass, cierres de sección).
- Lockup **`brava /categoría`** vía la prop `suffix` (combos, drinks, brunch, treats, to go, carta, points).
- Al ser SVG inline no depende de fuentes → **CLS 0** y fidelidad 100 %.

## Sistema de ilustraciones (brandbook, sección 05)
Las **13 ilustraciones oficiales** del brandbook, **extraídas del PDF y vectorizadas** (no recreadas), en
[`src/data/brandIcons.json`](src/data/brandIcons.json) y renderizadas con `currentColor` por
[`BrandIcon.astro`](src/components/BrandIcon.astro):
`muffin · tostada · croissant · cookie · cafe · smoothie · cuenco · cuenco-takeaway · bolsa · botella · taza · lechera · pan`.
Se usan en: cabeceras de la carta (`brava /categoría`), pasos de Brava To Go, tarjeta del Brava Pass,
tira decorativa del footer, favicon (taza), combos y 404.
Recursos de marca adicionales: **blobs** orgánicos ([`Blob.astro`](src/components/Blob.astro)) y **flechas dibujadas** ([`HandArrow.astro`](src/components/HandArrow.astro)), vistos en la página de Combos.

## Qué viene del brandbook vs. derivado
- **Del brandbook (no tocar):** los 4 colores base, DM Sans, Caveat, construcción del logo, lockup `/categoría`, siluetas, blobs, flechas, fondo crema con rayas, tono de voz.
- **Derivado/por defecto (ajustable):** escalas de marrón (80/60 %), `cream-2`, radios de blob, animaciones. Sustituibles si el brandbook especifica otros valores.
