import React from "react";
import { PremiumHero } from "@/components/home/PremiumHero";
import { InteractiveProblemSection } from "@/components/home/InteractiveProblemSection";
import { FourReformTracksSection } from "@/components/home/FourReformTracksSection";
import { ReceiptPracticeSection } from "@/components/home/ReceiptPracticeSection";
import { WorkInPracticeSection } from "@/components/home/WorkInPracticeSection";
import { ParticipateSection } from "@/components/home/ParticipateSection";

export default function HomePage() {
  return (
    <div className="relative font-sans overflow-hidden">
      {/* Continental Continuity Route - Signature System Device */}
      {/* Traveling from the hero down through the investigative and receipt layers */}
      <div 
        aria-hidden="true" 
        className="hidden xl:block absolute top-[120px] bottom-0 left-[44px] w-0.5 pointer-events-none z-30"
      >
        <div className="h-full w-full bg-gradient-to-b from-[#841F2B] via-[#841F2B] to-transparent opacity-85" />
        
        {/* Handoff Junction Nodes */}
        <div className="absolute top-[380px] -left-1.5 w-3.5 h-3.5 rounded-full bg-mwt-oxblood border-2 border-white shadow-xs" />
        <div className="absolute top-[820px] -left-1.5 w-3.5 h-3.5 rounded-full bg-mwt-oxblood border-2 border-[#F8F5EE] shadow-xs" />
        <div className="absolute top-[1480px] -left-1.5 w-3.5 h-3.5 rounded-full bg-[#D94656] border-2 border-white shadow-xs animate-pulse" />
        <div className="absolute top-[2200px] -left-1.5 w-3.5 h-3.5 rounded-full bg-mwt-oxblood border-2 border-[#F8F5EE] shadow-xs" />
      </div>

      {/* 1. Movement Hero: "People shouldn't disappear between systems" */}
      <PremiumHero />

      {/* Main Flow: Alternating Rhythm of Editorial Canvas & High-Intensity Visual Specimens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:pl-20 py-16 sm:py-24 space-y-20 sm:space-y-32">
        {/* 2. The Problem: The Seam Deficit with Authentic Seam Tangle Artwork & Broken Connection */}
        <InteractiveProblemSection />

        {/* 3. Four Reform Tracks: Disciplined Editorial Layout with Fine Cartographic Symbols */}
        <FourReformTracksSection />

        {/* 4. Continuity Receipt: Physical Archival Specimen as an Object */}
        <ReceiptPracticeSection />

        {/* 5. Work in Practice: Dual Frontline Pilot & DFPS Sunset Review Architecture */}
        <WorkInPracticeSection />

        {/* 6. Participation: Archival Institute Dispatch & Open Field Review */}
        <ParticipateSection />
      </div>
    </div>
  );
}
