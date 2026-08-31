"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PUBLIC_RESOURCES } from "@/data/resources";
import { ResourceDetailModal } from "@/components/resources/ResourceDetailModal";
import { VerificationBadge } from "@/components/resources/VerificationBadge";
import { Resource } from "@/types/resource";
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  MapPin,
  ExternalLink,
  SlidersHorizontal,
  Compass,
  Sparkles
} from "lucide-react";

export function BuildAWayThroughSection() {
  const [selectedProblem, setSelectedProblem] = useState<string>("HOUSING_DEPOSIT");
  const [selectedFrictions, setSelectedFrictions] = useState<string[]>([
    "NO_POLICE_REPORT",
    "NO_SHELTER_STAY",
  ]);
  const [activeModalResource, setActiveModalResource] = useState<Resource | null>(null);

  const problemOptions = [
    { id: "HOUSING_DEPOSIT", label: "I need housing / rental deposit" },
    { id: "UTILITY_RECONNECTION", label: "I can't pay a utility deposit or electric bill" },
    { id: "LEAVE_UNSAFE_LEASE", label: "I need to break an unsafe lease immediately" },
    { id: "PHONE_PRIVACY", label: "Someone is tracking / controlling my phone line" },
    { id: "PET_BOARDING", label: "I have a pet / companion animal with nowhere to go" },
    { id: "FOOD_INDUSTRY_HARDSHIP", label: "I work in food/beverage or hospitality and need cash" },
  ];

  const frictionOptions = [
    { id: "NO_POLICE_REPORT", label: "No Police Report" },
    { id: "NO_ID", label: "No ID / Documents Missing" },
    { id: "NO_TRANSPORT", label: "No Transportation" },
    { id: "WRONG_COUNTY", label: "Wrong County / Geographic Lock" },
    { id: "NO_REFERRAL", label: "No Advocate Referral" },
    { id: "NO_SHELTER_STAY", label: "Cannot Stay in Shelter" },
    { id: "NO_DEPOSIT", label: "No Money for Deposit" },
    { id: "FUNDING_FROZEN", label: "Funding Unavailable" },
    { id: "WAITLIST_LONG", label: "Waitlist Too Long" },
    { id: "NO_SAFE_PHONE", label: "No Safe Phone / Email" },
    { id: "PRIOR_DENIAL", label: "Prior Denial / Rejected" },
  ];

  const toggleFriction = (id: string) => {
    setSelectedFrictions((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Filter resources dynamically to select 3 representative pathways
  const surfacedResources = React.useMemo(() => {
    let pool = PUBLIC_RESOURCES;

    if (selectedProblem === "HOUSING_DEPOSIT" || selectedProblem === "LEAVE_UNSAFE_LEASE") {
      pool = pool.filter(
        (r) =>
          r.id === "tx-statute-lease-termination" ||
          r.id === "travis-county-family-support" ||
          r.id === "giving-kitchen-crisis-grants" ||
          r.id === "safe-alliance-austin" ||
          r.barrierCategories.includes("rent-deposit") ||
          r.barrierCategories.includes("lease-escape") ||
          r.barrierCategories.includes("safe-stay")
      );
    } else if (selectedProblem === "UTILITY_RECONNECTION") {
      pool = pool.filter(
        (r) =>
          r.id === "tx-puct-utility-waiver" ||
          r.id === "owbc-community-action-wilco" ||
          r.id === "the-caring-place-georgetown" ||
          r.barrierCategories.includes("utility-deposit")
      );
    } else if (selectedProblem === "PHONE_PRIVACY") {
      pool = pool.filter(
        (r) =>
          r.id === "safe-connections-act-separation" ||
          r.id === "nnedv-techsafety-clinic" ||
          r.barrierCategories.includes("phone-controlled") ||
          r.barrierCategories.includes("device-car-tracking")
      );
    } else if (selectedProblem === "PET_BOARDING") {
      pool = pool.filter(
        (r) =>
          r.id === "redrover-relief-safe-escape" ||
          r.id === "safe-havens-for-pets" ||
          r.barrierCategories.includes("pets") ||
          r.petSpecific === true
      );
    } else if (selectedProblem === "FOOD_INDUSTRY_HARDSHIP") {
      pool = pool.filter(
        (r) =>
          r.id === "southern-smoke-foundation" ||
          r.id === "giving-kitchen-crisis-grants" ||
          r.id === "core-children-of-restaurant-employees" ||
          r.id === "musicares-emergency-financial" ||
          r.barrierCategories.includes("industry-hardship")
      );
    }

    // Apply friction filtering if requested
    if (selectedFrictions.includes("NO_POLICE_REPORT")) {
      const noPolice = pool.filter((r) => r.policeReportRequired === false);
      if (noPolice.length >= 2) pool = noPolice;
    }
    if (selectedFrictions.includes("NO_SHELTER_STAY")) {
      const noShelter = pool.filter((r) => r.shelterConnectionRequired === false);
      if (noShelter.length >= 2) pool = noShelter;
    }

    if (pool.length < 3) {
      pool = PUBLIC_RESOURCES;
    }
    return pool.slice(0, 3);
  }, [selectedProblem, selectedFrictions]);

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 bg-grid-diagram select-none font-sans">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold">
            INTERACTIVE RESOURCE STACK GENERATOR
          </span>
          <span className="coord-tick text-stone-700">[3-STEP BARRIER-FIRST ASSEMBLY]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Build a Way Through
        </h2>

        <p className="text-base sm:text-[17px] text-stone-800 max-w-3xl leading-relaxed font-sans font-medium">
          Choose what you are dealing with and the barriers already getting in the way.
        </p>
      </div>

      {/* 2-Column Interactive Controls */}
      <div className="grid gap-6 lg:grid-cols-12 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-7 shadow-xs">
        {/* Step 1: What are you trying to solve? */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs sm:text-[13px] font-bold uppercase">
            <span className="w-5 h-5 rounded-full bg-[#1C1D1D] text-white flex items-center justify-center text-[11px]">
              1
            </span>
            <span>What are you trying to solve?</span>
          </div>

          <div className="space-y-2">
            {problemOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedProblem(opt.id)}
                className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all font-sans font-medium ${
                  selectedProblem === opt.id
                    ? "bg-[#1C1D1D] text-white font-bold border-[#1C1D1D] shadow-xs"
                    : "bg-[#EEE8DD] text-stone-900 border-[#D9D1C4] hover:border-[#1C1D1D]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: What is blocking the obvious route? */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs sm:text-[13px] font-bold uppercase">
            <span className="w-5 h-5 rounded-full bg-[#1C1D1D] text-white flex items-center justify-center text-[11px]">
              2
            </span>
            <span>What is blocking the obvious route?</span>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {frictionOptions.map((f) => {
              const isSelected = selectedFrictions.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFriction(f.id)}
                  className={`p-3 rounded-lg border text-xs sm:text-[13px] text-left transition-all flex items-center justify-between font-mono font-medium ${
                    isSelected
                      ? "bg-[#971F26] text-white font-bold border-[#971F26] shadow-xs"
                      : "bg-[#EEE8DD] text-stone-900 border-[#D9D1C4] hover:border-[#1C1D1D]"
                  }`}
                >
                  <span>{f.label}</span>
                  <span className="font-bold text-xs">
                    {isSelected ? "✕" : "+"}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-stone-600 font-mono italic pt-1">
            * Select all barriers that have caused conventional agencies to reject or delay your intake.
          </p>
        </div>
      </div>

      {/* Step 3: Streamlined & Scannable Resource Cards */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
          <div className="flex items-center gap-2 text-[#1C1D1D] font-serif font-bold text-lg sm:text-xl">
            <span className="w-5 h-5 rounded-full bg-[#971F26] text-white flex items-center justify-center text-[11px] font-mono">
              3
            </span>
            <span>Matching Pathways ({surfacedResources.length} Surfaced):</span>
          </div>
          <span className="coord-tick text-stone-700">[CLICK ANY CARD FOR FULL AUDIT DOSSIER]</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {surfacedResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-all shadow-xs space-y-4"
            >
              <div className="space-y-3">
                {/* 1. Verification Status & Timestamp */}
                <div className="flex items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2.5">
                  <VerificationBadge status={resource.verificationStatus} />
                  <span className="text-xs font-mono font-medium text-stone-700">
                    Checked {resource.lastReviewedDate || resource.dateLastVerified}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1D1D] leading-snug">
                    {resource.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-mono font-semibold text-stone-700 mt-0.5">
                    {resource.organization} · {resource.county ? `${resource.county} Co., TX` : (resource.state === 'TX' ? 'Texas Statewide' : 'Nationwide')}
                  </p>
                </div>

                {/* 2. What It Does */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase font-bold text-[#971F26] block tracking-wide">
                    WHAT IT DOES:
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-stone-900 font-sans leading-relaxed font-normal">
                    {resource.whatItCanHelpWith || resource.whatItActuallyProvides}
                  </p>
                </div>

                {/* 3. Who It Fits */}
                <div className="text-xs sm:text-[13px] font-sans text-stone-800 space-y-0.5">
                  <strong className="font-mono text-xs uppercase text-stone-700 block font-bold tracking-wide">WHO IT FITS:</strong>
                  <p className="text-sm text-stone-800 leading-normal">{resource.eligibility}</p>
                </div>

                {/* 4. Key Barriers Bypassed / Access Conditions */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase font-bold text-stone-700 block tracking-wide">
                    KEY ACCESS CONDITIONS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {resource.policeReportRequired === false && (
                      <span className="text-xs px-2 py-0.5 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded font-mono font-bold">
                        ✓ No Police Report
                      </span>
                    )}
                    {resource.shelterConnectionRequired === false && (
                      <span className="text-xs px-2 py-0.5 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded font-mono font-bold">
                        ✓ No Shelter Stay
                      </span>
                    )}
                    {resource.accessFrictions.slice(0, 1).map((f, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-amber-50 border border-amber-300 text-amber-900 rounded font-mono font-medium">
                        {f.replace(/_/g, " ")}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Why It May Be Useful */}
                {resource.notes && (
                  <div className="p-3 bg-[#EEE8DD] rounded border border-[#D9D1C4] text-xs sm:text-[13px] text-stone-800 italic font-sans leading-relaxed">
                    &ldquo;{resource.notes}&rdquo;
                  </div>
                )}
              </div>

              {/* Action Button: View Full Dossier */}
              <button
                onClick={() => setActiveModalResource(resource)}
                className="w-full mt-3 py-2.5 bg-[#1C1B1A] hover:bg-stone-800 text-white rounded text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>View Full Dossier</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Explore All CTA */}
        <div className="pt-4 flex justify-center">
          <Link
            href="/find-help"
            className="px-8 py-3.5 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Explore all Ways Through →</span>
          </Link>
        </div>
      </div>

      {activeModalResource && (
        <ResourceDetailModal
          resource={activeModalResource}
          isOpen={Boolean(activeModalResource)}
          onClose={() => setActiveModalResource(null)}
        />
      )}
    </section>
  );
}
