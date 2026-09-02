(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();class T{constructor(t,r="app"){this.routes=t,this.rootElement=document.getElementById(r),this.currentRoute=null,this.init()}init(){window.addEventListener("popstate",()=>this.handleRoute()),document.addEventListener("click",t=>{const r=t.target.closest("a");if(!r)return;const n=r.getAttribute("href");n&&(n.startsWith("/")&&!n.startsWith("//")&&!r.hasAttribute("download")&&r.target!=="_blank"?(t.preventDefault(),this.navigate(n)):n.startsWith("#")&&(t.preventDefault(),this.scrollToHash(n)))}),this.handleRoute()}navigate(t){window.location.pathname+window.location.hash!==t&&window.history.pushState({},"",t),this.handleRoute()}scrollToHash(t){if(!t||t==="#"){window.scrollTo({top:0,behavior:"smooth"});return}const r=document.querySelector(t);if(r){const s=r.getBoundingClientRect().top+window.pageYOffset-90;window.scrollTo({top:s,behavior:"smooth"})}}handleRoute(){const t=window.location.pathname.toLowerCase(),r=window.location.hash;let n=t;n.length>1&&n.endsWith("/")&&(n=n.slice(0,-1));let o=this.routes[n]||this.routes["/"];if(this.currentRoute=n,this.rootElement){this.rootElement.innerHTML="";const s=o();typeof s=="string"?this.rootElement.innerHTML=s:s instanceof Node&&this.rootElement.appendChild(s),this.updateActiveNavLinks(n),r?setTimeout(()=>this.scrollToHash(r),100):window.scrollTo({top:0,behavior:"smooth"}),window.dispatchEvent(new CustomEvent("pageRendered",{detail:{path:n}}))}}updateActiveNavLinks(t){document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(n=>{const o=n.getAttribute("href");o===t||t==="/"&&o==="/"||o!=="/"&&t.startsWith(o)?n.classList.add("active"):n.classList.remove("active")})}}function A(){const i=document.querySelectorAll(".animate-on-scroll:not(.revealed)"),t=new IntersectionObserver((r,n)=>{r.forEach(o=>{o.isIntersecting&&(o.target.classList.add("revealed"),n.unobserve(o.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});i.forEach(r=>t.observe(r))}function D(){const i=document.querySelectorAll(".counter-val:not(.counted)"),t=new IntersectionObserver((r,n)=>{r.forEach(o=>{if(o.isIntersecting){const s=o.target;s.classList.add("counted");const l=s.getAttribute("data-target")||"0";B(s,l),n.unobserve(s)}})},{threshold:.2});i.forEach(r=>t.observe(r))}function B(i,t){const r=t.includes("+"),n=t.includes("K"),o=t.includes("%");let s=parseFloat(t.replace(/[^0-9.]/g,""));if(isNaN(s)){i.textContent=t;return}let l=0;const c=1600,y=performance.now();function d(k){const h=k-y,v=Math.min(h/c,1),f=1-Math.pow(1-v,4);let b=Math.floor(l+(s-l)*f).toLocaleString();s%1!==0&&(b=(l+(s-l)*f).toFixed(1)),n&&(b+="K"),r&&(b+="+"),o&&(b+="%"),i.textContent=b,v<1?requestAnimationFrame(d):i.textContent=t}requestAnimationFrame(d)}function M(){const i=document.getElementById("back-to-top");i&&(window.addEventListener("scroll",()=>{const t=window.scrollY,r=document.documentElement.scrollHeight-window.innerHeight,n=r>0?t/r*100:0;t>300?i.classList.add("visible"):i.classList.remove("visible");const o=i.querySelector(".progress-ring-circle");if(o){const s=o.r.baseVal.value,l=2*Math.PI*s,c=l-n/100*l;o.style.strokeDashoffset=c}}),i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}const a={name:"Fargo Freights",shortDesc:"Nationwide dispatch, freight brokerage, auto hauling, and fleet management powering independent truckers and enterprise shippers across the USA.",phone:"(701) 696-3939",phoneClean:"+17016963939",email:"info@fargofreights.com",address:{full:"318 N Hanson St, Tioga, ND 58852"},hours:{dispatch:"24/7/365 Non-Stop Dispatch & Driver Support"},copyright:"© 2026 Fargo Freights. All Rights Reserved.",dotMc:{usdot:"USDOT Active & Compliant",mc:"MC Licensed Brokerage & Dispatch"},stats:[{value:"500+",label:"Projects Completed",subtext:"Dedicated carrier setups & contracts"},{value:"250+",label:"Satisfied Clients",subtext:"Shippers, brokers & owner-operators"},{value:"100K+",label:"Miles Per Week",subtext:"Dispatched safely across all 48 states"},{value:"20+",label:"Team Members",subtext:"24/7 dispatch & logistics specialists"},{value:"1,000+",label:"Freight Delivered",subtext:"Loads & vehicles safely transported"},{value:"99.8%",label:"On-Time Performance",subtext:"Industry-leading reliability metric"}],services:[{id:"dispatch",title:"Truck Dispatch Services",slug:"/dispatch",badge:"Most Popular for Owner Operators",icon:"Headphones",heroImage:"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",shortDescription:"Dedicated 24/7 dispatchers negotiating top dollar rates, managing broker paperwork, and optimizing your weekly gross revenue.",description:"Our top-tier truck dispatch service is designed specifically for owner-operators and small fleets. We handle continuous load sourcing, aggressive rate negotiations, broker credit checks, carrier packet setup, and route optimization so you can focus 100% on driving safely and making more money.",highlights:["Load Search & Sourcing on Premium Private Boards","Aggressive Rate Negotiations ($3.00+ avg rate/mile target)","Route Planning & Deadhead Minimization","Direct Broker Communication & Packet Setup","Rate Confirmation Support & Verification","Documentation & Invoicing Support","24/7 Continuous Carrier & Driver Communication"],pricing:"Low 5% - 8% flat gross commission with no hidden setup fees."},{id:"fleet-management",title:"Fleet Management Solutions",slug:"/fleet-management",badge:"Full Fleet Optimization",icon:"ShieldCheck",heroImage:"https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",shortDescription:"End-to-end fleet operational management, telematics tracking, preventive maintenance planning, and DOT regulatory compliance.",description:"Maximize your fleet efficiency, lower operating costs, and eliminate roadside downtime. Fargo Freights provides complete fleet management solutions including ELD compliance, fuel card discount management, IFTA fuel tax reporting, maintenance logging, and driver safety training.",highlights:["Fleet Coordination & Asset Tracking","Transportation Operations Management","Route Planning & Fuel Optimization","Operational Support & Breakdown Assistance","Driver Safety, Telematics & ELD Monitoring","Dedicated 24/7 Operational Communication"],pricing:"Customized fleet management packages tailored to your fleet size."},{id:"freight-brokerage",title:"Freight Brokerage Solutions",slug:"/freight-brokerage",badge:"Enterprise Shipper Solutions",icon:"Layers",heroImage:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",shortDescription:"Seamless capacity matching, vetted carrier networks, real-time satellite tracking, and bonded freight surety for manufacturers and shippers.",description:"Fargo Freights connects shippers with vetted, compliant, and insured motor carriers across all 48 continental states. Whether you need single spot loads, expedited rush shipments, or high-volume dedicated contract lanes, we guarantee dependable capacity and transparent pricing.",highlights:["Shipper Support & Dedicated Account Management","Carrier Connections & Pre-Vetted Vetting","Load Coordination & Milestone Updates","Transportation Planning & Equipment Sourcing","Delivery Coordination & Real-Time Tracking","Bonded Freight Surety & Full Cargo Insurance"],pricing:"Competitive spot rates & fixed-rate contract lane volume quotes."},{id:"auto-hauling",title:"Auto Car Hauling Logistics",slug:"/auto-hauling",badge:"Specialized Vehicle Transport",icon:"Truck",heroImage:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",shortDescription:"Specialized vehicle transportation for dealerships, auctions, classic car collectors, and individual direct-door auto transport.",description:"Specialized automotive transport across the United States. We operate and dispatch both open multi-car haulers (3-car wedge, 7-car, 9-car stinger rigs) and climate-controlled enclosed carriers for exotics, luxury sedans, classic vintage vehicles, and electric vehicles.",highlights:["Vehicle Transportation (Open & Enclosed Hydraulic Trailers)","Pickup Coordination (Dealers, Auctions, Private)","Delivery Coordination & Digital BOL Verification","Route Planning & Transit Scheduling","Direct Driver & Dispatcher Communication","Zero-Damage Soft-Tie Strapping Standards"],pricing:"Instant door-to-door vehicle shipping quotes based on distance and trailer type."}],processSteps:[{step:"01",title:"Request a Quote",desc:"Submit your origin, destination, and equipment requirements online or speak directly with our logistics coordinators.",icon:"FileText"},{step:"02",title:"Freight Details",desc:"We review load specifications, commodity weight, pickup windows, and any special accessorial needs.",icon:"Search"},{step:"03",title:"Carrier Matching",desc:"We match your shipment with an audited, insured motor carrier or dedicated company driver within minutes.",icon:"CheckSquare"},{step:"04",title:"Transportation",desc:"Real-time GPS tracking and automated milestone check-calls keep you updated from pickup to border transit.",icon:"Navigation"},{step:"05",title:"Delivery",desc:"Safe, punctual delivery with digital electronic proof of delivery (ePOD) and rapid invoice settlement.",icon:"DollarSign"}],equipmentTypes:[{name:"53' Dry Van",icon:"Box",capacity:"Up to 45,000 lbs",pallets:"26 Standard Pallets",useCase:"General freight, consumer goods, electronics, palletized freight, retail shipments."},{name:"53' Refrigerated (Reefer)",icon:"Snowflake",capacity:"Up to 44,000 lbs",pallets:"26 Standard Pallets",useCase:"Temperature-controlled perishables, fresh produce, frozen food, pharmaceuticals, beverages."},{name:"48' / 53' Flatbed",icon:"Truck",capacity:"Up to 48,000 lbs",pallets:"Oversized / Bundled",useCase:"Construction materials, steel coils, lumber, heavy machinery, pipe, jobsite deliveries."},{name:"Step Deck / Single Drop",icon:"Anchor",capacity:"Up to 48,000 lbs",pallets:"Tall Equipment",useCase:"Tall industrial equipment, tractors, military cargo, machinery exceeding 8.5ft height."},{name:"Auto Car Hauler (3-9 Car)",icon:"Car",capacity:"3 to 9 Passenger Vehicles",pallets:"Multi-Vehicle",useCase:"Dealership transfers, auction transport, exotic sports cars, classic vintage automobiles."},{name:"26' Box Truck / Straight Truck",icon:"Package",capacity:"Up to 10,000 lbs",pallets:"12 Standard Pallets",useCase:"Expedited regional freight, local distribution, liftgate deliveries, non-CDL & CDL loads."},{name:"Power Only",icon:"Zap",capacity:"Tractor Only",pallets:"Drop & Hook Trailers",useCase:"Moving pre-loaded shipper trailers, disaster relief, intermodal drayage, fleet repositioning."},{name:"Hotshot Transport",icon:"Flame",capacity:"Up to 16,500 lbs",pallets:"40ft Gooseneck Deck",useCase:"Urgent oilfield freight, rapid manufacturing parts, short-notice construction shipments."}],teamCategories:[{category:"Executive & Operational Leadership",description:"Guiding strategic growth, carrier partnerships, and safety culture across the continental US.",members:[{name:"Executive Leadership",role:"Managing Director & Operations",experience:"15+ Years Freight Logistics",location:"Tioga, ND HQ"},{name:"Director of Transportation",role:"VP of Carrier Relations",experience:"12+ Years Supply Chain Strategy",location:"Tioga, ND HQ"}]},{category:"Senior Dispatch & Rate Negotiation Team",description:"Experienced freight dispatchers working 24/7 to lock in top paying rates and optimal lanes.",members:[{name:"Senior Dispatch Specialist",role:"Reefer & Dry Van Team Lead",experience:"8+ Years Load Board Master",location:"24/7 Operations Hub"},{name:"Flatbed & Heavy Haul Coordinator",role:"Specialized Equipment Specialist",experience:"7+ Years Oversized Freight",location:"Operations Hub"}]},{category:"Freight Brokerage & Shipper Sales",description:"Dedicated account managers providing enterprise shippers with continuous guaranteed truck capacity.",members:[{name:"Carrier Sales Manager",role:"National Capacity Coordinator",experience:"6+ Years Network Expansion",location:"Brokerage Division"},{name:"Shipper Account Executive",role:"Key Enterprise Accounts",experience:"9+ Years Contract Lanes",location:"Enterprise Division"}]},{category:"Safety, Compliance & Factoring Support",description:"Ensuring 100% DOT compliance, prompt driver factoring payouts, and instant certificate handling.",members:[{name:"Safety & Compliance Officer",role:"FMCSA & DOT Regulatory Specialist",experience:"10+ Years Safety Audits",location:"Tioga, ND HQ"},{name:"Billing & Settlement Specialist",role:"Factoring & Carrier Accounting",experience:"5+ Years Freight Accounting",location:"Support Center"}]}],partners:[{name:"DAT One",category:"Load Board & Rate Analytics"},{name:"Truckstop",category:"Carrier Verification & Marketplace"},{name:"TQL",category:"Logistics Network"},{name:"C.H. Robinson",category:"Freight Exchange"},{name:"Dynamic Transportation",category:"Specialized Fleet Partner"},{name:"RXO",category:"Brokerage Network"},{name:"DSV",category:"Global Supply Chain"}],testimonials:[{id:1,name:"Marcus V.",role:"Owner-Operator (53' Reefer)",company:"Midwest Carrier Partner",location:"Dallas, TX",rating:5,date:"Recent Carrier Review",quote:"Fargo Freights dispatch team consistently books top-paying freight with virtually zero empty miles. Their communication and rate negotiation keep our equipment running profitably.",verified:!0},{id:2,name:"Sarah J.",role:"Logistics Director",company:"Industrial Manufacturing Shipper",location:"Minneapolis, MN",rating:5,date:"Recent Shipper Review",quote:"When we have critical flatbed and dry van loads needing prompt pickup, Fargo Freights delivers. Real-time tracking updates, proactive communication, and dependable capacity.",verified:!0},{id:3,name:"Dmitri K.",role:"Fleet Owner (6 Trucks)",company:"Regional Transport Partner",location:"Chicago, IL",rating:5,date:"Recent Fleet Review",quote:"Partnering with Fargo Freights for dedicated dispatch and back-office management has streamlined our operations. They handle rate confirmations, broker packets, and billing seamlessly.",verified:!0}]},$={Truck:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5.5a1.5 1.5 0 0 0-.44-1.06L18.5 7.38A1.5 1.5 0 0 0 17.44 7H14v11h1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',Headphones:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>',Layers:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',ShieldCheck:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',Shield:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',Clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',CheckCircle2:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',TrendingUp:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',PhoneCall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Award:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',FileText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',Search:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',CheckSquare:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',Navigation:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',DollarSign:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',Box:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',Snowflake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="12" y1="12" x2="19.07" y2="4.93"/><line x1="12" y1="12" x2="4.93" y2="19.07"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="12" x2="19.07" y2="19.07"/><line x1="12" y1="12" x2="4.93" y2="4.93"/></svg>',Anchor:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>',Car:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',Package:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',Zap:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',Flame:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>',MapPin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',Mail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',Star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',StarOutline:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',ArrowRight:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',ArrowLeft:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',ChevronDown:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',ChevronUp:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',Menu:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',X:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',Check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',Calculator:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',Send:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',ExternalLink:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',Users:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',AlertCircle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'};function e(i,t="",r=20){const n=$[i]||$.Check;return!t&&!r?n:n.replace("<svg ",`<svg class="ff-icon ${t}" width="${r}" height="${r}" `)}function m(){return`
    <!-- Topbar -->
    <div class="ff-topbar">
      <div class="ff-container ff-topbar-inner">
        <div class="ff-topbar-left">
          <div class="ff-topbar-item">
            ${e("PhoneCall","",14)}
            <span>24/7 Dispatch Hotline: <a href="tel:${a.phoneClean}">${a.phone}</a></span>
          </div>
          <div class="ff-topbar-item">
            ${e("Mail","",14)}
            <a href="mailto:${a.email}">${a.email}</a>
          </div>
        </div>
        <div class="ff-topbar-right">
          <div class="ff-topbar-item">
            ${e("MapPin","",14)}
            <span>${a.address.full}</span>
          </div>
          <div class="ff-topbar-item">
            <span class="ff-badge ff-badge-success" style="font-size:0.75rem; padding: 0.15rem 0.5rem; margin:0;">
              ${a.dotMc.usdot}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <header class="ff-header" id="main-header">
      <div class="ff-container ff-header-inner">
        <a href="/" class="ff-brand" aria-label="${a.name} Home">
          <img src="/images/logo.jpg" alt="${a.name} Logo" class="ff-logo-img" />
          <div class="ff-brand-text">
            <span class="ff-brand-name">${a.name}</span>
            <span class="ff-brand-tagline">Trucking & Logistics</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="ff-nav" aria-label="Main Navigation">
          <ul class="ff-nav-list">
            <li class="ff-nav-item"><a href="/" class="nav-link">Home</a></li>
            <li class="ff-nav-item"><a href="/about" class="nav-link">About Us</a></li>
            <li class="ff-nav-item">
              <a href="/services" class="nav-link">
                Services ${e("ChevronDown","",14)}
              </a>
              <ul class="ff-dropdown-menu">
                <li class="ff-dropdown-item"><a href="/dispatch">Truck Dispatch</a></li>
                <li class="ff-dropdown-item"><a href="/freight-brokerage">Freight Brokerage</a></li>
                <li class="ff-dropdown-item"><a href="/auto-hauling">Auto Car Hauling</a></li>
                <li class="ff-dropdown-item"><a href="/fleet-management">Fleet Management</a></li>
              </ul>
            </li>
            <li class="ff-nav-item"><a href="/reviews" class="nav-link">Reviews</a></li>
            <li class="ff-nav-item"><a href="/become-a-carrier" class="nav-link">Become a Carrier</a></li>
            <li class="ff-nav-item"><a href="/contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <!-- CTA & Mobile Toggle -->
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="ff-header-cta">
            <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-sm">
              Get Started ${e("ArrowRight","",16)}
            </a>
          </div>
          <button class="ff-mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle Navigation Menu">
            ${e("Menu","",26)}
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="ff-drawer-overlay" id="drawer-overlay"></div>
    <div class="ff-mobile-drawer" id="mobile-drawer">
      <div class="ff-drawer-header">
        <a href="/" class="ff-brand" id="drawer-brand">
          <img src="/images/logo.jpg" alt="${a.name}" class="ff-logo-img" style="height: 42px;" />
          <span class="ff-brand-name" style="font-size: 1.25rem;">${a.name}</span>
        </a>
        <button class="ff-drawer-close" id="drawer-close-btn" aria-label="Close Menu">
          ${e("X","",24)}
        </button>
      </div>

      <nav class="ff-drawer-nav">
        <a href="/" class="mobile-nav-link">Home</a>
        <a href="/about" class="mobile-nav-link">About Us</a>
        <a href="/services" class="mobile-nav-link">Services</a>
        <div class="ff-drawer-sublinks">
          <a href="/dispatch" class="mobile-sub-link">Truck Dispatch</a>
          <a href="/freight-brokerage" class="mobile-sub-link">Freight Brokerage</a>
          <a href="/auto-hauling" class="mobile-sub-link">Auto Car Hauling</a>
          <a href="/fleet-management" class="mobile-sub-link">Fleet Management</a>
        </div>
        <a href="/reviews" class="mobile-nav-link">Reviews & Testimonials</a>
        <a href="/become-a-carrier" class="mobile-nav-link">Become a Carrier</a>
        <a href="/contact" class="mobile-nav-link">Contact Us</a>
      </nav>

      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--ff-border); display: flex; flex-direction: column; gap: 1rem;">
        <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-block">
          Get Started Now
        </a>
        <a href="tel:${a.phoneClean}" class="ff-btn ff-btn-outline ff-btn-block">
          ${e("PhoneCall","",18)} Call ${a.phone}
        </a>
      </div>
    </div>
  `}function L(){const i=document.getElementById("main-header"),t=document.getElementById("mobile-menu-toggle"),r=document.getElementById("drawer-close-btn"),n=document.getElementById("drawer-overlay"),o=document.getElementById("mobile-drawer");window.addEventListener("scroll",()=>{window.scrollY>40?i==null||i.classList.add("scrolled"):i==null||i.classList.remove("scrolled")});const s=()=>{o==null||o.classList.add("open"),n==null||n.classList.add("open"),document.body.style.overflow="hidden"},l=()=>{o==null||o.classList.remove("open"),n==null||n.classList.remove("open"),document.body.style.overflow=""};t==null||t.addEventListener("click",s),r==null||r.addEventListener("click",l),n==null||n.addEventListener("click",l),o==null||o.querySelectorAll("a").forEach(c=>{c.addEventListener("click",l)})}function E(){const i=[{badge:"DISPATCH SERVICES",title:"Keep Your Trucks Moving. Keep Your Business Growing.",desc:"Professional dispatch solutions designed to help carriers find quality freight, reduce downtime, and keep their trucks moving.",primaryBtn:{text:"Become a Carrier",link:"/become-a-carrier"},secondaryBtn:{text:"Learn More",link:"/dispatch"},bgImage:"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"},{badge:"FREIGHT BROKERAGE",title:"Reliable Freight. Reliable Connections.",desc:"Connecting shippers and carriers with dependable transportation solutions built around communication, efficiency and trust.",primaryBtn:{text:"Get a Quote",link:"#contact"},secondaryBtn:{text:"Learn More",link:"/freight-brokerage"},bgImage:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"},{badge:"AUTO CAR HAULING",title:"Moving Vehicles Safely Across the Nation.",desc:"Dependable vehicle transportation solutions focused on safety, communication and efficient delivery.",primaryBtn:{text:"Request Transportation",link:"/auto-hauling"},secondaryBtn:{text:"Contact Us",link:"/contact"},bgImage:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=80"}];return`
    <section class="ff-hero-slider" id="hero-slider" aria-label="Hero Carousel">
      ${i.map((t,r)=>`
        <div class="ff-slide ${r===0?"active":""}" data-slide="${r}">
          <div class="ff-slide-bg" style="background-image: url('${t.bgImage}');"></div>
          <div class="ff-slide-overlay"></div>
          <div class="ff-container" style="position: relative; z-index: 3;">
            <div class="ff-hero-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${e("ShieldCheck","",14)} ${t.badge}
              </span>
              <h1 class="ff-hero-title animate-on-scroll delay-1">
                ${t.title}
              </h1>
              <p class="ff-hero-desc animate-on-scroll delay-2">
                ${t.desc}
              </p>
              <div class="ff-hero-actions animate-on-scroll delay-3">
                <a href="${t.primaryBtn.link}" class="ff-btn ff-btn-primary ff-btn-lg">
                  ${t.primaryBtn.text} ${e("ArrowRight","",18)}
                </a>
                <a href="${t.secondaryBtn.link}" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  ${t.secondaryBtn.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join("")}

      <!-- Slider Controls -->
      <div class="ff-slider-nav">
        <button class="ff-slider-arrow" id="hero-prev-btn" aria-label="Previous Slide">
          ${e("ArrowLeft","",20)}
        </button>
        <div class="ff-slider-dots" id="hero-dots">
          ${i.map((t,r)=>`
            <div class="ff-dot ${r===0?"active":""}" data-dot="${r}" role="button" aria-label="Slide ${r+1}"></div>
          `).join("")}
        </div>
        <button class="ff-slider-arrow" id="hero-next-btn" aria-label="Next Slide">
          ${e("ArrowRight","",20)}
        </button>
      </div>
    </section>
  `}function z(){const i=document.getElementById("hero-slider");if(!i)return;const t=i.querySelectorAll(".ff-slide"),r=i.querySelectorAll(".ff-dot"),n=document.getElementById("hero-prev-btn"),o=document.getElementById("hero-next-btn");let s=0,l=null;const c=t.length;function y(h){var v,f,x,b;(v=t[s])==null||v.classList.remove("active"),(f=r[s])==null||f.classList.remove("active"),s=(h+c)%c,(x=t[s])==null||x.classList.add("active"),(b=r[s])==null||b.classList.add("active")}function d(){k(),l=setInterval(()=>{y(s+1)},6e3)}function k(){l&&(clearInterval(l),l=null)}n==null||n.addEventListener("click",()=>{y(s-1),d()}),o==null||o.addEventListener("click",()=>{y(s+1),d()}),r.forEach((h,v)=>{h.addEventListener("click",()=>{y(v),d()})}),i.addEventListener("mouseenter",k),i.addEventListener("mouseleave",d),d()}function p(i,t="success",r=4e3){let n=document.getElementById("ff-toast-container");n||(n=document.createElement("div"),n.id="ff-toast-container",n.className="ff-toast-container",document.body.appendChild(n));const o=document.createElement("div");o.className=`ff-toast ff-toast-${t}`;const s=t==="success"?'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>':'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';o.innerHTML=`
    <div class="ff-toast-icon">${s}</div>
    <div class="ff-toast-message">${i}</div>
    <button class="ff-toast-close" aria-label="Close Notification">&times;</button>
  `,n.appendChild(o),requestAnimationFrame(()=>{o.classList.add("ff-toast-show")});const l=()=>{o.classList.remove("ff-toast-show"),o.classList.add("ff-toast-hide"),setTimeout(()=>{o.parentElement&&o.parentElement.removeChild(o)},300)};o.querySelector(".ff-toast-close").addEventListener("click",l),setTimeout(l,r)}function P(){return`
    <section class="ff-section" id="get-started">
      <div class="ff-container">
        <div class="ff-carrier-card animate-on-scroll" style="background: linear-gradient(145deg, #FFFFFF 0%, var(--ff-bg-subtle) 100%);">
          <div class="ff-grid ff-grid-2" style="align-items: center; gap: 3rem;">
            <div>
              <span class="ff-badge">${e("Truck","",14)} Carrier Partnership</span>
              <h2 style="font-size: 2.2rem; margin-bottom: 1rem;">Ready to Get Started?</h2>
              <p style="font-size: 1.1rem; color: var(--ff-text-muted); margin-bottom: 1.5rem;">
                Tell us about your operation and our team will get in touch with you.
              </p>

              <ul class="ff-checklist" style="margin-bottom: 2rem;">
                <li class="ff-check-item">
                  <div class="ff-check-icon">${e("Check","",14)}</div>
                  <div class="ff-check-text"><strong>Fast Setup:</strong> Get rolling on top-paying lanes within 2 to 4 hours.</div>
                </li>
                <li class="ff-check-item">
                  <div class="ff-check-icon">${e("Check","",14)}</div>
                  <div class="ff-check-text"><strong>100% Autonomy:</strong> No forced dispatch — you approve every rate con.</div>
                </li>
                <li class="ff-check-item">
                  <div class="ff-check-icon">${e("Check","",14)}</div>
                  <div class="ff-check-text"><strong>Factoring & Back-Office:</strong> Direct invoicing and rapid same-day funding support.</div>
                </li>
              </ul>

              <div>
                <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-lg">
                  Become a Carrier ${e("ArrowRight","",18)}
                </a>
              </div>
            </div>

            <!-- Compact Quick Sign-up Form -->
            <div style="background-color: #FFFFFF; padding: 2rem; border-radius: var(--ff-radius-lg); border: 1px solid var(--ff-border); box-shadow: var(--ff-shadow-md);">
              <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">Quick Carrier Inquiry</h3>
              <p style="font-size: 0.88rem; color: var(--ff-text-muted); margin-bottom: 1.25rem;">
                Submit your basics and a senior dispatcher will call you promptly.
              </p>

              <form id="home-quick-carrier-form" novalidate>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hk-name">Your Name</label>
                  <input type="text" id="hk-name" class="ff-input" placeholder="e.g. John Miller" required />
                  <div class="ff-error-msg">Name is required</div>
                </div>

                <div class="ff-grid ff-grid-2">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="hk-phone">Phone Number</label>
                    <input type="tel" id="hk-phone" class="ff-input" placeholder="(555) 000-0000" required />
                    <div class="ff-error-msg">Phone is required</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="hk-truck">Truck Type</label>
                    <select id="hk-truck" class="ff-select" required>
                      <option value="Dry Van">Dry Van</option>
                      <option value="Reefer">Reefer</option>
                      <option value="Flatbed">Flatbed</option>
                      <option value="Box Truck">Box Truck</option>
                      <option value="Dump Truck">Dump Truck</option>
                      <option value="Hotshot">Hotshot</option>
                      <option value="Car Hauler">Car Hauler</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button type="submit" class="ff-btn ff-btn-primary ff-btn-block" id="hk-submit-btn">
                  Submit Quick Inquiry ${e("Send","",16)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function R(){const i=document.getElementById("home-quick-carrier-form");i==null||i.addEventListener("submit",t=>{var s,l;t.preventDefault();const r=(s=document.getElementById("hk-name"))==null?void 0:s.value.trim(),n=(l=document.getElementById("hk-phone"))==null?void 0:l.value.trim();if(!r||!n){p("Please enter your name and phone number.","error");return}const o=document.getElementById("hk-submit-btn");o&&(o.disabled=!0,o.innerHTML="Submitting..."),setTimeout(()=>{p("Thank you! Your application has been submitted successfully. Our team will contact you shortly.","success",6e3),i.reset(),o&&(o.disabled=!1,o.innerHTML="Submit Quick Inquiry "+e("Send","",16))},600)})}function H(){return`
    <section class="ff-section ff-bg-subtle" id="contact">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${e("Mail","",14)} Get In Touch</span>
          <h2 class="ff-section-title">Let's Move Freight Together</h2>
          <p class="ff-section-subtitle">
            Whether you need dedicated truck dispatch, spot load quotes, or auto hauling capacity, our logistics team is standing by 24/7.
          </p>
        </div>

        <div class="ff-split-layout" style="align-items: flex-start;">
          <!-- Contact Details Box -->
          <div class="ff-split-content animate-on-scroll">
            <div style="background-color: #FFFFFF; padding: 2.5rem; border-radius: var(--ff-radius-lg); border: 1px solid var(--ff-border); box-shadow: var(--ff-shadow-sm);">
              <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Direct Contact Details</h3>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${e("PhoneCall","",20)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 0.95rem; display: block;">24/7 Dispatch Hotline</strong>
                  <a href="tel:${a.phoneClean}" style="font-size: 1.25rem; font-weight: 800; color: var(--ff-primary);">${a.phone}</a>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${e("Mail","",20)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 0.95rem; display: block;">Email Inquiries</strong>
                  <a href="mailto:${a.email}" style="font-size: 1.05rem; color: var(--ff-text-main); font-weight: 600;">${a.email}</a>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${e("MapPin","",20)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 0.95rem; display: block;">Office & Yard Address</strong>
                  <span style="font-size: 0.95rem; color: var(--ff-text-muted);">${a.address.full}</span>
                </div>
              </div>

              <div class="ff-loc-detail-box" style="margin-bottom: 0;">
                <div class="ff-loc-detail-icon">${e("Clock","",20)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 0.95rem; display: block;">Operating Schedule</strong>
                  <span style="font-size: 0.88rem; color: var(--ff-text-muted);">${a.hours.dispatch}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Get a Quote Form -->
          <div class="ff-carrier-card animate-on-scroll delay-2" style="padding: 2.5rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Get a Quote</h3>
            <p style="color: var(--ff-text-muted); font-size: 0.92rem; margin-bottom: 1.75rem;">
              Fill in your shipment details to receive an instant spot rate confirmation.
            </p>

            <form id="home-quote-form" novalidate>
              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hq-origin">Origin (City, ST or Zip)</label>
                  <input type="text" id="hq-origin" class="ff-input" placeholder="e.g. Fargo, ND" required />
                  <div class="ff-error-msg">Origin is required</div>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hq-dest">Destination (City, ST or Zip)</label>
                  <input type="text" id="hq-dest" class="ff-input" placeholder="e.g. Chicago, IL" required />
                  <div class="ff-error-msg">Destination is required</div>
                </div>
              </div>

              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hq-equipment">Equipment Type</label>
                  <select id="hq-equipment" class="ff-select" required>
                    <option value="Dry Van (53ft)" selected>Dry Van (53ft)</option>
                    <option value="Reefer (53ft)">Reefer (53ft)</option>
                    <option value="Flatbed">Flatbed (48/53ft)</option>
                    <option value="Step Deck">Step Deck</option>
                    <option value="Auto Hauler">Auto Car Hauler</option>
                    <option value="Box Truck">Box Truck (26ft)</option>
                    <option value="Power Only">Power Only</option>
                    <option value="Hotshot">Hotshot</option>
                  </select>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="hq-phone">Phone Number</label>
                  <input type="tel" id="hq-phone" class="ff-input" placeholder="(701) 000-0000" required />
                  <div class="ff-error-msg">Phone is required</div>
                </div>
              </div>

              <div class="ff-form-group">
                <label class="ff-label ff-label-required" for="hq-email">Email Address</label>
                <input type="email" id="hq-email" class="ff-input" placeholder="contact@company.com" required />
                <div class="ff-error-msg">Valid email is required</div>
              </div>

              <div class="ff-form-group">
                <label class="ff-label" for="hq-notes">Shipment Details & Weight</label>
                <textarea id="hq-notes" class="ff-textarea" style="min-height: 80px;" placeholder="Commodity type, weight, appointment schedule, or special instructions..."></textarea>
              </div>

              <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block" id="hq-submit-btn">
                Request Guaranteed Quote ${e("Send","",18)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `}function O(){const i=document.getElementById("home-quote-form");i==null||i.addEventListener("submit",t=>{t.preventDefault();let r=!0;i.querySelectorAll("input[required], select[required]").forEach(l=>{l.value.trim()?l.classList.remove("error"):(l.classList.add("error"),r=!1)});const o=document.getElementById("hq-email");if(o&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value.trim())&&(o.classList.add("error"),r=!1),!r){p("Please complete all required fields.","error");return}const s=document.getElementById("hq-submit-btn");s&&(s.disabled=!0,s.innerHTML="Sending Quote Request..."),setTimeout(()=>{p("Thank you! Your quote request has been received. Our logistics team will call you within 15 minutes.","success",7e3),i.reset(),s&&(s.disabled=!1,s.innerHTML="Request Guaranteed Quote "+e("Send","",18))},600)})}function I(){return`
    <section class="ff-section-sm ff-bg-subtle" id="newsletter">
      <div class="ff-container">
        <div style="max-width: 680px; margin: 0 auto; text-align: center;" class="animate-on-scroll">
          <span class="ff-badge">${e("Mail","",14)} Weekly Freight Insights</span>
          <h3 style="font-size: 1.8rem; margin-bottom: 0.75rem;">Get National Lane Rate & Fuel Trend Updates</h3>
          <p style="margin-bottom: 1.75rem;">
            Subscribe to our weekly dispatch digest featuring spot rate fluctuations, high-demand hot lanes, and regulatory updates.
          </p>

          <form id="newsletter-form" style="display: flex; gap: 0.75rem; max-width: 520px; margin: 0 auto; flex-wrap: wrap;">
            <input 
              type="email" 
              id="newsletter-email" 
              class="ff-input" 
              placeholder="Enter your business email" 
              required 
              style="flex: 1; min-width: 240px;"
            />
            <button type="submit" class="ff-btn ff-btn-primary">
              Subscribe ${e("Send","",16)}
            </button>
          </form>
          <div style="font-size: 0.78rem; color: var(--ff-text-subtle); margin-top: 0.75rem;">
            Zero spam. Unsubscribe anytime.
          </div>
        </div>
      </div>
    </section>
  `}function N(){const i=document.getElementById("newsletter-form");i==null||i.addEventListener("submit",t=>{var n;t.preventDefault();const r=(n=document.getElementById("newsletter-email"))==null?void 0:n.value.trim();if(!r||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){p("Please enter a valid email address.","error");return}p("Success! You are now subscribed to Fargo Freights weekly market updates.","success"),i.reset()})}function F(){const i=[{title:"Dispatch Services",slug:"/dispatch",icon:"Headphones",image:"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",description:"Dedicated 24/7 load sourcing, aggressive rate negotiations, route planning, broker paperwork handling, and driver support to keep your trucks rolling profitably."},{title:"Fleet Management",slug:"/fleet-management",icon:"ShieldCheck",image:"https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",description:"Comprehensive fleet coordination, ELD tracking & telematics, preventive maintenance planning, fuel card discount programs, and regulatory compliance."},{title:"Freight Brokerage",slug:"/freight-brokerage",icon:"Layers",image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",description:"Dependable nationwide freight capacity connecting shippers with vetted, insured carriers. Real-time tracking and delivery coordination across all 48 states."},{title:"Auto Hauling",slug:"/auto-hauling",icon:"Truck",image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",description:"Specialized vehicle transportation for dealerships, auctions, classic car collectors, and individual door-to-door auto logistics with zero-damage guarantee."}];return`
    <section class="ff-section ff-bg-light" id="services">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${e("Layers","",14)} Full-Spectrum Logistics</span>
          <h2 class="ff-section-title">Our Services</h2>
          <p class="ff-section-subtitle">
            Explore our specialized transportation divisions designed for independent owner-operators, fleet owners, and commercial enterprise shippers.
          </p>
        </div>

        <div class="ff-grid ff-grid-4">
          ${i.map((t,r)=>`
            <div class="ff-service-card animate-on-scroll delay-${r+1}">
              <div class="ff-service-img-wrap">
                <img src="${t.image}" alt="${t.title}" class="ff-service-img" loading="lazy" />
              </div>
              <div class="ff-service-body">
                <div class="ff-service-icon-box">
                  ${e(t.icon,"",26)}
                </div>
                <h3 class="ff-service-title" style="font-size: 1.25rem;">${t.title}</h3>
                <p class="ff-service-desc">${t.description}</p>
                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--ff-border);">
                  <a href="${t.slug}" class="ff-btn ff-btn-outline ff-btn-sm ff-btn-block">
                    Learn More ${e("ArrowRight","",14)}
                  </a>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function j(){return`
    <section class="ff-section" id="about">
      <div class="ff-container">
        <div class="ff-split-layout">
          <div class="ff-split-content animate-on-scroll">
            <span class="ff-badge">${e("Award","",14)} North Dakota HQ & Nationwide Logistics</span>
            <h2>About Fargo Freights</h2>
            <p>
              Headquartered at <strong>${a.address.full}</strong>, <strong>${a.name}</strong> is a premier American trucking, dispatch, and freight brokerage company built to empower motor carriers and enterprise shippers across the nation.
            </p>
            <p>
              We eliminate the friction in modern logistics through transparency, aggressive rate negotiations, dedicated dispatcher support, and strict safety compliance. Our team operates 24/7/365 to ensure every load is dispatched efficiently, tracked in real-time, and delivered safely.
            </p>

            <div class="ff-grid ff-grid-2" style="margin: 1.5rem 0;">
              <div style="background-color: var(--ff-bg-light); padding: 1.25rem; border-radius: var(--ff-radius-md); border-left: 4px solid var(--ff-primary);">
                <h4 style="margin-bottom: 0.35rem; font-size: 1.05rem;">Our Mission</h4>
                <p style="font-size: 0.88rem; margin:0; color: var(--ff-text-muted);">To deliver honest, top-dollar load booking and carrier support with 100% no forced dispatch.</p>
              </div>
              <div style="background-color: var(--ff-bg-light); padding: 1.25rem; border-radius: var(--ff-radius-md); border-left: 4px solid var(--ff-success);">
                <h4 style="margin-bottom: 0.35rem; font-size: 1.05rem;">Team Overview</h4>
                <p style="font-size: 0.88rem; margin:0; color: var(--ff-text-muted);">Experienced dispatchers, freight brokers, compliance officers, and 24/7 driver coordinators.</p>
              </div>
            </div>

            <div>
              <a href="/about" class="ff-btn ff-btn-primary">
                Learn More About Us ${e("ArrowRight","",16)}
              </a>
            </div>
          </div>

          <div class="ff-split-visual animate-on-scroll delay-2">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80" 
              alt="Fargo Freights Operations & Logistics Yard" 
              class="ff-split-img"
              loading="lazy"
            />
            <div class="ff-floating-badge-card">
              <div class="ff-floating-badge-icon">
                ${e("ShieldCheck","",26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">24/7/365 Non-Stop</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Dedicated American Dispatch Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function V(){const i=[{icon:"Shield",title:"Safety",desc:"Our relentless commitment to safety protects drivers, equipment, and cargo across every mile. We enforce strict carrier safety qualification standards, active FMCSA monitoring, and comprehensive cargo insurance coverage on all dispatched freight loads."},{icon:"Clock",title:"Reliability",desc:"Count on dependable capacity and 99.8% on-time pickup and delivery performance nationwide. We track weather patterns, monitor congestion zones, and provide proactive check-calls to guarantee that your shipments stay on schedule with zero surprises."},{icon:"CheckCircle2",title:"Trust",desc:"Built on full transparency with zero forced dispatch and no hidden commission fees. Carriers receive direct rate confirmations before booking, and shippers enjoy bonded freight security backed by verified FMCSA licenses and honest logistics management."},{icon:"TrendingUp",title:"Efficiency",desc:"Maximize loaded miles and eliminate wasteful deadhead with our live market rate analytics. Our experienced dispatchers aggressively negotiate top-dollar rates averaging over $3.00+ per mile while optimizing fuel-efficient routes across the United States."},{icon:"PhoneCall",title:"Communication",desc:"Direct human communication 24 hours a day, 7 days a week, 365 days a year. You will always speak to a dedicated logistics specialist who knows your truck, your lanes, and your shipment milestones without being stuck in automated call menus."},{icon:"Award",title:"Professional Support",desc:"Comprehensive back-office administrative management handling broker packets, insurance certificates, lumper reimbursements, and detention pay claims. We submit PODs directly to your factoring company for fast, same-day settlement payouts."}];return`
    <section class="ff-section ff-bg-light" id="why-choose-us">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${e("ShieldCheck","",14)} The Fargo Advantage</span>
          <h2 class="ff-section-title">Why Choose Fargo Freights?</h2>
          <p class="ff-section-subtitle">
            We built our reputation on honesty, higher driver gross earnings, unwavering safety standards, and round-the-clock responsiveness.
          </p>
        </div>

        <div class="ff-grid ff-grid-3">
          ${i.map((t,r)=>`
            <div class="ff-why-card animate-on-scroll delay-${r%3+1}">
              <div class="ff-why-icon">
                ${e(t.icon,"",28)}
              </div>
              <h3 class="ff-why-title">${t.title}</h3>
              <p class="ff-why-desc">${t.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function W(){return`
    <section class="ff-container" id="stats" style="position: relative; z-index: 25;">
      <div class="ff-stats-bar">
        <div class="ff-stats-grid">
          ${a.stats.map(i=>`
            <div class="ff-stat-card">
              <div class="ff-stat-number counter-val" data-target="${i.value}">0</div>
              <div class="ff-stat-label">${i.label}</div>
              <div class="ff-stat-subtext">${i.subtext}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function U(){const i=[{title:"Load Search",desc:"Continuous sourcing on top private and public freight boards to secure ideal loads with minimal deadhead."},{title:"Load Negotiation",desc:"Aggressive rate negotiations averaging top-dollar rates ($3.00+ per loaded mile) directly with vetted brokers."},{title:"Route Planning",desc:"Strategic lane planning, weather monitoring, and fuel optimization to maximize your daily driving hours."},{title:"Broker Communication",desc:"Direct broker packet completion, creditworthiness checks, and rate confirmation management."},{title:"Rate Confirmation Support",desc:"Transparent rate confirmation verification with 100% carrier approval before booking."},{title:"Documentation Support",desc:"Full back-office assistance with BOLs, lumper receipts, detention pay filing, and factoring paperwork."},{title:"Carrier Communication",desc:"24/7 dedicated 1-on-1 dispatcher assigned to your truck for roadside, check-call, and routing support."}];return`
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
                ${e("Headphones","",26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">Dedicated 1-on-1 Dispatch</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Zero Forced Dispatch Guarantee</div>
              </div>
            </div>
          </div>

          <div class="ff-split-content animate-on-scroll delay-2">
            <span class="ff-badge">${e("Headphones","",14)} Truck Dispatch Services</span>
            <h2>Keep Your Trucks Moving With Top-Paying Freight</h2>
            <p>
              Stop wasting hours searching boards and handling complex broker packets. <strong>${a.name}</strong> acts as your dedicated logistics department, finding premium loads and negotiating top rates so you can focus on driving safely.
            </p>

            <ul class="ff-checklist" style="margin-bottom: 2rem;">
              ${i.slice(0,4).map(t=>`
                <li class="ff-check-item">
                  <div class="ff-check-icon">${e("Check","",14)}</div>
                  <div class="ff-check-text">
                    <strong>${t.title}:</strong> ${t.desc}
                  </div>
                </li>
              `).join("")}
            </ul>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/become-a-carrier" class="ff-btn ff-btn-primary">
                Become a Carrier ${e("ArrowRight","",16)}
              </a>
              <a href="/dispatch" class="ff-btn ff-btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function G(){const i=[{title:"Fleet Coordination",desc:"Centralized asset management and trailer scheduling to maximize equipment utilization across your fleet."},{title:"Transportation Operations",desc:"End-to-end management of driver schedules, HOS monitoring, and FMCSA safety score audits."},{title:"Route Planning",desc:"Dynamic navigation and fuel card optimization delivering 40¢–60¢/gallon savings at major truck stops."},{title:"Operational Support",desc:"24/7 roadside emergency coordination, preventative maintenance logging, and IFTA tax filing."},{title:"Communication",desc:"Direct, clear operational updates connecting drivers, fleet managers, and dispatch coordinators seamlessly."}];return`
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
                ${e("TrendingUp","",26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">Fleet Optimization</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Lower Operating Costs Per Mile</div>
              </div>
            </div>
          </div>

          <div class="ff-split-content animate-on-scroll delay-2">
            <span class="ff-badge">${e("ShieldCheck","",14)} Fleet Solutions</span>
            <h2>Complete Fleet Coordination & Operational Management</h2>
            <p>
              Managing multiple power units and trailers demands constant coordination. <strong>${a.name}</strong> provides comprehensive fleet management services designed to help fleet owners minimize downtime and scale efficiently.
            </p>

            <ul class="ff-checklist" style="margin-bottom: 2rem;">
              ${i.slice(0,4).map(t=>`
                <li class="ff-check-item">
                  <div class="ff-check-icon">${e("Check","",14)}</div>
                  <div class="ff-check-text">
                    <strong>${t.title}:</strong> ${t.desc}
                  </div>
                </li>
              `).join("")}
            </ul>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/fleet-management" class="ff-btn ff-btn-primary">
                Learn More ${e("ArrowRight","",16)}
              </a>
              <a href="/contact" class="ff-btn ff-btn-outline">
                Contact Fleet Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Y(){const i=[{num:"1",title:"Request a Quote",desc:"Submit shipment origin, destination, and equipment requirements."},{num:"2",title:"Freight Details",desc:"We verify cargo dimensions, weight, commodity, and timeline."},{num:"3",title:"Carrier Matching",desc:"Instant matching with pre-vetted, insured, safety-audited carriers."},{num:"4",title:"Transportation",desc:"Real-time satellite GPS tracking with proactive transit check-calls."},{num:"5",title:"Delivery",desc:"On-time delivery confirmation with digital BOL and final settlement."}];return`
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
                ${e("Layers","",26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">500+ Vetted Carriers</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Nationwide Freight Network</div>
              </div>
            </div>
          </div>

          <div class="ff-split-content animate-on-scroll delay-2">
            <span class="ff-badge">${e("Layers","",14)} Enterprise Brokerage</span>
            <h2>Dependable Freight Connections & Capacity Matching</h2>
            <p>
              When supply chain deadlines are essential, commercial shippers rely on <strong>${a.name}</strong>. We connect manufacturers and distributors with compliant, insured motor carriers across all 48 continental states.
            </p>

            <div style="margin: 1.5rem 0;">
              <h4 style="font-size: 1.05rem; margin-bottom: 0.85rem; color: var(--ff-primary);">Our 5-Step Brokerage Process:</h4>
              <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                ${i.map(t=>`
                  <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9rem;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background-color: var(--ff-primary-light); color: var(--ff-primary); font-weight: 800; font-size: 0.75rem; flex-shrink: 0; margin-top: 0.1rem;">${t.num}</span>
                    <div>
                      <strong>${t.title}:</strong> <span style="color: var(--ff-text-muted);">${t.desc}</span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
              <a href="/freight-brokerage" class="ff-btn ff-btn-primary">
                Get a Freight Quote ${e("ArrowRight","",16)}
              </a>
              <a href="/contact" class="ff-btn ff-btn-outline">
                Shipper Inquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Q(){const i=[{title:"Vehicle Transportation",desc:"Specialized open wedge, multi-car stingers, and enclosed hydraulic haulers for passenger cars, SUVs, trucks, and classic vehicles."},{title:"Pickup Coordination",desc:"Fast, dependable dispatch to auto auctions (Copart, Manheim, IAAI), dealership inventory lots, and private doorsteps."},{title:"Delivery Coordination",desc:"Detailed electronic BOL condition reports with photo verification before departure and upon delivery."},{title:"Route Planning",desc:"Optimized multi-vehicle transport routing minimizing transit windows across all 50 states."},{title:"Communication",desc:"Direct updates and driver communication throughout the entire vehicle transport journey."}];return`
    <section class="ff-section ff-bg-light" id="auto-hauling">
      <div class="ff-container">
        <div class="ff-split-layout reversed">
          <div class="ff-split-visual animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80" 
              alt="Fargo Freights Specialized Auto Car Hauler" 
              class="ff-split-img"
              loading="lazy"
            />
            <div class="ff-floating-badge-card">
              <div class="ff-floating-badge-icon">
                ${e("Car","",26)}
              </div>
              <div>
                <div style="font-weight: 800; font-size: 1.25rem; color: var(--ff-text-main);">Specialized Auto Hauling</div>
                <div style="font-size: 0.85rem; color: var(--ff-text-muted);">Open & Enclosed Hydraulic Trailers</div>
              </div>
            </div>
          </div>

          <div class="ff-split-content animate-on-scroll delay-2">
            <span class="ff-badge">${e("Car","",14)} Specialized Auto Logistics</span>
            <h2>Moving Vehicles Safely Across The Nation</h2>
            <p>
              Whether relocating auto dealer inventories, auction purchases, or private classic automobiles, <strong>${a.name}</strong> provides reliable nationwide auto car hauling with white-glove precision.
            </p>

            <ul class="ff-checklist" style="margin-bottom: 2rem;">
              ${i.slice(0,4).map(t=>`
                <li class="ff-check-item">
                  <div class="ff-check-icon">${e("Check","",14)}</div>
                  <div class="ff-check-text">
                    <strong>${t.title}:</strong> ${t.desc}
                  </div>
                </li>
              `).join("")}
            </ul>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/auto-hauling" class="ff-btn ff-btn-primary">
                Request Auto Transport ${e("ArrowRight","",16)}
              </a>
              <a href="tel:${a.phoneClean}" class="ff-btn ff-btn-outline">
                ${e("PhoneCall","",16)} Call ${a.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function S(){return`
    <section class="ff-section" id="process">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${e("CheckSquare","",14)} Seamless Workflow</span>
          <h2 class="ff-section-title">How We Move Your Freight In 5 Simple Steps</h2>
          <p class="ff-section-subtitle">
            From initial onboarding to prompt factoring settlement, our streamlined 5-step process guarantees maximum revenue with zero operational friction.
          </p>
        </div>

        <div class="ff-process-grid">
          ${a.processSteps.map((i,t)=>`
            <div class="ff-process-card animate-on-scroll delay-${t%4+1}">
              <div class="ff-process-step-num">${i.step}</div>
              <div class="ff-process-icon">
                ${e(i.icon,"",24)}
              </div>
              <h3 class="ff-process-title">${i.title}</h3>
              <p class="ff-process-desc">${i.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function Z(){return`
    <section class="ff-section" id="reviews">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${e("Star","",14)} Client & Carrier Feedback</span>
          <h2 class="ff-section-title">What Our Customers Say</h2>
          <p class="ff-section-subtitle">
            Feedback from independent owner-operators, fleet managers, and enterprise logistics coordinators who rely on Fargo Freights every day.
          </p>
        </div>

        <div class="ff-testimonial-grid">
          ${a.testimonials.map((i,t)=>`
            <div class="ff-testimonial-card animate-on-scroll delay-${t%3+1}">
              <div>
                <div class="ff-stars">
                  ${Array(i.rating).fill(0).map(()=>e("Star","",18)).join("")}
                </div>
                <p class="ff-test-quote">"${i.quote}"</p>
              </div>

              <div class="ff-test-author-row">
                <div class="ff-author-avatar">
                  ${i.name.charAt(0)}
                </div>
                <div class="ff-author-info">
                  <div class="ff-author-name">
                    ${i.name}
                    <span style="display: inline-flex; align-items: center; color: var(--ff-success); margin-left: 0.35rem;" title="Partner Verified">
                      ${e("CheckCircle2","",14)}
                    </span>
                  </div>
                  <div class="ff-author-role">${i.role} • ${i.company}</div>
                  <div style="font-size: 0.78rem; color: var(--ff-text-subtle);">${i.location} • ${i.date}</div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <div style="text-align: center; margin-top: 3.5rem;" class="animate-on-scroll">
          <a href="/reviews" class="ff-btn ff-btn-outline">
            View All Reviews ${e("ArrowRight","",16)}
          </a>
        </div>
      </div>
    </section>
  `}function K(){const i=[...a.partners,...a.partners];return`
    <section class="ff-section-sm ff-bg-light" id="partners" style="border-top: 1px solid var(--ff-border); border-bottom: 1px solid var(--ff-border);">
      <div class="ff-container" style="text-align: center; margin-bottom: 1.5rem;">
        <span class="ff-badge" style="margin-bottom: 0.5rem;">
          ${e("Layers","",14)} Connected Ecosystem
        </span>
        <h2 class="ff-section-title" style="font-size: 1.75rem; margin-bottom: 0.5rem;">Industry Platforms & Network</h2>
        <p style="font-size: 0.95rem; color: var(--ff-text-muted); max-width: 620px; margin: 0 auto;">
          Direct connectivity and load integrations with North America's leading freight exchanges and logistics platforms.
        </p>
      </div>

      <div class="ff-partner-marquee-wrap">
        <div class="ff-partner-track">
          ${i.map(t=>`
            <div class="ff-partner-pill">
              <span class="ff-partner-pill-icon">${e("Layers","",20)}</span>
              <span>${t.name}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function q(){const i=encodeURIComponent(a.address.full),t=`https://maps.google.com/maps?q=${i}&t=&z=14&ie=UTF8&iwloc=&output=embed`;return`
    <section class="ff-section" id="location">
      <div class="ff-container">
        <div class="ff-location-grid animate-on-scroll">
          <div class="ff-location-info">
            <span class="ff-badge">${e("MapPin","",14)} North Dakota Headquarters</span>
            <h2 style="font-size: 2rem; margin-bottom: 1.25rem;">Visit Our Logistics Operations Hub</h2>
            <p style="margin-bottom: 2rem;">
              We operate from our central transportation facility in Tioga, North Dakota, coordinating freight dispatch, driver safety, and carrier sales 24/7 across North America.
            </p>

            <div class="ff-loc-detail-box">
              <div class="ff-loc-detail-icon">${e("MapPin","",20)}</div>
              <div>
                <strong style="color: var(--ff-text-main); display: block;">Physical Address:</strong>
                <span style="color: var(--ff-text-muted);">${a.address.full}</span>
              </div>
            </div>

            <div class="ff-loc-detail-box">
              <div class="ff-loc-detail-icon">${e("PhoneCall","",20)}</div>
              <div>
                <strong style="color: var(--ff-text-main); display: block;">24/7 Phone Line:</strong>
                <a href="tel:${a.phoneClean}" style="font-weight: 700;">${a.phone}</a>
              </div>
            </div>

            <div class="ff-loc-detail-box">
              <div class="ff-loc-detail-icon">${e("Clock","",20)}</div>
              <div>
                <strong style="color: var(--ff-text-main); display: block;">Hours of Operation:</strong>
                <span style="color: var(--ff-text-muted);">${a.hours.dispatch}</span>
              </div>
            </div>

            <div style="margin-top: 1rem;">
              <a 
                href="https://maps.google.com/?q=${i}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="ff-btn ff-btn-outline ff-btn-sm"
              >
                Get Driving Directions ${e("ExternalLink","",14)}
              </a>
            </div>
          </div>

          <div class="ff-map-frame-wrap">
            <iframe 
              title="${a.name} Headquarters Location Map"
              class="ff-map-frame"
              src="${t}"
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `}function w(){return`
    <section class="ff-section ff-bg-light" id="cta-banner">
      <div class="ff-container">
        <div class="ff-cta-card animate-on-scroll">
          <span class="ff-badge ff-badge-white" style="margin-bottom: 1.25rem;">
            ${e("Zap","",14)} Get Started Today
          </span>
          <h2 class="ff-cta-title">Ready to Move Forward?</h2>
          <p class="ff-cta-desc">
            Whether you're a carrier looking for professional dispatch support or a business looking for dependable freight transportation solutions, Fargo Freights is ready to help.
          </p>

          <div class="ff-cta-buttons">
            <a href="/become-a-carrier" class="ff-btn ff-btn-white ff-btn-lg">
              Get Started ${e("ArrowRight","",18)}
            </a>
            <a href="/contact" class="ff-btn ff-btn-outline-white ff-btn-lg">
              ${e("Mail","",18)} Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `}function u(){return`
    <footer class="ff-footer">
      <div class="ff-container">
        <div class="ff-footer-grid">
          <!-- Col 1: Brand & Contact Info -->
          <div class="ff-footer-col">
            <a href="/" class="ff-brand" style="margin-bottom: 1.25rem;">
              <img src="/images/logo.jpg" alt="${a.name}" class="ff-logo-img" />
              <div class="ff-brand-text">
                <span class="ff-brand-name" style="color: #FFFFFF;">${a.name}</span>
                <span class="ff-brand-tagline">Trucking & Logistics</span>
              </div>
            </a>
            <p class="ff-footer-brand-desc">
              ${a.shortDesc}
            </p>
            <div style="display: flex; gap: 0.5rem; margin-top: 1.25rem;">
              <span class="ff-badge ff-badge-white" style="font-size: 0.75rem; margin: 0;">
                ${a.dotMc.usdot}
              </span>
              <span class="ff-badge ff-badge-white" style="font-size: 0.75rem; margin: 0;">
                ${a.dotMc.mc}
              </span>
            </div>
          </div>

          <!-- Col 2: Quick Links -->
          <div class="ff-footer-col">
            <h4>Quick Links</h4>
            <ul class="ff-footer-links">
              <li class="ff-footer-link"><a href="/">${e("ArrowRight","",12)} Home</a></li>
              <li class="ff-footer-link"><a href="/about">${e("ArrowRight","",12)} About Us</a></li>
              <li class="ff-footer-link"><a href="/services">${e("ArrowRight","",12)} Services</a></li>
              <li class="ff-footer-link"><a href="/reviews">${e("ArrowRight","",12)} Reviews</a></li>
              <li class="ff-footer-link"><a href="/become-a-carrier">${e("ArrowRight","",12)} Become a Carrier</a></li>
              <li class="ff-footer-link"><a href="/contact">${e("ArrowRight","",12)} Contact</a></li>
              <li class="ff-footer-link"><a href="/privacy-policy">${e("ArrowRight","",12)} Privacy Policy</a></li>
              <li class="ff-footer-link"><a href="/terms">${e("ArrowRight","",12)} Terms of Use</a></li>
            </ul>
          </div>

          <!-- Col 3: Our Services -->
          <div class="ff-footer-col">
            <h4>Our Services</h4>
            <ul class="ff-footer-links">
              <li class="ff-footer-link"><a href="/dispatch">${e("ArrowRight","",12)} Dispatch Services</a></li>
              <li class="ff-footer-link"><a href="/fleet-management">${e("ArrowRight","",12)} Fleet Management</a></li>
              <li class="ff-footer-link"><a href="/freight-brokerage">${e("ArrowRight","",12)} Freight Brokerage</a></li>
              <li class="ff-footer-link"><a href="/auto-hauling">${e("ArrowRight","",12)} Auto Hauling</a></li>
              <li class="ff-footer-link"><a href="/become-a-carrier">${e("ArrowRight","",12)} Carrier Onboarding</a></li>
              <li class="ff-footer-link"><a href="#contact">${e("ArrowRight","",12)} Get a Quote</a></li>
            </ul>
          </div>

          <!-- Col 4: Operations & Contact -->
          <div class="ff-footer-col">
            <h4>Fargo Freights</h4>
            <div class="ff-footer-contact-item">
              ${e("MapPin","",18)}
              <span>${a.address.full}</span>
            </div>
            <div class="ff-footer-contact-item">
              ${e("PhoneCall","",18)}
              <span>Phone: <a href="tel:${a.phoneClean}">${a.phone}</a></span>
            </div>
            <div class="ff-footer-contact-item">
              ${e("Mail","",18)}
              <span>Email: <a href="mailto:${a.email}">${a.email}</a></span>
            </div>
            <div class="ff-footer-contact-item">
              ${e("Clock","",18)}
              <span>${a.hours.dispatch}</span>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="ff-footer-bottom">
          <div>${a.copyright}</div>
          <div class="ff-footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Use</a>
            <span>•</span>
            <a href="/contact">Support</a>
          </div>
        </div>
      </div>
    </footer>
  `}function g(){return`
    <div class="ff-floating-actions" aria-label="Quick Actions">
      <a href="tel:${a.phoneClean}" class="ff-float-btn phone-btn" aria-label="Call Dispatch Hotline">
        ${e("PhoneCall","",16)}
        <span>Call Dispatch: ${a.phone}</span>
      </a>
      <a href="/become-a-carrier" class="ff-float-btn" aria-label="Carrier Onboarding">
        ${e("Truck","",16)}
        <span>Sign Up Carrier</span>
      </a>
    </div>

    <!-- Back to Top Button with Circular Progress -->
    <button class="back-to-top" id="back-to-top" aria-label="Scroll back to top">
      <svg class="progress-ring" width="50" height="50">
        <circle
          class="progress-ring-circle"
          stroke-width="3"
          fill="transparent"
          r="22"
          cx="25"
          cy="25"
          style="stroke-dasharray: 138.2; stroke-dashoffset: 138.2;"
        />
      </svg>
      ${e("ChevronUp","",20)}
    </button>
  `}function C(){return document.title="Fargo Freights | US Truck Dispatch, Freight Brokerage & Logistics",`
    ${m()}
    <main>
      ${E()}
      ${F()}
      ${j()}
      ${V()}
      ${W()}
      ${U()}
      ${G()}
      ${Y()}
      ${Q()}
      ${S()}
      ${Z()}
      ${K()}
      ${P()}
      ${H()}
      ${q()}
      ${w()}
      ${I()}
    </main>
    ${u()}
    ${g()}
  `}function J(){return document.title=`About Us | ${a.name} - Premier American Logistics`,`
    ${m()}
    <main>
      <!-- Page Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0; position: relative;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${e("Award","",14)} Our Legacy & Mission
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
              <span class="ff-badge">${e("MapPin","",14)} Heart of American Freight</span>
              <h2>Built From The Ground Up For Drivers</h2>
              <p>
                At <strong>${a.name}</strong>, we understand that trucking is the backbone of the American economy. Yet too many owner-operators and small fleets struggle with predatory dispatch commissions, unpaid detention hours, and complex paperwork.
              </p>
              <p>
                We established our headquarters at <strong>${a.address.full}</strong> to provide an honest, tech-enabled logistics partnership. We pair real human relationships with real-time rate analytics, ensuring our carriers consistently earn above-market gross revenues while enjoying complete freedom over their schedules.
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
            <span class="ff-badge">${e("Users","",14)} Our Organization</span>
            <h2 class="ff-section-title">Dedicated Logistics Specialists</h2>
            <p class="ff-section-subtitle">
              Meet the structured divisions behind Fargo Freights working around the clock to move freight seamlessly.
            </p>
          </div>

          <div class="ff-grid ff-grid-2">
            ${a.teamCategories.map((i,t)=>`
              <div class="ff-why-card animate-on-scroll delay-${t%2+1}">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                  <div class="ff-why-icon" style="margin-bottom: 0; width: 44px; height: 44px;">
                    ${e("Users","",22)}
                  </div>
                  <div>
                    <h3 style="font-size: 1.2rem; margin:0;">${i.category}</h3>
                  </div>
                </div>
                <p style="font-size: 0.92rem; margin-bottom: 1.25rem;">${i.description}</p>

                <div style="border-top: 1px solid var(--ff-border); padding-top: 1rem; display: flex; flex-direction: column; gap: 0.85rem;">
                  ${i.members.map(r=>`
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; background-color: var(--ff-bg-subtle); padding: 0.65rem 0.85rem; border-radius: var(--ff-radius-sm);">
                      <div>
                        <strong style="color: var(--ff-text-main); display: block;">${r.name}</strong>
                        <span style="color: var(--ff-text-muted);">${r.role}</span>
                      </div>
                      <div style="text-align: right;">
                        <span style="font-weight: 600; color: var(--ff-primary); font-size: 0.8rem; display: block;">${r.experience}</span>
                        <span style="font-size: 0.75rem; color: var(--ff-text-subtle);">${r.location}</span>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      ${w()}
    </main>
    ${u()}
    ${g()}
  `}function _(){return`
    <section class="ff-section ff-bg-light" id="equipment">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${e("Truck","",14)} Fleet Capabilities</span>
          <h2 class="ff-section-title">Equipment & Trailer Types We Support</h2>
          <p class="ff-section-subtitle">
            Whether hauling general dry freight, climate-sensitive pharmaceuticals, heavy industrial steel, or exotic automobiles, our network supports all major trailer classes.
          </p>
        </div>

        <div class="ff-equipment-grid">
          ${a.equipmentTypes.map((i,t)=>`
            <div class="ff-equipment-card animate-on-scroll delay-${t%4+1}">
              <div class="ff-equip-header">
                <div class="ff-equip-icon">
                  ${e(i.icon,"",24)}
                </div>
                <div class="ff-equip-name">${i.name}</div>
              </div>

              <div class="ff-equip-specs">
                <div class="ff-equip-spec-row">
                  <span class="ff-equip-spec-label">Payload Capacity:</span>
                  <span class="ff-equip-spec-val">${i.capacity}</span>
                </div>
                <div class="ff-equip-spec-row">
                  <span class="ff-equip-spec-label">Dimensions / Space:</span>
                  <span class="ff-equip-spec-val">${i.pallets}</span>
                </div>
              </div>

              <p class="ff-equip-desc">${i.useCase}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function X(){return document.title=`Logistics & Transportation Services | ${a.name}`,`
    ${m()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${e("Layers","",14)} Comprehensive Transportation Solutions
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Freight Services Tailored For Modern Supply Chains
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Explore our specialized divisions covering independent truck dispatch, nationwide freight brokerage, specialized auto hauling, and end-to-end fleet operations.
          </p>
        </div>
      </section>

      ${F()}
      ${_()}
      ${S()}
      ${w()}
    </main>
    ${u()}
    ${g()}
  `}function ee(){document.title=`Truck Dispatch Services | ${a.name} (701) 696-3939`;const i=a.services.find(t=>t.id==="dispatch")||a.services[0];return`
    ${m()}
    <main>
      <!-- Page Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 5rem 0;">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${e("Headphones","",14)} 24/7 Dedicated Truck Dispatch
              </span>
              <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
                Make More Money. Drive Less Empty Miles.
              </h1>
              <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 2rem;" class="animate-on-scroll delay-2">
                We handle rate negotiations, carrier packet paperwork, broker credit approvals, and back-office invoicing so you can focus entirely on driving.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;" class="animate-on-scroll delay-3">
                <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-lg">
                  Sign Up Your Truck ${e("ArrowRight","",18)}
                </a>
                <a href="tel:${a.phoneClean}" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  ${e("PhoneCall","",18)} Call ${a.phone}
                </a>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img src="${i.heroImage}" alt="Truck Dispatch Operations" class="ff-split-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights & Details -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${e("CheckCircle2","",14)} The Dispatch Difference</span>
            <h2 class="ff-section-title">What's Included In Our Dispatch Plan</h2>
            <p class="ff-section-subtitle">
              Low transparent percentage commission, no contracts, and full carrier autonomy.
            </p>
          </div>

          <div class="ff-grid ff-grid-3">
            ${i.highlights.map((t,r)=>`
              <div class="ff-why-card animate-on-scroll delay-${r%3+1}">
                <div class="ff-why-icon">
                  ${e("Check","",24)}
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${t}</h3>
                <p style="font-size: 0.9rem;">
                  Our proactive team coordinates every detail with brokers and factoring partners to maximize your net take-home pay.
                </p>
              </div>
            `).join("")}
          </div>

          <!-- Onboarding Requirements Checklist -->
          <div style="margin-top: 4.5rem; background-color: var(--ff-bg-light); border-radius: var(--ff-radius-xl); padding: 3rem; border: 1px solid var(--ff-border);" class="animate-on-scroll">
            <h3 style="margin-bottom: 1.25rem; font-size: 1.6rem;">Required Documents To Get Started In 3 Hours:</h3>
            <div class="ff-grid ff-grid-2">
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--ff-primary);">${e("FileText","",24)}</div>
                <div>
                  <strong>Active MC / DOT Authority</strong>
                  <p style="font-size: 0.88rem;">Must have active authority registered with FMCSA.</p>
                </div>
              </div>
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--ff-primary);">${e("ShieldCheck","",24)}</div>
                <div>
                  <strong>Certificate of Insurance (COI)</strong>
                  <p style="font-size: 0.88rem;">Min. $100k Cargo & $1M Auto Liability coverage.</p>
                </div>
              </div>
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--ff-primary);">${e("FileText","",24)}</div>
                <div>
                  <strong>Signed W-9 Form</strong>
                  <p style="font-size: 0.88rem;">Standard IRS form for business tax verification.</p>
                </div>
              </div>
              <div style="display: flex; gap: 0.75rem;">
                <div style="color: var(--ff-primary);">${e("DollarSign","",24)}</div>
                <div>
                  <strong>Factoring NOA (Notice of Assignment)</strong>
                  <p style="font-size: 0.88rem;">If you use a factoring company for fast payout funding.</p>
                </div>
              </div>
            </div>
            <div style="margin-top: 2rem; text-align: center;">
              <a href="/become-a-carrier" class="ff-btn ff-btn-primary ff-btn-lg">
                Submit Documents & Start Rolling ${e("ArrowRight","",18)}
              </a>
            </div>
          </div>
        </div>
      </section>

      ${w()}
    </main>
    ${u()}
    ${g()}
  `}function te(){return`
    <section class="ff-section ff-bg-subtle" id="quote">
      <div class="ff-container">
        <div class="ff-section-header animate-on-scroll">
          <span class="ff-badge">${e("Calculator","",14)} Instant Rate Estimate</span>
          <h2 class="ff-section-title">Freight Rate Calculator & Instant Quote</h2>
          <p class="ff-section-subtitle">
            Get an instant, data-driven freight rate estimation based on real-time American market lane averages. Submit your shipment details for priority booking.
          </p>
        </div>

        <div class="ff-quote-container animate-on-scroll">
          <div class="ff-quote-grid">
            <!-- Form Side -->
            <div class="ff-quote-form-side">
              <form id="instant-quote-form" novalidate>
                <div class="ff-grid ff-grid-2" style="margin-bottom: 0.5rem;">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-origin">Origin (City, ST or Zip)</label>
                    <input type="text" id="quote-origin" class="ff-input" placeholder="e.g. Chicago, IL 60601" required />
                    <div class="ff-error-msg">Please enter origin location</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-dest">Destination (City, ST or Zip)</label>
                    <input type="text" id="quote-dest" class="ff-input" placeholder="e.g. Dallas, TX 75201" required />
                    <div class="ff-error-msg">Please enter destination location</div>
                  </div>
                </div>

                <div class="ff-grid ff-grid-2" style="margin-bottom: 0.5rem;">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-equipment">Equipment Type</label>
                    <select id="quote-equipment" class="ff-select" required>
                      <option value="dry-van" selected>53' Dry Van (Standard)</option>
                      <option value="reefer">53' Refrigerated (Reefer)</option>
                      <option value="flatbed">48' / 53' Flatbed</option>
                      <option value="stepdeck">Step Deck / Single Drop</option>
                      <option value="autohaul">Auto Car Hauler (3-9 Cars)</option>
                      <option value="boxtruck">26' Box Truck / Straight Truck</option>
                      <option value="poweronly">Power Only</option>
                      <option value="hotshot">Hotshot Transport</option>
                    </select>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label" for="quote-weight">Estimated Weight (lbs)</label>
                    <input type="number" id="quote-weight" class="ff-input" placeholder="e.g. 38,000" min="500" max="80000" value="35000" />
                  </div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label" for="quote-distance">Estimated Distance (Miles): <span id="dist-display" style="color: var(--ff-primary); font-weight: 800;">750</span> mi</label>
                  <input type="range" id="quote-distance" min="100" max="3000" step="50" value="750" style="width: 100%; accent-color: var(--ff-primary); cursor: pointer;" />
                </div>

                <div class="ff-grid ff-grid-3" style="margin-bottom: 0.5rem;">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-name">Your Full Name</label>
                    <input type="text" id="quote-name" class="ff-input" placeholder="John Miller" required />
                    <div class="ff-error-msg">Name is required</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-phone">Phone Number</label>
                    <input type="tel" id="quote-phone" class="ff-input" placeholder="(555) 000-0000" required />
                    <div class="ff-error-msg">Phone is required</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="quote-email">Email Address</label>
                    <input type="email" id="quote-email" class="ff-input" placeholder="john@company.com" required />
                    <div class="ff-error-msg">Valid email is required</div>
                  </div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label" for="quote-notes">Shipment Notes / Special Instructions</label>
                  <textarea id="quote-notes" class="ff-textarea" style="min-height: 80px;" placeholder="Liftgate required, appointment time, hazmat details, or specific delivery window..."></textarea>
                </div>

                <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block">
                  Submit For Guaranteed Spot Rate ${e("Send","",18)}
                </button>
              </form>
            </div>

            <!-- Preview & Calculation Side -->
            <div class="ff-quote-preview-side">
              <div>
                <span class="ff-badge ff-badge-white" style="margin-bottom: 1.5rem;">
                  ${e("TrendingUp","",14)} Live Market Spot Index
                </span>
                <h3 style="color: #FFFFFF; font-size: 1.6rem; margin-bottom: 0.75rem;">Estimated Cost Breakdown</h3>
                <p style="color: #94A3B8; font-size: 0.92rem;">
                  Based on current DAT One & Truckstop verified lane spot averages, fuel surcharges, and equipment availability.
                </p>

                <div class="ff-quote-estimate-card" style="margin: 2rem 0;">
                  <div style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: #94A3B8;">Estimated Spot Rate Range</div>
                  <div class="ff-est-price" id="calc-price-display">$2,250 – $2,580</div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #CBD5E1; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.75rem;">
                    <span>Estimated Rate/Mile:</span>
                    <strong id="calc-rpm-display" style="color: #38BDF8;">$3.00 – $3.44 / mi</strong>
                  </div>
                </div>
              </div>

              <div>
                <div class="ff-quote-benefit-item">
                  ${e("CheckCircle2","",18)}
                  <span>Zero hidden broker fees or surprise accessorials</span>
                </div>
                <div class="ff-quote-benefit-item">
                  ${e("CheckCircle2","",18)}
                  <span>$250k+ Comprehensive cargo insurance coverage included</span>
                </div>
                <div class="ff-quote-benefit-item">
                  ${e("CheckCircle2","",18)}
                  <span>Dedicated dispatcher assigned to your load within 15 minutes</span>
                </div>
                <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.15); font-size: 0.82rem; color: #94A3B8;">
                  Need urgent immediate booking? Call 24/7 hotline: <a href="tel:${a.phoneClean}" style="color: #60A5FA; font-weight: 700;">${a.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function ie(){document.title=`Freight Brokerage & Shipper Solutions | ${a.name}`;const i=a.services.find(t=>t.id==="freight-brokerage")||a.services[1];return`
    ${m()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 5rem 0;">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${e("Layers","",14)} Nationwide Brokerage Network
              </span>
              <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
                Guaranteed Capacity. Reliable Truckload Delivery.
              </h1>
              <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 2rem;" class="animate-on-scroll delay-2">
                We provide commercial shippers and manufacturers with guaranteed truckload capacity, rigorously audited carriers, and real-time shipment visibility.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;" class="animate-on-scroll delay-3">
                <a href="#quote" class="ff-btn ff-btn-primary ff-btn-lg">
                  Request Spot Quote ${e("ArrowRight","",18)}
                </a>
                <a href="/contact" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  Shipper Account Setup
                </a>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img src="${i.heroImage}" alt="Freight Brokerage Operations" class="ff-split-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${e("ShieldCheck","",14)} Why Shippers Partner With Us</span>
            <h2 class="ff-section-title">Freight Brokerage Built For Reliability</h2>
            <p class="ff-section-subtitle">
              We eliminate carrier failure risks and provide direct human accountability for every shipment.
            </p>
          </div>

          <div class="ff-grid ff-grid-3">
            ${i.highlights.map((t,r)=>`
              <div class="ff-why-card animate-on-scroll delay-${r%3+1}">
                <div class="ff-why-icon">
                  ${e("ShieldCheck","",24)}
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${t}</h3>
                <p style="font-size: 0.9rem;">
                  Full surety bond compliance, verified certificate of insurance, and continuous satellite tracking from pickup to delivery.
                </p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      ${te()}
      ${w()}
    </main>
    ${u()}
    ${g()}
  `}function ae(){document.title=`Auto Car Hauling & Vehicle Transport | ${a.name}`;const i=a.services.find(t=>t.id==="auto-hauling")||a.services[2];return`
    ${m()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 5rem 0;">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${e("Car","",14)} Specialized Automotive Logistics
              </span>
              <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
                Nationwide Open & Enclosed Auto Car Hauling
              </h1>
              <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 2rem;" class="animate-on-scroll delay-2">
                Specialized vehicle transportation for dealerships, auto auctions (Copart, Manheim, IAAI), classic car collectors, and individual door-to-door auto moves.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;" class="animate-on-scroll delay-3">
                <a href="#quote" class="ff-btn ff-btn-primary ff-btn-lg">
                  Get Auto Shipping Quote ${e("ArrowRight","",18)}
                </a>
                <a href="tel:${a.phoneClean}" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  ${e("PhoneCall","",18)} ${a.phone}
                </a>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img src="${i.heroImage}" alt="Auto Car Hauling Rig" class="ff-split-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${e("Truck","",14)} Auto Transport Services</span>
            <h2 class="ff-section-title">Zero-Damage Automotive Transport</h2>
            <p class="ff-section-subtitle">
              From single luxury exotics to 9-car dealer inventory transfers, we handle every vehicle with white-glove precision.
            </p>
          </div>

          <div class="ff-grid ff-grid-3">
            ${i.highlights.map((t,r)=>`
              <div class="ff-why-card animate-on-scroll delay-${r%3+1}">
                <div class="ff-why-icon">
                  ${e("Car","",24)}
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${t}</h3>
                <p style="font-size: 0.9rem;">
                  Hydraulic loading ramps, soft over-the-tire soft straps, and comprehensive pre-load digital photographic condition reports.
                </p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      ${w()}
    </main>
    ${u()}
    ${g()}
  `}function re(){document.title=`Fleet Management & Yard Solutions | ${a.name}`;const i=a.services.find(t=>t.id==="fleet-management")||a.services[3];return`
    ${m()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 5rem 0;">
        <div class="ff-container">
          <div class="ff-split-layout">
            <div class="ff-split-content">
              <span class="ff-badge ff-badge-white animate-on-scroll">
                ${e("ShieldCheck","",14)} Fleet Efficiency & Telematics
              </span>
              <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
                Streamline Fleet Operations & Cut Operating Costs
              </h1>
              <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 2rem;" class="animate-on-scroll delay-2">
                We take the complexity out of fleet management with ELD compliance, fuel card discount management, IFTA quarterly tax reporting, and preventative maintenance logging.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;" class="animate-on-scroll delay-3">
                <a href="/contact" class="ff-btn ff-btn-primary ff-btn-lg">
                  Request Fleet Consultation ${e("ArrowRight","",18)}
                </a>
                <a href="tel:${a.phoneClean}" class="ff-btn ff-btn-outline-white ff-btn-lg">
                  ${e("PhoneCall","",18)} Call Operations
                </a>
              </div>
            </div>

            <div class="ff-split-visual animate-on-scroll delay-2">
              <img src="${i.heroImage}" alt="Fleet Management Logistics Yard" class="ff-split-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-section-header animate-on-scroll">
            <span class="ff-badge">${e("CheckCircle2","",14)} Full Lifecycle Fleet Care</span>
            <h2 class="ff-section-title">Fleet Services Tailored To Your Growth</h2>
            <p class="ff-section-subtitle">
              Scale your fleet from 2 trucks to 50+ trucks without adding unnecessary back-office overhead.
            </p>
          </div>

          <div class="ff-grid ff-grid-3">
            ${i.highlights.map((t,r)=>`
              <div class="ff-why-card animate-on-scroll delay-${r%3+1}">
                <div class="ff-why-icon">
                  ${e("TrendingUp","",24)}
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${t}</h3>
                <p style="font-size: 0.9rem;">
                  End-to-end administration designed to protect your safety scores and keep your drivers earning.
                </p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      ${w()}
    </main>
    ${u()}
    ${g()}
  `}function oe(){return document.title=`Customer Reviews & Carrier Testimonials | ${a.name}`,`
    ${m()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${e("Star","",14)} Verified Driver & Shipper Feedback
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Proven Track Record of Freight Excellence
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Read authentic reviews from owner-operators, fleet owners, and enterprise shippers moving freight with Fargo Freights nationwide.
          </p>

          <!-- Google Rating Pill -->
          <div style="display: inline-flex; align-items: center; gap: 1rem; background-color: rgba(255,255,255,0.1); padding: 0.75rem 1.5rem; border-radius: var(--ff-radius-full); margin-top: 2rem; border: 1px solid rgba(255,255,255,0.2);" class="animate-on-scroll delay-3">
            <span style="font-weight: 800; font-size: 1.2rem; color: #FFFFFF;">4.9 / 5.0</span>
            <div style="display: flex; gap: 0.2rem; color: #FBBF24;">
              ${Array(5).fill(0).map(()=>e("Star","",16)).join("")}
            </div>
            <span style="font-size: 0.85rem; color: #CBD5E1;">Based on 250+ Verified Reviews</span>
          </div>
        </div>
      </section>

      <!-- Review Cards Grid -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-testimonial-grid">
            ${a.testimonials.map((i,t)=>`
              <div class="ff-testimonial-card animate-on-scroll delay-${t%3+1}">
                <div>
                  <div class="ff-stars">
                    ${Array(i.rating).fill(0).map(()=>e("Star","",18)).join("")}
                  </div>
                  <p class="ff-test-quote">"${i.quote}"</p>
                </div>

                <div class="ff-test-author-row">
                  <div class="ff-author-avatar">
                    ${i.name.charAt(0)}
                  </div>
                  <div class="ff-author-info">
                    <div class="ff-author-name">
                      ${i.name}
                      <span style="display: inline-flex; align-items: center; color: var(--ff-success); margin-left: 0.35rem;" title="Verified Customer">
                        ${e("CheckCircle2","",14)}
                      </span>
                    </div>
                    <div class="ff-author-role">${i.role} • ${i.company}</div>
                    <div style="font-size: 0.78rem; color: var(--ff-text-subtle);">${i.location} • ${i.date}</div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Submit Review Form Section -->
          <div style="max-width: 720px; margin: 5rem auto 0 auto; background-color: var(--ff-bg-light); border-radius: var(--ff-radius-xl); padding: 3rem; border: 1px solid var(--ff-border);" class="animate-on-scroll">
            <div class="text-center" style="margin-bottom: 2rem;">
              <span class="ff-badge">${e("Star","",14)} Share Your Experience</span>
              <h3 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Leave a Verified Review</h3>
              <p style="color: var(--ff-text-muted); font-size: 0.95rem;">
                Are you a carrier or shipper working with Fargo Freights? We value your feedback.
              </p>
            </div>

            <form id="submit-review-form" novalidate>
              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="rev-name">Full Name</label>
                  <input type="text" id="rev-name" class="ff-input" placeholder="e.g. David Ross" required />
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="rev-company">Company / Trucking LLC</label>
                  <input type="text" id="rev-company" class="ff-input" placeholder="e.g. Ross Logistics LLC" required />
                </div>
              </div>

              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="rev-role">Relationship / Role</label>
                  <select id="rev-role" class="ff-select" required>
                    <option value="Owner-Operator">Owner-Operator (Driver)</option>
                    <option value="Fleet Owner">Fleet Owner (Multiple Trucks)</option>
                    <option value="Shipper / Manufacturer">Commercial Shipper / Manufacturer</option>
                    <option value="Auto Hauler">Auto Car Hauler</option>
                  </select>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="rev-rating">Star Rating</label>
                  <select id="rev-rating" class="ff-select" required>
                    <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                    <option value="4">★★★★☆ (4 Stars - Great)</option>
                    <option value="3">★★★☆☆ (3 Stars - Average)</option>
                  </select>
                </div>
              </div>

              <div class="ff-form-group">
                <label class="ff-label ff-label-required" for="rev-text">Your Review / Testimonial</label>
                <textarea id="rev-text" class="ff-textarea" placeholder="Share your experience regarding rate negotiation, dispatcher communication, or freight delivery..." required></textarea>
              </div>

              <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block">
                Submit Review For Verification ${e("Send","",18)}
              </button>
            </form>
          </div>
        </div>
      </section>

      ${w()}
    </main>
    ${u()}
    ${g()}
  `}function se(){const i=document.getElementById("submit-review-form");i==null||i.addEventListener("submit",t=>{var s,l,c;t.preventDefault();const r=(s=document.getElementById("rev-name"))==null?void 0:s.value.trim(),n=(l=document.getElementById("rev-company"))==null?void 0:l.value.trim(),o=(c=document.getElementById("rev-text"))==null?void 0:c.value.trim();if(!r||!n||!o){p("Please complete all required fields.","error");return}p(`Thank you, ${r}! Your review for ${n} has been submitted for verification.`,"success",5e3),i.reset()})}function ne(){return document.title=`Become a Carrier | ${a.name}`,`
    ${m()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${e("Truck","",14)} Carrier Application Portal
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Become a Carrier
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Partner with Fargo Freights for dedicated 24/7 truck dispatch, top-dollar rates, zero forced dispatch, and immediate factoring setup.
          </p>
        </div>
      </section>

      <!-- Carrier Application Form -->
      <section class="ff-section">
        <div class="ff-container ff-container-narrow">
          <div class="ff-carrier-card animate-on-scroll">
            <div style="border-bottom: 1px solid var(--ff-border); padding-bottom: 1.5rem; margin-bottom: 2rem;">
              <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Carrier Application</h2>
              <p style="color: var(--ff-text-muted); font-size: 0.95rem;">
                Please fill in your equipment details below. Our carrier onboarding team will review your application and contact you shortly.
              </p>
            </div>

            <form id="carrier-onboarding-form" novalidate>
              <!-- Personal Details -->
              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-firstname">First Name</label>
                  <input type="text" id="c-firstname" class="ff-input" placeholder="e.g. John" required />
                  <div class="ff-error-msg">First name is required</div>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-lastname">Last Name</label>
                  <input type="text" id="c-lastname" class="ff-input" placeholder="e.g. Miller" required />
                  <div class="ff-error-msg">Last name is required</div>
                </div>
              </div>

              <div class="ff-grid ff-grid-2">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-email">Email</label>
                  <input type="email" id="c-email" class="ff-input" placeholder="john@example.com" required />
                  <div class="ff-error-msg">Valid email is required</div>
                </div>
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-phone">Phone Number</label>
                  <input type="tel" id="c-phone" class="ff-input" placeholder="(701) 000-0000" required />
                  <div class="ff-error-msg">Valid phone number is required</div>
                </div>
              </div>

              <!-- Equipment Details -->
              <div class="ff-grid ff-grid-2" style="margin-top: 0.5rem;">
                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-trucktype">Truck Type</label>
                  <select id="c-trucktype" class="ff-select" required>
                    <option value="" disabled selected>Select Truck Type</option>
                    <option value="Dry Van">Dry Van</option>
                    <option value="Reefer">Reefer</option>
                    <option value="Flatbed">Flatbed</option>
                    <option value="Box Truck">Box Truck</option>
                    <option value="Dump Truck">Dump Truck</option>
                    <option value="Hotshot">Hotshot</option>
                    <option value="Car Hauler">Car Hauler</option>
                    <option value="Other">Other</option>
                  </select>
                  <div class="ff-error-msg">Please select a truck type</div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="c-length">Truck / Trailer Length</label>
                  <input type="text" id="c-length" class="ff-input" placeholder="e.g. 53 ft, 48 ft, 40 ft, 26 ft" required />
                  <div class="ff-error-msg">Please specify length (e.g. 53 ft)</div>
                </div>
              </div>

              <!-- MC Question & Conditional Logic -->
              <div class="ff-form-group" style="margin-top: 1rem;">
                <label class="ff-label ff-label-required">Do you have an MC?</label>
                <div class="ff-radio-options" style="margin-top: 0.5rem;">
                  <label class="ff-radio-group">
                    <input type="radio" name="has_mc" value="yes" checked id="radio-mc-yes" />
                    <strong>YES, I HAVE AN MC</strong>
                  </label>
                  <label class="ff-radio-group">
                    <input type="radio" name="has_mc" value="no" id="radio-mc-no" />
                    <span>NO, I DON'T HAVE AN MC</span>
                  </label>
                </div>
              </div>

              <!-- Conditional MC Number Input: Visible ONLY when YES is selected -->
              <div id="mc-conditional-box" class="ff-conditional-field">
                <div class="ff-form-group" style="margin-bottom: 1.5rem;">
                  <label class="ff-label ff-label-required" for="c-mc-num">Enter MC Number</label>
                  <input type="text" id="c-mc-num" class="ff-input" placeholder="e.g. MC-123456" required />
                  <div class="ff-error-msg">MC number is required</div>
                </div>
              </div>

              <!-- Additional Comments -->
              <div class="ff-form-group">
                <label class="ff-label" for="c-comments">Additional Comments</label>
                <textarea id="c-comments" class="ff-textarea" placeholder="Tell us about your preferred running lanes, factoring company, target revenue, or any special questions..."></textarea>
              </div>

              <!-- Status Alert placeholder for inside form feedback -->
              <div id="carrier-form-status" style="display: none; margin-bottom: 1.5rem; padding: 1.25rem; border-radius: var(--ff-radius-md);"></div>

              <div style="margin-top: 2rem;">
                <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block" id="carrier-submit-btn">
                  Submit Application ${e("ArrowRight","",18)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      ${u()}
      ${g()}
    </main>
  `}function le(){const i=document.getElementById("carrier-onboarding-form"),t=document.getElementById("radio-mc-yes"),r=document.getElementById("radio-mc-no"),n=document.getElementById("mc-conditional-box"),o=document.getElementById("c-mc-num"),s=document.getElementById("carrier-form-status"),l=document.getElementById("carrier-submit-btn");function c(){t!=null&&t.checked?(n&&(n.style.display="block"),o&&(o.required=!0)):(n&&(n.style.display="none"),o&&(o.required=!1,o.classList.remove("error"),o.value=""))}t==null||t.addEventListener("change",c),r==null||r.addEventListener("change",c),c(),i==null||i.addEventListener("submit",y=>{y.preventDefault();let d=!0;i.querySelectorAll('input[required]:not([type="radio"]), select[required]').forEach(f=>{f.closest("#mc-conditional-box")&&!(t!=null&&t.checked)||(f.value.trim()?f.classList.remove("error"):(f.classList.add("error"),d=!1))});const h=document.getElementById("c-email");h&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h.value.trim())&&(h.classList.add("error"),d=!1);const v=document.getElementById("c-phone");if(v&&v.value.trim().length<7&&(v.classList.add("error"),d=!1),!d){s&&(s.style.display="block",s.style.backgroundColor="var(--ff-danger-light)",s.style.color="var(--ff-danger)",s.style.border="1px solid var(--ff-danger)",s.innerHTML="<strong>Please correct the errors:</strong> Fill in all required fields marked with * accurately."),p("Please fill in all required fields accurately.","error");return}l&&(l.disabled=!0,l.innerHTML="Submitting Application..."),s&&(s.style.display="none"),setTimeout(()=>{const f="Thank you! Your application has been submitted successfully. Our team will contact you shortly.";s&&(s.style.display="block",s.style.backgroundColor="var(--ff-success-light)",s.style.color="#065F46",s.style.border="1px solid var(--ff-success)",s.innerHTML=`<strong>Success!</strong> ${f}`),p(f,"success",8e3),i.reset(),c(),l&&(l.disabled=!1,l.innerHTML="Submit Application "+e("ArrowRight","",18)),s==null||s.scrollIntoView({behavior:"smooth",block:"center"})},700)})}function ce(){return document.title=`Contact Us | 24/7 Dispatch Hotline | ${a.name}`,`
    ${m()}
    <main>
      <!-- Hero -->
      <section class="ff-section ff-bg-dark" style="padding: 4.5rem 0;">
        <div class="ff-container text-center">
          <span class="ff-badge ff-badge-white animate-on-scroll">
            ${e("PhoneCall","",14)} 24/7/365 Communications
          </span>
          <h1 style="color: #FFFFFF; margin-bottom: 1.25rem;" class="animate-on-scroll delay-1">
            Get In Touch With Fargo Freights
          </h1>
          <p style="color: #CBD5E1; max-width: 760px; margin: 0 auto; font-size: 1.2rem;" class="animate-on-scroll delay-2">
            Whether you are a driver looking for steady freight, a shipper seeking dedicated capacity, or need urgent in-transit support, our logistics team is standing by.
          </p>
        </div>
      </section>

      <!-- Contact Info & Form -->
      <section class="ff-section">
        <div class="ff-container">
          <div class="ff-split-layout">
            <!-- Details -->
            <div class="ff-split-content animate-on-scroll">
              <span class="ff-badge">${e("MapPin","",14)} Tioga, North Dakota HQ</span>
              <h2>Direct Contact Information</h2>
              <p style="margin-bottom: 2rem;">
                Our dispatch specialists and customer representatives are available 24 hours a day, 7 days a week.
              </p>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${e("PhoneCall","",22)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 1.05rem; display: block;">24/7 Dispatch Hotline</strong>
                  <a href="tel:${a.phoneClean}" style="font-size: 1.25rem; font-weight: 800; color: var(--ff-primary);">${a.phone}</a>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${e("Mail","",22)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 1.05rem; display: block;">General Inquiries & Billing</strong>
                  <a href="mailto:${a.email}" style="font-size: 1.1rem; color: var(--ff-text-main); font-weight: 600;">${a.email}</a>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${e("MapPin","",22)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 1.05rem; display: block;">Headquarters Location</strong>
                  <span style="font-size: 1.05rem; color: var(--ff-text-muted);">${a.address.full}</span>
                </div>
              </div>

              <div class="ff-loc-detail-box">
                <div class="ff-loc-detail-icon">${e("Clock","",22)}</div>
                <div>
                  <strong style="color: var(--ff-text-main); font-size: 1.05rem; display: block;">Operating Schedule</strong>
                  <span style="font-size: 0.95rem; color: var(--ff-text-muted);">${a.hours.dispatch}</span>
                </div>
              </div>
            </div>

            <!-- Form -->
            <div class="ff-carrier-card animate-on-scroll delay-2" style="padding: 2.75rem;">
              <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Send Us a Message</h3>
              <p style="color: var(--ff-text-muted); font-size: 0.92rem; margin-bottom: 1.75rem;">
                Fill out the inquiry form below and an operations specialist will respond within 15 minutes.
              </p>

              <form id="general-contact-form" novalidate>
                <div class="ff-grid ff-grid-2">
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="cnt-name">Your Full Name</label>
                    <input type="text" id="cnt-name" class="ff-input" placeholder="e.g. Alex Morgan" required />
                    <div class="ff-error-msg">Name is required</div>
                  </div>
                  <div class="ff-form-group">
                    <label class="ff-label ff-label-required" for="cnt-phone">Phone Number</label>
                    <input type="tel" id="cnt-phone" class="ff-input" placeholder="(555) 000-0000" required />
                    <div class="ff-error-msg">Phone is required</div>
                  </div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="cnt-email">Email Address</label>
                  <input type="email" id="cnt-email" class="ff-input" placeholder="alex@company.com" required />
                  <div class="ff-error-msg">Valid email is required</div>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="cnt-interest">Inquiry Type</label>
                  <select id="cnt-interest" class="ff-select" required>
                    <option value="Dispatch Services">Truck Dispatch Services (Owner-Operator)</option>
                    <option value="Freight Brokerage">Freight Brokerage Quote (Shipper)</option>
                    <option value="Auto Hauling">Auto Car Hauling Logistics</option>
                    <option value="Fleet Management">Fleet Management & Fuel Programs</option>
                    <option value="Billing & Accounting">Billing, Settlements & Factoring</option>
                    <option value="Other">Other General Inquiry</option>
                  </select>
                </div>

                <div class="ff-form-group">
                  <label class="ff-label ff-label-required" for="cnt-message">Message / Details</label>
                  <textarea id="cnt-message" class="ff-textarea" placeholder="Describe your freight, equipment, or inquiry in detail..." required></textarea>
                  <div class="ff-error-msg">Message is required</div>
                </div>

                <button type="submit" class="ff-btn ff-btn-primary ff-btn-lg ff-btn-block">
                  Send Direct Message ${e("Send","",18)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      ${q()}
    </main>
    ${u()}
    ${g()}
  `}function de(){const i=document.getElementById("general-contact-form");i==null||i.addEventListener("submit",t=>{var l;t.preventDefault();let r=!0;i.querySelectorAll("input[required], textarea[required]").forEach(c=>{c.value.trim()?c.classList.remove("error"):(c.classList.add("error"),r=!1)});const o=document.getElementById("cnt-email");if(o&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value.trim())&&(o.classList.add("error"),r=!1),!r){p("Please fill out all required fields.","error");return}const s=((l=document.getElementById("cnt-name"))==null?void 0:l.value)||"Friend";p(`Thank you, ${s}! Your message has been sent directly to our dispatch desk. We will call you back shortly.`,"success",6e3),i.reset()})}function fe(){return document.title=`Privacy Policy | ${a.name}`,`
    ${m()}
    <main>
      <section class="ff-section ff-bg-dark" style="padding: 4rem 0;">
        <div class="ff-container text-center">
          <h1 style="color: #FFFFFF; margin-bottom: 0.75rem;">Privacy Policy</h1>
          <p style="color: #CBD5E1;">Last updated: January 2026</p>
        </div>
      </section>

      <section class="ff-section">
        <div class="ff-container ff-container-narrow" style="color: var(--ff-text-main); line-height: 1.8;">
          <h3>1. Information We Collect</h3>
          <p>
            When you visit the <strong>${a.name}</strong> website or use our carrier dispatch and freight brokerage services, we collect information you provide directly to us. This includes your name, company name, USDOT/MC numbers, phone number, email address, physical address (${a.address.full}), shipment origin and destination data, equipment specifications, and billing or factoring details.
          </p>

          <h3 style="margin-top: 2rem;">2. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
            <li>Source, negotiate, book, and dispatch commercial freight loads on your behalf.</li>
            <li>Verify FMCSA motor carrier safety authority, insurance coverage, and compliance.</li>
            <li>Process rate confirmations, bills of lading (BOL), and submit invoicing to factoring companies.</li>
            <li>Send critical dispatch notifications, in-transit check calls, and market rate updates.</li>
          </ul>

          <h3 style="margin-top: 2rem;">3. Data Protection & Security</h3>
          <p>
            We implement industry-standard administrative, technical, and physical safeguards to prevent unauthorized access, disclosure, or misuse of your company and driver data. We never sell or lease your contact information or lane histories to third-party advertisers.
          </p>

          <h3 style="margin-top: 2rem;">4. Contact Us Regarding Your Privacy</h3>
          <p>
            If you have questions about this policy or wish to review your data, please contact our compliance officer at <a href="mailto:${a.email}">${a.email}</a> or call <a href="tel:${a.phoneClean}">${a.phone}</a>.
          </p>
        </div>
      </section>
    </main>
    ${u()}
    ${g()}
  `}function pe(){return document.title=`Terms of Service | ${a.name}`,`
    ${m()}
    <main>
      <section class="ff-section ff-bg-dark" style="padding: 4rem 0;">
        <div class="ff-container text-center">
          <h1 style="color: #FFFFFF; margin-bottom: 0.75rem;">Terms of Service</h1>
          <p style="color: #CBD5E1;">Last updated: January 2026</p>
        </div>
      </section>

      <section class="ff-section">
        <div class="ff-container ff-container-narrow" style="color: var(--ff-text-main); line-height: 1.8;">
          <h3>1. Carrier & Dispatch Agreement</h3>
          <p>
            By enrolling in <strong>${a.name}</strong> truck dispatch services, carrier acknowledges that Fargo Freights acts as an authorized independent dispatch coordinator. Fargo Freights negotiates and schedules freight loads on behalf of the carrier. The carrier retains 100% final authority to accept or reject any load rate confirmation.
          </p>

          <h3 style="margin-top: 2rem;">2. Carrier Compliance & Insurance</h3>
          <p>
            Carriers must maintain active, in-good-standing FMCSA operating authority and carry minimum insurance coverage of $1,000,000 Auto Liability and $100,000 Cargo Insurance throughout the duration of any dispatch relationship.
          </p>

          <h3 style="margin-top: 2rem;">3. Shipper & Brokerage Terms</h3>
          <p>
            Shippers utilizing Fargo Freights brokerage services agree to standard freight terms, timely payment within agreed invoice credit terms, and standard detention and accessorial guidelines.
          </p>

          <h3 style="margin-top: 2rem;">4. Governing Law</h3>
          <p>
            These terms are governed by the laws of the State of North Dakota. For any questions, reach our legal desk at <a href="mailto:${a.email}">${a.email}</a> or visit us at ${a.address.full}.
          </p>
        </div>
      </section>
    </main>
    ${u()}
    ${g()}
  `}const me={"/":C,"/home":C,"/about":J,"/services":X,"/dispatch":ee,"/freight-brokerage":ie,"/auto-hauling":ae,"/fleet-management":re,"/reviews":oe,"/become-a-carrier":ne,"/contact":ce,"/privacy-policy":fe,"/terms":pe};new T(me,"app");window.addEventListener("pageRendered",i=>{var r;const t=((r=i.detail)==null?void 0:r.path)||"/";L(),A(),D(),M(),N(),t==="/"||t==="/home"?(z(),R(),O()):t==="/become-a-carrier"?le():t==="/contact"?de():t==="/reviews"&&se()});
//# sourceMappingURL=index-DTgnRgdF.js.map
