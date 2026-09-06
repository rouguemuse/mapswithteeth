import React from "react";
import Link from "next/link";
import { Shuffle, ArrowRight, ShieldCheck } from "lucide-react";

export function EarlyThesisBridgeSection() {
  return (
    <section className="bg-[#EEE8DD] border-y sm:border sm:rounded-2xl border-[#D9D1C4] p-5 sm:p-7 shadow-xs font-sans select-none">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#971F26]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#971F26]">
              PORTABLE CONTINUITY ACROSS DISCONNECTED SYSTEMS
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#26221F] leading-snug">
            Finding a resource is not the same as reaching help.
          </h2>

          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
            Maps With Teeth is building the continuity layer between the doors — preserving prior attempts, identifiers, context, routing decisions, and what happens next.
          </p>
        </div>

        <div className="shrink-0 font-mono">
          <Link
            href="/for-partners"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#971F26] hover:text-red-900 bg-[#F5F1E8] hover:bg-stone-100 border border-[#D9D1C4] px-4 py-2.5 rounded-md transition-colors shadow-2xs"
          >
            <span>See the continuity model</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
