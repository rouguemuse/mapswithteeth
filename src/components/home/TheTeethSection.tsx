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
      description: "Who qualifies — and who gets screened out.",
      icon: SlidersHorizontal,
      code: "01",
    },
    {
      title: "Documentation",
      description: "What you must produce before anyone will act.",
      icon: FileText,
      code: "02",
    },
    {
      title: "Geography",
      description: "County, city, ZIP, jurisdiction, residency and service-area restrictions.",
      icon: MapPin,
      code: "03",
    },
    {
      title: "Referral Gates",
      description: "Whether you can apply yourself or need an advocate, shelter, caseworker, officer, employer, school or other intermediary.",
      icon: KeyRound,
      code: "04",
    },
    {
      title: "Timing",
      description: "Waitlists, application windows, deadlines and funding cycles.",
      icon: Clock,
      code: "05",
    },
    {
      title: "Access Conditions",
      description: "Transportation, phone, internet, appointment, in-person or shelter-stay requirements.",
      icon: Car,
      code: "06",
    },
    {
      title: "Current Friction",
      description: "Funding freezes, disconnected numbers, programs that technically exist but are not currently usable.",
      icon: AlertTriangle,
      code: "07",
    },
  ];

  return (
    <section className="space-y-8 select-none font-sans">
      {/* Section Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>THE BARRIER-FIRST METHODOLOGY</span>
          </span>
          <span className="coord-tick">[7 FRICTION LEVERS AUDITED]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          What gives the map teeth?
        </h2>

        <p className="text-xs sm:text-sm text-stone-700 max-w-3xl leading-relaxed font-sans">
          A normal directory tells you that a resource exists. That is not enough. Maps With Teeth also tracks the conditions around actually reaching it.
        </p>
      </div>

      {/* 7 Teeth Pillars Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teethPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 space-y-3 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
                <span className="text-[#971F26] font-bold">THE TEETH · {pillar.code}</span>
                <Icon className="w-4 h-4 text-[#1C1D1D]" />
              </div>

              <h3 className="text-base font-serif font-bold text-[#1C1D1D]">
                {pillar.title}
              </h3>

              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          );
        })}

        {/* Featured Callout Card */}
        <div className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 flex flex-col justify-between shadow-sm sm:col-span-2 lg:col-span-3 xl:col-span-1">
          <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold block">
            CORE PRINCIPLE
          </span>
          <div className="my-auto py-2">
            <p className="text-xl sm:text-2xl font-serif font-bold text-white italic leading-tight">
              &ldquo;Listed does not mean reachable.&rdquo;
            </p>
          </div>
          <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
            We track the real friction points so people don&apos;t waste critical time pursuing dead ends.
          </p>
        </div>
      </div>
    </section>
  );
}
