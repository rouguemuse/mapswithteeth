import React from "react";
import { ShieldAlert, AlertTriangle } from "lucide-react";

interface WhatThisArticleDoesNotClaimProps {
  claims?: string[];
  className?: string;
}

export function WhatThisArticleDoesNotClaim({
  claims,
  className = ""
}: WhatThisArticleDoesNotClaimProps) {
  if (!claims || claims.length === 0) return null;

  return (
    <aside
      aria-label="What this article does not claim"
      className={`p-4 sm:p-5 bg-[#FDF2F2] border-2 border-[#971F26] rounded-xl space-y-2.5 font-sans select-none ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[#971F26]/30 pb-2">
        <ShieldAlert className="w-4 h-4 text-[#971F26] shrink-0" />
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#971F26]">
          WHAT THIS ARTICLE DOES NOT CLAIM
        </span>
      </div>

      <ul className="space-y-1.5 text-xs text-stone-800 leading-relaxed font-sans">
        {claims.map((claim, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[#971F26] font-mono font-bold text-xs mt-0.5">•</span>
            <span>{claim}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
