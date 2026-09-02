/**
 * Fargo Freights - Equipment Types Section Component
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function EquipmentSection() {
  return `
    <section class="ff-section ff-bg-light" id="equipment">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${icon('Truck', '', 14)} Fleet Capabilities</span>
          <h2 class="ff-section-title">Equipment & Trailer Types We Support</h2>
          <p class="ff-section-subtitle">
            Whether hauling general dry freight, climate-sensitive pharmaceuticals, heavy industrial steel, or exotic automobiles, our network supports all major trailer classes.
          </p>
        </div>

        <div class="ff-equipment-grid">
          ${COMPANY.equipmentTypes.map((eq, idx) => `
            <div class="ff-equipment-card animate-on-scroll delay-${(idx % 4) + 1}">
              <div class="ff-equip-header">
                <div class="ff-equip-icon">
                  ${icon(eq.icon, '', 24)}
                </div>
                <div class="ff-equip-name">${eq.name}</div>
              </div>

              <div class="ff-equip-specs">
                <div class="ff-equip-spec-row">
                  <span class="ff-equip-spec-label">Payload Capacity:</span>
                  <span class="ff-equip-spec-val">${eq.capacity}</span>
                </div>
                <div class="ff-equip-spec-row">
                  <span class="ff-equip-spec-label">Dimensions / Space:</span>
                  <span class="ff-equip-spec-val">${eq.pallets}</span>
                </div>
              </div>

              <p class="ff-equip-desc">${eq.useCase}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
