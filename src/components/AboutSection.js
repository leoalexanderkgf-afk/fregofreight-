/**
 * Fargo Freights - About Us Section on Home
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function AboutSection() {
  return `
    <section class="ff-section" id="about">
      <div class="ff-container">
        <div class="ff-split-layout">
          <div class="ff-split-content animate-on-scroll">
            <span class="ff-badge">${icon('Award', '', 14)} North Dakota HQ & Nationwide Logistics</span>
            <h2>About Fargo Freights</h2>
            <p>
              Headquartered at <strong>${COMPANY.address.full}</strong>, <strong>${COMPANY.name}</strong> is a premier American trucking, dispatch, and freight brokerage company built to empower motor carriers and enterprise shippers across the nation.
            </p>
            <p>
              We eliminate the friction in modern logistics through transparency, aggressive rate negotiations, dedicated dispatcher support, and strict safety compliance. Our team operates 24/7/365 to ensure every load is dispatched efficiently, tracked in real-time, and delivered safely.
            </p>

            <div class="ff-grid ff-grid-2" style="margin: 1.5rem 0;">
              <div style="background-color: var(--ff-bg-light); padding: 1.25rem; border-radius: var(--ff-radius-md); border-left: 4px solid var(--ff-primary);">
                <h4 style="margin-bottom: 0.35rem; font-size: 1.05rem;">Our Mission</h4>
                <p style="font-size: 0.88rem; margin:0; color: var(--ff-text-muted);">To deliver honest, top-dollar load booking and carrier support with 100% no forced dispatch.</p>
              </div>
              <div style="background-color: var(--ff-bg-light); padding: 1.25rem; border-radius: var(--ff-radius-md); border-left: 4px solid var(--ff-success);">
                <h4 style="margin-bottom: 0.35rem; font-size: 1.05rem;">Team Overview</h4>
                <p style="font-size: 0.88rem; margin:0; color: var(--ff-text-muted);">Experienced dispatchers, freight brokers, compliance officers, and 24/7 driver coordinators.</p>
              </div>
            </div>

            <div>
              <a href="/about" class="ff-btn ff-btn-primary">
                Learn More About Us ${icon('ArrowRight', '', 16)}
              </a>
            </div>
          </div>

          <div class="ff-split-visual animate-on-scroll delay-2">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80" 
              alt="Fargo Freights Operations & Logistics Yard" 
              class="ff-split-img"
              loading="lazy"
            />
            <div class="ff-floating-badge-card">
              <div class="ff-floating-badge-icon">
                ${icon('ShieldCheck', '', 26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">24/7/365 Non-Stop</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Dedicated American Dispatch Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
