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
      { label: "Real Estate", href: "/services/real-estate" },
      { label: "Logistics", href: "/services/logistics" },
      { label: "Petrochemicals", href: "/services/petrochemicals" },
    ]
  },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const services = {
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
  },
  logistics: {
    title: "Logistics",
    description: "Planned and timely movement of goods with clear updates and accountable delivery.",
    href: "/services/logistics",
    image: "/industry.avif",
    features: [
      "Freight & Cargo Transportation",
      "Warehouse & Storage Solutions",
      "Supply Chain Management",
      "Delivery Tracking & Updates",
    ],
  },
  petrochemicals: {
    title: "Petrochemical Sales & Supply",
    description: "Supply of PMS, AGO, LPFO, and Ethanol for commercial and industrial needs.",
    href: "/services/petrochemicals",
    image: "/petro.avif",
    features: [
      "PMS (Premium Motor Spirit) Supply",
      "AGO (Diesel) Distribution",
      "LPFO & Industrial Fuels",
      "Ethanol & Specialty Products",
    ],
  },
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
    number: "500+",
    description: "We supply over 500 tonnes of petrochemicals annually",
  },
  {
    number: "10+",
    description: "With over 10 years experience across industries",
  },
  {
    number: "50+",
    description: "Over 50 properties nation wide in our portfolio",
  },
];

export const clients = [
  { name: "Midas", logo: "/MIDASII.png" },
  { name: "Afloat", logo: "/AFLOAT.png" },
  { name: "Ibwas", logo: "/IBWAS.jpg" },
  { name: "Nepal", logo: "/NEPAL.JPG" },
  { name: "Lafarge", logo: "/LAFARGE.png" },
 
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
    name: "Iyawo Akinyemi",
    role: "Procurement Officer",
    image: "/iyawoFemi.png",
    linkedinUrl: "https://linkedin.com/in/emily-carter",
  },
  {
    name: "Henshaw Immanuel",
    role: "Chief Financial Officer",
    image: "/Henshaws.png",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
  },
  {
    name: "Oluwaseyi Ajayi",  
    role: "Logistics Officer",
    image: "/MrLog.png",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
  },
];

