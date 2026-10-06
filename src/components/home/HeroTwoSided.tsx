"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck,
  Scale,
  Sparkles,
  Layers,
  ArrowDown,
  PhoneCall,
  Activity
} from "lucide-react";

export function HeroTwoSided() {
  return (
    <section className="relative border-b border-[#D9D1C4] bg-[#F5F1E8] bg-grid-ledger overflow-hidden min-h-[80vh] flex flex-col justify-between pt-8 sm:pt-12 pb-8 select-none font-sans">
      {/* Decorative Cartographic Coordinate Marks */}
      <div className="absolute top-3 left-4 coord-tick hidden sm:block">
        [SYS REF: MWT-CORE-2026]
      </div>
      <div className="absolute top-3 right-4 coord-tick hidden sm:block">
        [FRAMEWORK: PUBLIC-INTEREST CONTINUITY]
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-4 sm:py-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT: Core Framing & Dual CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EEE8DD] border border-[#1C1B1A] text-[#1C1B1A] rounded-full text-xs font-mono uppercase tracking-widest font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#971F26] animate-pulse" />
                <span>OVERARCHING PUBLIC-INTEREST CONTINUITY FRAMEWORK</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-serif font-bold text-[#1C1B1A] tracking-tight leading-[1.08]">
                Help exists. <br />
                <span className="text-[#971F26] italic font-serif relative underline-rough inline-block mt-1 sm:mt-2">
                  The map between it doesn’t.
                </span>
              </h1>
            </div>

            {/* Primary Explanatory Statement */}
            <div className="space-y-4 text-[#1C1D1A]">
              <p className="text-lg sm:text-xl font-medium leading-relaxed font-sans text-stone-900 max-w-2xl">
                Maps With Teeth is a portable continuity and accountability layer for people navigating abuse and instability across systems that do not share one case file, one jurisdiction, or one map.
              </p>

              {/* Governing Principle Block */}
              <div className="p-4 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-md space-y-2">
                <p className="text-sm sm:text-base font-serif italic text-stone-900 font-semibold">
                  &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
                </p>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-stone-700 font-bold">
                  “People move between systems. Their information and accountability often do not.”
                </p>
              </div>
            </div>

            {/* 3 Clear CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/find-help"
                className="px-6 py-3.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5 border border-[#971F26]"
              >
                <Compass className="w-4 h-4" />
                <span>Find a Way Through</span>
              </Link>

              <Link
                href="/continuity"
                className="px-6 py-3.5 bg-[#EEE8DD] hover:bg-[#E5DEC9] border-2 border-[#1C1B1A] text-[#1C1D1A] rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-sm"
              >
                <Layers className="w-4 h-4 text-[#971F26]" />
                <span>Explore Continuity Models</span>
              </Link>

              <Link
                href="/policy"
                className="px-5 py-3.5 bg-transparent hover:bg-stone-200/60 border border-stone-400 text-stone-800 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all"
              >
                <Scale className="w-4 h-4 text-stone-600" />
                <span>Policy &amp; Systems</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Two Primary Working Models Overview Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-7 space-y-5 shadow-md relative bg-grid-diagram">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#971F26] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#971F26]" />
                  TWO PRIMARY WORKING MODELS
                </span>
                <span className="text-[10px] font-mono text-stone-600">[SPEC 2026]</span>
              </div>

              {/* Model 1: Continuity Receipt */}
              <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2 py-0.5 rounded">
                    MODEL 01 · PARTICIPANT-HELD
                  </span>
                  <FileCheck className="w-4 h-4 text-[#971F26]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                  Continuity Receipt
                </h3>
                <p className="text-xs text-stone-800 leading-relaxed font-sans">
                  Standardized client-side encounter proof documenting what was sent, what was reviewed, and who owns the next action across institutional handoffs.
                </p>
              </div>

              {/* Model 2: Personal Number Continuity */}
              <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-white px-2 py-0.5 rounded">
                    MODEL 02 · STATUTORY AUTONOMY
                  </span>
                  <PhoneCall className="w-4 h-4 text-[#1C1D1D]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                  Personal Number Continuity
                </h3>
                <p className="text-xs text-stone-800 leading-relaxed font-sans">
                  Separating billing authority from adult communication identity under the Safe Connections Act (47 U.S.C. § 345) to preserve 2FA and digital lifelines.
                </p>
              </div>

              {/* Review Trace Supporting Specification Notice */}
              <div className="p-3 bg-white/90 border border-stone-300 rounded text-[11px] font-mono text-stone-700 leading-snug space-y-1">
                <div className="flex items-center gap-1.5 text-stone-900 font-bold">
                  <Activity className="w-3.5 h-3.5 text-[#971F26]" />
                  <span>REVIEW TRACE: AGENCY-SIDE SUPPORT SPECIFICATION</span>
                </div>
                <p className="text-[11px] font-sans text-stone-600">
                  Supporting vocabulary (Received, Reviewed, Unavailable, Unreviewed) enabling institutions to log review completeness without automated risk scoring.
                </p>
              </div>

              {/* Guardrail Note */}
              <div className="p-3 bg-[#1C1D1D] text-[#F5F1E8] rounded text-[11px] font-mono leading-snug">
                <span className="font-bold text-amber-300">STRICT ARCHITECTURAL BOUNDARY:</span> Not a case-management platform or centralized dossier. Zero automated credibility scoring or predictive policing.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between text-[11px] font-mono text-stone-600 border-t border-[#D9D1C4]/60">
        <span className="uppercase">FIELD VALIDATION: CENTRAL TEXAS · RESEARCH: CROSS-JURISDICTION &amp; STATEWIDE</span>
        <span className="hidden sm:inline-flex items-center gap-1 text-[#971F26] font-bold">
          CONTINUE TO ARCHITECTURAL BREAKDOWN <ArrowDown className="w-3.5 h-3.5" />
        </span>
      </div>
    </section>
  );
}
