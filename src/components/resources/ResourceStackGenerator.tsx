"use client";

import React, { useState } from "react";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { INDUSTRY_OPTIONS } from "@/data/industries";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { matchIntakeToResources } from "@/data/matcher";
import { ResourceCard } from "./ResourceCard";
import { Layers, Sparkles, Dog, Briefcase, MapPin } from "lucide-react";

export function ResourceStackGenerator() {
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

  return (
    <div className="bg-brand-paper border border-brand-sand rounded-xl p-6 sm:p-8 shadow-md my-8 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-sand pb-5">
        <div>
          <div className="flex items-center gap-2 text-brand-oxblood mb-1">
            <Layers className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              Combinable Barrier Solver
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
            Your Resource Stack: Ways Through
          </h2>
          <p className="text-xs text-stone-600 mt-1 max-w-2xl font-sans">
            Single agencies rarely solve an entire crisis. Select your simultaneous barriers to assemble an integrated, multi-vector pathway.
          </p>
        </div>

        <div className="px-3 py-1.5 bg-brand-ivory border border-stone-300 rounded-lg text-xs font-mono text-stone-800 shadow-sm">
          <strong>{matchResult.matches.length} Potential Pathways</strong> Surfaced
        </div>
      </div>

      {/* Interactive Levers Selector */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Levers: Location & Work */}
        <div className="space-y-4 bg-brand-ivory p-4 rounded-lg border border-stone-300 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5 font-mono">
            <MapPin className="w-3.5 h-3.5 text-brand-oxblood" />
            <span>1. Location & Pilot Region</span>
          </h3>

          <div>
            <label className="block text-[11px] text-stone-600 mb-1 font-mono">State:</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-brand-paper border border-stone-300 rounded px-2.5 py-1.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
            >
              <option value="TX">Texas (Deep Research Pilot)</option>
              <option value="US">Nationwide / Other State</option>
            </select>
          </div>

          {selectedState === "TX" && (
            <div>
              <label className="block text-[11px] text-stone-600 mb-1 font-mono">Texas County:</label>
              <select
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
                className="w-full bg-brand-paper border border-stone-300 rounded px-2.5 py-1.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
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
            <label className="block text-[11px] text-stone-600 mb-1 flex items-center gap-1 font-mono">
              <Briefcase className="w-3 h-3 text-brand-oxblood" />
              <span>Work in Past 12 Mo:</span>
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-brand-paper border border-stone-300 rounded px-2.5 py-1.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
            >
              {INDUSTRY_OPTIONS.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2 border-t border-brand-sand flex items-center gap-2">
            <input
              type="checkbox"
              id="hasAnimalCheck"
              checked={hasAnimal}
              onChange={(e) => setHasAnimal(e.target.checked)}
              className="rounded bg-brand-paper border-stone-300 text-brand-oxblood focus:ring-0"
            />
            <label htmlFor="hasAnimalCheck" className="text-xs text-stone-700 flex items-center gap-1 cursor-pointer font-sans">
              <Dog className="w-3.5 h-3.5 text-amber-700" />
              <span>I have a dog or pet needing safe care</span>
            </label>
          </div>
        </div>

        {/* Levers: Select Barriers */}
        <div className="lg:col-span-2 bg-brand-ivory p-4 rounded-lg border border-stone-300 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-3 flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-brand-oxblood" />
            <span>2. What specific barriers are keeping you stuck?</span>
          </h3>

          <div className="flex flex-wrap gap-1.5 max-h-52 overflow-y-auto pr-1">
            {BARRIER_CATEGORIES.map((cat) => {
              const isSelected = selectedBarriers.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => toggleBarrier(cat.id)}
                  className={`text-xs px-2.5 py-1 rounded border transition-all text-left flex items-center gap-1.5 font-mono ${
                    isSelected
                      ? "bg-brand-oxblood text-white border-red-900 font-bold shadow-sm"
                      : "bg-brand-paper text-stone-700 border-stone-300 hover:border-stone-400 hover:text-brand-charcoal"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stacked Results Architecture */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-brand-sand pb-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal font-mono">
            Assembled Combinable Resource Vectors:
          </h3>
          <span className="text-[11px] text-stone-500 italic">
            Each resource solves a distinct piece of the barrier matrix
          </span>
        </div>

        {matchResult.matches.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {matchResult.matches.map((m) => (
              <ResourceCard
                key={m.resource.id}
                resource={m.resource}
                matchReason={m.matchReason}
                matchedTags={m.matchedTags}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-brand-ivory rounded border border-stone-300 text-stone-600 text-xs font-mono">
            No exact preset match for this combination. Try selecting additional barrier levers or submit an investigation request.
          </div>
        )}
      </div>
    </div>
  );
}
