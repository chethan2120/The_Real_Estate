import { Property, JobOpening, FAQItem, ServiceDetail, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-shivalik-skyview',
    title: 'Shivalik Skyview',
    location: 'GIFT City, Gandhinagar',
    price: '₹1.35 Cr - ₹2.32 Cr',
    numericPrice: 13500000,
    type: 'Residential',
    bhk: '2-3 BHK',
    size: '1,320 - 2,150 sq.ft.',
    features: ['High-tech Smart Ventilation', 'Automatic Smart Door Locks', 'EV Chargepoints', 'Premium Resident Lounge', 'Double Height Ground Lobby'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Shivalik Skyview sets a new paradigm for automated vertical living. Perfectly aligned with the GIFT City technological ecosystem, this state-of-the-art residential tower offers curated landscape decks, premium layout plans, and high-level structural durability pre-vetted for modern working elites.',
    highlight: 'RERA: RAA11515/240323'
  },
  {
    id: 'prop-panache',
    title: 'Panache',
    location: 'Ahmedabad, Vaishno Devi',
    price: '₹1.30 Cr - ₹1.80 Cr',
    numericPrice: 13000000,
    type: 'Residential',
    bhk: '3-4 BHK',
    size: '1,780 - 2,640 sq.ft.',
    features: ['Modular Italian Kitchens', 'Panoramic Sky Garden Access', 'Multi-layer Guard Patrols', 'High-Speed Capsule Lift', 'Secure Dual Carparking slots'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Brimming with visual elegance, Panache resides within Ahmedabad\'s most secure growth pocket near Vaishno Devi. Featuring bespoke architectural details, wide sliding glass doors, and cross-ventilation designed to keep interior temperatures naturally balanced.',
    highlight: 'RERA: MN330AA10230/310323'
  },
  {
    id: 'prop-sangath-smart-life',
    title: 'Sangath IPL Smart Life',
    location: 'GIFT City, Gandhinagar',
    price: '₹1.19 Cr - ₹2.90 Cr',
    numericPrice: 11900000,
    type: 'Residential',
    bhk: '2-3 BHK',
    size: '1,250 - 2,100 sq.ft.',
    features: ['Rooftop Integrated Solar Grids', 'Advanced App-Enabled Lightings', 'Organic Kitchen Gardens', 'Gas Leak Safety Shutoff Valve', '24/7 Water Filtration system'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Pioneering eco-friendly living with highly functional automation systems. Integrated smart-grid infrastructure ensures nominal electricity maintenance costs while keeping you structurally aligned with elite contemporary aesthetics.',
    highlight: 'RERA: MAA07381/250820'
  },
  {
    id: 'prop-shilp-north-sky',
    title: 'Shilp North Sky',
    location: 'GIFT City, Gandhinagar',
    price: '₹1.21 Cr - ₹4.33 Cr',
    numericPrice: 12100000,
    type: 'Residential',
    bhk: '2-3 BHK , 3 BHK Penthouse',
    size: '1,410 - 4,200 sq.ft.',
    features: ['Double Height Premium Penthouses', 'Infinity Edged Sunset Swimming Pool', 'Recreational Sports Court', 'Full Capacity Backup Power Generator', 'Fiber optic high-speed cabling'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Elevated lifestyle towers showcasing master-planned penthouse layout choices with direct access to private sky balconies overlooking GIFT City boulevard. Constructed securely using high-strength monolithic concrete layouts.',
    highlight: 'RERA: MAA11559/060423'
  },
  {
    id: 'prop-savvy-marina',
    title: 'Savvy Marina',
    location: 'GIFT City, Gandhinagar',
    price: '₹2.21 Cr - ₹5.52 Cr',
    numericPrice: 22100000,
    type: 'Residential',
    bhk: '2-3-4 BHK',
    size: '1,560 - 3,980 sq.ft.',
    features: ['Elite Riverside Promenade views', 'Exclusive Clubhouse Pass', 'Custom Designer Bath Fittings', 'Integrated Home Automation Console', 'Underground Central Valet System'],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Overlooking pristine canal views, Savvy Marina presents a bespoke waterfront enclave designed for Gandhinagar\'s next generation. Blends luxury leisure space layouts with high-yield capital protection profiles.',
    highlight: 'RERA: MAA11100/301222'
  },
  {
    id: 'prop-reva',
    title: 'Reva',
    location: 'GIFT City, Gandhinagar',
    price: '₹1.46 Cr - ₹4.50 Cr',
    numericPrice: 14600000,
    type: 'Residential',
    bhk: '1-2-3-4 BHK',
    size: '850 - 3,450 sq.ft.',
    features: ['Compact Smart Studio layouts', 'Centralized Climate Controls', 'Fully Integrated Gym & Spa', 'Executive Conference Lounges', 'Advanced Sprinkler Fire Suppression'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Reva boasts diverse custom configurations ranging from smart compact apartments to multi-generational family units. Positioned immediately near GIFT City’s international school and modern local hospital pipeline.',
    highlight: 'RERA: MN140AA10040/300722'
  },
  {
    id: 'prop-shashwat-evana',
    title: 'Shashwat Evana',
    location: 'Ahmedabad, Vaishno Devi',
    price: '₹1.92 Cr - ₹2.75 Cr',
    numericPrice: 19200000,
    type: 'Residential',
    bhk: '4-6 BHK',
    size: '2,800 - 5,100 sq.ft.',
    features: ['Exclusive Ultra-Spacious Layouts', 'Private Indoor Walk-in Wardrobes', 'Bespoke Italian Flooring Designs', 'Dedicated Double Height Puja Room', 'Full-home Smart Air Purification'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Offering unparalleled scale and status, Shashwat Evana houses high-exclusive multi-bedroom duplex and simplex layouts near Vaishno Devi circle. Tailored exclusively for buyers desiring supreme horizontal layouts.',
    highlight: 'RERA: MAA13021/220224/310327'
  },
  {
    id: 'prop-shivalik-curv',
    title: 'Shivalik Curv',
    location: 'GIFT City, Gandhinagar',
    price: '₹1.90 Cr - ₹13.68 Cr',
    numericPrice: 19000000,
    type: 'Commercial',
    bhk: 'Offices/Showrooms',
    size: '1,200 - 15,500 sq.ft.',
    features: ['Iconic Double-Curving Structural Glass', 'IFSCA Regulatory Compliant Corridor', 'Premium Retail Boulevard Frontage', 'State of the art HVAC Energy Air', 'Multi-gigabit Dual ISP Ring Grid'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Shivalik Curv stands as the landmark corporate emblem of GIFT City. Built to support multinational firms, top-tier banks, and premium global luxury brands desiring high-profile pedestrian retail visibility.',
    highlight: 'RERA: CAA12514/A1C/191124/311229'
  },
  {
    id: 'prop-shilp-centrica',
    title: 'Shilp Centrica',
    location: 'GIFT City, Gandhinagar',
    price: '₹1.83 Cr - ₹9.85 Cr',
    numericPrice: 18300000,
    type: 'Commercial',
    bhk: 'Offices/Showrooms',
    size: '1,050 - 11,200 sq.ft.',
    features: ['Triple-Height Entrance Canopy', 'Communal Video-Conference Rooms', 'LEED Gold pre-certification', 'Ample Corporate Covered Parking', 'Dedicated Server Room Ventilation'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Designed as the operational center gravity for growing local fintech start-ups and international consultancy firms. Crafted with sound-insulated windows and high-load power structures.',
    highlight: 'RERA: CAA12608/081123'
  },
  {
    id: 'prop-trogon-towers',
    title: 'Trogon Twin Towers',
    location: 'Ahmedabad, Vaishno Devi',
    price: '₹65 Lakhs - ₹2.34 Cr',
    numericPrice: 6500000,
    type: 'Commercial',
    bhk: 'Offices/Showrooms',
    size: '720 - 4,800 sq.ft.',
    features: ['Dual Twin Tower Skyline presence', 'High Ground Pedestrian Boulevards', 'Fast Access S.G. Highway Connection', 'Fully Vetted Fire Exit Corridors', 'Dedicated F&B Gas Outlets'],
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction',
    description: 'Trogon Twin Towers combines premium lifestyle retail displays on lower podium floors with Grade-A corporate suites above. Superb visual positioning right on the Vaishno Devi Circle nexus.',
    highlight: 'RERA: CAA12218/310823'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'serv-1',
    title: 'Residential Consultation & Buyer Representation',
    icon: 'Home',
    shortDesc: 'Unlock your dream living address with expert property verification and selection alignment.',
    fullDesc: 'We represent buyers in Ahmedabad’s premier corridors like Vaishnodevi Circle, S.G. Highway, and Science City. We filter through thousands of configurations to propose only vetted, premium, structurally sound apartments, townhouses, and royal villas.',
    points: ['Strict background check on developer financials & timeline commitments', 'Complete site facilitation at your convenience, inside air-conditioned coaches', 'Exclusive direct-deal allocations avoiding mid-brokerage markups', 'Layout optimization reviews based on Vastu principles']
  },
  {
    id: 'serv-2',
    title: 'GIFT City global SEZ / Investment Advisory',
    icon: 'Calculator',
    shortDesc: 'Capitalize on Ahmedabad and Gandhinagar’s financial zones with absolute tax ease and high yield returns.',
    fullDesc: 'As authorized property channel partners within GIFT City, we guide international conglomerates, startups, and private retail investors through the licensing, regulatory structure, and tax waivers to establish prime commercial footprints.',
    points: ['Explanation of tax benefits (No GST, Income Tax waiver parameters, Stamp duty exemptions)', 'Assurance of high-yield corporate Grade-A co-working and corporate spaces', 'Fractional or full commercial property acquisition paperwork advisory', 'Long term asset rental valuation reports and tenant procurement']
  },
  {
    id: 'serv-3',
    title: 'Strategic Corporate Tenant Leasing',
    icon: 'Building2',
    shortDesc: 'Custom matching for commercial landlords and corporate tenants seeking world class offices.',
    fullDesc: 'We assist landlords in maximizing rent returns by scouting multi-national corporations, tech firms, and prime national retail brands. We manage absolute documentation, commercial interior fit-out timelines, and complete site delivery handover.',
    points: ['Drafting standard 3-5-9 years corporate lease agreements', 'Tenant verification, security deposits escrow coordination', 'Commercial valuation calculations based on micro-market parameters', 'Custom workspace interior designing coordination']
  },
  {
    id: 'serv-4',
    title: 'End-to-End Home Loan & Documentation Aid',
    icon: 'FileText',
    shortDesc: 'Zero-fee facilitation of best loan rates from major national banks alongside legally robust paperwork.',
    fullDesc: 'Buying a property requires solid paperwork. We provide customized, complete legal support from drafting your agreement-to-sale to coordinating with sub-registrars. We also assist you in secure financing with elite lenders.',
    points: ['Pre-vetted file creation for lightning fast credit approvals', 'Direct tie-ups with SBI, HDFCBANK, ICICI, Axis Bank and LIC Housing Finance', 'Securing of preferential interest rates (Save up to 0.5% compared to walking in)', 'End to end deed drafts, digital stamp paper procurement, and registration assistance']
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Portfolio Advisor (GIFT City Corridor)',
    department: 'Investment Sales & Advisory',
    location: 'GIFT City Office',
    experience: '3 - 6 Years',
    salary: '₹6.0 Lakh - ₹12.0 Lakh Per Annum + High Performance Commission',
    type: 'Full-time',
    description: 'We are seeking an energetic Investment Advisor specialized in High Net Worth (HNW) client acquisitions. You will pitch premium commercial blocks, managed suites, and SEZ office properties in GIFT City Gandhinagar.',
    requirements: [
      'Proven background in closing premium commercial real estate (deals above ₹1 Cr)',
      'Excellent presentation skills with high financial literacy (ROI, Cap Rates, Yield models)',
      'Substantial regional contacts base in Gujarat and NRI corridors',
      'Graduate in Business Management, Finance, or Real Estate Sales'
    ]
  },
  {
    id: 'job-2',
    title: 'Residential Property Consultant',
    department: 'Residential Advisory Services',
    location: 'Vaishnodevi Circle H.O., Ahmedabad',
    experience: '1 - 3 Years',
    salary: '₹3.5 Lakh - ₹6.5 Lakh Per Annum + Monthly Performance Bonus',
    type: 'Full-time',
    description: 'Join our residential team! You will serve verified buyer leads, orchestrate site visits to premium properties near Vaishnodevi Circle, S.G. Highway and Gota, and consult clients on local developments and amenities.',
    requirements: [
      'Strong communication skills in both English, Hindi, and Gujarati',
      'Passionate about customer support and maintaining client relationships',
      'Must own a 2-wheeler/vehicle for client site-visit facilitation',
      'Previous experience in real estate, automotive, or hospitality sales'
    ]
  },
  {
    id: 'job-3',
    title: 'Independent Partner / Luxury Broker',
    department: 'Channel Partnerships Network',
    location: 'Ahmedabad & Gandhinagar Region',
    experience: 'No barrier',
    salary: 'Industry Leading High Split Commissions (Up to 75% payout structure)',
    type: 'Commission-based',
    description: 'Looking to double your lifestyle earnings? Join our elite broker partner umbrella network. Use our state-of-the-art office infrastructure, pre-vetted marketing collateral, exclusive direct developer inventories, and RERA licensing.',
    requirements: [
      'Self-driven entrepreneurial spirit with high luxury real estate interest',
      'Ethics-driven client representation with transparent disclosures',
      'Ability to coordinate and complete professional deals independently',
      'Active network of investment searchers'
    ]
  }
];

export const FAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the total cost of the property including all hidden charges?',
    answer: 'The total acquisition cost of any property is more than the base carpet rate. It is comprised of: 1) Base Price, 2) GST (applicable to under-construction properties: 1% for affordable, 5% for luxury), 3) Stamp Duty (typically 4.9% of Jantri value for Gujarat), 4) Registration Charges (1% of property value or government cap), 5) One-time Maintenance deposits, 6) Electric connection & Legal charges, and 7) Local corporate society deposit. We present a transparent, fully itemized cost worksheet prior to booking, so you will see exactly where every rupee goes without surprises.'
  },
  {
    id: 'faq-2',
    question: 'What crucial documents should I check before buying a property?',
    answer: 'At The Real Estates, we pre-vet all our property collections. On your behalf, we double-check: 1) The Title Deed (verifying clear ownership history for the last 30 years), 2) RERA Registration Certificate (confirming adherence to project details and timeline covenants under Gujarat RERA), 3) Approved Layout Plan by AUDA or VUDA, 4) Non-Agricultural (NA) Land Conversion Certificate, and 5) Encumbrance Certificate. We provide our clients with copies of these documents verified by legal advisors prior to booking.'
  },
  {
    id: 'faq-3',
    question: 'Can I get a home or commercial loan for property?',
    answer: 'Absolutely. We have long-term direct integrations with leading public and private sector banks in India, including SBI, HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra. Because we maintain pre-approved files for the majority of top-tier residential and commercial properties in Vaishnodevi Circle and GIFT City, we often facilitate sanction approvals within 4-7 business days at preferential interest rates.'
  },
  {
    id: 'faq-4',
    question: 'Will you help with the lengthy paperwork and local registrar registration?',
    answer: 'Yes! That is our signature guarantee. We handle the entire legwork. Our specialized in-house compliance desk takes care of: 1) Drafting the standard Agreement-to-Sale, 2) Procurement of digital non-judicial stamp paper, 3) Coordinating appointments at the Sub-Registrar’s Office (SRO), 4) Guiding buyer and seller signatures/biometrics in person, and 5) Facilitating secure document handovers. You do not have to struggle in complex queues; we handle everything.'
  },
  {
    id: 'faq-5',
    question: 'What is the resale or rental potential of properties near Vaishnodevi and GIFT City?',
    answer: 'Ahmedabad’s growth vector is moving north-west and north-east towards the GIFT corridor. Properties near Vaishnodevi Circle enjoy solid year-on-year capital appreciation of 8-12% due to excellent outer-ring-road access, metro linkage, and proximity to major IT/healthcare complexes. On the other hand, commercial properties in GIFT City offer unprecedented rental yield potentials of 7-9.5% per annum alongside solid capital appreciation driven by tax holidays, foreign investment inflows, and strict infrastructural regulations.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dhaval Patel',
    role: 'Managing Director, Patel Agro Industries',
    text: 'Acquiring our luxury flat at Vaishnodevi Circle through the team was seamless. They took care of 100% of the AUDA documentation research, negotiated with developers in a secure manner, and got us 0.4% lower interest rates at HDFC Bank. Truly Ahmedabad’s most professional realtors.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Ananya Sharma',
    role: 'Director of Operations, FinEdge Global SEZ',
    text: 'Highly recommend their GIFT City investment desk. If you want to acquire prime commercial pre-leased offices from afar, they are the trusted boots on the ground who coordinate registration, title work, and monthly lease collections with high integrity and speed.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Rahul Mehta',
    role: 'Senior Software Architect & NRI Investor',
    text: 'As an NRI living in Sydney, real estate deals in India can feel complicated and risky. The Real Estates team kept me updated via dynamic WhatsApp updates and video site-visits. They compiled the legal stamp paperwork perfectly in my absence. Genuine transparency and unmatched care.',
    rating: 5
  }
];
