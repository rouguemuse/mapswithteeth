import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ModelPillarsSection } from "@/components/home/ModelPillarsSection";
import { ReceiptPracticeSection } from "@/components/home/ReceiptPracticeSection";
import { ResearchStandardsSection } from "@/components/home/ResearchStandardsSection";
import { ParticipateSection } from "@/components/home/ParticipateSection";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 font-sans">
      {/* 1. Hero: Headline, brief explanation, two CTAs */}
      <HeroSection />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* 2. The Problem: One focused visual comparison of institutional records vs lived outcomes */}
        <ProblemSection />

        {/* 3. The Model: Three pillars covering continuity, evidence integrity, and accountability */}
        <ModelPillarsSection />

        {/* 4. See It in Practice: Featured Continuity Receipt preview */}
        <ReceiptPracticeSection />

        {/* 5. Research & Standards: Three concise navigation cards linking to actual methodology */}
        <ResearchStandardsSection />

        {/* 6. Participate: Simplified dark CTA section with partner and contributor pathways */}
        <ParticipateSection />
      </div>
    </div>
  );
}
