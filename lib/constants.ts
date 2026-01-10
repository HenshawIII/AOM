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
      { label: "Logistics", href: "/services/logistics" },
      { label: "Petrochemicals", href: "/services/petrochemicals" },
      { label: "Real Estate", href: "/services/real-estate" },
     
    ]
  },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const services = {
  logistics: {
    title: "Logistics",
    description: "Specialized solid mineral haulage and heavy-duty transportation services with planned and timely movement, clear updates, and accountable delivery.",
    href: "/services/logistics",
    image: "/industry.avif",
    features: [
      "Solid Mineral Haulage & Transportation",
      "Heavy-Duty Cargo Movement",
      "Warehouse & Storage Solutions",
      "Delivery Tracking & Updates",
    ],
  },
  petrochemicals: {
    title: "Petrochemical Supply & Haulage",
    description: "Specialized petrochemical haulage and distribution services for PMS, AGO, LPFO, and Ethanol, ensuring safe and efficient transportation.",
    href: "/services/petrochemicals",
    image: "/petro.avif",
    features: [
      "Petrochemical Haulage & Transportation",
      "PMS Supply & Distribution",
      "AGO (Diesel) Haulage & Delivery",
      "LPFO & Industrial Fuel Transportation",
    ],
  },
  realEstate: {
    title: "Real Estate",
    description: "Property sales, leasing, management, and advisory—handled professionally from inspection to closing.",
    href: "/services/real-estate",
    image: "/real3.avif",
    features: [
      "Property Sales & Acquisition",
      "Leasing & Tenant Management",
      "Property Valuation & Advisory",
      "Real Estate Investment Consulting",
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
    number: "100+",
    description: "We supply over 100 tonnes of petrochemicals annually",
  },
  {
    number: "5+",
    description: "With over 5 years experience across industries",
  },
  {
    number: "30+",
    description: "Over 30 properties developed nation wide",
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
    name: "Afeaye Ernest",  
    role: "Logistics Officer",
    image: "/MrLo.png",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
  },
];

