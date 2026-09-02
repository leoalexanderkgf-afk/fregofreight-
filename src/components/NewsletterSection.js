/**
 * Fargo Freights - Newsletter & Market Rate Alerts Section
 */

import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

export function NewsletterSection() {
  return `
    <section class="ff-section-sm ff-bg-subtle" id="newsletter">
      <div class="ff-container">
        <div style="max-width: 680px; margin: 0 auto; text-align: center;" class="animate-on-scroll">
          <span class="ff-badge">${icon('Mail', '', 14)} Weekly Freight Insights</span>
          <h3 style="font-size: 1.8rem; margin-bottom: 0.75rem;">Get National Lane Rate & Fuel Trend Updates</h3>
          <p style="margin-bottom: 1.75rem;">
            Subscribe to our weekly dispatch digest featuring spot rate fluctuations, high-demand hot lanes, and regulatory updates.
          </p>

          <form id="newsletter-form" style="display: flex; gap: 0.75rem; max-width: 520px; margin: 0 auto; flex-wrap: wrap;">
            <input 
              type="email" 
              id="newsletter-email" 
              class="ff-input" 
              placeholder="Enter your business email" 
              required 
              style="flex: 1; min-width: 240px;"
            />
            <button type="submit" class="ff-btn ff-btn-primary">
              Subscribe ${icon('Send', '', 16)}
            </button>
          </form>
          <div style="font-size: 0.78rem; color: var(--ff-text-subtle); margin-top: 0.75rem;">
            Zero spam. Unsubscribe anytime.
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email')?.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast('Success! You are now subscribed to Fargo Freights weekly market updates.', 'success');
    form.reset();
  });
}
