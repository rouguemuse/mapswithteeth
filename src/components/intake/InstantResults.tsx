"use client";

import React from "react";
import { MatchResult } from "@/data/matcher";
import { ResourceCard } from "../resources/ResourceCard";
import { FileText, Compass, ArrowRight, CornerDownRight, ShieldCheck } from "lucide-react";

export function InstantResults({
  matchResult,
  onReset,
}: {
  matchResult: MatchResult;
  onReset: () => void;
}) {
  return (
    <div className="space-y-8 animate-fadeIn select-none font-sans">
      {/* Header Summary Banner */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 shadow-sm bg-grid-atlas">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-4 mb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold block mb-1">
              ✓ INSTANT MATCHING DOCKET COMPILED
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#1C1D1D]">
              We found {matchResult.matches.length} potential pathways worth checking:
            </h2>
          </div>
          <button
            onClick={onReset}
            className="text-xs text-[#971F26] hover:underline font-mono font-bold"
          >
            ← Modify Levers / Search Again
          </button>
        </div>

        {/* Match Breakdown Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono text-stone-800">
          {matchResult.breakdown.locationCount > 0 && (
            <span className="stamp-verified bg-[#F5F1E8]">
              📍 {matchResult.breakdown.locationCount} County / Location Matches
            </span>
          )}
          {matchResult.breakdown.workCount > 0 && (
            <span className="stamp-verified bg-[#F5F1E8]">
              💼 {matchResult.breakdown.workCount} Work / Industry Hardship Funds
            </span>
          )}
          {matchResult.breakdown.petCount > 0 && (
            <span className="stamp-verified bg-[#F5F1E8]">
              🐕 {matchResult.breakdown.petCount} Companion Animal Boarding/Foster
            </span>
          )}
          {matchResult.breakdown.utilityCount > 0 && (
            <span className="stamp-verified bg-[#F5F1E8]">
              ⚡ {matchResult.breakdown.utilityCount} Utility Deposit Waivers
            </span>
          )}
          {matchResult.breakdown.nationwideCount > 0 && (
            <span className="stamp-verified bg-[#F5F1E8]">
              🛡️ {matchResult.breakdown.nationwideCount} Nationwide Escape Rights
            </span>
          )}
        </div>
      </div>

      {/* Generated Research Docket */}
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileText className="w-5 h-5" />
            <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
              Generated Investigation Docket #{matchResult.docket.docketId}
            </h3>
          </div>
          <span className="coord-tick">
            [{matchResult.docket.locationSummary}]
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              Identified Resource Levers:
            </span>
            <div className="space-y-2 text-xs font-sans">
              {matchResult.docket.resourceLevers.map((lever, i) => (
                <div key={i} className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded-md space-y-0.5">
                  <p className="font-bold text-[#1C1D1D]">{lever.lever}</p>
                  <p className="text-stone-700">{lever.whyItMatters}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              Recommended Investigation Steps:
            </span>
            <ul className="space-y-2 text-xs font-sans text-stone-900">
              {matchResult.docket.researchPaths.map((p, i) => (
                <li key={i} className="p-2.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded flex items-start gap-2">
                  <span className="font-mono font-bold text-[#971F26]">{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Matched Resources Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
          <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
            Surfaced Pathways ({matchResult.matches.length})
          </h3>
          <span className="coord-tick">[REVIEW ACCESS CONDITIONS CAREFULLY]</span>
        </div>

        {matchResult.matches.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {matchResult.matches.map((m) => (
              <ResourceCard
                key={m.resource.id}
                resource={m.resource}
                matchReason={m.matchReason}
                matchedTags={m.matchedTags}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-8 text-center space-y-3">
            <p className="text-base font-bold text-[#1C1D1D] font-serif">No immediate match surfaced for this specific combination.</p>
            <button
              onClick={onReset}
              className="px-4 py-2 bg-[#971F26] text-white rounded-md text-xs font-mono font-bold uppercase"
            >
              Modify Levers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
