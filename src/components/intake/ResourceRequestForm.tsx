"use client";

import React, { useState } from "react";
import { matchIntakeToResources, MatchResult } from "@/data/matcher";
import { ResourceIntakeData } from "@/types/intake";
import { Step1Barrier } from "./Step1Barrier";
import { Step2Work } from "./Step2Work";
import { Step3Household } from "./Step3Household";
import { Step4Failed } from "./Step4Failed";
import { InstantResults } from "./InstantResults";
import { Compass, AlertTriangle, ShieldCheck } from "lucide-react";

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
    freeTextWork: "",
    isEmployed: true,
    recentlyLaidOff: false,
    isUnionMember: false,
    unionName: "",
    hasProfessionalLicense: false,
    hasDependentChildren: false,
    childInPublicSchool: false,
    hasAnimal: false,
    animalType: ["DOG"],
    animalNeeds: ["BOARDING"],
    transportationStatus: "OWN_VEHICLE",
    transportationNeeds: ["GAS"],
    failedChannels: [],
    failedReason: undefined,
    failedNotes: "",
    acceptableSolutions: [],
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
                  STRUCTURED INTAKE DOCKET GENERATOR
                </span>
              </div>
              <span className="coord-tick">[INTAKE ENGINE: V0]</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
              Ask Us to Look: Map Your Escape Route
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
              Sometimes the key that unlocks relief has nothing obvious to do with domestic violence. Your job, industry history, companion animals, public school enrollment, union membership, or county jurisdiction may reveal emergency funds outside traditional shelter channels.
            </p>
            <div className="mt-3 p-3.5 bg-[#FDF2F2] border-2 border-[#971F26] rounded-md text-xs text-[#971F26] space-y-1 shadow-2xs">
              <div className="text-[11px] leading-relaxed text-stone-900">
                <strong className="text-[#971F26]">Data Minimization & Privacy Standard:</strong> Zero SSN, zero full address, and zero abuse narrative required. Submissions run in-memory to calculate immediate potential pathways.
              </div>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#D9D1C4] font-mono text-xs">
            {[
              ["1. Barriers", 1],
              ["2. Work History", 2],
              ["3. Household & Pets", 3],
              ["4. What Failed", 4],
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

          {/* Wizard Steps Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <Step1Barrier
                formData={formData}
                setFormData={setFormData}
                onNext={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <Step2Work
                formData={formData}
                setFormData={setFormData}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <Step3Household
                formData={formData}
                setFormData={setFormData}
                onNext={() => setStep(4)}
                onBack={() => setStep(2)}
              />
            )}

            {step === 4 && (
              <Step4Failed
                formData={formData}
                setFormData={setFormData}
                onBack={() => setStep(3)}
              />
            )}
          </form>
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
