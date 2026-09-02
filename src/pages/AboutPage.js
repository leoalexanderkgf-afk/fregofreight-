/**
 * Fargo Freights - About Us Page
 */

import { COMPANY } from '../config/company.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';
import { CtaBanner } from '../components/CtaBanner.js';
import { icon } from '../utils/icons.js';

export function AboutPage() {
  document.title = `About Us | ${COMPANY.name} - Premier American Logistics`;

  return `
    ${Header()}
    <main>
      <!-- Page Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0; position: relative;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${icon('Award', '', 14)} Our Legacy & Mission
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Empowering American Truckers & Shippers
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Founded in Tioga, North Dakota, Fargo Freights is dedicated to transparency, higher carrier earnings, and non-stop operational excellence.
          </p>
        </div>
      </section>

      <!-- Story & Facility -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content animate-on-scroll">
              <span class="ff-badge">${icon('MapPin', '', 14)} Heart of American Freight</span>
              <h2>Built From The Ground Up For Drivers</h2>
              <p>
                At <strong>${COMPANY.name}</strong>, we understand that trucking is the backbone of the American economy. Yet too many owner-operators and small fleets struggle with predatory dispatch commissions, unpaid detention hours, and complex paperwork.
              </p>
              <p>
                We established our headquarters at <strong>${COMPANY.address.full}</strong> to provide an honest, tech-enabled logistics partnership. We pair real human relationships with real-time rate analytics, ensuring our carriers consistently earn above-market gross revenues while enjoying complete freedom over their schedules.
              </p>
              
              <div class="ff-grid ff-grid-2" style="margin-top: 1.5rem;">
                <div style="background-color: var(--ff-bg-light); padding: 1.25rem; border-radius: var(--ff-radius-md); border-left: 4px solid var(--ff-primary);">
                  <h4 style="margin-bottom: 0.35rem;">Our Mission</h4>
                  <p style="font-size: 0.9rem; margin:0;">To provide transparent, top-dollar load booking and carrier support with zero forced dispatch.</p>
                </div>
                <div style="background-color: var(--ff-bg-light); padding: 1.25rem; border-radius: var(--ff-radius-md); border-left: 4px solid var(--ff-success);">
                  <h4 style="margin-bottom: 0.35rem;">Our Vision</h4>
                  <p style="font-size: 0.9rem; margin:0;">To be North America's most trusted freight dispatch and brokerage network through integrity.</p>
                </div>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80" 
                alt="Fargo Freights Team Operations" 
                class="ff-split-img"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Structured Team Categories -->
      <section class="ff-section ff-bg-light" id="team">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${icon('Users', '', 14)} Our Organization</span>
            <h2 class="ff-section-title">Dedicated Logistics Specialists</h2>
            <p class="ff-section-subtitle">
              Meet the structured divisions behind Fargo Freights working around the clock to move freight seamlessly.
            </p>
          </div>

          <div class="ff-grid ff-grid-2">
            ${COMPANY.teamCategories.map((cat, idx) => `
              <div class="ff-why-card animate-on-scroll delay-${(idx % 2) + 1}">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                  <div class="ff-why-icon" style="margin-bottom: 0; width: 44px; height: 44px;">
                    ${icon('Users', '', 22)}
                  </div>
                  <div>
                    <h3 style="font-size: 1.2rem; margin:0;">${cat.category}</h3>
                  </div>
                </div>
                <p style="font-size: 0.92rem; margin-bottom: 1.25rem;">${cat.description}</p>

                <div style="border-top: 1px solid var(--ff-border); padding-top: 1rem; display: flex; flex-direction: column; gap: 0.85rem;">
                  ${cat.members.map((m) => `
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; background-color: var(--ff-bg-subtle); padding: 0.65rem 0.85rem; border-radius: var(--ff-radius-sm);">
                      <div>
                        <strong style="color: var(--ff-text-main); display: block;">${m.name}</strong>
                        <span style="color: var(--ff-text-muted);">${m.role}</span>
                      </div>
                      <div style="text-align: right;">
                        <span style="font-weight: 600; color: var(--ff-primary); font-size: 0.8rem; display: block;">${m.experience}</span>
                        <span style="font-size: 0.75rem; color: var(--ff-text-subtle);">${m.location}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${CtaBanner()}
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}
