/**
 * Fargo Freights - Interactive Map & Headquarters Location Section
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function MapSection() {
  const mapQuery = encodeURIComponent(COMPANY.address.full);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return `
    <section class="ff-section" id="location">
      <div class="ff-container">
        <div class="ff-location-grid animate-on-scroll">
          <div class="ff-location-info">
            <span class="ff-badge">${icon('MapPin', '', 14)} North Dakota Headquarters</span>
            <h2 style="font-size: 2rem; margin-bottom: 1.25rem;">Visit Our Logistics Operations Hub</h2>
            <p style="margin-bottom: 2rem;">
              We operate from our central transportation facility in Tioga, North Dakota, coordinating freight dispatch, driver safety, and carrier sales 24/7 across North America.
            </p>

            <div class="ff-loc-detail-box">
              <div class="ff-loc-detail-icon">${icon('MapPin', '', 20)}</div>
              <div>
                <strong style="color: var(--ff-text-main); display: block;">Physical Address:</strong>
                <span style="color: var(--ff-text-muted);">${COMPANY.address.full}</span>
              </div>
            </div>

            <div class="ff-loc-detail-box">
              <div class="ff-loc-detail-icon">${icon('PhoneCall', '', 20)}</div>
              <div>
                <strong style="color: var(--ff-text-main); display: block;">24/7 Phone Line:</strong>
                <a href="tel:${COMPANY.phoneClean}" style="font-weight: 700;">${COMPANY.phone}</a>
              </div>
            </div>

            <div class="ff-loc-detail-box">
              <div class="ff-loc-detail-icon">${icon('Clock', '', 20)}</div>
              <div>
                <strong style="color: var(--ff-text-main); display: block;">Hours of Operation:</strong>
                <span style="color: var(--ff-text-muted);">${COMPANY.hours.dispatch}</span>
              </div>
            </div>

            <div style="margin-top: 1rem;">
              <a 
                href="https://maps.google.com/?q=${mapQuery}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="ff-btn ff-btn-outline ff-btn-sm"
              >
                Get Driving Directions ${icon('ExternalLink', '', 14)}
              </a>
            </div>
          </div>

          <div class="ff-map-frame-wrap">
            <iframe 
              title="${COMPANY.name} Headquarters Location Map"
              class="ff-map-frame"
              src="${mapEmbedUrl}"
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `;
}
