# Diseño de la landing — v3 · "daniela." (layout Dawn + colores de agencia Chevrolet)

> **v3 (20-nov-2026):** layout de [dawnsaunders.com](https://www.dawnsaunders.com/) con colores de agencia Chevrolet (azul marino + dorado + blanco).
> La v1 (negro carbono + dorado, estilo concesionaria) quedó reemplazada.

Datos: [INFO_DANIELA.md](INFO_DANIELA.md). Idioma: español (MX). Objetivo: que la gente **le escriba por WhatsApp o le llame**.

## Qué tomamos de dawnsaunders.com

| Dawn | Daniela |
|---|---|
| Hero de color sólido, nombre gigante delgado "dawn." detrás de su foto recortada, semicírculo negro detrás | Hero **azul marino**, **"daniela."** gigante en blanco, su **foto real sin fondo** al frente, semicírculo **dorado** detrás, punto dorado |
| Frase corta a la izquierda + bio a la derecha | "Tu próximo Chevrolet empieza con un hola." + bio y CTAs |
| Círculo gigante con manifiesto ("I am a teacher, an immigrant…") | Círculo con manifiesto ("Soy tu **asesora**, tu **guía**…"); las palabras se iluminan al hacer scroll |
| Dos tarjetas grandes de libros con palabra gigante ("loren." / "dawn.") | Dos tarjetas de sus **pickups favoritas**: **"s10."** y **"silverado."** con sus fotos como "portada" |
| Foto a todo lo ancho con frase grande | Franja azul marino con la foto real de la agencia: "Todo Chevrolet. Una sola persona que te atiende." |
| Reseñas en columnas verticales que se expanden | **Pasos para estrenar** en columnas verticales que se expanden (sin inventar reseñas) |
| "Letters from Dawn." lista con tarjeta destacada | **"Modelos."** lista por tipo con tarjeta destacada **Chevroletazo** |
| — | **Calculadora de mensualidad** (se conserva de v1, rediseñada) |
| FAQ "Questions, answered." | **"Preguntas, respondidas."** |
| Dos tarjetas finales (color + foto) | **Contacto**: tarjeta dorada con formulario → WhatsApp + tarjeta con mapa/fachada |
| Footer con "Begin again." gigante sobre semicírculo | Footer con **"te espero."** gigante sobre semicírculo azul marino |

## Paleta v3: agencia Chevrolet (reemplaza el atardecer de la v2)

La v2 (atardecer naranja/rosa/violeta + ilustraciones pop-art) se descartó porque se veía "muy GTA". Las agencias y vendedores de autos usan **azul marino** (confianza) + blanco/gris + **un solo acento cálido**. Chevrolet usa oficialmente un dorado profundo **#B6862D** y un gris carbón **#393839**, y en su logo el dorado va con azul marino (Pantone 282).

| Token | Hex | Uso |
|---|---|---|
| `navy` | `#0B2545` | hero, manifiesto, pasos, tarjetas: color principal |
| `navy-2` | `#143560` | columnas de pasos, hovers |
| `gold` / `gold-deep` | `#C9973A` / `#B6862D` | dorado Chevrolet: semicírculo del hero, botones, puntos |
| `bg-gold-metal` | `#E3BB67 → #C9973A → #A97C27` | dorado metálico (botones, semicírculo, tarjeta S10) |
| `white` / `mist` | `#FFFFFF` / `#F3F5F8` | secciones claras |
| `charcoal` | `#111418` | FAQ y footer |
| `ink` | `#0F1C2E` | texto sobre claro |

Cambios de la v3:
- Hero azul marino con un brillo suave de showroom y **semicírculo dorado** detrás de su foto.
- Se quitaron las ilustraciones pop-art de la página. La franja grande ahora usa la **foto real de la fachada** de la agencia.
- La imagen para compartir en redes (`og.jpg`) ahora es su foto real en azul y dorado.

Referencias: [Chevrolet Dealer Ad Guidelines](https://di-uploads-pod1.training.dealerinspire.com/prod-thedash/uploads/2022/09/Chevrolet_Dealer_Ad_Guidelines_US_PuertoRico_Only.pdf), [colores en sitios de agencias](https://www.autoxloo.com/blog/choose-a-right-color-for-your-dealer-website.html).

## Tipografía

- **Figtree** (300 para palabras gigantes, 500–700 para titulares). Geométrica y limpia, como la de Dawn.
- **Newsreader** (serif) para los párrafos, con el toque editorial de Dawn.

## Fotos

- `daniela-cutout.webp`: foto real (avatar de TikTok) **sin fondo**, recortada con Vision de macOS. La parte de arriba del pelo estaba cortada en el original y se reconstruyó.
- `duo-cutout.webp`: su ilustración con su compañero, sin fondo. **Ya no se usa en la v3.**
- `s10-showroom.webp`, `silverado-sunset.webp`, `agencia-fachada.webp`: de su Instagram.

## Secciones (orden)

1. Nav: **daniela**herrera**.** · Modelos · Conóceme · Financiamiento · Contacto · botón negro "WhatsApp".
2. Hero azul marino (descrito arriba).
3. Manifiesto en semicírculo azul marino sobre blanco.
4. "Mis favoritas": tarjetas S10 Max / Silverado.
5. Franja: texto en azul marino + foto real de la fachada de la agencia.
6. Modelos (lista por tipo y Chevroletazo destacado).
7. Así de fácil (columnas expandibles).
8. Calculadora.
9. FAQ.
10. Contacto (formulario → WhatsApp, mapa).
11. Footer "te espero."
12. Móvil: barra fija Llamar / WhatsApp.

## Pendientes a confirmar con Daniela

- Que el 414 229 0953 tenga WhatsApp, su horario y su correo.
- Reseñas reales de clientes.
- Una foto profesional de cuerpo medio. Con fondo liso se recorta mejor y daría un hero aún más tipo Dawn.
- Dominio.
