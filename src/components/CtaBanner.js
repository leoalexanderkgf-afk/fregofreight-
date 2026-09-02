/**
 * Fargo Freights - High Impact CTA Banner Component
 */

import { icon } from '../utils/icons.js';

export function CtaBanner() {
  return `
    <section class="ff-section ff-bg-light" id="cta-banner">
      <div class="ff-container">
        <div class="ff-cta-card animate-on-scroll">
          <span class="ff-badge ff-badge-white" style="margin-bottom: 1.25rem;">
            ${icon('Zap', '', 14)} Get Started Today
          </span>
          <h2 class="ff-cta-title">Ready to Move Forward?</h2>
          <p class="ff-cta-desc">
            Whether you're a carrier looking for professional dispatch support or a business looking for dependable freight transportation solutions, Fargo Freights is ready to help.
          </p>

          <div class="ff-cta-buttons">
            <a href="/become-a-carrier" class="ff-btn ff-btn-white ff-btn-lg">
              Get Started ${icon('ArrowRight', '', 18)}
            </a>
            <a href="/contact" class="ff-btn ff-btn-outline-white ff-btn-lg">
              ${icon('Mail', '', 18)} Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
