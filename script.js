// ===== "FORMAS" cambia de tipografía: diseño en todas sus formas, literalmente =====
const fontCycleEls = document.querySelectorAll('[data-font-cycle]');
if (fontCycleEls.length) {
  const fonts = [
    "'Sora', sans-serif",
    "Georgia, serif",
    "'Courier New', monospace",
    "Impact, sans-serif",
    "Verdana, sans-serif",
    "'Times New Roman', serif",
  ];
  let fontIndex = 0;
  setInterval(() => {
    fontIndex = (fontIndex + 1) % fonts.length;
    fontCycleEls.forEach((el) => { el.style.fontFamily = fonts[fontIndex]; });
  }, 1100);
}

// ===== Nav: estado al hacer scroll =====
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Menú móvil =====
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('mobileNav');

function closeMobileNav() {
  mobileNav.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

mobileNav.querySelectorAll('[data-nav]').forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});

// ===== Nav activo según sección visible =====
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__links [data-nav]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
sections.forEach((section) => navObserver.observe(section));

// ===== Reveal al hacer scroll =====
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);
revealEls.forEach((el) => revealObserver.observe(el));

// ===== Carrusel de proyecto (mockups) =====
document.querySelectorAll('.project-carousel').forEach((carousel) => {
  const viewport = carousel.querySelector('.project-carousel__viewport');
  const slides = Array.from(carousel.querySelectorAll('.project-carousel__slide'));
  const prevBtn = carousel.querySelector('.project-carousel__arrow--prev');
  const nextBtn = carousel.querySelector('.project-carousel__arrow--next');
  const dots = Array.from(carousel.querySelectorAll('.project-carousel__dot'));
  if (!viewport || slides.length === 0) return;

  const currentIndex = () => Math.round(viewport.scrollLeft / viewport.clientWidth);

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    viewport.scrollTo({ left: clamped * viewport.clientWidth, behavior: 'smooth' });
  };

  const updateUI = () => {
    const idx = currentIndex();
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === idx));
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx === slides.length - 1;
  };

  prevBtn?.addEventListener('click', () => goTo(currentIndex() - 1));
  nextBtn?.addEventListener('click', () => goTo(currentIndex() + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  let scrollTimer;
  viewport.addEventListener(
    'scroll',
    () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateUI, 80);
    },
    { passive: true }
  );

  window.addEventListener('resize', updateUI);
  requestAnimationFrame(updateUI);
});

// ===== Lightbox de imágenes de proyecto =====
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const closeBtn = lightbox.querySelector('.lightbox__close');

  const openLightbox = (src, alt) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('img[data-lightbox]').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.currentSrc || img.src, img.alt));
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}

// ===== Vídeo de candidatura: botón de play personalizado =====
const videoFrame = document.querySelector('.video-frame');
if (videoFrame) {
  const video = videoFrame.querySelector('.video-frame__player');
  const playBtn = videoFrame.querySelector('.video-frame__play');

  playBtn?.addEventListener('click', () => {
    video.controls = true;
    video.play();
    videoFrame.classList.add('is-playing');
  });

  video.addEventListener('pause', () => {
    if (video.currentTime > 0 && !video.ended) videoFrame.classList.remove('is-playing');
  });
  video.addEventListener('play', () => {
    videoFrame.classList.add('is-playing');
  });
}
