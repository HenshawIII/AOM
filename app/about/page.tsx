import CTASection from "@/components/CTASection";
import TeamSlider from "@/components/TeamSlider";
import { ctaTexts, teamMembers } from "@/lib/constants";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Custom Hero Section */}
      <section className="relative h-[50vh] min-h-[500px] flex items-center justify-start! overflow-hidden">
        {/* Dark Green Gradient Background */}
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
        <div className="z-10 max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8  ">
       
          <div className="mb-6">
            <h3 className="text-white! text-lg md:text-xl border-b-2 border-white font-medium relative inline-block pb-3">
              About Us
              
            </h3>
          </div>

          {/* Main Headline */}
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white! leading-tight lg:max-w-[70%]">
            Multi-industry services built on reliability,safety and clear communication.
            </h1>
          </div>
        </div>
      </section>

      {/* About Body */}
      <section className="py-16 bg-[#F5F7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-5xl">
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Founded in 2010 in Nigeria, AOM Industries has grown from a local operation to a trusted multi-industry service provider. Over the years, we have built a reputation for excellence across real estate, logistics, and petrochemical sales & supply. Our commitment to dependable delivery, professional service, and a straightforward process from first contact to final confirmation has been the cornerstone of our success.
            </p>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We work with individuals and businesses that value structure, accountability, and timely execution. Our deep understanding of the Nigerian market, combined with international best practices, allows us to deliver solutions that are both locally relevant and globally competitive.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              With over a decade of experience, we have established strong relationships with clients, suppliers, and partners across various sectors. Our team brings together expertise in property management, transportation logistics, and energy supply, ensuring that every project is handled with the professionalism and attention to detail our clients expect.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16" style={{ backgroundColor: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12 lg:mb-16">
            {/* What we do subtitle with wavy underline */}
            <div className="mb-4">
              <h3 className="text-sm font-medium relative inline-block border-b-2 border-[#E3192E] pb-2" style={{ color: 'var(--text-primary)' }}>
                What we do
                
              </h3>
            </div>
            {/* Main Title */}
            <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-3xl" style={{ color: 'var(--text-primary)' }}>
              Dedicated to Excellence Across Industries
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 01 - Real Estate */}
            <div className="relative">
              <div className="flex items-start gap-6">
                {/* Large Number */}
                <div className="shrink-0">
                  <span className="text-8xl md:text-9xl font-bold leading-none" style={{ color: '#efdee0' }}>
                    01
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Real Estate
                  </h3>
                  <p className="text-base md:text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
                    We provide comprehensive real estate services including property sales, leasing, management, and advisory. Our team handles everything from property inspection to closing, ensuring a smooth and professional experience for buyers, sellers, and tenants.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 02 - Logistics */}
            <div className="relative">
              <div className="flex items-start gap-6">
                {/* Large Number */}
                <div className="shrink-0">
                  <span className="text-8xl md:text-9xl font-bold leading-none" style={{ color: '#efdee0' }}>
                    02
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Logistics & Transportation
                  </h3>
                  <p className="text-base md:text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
                    Our logistics services ensure timely and secure delivery of goods across Nigeria. We manage transportation, warehousing, and distribution with a focus on efficiency, safety, and reliability to keep your operations running smoothly.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 03 - Petrochemicals */}
            <div className="relative">
              <div className="flex items-start gap-6">
                {/* Large Number */}
                <div className="shrink-0">
                  <span className="text-8xl md:text-9xl font-bold leading-none" style={{ color: '#efdee0' }}>
                    03
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Petrochemical Supply
                  </h3>
                  <p className="text-base md:text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
                    We supply high-quality petrochemical products for commercial and industrial needs. Our reliable supply chain and commitment to safety ensure consistent access to energy products, helping businesses maintain their operations without interruption.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 04 - Consultation */}
            <div className="relative">
              <div className="flex items-start gap-6">
                {/* Large Number */}
                <div className="shrink-0">
                  <span className="text-8xl md:text-9xl font-bold leading-none" style={{ color: '#efdee0' }}>
                    04
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Business Consultation
                  </h3>
                  <p className="text-base md:text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
                    Our expert consultants provide strategic advice and solutions tailored to your business needs. Whether you're looking to invest in real estate, optimize your supply chain, or navigate the petrochemical market, we offer insights and guidance to help you make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSlider members={teamMembers} />

      {/* Mission & Values */}
      <section className="py-16" style={{ backgroundColor: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12 text-center">
            {/* Why choose us subtitle with underline */}
            <div className="mb-4">
              <h3 className="text-sm font-medium relative inline-block pb-2 border-b-2 border-[#E3192E]" style={{ color: 'var(--text-primary)' }}>
                Why choose us
              </h3>
            </div>
            {/* Mission Statement */}
            <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-4xl mx-auto" style={{ color: 'var(--text-primary)' }}>
              Our mission is to deliver dependable services that help clients move faster with less friction
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Comprehensive Approach */}
            <div className="bg-white/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: '#d1fae5' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Comprehensive approach
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We cover all aspects of real estate, logistics, and petrochemical supply, ensuring efficiency and quality at every stage from initial contact to final delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Environmental Responsibility */}
            <div className="bg-white/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: '#d1fae5' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.944 11.944 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Environmental responsibility
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Committed to sustainability, we implement eco-conscious practices, minimize waste, and promote green initiatives to protect the environment for future generations.
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Standards */}
            <div className="bg-white/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: '#d1fae5' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 010-3.586l4.94-4.94a2.548 2.548 0 013.586 0l4.94 4.94a2.548 2.548 0 010 3.586l-5.653 4.655z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Modern standards
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Equipped with cutting-edge technology and advanced processes, we deliver fast, reliable, and efficient solutions tailored to meet modern industry standards and client expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional team */}
            <div className="bg-white/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: '#d1fae5' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21a11.944 11.944 0 01-8.11-5.999 12.075 12.075 0 01-.665-6.239A3 3 0 004.682 15.72m.94 3.198A9.094 9.094 0 0112 21.75c2.34 0 4.518-.741 6.06-2.03m-6.06 0a9.011 9.011 0 01-1.5-1.5m6.06 0a9.011 9.011 0 001.5-1.5M15 18.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Professional team
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Our skilled and experienced team works diligently to ensure every task is completed with precision, meeting the highest safety expectations and delivering exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        description="Tell us what you need and we'll respond with a clear plan and quote."
        ctaText={ctaTexts.requestQuote}
        ctaHref="/contact"
        backgroundImage="/aboutimage.png"
      />
    </>
  );
}

