/**
 * Fargo Freights - Complete Long-Form HomePage
 * Conforms strictly to the exact 19-section structure requested.
 */

import { Header } from '../components/Header.js';
import { HeroSlider } from '../components/HeroSlider.js';
import { ServicesOverview } from '../components/ServicesOverview.js';
import { AboutSection } from '../components/AboutSection.js';
import { WhyChooseUs } from '../components/WhyChooseUs.js';
import { StatsSection } from '../components/StatsSection.js';
import { DispatchSection } from '../components/DispatchSection.js';
import { FleetManagementSection } from '../components/FleetManagementSection.js';
import { FreightBrokerageSection } from '../components/FreightBrokerageSection.js';
import { AutoHaulingSection } from '../components/AutoHaulingSection.js';
import { ProcessSection } from '../components/ProcessSection.js';
import { TestimonialsSection } from '../components/TestimonialsSection.js';
import { PartnersSection } from '../components/PartnersSection.js';
import { HomeGetStartedSection } from '../components/HomeGetStartedSection.js';
import { HomeContactSection } from '../components/HomeContactSection.js';
import { MapSection } from '../components/MapSection.js';
import { CtaBanner } from '../components/CtaBanner.js';
import { NewsletterSection } from '../components/NewsletterSection.js';
import { Footer } from '../components/Footer.js';
import { QuickActionBar } from '../components/QuickActionBar.js';

export function HomePage() {
  document.title = 'Fargo Freights | US Truck Dispatch, Freight Brokerage & Logistics';
  
  return `
    ${Header()}
    <main>
      ${HeroSlider()}
      ${ServicesOverview()}
      ${AboutSection()}
      ${WhyChooseUs()}
      ${StatsSection()}
      ${DispatchSection()}
      ${FleetManagementSection()}
      ${FreightBrokerageSection()}
      ${AutoHaulingSection()}
      ${ProcessSection()}
      ${TestimonialsSection()}
      ${PartnersSection()}
      ${HomeGetStartedSection()}
      ${HomeContactSection()}
      ${MapSection()}
      ${CtaBanner()}
      ${NewsletterSection()}
    </main>
    ${Footer()}
    ${QuickActionBar()}
  `;
}
