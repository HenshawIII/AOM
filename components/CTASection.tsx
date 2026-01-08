import Link from "next/link";
import Image from "next/image";

interface CTASectionProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
  className?: string;
}

export default function CTASection({
  title,
  description,
  ctaText,
  ctaHref,
  backgroundImage,
  className = "",
}: CTASectionProps) {
  return (
    <section className={`relative text-white py-24 md:py-32 overflow-hidden ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="CTA Background"
            fill
            className="object-cover"
          />
          {/* Reddish Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-transparent"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-12 xl:pl-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl text-white! lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-white">
              {description}
            </p>
          )}
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-md transition-all duration-300 hover:opacity-90 bg-[#E3192E]"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
