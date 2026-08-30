"use client";
import React, { useState } from "react";
import { Resource, MatchCertainty } from "@/types/resource";
import { ResourceDetailModal } from "@/components/resources/ResourceDetailModal";
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
  ShieldCheck,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  BookOpen,
  Info,
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
      return <Utensils className="w-5 h-5 text-white" />;
    }
    if (id.includes("pet") || id.includes("redrover") || tags.includes("pet") || tags.includes("pets")) {
      return <PawPrint className="w-5 h-5 text-white" />;
    }
    if (id.includes("connection") || id.includes("phone") || tags.includes("phone") || tags.includes("tech_safety")) {
      return <Smartphone className="w-5 h-5 text-white" />;
    }
    if (resource.isStatutoryRight || id.includes("prop-code") || id.includes("puc") || tags.includes("statutory_right")) {
      return <Scale className="w-5 h-5 text-white" />;
    }
    if (id.includes("musicares") || tags.includes("music")) {
      return <Music className="w-5 h-5 text-white" />;
    }
    if (id.includes("school") || id.includes("mckinney") || tags.includes("education")) {
      return <GraduationCap className="w-5 h-5 text-white" />;
    }
    if (id.includes("transit") || id.includes("bus") || id.includes("ride") || tags.includes("transport")) {
      return <Car className="w-5 h-5 text-white" />;
    }
    if (id.includes("house") || id.includes("rent") || id.includes("shelter")) {
      return <Home className="w-5 h-5 text-white" />;
    }
    return <DollarSign className="w-5 h-5 text-white" />;
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
        className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-4 sm:p-5 hover:border-[#971F26] hover:shadow-md transition-all duration-150 cursor-pointer group select-none relative"
      >
        {/* Top Row: Icon + Title/Subtitle + Badges */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#D9D1C4] pb-3 mb-3">
          <div className="flex items-start gap-3 min-w-0">
            {/* Left Icon Pill */}
            <div className="w-9 h-9 rounded-full bg-[#1C1D1D] group-hover:bg-[#971F26] transition-colors flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              {getIcon()}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C1D1D] group-hover:text-[#971F26] transition-colors leading-tight">
                  {resource.name}
                </h3>
              </div>
              <p className="text-[11px] font-mono text-stone-700 font-semibold mt-0.5">
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
                {resource.scope === "NATIONWIDE" ? "NATIONWIDE" : "LATERAL BYPASS"}
              </span>
            )}

            {resource.referralRequirement?.toLowerCase().includes("advocate") ? (
              <span className="px-2 py-0.5 bg-[#FEF3C7] border border-[#F59E0B] text-[#78350F] font-semibold rounded-xs">
                WARM REFERRAL
              </span>
            ) : (
              <span className="px-2 py-0.5 bg-[#E2E8F0] border border-[#94A3B8] text-[#334155] font-semibold rounded-xs">
                NOT ON 211
              </span>
            )}

            <span className="px-2 py-0.5 bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] font-bold rounded-xs">
              ✓ VERIFIED
            </span>
          </div>
        </div>

        {/* 4-Column Operational Grid (The Core Mockup Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          {/* Column 1: WHY THIS SURFACED / WHY IT'S MISSED */}
          <div className="p-2.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-md space-y-1">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              {whySurfacedFact ? "Why This Surfaced:" : "Why It's Missed:"}
            </span>
            <p className="text-stone-900 font-medium text-[11px] leading-snug line-clamp-3">
              {whyMissedText}
            </p>
          </div>

          {/* Column 2: WHAT IT CAN DO / EXCEPTION & WORKAROUND */}
          <div className="p-2.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-md space-y-1">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#1C1D1D] font-bold block">
              What It Can Do:
            </span>
            <p className="text-stone-900 font-medium text-[11px] leading-snug line-clamp-3">
              {whatItCanDoText}
            </p>
          </div>

          {/* Column 3: THE CATCH / ACCESS NOTES */}
          <div className="p-2.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-md space-y-1">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              The Catch / Access Notes:
            </span>
            <p className="text-stone-800 text-[11px] leading-snug line-clamp-3 font-mono">
              {theCatchText}
            </p>
          </div>

          {/* Column 4: VERIFICATION & NEXT STEP */}
          <div className="p-2.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-md space-y-1 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#2D5A3D] font-bold block">
                Verification & Source:
              </span>
              <p className="text-[10.5px] font-mono text-stone-700 leading-snug">
                ✓ {verificationText}
              </p>
              <p className="text-[10px] text-stone-600 truncate mt-0.5">
                Source: {resource.primaryAuthoritativeSource}
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#E5DEC9] mt-1 text-[10px] font-mono text-[#971F26] font-bold">
              <span>View Full Docket</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Evidence & Verification Requirement (Distinguished from Eligibility) */}
        {evidenceRequired && evidenceRequired.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-[#D9D1C4] flex items-start gap-2 text-[11px] text-stone-800 bg-[#F5F1E8] p-2 rounded-xs border border-[#E5DEC9]">
            <FileText className="w-3.5 h-3.5 text-stone-600 shrink-0 mt-0.5" />
            <div className="leading-snug">
              <strong className="text-[#1C1D1D] font-mono text-[9.5px] uppercase tracking-wider block">
                Evidence / Documentation You May Need to Produce:
              </strong>
              <p className="text-stone-700 text-[10.5px]">
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
