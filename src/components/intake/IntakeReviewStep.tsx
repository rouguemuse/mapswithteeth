"use client";

import React from "react";
import { INTAKE_PROBLEM_NEEDS } from "@/domain/intake/needRegistry";
import { INTAKE_QUESTIONS } from "@/domain/intake/questionRegistry";
import { SurvivorSituation } from "@/domain/intake/types";
import {
  CheckCircle2,
  HelpCircle,
  XCircle,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Edit3,
  Compass,
  AlertTriangle,
  Sparkles
} from "lucide-react";

interface IntakeReviewStepProps {
  selectedNeedIds: string[];
  situation: SurvivorSituation;
  hasActiveConflicts?: boolean;
  onEditProblems: () => void;
  onEditLocation: () => void;
  onEditDetails: () => void;
  onClarifyConflict?: () => void;
  onRunMatcher: () => void;
}

export function IntakeReviewStep({
  selectedNeedIds,
  situation,
  hasActiveConflicts = false,
  onEditProblems,
  onEditLocation,
  onEditDetails,
  onClarifyConflict,
  onRunMatcher,
}: IntakeReviewStepProps) {
  const selectedNeeds = INTAKE_PROBLEM_NEEDS.filter((n) => selectedNeedIds.includes(n.id));

  // Partition answered questions into confirmed facts and unknowns
  const confirmedPositiveFacts: { prompt: string; field: string }[] = [];
  const confirmedNegativeFacts: { prompt: string; field: string }[] = [];
  const unknownFacts: { prompt: string; field: string }[] = [];

  INTAKE_QUESTIONS.forEach((q) => {
    // Only check questions relevant to selected needs
    if (q.triggeringNeeds.some((tn) => selectedNeedIds.includes(tn))) {
      const val = situation[q.survivorSituationField];
      if (val === true) {
        confirmedPositiveFacts.push({ prompt: q.plainLanguagePrompt, field: q.survivorSituationField });
      } else if (val === false) {
        confirmedNegativeFacts.push({ prompt: q.plainLanguagePrompt, field: q.survivorSituationField });
      } else if (val !== undefined && val !== "UNKNOWN") {
        let displayVal = String(val);
        if (q.options) {
          const matchedOpt = q.options.find((opt) => opt.value === val);
          if (matchedOpt) displayVal = matchedOpt.label;
        }
        confirmedPositiveFacts.push({ prompt: `${q.plainLanguagePrompt}: ${displayVal}`, field: q.survivorSituationField });
      } else {
        unknownFacts.push({ prompt: q.plainLanguagePrompt, field: q.survivorSituationField });
      }
    }
  });

  return (
    <div className="space-y-8 animate-fadeIn font-sans select-none">
      {/* Review Header */}
      <div className="border-b border-[#D9D1C4] pb-5">
        <div className="flex items-center gap-2 text-[#971F26] mb-1">
          <Compass className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            PRE-MATCH REVIEW · WHAT YOU TOLD US
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Review your situation before matching
        </h2>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed">
          Check that what we recorded looks right. You are not submitting an application — this runs the deterministic matcher in your browser right now.
        </p>
      </div>

      {/* Active Conflict Warning if any */}
      {hasActiveConflicts && (
        <div className="p-4 bg-[#FEF3C7] border-2 border-[#D97706] rounded-xl text-xs space-y-2 animate-fadeIn">
          <div className="font-bold text-[#92400E] flex items-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>Quick clarification needed before matching</span>
          </div>
          <p className="text-stone-800 leading-relaxed">
            There is an answer that needs quick clarification so we don't accidentally block programs that could help you.
          </p>
          {onClarifyConflict && (
            <button
              type="button"
              onClick={onClarifyConflict}
              className="px-4 py-2 bg-[#92400E] hover:bg-[#78350F] text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs mt-1"
            >
              <span>Clarify Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Review Cards Grid */}
      <div className="space-y-5">
        {/* 1. Stated Problems & Needs */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-sm bg-grid-atlas space-y-3">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
            <h3 className="text-sm font-serif font-bold text-[#1C1D1D] uppercase tracking-wide">
              1. What You Need ({selectedNeeds.length} Selected)
            </h3>
            <button
              type="button"
              onClick={onEditProblems}
              className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          </div>

          <ul className="space-y-1.5 pt-1">
            {selectedNeeds.map((need) => (
              <li key={need.id} className="text-xs text-[#1C1D1D] flex items-start gap-2">
                <span className="text-[#971F26] font-bold">•</span>
                <span>{need.plainLanguageLabel}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Location */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-sm bg-grid-atlas space-y-3">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
            <h3 className="text-sm font-serif font-bold text-[#1C1D1D] uppercase tracking-wide">
              2. Your Location
            </h3>
            <button
              type="button"
              onClick={onEditLocation}
              className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          </div>

          <div className="text-xs text-[#1C1D1D] pt-1">
            {situation.state === "TX" ? (
              <span>
                State: <strong>Texas</strong> | County: <strong>{situation.county === "UNKNOWN" ? "Statewide / All Counties" : `${situation.county} County`}</strong>
              </span>
            ) : situation.state === "UNKNOWN" ? (
              <span>Location: <strong>I'm not sure / Location-independent</strong></span>
            ) : (
              <span>State: <strong>{situation.state} (Nationwide Pathways)</strong></span>
            )}
          </div>
        </div>

        {/* 3. Confirmed & Unknown Details */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-sm bg-grid-atlas space-y-4">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
            <h3 className="text-sm font-serif font-bold text-[#1C1D1D] uppercase tracking-wide">
              3. What We Know & What's Still Unknown
            </h3>
            <button
              type="button"
              onClick={onEditDetails}
              className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          </div>

          {confirmedPositiveFacts.length === 0 && confirmedNegativeFacts.length === 0 && unknownFacts.length === 0 ? (
            <p className="text-xs text-stone-600 italic">No additional qualification details required.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Confirmed Facts */}
              <div className="space-y-2 bg-[#F5F1E8] p-3 rounded-lg border border-[#D9D1C4]">
                <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#2D5A3D] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Confirmed Facts:</span>
                </div>
                {confirmedPositiveFacts.length === 0 && confirmedNegativeFacts.length === 0 ? (
                  <p className="text-[11px] text-stone-500 italic">None answered yes/no yet.</p>
                ) : (
                  <ul className="space-y-1">
                    {confirmedPositiveFacts.map((f, i) => (
                      <li key={i} className="text-[11px] text-stone-800 flex items-start gap-1.5">
                        <span className="text-[#2D5A3D] font-bold">✓</span>
                        <span>{f.prompt}</span>
                      </li>
                    ))}
                    {confirmedNegativeFacts.map((f, i) => (
                      <li key={i} className="text-[11px] text-stone-800 flex items-start gap-1.5">
                        <span className="text-[#971F26] font-bold">×</span>
                        <span>No: {f.prompt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Unknown Facts */}
              <div className="space-y-2 bg-[#F5F1E8] p-3 rounded-lg border border-[#D9D1C4]">
                <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#92400E] flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Uncertain / Not Answered Yet:</span>
                </div>
                {unknownFacts.length === 0 ? (
                  <p className="text-[11px] text-stone-500 italic">All triggered details have been answered.</p>
                ) : (
                  <ul className="space-y-1">
                    {unknownFacts.map((f, i) => (
                      <li key={i} className="text-[11px] text-stone-700 flex items-start gap-1.5">
                        <span className="text-[#92400E] font-bold">?</span>
                        <span>{f.prompt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl text-xs space-y-1">
        <div className="text-xs text-[#1C1D1D] flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-[#2D5A3D] shrink-0 mt-0.5" />
          <span>
            <strong>Client-Side Processing:</strong> Your answers are evaluated in-memory right now by the deterministic matching engine. No names, email addresses, phone numbers, or abuse stories are collected or saved.
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#D9D1C4]">
        <button
          type="button"
          onClick={onEditDetails}
          className="px-5 py-2.5 rounded-lg border-2 border-[#1C1D1D] bg-[#EEE8DD] hover:bg-stone-200 text-[#1C1D1D] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Details</span>
        </button>

        <button
          type="button"
          onClick={onRunMatcher}
          disabled={hasActiveConflicts}
          className={`px-8 py-3.5 rounded-lg border-2 border-[#1C1D1D] font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-sm ${
            hasActiveConflicts
              ? "bg-stone-300 text-stone-500 border-stone-400 cursor-not-allowed"
              : "bg-[#971F26] hover:bg-[#80191F] text-white cursor-pointer animate-pulse-gentle"
          }`}
        >
          <span>SHOW MY ROUTES</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
