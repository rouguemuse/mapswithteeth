"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowDown, ArrowRight, ShieldCheck, Layers } from "lucide-react";

export function PremiumHero() {
  return (
    <section className="relative bg-mwt-black text-mwt-ivory overflow-hidden border-b-2 border-mwt-black select-none font-sans">
      {/* Background Cartographic Tone */}
      <div className="absolute inset-0 opacity-10 bg-grid-ledger pointer-events-none" />

      {/* Top Coordinate Reference Bar */}
      <div className="border-b border-[#24211E] py-2 px-4 sm:px-6 lg:px-8 font-mono text-[11px] text-[#A39E94]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="coord-tick text-[#A39E94]">[SYS REF: MWT-MOVEMENT-2026]</span>
          <span className="coord-tick hidden sm:inline text-[#A39E94]">
            [CIVIC SYSTEMS REFORM · CONTINUITY INFRASTRUCTURE]
          </span>
          <span className="coord-tick text-mwt-oxblood-light">[AUDITED JURISDICTIONS: TX-254]</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10 space-y-10">
        {/* Eyebrow Pill */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1817] border border-[#3E3A35] text-mwt-ivory rounded-xs text-xs font-mono uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-mwt-oxblood" />
            <span>CIVIC SYSTEMS REFORM &amp; ACCOUNTABILITY</span>
          </div>
        </div>

        {/* Primary Movement Message */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.05]">
            People shouldn’t disappear <br />
            <span className="text-mwt-oxblood-light italic underline-rough">
              between systems.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#E8E4DA] font-serif leading-relaxed max-w-3xl pt-2">
            Maps With Teeth examines the gaps between institutions, jurisdictions, and technologies, and develops practical approaches to continuity, accountability, and access.
          </p>
        </div>

        {/* Powerful Contradiction Framing Grid */}
        <div className="grid md:grid-cols-12 gap-6 pt-4 border-t border-[#24211E]">
          {/* Movement Contradiction Statement (7 Cols) */}
          <div className="md:col-span-7 space-y-4">
            <div className="p-5 bg-[#171514] border border-[#2E2A26] rounded-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-mwt-oxblood-light font-bold uppercase tracking-wider">
                <span>THE PARADOX OF PUBLIC ASSISTANCE</span>
                <span>[REALITY CHECK]</span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Help exists. <br />
                <span className="text-stone-400 font-sans text-xl font-normal block mt-1">
                  Access has conditions.
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#D8D2C6] font-sans leading-relaxed">
                Services can exist on paper yet remain practically unreachable due to geographic locks, unconfirmed referrals, waitlists, and documentation hurdles. A directory listing is not a route.
              </p>
            </div>
          </div>

          {/* Central Texas Pilot as Distinct Application (5 Cols) */}
          <div className="md:col-span-5 bg-[#1F1C1A] border-2 border-[#3E3A35] rounded-xs p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mwt-oxblood-light">
                  APPLICATION 01 · ACTIVE PILOT
                </span>
                <span className="text-[10px] font-mono uppercase bg-[#2B2724] text-stone-300 px-2 py-0.5 rounded-xs">
                  CENTRAL TEXAS
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                Barrier-First Resource Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-[#A39E94] leading-relaxed">
                Our pilot implementation maps statutory lease breaks (Tex. Prop. Code § 92.016), lateral benevolence funds, and utility protections directly to concrete obstacles.
              </p>
            </div>

            <div className="pt-3 border-t border-[#332E29]">
              <Link
                href="/find-help"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-mwt-oxblood-light transition"
              >
                <span>Launch Central Texas Matcher</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Dual Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/find-help"
            className="px-6 py-3.5 bg-mwt-oxblood hover:bg-mwt-oxblood-dark text-white rounded-xs text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Compass className="w-4 h-4" />
            <span>Find Help (Pilot Matcher)</span>
          </Link>

          <a
            href="#barrier-flow"
            className="px-6 py-3.5 bg-[#1F1C1A] hover:bg-[#2B2724] border border-[#3E3A35] text-mwt-ivory rounded-xs text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-mwt-oxblood"
          >
            <Layers className="w-4 h-4 text-mwt-oxblood-light" />
            <span>Explore the Systemic Problem</span>
            <ArrowDown className="w-3.5 h-3.5 text-stone-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
