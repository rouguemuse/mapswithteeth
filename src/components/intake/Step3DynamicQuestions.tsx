"use client";

import React from "react";
import { ResourceIntakeData } from "@/types/intake";
import { FACT_DEFINITIONS } from "@/data/factsRegistry";
import { getTriggeredCandidateProfiles, getUnresolvedFactKeys } from "@/domain/matching/dynamicMatcher";
import { WhyAskingTooltip } from "./WhyAskingTooltip";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

export function Step3DynamicQuestions({
  formData,
  setFormData,
  onSubmit,
  onBack,
}: {
  formData: ResourceIntakeData;
  setFormData: React.Dispatch<React.SetStateAction<ResourceIntakeData>>;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}) {
  // 1. Determine which candidate profiles were triggered by known facts
  const candidateProfiles = getTriggeredCandidateProfiles(formData as any);

  // 2. Identify only the deduplicated unresolved facts required by those candidate programs
  const unresolvedFactKeys = getUnresolvedFactKeys(candidateProfiles, formData as any);

  // Helper to update a single fact dynamically
  const updateFact = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 animate-fadeIn font-sans select-none">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-3 mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
              STEP 3 · RESOURCE-DRIVEN QUALIFIER DEEP-DIVES
            </span>
          </div>
          <span className="coord-tick text-[9.5px]">
            [{candidateProfiles.length} CANDIDATE PROGRAMS TRIGGERED]
          </span>
        </div>

        <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
          {unresolvedFactKeys.length > 0
            ? `A few programs may apply. We need ${unresolvedFactKeys.length} more ${unresolvedFactKeys.length === 1 ? "detail" : "details"} to check them:`
            : "All qualification facts resolved for candidate programs"}
        </h3>
        <p className="text-xs text-stone-700 mt-1 leading-relaxed font-sans">
          {unresolvedFactKeys.length > 0
            ? "These targeted questions are generated directly from the eligibility rules of candidate programs unlocked by your previous answers."
            : "No additional qualification details are needed. Your answers are ready for deterministic evaluation."}
        </p>
      </div>

      {/* Dynamic Unresolved Questions List */}
      {unresolvedFactKeys.length > 0 ? (
        <div className="space-y-4">
          {unresolvedFactKeys.map((factKey) => {
            const def = FACT_DEFINITIONS[factKey];
            if (!def) return null;

            const currentValue = (formData as any)[factKey];

            return (
              <div
                key={factKey}
                className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-2 shadow-2xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <label className="block text-xs font-bold text-[#1C1D1D] font-mono">
                      {def.label}
                      <WhyAskingTooltip explanation={def.whyAsked} />
                    </label>
                    {def.sublabel && (
                      <p className="text-[11px] text-stone-600 font-sans mt-0.5">{def.sublabel}</p>
                    )}
                  </div>
                  <span className="text-[9px] font-mono text-[#971F26] uppercase font-bold tracking-wider shrink-0">
                    [{def.category}]
                  </span>
                </div>

                {/* Boolean Input */}
                {def.type === "boolean" && (
                  <div className="flex items-center gap-4 pt-1">
                    <label className="flex items-center gap-2 text-xs text-[#1C1D1D] cursor-pointer font-mono font-medium">
                      <input
                        type="radio"
                        name={factKey}
                        checked={currentValue === true}
                        onChange={() => updateFact(factKey, true)}
                        className="w-4 h-4 text-[#971F26] focus:ring-0"
                      />
                      <span>Yes</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs text-[#1C1D1D] cursor-pointer font-mono font-medium">
                      <input
                        type="radio"
                        name={factKey}
                        checked={currentValue === false}
                        onChange={() => updateFact(factKey, false)}
                        className="w-4 h-4 text-[#971F26] focus:ring-0"
                      />
                      <span>No</span>
                    </label>
                  </div>
                )}

                {/* Select Input */}
                {def.type === "select" && def.options && (
                  <select
                    value={currentValue !== undefined ? currentValue : def.defaultValue || def.options[0]?.value}
                    onChange={(e) => updateFact(factKey, e.target.value)}
                    className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono font-medium focus:outline-none focus:border-[#971F26]"
                  >
                    {def.options.map((opt) => (
                      <option key={String(opt.value)} value={String(opt.value)}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-5 bg-[#E8F3EB] border-2 border-[#2D5A3D] rounded-lg text-xs text-[#2D5A3D] space-y-1">
          <div className="flex items-center gap-2 font-bold font-mono text-sm">
            <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />
            <span>Candidate Evaluation Set Ready</span>
          </div>
          <p className="text-stone-800 leading-relaxed font-sans text-xs">
            We have all the factual triggers needed to test your profile against our verified eligibility rules and statutory protections.
          </p>
        </div>
      )}

      {/* Privacy Guarantee */}
      <div className="p-3 bg-[#F5F1E8] border border-[#D9D1C4] rounded-md text-[11px] text-stone-700 space-y-1">
        <div className="flex items-center gap-1.5 font-bold text-[#1C1D1D] font-mono text-[10px] uppercase">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A3D]" />
          <span>Privacy & Data Minimization:</span>
        </div>
        <p className="text-stone-600">
          Sensitive intake responses are evaluated in-memory and are not intentionally persisted to local storage. Zero names, zero SSNs, and zero abuse narratives required.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-[#D9D1C4]">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-[#F5F1E8] border border-[#1C1D1D] hover:bg-stone-200 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="submit"
          className="px-6 py-2.5 bg-[#971F26] text-white hover:bg-red-800 rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-xs"
        >
          <span>Calculate Deterministic Matches</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
