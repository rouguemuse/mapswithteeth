"use client";

import React, { useState } from "react";
import {
  SlidersHorizontal,
  FileText,
  MapPin,
  KeyRound,
  Clock,
  Car,
  AlertTriangle,
  Compass,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export function TheTeethSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const teethPillars = [
    {
      title: "Eligibility",
      subtitle: "Who qualifies — and who gets screened out.",
      icon: SlidersHorizontal,
      code: "01",
      detail: "Income limits, household definitions, categorical exclusions.",
    },
    {
      title: "Documentation",
      subtitle: "What you must produce before anyone will act.",
      icon: FileText,
      code: "02",
      detail: "Photo ID, birth certificates, pay stubs, police reports, protective orders.",
    },
    {
      title: "Geography",
      subtitle: "County, city, ZIP, jurisdiction, residency and service-area restrictions.",
      icon: MapPin,
      code: "03",
      detail: "County line locks, municipal boundaries, residency tenure minimums.",
    },
    {
      title: "Referral Gates",
      subtitle: "Whether you can apply yourself or need an intermediary.",
      icon: KeyRound,
      code: "04",
      detail: "Shelter advocate, caseworker, officer, employer, or institutional sponsor required.",
    },
    {
      title: "Timing",
      subtitle: "Waitlists, application windows, deadlines and funding cycles.",
      icon: Clock,
      code: "05",
      detail: "Monthly funding caps exhausted in hours, multi-month queues, retroactive deadlines.",
    },
    {
      title: "Access Conditions",
      subtitle: "Physical and technical hurdles required to apply.",
      icon: Car,
      code: "06",
      detail: "Transportation, phone line, in-person appointments, or mandatory shelter stays.",
    },
    {
      title: "Current Friction",
      subtitle: "Programs that exist on paper but are not currently usable.",
      icon: AlertTriangle,
      code: "07",
      detail: "Funding freezes, unstaffed intake lines, paused applications, broken portals.",
    },
  ];

  return (
    <section className="bg-[#EEE8DD] text-[#26221F] rounded-2xl p-6 sm:p-10 border border-[#D9D1C4] shadow-xs space-y-8 select-none font-sans relative overflow-hidden bg-grid-atlas">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5 bg-[#F5F1E8] px-3.5 py-1.5 rounded-full border border-[#D9D1C4]">
            <Compass className="w-4 h-4 text-[#971F26]" />
            <span>CHAPTER 02 · 7 AUDITED FRICTION VECTORS</span>
          </span>
          <span className="coord-tick text-stone-600">[BARRIER-FIRST METHODOLOGY]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#26221F] tracking-tight leading-tight">
          What gives the map teeth?
        </h2>

        <p className="text-base sm:text-lg text-stone-800 max-w-3xl leading-relaxed font-sans font-normal">
          A normal directory tells you that a resource exists. <strong className="text-[#26221F] font-semibold">That is not enough.</strong> Maps With Teeth tracks the conditions, barriers, and unwritten rules around actually reaching it.
        </p>
      </div>

      {/* The 7 Teeth Pillars Grid + Centerpiece Callout (Reversed to Light/Parchment) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teethPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isHiddenOnMobile = !showAllMobile && idx >= 3;

          return (
            <div
              key={pillar.title}
              className={`bg-[#FAF7F2] hover:bg-white border border-[#D9D1C4] hover:border-[#971F26] rounded-xl p-5 sm:p-6 space-y-3.5 transition-all group shadow-2xs hover:shadow-xs flex flex-col justify-between ${
                isHiddenOnMobile ? "hidden sm:flex" : "flex"
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2.5 font-mono text-xs">
                  <span className="text-[#971F26] font-bold tracking-widest">
                    THE TEETH · {pillar.code}
                  </span>
                  <div className="w-7 h-7 rounded bg-[#EEE8DD] border border-[#D9D1C4] flex items-center justify-center text-stone-700 group-hover:text-[#971F26] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#26221F] group-hover:text-[#971F26] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed font-medium">
                  {pillar.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-[12.5px] text-stone-600 font-mono italic pt-2.5 border-t border-[#D9D1C4] leading-normal">
                {pillar.detail}
              </p>
            </div>
          );
        })}

        {/* Highlight Thesis Callout Card (Strategic Oxblood Accent) */}
        <div className="bg-[#971F26] text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-md sm:col-span-2 lg:col-span-1">
          <div className="space-y-1">
            <span className="text-xs font-mono text-amber-200 uppercase tracking-widest font-bold block">
              PROJECT THESIS
            </span>
            <div className="pt-2">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-white italic leading-tight">
                &ldquo;Listed does not mean reachable.&rdquo;
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-red-100 font-sans leading-relaxed mt-4 pt-3.5 border-t border-red-800/80 font-normal">
            We map the friction points before people invest critical emotional energy and time in pathways that lead to dead ends.
          </p>
        </div>
      </div>

      {/* Mobile Progressive Disclosure Toggle */}
      <div className="sm:hidden pt-1">
        <button
          type="button"
          onClick={() => setShowAllMobile(!showAllMobile)}
          aria-expanded={showAllMobile}
          className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-white border border-[#D9D1C4] text-[#26221F] rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
        >
          {showAllMobile ? (
            <>
              <span>Show Fewer Friction Vectors</span>
              <ChevronUp className="w-4 h-4 text-[#971F26]" />
            </>
          ) : (
            <>
              <span>See All 7 Friction Vectors (+4 More)</span>
              <ChevronDown className="w-4 h-4 text-[#971F26]" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
