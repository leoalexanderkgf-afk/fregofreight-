/**
 * Fargo Freights - Hero Slider Component (3 Slides)
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function HeroSlider() {
  const slides = [
    {
      badge: 'DISPATCH SERVICES',
      title: 'Keep Your Trucks Moving. Keep Your Business Growing.',
      desc: 'Professional dispatch solutions designed to help carriers find quality freight, reduce downtime, and keep their trucks moving.',
      primaryBtn: { text: 'Become a Carrier', link: '/become-a-carrier' },
      secondaryBtn: { text: 'Learn More', link: '/dispatch' },
      bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80'
    },
    {
      badge: 'FREIGHT BROKERAGE',
      title: 'Reliable Freight. Reliable Connections.',
      desc: 'Connecting shippers and carriers with dependable transportation solutions built around communication, efficiency and trust.',
      primaryBtn: { text: 'Get a Quote', link: '#contact' },
      secondaryBtn: { text: 'Learn More', link: '/freight-brokerage' },
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80'
    },
    {
      badge: 'AUTO CAR HAULING',
      title: 'Moving Vehicles Safely Across the Nation.',
      desc: 'Dependable vehicle transportation solutions focused on safety, communication and efficient delivery.',
      primaryBtn: { text: 'Request Transportation', link: '/auto-hauling' },
      secondaryBtn: { text: 'Contact Us', link: '/contact' },
      bgImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=80'
    }
  ];

  return `
    <section class="ff-hero-slider" id="hero-slider" aria-label="Hero Carousel">
      ${slides.map((slide, idx) => `
        <div class="ff-slide ${idx === 0 ? 'active' : ''}" data-slide="${idx}">
          <div class="ff-slide-bg" style="background-image: url('${slide.bgImage}');"></div>
          <div class="ff-slide-overlay"></div>
          <div class="ff-container" style="position: relative; z-index: 3;">
            <div class="ff-hero-content">
              <div class="ff-hero-badge-wrap">
                <span class="ff-badge ff-badge-white">
                  ${icon('ShieldCheck', '', 14)} ${slide.badge}
                </span>
              </div>
              <h1 class="ff-hero-title">
                ${slide.title}
              </h1>
              <p class="ff-hero-desc">
                ${slide.desc}
              </p>
              <div class="ff-hero-actions">
                <a href="${slide.primaryBtn.link}" class="ff-btn ff-btn-primary ff-btn-lg">
                  ${slide.primaryBtn.text} ${icon('ArrowRight', '', 18)}
                </a>
                <a href="${slide.secondaryBtn.link}" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  ${slide.secondaryBtn.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join('')}

      <!-- Slider Controls -->
      <div class="ff-slider-nav">
        <button class="ff-slider-arrow" id="hero-prev-btn" aria-label="Previous Slide">
          ${icon('ArrowLeft', '', 20)}
        </button>
        <div class="ff-slider-dots" id="hero-dots">
          ${slides.map((_, idx) => `
            <div class="ff-dot ${idx === 0 ? 'active' : ''}" data-dot="${idx}" role="button" tabindex="0" aria-label="Slide ${idx + 1}"></div>
          `).join('')}
        </div>
        <button class="ff-slider-arrow" id="hero-next-btn" aria-label="Next Slide">
          ${icon('ArrowRight', '', 20)}
        </button>
      </div>
    </section>
  `;
}

let activeHeroTimer = null;

export function initHeroSlider() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;

  // Prevent multiple duplicate initializations
  if (slider.dataset.initialized === 'true') return;
  slider.dataset.initialized = 'true';

  const slides = slider.querySelectorAll('.ff-slide');
  const dots = slider.querySelectorAll('.ff-dot');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  let currentSlide = 0;
  const totalSlides = slides.length;

  if (activeHeroTimer) {
    clearInterval(activeHeroTimer);
    activeHeroTimer = null;
  }

  function goToSlide(index) {
    slides[currentSlide]?.classList.remove('active');
    dots[currentSlide]?.classList.remove('active');

    currentSlide = (index + totalSlides) % totalSlides;

    slides[currentSlide]?.classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }

  function startAutoplay() {
    stopAutoplay();
    activeHeroTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 2200); // Fast 2.2-second smooth auto-cycle
  }

  function stopAutoplay() {
    if (activeHeroTimer) {
      clearInterval(activeHeroTimer);
      activeHeroTimer = null;
    }
  }

  prevBtn?.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
    startAutoplay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      startAutoplay();
    });
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        goToSlide(idx);
        startAutoplay();
      }
    });
  });

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}
