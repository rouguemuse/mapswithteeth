"use client";

import React, { useState } from "react";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { INDUSTRY_OPTIONS } from "@/data/industries";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { matchIntakeToResources } from "@/data/matcher";
import { ResourceCard } from "./ResourceCard";
import { Layers, Sparkles, AlertCircle, CheckCircle2, ArrowRight, ShieldAlert, Dog, Briefcase, MapPin } from "lucide-react";

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
  const [noShelterDesired, setNoShelterDesired] = useState<boolean>(true);

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
    <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-6 shadow-xl my-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-brand-ruby mb-1">
            <Layers className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              Combinable Barrier Solver
            </span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">
            Your Resource Stack: Ways Through
          </h2>
          <p className="text-xs text-stone-400 mt-1 max-w-2xl">
            Single agencies rarely solve an entire crisis. Select your simultaneous barriers to assemble an integrated, multi-vector pathway.
          </p>
        </div>

        <div className="px-3 py-1.5 bg-stone-900 border border-stone-700 rounded-lg text-xs font-mono text-stone-300">
          <strong>{matchResult.matches.length} Potential Pathways</strong> Matched
        </div>
      </div>

      {/* Interactive Levers Selector */}
      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        {/* Levers: Location & Work */}
        <div className="space-y-4 bg-stone-900/60 p-4 rounded-lg border border-stone-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-ruby" />
            <span>1. Location & Pilot Region</span>
          </h3>

          <div>
            <label className="block text-[11px] text-stone-400 mb-1">State:</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-white"
            >
              <option value="TX">Texas (Deep Research Pilot)</option>
              <option value="US">Nationwide / Other State</option>
            </select>
          </div>

          {selectedState === "TX" && (
            <div>
              <label className="block text-[11px] text-stone-400 mb-1">Texas County:</label>
              <select
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
                className="w-full bg-stone-800 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-white"
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
            <label className="block text-[11px] text-stone-400 mb-1 flex items-center gap-1">
              <Briefcase className="w-3 h-3 text-brand-ruby" />
              <span>Current or Recent Work (Past 12 Mo):</span>
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-white"
            >
              {INDUSTRY_OPTIONS.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2 border-t border-stone-800 flex items-center gap-2">
            <input
              type="checkbox"
              id="hasAnimalCheck"
              checked={hasAnimal}
              onChange={(e) => setHasAnimal(e.target.checked)}
              className="rounded bg-stone-800 border-stone-700 text-brand-ruby focus:ring-0"
            />
            <label htmlFor="hasAnimalCheck" className="text-xs text-stone-300 flex items-center gap-1 cursor-pointer">
              <Dog className="w-3.5 h-3.5 text-amber-400" />
              <span>I have a dog or pet needing safe care</span>
            </label>
          </div>
        </div>

        {/* Levers: Select Barriers */}
        <div className="lg:col-span-2 bg-stone-900/60 p-4 rounded-lg border border-stone-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-ruby" />
            <span>2. What specific barriers are keeping you stuck?</span>
          </h3>

          <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
            {BARRIER_CATEGORIES.map((cat) => {
              const isSelected = selectedBarriers.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => toggleBarrier(cat.id)}
                  className={`text-xs px-2.5 py-1 rounded border transition-all text-left flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-brand-ruby text-white border-red-700 font-semibold shadow-sm"
                      : "bg-stone-800/80 text-stone-300 border-stone-700 hover:border-stone-600 hover:text-white"
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
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-200 font-mono">
            Assembled Combinable Resource Vectors:
          </h3>
          <span className="text-[11px] text-stone-400 italic">
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
          <div className="p-8 text-center bg-stone-900/40 rounded border border-stone-800 text-stone-400 text-xs">
            No exact preset match for this combination. Try selecting additional barrier levers or submit a custom investigation request.
          </div>
        )}
      </div>
    </div>
  );
}
