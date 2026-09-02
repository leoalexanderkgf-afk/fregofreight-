/**
 * Fargo Freights - Client-Side PushState Router
 */

export class Router {
  constructor(routes, rootElementId = 'app') {
    this.routes = routes;
    this.rootElement = document.getElementById(rootElementId);
    this.currentRoute = null;

    this.init();
  }

  init() {
    window.addEventListener('popstate', () => this.handleRoute());

    // Intercept clicks on internal links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Check if it's an internal link
      if (href.startsWith('/') && !href.startsWith('//') && !link.hasAttribute('download') && link.target !== '_blank') {
        e.preventDefault();
        this.navigate(href);
      } else if (href.startsWith('#')) {
        // Hash jump on current page
        e.preventDefault();
        this.scrollToHash(href);
      }
    });

    // Handle initial route
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
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  handleRoute() {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash;

    // Normalize path
    let cleanPath = path;
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }

    let routeHandler = this.routes[cleanPath] || this.routes['/'];

    this.currentRoute = cleanPath;

    if (this.rootElement) {
      // Render view
      this.rootElement.innerHTML = '';
      const pageComponent = routeHandler();
      
      if (typeof pageComponent === 'string') {
        this.rootElement.innerHTML = pageComponent;
      } else if (pageComponent instanceof Node) {
        this.rootElement.appendChild(pageComponent);
      }

      // Update active links in nav
      this.updateActiveNavLinks(cleanPath);

      // Scroll behavior
      if (hash) {
        setTimeout(() => this.scrollToHash(hash), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Dispatch custom event for page mount & init animation hooks
      window.dispatchEvent(new CustomEvent('pageRendered', { detail: { path: cleanPath } }));
    }
  }

  updateActiveNavLinks(currentPath) {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '/' && href === '/') || (href !== '/' && currentPath.startsWith(href))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
