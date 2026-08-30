import React from "react";
import { HeroThesisSection } from "@/components/home/HeroThesisSection";
import { WhatAreYouTryingToSolveSection } from "@/components/home/WhatAreYouTryingToSolveSection";
import { BuildAWayThroughSection } from "@/components/home/BuildAWayThroughSection";
import { TheTeethSection } from "@/components/home/TheTeethSection";
import { TexasVsNationwideSection } from "@/components/home/TexasVsNationwideSection";
import { HowWeKnowSection } from "@/components/home/HowWeKnowSection";
import { BuiltTestingProposedSection } from "@/components/home/BuiltTestingProposedSection";
import { HomeSupportSection } from "@/components/home/HomeSupportSection";
import { BridgeSection } from "@/components/home/BridgeSection";
import { StakeholderFeedbackSection } from "@/components/feedback/StakeholderFeedbackSection";

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24 select-none font-sans">
      {/* 1. Hero — Open Cartographic Annotated Flow */}
      <HeroThesisSection />

      {/* 2. What are you actually trying to solve? (Immediate User-Centered Problem Entry) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatAreYouTryingToSolveSection />
      </section>

      {/* 3. Build a Way Through (Interactive 3-Step Stack Generator) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BuildAWayThroughSection />
      </section>

      {/* 4. The Teeth: What Blocks Access (Core Visual Differentiator) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TheTeethSection />
      </section>

      {/* 5. Texas Deep Dive / Other Ways Through / Ask Us to Look */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TexasVsNationwideSection />
      </section>

      {/* 6. How We Know What We Know (5 Verification Tiers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowWeKnowSection />
      </section>

      {/* 7. Built / Testing / Proposed (Stage-Disclosure Roadmap) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BuiltTestingProposedSection />
      </section>

      {/* 8. Help Fund the Paths Between the Gaps (Direct Support) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeSupportSection />
      </section>

      {/* 9. Bridge / Continuity Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BridgeSection />
      </section>

      {/* 10. Pressure-Test the Model / Stakeholder & Community Feedback */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StakeholderFeedbackSection />
      </section>
    </div>
  );
}
