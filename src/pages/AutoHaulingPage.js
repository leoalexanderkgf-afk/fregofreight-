/**
 * Fargo Freights - Dedicated Auto Car Hauling Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { CtaBanner } from '../components/CtaBanner.js';
import { icon } from '../utils/icons.js';

export function AutoHaulingPage() {
  document.title = `Auto Car Hauling & Vehicle Transport | ${COMPANY.name}`;

  const auto = COMPANY.services.find((s) => s.id === 'auto-hauling') || COMPANY.services[2];

  return `
    ${Header()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 5rem 0;">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${icon('Car', '', 14)} Specialized Automotive Logistics
              </span>
              <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
                Nationwide Open & Enclosed Auto Car Hauling
              </h1>
              <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 2rem;" class="animate-on-scroll delay-2">
                Specialized vehicle transportation for dealerships, auto auctions (Copart, Manheim, IAAI), classic car collectors, and individual door-to-door auto moves.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;" class="animate-on-scroll delay-3">
                <a href="#quote" class="ff-btn ff-btn-primary ff-btn-lg">
                  Get Auto Shipping Quote ${icon('ArrowRight', '', 18)}
                </a>
                <a href="tel:${COMPANY.phoneClean}" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  ${icon('PhoneCall', '', 18)} ${COMPANY.phone}
                </a>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img src="${auto.heroImage}" alt="Auto Car Hauling Rig" class="ff-split-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${icon('Truck', '', 14)} Auto Transport Services</span>
            <h2 class="ff-section-title">Zero-Damage Automotive Transport</h2>
            <p class="ff-section-subtitle">
              From single luxury exotics to 9-car dealer inventory transfers, we handle every vehicle with white-glove precision.
            </p>
          </div>

          <div class="ff-grid ff-grid-3">
            ${auto.highlights.map((hl, idx) => `
              <div class="ff-why-card animate-on-scroll delay-${(idx % 3) + 1}">
                <div class="ff-why-icon">
                  ${icon('Car', '', 24)}
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${hl}</h3>
                <p style="font-size: 0.9rem;">
                  Hydraulic loading ramps, soft over-the-tire soft straps, and comprehensive pre-load digital photographic condition reports.
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${CtaBanner()}
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}
