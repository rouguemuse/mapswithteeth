"use client";

import React from "react";
import { INDUSTRY_OPTIONS } from "@/data/industries";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { ResourceIntakeData } from "@/types/intake";
import { WhyAskingTooltip } from "./WhyAskingTooltip";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function Step2Work({
  formData,
  setFormData,
  onNext,
  onBack,
}: {
  formData: ResourceIntakeData;
  setFormData: React.Dispatch<React.SetStateAction<ResourceIntakeData>>;
  onNext: () => void;
  onBack: () => void;
}) {
  const toggleRecentIndustry = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      recentIndustries: prev.recentIndustries.includes(id)
        ? prev.recentIndustries.filter((i) => i !== id)
        : [...prev.recentIndustries, id],
    }));
  };

  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
            What State are you in?
            <WhyAskingTooltip explanation="Texas is our deep research pilot region; all other states search our location-independent library." />
          </label>
          <select
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
          >
            <option value="TX">Texas (Central TX Pilot & Gulf Coast)</option>
            <option value="US">Other State / Nationwide Search</option>
          </select>
        </div>

        {formData.state === "TX" && (
          <div>
            <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
              Texas County (if comfortable sharing):
            </label>
            <select
              value={formData.county || "Travis"}
              onChange={(e) => setFormData({ ...formData, county: e.target.value })}
              className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
            >
              {ALL_TEXAS_COUNTIES.map((c) => (
                <option key={c.slug} value={c.name.replace(" County", "")}>
                  {c.name} {c.isPilotRegion ? "• Central TX Pilot" : "• Gulf Coast Deep Dive"}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
          What do you do for work right now?
          <WhyAskingTooltip explanation="Specific industries (restaurant, hospitality, music, crafts, nursing, trades) have dedicated private benevolence funds that pay emergency rent and bills directly." />
        </label>
        <select
          value={formData.currentIndustry || "restaurant-food-service"}
          onChange={(e) => setFormData({ ...formData, currentIndustry: e.target.value })}
          className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
        >
          {INDUSTRY_OPTIONS.map((ind) => (
            <option key={ind.id} value={ind.id}>
              {ind.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
          Have you worked in any other industries in the past 12 months?
          <WhyAskingTooltip explanation="Many industry hardship funds cover individuals who worked in the industry within the past 6 to 12 months even if currently unemployed." />
        </label>
        <p className="text-[11px] text-stone-600 mb-2 font-mono">Select any recent fields:</p>
        <div className="grid gap-1.5 sm:grid-cols-2 max-h-36 overflow-y-auto pr-1">
          {INDUSTRY_OPTIONS.slice(0, 10).map((ind) => {
            const selected = formData.recentIndustries.includes(ind.id);
            return (
              <button
                type="button"
                key={ind.id}
                onClick={() => toggleRecentIndustry(ind.id)}
                className={`px-2.5 py-1.5 rounded text-left text-xs border transition-all ${
                  selected
                    ? "bg-red-50 border-brand-oxblood text-brand-charcoal font-semibold shadow-sm"
                    : "bg-brand-ivory border-stone-300 text-stone-700 hover:border-stone-400"
                }`}
              >
                {ind.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 pt-2 border-t border-brand-sand">
        <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer bg-brand-ivory p-2.5 rounded border border-stone-300 shadow-sm">
          <input
            type="checkbox"
            checked={formData.isUnionMember || false}
            onChange={(e) => setFormData({ ...formData, isUnionMember: e.target.checked })}
            className="rounded bg-brand-paper border-stone-300 text-brand-oxblood focus:ring-0"
          />
          <span>Union member (active or recent)</span>
          <WhyAskingTooltip explanation="Union benevolent funds provide crisis assistance to members." />
        </label>

        <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer bg-brand-ivory p-2.5 rounded border border-stone-300 shadow-sm">
          <input
            type="checkbox"
            checked={formData.hasProfessionalLicense || false}
            onChange={(e) => setFormData({ ...formData, hasProfessionalLicense: e.target.checked })}
            className="rounded bg-brand-paper border-stone-300 text-brand-oxblood focus:ring-0"
          />
          <span>Hold a professional license/cert</span>
          <WhyAskingTooltip explanation="Professional associations maintain relief grants for certified practitioners." />
        </label>
      </div>

      <div className="flex justify-between pt-4 border-t border-brand-sand font-mono">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-brand-paper hover:bg-stone-200 border border-stone-300 text-brand-charcoal rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="px-5 py-2.5 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-colors"
        >
          <span>Next: Household & Pets</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
