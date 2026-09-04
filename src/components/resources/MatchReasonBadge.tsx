import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function MatchReasonBadge({
  reason,
  matchedTags,
  matchCertainty
}: {
  reason: string;
  matchedTags?: string[];
  matchCertainty?: string;
}) {
  return (
    <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] border-l-4 border-l-[#971F26] rounded-md p-3 my-2.5 text-xs text-[#1C1D1D] shadow-2xs font-sans">
      <div className="flex items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-1.5 font-bold text-[#971F26] font-mono text-[10px] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Why This Surfaced (Fact-Linked Audit):</span>
        </div>

        {matchCertainty && (
          <span className={`px-1.5 py-0.5 rounded-xs font-mono text-[9px] font-bold ${
            matchCertainty === "LIKELY_MATCH"
              ? "bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D]"
              : "bg-[#FEF3C7] border border-[#D97706] text-[#92400E]"
          }`}>
            {matchCertainty.replace(/_/g, " ")}
          </span>
        )}
      </div>

      <p className="text-xs text-stone-900 font-medium leading-relaxed">
        {reason}
      </p>

      {matchedTags && matchedTags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-[#E5DEC9]">
          {matchedTags.map((tag) => (
            <span
              key={tag}
              className="bg-[#EEE8DD] border border-[#D9D1C4] text-[9px] font-mono text-stone-700 font-semibold px-1.5 py-0.5 rounded-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
