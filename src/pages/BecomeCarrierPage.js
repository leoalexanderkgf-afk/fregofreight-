/**
 * Fargo Freights - Become a Carrier Application Page
 * Complete implementation conforming to all specifications.
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

export function BecomeCarrierPage() {
  document.title = `Become a Carrier | ${COMPANY.name}`;

  return `
    ${Header()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${icon('Truck', '', 14)} Carrier Application Portal
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Become a Carrier
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Partner with Fargo Freights for dedicated 24/7 truck dispatch, top-dollar rates, zero forced dispatch, and immediate factoring setup.
          </p>
        </div>
      </section>

      <!-- Carrier Application Form -->
      <section class="ff-section">
        <div class="ff-container ff-container-narrow">
          <div class="ff-carrier-card animate-on-scroll">
            <div style="border-bottom: 1px solid var(--ff-border); padding-bottom: 1.5rem; margin-bottom: 2rem;">
              <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Carrier Application</h2>
              <p style="color: var(--ff-text-muted); font-size: 0.95rem;">
                Please fill in your equipment details below. Our carrier onboarding team will review your application and contact you shortly.
              </p>
            </div>

            <form id="carrier-onboarding-form" novalidate>
              <!-- Personal Details -->
              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-firstname">First Name</label>
                  <input type="text" id="c-firstname" class="ff-input" placeholder="e.g. John" required />
                  <div class="ff-error-msg">First name is required</div>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-lastname">Last Name</label>
                  <input type="text" id="c-lastname" class="ff-input" placeholder="e.g. Miller" required />
                  <div class="ff-error-msg">Last name is required</div>
                </div>
              </div>

              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-email">Email</label>
                  <input type="email" id="c-email" class="ff-input" placeholder="john@example.com" required />
                  <div class="ff-error-msg">Valid email is required</div>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-phone">Phone Number</label>
                  <input type="tel" id="c-phone" class="ff-input" placeholder="(701) 000-0000" required />
                  <div class="ff-error-msg">Valid phone number is required</div>
                </div>
              </div>

              <!-- Equipment Details -->
              <div class="ff-grid ff-grid-2" style="margin-top: 0.5rem;">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-trucktype">Truck Type</label>
                  <select id="c-trucktype" class="ff-select" required>
                    <option value="" disabled selected>Select Truck Type</option>
                    <option value="Dry Van">Dry Van</option>
                    <option value="Reefer">Reefer</option>
                    <option value="Flatbed">Flatbed</option>
                    <option value="Box Truck">Box Truck</option>
                    <option value="Dump Truck">Dump Truck</option>
                    <option value="Hotshot">Hotshot</option>
                    <option value="Car Hauler">Car Hauler</option>
                    <option value="Other">Other</option>
                  </select>
                  <div class="ff-error-msg">Please select a truck type</div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-length">Truck / Trailer Length</label>
                  <input type="text" id="c-length" class="ff-input" placeholder="e.g. 53 ft, 48 ft, 40 ft, 26 ft" required />
                  <div class="ff-error-msg">Please specify length (e.g. 53 ft)</div>
                </div>
              </div>

              <!-- MC Question & Conditional Logic -->
              <div class="ff-form-group" style="margin-top: 1rem;">
                <label class="ff-label ff-label-required">Do you have an MC?</label>
                <div class="ff-radio-options" style="margin-top: 0.5rem;">
                  <label class="ff-radio-group">
                    <input type="radio" name="has_mc" value="yes" checked id="radio-mc-yes" />
                    <strong>YES, I HAVE AN MC</strong>
                  </label>
                  <label class="ff-radio-group">
                    <input type="radio" name="has_mc" value="no" id="radio-mc-no" />
                    <span>NO, I DON'T HAVE AN MC</span>
                  </label>
                </div>
              </div>

              <!-- Conditional MC Number Input: Visible ONLY when YES is selected -->
              <div id="mc-conditional-box" class="ff-conditional-field">
                <div class="ff-form-group" style="margin-bottom: 1.5rem;">
                  <label class="ff-label ff-label-required" for="c-mc-num">Enter MC Number</label>
                  <input type="text" id="c-mc-num" class="ff-input" placeholder="e.g. MC-123456" required />
                  <div class="ff-error-msg">MC number is required</div>
                </div>
              </div>

              <!-- Additional Comments -->
              <div class="ff-form-group">
                <label class="ff-label" for="c-comments">Additional Comments</label>
                <textarea id="c-comments" class="ff-textarea" placeholder="Tell us about your preferred running lanes, factoring company, target revenue, or any special questions..."></textarea>
              </div>

              <!-- Status Alert placeholder for inside form feedback -->
              <div id="carrier-form-status" style="display: none; margin-bottom: 1.5rem; padding: 1.25rem; border-radius: var(--ff-radius-md);"></div>

              <div style="margin-top: 2rem;">
                <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block" id="carrier-submit-btn">
                  Submit Application ${icon('ArrowRight', '', 18)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      ${Footer()}
      ${QuickActionBar()}
    </main>
  `;
}

export function initCarrierForm() {
  const form = document.getElementById('carrier-onboarding-form');
  const radioYes = document.getElementById('radio-mc-yes');
  const radioNo = document.getElementById('radio-mc-no');
  const mcBox = document.getElementById('mc-conditional-box');
  const mcInput = document.getElementById('c-mc-num');
  const statusBox = document.getElementById('carrier-form-status');
  const submitBtn = document.getElementById('carrier-submit-btn');

  function updateMcVisibility() {
    if (radioYes?.checked) {
      if (mcBox) mcBox.style.display = 'block';
      if (mcInput) mcInput.required = true;
    } else {
      if (mcBox) mcBox.style.display = 'none';
      if (mcInput) {
        mcInput.required = false;
        mcInput.classList.remove('error');
        mcInput.value = '';
      }
    }
  }

  radioYes?.addEventListener('change', updateMcVisibility);
  radioNo?.addEventListener('change', updateMcVisibility);

  // Initialize visibility state on mount
  updateMcVisibility();

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const requiredInputs = form.querySelectorAll('input[required]:not([type="radio"]), select[required]');

    requiredInputs.forEach((input) => {
      // If parent is hidden, skip
      if (input.closest('#mc-conditional-box') && !radioYes?.checked) {
        return;
      }

      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });

    const emailInput = document.getElementById('c-email');
    if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      isValid = false;
    }

    const phoneInput = document.getElementById('c-phone');
    if (phoneInput && phoneInput.value.trim().length < 7) {
      phoneInput.classList.add('error');
      isValid = false;
    }

    if (!isValid) {
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.style.backgroundColor = 'var(--ff-danger-light)';
        statusBox.style.color = 'var(--ff-danger)';
        statusBox.style.border = '1px solid var(--ff-danger)';
        statusBox.innerHTML = '<strong>Please correct the errors:</strong> Fill in all required fields marked with * accurately.';
      }
      showToast('Please fill in all required fields accurately.', 'error');
      return;
    }

    // Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting Application...';
    }

    if (statusBox) {
      statusBox.style.display = 'none';
    }

    // Simulate submission / integration-ready hook
    setTimeout(() => {
      const successMessage = 'Thank you! Your application has been submitted successfully. Our team will contact you shortly.';
      
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.style.backgroundColor = 'var(--ff-success-light)';
        statusBox.style.color = '#065F46';
        statusBox.style.border = '1px solid var(--ff-success)';
        statusBox.innerHTML = `<strong>Success!</strong> ${successMessage}`;
      }

      showToast(successMessage, 'success', 8000);
      form.reset();
      updateMcVisibility();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Application ' + icon('ArrowRight', '', 18);
      }

      // Smooth scroll to status message
      statusBox?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 700);
  });
}
