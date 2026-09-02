/**
 * Fargo Freights - Truck Dispatch Section (Deep Dive)
 */

import { COMPANY } from '../config/company.js';
import { icon } from '../utils/icons.js';

export function DispatchSection() {
  const dispatchFeatures = [
    { title: 'Load Search', desc: 'Continuous sourcing on top private and public freight boards to secure ideal loads with minimal deadhead.' },
    { title: 'Load Negotiation', desc: 'Aggressive rate negotiations averaging top-dollar rates ($3.00+ per loaded mile) directly with vetted brokers.' },
    { title: 'Route Planning', desc: 'Strategic lane planning, weather monitoring, and fuel optimization to maximize your daily driving hours.' },
    { title: 'Broker Communication', desc: 'Direct broker packet completion, creditworthiness checks, and rate confirmation management.' },
    { title: 'Rate Confirmation Support', desc: 'Transparent rate confirmation verification with 100% carrier approval before booking.' },
    { title: 'Documentation Support', desc: 'Full back-office assistance with BOLs, lumper receipts, detention pay filing, and factoring paperwork.' },
    { title: 'Carrier Communication', desc: '24/7 dedicated 1-on-1 dispatcher assigned to your truck for roadside, check-call, and routing support.' }
  ];

  return `
    <section class="ff-section" id="dispatch">
      <div class="ff-container">
        <div class="ff-split-layout">
          <div class="ff-split-visual animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80" 
              alt="Fargo Freights Professional Truck Dispatch" 
              class="ff-split-img"
              loading="lazy"
            />
            <div class="ff-floating-badge-card">
              <div class="ff-floating-badge-icon">
                ${icon('Headphones', '', 26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">Dedicated 1-on-1 Dispatch</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Zero Forced Dispatch Guarantee</div>
              </div>
            </div>
          </div>

          <div class="ff-split-content animate-on-scroll delay-2">
            <span class="ff-badge">${icon('Headphones', '', 14)} Truck Dispatch Services</span>
            <h2>Keep Your Trucks Moving With Top-Paying Freight</h2>
            <p>
              Stop wasting hours searching boards and handling complex broker packets. <strong>${COMPANY.name}</strong> acts as your dedicated logistics department, finding premium loads and negotiating top rates so you can focus on driving safely.
            </p>

            <ul class="ff-checklist" style="margin-bottom: 2rem;">
              ${dispatchFeatures.slice(0, 4).map((f) => `
                <li class="ff-check-item">
                  <div class="ff-check-icon">${icon('Check', '', 14)}</div>
                  <div class="ff-check-text">
                    <strong>${f.title}:</strong> ${f.desc}
                  </div>
                </li>
              `).join('')}
            </ul>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/become-a-carrier" class="ff-btn ff-btn-primary">
                Become a Carrier ${icon('ArrowRight', '', 16)}
              </a>
              <a href="/dispatch" class="ff-btn ff-btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
