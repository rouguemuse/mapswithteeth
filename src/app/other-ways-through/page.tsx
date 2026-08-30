"use client";

import React, { useState } from "react";
import { OTHER_WAYS_THROUGH_RESOURCES } from "@/data/otherWaysThrough";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { Briefcase, Info } from "lucide-react";

export default function OtherWaysThroughPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const filtered = OTHER_WAYS_THROUGH_RESOURCES.filter((r) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "INDUSTRY") return r.category === "INDUSTRY_EMERGENCY_FUNDS" || r.barrierCategories.includes("industry-hardship");
    if (selectedFilter === "PETS") return r.category === "PETS_AND_FAMILY" || r.barrierCategories.includes("pets");
    if (selectedFilter === "COMMUNICATIONS") return r.category === "COMMUNICATIONS_AND_PRIVACY" || r.barrierCategories.includes("phone-tech-safety");
    if (selectedFilter === "TAXES_LEGAL") return r.category === "TAXES_AND_LEGAL" || r.barrierCategories.includes("taxes-identity-docs");
    if (selectedFilter === "DENTAL_MEDICAL") return r.category === "MEDICAL_AND_DENTAL" || r.barrierCategories.includes("medical-dental");
    if (selectedFilter === "GRANTS") return r.category === "EMERGENCY_FINANCIAL_AID" || r.paymentMethod === "DIRECT_TO_APPLICANT" || r.paymentMethod === "DIRECT_TO_VENDOR";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Editorial Header */}
      <div className="border-b border-brand-sand pb-6">
        <div className="flex items-center gap-2 text-brand-oxblood mb-2">
          <Briefcase className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            LAYER 2 · CONDITION-DEPENDENT RESOURCE LIBRARY
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
          Other Ways Through
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed font-sans">
          Resources you wouldn&apos;t think to search for in a traditional domestic violence directory. Resources are reviewed individually and display their current verification status and review date. This library contains condition-dependent safety nets whose eligibility depends on occupation, industry background, companion animals, telecom statutes, or federal tax debt relief.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-brand-sand pb-4">
        {[
          ["ALL", "All Condition-Dependent Programs"],
          ["INDUSTRY", "Food / Music / Craft / Writing Hardship"],
          ["PETS", "Pet Safe Boarding & Foster"],
          ["COMMUNICATIONS", "Safe Connections Act & Tech Safety"],
          ["TAXES_LEGAL", "IRS IP PIN & Innocent Spouse Relief"],
          ["DENTAL_MEDICAL", "Restorative Dental & Medical Repair"],
          ["GRANTS", "Emergency Vendor Micro-Grants"],
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
          <span className="text-xs font-mono text-stone-600 font-bold uppercase tracking-wider">
            Showing {filtered.length} Nationwide & Industry Programs
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="bg-brand-paper border border-brand-sand rounded-xl p-8 text-center space-y-3">
            <Info className="w-6 h-6 text-stone-400 mx-auto" />
            <p className="text-sm font-semibold text-brand-charcoal font-serif">No resources in this specific category.</p>
            <button
              onClick={() => setSelectedFilter("ALL")}
              className="px-4 py-2 bg-brand-ivory border border-stone-300 text-xs font-mono text-brand-charcoal rounded hover:bg-stone-200"
            >
              View All Condition-Dependent Resources
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
