"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: FadeInOnScrollProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-50px)";
      case "right":
        return "translateX(50px)";
      case "down":
        return "translateY(-50px)";
      case "up":
      default:
        return "translateY(50px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0) translateY(0)" : getTransform(),
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

