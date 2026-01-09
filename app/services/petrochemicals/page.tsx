import CTASection from "@/components/CTASection";
import { ctaTexts } from "@/lib/constants";
import Image from "next/image";

export default function Petrochemicals() {
  const products = ["PMS", "AGO (Diesel)", "LPFO", "Ethanol"];

  return (
    <>
      {/* Custom Hero Section */}
      <section className="relative h-[50vh] min-h-[500px] flex items-center justify-start! overflow-hidden">
        {/* Red Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E3192E] via-[#ae3541] to-[#E3192E]">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Left Image Panel */}
        <div className="absolute left-0 bottom-0 w-1/6 hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/petro.avif"
              alt="AOM Industries Petrochemicals"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="absolute right-0 bottom-0 w-1/6 hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/industry.avif"
              alt="AOM Industries Petrochemicals"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Centered Content */}
        <div className="z-10 max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h3 className="text-white! text-lg md:text-xl border-b-2 border-white font-medium relative inline-block pb-3">
              Petrochemicals
            </h3>
          </div>

          {/* Main Headline */}
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white! leading-tight lg:max-w-[70%]">
              Reliable supply for commercial and industrial needs
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              We supply petrochemical products with structured order processing, delivery coordination, and clear communication on timelines and availability. Our petrochemical supply services provide consistent access to high-quality energy products for commercial and industrial operations across Nigeria.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              We maintain reliable supply chains for Premium Motor Spirit (PMS), Automotive Gas Oil (AGO/Diesel), Low Pour Fuel Oil (LPFO), and Ethanol, ensuring your operations never face interruptions due to fuel shortages. Our structured approach includes inventory management, quality assurance, and timely delivery coordination.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              When you place an order, we confirm product availability, provide transparent pricing, and schedule delivery according to your timeline. We handle all coordination with suppliers and transportation partners, keeping you informed throughout the process. Our commitment to safety and compliance ensures all products meet industry standards and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Products We Supply */}
      <section className="py-16 bg-[#f5f7f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Products We Supply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product}
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200"
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

      <CTASection
        title="Need petrochemical supply?"
        description="Tell us what you need and we'll respond with a clear plan and quote."
        ctaText={ctaTexts.requestSupply}
        ctaHref="/contact"
        backgroundImage="/petro.avif"
      />
    </>
  );
}
