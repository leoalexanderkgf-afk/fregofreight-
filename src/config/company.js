/**
 * Fargo Freights - Centralized Business Configuration & Data Store
 * All editable business parameters, contact details, stats, services, and team data.
 */

export const COMPANY = {
  name: 'Fargo Freights',
  tagline: 'Premier American Trucking, Dispatch & Logistics Solutions',
  shortDesc: 'Nationwide dispatch, freight brokerage, auto hauling, and fleet management powering independent truckers and enterprise shippers across the USA.',
  phone: '(701) 696-3939',
  phoneClean: '+17016963939',
  email: 'info@fargofreights.com',
  address: {
    street: '318 N Hanson St',
    city: 'Tioga',
    state: 'ND',
    zip: '58852',
    country: 'United States',
    full: '318 N Hanson St, Tioga, ND 58852'
  },
  hours: {
    dispatch: '24/7/365 Non-Stop Dispatch & Driver Support',
    office: 'Monday – Friday: 7:00 AM – 7:00 PM CST',
    weekend: 'Saturday – Sunday: 8:00 AM – 4:00 PM CST'
  },
  copyright: '© 2026 Fargo Freights. All Rights Reserved.',
  dotMc: {
    usdot: 'USDOT Active & Compliant',
    mc: 'MC Licensed Brokerage & Dispatch',
    insurance: '$1,000,000+ Auto Liability / $250,000+ Cargo'
  },
  // Editable Operational Statistics / Benchmarks
  stats: [
    { value: '500+', label: 'Projects Completed', subtext: 'Dedicated carrier setups & contracts' },
    { value: '250+', label: 'Satisfied Clients', subtext: 'Shippers, brokers & owner-operators' },
    { value: '100K+', label: 'Miles Per Week', subtext: 'Dispatched safely across all 48 states' },
    { value: '20+', label: 'Team Members', subtext: '24/7 dispatch & logistics specialists' },
    { value: '1,000+', label: 'Freight Delivered', subtext: 'Loads & vehicles safely transported' },
    { value: '99.8%', label: 'On-Time Performance', subtext: 'Industry-leading reliability metric' }
  ],
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    {
      label: 'Services',
      path: '/services',
      children: [
        { label: 'Truck Dispatch', path: '/dispatch' },
        { label: 'Fleet Management', path: '/fleet-management' },
        { label: 'Freight Brokerage', path: '/freight-brokerage' },
        { label: 'Auto Hauling', path: '/auto-hauling' }
      ]
    },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Become a Carrier', path: '/become-a-carrier' },
    { label: 'Contact', path: '/contact' }
  ],
  services: [
    {
      id: 'dispatch',
      title: 'Truck Dispatch Services',
      slug: '/dispatch',
      badge: 'Most Popular for Owner Operators',
      icon: 'Headphones',
      heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      shortDescription: 'Dedicated 24/7 dispatchers negotiating top dollar rates, managing broker paperwork, and optimizing your weekly gross revenue.',
      description: 'Our top-tier truck dispatch service is designed specifically for owner-operators and small fleets. We handle continuous load sourcing, aggressive rate negotiations, broker credit checks, carrier packet setup, and route optimization so you can focus 100% on driving safely and making more money.',
      highlights: [
        'Load Search & Sourcing on Premium Private Boards',
        'Aggressive Rate Negotiations ($3.00+ avg rate/mile target)',
        'Route Planning & Deadhead Minimization',
        'Direct Broker Communication & Packet Setup',
        'Rate Confirmation Support & Verification',
        'Documentation & Invoicing Support',
        '24/7 Continuous Carrier & Driver Communication'
      ],
      pricing: 'Low 5% - 8% flat gross commission with no hidden setup fees.'
    },
    {
      id: 'fleet-management',
      title: 'Fleet Management Solutions',
      slug: '/fleet-management',
      badge: 'Full Fleet Optimization',
      icon: 'ShieldCheck',
      heroImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
      shortDescription: 'End-to-end fleet operational management, telematics tracking, preventive maintenance planning, and DOT regulatory compliance.',
      description: 'Maximize your fleet efficiency, lower operating costs, and eliminate roadside downtime. Fargo Freights provides complete fleet management solutions including ELD compliance, fuel card discount management, IFTA fuel tax reporting, maintenance logging, and driver safety training.',
      highlights: [
        'Fleet Coordination & Asset Tracking',
        'Transportation Operations Management',
        'Route Planning & Fuel Optimization',
        'Operational Support & Breakdown Assistance',
        'Driver Safety, Telematics & ELD Monitoring',
        'Dedicated 24/7 Operational Communication'
      ],
      pricing: 'Customized fleet management packages tailored to your fleet size.'
    },
    {
      id: 'freight-brokerage',
      title: 'Freight Brokerage Solutions',
      slug: '/freight-brokerage',
      badge: 'Enterprise Shipper Solutions',
      icon: 'Layers',
      heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      shortDescription: 'Seamless capacity matching, vetted carrier networks, real-time satellite tracking, and bonded freight surety for manufacturers and shippers.',
      description: 'Fargo Freights connects shippers with vetted, compliant, and insured motor carriers across all 48 continental states. Whether you need single spot loads, expedited rush shipments, or high-volume dedicated contract lanes, we guarantee dependable capacity and transparent pricing.',
      highlights: [
        'Shipper Support & Dedicated Account Management',
        'Carrier Connections & Pre-Vetted Vetting',
        'Load Coordination & Milestone Updates',
        'Transportation Planning & Equipment Sourcing',
        'Delivery Coordination & Real-Time Tracking',
        'Bonded Freight Surety & Full Cargo Insurance'
      ],
      pricing: 'Competitive spot rates & fixed-rate contract lane volume quotes.'
    },
    {
      id: 'auto-hauling',
      title: 'Auto Car Hauling Logistics',
      slug: '/auto-hauling',
      badge: 'Specialized Vehicle Transport',
      icon: 'Truck',
      heroImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      shortDescription: 'Specialized vehicle transportation for dealerships, auctions, classic car collectors, and individual direct-door auto transport.',
      description: 'Specialized automotive transport across the United States. We operate and dispatch both open multi-car haulers (3-car wedge, 7-car, 9-car stinger rigs) and climate-controlled enclosed carriers for exotics, luxury sedans, classic vintage vehicles, and electric vehicles.',
      highlights: [
        'Vehicle Transportation (Open & Enclosed Hydraulic Trailers)',
        'Pickup Coordination (Dealers, Auctions, Private)',
        'Delivery Coordination & Digital BOL Verification',
        'Route Planning & Transit Scheduling',
        'Direct Driver & Dispatcher Communication',
        'Zero-Damage Soft-Tie Strapping Standards'
      ],
      pricing: 'Instant door-to-door vehicle shipping quotes based on distance and trailer type.'
    }
  ],
  whyChooseUs: [
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
  ],
  processSteps: [
    {
      step: '01',
      title: 'Request a Quote',
      desc: 'Submit your origin, destination, and equipment requirements online or speak directly with our logistics coordinators.',
      icon: 'FileText'
    },
    {
      step: '02',
      title: 'Freight Details',
      desc: 'We review load specifications, commodity weight, pickup windows, and any special accessorial needs.',
      icon: 'Search'
    },
    {
      step: '03',
      title: 'Carrier Matching',
      desc: 'We match your shipment with an audited, insured motor carrier or dedicated company driver within minutes.',
      icon: 'CheckSquare'
    },
    {
      step: '04',
      title: 'Transportation',
      desc: 'Real-time GPS tracking and automated milestone check-calls keep you updated from pickup to border transit.',
      icon: 'Navigation'
    },
    {
      step: '05',
      title: 'Delivery',
      desc: 'Safe, punctual delivery with digital electronic proof of delivery (ePOD) and rapid invoice settlement.',
      icon: 'DollarSign'
    }
  ],
  equipmentTypes: [
    {
      name: "53' Dry Van",
      icon: 'Box',
      capacity: 'Up to 45,000 lbs',
      pallets: '26 Standard Pallets',
      useCase: 'General freight, consumer goods, electronics, palletized freight, retail shipments.'
    },
    {
      name: "53' Refrigerated (Reefer)",
      icon: 'Snowflake',
      capacity: 'Up to 44,000 lbs',
      pallets: '26 Standard Pallets',
      useCase: 'Temperature-controlled perishables, fresh produce, frozen food, pharmaceuticals, beverages.'
    },
    {
      name: "48' / 53' Flatbed",
      icon: 'Truck',
      capacity: 'Up to 48,000 lbs',
      pallets: 'Oversized / Bundled',
      useCase: 'Construction materials, steel coils, lumber, heavy machinery, pipe, jobsite deliveries.'
    },
    {
      name: 'Step Deck / Single Drop',
      icon: 'Anchor',
      capacity: 'Up to 48,000 lbs',
      pallets: 'Tall Equipment',
      useCase: 'Tall industrial equipment, tractors, military cargo, machinery exceeding 8.5ft height.'
    },
    {
      name: 'Auto Car Hauler (3-9 Car)',
      icon: 'Car',
      capacity: '3 to 9 Passenger Vehicles',
      pallets: 'Multi-Vehicle',
      useCase: 'Dealership transfers, auction transport, exotic sports cars, classic vintage automobiles.'
    },
    {
      name: "26' Box Truck / Straight Truck",
      icon: 'Package',
      capacity: 'Up to 10,000 lbs',
      pallets: '12 Standard Pallets',
      useCase: 'Expedited regional freight, local distribution, liftgate deliveries, non-CDL & CDL loads.'
    },
    {
      name: 'Power Only',
      icon: 'Zap',
      capacity: 'Tractor Only',
      pallets: 'Drop & Hook Trailers',
      useCase: 'Moving pre-loaded shipper trailers, disaster relief, intermodal drayage, fleet repositioning.'
    },
    {
      name: 'Hotshot Transport',
      icon: 'Flame',
      capacity: 'Up to 16,500 lbs',
      pallets: '40ft Gooseneck Deck',
      useCase: 'Urgent oilfield freight, rapid manufacturing parts, short-notice construction shipments.'
    }
  ],
  teamCategories: [
    {
      category: 'Executive & Operational Leadership',
      description: 'Guiding strategic growth, carrier partnerships, and safety culture across the continental US.',
      members: [
        {
          name: 'Executive Leadership',
          role: 'Managing Director & Operations',
          experience: '15+ Years Freight Logistics',
          location: 'Tioga, ND HQ'
        },
        {
          name: 'Director of Transportation',
          role: 'VP of Carrier Relations',
          experience: '12+ Years Supply Chain Strategy',
          location: 'Tioga, ND HQ'
        }
      ]
    },
    {
      category: 'Senior Dispatch & Rate Negotiation Team',
      description: 'Experienced freight dispatchers working 24/7 to lock in top paying rates and optimal lanes.',
      members: [
        {
          name: 'Senior Dispatch Specialist',
          role: 'Reefer & Dry Van Team Lead',
          experience: '8+ Years Load Board Master',
          location: '24/7 Operations Hub'
        },
        {
          name: 'Flatbed & Heavy Haul Coordinator',
          role: 'Specialized Equipment Specialist',
          experience: '7+ Years Oversized Freight',
          location: 'Operations Hub'
        }
      ]
    },
    {
      category: 'Freight Brokerage & Shipper Sales',
      description: 'Dedicated account managers providing enterprise shippers with continuous guaranteed truck capacity.',
      members: [
        {
          name: 'Carrier Sales Manager',
          role: 'National Capacity Coordinator',
          experience: '6+ Years Network Expansion',
          location: 'Brokerage Division'
        },
        {
          name: 'Shipper Account Executive',
          role: 'Key Enterprise Accounts',
          experience: '9+ Years Contract Lanes',
          location: 'Enterprise Division'
        }
      ]
    },
    {
      category: 'Safety, Compliance & Factoring Support',
      description: 'Ensuring 100% DOT compliance, prompt driver factoring payouts, and instant certificate handling.',
      members: [
        {
          name: 'Safety & Compliance Officer',
          role: 'FMCSA & DOT Regulatory Specialist',
          experience: '10+ Years Safety Audits',
          location: 'Tioga, ND HQ'
        },
        {
          name: 'Billing & Settlement Specialist',
          role: 'Factoring & Carrier Accounting',
          experience: '5+ Years Freight Accounting',
          location: 'Support Center'
        }
      ]
    }
  ],
  partners: [
    { name: 'DAT One', category: 'Load Board & Rate Analytics' },
    { name: 'Truckstop', category: 'Carrier Verification & Marketplace' },
    { name: 'TQL', category: 'Logistics Network' },
    { name: 'C.H. Robinson', category: 'Freight Exchange' },
    { name: 'Dynamic Transportation', category: 'Specialized Fleet Partner' },
    { name: 'RXO', category: 'Brokerage Network' },
    { name: 'DSV', category: 'Global Supply Chain' }
  ],
  // Editable placeholder reviews (clearly marked for replacement)
  testimonials: [
    {
      id: 1,
      name: 'Marcus V.',
      role: 'Owner-Operator (53\' Reefer)',
      company: 'Midwest Carrier Partner',
      location: 'Dallas, TX',
      rating: 5,
      date: 'Recent Carrier Review',
      quote: 'Fargo Freights dispatch team consistently books top-paying freight with virtually zero empty miles. Their communication and rate negotiation keep our equipment running profitably.',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah J.',
      role: 'Logistics Director',
      company: 'Industrial Manufacturing Shipper',
      location: 'Minneapolis, MN',
      rating: 5,
      date: 'Recent Shipper Review',
      quote: 'When we have critical flatbed and dry van loads needing prompt pickup, Fargo Freights delivers. Real-time tracking updates, proactive communication, and dependable capacity.',
      verified: true
    },
    {
      id: 3,
      name: 'Dmitri K.',
      role: 'Fleet Owner (6 Trucks)',
      company: 'Regional Transport Partner',
      location: 'Chicago, IL',
      rating: 5,
      date: 'Recent Fleet Review',
      quote: 'Partnering with Fargo Freights for dedicated dispatch and back-office management has streamlined our operations. They handle rate confirmations, broker packets, and billing seamlessly.',
      verified: true
    }
  ],
  faqs: [
    {
      question: 'How much does your truck dispatch service cost?',
      answer: 'We operate on a transparent 5% to 8% gross load commission with NO hidden onboarding fees, NO long-term lock-in contracts, and NO minimum load requirements. You only pay when you make money.'
    },
    {
      question: 'Do you force dispatch loads to drivers?',
      answer: 'Absolutely NOT. You are the captain of your truck. We present you with the highest-paying load options with all rate confirmations and lane details; you have 100% final approval on every load.'
    },
    {
      question: 'What documents are required to start dispatching with Fargo Freights?',
      answer: 'To get started immediately, we just need: 1) Active Motor Carrier Authority (MC/DOT), 2) Certificate of Insurance naming Fargo Freights as certificate holder (minimum $100k cargo, $1M auto liability), 3) Signed W-9 Form, and 4) Factoring Notice of Assignment (NOA).'
    },
    {
      question: 'How fast can my truck be dispatched once I submit my carrier packet?',
      answer: 'In most cases, we verify your documents and have your first high-paying load booked within 2 to 4 business hours.'
    },
    {
      question: 'What trailer and equipment types do you dispatch and broker?',
      answer: 'We dispatch and broker all major equipment types across the USA including 53\' Dry Vans, 53\' Reefers, 48\'/53\' Flatbeds, Step Decks, Auto Car Haulers, Box Trucks, Power Only, and Hotshots.'
    },
    {
      question: 'How do you handle detention pay and lumper fees?',
      answer: 'Our dispatch team proactively monitors pickup and delivery times. If a shipper or receiver delays you beyond 2 hours, we immediately file and aggressively collect detention pay ($50 - $100/hr) and ensure lumper receipts are reimbursed promptly.'
    }
  ]
};
