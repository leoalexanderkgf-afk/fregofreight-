/**
 * Fargo Freights - Auto Car Hauling Section (Deep Dive)
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function AutoHaulingSection() {
  const autoFeatures = [
    { title: 'Vehicle Transportation', desc: 'Specialized open wedge, multi-car stingers, and enclosed hydraulic haulers for passenger cars, SUVs, trucks, and classic vehicles.' },
    { title: 'Pickup Coordination', desc: 'Fast, dependable dispatch to auto auctions (Copart, Manheim, IAAI), dealership inventory lots, and private doorsteps.' },
    { title: 'Delivery Coordination', desc: 'Detailed electronic BOL condition reports with photo verification before departure and upon delivery.' },
    { title: 'Route Planning', desc: 'Optimized multi-vehicle transport routing minimizing transit windows across all 50 states.' },
    { title: 'Communication', desc: 'Direct updates and driver communication throughout the entire vehicle transport journey.' }
  ];

  return `
    <section class="ff-section ff-bg-light" id="auto-hauling">
      <div class="ff-container">
        <div class="ff-split-layout reversed">
          <div class="ff-split-visual animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80" 
              alt="Fargo Freights Specialized Auto Car Hauler" 
              class="ff-split-img"
              loading="lazy"
            />
            <div class="ff-floating-badge-card">
              <div class="ff-floating-badge-icon">
                ${icon('Car', '', 26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">Specialized Auto Hauling</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Open & Enclosed Hydraulic Trailers</div>
              </div>
            </div>
          </div>

          <div class="ff-split-content animate-on-scroll delay-2">
            <span class="ff-badge">${icon('Car', '', 14)} Specialized Auto Logistics</span>
            <h2>Moving Vehicles Safely Across The Nation</h2>
            <p>
              Whether relocating auto dealer inventories, auction purchases, or private classic automobiles, <strong>${COMPANY.name}</strong> provides reliable nationwide auto car hauling with white-glove precision.
            </p>

            <ul class="ff-checklist" style="margin-bottom: 2rem;">
              ${autoFeatures.slice(0, 4).map((f) => `
                <li class="ff-check-item">
                  <div class="ff-check-icon">${icon('Check', '', 14)}</div>
                  <div class="ff-check-text">
                    <strong>${f.title}:</strong> ${f.desc}
                  </div>
                </li>
              `).join('')}
            </ul>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/auto-hauling" class="ff-btn ff-btn-primary">
                Request Auto Transport ${icon('ArrowRight', '', 16)}
              </a>
              <a href="tel:${COMPANY.phoneClean}" class="ff-btn ff-btn-outline">
                ${icon('PhoneCall', '', 16)} Call ${COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
