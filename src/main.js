/**
 * Fargo Freights - Main Application Entrypoint & Router Wire-up
 */

import './styles/variables.css';
import './styles/main.css';
import './styles/components.css';
import './styles/responsive.css';

import { Router } from './utils/router.js';
import { initScrollReveal, initCounters, initBackToTop } from './utils/animations.js';
import { initHeaderEvents } from './components/Header.js';
import { initHeroSlider } from './components/HeroSlider.js';
import { initHomeQuickCarrier } from './components/HomeGetStartedSection.js';
import { initHomeContact } from './components/HomeContactSection.js';
import { initNewsletter } from './components/NewsletterSection.js';

import { HomePage } from './pages/HomePage.js';
import { AboutPage } from './pages/AboutPage.js';
import { ServicesPage } from './pages/ServicesPage.js';
import { DispatchPage } from './pages/DispatchPage.js';
import { FreightBrokeragePage } from './pages/FreightBrokeragePage.js';
import { AutoHaulingPage } from './pages/AutoHaulingPage.js';
import { FleetManagementPage } from './pages/FleetManagementPage.js';
import { ReviewsPage, initReviewForm } from './pages/ReviewsPage.js';
import { BecomeCarrierPage, initCarrierForm } from './pages/BecomeCarrierPage.js';
import { ContactPage, initContactForm } from './pages/ContactPage.js';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.js';
import { TermsPage } from './pages/TermsPage.js';

// Central Route Mapping Table
const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/about': AboutPage,
  '/services': ServicesPage,
  '/dispatch': DispatchPage,
  '/freight-brokerage': FreightBrokeragePage,
  '/auto-hauling': AutoHaulingPage,
  '/fleet-management': FleetManagementPage,
  '/reviews': ReviewsPage,
  '/become-a-carrier': BecomeCarrierPage,
  '/contact': ContactPage,
  '/privacy-policy': PrivacyPolicyPage,
  '/terms': TermsPage
};

/**
 * Initialize components and event handlers for the active route
 */
function handlePageInit(path) {
  const currentPath = path || window.location.pathname.toLowerCase() || '/';

  // Common UI handlers
  initHeaderEvents();
  initScrollReveal();
  initCounters();
  initBackToTop();
  initNewsletter();

  // Page-specific initializers
  if (currentPath === '/' || currentPath === '/home' || currentPath === '') {
    initHeroSlider();
    initHomeQuickCarrier();
    initHomeContact();
  } else if (currentPath === '/become-a-carrier') {
    initCarrierForm();
  } else if (currentPath === '/contact') {
    initContactForm();
  } else if (currentPath === '/reviews') {
    initReviewForm();
  }
}

// Global pageRendered listener
window.addEventListener('pageRendered', (e) => {
  const path = e.detail?.path || '/';
  handlePageInit(path);
});

// Initialize Router with direct callback hook to guarantee initial render execution
const router = new Router(routes, 'app', (path) => {
  handlePageInit(path);
});

// Immediate guarantee for first load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    handlePageInit(window.location.pathname);
  });
} else {
  // DOM already loaded
  handlePageInit(window.location.pathname);
}
