"use client";

import React, { useState } from "react";
import { Resource } from "@/types/resource";
import { VerificationBadge } from "./VerificationBadge";
import { MatchReasonBadge } from "./MatchReasonBadge";
import { ResourceDetailModal } from "./ResourceDetailModal";
import {
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Scale,
  ArrowRight,
  ShieldAlert,
  FileCheck,
  Building,
  UserX,
  FileWarning,
  Compass,
  CornerDownRight,
  Check
} from "lucide-react";

export function ResourceCard({
  resource,
  matchReason,
  matchedTags,
  matchCertainty,
}: {
  resource: Resource;
  matchReason?: string;
  matchedTags?: string[];
  matchCertainty?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const whatItHelps = resource.whatItCanHelpWith || resource.whatItActuallyProvides;
  const whatNext = resource.whatToDoNext || resource.howToApply;
  const blockReasons = resource.whatCanBlockAccess && resource.whatCanBlockAccess.length > 0
    ? resource.whatCanBlockAccess
    : resource.accessFrictions.map((f) => f.replace(/_/g, " "));

  return (
    <>
      <article className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 sm:p-6 hover:shadow-md transition-all duration-200 shadow-xs flex flex-col justify-between group relative select-none">
        {/* Top Header Row: Geography + Stamped Verification Marker */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3 font-mono text-[10px]">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2 py-0.5 bg-[#F5F1E8] border border-[#1C1D1D] text-[#1C1D1D] uppercase font-bold tracking-wider rounded-xs">
                {resource.geography || resource.scope}
              </span>
              {resource.isStatutoryRight ? (
                <span className="px-2 py-0.5 bg-[#1C1D1D] text-white uppercase font-bold tracking-wider rounded-xs">
                  STATUTORY RIGHT
                </span>
              ) : (
                <span className="px-2 py-0.5 bg-[#F5F1E8] border border-[#D9D1C4] text-stone-700 uppercase font-medium tracking-wider rounded-xs">
                  DISCRETIONARY AID
                </span>
              )}
            </div>

            <VerificationBadge
              status={resource.verificationStatus}
              lastVerifiedDate={resource.lastReviewedDate || resource.dateLastVerified}
              reopeningDate={resource.reopeningDate}
            />
          </div>

          {/* Program Name & Organization */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1C1D1D] group-hover:text-[#971F26] transition-colors font-serif leading-snug">
              {resource.name}
            </h3>
            <p className="text-xs text-stone-700 font-bold font-mono mt-0.5">
              {resource.organization} {resource.county ? `· ${resource.county} County` : ""}
            </p>
            {resource.statuteCitation && (
              <p className="text-[11px] font-mono text-[#971F26] font-bold mt-1 flex items-center gap-1">
                <Scale className="w-3.5 h-3.5 text-[#971F26]" />
                <span>Statute: {resource.statuteCitation}</span>
              </p>
            )}
          </div>

          {/* Optional Match Reason Badge */}
          {matchReason && (
            <MatchReasonBadge reason={matchReason} matchedTags={matchedTags} matchCertainty={matchCertainty} />
          )}

          {/* 1. WHAT IT ACTUALLY HELPS WITH / PROVIDES */}
          <div className="p-3.5 bg-[#F5F1E8] border-l-3 border-[#971F26] border border-[#D9D1C4] rounded-r-md text-xs text-stone-800 leading-relaxed shadow-2xs space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              1. What It Can Actually Help With:
            </span>
            <p className="text-stone-900 font-sans text-xs sm:text-[13px] font-medium leading-relaxed">
              {whatItHelps}
            </p>
            {resource.knownFundingLimits && (
              <p className="text-[11px] font-mono text-stone-700 font-semibold pt-1">
                • Funding Limit: {resource.knownFundingLimits}
              </p>
            )}
          </div>

          {/* 2. WHO CAN USE IT & ACCESS CONDITIONS */}
          <div className="space-y-1 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-600 font-bold block">
              2. Who Can Use It & Access Conditions:
            </span>
            <p className="text-xs text-[#1C1D1D] font-sans font-medium">
              {resource.eligibility}
            </p>

            {/* Quick Access Conditions Grid */}
            <div className="grid grid-cols-2 gap-1.5 pt-2 text-[10px] font-mono">
              <div className="p-1.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xs">
                <span className="text-stone-500 block text-[9px] uppercase">Income Restriction:</span>
                <span className="font-bold text-[#1C1D1D]">{resource.incomeRestriction || "None Stated"}</span>
              </div>
              <div className="p-1.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xs">
                <span className="text-stone-500 block text-[9px] uppercase">Referral Required:</span>
                <span className={`font-bold ${resource.referralRequirement?.includes("Advocate") ? "text-[#971F26]" : "text-[#1C1D1D]"}`}>
                  {resource.referralRequirement || "Self-apply"}
                </span>
              </div>
              <div className="p-1.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xs">
                <span className="text-stone-500 block text-[9px] uppercase">Shelter Connection:</span>
                <span className={`font-bold ${resource.shelterConnectionRequired ? "text-[#971F26]" : "text-stone-700"}`}>
                  {resource.shelterConnectionRequired ? "MANDATORY" : "Not Required"}
                </span>
              </div>
              <div className="p-1.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xs">
                <span className="text-stone-500 block text-[9px] uppercase">Police Report:</span>
                <span className={`font-bold ${resource.policeReportRequired ? "text-[#971F26]" : "text-stone-700"}`}>
                  {resource.policeReportRequired ? "MANDATORY" : "Not Required"}
                </span>
              </div>
            </div>
          </div>

          {/* 3. WHAT CAN BLOCK ACCESS (THE CATCH / FRICTION POINTS) */}
          <div className="p-3 bg-[#FDF2F2] border-2 border-[#971F26] rounded-md space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#971F26]" />
              <span>3. What Can Block Access (The Catch):</span>
            </span>
            <ul className="space-y-1 text-xs text-stone-900 font-sans">
              {blockReasons.map((f, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-snug">
                  <span className="text-[#971F26] font-bold font-mono shrink-0">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. WHAT TO DO NEXT */}
          <div className="space-y-1 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-600 font-bold block">
              4. Immediate Next Step:
            </span>
            <p className="text-xs text-stone-800 font-sans font-medium">
              {whatNext}
            </p>
          </div>
        </div>

        {/* Action Footer: Full Dossier + Official Link */}
        <div className="mt-5 pt-3 border-t border-[#D9D1C4] flex items-center justify-between gap-3 font-mono text-xs">
          <button
            onClick={() => setModalOpen(true)}
            className="text-xs font-bold text-[#1C1D1D] hover:text-[#971F26] flex items-center gap-1 group/btn underline decoration-stone-400"
          >
            <span>Full Requirements & Dossier</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          {(resource.website || resource.sourceUrl) && (
            <a
              href={resource.website || resource.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#971F26] hover:underline flex items-center gap-1 shrink-0 font-mono"
            >
              <span>Source URL</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </article>

      {/* Modal View */}
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
