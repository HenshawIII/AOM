import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services, ctaTexts } from "@/lib/constants";
import Image from "next/image";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Services() {
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
              src="/industry.avif"
              alt="AOM Industries Operations"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="absolute right-0 bottom-0 w-1/6 hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/real3.avif"
              alt="AOM Industries Operations"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Centered Content */}
        <div className="z-10 max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll direction="up" delay={0.1}>
          <div className="mb-6">
            <h3 className="text-white! text-lg md:text-xl border-b-2 border-white font-medium relative inline-block pb-3">
              Our Services
            </h3>
          </div>
          </FadeInOnScroll> 
          {/* Main Headline */}
          <FadeInOnScroll direction="up" delay={0.2}>
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white! leading-tight lg:max-w-[70%]">
              Three core service areas designed for real-world execution
            </h1>
          </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <FadeInOnScroll direction="up" delay={0.3}>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Choose the service you need. We'll confirm requirements, share a quote, and execute with clear updates. Our approach is straightforward: you tell us what you need, we provide a clear plan and pricing, and we deliver with structured communication throughout the process.
            </p>
            </FadeInOnScroll>
            <FadeInOnScroll direction="up" delay={0.2}>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Whether you're looking for property solutions, reliable logistics support, or consistent petrochemical supply, we operate with the same principles: structured processes, responsive communication, and dependable execution. Our team brings expertise across all three service areas, ensuring you get professional support tailored to your specific needs.
            </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-[#f5f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          
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

      
      <CTASection
        title="Need a quote?"
        description="Tell us what you need and we'll respond with a clear plan and quote."
        ctaText={ctaTexts.requestQuote}
        ctaHref="/contact"
        backgroundImage="/office.avif"
      />
    
    </>
  );
}
