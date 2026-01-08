import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { ctaTexts } from "@/lib/constants";
import type { HeroSlide } from "@/components/Hero";

const heroSlides: HeroSlide[] = [
  {
    title: "Real Estate Services",
    subtitle: "Property solutions you can trust—from sourcing to closing.",
  },
];

export default function RealEstate() {
  return (
    <>
      <Hero slides={heroSlides} />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We support clients with real estate transactions and property needs
            through a structured, professional process.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            What We Offer
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 flex-shrink-0 mt-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: 'var(--accent)' }}
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Property sales & acquisitions
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 flex-shrink-0 mt-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: 'var(--accent)' }}
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Leasing support
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 flex-shrink-0 mt-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: 'var(--accent)' }}
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Property management support (if applicable)
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 flex-shrink-0 mt-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: 'var(--accent)' }}
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Property inspections and site visits
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 flex-shrink-0 mt-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: 'var(--accent)' }}
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Advisory and transaction support
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            How We Work
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Share your property need and location. We'll review, advise on next
            steps, and handle the process professionally—keeping communication
            clear throughout.
          </p>
        </div>
      </section>

      <CTASection
        title="Have a property need?"
        ctaText={ctaTexts.discussProperty}
        ctaHref="/contact"
      />
    </>
  );
}

