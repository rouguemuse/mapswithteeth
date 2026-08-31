"use client";

import React from "react";
import { BARRIER_CATEGORIES } from "@/data/taxonomy/barriers";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { ResourceIntakeData, AmountScale, FailedChannel } from "@/types/intake";
import { WhyAskingTooltip } from "./WhyAskingTooltip";
import { CheckCircle2, ArrowRight, MapPin, AlertTriangle, ShieldCheck } from "lucide-react";

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

  const toggleFailedChannel = (channel: FailedChannel) => {
    setFormData((prev) => ({
      ...prev,
      failedChannels: prev.failedChannels.includes(channel)
        ? prev.failedChannels.filter((c) => c !== channel)
        : [...prev.failedChannels, channel],
    }));
  };

  const failedOptions: { id: FailedChannel; label: string }[] = [
    { id: "211", label: "211 / Municipal Hotline (Long wait / no funding)" },
    { id: "DV_SHELTER", label: "Local DV Shelter (Full / waitlist / pet restrictions)" },
    { id: "LEGAL_AID", label: "Legal Aid (Ineligible / no capacity)" },
    { id: "HOUSING_AUTHORITY", label: "Housing Authority / Section 8 (Closed list)" },
    { id: "POLICE", label: "Police / Incident Requirement (Cannot/Will not report)" },
    { id: "CHURCH", label: "Faith Groups / Charities (Exhausted / outside zone)" },
  ];

  return (
    <div className="space-y-6 animate-fadeIn font-sans select-none">
      {/* 1. Immediate Barrier */}
      <div>
        <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase tracking-wider">
          1. What specific barrier are you trying to solve right now?
          <WhyAskingTooltip explanation="We match resources directly to your immediate obstacle (gas, deposit, phone, lease break, pet safe boarding) rather than generic agency categories." />
        </label>
        <p className="text-[11px] text-stone-600 mb-3 font-mono">Select all immediate obstacles:</p>
        <div className="grid gap-2 sm:grid-cols-2 max-h-56 overflow-y-auto pr-1">
          {BARRIER_CATEGORIES.map((b) => {
            const selected = formData.primaryBarriers.includes(b.id);
            return (
              <button
                type="button"
                key={b.id}
                onClick={() => toggleBarrier(b.id)}
                className={`p-2.5 rounded-lg border-2 text-left text-xs transition-all flex items-start gap-2 ${
                  selected
                    ? "bg-[#FDF2F2] border-[#971F26] text-[#1C1D1D] font-bold shadow-xs"
                    : "bg-[#F5F1E8] border-[#1C1D1D] text-stone-800 hover:bg-stone-200"
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded mt-0.5 border flex items-center justify-center shrink-0 ${
                    selected ? "bg-[#971F26] border-[#971F26]" : "border-[#1C1D1D]"
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

      {/* 2. Geography */}
      <div className="grid gap-4 sm:grid-cols-2 p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg">
        <div>
          <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
            State:
            <WhyAskingTooltip explanation="Texas is our deep research pilot region; all other states search our nationwide and location-independent library." />
          </label>
          <select
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono font-bold focus:outline-none focus:border-[#971F26]"
          >
            <option value="TX">Texas (Central TX Pilot & Statewide Statutes)</option>
            <option value="US">Other State (Nationwide Lateral Pathways)</option>
          </select>
        </div>

        {formData.state === "TX" ? (
          <div>
            <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
              Texas County (when geographically useful):
            </label>
            <select
              value={formData.county || "Travis"}
              onChange={(e) => setFormData({ ...formData, county: e.target.value })}
              className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono font-bold focus:outline-none focus:border-[#971F26]"
            >
              {ALL_TEXAS_COUNTIES.map((c) => (
                <option key={c.slug} value={c.name.replace(" County", "")}>
                  {c.name} {c.isPilotRegion ? "• Central TX Deep Dive" : ""}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div>
            <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
              ZIP Code (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. 98101"
              maxLength={5}
              value={formData.zipCode || ""}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
              className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono focus:outline-none focus:border-[#971F26]"
            />
          </div>
        )}
      </div>

      {/* 3. What has already failed */}
      <div>
        <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase tracking-wider">
          2. What have you already tried that hit a wall?
          <WhyAskingTooltip explanation="If traditional channels failed due to waitlists or police requirements, we immediately prioritize lateral bypasses." />
        </label>
        <p className="text-[11px] text-stone-600 mb-2 font-mono">Select exhausted channels (prevents recommending dead ends):</p>
        <div className="grid gap-1.5 sm:grid-cols-2">
          {failedOptions.map((opt) => {
            const isChecked = formData.failedChannels.includes(opt.id);
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => toggleFailedChannel(opt.id)}
                className={`p-2 rounded text-left text-xs border transition-all flex items-center gap-2 ${
                  isChecked
                    ? "bg-[#1C1D1D] text-white border-[#1C1D1D] font-bold"
                    : "bg-[#F5F1E8] border-[#D9D1C4] text-stone-800 hover:border-[#1C1D1D]"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-xs border flex items-center justify-center shrink-0 ${
                    isChecked ? "bg-white text-[#1C1D1D]" : "border-stone-500"
                  }`}
                >
                  {isChecked && "✕"}
                </div>
                <span className="text-[11.5px]">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next Step Button */}
      <div className="flex justify-end pt-4 border-t border-[#D9D1C4]">
        <button
          type="button"
          onClick={onNext}
          className="px-5 py-2.5 bg-[#971F26] text-white hover:bg-red-800 rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-xs"
        >
          <span>Continue to Qualification Levers</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
