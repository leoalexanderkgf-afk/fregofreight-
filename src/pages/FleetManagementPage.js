/**
 * Fargo Freights - Dedicated Fleet Management Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { CtaBanner } from '../components/CtaBanner.js';
import { icon } from '../utils/icons.js';

export function FleetManagementPage() {
  document.title = `Fleet Management & Yard Solutions | ${COMPANY.name}`;

  const fleet = COMPANY.services.find((s) => s.id === 'fleet-management') || COMPANY.services[3];

  return `
    ${Header()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 5rem 0;">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${icon('ShieldCheck', '', 14)} Fleet Efficiency & Telematics
              </span>
              <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
                Streamline Fleet Operations & Cut Operating Costs
              </h1>
              <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 2rem;" class="animate-on-scroll delay-2">
                We take the complexity out of fleet management with ELD compliance, fuel card discount management, IFTA quarterly tax reporting, and preventative maintenance logging.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;" class="animate-on-scroll delay-3">
                <a href="/contact" class="ff-btn ff-btn-primary ff-btn-lg">
                  Request Fleet Consultation ${icon('ArrowRight', '', 18)}
                </a>
                <a href="tel:${COMPANY.phoneClean}" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  ${icon('PhoneCall', '', 18)} Call Operations
                </a>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img src="${fleet.heroImage}" alt="Fleet Management Logistics Yard" class="ff-split-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${icon('CheckCircle2', '', 14)} Full Lifecycle Fleet Care</span>
            <h2 class="ff-section-title">Fleet Services Tailored To Your Growth</h2>
            <p class="ff-section-subtitle">
              Scale your fleet from 2 trucks to 50+ trucks without adding unnecessary back-office overhead.
            </p>
          </div>

          <div class="ff-grid ff-grid-3">
            ${fleet.highlights.map((hl, idx) => `
              <div class="ff-why-card animate-on-scroll delay-${(idx % 3) + 1}">
                <div class="ff-why-icon">
                  ${icon('TrendingUp', '', 24)}
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${hl}</h3>
                <p style="font-size: 0.9rem;">
                  End-to-end administration designed to protect your safety scores and keep your drivers earning.
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
