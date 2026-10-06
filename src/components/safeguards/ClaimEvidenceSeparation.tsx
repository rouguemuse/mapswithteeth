import React from "react";
import { Scale } from "lucide-react";

export function ClaimEvidenceSeparation() {
  const pipelineSteps = [
    {
      num: "01",
      title: "CLAIM",
      desc: "A specific factual proposition that can be evaluated.",
      detail: "What exactly is being asserted?"
    },
    {
      num: "02",
      title: "SOURCE",
      desc: "The person, institution, device, or record from which the assertion or information originated.",
      detail: "Who or what generated the information?"
    },
    {
      num: "03",
      title: "PROVENANCE",
      desc: "When, where, and how the information was created, preserved, or transmitted, including whether it is independent or derivative.",
      detail: "What is the record's origin and relationship to other records?"
    },
    {
      num: "04",
      title: "SUPPORTING / CONTRADICTORY MATERIAL",
      desc: "Material that supports, contradicts, contextualizes, or fails to resolve the specific claim.",
      detail: "What does each item actually add to this claim?"
    },
    {
      num: "05",
      title: "STATUS",
      desc: "The claim-specific administrative or investigative status under the applicable authority.",
      detail: "What can legitimately be concluded at this stage?"
    },
    {
      num: "06",
      title: "UNRESOLVED QUESTIONS",
      desc: "What remains unknown, disputed, unavailable, outside authority, or not yet reviewed.",
      detail: "What question still needs an owner or answer?"
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Scale className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 03
            </span>
          </div>
          <span className="coord-tick">[CLAIM-SPECIFIC REVIEW]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Claim-Evidence Separation
        </h3>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          Complex family, safety, housing, or administrative matters should not be reduced to a global character judgment about an entire person. The proposed method decomposes consequential assertions into claim-specific questions with traceable sources and evidence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
        {pipelineSteps.map((step) => (
          <div
            key={step.num}
            className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2.5 flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-1.5">
                <span className="text-[10px] font-bold text-[#971F26] uppercase">
                  STEP {step.num}
                </span>
                <span className="text-[10px] text-stone-500 font-bold uppercase">REVIEW STAGE</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#1C1D1D]">
                {step.title}
              </h4>
              <p className="font-sans text-stone-700 text-[11.5px] leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="p-2.5 bg-white rounded border border-stone-300 text-[10.5px] text-stone-800 font-sans italic">
              {step.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border border-stone-300 rounded-lg text-xs text-stone-700 space-y-2">
        <p>
          A reviewer may assess credibility where credibility is legally or operationally relevant. Maps With Teeth does not propose eliminating credibility analysis.
        </p>
        <p className="font-mono font-bold text-[#971F26]">
          The safeguard prevents generalized character impressions from substituting for claim-specific evidence review.
        </p>
      </div>
    </section>
  );
}
