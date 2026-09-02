/**
 * Fargo Freights - Why Choose Us Section (6 Core Pillars)
 */

import { icon } from '../utils/icons.js';

export function WhyChooseUs() {
  const pillars = [
    {
      icon: 'Shield',
      title: 'Safety',
      desc: 'Our relentless commitment to safety protects drivers, equipment, and cargo across every mile. We enforce strict carrier safety qualification standards, active FMCSA monitoring, and comprehensive cargo insurance coverage on all dispatched freight loads.'
    },
    {
      icon: 'Clock',
      title: 'Reliability',
      desc: 'Count on dependable capacity and 99.8% on-time pickup and delivery performance nationwide. We track weather patterns, monitor congestion zones, and provide proactive check-calls to guarantee that your shipments stay on schedule with zero surprises.'
    },
    {
      icon: 'CheckCircle2',
      title: 'Trust',
      desc: 'Built on full transparency with zero forced dispatch and no hidden commission fees. Carriers receive direct rate confirmations before booking, and shippers enjoy bonded freight security backed by verified FMCSA licenses and honest logistics management.'
    },
    {
      icon: 'TrendingUp',
      title: 'Efficiency',
      desc: 'Maximize loaded miles and eliminate wasteful deadhead with our live market rate analytics. Our experienced dispatchers aggressively negotiate top-dollar rates averaging over $3.00+ per mile while optimizing fuel-efficient routes across the United States.'
    },
    {
      icon: 'PhoneCall',
      title: 'Communication',
      desc: 'Direct human communication 24 hours a day, 7 days a week, 365 days a year. You will always speak to a dedicated logistics specialist who knows your truck, your lanes, and your shipment milestones without being stuck in automated call menus.'
    },
    {
      icon: 'Award',
      title: 'Professional Support',
      desc: 'Comprehensive back-office administrative management handling broker packets, insurance certificates, lumper reimbursements, and detention pay claims. We submit PODs directly to your factoring company for fast, same-day settlement payouts.'
    }
  ];

  return `
    <section class="ff-section ff-bg-light" id="why-choose-us">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${icon('ShieldCheck', '', 14)} The Fargo Advantage</span>
          <h2 class="ff-section-title">Why Choose Fargo Freights?</h2>
          <p class="ff-section-subtitle">
            We built our reputation on honesty, higher driver gross earnings, unwavering safety standards, and round-the-clock responsiveness.
          </p>
        </div>

        <div class="ff-grid ff-grid-3">
          ${pillars.map((pillar, idx) => `
            <div class="ff-why-card animate-on-scroll delay-${(idx % 3) + 1}">
              <div class="ff-why-icon">
                ${icon(pillar.icon, '', 28)}
              </div>
              <h3 class="ff-why-title">${pillar.title}</h3>
              <p class="ff-why-desc">${pillar.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
