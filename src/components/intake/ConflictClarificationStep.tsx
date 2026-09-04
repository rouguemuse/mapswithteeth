"use client";

import React from "react";
import { FactResolution, ConflictClarificationPrompt } from "@/domain/intake/reconciliation/types";
import { HelpCircle, Sparkles, Check, ArrowRight, ArrowLeft } from "lucide-react";

interface ConflictClarificationStepProps {
  conflict: FactResolution<any>;
  onResolve: (factKey: string, resolvedValue: any) => void;
  onBack: () => void;
}

export function ConflictClarificationStep({
  conflict,
  onResolve,
  onBack,
}: ConflictClarificationStepProps) {
  const prompt: ConflictClarificationPrompt | undefined = conflict.clarificationPrompt;

  if (!prompt) return null;

  return (
    <div className="space-y-6 animate-fadeIn font-sans select-none">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-5">
        <div className="flex items-center gap-2 text-[#971F26] mb-1.5">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            QUICK CLARIFICATION BEFORE MATCHING
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          {prompt.title}
        </h2>
        <p className="text-sm sm:text-base text-stone-800 mt-2 max-w-2xl leading-relaxed font-medium">
          {prompt.prompt}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {prompt.options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onResolve(String(prompt.factKey), opt.resolvedValue)}
            className="w-full p-4 sm:p-5 rounded-lg border-2 border-[#1C1D1D] bg-[#FBF9F4] hover:bg-[#FDFBF7] hover:border-[#971F26] hover:shadow-xs transition-all text-left flex items-start justify-between gap-4 cursor-pointer group"
          >
            <div className="space-y-1">
              <div className="text-sm sm:text-base font-serif font-bold text-[#1C1D1D] group-hover:text-[#971F26] transition-colors">
                {opt.label}
              </div>
              {opt.subtext && (
                <div className="text-xs text-stone-600 font-sans leading-relaxed">
                  {opt.subtext}
                </div>
              )}
            </div>

            <div className="w-6 h-6 rounded-full border-2 border-stone-400 group-hover:border-[#971F26] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-[#971F26] transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {/* Why We Ask Note */}
      <div className="p-3.5 bg-[#EEE8DD] rounded-lg border border-[#D9D1C4] flex items-start gap-2 text-xs text-stone-700">
        <HelpCircle className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
        <div>
          <strong>Why we ask:</strong> {prompt.whyWeAsk}
        </div>
      </div>

      {/* Back Button */}
      <div className="pt-4 border-t border-[#D9D1C4] flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-stone-700 hover:text-[#1C1D1D] flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Questions</span>
        </button>
      </div>
    </div>
  );
}
