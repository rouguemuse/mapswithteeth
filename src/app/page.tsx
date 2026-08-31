import React from "react";
import { HeroThesisSection } from "@/components/home/HeroThesisSection";
import { WhatAreYouTryingToSolveSection } from "@/components/home/WhatAreYouTryingToSolveSection";
import { BuildAWayThroughSection } from "@/components/home/BuildAWayThroughSection";
import { TheTeethSection } from "@/components/home/TheTeethSection";
import { NavigationComparisonSection } from "@/components/home/NavigationComparisonSection";
import { TexasVsNationwideSection } from "@/components/home/TexasVsNationwideSection";
import { ContinuityTransitionSection } from "@/components/home/ContinuityTransitionSection";
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

      {/* 5. Traditional Resource Navigation vs. Maps With Teeth (How Information is Handled) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationComparisonSection />
      </section>

      {/* 6. Texas Deep Dive / Other Ways Through / Ask Us to Look */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TexasVsNationwideSection />
      </section>

      {/* 7. TRANSITION: Getting Through the Door Isn't the End of the Problem (Resource Intelligence -> Continuity Infrastructure) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContinuityTransitionSection />
      </section>

      {/* 8. Bridge & Continuity Receipts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BridgeSection />
      </section>

      {/* 9. How We Know What We Know (5 Verification Tiers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowWeKnowSection />
      </section>

      {/* 10. Full 6-Stage Roadmap: What is built, what we're testing, what comes next */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BuiltTestingProposedSection />
      </section>

      {/* 11. Help Fund the Paths Between the Gaps (Direct Support) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeSupportSection />
      </section>

      {/* 12. Pressure-Test the Model / Stakeholder & Community Feedback */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StakeholderFeedbackSection />
      </section>
    </div>
  );
}
