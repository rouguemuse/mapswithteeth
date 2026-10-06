import React from "react";
import { HeroTwoSided } from "@/components/home/HeroTwoSided";
import { HumanAsIntegrationLayerSection } from "@/components/home/HumanAsIntegrationLayerSection";
import { TwoHalvesArchitectureSection } from "@/components/home/TwoHalvesArchitectureSection";
import { ContinuityStandardSection } from "@/components/home/ContinuityStandardSection";
import { InteractiveReceiptDemo } from "@/components/home/InteractiveReceiptDemo";
import { BadMapsSection } from "@/components/home/BadMapsSection";
import { TexasPolicyProjectsSection } from "@/components/home/TexasPolicyProjectsSection";
import { WritingAnalysisSection } from "@/components/home/WritingAnalysisSection";
import { PartnerCalloutSection } from "@/components/home/PartnerCalloutSection";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20 pb-20 select-none font-sans">
      {/* 1. Hero — Two-Sided Infrastructure: Survivor Continuity + System Accountability */}
      <HeroTwoSided />

      {/* 2. Show the Actual Failure: The Human Becomes the Integration Layer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HumanAsIntegrationLayerSection />
      </section>

      {/* 3. Two Halves, Not Ten Features (Resource Intelligence + Continuity Infrastructure) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TwoHalvesArchitectureSection />
      </section>

      {/* 4. The Cross-System Continuity Standard (6 Modules) */}
      <section id="continuity-standard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <ContinuityStandardSection />
      </section>

      {/* 5. Interactive / Realistic Mock Continuity Receipt Demo */}
      <section id="receipt-demo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <InteractiveReceiptDemo />
      </section>

      {/* 6. Bad Maps: Deidentified System Failure Intelligence */}
      <section id="bad-maps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <BadMapsSection />
      </section>

      {/* 7. Texas Policy Lab & Central Texas Pilot Projects */}
      <section id="texas-policy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <TexasPolicyProjectsSection />
      </section>

      {/* 8. Field Notes & Writing Analysis */}
      <section id="field-notes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <WritingAnalysisSection />
      </section>

      {/* 9. Call for Partners: Pressure-Testing the Model */}
      <section id="partners" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <PartnerCalloutSection />
      </section>
    </div>
  );
}
