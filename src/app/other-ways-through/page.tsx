"use client";

import React, { useState } from "react";
import { OTHER_WAYS_THROUGH_RESOURCES } from "@/data/otherWaysThrough";
import { ResourceCard } from "@/components/resources/ResourceCard";
import {
  Briefcase,
  Compass,
  ArrowRight,
  CornerDownRight,
  AlertTriangle,
  XOctagon,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";

export default function OtherWaysThroughPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const routeExamples = [
    {
      title: "Hospitality / Food & Beverage Worker in Eviction Crisis",
      standard: "211 Municipal Rent Assistance",
      barrier: "30-day intake backlog / Monthly funding allocation exhausted within 4 hours",
      deadEnd: "Notice to Vacate Issued",
      alternate: "Southern Smoke Foundation / Giving Kitchen Emergency Grant",
      alternateType: "Industry Hardship ($1,000–$2,500 Direct to Landlord)",
      action: "Requires 6+ months in F&B, 30+ hrs/wk; proof of unforeseen crisis.",
    },
    {
      title: "Survivor Trapped by Companion Dog / Cat",
      standard: "Local Domestic Violence Shelter Intake",
      barrier: "Congregate facility strictly prohibits companion animals / No on-site kennels",
      deadEnd: "Forced to Abandon Pet or Remain in Danger",
      alternate: "RedRover Relief Safe Escape + Safe Havens Network",
      alternateType: "Dedicated Boarding Grant (Up to 45 Days)",
      action: "Advocate applies on survivor behalf; grant pays commercial boarding/vet directly.",
    },
    {
      title: "Shared Family Phone Account / Mobile Stalking",
      standard: "Carrier Retail Customer Service Counter",
      barrier: "Carrier refuses line change without primary account holder consent/password",
      deadEnd: "Survivor Device Monitored via Shared Cloud",
      alternate: "Federal Safe Connections Act (47 U.S.C. § 345 / 47 CFR § 64)",
      alternateType: "Mandatory Statutory Separation (2 Business Days)",
      action: "Submit survivor documentation letter; carrier must separate line without penalty + Lifeline.",
    },
    {
      title: "Coerced Debt & Shared Joint Tax Interception",
      standard: "Standard Annual Tax Filing",
      barrier: "Abuser files fraudulent joint return / Intercepts child tax credit refund",
      deadEnd: "IRS Audit & Coerced Tax Liability",
      alternate: "IRS Identity Protection PIN (IP PIN) + Form 8857 Innocent Spouse",
      alternateType: "Federal Tax Shield (§ 6015)",
      action: "Opt into 6-digit IP PIN to block unauthorized returns; file Form 8857 for liability separation.",
    },
  ];

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              LAYER 2 · CONDITION-DEPENDENT ESCAPE ROUTES
            </span>
          </div>
          <span className="coord-tick">
            [TAXONOMY: LATERAL-BYPASS-LIBRARY]
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Other Ways Through: Lateral Safety Nets
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed font-sans">
          When the primary agency door is locked, alternate pathways may still exist outside the traditional domestic violence network. These condition-dependent resources leverage work history, companion animals, telecom statutes, or federal tax relief.
        </p>
      </div>

      {/* Branching Route Diagrams (Standard Route → Barrier → Dead End → Lateral Route) */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-diagram">
        <div className="border-b border-[#D9D1C4] pb-4">
          <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
            ANATOMY OF A LATERAL BYPASS
          </span>
          <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
            Branching Case Studies: How Alternate Routes Work
          </h2>
          <p className="text-xs text-stone-700 mt-1 font-sans">
            Standard emergency aid systems frequently produce dead ends. Here is how lateral investigation maps around institutional obstacles:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {routeExamples.map((ex, idx) => (
            <div
              key={idx}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-5 space-y-3.5 shadow-2xs"
            >
              <div className="border-b border-[#D9D1C4] pb-2 font-mono text-[10px] flex items-center justify-between">
                <span className="font-bold text-[#1C1D1D] uppercase">CASE #{idx + 1}</span>
                <span className="stamp-verified text-[9px] py-0.5 px-1.5">MAPPED LATERAL ROUTE</span>
              </div>

              <h3 className="font-serif font-bold text-base text-[#1C1D1D] leading-snug">
                {ex.title}
              </h3>

              {/* Step Sequence */}
              <div className="space-y-2 text-xs font-mono">
                {/* Standard Channel */}
                <div className="p-2 bg-[#EEE8DD] border border-[#D9D1C4] rounded flex items-center gap-2">
                  <span className="text-stone-500 font-bold uppercase text-[9px] shrink-0">STANDARD:</span>
                  <span className="text-[#1C1D1D] truncate">{ex.standard}</span>
                </div>

                {/* Barrier Failure */}
                <div className="p-2 bg-[#FDF2F2] border border-[#971F26] rounded text-[#971F26] text-[11px]">
                  <span className="font-bold uppercase text-[9px] block">BARRIER / FAILURE:</span>
                  <span className="font-sans font-medium text-stone-900">{ex.barrier}</span>
                </div>

                {/* Dead End */}
                <div className="p-2 bg-[#1C1D1D] text-white rounded text-[11px] flex items-center gap-1.5 font-bold">
                  <XOctagon className="w-3.5 h-3.5 text-[#971F26]" />
                  <span>DEAD END: {ex.deadEnd}</span>
                </div>

                {/* Lateral Bypass Solution */}
                <div className="p-3 bg-[#F5F1E8] border-2 border-[#971F26] rounded-md text-[#971F26] space-y-1">
                  <div className="flex items-center justify-between font-bold text-xs uppercase">
                    <span className="flex items-center gap-1">
                      <CornerDownRight className="w-3.5 h-3.5" />
                      <span>OTHER WAY THROUGH:</span>
                    </span>
                    <span className="stamp-alert text-[8px] py-0.5">BYPASS</span>
                  </div>
                  <p className="font-serif font-bold text-[#1C1D1D] text-xs sm:text-[13px]">{ex.alternate}</p>
                  <p className="font-mono text-[10px] text-stone-700 font-bold">{ex.alternateType}</p>
                  <p className="font-sans text-[11px] text-stone-800 leading-snug pt-1">{ex.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              SEARCH & FILTER
            </span>
            <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Explore Condition-Dependent Directory ({filtered.length} Resources)
            </h2>
          </div>
          <span className="coord-tick">
            [AUDIT: AUGUST 2026]
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
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
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all border ${
                selectedFilter === id
                  ? "bg-[#1C1D1D] text-white font-bold border-[#1C1D1D] shadow-xs"
                  : "bg-[#EEE8DD] text-stone-800 border-[#D9D1C4] hover:border-[#1C1D1D]"
              }`}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Resource Result Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}
