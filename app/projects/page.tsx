import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { ctaTexts } from "@/lib/constants";
import type { HeroSlide } from "@/components/Hero";

const heroSlides: HeroSlide[] = [
  {
    title: "Projects & Deliveries",
    subtitle: "A snapshot of work completed and service execution.",
  },
];

export default function Projects() {
  return (
    <>
      <Hero slides={heroSlides} />

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We support clients across multiple industries. For privacy and
              commercial reasons, some engagements are shared only on request.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to learn more about our work?"
        ctaText={ctaTexts.requestReferences}
        ctaHref="/contact"
      />
    </>
  );
}

