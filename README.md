# Candidatura Fuertafit — Tania de Azevedo Ribeiro

Landing de candidatura para la oferta de Diseñadora Gráfica en Fuertafit.
HTML/CSS/JS plano, sin dependencias ni build step. Abre `index.html` directamente o sírvelo con cualquier servidor estático (`python3 -m http.server`).

Estructura narrativa: Hero → Diseñar es adaptarse → Experiencia (Estrella Damm + LIV Golf) → Capacidades y evolución (Web + IA) → Vídeo → CTA final.

## ⚠️ Antes de publicarla

- **El vídeo pesa 77 MB** (`assets/video/tania-candidatura.mp4`). Está convertido y comprimido desde el `.mov` original (165 MB → 77 MB con las herramientas disponibles en este Mac), pero sigue siendo demasiado pesado para una web en producción. Antes de publicar, comprímelo más (HandBrake, o similar) o mejor aún, súbelo a YouTube/Vimeo como no listado y sustituye el `<video>` por su embed — cargará mucho más rápido para quien lo abra.

## Pendiente de sustituir antes de enviarla

- **CTA final → "Ver portfolio"**: el `href="#"` debe apuntar al portfolio real.
- **CTA final → "Descargar CV"**: apunta a `assets/CV_PDF.pdf` — añadir el PDF real en `assets/`.
- **CTA final → "Hablamos" y footer → "Email"**: `mailto:hola@tuemail.com` — sustituir por el email real de contacto.
- **Footer → "LinkedIn"**: `href="#"` — añadir el enlace real.
- **LIV Golf**: quedan huecos si quieres seguir ampliando la galería (`.project-masonry-flow` en `#proyectos`), aunque ya tiene 9 piezas reales (portada + 8 en galería).

## Estructura de archivos

- `index.html` — contenido y estructura
- `styles.css` — sistema de diseño (variables de color/tipografía/espaciado arriba del archivo)
- `script.js` — nav sticky, menú móvil, reveal on scroll, contador animado, carrusel de proyecto, lightbox
- `assets/proyectos/estrella-damm/` — fotos y mockups reales del proyecto (9 piezas)
- `assets/proyectos/liv-golf/` — fotos y mockups reales del proyecto (9 piezas: portada + galería)
- `assets/video/` — vídeo de candidatura (`tania-candidatura.mp4`) + `poster.jpg`

## Funcionalidades

- **Lightbox**: cualquier imagen con el atributo `data-lightbox` se abre en grande al hacer clic (fondo oscuro, cerrar con la X, clic fuera o Escape).
- **Carrusel de proyecto** (`.project-carousel`): usado en Estrella Damm para los 3 mockups de móvil — flechas, puntos y swipe nativo.
- **Masonry**: dos variantes en `styles.css` — `.project-masonry-3col` (columnas independientes de altura natural, usado en Estrella Damm) y `.project-masonry-flow` (masonry de flujo libre vía CSS `columns`, usado en LIV Golf).
