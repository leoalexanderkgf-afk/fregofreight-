/**
 * Fargo Freights - Floating Quick Action Bar
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function QuickActionBar() {
  return `
    <div class="ff-floating-actions" aria-label="Quick Actions">
      <a href="tel:${COMPANY.phoneClean}" class="ff-float-btn phone-btn" aria-label="Call Dispatch Hotline">
        ${icon('PhoneCall', '', 16)}
        <span>Call Dispatch: ${COMPANY.phone}</span>
      </a>
      <a href="/become-a-carrier" class="ff-float-btn" aria-label="Carrier Onboarding">
        ${icon('Truck', '', 16)}
        <span>Sign Up Carrier</span>
      </a>
    </div>

    <!-- Back to Top Button with Circular Progress -->
    <button class="back-to-top" id="back-to-top" aria-label="Scroll back to top">
      <svg class="progress-ring" width="50" height="50">
        <circle
          class="progress-ring-circle"
          stroke-width="3"
          fill="transparent"
          r="22"
          cx="25"
          cy="25"
          style="stroke-dasharray: 138.2; stroke-dashoffset: 138.2;"
        />
      </svg>
      ${icon('ChevronUp', '', 20)}
    </button>
  `;
}
