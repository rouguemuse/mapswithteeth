"use client";

import React, { useState } from "react";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { ALL_RESOURCES } from "@/data/resources";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { Search, Filter, Layers, CheckCircle2, X } from "lucide-react";

function FindHelpContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBarrier, setSelectedBarrier] = useState<string>("ALL");
  const [selectedScope, setSelectedScope] = useState<string>("ALL");
  const [filterNoPolice, setFilterNoPolice] = useState(false);
  const [filterNoShelter, setFilterNoShelter] = useState(false);

  const filteredResources = ALL_RESOURCES.filter((r) => {
    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = r.name.toLowerCase().includes(q);
      const matchOrg = r.organization.toLowerCase().includes(q);
      const matchProvides = r.whatItActuallyProvides.toLowerCase().includes(q);
      const matchCounty = r.county?.toLowerCase().includes(q);
      if (!matchName && !matchOrg && !matchProvides && !matchCounty) return false;
    }

    // Barrier match
    if (selectedBarrier !== "ALL" && !r.barrierCategories.includes(selectedBarrier)) {
      return false;
    }

    // Scope match
    if (selectedScope === "TEXAS" && r.state !== "TX") return false;
    if (selectedScope === "NATIONWIDE" && r.scope !== "NATIONWIDE") return false;

    // Friction filters
    if (filterNoPolice && !r.accessFrictions.includes("NO_POLICE_REPORT_REQUIRED")) return false;
    if (filterNoShelter && !r.accessFrictions.includes("NO_SHELTER_STAY_REQUIRED")) return false;

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-stone-800 pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-ruby font-bold block mb-1">
          Directory & Barrier Explorer
        </span>
        <h1 className="text-3xl font-serif font-bold text-white">
          Find a Way Through
        </h1>
        <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-3xl leading-relaxed">
          Filter through our verified Texas state/county programs and nationwide obscure assistance libraries by the specific barrier you need solved.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-5 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by keyword, city, bill type, or deliverable (e.g., 'gas', 'electric deposit', 'boarding', 'Travis')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-900 border border-stone-700 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="block text-[11px] text-stone-400 mb-1 font-mono uppercase">
              Filter by Barrier:
            </label>
            <select
              value={selectedBarrier}
              onChange={(e) => setSelectedBarrier(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2 text-xs text-white"
            >
              <option value="ALL">All Barriers ({BARRIER_CATEGORIES.length})</option>
              {BARRIER_CATEGORIES.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] text-stone-400 mb-1 font-mono uppercase">
              Geographic Layer:
            </label>
            <select
              value={selectedScope}
              onChange={(e) => setSelectedScope(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2 text-xs text-white"
            >
              <option value="ALL">All Layers (Texas + Nationwide)</option>
              <option value="TEXAS">Texas Deep Dive Programs (State & Counties)</option>
              <option value="NATIONWIDE">Nationwide & Industry Programs</option>
            </select>
          </div>

          <div className="flex flex-col justify-end gap-2 pt-1">
            <label className="flex items-center gap-2 text-xs text-stone-300 cursor-pointer">
              <input
                type="checkbox"
                checked={filterNoPolice}
                onChange={(e) => setFilterNoPolice(e.target.checked)}
                className="rounded bg-stone-900 border-stone-700 text-brand-ruby"
              />
              <span>No Police Report Required</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-stone-300 cursor-pointer">
              <input
                type="checkbox"
                checked={filterNoShelter}
                onChange={(e) => setFilterNoShelter(e.target.checked)}
                className="rounded bg-stone-900 border-stone-700 text-brand-ruby"
              />
              <span>No Shelter Stay Required</span>
            </label>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
          Showing <strong>{filteredResources.length}</strong> verified resources
        </span>
      </div>

      {/* Resource Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default function FindHelpPage() {
  return (
    <React.Suspense fallback={<div className="p-8 text-center text-xs text-stone-400">Loading directory...</div>}>
      <FindHelpContent />
    </React.Suspense>
  );
}
