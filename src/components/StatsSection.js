/**
 * Fargo Freights - Stats Counter Strip Component
 */

import { COMPANY } from '../config/company.js';

export function StatsSection() {
  return `
    <section class="ff-container" id="stats" style="position: relative; z-index: 25;">
      <div class="ff-stats-bar">
        <div class="ff-stats-grid">
          ${COMPANY.stats.map((stat) => `
            <div class="ff-stat-card">
              <div class="ff-stat-number counter-val" data-target="${stat.value}">0</div>
              <div class="ff-stat-label">${stat.label}</div>
              <div class="ff-stat-subtext">${stat.subtext}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
