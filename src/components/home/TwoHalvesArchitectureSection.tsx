"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  Layers,
  ArrowRight,
  ShieldAlert,
  FileCheck,
  CheckCircle2,
  Clock,
  MapPin,
  FileText,
  Building2,
  Scale,
  Sparkles
} from "lucide-react";

export function TwoHalvesArchitectureSection() {
  return (
    <section className="space-y-8 select-none font-sans">
      {/* Section Eyebrow & Title */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26]">
          SECTION 03 · THE TWO HALVES
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Two Halves, Not Ten Features.
        </h2>
        <p className="text-stone-700 text-sm sm:text-base font-sans">
          Maps With Teeth is organized into two complementary systems: navigating reachable aid on the outside, and preserving accountability across institutional handoffs on the inside.
        </p>
      </div>

      {/* Two Pillars Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* PILLAR 1: FIND A WAY THROUGH (Resource Intelligence) */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm relative bg-grid-diagram">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2.5 py-1 rounded">
                PILLAR 01 · SURVIVOR SIDE
              </span>
              <Compass className="w-5 h-5 text-[#971F26]" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                RESOURCE INTELLIGENCE
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1D1D]">
                Find a Way Through
              </h3>
            </div>

            <p className="text-stone-800 text-sm leading-relaxed font-sans font-medium">
              Barrier-first matching that evaluates whether a resource is actually reachable based on real-world constraints before someone spends scarce time, fuel, or safety reaching for a dead end.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 text-xs font-mono space-y-1">
                <span className="font-bold text-[#1C1D1D] block">1. 7 FRICTION VECTORS AUDITED:</span>
                <span className="text-stone-700">Police report waivers, shelter rules, geography limits, ID flexibility, waiting periods, referral prerequisites, and live application windows.</span>
              </div>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 text-xs font-mono space-y-1">
                <span className="font-bold text-[#1C1D1D] block">2. PRIMARY-SOURCE EVIDENCE:</span>
                <span className="text-stone-700">Every operational claim is bound to a verified statute, administrative rule, or published operating charter.</span>
              </div>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 text-xs font-mono space-y-1">
                <span className="font-bold text-[#1C1D1D] block">3. DETERMINISTIC MATCHING:</span>
                <span className="text-stone-700">Explicit fact-checking audit sentences explain exactly why a resource matches or why a criterion is missing.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D9D1C4]">
            <Link
              href="/find-help"
              className="w-full py-3 bg-[#971F26] hover:bg-[#7A181E] text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>Launch Resource Finder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* PILLAR 2: CARRY THE MAP FORWARD (Continuity Infrastructure) */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm relative bg-grid-diagram">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-white px-2.5 py-1 rounded">
                PILLAR 02 · SYSTEM SIDE
              </span>
              <Layers className="w-5 h-5 text-[#1C1D1D]" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                CONTINUITY INFRASTRUCTURE
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1D1D]">
                Carry the Map Forward
              </h3>
            </div>

            <p className="text-stone-800 text-sm leading-relaxed font-sans font-medium">
              Preserve institutional touchpoints, referrals, identifiers, evidence status, unresolved responsibility, and related-case context so each new system does not start from zero.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 text-xs font-mono space-y-1">
                <span className="font-bold text-[#1C1D1D] block">1. CLOSED-LOOP REFERRALS:</span>
                <span className="text-stone-700">Tracking handoffs from sent to received, accepted, decision-assigned, and returned.</span>
              </div>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 text-xs font-mono space-y-1">
                <span className="font-bold text-[#1C1D1D] block">2. STANDARDIZED CONTINUITY RECEIPTS:</span>
                <span className="text-stone-700">Portable administrative summaries documenting contact date, agency reference, documents provided, and pending actions.</span>
              </div>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 text-xs font-mono space-y-1">
                <span className="font-bold text-[#1C1D1D] block">3. CONTEXT BEFORE CLOSURE:</span>
                <span className="text-stone-700">Requiring documentation of what was reviewed, what was unexamined, and who owns the next step before a matter is closed.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D9D1C4]">
            <Link
              href="/continuity"
              className="w-full py-3 bg-[#1C1D1D] hover:bg-black text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>See Continuity Model</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
