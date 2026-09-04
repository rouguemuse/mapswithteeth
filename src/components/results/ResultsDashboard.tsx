"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DeterministicMatchOutput, ContinuityReceipt } from "@/domain/continuity/types";
import { SurvivorSituation, Unknownable } from "@/domain/intake/types";
import { RouteResultCard } from "./RouteResultCard";
import { ContinuityReceiptModal } from "./ContinuityReceiptModal";
import { DevDiagnosticDrawer } from "./DevDiagnosticDrawer";
import {
  Compass,
  ArrowLeft,
  ShieldCheck,
  AlertOctagon,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  FileQuestion,
  Search,
  ExternalLink,
  ShieldAlert
} from "lucide-react";

interface ResultsDashboardProps {
  situation: SurvivorSituation;
  matchOutput: DeterministicMatchOutput;
  onModifySituation: () => void;
  onReset: () => void;
  onClarifyFact: (factKey: keyof SurvivorSituation, value: Unknownable<any>) => void;
}

export function ResultsDashboard({
  situation,
  matchOutput,
  onModifySituation,
  onReset,
  onClarifyFact,
}: ResultsDashboardProps) {
  const [selectedReceipt, setSelectedReceipt] = useState<ContinuityReceipt | null>(null);

  // Partition routes into the 4 architectural result tiers
  const startHereRoutes = matchOutput.matchedRoutes.filter(
    (r) => r.routeTier === "STRONG_ROUTE"
  );

  const worthCheckingRoutes = [
    ...matchOutput.matchedRoutes.filter((r) => r.routeTier === "CONDITIONAL_ROUTE"),
    ...matchOutput.possibleRoutes,
  ];

  // Show blocked routes only if they were RELEVANT to the stated needs (to explain why a sought program doesn't work)
  const mayNotWorkRoutes = matchOutput.blockedRoutes.filter(
    (r) => r.relevanceStatus === "RELEVANT"
  );

  const catalogGaps = matchOutput.catalogGaps;

  return (
    <div className="space-y-8 animate-fadeIn font-sans select-none">
      {/* Top Navigation & Safety Header */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 shadow-sm bg-grid-atlas space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-4">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              DETERMINISTIC ROUTE EVALUATION
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onModifySituation}
              className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Modify Details</span>
            </button>
            <span className="text-stone-300">|</span>
            <button
              type="button"
              onClick={onReset}
              className="text-xs font-mono font-bold text-stone-600 hover:text-[#1C1D1D] hover:underline cursor-pointer"
            >
              Start Over
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            Here is what is worth your time right now
          </h1>
          <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed">
            We evaluated your situation against 47 audited resources and statutory rights. Below, we've separated immediate strong routes from those needing clarification, along with honest notes on what may not work.
          </p>
        </div>

        {/* Breakdown Stats */}
        <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
          <span className="px-2.5 py-1 bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] rounded font-bold">
            ✓ {startHereRoutes.length} Strong Actionable Routes
          </span>
          <span className="px-2.5 py-1 bg-[#FEF3C7] border border-[#D97706] text-[#92400E] rounded font-bold">
            ◐ {worthCheckingRoutes.length} Worth Checking / Need Info
          </span>
          {mayNotWorkRoutes.length > 0 && (
            <span className="px-2.5 py-1 bg-[#FEE2E2] border border-[#DC2626] text-[#991B1B] rounded font-bold">
              × {mayNotWorkRoutes.length} Blocked Relevant Routes
            </span>
          )}
          {catalogGaps.length > 0 && (
            <span className="px-2.5 py-1 bg-[#F5F1E8] border border-[#1C1D1D] text-stone-800 rounded font-bold">
              ! {catalogGaps.length} Catalog Gap{catalogGaps.length > 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>

      {/* SECTION A: START HERE (Strong, actionable routes) */}
      <div className="space-y-4">
        <div className="border-b-2 border-[#2D5A3D] pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#2D5A3D]" />
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1C1D1D]">
              A. START HERE ({startHereRoutes.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-[#2D5A3D] font-bold">
            Highest Actionability & Criteria Met
          </span>
        </div>

        {startHereRoutes.length === 0 ? (
          <div className="p-6 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xl text-xs text-stone-700 space-y-1">
            <p className="font-bold text-[#1C1D1D]">No immediate confirmed routes matched all criteria.</p>
            <p>
              This usually happens when key qualification facts are unknown or when needs fall into specialized programs. Check the <strong>"Worth Checking"</strong> section below to clarify missing facts.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {startHereRoutes.map((receipt) => (
              <RouteResultCard
                key={receipt.receiptId}
                receipt={receipt}
                situation={situation}
                onOpenReceipt={(r) => setSelectedReceipt(r)}
                onClarifyFact={onClarifyFact}
              />
            ))}
          </div>
        )}
      </div>

      {/* SECTION B: WORTH CHECKING (Possible & Conditional Routes) */}
      <div className="space-y-4 pt-4">
        <div className="border-b-2 border-[#D97706] pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D97706]" />
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1C1D1D]">
              B. WORTH CHECKING ({worthCheckingRoutes.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-[#92400E] font-bold">
            Discretionary, Variable, or Needs 1 Fact
          </span>
        </div>

        {worthCheckingRoutes.length === 0 ? (
          <div className="p-6 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xl text-xs text-stone-700">
            No additional conditional or possible routes identified.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {worthCheckingRoutes.map((receipt) => (
              <RouteResultCard
                key={receipt.receiptId}
                receipt={receipt}
                situation={situation}
                onOpenReceipt={(r) => setSelectedReceipt(r)}
                onClarifyFact={onClarifyFact}
              />
            ))}
          </div>
        )}
      </div>

      {/* SECTION C: MAY NOT WORK (Blocked Routes Matching Needs) */}
      {mayNotWorkRoutes.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="border-b-2 border-[#DC2626] pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1C1D1D]">
                C. MAY NOT WORK ({mayNotWorkRoutes.length})
              </h2>
            </div>
            <span className="text-xs font-mono text-[#991B1B] font-bold">
              Specific Blockers Identified to Prevent Wasted Time
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {mayNotWorkRoutes.map((receipt) => (
              <RouteResultCard
                key={receipt.receiptId}
                receipt={receipt}
                situation={situation}
                onOpenReceipt={(r) => setSelectedReceipt(r)}
              />
            ))}
          </div>
        </div>
      )}

      {/* SECTION D: WE DON'T HAVE A GOOD ROUTE YET (Catalog Gaps) */}
      {catalogGaps.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="border-b-2 border-[#1C1D1D] pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1C1D1D]" />
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1C1D1D]">
                D. WE DON'T HAVE A VERIFIED ROUTE FOR THIS YET ({catalogGaps.length})
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-700 font-bold">
              Identified Catalog Gaps & Research Levers
            </span>
          </div>

          <div className="space-y-4">
            {catalogGaps.map((gap) => (
              <div
                key={gap.gapId}
                className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-sm bg-grid-atlas space-y-3"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#971F26] font-bold block mb-1">
                    CATALOG GAP · {gap.unmetNeedOrBarrier.toUpperCase()}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#1C1D1D]">
                    {gap.unmetNeedOrBarrier}
                  </h3>
                  <p className="text-xs text-stone-800 mt-1 font-sans">
                    {gap.reasonUnmetInRegistry}
                  </p>
                </div>

                {gap.suggestedAlternativeStatutoryOrInstitutionalLevers.length > 0 && (
                  <div className="bg-[#F5F1E8] p-3 rounded-lg border border-[#D9D1C4] space-y-1">
                    <span className="text-[10px] font-mono font-bold text-stone-700 uppercase block">
                      Adjacent Levers to Explore:
                    </span>
                    <ul className="space-y-0.5 text-xs text-stone-900">
                      {gap.suggestedAlternativeStatutoryOrInstitutionalLevers.map((lever, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#971F26] font-bold">•</span>
                          <span>{lever}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/ask-us-to-look"
                    className="text-xs text-[#971F26] hover:underline font-mono font-bold flex items-center gap-1"
                  >
                    <span>Request Custom Research via Research Desk</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dev Diagnostic Inspector */}
      <DevDiagnosticDrawer situation={situation} matchOutput={matchOutput} />

      {/* Detail Modal / Mobile Sheet */}
      <ContinuityReceiptModal
        receipt={selectedReceipt}
        onClose={() => setSelectedReceipt(null)}
      />
    </div>
  );
}
