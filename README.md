# Candidatura Fuertafit — Tania de Azevedo Ribeiro

Landing de candidatura para la oferta de Diseñadora Gráfica en Fuertafit.
HTML/CSS/JS plano, sin dependencias ni build step. Abre `index.html` directamente o sírvelo con cualquier servidor estático.

Estructura narrativa: Hero → Una idea, muchos formatos → Experiencia (3 proyectos) → Capacidades (Social/Ads/Web) → Web + IA → Vídeo → CTA final.

## Pendiente de sustituir antes de enviarla

- **`#proyectos` → Estrella Damm (01)**: `PROJECT_IMAGE_01` (imagen principal, bloque `.ph-block--main`) y `PROJECT_DETAIL_01` (formatos adicionales, `.ph-block--detail`).
- **`#proyectos` → LIV Golf (02)**: `PROJECT_IMAGE_02` y `PROJECT_DETAIL_02`, mismo patrón.
- **`#proyectos` → Open House Madrid (03)**: `PROJECT_IMAGE_03` (bloque `.ph-block--minor`, una sola imagen).
- Todos son `<div class="ph-block">` con un `<span class="placeholder-tag">` dentro — sustituir por `<img>` o poner la imagen como `background-image` del propio `.ph-block`.
- **`#video`**: bloque `.video-frame` con placeholder `VIDEO_TANIA`. Sustituir por `<video controls src="assets/video-tania.mp4">` o el embed real, manteniendo el contenedor `.video-frame` para conservar el estilo.
- **CTA final → "Ver portfolio"**: el `href="#"` debe apuntar al portfolio real.
- **CTA final → "Descargar CV"**: apunta a `assets/CV_PDF.pdf`. Añadir el PDF real en `assets/`.
- **CTA final → "Hablamos" y footer → "Email"**: `mailto:hola@tuemail.com` — sustituir por el email real de contacto.
- **Footer → "LinkedIn"**: `href="#"` — añadir el enlace real.

## Estructura de archivos

- `index.html` — contenido y estructura de los 7 bloques
- `styles.css` — sistema de diseño (variables de color/tipografía/espaciado arriba del archivo)
- `script.js` — nav sticky, menú móvil, reveal on scroll, contador animado
- `assets/proyectos/` — carpeta preparada para las imágenes de proyectos
