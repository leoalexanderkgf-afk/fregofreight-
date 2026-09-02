/**
 * Fargo Freights - Become a Carrier / Get Started Section on Home
 */

import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

export function HomeGetStartedSection() {
  return `
    <section class="ff-section" id="get-started">
      <div class="ff-container">
        <div class="ff-carrier-card animate-on-scroll" style="background: linear-gradient(145deg, #FFFFFF 0%, var(--ff-bg-subtle) 100%);">
          <div class="ff-grid ff-grid-2" style="align-items: center; gap: 3rem;">
            <div>
              <span class="ff-badge">${icon('Truck', '', 14)} Carrier Partnership</span>
              <h2 style="font-size: 2.2rem; margin-bottom: 1rem;">Ready to Get Started?</h2>
              <p style="font-size: 1.1rem; color: var(--ff-text-muted); margin-bottom: 1.5rem;">
                Tell us about your operation and our team will get in touch with you.
              </p>

              <ul class="ff-checklist" style="margin-bottom: 2rem;">
                <li class="ff-check-item">
                  <div class="ff-check-icon">${icon('Check', '', 14)}</div>
                  <div class="ff-check-text"><strong>Fast Setup:</strong> Get rolling on top-paying lanes within 2 to 4 hours.</div>
                </li>
                <li class="ff-check-item">
                  <div class="ff-check-icon">${icon('Check', '', 14)}</div>
                  <div class="ff-check-text"><strong>100% Autonomy:</strong> No forced dispatch — you approve every rate con.</div>
                </li>
                <li class="ff-check-item">
                  <div class="ff-check-icon">${icon('Check', '', 14)}</div>
                  <div class="ff-check-text"><strong>Factoring & Back-Office:</strong> Direct invoicing and rapid same-day funding support.</div>
                </li>
              </ul>

              <div>
                <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-lg">
                  Become a Carrier ${icon('ArrowRight', '', 18)}
                </a>
              </div>
            </div>

            <!-- Compact Quick Sign-up Form -->
            <div style="background-color: #FFFFFF; padding: 2rem; border-radius: var(--ff-radius-lg); border: 1px solid var(--ff-border); box-shadow: var(--ff-shadow-md);">
              <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">Quick Carrier Inquiry</h3>
              <p style="font-size: 0.88rem; color: var(--ff-text-muted); margin-bottom: 1.25rem;">
                Submit your basics and a senior dispatcher will call you promptly.
              </p>

              <form id="home-quick-carrier-form" novalidate>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hk-name">Your Name</label>
                  <input type="text" id="hk-name" class="ff-input" placeholder="e.g. John Miller" required />
                  <div class="ff-error-msg">Name is required</div>
                </div>

                <div class="ff-grid ff-grid-2">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="hk-phone">Phone Number</label>
                    <input type="tel" id="hk-phone" class="ff-input" placeholder="(555) 000-0000" required />
                    <div class="ff-error-msg">Phone is required</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="hk-truck">Truck Type</label>
                    <select id="hk-truck" class="ff-select" required>
                      <option value="Dry Van">Dry Van</option>
                      <option value="Reefer">Reefer</option>
                      <option value="Flatbed">Flatbed</option>
                      <option value="Box Truck">Box Truck</option>
                      <option value="Dump Truck">Dump Truck</option>
                      <option value="Hotshot">Hotshot</option>
                      <option value="Car Hauler">Car Hauler</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button type="submit" class="ff-btn ff-btn-primary ff-btn-block" id="hk-submit-btn">
                  Submit Quick Inquiry ${icon('Send', '', 16)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHomeQuickCarrier() {
  const form = document.getElementById('home-quick-carrier-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('hk-name')?.value.trim();
    const phone = document.getElementById('hk-phone')?.value.trim();

    if (!name || !phone) {
      showToast('Please enter your name and phone number.', 'error');
      return;
    }

    const btn = document.getElementById('hk-submit-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = 'Submitting...';
    }

    setTimeout(() => {
      showToast(`Thank you! Your application has been submitted successfully. Our team will contact you shortly.`, 'success', 6000);
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = 'Submit Quick Inquiry ' + icon('Send', '', 16);
      }
    }, 600);
  });
}
