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
    <div className="space-y-6 animate-fadeIn">
      {/* Children / School */}
      <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-brand-ruby" />
          <span>Family & Household Connections</span>
        </h3>

        <label className="flex items-center gap-2 text-xs text-stone-300 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.hasDependentChildren || false}
            onChange={(e) => setFormData({ ...formData, hasDependentChildren: e.target.checked })}
            className="rounded bg-stone-800 border-stone-700 text-brand-ruby"
          />
          <span>I have dependent children living with me</span>
          <WhyAskingTooltip explanation="Unlocks parent crisis grants such as CORE Gives and family stabilization foundations." />
        </label>

        {formData.hasDependentChildren && (
          <label className="flex items-center gap-2 text-xs text-stone-300 cursor-pointer ml-5">
            <input
              type="checkbox"
              checked={formData.childInPublicSchool || false}
              onChange={(e) => setFormData({ ...formData, childInPublicSchool: e.target.checked })}
              className="rounded bg-stone-800 border-stone-700 text-brand-ruby"
            />
            <span>Enrolled in public school</span>
            <WhyAskingTooltip explanation="School district family resource offices and McKinney-Vento evaluation can provide transportation passes, supplies, and emergency stability funds." />
          </label>
        )}
      </div>

      {/* Pets */}
      <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
          <Dog className="w-3.5 h-3.5 text-amber-400" />
          <span>Pets & Animals</span>
        </h3>

        <label className="flex items-center gap-2 text-xs text-stone-300 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.hasAnimal || false}
            onChange={(e) => setFormData({ ...formData, hasAnimal: e.target.checked })}
            className="rounded bg-stone-800 border-stone-700 text-brand-ruby"
          />
          <span>I have a pet (dog, cat, or other animal) needing safe care</span>
          <WhyAskingTooltip explanation="Organizations like RedRover Relief grant direct funding to pay for veterinary exams and safe boarding kennels while you relocate." />
        </label>
      </div>

      {/* Transportation */}
      <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
          <Car className="w-3.5 h-3.5 text-brand-ruby" />
          <span>Transportation Access</span>
        </h3>

        <div>
          <label className="block text-[11px] text-stone-400 mb-1">
            What is your current transportation situation?
          </label>
          <select
            value={formData.transportationStatus || "OWN_VEHICLE"}
            onChange={(e) => setFormData({ ...formData, transportationStatus: e.target.value as any })}
            className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-xs text-white"
          >
            <option value="OWN_VEHICLE">I have my own working vehicle (need gas/insurance)</option>
            <option value="SHARED_VEHICLE">Vehicle is shared with partner or controlled</option>
            <option value="VEHICLE_UNAVAILABLE">Vehicle is broken down or currently unavailable</option>
            <option value="PUBLIC_TRANSIT">Relying on public transit / bus passes</option>
            <option value="NO_RELIABLE_TRANSPORT">No reliable transportation</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t border-stone-800">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="px-5 py-2.5 bg-brand-ruby hover:bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-md transition-colors"
        >
          <span>Next: What Has Already Failed?</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
