/**
 * Fargo Freights - Dedicated Freight Brokerage Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { QuoteCalculatorSection } from '../components/QuoteCalculatorSection.js';
import { CtaBanner } from '../components/CtaBanner.js';
import { icon } from '../utils/icons.js';

export function FreightBrokeragePage() {
  document.title = `Freight Brokerage & Shipper Solutions | ${COMPANY.name}`;

  const brokerage = COMPANY.services.find((s) => s.id === 'freight-brokerage') || COMPANY.services[1];

  return `
    ${Header()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 5rem 0;">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${icon('Layers', '', 14)} Nationwide Brokerage Network
              </span>
              <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
                Guaranteed Capacity. Reliable Truckload Delivery.
              </h1>
              <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 2rem;" class="animate-on-scroll delay-2">
                We provide commercial shippers and manufacturers with guaranteed truckload capacity, rigorously audited carriers, and real-time shipment visibility.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;" class="animate-on-scroll delay-3">
                <a href="#quote" class="ff-btn ff-btn-primary ff-btn-lg">
                  Request Spot Quote ${icon('ArrowRight', '', 18)}
                </a>
                <a href="/contact" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  Shipper Account Setup
                </a>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img src="${brokerage.heroImage}" alt="Freight Brokerage Operations" class="ff-split-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${icon('ShieldCheck', '', 14)} Why Shippers Partner With Us</span>
            <h2 class="ff-section-title">Freight Brokerage Built For Reliability</h2>
            <p class="ff-section-subtitle">
              We eliminate carrier failure risks and provide direct human accountability for every shipment.
            </p>
          </div>

          <div class="ff-grid ff-grid-3">
            ${brokerage.highlights.map((hl, idx) => `
              <div class="ff-why-card animate-on-scroll delay-${(idx % 3) + 1}">
                <div class="ff-why-icon">
                  ${icon('ShieldCheck', '', 24)}
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${hl}</h3>
                <p style="font-size: 0.9rem;">
                  Full surety bond compliance, verified certificate of insurance, and continuous satellite tracking from pickup to delivery.
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${QuoteCalculatorSection()}
      ${CtaBanner()}
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}
