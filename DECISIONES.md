# Decisiones de proyecto — Brava

Registro de ambigüedades resueltas durante el desarrollo (en vez de inventar).

## Identidad
1. **Acentos de color.** El `.md` proponía teal/sage como acentos (provisionales). El **brandbook** define **azul `#6cb3e3` (Brava calm)** y **amarillo `#e7e251` (Brava fresh)**. → Se usan los del brandbook; se descartan teal/sage. (El brandbook manda.)
2. **Logo.** El brandbook construye el wordmark con *Neighbor Medium* + *Argent CF Demi Bold Italic* (la "v"). Son fuentes de pago no incluidas. → Se reproduce con DM Sans + serif itálica (Georgia) para la "v", conservando el contraste. Si el cliente aporta el SVG oficial, se sustituye. Ver [BRAND_TOKENS.md](BRAND_TOKENS.md).
3. **Tipografías.** El `.md` sugería Poppins/Inter como aproximación. El brandbook especifica **DM Sans** (principal) y **Caveat** (apoyo). → Se usan las del brandbook, self-hosted.

## Estructura
4. **Multipágina** (no single-page), por SEO local y por el peso propio que el `.md` pide para *To Go* e *Historia*. Rutas: `/`, `/carta`, `/to-go`, `/historia`, `/local`, `/contacto` + legales.
5. **`/contacto` y `/local`** se mantienen separadas (el `.md` permitía fusionarlas); ambas comparten el componente `LocationBlock`. Se omite el alias `/conoce-brava` para no generar contenido duplicado (canonical limpio en `/historia`).

## Datos reales (obtenidos de materiales oficiales, no inventados)
6. **Dirección, teléfono e Instagram** salen de la **tarjeta de visita oficial** (en el brandbook / fotos): `Calle Mayor, 71, La Ñora, Murcia` · `611 931 742` · `@brava.brunch`.
7. **Horario:** de la pieza oficial "Nuestro Horario": **Lunes a Sábado, 7:00–21:00**. El **domingo** no aparece → se asume **Cerrado** (marcar para confirmar).
8. **Fotografía:** se reutilizan fotos reales aportadas (`brava_fotos/`). Se descartaron las que tenían subtítulos quemados o marcas de agua (CapCut) para las piezas clave. La foto de la fundadora usada en `/historia` es real del local pero **se marca como provisional** hasta que la fundadora aporte su retrato definitivo.

## Menú / dietas
9. **Etiquetas de dieta:** solo se marcan donde el nombre/carta lo indica sin ambigüedad (Veggie Wrap → vegetariano; Brusquetta Garden → vegano; Vegano y Sin Gluten en horneado). El resto de información de alérgenos se remite a la carta de barra (riesgo de inventar datos dietéticos). Confirmar con el cliente si se desean más etiquetas.
10. **Precios:** transcritos del JSON (sección 7 del `.md`) y verificados contra `Menú movil Brava Traz.pdf`. Coinciden ítem a ítem (ver [QA_REPORT.md](QA_REPORT.md)).

## Pendiente de confirmar (no bloqueante)
- CP exacto de La Ñora (se usó `30830` aprox.), coordenadas geo aproximadas, email de contacto, horario de domingo, tiempo de preparación de To Go, claim oficial de marca.
- Ver [PENDIENTE_CLIENTE.md](PENDIENTE_CLIENTE.md).
