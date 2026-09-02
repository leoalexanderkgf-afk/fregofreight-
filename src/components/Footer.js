/**
 * Fargo Freights - 4-Column Footer Component
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function Footer() {
  return `
    <footer class="ff-footer">
      <div class="ff-container">
        <div class="ff-footer-grid">
          <!-- Col 1: Brand & Contact Info -->
          <div class="ff-footer-col">
            <a href="/" class="ff-brand" style="margin-bottom: 1.25rem;">
              <img src="/images/logo.jpg" alt="${COMPANY.name}" class="ff-logo-img" />
              <div class="ff-brand-text">
                <span class="ff-brand-name" style="color: #FFFFFF;">${COMPANY.name}</span>
                <span class="ff-brand-tagline">Trucking & Logistics</span>
              </div>
            </a>
            <p class="ff-footer-brand-desc">
              ${COMPANY.shortDesc}
            </p>
            <div style="display: flex; gap: 0.5rem; margin-top: 1.25rem;">
              <span class="ff-badge ff-badge-white" style="font-size: 0.75rem; margin: 0;">
                ${COMPANY.dotMc.usdot}
              </span>
              <span class="ff-badge ff-badge-white" style="font-size: 0.75rem; margin: 0;">
                ${COMPANY.dotMc.mc}
              </span>
            </div>
          </div>

          <!-- Col 2: Quick Links -->
          <div class="ff-footer-col">
            <h4>Quick Links</h4>
            <ul class="ff-footer-links">
              <li class="ff-footer-link"><a href="/">${icon('ArrowRight', '', 12)} Home</a></li>
              <li class="ff-footer-link"><a href="/about">${icon('ArrowRight', '', 12)} About Us</a></li>
              <li class="ff-footer-link"><a href="/services">${icon('ArrowRight', '', 12)} Services</a></li>
              <li class="ff-footer-link"><a href="/reviews">${icon('ArrowRight', '', 12)} Reviews</a></li>
              <li class="ff-footer-link"><a href="/become-a-carrier">${icon('ArrowRight', '', 12)} Become a Carrier</a></li>
              <li class="ff-footer-link"><a href="/contact">${icon('ArrowRight', '', 12)} Contact</a></li>
              <li class="ff-footer-link"><a href="/privacy-policy">${icon('ArrowRight', '', 12)} Privacy Policy</a></li>
              <li class="ff-footer-link"><a href="/terms">${icon('ArrowRight', '', 12)} Terms of Use</a></li>
            </ul>
          </div>

          <!-- Col 3: Our Services -->
          <div class="ff-footer-col">
            <h4>Our Services</h4>
            <ul class="ff-footer-links">
              <li class="ff-footer-link"><a href="/dispatch">${icon('ArrowRight', '', 12)} Dispatch Services</a></li>
              <li class="ff-footer-link"><a href="/fleet-management">${icon('ArrowRight', '', 12)} Fleet Management</a></li>
              <li class="ff-footer-link"><a href="/freight-brokerage">${icon('ArrowRight', '', 12)} Freight Brokerage</a></li>
              <li class="ff-footer-link"><a href="/auto-hauling">${icon('ArrowRight', '', 12)} Auto Hauling</a></li>
              <li class="ff-footer-link"><a href="/become-a-carrier">${icon('ArrowRight', '', 12)} Carrier Onboarding</a></li>
              <li class="ff-footer-link"><a href="#contact">${icon('ArrowRight', '', 12)} Get a Quote</a></li>
            </ul>
          </div>

          <!-- Col 4: Operations & Contact -->
          <div class="ff-footer-col">
            <h4>Fargo Freights</h4>
            <div class="ff-footer-contact-item">
              ${icon('MapPin', '', 18)}
              <span>${COMPANY.address.full}</span>
            </div>
            <div class="ff-footer-contact-item">
              ${icon('PhoneCall', '', 18)}
              <span>Phone: <a href="tel:${COMPANY.phoneClean}">${COMPANY.phone}</a></span>
            </div>
            <div class="ff-footer-contact-item">
              ${icon('Mail', '', 18)}
              <span>Email: <a href="mailto:${COMPANY.email}">${COMPANY.email}</a></span>
            </div>
            <div class="ff-footer-contact-item">
              ${icon('Clock', '', 18)}
              <span>${COMPANY.hours.dispatch}</span>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="ff-footer-bottom">
          <div>${COMPANY.copyright}</div>
          <div class="ff-footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Use</a>
            <span>•</span>
            <a href="/contact">Support</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
