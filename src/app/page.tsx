import React from "react";
import { HeroThesisSection } from "@/components/home/HeroThesisSection";
import { EarlyThesisBridgeSection } from "@/components/home/EarlyThesisBridgeSection";
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
import { MobileStickySectionNav } from "@/components/navigation/MobileStickySectionNav";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-20 lg:space-y-24 pb-24 select-none font-sans">
      {/* Mobile-Only Sticky Section Jump Navigator */}
      <MobileStickySectionNav />

      {/* 1. Hero — Open Cartographic Annotated Flow */}
      <HeroThesisSection />

      {/* Early Continuity Thesis Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EarlyThesisBridgeSection />
      </section>

      {/* 2. What are you actually trying to solve? (Immediate User-Centered Problem Entry) */}
      <section id="solve-problems" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <WhatAreYouTryingToSolveSection />
      </section>

      {/* 3. Build a Way Through (Interactive 3-Step Stack Generator) */}
      <section id="build-a-way" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <BuildAWayThroughSection />
      </section>

      {/* 4. The Teeth: What Blocks Access (Core Visual Differentiator) */}
      <section id="the-teeth" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <TheTeethSection />
      </section>

      {/* 5. Traditional Resource Navigation vs. Maps With Teeth (How Information is Handled) */}
      <section id="comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <NavigationComparisonSection />
      </section>

      {/* 6. Texas Deep Dive / Other Ways Through / Ask Us to Look */}
      <section id="texas-lateral" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <TexasVsNationwideSection />
      </section>

      {/* 7. TRANSITION: Getting Through the Door Isn't the End of the Problem (Resource Intelligence -> Continuity Infrastructure) */}
      <section id="continuity" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <ContinuityTransitionSection />
      </section>

      {/* 8. Bridge & Continuity Receipts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BridgeSection />
      </section>

      {/* 9. How We Know What We Know (5 Verification Tiers) */}
      <section id="how-we-know" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <HowWeKnowSection />
      </section>

      {/* 10. Full 6-Stage Roadmap: What is built, what we're testing, what comes next */}
      <section id="roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <BuiltTestingProposedSection />
      </section>

      {/* 11. Help Fund the Paths Between the Gaps (Direct Support) */}
      <section id="support-feedback" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <HomeSupportSection />
      </section>

      {/* 12. Pressure-Test the Model / Stakeholder & Community Feedback */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StakeholderFeedbackSection />
      </section>
    </div>
  );
}
