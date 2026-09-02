/**
 * Fargo Freights - Freight Brokerage Section (Deep Dive)
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function FreightBrokerageSection() {
  const brokerageSteps = [
    { num: '1', title: 'Request a Quote', desc: 'Submit shipment origin, destination, and equipment requirements.' },
    { num: '2', title: 'Freight Details', desc: 'We verify cargo dimensions, weight, commodity, and timeline.' },
    { num: '3', title: 'Carrier Matching', desc: 'Instant matching with pre-vetted, insured, safety-audited carriers.' },
    { num: '4', title: 'Transportation', desc: 'Real-time satellite GPS tracking with proactive transit check-calls.' },
    { num: '5', title: 'Delivery', desc: 'On-time delivery confirmation with digital BOL and final settlement.' }
  ];

  return `
    <section class="ff-section" id="freight-brokerage">
      <div class="ff-container">
        <div class="ff-split-layout">
          <div class="ff-split-visual animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
              alt="Fargo Freights Freight Brokerage Operations" 
              class="ff-split-img"
              loading="lazy"
            />
            <div class="ff-floating-badge-card">
              <div class="ff-floating-badge-icon">
                ${icon('Layers', '', 26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">500+ Vetted Carriers</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Nationwide Freight Network</div>
              </div>
            </div>
          </div>

          <div class="ff-split-content animate-on-scroll delay-2">
            <span class="ff-badge">${icon('Layers', '', 14)} Enterprise Brokerage</span>
            <h2>Dependable Freight Connections & Capacity Matching</h2>
            <p>
              When supply chain deadlines are essential, commercial shippers rely on <strong>${COMPANY.name}</strong>. We connect manufacturers and distributors with compliant, insured motor carriers across all 48 continental states.
            </p>

            <div style="margin: 1.5rem 0;">
              <h4 style="font-size: 1.05rem; margin-bottom: 0.85rem; color: var(--ff-primary);">Our 5-Step Brokerage Process:</h4>
              <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                ${brokerageSteps.map((s) => `
                  <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9rem;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background-color: var(--ff-primary-light); color: var(--ff-primary); font-weight: 800; font-size: 0.75rem; flex-shrink: 0; margin-top: 0.1rem;">${s.num}</span>
                    <div>
                      <strong>${s.title}:</strong> <span style="color: var(--ff-text-muted);">${s.desc}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
              <a href="/freight-brokerage" class="ff-btn ff-btn-primary">
                Get a Freight Quote ${icon('ArrowRight', '', 16)}
              </a>
              <a href="/contact" class="ff-btn ff-btn-outline">
                Shipper Inquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
