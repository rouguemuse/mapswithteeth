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
          {/* LEFT COLUMN: 60% Editorial Headline, Framing & CTAs */}
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
                  ELIGIBILITY RULES · DOCUMENTATION · COUNTY LINES · WAITLISTS · REFERRAL REQUIREMENTS · TRANSPORTATION · SHELTER PREREQUISITES · PROGRAMS THAT EXIST ON PAPER BUT CANNOT ACTUALLY BE ACCESSED.
                </p>
              </div>

              {/* Core Proposition */}
              <div className="text-xs sm:text-sm font-sans space-y-1 text-stone-800">
                <p className="font-semibold text-[#1C1D1D]">
                  Not another resource directory.
                </p>
                <p className="text-stone-700">
                  A map of what gets in the way—and the routes that may still be open.
                </p>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/find-help"
                className="px-6 sm:px-8 py-3.5 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5 border border-[#971F26]"
              >
                <span>EXPLORE THE RESOURCES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/how-we-research"
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

          {/* RIGHT COLUMN: 40% Annotated Barrier-Flow Atlas Diagram */}
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
                <div className="flex items-center gap-3">
                  <div className="flex-1 p-2 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-[11px] font-bold">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-stone-300" />
                    <span>ELIGIBLE?</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 w-28 sm:w-32">
                    <span className="w-3 h-0.5 bg-[#971F26] border-t border-dashed border-[#971F26]" />
                    <span className="field-annotation text-xs text-[#971F26] font-bold">Income limits</span>
                  </div>
                </div>

                <div className="flex justify-start pl-[20%] sm:pl-[22%] text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 3. DOCUMENTS? */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 p-2 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-[11px] font-bold">
                    <FileText className="w-3.5 h-3.5 text-stone-300" />
                    <span>DOCUMENTS?</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 w-28 sm:w-32">
                    <span className="w-3 h-0.5 bg-[#971F26] border-t border-dashed border-[#971F26]" />
                    <span className="field-annotation text-xs text-[#971F26] font-bold">Hard to get</span>
                  </div>
                </div>

                <div className="flex justify-start pl-[20%] sm:pl-[22%] text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 4. RIGHT COUNTY? */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 p-2 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-[11px] font-bold">
                    <MapPin className="w-3.5 h-3.5 text-stone-300" />
                    <span>RIGHT COUNTY?</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 w-28 sm:w-32">
                    <span className="w-3 h-0.5 bg-[#971F26] border-t border-dashed border-[#971F26]" />
                    <span className="field-annotation text-xs text-[#971F26] font-bold">Boundaries</span>
                  </div>
                </div>

                <div className="flex justify-start pl-[20%] sm:pl-[22%] text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 5. REFERRAL? */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 p-2 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-[11px] font-bold">
                    <KeyRound className="w-3.5 h-3.5 text-stone-300" />
                    <span>REFERRAL?</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 w-28 sm:w-32">
                    <span className="w-3 h-0.5 bg-[#971F26] border-t border-dashed border-[#971F26]" />
                    <span className="field-annotation text-xs text-[#971F26] font-bold">Gatekeeper req.</span>
                  </div>
                </div>

                <div className="flex justify-start pl-[20%] sm:pl-[22%] text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 6. WAITLIST? */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 p-2 bg-[#1C1D1D] text-white rounded-md flex items-center justify-center gap-2 font-mono text-[11px] font-bold">
                    <Clock className="w-3.5 h-3.5 text-stone-300" />
                    <span>WAITLIST?</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 w-28 sm:w-32">
                    <span className="w-3 h-0.5 bg-[#971F26] border-t border-dashed border-[#971F26]" />
                    <span className="field-annotation text-xs text-[#971F26] font-bold">Weeks or months</span>
                  </div>
                </div>

                <div className="flex justify-start pl-[20%] sm:pl-[22%] text-stone-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 7. DEAD END */}
                <div className="p-2 sm:p-2.5 bg-[#971F26] text-white border-2 border-[#1C1D1D] rounded-md flex items-center justify-center gap-2 font-mono text-xs font-bold shadow-sm">
                  <XOctagon className="w-4 h-4 text-white" />
                  <span>DEAD END (PROGRAM BLOCKED)</span>
                </div>

                {/* ROUGH OXBLOOD ROUTE ARROW: OTHER WAY THROUGH */}
                <div className="mt-4 pt-3 border-t-2 border-dashed border-[#971F26]">
                  <Link
                    href="/other-ways-through"
                    className="group block p-3 bg-[#F5F1E8] border-2 border-[#971F26] rounded-lg shadow-sm hover:bg-white transition-all"
                  >
                    <div className="flex items-center justify-between font-mono font-bold text-xs text-[#971F26]">
                      <span className="flex items-center gap-1.5 uppercase tracking-wider">
                        <CornerDownRight className="w-4 h-4" />
                        <span>OTHER WAY THROUGH →</span>
                      </span>
                      <span className="stamp-alert text-[9px] py-0.5">
                        LATERAL BYPASS
                      </span>
                    </div>

                    {/* Handwritten Supporting Line */}
                    <p className="field-annotation text-xs sm:text-sm font-handwriting text-stone-900 mt-1.5 leading-snug">
                      &ldquo;There are other routes. We help you find them.&rdquo;
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Restrained Info Strip */}
      <div className="border-t border-[#D9D1C4] bg-[#EEE8DD] py-2.5 px-4 text-center mt-6">
        <p className="text-[10px] sm:text-[11px] font-mono text-stone-700 max-w-4xl mx-auto leading-relaxed">
          Maps With Teeth is an independent public-interest initiative in development. It is not currently a 501(c)(3), government agency, emergency service, or legal-services provider.
        </p>
      </div>
    </section>
  );
}
