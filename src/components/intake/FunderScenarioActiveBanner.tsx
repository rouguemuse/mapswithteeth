"use client";

import React from "react";
import { FunderBenchmarkScenario } from "@/data/scenarios/funderBenchmarks";
import {
  Sparkles,
  Scale,
  FileText,
  RotateCcw,
  ArrowLeft,
  ChevronRight,
  Info,
} from "lucide-react";

interface FunderScenarioActiveBannerProps {
  scenario: FunderBenchmarkScenario;
  onEditAnswers: () => void;
  onReset: () => void;
  onSwitchScenario?: () => void;
}

export function FunderScenarioActiveBanner({
  scenario,
  onEditAnswers,
  onReset,
  onSwitchScenario,
}: FunderScenarioActiveBannerProps) {
  return (
    <div className="p-4 sm:p-5 bg-[#FAF7F2] border-2 border-[#971F26] rounded-xl space-y-3 font-mono text-xs shadow-sm mb-6 animate-in fade-in duration-200">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-[#971F26] text-white font-bold rounded text-[10px] uppercase tracking-wider">
            SCENARIO {scenario.number} ACTIVE
          </span>
          <span className="font-serif font-bold text-sm text-[#1C1D1D]">
            {scenario.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onEditAnswers}
            className="px-2.5 py-1 bg-[#EEE8DD] hover:bg-stone-200 border border-[#D9D1C4] text-stone-900 rounded text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Inspect Intake Answers</span>
          </button>
          <button
            type="button"
            onClick={onReset}
            className="px-2.5 py-1 bg-[#EEE8DD] hover:bg-stone-200 border border-[#D9D1C4] text-stone-700 hover:text-red-900 rounded text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear Scenario</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-stone-800 font-sans text-xs">
        <div className="p-2.5 bg-[#F5F1E8] rounded border border-[#D9D1C4]/80">
          <span className="font-mono font-bold text-[10px] uppercase text-[#971F26] block">
            Cohort Profile
          </span>
          <p className="text-xs text-stone-700 leading-snug mt-0.5">{scenario.shortSummary}</p>
        </div>

        <div className="p-2.5 bg-[#F5F1E8] rounded border border-[#D9D1C4]/80">
          <span className="font-mono font-bold text-[10px] uppercase text-[#2D5A3D] block flex items-center gap-1">
            <Scale className="w-3 h-3" />
            <span>Funder Objective Tested</span>
          </span>
          <p className="text-xs text-stone-700 leading-snug mt-0.5">{scenario.funderObjective}</p>
        </div>

        <div className="p-2.5 bg-[#F5F1E8] rounded border border-[#D9D1C4]/80 flex flex-col justify-between">
          <div>
            <span className="font-mono font-bold text-[10px] uppercase text-stone-600 block">
              Tested Authority & Gap Fund
            </span>
            <p className="text-xs font-mono font-bold text-[#1C1D1D] mt-0.5">
              {scenario.statutoryCitationsTested.join(" · ")}
            </p>
          </div>
          <div className="pt-1.5 border-t border-[#D9D1C4]/60 flex items-center justify-between text-[11px] font-mono">
            <span className="text-stone-600">Gap Fund Slice:</span>
            <span className="text-[#971F26] font-bold">{scenario.gapFundEligibleAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
