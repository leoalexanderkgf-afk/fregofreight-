/**
 * Fargo Freights - Client-Side PushState Router & View Engine
 */

export class Router {
  constructor(routes, rootElementId = 'app', onRouteChange = null) {
    this.routes = routes;
    this.rootElementId = rootElementId;
    this.rootElement = document.getElementById(rootElementId);
    this.onRouteChange = onRouteChange;
    this.currentRoute = null;

    this.init();
  }

  init() {
    if (!this.rootElement) {
      this.rootElement = document.getElementById(this.rootElementId);
    }

    // Listen for browser back/forward navigation
    window.addEventListener('popstate', () => this.handleRoute());

    // Intercept clicks on internal links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Handle standard anchor jumps on current page
      if (href.startsWith('#')) {
        e.preventDefault();
        this.scrollToHash(href);
        return;
      }

      // Check if it's an internal pushState link
      if (href.startsWith('/') && !href.startsWith('//') && !link.hasAttribute('download') && link.target !== '_blank') {
        e.preventDefault();
        this.navigate(href);
      }
    });

    // Handle initial route immediately
    this.handleRoute();
  }

  navigate(path) {
    if (window.location.pathname + window.location.hash !== path) {
      window.history.pushState({}, '', path);
    }
    this.handleRoute();
  }

  scrollToHash(hash) {
    if (!hash || hash === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(hash);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  }

  handleRoute() {
    if (!this.rootElement) {
      this.rootElement = document.getElementById(this.rootElementId);
    }
    if (!this.rootElement) return;

    const rawPath = window.location.pathname.toLowerCase();
    const hash = window.location.hash;

    // Normalize path (strip trailing slash)
    let cleanPath = rawPath;
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }

    const routeHandler = this.routes[cleanPath] || this.routes['/'];
    this.currentRoute = cleanPath;

    try {
      // Render view
      const pageComponent = routeHandler();
      
      if (typeof pageComponent === 'string') {
        this.rootElement.innerHTML = pageComponent;
      } else if (pageComponent instanceof Node) {
        this.rootElement.innerHTML = '';
        this.rootElement.appendChild(pageComponent);
      }

      // Update active nav links
      this.updateActiveNavLinks(cleanPath);

      // Scroll behavior
      if (hash) {
        setTimeout(() => this.scrollToHash(hash), 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Direct callback trigger
      if (typeof this.onRouteChange === 'function') {
        this.onRouteChange(cleanPath);
      }

      // Global event trigger
      window.dispatchEvent(new CustomEvent('pageRendered', { detail: { path: cleanPath } }));
    } catch (err) {
      console.error('[Router Error]:', err);
      // Fallback safe render if an error occurred
      if (this.routes['/'] && cleanPath !== '/') {
        this.navigate('/');
      }
    }
  }

  updateActiveNavLinks(currentPath) {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '/' && href === '/') || (href && href !== '/' && currentPath.startsWith(href))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
