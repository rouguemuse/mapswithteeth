"use client";

import React, { useState, useMemo } from "react";
import { SurvivorSituation, Unknownable } from "@/domain/intake/types";
import { matchSurvivorSituation } from "@/domain/matching/deterministicMatcher";
import { DeterministicMatchOutput } from "@/domain/continuity/types";
import { mapUiNeedsToCanonicalNeeds } from "@/domain/intake/needRegistry";
import { reconcileIntakeState } from "@/domain/intake/reconciliation";
import { NeedSelectorStep } from "./NeedSelectorStep";
import { LocationStep } from "./LocationStep";
import { ContextQuestionsStep } from "./ContextQuestionsStep";
import { ConflictClarificationStep } from "./ConflictClarificationStep";
import { IntakeReviewStep } from "./IntakeReviewStep";
import { ResultsDashboard } from "../results/ResultsDashboard";
import { ShieldAlert, ShieldCheck } from "lucide-react";

export function SurvivorIntakeFlow() {
  // Step 1: Needs, Step 2: Location, Step 3: Questions, Step 35: Clarification, Step 4: Review, Step 5: Results
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedNeedIds, setSelectedNeedIds] = useState<string[]>([]);
  const [location, setLocation] = useState<{ state: string; county: string }>({
    state: "TX",
    county: "Travis",
  });
  const [questionAnswers, setQuestionAnswers] = useState<Record<string, any>>({});
  const [clarificationAnswers, setClarificationAnswers] = useState<Record<string, any>>({});
  const [matchOutput, setMatchOutput] = useState<DeterministicMatchOutput | null>(null);

  // Derive reconciled SurvivorSituation through pure deterministic reconciliation layer
  const reconciliation = useMemo(() => {
    return reconcileIntakeState({
      selectedNeedIds,
      location,
      questionAnswers,
      clarificationAnswers,
    });
  }, [selectedNeedIds, location, questionAnswers, clarificationAnswers]);

  const situation = reconciliation.reconciledSituation;
  const activeConflicts = reconciliation.activeConflicts;

  // Quick exit handler: clears in-memory state immediately
  const handleQuickExit = () => {
    setSelectedNeedIds([]);
    setLocation({ state: "UNKNOWN", county: "UNKNOWN" });
    setQuestionAnswers({});
    setClarificationAnswers({});
    setMatchOutput(null);
    window.location.replace("https://www.weather.com");
  };

  // Toggle problem need
  const handleToggleNeed = (needId: string) => {
    setSelectedNeedIds((prev) =>
      prev.includes(needId) ? prev.filter((id) => id !== needId) : [...prev, needId]
    );
  };

  // Update question answer in Step 3
  const handleUpdateField = (field: keyof SurvivorSituation, value: Unknownable<any>) => {
    setQuestionAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Resolve conflict in clarification step
  const handleResolveConflict = (factKey: string, resolvedValue: any) => {
    setClarificationAnswers((prev) => ({
      ...prev,
      [factKey]: resolvedValue,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep(4);
  };

  // Run the frozen canonical deterministic matcher
  const handleRunMatcher = (customSituation?: SurvivorSituation) => {
    const sitToEvaluate = customSituation || situation;
    const output = matchSurvivorSituation(sitToEvaluate);
    setMatchOutput(output);
    setCurrentStep(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle inline clarification from a POSSIBLE route card in Results
  const handleClarifyFact = (field: keyof SurvivorSituation, value: Unknownable<any>) => {
    const nextClarifications = {
      ...clarificationAnswers,
      [field]: value,
    };
    setClarificationAnswers(nextClarifications);

    const nextRecon = reconcileIntakeState({
      selectedNeedIds,
      location,
      questionAnswers,
      clarificationAnswers: nextClarifications,
    });
    handleRunMatcher(nextRecon.reconciledSituation);
  };

  // Reset entire intake flow
  const handleReset = () => {
    setSelectedNeedIds([]);
    setLocation({ state: "TX", county: "Travis" });
    setQuestionAnswers({});
    setClarificationAnswers({});
    setMatchOutput(null);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 font-sans">
      {/* Top Quick Exit & Quiet Privacy Bar */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#D9D1C4]/80">
        <div className="flex items-center gap-2 text-stone-600 text-xs">
          <ShieldCheck className="w-4 h-4 text-[#2D5A3D] shrink-0" />
          <span className="font-sans text-xs">
            <strong>Private & In-Memory:</strong> Your answers are processed on this page and aren't saved by Maps With Teeth.
          </span>
        </div>

        <button
          type="button"
          onClick={handleQuickExit}
          className="px-3.5 py-1.5 bg-[#971F26] hover:bg-[#80191F] text-white rounded font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs border border-[#971F26]"
          title="Quickly leave this website"
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Quick Exit</span>
        </button>
      </div>

      {/* Step 1: Need / Problem Selector */}
      {currentStep === 1 && (
        <NeedSelectorStep
          selectedNeedIds={selectedNeedIds}
          onToggleNeed={handleToggleNeed}
          onContinue={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(2);
          }}
        />
      )}

      {/* Step 2: Location & Jurisdiction */}
      {currentStep === 2 && (
        <LocationStep
          stateValue={location.state}
          countyValue={location.county}
          onStateChange={(st) => setLocation((prev) => ({ ...prev, state: st }))}
          onCountyChange={(co) => setLocation((prev) => ({ ...prev, county: co }))}
          onBack={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(1);
          }}
          onContinue={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(3);
          }}
        />
      )}

      {/* Step 3: Progressive Context Questions */}
      {currentStep === 3 && (
        <ContextQuestionsStep
          selectedNeedIds={selectedNeedIds}
          situation={situation}
          questionAnswers={questionAnswers}
          onUpdateField={handleUpdateField}
          onBack={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(2);
          }}
          onContinue={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (activeConflicts.length > 0) {
              setCurrentStep(35); // Go to Clarification Step
            } else {
              setCurrentStep(4); // Go to Review Step
            }
          }}
        />
      )}

      {/* Step 3.5: Conflict Clarification Step */}
      {currentStep === 35 && activeConflicts.length > 0 && (
        <ConflictClarificationStep
          conflict={activeConflicts[0]}
          onResolve={handleResolveConflict}
          onBack={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(3);
          }}
        />
      )}

      {/* Step 4: Pre-Match Review Screen */}
      {currentStep === 4 && (
        <IntakeReviewStep
          selectedNeedIds={selectedNeedIds}
          situation={situation}
          hasActiveConflicts={activeConflicts.length > 0}
          onEditProblems={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(1);
          }}
          onEditLocation={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(2);
          }}
          onEditDetails={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(3);
          }}
          onClarifyConflict={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(35);
          }}
          onRunMatcher={() => handleRunMatcher()}
        />
      )}

      {/* Step 5: Results Dashboard */}
      {currentStep === 5 && matchOutput && (
        <ResultsDashboard
          situation={situation}
          matchOutput={matchOutput}
          onModifySituation={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep(4);
          }}
          onReset={handleReset}
          onClarifyFact={handleClarifyFact}
        />
      )}
    </div>
  );
}
