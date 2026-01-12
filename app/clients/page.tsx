import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FadeInOnScroll from "@/components/FadeInOnScroll";
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
  

      {/* Clients Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Trusted Partners
              </h2>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                We're proud to work with leading businesses across logistics, petrochemical, and real estate industries.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-12">
            {clients.map((client, index) => (
              <FadeInOnScroll
                key={index}
                direction="up"
                delay={index * 0.1}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        description="Join our growing list of satisfied clients."
        ctaText={ctaTexts.requestQuote}
        ctaHref="/contact"
        backgroundImage="/aboutimage.png"
      />
    </>
  );
}

