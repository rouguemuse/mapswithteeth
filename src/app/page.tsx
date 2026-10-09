import React from "react";
import { PremiumHero } from "@/components/home/PremiumHero";
import { BarrierFlowExperience } from "@/components/home/BarrierFlowExperience";
import { ModelPillarsSection } from "@/components/home/ModelPillarsSection";
import { ReceiptPracticeSection } from "@/components/home/ReceiptPracticeSection";
import { ResearchStandardsSection } from "@/components/home/ResearchStandardsSection";
import { ParticipateSection } from "@/components/home/ParticipateSection";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 font-sans">
      {/* 1. Hero: Editorial Movement Opening + Central Texas Pilot Distinct Framing */}
      <PremiumHero />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* 2. Signature Visual Experience: The Barrier Flow (5-Step Gauntlet vs Alternative) */}
        <BarrierFlowExperience />

        {/* 3. The Model: Three Foundational Pillars (Continuity, Integrity, Accountability) */}
        <ModelPillarsSection />

        {/* 4. See It in Practice: Featured Continuity Receipt Specimen */}
        <ReceiptPracticeSection />

        {/* 5. Research & Standards: Methodology Navigation (Standard, Bad Maps, Policy Lab) */}
        <ResearchStandardsSection />

        {/* 6. Participate: Simplified Dark Movement CTA with Partner Pathways */}
        <ParticipateSection />
      </div>
    </div>
  );
}
