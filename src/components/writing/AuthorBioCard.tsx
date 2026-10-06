import React from "react";
import Link from "next/link";
import { JAYME_VOLSTAD_AUTHOR } from "@/data/writing/author";
import { User, ArrowRight, Layers, ExternalLink } from "lucide-react";

interface AuthorBioCardProps {
  showFullDetails?: boolean;
  className?: string;
}

export function AuthorBioCard({ showFullDetails = false, className = "" }: AuthorBioCardProps) {
  const author = JAYME_VOLSTAD_AUTHOR;

  return (
    <div
      className={`bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-4 font-sans select-none ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1C1D1D] text-white flex items-center justify-center font-serif font-bold text-base">
            JV
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-[#1C1D1D] leading-tight">
              {author.name}
            </h3>
            <p className="text-xs font-mono text-[#971F26] font-bold">
              {author.role} · {author.affiliation}
            </p>
          </div>
        </div>

        <Link
          href="/writing/author"
          className="text-xs font-mono font-bold text-stone-700 hover:text-[#971F26] uppercase tracking-wider inline-flex items-center gap-1"
        >
          <span>Author Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
        {author.bio}
      </p>

      {showFullDetails && (
        <div className="pt-3 border-t border-[#D9D1C4] space-y-3 font-mono text-xs">
          <div>
            <span className="font-bold text-stone-900 uppercase block mb-1.5 text-[11px]">
              FOCUS & RESEARCH DOMAINS:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {author.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white border border-stone-300 rounded text-[11px] text-stone-800"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
