/**
 * Fargo Freights - Dedicated Truck Dispatch Services Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { CtaBanner } from '../components/CtaBanner.js';
import { icon } from '../utils/icons.js';

export function DispatchPage() {
  document.title = `Truck Dispatch Services | ${COMPANY.name} (701) 696-3939`;

  const dispatch = COMPANY.services.find((s) => s.id === 'dispatch') || COMPANY.services[0];

  return `
    ${Header()}
    <main>
      <!-- Page Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 5rem 0;">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${icon('Headphones', '', 14)} 24/7 Dedicated Truck Dispatch
              </span>
              <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
                Make More Money. Drive Less Empty Miles.
              </h1>
              <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 2rem;" class="animate-on-scroll delay-2">
                We handle rate negotiations, carrier packet paperwork, broker credit approvals, and back-office invoicing so you can focus entirely on driving.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;" class="animate-on-scroll delay-3">
                <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-lg">
                  Sign Up Your Truck ${icon('ArrowRight', '', 18)}
                </a>
                <a href="tel:${COMPANY.phoneClean}" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  ${icon('PhoneCall', '', 18)} Call ${COMPANY.phone}
                </a>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img src="${dispatch.heroImage}" alt="Truck Dispatch Operations" class="ff-split-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights & Details -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${icon('CheckCircle2', '', 14)} The Dispatch Difference</span>
            <h2 class="ff-section-title">What's Included In Our Dispatch Plan</h2>
            <p class="ff-section-subtitle">
              Low transparent percentage commission, no contracts, and full carrier autonomy.
            </p>
          </div>

          <div class="ff-grid ff-grid-3">
            ${dispatch.highlights.map((hl, idx) => `
              <div class="ff-why-card animate-on-scroll delay-${(idx % 3) + 1}">
                <div class="ff-why-icon">
                  ${icon('Check', '', 24)}
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${hl}</h3>
                <p style="font-size: 0.9rem;">
                  Our proactive team coordinates every detail with brokers and factoring partners to maximize your net take-home pay.
                </p>
              </div>
            `).join('')}
          </div>

          <!-- Onboarding Requirements Checklist -->
          <div style="margin-top: 4.5rem; background-color: var(--ff-bg-light); border-radius: var(--ff-radius-xl); padding: 3rem; border: 1px solid var(--ff-border);" class="animate-on-scroll">
            <h3 style="margin-bottom: 1.25rem; font-size: 1.6rem;">Required Documents To Get Started In 3 Hours:</h3>
            <div class="ff-grid ff-grid-2">
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--ff-primary);">${icon('FileText', '', 24)}</div>
                <div>
                  <strong>Active MC / DOT Authority</strong>
                  <p style="font-size: 0.88rem;">Must have active authority registered with FMCSA.</p>
                </div>
              </div>
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--ff-primary);">${icon('ShieldCheck', '', 24)}</div>
                <div>
                  <strong>Certificate of Insurance (COI)</strong>
                  <p style="font-size: 0.88rem;">Min. $100k Cargo & $1M Auto Liability coverage.</p>
                </div>
              </div>
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--ff-primary);">${icon('FileText', '', 24)}</div>
                <div>
                  <strong>Signed W-9 Form</strong>
                  <p style="font-size: 0.88rem;">Standard IRS form for business tax verification.</p>
                </div>
              </div>
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--ff-primary);">${icon('DollarSign', '', 24)}</div>
                <div>
                  <strong>Factoring NOA (Notice of Assignment)</strong>
                  <p style="font-size: 0.88rem;">If you use a factoring company for fast payout funding.</p>
                </div>
              </div>
            </div>
            <div style="margin-top: 2rem; text-align: center;">
              <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-lg">
                Submit Documents & Start Rolling ${icon('ArrowRight', '', 18)}
              </a>
            </div>
          </div>
        </div>
      </section>

      ${CtaBanner()}
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}
