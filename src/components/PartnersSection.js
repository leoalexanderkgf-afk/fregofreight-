/**
 * Fargo Freights - Industry Platforms, Compliance & Trust Network Marquee
 * Features rounded letterbox-style cards with authentic logos & trust marks.
 */

import { icon } from '../utils/icons.js';

export function PartnersSection() {
  const cards = [
    {
      id: 'fmcsa',
      theme: 'blue', // Solid Blue Card
      name: 'FMCSA COMPLIANT',
      sub: 'USDOT Registered',
      svg: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <circle cx="27" cy="27" r="23" stroke="#FFFFFF" stroke-width="3.5"/>
        <path d="M27 10C17.61 10 10 17.61 10 27c0 4.2 1.5 8 4 11l7-11h12l7 11c2.5-3 4-6.8 4-11 0-9.39-7.61-17-17-17z" fill="#FFFFFF"/>
        <circle cx="27" cy="27" r="6" fill="#0066FF"/>
      </svg>`
    },
    {
      id: 'owner-op',
      theme: 'white', // White Card with Blue Border
      name: 'OWNER OPERATOR',
      sub: 'FRIENDLY DISPATCH',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <path d="M4 28V12h26l8 8v8H4z" fill="#0066FF"/>
        <circle cx="14" cy="30" r="5" fill="#0A1426"/>
        <circle cx="32" cy="30" r="5" fill="#0A1426"/>
        <rect x="7" y="16" width="10" height="6" fill="#FFFFFF"/>
        <rect x="20" y="16" width="7" height="6" fill="#FFFFFF"/>
        <path d="M42 22h14v6H42z" fill="#0066FF"/>
        <circle cx="50" cy="30" r="5" fill="#0A1426"/>
      </svg>`
    },
    {
      id: 'secure-paperwork',
      theme: 'blue',
      name: 'SECURE PAPERWORK',
      sub: 'Instant Factoring',
      svg: `<svg viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="6" y="4" width="42" height="26" rx="4" fill="#FFFFFF"/>
        <rect x="6" y="10" width="42" height="5" fill="#0066FF"/>
        <rect x="12" y="18" width="14" height="4" rx="2" fill="#0066FF"/>
        <rect x="12" y="14" width="30" height="26" rx="4" fill="#E2E8F0" stroke="#0066FF" stroke-width="2"/>
        <circle cx="34" cy="27" r="4" fill="#0066FF"/>
        <circle cx="30" cy="27" r="4" fill="#0066FF" opacity="0.6"/>
      </svg>`
    },
    {
      id: 'usa-llc',
      theme: 'white',
      name: 'USA REGISTERED',
      sub: 'LICENSED LLC',
      svg: `<svg viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="4" y="2" width="8" height="40" fill="#0066FF"/>
        <rect x="18" y="2" width="8" height="40" fill="#0066FF"/>
        <rect x="32" y="2" width="8" height="40" fill="#0066FF"/>
        <rect x="46" y="2" width="4" height="40" fill="#0066FF"/>
        <rect x="2" y="16" width="50" height="12" fill="#FFFFFF" stroke="#0066FF" stroke-width="1.5"/>
        <text x="7" y="25" font-family="'Outfit', sans-serif" font-weight="900" font-size="8" fill="#0066FF" letter-spacing="1">U S A</text>
      </svg>`
    },
    {
      id: 'dispatch-247',
      theme: 'blue',
      name: '24/7 DISPATCH',
      sub: 'NON-STOP SUPPORT',
      svg: `<svg viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <text x="3" y="32" font-family="'Outfit', sans-serif" font-weight="900" font-size="28" fill="#FFFFFF" letter-spacing="-1">24</text>
        <circle cx="38" cy="22" r="11" stroke="#FFFFFF" stroke-width="2.5"/>
        <polyline points="38,15 38,22 43,24" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'tql',
      theme: 'white',
      name: 'TQL NETWORK',
      sub: 'Total Quality Logistics',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="2" y="4" width="56" height="32" rx="6" fill="#00875A"/>
        <text x="30" y="26" font-family="'Outfit', sans-serif" font-weight="900" font-size="20" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">TQL</text>
      </svg>`
    },
    {
      id: 'truckstop',
      theme: 'blue',
      name: 'TRUCKSTOP.COM',
      sub: 'Carrier Marketplace',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <circle cx="30" cy="20" r="16" fill="#FFFFFF"/>
        <polygon points="24,12 38,20 24,28" fill="#E53E3E"/>
      </svg>`
    },
    {
      id: 'dat-one',
      theme: 'white',
      name: 'DAT ONE',
      sub: 'Freight & Analytics',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="4" y="6" width="52" height="28" rx="6" fill="#0056B3"/>
        <text x="23" y="25" font-family="'Outfit', sans-serif" font-weight="900" font-size="14" fill="#FFFFFF">DAT</text>
        <circle cx="44" cy="20" r="4" fill="#FF7A00"/>
      </svg>`
    },
    {
      id: 'rxo',
      theme: 'blue',
      name: 'RXO LOGISTICS',
      sub: 'Brokerage Exchange',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="4" y="6" width="52" height="28" rx="6" fill="#0F172A"/>
        <text x="30" y="25" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="#FF3E13" text-anchor="middle" letter-spacing="1">RXO</text>
      </svg>`
    },
    {
      id: 'ch-robinson',
      theme: 'white',
      name: 'C.H. ROBINSON',
      sub: 'Global Capacity',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="4" y="6" width="52" height="28" rx="6" fill="#003366"/>
        <text x="30" y="24" font-family="'Inter', sans-serif" font-weight="800" font-size="11" fill="#00A3E0" text-anchor="middle" letter-spacing="0.5">C.H.R</text>
      </svg>`
    },
    {
      id: 'dsv',
      theme: 'blue',
      name: 'DSV GLOBAL',
      sub: 'Supply Chain Partner',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="4" y="6" width="52" height="28" rx="6" fill="#002B49"/>
        <text x="30" y="25" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">DSV</text>
      </svg>`
    },
    {
      id: 'jbhunt',
      theme: 'white',
      name: 'J.B. HUNT',
      sub: 'Transport Services',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="4" y="6" width="52" height="28" rx="6" fill="#000000"/>
        <text x="30" y="24" font-family="'Inter', sans-serif" font-weight="900" font-size="10" fill="#EAB308" text-anchor="middle" letter-spacing="0.5">J.B. HUNT</text>
      </svg>`
    },
    {
      id: 'coyote',
      theme: 'blue',
      name: 'COYOTE LOGISTICS',
      sub: 'UPS Freight Network',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <circle cx="30" cy="20" r="14" fill="#2E7D32"/>
        <path d="M23 15l7 10 7-10h-14z" fill="#FFFFFF"/>
      </svg>`
    },
    {
      id: 'dynamic',
      theme: 'white',
      name: 'DYNAMIC TRANSPORT',
      sub: 'Fleet Solutions',
      svg: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="ff-box-icon">
        <rect x="4" y="6" width="52" height="28" rx="6" fill="#0284C7"/>
        <polygon points="18,26 30,12 42,26" fill="#FFFFFF"/>
      </svg>`
    }
  ];

  // Quadruple cards list for seamless endless loop on all screen widths
  const loopedCards = [...cards, ...cards, ...cards, ...cards];

  return `
    <section class="ff-section-sm ff-bg-light" id="partners" style="border-top: 1px solid var(--ff-border); border-bottom: 1px solid var(--ff-border); overflow: hidden; padding: 3rem 0;">
      <div class="ff-container text-center" style="margin-bottom: 2rem;">
        <span class="ff-badge" style="margin-bottom: 0.5rem;">
          ${icon('Layers', '', 14)} Connected Ecosystem & Accreditations
        </span>
        <h2 class="ff-section-title" style="font-size: 1.85rem; margin-bottom: 0.5rem;">Industry Platforms & Network</h2>
        <p style="font-size: 0.95rem; color: var(--ff-text-muted); max-width: 680px; margin: 0 auto;">
          Direct integrations with North America's premier freight exchanges, load boards, and regulatory compliance standards.
        </p>
      </div>

      <!-- Infinite Right-to-Left Auto-Scrolling Marquee Track -->
      <div class="ff-partner-marquee-wrap" aria-label="Industry Accreditations & Platform Marquee">
        <div class="ff-partner-track">
          ${loopedCards.map((c) => `
            <div class="ff-letterbox-card ff-box-${c.theme}" title="${c.name} - ${c.sub}">
              <div class="ff-box-icon-wrap">
                ${c.svg}
              </div>
              <div class="ff-box-content">
                <span class="ff-box-title">${c.name}</span>
                <span class="ff-box-sub">${c.sub}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
