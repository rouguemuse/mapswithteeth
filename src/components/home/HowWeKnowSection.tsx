"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, AlertTriangle, AlertCircle, FileText, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

export function HowWeKnowSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const tiers = [
    {
      tier: "LISTED",
      badgeClass: "bg-[#EEE8DD] text-stone-900 border-[#D9D1C4]",
      icon: FileText,
      description: "Published by the organization or another authoritative public source.",
    },
    {
      tier: "RECENTLY VERIFIED",
      badgeClass: "bg-emerald-100 text-emerald-950 border-emerald-400",
      icon: CheckCircle2,
      description: "Key eligibility, contact, or application details were recently audited against primary statutes or guidelines.",
    },
    {
      tier: "FIELD CONFIRMED",
      badgeClass: "bg-blue-100 text-blue-950 border-blue-400",
      icon: ShieldCheck,
      description: "Evidence exists that navigators or advocates successfully accessed the route in practice.",
    },
    {
      tier: "FRICTION REPORTED",
      badgeClass: "bg-amber-100 text-amber-950 border-amber-400",
      icon: AlertTriangle,
      description: "A recurring obstacle, paperwork gate, or administrative bottleneck has been identified.",
    },
    {
      tier: "TEMPORARILY UNAVAILABLE",
      badgeClass: "bg-red-100 text-red-950 border-red-400",
      icon: AlertCircle,
      description: "Program exists, but funding freezes or closed intake currently blocks access.",
    },
  ];

  return (
    <section className="bg-[#EEE8DD] border border-[#D9D1C4] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8 bg-grid-atlas select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold">
            CHAPTER 04 · RESEARCH & VERIFICATION PROTOCOL
          </span>
          <span className="coord-tick text-stone-600">[5 EVIDENCE TIERS]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#26221F] tracking-tight leading-tight">
          How we know what we know
        </h2>

        <p className="text-base sm:text-[17px] text-stone-800 max-w-3xl leading-relaxed font-sans font-normal">
          Not every resource claim means the same thing. Maps With Teeth distinguishes between information we found and pathways we have verified against primary statutes and real-world conditions.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {tiers.map((t, idx) => {
          const Icon = t.icon;
          const isHiddenOnMobile = !showAllMobile && idx >= 3;

          return (
            <div
              key={t.tier}
              className={`bg-[#FAF7F2] border border-[#D9D1C4] rounded-xl p-5 flex flex-col justify-between shadow-2xs space-y-3.5 ${
                isHiddenOnMobile ? "hidden sm:flex" : "flex"
              }`}
            >
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider border ${t.badgeClass}`}>
                  <Icon className="w-4 h-4" />
                  <span>{t.tier}</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed font-normal">
                  {t.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Progressive Disclosure Button */}
      <div className="sm:hidden pt-1">
        <button
          type="button"
          onClick={() => setShowAllMobile(!showAllMobile)}
          aria-expanded={showAllMobile}
          className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-white border border-[#D9D1C4] text-[#26221F] rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
        >
          {showAllMobile ? (
            <>
              <span>Show Fewer Tiers</span>
              <ChevronUp className="w-4 h-4 text-[#971F26]" />
            </>
          ) : (
            <>
              <span>See All 5 Verification Tiers (+2 More)</span>
              <ChevronDown className="w-4 h-4 text-[#971F26]" />
            </>
          )}
        </button>
      </div>

      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D9D1C4] font-mono">
        <span className="text-xs sm:text-sm text-stone-700">
          Every entry on Maps With Teeth is marked with its exact verification status and review timestamp.
        </span>

        <Link
          href="/how-we-research"
          className="px-6 py-3 bg-[#971F26] hover:bg-red-900 text-white rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-2xs shrink-0"
        >
          <span>See how we research and verify →</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
