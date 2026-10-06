"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowDown, Layers } from "lucide-react";

export function CompactHero() {
  return (
    <section className="relative border-b border-[#D9D1C4] bg-[#F5F1E8] bg-grid-ledger overflow-hidden pt-10 sm:pt-14 pb-12 sm:pb-16 font-sans">
      {/* Cartographic Coordinate Marks */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between text-[11px] font-mono text-stone-600">
        <span className="coord-tick">[SYS REF: MWT-CORE-2026]</span>
        <span className="coord-tick hidden sm:inline">[PUBLIC-INTEREST CONTINUITY]</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Eyebrow */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEE8DD] border border-[#1C1B1A] text-[#1C1B1A] rounded-full text-xs font-mono uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#971F26]" />
            <span>CROSS-SYSTEM CONTINUITY FRAMEWORK</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1B1A] tracking-tight leading-[1.08]">
          Help exists. <br />
          <span className="text-[#971F26] italic font-serif underline-rough inline-block mt-1">
            The map between it doesn’t.
          </span>
        </h1>

        {/* Single plain-language explanation */}
        <p className="text-lg sm:text-xl font-medium leading-relaxed text-stone-900 max-w-3xl">
          Maps With Teeth is a public-interest continuity and accountability framework for people navigating crisis across institutions that do not share one case file, one jurisdiction, or one map.
        </p>

        {/* Two clear actions */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <Link
            href="/find-help"
            className="px-6 py-3.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Find Help</span>
          </Link>

          <a
            href="#the-work"
            className="px-6 py-3.5 bg-[#EEE8DD] hover:bg-[#E5DEC9] border-2 border-[#1C1B1A] text-[#1C1D1A] rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-sm"
          >
            <Layers className="w-4 h-4 text-[#971F26]" />
            <span>Explore the Initiative</span>
            <ArrowDown className="w-3.5 h-3.5 text-stone-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
