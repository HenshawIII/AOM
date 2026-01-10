import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import WhyAOM from "@/components/WhyAOM";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Stats from "@/components/Stats";
import { services, ctaTexts, stats } from "@/lib/constants";
import type { HeroSlide } from "@/components/Hero";

const heroSlides: HeroSlide[] = [
  {
    title: "AOM Industries",
    subtitle: "Logistics • Petrochemical Supply • Real Estate",
    description: "We provide dependable services across property, transportation, and energy products—built on safety, speed, and clear communication.",
    primaryCTA: {
      text: ctaTexts.requestQuote,
      href: "/contact",
    },
    secondaryCTA: {
      text: ctaTexts.speakToUs,
      href: "/contact",
    },
    backgroundImage: "/industry.avif",
  },
  {
    title: "Built for Execution",
    subtitle: "Reliable • Professional • Efficient",
    description: "We operate with structured processes, responsive communication, and a safety-first mindset—so you can plan confidently and get results without delays.",
    primaryCTA: {
      text: ctaTexts.requestQuote,
      href: "/contact",
    },
    secondaryCTA: {
      text: "Learn More",
      href: "/about",
    },
    backgroundImage: "/petro.avif", // Replace with your second image
  },
  {
    title: "Your Trusted Partner",
    subtitle: "Safety • Speed • Clear Communication",
    description: "Clear timelines, transparent documentation, and professional operations across real estate, logistics, and petrochemical supply.",
    primaryCTA: {
      text: ctaTexts.requestQuote,
      href: "/contact",
    },
    secondaryCTA: {
      text: "Our Services",
      href: "/services",
    },
    backgroundImage: "/real3.avif", // Replace with your third image
  },
];

export default function Home() {
  return (
    <>
      <Hero slides={heroSlides} autoPlayInterval={12000} />

      {/* Service Highlights */}
      <section className="py-16 bg-[#f5f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Text Section */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            {/* Small Heading with Underline */}
            <div className="mb-4">
              <h3 className="text-sm font-medium uppercase tracking-wide inline-block mb-2 pb-2 border-b-2 border-[#E3192E]">
                Our services
              </h3>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Comprehensive solutions for your business needs
            </h2>

            {/* Description Paragraph */}
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Our services provide high-quality solutions across real estate, logistics, and petrochemical supply, designed to keep your operations running smoothly and efficiently.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
              title={services.logistics.title}
              description={services.logistics.description}
              href={services.logistics.href}
              image={services.logistics.image}
              features={services.logistics.features}
            />
            <ServiceCard
              title={services.petrochemicals.title}
              description={services.petrochemicals.description}
              href={services.petrochemicals.href}
              image={services.petrochemicals.image}
              features={services.petrochemicals.features}
            />
            <ServiceCard
              title={services.realEstate.title}
              description={services.realEstate.description}
              href={services.realEstate.href}
              image={services.realEstate.image}
              features={services.realEstate.features}
            />
            
          </div>
        </div>
      </section>


      {/* Why AOM */}
      <WhyAOM />

      
      {/* Stats Section */}
      <Stats stats={stats} />

      {/* HSE / Safety Section */}
      <HowItWorks centerImage="/lgo.svg" centerImageAlt="AOM Industries Logo" />

      {/* CTA Strip */}
      <CTASection
        title="Ready to get started?"
        description="Tell us what you need and we'll respond with a clear plan and quote."
        ctaText={ctaTexts.requestQuote}
        ctaHref="/contact"
        backgroundImage="/office.png"
      />
    </>
  );
}
