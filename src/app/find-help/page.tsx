"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { PUBLIC_RESOURCES } from "@/data/resources";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceSuggestionModal } from "@/components/resources/ResourceSuggestionModal";
import { Search, X, Info, Compass, SlidersHorizontal, ShieldAlert, Check, PlusCircle, ArrowRight } from "lucide-react";

function FindHelpContent() {
  const [suggestionModalOpen, setSuggestionModalOpen] = useState(false);
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              BARRIER-FIRST EXPLORER · CENTRAL TEXAS PILOT & NATIONWIDE
            </span>
          </div>
          <span className="coord-tick">
            [CATALOG: 30 VERIFIED PATHWAYS]
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
              Resource Intelligence & Navigation
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed font-sans">
              Resources are reviewed individually and display their current verification status and review date. Filter by barrier category, geographic jurisdiction, or specific access friction to locate actionable routes through crisis.
            </p>
          </div>
          <button
            onClick={() => setSuggestionModalOpen(true)}
            className="px-3.5 py-2 bg-[#EEE8DD] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded text-xs font-mono font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5 shadow-2xs transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#971F26]" />
            <span>Suggest a Resource</span>
          </button>
        </div>
      </div>

      {/* Filter Controls (Atlas Ledger Style) */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-4 shadow-sm bg-grid-atlas">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-600 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search by keyword, city, deliverable, or statute (e.g., 'gas', 'lease', 'deposit', 'Travis', '§ 92.016')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-md pl-10 pr-10 py-2.5 text-xs sm:text-sm text-[#1C1D1D] placeholder-stone-600 focus:border-[#971F26] focus:outline-none font-sans font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-3 text-stone-500 hover:text-[#1C1D1D]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Selects & Checkboxes */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="block text-[11px] text-[#1C1D1D] mb-1 font-mono uppercase font-bold">
              Filter by Barrier:
            </label>
            <select
              value={selectedBarrier}
              onChange={(e) => setSelectedBarrier(e.target.value)}
              className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] focus:border-[#971F26] font-mono"
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
            <label className="block text-[11px] text-[#1C1D1D] mb-1 font-mono uppercase font-bold">
              Geographic Scope:
            </label>
            <select
              value={selectedScope}
              onChange={(e) => setSelectedScope(e.target.value)}
              className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] focus:border-[#971F26] font-mono"
            >
              <option value="ALL">All Layers (Texas + Nationwide)</option>
              <option value="TEXAS">Texas Pilot & Statewide Remedies</option>
              <option value="NATIONWIDE">Nationwide & Industry Programs</option>
            </select>
          </div>

          <div className="flex flex-col justify-end gap-2 pt-1 font-mono text-xs">
            <label className="flex items-center gap-2 cursor-pointer font-bold text-[#1C1D1D]">
              <input
                type="checkbox"
                checked={filterNoPolice}
                onChange={(e) => setFilterNoPolice(e.target.checked)}
                className="rounded border-[#1C1D1D] text-[#971F26] focus:ring-[#971F26] w-4 h-4"
              />
              <span>No Police Report Required</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer font-bold text-[#1C1D1D]">
              <input
                type="checkbox"
                checked={filterNoShelter}
                onChange={(e) => setFilterNoShelter(e.target.checked)}
                className="rounded border-[#1C1D1D] text-[#971F26] focus:ring-[#971F26] w-4 h-4"
              />
              <span>No Shelter Stay Required</span>
            </label>
          </div>
        </div>
      </div>

      {/* Result Count and Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
          <span className="text-xs font-mono text-stone-700 font-bold uppercase tracking-wider">
            Showing {filteredResources.length} Filtered Pathways
          </span>
          {(searchQuery || selectedBarrier !== "ALL" || selectedScope !== "ALL" || filterNoPolice || filterNoShelter) && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedBarrier("ALL");
                setSelectedScope("ALL");
                setFilterNoPolice(false);
                setFilterNoShelter(false);
              }}
              className="text-xs text-[#971F26] hover:underline font-mono font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-8 text-center space-y-4 shadow-sm">
            <Info className="w-8 h-8 text-[#971F26] mx-auto" />
            <div className="space-y-1">
              <p className="text-lg font-bold text-[#1C1D1D] font-serif">
                No pathway currently satisfies every selected condition simultaneously.
              </p>
              <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto font-sans leading-relaxed">
                This does not mean no help exists. Try broadening geography or clearing specific friction filters.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-2 font-mono text-xs">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBarrier("ALL");
                  setSelectedScope("ALL");
                  setFilterNoPolice(false);
                  setFilterNoShelter(false);
                }}
                className="px-4 py-2 bg-[#1C1D1D] text-white rounded font-bold uppercase tracking-wider hover:bg-stone-800"
              >
                Reset All Filters
              </button>
              <Link
                href="/ask-us-to-look"
                className="px-4 py-2 bg-[#971F26] text-white rounded font-bold uppercase tracking-wider hover:bg-red-900 flex items-center gap-1.5"
              >
                <span>Launch Ask Us to Look</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <ResourceSuggestionModal
        isOpen={suggestionModalOpen}
        onClose={() => setSuggestionModalOpen(false)}
      />
    </div>
  );
}

export default function FindHelpPage() {
  return (
    <React.Suspense fallback={<div className="p-10 font-mono text-xs">Loading resource library...</div>}>
      <FindHelpContent />
    </React.Suspense>
  );
}
