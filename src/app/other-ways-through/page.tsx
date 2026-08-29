"use client";

import React, { useState } from "react";
import { OTHER_WAYS_THROUGH_RESOURCES } from "@/data/otherWaysThrough";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { Briefcase } from "lucide-react";

export default function OtherWaysThroughPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const filtered = OTHER_WAYS_THROUGH_RESOURCES.filter((r) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "INDUSTRY") return r.industrySpecific && r.industrySpecific.length > 0;
    if (selectedFilter === "PETS") return r.petSpecific;
    if (selectedFilter === "TECH") return r.barrierCategories.includes("phone-controlled") || r.barrierCategories.includes("device-car-tracking");
    if (selectedFilter === "TRANSPORT") return r.matchTags.includes("TRANSPORTATION") || r.matchTags.includes("VEHICLE");
    if (selectedFilter === "TAX_IDENTITY") return r.barrierCategories.includes("taxes-identity-docs");
    if (selectedFilter === "CASH") return r.paymentMethod === "SURVIVOR_DIRECT" || r.paymentMethod === "VENDOR_DIRECT";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Editorial Header */}
      <div className="border-b border-brand-sand pb-6">
        <div className="flex items-center gap-2 text-brand-oxblood mb-2">
          <Briefcase className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            LAYER 2 • LOCATION-INDEPENDENT RESOURCE LIBRARY
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
          Other Ways Through
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed font-sans">
          Resources you wouldn&apos;t think to search for in a traditional domestic violence directory. This library contains verified emergency hardship funds whose eligibility depends on your occupation, family, pets, vehicles, or federal telecom regulations—regardless of geographic location.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-brand-sand pb-4">
        {[
          ["ALL", "All Obscure Funds"],
          ["INDUSTRY", "Food / Arts / Hospitality Hardship"],
          ["PETS", "Pet Safe Boarding & Foster"],
          ["TECH", "Safe Connections Act & Telecom"],
          ["TRANSPORT", "Vehicles & Emergency Travel"],
          ["TAX_IDENTITY", "IRS IP PIN & Innocent Spouse"],
          ["CASH", "Direct & Vendor Micro-Grants"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setSelectedFilter(id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedFilter === id
                ? "bg-brand-oxblood text-white font-bold shadow-sm"
                : "bg-brand-paper text-stone-700 border border-stone-300 hover:border-stone-400 hover:text-brand-charcoal"
            }`}
          >
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Resource Count & Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-stone-500">
            Showing {filtered.length} Nationwide & Industry Programs
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
