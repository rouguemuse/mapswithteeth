"use client";

import React from "react";
import { Unknownable } from "@/domain/intake/types";
import { MapPin, ArrowRight, ArrowLeft, Info, Compass } from "lucide-react";

interface LocationStepProps {
  stateValue?: Unknownable<string>;
  countyValue?: Unknownable<string>;
  onStateChange: (state: Unknownable<string>) => void;
  onCountyChange: (county: Unknownable<string>) => void;
  onBack: () => void;
  onContinue: () => void;
}

const US_STATES = [
  { code: "TX", name: "Texas (Central TX Pilot & Statewide Rights)" },
  { code: "UNKNOWN", name: "I'm not sure / Prefer not to say" },
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" }
];

const CENTRAL_TEXAS_PILOT_COUNTIES = [
  "Travis",
  "Williamson",
  "Harris",
  "Bastrop",
  "Hays",
  "Caldwell",
  "Blanco",
  "Burnet"
];

const PROMINENT_TEXAS_COUNTIES = [
  "Bexar",
  "Dallas",
  "Tarrant",
  "Collin",
  "Denton",
  "El Paso",
  "Fort Bend",
  "Montgomery",
  "Hidalgo",
  "Cameron",
  "Nueces",
  "Bell",
  "McLennan",
  "Lubbock",
  "Webb",
  "Galveston",
  "Brazos",
  "Jefferson",
  "Midland",
  "Ector"
];

export function LocationStep({
  stateValue,
  countyValue,
  onStateChange,
  onCountyChange,
  onBack,
  onContinue,
}: LocationStepProps) {
  const currentState = stateValue || "TX";
  const currentCounty = countyValue || "UNKNOWN";

  return (
    <div className="space-y-8 animate-fadeIn font-sans select-none">
      {/* Step Header */}
      <div className="border-b border-[#D9D1C4] pb-5">
        <div className="flex items-center gap-2 text-[#971F26] mb-1">
          <Compass className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            STEP 2 OF 3 · LOCATION & JURISDICTION
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Where are you located?
        </h2>
        <div className="mt-2 p-3 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg text-xs text-stone-700 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
          <span>
            <strong>Why we ask:</strong> Some programs and statutory rights (like Texas lease termination or local shelter networks) only exist in specific counties or states. We use this to rule out geographic dead ends. National routes remain available anywhere.
          </span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 shadow-sm bg-grid-atlas space-y-6">
        {/* State Selector */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D1D] mb-2">
            1. State:
          </label>
          <select
            value={currentState}
            onChange={(e) => {
              const val = e.target.value;
              onStateChange(val);
              if (val !== "TX") {
                onCountyChange("UNKNOWN");
              }
            }}
            className="w-full bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-3 text-sm text-[#1C1D1D] font-mono font-medium focus:border-[#971F26] focus:outline-none"
          >
            {US_STATES.map((st) => (
              <option key={st.code} value={st.code}>
                {st.name}
              </option>
            ))}
          </select>
        </div>

        {/* County Selector (if Texas) */}
        {currentState === "TX" && (
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D1D] mb-2">
              2. Texas County:
            </label>
            <select
              value={currentCounty}
              onChange={(e) => onCountyChange(e.target.value)}
              className="w-full bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-3 text-sm text-[#1C1D1D] font-mono font-medium focus:border-[#971F26] focus:outline-none"
            >
              <option value="UNKNOWN">I'm not sure / All Texas Statewide Routes</option>
              <optgroup label="Central Texas Pilot Counties">
                {CENTRAL_TEXAS_PILOT_COUNTIES.map((c) => (
                  <option key={c} value={c}>
                    {c} County (Deep Pilot Coverage)
                  </option>
                ))}
              </optgroup>
              <optgroup label="Major Texas Counties">
                {PROMINENT_TEXAS_COUNTIES.map((c) => (
                  <option key={c} value={c}>
                    {c} County
                  </option>
                ))}
              </optgroup>
            </select>
            <p className="text-[11px] text-stone-600 mt-1.5 font-sans">
              Statewide rights (lease termination, rekeying, ACP, CVC) apply across all 254 Texas counties.
            </p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#D9D1C4]">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 rounded-lg border-2 border-[#1C1D1D] bg-[#EEE8DD] hover:bg-stone-200 text-[#1C1D1D] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Problems</span>
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="px-6 py-3 rounded-lg border-2 border-[#1C1D1D] bg-[#971F26] hover:bg-[#80191F] text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <span>Continue to Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
