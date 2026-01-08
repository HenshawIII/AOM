import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { ctaTexts, clients } from "@/lib/constants";
import type { HeroSlide } from "@/components/Hero";
import Image from "next/image";

const heroSlides: HeroSlide[] = [
  {
    title: "Our Clients",
    subtitle: "Trusted by leading businesses across industries.",
  },
];

export default function Clients() {
  return (
    <>
      <Hero slides={heroSlides} />

      {/* Clients Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Trusted Partners
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We're proud to work with leading businesses across real estate, logistics, and petrochemical industries.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in working with us?"
        description="Join our growing list of satisfied clients."
        ctaText={ctaTexts.requestQuote}
        ctaHref="/contact"
      />
    </>
  );
}

