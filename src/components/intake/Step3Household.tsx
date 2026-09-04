"use client";

import React from "react";
import { ResourceIntakeData } from "@/types/intake";
import { WhyAskingTooltip } from "./WhyAskingTooltip";
import { ArrowRight, ArrowLeft, Utensils, Music, PawPrint, Smartphone, Scale, GraduationCap, CheckCircle2, ShieldAlert } from "lucide-react";

export function Step3Household({
  formData,
  setFormData,
  onSubmit,
  onBack,
}: {
  formData: ResourceIntakeData;
  setFormData: React.Dispatch<React.SetStateAction<ResourceIntakeData>>;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}) {
  const isFoodService =
    formData.currentIndustry === "restaurant-food-service" ||
    formData.recentIndustries?.includes("restaurant-food-service");

  const isMusic =
    formData.currentIndustry === "arts-entertainment" ||
    formData.recentIndustries?.includes("arts-entertainment");

  const isPetOwner = formData.hasAnimal;
  const isSharedCell = formData.sharedCellularPlan;
  const isTexasLease = formData.state === "TX" && formData.housingStatus === "RENTAL_LEASE";
  const isPublicSchool = formData.childInPublicSchool;
  const isTexasUtility = formData.state === "TX" && formData.primaryBarriers?.includes("utility-deposit");

  const hasAnyCandidateFamily =
    isFoodService || isMusic || isPetOwner || isSharedCell || isTexasLease || isPublicSchool || isTexasUtility;

  return (
    <form onSubmit={onSubmit} className="space-y-6 animate-fadeIn font-sans select-none">
      <div className="border-b border-[#D9D1C4] pb-3 mb-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#971F26] font-bold block mb-1">
          STEP 3 · CONDITIONAL QUALIFIER DEEP-DIVES
        </span>
        <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
          Verifying Unlocked Candidate Pathways
        </h3>
        <p className="text-xs text-stone-700 mt-1 leading-relaxed font-sans">
          These targeted questions appear only because your previous answers opened specific program families (hospitality relief, telecom statutes, pet boarding, or state rights).
        </p>
      </div>

      {!hasAnyCandidateFamily && (
        <div className="p-4 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg text-xs text-stone-800 space-y-1">
          <p className="font-bold text-[#1C1D1D]">No specialized industry or statutory follow-ups required.</p>
          <p className="text-stone-600">Your profile will be matched across our verified regional and national emergency safety net.</p>
        </div>
      )}

      {/* 1. Hospitality / Food & Beverage Questions */}
      {isFoodService && (
        <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-4">
          <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
            <Utensils className="w-4 h-4" />
            <span>Hospitality & Food Service Verification (Southern Smoke, CORE, Giving Kitchen)</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 text-xs">
            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
                Average Weekly Hours in Food & Beverage:
                <WhyAskingTooltip explanation="Southern Smoke requires a minimum of 30 hours/week average; Giving Kitchen is open to part-time and full-time foodservice workers." />
              </label>
              <select
                value={formData.hospitalityHoursPerWeek || "30_PLUS"}
                onChange={(e) => setFormData({ ...formData, hospitalityHoursPerWeek: e.target.value as any })}
                className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono focus:outline-none focus:border-[#971F26]"
              >
                <option value="30_PLUS">30+ Hours / Week (Full Time)</option>
                <option value="UNDER_30">Under 30 Hours / Week (Part Time)</option>
                <option value="UNSURE">Variable / Seasonal Hours</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
                Industry Tenure (Continuous Months):
                <WhyAskingTooltip explanation="Both Southern Smoke and Giving Kitchen require at least 6 continuous months of food service employment history." />
              </label>
              <select
                value={formData.hospitalityTenureMonths || "6_PLUS_MO"}
                onChange={(e) => setFormData({ ...formData, hospitalityTenureMonths: e.target.value as any })}
                className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono focus:outline-none focus:border-[#971F26]"
              >
                <option value="6_PLUS_MO">6+ Continuous Months in Industry</option>
                <option value="3_TO_5_MO">3 to 5 Months</option>
                <option value="UNDER_3_MO">Under 3 Months</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#E5DEC9] text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hospitalityRecentWork90Days || false}
                onChange={(e) => setFormData({ ...formData, hospitalityRecentWork90Days: e.target.checked })}
                className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
              />
              <span className="font-medium text-[#1C1D1D]">
                Worked in food/beverage within the past 90 days (Required for CORE Gives Crisis Grants)
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hospitalityCrisisWithin6Mo || false}
                onChange={(e) => setFormData({ ...formData, hospitalityCrisisWithin6Mo: e.target.checked })}
                className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
              />
              <span className="font-medium text-[#1C1D1D]">
                Crisis / unforeseen hardship event occurred within the past 6 months
              </span>
            </label>
          </div>
        </div>
      )}

      {/* 2. Music Industry Questions */}
      {isMusic && (
        <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-4">
          <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
            <Music className="w-4 h-4" />
            <span>Music Industry Verification (MusiCares Emergency Assistance)</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 text-xs">
            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
                Years in the Music Industry:
              </label>
              <select
                value={formData.musicTenureYears || "5_PLUS_YRS"}
                onChange={(e) => setFormData({ ...formData, musicTenureYears: e.target.value as any })}
                className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono focus:outline-none focus:border-[#971F26]"
              >
                <option value="5_PLUS_YRS">5+ Years of Documented Music Employment</option>
                <option value="UNDER_5_YRS">Under 5 Years</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
                Commercially Released Recordings / Credits:
              </label>
              <select
                value={formData.musicCommercialReleases || "6_PLUS_RELEASES"}
                onChange={(e) => setFormData({ ...formData, musicCommercialReleases: e.target.value as any })}
                className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono focus:outline-none focus:border-[#971F26]"
              >
                <option value="6_PLUS_RELEASES">6+ Commercially Released Singles/Tracks/Videos</option>
                <option value="FEWER_THAN_6">Fewer than 6 Releases</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 3. Pet & Companion Animal Questions */}
      {isPetOwner && (
        <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-3">
          <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
            <PawPrint className="w-4 h-4" />
            <span>Pet Safe Keeping Verification (RedRover Safe Escape / APA PASS)</span>
          </div>

          <div className="space-y-2 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.fleeingWithPet || false}
                onChange={(e) => setFormData({ ...formData, fleeingWithPet: e.target.checked })}
                className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
              />
              <span className="font-medium text-[#1C1D1D]">
                I am escaping domestic violence with my companion animal
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.connectedWithDVAdvocate || false}
                onChange={(e) => setFormData({ ...formData, connectedWithDVAdvocate: e.target.checked })}
                className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
              />
              <span className="font-medium text-[#1C1D1D]">
                I am connected with a domestic violence shelter advocate or case manager (Required for RedRover grants)
              </span>
            </label>
          </div>
        </div>
      )}

      {/* 4. Shared Telecom Plan Questions */}
      {isSharedCell && (
        <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-3">
          <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
            <Smartphone className="w-4 h-4" />
            <span>FCC Safe Connections Act Line Separation Verification</span>
          </div>

          <label className="flex items-center gap-2 text-xs cursor-pointer">
            <input
              type="checkbox"
              checked={formData.sharesMobileContractWithAbuser || false}
              onChange={(e) => setFormData({ ...formData, sharesMobileContractWithAbuser: e.target.checked })}
              className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
            />
            <span className="font-medium text-[#1C1D1D]">
              I share a wireless cellular contract with the person I am separating from (Qualifies under 47 U.S.C. § 345)
            </span>
          </label>
        </div>
      )}

      {/* 5. Texas Lease Termination Questions */}
      {isTexasLease && (
        <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-3">
          <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
            <Scale className="w-4 h-4" />
            <span>Texas Property Code § 92.016 (Safe Lease Break Verification)</span>
          </div>

          <label className="flex items-center gap-2 text-xs cursor-pointer">
            <input
              type="checkbox"
              checked={formData.hasDocumentationForLeaseBreak || false}
              onChange={(e) => setFormData({ ...formData, hasDocumentationForLeaseBreak: e.target.checked })}
              className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
            />
            <span className="font-medium text-[#1C1D1D]">
              I have (or can obtain) a signed letter from a family violence advocate, licensed counselor, or protective order
            </span>
          </label>
        </div>
      )}

      {/* 6. Public School McKinney-Vento Questions */}
      {isPublicSchool && (
        <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-3">
          <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>McKinney-Vento Public School Housing Instability Verification</span>
          </div>

          <label className="flex items-center gap-2 text-xs cursor-pointer">
            <input
              type="checkbox"
              checked={formData.childLacksFixedRegularNighttimeResidence || false}
              onChange={(e) => setFormData({ ...formData, childLacksFixedRegularNighttimeResidence: e.target.checked })}
              className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
            />
            <span className="font-medium text-[#1C1D1D]">
              Child is currently experiencing housing instability, temporary double-up, motel stay, or emergency shelter
            </span>
          </label>
        </div>
      )}

      {/* Privacy Guarantee */}
      <div className="p-3 bg-[#F5F1E8] border border-[#D9D1C4] rounded-md text-[11px] text-stone-700 space-y-1">
        <p className="font-semibold text-[#1C1D1D]">
          🔒 Privacy & Data Minimization:
        </p>
        <p className="text-stone-600">
          Sensitive intake responses are evaluated in-memory and are not intentionally persisted to local storage.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-[#D9D1C4]">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-[#F5F1E8] border border-[#1C1D1D] hover:bg-stone-200 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="submit"
          className="px-6 py-2.5 bg-[#971F26] text-white hover:bg-red-800 rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-xs"
        >
          <span>Calculate Deterministic Matches</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
