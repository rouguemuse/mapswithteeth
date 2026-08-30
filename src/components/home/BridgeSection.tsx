import React from "react";
import Link from "next/link";
import { ArrowRight, Shuffle } from "lucide-react";

export function BridgeSection() {
  return (
    <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 select-none font-sans relative overflow-hidden bg-grid-atlas">
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
          <Shuffle className="w-4 h-4 text-[#971F26]" />
          <span>RESEARCH & SYSTEMS ARCHITECTURE</span>
        </span>
        <span className="coord-tick text-stone-700">[PROPOSED PROTOCOL]</span>
      </div>

      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          A referral is not a handoff.
        </h2>

        <p className="text-base sm:text-[17px] text-stone-900 leading-relaxed font-sans font-medium">
          A person can be correctly referred from one system to another and still lose the context needed to continue. Maps With Teeth is exploring Bridge — a lightweight continuity model designed to help preserve what happened at one institutional touchpoint when someone is sent to the next.
        </p>
      </div>

      {/* 3 Explicit Clarifications */}
      <div className="grid gap-4 sm:grid-cols-3 pt-2 font-mono">
        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-bold block uppercase text-xs">CLARIFICATION 01</span>
          <p className="font-bold text-base text-[#1C1D1D] font-serif">Not case management.</p>
          <p className="text-xs sm:text-sm text-stone-700 font-sans leading-normal">Does not replace caseworker advocacy or direct human relationship support.</p>
        </div>

        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-bold block uppercase text-xs">CLARIFICATION 02</span>
          <p className="font-bold text-base text-[#1C1D1D] font-serif">Not fact-finding.</p>
          <p className="text-xs sm:text-sm text-stone-700 font-sans leading-normal">Not a determination that someone&apos;s allegations are true or false.</p>
        </div>

        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-bold block uppercase text-xs">CLARIFICATION 03</span>
          <p className="font-bold text-base text-[#1C1D1D] font-serif">Not a central database.</p>
          <p className="text-xs sm:text-sm text-stone-700 font-sans leading-normal">Zero centralized surveillance or cross-agency state monitoring.</p>
        </div>
      </div>

      {/* Goal Callout & CTA */}
      <div className="p-5 sm:p-6 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase text-[#971F26] font-bold block">
            THE SIMPLE GOAL
          </span>
          <p className="text-base sm:text-lg font-serif font-bold text-[#1C1D1D]">
            Make it clearer where one system stopped so the next one knows where to begin.
          </p>
        </div>

        <Link
          href="/how-it-works#bridge"
          className="px-6 py-3 bg-[#1C1D1D] hover:bg-stone-800 text-white rounded text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-2xs shrink-0"
        >
          <span>Explore the Bridge concept →</span>
          <ArrowRight className="w-4 h-4 text-red-400" />
        </Link>
      </div>
    </section>
  );
}
