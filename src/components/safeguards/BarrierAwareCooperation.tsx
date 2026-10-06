"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ShieldAlert, XCircle } from "lucide-react";

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
  proposedResponse: string;
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
      summary: "Participant expressly declines a requested action or communication.",
      example: "Participant states that they decline the requested interview or document release.",
      improperReduction: "Do not infer refusal from silence, inability, fear, or an access problem.",
      proposedResponse: "Record what was declined, when, and the scope of the refusal without extending it to unrelated requests."
    },
    {
      id: "UNAVAILABLE",
      title: "UNAVAILABLE / UNREACHABLE",
      category: "UNAVAILABLE",
      color: "#D97706",
      badgeBg: "bg-amber-50",
      badgeBorder: "border-amber-300",
      badgeText: "text-amber-800",
      summary: "Contact attempts have not yet produced a response or verified communication channel.",
      example: "Known phone number is disconnected and mailed notice is returned.",
      improperReduction: "Do not automatically code lack of contact as refusal.",
      proposedResponse: "Record the attempts and channels used, and keep the reason for non-contact unknown unless established."
    },
    {
      id: "ACCESS_BARRIER",
      title: "ACCESS BARRIER REPORTED",
      category: "STRUCTURAL_BARRIER",
      color: "#2563EB",
      badgeBg: "bg-blue-50",
      badgeBorder: "border-blue-300",
      badgeText: "text-blue-800",
      summary: "Participant reports a logistical, technological, language, transportation, document-access, disability, work, or caregiving barrier.",
      example: "Participant reports being unable to retrieve a requested document or attend at the offered time.",
      improperReduction: "Do not silently convert an asserted access problem into voluntary noncooperation.",
      proposedResponse: "Record the asserted barrier and any accommodation, alternative channel, or unresolved access issue."
    },
    {
      id: "SAFETY_BARRIER",
      title: "FEAR / SAFETY BARRIER REPORTED",
      category: "SAFETY_BARRIER",
      color: "#7C3AED",
      badgeBg: "bg-purple-50",
      badgeBorder: "border-purple-300",
      badgeText: "text-purple-800",
      summary: "Participant reports that fear or a safety concern affects appearance, communication, disclosure, or document access. This status records the report; it does not verify the underlying safety condition.",
      example: "Participant reports that appearing at a location or disclosing an address would create a safety concern.",
      improperReduction: "Do not treat the label itself as proof of danger or as proof of noncooperation.",
      proposedResponse: "Record the reported barrier and route any safety assessment through the authority and process that actually governs it."
    },
    {
      id: "PARTIAL_COOPERATION",
      title: "PARTIAL COOPERATION",
      category: "PARTIAL",
      color: "#059669",
      badgeBg: "bg-emerald-50",
      badgeBorder: "border-emerald-300",
      badgeText: "text-emerald-800",
      summary: "Participant completes some requested actions or provides some requested material while declining, contesting, or being unable to complete others.",
      example: "Participant provides several requested records but does not provide another requested item.",
      improperReduction: "Do not collapse a mixed response into a global label such as cooperative or uncooperative.",
      proposedResponse: "Itemize what was completed, what was not, and the stated or unknown reason for each unresolved item."
    },
    {
      id: "REASON_UNKNOWN",
      title: "REASON UNKNOWN",
      category: "UNKNOWN",
      color: "#4B5563",
      badgeBg: "bg-stone-100",
      badgeBorder: "border-stone-300",
      badgeText: "text-stone-700",
      summary: "The system does not yet know why a requested action, appearance, or submission did not occur.",
      example: "An appointment is missed and no reason has yet been established.",
      improperReduction: "Do not infer motive from an unresolved absence.",
      proposedResponse: "Preserve the uncertainty until additional information supports a more specific status."
    }
  ];

  const activeState = states.find((s) => s.id === selectedId) || states[2];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#971F26]">
            <ShieldAlert className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 04
            </span>
          </div>
          <span className="coord-tick">[BARRIER-AWARE CODING]</span>
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
          The proposed data-quality safeguard separates what is actually known about participation from assumptions about motive. Each status describes the available administrative information; it does not establish why an underlying event occurred unless that reason has been independently determined.
        </p>
      </div>

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

      <div className="bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: activeState.color }} />
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
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Illustrative Example
            </span>
            <p className="text-xs font-sans text-stone-800 italic">
              {activeState.example}
            </p>
          </div>

          <div className="p-3.5 bg-red-50/70 rounded-lg border border-red-200 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-red-700 uppercase flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5 text-red-600" /> Inference To Avoid
            </span>
            <p className="text-xs font-sans text-red-950 font-medium">
              {activeState.improperReduction}
            </p>
          </div>

          <div className="p-3.5 bg-emerald-50/70 rounded-lg border border-emerald-200 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-emerald-600" /> Proposed Trace Response
            </span>
            <p className="text-xs font-sans text-emerald-950">
              {activeState.proposedResponse}
            </p>
          </div>
        </div>
      </div>

      <div className="p-3.5 bg-white border border-stone-300 rounded-lg text-xs font-mono text-stone-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>Proposed data-quality rule: record the known barrier state without inferring motive.</span>
        <span className="text-[#971F26] font-bold">Could Not ≠ Would Not</span>
      </div>
    </section>
  );
}
