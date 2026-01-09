import Image from "next/image";
import Link from "next/link";

interface HSEItem {
  title: string;
  description: string;
}

interface HowItWorksProps {
  centerImage?: string;
  centerImageAlt?: string;
}

const hseContent: HSEItem[] = [
  {
    title: "Comprehensive approach",
    description: "We cover all aspects of health, safety, and environmental compliance across our operations, including risk assessment, safety protocols, and regulatory adherence, ensuring safety and quality at every stage.",
  },
  {
    title: "Modern standards",
    description: "Equipped with cutting-edge safety technology and advanced compliance systems, we deliver reliable, environmentally-friendly solutions tailored to meet the highest industry standards and regulatory requirements.",
  },
  {
    title: "Professional team",
    description: "Our skilled and experienced safety team works diligently to ensure every operation is completed with precision, meeting the highest safety expectations and delivering exceptional compliance results.",
  },
  {
    title: "Environmental responsibility",
    description: "Committed to sustainability, we implement eco-conscious practices, minimize environmental impact, and promote green initiatives to protect the environment for future generations.",
  },
];

export default function HowItWorks({ centerImage, centerImageAlt = "HSE" }: HowItWorksProps) {
  return (
    <section className="py-16 lg:pb-32 bg-gradient-to-b from-white/50 to-[#f5f7f0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight max-w-4xl mx-auto" style={{ color: 'var(--text-primary)' }}>
            Our Commitment to Safety and Responsibility
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Mobile: Image as Background */}
          {centerImage && (
            <div className="md:hidden absolute inset-0 opacity-10">
              <Image
                src={centerImage}
                alt={centerImageAlt}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Desktop Layout: Logo in Center, Text on Sides */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {hseContent[0].title}
                </h3>
                <p className="text-base md:text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
                  {hseContent[0].description}
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {hseContent[1].title}
                </h3>
                <p className="text-base md:text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
                  {hseContent[1].description}
                </p>
              </div>
            </div>

            {/* Center Logo/Image - Desktop Only */}
            {centerImage && (
              <div className="hidden lg:flex lg:col-span-1 order-2 flex-col items-center">
                <div className="relative w-full h-64 lg:h-80">
                  <Image
                    src={centerImage}
                    alt={centerImageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* About Us Button - Desktop Only */}
                <Link
                  href="/about"
                  className="mt-8 translate-y-12 inline-block px-8 py-4 text-white bg-[#E3192E] hover:bg-[#e31919]/90 transition-all duration-300 font-semibold rounded-md hover:opacity-90"
                >
                  About Us
                </Link>
              </div>
            )}

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-8 order-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {hseContent[2].title}
                </h3>
                <p className="text-base md:text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
                  {hseContent[2].description}
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {hseContent[3].title}
                </h3>
                <p className="text-base md:text-md leading-normal" style={{ color: 'var(--text-secondary)' }}>
                  {hseContent[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Button - Mobile Only */}
        <div className="lg:hidden text-center mt-12">
          <Link
            href="/about"
            className="inline-block px-8 py-4 text-white bg-[#E3192E] hover:bg-[#e31919]/90 transition-all duration-300 font-semibold rounded-md hover:opacity-90"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
