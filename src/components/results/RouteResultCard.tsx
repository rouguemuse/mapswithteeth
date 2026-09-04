"use client";

import React, { useState } from "react";
import { ContinuityReceipt } from "@/domain/continuity/types";
import { SurvivorSituation, Unknownable } from "@/domain/intake/types";
import { getClarificationPromptsForUnknowns, ClarificationPrompt } from "@/domain/intake/questionDependencyMap";
import {
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Check,
  CornerDownRight,
  Sparkles
} from "lucide-react";

import { getPresentedBadges } from "@/domain/presentation/receiptPresentation";

interface RouteResultCardProps {
  receipt: ContinuityReceipt;
  situation: SurvivorSituation;
  onOpenReceipt: (receipt: ContinuityReceipt) => void;
  onClarifyFact?: (factKey: keyof SurvivorSituation, value: Unknownable<any>) => void;
}

export function RouteResultCard({
  receipt,
  situation,
  onOpenReceipt,
  onClarifyFact,
}: RouteResultCardProps) {
  const [showClarification, setShowClarification] = useState(true);

  // Look up structured follow-up prompts for unknown facts on possible routes
  const prompts: ClarificationPrompt[] =
    receipt.routeTier === "POSSIBLE_ROUTE" && onClarifyFact
      ? getClarificationPromptsForUnknowns(receipt.unknownFacts, situation)
      : [];

  // Determine badges using Phase 2 presentation layer
  const { tierBadge, readinessBadge } = getPresentedBadges(receipt);

  return (
    <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-sm bg-grid-atlas space-y-4 transition-all hover:shadow-md">
      {/* Card Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#D9D1C4] pb-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-600 block mb-0.5">
            {receipt.provider} · {receipt.resourceType || "RESOURCE"}
          </span>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1D1D] leading-tight">
            {receipt.resourceName}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className={`px-2.5 py-1 rounded border text-[10px] font-mono font-bold uppercase tracking-wider ${tierBadge.style}`}>
            {tierBadge.label}
          </span>
          {readinessBadge && (
            <span className={`px-2 py-0.5 rounded border text-[10px] font-mono font-medium uppercase tracking-wider ${readinessBadge.style}`}>
              {readinessBadge.label}
            </span>
          )}
        </div>
      </div>

      {/* Why This Showed Up */}
      <div className="space-y-1">
        <div className="text-[11px] font-mono uppercase tracking-wider text-stone-700 font-bold flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#971F26]" />
          <span>Why This Showed Up:</span>
        </div>
        <p className="text-xs sm:text-sm text-stone-900 leading-relaxed font-sans">
          {receipt.whyThisMayHelp}
        </p>
      </div>

      {/* Next Move */}
      <div className="bg-[#F5F1E8] p-3 rounded-lg border border-[#D9D1C4] space-y-1">
        <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#971F26] flex items-center gap-1">
          <CornerDownRight className="w-3.5 h-3.5" />
          <span>Next Move:</span>
        </div>
        <p className="text-xs font-medium text-[#1C1D1D] leading-snug">
          {receipt.nextAction}
        </p>
      </div>

      {/* Interactive Missing Fact Clarification (For POSSIBLE routes) */}
      {receipt.routeTier === "POSSIBLE_ROUTE" && prompts.length > 0 && showClarification && onClarifyFact && (
        <div className="bg-[#FAF5FF] border-2 border-[#9333EA] p-4 rounded-lg space-y-3 shadow-2xs">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#6B21A8]">
            <Sparkles className="w-4 h-4" />
            <span>We need one more thing to evaluate this route:</span>
          </div>

          {prompts.slice(0, 1).map((p) => (
            <div key={p.question.id} className="space-y-2">
              <p className="text-xs font-medium text-[#1C1D1D]">
                {p.shortPrompt}
              </p>

              {p.question.answerType === "YES_NO_UNKNOWN" && (
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => onClarifyFact(p.factKey, true)}
                    className="px-3.5 py-1.5 bg-[#2D5A3D] text-white rounded text-xs font-mono font-bold uppercase cursor-pointer hover:bg-[#234730]"
                  >
                    YES
                  </button>
                  <button
                    type="button"
                    onClick={() => onClarifyFact(p.factKey, false)}
                    className="px-3.5 py-1.5 bg-[#971F26] text-white rounded text-xs font-mono font-bold uppercase cursor-pointer hover:bg-[#80191F]"
                  >
                    NO
                  </button>
                  <button
                    type="button"
                    onClick={() => onClarifyFact(p.factKey, "UNKNOWN")}
                    className="px-3.5 py-1.5 bg-[#1C1D1D] text-white rounded text-xs font-mono font-bold uppercase cursor-pointer hover:bg-stone-800"
                  >
                    I'M NOT SURE
                  </button>
                </div>
              )}

              {p.question.answerType === "SELECT_UNKNOWN" && p.question.options && (
                <div className="flex flex-wrap gap-2">
                  {p.question.options.map((opt) => (
                    <button
                      key={String(opt.value)}
                      type="button"
                      onClick={() => onClarifyFact(p.factKey, opt.value)}
                      className="px-3 py-1.5 bg-[#F5F1E8] border border-[#1C1D1D] hover:bg-stone-200 rounded text-xs font-mono text-[#1C1D1D] cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Blocked Reason (For Blocked Cards) */}
      {receipt.routeTier === "BLOCKED" && receipt.knownBlockers.length > 0 && (
        <div className="bg-[#FDF2F2] border border-[#971F26] p-3 rounded-lg text-xs text-[#1C1D1D] space-y-1">
          <div className="font-mono font-bold text-[#971F26] flex items-center gap-1 text-[11px] uppercase">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Why This May Not Work:</span>
          </div>
          <p className="text-stone-800 leading-snug">
            {receipt.knownBlockers.join("; ")}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => onOpenReceipt(receipt)}
          className="px-4 py-2 bg-[#F5F1E8] hover:bg-stone-200 border-2 border-[#1C1D1D] rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D1D] flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
        >
          <span>See the Details</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <a
          href={receipt.sourceReferences.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#971F26] hover:underline font-mono font-bold flex items-center gap-1 cursor-pointer"
        >
          <span>Go to Resource</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
