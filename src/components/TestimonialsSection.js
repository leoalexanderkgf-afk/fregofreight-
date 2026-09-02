/**
 * Fargo Freights - Testimonials & Reviews Section Component
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function TestimonialsSection() {
  return `
    <section class="ff-section" id="reviews">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${icon('Star', '', 14)} Client & Carrier Feedback</span>
          <h2 class="ff-section-title">What Our Customers Say</h2>
          <p class="ff-section-subtitle">
            Feedback from independent owner-operators, fleet managers, and enterprise logistics coordinators who rely on Fargo Freights every day.
          </p>
        </div>

        <div class="ff-testimonial-grid">
          ${COMPANY.testimonials.map((test, idx) => `
            <div class="ff-testimonial-card animate-on-scroll delay-${(idx % 3) + 1}">
              <div>
                <div class="ff-stars">
                  ${Array(test.rating).fill(0).map(() => icon('Star', '', 18)).join('')}
                </div>
                <p class="ff-test-quote">"${test.quote}"</p>
              </div>

              <div class="ff-test-author-row">
                <div class="ff-author-avatar">
                  ${test.name.charAt(0)}
                </div>
                <div class="ff-author-info">
                  <div class="ff-author-name">
                    ${test.name}
                    <span style="display: inline-flex; align-items: center; color: var(--ff-success); margin-left: 0.35rem;" title="Partner Verified">
                      ${icon('CheckCircle2', '', 14)}
                    </span>
                  </div>
                  <div class="ff-author-role">${test.role} • ${test.company}</div>
                  <div style="font-size: 0.78rem; color: var(--ff-text-subtle);">${test.location} • ${test.date}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 3.5rem;" class="animate-on-scroll">
          <a href="/reviews" class="ff-btn ff-btn-outline">
            View All Reviews ${icon('ArrowRight', '', 16)}
          </a>
        </div>
      </div>
    </section>
  `;
}
