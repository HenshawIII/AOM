import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services, ctaTexts } from "@/lib/constants";
import type { HeroSlide } from "@/components/Hero";

const heroSlides: HeroSlide[] = [
  {
    title: "Our Services",
    subtitle: "Three core service areas designed for real-world execution.",
  },
];

export default function Services() {
  return (
    <>
      <Hero slides={heroSlides} />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-md text-center leading-normal" style={{ color: 'var(--text-secondary)' }}>
            Choose the service you need. We'll confirm requirements, share a
            quote, and execute with clear updates.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-16 bg-[#f5f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title={services.realEstate.title}
              description={services.realEstate.description}
              href={services.realEstate.href}
              image={services.realEstate.image}
              features={services.realEstate.features}
            />
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
          </div>
        </div>
      </section>

      <CTASection
        title="Need a quote?"
        ctaText={ctaTexts.requestQuote}
        ctaHref="/contact"
      />
    </>
  );
}
