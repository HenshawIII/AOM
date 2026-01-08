import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { ctaTexts } from "@/lib/constants";
import type { HeroSlide } from "@/components/Hero";

const heroSlides: HeroSlide[] = [
  {
    title: "Petrochemical Sales & Supply",
    subtitle: "Reliable supply for commercial and industrial needs.",
  },
];

export default function Petrochemicals() {
  const products = ["PMS", "AGO (Diesel)", "LPFO", "Ethanol"];

  return (
    <>
      <Hero slides={heroSlides} />

      {/* Products We Supply */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Products We Supply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <svg
                  className="w-6 h-6 mr-3"
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
                <span className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                  {product}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We supply petrochemical products with structured order processing,
            delivery coordination, and clear communication on timelines and
            availability.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Process
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}>
                1
              </div>
              <p className="text-lg pt-1" style={{ color: 'var(--text-secondary)' }}>
                Share product type, quantity, and location
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}>
                2
              </div>
              <p className="text-lg pt-1" style={{ color: 'var(--text-secondary)' }}>
                We confirm availability and send a quote
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}>
                3
              </div>
              <p className="text-lg pt-1" style={{ color: 'var(--text-secondary)' }}>
                Delivery is scheduled and executed
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}>
                4
              </div>
              <p className="text-lg pt-1" style={{ color: 'var(--text-secondary)' }}>
                Confirmation and documentation (as required)
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need petrochemical supply?"
        ctaText={ctaTexts.requestSupply}
        ctaHref="/contact"
      />
    </>
  );
}

