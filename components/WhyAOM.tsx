import Link from "next/link";
import Image from "next/image";

export default function WhyAOM() {
  return (
    <section className="py-16 lg:pb-32" style={{ backgroundColor: '#f5f7f0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6 text-center lg:text-left ">
            {/* Small Heading with Underline */}
            <div className="text-center lg:text-left">
              <h3 className="text-sm font-medium uppercase tracking-wide w-fit mx-auto lg:mx-0 mb-2 pb-2 border-b-2 border-[#E3192E]">
                Why choose us
              </h3>
              
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
              With us, your business becomes more efficient, reliable, and successful
            </h2>

            {/* Paragraph 1 */}
            <p className="text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
              We specialize in providing comprehensive logistics, petrochemical supply, and real estate services, designed to keep your operations running smoothly, efficiently, and with complete transparency.
            </p>

            {/* Paragraph 2 */}
            <p className="text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
              Our services provide high-quality solutions, ranging from timely logistics delivery to reliable energy product supply to property management and sales for commercial and industrial needs.
            </p>

            {/* CTA Button */}
            <div className="pt-4 ">
              <Link
                href="/about"
                className="inline-block px-8 py-4 text-white bg-[#E3192E] hover:bg-[#e31919]/90 transition-all duration-300 font-semibold rounded-md hover:opacity-90"
               
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="relative flex gap-2 h-[500px] md:h-[600px]">
            {/* Left Image */}
            <div className="relative flex-1 rounded-lg overflow-hidden">
              <Image
                src="/industry.avif"
                alt="AOM Industries Infrastructure"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Vertical Divider */}
            {/* <div className="w-0.5 bg-white"></div> */}
            
            {/* Right Image */}
            <div className="relative flex-1 rounded-lg overflow-hidden translate-y-10">
              <Image
                src="/real3.avif"
                alt="AOM Industries Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
