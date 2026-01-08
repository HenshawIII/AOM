"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export interface HeroSlide {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

interface HeroProps {
  slides: HeroSlide[];
  autoPlayInterval?: number; // in milliseconds, default 5000 (5 seconds)
}

export default function Hero({ slides, autoPlayInterval = 12000 }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Auto-play functionality
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setDirection('right');
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 800); // Half of transition duration
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setDirection(index > currentSlide ? 'right' : 'left');
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 400);
  };

  const slide = slides[currentSlide];
  const hasBackground = slide.backgroundImage;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden justify-start">
      {/* Background Images */}
      {slides.map((slideItem, index) => {
        const isActive = index === currentSlide;
        const isNext = index === (currentSlide + 1) % slides.length;
        const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
        
        let transformClass = '';
        if (isActive && !isTransitioning) {
          // Active slide, visible
          transformClass = 'translate-x-0';
        } else if (isActive && isTransitioning) {
          // Current slide transitioning out
          transformClass = direction === 'right' ? '-translate-x-full' : 'translate-x-full';
        } else if (isNext && isTransitioning && direction === 'right') {
          // Next slide coming in from right
          transformClass = 'translate-x-0';
        } else if (isPrev && isTransitioning && direction === 'left') {
          // Previous slide coming in from left
          transformClass = 'translate-x-0';
        } else {
          // All other slides off-screen
          if (direction === 'right') {
            // For forward direction, next slides are on the right
            transformClass = index > currentSlide ? 'translate-x-full' : '-translate-x-full';
          } else {
            // For backward direction, previous slides are on the left
            transformClass = index < currentSlide ? '-translate-x-full' : 'translate-x-full';
          }
        }

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-[1600ms] ease-in-out ${
              isActive || (isTransitioning && (isNext || isPrev)) ? "z-0" : "z-[-1]"
            } ${transformClass}`}
          >
          {slideItem.backgroundImage ? (
            <>
              <Image
                src={slideItem.backgroundImage}
                alt={`Slide ${index + 1} background`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          )}
          </div>
        );
      })}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div
          className={`max-w-2xl transition-all duration-[1600ms] ease-in-out ${
            isTransitioning 
              ? `opacity-0 ${direction === 'right' ? 'translate-x-8' : '-translate-x-8'}` 
              : "opacity-100 translate-x-0"
          } ${hasBackground ? "text-white" : ""}`}
        >
          {slide.subtitle && (
            <p
              className="text-sm font-medium mb-4 uppercase tracking-wide"
              style={{
                color: hasBackground ? "rgba(255, 255, 255, 0.9)" : "var(--text-light)",
              }}
            >
              {slide.subtitle}
            </p>
          )}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: hasBackground ? "white" : "var(--text-primary)" }}
          >
            {slide.title}
          </h1>
          {slide.description && (
            <p
              className="text-md md:text-lg mb-8 leading-relaxed"
              style={{
                color: hasBackground ? "rgba(255, 255, 255, 0.95)" : "var(--text-secondary)",
              }}
            >
              {slide.description}
            </p>
          )}
          {(slide.primaryCTA || slide.secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {slide.primaryCTA && (
                <Link
                  href={slide.primaryCTA.href}
                  className="inline-flex items-center justify-center bg-[#E3192E] px-8 py-3 text-white font-semibold rounded-md transition-colors hover:opacity-90"
                >
                  {slide.primaryCTA.text}
                </Link>
              )}
              {slide.secondaryCTA && (
                <Link
                  href={slide.secondaryCTA.href}
                  className={`inline-flex items-center justify-center px-8 py-3 border-2 font-semibold rounded-md transition-colors ${
                    hasBackground
                      ? "border-white text-white hover:bg-white hover:text-[#171717]"
                      : "border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                  }`}
                >
                  {slide.secondaryCTA.text}
                </Link>
              )}
            </div>
          )}

          {/* Dot Navigation */}
          {slides.length > 1 && (
            <div className="flex gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-3 h-3 bg-white"
                      : "w-2 h-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
