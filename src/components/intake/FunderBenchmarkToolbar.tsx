"use client";

import React, { useState } from "react";
import {
  FunderBenchmarkScenario,
  FUNDER_BENCHMARK_SCENARIOS,
} from "@/data/scenarios/funderBenchmarks";
import {
  Sparkles,
  Scale,
  Zap,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Building2,
  Coins,
  ArrowRight,
  Info,
} from "lucide-react";

interface FunderBenchmarkToolbarProps {
  onLoadScenario: (scenario: FunderBenchmarkScenario) => void;
  activeScenarioId?: string | null;
}

export function FunderBenchmarkToolbar({
  onLoadScenario,
  activeScenarioId,
}: FunderBenchmarkToolbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    FUNDER_BENCHMARK_SCENARIOS[0].id
  );

  const currentScenario =
    FUNDER_BENCHMARK_SCENARIOS.find((s) => s.id === selectedScenarioId) ||
    FUNDER_BENCHMARK_SCENARIOS[0];

  const handleRun = (sc: FunderBenchmarkScenario) => {
    setIsOpen(false);
    onLoadScenario(sc);
  };

  return (
    <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl overflow-hidden shadow-sm font-mono text-xs mb-6 select-none transition-all">
      {/* Header Bar */}
      <div className="px-4 py-3 bg-[#E5DFD3] border-b border-[#D9D1C4] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-[#971F26] text-white rounded">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#1C1D1D] uppercase tracking-wider text-[11px] sm:text-xs">
                Funder & Partner Benchmark Sandbox
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 bg-[#26221F] text-[#F5F1E8] text-[9.5px] rounded uppercase font-bold tracking-widest">
                1-Click Demonstrator
              </span>
            </div>
            <p className="text-[10px] text-stone-600 font-sans hidden sm:block">
              Test realistic Central Texas cases to evaluate deterministic routing & statutory citations.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isOpen && (
            <button
              type="button"
              onClick={() => handleRun(currentScenario)}
              className="px-2.5 py-1 bg-[#971F26] hover:bg-[#80191F] text-white rounded text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-2xs cursor-pointer transition-colors"
            >
              <Zap className="w-3 h-3" />
              <span>Run Scenario 01</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 py-1 bg-[#F5F1E8] border border-[#D9D1C4] hover:bg-white text-stone-800 rounded text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
            aria-expanded={isOpen}
          >
            <span>{isOpen ? "Hide Scenarios" : "Explore All (4)"}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded Scenario Panel */}
      {isOpen && (
        <div className="p-4 sm:p-5 space-y-4 bg-[#EEE8DD]">
          {/* Scenario Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {FUNDER_BENCHMARK_SCENARIOS.map((sc) => {
              const isSelected = sc.id === selectedScenarioId;
              const isActiveMatch = sc.id === activeScenarioId;

              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setSelectedScenarioId(sc.id)}
                  className={`p-3 text-left rounded-lg border-2 transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                    isSelected
                      ? "bg-[#FAF7F2] border-[#971F26] shadow-xs"
                      : "bg-[#F5F1E8] border-[#D9D1C4] hover:border-stone-500 hover:bg-[#FAF7F2]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-bold text-[#971F26]">
                        SCENARIO {sc.number}
                      </span>
                      {isActiveMatch && (
                        <span className="text-[9px] bg-[#2D5A3D] text-white px-1.5 py-0.2 rounded font-bold">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div className="font-serif font-bold text-xs text-[#1C1D1D] line-clamp-1">
                      {sc.badge}
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-600 font-sans line-clamp-2">
                    {sc.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Selected Scenario Detail Card */}
          <div className="p-4 bg-[#FAF7F2] border border-[#D9D1C4] rounded-lg space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#971F26] tracking-wider">
                  SCENARIO {currentScenario.number} · {currentScenario.badge}
                </span>
                <h4 className="font-serif font-bold text-sm text-[#1C1D1D]">
                  {currentScenario.title}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => handleRun(currentScenario)}
                className="px-4 py-2 bg-[#971F26] hover:bg-[#80191F] text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs cursor-pointer transition-all active:scale-95"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Run Scenario {currentScenario.number} Now</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>

            {/* Narrative & Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone-800 font-sans text-xs">
              <div className="space-y-1 p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4]/80">
                <span className="font-mono font-bold text-[10px] uppercase text-[#971F26] block">
                  Survivor Profile & Constraints
                </span>
                <p className="text-xs leading-relaxed">{currentScenario.shortSummary}</p>
                <div className="pt-2 flex flex-wrap gap-1 font-mono text-[10px]">
                  <span className="px-1.5 py-0.5 bg-[#EEE8DD] rounded text-stone-700">
                    Jurisdiction: {currentScenario.location.county} Co., TX
                  </span>
                  <span className="px-1.5 py-0.5 bg-[#EEE8DD] rounded text-stone-700">
                    Needs: {currentScenario.selectedNeedIds.length} categories
                  </span>
                </div>
              </div>

              <div className="space-y-1 p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4]/80">
                <span className="font-mono font-bold text-[10px] uppercase text-[#2D5A3D] block flex items-center gap-1">
                  <Scale className="w-3 h-3" />
                  <span>Institutional Funder Objective</span>
                </span>
                <p className="text-xs leading-relaxed text-stone-800">
                  {currentScenario.funderObjective}
                </p>
                <div className="pt-2 flex flex-wrap gap-1 font-mono text-[10px]">
                  <span className="px-1.5 py-0.5 bg-[#E8F3EB] text-[#2D5A3D] font-bold rounded">
                    Gap Fund Estimate: {currentScenario.gapFundEligibleAmount}
                  </span>
                </div>
              </div>
            </div>

            {/* Expected Matched Highlights & Tested Statutes */}
            <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 font-mono">
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#971F26]" />
                <span>
                  <strong>Statutory Authority Tested:</strong>{" "}
                  {currentScenario.statutoryCitationsTested.join(" · ")}
                </span>
              </div>
              <span className="text-stone-500 italic font-sans text-[10.5px]">
                Zero PII stored · Evaluated purely in-memory
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
