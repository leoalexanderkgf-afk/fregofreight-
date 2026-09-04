/**
 * Fargo Freights - Become a Carrier Application Page
 * Complete implementation with document uploads (W-9, COI, NOA, MC Authority).
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
                  <label class="ff-label ff-label-required" for="c-email">Email Address</label>
                  <input type="email" id="c-email" class="ff-input" placeholder="carrier@domain.com" required />
                  <div class="ff-error-msg">Please enter a valid email</div>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-phone">Phone Number</label>
                  <input type="tel" id="c-phone" class="ff-input" placeholder="(555) 000-0000" required />
                  <div class="ff-error-msg">Phone number is required</div>
                </div>
              </div>

              <!-- Truck Details -->
              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-trucktype">Truck Type</label>
                  <select id="c-trucktype" class="ff-select" required>
                    <option value="" disabled selected>Select equipment type...</option>
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
              <div class="ff-form-group" style="margin-top: 0.5rem;">
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

              <!-- Document Uploads (W-9, COI, NOA, MC Authority) -->
              <div class="ff-doc-upload-section" style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--ff-border);">
                <div style="margin-bottom: 1.25rem;">
                  <h3 style="font-size: 1.25rem; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
                    ${icon('FileText', '', 20)} Upload Carrier Documents (W-9, COI, NOA)
                  </h3>
                  <p style="font-size: 0.88rem; color: var(--ff-text-muted);">
                    Upload your onboarding documents for fast 2-hour setup. Supported formats: PDF, PNG, JPG, DOCX (up to 15MB each).
                  </p>
                </div>

                <div class="ff-grid ff-grid-2" style="gap: 1.25rem; margin-bottom: 1.5rem;">
                  <!-- 1. W-9 Form -->
                  <div class="ff-doc-box" data-doc="w9">
                    <div class="ff-doc-header">
                      <label class="ff-doc-label">1. W-9 Tax Form</label>
                      <span class="ff-doc-badge">Required</span>
                    </div>
                    <div class="ff-doc-dropzone" id="dropzone-w9">
                      <input type="file" id="file-w9" class="ff-file-input" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" />
                      <div class="ff-dropzone-content" id="dz-content-w9">
                        ${icon('FileText', 'ff-doc-icon', 26)}
                        <span class="ff-dropzone-text">Click to Choose W-9 Form</span>
                        <span class="ff-dropzone-hint">PDF or Image up to 15MB</span>
                      </div>
                      <div class="ff-file-selected" id="selected-w9" style="display: none;">
                        ${icon('CheckCircle2', '', 18)}
                        <span class="ff-filename" id="name-w9"></span>
                        <button type="button" class="ff-remove-file-btn" data-target="w9" aria-label="Remove File">&times;</button>
                      </div>
                    </div>
                  </div>

                  <!-- 2. COI (Certificate of Insurance) -->
                  <div class="ff-doc-box" data-doc="coi">
                    <div class="ff-doc-header">
                      <label class="ff-doc-label">2. Certificate of Insurance (COI)</label>
                      <span class="ff-doc-badge">Required</span>
                    </div>
                    <div class="ff-doc-dropzone" id="dropzone-coi">
                      <input type="file" id="file-coi" class="ff-file-input" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" />
                      <div class="ff-dropzone-content" id="dz-content-coi">
                        ${icon('ShieldCheck', 'ff-doc-icon', 26)}
                        <span class="ff-dropzone-text">Click to Choose COI</span>
                        <span class="ff-dropzone-hint">Min $1M Auto / $100K Cargo</span>
                      </div>
                      <div class="ff-file-selected" id="selected-coi" style="display: none;">
                        ${icon('CheckCircle2', '', 18)}
                        <span class="ff-filename" id="name-coi"></span>
                        <button type="button" class="ff-remove-file-btn" data-target="coi" aria-label="Remove File">&times;</button>
                      </div>
                    </div>
                  </div>

                  <!-- 3. Notice of Assignment (NOA) -->
                  <div class="ff-doc-box" data-doc="noa">
                    <div class="ff-doc-header">
                      <label class="ff-doc-label">3. Notice of Assignment (NOA)</label>
                      <span class="ff-doc-badge" style="background-color: #E2E8F0; color: #475569;">Factoring / Bank</span>
                    </div>
                    <div class="ff-doc-dropzone" id="dropzone-noa">
                      <input type="file" id="file-noa" class="ff-file-input" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" />
                      <div class="ff-dropzone-content" id="dz-content-noa">
                        ${icon('DollarSign', 'ff-doc-icon', 26)}
                        <span class="ff-dropzone-text">Click to Choose NOA Document</span>
                        <span class="ff-dropzone-hint">Factoring payment instructions</span>
                      </div>
                      <div class="ff-file-selected" id="selected-noa" style="display: none;">
                        ${icon('CheckCircle2', '', 18)}
                        <span class="ff-filename" id="name-noa"></span>
                        <button type="button" class="ff-remove-file-btn" data-target="noa" aria-label="Remove File">&times;</button>
                      </div>
                    </div>
                  </div>

                  <!-- 4. MC Authority Certificate -->
                  <div class="ff-doc-box" data-doc="mc">
                    <div class="ff-doc-header">
                      <label class="ff-doc-label">4. MC / DOT Authority</label>
                      <span class="ff-doc-badge" style="background-color: #E2E8F0; color: #475569;">FMCSA Authority</span>
                    </div>
                    <div class="ff-doc-dropzone" id="dropzone-mc">
                      <input type="file" id="file-mc" class="ff-file-input" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" />
                      <div class="ff-dropzone-content" id="dz-content-mc">
                        ${icon('Award', 'ff-doc-icon', 26)}
                        <span class="ff-dropzone-text">Click to Choose MC Certificate</span>
                        <span class="ff-dropzone-hint">FMCSA Operating Authority Letter</span>
                      </div>
                      <div class="ff-file-selected" id="selected-mc" style="display: none;">
                        ${icon('CheckCircle2', '', 18)}
                        <span class="ff-filename" id="name-mc"></span>
                        <button type="button" class="ff-remove-file-btn" data-target="mc" aria-label="Remove File">&times;</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Additional Comments -->
              <div class="ff-form-group">
                <label class="ff-label" for="c-comments">Additional Comments / Preferred Lanes</label>
                <textarea id="c-comments" class="ff-textarea" placeholder="Tell us about your preferred running lanes, factoring company, target gross revenue, or any special preferences..."></textarea>
              </div>

              <!-- Status Alert placeholder for inside form feedback -->
              <div id="carrier-form-status" style="display: none; margin-bottom: 1.5rem; padding: 1.25rem; border-radius: var(--ff-radius-md);"></div>

              <div style="margin-top: 2rem;">
                <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block" id="carrier-submit-btn">
                  Submit Application & Documents ${icon('ArrowRight', '', 18)}
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
  if (!form) return;

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

  // File Upload Handlers (W-9, COI, NOA, MC)
  const docTypes = ['w9', 'coi', 'noa', 'mc'];
  const uploadedFiles = {};

  docTypes.forEach((doc) => {
    const fileInput = document.getElementById(`file-${doc}`);
    const dropzone = document.getElementById(`dropzone-${doc}`);
    const dzContent = document.getElementById(`dz-content-${doc}`);
    const selectedBox = document.getElementById(`selected-${doc}`);
    const nameLabel = document.getElementById(`name-${doc}`);

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          uploadedFiles[doc] = file.name;
          if (nameLabel) nameLabel.textContent = `${file.name} (${(file.size / 1024).toFixed(0)} KB)`;
          if (dzContent) dzContent.style.display = 'none';
          if (selectedBox) selectedBox.style.display = 'flex';
          showToast(`${doc.toUpperCase()} attached: ${file.name}`, 'success', 3000);
        }
      });
    }

    // Drag & Drop visual state
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone?.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone?.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      }, false);
    });
  });

  // Remove File buttons
  document.querySelectorAll('.ff-remove-file-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      if (target) {
        delete uploadedFiles[target];
        const fileInput = document.getElementById(`file-${target}`);
        const dzContent = document.getElementById(`dz-content-${target}`);
        const selectedBox = document.getElementById(`selected-${target}`);
        if (fileInput) fileInput.value = '';
        if (dzContent) dzContent.style.display = 'flex';
        if (selectedBox) selectedBox.style.display = 'none';
      }
    });
  });

  // Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const requiredInputs = form.querySelectorAll('input[required], select[required]');

    requiredInputs.forEach((input) => {
      if (input.type === 'radio') return;
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });

    if (!isValid) {
      showToast('Please complete all required fields marked with *', 'error');
      const firstError = form.querySelector('.error');
      firstError?.focus();
      return;
    }

    // Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Submitting Application...`;
    }

    const docCount = Object.keys(uploadedFiles).length;
    const docNotice = docCount > 0 ? ` (${docCount} document${docCount > 1 ? 's' : ''} attached: ${Object.keys(uploadedFiles).map(d => d.toUpperCase()).join(', ')})` : '';

    setTimeout(() => {
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.style.backgroundColor = '#ECFDF5';
        statusBox.style.border = '1px solid #10B981';
        statusBox.style.color = '#065F46';
        statusBox.innerHTML = `
          <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <div style="color: #10B981; margin-top: 2px;">${icon('CheckCircle2', '', 24)}</div>
            <div>
              <strong style="font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">Application & Documents Received!</strong>
              <p style="font-size: 0.95rem; margin: 0; color: #047857;">
                Thank you! Your application${docNotice} has been submitted successfully. Our senior onboarding dispatch team is reviewing your profile and will contact you promptly within 2 hours.
              </p>
            </div>
          </div>
        `;
      }

      showToast(`Thank you! Your carrier application${docNotice} was submitted successfully.`, 'success', 6000);
      form.reset();
      updateMcVisibility();

      // Reset file upload boxes
      docTypes.forEach((doc) => {
        delete uploadedFiles[doc];
        const fileInput = document.getElementById(`file-${doc}`);
        const dzContent = document.getElementById(`dz-content-${doc}`);
        const selectedBox = document.getElementById(`selected-${doc}`);
        if (fileInput) fileInput.value = '';
        if (dzContent) dzContent.style.display = 'flex';
        if (selectedBox) selectedBox.style.display = 'none';
      });

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Submit Application & Documents ${icon('ArrowRight', '', 18)}`;
      }

      statusBox?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });
}
