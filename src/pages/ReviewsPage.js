/**
 * Fargo Freights - Reviews & Customer Testimonials Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { CtaBanner } from '../components/CtaBanner.js';
import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

export function ReviewsPage() {
  document.title = `Customer Reviews & Carrier Testimonials | ${COMPANY.name}`;

  return `
    ${Header()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${icon('Star', '', 14)} Verified Driver & Shipper Feedback
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Proven Track Record of Freight Excellence
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Read authentic reviews from owner-operators, fleet owners, and enterprise shippers moving freight with Fargo Freights nationwide.
          </p>

          <!-- Google Rating Pill -->
          <div style="display: inline-flex; align-items: center; gap: 1rem; background-color: rgba(255,255,255,0.1); padding: 0.75rem 1.5rem; border-radius: var(--ff-radius-full); margin-top: 2rem; border: 1px solid rgba(255,255,255,0.2);" class="animate-on-scroll delay-3">
            <span style="font-weight: 800; font-size: 1.2rem; color: #FFFFFF;">4.9 / 5.0</span>
            <div style="display: flex; gap: 0.2rem; color: #FBBF24;">
              ${Array(5).fill(0).map(() => icon('Star', '', 16)).join('')}
            </div>
            <span style="font-size: 0.85rem; color: #CBD5E1;">Based on 250+ Verified Reviews</span>
          </div>
        </div>
      </section>

      <!-- Review Cards Grid -->
      <section class="ff-section">
        <div class="ff-container">
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
                      <span style="display: inline-flex; align-items: center; color: var(--ff-success); margin-left: 0.35rem;" title="Verified Customer">
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

          <!-- Submit Review Form Section -->
          <div style="max-width: 720px; margin: 5rem auto 0 auto; background-color: var(--ff-bg-light); border-radius: var(--ff-radius-xl); padding: 3rem; border: 1px solid var(--ff-border);" class="animate-on-scroll">
            <div class="text-center" style="margin-bottom: 2rem;">
              <span class="ff-badge">${icon('Star', '', 14)} Share Your Experience</span>
              <h3 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Leave a Verified Review</h3>
              <p style="color: var(--ff-text-muted); font-size: 0.95rem;">
                Are you a carrier or shipper working with Fargo Freights? We value your feedback.
              </p>
            </div>

            <form id="submit-review-form" novalidate>
              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="rev-name">Full Name</label>
                  <input type="text" id="rev-name" class="ff-input" placeholder="e.g. David Ross" required />
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="rev-company">Company / Trucking LLC</label>
                  <input type="text" id="rev-company" class="ff-input" placeholder="e.g. Ross Logistics LLC" required />
                </div>
              </div>

              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="rev-role">Relationship / Role</label>
                  <select id="rev-role" class="ff-select" required>
                    <option value="Owner-Operator">Owner-Operator (Driver)</option>
                    <option value="Fleet Owner">Fleet Owner (Multiple Trucks)</option>
                    <option value="Shipper / Manufacturer">Commercial Shipper / Manufacturer</option>
                    <option value="Auto Hauler">Auto Car Hauler</option>
                  </select>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="rev-rating">Star Rating</label>
                  <select id="rev-rating" class="ff-select" required>
                    <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                    <option value="4">★★★★☆ (4 Stars - Great)</option>
                    <option value="3">★★★☆☆ (3 Stars - Average)</option>
                  </select>
                </div>
              </div>

              <div class="ff-form-group">
                <label class="ff-label ff-label-required" for="rev-text">Your Review / Testimonial</label>
                <textarea id="rev-text" class="ff-textarea" placeholder="Share your experience regarding rate negotiation, dispatcher communication, or freight delivery..." required></textarea>
              </div>

              <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block">
                Submit Review For Verification ${icon('Send', '', 18)}
              </button>
            </form>
          </div>
        </div>
      </section>

      ${CtaBanner()}
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}

export function initReviewForm() {
  const form = document.getElementById('submit-review-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rev-name')?.value.trim();
    const company = document.getElementById('rev-company')?.value.trim();
    const text = document.getElementById('rev-text')?.value.trim();

    if (!name || !company || !text) {
      showToast('Please complete all required fields.', 'error');
      return;
    }

    showToast(`Thank you, ${name}! Your review for ${company} has been submitted for verification.`, 'success', 5000);
    form.reset();
  });
}
