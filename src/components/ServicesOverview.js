/**
 * Fargo Freights - Services Overview Section Component
 */

import { icon } from '../utils/icons.js';

export function ServicesOverview() {
  const services = [
    {
      title: 'Dispatch Services',
      slug: '/dispatch',
      icon: 'Headphones',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      description: 'Dedicated 24/7 load sourcing, aggressive rate negotiations, route planning, broker paperwork handling, and driver support to keep your trucks rolling profitably.'
    },
    {
      title: 'Fleet Management',
      slug: '/fleet-management',
      icon: 'ShieldCheck',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive fleet coordination, ELD tracking & telematics, preventive maintenance planning, fuel card discount programs, and regulatory compliance.'
    },
    {
      title: 'Freight Brokerage',
      slug: '/freight-brokerage',
      icon: 'Layers',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'Dependable nationwide freight capacity connecting shippers with vetted, insured carriers. Real-time tracking and delivery coordination across all 48 states.'
    },
    {
      title: 'Auto Hauling',
      slug: '/auto-hauling',
      icon: 'Truck',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      description: 'Specialized vehicle transportation for dealerships, auctions, classic car collectors, and individual door-to-door auto logistics with zero-damage guarantee.'
    }
  ];

  return `
    <section class="ff-section ff-bg-light" id="services">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${icon('Layers', '', 14)} Full-Spectrum Logistics</span>
          <h2 class="ff-section-title">Our Services</h2>
          <p class="ff-section-subtitle">
            Explore our specialized transportation divisions designed for independent owner-operators, fleet owners, and commercial enterprise shippers.
          </p>
        </div>

        <div class="ff-grid ff-grid-4">
          ${services.map((service, idx) => `
            <div class="ff-service-card animate-on-scroll delay-${idx + 1}">
              <div class="ff-service-img-wrap">
                <img src="${service.image}" alt="${service.title}" class="ff-service-img" loading="lazy" />
              </div>
              <div class="ff-service-body">
                <div class="ff-service-icon-box">
                  ${icon(service.icon, '', 26)}
                </div>
                <h3 class="ff-service-title" style="font-size: 1.25rem;">${service.title}</h3>
                <p class="ff-service-desc">${service.description}</p>
                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--ff-border);">
                  <a href="${service.slug}" class="ff-btn ff-btn-outline ff-btn-sm ff-btn-block">
                    Learn More ${icon('ArrowRight', '', 14)}
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
