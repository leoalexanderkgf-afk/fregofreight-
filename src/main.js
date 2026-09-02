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

// Initialize Router
const router = new Router(routes, 'app');

// Wire up event initializers on every page render
window.addEventListener('pageRendered', (e) => {
  const path = e.detail?.path || '/';

  // Common UI handlers
  initHeaderEvents();
  initScrollReveal();
  initCounters();
  initBackToTop();
  initNewsletter();

  // Page-specific initializers
  if (path === '/' || path === '/home') {
    initHeroSlider();
    initHomeQuickCarrier();
    initHomeContact();
  } else if (path === '/become-a-carrier') {
    initCarrierForm();
  } else if (path === '/contact') {
    initContactForm();
  } else if (path === '/reviews') {
    initReviewForm();
  }
});
