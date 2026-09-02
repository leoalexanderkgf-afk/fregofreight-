/**
 * Fargo Freights - Fleet Management Section (Deep Dive)
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function FleetManagementSection() {
  const fleetFeatures = [
    { title: 'Fleet Coordination', desc: 'Centralized asset management and trailer scheduling to maximize equipment utilization across your fleet.' },
    { title: 'Transportation Operations', desc: 'End-to-end management of driver schedules, HOS monitoring, and FMCSA safety score audits.' },
    { title: 'Route Planning', desc: 'Dynamic navigation and fuel card optimization delivering 40¢–60¢/gallon savings at major truck stops.' },
    { title: 'Operational Support', desc: '24/7 roadside emergency coordination, preventative maintenance logging, and IFTA tax filing.' },
    { title: 'Communication', desc: 'Direct, clear operational updates connecting drivers, fleet managers, and dispatch coordinators seamlessly.' }
  ];

  return `
    <section class="ff-section ff-bg-light" id="fleet-management">
      <div class="ff-container">
        <div class="ff-split-layout reversed">
          <div class="ff-split-visual animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80" 
              alt="Fargo Freights Fleet Management & Telematics" 
              class="ff-split-img"
              loading="lazy"
            />
            <div class="ff-floating-badge-card">
              <div class="ff-floating-badge-icon">
                ${icon('TrendingUp', '', 26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">Fleet Optimization</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Lower Operating Costs Per Mile</div>
              </div>
            </div>
          </div>

          <div class="ff-split-content animate-on-scroll delay-2">
            <span class="ff-badge">${icon('ShieldCheck', '', 14)} Fleet Solutions</span>
            <h2>Complete Fleet Coordination & Operational Management</h2>
            <p>
              Managing multiple power units and trailers demands constant coordination. <strong>${COMPANY.name}</strong> provides comprehensive fleet management services designed to help fleet owners minimize downtime and scale efficiently.
            </p>

            <ul class="ff-checklist" style="margin-bottom: 2rem;">
              ${fleetFeatures.slice(0, 4).map((f) => `
                <li class="ff-check-item">
                  <div class="ff-check-icon">${icon('Check', '', 14)}</div>
                  <div class="ff-check-text">
                    <strong>${f.title}:</strong> ${f.desc}
                  </div>
                </li>
              `).join('')}
            </ul>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/fleet-management" class="ff-btn ff-btn-primary">
                Learn More ${icon('ArrowRight', '', 16)}
              </a>
              <a href="/contact" class="ff-btn ff-btn-outline">
                Contact Fleet Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
