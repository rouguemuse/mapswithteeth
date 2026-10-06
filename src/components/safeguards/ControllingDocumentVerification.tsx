import React from "react";
import { AlertOctagon, CornerDownRight, FileCheck } from "lucide-react";

export function ControllingDocumentVerification() {
  const steps = [
    {
      num: "01",
      label: "AUTHORITY RELIED UPON",
      desc: "Identify the legal, policy, contractual, or administrative authority the institution believes permits or requires the action.",
      example: "What authority is being enforced?"
    },
    {
      num: "02",
      label: "DOCUMENT OR RULE REVIEWED",
      desc: "Identify the actual order, statute, regulation, policy, agreement, or other controlling source that was reviewed.",
      example: "What document or rule was actually consulted?"
    },
    {
      num: "03",
      label: "PROVISION UNDERSTOOD TO CONTROL",
      desc: "Record the provision the institution understood to authorize the decision, without requiring frontline staff to resolve legal disputes beyond their role.",
      example: "Which provision was understood to govern this action?"
    },
    {
      num: "04",
      label: "VERIFICATION & ACTION",
      desc: "Record when the authority was checked, who or what role verified it, and what administrative action resulted.",
      example: "When was it verified, and what action followed?"
    },
    {
      num: "05",
      label: "NOTICE & CORRECTION PATH",
      desc: "Record how an affected person can seek correction, supervisory review, or referral to an authorized legal or policy decision-maker when interpretation is disputed.",
      example: "What is the review or correction path?"
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 06
            </span>
          </div>
          <span className="coord-tick">[RIGHTS-DECISION TRACEABILITY]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Controlling-Document Verification
        </h3>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="px-3 py-1 bg-[#1C1D1D] text-amber-200 text-xs font-mono font-bold rounded-full">
            A legal-rights decision should be traceable to the authority being enforced.
          </span>
        </div>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl pt-2">
          When an institution limits access, participation, custody-related school handling, records access, housing access, or another legal right, the proposed safeguard asks the administrative record to identify the authority actually relied upon. It does not require frontline staff to independently resolve contested legal interpretation; disputed interpretation can be escalated to the role authorized to decide it.
        </p>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs"
          >
            <div className="flex items-start gap-3 md:w-1/3">
              <span className="px-2 py-0.5 bg-[#971F26] text-white text-xs font-mono font-bold rounded shrink-0">
                STAGE {step.num}
              </span>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#1C1D1D]">
                  {step.label}
                </h4>
                <p className="text-xs font-sans text-stone-700 leading-snug mt-0.5">
                  {step.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:w-2/3 bg-white p-3 rounded-lg border border-stone-300">
              <CornerDownRight className="w-4 h-4 text-[#971F26] shrink-0 hidden sm:block" />
              <div className="text-xs font-sans text-stone-800">
                <span className="font-mono font-bold text-stone-500 uppercase text-[10px] block">
                  TRACE QUESTION:
                </span>
                {step.example}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-[#971F26]">
          <AlertOctagon className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase">Proposed Traceability Boundary</span>
        </div>
        <p className="text-xs font-sans text-red-950 leading-relaxed">
          A third party&apos;s verbal description of an order, statute, rule, or policy should not silently become the institution&apos;s controlling authority. The record should identify what authority was actually reviewed, the provision understood to control, the resulting action, and a correction or review path.
        </p>
      </div>
    </section>
  );
}
