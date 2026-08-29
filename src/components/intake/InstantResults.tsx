"use client";

import React from "react";
import { MatchResult } from "@/data/matcher";
import { ResourceCard } from "../resources/ResourceCard";
import { FileText } from "lucide-react";

export function InstantResults({
  matchResult,
  onReset,
}: {
  matchResult: MatchResult;
  onReset: () => void;
}) {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      {/* Header Summary Banner */}
      <div className="bg-brand-paper border border-brand-sand rounded-xl p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-sand pb-4 mb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold block mb-1">
              ✓ Instant Investigation Complete
            </span>
            <h2 className="text-2xl font-serif font-bold text-brand-charcoal">
              We found {matchResult.matches.length} potential pathways worth checking right now:
            </h2>
          </div>
          <button
            onClick={onReset}
            className="text-xs text-brand-oxblood hover:underline font-mono font-bold"
          >
            Modify Levers / Search Again
          </button>
        </div>

        {/* Match Breakdown Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono text-stone-800">
          {matchResult.breakdown.locationCount > 0 && (
            <span className="px-2.5 py-1 bg-brand-ivory border border-stone-300 rounded shadow-sm">
              📍 {matchResult.breakdown.locationCount} based on where you live
            </span>
          )}
          {matchResult.breakdown.workCount > 0 && (
            <span className="px-2.5 py-1 bg-brand-ivory border border-stone-300 rounded shadow-sm">
              💼 {matchResult.breakdown.workCount} based on your work history
            </span>
          )}
          {matchResult.breakdown.petCount > 0 && (
            <span className="px-2.5 py-1 bg-brand-ivory border border-stone-300 rounded shadow-sm">
              🐕 {matchResult.breakdown.petCount} based on having a pet
            </span>
          )}
          {matchResult.breakdown.utilityCount > 0 && (
            <span className="px-2.5 py-1 bg-brand-ivory border border-stone-300 rounded shadow-sm">
              ⚡ {matchResult.breakdown.utilityCount} related to utility deposit/bills
            </span>
          )}
          {matchResult.breakdown.nationwideCount > 0 && (
            <span className="px-2.5 py-1 bg-brand-ivory border border-stone-300 rounded shadow-sm">
              🛡️ {matchResult.breakdown.nationwideCount} nationwide escape tools
            </span>
          )}
        </div>
      </div>

      {/* Matched Resources Grid */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal font-mono">
          Potential Matches (Verify Current Program Availability):
        </h3>
        {matchResult.matches.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
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
          <div className="p-8 text-center bg-brand-paper rounded-xl border border-stone-300 text-stone-600 text-xs font-mono">
            No direct preset match found. Your investigation docket has been recorded in the research queue.
          </div>
        )}
      </div>

      {/* Structured Research Docket Preview */}
      {matchResult.docket && (
        <div className="bg-brand-paper border border-brand-sand rounded-xl p-6 text-xs text-stone-700 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-brand-sand pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-oxblood" />
              <span className="font-mono font-bold text-brand-charcoal uppercase tracking-wider">
                Generated Resource Graph Docket: {matchResult.docket.docketId}
              </span>
            </div>
            <span className="text-[10px] font-mono text-stone-500">
              Data-Minimized Research Format
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-bold text-brand-charcoal uppercase text-[11px] mb-2 font-mono">
                Identified Resource Levers:
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-stone-700 font-sans">
                {matchResult.docket.resourceLevers.map((lever, i) => (
                  <li key={i}>
                    <strong className="text-brand-charcoal">{lever.lever}:</strong> {lever.whyItMatters}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-charcoal uppercase text-[11px] mb-2 font-mono">
                10-Point Research Priorities:
              </h4>
              <ol className="space-y-1 text-stone-700 font-mono text-[11px]">
                {matchResult.docket.researchPaths.slice(0, 5).map((path, i) => (
                  <li key={i}>{path}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
