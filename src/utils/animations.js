/**
 * Fargo Freights - Interactive Animations, Counter & UX Enhancers
 */

export function initScrollReveal() {
  const elements = document.querySelectorAll('.animate-on-scroll:not(.revealed)');
  
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

export function initCounters() {
  const counterElements = document.querySelectorAll('.counter-val:not(.counted)');

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
    { threshold: 0.2 }
  );

  counterElements.forEach((el) => observer.observe(el));
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
  const duration = 1600;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out quart
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

export function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;

    if (scrolled > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }

    const circle = btn.querySelector('.progress-ring-circle');
    if (circle) {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (progress / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
