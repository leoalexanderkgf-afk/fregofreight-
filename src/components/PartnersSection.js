/**
 * Fargo Freights - Industry Platforms & Network Marquee
 * Features authentic brand logos with smooth infinite right-to-left auto-scroll.
 */

import { icon } from '../utils/icons.js';

export function PartnersSection() {
  const partners = [
    {
      id: 'dat',
      name: 'DAT One',
      category: 'Load Board & Rate Analytics',
      color: '#0056B3',
      svg: `<svg viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <rect width="32" height="32" rx="6" fill="#0056B3"/>
        <path d="M7 10h9a7 7 0 0 1 0 14H7V10z" fill="#FFFFFF"/>
        <path d="M10 13h5.5a4 4 0 0 1 0 8H10V13z" fill="#0056B3"/>
        <circle cx="25" cy="11" r="3" fill="#FF7A00"/>
        <text x="38" y="23" font-family="'Outfit', sans-serif" font-weight="800" font-size="16" fill="#0A1426" letter-spacing="-0.5">DAT</text>
        <text x="73" y="23" font-family="'Outfit', sans-serif" font-weight="700" font-size="13" fill="#FF7A00">ONE</text>
      </svg>`
    },
    {
      id: 'truckstop',
      name: 'Truckstop.com',
      category: 'Carrier Verification & Load Board',
      color: '#E53E3E',
      svg: `<svg viewBox="0 0 135 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <circle cx="16" cy="17" r="14" fill="#E53E3E"/>
        <polygon points="11,10 23,17 11,24" fill="#FFFFFF"/>
        <text x="36" y="23" font-family="'Outfit', sans-serif" font-weight="800" font-size="14" fill="#0A1426" letter-spacing="-0.3">TRUCKSTOP</text>
      </svg>`
    },
    {
      id: 'tql',
      name: 'TQL',
      category: 'Total Quality Logistics',
      color: '#00875A',
      svg: `<svg viewBox="0 0 110 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <rect width="30" height="30" rx="6" fill="#00875A"/>
        <path d="M6 10h18v4h-7v12h-4V14H6v-4z" fill="#FFFFFF"/>
        <text x="36" y="23" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="#00875A" letter-spacing="0.5">TQL</text>
      </svg>`
    },
    {
      id: 'ch-robinson',
      name: 'C.H. Robinson',
      category: 'Global Freight Exchange',
      color: '#003366',
      svg: `<svg viewBox="0 0 150 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <rect width="28" height="28" rx="6" fill="#003366"/>
        <path d="M7 14h14v2H7zM7 9h14v2H7zM7 19h14v2H7z" fill="#00A3E0"/>
        <text x="35" y="22" font-family="'Inter', sans-serif" font-weight="800" font-size="13" fill="#003366" letter-spacing="-0.3">C.H. ROBINSON</text>
      </svg>`
    },
    {
      id: 'rxo',
      name: 'RXO Logistics',
      category: 'Tech-Enabled Brokerage',
      color: '#FF3E13',
      svg: `<svg viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <rect width="28" height="28" rx="6" fill="#1E293B"/>
        <text x="6" y="21" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="#FF3E13">R</text>
        <text x="34" y="23" font-family="'Outfit', sans-serif" font-weight="900" font-size="17" fill="#0F172A" letter-spacing="1">RXO</text>
      </svg>`
    },
    {
      id: 'dsv',
      name: 'DSV Global',
      category: 'Global Transport & Logistics',
      color: '#002B49',
      svg: `<svg viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <rect width="30" height="30" rx="6" fill="#002B49"/>
        <path d="M8 10h5a5 5 0 0 1 0 10H8V10zm3 2.5v5h2a2.5 2.5 0 0 0 0-5h-2z" fill="#FFFFFF"/>
        <text x="36" y="23" font-family="'Outfit', sans-serif" font-weight="900" font-size="17" fill="#002B49" letter-spacing="1">DSV</text>
      </svg>`
    },
    {
      id: 'jbhunt',
      name: 'J.B. Hunt',
      category: 'Intermodal & Highway Freight',
      color: '#EAB308',
      svg: `<svg viewBox="0 0 130 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <rect width="30" height="30" rx="6" fill="#000000"/>
        <path d="M7 8h16v4H7zm0 6h16v4H7zm0 6h16v4H7z" fill="#EAB308"/>
        <text x="36" y="22" font-family="'Inter', sans-serif" font-weight="800" font-size="13" fill="#0A1426" letter-spacing="-0.3">J.B. HUNT</text>
      </svg>`
    },
    {
      id: 'coyote',
      name: 'Coyote Logistics',
      category: 'UPS Supply Chain Network',
      color: '#2E7D32',
      svg: `<svg viewBox="0 0 135 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <circle cx="15" cy="15" r="13" fill="#2E7D32"/>
        <path d="M10 12l5 8 5-8h-10z" fill="#FFFFFF"/>
        <text x="35" y="22" font-family="'Outfit', sans-serif" font-weight="800" font-size="14" fill="#0A1426" letter-spacing="0">COYOTE</text>
      </svg>`
    },
    {
      id: 'dynamic',
      name: 'Dynamic Transport',
      category: 'Specialized Fleet Partner',
      color: '#0284C7',
      svg: `<svg viewBox="0 0 140 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 26px; width: auto;">
        <rect width="28" height="28" rx="6" fill="#0284C7"/>
        <polygon points="7,20 14,8 21,20" fill="#FFFFFF"/>
        <text x="34" y="22" font-family="'Outfit', sans-serif" font-weight="800" font-size="13" fill="#0A1426" letter-spacing="-0.2">DYNAMIC</text>
      </svg>`
    }
  ];

  // Quadruple the partners list so it scrolls continuously with zero gaps on any screen width
  const quadruplePartners = [...partners, ...partners, ...partners, ...partners];

  return `
    <section class="ff-section-sm ff-bg-light" id="partners" style="border-top: 1px solid var(--ff-border); border-bottom: 1px solid var(--ff-border); overflow: hidden;">
      <div class="ff-container text-center" style="margin-bottom: 1.75rem;">
        <span class="ff-badge" style="margin-bottom: 0.5rem;">
          ${icon('Layers', '', 14)} Connected Ecosystem
        </span>
        <h2 class="ff-section-title" style="font-size: 1.85rem; margin-bottom: 0.5rem;">Industry Platforms & Network</h2>
        <p style="font-size: 0.95rem; color: var(--ff-text-muted); max-width: 640px; margin: 0 auto;">
          Direct connectivity, automated rate verification, and freight integrations with North America's premier exchanges.
        </p>
      </div>

      <!-- Infinite Right-to-Left Auto-Scrolling Marquee -->
      <div class="ff-partner-marquee-wrap" aria-label="Partner Integrations Carousel">
        <div class="ff-partner-track">
          ${quadruplePartners.map((partner) => `
            <div class="ff-partner-pill" title="${partner.name} - ${partner.category}">
              <div class="ff-partner-logo-box">
                ${partner.svg}
              </div>
              <div class="ff-partner-info">
                <span class="ff-partner-name">${partner.name}</span>
                <span class="ff-partner-cat">${partner.category}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
