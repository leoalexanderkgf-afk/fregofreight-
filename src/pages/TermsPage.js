/**
 * Fargo Freights - Terms of Service Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';

export function TermsPage() {
  document.title = `Terms of Service | ${COMPANY.name}`;

  return `
    ${Header()}
    <main>
      <section class="ff-section ff-bg-dark" style="padding: 4rem 0;">
        <div class="ff-container text-center">
          <h1 style="color: #FFFFFF; margin-bottom: 0.75rem;">Terms of Service</h1>
          <p style="color: #CBD5E1;">Last updated: January 2026</p>
        </div>
      </section>

      <section class="ff-section">
        <div class="ff-container ff-container-narrow" style="color: var(--ff-text-main); line-height: 1.8;">
          <h3>1. Carrier & Dispatch Agreement</h3>
          <p>
            By enrolling in <strong>${COMPANY.name}</strong> truck dispatch services, carrier acknowledges that Fargo Freights acts as an authorized independent dispatch coordinator. Fargo Freights negotiates and schedules freight loads on behalf of the carrier. The carrier retains 100% final authority to accept or reject any load rate confirmation.
          </p>

          <h3 style="margin-top: 2rem;">2. Carrier Compliance & Insurance</h3>
          <p>
            Carriers must maintain active, in-good-standing FMCSA operating authority and carry minimum insurance coverage of $1,000,000 Auto Liability and $100,000 Cargo Insurance throughout the duration of any dispatch relationship.
          </p>

          <h3 style="margin-top: 2rem;">3. Shipper & Brokerage Terms</h3>
          <p>
            Shippers utilizing Fargo Freights brokerage services agree to standard freight terms, timely payment within agreed invoice credit terms, and standard detention and accessorial guidelines.
          </p>

          <h3 style="margin-top: 2rem;">4. Governing Law</h3>
          <p>
            These terms are governed by the laws of the State of North Dakota. For any questions, reach our legal desk at <a href="mailto:${COMPANY.email}">${COMPANY.email}</a> or visit us at ${COMPANY.address.full}.
          </p>
        </div>
      </section>
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}
