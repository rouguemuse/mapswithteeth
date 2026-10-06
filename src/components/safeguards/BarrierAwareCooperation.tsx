"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, HelpCircle, ShieldAlert, XCircle, PhoneOff } from "lucide-react";

interface CooperationState {
  id: string;
  title: string;
  category: "REFUSAL" | "UNAVAILABLE" | "STRUCTURAL_BARRIER" | "SAFETY_BARRIER" | "PARTIAL" | "UNKNOWN";
  color: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  summary: string;
  example: string;
  improperReduction: string;
  remedialAction: string;
}

export function BarrierAwareCooperation() {
  const [selectedId, setSelectedId] = useState<string>("ACCESS_BARRIER");

  const states: CooperationState[] = [
    {
      id: "EXPRESS_REFUSAL",
      title: "EXPRESSLY REFUSED",
      category: "REFUSAL",
      color: "#971F26",
      badgeBg: "bg-red-50",
      badgeBorder: "border-red-300",
      badgeText: "text-red-800",
      summary: "Participant explicitly states unwillingness to participate after being informed of voluntary or statutory nature of engagement.",
      example: "Party states directly on recorded call: 'I will not speak with your agency under any circumstances and demand you close this file.'",
      improperReduction: "Appropriate only when refusal is voluntary, uncoerced, and unambiguous.",
      remedialAction: "Document exact quote, time, and whether notice of consequences was provided. Do not extrapolate refusal to future hearings or unrelated services."
    },
    {
      id: "UNAVAILABLE",
      title: "UNAVAILABLE / UNREACHABLE",
      category: "UNAVAILABLE",
      color: "#D97706",
      badgeBg: "bg-amber-50",
      badgeBorder: "border-amber-300",
      badgeText: "text-amber-800",
      summary: "Communication attempts resulted in no response, disconnected contact methods, or unverified location.",
      example: "Phone numbers disconnected, letters returned to sender as undeliverable, no forwarding address on record.",
      improperReduction: "Must not be coded as 'Refused to cooperate'.",
      remedialAction: "Audit address history, test secondary communication channels (mail, email, emergency contacts), and log verification dates."
    },
    {
      id: "ACCESS_BARRIER",
      title: "ACCESS BARRIER REPORTED",
      category: "STRUCTURAL_BARRIER",
      color: "#2563EB",
      badgeBg: "bg-blue-50",
      badgeBorder: "border-blue-300",
      badgeText: "text-blue-800",
      summary: "Structural or logistical impossibility prevents attendance or document submission (e.g. transportation, work shift, caregiving, language).",
      example: "Parent works non-flexible hourly night shifts without transit access to mandatory 9:00 AM in-person suburban intake clinic.",
      improperReduction: "Coded by intake worker as 'Failed to attend appointment / non-compliant'.",
      remedialAction: "Offer asynchronous intake, remote video, translated paperwork, transit vouchers, or after-hours availability."
    },
    {
      id: "SAFETY_BARRIER",
      title: "FEAR / SAFETY BARRIER REPORTED",
      category: "SAFETY_BARRIER",
      color: "#7C3AED",
      badgeBg: "bg-purple-50",
      badgeBorder: "border-purple-300",
      badgeText: "text-purple-800",
      summary: "Participant cannot appear, disclose location, or submit materials due to credible fear of retaliatory violence, stalking, or eviction.",
      example: "Survivor does not attend court building where respondent's armed associates are stationed at entrance.",
      improperReduction: "Coded as 'Unwilling to assist in investigation'.",
      remedialAction: "Trigger confidential address protocol (e.g., Texas Address Confidentiality Program), remote testimony, or safety escort."
    },
    {
      id: "PARTIAL_COOPERATION",
      title: "PARTIAL COOPERATION",
      category: "PARTIAL",
      color: "#059669",
      badgeBg: "bg-emerald-50",
      badgeBorder: "border-emerald-300",
      badgeText: "text-emerald-800",
      summary: "Participant provides certain requested information or attends specific sessions while asserting privacy or legal rights regarding others.",
      example: "Party provides medical releases and child school records but declines to provide personal journal entries without counsel.",
      improperReduction: "Coded as 'Uncooperative' or 'Defensive posture'.",
      remedialAction: "Itemize specific records produced vs. specific items withheld. Separate legal assertion of rights from general defiance."
    },
    {
      id: "REASON_UNKNOWN",
      title: "REASON UNKNOWN",
      category: "UNKNOWN",
      color: "#4B5563",
      badgeBg: "bg-stone-100",
      badgeBorder: "border-stone-300",
      badgeText: "text-stone-700",
      summary: "Absence or non-receipt of information where no diagnostic investigation has yet taken place.",
      example: "One appointment missed without prior notice; no subsequent contact yet attempted.",
      improperReduction: "Preemptively labeled as voluntary non-compliance.",
      remedialAction: "Default status until at least two distinct verification attempts are made across multiple communication modes."
    }
  ];

  const activeState = states.find((s) => s.id === selectedId) || states[2];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <ShieldAlert className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 04
            </span>
          </div>
          <span className="coord-tick">[BARRIER-AWARE DISPOSITION]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Barrier-Aware Cooperation Distinction
        </h3>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="px-3 py-1 bg-[#1C1D1D] text-amber-200 text-xs font-mono font-bold rounded-full">
            A barrier is not a refusal.
          </span>
          <span className="px-3 py-1 bg-[#971F26] text-white text-xs font-mono font-bold rounded-full">
            Could not is not the same as would not.
          </span>
        </div>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl pt-2">
          When administrative systems collapse all non-appearance or incomplete paperwork into a generic label of <em>&ldquo;uncooperative,&rdquo;</em> structural inequalities and safety threats are weaponized against victims. Administrative traceability requires recording the precise nature of non-engagement.
        </p>
      </div>

      {/* State Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {states.map((st) => (
          <button
            key={st.id}
            onClick={() => setSelectedId(st.id)}
            className={`p-3 text-left rounded-xl border transition-all flex flex-col justify-between ${
              selectedId === st.id
                ? "bg-[#1C1D1D] text-[#F5F1E8] border-[#1C1D1D] shadow-md scale-[1.02]"
                : "bg-[#F5F1E8] text-stone-800 border-stone-300 hover:border-stone-500"
            }`}
          >
            <span className={`text-[10px] font-mono font-bold uppercase ${
              selectedId === st.id ? "text-amber-300" : "text-stone-500"
            }`}>
              {st.category}
            </span>
            <span className="text-xs font-serif font-bold mt-1 leading-tight">
              {st.title}
            </span>
          </button>
        ))}
      </div>

      {/* Selected State Inspector Card */}
      <div className="bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: activeState.color }}
            />
            <h4 className="text-lg sm:text-xl font-serif font-bold text-[#1C1D1D]">
              {activeState.title}
            </h4>
          </div>
          <span className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded border ${activeState.badgeBg} ${activeState.badgeBorder} ${activeState.badgeText}`}>
            STATUS CATEGORY: {activeState.category}
          </span>
        </div>

        <p className="text-stone-800 text-sm font-sans leading-relaxed">
          {activeState.summary}
        </p>

        <div className="grid md:grid-cols-3 gap-4 pt-2">
          <div className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-stone-500 uppercase flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Operational Example
            </span>
            <p className="text-xs font-sans text-stone-800 italic">
              &ldquo;{activeState.example}&rdquo;
            </p>
          </div>

          <div className="p-3.5 bg-red-50/70 rounded-lg border border-red-200 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-red-700 uppercase flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5 text-red-600" /> Improper Reductive Coding
            </span>
            <p className="text-xs font-sans text-red-950 font-medium">
              {activeState.improperReduction}
            </p>
          </div>

          <div className="p-3.5 bg-emerald-50/70 rounded-lg border border-emerald-200 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-emerald-600" /> Required Administrative Action
            </span>
            <p className="text-xs font-sans text-emerald-950">
              {activeState.remedialAction}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-3.5 bg-white border border-stone-300 rounded-lg text-xs font-mono text-stone-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>Administrative rule: An agency cannot penalize a participant for non-appearance without diagnostic verification of accessibility.</span>
        <span className="text-[#971F26] font-bold">Diagnostic Integrity &gt; Default Penalties</span>
      </div>
    </section>
  );
}
