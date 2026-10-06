import React from "react";
import { AlertTriangle, Scale, Split } from "lucide-react";

export function RetaliationSeparation() {
  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Split className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 05
            </span>
          </div>
          <span className="coord-tick">[TWO-TRACK REVIEW]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Retaliation &amp; Interference Separation
        </h3>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="px-3 py-1 bg-[#1C1D1D] text-amber-200 text-xs font-mono font-bold rounded-full">
            Evidence of subsequent conduct does not prove the underlying allegation.
          </span>
          <span className="px-3 py-1 bg-[#971F26] text-white text-xs font-mono font-bold rounded-full">
            Disagreement with an allegation does not establish retaliation.
          </span>
          <span className="px-3 py-1 bg-white border border-stone-400 text-stone-800 text-xs font-mono font-bold rounded-full">
            A disputed allegation does not make subsequent conduct irrelevant.
          </span>
        </div>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl pt-2">
          The proposed safeguard keeps two questions separate: the merits of an underlying allegation or dispute, and the meaning of conduct that occurs afterward. Later conduct may be alleged or potentially relevant as retaliation, interference, intimidation, or lawful responsive action. Its classification should follow evidence and applicable authority, not chronology alone.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 bg-[#F5F1E8] border-2 border-stone-400 rounded-xl space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-stone-300 pb-2">
            <span className="px-2.5 py-1 bg-stone-200 text-stone-800 rounded text-[11px] font-mono font-bold uppercase">
              TRACK A · UNDERLYING MATTER
            </span>
            <span className="text-[11px] font-mono text-stone-500">SEPARATE MERITS REVIEW</span>
          </div>

          <h4 className="font-serif font-bold text-lg text-[#1C1D1D]">
            Underlying Allegation or Dispute
          </h4>

          <p className="text-xs font-sans text-stone-700 leading-relaxed">
            Evaluate the original allegation, report, filing, or dispute under the authority and evidentiary rules that actually govern it. The later behavior of another participant does not retroactively establish the truth of the original claim.
          </p>

          <div className="p-3 bg-white rounded border border-stone-300 text-xs text-stone-800">
            <strong className="font-mono text-[10px] uppercase text-stone-500 block mb-1">Review question</strong>
            What evidence supports, contradicts, contextualizes, or leaves unresolved the original matter?
          </div>
        </div>

        <div className="p-5 bg-[#F5F1E8] border-2 border-[#971F26] rounded-xl space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-red-200 pb-2">
            <span className="px-2.5 py-1 bg-red-100 text-[#971F26] rounded text-[11px] font-mono font-bold uppercase">
              TRACK B · SUBSEQUENT CONDUCT
            </span>
            <span className="text-[11px] font-mono text-red-700 font-bold">SEPARATE CLASSIFICATION</span>
          </div>

          <h4 className="font-serif font-bold text-lg text-[#1C1D1D]">
            Later Conduct &amp; Claimed Motive
          </h4>

          <p className="text-xs font-sans text-stone-700 leading-relaxed">
            Preserve and review subsequent conduct that may be alleged or potentially relevant as retaliation, interference, intimidation, or lawful responsive action. Timing can establish sequence; it does not establish motive or unlawfulness by itself.
          </p>

          <div className="p-3 bg-white rounded border border-stone-300 text-xs text-stone-800 space-y-2">
            <strong className="font-mono text-[10px] uppercase text-stone-500 block">Lawful responsive conduct remains lawful to pursue</strong>
            <p>
              A person remains free to dispute an allegation, provide contrary evidence, retain counsel, file lawful pleadings, make their own reports, seek review, and use lawful administrative or judicial processes.
            </p>
          </div>

          <div className="p-3 bg-red-50 rounded border border-red-200 text-xs text-red-950">
            <strong className="font-mono text-[10px] uppercase text-red-700 block mb-1">Review question</strong>
            Does the later conduct independently warrant review under an applicable safety, administrative, civil, or criminal authority?
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border border-[#1C1D1D] rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-[#971F26]">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase">Administrative Traceability Rule</span>
        </div>
        <p className="text-xs font-sans text-stone-800 leading-relaxed">
          A continuity system may record that two matters are temporally or procedurally related without pre-classifying the later conduct as retaliatory. The relationship, provenance, evidence, disposition, and decision owner should remain separately traceable.
        </p>
      </div>
    </section>
  );
}
