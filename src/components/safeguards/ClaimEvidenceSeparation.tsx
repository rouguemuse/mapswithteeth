import React from "react";
import { Layers, ArrowRight, Scale, Check, HelpCircle } from "lucide-react";

export function ClaimEvidenceSeparation() {
  const pipelineSteps = [
    {
      num: "01",
      title: "ASSERTED CLAIM",
      desc: "Specific factual proposition asserted by a party or reporter.",
      detail: "e.g., 'Locks were changed on September 3 without providing tenant key.'"
    },
    {
      num: "02",
      title: "ORIGINATING SOURCE",
      desc: "Identifies who or what generated the initial assertion.",
      detail: "e.g., Primary tenant intake interview."
    },
    {
      num: "03",
      title: "PROVENANCE METADATA",
      desc: "Custody chain, timestamp, channel, and capture mechanics.",
      detail: "e.g., In-person desk intake logged with timestamped photo ID match."
    },
    {
      num: "04",
      title: "CORROBORATION / CONTRADICTION",
      desc: "Independent records confirming or conflicting with the claim.",
      detail: "e.g., Landlord email admitting lock turnover date confirms tenant claim."
    },
    {
      num: "05",
      title: "DISPOSITION STATUS",
      desc: "Designated evidentiary classification (Review Trace status).",
      detail: "e.g., REVIEWED — Directly supported by statutory lease agreement."
    },
    {
      num: "06",
      title: "UNRESOLVED QUESTIONS",
      desc: "Explicit identification of what remains unverified or outside scope.",
      detail: "e.g., Did tenant submit formal written rekey demand under § 92.161?"
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Scale className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 03
            </span>
          </div>
          <span className="coord-tick">[DE-JUDICIALIZED DECOMPOSITION]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Claim-Evidence Separation: Beyond Adult Credibility Contests
        </h3>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          Complex family safety, child welfare, and housing stability matters should <strong>never be reduced to a global credibility contest between two adults</strong>. Instead, each consequential factual assertion must be atomized and traced across a structured evidentiary pipeline.
        </p>
      </div>

      {/* 6-Step Visual Pipeline */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
        {pipelineSteps.map((step, idx) => (
          <div
            key={step.num}
            className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2.5 flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-1.5">
                <span className="text-[10px] font-bold text-[#971F26] uppercase">
                  STEP {step.num}
                </span>
                <span className="text-[10px] text-stone-500 font-bold uppercase">PIPELINE STAGE</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-[#1C1D1D]">
                {step.title}
              </h4>
              <p className="font-sans text-stone-700 text-[11.5px] leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="p-2.5 bg-white rounded border border-stone-300 text-[10.5px] text-stone-800 font-sans italic">
              <strong>Example:</strong> {step.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-white border border-stone-300 rounded-lg text-xs font-mono text-stone-700 flex items-center justify-between">
        <span>Prevents wholesale character evaluations from erasing concrete documentary evidence.</span>
        <span className="text-[#971F26] font-bold">Atomized Facts &gt; Character Impressions</span>
      </div>
    </section>
  );
}
