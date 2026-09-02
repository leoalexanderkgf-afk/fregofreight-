/**
 * Fargo Freights - 5-Step Process Section
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function ProcessSection() {
  return `
    <section class="ff-section" id="process">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${icon('CheckSquare', '', 14)} Seamless Workflow</span>
          <h2 class="ff-section-title">How We Move Your Freight In 5 Simple Steps</h2>
          <p class="ff-section-subtitle">
            From initial onboarding to prompt factoring settlement, our streamlined 5-step process guarantees maximum revenue with zero operational friction.
          </p>
        </div>

        <div class="ff-process-grid">
          ${COMPANY.processSteps.map((step, idx) => `
            <div class="ff-process-card animate-on-scroll delay-${(idx % 4) + 1}">
              <div class="ff-process-step-num">${step.step}</div>
              <div class="ff-process-icon">
                ${icon(step.icon, '', 24)}
              </div>
              <h3 class="ff-process-title">${step.title}</h3>
              <p class="ff-process-desc">${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
