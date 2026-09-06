import React from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArrowRight, Shuffle, FileText, CheckCircle2, Shield, AlertTriangle, ShieldCheck } from "lucide-react";

export function BridgeSection() {
  return (
    <section className="bg-[#F5F1E8] border border-[#D9D1C4] rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 select-none font-sans relative overflow-hidden bg-grid-atlas">
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
          <Shuffle className="w-4 h-4 text-[#971F26]" />
          <span>CHAPTER 03 · CONTINUITY INFRASTRUCTURE LAYER</span>
        </span>
        <StatusBadge type="product" status="PROTOTYPE" label="STAGE 03 PROTOTYPE" timestamp="PROTOTYPE SPECIFICATION" />
      </div>

      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#26221F] tracking-tight leading-tight">
          A referral is not a handoff.
        </h2>

        <p className="text-base sm:text-[17px] text-stone-800 leading-relaxed font-sans font-normal">
          People are routinely sent from one institution to another while the context explaining why they are there disappears along the way. Maps With Teeth Bridge is continuity infrastructure designed to preserve what happened at each institutional touchpoint so survivors never have to start their story from zero.
        </p>
      </div>

      {/* Visual Referral Chain Example */}
      <div className="p-4 sm:p-6 bg-[#EEE8DD] border border-[#D9D1C4] rounded-xl space-y-3 shadow-2xs">
        <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold block">
          THE CONTINUITY RECEIPT CHAIN (HOW IT PRESERVES CONTEXT)
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-stone-900">
          <div className="p-3.5 bg-[#FAF7F2] border border-[#D9D1C4] rounded-md space-y-1 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] block uppercase">STEP 1 · AGENCY A</span>
            <p className="font-serif font-bold text-sm text-[#26221F]">Police / Crisis Intake</p>
            <p className="text-xs font-sans text-stone-700 leading-snug">Incident logged. Labeled &apos;civil matter&apos;.</p>
          </div>

          <div className="p-3.5 bg-[#E8F3EB] border border-[#2D5A3D]/40 rounded-md space-y-1 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#2D5A3D] block uppercase">RECEIPT 01 GENERATED</span>
            <p className="font-serif font-bold text-sm text-[#2D5A3D]">Who · When · Ref #</p>
            <p className="text-xs font-sans text-stone-800 leading-snug">Preserves evidence offered & stated decline reason.</p>
          </div>

          <div className="p-3.5 bg-[#FAF7F2] border border-[#D9D1C4] rounded-md space-y-1 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] block uppercase">STEP 2 · AGENCY B</span>
            <p className="font-serif font-bold text-sm text-[#26221F]">Shelter / County Program</p>
            <p className="text-xs font-sans text-stone-700 leading-snug">Declines for county mismatch. Refers onward.</p>
          </div>

          <div className="p-3.5 bg-[#FDF2F2] border border-[#971F26]/40 rounded-md space-y-1 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] block uppercase">RECEIPT 02 · ESCALATION</span>
            <p className="font-serif font-bold text-sm text-[#971F26]">Decision-Owner Flag</p>
            <p className="text-xs font-sans text-stone-900 leading-snug">Flags circular loop. Legal advocate receives complete packet.</p>
          </div>
        </div>
      </div>

      {/* 3 Explicit Clarifications with Defensible Guardrails */}
      <div className="grid gap-4 sm:grid-cols-3 pt-1">
        <div className="p-4 sm:p-5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-mono font-bold block uppercase text-xs">CLARIFICATION 01</span>
          <p className="font-bold text-base text-[#26221F] font-serif">Survivor-Controlled</p>
          <p className="text-xs text-stone-700 font-sans leading-relaxed">The record belongs to the person navigating. Nothing is automatically shared with any agency.</p>
        </div>

        <div className="p-4 sm:p-5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-mono font-bold block uppercase text-xs">CLARIFICATION 02</span>
          <p className="font-bold text-base text-[#26221F] font-serif">Touchpoint Documentation</p>
          <p className="text-xs text-stone-700 font-sans leading-relaxed">Records what was presented, inspected, and decided. Does not adjudicate guilt or establish legal chain of custody.</p>
        </div>

        <div className="p-4 sm:p-5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-xl space-y-1.5 shadow-2xs">
          <span className="text-[#971F26] font-mono font-bold block uppercase text-xs">CLARIFICATION 03</span>
          <p className="font-bold text-base text-[#26221F] font-serif">Zero Surveillance</p>
          <p className="text-xs text-stone-700 font-sans leading-relaxed">No centralized government tracking, cross-agency backdoors, or inter-agency surveillance registries.</p>
        </div>
      </div>

      {/* Goal Callout & CTA */}
      <div className="p-5 sm:p-6 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase text-[#971F26] font-bold block">
            THE CONTINUITY PROMISE
          </span>
          <p className="text-base sm:text-lg font-serif font-bold text-[#26221F]">
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
