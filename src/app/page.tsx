import React from "react";
import { CompactHero } from "@/components/home/CompactHero";
import { CompactProblemSection } from "@/components/home/CompactProblemSection";
import { CompactWorkSection } from "@/components/home/CompactWorkSection";
import { CompactReceiptSpecimenSection } from "@/components/home/CompactReceiptSpecimenSection";
import { CompactInvolvementSection } from "@/components/home/CompactInvolvementSection";

export default function HomePage() {
  return (
    <div className="space-y-10 sm:space-y-14 pb-16 font-sans">
      {/* 1. Opening: Existing headline, plain-language explanation, two clear actions */}
      <CompactHero />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* 2. The Problem: One brief, concrete referral failure example */}
        <CompactProblemSection />

        {/* 3. The Work: Three concise navigation grouping cards */}
        <CompactWorkSection />

        {/* 4. One Practical Example: Compact clearly fictional receipt preview */}
        <CompactReceiptSpecimenSection />

        {/* 5. Get Involved: Collaboration invitation and compact links */}
        <CompactInvolvementSection />
      </div>
    </div>
  );
}
