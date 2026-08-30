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
  CornerDownRight,
  Sparkles
} from "lucide-react";

export function HeroThesisSection() {
  return (
    <section className="relative border-b border-[#D9D1C4] bg-[#F5F1E8] bg-grid-ledger overflow-hidden min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-between pt-8 sm:pt-12 pb-0 select-none">
      {/* Decorative Cartographic Coordinate Marks */}
      <div className="absolute top-3 left-4 coord-tick hidden sm:block">
        [LAT 30°16'02"N · LON 97°44'35"W]
      </div>
      <div className="absolute top-3 right-4 coord-tick hidden sm:block">
        [INDEX REF: ATLAS-TX-2026-V0]
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-6 sm:py-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Headline, Framing & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Outlined Status Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEE8DD] border border-[#1C1D1D] text-[#1C1D1D] rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#971F26] animate-pulse" />
                <span>IN DEVELOPMENT · CENTRAL TEXAS PILOT</span>
              </div>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-[1.12]">
                Help exists. <br />
                <span className="text-[#971F26] italic font-serif">
                  Access is another question.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className="space-y-4 text-[#1C1D1D]">
              <p className="text-base sm:text-lg font-medium leading-relaxed font-sans text-stone-900">
                Maps With Teeth maps the barriers between people and the help they’re supposed to be able to reach.
              </p>

              {/* Compact Barrier List (Field Notation) */}
              <div className="p-3.5 bg-[#EEE8DD] border-l-3 border-[#971F26] border border-[#D9D1C4] rounded-r-md font-mono text-[11px] sm:text-xs tracking-wider text-stone-800 leading-relaxed uppercase">
                <p className="font-bold">
                  ELIGIBILITY RULES · DOCUMENTATION · COUNTY LINES · WAITLISTS · REFERRAL REQUIREMENTS · TRANSPORTATION · SHELTER PREREQUISITES · FUNDING GAPS
                </p>
              </div>

              <p className="text-xs sm:text-sm font-sans text-stone-700 italic">
                Programs can exist on paper and still be practically unreachable.
              </p>

              {/* Core Proposition */}
              <div className="text-xs sm:text-sm font-sans space-y-1 text-stone-800">
                <p className="font-semibold text-[#1C1D1D]">
                  Not another resource directory.
                </p>
                <p className="text-stone-700">
                  A map of what gets in the way — and the routes that may still be open.
                </p>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/find-help"
                className="px-6 sm:px-8 py-3.5 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5 border border-[#971F26]"
              >
                <span>FIND A WAY THROUGH</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/how-it-works"
                className="px-6 sm:px-8 py-3.5 bg-[#EEE8DD] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-sm"
              >
                <span>SEE HOW THE PILOT WORKS</span>
              </Link>
            </div>

            {/* Small Partner / Feedback Callout */}
            <div className="pt-2">
              <p className="text-xs text-stone-600 font-sans">
                For advocates, researchers, public agencies, labor, and community partners:{" "}
                <Link
                  href="/feedback"
                  className="text-[#971F26] font-mono font-bold hover:underline inline-flex items-center gap-1"
                >
                  Help us pressure-test the model. Give Feedback →
                </Link>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Annotated Barrier-Flow Atlas Diagram */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-md relative overflow-hidden bg-grid-diagram">
              {/* Atlas Diagram Header */}
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3 mb-4 font-mono text-[10px]">
                <span className="text-[#1C1D1D] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#971F26]" />
                  <span>BARRIER FLOW ANALYSIS</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#F5F1E8] border border-[#1C1D1D] text-[#1C1D1D] font-bold">
                  FIG. 01 · ACCESS FUNNEL
                </span>
              </div>

              {/* Upper Handwritten Field Note */}
              <div className="mb-3 text-center">
                <p className="field-annotation text-sm sm:text-base font-handwriting text-stone-800">
                  &ldquo;The system is supposed to help. But access has conditions.&rdquo;
                </p>
              </div>

              {/* The Vertical Barrier Stack */}
              <div className="space-y-2 relative">
                {/* 1. RESOURCE FOUND */}
                <div className="p-2 sm:p-2.5 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-xs">
                  <Search className="w-3.5 h-3.5 text-[#EEE8DD]" />
                  <span>RESOURCE FOUND</span>
                </div>

                <div className="flex justify-center text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 2. ELIGIBLE? */}
                <div className="relative flex items-center">
                  <div className="w-full p-2 sm:p-2.5 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-xs">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#EEE8DD]" />
                    <span>ELIGIBLE?</span>
                  </div>
                  <span className="absolute left-full ml-3 text-[11px] text-stone-700 italic font-mono whitespace-nowrap hidden sm:inline-block">
                    ┄ Income limits
                  </span>
                </div>

                <div className="flex justify-center text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 3. DOCUMENTS? */}
                <div className="relative flex items-center">
                  <div className="w-full p-2 sm:p-2.5 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-xs">
                    <FileText className="w-3.5 h-3.5 text-[#EEE8DD]" />
                    <span>DOCUMENTS?</span>
                  </div>
                  <span className="absolute left-full ml-3 text-[11px] text-stone-700 italic font-mono whitespace-nowrap hidden sm:inline-block">
                    ┄ Hard to get
                  </span>
                </div>

                <div className="flex justify-center text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 4. RIGHT COUNTY? */}
                <div className="relative flex items-center">
                  <div className="w-full p-2 sm:p-2.5 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#EEE8DD]" />
                    <span>RIGHT COUNTY?</span>
                  </div>
                  <span className="absolute left-full ml-3 text-[11px] text-stone-700 italic font-mono whitespace-nowrap hidden sm:inline-block">
                    ┄ Boundaries
                  </span>
                </div>

                <div className="flex justify-center text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 5. REFERRAL? */}
                <div className="relative flex items-center">
                  <div className="w-full p-2 sm:p-2.5 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-xs">
                    <KeyRound className="w-3.5 h-3.5 text-[#EEE8DD]" />
                    <span>REFERRAL?</span>
                  </div>
                  <span className="absolute left-full ml-3 text-[11px] text-stone-700 italic font-mono whitespace-nowrap hidden sm:inline-block">
                    ┄ Gatekeeper req.
                  </span>
                </div>

                <div className="flex justify-center text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 6. WAITLIST? */}
                <div className="relative flex items-center">
                  <div className="w-full p-2 sm:p-2.5 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#EEE8DD]" />
                    <span>WAITLIST?</span>
                  </div>
                  <span className="absolute left-full ml-3 text-[11px] text-stone-700 italic font-mono whitespace-nowrap hidden sm:inline-block">
                    ┄ Weeks/months
                  </span>
                </div>

                <div className="flex justify-center text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 7. DEAD END & RED THREAD BREAKOUT */}
                <div className="p-2 sm:p-2.5 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-xs font-bold border border-red-900 shadow-xs">
                  <XOctagon className="w-3.5 h-3.5 text-[#971F26]" />
                  <span>DEAD END</span>
                </div>

                {/* The Red Thread Lateral Escape Arrow */}
                <div className="pt-2 flex flex-col items-center">
                  <div className="text-[#971F26] flex items-center gap-1 font-mono text-xs font-bold">
                    <CornerDownRight className="w-5 h-5 animate-bounce" />
                    <span>LATERAL ESCAPE ROUTE</span>
                  </div>

                  {/* Red Thread Highlight Banner */}
                  <Link
                    href="/other-ways-through"
                    className="w-full mt-2 py-3 px-4 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-center font-mono text-xs font-bold tracking-wider uppercase shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 border border-[#971F26]"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>OTHER WAY THROUGH</span>
                  </Link>

                  <p className="mt-2 field-annotation text-xs sm:text-sm font-handwriting text-stone-800 text-center">
                    &ldquo;There are other routes. We help you find them.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer Band */}
      <div className="w-full border-t border-[#1C1D1D] bg-[#1C1D1D] text-stone-300 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#971F26] font-bold">●</span>
            <p className="leading-tight text-stone-300">
              Maps With Teeth is an independent public-interest initiative in development. It is not currently a 501(c)(3), government agency, emergency service, or legal-services provider.
            </p>
          </div>
          <Link
            href="/about"
            className="text-stone-400 hover:text-white shrink-0 uppercase tracking-wider font-bold transition-colors"
          >
            Learn more about our work →
          </Link>
        </div>
      </div>
    </section>
  );
}
