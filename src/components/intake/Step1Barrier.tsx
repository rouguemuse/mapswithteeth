"use client";

import React from "react";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { ResourceIntakeData, AmountScale, PartialHelpImpact } from "@/types/intake";
import { WhyAskingTooltip } from "./WhyAskingTooltip";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Step1Barrier({
  formData,
  setFormData,
  onNext,
}: {
  formData: ResourceIntakeData;
  setFormData: React.Dispatch<React.SetStateAction<ResourceIntakeData>>;
  onNext: () => void;
}) {
  const toggleBarrier = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      primaryBarriers: prev.primaryBarriers.includes(id)
        ? prev.primaryBarriers.filter((b) => b !== id)
        : [...prev.primaryBarriers, id],
    }));
  };

  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div>
        <label className="block text-sm font-bold text-brand-charcoal mb-1">
          What specific barrier are you trying to solve right now?
          <WhyAskingTooltip explanation="We match resources directly to your immediate obstacle (gas, deposit, phone, lease break) rather than generic service categories." />
        </label>
        <p className="text-xs text-stone-600 mb-3 font-mono">Select all that apply:</p>
        <div className="grid gap-2 sm:grid-cols-2 max-h-64 overflow-y-auto pr-1">
          {BARRIER_CATEGORIES.map((b) => {
            const selected = formData.primaryBarriers.includes(b.id);
            return (
              <button
                type="button"
                key={b.id}
                onClick={() => toggleBarrier(b.id)}
                className={`p-3 rounded-lg border text-left text-xs transition-all flex items-start gap-2 ${
                  selected
                    ? "bg-red-50 border-brand-oxblood text-brand-charcoal font-medium shadow-sm"
                    : "bg-brand-ivory border-stone-300 text-stone-700 hover:border-stone-400 hover:text-brand-charcoal"
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded mt-0.5 border flex items-center justify-center shrink-0 ${
                    selected ? "bg-brand-oxblood border-brand-oxblood" : "border-stone-400"
                  }`}
                >
                  {selected && <CheckCircle2 className="w-3 h-3 text-white" />}
                </div>
                <span>{b.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
          What would solving this look like? (Short sentence)
        </label>
        <input
          type="text"
          placeholder="e.g. $75 for gas to reach family / $600 deposit for apartment / safe boarding for my dog"
          value={formData.solvingNarrative || ""}
          onChange={(e) => setFormData({ ...formData, solvingNarrative: e.target.value })}
          className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
            About how much money would solve this particular problem?
            <WhyAskingTooltip explanation="A $50 gas shortfall and a $1,500 rental deposit require completely different matching pathways." />
          </label>
          <select
            value={formData.amountScale || "251_500"}
            onChange={(e) => setFormData({ ...formData, amountScale: e.target.value as AmountScale })}
            className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
          >
            <option value="UNDER_25">Under $25 (bus pass / prescription)</option>
            <option value="25_50">$25–$50 (gas voucher / immediate groceries)</option>
            <option value="51_100">$51–$100 (gas tank / small locksmith fee)</option>
            <option value="101_250">$101–$250 (utility deposit / urgent repair)</option>
            <option value="251_500">$251–$500 (emergency micro-grant / electric bill)</option>
            <option value="501_1000">$501–$1,000 (apartment deposit / car repair)</option>
            <option value="1001_2500">$1,001–$2,500 (first month rent / moving costs)</option>
            <option value="OVER_2500">More than $2,500</option>
            <option value="UNSURE">Unsure / Non-monetary legal or tech barrier</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
            Would partial help still make a difference?
            <WhyAskingTooltip explanation="Many solutions work by stacking smaller funds (e.g. $300 industry grant + deposit waiver + $100 church check)." />
          </label>
          <select
            value={formData.partialHelpImpact || "YES"}
            onChange={(e) => setFormData({ ...formData, partialHelpImpact: e.target.value as PartialHelpImpact })}
            className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
          >
            <option value="YES">Yes, partial help is very useful</option>
            <option value="MAYBE">Maybe, depending on the remaining gap</option>
            <option value="NO">No, must be the full amount to proceed</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-brand-sand">
        <button
          type="button"
          onClick={onNext}
          className="px-5 py-2.5 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2 shadow-sm transition-colors"
        >
          <span>Next: Work & Location Background</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
