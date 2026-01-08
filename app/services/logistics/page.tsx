import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { ctaTexts } from "@/lib/constants";
import type { HeroSlide } from "@/components/Hero";

const heroSlides: HeroSlide[] = [
  {
    title: "Logistics Services",
    subtitle: "Moving goods with speed, care, and clear delivery updates.",
  },
];

export default function Logistics() {
  return (
    <>
      <Hero slides={heroSlides} />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We provide logistics support designed for reliability—planned
            timelines, structured operations, and responsive communication.
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
                Delivery planning and scheduling
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
                Local / regional haulage support (based on route availability)
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
                Proof of delivery and confirmation
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
                Business logistics support and coordination
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            What You Can Expect
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
                Clear pickup and delivery timing
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
                Delivery updates during transit
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
                Professional handling and accountability
              </span>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        title="Ready to book a delivery?"
        ctaText={ctaTexts.bookDelivery}
        ctaHref="/contact"
      />
    </>
  );
}

