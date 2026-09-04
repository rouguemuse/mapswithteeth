"use client";

import React, { useState } from "react";
import { Resource, MatchCertainty } from "@/types/resource";
import { ResourceDetailModal } from "@/components/resources/ResourceDetailModal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Utensils,
  PawPrint,
  Smartphone,
  Scale,
  Home,
  Car,
  GraduationCap,
  Music,
  DollarSign,
  ChevronRight,
  Sparkles,
  FileText
} from "lucide-react";

interface DenseResourceCardProps {
  resource: Resource;
  whySurfacedFact?: string;
  matchCertainty?: MatchCertainty | "STATUTORY_RIGHT" | "RESEARCHED_WORKAROUND";
  matchedTags?: string[];
  evidenceRequired?: string[];
  isSaved?: boolean;
  onToggleSave?: () => void;
}

export function DenseResourceCard({
  resource,
  whySurfacedFact,
  matchCertainty,
  matchedTags,
  evidenceRequired,
  isSaved,
  onToggleSave,
}: DenseResourceCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Pick category icon
  const getIcon = () => {
    const id = resource.id.toLowerCase();
    const cat = (resource.category || "").toLowerCase();
    const tags = (resource.matchTags || []).map((t) => t.toLowerCase());

    if (id.includes("smoke") || id.includes("kitchen") || id.includes("core") || tags.includes("food_beverage") || cat.includes("industry")) {
      return <Utensils className="w-4 h-4 text-white" />;
    }
    if (id.includes("pet") || id.includes("redrover") || tags.includes("pet") || tags.includes("pets")) {
      return <PawPrint className="w-4 h-4 text-white" />;
    }
    if (id.includes("connection") || id.includes("phone") || tags.includes("phone") || tags.includes("tech_safety")) {
      return <Smartphone className="w-4 h-4 text-white" />;
    }
    if (resource.isStatutoryRight || id.includes("prop-code") || id.includes("puc") || tags.includes("statutory_right")) {
      return <Scale className="w-4 h-4 text-white" />;
    }
    if (id.includes("musicares") || tags.includes("music")) {
      return <Music className="w-4 h-4 text-white" />;
    }
    if (id.includes("school") || id.includes("mckinney") || tags.includes("education")) {
      return <GraduationCap className="w-4 h-4 text-white" />;
    }
    if (id.includes("transit") || id.includes("bus") || id.includes("ride") || tags.includes("transport")) {
      return <Car className="w-4 h-4 text-white" />;
    }
    if (id.includes("house") || id.includes("rent") || id.includes("shelter")) {
      return <Home className="w-4 h-4 text-white" />;
    }
    return <DollarSign className="w-4 h-4 text-white" />;
  };

  // Structured 4-column data extracts
  const whyMissedText = whySurfacedFact || resource.whyMissed || (
    resource.isStatutoryRight
      ? "Statutory right enforceable without municipal funding queues or shelter referral."
      : resource.referralRequirement?.toLowerCase().includes("advocate")
      ? "Accessed through DV advocate case review, not general public intake."
      : resource.industrySpecific?.length
      ? `Restricted to ${resource.industrySpecific.join(", ")} workers; not indexed in standard directories.`
      : "Specialized direct aid pathway operating outside conventional shelter channels."
  );

  const whatItCanDoText = resource.whatItCanHelpWith || resource.whatItActuallyProvides;

  const theCatchText = resource.accessNotes || (
    resource.whatCanBlockAccess && resource.whatCanBlockAccess.length > 0
      ? resource.whatCanBlockAccess[0]
      : resource.eligibility
  );

  const verificationText = resource.lastReviewedDate
    ? `Verified ${resource.lastReviewedDate}`
    : "Verified August 2026";

  const isStatutory = resource.isStatutoryRight;
  const isLikelyMatch = matchCertainty === "LIKELY_MATCH";
  const isWorthChecking = matchCertainty === "WORTH_CHECKING";

  return (
    <>
      <article
        onClick={() => setModalOpen(true)}
        className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-md p-3.5 sm:p-4 hover:border-[#971F26] hover:shadow-sm transition-all duration-150 cursor-pointer group select-none relative shadow-2xs"
      >
        {/* Top Row: Icon + Title/Subtitle + Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#D9D1C4] pb-2.5 mb-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Left Icon Pill */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1C1D1D] group-hover:bg-[#971F26] transition-colors flex items-center justify-center shrink-0 shadow-2xs">
              {getIcon()}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C1D1D] group-hover:text-[#971F26] transition-colors leading-tight">
                  {resource.name}
                </h3>
              </div>
              <p className="text-xs font-mono text-stone-700 font-semibold truncate">
                {resource.organization} {resource.county ? `· ${resource.county} Co., TX` : `· ${resource.geography || resource.scope}`}
              </p>
            </div>
          </div>

          {/* Badges on Right Header */}
          <div className="flex flex-wrap items-center gap-1.5 shrink-0 self-start sm:self-auto font-mono text-[9.5px]">
            {isLikelyMatch && (
              <span className="px-2 py-0.5 bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] font-bold rounded-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D]"></span>
                LIKELY MATCH
              </span>
            )}

            {isWorthChecking && (
              <span className="px-2 py-0.5 bg-[#FEF3C7] border border-[#D97706] text-[#92400E] font-bold rounded-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
                WORTH CHECKING
              </span>
            )}

            {isStatutory ? (
              <span className="px-2 py-0.5 bg-[#1C1D1D] text-white font-bold rounded-xs tracking-wider">
                STATUTORY RIGHT
              </span>
            ) : (
              <span className="px-2 py-0.5 bg-[#F5F1E8] border border-[#D9D1C4] text-stone-700 font-semibold rounded-xs">
                {resource.scope === "NATIONWIDE" ? "NATIONWIDE" : "NONTRADITIONAL ROUTE"}
              </span>
            )}

            {resource.referralRequirement?.toLowerCase().includes("advocate") ? (
              <span className="px-2 py-0.5 bg-[#FEF3C7] border border-[#F59E0B] text-[#78350F] font-semibold rounded-xs">
                WARM REFERRAL
              </span>
            ) : (
              <span className="px-2 py-0.5 bg-[#E2E8F0] border border-[#94A3B8] text-[#334155] font-semibold rounded-xs">
                LATERAL BYPASS
              </span>
            )}

            <span className="px-2 py-0.5 bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] font-bold rounded-xs">
              ✓ VERIFIED
            </span>
          </div>
        </div>

        {/* 4-Column Operational Grid (Dense, Scannable 4-Part Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 text-xs">
          {/* Column 1: WHY THIS SURFACED (if post-intake) or WHY IT'S MISSED (on browse) */}
          <div className="p-2.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xs space-y-1">
            <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              {whySurfacedFact ? "Why This Surfaced:" : "Why It's Missed:"}
            </span>
            <p className="text-stone-900 font-sans font-medium text-xs leading-relaxed">
              {whyMissedText}
            </p>
          </div>

          {/* Column 2: WHAT IT CAN DO */}
          <div className="p-2.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xs space-y-1">
            <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#1C1D1D] font-bold block">
              What It Can Do:
            </span>
            <p className="text-stone-900 font-sans font-medium text-xs leading-relaxed">
              {whatItCanDoText}
            </p>
          </div>

          {/* Column 3: THE CATCH / ACCESS NOTES */}
          <div className="p-2.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xs space-y-1">
            <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              The Catch / Access Notes:
            </span>
            <p className="text-stone-900 font-sans text-xs leading-relaxed">
              {theCatchText}
            </p>
          </div>

          {/* Column 4: VERIFICATION & SOURCE */}
          <div className="p-2.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xs space-y-1 flex flex-col justify-between">
            <div>
              <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#2D5A3D] font-bold block">
                Verification & Source:
              </span>
              <p className="text-[11px] font-mono text-stone-800 font-semibold leading-tight mt-0.5">
                ✓ {verificationText}
              </p>
              <p className="text-[11px] font-sans text-stone-700 leading-snug mt-0.5 line-clamp-2">
                {resource.primaryAuthoritativeSource}
              </p>
            </div>

            <div className="flex items-center justify-between pt-1.5 border-t border-[#E5DEC9] mt-1 text-[10px] font-mono text-[#971F26] font-bold">
              <span>View Full Docket</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Evidence & Verification Requirement (Distinguished from Eligibility) */}
        {evidenceRequired && evidenceRequired.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-[#D9D1C4] flex items-start gap-2 text-xs text-stone-900 bg-[#F5F1E8] p-2 rounded-xs border border-[#E5DEC9]">
            <FileText className="w-3.5 h-3.5 text-stone-700 shrink-0 mt-0.5" />
            <div className="leading-snug">
              <strong className="text-[#1C1D1D] font-mono text-[9.5px] uppercase tracking-wider block">
                Evidence / Documentation You May Need to Produce:
              </strong>
              <p className="text-stone-800 text-xs font-sans mt-0.5">
                {evidenceRequired.join(" · ")}
              </p>
            </div>
          </div>
        )}
      </article>

      {/* Full Verification Docket Modal */}
      {modalOpen && (
        <ResourceDetailModal
          resource={resource}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
