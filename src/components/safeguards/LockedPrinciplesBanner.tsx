import React from "react";
import { Shield, Sparkles, CheckCircle, Scale, Compass, BookmarkCheck } from "lucide-react";

export function LockedPrinciplesBanner() {
  const principles = [
    {
      num: "01",
      axiom: "Related does not mean proven.",
      detail: "Tangential association with a dispute or previous administrative file does not satisfy the burden of proof for a distinct subsequent claim."
    },
    {
      num: "02",
      axiom: "Repeated does not mean independently corroborated.",
      detail: "A single party's narrative retold across 10 different agencies remains a single-origin report with an echo count of 10, not 10 corroborating sources."
    },
    {
      num: "03",
      axiom: "Demeanor is not provenance.",
      detail: "A participant's emotional presentation under intense institutional stress is a behavioral reaction, not evidentiary custody or documentary verification."
    },
    {
      num: "04",
      axiom: "Could not is not the same as would not.",
      detail: "Structural, logistical, or safety obstacles preventing appearance or document submission must never be coded as voluntary refusal to cooperate."
    },
    {
      num: "05",
      axiom: "A disputed allegation does not make surrounding conduct disappear.",
      detail: "Collateral retaliation, witness intimidation, and administrative interference are independent offenses that must be tracked separately from disputed substantive charges."
    },
    {
      num: "06",
      axiom: "A legal-rights decision should be traceable to the authority being enforced.",
      detail: "No rights-limiting restraint, child custody alteration, or housing exclusion may be enforced based on verbal folklore without citing the signed order and specific clause."
    },
    {
      num: "07",
      axiom: "A system can disagree. It should still be able to account for what it did with material information.",
      detail: "Agencies maintain statutory discretion to reject evidence or close files, but administrative legitimacy requires recording what was received, what was reviewed, and why."
    }
  ];

  return (
    <section className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md select-none font-sans">
      <div className="border-b border-stone-700 pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-300">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              CORE AXIOMS · SEVEN LOCKED PRINCIPLES
            </span>
          </div>
          <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
            [MANDATORY INTERPRETATION STANDARDS]
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          The Seven Locked Principles of Evidence Integrity
        </h3>

        <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          Multi-agency information continuity cannot function responsibly without firm epistemic safeguards. These seven locked principles govern how evidence must be interpreted across all partner agencies and data pipelines.
        </p>
      </div>

      {/* Grid of 7 Principles */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {principles.map((p, idx) => (
          <div
            key={p.num}
            className={`p-4 bg-stone-900 border border-stone-700 rounded-xl space-y-2 flex flex-col justify-between ${
              idx === 6 ? "sm:col-span-2 lg:col-span-3 bg-stone-800/80 border-amber-500/40" : ""
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-stone-800 pb-1.5">
                <span className="text-[10px] font-mono font-bold text-amber-300 uppercase">
                  AXIOM {p.num}
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
    </section>
  );
}
