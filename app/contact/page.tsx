"use client";

import { useState } from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { contactInfo } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      console.log("Form submitted:", formData);
      setTimeout(() => {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 500);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-16 pt-32" style={{ backgroundColor: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/office.png"
                alt="AOM Industries"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full">
            {/* Header */}
            <div className="mb-8">
              {/* Subtitle */}
              <div className="mb-4">
                <h3 className="text-sm font-medium relative inline-block pb-2 border-b-2 border-[#E3192E]" style={{ color: 'var(--text-primary)' }}>
                  Let's start a conversation
                </h3>
              </div>
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                Connect with us
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full pl-12 pr-4 py-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className={`w-full pl-12 pr-4 py-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18.14 4.487a1.125 1.125 0 00-1.594 0l-1.688 1.688a1.125 1.125 0 000 1.594l8.931 8.931a1.125 1.125 0 001.594 0l1.688-1.688a1.125 1.125 0 000-1.594L18.14 4.487z"
                      />
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    className={`w-full pl-12 pr-4 py-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3  bg-[#E3192E] text-white  font-semibold rounded-md transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16" style={{ backgroundColor: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            {/* Stay connected subtitle with wavy underline */}
            <div className="mb-4">
              <h3 className="text-sm font-medium relative inline-block pb-2 border-b-2 border-[#E3192E]" style={{ color: 'var(--text-primary)' }}>
                Stay connected
              </h3>
            </div>
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
              Find all the ways to reach us in one place
            </h2>
            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Get in touch with us through your preferred method. Whether by phone, email, or social media, we're here to help. Visit us at our location or follow us online to stay updated.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="border-r-[.1px] border-[#E3192E]/10">
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Location:
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
               Onikoko , Ogun State , Nigeria
              </p>
            </div>

            {/* Phones */}
            <div className="border-r-[.1px] border-[#E3192E]/10">
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Phones:
              </h3>
              <div className="space-y-1">
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  {contactInfo.phone}
                </p>
                {contactInfo.whatsapp && contactInfo.whatsapp !== "[add number]" && (
                  <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                    {contactInfo.whatsapp}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="border-r-[.1px] border-[#E3192E]/10">
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Email:
              </h3>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                {contactInfo.email}
              </p>
            </div>

            {/* Socials */}
            <div className="">
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Socials:
              </h3>
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ backgroundColor: 'var(--text-primary)' }}
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ backgroundColor: 'var(--text-primary)' }}
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>


                {/* X (Twitter) */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ backgroundColor: 'var(--text-primary)' }}
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to know more?"
        description="Learn more about our company and our services."
        ctaText="Continue"
        ctaHref="/about"
        backgroundImage="/office.png"
      />
    </>
  );
}
