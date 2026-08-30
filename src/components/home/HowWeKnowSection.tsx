import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, AlertTriangle, AlertCircle, FileText, ArrowRight } from "lucide-react";

export function HowWeKnowSection() {
  const tiers = [
    {
      tier: "LISTED",
      badgeClass: "bg-[#EEE8DD] text-stone-900 border-[#1C1D1D]",
      icon: FileText,
      description: "Published by the organization or another authoritative public source.",
    },
    {
      tier: "RECENTLY VERIFIED",
      badgeClass: "bg-emerald-100 text-emerald-950 border-emerald-500",
      icon: CheckCircle2,
      description: "Key eligibility, contact or application details were recently audited.",
    },
    {
      tier: "FIELD CONFIRMED",
      badgeClass: "bg-blue-100 text-blue-950 border-blue-500",
      icon: ShieldCheck,
      description: "Evidence exists that someone successfully navigated the route in practice.",
    },
    {
      tier: "FRICTION REPORTED",
      badgeClass: "bg-amber-100 text-amber-950 border-amber-500",
      icon: AlertTriangle,
      description: "A recurring obstacle, paperwork gate, or failure point has been identified.",
    },
    {
      tier: "TEMPORARILY UNAVAILABLE",
      badgeClass: "bg-red-100 text-red-950 border-red-500",
      icon: AlertCircle,
      description: "Program exists, but funding freezes or closed intake currently blocks access.",
    },
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 bg-grid-atlas select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold">
            RESEARCH & VERIFICATION PROTOCOL
          </span>
          <span className="coord-tick text-stone-700">[5 EVIDENCE TIERS]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          How we know what we know
        </h2>

        <p className="text-base sm:text-[17px] text-stone-900 max-w-3xl leading-relaxed font-sans font-medium">
          Not every resource claim means the same thing. Maps With Teeth distinguishes between information we found and pathways we have stronger evidence actually work.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {tiers.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.tier}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 flex flex-col justify-between shadow-2xs space-y-3.5"
            >
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider border ${t.badgeClass}`}>
                  <Icon className="w-4 h-4" />
                  <span>{t.tier}</span>
                </div>

                <p className="text-sm sm:text-[14.5px] text-stone-900 font-sans leading-relaxed font-normal">
                  {t.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D9D1C4] font-mono">
        <span className="text-sm text-stone-800">
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
