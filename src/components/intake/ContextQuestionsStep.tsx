"use client";

import React from "react";
import { IntakeQuestion, getTriggeredQuestions } from "@/domain/intake/questionRegistry";
import { SurvivorSituation, Unknownable } from "@/domain/intake/types";
import { ArrowLeft, ArrowRight, Compass, HelpCircle, Check, Sparkles } from "lucide-react";

interface ContextQuestionsStepProps {
  selectedNeedIds: string[];
  situation: SurvivorSituation;
  questionAnswers?: Record<string, any>;
  onUpdateField: (field: keyof SurvivorSituation, value: Unknownable<any>) => void;
  onBack: () => void;
  onContinue: () => void;
}

export function ContextQuestionsStep({
  selectedNeedIds,
  situation,
  questionAnswers = {},
  onUpdateField,
  onBack,
  onContinue,
}: ContextQuestionsStepProps) {
  const triggeredQuestions = getTriggeredQuestions(selectedNeedIds);

  return (
    <div className="space-y-8 animate-fadeIn font-sans select-none">
      {/* Step Header */}
      <div className="border-b border-[#D9D1C4] pb-5">
        <div className="flex items-center gap-2 text-[#971F26] mb-1">
          <Compass className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            STEP 3 OF 3 · QUALIFICATION DETAILS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          A few details to separate workable routes from dead ends
        </h2>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed">
          These questions only cover the problems you selected. If you don't know an answer or aren't ready to answer, choose <strong>"I'm Not Sure"</strong>. We will never assume "no" for skipped or uncertain facts.
        </p>
      </div>

      {/* Questions List */}
      {triggeredQuestions.length === 0 ? (
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-8 text-center space-y-3 bg-grid-atlas">
          <Sparkles className="w-8 h-8 text-[#971F26] mx-auto" />
          <h3 className="text-lg font-serif font-bold text-[#1C1D1D]">
            No additional details needed for your selection
          </h3>
          <p className="text-xs text-stone-700 max-w-md mx-auto">
            Your selected problem areas do not require specialized program questionnaires. Proceed to review your answers.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {triggeredQuestions.map((q: IntakeQuestion, idx: number) => {
            const rawAnswer = questionAnswers[q.survivorSituationField];
            const currentValue = rawAnswer !== undefined ? rawAnswer : situation[q.survivorSituationField];

            return (
              <div
                key={q.id}
                className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-sm bg-grid-atlas space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#971F26] font-bold">
                      QUESTION {idx + 1} OF {triggeredQuestions.length}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#1C1D1D] leading-snug">
                    {q.plainLanguagePrompt}
                  </h3>

                  {q.subtext && (
                    <p className="text-xs text-stone-700 mt-1 font-sans">
                      {q.subtext}
                    </p>
                  )}

                  {/* Cross-Question Contextual Cues */}
                  {q.id === "work-industry-select" && selectedNeedIds.includes("work-arts-entertainment") && (
                    <div className="text-[11px] font-mono text-[#971F26] bg-[#FDF2F2] border border-[#971F26]/30 px-2.5 py-1 rounded inline-flex items-center gap-1.5 mt-1.5 font-medium">
                      <span>✦</span>
                      <span>Earlier you mentioned performing arts / creative work support</span>
                    </div>
                  )}

                  {q.id === "work-industry-select" && selectedNeedIds.includes("work-food-beverage") && (
                    <div className="text-[11px] font-mono text-[#971F26] bg-[#FDF2F2] border border-[#971F26]/30 px-2.5 py-1 rounded inline-flex items-center gap-1.5 mt-1.5 font-medium">
                      <span>✦</span>
                      <span>Earlier you mentioned food & beverage hospitality support</span>
                    </div>
                  )}

                  <div className="mt-2 text-[11px] text-stone-600 font-sans flex items-start gap-1.5 bg-[#F5F1E8] p-2.5 rounded border border-[#D9D1C4]">
                    <HelpCircle className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
                    <span>
                      <strong>Why this matters:</strong> {q.whyWeAsk}
                    </span>
                  </div>
                </div>

                {/* Answer Options */}
                {q.answerType === "YES_NO_UNKNOWN" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {/* YES */}
                    <button
                      type="button"
                      onClick={() => onUpdateField(q.survivorSituationField, true)}
                      className={`p-3 rounded-lg border-2 text-center text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        currentValue === true
                          ? "bg-[#2D5A3D] text-white border-[#2D5A3D] shadow-xs"
                          : "bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D] hover:bg-stone-200"
                      }`}
                    >
                      {currentValue === true && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      <span>YES</span>
                    </button>

                    {/* NO */}
                    <button
                      type="button"
                      onClick={() => onUpdateField(q.survivorSituationField, false)}
                      className={`p-3 rounded-lg border-2 text-center text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        currentValue === false
                          ? "bg-[#971F26] text-white border-[#971F26] shadow-xs"
                          : "bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D] hover:bg-stone-200"
                      }`}
                    >
                      {currentValue === false && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      <span>NO</span>
                    </button>

                    {/* NOT SURE / UNKNOWN */}
                    <button
                      type="button"
                      onClick={() => onUpdateField(q.survivorSituationField, "UNKNOWN")}
                      className={`p-3 rounded-lg border-2 text-center text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        currentValue === "UNKNOWN" || currentValue === undefined
                          ? "bg-[#1C1D1D] text-white border-[#1C1D1D] shadow-xs"
                          : "bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D] hover:bg-stone-200"
                      }`}
                    >
                      {(currentValue === "UNKNOWN" || currentValue === undefined) && (
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      )}
                      <span>I'M NOT SURE</span>
                    </button>
                  </div>
                )}

                {/* SELECT TYPE */}
                {q.answerType === "SELECT_UNKNOWN" && q.options && (
                  <div className="space-y-2 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = currentValue === opt.value;
                      return (
                        <button
                          key={String(opt.value)}
                          type="button"
                          onClick={() => onUpdateField(q.survivorSituationField, opt.value)}
                          className={`w-full p-3 rounded-lg border-2 text-left text-xs transition-all flex items-start gap-3 cursor-pointer ${
                            isSelected
                              ? "bg-[#FDF2F2] border-[#971F26] text-[#1C1D1D] font-bold shadow-xs ring-1 ring-[#971F26]"
                              : "bg-[#F5F1E8] border-[#1C1D1D] text-stone-800 hover:bg-stone-200"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-[#971F26] border-[#971F26]" : "border-[#1C1D1D] bg-[#EEE8DD]"
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <div className="font-medium text-[#1C1D1D]">{opt.label}</div>
                            {opt.subtext && (
                              <div className="text-[11px] text-stone-600 font-normal">{opt.subtext}</div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Action Footer */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#D9D1C4]">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 rounded-lg border-2 border-[#1C1D1D] bg-[#EEE8DD] hover:bg-stone-200 text-[#1C1D1D] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Location</span>
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="px-6 py-3 rounded-lg border-2 border-[#1C1D1D] bg-[#971F26] hover:bg-[#80191F] text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <span>Review What You Told Us</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
