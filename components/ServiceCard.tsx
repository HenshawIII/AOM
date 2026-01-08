import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
  imageAlt,
  features = [],
}: ServiceCardProps) {
  return (
    <div className="bg-white/50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image Section */}
      {image && (
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-base mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 mr-3 flex-shrink-0" style={{ color: 'var(--text-primary)' }}></span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <Link
          href={href}
          className="inline-block w-full text-center px-6 py-3 border-2 font-semibold uppercase tracking-wide rounded-md transition-all duration-300 hover:bg-[#E3192E] hover:text-white"
         
        >
          Explore Service
        </Link>
      </div>
    </div>
  );
}
