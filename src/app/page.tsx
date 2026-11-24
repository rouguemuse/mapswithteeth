import React from "react";
import { PremiumHero } from "@/components/home/PremiumHero";
import { FourTierDistinctionInventory } from "@/components/shared/FourTierDistinctionInventory";
import { InteractiveProblemSection } from "@/components/home/InteractiveProblemSection";
import { FourReformTracksSection } from "@/components/home/FourReformTracksSection";
import { MethodologyIntegritySection } from "@/components/home/MethodologyIntegritySection";
import { ReceiptPracticeSection } from "@/components/home/ReceiptPracticeSection";
import { WorkInPracticeSection } from "@/components/home/WorkInPracticeSection";
import { StrategicQuestionsSection } from "@/components/home/StrategicQuestionsSection";
import { ParticipateSection } from "@/components/home/ParticipateSection";
import { MobileStickySectionNav } from "@/components/navigation/MobileStickySectionNav";

export default function HomePage() {
  return (
    <div className="relative font-sans overflow-hidden bg-mwt-paper">
      {/* Continental Continuity Route - Signature System Device */}
      <div
        aria-hidden="true"
        className="hidden 2xl:block absolute top-[120px] bottom-0 left-[32px] w-[2px] pointer-events-none z-30"
      >
        <div className="h-full w-full bg-gradient-to-b from-mwt-signal-red via-mwt-crimson-seal to-transparent opacity-80" />

        {/* Handoff Junction Nodes */}
        <div className="absolute top-[420px] -left-[5px] w-3 h-3 rounded-full bg-mwt-signal-red border-2 border-mwt-paper-muted" />
        <div className="absolute top-[1020px] -left-[5px] w-3 h-3 rounded-full bg-mwt-crimson-seal border-2 border-mwt-paper" />
        <div className="absolute top-[1980px] -left-[5px] w-3 h-3 rounded-full bg-mwt-signal-bright border-2 border-mwt-paper" />
        <div className="absolute top-[3100px] -left-[5px] w-3 h-3 rounded-full bg-mwt-crimson-seal border-2 border-mwt-paper" />
      </div>

      {/* Folio 00 — Movement & Monograph Hero (Level 1 Core Narrative) */}
      <PremiumHero />

      {/* Editorial Monograph Chapters */}
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-16 space-y-10 sm:space-y-20">
        {/* Phase 3 — Four-Tier Distinction Inventory (Existing Law, Implemented Code, Proposed Policy, Pilot Targets) */}
        <FourTierDistinctionInventory id="distinction-inventory" />

        {/* Folio 01 — The Problem: Seam Taxonomy & Interactive 5-Stage Pipeline */}
        <InteractiveProblemSection />

        {/* Folio 02 — Model A: Continuity Receipt & 9-Status Review Trace */}
        <ReceiptPracticeSection />

        {/* Folio 03 — Model B: Personal Number Continuity */}
        <FourReformTracksSection />

        {/* Methodology & Evidence Integrity Safeguards */}
        <MethodologyIntegritySection />

        {/* Folio 04 — Dual Applications & 4-Tier Adoption Matrix */}
        <WorkInPracticeSection />

        {/* Strategic Standard: 5 Core Inquiries, 8-Question System Change Map & 6-Month Fellowship */}
        <StrategicQuestionsSection />

        {/* Participation: Open Public-Interest Field Review */}
        <ParticipateSection />
      </div>

      {/* Compact Mobile Chapter Index Drawer */}
      <MobileStickySectionNav />
    </div>
  );
}
