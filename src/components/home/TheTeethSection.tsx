import React from "react";
import {
  SlidersHorizontal,
  FileText,
  MapPin,
  KeyRound,
  Clock,
  Car,
  AlertTriangle,
  Compass,
} from "lucide-react";

export function TheTeethSection() {
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
    <section className="bg-[#1C1B1A] text-[#F5F1E8] rounded-2xl p-6 sm:p-10 border-2 border-stone-800 shadow-xl space-y-8 select-none font-sans relative overflow-hidden bg-grid-diagram">
      {/* Editorial Header */}
      <div className="border-b border-stone-800 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-red-400 font-bold flex items-center gap-1.5 bg-[#252525] px-3.5 py-1.5 rounded-full border border-stone-700">
            <Compass className="w-4 h-4 text-red-400" />
            <span>THE CORE DIFFERENTIATOR · 7 AUDITED FRICTION VECTORS</span>
          </span>
          <span className="coord-tick text-stone-300">[BARRIER-FIRST METHODOLOGY]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          What gives the map teeth?
        </h2>

        <p className="text-base sm:text-lg text-stone-100 max-w-3xl leading-relaxed font-sans font-normal">
          A normal directory tells you that a resource exists. <strong className="text-white font-semibold">That is not enough.</strong> Maps With Teeth tracks the conditions, barriers, and unwritten rules around actually reaching it.
        </p>
      </div>

      {/* The 7 Teeth Pillars Grid + Centerpiece Callout */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teethPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="bg-[#242424] hover:bg-[#2A2A2A] border border-stone-700 hover:border-red-500 rounded-xl p-5 sm:p-6 space-y-3.5 transition-all group shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2.5 font-mono text-xs">
                  <span className="text-red-400 font-bold tracking-widest">
                    THE TEETH · {pillar.code}
                  </span>
                  <div className="w-7 h-7 rounded bg-[#1C1B1A] border border-stone-700 flex items-center justify-center text-stone-300 group-hover:text-red-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-stone-100 font-sans leading-relaxed font-medium">
                  {pillar.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-[13px] text-stone-300 font-mono italic pt-2.5 border-t border-stone-800/90 leading-normal">
                {pillar.detail}
              </p>
            </div>
          );
        })}

        {/* Highlight Thesis Callout Card */}
        <div className="bg-gradient-to-br from-[#7A2026] to-[#451014] text-white border-2 border-red-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-lg sm:col-span-2 lg:col-span-1">
          <div className="space-y-1">
            <span className="text-xs font-mono text-amber-300 uppercase tracking-widest font-bold block">
              PROJECT THESIS
            </span>
            <div className="pt-2">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-white italic leading-tight">
                &ldquo;Listed does not mean reachable.&rdquo;
              </p>
            </div>
          </div>

          <p className="text-sm text-red-100 font-sans leading-relaxed mt-4 pt-3.5 border-t border-red-800/60 font-medium">
            We map the friction points before people invest critical emotional energy and time in pathways that lead to dead ends.
          </p>
        </div>
      </div>
    </section>
  );
}
