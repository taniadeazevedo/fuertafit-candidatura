# Candidatura Fuertafit — Tania de Azevedo Ribeiro

Landing de candidatura para la oferta de Diseñadora Gráfica en Fuertafit.
HTML/CSS/JS plano, sin dependencias ni build step. Abre `index.html` directamente o sírvelo con cualquier servidor estático.

## Pendiente de sustituir antes de enviarla

- **`index.html` → sección `#proyectos`**: 5 tarjetas `.project-card__thumb` con placeholder rayado ("IMAGEN PLACEHOLDER"). Sustituir por capturas/piezas reales de cada proyecto (puede ser `<img>` o `background-image` en `.project-card__thumb`).
- **`index.html` → sección `#video`**: bloque `.video-frame` con placeholder "VIDEO_PLACEHOLDER". Sustituir por `<video controls src="assets/video-candidatura.mp4">` o el embed real (YouTube/Vimeo sin listar), manteniendo el contenedor `.video-frame` para conservar el estilo.
- **CTA final → "Ver portfolio"**: el `href="#"` debe apuntar al portfolio real.
- **CTA final → "Descargar CV"**: apunta a `assets/CV-Tania-de-Azevedo.pdf`. Añadir el PDF real en `assets/`.
- **CTA final → "Contactar" y footer → "Email"**: `mailto:hola@tuemail.com` — sustituir por el email real de contacto.
- **Footer → "LinkedIn"**: `href="#"` — añadir el enlace real.

## Estructura

- `index.html` — contenido y estructura de los 8 bloques
- `styles.css` — sistema de diseño (variables de color/tipografía/espaciado arriba del archivo)
- `script.js` — nav sticky, menú móvil, reveal on scroll, contador animado
- `assets/proyectos/` — carpeta preparada para las imágenes de proyectos
