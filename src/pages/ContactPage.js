/**
 * Fargo Freights - Contact Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { MapSection } from '../components/MapSection.js';
import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

export function ContactPage() {
  document.title = `Contact Us | 24/7 Dispatch Hotline | ${COMPANY.name}`;

  return `
    ${Header()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${icon('PhoneCall', '', 14)} 24/7/365 Communications
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Get In Touch With Fargo Freights
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Whether you are a driver looking for steady freight, a shipper seeking dedicated capacity, or need urgent in-transit support, our logistics team is standing by.
          </p>
        </div>
      </section>

      <!-- Contact Info & Form -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-split-layout">
            <!-- Details -->
            <div class="ff-split-content animate-on-scroll">
              <span class="ff-badge">${icon('MapPin', '', 14)} Tioga, North Dakota HQ</span>
              <h2>Direct Contact Information</h2>
              <p style="margin-bottom: 2rem;">
                Our dispatch specialists and customer representatives are available 24 hours a day, 7 days a week.
              </p>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${icon('PhoneCall', '', 22)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 1.05rem; display: block;">24/7 Dispatch Hotline</strong>
                  <a href="tel:${COMPANY.phoneClean}" style="font-size: 1.25rem; font-weight: 800; color: var(--ff-primary);">${COMPANY.phone}</a>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${icon('Mail', '', 22)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 1.05rem; display: block;">General Inquiries & Billing</strong>
                  <a href="mailto:${COMPANY.email}" style="font-size: 1.1rem; color: var(--ff-text-main); font-weight: 600;">${COMPANY.email}</a>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${icon('MapPin', '', 22)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 1.05rem; display: block;">Headquarters Location</strong>
                  <span style="font-size: 1.05rem; color: var(--ff-text-muted);">${COMPANY.address.full}</span>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${icon('Clock', '', 22)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 1.05rem; display: block;">Operating Schedule</strong>
                  <span style="font-size: 0.95rem; color: var(--ff-text-muted);">${COMPANY.hours.dispatch}</span>
                </div>
              </div>
            </div>

            <!-- Form -->
            <div class="ff-carrier-card animate-on-scroll delay-2" style="padding: 2.75rem;">
              <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Send Us a Message</h3>
              <p style="color: var(--ff-text-muted); font-size: 0.92rem; margin-bottom: 1.75rem;">
                Fill out the inquiry form below and an operations specialist will respond within 15 minutes.
              </p>

              <form id="general-contact-form" novalidate>
                <div class="ff-grid ff-grid-2">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="cnt-name">Your Full Name</label>
                    <input type="text" id="cnt-name" class="ff-input" placeholder="e.g. Alex Morgan" required />
                    <div class="ff-error-msg">Name is required</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="cnt-phone">Phone Number</label>
                    <input type="tel" id="cnt-phone" class="ff-input" placeholder="(555) 000-0000" required />
                    <div class="ff-error-msg">Phone is required</div>
                  </div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="cnt-email">Email Address</label>
                  <input type="email" id="cnt-email" class="ff-input" placeholder="alex@company.com" required />
                  <div class="ff-error-msg">Valid email is required</div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="cnt-interest">Inquiry Type</label>
                  <select id="cnt-interest" class="ff-select" required>
                    <option value="Dispatch Services">Truck Dispatch Services (Owner-Operator)</option>
                    <option value="Freight Brokerage">Freight Brokerage Quote (Shipper)</option>
                    <option value="Auto Hauling">Auto Car Hauling Logistics</option>
                    <option value="Fleet Management">Fleet Management & Fuel Programs</option>
                    <option value="Billing & Accounting">Billing, Settlements & Factoring</option>
                    <option value="Other">Other General Inquiry</option>
                  </select>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="cnt-message">Message / Details</label>
                  <textarea id="cnt-message" class="ff-textarea" placeholder="Describe your freight, equipment, or inquiry in detail..." required></textarea>
                  <div class="ff-error-msg">Message is required</div>
                </div>

                <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block">
                  Send Direct Message ${icon('Send', '', 18)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      ${MapSection()}
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}

export function initContactForm() {
  const form = document.getElementById('general-contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const requiredInputs = form.querySelectorAll('input[required], textarea[required]');

    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });

    const emailInput = document.getElementById('cnt-email');
    if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      isValid = false;
    }

    if (!isValid) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    const name = document.getElementById('cnt-name')?.value || 'Friend';
    showToast(`Thank you, ${name}! Your message has been sent directly to our dispatch desk. We will call you back shortly.`, 'success', 6000);
    form.reset();
  });
}
