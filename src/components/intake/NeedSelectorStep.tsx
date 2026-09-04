"use client";

import React, { useState } from "react";
import { INTAKE_CATEGORY_GROUPS, IntakeProblemNeed } from "@/domain/intake/needRegistry";
import {
  Check,
  Compass,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Folder,
  FolderOpen
} from "lucide-react";

interface NeedSelectorStepProps {
  selectedNeedIds: string[];
  onToggleNeed: (needId: string) => void;
  onContinue: () => void;
}

export function NeedSelectorStep({
  selectedNeedIds,
  onToggleNeed,
  onContinue,
}: NeedSelectorStepProps) {
  const totalSelected = selectedNeedIds.length;

  // Track expanded category accordions (initially all collapsed for compact overview)
  const [openCategoryIds, setOpenCategoryIds] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategoryIds((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleExpandAll = () => {
    setOpenCategoryIds(INTAKE_CATEGORY_GROUPS.map((g) => g.id));
  };

  const handleCollapseAll = () => {
    setOpenCategoryIds([]);
  };

  return (
    <div className="space-y-6 animate-fadeIn font-sans select-none">
      {/* Step Header */}
      <div className="border-b border-[#D9D1C4] pb-5">
        <div className="flex items-center gap-2 text-[#971F26] mb-1.5">
          <Compass className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            STEP 1 OF 3 · PROBLEM-FIRST INTAKE
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          What's getting in the way right now?
        </h2>
        <p className="text-sm sm:text-base text-stone-700 mt-2 max-w-2xl leading-relaxed">
          Pick the things creating the biggest obstacle right now. You don't have to figure out which program fits — that's our job.
        </p>

        {/* Global Expand / Collapse Controls */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#D9D1C4]/60 text-xs font-mono">
          <span className="text-stone-600">
            {totalSelected > 0 ? (
              <strong className="text-[#971F26]">
                {totalSelected} problem area{totalSelected > 1 ? "s" : ""} selected across categories
              </strong>
            ) : (
              <span>10 problem categories · Select to open options</span>
            )}
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleExpandAll}
              className="text-stone-600 hover:text-[#1C1D1D] underline cursor-pointer"
            >
              Expand all
            </button>
            <span className="text-stone-400">·</span>
            <button
              type="button"
              onClick={handleCollapseAll}
              className="text-stone-600 hover:text-[#1C1D1D] underline cursor-pointer"
            >
              Collapse all
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Categories List */}
      <div className="space-y-3">
        {INTAKE_CATEGORY_GROUPS.map((group, index) => {
          const isOpen = openCategoryIds.includes(group.id);
          const selectedInGroup = group.needs.filter((n) =>
            selectedNeedIds.includes(n.id)
          ).length;
          const indexNotation = String(index + 1).padStart(2, "0");

          return (
            <div
              key={group.id}
              className="border border-[#D9D1C4] rounded-lg overflow-hidden bg-[#EEE8DD]/40 transition-colors"
            >
              {/* Category Header Bar (Accordion Trigger) */}
              <button
                type="button"
                onClick={() => toggleCategory(group.id)}
                aria-expanded={isOpen}
                className={`w-full p-4 sm:p-4.5 flex items-center justify-between gap-3 text-left transition-all cursor-pointer ${
                  isOpen
                    ? "bg-[#EEE8DD] border-b border-[#D9D1C4]"
                    : "bg-[#F5F1E8] hover:bg-[#EEE8DD]/80"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="font-mono text-xs font-bold text-stone-500 bg-[#E5DEC9] px-2 py-0.5 rounded border border-[#D9D1C4] shrink-0">
                    {indexNotation}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1D1D] truncate">
                        {group.title}
                      </h3>
                      {selectedInGroup > 0 && (
                        <span className="px-2 py-0.5 bg-[#FDF2F2] border border-[#971F26] text-[#971F26] text-[11px] font-mono font-bold uppercase rounded">
                          ✓ {selectedInGroup} Selected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-600 font-sans mt-0.5 truncate sm:whitespace-normal">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-stone-600">
                  <span className="text-xs font-mono font-medium hidden sm:inline">
                    {isOpen ? "Hide options" : `${group.needs.length} options`}
                  </span>
                  <div className="w-6 h-6 rounded flex items-center justify-center bg-[#E5DEC9] border border-[#D9D1C4]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#1C1D1D]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#1C1D1D]" />
                    )}
                  </div>
                </div>
              </button>

              {/* Collapsible Needs Grid */}
              {isOpen && (
                <div className="p-4 sm:p-5 bg-[#F8F5EE] border-t-0 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {group.needs.map((need: IntakeProblemNeed) => {
                      const isSelected = selectedNeedIds.includes(need.id);

                      return (
                        <button
                          key={need.id}
                          type="button"
                          onClick={() => onToggleNeed(need.id)}
                          aria-pressed={isSelected}
                          className={`p-4 rounded-lg text-left transition-all flex items-start gap-3.5 cursor-pointer relative ${
                            isSelected
                              ? "bg-[#FDFBF7] border-l-4 border-l-[#971F26] border-t border-r border-b border-[#1C1D1D] shadow-xs"
                              : "bg-[#FBF9F4] border border-[#D9D1C4] hover:border-[#1C1D1D] hover:bg-white"
                          }`}
                        >
                          {/* Checkbox indicator */}
                          <div
                            className={`w-5 h-5 rounded mt-0.5 border-2 flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? "bg-[#971F26] border-[#971F26] text-white"
                                : "border-stone-400 bg-white"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>

                          {/* Problem Label & Subtext */}
                          <div className="space-y-1 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div
                                className={`text-xs sm:text-sm leading-snug ${
                                  isSelected
                                    ? "font-bold text-[#1C1D1D]"
                                    : "font-semibold text-[#1C1D1D]"
                                }`}
                              >
                                {need.plainLanguageLabel}
                              </div>
                              {isSelected && (
                                <span className="text-[10px] font-mono font-bold text-[#971F26] shrink-0 uppercase tracking-wider">
                                  Selected
                                </span>
                              )}
                            </div>

                            {need.description && (
                              <div className="text-xs text-stone-600 font-sans leading-relaxed">
                                {need.description}
                              </div>
                            )}

                            {need.isKnownCatalogGap && (
                              <div className="text-[11px] font-mono text-[#92400E] bg-[#FEF3C7] border border-[#D97706]/40 px-2 py-0.5 rounded inline-block mt-1">
                                Identified catalog gap · Adjacent options available
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#D9D1C4]">
        <div className="text-xs sm:text-sm font-mono text-stone-700">
          {totalSelected === 0 ? (
            <span className="italic text-stone-500">
              Select at least one problem to continue
            </span>
          ) : (
            <span className="font-bold text-[#1C1D1D]">
              ✓ {totalSelected} problem area{totalSelected > 1 ? "s" : ""} selected
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onContinue}
          disabled={totalSelected === 0}
          className={`w-full sm:w-auto px-7 py-3 rounded-lg border-2 border-[#1C1D1D] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
            totalSelected > 0
              ? "bg-[#971F26] text-white hover:bg-[#80191F] cursor-pointer"
              : "bg-stone-300 text-stone-500 border-stone-400 cursor-not-allowed"
          }`}
        >
          <span>Continue to Location</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
