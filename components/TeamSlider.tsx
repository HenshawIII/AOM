"use client";

import type { TeamMember } from "@/lib/constants";
import FadeInOnScroll from "@/components/FadeInOnScroll";

interface TeamSliderProps {
  members: TeamMember[];
}

export default function TeamSlider({ members }: TeamSliderProps) {
  return (
    <section className="py-16" style={{ backgroundColor: "#F5F7F0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className="mb-12 text-center">
            <div className="mb-4">
              <h3
                className="text-sm font-medium relative inline-block pb-2 border-b-2 border-[#E3192E]"
                style={{ color: "var(--text-primary)" }}
              >
                Our team
              </h3>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              The team driving our mission forward
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {members.map((member, index) => (
            <FadeInOnScroll key={member.name} direction="up" delay={0.15 + index * 0.05}>
              <TeamCard member={member} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3
        className="text-lg font-bold mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        {member.name}
      </h3>
      <p className="text-base" style={{ color: "var(--text-secondary)" }}>
        {member.role}
      </p>
    </div>
  );
}
