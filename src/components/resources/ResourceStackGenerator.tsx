"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BARRIER_CATEGORIES } from "@/data/taxonomy/barriers";
import { INDUSTRY_OPTIONS } from "@/data/taxonomy/industries";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { matchIntakeToResources } from "@/domain/matching/matcher";
import { ResourceCard } from "./ResourceCard";
import { Layers, Sparkles, Dog, Briefcase, MapPin, ArrowRight, Compass, Check } from "lucide-react";

export function ResourceStackGenerator({ maxCards = 6 }: { maxCards?: number }) {
  const [selectedBarriers, setSelectedBarriers] = useState<string[]>([
    "money-now",
    "rent-deposit",
    "pets",
    "utility-deposit",
  ]);
  const [selectedState, setSelectedState] = useState<string>("TX");
  const [selectedCounty, setSelectedCounty] = useState<string>("Williamson");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("restaurant-food-service");
  const [hasAnimal, setHasAnimal] = useState<boolean>(true);

  const toggleBarrier = (id: string) => {
    setSelectedBarriers((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const matchResult = matchIntakeToResources({
    primaryBarriers: selectedBarriers,
    state: selectedState,
    county: selectedCounty,
    currentIndustry: selectedIndustry,
    recentIndustries: [],
    hasAnimal: hasAnimal,
    urgency: "WITHIN_72_HOURS",
    failedChannels: [],
  });

  const displayedMatches = maxCards ? matchResult.matches.slice(0, maxCards) : matchResult.matches;

  return (
    <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-10 shadow-sm space-y-8 bg-grid-diagram select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D1C4] pb-6">
        <div>
          <div className="flex items-center gap-2 text-[#971F26] mb-1.5 font-mono font-bold text-xs tracking-widest uppercase">
            <Layers className="w-4 h-4" />
            <span>COMBINABLE BARRIER SOLVER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Your Resource Stack: Ways Through
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 mt-1 max-w-2xl font-sans leading-relaxed">
            Single agencies rarely solve an entire crisis. Select your simultaneous barriers to assemble an integrated, multi-vector pathway.
          </p>
        </div>

        <div className="stamp-verified bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D] text-xs py-1.5 px-3">
          <strong>{matchResult.matches.length} POTENTIAL PATHWAYS</strong>
        </div>
      </div>

      {/* Interactive Levers Selector */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Levers: Location & Work */}
        <div className="space-y-4 bg-[#F5F1E8] p-5 rounded-lg border-2 border-[#1C1D1D] shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1D1D] flex items-center gap-1.5 font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#971F26]" />
            <span>1. Location & Pilot Region</span>
          </h3>

          <div>
            <label className="block text-[11px] text-stone-700 mb-1 font-mono font-bold">State Jurisdiction:</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md px-3 py-2 text-xs text-[#1C1D1D] focus:border-[#971F26] font-mono"
            >
              <option value="TX">Texas (Deep Research Pilot)</option>
              <option value="US">Nationwide / Other State</option>
            </select>
          </div>

          {selectedState === "TX" && (
            <div>
              <label className="block text-[11px] text-stone-700 mb-1 font-mono font-bold">Texas County Jurisdiction:</label>
              <select
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
                className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md px-3 py-2 text-xs text-[#1C1D1D] focus:border-[#971F26] font-mono"
              >
                {ALL_TEXAS_COUNTIES.map((c) => (
                  <option key={c.slug} value={c.name.replace(" County", "")}>
                    {c.name} {c.isPilotRegion ? "(Central TX Pilot)" : "(Gulf Coast)"}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-[11px] text-stone-700 mb-1 flex items-center gap-1 font-mono font-bold">
              <Briefcase className="w-3 h-3 text-[#971F26]" />
              <span>Work in Past 12 Months:</span>
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md px-3 py-2 text-xs text-[#1C1D1D] focus:border-[#971F26] font-mono"
            >
              {INDUSTRY_OPTIONS.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-mono font-bold text-[#1C1D1D]">
              <input
                type="checkbox"
                checked={hasAnimal}
                onChange={(e) => setHasAnimal(e.target.checked)}
                className="rounded border-[#1C1D1D] text-[#971F26] focus:ring-[#971F26] w-4 h-4"
              />
              <span className="flex items-center gap-1">
                <Dog className="w-3.5 h-3.5 text-[#971F26]" />
                <span>Pet / Animal In Household</span>
              </span>
            </label>
          </div>
        </div>

        {/* Levers: Select Barriers */}
        <div className="lg:col-span-2 space-y-4 bg-[#F5F1E8] p-5 rounded-lg border-2 border-[#1C1D1D] shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1D1D] flex items-center gap-1.5 font-mono">
              <Compass className="w-3.5 h-3.5 text-[#971F26]" />
              <span>2. Select Active Obstacles & Friction Points</span>
            </h3>
            <span className="text-[10px] font-mono text-[#971F26] font-bold">
              {selectedBarriers.length} Selected
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {BARRIER_CATEGORIES.slice(0, 9).map((b) => {
              const isSelected = selectedBarriers.includes(b.id);
              return (
                <button
                  key={b.id}
                  onClick={() => toggleBarrier(b.id)}
                  className={`p-2.5 rounded-md text-left transition-all border text-xs font-mono flex items-start gap-2 ${
                    isSelected
                      ? "bg-[#1C1D1D] text-white border-[#1C1D1D] font-bold shadow-xs"
                      : "bg-[#EEE8DD] text-stone-800 border-[#D9D1C4] hover:border-[#1C1D1D]"
                  }`}
                >
                  <span className="shrink-0 mt-0.5">
                    {isSelected ? <Check className="w-3 h-3 text-[#971F26]" /> : "•"}
                  </span>
                  <span className="leading-tight">{b.label}</span>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] font-mono text-stone-600">
            [TIP] Combining industry background + pet needs + statutory rights produces alternate pathways outside standard shelter lines.
          </p>
        </div>
      </div>

      {/* Surfaced Stack Results */}
      <div className="space-y-4 pt-4 border-t border-[#D9D1C4]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-serif font-bold text-[#1C1D1D]">
            Surfaced Multi-Vector Pathway ({displayedMatches.length})
          </h3>
          <Link
            href="/find-help"
            className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1"
          >
            <span>Explore All 30 Cataloged Pathways →</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedMatches.map((m) => (
            <ResourceCard
              key={m.resource.id}
              resource={m.resource}
              matchReason={m.matchReason}
              matchedTags={m.matchedTags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
