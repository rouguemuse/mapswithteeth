"use client";

import React from "react";
import { ResourceIntakeData, FailedChannel, FailedReason, UrgencyTimeline } from "@/types/intake";
import { WhyAskingTooltip } from "./WhyAskingTooltip";
import { AlertCircle, ArrowLeft, Sparkles } from "lucide-react";

export function Step4Failed({
  formData,
  setFormData,
  onBack,
}: {
  formData: ResourceIntakeData;
  setFormData: React.Dispatch<React.SetStateAction<ResourceIntakeData>>;
  onBack: () => void;
}) {
  const toggleFailedChannel = (channel: FailedChannel) => {
    setFormData((prev) => ({
      ...prev,
      failedChannels: prev.failedChannels.includes(channel)
        ? prev.failedChannels.filter((c) => c !== channel)
        : [...prev.failedChannels, channel],
    }));
  };

  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      {/* WHAT HAS ALREADY FAILED */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider font-mono">
          <AlertCircle className="w-4 h-4 text-amber-700" />
          <span>What Have You Already Tried?</span>
          <WhyAskingTooltip explanation="We do not want to send you in circles. If 211 was out of funds or shelter required staying on-site, we prioritize direct alternative micro-funds and statutory routes." />
        </div>
        <p className="text-[11px] text-stone-700">
          Check any sources you already attempted so we do not send you back into a dead loop:
        </p>

        <div className="grid gap-2 sm:grid-cols-3 text-xs font-mono">
          {(
            [
              ["211", "211 / Info Line"],
              ["DV_SHELTER", "DV Shelter / Hotline"],
              ["LEGAL_AID", "Legal Aid Provider"],
              ["CHURCH", "Local Church / Ministry"],
              ["CAA", "Community Action Agency"],
              ["POLICE", "Police / Law Enforcement"],
            ] as [FailedChannel, string][]
          ).map(([id, label]) => {
            const selected = formData.failedChannels.includes(id);
            return (
              <label
                key={id}
                className={`p-2 rounded border cursor-pointer flex items-center gap-2 transition-all ${
                  selected
                    ? "bg-amber-100 border-amber-400 text-amber-950 font-bold shadow-sm"
                    : "bg-brand-paper border-stone-300 text-stone-700 hover:border-stone-400"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleFailedChannel(id)}
                  className="rounded bg-brand-paper border-stone-300 text-amber-700 focus:ring-0"
                />
                <span>{label}</span>
              </label>
            );
          })}
        </div>

        {formData.failedChannels.length > 0 && (
          <div className="mt-3">
            <label className="block text-[11px] text-amber-900 mb-1 font-mono font-bold">
              What was the main reason it didn&apos;t work?
            </label>
            <select
              value={formData.failedReason || ""}
              onChange={(e) => setFormData({ ...formData, failedReason: e.target.value as FailedReason })}
              className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2 text-xs text-brand-charcoal focus:border-brand-oxblood"
            >
              <option value="">Select reason if applicable</option>
              <option value="NO_FUNDS">Out of funds / Budget exhausted</option>
              <option value="WAITLIST">Long waitlist</option>
              <option value="INELIGIBLE">Told I didn&apos;t qualify</option>
              <option value="SHELTER_STAY_REQUIRED">Required staying in communal shelter</option>
              <option value="POLICE_REPORT_REQUIRED">Required formal police report</option>
              <option value="NO_TRANSPORTATION">No transportation to get there</option>
              <option value="OTHER">Other / Told it was a civil matter</option>
            </select>
          </div>
        )}
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
          How urgent is this barrier?
        </label>
        <select
          value={formData.urgency}
          onChange={(e) => setFormData({ ...formData, urgency: e.target.value as UrgencyTimeline })}
          className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
        >
          <option value="TODAY">Today (Immediate crisis)</option>
          <option value="WITHIN_72_HOURS">Within 72 hours</option>
          <option value="WITHIN_A_WEEK">Within a week</option>
          <option value="WITHIN_30_DAYS">Within 30 days</option>
          <option value="PLANNING_AHEAD">Planning ahead / Gathering options</option>
        </select>

        {formData.urgency === "TODAY" && (
          <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded text-xs text-stone-800 shadow-sm">
            <strong className="text-brand-oxblood block mb-1 font-bold">Immediate Safety Notice:</strong>
            Maps With Teeth generates resource research intelligence. We are not a 24/7 emergency dispatch. If you need emergency shelter or crisis safety today, call the <strong>National Domestic Violence Hotline at 1-800-799-7233 (or text START to 88788)</strong>.
          </div>
        )}
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
          type="submit"
          className="px-6 py-3 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          <span>Find Potential Pathways Right Now</span>
        </button>
      </div>
    </div>
  );
}
