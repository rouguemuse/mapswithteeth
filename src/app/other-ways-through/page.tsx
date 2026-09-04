"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { OTHER_WAYS_THROUGH_RESOURCES } from "@/data/resources/national/nationalResources";
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
  IdCard,
  RotateCcw,
  Sparkle
} from "lucide-react";

export default function OtherWaysThroughPage() {
  // Scenario presets for intuitive demo navigation
  const scenarioPresets = [
    {
      id: "demo-mixed",
      label: "Transportation loss + housing instability + safety concerns",
      barriers: ["no-car", "coercive-control"],
    },
    {
      id: "hospitality-rent",
      label: "Food & beverage worker needing rental relief",
      barriers: [],
      query: "food beverage restaurant culinary kitchen",
    },
    {
      id: "phone-separation",
      label: "Coercive phone tracking / shared cell plan",
      barriers: ["phone-unsafe"],
    },
    {
      id: "pet-housing",
      label: "Fleeing with companion animal / pet barrier",
      barriers: ["pet-barrier"],
    },
    {
      id: "school-transport",
      label: "School transport & emergency assistance",
      barriers: [],
      query: "mckinney school education bus transit",
    },
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>("demo-mixed");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBarriers, setSelectedBarriers] = useState<string[]>(["no-car", "coercive-control"]);
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

  const selectScenario = (preset: typeof scenarioPresets[0]) => {
    setActiveScenarioId(preset.id);
    setSelectedBarriers(preset.barriers);
    setSearchQuery(preset.query || "");
  };

  const toggleBarrier = (id: string) => {
    setActiveScenarioId("");
    setSelectedBarriers((prev) => {
      return prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id];
    });
  };

  const clearFilters = () => {
    setActiveScenarioId("");
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
          if (b === "no-car") return tags.includes("gas") || tags.includes("bus") || tags.includes("transit") || tags.includes("rideshare") || tags.includes("transport") || cats.includes("transportation") || id.includes("mckinney");
          if (b === "pet-barrier") return r.petSpecific || tags.includes("pets") || tags.includes("pet") || tags.includes("dog") || tags.includes("cat") || cats.includes("pets");
          if (b === "phone-unsafe") return id.includes("connection") || tags.includes("phone") || tags.includes("tech_safety") || cats.includes("phone-tech-safety");
          if (b === "county-mismatch") return r.scope === "NATIONWIDE" || r.scope === "TEXAS_STATEWIDE";
          if (b === "coercive-control") return r.isStatutoryRight || tags.includes("statutory_right") || id.includes("prop-code") || id.includes("connection") || id.includes("puc");
          if (b === "waitlist-issue") return !frictions.includes("waitlist_possible") || r.isStatutoryRight;
          if (b === "after-hours") return tags.includes("same_day") || frictions.includes("same_day_possible");
          return true;
        });
      });
    }

    // Filter by search query if user typed custom keywords
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((r) => {
        const text = `${r.name} ${r.organization} ${r.whatItCanHelpWith} ${r.whatItActuallyProvides} ${r.eligibility} ${r.statuteCitation || ""} ${(r.matchTags || []).join(" ")}`.toLowerCase();
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

      {/* 2. Interactive Curated Scenario Bar */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-4 sm:p-5 space-y-3.5 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Example Search Scenarios (Click to test):</span>
          </span>
          <span className="text-[11px] font-mono text-stone-600">
            {filteredResources.length} verified routes matching
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {scenarioPresets.map((p) => {
            const active = activeScenarioId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => selectScenario(p)}
                className={`px-3 py-1.5 rounded-md text-xs font-sans font-semibold transition-all border text-left ${
                  active
                    ? "bg-[#1C1D1D] text-white border-[#1C1D1D] shadow-xs"
                    : "bg-[#F5F1E8] text-[#1C1D1D] border-[#D9D1C4] hover:border-[#1C1D1D]"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Barrier Filter Chips */}
        <div className="pt-2 border-t border-[#D9D1C4] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-stone-700 font-semibold">Filter by specific situational obstacles:</span>
            {(selectedBarriers.length > 0 || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-[#971F26] hover:underline font-bold flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset all filters</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {barrierOptions.map((b) => {
              const active = selectedBarriers.includes(b.id);
              return (
                <button
                  key={b.id}
                  onClick={() => toggleBarrier(b.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all flex items-center gap-1.5 border ${
                    active
                      ? "bg-[#971F26] text-white border-[#971F26] shadow-xs"
                      : "bg-[#F5F1E8] text-stone-800 border-[#D9D1C4] hover:border-[#1C1D1D]"
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

      {/* 3. Main 2-Column Grid (Cards Left, Rail Right) */}
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
            <div className="space-y-3">
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
            /* Improved Zero Results State */
            <div className="p-8 bg-[#EEE8DD] border-2 border-dashed border-[#1C1D1D] rounded-xl text-center space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#FDF2F2] border border-[#971F26] text-[#971F26] flex items-center justify-center mx-auto">
                <SlidersHorizontal className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-serif font-bold text-[#1C1D1D]">
                  No pathway currently satisfies every selected condition simultaneously.
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto font-sans leading-relaxed">
                  This does not mean no help exists. It means the specific combination of obstacles requires widening your search scope or exploring individualized lateral exceptions.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap justify-center gap-3 font-mono text-xs">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-[#1C1D1D] text-white rounded font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors"
                >
                  Clear Barrier Filters
                </button>
                <Link
                  href="/ask-us-to-look"
                  className="px-4 py-2 bg-[#971F26] text-white rounded font-bold uppercase tracking-wider hover:bg-red-900 transition-colors flex items-center gap-1.5"
                >
                  <span>Launch Ask Us to Look</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Bottom Callout: Ask Us to Look */}
          <div className="mt-8 p-6 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm bg-grid-atlas">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#971F26] font-mono text-xs font-bold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Need a tailored investigation docket?</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                Ask Us to Look
              </h3>
              <p className="text-xs text-stone-700 max-w-xl font-sans">
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
