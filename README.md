# Candidatura Fuertafit — Tania de Azevedo Ribeiro

Landing de candidatura para la oferta de Diseñadora Gráfica en Fuertafit.
HTML/CSS/JS plano, sin dependencias ni build step. Abre `index.html` directamente o sírvelo con cualquier servidor estático (`python3 -m http.server`).

Estructura narrativa: Hero → Diseñar es adaptarse → Experiencia (Estrella Damm + LIV Golf) → Vídeo → CTA final.

## Vídeo

El vídeo de candidatura se reproduce como embed de YouTube (no listado) sobre un poster y controles personalizados (`#video` en `index.html`). `assets/video/tania-candidatura.mp4` se mantiene solo como archivo descargable desde el botón de descarga del reproductor.

## Estructura de archivos

- `index.html` — contenido y estructura
- `styles.css` — sistema de diseño (variables de color/tipografía/espaciado arriba del archivo)
- `script.js` — nav sticky, menú móvil, reveal on scroll, contador animado, carrusel de proyecto, lightbox
- `assets/proyectos/estrella-damm/` — fotos y mockups reales del proyecto (9 piezas)
- `assets/proyectos/liv-golf/` — fotos y mockups reales del proyecto (7 piezas: portada + galería)
- `assets/video/` — vídeo de candidatura (`tania-candidatura.mp4`) + `poster.jpg`

## Funcionalidades

- **Lightbox**: cualquier imagen con el atributo `data-lightbox` se abre en grande al hacer clic (fondo oscuro, cerrar con la X, clic fuera o Escape).
- **Carrusel de proyecto** (`.project-carousel`): usado en Estrella Damm para los 3 mockups de móvil — flechas, puntos y swipe nativo.
- **Masonry**: dos variantes en `styles.css` — `.project-masonry-3col` (columnas independientes de altura natural, usado en Estrella Damm) y `.project-masonry-flow` (masonry de flujo libre vía CSS `columns`, usado en LIV Golf).
