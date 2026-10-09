import React from "react";
import { PremiumHero } from "@/components/home/PremiumHero";
import { InteractiveProblemSection } from "@/components/home/InteractiveProblemSection";
import { FourReformTracksSection } from "@/components/home/FourReformTracksSection";
import { ReceiptPracticeSection } from "@/components/home/ReceiptPracticeSection";
import { WorkInPracticeSection } from "@/components/home/WorkInPracticeSection";
import { ParticipateSection } from "@/components/home/ParticipateSection";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 font-sans">
      {/* 1. Movement Hero: "People shouldn't disappear between systems" */}
      <PremiumHero />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
        {/* 2. The Problem: One memorable, interactive explanation of how a person becomes the integration layer */}
        <InteractiveProblemSection />

        {/* 3. Four Reform Tracks: Concise, beautifully composed introduction to Tracks A, B, C, D */}
        <FourReformTracksSection />

        {/* 4. Continuity Receipt: One signature visual demonstration with links to interactive prototype */}
        <ReceiptPracticeSection />

        {/* 5. Work in Practice: Central Texas Navigation Pilot & Texas DFPS Sunset Review Proposal */}
        <WorkInPracticeSection />

        {/* 6. Participation: Clear pathways for research collaboration, practitioner feedback, policy input, and support */}
        <ParticipateSection />
      </div>
    </div>
  );
}
