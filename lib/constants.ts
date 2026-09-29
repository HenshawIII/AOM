export type NavigationItem = {
  label: string;
  href: string;
  dropdown?: Array<{ label: string; href: string }>;
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Our Businesses", 
    href: "/services",
    dropdown: [
      { label: "Energy", href: "/services/petrochemicals" },
      { label: "Logistics", href: "/services/logistics" },
      { label: "Real Estate", href: "/services/real-estate" },
     
    ]
  },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const services = {
  logistics: {
    title: "Logistics",
    description: "Specialised energy, solid-mineral and heavy-duty transportation services, ensuring safe, timely and accountable delivery with real-time tracking and clear operational updates.",
    href: "/services/logistics",
    image: "/AOM2.jpeg",
    features: [
      "Energy-Product Logistics (Jet A1, AGO, PMS)",
      "Solid-Mineral & Quarry-Aggregate Haulage",
      "Industrial Cargo Transportation",
      "Warehousing, Storage & Delivery Tracking",
    ],
  },
  petrochemicals: {
    title: "Energy",
    description: "Reliable supply and distribution services for petroleum and energy products, ensuring safe handling, efficient transportation and timely delivery to aviation, industrial and commercial customers.",
    href: "/services/petrochemicals",
    image: "/AOM1.jpeg",
    features: [
      "Jet A1 Supply & Logistics",
      "PMS Supply & Distribution",
      "AGO (Diesel) Supply & Delivery",
      "LPFO & Petroleum Tanker Haulage",
    ],
  },
  realEstate: {
    title: "Real Estate",
    description: "Comprehensive real estate, construction-support and property-management services, from acquisition and carcass-stage off-take through completion, occupancy and ongoing management.",
    href: "/services/real-estate",
    image: "/aom3.jpeg",
    features: [
      "Property Sales, Acquisitions & Rentals",
      "Carcass-Stage Off-Take & Construction Support",
      "Building-Material & Marine Board Supply",
      "Valuation, Investment Consulting & Facility Management",
    ],
  }
 
};

export const whyAOMFeatures = [
  "Clear timelines and delivery updates",
  "Transparent documentation and process",
  "Professional, reliable operations",
];

export const howItWorksSteps = [
  {
    number: 1,
    title: "Request",
    description: "tell us what you need (service, location, timeline).",
  },
  {
    number: 2,
    title: "Quote",
    description: "we send pricing and requirements.",
  },
  {
    number: 3,
    title: "Execution",
    description: "we deliver with structured updates.",
  },
  {
    number: 4,
    title: "Confirmation",
    description: "proof of delivery / completion and wrap-up.",
  },
];

export const contactInfo = {
  phone: "+234 911 555 0097",
  whatsapp: "[add number]",
  email: "info@aomindustries.com",
  address: "[add address]",
  instagram: "https://www.instagram.com/aom_industries/",
};

export const ctaTexts = {
  requestQuote: "Request a Quote",
  speakToUs: "Speak to Us",
  bookDelivery: "Book a Delivery",
  requestSupply: "Request Product Supply",
  discussProperty: "Discuss a Property Need",
  requestReferences: "Request References / Case Notes",
};

export const stats = [
  {
    number: "5M+",
    description: "Over 5 million litres of petroleum products delivered annually",
  },
  {
    number: "5+",
    description: "With over 5 years experience across industries",
  },
  {
    number: "15+",
    description: "Over 15 properties developed nationwide",
  },
];

export const clients = [
  { name: "Midas", logo: "/MIDAI.png" },
  { name: "Afloat", logo: "/AFLOAT.png" },
  { name: "Ibwas", logo: "/IBWA.png" },
  { name: "Nepal", logo: "/NEPA.png" },
  { name: "Lafarge", logo: "/LAFARG.png" },
 
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Akinyemi Oluwafemi",
    role: "Founder/Managing Director",
    image: "/Femi.jpeg",
    linkedinUrl: "https://linkedin.com/in/mike-jones",
  },
  {
    name: "Akinyemi Aminat",
    role: "Procurement Officer",
    image: "/iyawoFemi.png",
    linkedinUrl: "https://linkedin.com/in/emily-carter",
  },
  {
    name: "Henshaw Immanuel",
    role: "Chief Technology Officer",
    image: "/cTn.png",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
  },
  {
    name: "Ogunwole Iyanuoluwa",
    role: "Chief Finance Officer",
    image: "",
  },
  {
    name: "Afeaye Ernest",  
    role: "Logistics Officer",
    image: "/MrLo.png",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
  },
];

