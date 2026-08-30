import React from "react";
import Link from "next/link";
import { ArrowRight, Shuffle, FileText, CheckCircle2, Shield, AlertTriangle } from "lucide-react";

export function BridgeSection() {
  return (
    <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 select-none font-sans relative overflow-hidden bg-grid-atlas">
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
          <Shuffle className="w-4 h-4 text-[#971F26]" />
          <span>CONTINUITY INFRASTRUCTURE LAYER</span>
        </span>
        <span className="coord-tick text-stone-700">[STAGE 03 · CONTINUITY PILOT]</span>
      </div>

      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          A referral is not a handoff.
        </h2>

        <p className="text-base sm:text-[17px] text-stone-900 leading-relaxed font-sans font-medium">
          People are routinely sent from one institution to another while the context explaining why they are there disappears along the way. Maps With Teeth Bridge is continuity infrastructure designed to preserve what happened at each touchpoint so survivors never have to start their story from zero.
        </p>
      </div>

      {/* Visual Referral Chain Example */}
      <div className="p-4 sm:p-6 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-3">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#971F26] font-bold block">
          THE CONTINUITY RECEIPT CHAIN (HOW IT PRESERVES CONTEXT)
        </span>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 font-mono text-xs text-stone-900">
          <div className="p-3 bg-[#F5F1E8] border border-[#1C1D1D] rounded-md space-y-1">
            <span className="text-[10px] font-bold text-[#971F26] block uppercase">STEP 1 · AGENCY A</span>
            <p className="font-serif font-bold text-sm text-[#1C1D1D]">Police / Crisis Intake</p>
            <p className="text-[11px] font-sans text-stone-700 leading-tight">Incident recorded. Labeled &apos;civil matter&apos;.</p>
          </div>

          <div className="p-3 bg-[#E8F3EB] border border-[#2D5A3D] rounded-md space-y-1">
            <span className="text-[10px] font-bold text-[#2D5A3D] block uppercase">RECEIPT 01 GENERATED</span>
            <p className="font-serif font-bold text-sm text-[#2D5A3D]">Who · When · Ref #</p>
            <p className="text-[11px] font-sans text-stone-800 leading-tight">Preserves evidence offered & stated decline reason.</p>
          </div>

          <div className="p-3 bg-[#F5F1E8] border border-[#1C1D1D] rounded-md space-y-1">
            <span className="text-[10px] font-bold text-[#971F26] block uppercase">STEP 2 · AGENCY B</span>
            <p className="font-serif font-bold text-sm text-[#1C1D1D]">Shelter / County Program</p>
            <p className="text-[11px] font-sans text-stone-700 leading-tight">Declines for county mismatch. Refers onward.</p>
          </div>

          <div className="p-3 bg-[#F5F1E8] border-2 border-[#971F26] rounded-md space-y-1 bg-[#FDF2F2]">
            <span className="text-[10px] font-bold text-[#971F26] block uppercase">RECEIPT 02 · ESCALATION</span>
            <p className="font-serif font-bold text-sm text-[#971F26]">Decision-Owner Flag</p>
            <p className="text-[11px] font-sans text-stone-900 leading-tight">Flags circular loop. Legal advocate receives complete packet.</p>
          </div>
        </div>
      </div>

      {/* 3 Explicit Clarifications */}
      <div className="grid gap-4 sm:grid-cols-3 pt-2 font-mono">
        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-bold block uppercase text-xs">CLARIFICATION 01</span>
          <p className="font-bold text-base text-[#1C1D1D] font-serif">Survivor-Controlled</p>
          <p className="text-xs sm:text-sm text-stone-700 font-sans leading-normal">The record belongs to the person navigating. Nothing is automatically shared with any agency.</p>
        </div>

        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-bold block uppercase text-xs">CLARIFICATION 02</span>
          <p className="font-bold text-base text-[#1C1D1D] font-serif">Not An Adjudication</p>
          <p className="text-xs sm:text-sm text-stone-700 font-sans leading-normal">Does not determine whether an allegation is true or false; records what was presented and decided.</p>
        </div>

        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-bold block uppercase text-xs">CLARIFICATION 03</span>
          <p className="font-bold text-base text-[#1C1D1D] font-serif">Zero Surveillance</p>
          <p className="text-xs sm:text-sm text-stone-700 font-sans leading-normal">No centralized government tracking, cross-agency backdoors, or inter-agency surveillance.</p>
        </div>
      </div>

      {/* Goal Callout & CTA */}
      <div className="p-5 sm:p-6 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase text-[#971F26] font-bold block">
            THE CONTINUITY PROMISE
          </span>
          <p className="text-base sm:text-lg font-serif font-bold text-[#1C1D1D]">
            Finding the next door should not require starting the entire story over.
          </p>
        </div>

        <Link
          href="/bridge"
          className="px-6 py-3 bg-[#971F26] hover:bg-red-900 text-white rounded text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-2xs shrink-0"
        >
          <span>Explore Dedicated Bridge Page →</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
