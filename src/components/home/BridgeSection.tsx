import React from "react";
import Link from "next/link";
import { ArrowRight, Shuffle, ShieldCheck, XCircle, Sparkles } from "lucide-react";

export function BridgeSection() {
  return (
    <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 select-none font-sans relative overflow-hidden bg-grid-atlas">
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold flex items-center gap-1.5">
          <Shuffle className="w-3.5 h-3.5" />
          <span>RESEARCH & SYSTEMS ARCHITECTURE</span>
        </span>
        <span className="coord-tick">[PROPOSED PROTOCOL]</span>
      </div>

      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          A referral is not a handoff.
        </h2>

        <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
          A person can be correctly referred from one system to another and still lose the context needed to continue. Maps With Teeth is exploring Bridge — a lightweight continuity model designed to help preserve what happened at one institutional touchpoint when someone is sent to the next.
        </p>
      </div>

      {/* 3 Explicit Clarifications */}
      <div className="grid gap-3 sm:grid-cols-3 pt-2 text-xs font-mono">
        <div className="p-3.5 bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg space-y-1">
          <span className="text-[#971F26] font-bold block uppercase text-[10px]">CLARIFICATION 01</span>
          <p className="font-bold text-[#1C1D1D]">Not case management.</p>
          <p className="text-[11px] text-stone-600 font-sans">Does not replace caseworker advocacy or direct relationship support.</p>
        </div>

        <div className="p-3.5 bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg space-y-1">
          <span className="text-[#971F26] font-bold block uppercase text-[10px]">CLARIFICATION 02</span>
          <p className="font-bold text-[#1C1D1D]">Not fact-finding.</p>
          <p className="text-[11px] text-stone-600 font-sans">Not a determination that someone&apos;s allegations are true or false.</p>
        </div>

        <div className="p-3.5 bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg space-y-1">
          <span className="text-[#971F26] font-bold block uppercase text-[10px]">CLARIFICATION 03</span>
          <p className="font-bold text-[#1C1D1D]">Not a central database.</p>
          <p className="text-[11px] text-stone-600 font-sans">Zero centralized surveillance or cross-agency state monitoring.</p>
        </div>
      </div>

      {/* Goal Callout & CTA */}
      <div className="p-5 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <span className="text-[10px] font-mono uppercase text-[#971F26] font-bold block">
            THE SIMPLE GOAL
          </span>
          <p className="text-xs sm:text-sm font-serif font-bold text-[#1C1D1D]">
            Make it clearer where one system stopped so the next one knows where to begin.
          </p>
        </div>

        <Link
          href="/how-it-works#bridge"
          className="px-5 py-2.5 bg-[#1C1D1D] hover:bg-stone-800 text-white rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-2xs shrink-0"
        >
          <span>Explore the Bridge concept →</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#971F26]" />
        </Link>
      </div>
    </section>
  );
}
