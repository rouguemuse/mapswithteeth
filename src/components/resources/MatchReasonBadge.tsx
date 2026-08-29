import React from "react";
import { Sparkles, Info } from "lucide-react";

export function MatchReasonBadge({ reason, matchedTags }: { reason: string; matchedTags?: string[] }) {
  return (
    <div className="bg-stone-900/90 border border-brand-ruby/40 rounded p-2.5 my-2.5 text-xs text-stone-200">
      <div className="flex items-center gap-1.5 font-semibold text-brand-ruby mb-1">
        <Sparkles className="w-3.5 h-3.5" />
        <span className="text-[11px] uppercase tracking-wider">Why It Surfaced:</span>
      </div>
      <p className="text-xs text-stone-300 leading-relaxed font-sans">{reason}</p>
      {matchedTags && matchedTags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {matchedTags.map((tag) => (
            <span
              key={tag}
              className="bg-stone-800 border border-stone-700 text-[9px] font-mono text-stone-400 px-1.5 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
