import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, AlertTriangle, AlertCircle, FileText, ArrowRight } from "lucide-react";

export function HowWeKnowSection() {
  const tiers = [
    {
      tier: "LISTED",
      badgeClass: "bg-[#EEE8DD] text-stone-800 border-[#1C1D1D]",
      icon: FileText,
      description: "Published by the organization or another authoritative source.",
    },
    {
      tier: "RECENTLY VERIFIED",
      badgeClass: "bg-emerald-50 text-emerald-900 border-emerald-400",
      icon: CheckCircle2,
      description: "Key eligibility, contact or application details were recently checked.",
    },
    {
      tier: "FIELD CONFIRMED",
      badgeClass: "bg-blue-50 text-blue-900 border-blue-400",
      icon: ShieldCheck,
      description: "There is evidence that someone successfully navigated the route under the described conditions.",
    },
    {
      tier: "FRICTION REPORTED",
      badgeClass: "bg-amber-50 text-amber-900 border-amber-400",
      icon: AlertTriangle,
      description: "A recurring obstacle, mismatch or failure has been identified.",
    },
    {
      tier: "TEMPORARILY UNAVAILABLE",
      badgeClass: "bg-red-50 text-red-900 border-red-400",
      icon: AlertCircle,
      description: "The program may still exist, but funding, intake, capacity or another condition currently blocks access.",
    },
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 bg-grid-atlas select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-5 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold">
            RESEARCH & VERIFICATION PROTOCOL
          </span>
          <span className="coord-tick">[5 EVIDENCE TIERS]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          How we know what we know
        </h2>

        <p className="text-xs sm:text-sm text-stone-700 max-w-3xl leading-relaxed font-sans">
          Not every resource claim means the same thing. Maps With Teeth distinguishes between information we found and pathways we have stronger evidence actually work.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {tiers.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.tier}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-4 flex flex-col justify-between shadow-2xs space-y-3"
            >
              <div className="space-y-2">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${t.badgeClass}`}>
                  <Icon className="w-3 h-3" />
                  <span>{t.tier}</span>
                </div>

                <p className="text-xs text-stone-800 font-sans leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D9D1C4] font-mono">
        <span className="text-xs text-stone-600">
          Every entry on Maps With Teeth is marked with its exact verification status and review timestamp.
        </span>

        <Link
          href="/how-we-research"
          className="px-6 py-2.5 bg-[#971F26] hover:bg-red-900 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-2xs shrink-0"
        >
          <span>See how we research and verify →</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
