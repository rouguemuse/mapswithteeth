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
          r.id === "tx-prop-code-92-016" ||
          r.id === "travis-county-fss" ||
          r.id === "giving-kitchen" ||
          r.id === "safe-alliance-housing" ||
          r.barrierCategories.includes("HOUSING")
      );
    } else if (selectedProblem === "UTILITY_RECONNECTION") {
      pool = pool.filter(
        (r) =>
          r.id === "puc-subst-r-25-478" ||
          r.id === "community-action-network-csbg" ||
          r.barrierCategories.includes("UTILITY")
      );
    } else if (selectedProblem === "PHONE_PRIVACY") {
      pool = pool.filter(
        (r) =>
          r.id === "fcc-safe-connections-act" ||
          r.barrierCategories.includes("COMMUNICATIONS") ||
          r.barrierCategories.includes("LEGAL")
      );
    } else if (selectedProblem === "PET_BOARDING") {
      pool = pool.filter(
        (r) =>
          r.id === "redrover-safe-escape" ||
          r.id === "austin-pets-alive-pass" ||
          r.barrierCategories.includes("PETS")
      );
    } else if (selectedProblem === "FOOD_INDUSTRY_HARDSHIP") {
      pool = pool.filter(
        (r) =>
          r.id === "southern-smoke-emergency-relief" ||
          r.id === "giving-kitchen" ||
          r.id === "musicares-emergency-financial-grant"
      );
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
          <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold">
            INTERACTIVE RESOURCE STACK GENERATOR
          </span>
          <span className="coord-tick">[3-STEP BARRIER-FIRST ASSEMBLY]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Build a Way Through
        </h2>

        <p className="text-xs sm:text-sm text-stone-700 max-w-3xl leading-relaxed font-sans">
          Choose what you are dealing with and the barriers already getting in the way.
        </p>
      </div>

      {/* 2-Column Interactive Controls */}
      <div className="grid gap-6 lg:grid-cols-12 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-7 shadow-xs">
        {/* Step 1: What are you trying to solve? */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs font-bold uppercase">
            <span className="w-5 h-5 rounded-full bg-[#1C1D1D] text-white flex items-center justify-center text-[10px]">
              1
            </span>
            <span>What are you trying to solve?</span>
          </div>

          <div className="space-y-1.5">
            {problemOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedProblem(opt.id)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all font-sans ${
                  selectedProblem === opt.id
                    ? "bg-[#1C1D1D] text-white font-bold border-[#1C1D1D] shadow-xs"
                    : "bg-[#EEE8DD] text-stone-800 border-[#D9D1C4] hover:border-[#1C1D1D]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: What is blocking the obvious route? */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs font-bold uppercase">
            <span className="w-5 h-5 rounded-full bg-[#1C1D1D] text-white flex items-center justify-center text-[10px]">
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
                  className={`p-2.5 rounded-lg border text-xs text-left transition-all flex items-center justify-between font-mono ${
                    isSelected
                      ? "bg-[#971F26] text-white font-bold border-[#971F26] shadow-xs"
                      : "bg-[#EEE8DD] text-stone-700 border-[#D9D1C4] hover:border-[#1C1D1D]"
                  }`}
                >
                  <span className="text-[11px]">{f.label}</span>
                  <span className="text-[10px] font-bold">
                    {isSelected ? "✕" : "+"}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-[10px] text-stone-500 font-mono italic pt-1">
            * Select all barriers that have caused conventional agencies to reject or delay your intake.
          </p>
        </div>
      </div>

      {/* Step 3: Streamlined & Scannable Resource Cards */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
          <div className="flex items-center gap-2 text-[#1C1D1D] font-serif font-bold text-lg">
            <span className="w-5 h-5 rounded-full bg-[#971F26] text-white flex items-center justify-center text-[10px] font-mono">
              3
            </span>
            <span>Matching Pathways ({surfacedResources.length} Surfaced):</span>
          </div>
          <span className="coord-tick">[CLICK ANY CARD FOR FULL AUDIT DOSSIER]</span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {surfacedResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-all shadow-xs space-y-3"
            >
              <div className="space-y-2.5">
                {/* 1. Verification Status & Timestamp */}
                <div className="flex items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
                  <VerificationBadge status={resource.verificationStatus} />
                  <span className="text-[10px] font-mono text-stone-600">
                    Checked {resource.lastReviewedDate || resource.dateLastVerified}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-base font-serif font-bold text-[#1C1D1D] leading-snug">
                    {resource.name}
                  </h3>
                  <p className="text-[11px] font-mono text-stone-600">
                    {resource.organization} · {resource.county ? `${resource.county} Co., TX` : (resource.state === 'TX' ? 'Texas' : 'Nationwide')}
                  </p>
                </div>

                {/* 2. What It Does */}
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase font-bold text-[#971F26] block">
                    WHAT IT DOES:
                  </span>
                  <p className="text-xs text-stone-900 font-sans leading-snug line-clamp-2">
                    {resource.whatItCanHelpWith || resource.whatItActuallyProvides}
                  </p>
                </div>

                {/* 3. Who It Fits */}
                <div className="text-[11px] font-sans text-stone-800">
                  <strong className="font-mono text-[9px] uppercase text-stone-600 block font-bold">WHO IT FITS:</strong>
                  <p className="text-xs text-stone-700 line-clamp-1">{resource.eligibility}</p>
                </div>

                {/* 4. Key Barriers Bypassed / Access Conditions */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase font-bold text-stone-600 block">
                    KEY ACCESS CONDITIONS:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {resource.policeReportRequired === false && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded font-mono font-bold">
                        ✓ No Police Report
                      </span>
                    )}
                    {resource.shelterConnectionRequired === false && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded font-mono font-bold">
                        ✓ No Shelter Stay
                      </span>
                    )}
                    {resource.accessFrictions.slice(0, 1).map((f, i) => (
                      <span key={i} className="text-[9px] px-1.5 py-0.5 bg-amber-50 border border-amber-300 text-amber-900 rounded font-mono">
                        {f.replace(/_/g, " ")}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Why It May Be Useful */}
                {resource.notes && (
                  <div className="p-2 bg-[#EEE8DD] rounded border border-[#D9D1C4] text-[11px] text-stone-700 italic font-sans line-clamp-2">
                    &ldquo;{resource.notes}&rdquo;
                  </div>
                )}
              </div>

              {/* Action Button: View Full Dossier */}
              <button
                onClick={() => setActiveModalResource(resource)}
                className="w-full mt-2 py-2 bg-[#1C1D1D] hover:bg-stone-800 text-white rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Full Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#971F26]" />
              </button>
            </div>
          ))}
        </div>

        {/* Explore All CTA */}
        <div className="pt-3 flex justify-center">
          <Link
            href="/find-help"
            className="px-8 py-3 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm transition-all"
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
