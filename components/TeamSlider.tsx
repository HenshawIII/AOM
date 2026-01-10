"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/lib/constants";

interface TeamSliderProps {
  members: TeamMember[];
}

export default function TeamSlider({ members }: TeamSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % members.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Get visible members based on current index
  const getVisibleMembers = () => {
    const visible = [];
    const visibleCount = 3; // Show 3 at a time on desktop
    
    for (let i = 0; i < visibleCount && i < members.length; i++) {
      const index = (currentIndex + i) % members.length;
      visible.push(members[index]);
    }
    
    return visible;
  };

  const visibleMembers = getVisibleMembers();
  const canSlide = members.length > 3;

  return (
    <section className="py-16" style={{ backgroundColor: '#F5F7F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          {/* Our team subtitle with underline */}
          <div className="mb-4">
            <h3 className="text-sm font-medium relative inline-block pb-2 border-b-2 border-[#E3192E]" style={{ color: 'var(--text-primary)' }}>
              Our team
             
            </h3>
          </div>
          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
            The team driving our mission forward
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Desktop: Grid layout showing 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-8">
            {visibleMembers.map((member, index) => (
              <TeamCard key={`${currentIndex}-${index}`} member={member} />
            ))}
          </div>

          {/* Mobile: Single card slider */}
          <div className="md:hidden overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {members.map((member, index) => (
                <div key={index} className="min-w-full px-2">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Navigation Arrows - Bottom centered */}
        {canSlide && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{ color: 'var(--text-primary)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{ color: 'var(--text-primary)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Team Card Component
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative bg-white/50! rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] bg-gray-200 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center"
        />
        
        {/* Social Icons Overlay - Visible on hover (desktop) and always on mobile */}
        {member.linkedinUrl && (
          <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-100/90 backdrop-blur-sm flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#0077b5' }}
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="p-6 bg-white/50">
        <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
          {member.name}
        </h3>
        <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
          {member.role}
        </p>
      </div>
    </div>
  );
}

