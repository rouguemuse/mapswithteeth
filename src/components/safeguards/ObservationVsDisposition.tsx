import React from "react";
import { Eye, Shield, UserCheck } from "lucide-react";

export function ObservationVsDisposition() {
  const contrasts = [
    {
      category: "ADULT PRESENTATION",
      rawObservation: "Participant speaks rapidly, pauses or stutters, repeats chronology, and appears visibly distressed during a high-stakes interview.",
      improperSubjectiveLabel: "Participant is unstable or globally unreliable.",
      correctCategorization: "OBSERVATION: communication style and visible distress recorded. REVIEW BOUNDARY: claim-specific records and independently verifiable material are evaluated separately."
    },
    {
      category: "CHILD PRESENTATION",
      rawObservation: "Child appears calm, social, affectionate, or engaged during the observed school or service interaction.",
      improperSubjectiveLabel: "The child appears happy, therefore no external safety concern can exist.",
      correctCategorization: "OBSERVATION: presentation in this setting recorded. REVIEW BOUNDARY: the observation may inform context but does not resolve unrelated or external claims."
    },
    {
      category: "INSTITUTIONAL RECORD",
      rawObservation: "Attendance, medical, school, court, device, or other institutional records contain information relevant to a reported chronology.",
      improperSubjectiveLabel: "The record proves the entire allegation, or can be ignored because the person who identified it seemed unreliable.",
      correctCategorization: "PROVENANCE: identify the record's source and scope. EVIDENTIARY EFFECT: determine whether it supports, contradicts, contextualizes, or fails to resolve a specific claim."
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Eye className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOLS 07 &amp; 08
            </span>
          </div>
          <span className="coord-tick">[OBSERVATION / INFERENCE SEPARATION]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Observation vs. Disposition &amp; Demeanor vs. Provenance
        </h3>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="px-3 py-1 bg-[#1C1D1D] text-amber-200 text-xs font-mono font-bold rounded-full">
            Evidence may be weighted. It should still be reviewed for what it actually is.
          </span>
          <span className="px-3 py-1 bg-[#971F26] text-white text-xs font-mono font-bold rounded-full">
            Demeanor is not provenance.
          </span>
        </div>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl pt-2">
          Demeanor, distress, communication style, or generalized credibility impressions should not substitute for review of independently verifiable material. Traceability separates what was observed from what was inferred and keeps both separate from the provenance and evidentiary effect of a record.
        </p>
      </div>

      <div className="space-y-4">
        {contrasts.map((item, idx) => (
          <div
            key={item.category}
            className="p-5 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-3 shadow-2xs"
          >
            <div className="flex items-center justify-between border-b border-stone-300 pb-2">
              <span className="text-xs font-mono font-bold text-[#971F26] uppercase">
                DOMAIN: {item.category}
              </span>
              <span className="text-[10px] font-mono text-stone-500 uppercase">
                ILLUSTRATIVE CASE {idx + 1}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-stone-300 space-y-1">
                <span className="text-[10px] font-mono font-bold text-stone-500 uppercase block">
                  1. OBSERVATION / RECORD
                </span>
                <p className="font-sans text-stone-800 leading-relaxed">
                  {item.rawObservation}
                </p>
              </div>

              <div className="p-3 bg-red-50/80 rounded-lg border border-red-200 space-y-1">
                <span className="text-[10px] font-mono font-bold text-red-700 uppercase block">
                  2. INFERENCE TO AVOID
                </span>
                <p className="font-sans text-red-950 italic leading-relaxed">
                  {item.improperSubjectiveLabel}
                </p>
              </div>

              <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-200 space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase block">
                  3. TRACEABLE SEPARATION
                </span>
                <p className="font-sans text-emerald-950 font-medium leading-relaxed">
                  {item.correctCategorization}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border border-[#1C1D1D] rounded-xl grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <h5 className="text-xs font-mono font-bold text-[#971F26] uppercase flex items-center gap-1.5">
            <UserCheck className="w-4 h-4" /> Demeanor Is Context
          </h5>
          <p className="text-xs font-sans text-stone-700 leading-relaxed">
            Calm, anger, hesitation, distress, repetition, flat affect, or disorganization may be recorded as observed presentation. None is a global truth or falsity score.
          </p>
        </div>

        <div className="space-y-1">
          <h5 className="text-xs font-mono font-bold text-[#1C1D1D] uppercase flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-stone-700" /> Provenance Is Origin &amp; Context
          </h5>
          <p className="text-xs font-sans text-stone-700 leading-relaxed">
            Provenance records where information came from, when it was created, and whether it is independent or derivative. Provenance does not by itself certify truth.
          </p>
        </div>
      </div>
    </section>
  );
}
