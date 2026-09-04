"use client";

import React, { useState } from "react";
import { DeterministicMatchOutput } from "@/domain/continuity/types";
import { SurvivorSituation } from "@/domain/intake/types";
import { Bug, ChevronDown, ChevronUp, Terminal } from "lucide-react";

interface DevDiagnosticDrawerProps {
  situation: SurvivorSituation;
  matchOutput: DeterministicMatchOutput | null;
}

export function DevDiagnosticDrawer({ situation, matchOutput }: DevDiagnosticDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // In production builds, do not render diagnostic tool
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="border-2 border-[#971F26] bg-[#1C1D1D] text-[#EEE8DD] rounded-xl overflow-hidden font-mono text-xs my-8 select-text">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3.5 bg-[#2B1B1B] hover:bg-[#382222] flex items-center justify-between text-left cursor-pointer border-b border-[#971F26]/50"
      >
        <div className="flex items-center gap-2 text-[#FCA5A5]">
          <Terminal className="w-4 h-4 text-[#EF4444]" />
          <span className="font-bold tracking-wider uppercase text-[11px]">
            DEV DIAGNOSTIC INSPECTOR (FROZEN MATCHER TRACE)
          </span>
        </div>
        <div className="flex items-center gap-2 text-stone-400 text-[11px]">
          <span>{isOpen ? "Hide Diagnostics" : "Inspect Raw Output"}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
          {/* Summary stats */}
          {matchOutput && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] bg-black/40 p-2.5 rounded border border-stone-700">
              <div>
                Matched: <strong className="text-emerald-400">{matchOutput.matchedRoutes.length}</strong>
              </div>
              <div>
                Possible: <strong className="text-amber-400">{matchOutput.possibleRoutes.length}</strong>
              </div>
              <div>
                Blocked: <strong className="text-rose-400">{matchOutput.blockedRoutes.length}</strong>
              </div>
              <div>
                Gaps: <strong className="text-sky-400">{matchOutput.catalogGaps.length}</strong>
              </div>
            </div>
          )}

          {/* 5-Dimensional State Breakdown */}
          {matchOutput && (
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-stone-400 font-bold block">
                Evaluated Routes & 5-Dimensional States:
              </span>
              <div className="space-y-1.5">
                {[...matchOutput.matchedRoutes, ...matchOutput.possibleRoutes, ...matchOutput.blockedRoutes].map((r) => (
                  <div key={r.receiptId} className="p-2 bg-stone-900 rounded border border-stone-800 text-[10px] space-y-0.5">
                    <div className="flex justify-between font-bold">
                      <span className="text-amber-200">{r.resourceId}</span>
                      <span className="text-stone-400">[{r.routeTier}]</span>
                    </div>
                    <div className="text-stone-300">
                      Relevance: <span className="text-emerald-300">{r.relevanceStatus}</span> ({r.relevanceReasonCode}) | 
                      Applicability: <span className="text-blue-300">{r.applicabilityStatus}</span> | 
                      Eligibility: <span className="text-purple-300">{r.eligibilityStatus}</span> | 
                      Readiness: <span className="text-amber-300">{r.readinessStatus}</span> | 
                      Availability: <span className="text-cyan-300">{r.availabilityStatus}</span>
                    </div>
                    {r.knownBlockers.length > 0 && (
                      <div className="text-rose-400">Blockers: {r.knownBlockers.join("; ")}</div>
                    )}
                    {r.unknownFacts.length > 0 && (
                      <div className="text-amber-300">Unknowns: {r.unknownFacts.join("; ")}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Raw Survivor Situation Payload */}
          <div className="space-y-1">
            <span className="text-[10px] uppercase text-stone-400 font-bold block">
              In-Memory SurvivorSituation:
            </span>
            <pre className="p-3 bg-black/60 rounded border border-stone-800 text-[10px] text-emerald-300 overflow-x-auto">
              {JSON.stringify(situation, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
