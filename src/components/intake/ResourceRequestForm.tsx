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
        <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-6 sm:p-8 shadow-2xl">
          <div className="border-b border-stone-800 pb-5 mb-6">
            <div className="flex items-center gap-2 text-brand-ruby mb-2">
              <Compass className="w-5 h-5" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                Structured Resource Discovery Intake
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Help Me Find a Way Through
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Sometimes the thing that unlocks help has nothing obvious to do with domestic violence. Your job, industry history, children, pets, public school, union membership, or county may reveal emergency hardship funds that would never appear in a standard domestic violence search.
            </p>
            <div className="mt-3 p-3 bg-stone-900/80 rounded border border-stone-800 text-[11px] text-stone-400 space-y-1">
              <div>
                <strong className="text-stone-300">Data-Minimization Notice:</strong> We do not ask for your Social Security number, full home address, perpetrator&apos;s name, or detailed abuse narratives. You do not need to prove what happened in order to ask us to look for resources.
              </div>
              <div className="text-[10px] text-stone-500 font-mono">
                System Status: Production-ready application architecture / public-resource prototype. Submissions calculate immediate local matching pathways. No private data is stored in unencrypted browser storage.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-6 border-b border-stone-800/60 pb-3">
            <span className={step === 1 ? "text-brand-ruby font-bold" : ""}>1. The Barrier</span>
            <span>→</span>
            <span className={step === 2 ? "text-brand-ruby font-bold" : ""}>2. Work & Background</span>
            <span>→</span>
            <span className={step === 3 ? "text-brand-ruby font-bold" : ""}>3. Household & Pets</span>
            <span>→</span>
            <span className={step === 4 ? "text-brand-ruby font-bold" : ""}>4. What Failed & Urgency</span>
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
