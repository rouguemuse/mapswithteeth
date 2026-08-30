"use client";

import React, { useState } from "react";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { PUBLIC_RESOURCES } from "@/data/resources";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { Search, X, Info } from "lucide-react";

function FindHelpContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBarrier, setSelectedBarrier] = useState<string>("ALL");
  const [selectedScope, setSelectedScope] = useState<string>("ALL");
  const [filterNoPolice, setFilterNoPolice] = useState(false);
  const [filterNoShelter, setFilterNoShelter] = useState(false);

  const filteredResources = PUBLIC_RESOURCES.filter((r) => {
    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = r.name.toLowerCase().includes(q);
      const matchOrg = r.organization.toLowerCase().includes(q);
      const matchProvides = (r.whatItCanHelpWith || r.whatItActuallyProvides || "").toLowerCase().includes(q);
      const matchCounty = r.county?.toLowerCase().includes(q);
      const matchStatute = r.statuteCitation?.toLowerCase().includes(q);
      if (!matchName && !matchOrg && !matchProvides && !matchCounty && !matchStatute) return false;
    }

    // Barrier match
    if (selectedBarrier !== "ALL" && !r.barrierCategories.includes(selectedBarrier)) {
      return false;
    }

    // Scope match
    if (selectedScope === "TEXAS" && r.state !== "TX") return false;
    if (selectedScope === "NATIONWIDE" && r.scope !== "NATIONWIDE") return false;

    // Friction filters
    if (filterNoPolice && r.policeReportRequired) return false;
    if (filterNoShelter && r.shelterConnectionRequired) return false;

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-brand-sand pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-oxblood font-bold block mb-1">
          Public Resource Library · Central Texas Pilot
        </span>
        <h1 className="text-3xl font-serif font-bold text-brand-charcoal">
          Resource Intelligence & Navigation
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed font-sans">
          Resources are reviewed individually and display their current verification status and review date. Filter by barrier category, geographic jurisdiction, or specific access friction to locate actionable routes through crisis.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="bg-brand-paper border border-brand-sand rounded-xl p-5 space-y-4 shadow-sm">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by keyword, city, bill type, deliverable, or statute (e.g., 'gas', 'lease', 'deposit', 'Travis', '§ 92.016')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-ivory border border-stone-300 rounded-lg pl-9 pr-4 py-2 text-xs text-brand-charcoal placeholder-stone-500 focus:border-brand-oxblood focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-stone-400 hover:text-brand-charcoal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Selects & Checkboxes */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="block text-[11px] text-stone-600 mb-1 font-mono uppercase font-bold">
              Filter by Barrier:
            </label>
            <select
              value={selectedBarrier}
              onChange={(e) => setSelectedBarrier(e.target.value)}
              className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2 text-xs text-brand-charcoal focus:border-brand-oxblood"
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
            <label className="block text-[11px] text-stone-600 mb-1 font-mono uppercase font-bold">
              Geographic Scope:
            </label>
            <select
              value={selectedScope}
              onChange={(e) => setSelectedScope(e.target.value)}
              className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2 text-xs text-brand-charcoal focus:border-brand-oxblood"
            >
              <option value="ALL">All Layers (Texas + Nationwide)</option>
              <option value="TEXAS">Texas Pilot & Statewide Remedies</option>
              <option value="NATIONWIDE">Nationwide & Industry Programs</option>
            </select>
          </div>

          <div className="flex flex-col justify-end gap-2 pt-1 font-sans">
            <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
              <input
                type="checkbox"
                checked={filterNoPolice}
                onChange={(e) => setFilterNoPolice(e.target.checked)}
                className="rounded bg-brand-ivory border-stone-300 text-brand-oxblood focus:ring-0"
              />
              <span>No Police Report Required</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
              <input
                type="checkbox"
                checked={filterNoShelter}
                onChange={(e) => setFilterNoShelter(e.target.checked)}
                className="rounded bg-brand-ivory border-stone-300 text-brand-oxblood focus:ring-0"
              />
              <span>No DV Shelter Stay Required</span>
            </label>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-stone-600 uppercase tracking-wider font-bold">
          Showing <strong>{filteredResources.length}</strong> public resources in demonstration library
        </span>
      </div>

      {/* Resource Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="bg-brand-paper border border-brand-sand rounded-xl p-8 text-center space-y-3">
          <Info className="w-6 h-6 text-stone-400 mx-auto" />
          <p className="text-sm font-semibold text-brand-charcoal font-serif">No resources matched your current filter criteria.</p>
          <p className="text-xs text-stone-600 font-sans">Try resetting the barrier or geography filter, or clearing search keywords.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedBarrier("ALL");
              setSelectedScope("ALL");
              setFilterNoPolice(false);
              setFilterNoShelter(false);
            }}
            className="px-4 py-2 bg-brand-ivory border border-stone-300 text-xs font-mono text-brand-charcoal rounded hover:bg-stone-200"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function FindHelpPage() {
  return (
    <React.Suspense fallback={<div className="p-8 text-center text-xs text-stone-500 font-mono">Loading resource directory...</div>}>
      <FindHelpContent />
    </React.Suspense>
  );
}
