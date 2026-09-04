/**
 * Fargo Freights - Header & Navigation Component
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function Header() {
  return `
    <!-- Topbar -->
    <div class="ff-topbar">
      <div class="ff-container ff-topbar-inner">
        <div class="ff-topbar-left">
          <div class="ff-topbar-item">
            ${icon('PhoneCall', '', 14)}
            <span>24/7 Dispatch Hotline: <a href="tel:${COMPANY.phoneClean}">${COMPANY.phone}</a></span>
          </div>
          <div class="ff-topbar-item">
            ${icon('Mail', '', 14)}
            <a href="mailto:${COMPANY.email}">${COMPANY.email}</a>
          </div>
        </div>
        <div class="ff-topbar-right">
          <div class="ff-topbar-item">
            ${icon('MapPin', '', 14)}
            <span>${COMPANY.address.full}</span>
          </div>
          <div class="ff-topbar-item">
            <span class="ff-badge ff-badge-success" style="font-size:0.75rem; padding: 0.15rem 0.5rem; margin:0;">
              ${COMPANY.dotMc.usdot}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <header class="ff-header" id="main-header">
      <div class="ff-container ff-header-inner">
        <a href="/" class="ff-brand" aria-label="${COMPANY.name} Home">
          <img src="/images/logo-transparent.png" alt="${COMPANY.name} Logo" class="ff-logo-img" style="height: 44px; width: auto; object-fit: contain;" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="ff-nav" aria-label="Main Navigation">
          <ul class="ff-nav-list">
            <li class="ff-nav-item"><a href="/" class="nav-link">Home</a></li>
            <li class="ff-nav-item"><a href="/about" class="nav-link">About Us</a></li>
            <li class="ff-nav-item">
              <a href="/services" class="nav-link">
                Services ${icon('ChevronDown', '', 14)}
              </a>
              <ul class="ff-dropdown-menu">
                <li class="ff-dropdown-item"><a href="/dispatch">Truck Dispatch</a></li>
                <li class="ff-dropdown-item"><a href="/fleet-management">Fleet Management</a></li>
                <li class="ff-dropdown-item"><a href="/freight-brokerage">Freight Brokerage</a></li>
                <li class="ff-dropdown-item"><a href="/auto-hauling">Auto Car Hauling</a></li>
              </ul>
            </li>
            <li class="ff-nav-item"><a href="/reviews" class="nav-link">Reviews</a></li>
            <li class="ff-nav-item"><a href="/become-a-carrier" class="nav-link">Become a Carrier</a></li>
            <li class="ff-nav-item"><a href="/contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <!-- CTA & Mobile Toggle -->
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="ff-header-cta">
            <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-sm">
              Get Started ${icon('ArrowRight', '', 16)}
            </a>
          </div>
          <button class="ff-mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle Navigation Menu">
            ${icon('Menu', '', 26)}
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="ff-drawer-overlay" id="drawer-overlay"></div>
    <div class="ff-mobile-drawer" id="mobile-drawer">
      <div class="ff-drawer-header">
        <a href="/" class="ff-brand" id="drawer-brand">
          <img src="/images/logo-transparent.png" alt="${COMPANY.name}" class="ff-logo-img" style="height: 38px; width: auto; object-fit: contain;" />
        </a>
        <button class="ff-drawer-close" id="drawer-close-btn" aria-label="Close Menu">
          ${icon('X', '', 24)}
        </button>
      </div>

      <nav class="ff-drawer-nav">
        <a href="/" class="mobile-nav-link">Home</a>
        <a href="/about" class="mobile-nav-link">About Us</a>
        <a href="/services" class="mobile-nav-link">Services</a>
        <div class="ff-drawer-sublinks">
          <a href="/dispatch" class="mobile-sub-link">Truck Dispatch</a>
          <a href="/freight-brokerage" class="mobile-sub-link">Freight Brokerage</a>
          <a href="/auto-hauling" class="mobile-sub-link">Auto Car Hauling</a>
          <a href="/fleet-management" class="mobile-sub-link">Fleet Management</a>
        </div>
        <a href="/reviews" class="mobile-nav-link">Reviews & Testimonials</a>
        <a href="/become-a-carrier" class="mobile-nav-link">Become a Carrier</a>
        <a href="/contact" class="mobile-nav-link">Contact Us</a>
      </nav>

      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--ff-border); display: flex; flex-direction: column; gap: 1rem;">
        <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-block">
          Get Started Now
        </a>
        <a href="tel:${COMPANY.phoneClean}" class="ff-btn ff-btn-outline ff-btn-block">
          ${icon('PhoneCall', '', 18)} Call ${COMPANY.phone}
        </a>
      </div>
    </div>
  `;
}

export function initHeaderEvents() {
  const header = document.getElementById('main-header');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('drawer-close-btn');
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('mobile-drawer');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  const openDrawer = () => {
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Close drawer on internal link clicks
  drawer?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
}
