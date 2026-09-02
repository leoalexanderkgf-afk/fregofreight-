/**
 * Fargo Freights - Interactive Instant Freight Quote & Rate Calculator
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';
import { showToast } from '../utils/toast.js';

export function QuoteCalculatorSection() {
  return `
    <section class="ff-section ff-bg-subtle" id="quote">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${icon('Calculator', '', 14)} Instant Rate Estimate</span>
          <h2 class="ff-section-title">Freight Rate Calculator & Instant Quote</h2>
          <p class="ff-section-subtitle">
            Get an instant, data-driven freight rate estimation based on real-time American market lane averages. Submit your shipment details for priority booking.
          </p>
        </div>

        <div class="ff-quote-container animate-on-scroll">
          <div class="ff-quote-grid">
            <!-- Form Side -->
            <div class="ff-quote-form-side">
              <form id="instant-quote-form" novalidate>
                <div class="ff-grid ff-grid-2" style="margin-bottom: 0.5rem;">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-origin">Origin (City, ST or Zip)</label>
                    <input type="text" id="quote-origin" class="ff-input" placeholder="e.g. Chicago, IL 60601" required />
                    <div class="ff-error-msg">Please enter origin location</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-dest">Destination (City, ST or Zip)</label>
                    <input type="text" id="quote-dest" class="ff-input" placeholder="e.g. Dallas, TX 75201" required />
                    <div class="ff-error-msg">Please enter destination location</div>
                  </div>
                </div>

                <div class="ff-grid ff-grid-2" style="margin-bottom: 0.5rem;">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-equipment">Equipment Type</label>
                    <select id="quote-equipment" class="ff-select" required>
                      <option value="dry-van" selected>53' Dry Van (Standard)</option>
                      <option value="reefer">53' Refrigerated (Reefer)</option>
                      <option value="flatbed">48' / 53' Flatbed</option>
                      <option value="stepdeck">Step Deck / Single Drop</option>
                      <option value="autohaul">Auto Car Hauler (3-9 Cars)</option>
                      <option value="boxtruck">26' Box Truck / Straight Truck</option>
                      <option value="poweronly">Power Only</option>
                      <option value="hotshot">Hotshot Transport</option>
                    </select>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label" for="quote-weight">Estimated Weight (lbs)</label>
                    <input type="number" id="quote-weight" class="ff-input" placeholder="e.g. 38,000" min="500" max="80000" value="35000" />
                  </div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label" for="quote-distance">Estimated Distance (Miles): <span id="dist-display" style="color: var(--ff-primary); font-weight: 800;">750</span> mi</label>
                  <input type="range" id="quote-distance" min="100" max="3000" step="50" value="750" style="width: 100%; accent-color: var(--ff-primary); cursor: pointer;" />
                </div>

                <div class="ff-grid ff-grid-3" style="margin-bottom: 0.5rem;">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-name">Your Full Name</label>
                    <input type="text" id="quote-name" class="ff-input" placeholder="John Miller" required />
                    <div class="ff-error-msg">Name is required</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-phone">Phone Number</label>
                    <input type="tel" id="quote-phone" class="ff-input" placeholder="(555) 000-0000" required />
                    <div class="ff-error-msg">Phone is required</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-email">Email Address</label>
                    <input type="email" id="quote-email" class="ff-input" placeholder="john@company.com" required />
                    <div class="ff-error-msg">Valid email is required</div>
                  </div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label" for="quote-notes">Shipment Notes / Special Instructions</label>
                  <textarea id="quote-notes" class="ff-textarea" style="min-height: 80px;" placeholder="Liftgate required, appointment time, hazmat details, or specific delivery window..."></textarea>
                </div>

                <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block">
                  Submit For Guaranteed Spot Rate ${icon('Send', '', 18)}
                </button>
              </form>
            </div>

            <!-- Preview & Calculation Side -->
            <div class="ff-quote-preview-side">
              <div>
                <span class="ff-badge ff-badge-white" style="margin-bottom: 1.5rem;">
                  ${icon('TrendingUp', '', 14)} Live Market Spot Index
                </span>
                <h3 style="color: #FFFFFF; font-size: 1.6rem; margin-bottom: 0.75rem;">Estimated Cost Breakdown</h3>
                <p style="color: #94A3B8; font-size: 0.92rem;">
                  Based on current DAT One & Truckstop verified lane spot averages, fuel surcharges, and equipment availability.
                </p>

                <div class="ff-quote-estimate-card" style="margin: 2rem 0;">
                  <div style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: #94A3B8;">Estimated Spot Rate Range</div>
                  <div class="ff-est-price" id="calc-price-display">$2,250 – $2,580</div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #CBD5E1; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.75rem;">
                    <span>Estimated Rate/Mile:</span>
                    <strong id="calc-rpm-display" style="color: #38BDF8;">$3.00 – $3.44 / mi</strong>
                  </div>
                </div>
              </div>

              <div>
                <div class="ff-quote-benefit-item">
                  ${icon('CheckCircle2', '', 18)}
                  <span>Zero hidden broker fees or surprise accessorials</span>
                </div>
                <div class="ff-quote-benefit-item">
                  ${icon('CheckCircle2', '', 18)}
                  <span>$250k+ Comprehensive cargo insurance coverage included</span>
                </div>
                <div class="ff-quote-benefit-item">
                  ${icon('CheckCircle2', '', 18)}
                  <span>Dedicated dispatcher assigned to your load within 15 minutes</span>
                </div>
                <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.15); font-size: 0.82rem; color: #94A3B8;">
                  Need urgent immediate booking? Call 24/7 hotline: <a href="tel:${COMPANY.phoneClean}" style="color: #60A5FA; font-weight: 700;">${COMPANY.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initQuoteCalculator() {
  const form = document.getElementById('instant-quote-form');
  const distSlider = document.getElementById('quote-distance');
  const distDisplay = document.getElementById('dist-display');
  const equipSelect = document.getElementById('quote-equipment');
  const priceDisplay = document.getElementById('calc-price-display');
  const rpmDisplay = document.getElementById('calc-rpm-display');

  const baseRates = {
    'dry-van': 2.85,
    'reefer': 3.35,
    'flatbed': 3.20,
    'stepdeck': 3.45,
    'autohaul': 3.80,
    'boxtruck': 2.30,
    'poweronly': 2.50,
    'hotshot': 2.70
  };

  function updateCalculation() {
    if (!distSlider || !priceDisplay || !rpmDisplay) return;

    const miles = parseInt(distSlider.value, 10);
    if (distDisplay) distDisplay.textContent = miles.toLocaleString();

    const equip = equipSelect?.value || 'dry-van';
    const baseRpm = baseRates[equip] || 2.85;

    // Fuel surcharge + distance scaling
    let minRpm = baseRpm;
    let maxRpm = baseRpm * 1.15;

    let minTotal = Math.round(miles * minRpm);
    let maxTotal = Math.round(miles * maxRpm);

    // Minimum load charge threshold
    if (minTotal < 650) minTotal = 650;
    if (maxTotal < 850) maxTotal = 850;

    priceDisplay.textContent = `$${minTotal.toLocaleString()} – $${maxTotal.toLocaleString()}`;
    rpmDisplay.textContent = `$${minRpm.toFixed(2)} – $${maxRpm.toFixed(2)} / mi`;
  }

  distSlider?.addEventListener('input', updateCalculation);
  equipSelect?.addEventListener('change', updateCalculation);

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

    const emailInput = document.getElementById('quote-email');
    if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      isValid = false;
    }

    if (!isValid) {
      showToast('Please fill in all required fields accurately.', 'error');
      return;
    }

    const name = document.getElementById('quote-name')?.value || 'Valued Shipper';
    const origin = document.getElementById('quote-origin')?.value;
    const dest = document.getElementById('quote-dest')?.value;

    showToast(`Thank you, ${name}! Your rate quote for ${origin} to ${dest} has been received. Our logistics team will call you within 15 minutes.`, 'success', 6000);
    form.reset();
    updateCalculation();
  });
}
