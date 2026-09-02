/**
 * Fargo Freights - Services Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { ServicesOverview } from '../components/ServicesOverview.js';
import { EquipmentSection } from '../components/EquipmentSection.js';
import { ProcessSection } from '../components/ProcessSection.js';
import { CtaBanner } from '../components/CtaBanner.js';
import { icon } from '../utils/icons.js';

export function ServicesPage() {
  document.title = `Logistics & Transportation Services | ${COMPANY.name}`;

  return `
    ${Header()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${icon('Layers', '', 14)} Comprehensive Transportation Solutions
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Freight Services Tailored For Modern Supply Chains
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Explore our specialized divisions covering independent truck dispatch, nationwide freight brokerage, specialized auto hauling, and end-to-end fleet operations.
          </p>
        </div>
      </section>

      ${ServicesOverview()}
      ${EquipmentSection()}
      ${ProcessSection()}
      ${CtaBanner()}
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}
