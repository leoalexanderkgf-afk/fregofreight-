/**
 * Fargo Freights - Interactive Animations, Counter & UX Enhancers
 */

export function initScrollReveal() {
  // If user prefers reduced motion, reveal everything immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  const elements = document.querySelectorAll('.animate-on-scroll:not(.revealed)');
  if (!elements.length) return;

  // Immediately reveal elements already inside or near the initial viewport
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= viewportHeight + 40) {
      el.classList.add('revealed');
    }
  });

  // Observe remaining below-the-fold elements
  const remaining = document.querySelectorAll('.animate-on-scroll:not(.revealed)');
  if (!remaining.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
    );

    remaining.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    remaining.forEach(el => el.classList.add('revealed'));
  }
}

export function initCounters() {
  const counterElements = document.querySelectorAll('.counter-val:not(.counted)');
  if (!counterElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('counted');
            const targetStr = el.getAttribute('data-target') || '0';
            animateCount(el, targetStr);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    counterElements.forEach((el) => observer.observe(el));
  } else {
    counterElements.forEach((el) => {
      el.classList.add('counted');
      const targetStr = el.getAttribute('data-target') || '0';
      animateCount(el, targetStr);
    });
  }
}

function animateCount(el, targetStr) {
  const hasPlus = targetStr.includes('+');
  const hasK = targetStr.includes('K');
  const hasPercent = targetStr.includes('%');
  
  let numeric = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
  if (isNaN(numeric)) {
    el.textContent = targetStr;
    return;
  }

  let start = 0;
  const duration = 1400;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Smooth easeOutQuart
    const ease = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (numeric - start) * ease);

    let display = current.toLocaleString();
    if (numeric % 1 !== 0) {
      display = (start + (numeric - start) * ease).toFixed(1);
    }

    if (hasK) display += 'K';
    if (hasPlus) display += '+';
    if (hasPercent) display += '%';

    el.textContent = display;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = targetStr;
    }
  }

  requestAnimationFrame(update);
}

let backToTopScrollBound = false;

export function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  if (!backToTopScrollBound) {
    backToTopScrollBound = true;
    window.addEventListener('scroll', () => {
      const currentBtn = document.getElementById('back-to-top');
      if (!currentBtn) return;

      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;

      if (scrolled > 300) {
        currentBtn.classList.add('visible');
      } else {
        currentBtn.classList.remove('visible');
      }

      const circle = currentBtn.querySelector('.progress-ring-circle');
      if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      }
    }, { passive: true });
  }

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
