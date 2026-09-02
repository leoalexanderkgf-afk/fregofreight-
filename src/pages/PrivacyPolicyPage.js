/**
 * Fargo Freights - Privacy Policy Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';

export function PrivacyPolicyPage() {
  document.title = `Privacy Policy | ${COMPANY.name}`;

  return `
    ${Header()}
    <main>
      <section class="ff-section ff-bg-dark" style="padding: 4rem 0;">
        <div class="ff-container text-center">
          <h1 style="color: #FFFFFF; margin-bottom: 0.75rem;">Privacy Policy</h1>
          <p style="color: #CBD5E1;">Last updated: January 2026</p>
        </div>
      </section>

      <section class="ff-section">
        <div class="ff-container ff-container-narrow" style="color: var(--ff-text-main); line-height: 1.8;">
          <h3>1. Information We Collect</h3>
          <p>
            When you visit the <strong>${COMPANY.name}</strong> website or use our carrier dispatch and freight brokerage services, we collect information you provide directly to us. This includes your name, company name, USDOT/MC numbers, phone number, email address, physical address (${COMPANY.address.full}), shipment origin and destination data, equipment specifications, and billing or factoring details.
          </p>

          <h3 style="margin-top: 2rem;">2. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
            <li>Source, negotiate, book, and dispatch commercial freight loads on your behalf.</li>
            <li>Verify FMCSA motor carrier safety authority, insurance coverage, and compliance.</li>
            <li>Process rate confirmations, bills of lading (BOL), and submit invoicing to factoring companies.</li>
            <li>Send critical dispatch notifications, in-transit check calls, and market rate updates.</li>
          </ul>

          <h3 style="margin-top: 2rem;">3. Data Protection & Security</h3>
          <p>
            We implement industry-standard administrative, technical, and physical safeguards to prevent unauthorized access, disclosure, or misuse of your company and driver data. We never sell or lease your contact information or lane histories to third-party advertisers.
          </p>

          <h3 style="margin-top: 2rem;">4. Contact Us Regarding Your Privacy</h3>
          <p>
            If you have questions about this policy or wish to review your data, please contact our compliance officer at <a href="mailto:${COMPANY.email}">${COMPANY.email}</a> or call <a href="tel:${COMPANY.phoneClean}">${COMPANY.phone}</a>.
          </p>
        </div>
      </section>
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}
