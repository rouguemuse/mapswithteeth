"use client";

import React, { useState } from "react";
import { matchIntakeToResources, MatchResult } from "@/data/matcher";
import { ResourceIntakeData } from "@/types/intake";
import { Step1Barrier } from "./Step1Barrier";
import { Step2Work } from "./Step2Work";
import { Step3Household } from "./Step3Household";
import { Step4Failed } from "./Step4Failed";
import { InstantResults } from "./InstantResults";
import { Compass } from "lucide-react";

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
    <div className="max-w-4xl mx-auto my-8 px-4">
      {!submitted ? (
        <div className="bg-brand-paper border border-brand-sand rounded-xl p-6 sm:p-8 shadow-md">
          <div className="border-b border-brand-sand pb-5 mb-6">
            <div className="flex items-center gap-2 text-brand-oxblood mb-2">
              <Compass className="w-5 h-5" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                Structured Resource Discovery Intake
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal tracking-tight">
              Help Me Find a Way Through
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
              Sometimes the thing that unlocks help has nothing obvious to do with domestic violence. Your job, industry history, children, pets, public school, union membership, or county may reveal emergency hardship funds that would never appear in a standard domestic violence search.
            </p>
            <div className="mt-3 p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs text-brand-oxblood space-y-1 shadow-sm">
              <div className="text-[11px] leading-relaxed">
                <strong>Privacy & Emergency Notice:</strong> Please do not submit sensitive personal records, case documents, medical information, or identifying survivor information through this form. This prototype is not monitored for emergencies.
              </div>
              <div className="text-[10px] text-stone-600 font-mono pt-1">
                Data Minimization: Zero SSN, zero full address, zero abuse narrative. Submissions calculate immediate local matching pathways without remote persistence.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-6 border-b border-brand-sand pb-3">
            <span className={step === 1 ? "text-brand-oxblood font-bold" : ""}>1. The Barrier</span>
            <span>→</span>
            <span className={step === 2 ? "text-brand-oxblood font-bold" : ""}>2. Work & Background</span>
            <span>→</span>
            <span className={step === 3 ? "text-brand-oxblood font-bold" : ""}>3. Household & Pets</span>
            <span>→</span>
            <span className={step === 4 ? "text-brand-oxblood font-bold" : ""}>4. What Failed & Urgency</span>
          </div>

          <form onSubmit={handleSubmit}>
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
      ) : matchResult ? (
        <InstantResults
          matchResult={matchResult}
          onReset={() => setSubmitted(false)}
        />
      ) : null}
    </div>
  );
}
