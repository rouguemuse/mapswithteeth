"use client";

import React from "react";
import { INDUSTRY_OPTIONS } from "@/data/industries";
import { ResourceIntakeData } from "@/types/intake";
import { WhyAskingTooltip } from "./WhyAskingTooltip";
import { ArrowRight, ArrowLeft, Briefcase, Users, PawPrint, Smartphone, ShieldCheck, Car, Scale } from "lucide-react";

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
    <div className="space-y-6 animate-fadeIn font-sans select-none">
      
      {/* 1. Industry / Work Levers */}
      <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-4">
        <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
          <Briefcase className="w-4 h-4" />
          <span>Work & Industry Qualification Levers</span>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
            What do you do for work right now (or most recently)?
            <WhyAskingTooltip explanation="Specific industries (restaurants, bars, music, crafts, writing, trades, healthcare) have dedicated private benevolence funds that pay emergency rent and bills directly." />
          </label>
          <select
            value={formData.currentIndustry || "restaurant-food-service"}
            onChange={(e) => setFormData({ ...formData, currentIndustry: e.target.value })}
            className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono font-bold focus:outline-none focus:border-[#971F26]"
          >
            {INDUSTRY_OPTIONS.map((ind) => (
              <option key={ind.id} value={ind.id}>
                {ind.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
            Have you worked in any other industries in the past 6–12 months?
            <WhyAskingTooltip explanation="Many industry hardship funds (like Southern Smoke or MusiCares) cover individuals who worked in the industry recently even if currently unemployed." />
          </label>
          <div className="grid gap-1.5 sm:grid-cols-2 max-h-32 overflow-y-auto pr-1">
            {INDUSTRY_OPTIONS.slice(0, 10).map((ind) => {
              const selected = formData.recentIndustries.includes(ind.id);
              return (
                <button
                  type="button"
                  key={ind.id}
                  onClick={() => toggleRecentIndustry(ind.id)}
                  className={`px-2.5 py-1.5 rounded text-left text-xs border transition-all ${
                    selected
                      ? "bg-[#1C1D1D] text-white border-[#1C1D1D] font-bold"
                      : "bg-[#EEE8DD] border-[#D9D1C4] text-stone-700 hover:border-[#1C1D1D]"
                  }`}
                >
                  <span className="text-[11px]">{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Family & Public School */}
      <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-3">
        <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
          <Users className="w-4 h-4" />
          <span>Family & Public School Enrollment</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex items-center gap-2 text-xs text-[#1C1D1D] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.hasDependentChildren || false}
              onChange={(e) => setFormData({ ...formData, hasDependentChildren: e.target.checked })}
              className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
            />
            <span className="font-medium">
              I support legal dependent minor child(ren) (18 or under)
              <WhyAskingTooltip explanation="Unlocks dedicated family relief funds like CORE Gives (Children of Restaurant Employees) and specialized family crisis grants." />
            </span>
          </label>

          <label className="flex items-center gap-2 text-xs text-[#1C1D1D] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.childInPublicSchool || false}
              onChange={(e) => setFormData({ ...formData, childInPublicSchool: e.target.checked })}
              className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
            />
            <span className="font-medium">
              Child is enrolled in public school (K–12)
              <WhyAskingTooltip explanation="Unlocks federal McKinney-Vento protections: immediate school enrollment, barrier-free records, and district transportation rights during housing instability." />
            </span>
          </label>
        </div>
      </div>

      {/* 3. Housing, Pets, Telecom & Legal Levers */}
      <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-4">
        <div className="flex items-center gap-2 text-[#971F26] border-b border-[#D9D1C4] pb-2 font-mono text-xs font-bold uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>Housing, Pets, Phone & Legal Circumstances</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div>
            <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
              Current Housing Situation:
              <WhyAskingTooltip explanation="Texas tenants with a residential lease can break their lease immediately without penalties under Texas Property Code § 92.016." />
            </label>
            <select
              value={formData.housingStatus || "RENTAL_LEASE"}
              onChange={(e) => setFormData({ ...formData, housingStatus: e.target.value as any })}
              className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono focus:outline-none focus:border-[#971F26]"
            >
              <option value="RENTAL_LEASE">Active Residential Rental Lease</option>
              <option value="DOUBLED_UP_TEMPORARY">Doubled Up with Friends / Temporary Stay</option>
              <option value="SHELTER">Currently in Emergency Shelter / Motel</option>
              <option value="HOMEOWNER">Homeowner</option>
              <option value="UNHOUSED">Vehicle / Unsheltered</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono">
              Vehicle & Transit Mobility:
              <WhyAskingTooltip explanation="Helps surface emergency gas cards, vehicle repair grants, or non-municipal transit passes." />
            </label>
            <select
              value={formData.transportationStatus || "OWN_VEHICLE"}
              onChange={(e) => setFormData({ ...formData, transportationStatus: e.target.value as any })}
              className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded-md p-2 text-xs text-[#1C1D1D] font-mono focus:outline-none focus:border-[#971F26]"
            >
              <option value="OWN_VEHICLE">Own Vehicle (Running)</option>
              <option value="VEHICLE_UNAVAILABLE">Vehicle Needs Urgent Repair / Inoperable</option>
              <option value="SHARED_VEHICLE">Shared Vehicle with Partner</option>
              <option value="PUBLIC_TRANSIT">Public Transit / Rideshare Only</option>
              <option value="NO_RELIABLE_TRANSPORT">No Reliable Transportation</option>
            </select>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 pt-2 border-t border-[#E5DEC9]">
          <label className="flex items-center gap-2 text-xs text-[#1C1D1D] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.hasAnimal || false}
              onChange={(e) => setFormData({ ...formData, hasAnimal: e.target.checked })}
              className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
            />
            <span className="font-medium">
              I have a companion animal / pet
              <WhyAskingTooltip explanation="Unlocks confidential emergency boarding (RedRover Safe Escape) and pet foster networks (APA PASS) when shelters do not allow pets." />
            </span>
          </label>

          <label className="flex items-center gap-2 text-xs text-[#1C1D1D] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.sharedCellularPlan || false}
              onChange={(e) => setFormData({ ...formData, sharedCellularPlan: e.target.checked })}
              className="w-4 h-4 rounded border-[#1C1D1D] text-[#971F26] focus:ring-0"
            />
            <span className="font-medium">
              I am on a shared family mobile/cellular account
              <WhyAskingTooltip explanation="Unlocks the federal Safe Connections Act (47 U.S.C. § 345): mandatory line separation within 2 days with zero fee and no abuser notification." />
            </span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-[#D9D1C4]">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-[#F5F1E8] border border-[#1C1D1D] hover:bg-stone-200 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="px-5 py-2.5 bg-[#971F26] text-white hover:bg-red-800 rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-xs"
        >
          <span>Continue to Detailed Verification</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
