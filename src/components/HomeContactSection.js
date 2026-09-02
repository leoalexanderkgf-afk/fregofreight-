/**
 * Fargo Freights - Contact & Get a Quote Section on Home
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

export function HomeContactSection() {
  return `
    <section class="ff-section ff-bg-subtle" id="contact">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${icon('Mail', '', 14)} Get In Touch</span>
          <h2 class="ff-section-title">Let's Move Freight Together</h2>
          <p class="ff-section-subtitle">
            Whether you need dedicated truck dispatch, spot load quotes, or auto hauling capacity, our logistics team is standing by 24/7.
          </p>
        </div>

        <div class="ff-split-layout" style="align-items: flex-start;">
          <!-- Contact Details Box -->
          <div class="ff-split-content animate-on-scroll">
            <div style="background-color: #FFFFFF; padding: 2.5rem; border-radius: var(--ff-radius-lg); border: 1px solid var(--ff-border); box-shadow: var(--ff-shadow-sm);">
              <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Direct Contact Details</h3>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${icon('PhoneCall', '', 20)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 0.95rem; display: block;">24/7 Dispatch Hotline</strong>
                  <a href="tel:${COMPANY.phoneClean}" style="font-size: 1.25rem; font-weight: 800; color: var(--ff-primary);">${COMPANY.phone}</a>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${icon('Mail', '', 20)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 0.95rem; display: block;">Email Inquiries</strong>
                  <a href="mailto:${COMPANY.email}" style="font-size: 1.05rem; color: var(--ff-text-main); font-weight: 600;">${COMPANY.email}</a>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${icon('MapPin', '', 20)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 0.95rem; display: block;">Office & Yard Address</strong>
                  <span style="font-size: 0.95rem; color: var(--ff-text-muted);">${COMPANY.address.full}</span>
                </div>
              </div>

              <div class="ff-loc-detail-box" style="margin-bottom: 0;">
                <div class="ff-loc-detail-icon">${icon('Clock', '', 20)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 0.95rem; display: block;">Operating Schedule</strong>
                  <span style="font-size: 0.88rem; color: var(--ff-text-muted);">${COMPANY.hours.dispatch}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Get a Quote Form -->
          <div class="ff-carrier-card animate-on-scroll delay-2" style="padding: 2.5rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Get a Quote</h3>
            <p style="color: var(--ff-text-muted); font-size: 0.92rem; margin-bottom: 1.75rem;">
              Fill in your shipment details to receive an instant spot rate confirmation.
            </p>

            <form id="home-quote-form" novalidate>
              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hq-origin">Origin (City, ST or Zip)</label>
                  <input type="text" id="hq-origin" class="ff-input" placeholder="e.g. Fargo, ND" required />
                  <div class="ff-error-msg">Origin is required</div>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hq-dest">Destination (City, ST or Zip)</label>
                  <input type="text" id="hq-dest" class="ff-input" placeholder="e.g. Chicago, IL" required />
                  <div class="ff-error-msg">Destination is required</div>
                </div>
              </div>

              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hq-equipment">Equipment Type</label>
                  <select id="hq-equipment" class="ff-select" required>
                    <option value="Dry Van (53ft)" selected>Dry Van (53ft)</option>
                    <option value="Reefer (53ft)">Reefer (53ft)</option>
                    <option value="Flatbed">Flatbed (48/53ft)</option>
                    <option value="Step Deck">Step Deck</option>
                    <option value="Auto Hauler">Auto Car Hauler</option>
                    <option value="Box Truck">Box Truck (26ft)</option>
                    <option value="Power Only">Power Only</option>
                    <option value="Hotshot">Hotshot</option>
                  </select>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hq-phone">Phone Number</label>
                  <input type="tel" id="hq-phone" class="ff-input" placeholder="(701) 000-0000" required />
                  <div class="ff-error-msg">Phone is required</div>
                </div>
              </div>

              <div class="ff-form-group">
                <label class="ff-label ff-label-required" for="hq-email">Email Address</label>
                <input type="email" id="hq-email" class="ff-input" placeholder="contact@company.com" required />
                <div class="ff-error-msg">Valid email is required</div>
              </div>

              <div class="ff-form-group">
                <label class="ff-label" for="hq-notes">Shipment Details & Weight</label>
                <textarea id="hq-notes" class="ff-textarea" style="min-height: 80px;" placeholder="Commodity type, weight, appointment schedule, or special instructions..."></textarea>
              </div>

              <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block" id="hq-submit-btn">
                Request Guaranteed Quote ${icon('Send', '', 18)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHomeContact() {
  const form = document.getElementById('home-quote-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const requiredInputs = form.querySelectorAll('input[required], select[required]');

    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });

    const emailInput = document.getElementById('hq-email');
    if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      isValid = false;
    }

    if (!isValid) {
      showToast('Please complete all required fields.', 'error');
      return;
    }

    const btn = document.getElementById('hq-submit-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = 'Sending Quote Request...';
    }

    setTimeout(() => {
      showToast('Thank you! Your quote request has been received. Our logistics team will call you within 15 minutes.', 'success', 7000);
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = 'Request Guaranteed Quote ' + icon('Send', '', 18);
      }
    }, 600);
  });
}
