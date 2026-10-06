import React from "react";
import { BookmarkCheck, Compass, ShieldCheck } from "lucide-react";

export function LockedPrinciplesBanner() {
  const principles = [
    {
      num: "01",
      axiom: "Related does not mean proven.",
      detail: "A relationship between records can justify authorized review without establishing the truth of either matter."
    },
    {
      num: "02",
      axiom: "Repeated does not mean independently corroborated.",
      detail: "Multiple records may derive from the same originating source. Repetition must not be counted as independent confirmation."
    },
    {
      num: "03",
      axiom: "Independent provenance does not automatically mean corroboration.",
      detail: "An independent source can support, contradict, contextualize, or fail to resolve a claim."
    },
    {
      num: "04",
      axiom: "Disputed does not mean irrelevant.",
      detail: "A contested record remains part of the review trace; its dispute and evidentiary effect should be recorded rather than erased."
    },
    {
      num: "05",
      axiom: "Demeanor is not provenance.",
      detail: "Observed presentation is contextual information. It does not establish where a record came from or whether that record is authentic."
    },
    {
      num: "06",
      axiom: "Could not is not the same as would not.",
      detail: "An access, logistical, communication, disability, or reported safety barrier should not silently be recoded as voluntary refusal."
    },
    {
      num: "07",
      axiom: "A legal-rights decision should be traceable to the authority being enforced.",
      detail: "The administrative record should identify the authority relied upon, what was reviewed, the provision understood to control, the resulting action, and a correction path."
    },
    {
      num: "08",
      axiom: "Evidence may be weighted. It should still be reviewed for what it actually is.",
      detail: "Review can assign different evidentiary weight without replacing claim-specific analysis with a global impression of the person who supplied the material."
    }
  ];

  const lockedDistinctions = [
    { left: "referral", right: "successful handoff" },
    { left: "receipt", right: "accessibility" },
    { left: "accessibility", right: "review" },
    { left: "closure", right: "factual resolution" },
    { left: "repetition", right: "independent corroboration" },
    { left: "association", right: "proof" },
    { left: "fear / barrier", right: "refusal" },
    { left: "administrative ownership", right: "factual authority" }
  ];

  return (
    <section className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-8 shadow-md select-none font-sans">
      {/* Header */}
      <div className="border-b border-stone-700 pb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-amber-300">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              EVIDENCE INTEGRITY PRINCIPLES
            </span>
          </div>
          <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
            [PROPOSED MWT INTERPRETATION SAFEGUARDS]
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          Evidence Integrity Principles
        </h3>

        <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          These proposed principles constrain how continuity metadata should be interpreted. They are designed to preserve context without converting association, repetition, demeanor, or source independence into automatic conclusions.
        </p>

        {/* Governing Principle Banner */}
        <div className="p-4 bg-stone-900 border-l-4 border-l-amber-300 border border-stone-800 rounded-r-xl space-y-1 mt-4">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 block">
            GOVERNING PRINCIPLE
          </span>
          <p className="text-base sm:text-lg font-serif italic font-bold text-amber-100">
            &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
          </p>
        </div>
      </div>

      {/* 8 Principles Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {principles.map((p) => (
          <div
            key={p.num}
            className="p-4 bg-stone-900 border border-stone-700 rounded-xl space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-stone-800 pb-1.5">
                <span className="text-[10px] font-mono font-bold text-amber-300 uppercase">
                  PRINCIPLE {p.num}
                </span>
                <BookmarkCheck className="w-3.5 h-3.5 text-stone-500" />
              </div>
              <h4 className="font-serif font-bold text-base text-amber-100 leading-snug">
                &ldquo;{p.axiom}&rdquo;
              </h4>
            </div>

            <p className="text-stone-300 text-xs font-sans leading-relaxed pt-1">
              {p.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Locked Distinctions Banner */}
      <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl space-y-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-amber-300 font-bold uppercase border-b border-stone-800 pb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>8 LOCKED INSTITUTIONAL DISTINCTIONS</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
          {lockedDistinctions.map((d, i) => (
            <div key={i} className="p-2 bg-stone-950/80 border border-stone-800 rounded">
              <span className="text-stone-300 font-bold">{d.left}</span>{" "}
              <span className="text-red-400 font-bold">≠</span>{" "}
              <span className="text-stone-300 font-bold">{d.right}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
