"use client";

import React, { useState } from "react";
import { matchIntakeToResources, MatchResult } from "@/data/matcher";
import { ResourceIntakeData } from "@/types/intake";
import { Step1Barrier } from "./Step1Barrier";
import { Step2Work } from "./Step2Work";
import { Step3Household } from "./Step3Household";
import { InstantResults } from "./InstantResults";
import { Compass, ShieldCheck } from "lucide-react";

export function ResourceRequestForm() {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);

  const [formData, setFormData] = useState<ResourceIntakeData>({
    primaryBarriers: [],
    solvingNarrative: "",
    amountScale: "251_500",
    partialHelpImpact: "YES",
    urgency: "WITHIN_72_HOURS",
    state: "TX",
    county: "Travis",
    city: "",
    zipCode: "",
    currentIndustry: "restaurant-food-service",
    recentIndustries: [],
    workStatus: "EMPLOYED",
    hasDependentChildren: false,
    childInPublicSchool: false,
    housingStatus: "RENTAL_LEASE",
    hasAnimal: false,
    transportationStatus: "OWN_VEHICLE",
    sharedCellularPlan: false,
    maritalTaxStatus: "SINGLE",
    militaryVeteranConnection: false,
    unionMembership: false,
    failedChannels: [],
    failedReason: undefined,
    failedNotes: "",

    // Conditional facts
    hospitalityHoursPerWeek: "30_PLUS",
    hospitalityTenureMonths: "6_PLUS_MO",
    hospitalityRecentWork90Days: false,
    hospitalityCrisisWithin6Mo: false,
    musicTenureYears: "5_PLUS_YRS",
    musicCommercialReleases: "6_PLUS_RELEASES",
    fleeingWithPet: false,
    connectedWithDVAdvocate: false,
    enteringOrInDVShelter: false,
    sharesMobileContractWithAbuser: false,
    hasTexasLeaseAgreement: false,
    hasDocumentationForLeaseBreak: false,
    electricUtilityInTexas: false,
    hasSurvivorVerificationLetter: false,
    childLacksFixedRegularNighttimeResidence: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = matchIntakeToResources(formData);
    setMatchResult(results);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 select-none font-sans">
      {!submitted ? (
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 shadow-sm bg-grid-atlas">
          <div className="border-b border-[#D9D1C4] pb-5 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 text-[#971F26]">
                <Compass className="w-5 h-5" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  PROGRESSIVE QUALIFICATION ENGINE · DETERMINISTIC MATCHING
                </span>
              </div>
              <span className="coord-tick">[INTAKE ENGINE: V1.0]</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
              Ask Us to Look: Map Your Escape Route
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
              <strong>Nothing surfaces without a reason.</strong> Sometimes the key that unlocks relief has nothing obvious to do with domestic violence. Your job, industry history, companion animals, public school enrollment, or shared mobile contracts may reveal emergency funds and legal rights outside traditional shelter channels.
            </p>
            <div className="mt-3 p-3.5 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-md text-xs space-y-1 shadow-2xs">
              <div className="text-[11px] leading-relaxed text-stone-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2D5A3D] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1C1D1D]">Privacy & Data Minimization:</strong> Sensitive intake responses are evaluated in-memory and are not intentionally persisted to local storage. Zero names, zero SSNs, and zero abuse narratives required.
                </span>
              </div>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#D9D1C4] font-mono text-xs">
            {[
              ["1. Needs & Geography", 1],
              ["2. Qualification Levers", 2],
              ["3. Conditional Verification", 3],
            ].map(([label, stepNum]) => (
              <button
                key={stepNum}
                type="button"
                onClick={() => setStep(stepNum as number)}
                className={`text-xs uppercase tracking-wider pb-1 transition-all ${
                  step === stepNum
                    ? "text-[#971F26] border-b-2 border-[#971F26] font-bold"
                    : "text-stone-600 hover:text-[#1C1D1D]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {step === 1 && (
            <Step1Barrier
              formData={formData}
              setFormData={setFormData}
              onNext={() => {
                setStep(2);
                window.scrollTo({ top: 100, behavior: "smooth" });
              }}
            />
          )}

          {step === 2 && (
            <Step2Work
              formData={formData}
              setFormData={setFormData}
              onNext={() => {
                setStep(3);
                window.scrollTo({ top: 100, behavior: "smooth" });
              }}
              onBack={() => {
                setStep(1);
                window.scrollTo({ top: 100, behavior: "smooth" });
              }}
            />
          )}

          {step === 3 && (
            <Step3Household
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              onBack={() => {
                setStep(2);
                window.scrollTo({ top: 100, behavior: "smooth" });
              }}
            />
          )}
        </div>
      ) : (
        matchResult && (
          <InstantResults
            matchResult={matchResult}
            onReset={() => {
              setSubmitted(false);
              setStep(1);
            }}
          />
        )
      )}
    </div>
  );
}
