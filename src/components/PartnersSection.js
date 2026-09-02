/**
 * Fargo Freights - Industry Platforms & Network Marquee
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function PartnersSection() {
  const doublePartners = [...COMPANY.partners, ...COMPANY.partners];

  return `
    <section class="ff-section-sm ff-bg-light" id="partners" style="border-top: 1px solid var(--ff-border); border-bottom: 1px solid var(--ff-border);">
      <div class="ff-container" style="text-align: center; margin-bottom: 1.5rem;">
        <span class="ff-badge" style="margin-bottom: 0.5rem;">
          ${icon('Layers', '', 14)} Connected Ecosystem
        </span>
        <h2 class="ff-section-title" style="font-size: 1.75rem; margin-bottom: 0.5rem;">Industry Platforms & Network</h2>
        <p style="font-size: 0.95rem; color: var(--ff-text-muted); max-width: 620px; margin: 0 auto;">
          Direct connectivity and load integrations with North America's leading freight exchanges and logistics platforms.
        </p>
      </div>

      <div class="ff-partner-marquee-wrap">
        <div class="ff-partner-track">
          ${doublePartners.map((partner) => `
            <div class="ff-partner-pill">
              <span class="ff-partner-pill-icon">${icon('Layers', '', 20)}</span>
              <span>${partner.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
