"use client";

import React from "react";
import { ShieldCheck, Scale, AlertCircle, HelpCircle, FileCheck, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export type ReviewTraceCode =
  | "RECEIVED"
  | "REVIEWED"
  | "REQUESTED_UNAVAILABLE"
  | "OUTSIDE_AUTHORITY"
  | "REFERRED"
  | "DUPLICATIVE_DERIVATIVE"
  | "DISPUTED"
  | "NOT_MATERIAL_REASON_RECORDED"
  | "NOT_REVIEWED_REASON_RECORDED";

export interface ReviewTraceStatusItem {
  code: ReviewTraceCode;
  label: string;
  category: "ACTION" | "LIMITATION" | "EVALUATION" | "OMISSION_RECORD";
  definition: string;
  exampleScenario: string;
  evidentiaryMeaning: string;
}

export const REVIEW_TRACE_STATUSES: ReviewTraceStatusItem[] = [
  {
    code: "RECEIVED",
    label: "RECEIVED",
    category: "ACTION",
    definition: "Material or document was physically or electronically delivered into agency custody.",
    exampleScenario: "A participant hands over a copy of a temporary protective order during desk intake.",
    evidentiaryMeaning: "Confirms custody timestamp only. Does not imply reading, comprehension, forensic testing, or merits finding."
  },
  {
    code: "REVIEWED",
    label: "REVIEWED",
    category: "ACTION",
    definition: "Authorized staff substantively examined the material within a defined jurisdictional scope.",
    exampleScenario: "Investigator reviewed medical records specifically for physical injury timeline.",
    evidentiaryMeaning: "Records which specific portions were examined and for what administrative purpose."
  },
  {
    code: "REQUESTED_UNAVAILABLE",
    label: "REQUESTED — UNAVAILABLE",
    category: "LIMITATION",
    definition: "An inquiry was formally made to a third party or sister agency, but the record could not be obtained.",
    exampleScenario: "Investigator requested 911 audio dispatch from adjacent county sheriff; audio was purged after 90 days.",
    evidentiaryMeaning: "Distinguishes between failure to ask versus third-party inability to produce."
  },
  {
    code: "OUTSIDE_AUTHORITY",
    label: "OUTSIDE AUTHORITY",
    category: "LIMITATION",
    definition: "The material addresses matters beyond the statutory or administrative jurisdiction of the receiving entity.",
    exampleScenario: "Police desk receives civil lease dispute documentation regarding security deposit return.",
    evidentiaryMeaning: "Documents that omission was based on jurisdictional boundaries, not disregard of factual claims."
  },
  {
    code: "REFERRED",
    label: "REFERRED",
    category: "ACTION",
    definition: "Material was transmitted to a successor entity with jurisdiction under a closed-loop handoff.",
    exampleScenario: "Victim services navigator securely transmits protective order paperwork to legal aid.",
    evidentiaryMeaning: "Binds transmission timestamp and recipient identifier; sender remains tracked until acknowledged."
  },
  {
    code: "DUPLICATIVE_DERIVATIVE",
    label: "DUPLICATIVE / DERIVATIVE",
    category: "EVALUATION",
    definition: "Information originates from a previously reviewed single source despite appearing in multiple reports.",
    exampleScenario: "School, doctor, and relative all report the same narrative originally told to them by one person.",
    evidentiaryMeaning: "Prevents the illusion that repetition equals independent corroboration. Preserves single-source provenance."
  },
  {
    code: "DISPUTED",
    label: "DISPUTED",
    category: "EVALUATION",
    definition: "A material contradiction exists between multiple verifiable records or direct party assertions.",
    exampleScenario: "One party asserts notice was never received; electronic delivery receipt indicates email opened.",
    evidentiaryMeaning: "Records the explicit nature of the conflict without erasing the contested record from the audit trail."
  },
  {
    code: "NOT_MATERIAL_REASON_RECORDED",
    label: "NOT MATERIAL — REASON RECORDED",
    category: "OMISSION_RECORD",
    definition: "Staff determined the document does not affect the statutory legal criteria, with explicit written rationale.",
    exampleScenario: "Presented utility bill from 5 years prior is outside the relevant incident timeframe.",
    evidentiaryMeaning: "Prevents silent omission; forces decision-maker to articulate why the item was set aside."
  },
  {
    code: "NOT_REVIEWED_REASON_RECORDED",
    label: "NOT REVIEWED — REASON RECORDED",
    category: "OMISSION_RECORD",
    definition: "Material was present in the case file but was not examined prior to closure, with reason logged.",
    exampleScenario: "Case dismissed due to statutory filing deadline before digital video files were rendered.",
    evidentiaryMeaning: "Prevents false closure certifications. Acknowledges unexamined material transparently."
  }
];

export function ReviewTraceComponent() {
  const [selectedStatus, setSelectedStatus] = React.useState<ReviewTraceStatusItem>(REVIEW_TRACE_STATUSES[0]);

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              PROPOSED SAFEGUARD · PROTOCOL 04
            </span>
          </div>
          <span className="coord-tick">[DESIGN STATUS: PROPOSED MWT STANDARD]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Review Trace: Accounting for Material Information
        </h3>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          An institution has the lawful authority to disagree with an assertion, find an allegation unproven, or decline a service. <strong>However, it should always be able to account for what it did with material evidence.</strong>
        </p>

        {/* Legal Disclaimer Box */}
        <div className="p-3 bg-[#F5F1E8] border border-stone-300 rounded-lg text-xs font-mono text-stone-700">
          <strong>Notice of Proposed Standard:</strong> The Review Trace taxonomy below represents a proposed Maps With Teeth data-quality design standard for administrative audits. It is not an existing statutory requirement under Texas or federal law.
        </div>
      </div>

      {/* Interactive Trace Matrix */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Status Buttons List */}
        <div className="lg:col-span-5 space-y-1.5 font-mono text-xs">
          <span className="text-[10px] uppercase font-bold text-stone-600 block mb-1">
            Proposed Disposition Statuses (Select to Inspect):
          </span>
          {REVIEW_TRACE_STATUSES.map((item) => {
            const isSelected = selectedStatus.code === item.code;
            return (
              <button
                key={item.code}
                onClick={() => setSelectedStatus(item)}
                className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? "bg-[#1C1D1D] text-white border-[#1C1D1D] font-bold shadow-xs"
                    : "bg-[#F5F1E8] text-stone-800 border-stone-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.category === "ACTION"
                        ? "bg-emerald-500"
                        : item.category === "LIMITATION"
                        ? "bg-amber-500"
                        : item.category === "EVALUATION"
                        ? "bg-blue-500"
                        : "bg-rose-500"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-[#971F26]" : "text-stone-400"}`} />
              </button>
            );
          })}
        </div>

        {/* Selected Status Deep Dive Card */}
        <div className="lg:col-span-7 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-4 flex flex-col justify-between shadow-2xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono">
              <span className="text-xs font-bold text-[#971F26] uppercase">
                STATUS METADATA BREAKDOWN
              </span>
              <span className="px-2 py-0.5 bg-[#EEE8DD] border border-stone-400 rounded text-[10px] font-bold text-stone-700">
                CATEGORY: {selectedStatus.category}
              </span>
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold text-[#1C1D1D]">
                {selectedStatus.label}
              </h4>
              <p className="text-xs sm:text-sm text-stone-800 font-sans mt-1 leading-relaxed">
                {selectedStatus.definition}
              </p>
            </div>

            {/* Practical Example */}
            <div className="p-3 bg-[#EEE8DD] rounded-lg border border-stone-300 space-y-1 text-xs">
              <span className="font-mono font-bold text-stone-900 uppercase text-[10.5px] block">
                FRONT-LINE OPERATIONAL EXAMPLE:
              </span>
              <p className="font-sans text-stone-800 leading-relaxed">
                {selectedStatus.exampleScenario}
              </p>
            </div>

            {/* Evidentiary Guardrail */}
            <div className="p-3 bg-white rounded-lg border border-[#971F26]/30 space-y-1 text-xs">
              <span className="font-mono font-bold text-[#971F26] uppercase text-[10.5px] block">
                EVIDENTIARY AUDIT BOUNDARY:
              </span>
              <p className="font-sans text-stone-800 leading-relaxed">
                {selectedStatus.evidentiaryMeaning}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#D9D1C4] text-[11px] font-mono text-stone-600 flex items-center justify-between">
            <span>Prevents silent omission in case closures</span>
            <span className="text-[#971F26] font-bold">Traceability &ne; Liability</span>
          </div>
        </div>
      </div>
    </section>
  );
}
