import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/lib/constants";
import type { HeroSlide } from "@/components/Hero";

const heroSlides: HeroSlide[] = [
  {
    title: "Contact AOM Industries",
    subtitle: "Tell us what you need—we'll respond with a clear plan and quote.",
  },
];

export default function Contact() {
  return (
    <>
      <Hero slides={heroSlides} />

      {/* Contact Text */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              For quotes and inquiries, share:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>Service needed (Real Estate, Logistics, Petrochemicals)</li>
              <li>Location</li>
              <li>Quantity / scope</li>
              <li>Timeline</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
                Contact Details
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Phone / WhatsApp
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{contactInfo.phone}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>{contactInfo.whatsapp}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Email
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{contactInfo.email}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Office Address
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

