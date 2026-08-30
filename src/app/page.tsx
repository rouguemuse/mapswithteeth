import React from "react";
import { HeroThesisSection } from "@/components/home/HeroThesisSection";
import { TexasVsNationwideSection } from "@/components/home/TexasVsNationwideSection";
import { WhatAreYouTryingToSolveSection } from "@/components/home/WhatAreYouTryingToSolveSection";
import { BuildAWayThroughSection } from "@/components/home/BuildAWayThroughSection";
import { TheTeethSection } from "@/components/home/TheTeethSection";
import { HowWeKnowSection } from "@/components/home/HowWeKnowSection";
import { BuiltTestingProposedSection } from "@/components/home/BuiltTestingProposedSection";
import { BridgeSection } from "@/components/home/BridgeSection";
import { StakeholderFeedbackSection } from "@/components/feedback/StakeholderFeedbackSection";

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24 select-none font-sans">
      {/* 1. Hero — 60/40 Asymmetric Framing with System Access Flow Diagram */}
      <HeroThesisSection />

      {/* 2. Immediately Clarify Texas vs. Nationwide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TexasVsNationwideSection />
      </section>

      {/* 3. “What are you trying to solve?” Problem-First Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatAreYouTryingToSolveSection />
      </section>

      {/* 4. Ways Through Interactive Resource Stack (“Build a Way Through”) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BuildAWayThroughSection />
      </section>

      {/* 5. Explain “The Teeth” — 7 Friction Levers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TheTeethSection />
      </section>

      {/* 6. How We Know What We Know — 5 Verification Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowWeKnowSection />
      </section>

      {/* 7. Built / Testing / Proposed Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BuiltTestingProposedSection />
      </section>

      {/* 8. Bridge — Lightweight Continuity Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BridgeSection />
      </section>

      {/* 9. Help Pressure-Test the Map — Stakeholder & Community Feedback */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StakeholderFeedbackSection />
      </section>
    </div>
  );
}
