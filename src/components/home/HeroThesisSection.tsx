"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Search,
  SlidersHorizontal,
  FileText,
  MapPin,
  KeyRound,
  Clock,
  XOctagon,
  Compass,
  Users,
  Info
} from "lucide-react";

export function HeroThesisSection() {
  return (
    <section className="relative border-b border-[#D9D1C4] bg-[#F5F1E8] bg-grid-ledger overflow-hidden min-h-[82vh] flex flex-col justify-between pt-6 sm:pt-10 pb-0 select-none">
      {/* Decorative Cartographic Coordinate Marks */}
      <div className="absolute top-3 left-4 coord-tick hidden sm:block">
        [LAT 30°16'02"N · LON 97°44'35"W]
      </div>
      <div className="absolute top-3 right-4 coord-tick hidden sm:block">
        [INDEX REF: ATLAS-TX-2026-V0]
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-6 sm:py-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: 55% Editorial Headline, Framing & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Outlined Status Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#EEE8DD] border border-[#1C1B1A] text-[#1C1B1A] rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#7A2026] animate-pulse" />
                <span>IN DEVELOPMENT · CENTRAL TEXAS PILOT</span>
              </div>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-serif font-bold text-[#1C1B1A] tracking-tight leading-[1.08]">
                Help exists. <br />
                <span className="text-[#7A2026] italic font-serif relative underline-rough inline-block mt-1 sm:mt-2">
                  Access is another question.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className="space-y-4 text-[#1C1B1A]">
              <p className="text-base sm:text-lg font-medium leading-relaxed font-sans text-stone-900 max-w-2xl">
                Maps With Teeth maps the barriers between people and the help they&apos;re supposed to be able to reach.
              </p>

              {/* Compact Barrier List (Field Notation) */}
              <div className="p-3.5 sm:p-4 bg-[#EEE8DD] border-l-4 border-l-[#7A2026] border border-[#D9D1C4] rounded-r-md font-mono text-[11px] sm:text-xs tracking-wider text-stone-800 leading-relaxed uppercase space-y-1">
                <p className="font-bold">
                  ELIGIBILITY RULES · DOCUMENTATION · COUNTY LINES · WAITLISTS
                </p>
                <p className="font-bold">
                  REFERRAL REQUIREMENTS · TRANSPORTATION · SHELTER PREREQUISITES
                </p>
                <p className="font-bold text-stone-600">
                  PROGRAMS THAT EXIST ON PAPER BUT CANNOT ACTUALLY BE ACCESSED.
                </p>
              </div>

              <p className="text-xs sm:text-sm font-sans text-stone-700 italic">
                Programs can exist on paper and still be practically unreachable.
              </p>

              {/* Core Proposition */}
              <div className="text-xs sm:text-sm font-sans space-y-1 text-stone-800 pt-1">
                <p className="font-bold text-[#1C1B1A] text-sm sm:text-base">
                  Not another resource directory.
                </p>
                <p className="text-stone-700">
                  A map of what gets in the way—and the routes that may still be open.
                </p>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/find-help"
                className="px-6 sm:px-8 py-3.5 bg-[#7A2026] hover:bg-[#5C181D] text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5 border border-[#7A2026]"
              >
                <MapPin className="w-4 h-4" />
                <span>FIND A WAY THROUGH</span>
              </Link>

              <Link
                href="/how-it-works"
                className="px-6 sm:px-8 py-3.5 bg-[#EEE8DD] hover:bg-[#E5DEC9] border-2 border-[#1C1B1A] text-[#1C1B1A] rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-sm"
              >
                <Compass className="w-4 h-4 text-stone-700" />
                <span>SEE HOW THE PILOT WORKS</span>
              </Link>
            </div>

            {/* Small Partner / Feedback Callout */}
            <div className="pt-2">
              <div className="p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md flex items-center gap-3 text-xs text-stone-800 max-w-2xl">
                <div className="w-8 h-8 rounded bg-[#F5F1E8] border border-[#D9D1C4] flex items-center justify-center text-[#7A2026] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="leading-relaxed">
                  <span>For advocates, researchers, public agencies, labor, and community partners: </span>
                  <Link
                    href="/feedback"
                    className="text-[#7A2026] font-mono font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Help us pressure-test the model. Give Feedback →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 45% Open Cartographic Annotated Barrier-Flow Presentation */}
          <div className="lg:col-span-5 relative pt-4 lg:pt-0">
            {/* Top Handwritten Annotation with Curved Arrow */}
            <div className="relative mb-3 flex items-center justify-end pr-2 sm:pr-6">
              <div className="relative text-right max-w-[240px]">
                <p className="field-annotation text-sm sm:text-base font-handwriting text-stone-800 leading-snug">
                  The system is supposed to help.<br />
                  But access has conditions.
                </p>
                {/* Curved SVG arrow pointing down-left toward the flow */}
                <div className="flex justify-end mt-1">
                  <svg className="w-16 h-8 text-stone-700" viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M 50,2 Q 30,12 8,24" strokeLinecap="round" />
                    <path d="M 8,24 L 16,18 M 8,24 L 14,28" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* The Vertical Barrier Stack */}
            <div className="relative space-y-2 max-w-[380px] mx-auto lg:mr-auto lg:ml-4">
              {/* 1. RESOURCE FOUND */}
              <div className="flex items-center">
                <div className="w-[200px] p-2.5 bg-[#1C1B1A] text-white rounded-lg flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-sm shrink-0">
                  <Search className="w-3.5 h-3.5 text-[#EEE8DD]" />
                  <span>RESOURCE FOUND</span>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="w-[200px] flex justify-center text-stone-700 py-0.5">
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              {/* 2. ELIGIBLE? */}
              <div className="flex items-center">
                <div className="w-[200px] p-2.5 bg-[#1C1B1A] text-white rounded-lg flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-sm shrink-0">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#EEE8DD]" />
                  <span>ELIGIBLE?</span>
                </div>
                <div className="flex items-center pl-3">
                  <span className="text-stone-400 font-mono text-xs">┄┄┄</span>
                  <span className="field-annotation text-sm sm:text-base font-handwriting text-stone-800 italic pl-2 whitespace-nowrap">
                    Income limits
                  </span>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="w-[200px] flex justify-center text-stone-700 py-0.5">
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              {/* 3. DOCUMENTS? */}
              <div className="flex items-center">
                <div className="w-[200px] p-2.5 bg-[#1C1B1A] text-white rounded-lg flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-sm shrink-0">
                  <FileText className="w-3.5 h-3.5 text-[#EEE8DD]" />
                  <span>DOCUMENTS?</span>
                </div>
                <div className="flex items-center pl-3">
                  <span className="text-stone-400 font-mono text-xs">┄┄┄</span>
                  <span className="field-annotation text-sm sm:text-base font-handwriting text-stone-800 italic pl-2 whitespace-nowrap">
                    Hard to get
                  </span>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className="w-[200px] flex justify-center text-stone-700 py-0.5">
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              {/* 4. RIGHT COUNTY? */}
              <div className="flex items-center">
                <div className="w-[200px] p-2.5 bg-[#1C1B1A] text-white rounded-lg flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-sm shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#EEE8DD]" />
                  <span>RIGHT COUNTY?</span>
                </div>
                <div className="flex items-center pl-3">
                  <span className="text-stone-400 font-mono text-xs">┄┄┄</span>
                  <span className="field-annotation text-sm sm:text-base font-handwriting text-stone-800 italic pl-2 whitespace-nowrap">
                    Boundaries
                  </span>
                </div>
              </div>

              {/* Arrow 4 */}
              <div className="w-[200px] flex justify-center text-stone-700 py-0.5">
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              {/* 5. REFERRAL? */}
              <div className="flex items-center">
                <div className="w-[200px] p-2.5 bg-[#1C1B1A] text-white rounded-lg flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-sm shrink-0">
                  <KeyRound className="w-3.5 h-3.5 text-[#EEE8DD]" />
                  <span>REFERRAL?</span>
                </div>
                <div className="flex items-center pl-3">
                  <span className="text-stone-400 font-mono text-xs">┄┄┄</span>
                  <span className="field-annotation text-sm sm:text-base font-handwriting text-stone-800 italic pl-2 whitespace-nowrap">
                    Gatekeeper required
                  </span>
                </div>
              </div>

              {/* Arrow 5 */}
              <div className="w-[200px] flex justify-center text-stone-700 py-0.5">
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              {/* 6. WAITLIST? */}
              <div className="flex items-center">
                <div className="w-[200px] p-2.5 bg-[#1C1D1D] text-white rounded-lg flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-sm shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#EEE8DD]" />
                  <span>WAITLIST?</span>
                </div>
                <div className="flex items-center pl-3">
                  <span className="text-stone-400 font-mono text-xs">┄┄┄</span>
                  <span className="field-annotation text-sm sm:text-base font-handwriting text-stone-800 italic pl-2 whitespace-nowrap">
                    Weeks or months
                  </span>
                </div>
              </div>

              {/* Arrow 6 */}
              <div className="w-[200px] flex justify-center text-stone-700 py-0.5">
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              {/* 7. DEAD END & LATERAL BRANCH */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-[200px] p-2.5 bg-[#1C1B1A] text-white rounded-lg flex items-center justify-center gap-2 font-mono text-xs font-bold border border-red-900 shadow-sm shrink-0">
                    <XOctagon className="w-3.5 h-3.5 text-[#7A2026]" />
                    <span>DEAD END</span>
                  </div>

                  {/* Dashed Red Lateral Escape Path connecting DEAD END to OTHER WAY THROUGH */}
                  <div className="flex items-center pl-2">
                    <svg className="w-16 sm:w-20 h-10 text-[#7A2026]" viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 4">
                      <path d="M 4,6 C 30,6 50,20 74,32" strokeLinecap="round" />
                      <path d="M 74,32 L 64,26 M 74,32 L 68,38" strokeLinecap="round" strokeDasharray="none" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>

                {/* Hand-marked / Brush-stroke Ribbon: OTHER WAY THROUGH */}
                <div className="mt-3 ml-24 sm:ml-28 relative inline-block">
                  {/* Hand-drawn red burst tick marks above right */}
                  <div className="absolute -top-3.5 right-2 flex gap-1 select-none pointer-events-none">
                    <span className="w-1 h-3 bg-[#7A2026] -rotate-12 rounded-full inline-block"></span>
                    <span className="w-1 h-3.5 bg-[#7A2026] rotate-12 rounded-full inline-block"></span>
                    <span className="w-1 h-3 bg-[#7A2026] rotate-30 rounded-full inline-block"></span>
                  </div>

                  <Link
                    href="/other-ways-through"
                    className="bg-[#7A2026] hover:bg-[#5C181D] text-white font-mono font-bold text-xs sm:text-sm tracking-widest uppercase px-6 py-2.5 shadow-md block transition-transform transform hover:scale-105"
                    style={{
                      clipPath: "polygon(0% 0%, 96% 2%, 100% 50%, 96% 98%, 4% 97%, 0% 50%)",
                    }}
                  >
                    OTHER WAY THROUGH
                  </Link>

                  {/* Handwritten Note Below */}
                  <p className="field-annotation text-xs sm:text-sm font-handwriting text-stone-800 mt-1.5 text-right pr-2 leading-tight">
                    There are other routes.<br />
                    We help you find them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer Band (100% full width) */}
      <div className="w-full border-t border-[#1C1B1A] bg-[#1C1B1A] text-stone-300 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-stone-400 shrink-0" />
            <p className="leading-tight text-stone-300">
              Maps With Teeth is an independent public-interest initiative in development. It is not currently a 501(c)(3), government agency, emergency service, or legal-services provider.
            </p>
          </div>
          <Link
            href="/about"
            className="text-stone-400 hover:text-white shrink-0 uppercase tracking-wider font-bold transition-colors"
          >
            LEARN MORE ABOUT OUR WORK →
          </Link>
        </div>
      </div>
    </section>
  );
}
