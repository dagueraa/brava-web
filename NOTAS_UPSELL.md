# Notas de upsell — fuera de los 400 €

Ideas y funcionalidades **fuera del alcance contratado**. No implementadas; documentadas como
posibles ampliaciones para una fase 2.

## 1. Sistema de pedido online "real" (el grande)
La versión actual de **Brava To Go** es promoción + pedido por **WhatsApp/teléfono**, sin carrito ni pago.
Un sistema de pedido real incluiría:
- Carrito con selección de productos desde la carta.
- Selección de **hora de recogida** y/o entrega.
- **Pago con tarjeta** online (Stripe/Redsys) y gestión de pedidos.
- Notificaciones al local y al cliente.

> **Punto de extensión ya preparado:** el componente [`ToGoOrder.astro`](src/components/ToGoOrder.astro) está
> **aislado**. Cuando se contrate, se amplía ahí (carrito + checkout) sin tocar el resto de la web.

## 1b. Brava Pass — versión "blindada" (v2 con backend)
La versión actual del **Brava Pass** es una tarjeta **digital sin backend**: el estado se guarda en el
dispositivo del cliente (`localStorage`) y cada café se valida con un **PIN del personal**. Es un MVP estupendo,
pero tiene límites conocidos: el PIN viaja en el código (visible para alguien técnico), la tarjeta no se
sincroniza entre dispositivos y la "reseña" es por confianza (no se verifica).

La versión robusta (proyecto aparte) incluiría:
- **Cuentas de cliente** (login por teléfono/email mágico) → la tarjeta te sigue en cualquier dispositivo.
- **Backend + base de datos** (sellos, canjeos e historial reales y a prueba de manipulación).
- **Validación del personal** con su propia app/panel o **QR rotativo** en barra (en vez de PIN compartido).
- **Reseña verificada** vía API de Google antes de activar el pass.
- Métricas de fidelización, notificaciones de cumpleaños, segmentación, etc.

> El código ya está preparado para crecer: todo el estado del pass pasa por `read()/save()` en
> `src/components/BravaPass.astro`, fácil de sustituir por llamadas a una API.

## 1c. Reseñas — muro en tiempo real
La home ya muestra un **carrusel de reseñas** que se refresca con las reseñas reales de Google en cada
build/deploy (Place ID + API key). Límites de esta versión: la Places API devuelve **hasta 5 reseñas** y la
actualización ocurre al reconstruir el sitio (no "al instante").

Versión ampliada (proyecto aparte):
- **Muro con todas las reseñas** (no solo 5) y filtros por puntuación.
- **Actualización en tiempo real** sin rebuild (un pequeño backend que cachea y sirve las reseñas, o un
  widget de terceros tipo Elfsight/Trustindex).
- Agregación de varias fuentes (Google + Instagram + TripAdvisor).
- Moderación/selección de cuáles destacar.

## 2. Integraciones de delivery
Enlaces a Glovo / Uber Eats / Just Eat ya soportados como botones (`siteConfig.toGo.plataformas`).
Integración real (sincronización de carta, stock, pedidos) sería un proyecto aparte.

## 3. CMS / panel de administración
Editar carta, fotos y textos desde un panel (p. ej. un headless CMS) en lugar de `site.config.ts` / `menu.ts`.

## 4. Multidioma activo
El código está **preparado** para i18n (estructura y `lang`), pero solo se entrega **ES**. Activar EN/otros idiomas sería ampliación.

## 5. Blog / newsletter
Contenido (recetas, novedades, eventos) y captación de correo con un proveedor (privacy-friendly).

## 6. Analítica y marketing
Analítica respetuosa con la privacidad (p. ej. Plausible) + banner de cookies, píxeles de redes, campañas.

## 7. Fotografía profesional
Sesión de fotos nueva de producto, local y retrato de la fundadora (la web reutiliza la existente).

## 8. Reservas / fidelización
Reserva de mesa, tarjeta de puntos o programa de fidelización.
