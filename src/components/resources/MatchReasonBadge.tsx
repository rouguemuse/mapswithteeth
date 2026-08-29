import React from "react";
import { Sparkles } from "lucide-react";

export function MatchReasonBadge({ reason, matchedTags }: { reason: string; matchedTags?: string[] }) {
  return (
    <div className="bg-amber-50/80 border border-amber-200 border-l-2 border-l-brand-oxblood rounded p-2.5 my-2.5 text-xs text-brand-charcoal shadow-sm">
      <div className="flex items-center gap-1.5 font-bold text-brand-oxblood mb-1 font-mono">
        <Sparkles className="w-3.5 h-3.5" />
        <span className="text-[10px] uppercase tracking-wider">Why It Surfaced (Field Note):</span>
      </div>
      <p className="text-xs text-stone-800 leading-relaxed font-sans">{reason}</p>
      {matchedTags && matchedTags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {matchedTags.map((tag) => (
            <span
              key={tag}
              className="bg-stone-200 border border-stone-300 text-[9px] font-mono text-stone-700 px-1.5 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
