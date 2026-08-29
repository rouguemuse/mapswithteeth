"use client";

import React from "react";
import { ResourceIntakeData } from "@/types/intake";
import { WhyAskingTooltip } from "./WhyAskingTooltip";
import { Users, Dog, Car, ArrowRight, ArrowLeft } from "lucide-react";

export function Step3Household({
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
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      {/* Children / School */}
      <div className="bg-brand-ivory p-4 rounded-lg border border-stone-300 space-y-3 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5 font-mono">
          <Users className="w-3.5 h-3.5 text-brand-oxblood" />
          <span>Family & Household Connections</span>
        </h3>

        <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.hasDependentChildren || false}
            onChange={(e) => setFormData({ ...formData, hasDependentChildren: e.target.checked })}
            className="rounded bg-brand-paper border-stone-300 text-brand-oxblood focus:ring-0"
          />
          <span>I have dependent children living with me</span>
          <WhyAskingTooltip explanation="Unlocks parent crisis grants such as CORE Gives and family stabilization foundations." />
        </label>

        {formData.hasDependentChildren && (
          <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer ml-5">
            <input
              type="checkbox"
              checked={formData.childInPublicSchool || false}
              onChange={(e) => setFormData({ ...formData, childInPublicSchool: e.target.checked })}
              className="rounded bg-brand-paper border-stone-300 text-brand-oxblood focus:ring-0"
            />
            <span>Enrolled in public school</span>
            <WhyAskingTooltip explanation="School district family resource offices and McKinney-Vento evaluation can provide transportation passes, supplies, and emergency stability funds." />
          </label>
        )}
      </div>

      {/* Pets */}
      <div className="bg-brand-ivory p-4 rounded-lg border border-stone-300 space-y-3 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5 font-mono">
          <Dog className="w-3.5 h-3.5 text-amber-700" />
          <span>Pets & Animals</span>
        </h3>

        <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.hasAnimal || false}
            onChange={(e) => setFormData({ ...formData, hasAnimal: e.target.checked })}
            className="rounded bg-brand-paper border-stone-300 text-brand-oxblood focus:ring-0"
          />
          <span>I have a pet (dog, cat, or other animal) needing safe care</span>
          <WhyAskingTooltip explanation="Organizations like RedRover Relief grant direct funding to pay for veterinary exams and safe boarding kennels while you relocate." />
        </label>
      </div>

      {/* Transportation */}
      <div className="bg-brand-ivory p-4 rounded-lg border border-stone-300 space-y-3 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-1.5 font-mono">
          <Car className="w-3.5 h-3.5 text-brand-oxblood" />
          <span>Transportation Access</span>
        </h3>

        <div>
          <label className="block text-[11px] text-stone-600 mb-1 font-mono">
            What is your current transportation situation?
          </label>
          <select
            value={formData.transportationStatus || "OWN_VEHICLE"}
            onChange={(e) => setFormData({ ...formData, transportationStatus: e.target.value as any })}
            className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
          >
            <option value="OWN_VEHICLE">I have my own working vehicle (need gas/insurance)</option>
            <option value="SHARED_VEHICLE">Vehicle is shared with partner or controlled</option>
            <option value="VEHICLE_UNAVAILABLE">Vehicle is broken down or currently unavailable</option>
            <option value="PUBLIC_TRANSIT">Relying on public transit / bus passes</option>
            <option value="NO_RELIABLE_TRANSPORT">No reliable transportation</option>
          </select>
        </div>
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
          <span>Next: What Has Already Failed?</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
