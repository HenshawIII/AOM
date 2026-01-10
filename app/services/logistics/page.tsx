import CTASection from "@/components/CTASection";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { ctaTexts } from "@/lib/constants";
import Image from "next/image";

export default function Logistics() {
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
        {/* <div className="absolute left-0 bottom-0 w-1/6 hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/industry.avif"
              alt="AOM Industries Logistics"
              fill
              className="object-cover"
            />
          </div>
        </div> */}

        {/* Right Image Panel */}
        {/* <div className="absolute right-0 bottom-0 w-1/6 hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/petro.avif"
              alt="AOM Industries Logistics"
              fill
              className="object-cover"
            />
          </div>
        </div> */}

        {/* Centered Content */}
        <div className="z-10 max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <FadeInOnScroll direction="up" delay={0.1}>
            <h3 className="text-white! text-lg md:text-xl border-b-2 border-white font-medium relative inline-block pb-3">
              Logistics
            </h3>
            </FadeInOnScroll>
          </div>

          {/* Main Headline */}
          <div className="w-full">
            <FadeInOnScroll delay={0.2} direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white! leading-tight lg:max-w-[70%]">
              Moving goods with speed, care, and clear delivery updates
            </h1>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <FadeInOnScroll direction="up" delay={0.2}>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              We provide logistics support designed for reliability—planned timelines, structured operations, and responsive communication. Our logistics services ensure that your goods are transported safely, efficiently, and on schedule across Nigeria, with clear updates throughout the delivery process.
            </p>
            </FadeInOnScroll>
            <FadeInOnScroll direction="up" delay={0.3}>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              From initial planning and route optimization to final delivery confirmation, we manage every aspect of your logistics needs. Our team coordinates pickup schedules, tracks shipments in transit, and provides proof of delivery documentation. We work with reliable transportation partners and maintain strict safety standards to ensure your cargo arrives in perfect condition.
            </p>
            </FadeInOnScroll>
            <FadeInOnScroll direction="up" delay={0.4}>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Whether you need local deliveries within a city or regional transportation across states, we plan routes carefully, communicate proactively, and deliver with accountability. Our structured approach means you always know where your shipment is and when it will arrive.
            </p>
            </FadeInOnScroll>

          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-[#f5f7f0]">
        <FadeInOnScroll delay={0.2} direction="left">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            What We Offer
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 shrink-0 mt-1"
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
                className="w-6 h-6 mr-3 shrink-0 mt-1"
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
                Local and regional haulage support
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 shrink-0 mt-1"
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
                className="w-6 h-6 mr-3 shrink-0 mt-1"
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
        </FadeInOnScroll>
      </section>

      <CTASection
        title="Ready to book a delivery?"
        description="Tell us what you need and we'll respond with a clear plan and quote."
        ctaText={ctaTexts.bookDelivery}
        ctaHref="/contact"
        backgroundImage="/industry.avif"
      />
    </>
  );
}
