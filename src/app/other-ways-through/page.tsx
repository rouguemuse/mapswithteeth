"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { OTHER_WAYS_THROUGH_RESOURCES } from "@/data/otherWaysThrough";
import { PUBLIC_RESOURCES } from "@/data/resources";
import { DenseResourceCard } from "@/components/other-ways-through/DenseResourceCard";
import { FieldNotesRail } from "@/components/other-ways-through/FieldNotesRail";
import { Resource } from "@/types/resource";
import {
  Search,
  X,
  Compass,
  SlidersHorizontal,
  Bookmark,
  Info,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  HelpCircle,
  Sparkles,
  Layers,
  FileCheck,
  Moon,
  Clock,
  ShieldAlert,
  PawPrint,
  MapPin,
  Smartphone,
  Car,
  IdCard
} from "lucide-react";

export default function OtherWaysThroughPage() {
  const [searchQuery, setSearchQuery] = useState<string>("Transportation loss + housing instability + safety concerns");
  const [selectedBarriers, setSelectedBarriers] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("relevant");
  const [savedDockets, setSavedDockets] = useState<string[]>([]);

  // Combined verified resource catalog for Other Ways Through
  const catalog: Resource[] = useMemo(() => {
    const map = new Map<string, Resource>();
    OTHER_WAYS_THROUGH_RESOURCES.forEach((r) => map.set(r.id, r));
    PUBLIC_RESOURCES.forEach((r) => {
      if (!map.has(r.id)) map.set(r.id, r);
    });
    return Array.from(map.values());
  }, []);

  const barrierOptions = [
    { id: "no-id", label: "No ID / Docs", icon: <IdCard className="w-3.5 h-3.5" /> },
    { id: "no-car", label: "No Car / Transit Lost", icon: <Car className="w-3.5 h-3.5" /> },
    { id: "after-hours", label: "After-Hours", icon: <Moon className="w-3.5 h-3.5" /> },
    { id: "waitlist-issue", label: "Waitlist Issue", icon: <Clock className="w-3.5 h-3.5" /> },
    { id: "coercive-control", label: "Coercive Control", icon: <ShieldAlert className="w-3.5 h-3.5" /> },
    { id: "pet-barrier", label: "Pet Barrier", icon: <PawPrint className="w-3.5 h-3.5" /> },
    { id: "county-mismatch", label: "County Mismatch", icon: <MapPin className="w-3.5 h-3.5" /> },
    { id: "phone-unsafe", label: "Phone Unsafe / Monitored", icon: <Smartphone className="w-3.5 h-3.5" /> },
  ];

  const toggleBarrier = (id: string) => {
    setSelectedBarriers((prev) => {
      const next = prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id];
      // Update natural search query string to reflect active levers
      if (next.length === 0) {
        setSearchQuery("");
      } else {
        const labels = next.map((bId) => barrierOptions.find((o) => o.id === bId)?.label || bId);
        setSearchQuery(labels.join(" + "));
      }
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedBarriers([]);
    setSearchQuery("");
  };

  const toggleSaveDocket = (id: string) => {
    setSavedDockets((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  // Filter and sort catalog
  const filteredResources = useMemo(() => {
    let list = catalog;

    // Filter by situational barrier pills
    if (selectedBarriers.length > 0) {
      list = list.filter((r) => {
        const tags = (r.matchTags || []).map((t) => t.toLowerCase());
        const cats = (r.barrierCategories || []).map((c) => c.toLowerCase());
        const frictions = (r.accessFrictions || []).map((f) => f.toLowerCase());
        const id = r.id.toLowerCase();

        return selectedBarriers.some((b) => {
          if (b === "no-id") return frictions.includes("no_id") || tags.includes("id_flexible") || !frictions.includes("identity_documents");
          if (b === "no-car") return tags.includes("gas") || tags.includes("bus") || tags.includes("transit") || tags.includes("rideshare") || tags.includes("transport") || cats.includes("transportation");
          if (b === "pet-barrier") return r.petSpecific || tags.includes("pets") || tags.includes("pet") || tags.includes("dog") || tags.includes("cat") || cats.includes("pets");
          if (b === "phone-unsafe") return id.includes("connection") || tags.includes("phone") || tags.includes("tech_safety") || cats.includes("phone-tech-safety");
          if (b === "county-mismatch") return r.scope === "NATIONWIDE" || r.scope === "TEXAS_STATEWIDE";
          if (b === "coercive-control") return r.isStatutoryRight || tags.includes("statutory_right") || id.includes("prop-code") || id.includes("connection");
          if (b === "waitlist-issue") return !frictions.includes("waitlist_possible") || r.isStatutoryRight;
          if (b === "after-hours") return tags.includes("same_day") || frictions.includes("same_day_possible");
          return true;
        });
      });
    }

    // Filter by search query if user typed custom keywords
    if (searchQuery.trim() && selectedBarriers.length === 0) {
      const q = searchQuery.toLowerCase();
      list = list.filter((r) => {
        const text = `${r.name} ${r.organization} ${r.whatItCanHelpWith} ${r.whatItActuallyProvides} ${r.eligibility} ${r.statuteCitation || ""}`.toLowerCase();
        return text.includes(q);
      });
    }

    return list;
  }, [catalog, selectedBarriers, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 select-none font-sans">
      
      {/* 1. Header & Breadcrumb Tracker */}
      <div className="border-b border-[#D9D1C4] pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-4 h-4" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              LATERAL INTELLIGENCE ENGINE · CENTRAL TEXAS & NATIONAL PATHWAYS
            </span>
          </div>
          <span className="coord-tick text-[10px]">
            [ACTIVE DOCKETS: {catalog.length} VERIFIED ROUTES]
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Other Ways Through
        </h1>
        <p className="text-xs sm:text-[13px] text-stone-700 mt-1 max-w-4xl leading-relaxed font-sans">
          <strong>Find the ways others miss.</strong> When front-door programs fail due to full shelters, waitlists, police report requirements, or county boundaries, lateral intelligence surfaces verified exceptions, statutory rights, and industry hardship relief.
        </p>
      </div>

      {/* 2. Search by situation or barriers */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 space-y-4 shadow-sm bg-grid-atlas">
        <div>
          <div className="flex items-center justify-between mb-2 font-mono text-xs">
            <span className="font-bold text-[#1C1D1D] uppercase tracking-wider flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#971F26]" />
              Search by situation or barriers
            </span>
            <span className="text-[10px] text-stone-600">Enter keywords, expenses, or obstacle combinations</span>
          </div>

          {/* Composite Search Bar */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Transportation loss + housing instability + safety concerns..."
                className="w-full bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-md pl-10 pr-10 py-2 text-xs sm:text-sm text-[#1C1D1D] font-mono font-medium placeholder-stone-500 focus:outline-none focus:border-[#971F26]"
              />
              {searchQuery && (
                <button
                  onClick={clearFilters}
                  className="absolute right-3 top-2.5 text-stone-500 hover:text-[#1C1D1D]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => alert("Search saved to your local session docket.")}
              className="px-3.5 py-2 bg-[#F5F1E8] hover:bg-stone-200 border-2 border-[#1C1D1D] rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#971F26]" />
              <span className="hidden sm:inline">Save search</span>
            </button>
          </div>
        </div>

        {/* Filter by barriers */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-[11px]">
            <span className="text-stone-700 font-semibold">
              Filter by barriers <span className="text-stone-500">(show me routes that work even when these are true):</span>
            </span>
            {selectedBarriers.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-[#971F26] hover:underline font-bold"
              >
                Clear all ({selectedBarriers.length})
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {barrierOptions.map((b) => {
              const active = selectedBarriers.includes(b.id);
              return (
                <button
                  key={b.id}
                  onClick={() => toggleBarrier(b.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all flex items-center gap-1.5 border ${
                    active
                      ? "bg-[#1C1D1D] text-white border-[#1C1D1D] shadow-xs"
                      : "bg-[#F5F1E8] text-[#1C1D1D] border-[#1C1D1D] hover:bg-stone-200"
                  }`}
                >
                  {b.icon}
                  <span>{b.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Notice Banner */}
      <div className="p-3.5 bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5 text-stone-900">
          <div className="w-6 h-6 rounded-full bg-[#971F26] text-white flex items-center justify-center shrink-0">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <p className="text-[11.5px] leading-snug">
            <strong>Showing exceptions, workarounds, and overlooked pathways</strong>—routes standard directories often miss. Not every fit is perfect. Read access notes and verification.
          </p>
        </div>

        <Link
          href="/how-we-research"
          className="text-xs font-mono font-bold text-[#971F26] hover:underline shrink-0 flex items-center gap-1 self-end sm:self-auto"
        >
          <span>How we verify</span>
          <Info className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4. Main 2-Column Grid (Cards Left, Rail Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left / Center Results Column (8 of 12 cols on desktop) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Results Toolbar */}
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-xs">
            <span className="font-bold text-[#1C1D1D]">
              {filteredResources.length} verified {filteredResources.length === 1 ? "pathway" : "pathways"} located
            </span>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 text-stone-600 text-[11px]">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#F5F1E8] border border-[#1C1D1D] rounded px-2 py-0.5 text-xs text-[#1C1D1D] font-bold focus:outline-none"
                >
                  <option value="relevant">Most relevant</option>
                  <option value="verified">Recently verified</option>
                  <option value="statutory">Statutory rights first</option>
                </select>
              </label>
            </div>
          </div>

          {/* Scannable Dense Cards Stack */}
          {filteredResources.length > 0 ? (
            <div className="space-y-3.5">
              {filteredResources.map((res) => (
                <DenseResourceCard
                  key={res.id}
                  resource={res}
                  isSaved={savedDockets.includes(res.id)}
                  onToggleSave={() => toggleSaveDocket(res.id)}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 bg-[#EEE8DD] border-2 border-dashed border-[#1C1D1D] rounded-xl text-center space-y-3">
              <p className="text-sm font-serif font-bold text-[#1C1D1D]">
                No verified pathways match all selected barrier filters simultaneously.
              </p>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                Try clearing one or more barrier pills to widen the lateral candidate pool.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-[#1C1D1D] text-white rounded text-xs font-mono font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Ask Us to Look Callout at Bottom of Results */}
          <div className="mt-8 p-6 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm bg-grid-atlas">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#971F26] font-mono text-xs font-bold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Need a tailored investigation docket?</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                Ask Us to Look
              </h3>
              <p className="text-xs text-stone-700 max-w-xl">
                Run your specific work history, child enrollment, pets, vehicle status, and county through our progressive qualification engine.
              </p>
            </div>

            <Link
              href="/ask-us-to-look"
              className="px-4 py-2.5 bg-[#971F26] text-white hover:bg-red-800 rounded text-xs font-mono font-bold uppercase tracking-wider shrink-0 shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Launch Intake Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Rail Column (4 of 12 cols on desktop) */}
        <div className="lg:col-span-4 space-y-6">
          <FieldNotesRail />
        </div>

      </div>
    </div>
  );
}
