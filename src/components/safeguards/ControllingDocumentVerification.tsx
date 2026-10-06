import React from "react";
import { FileCheck, ArrowRight, ShieldAlert, FileText, AlertOctagon, CornerDownRight } from "lucide-react";

export function ControllingDocumentVerification() {
  const steps = [
    {
      num: "01",
      label: "ASSERTION OF RESTRAINT",
      desc: "An agency worker, landlord, school administrator, or opposing party asserts a legal limitation on a person's rights or physical presence.",
      example: "e.g., 'Mother cannot pick up the child from school per the restraining order.'"
    },
    {
      num: "02",
      label: "CONTROLLING INSTRUMENT",
      desc: "Identification and retrieval of the specific operative legal document, court order, or statutory provision governing the scenario.",
      example: "e.g., Temporary Protective Order issued by 425th District Court, Cause #24-0891-FC."
    },
    {
      num: "03",
      label: "EXACT OPERATIVE CLAUSE",
      desc: "Verification of the precise text and geographic/custodial scope within the document rather than relying on verbal summaries.",
      example: "e.g., Clause 4(b) restricts respondent father from school premises; petitioner mother retains unrestricted pickup rights."
    },
    {
      num: "04",
      label: "PROPORTIONATE ACTION",
      desc: "Execution of administrative or protective conduct strictly limited to the documented legal authority.",
      example: "e.g., School verifies mother's photo ID and facilitates child release, noting father's exclusion in campus security file."
    },
    {
      num: "05",
      label: "NOTICE & CORRECTION PATH",
      desc: "Immediate provision of written notice and formal administrative/judicial correction pathway to the affected individual.",
      example: "e.g., Providing written citation to the order and clerk contact if any party disputes custody terms."
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 06
            </span>
          </div>
          <span className="coord-tick">[RIGHTS-LIMITING TRACEABILITY]</span>
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
          One of the most damaging administrative failure modes occurs when frontline staff enforce informal verbal claims (<em>&ldquo;the officer said you can&rsquo;t be here,&rdquo; &ldquo;there is a case open so you have no rights&rdquo;</em>) without ever inspecting the signed court order, lease agreement, or statutory authority. Rights-limiting actions must follow a strict five-stage verification trace.
        </p>
      </div>

      {/* 5-Step Verification Flow */}
      <div className="space-y-3">
        {steps.map((step, idx) => (
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
                  TRACE REQUIREMENT &amp; OPERATIONAL CHECK:
                </span>
                {step.example}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rule Callout */}
      <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-[#971F26]">
          <AlertOctagon className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase">Prohibition of Verbal Folklore Restraints</span>
        </div>
        <p className="text-xs font-sans text-red-950 leading-relaxed">
          No public agency, shelter, housing authority, or educational institution may alter a parent&rsquo;s legal custody, restrict housing access, or prohibit parental contact based solely on verbal assertions, unverified hearsay, or pending unadjudicated referrals. The controlling order and specific clause must be referenced in the administrative log.
        </p>
      </div>
    </section>
  );
}
