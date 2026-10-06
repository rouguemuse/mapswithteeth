import React from "react";
import { GitBranch, ShieldAlert, AlertTriangle, ArrowRight, CheckCircle2, Split } from "lucide-react";

export function RetaliationSeparation() {
  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Split className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 05
            </span>
          </div>
          <span className="coord-tick">[TWO-TRACK RETALIATION MODEL]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Retaliation &amp; Interference Separation
        </h3>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="px-3 py-1 bg-[#1C1D1D] text-amber-200 text-xs font-mono font-bold rounded-full">
            Evidence of retaliation does not prove the original allegation.
          </span>
          <span className="px-3 py-1 bg-[#971F26] text-white text-xs font-mono font-bold rounded-full">
            A disputed allegation does not make surrounding conduct disappear.
          </span>
        </div>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl pt-2">
          In high-conflict domestic, housing, and child welfare proceedings, systems often make one of two catastrophic errors: they either assume retaliatory acts automatically prove the underlying original charge, or conversely, dismiss severe witness intimidation because the original charge remains unadjudicated. Administrative traceability requires <strong>two strictly segregated analytical tracks</strong>.
        </p>
      </div>

      {/* Two-Track Visual Diagram */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Track A: Underlying Allegation */}
        <div className="p-5 bg-[#F5F1E8] border-2 border-stone-400 rounded-xl space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-stone-300 pb-2">
            <span className="px-2.5 py-1 bg-stone-200 text-stone-800 rounded text-[11px] font-mono font-bold uppercase">
              TRACK A · SUBSTANTIVE ACTION
            </span>
            <span className="text-[11px] font-mono text-stone-500">ORIGINATING EVENT</span>
          </div>

          <h4 className="font-serif font-bold text-lg text-[#1C1D1D]">
            Underlying Substantive Dispute
          </h4>

          <p className="text-xs font-sans text-stone-700 leading-relaxed">
            The core historical allegation or legal dispute that initially brought the parties before the institution (e.g. physical assault claim, property damage, lease breach, child neglect report).
          </p>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-2.5 bg-white rounded border border-stone-300 space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase">EVIDENTIARY CRITERIA</span>
              <p className="font-sans text-stone-800">
                Requires direct physical evidence, independent eyewitnesses, medical forensics, or corroborated admissions.
              </p>
            </div>

            <div className="p-2.5 bg-white rounded border border-stone-300 space-y-1">
              <span className="text-[10px] font-bold text-red-600 uppercase">INCORRECT LEAP TO AVOID</span>
              <p className="font-sans text-stone-800">
                Assuming Track A is automatically proven merely because the respondent later acted dishonestly, angrily, or aggressively during litigation.
              </p>
            </div>
          </div>

          <div className="p-2.5 bg-stone-100 rounded text-[11px] font-mono text-stone-700 border border-stone-300">
            <strong>Adjudication Standard:</strong> Evaluated independently on its own merits under applicable evidentiary rules.
          </div>
        </div>

        {/* Track B: Retaliation & Administrative Interference */}
        <div className="p-5 bg-[#F5F1E8] border-2 border-[#971F26] rounded-xl space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-red-200 pb-2">
            <span className="px-2.5 py-1 bg-red-100 text-[#971F26] rounded text-[11px] font-mono font-bold uppercase">
              TRACK B · COLLATERAL INTERFERENCE
            </span>
            <span className="text-[11px] font-mono text-red-600 font-bold">INDEPENDENT OFFENSE</span>
          </div>

          <h4 className="font-serif font-bold text-lg text-[#1C1D1D]">
            Retaliation, Intimidation &amp; Cross-Filing
          </h4>

          <p className="text-xs font-sans text-stone-700 leading-relaxed">
            Actions taken after the initial dispute to silence participants, manipulate evidence, retaliate through secondary agencies, or intimidate witnesses (e.g. retaliatory CPS reports, doxxing, key confiscation, protective order violations).
          </p>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-2.5 bg-white rounded border border-stone-300 space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase">EVIDENTIARY CRITERIA</span>
              <p className="font-sans text-stone-800">
                Requires digital audit trails, phone records, subpoenaed cross-filing records, timestamped security footage, or witness statements.
              </p>
            </div>

            <div className="p-2.5 bg-white rounded border border-stone-300 space-y-1">
              <span className="text-[10px] font-bold text-red-600 uppercase">INCORRECT LEAP TO AVOID</span>
              <p className="font-sans text-stone-800">
                Ignoring Track B interference or closing safety files because the underlying Track A case was dismissed or lacked physical evidence.
              </p>
            </div>
          </div>

          <div className="p-2.5 bg-red-50 rounded text-[11px] font-mono text-[#971F26] border border-red-200 font-medium">
            <strong>Adjudication Standard:</strong> Constitutes an independent safety threat and standalone legal/ethical breach regardless of Track A outcome.
          </div>
        </div>
      </div>

      {/* Synthesis Insight Banner */}
      <div className="p-4 bg-white border border-[#1C1D1D] rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-[#971F26]">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase">Administrative Safeguard Requirement</span>
        </div>
        <p className="text-xs font-sans text-stone-800 leading-relaxed">
          Case management software and multi-agency referral protocols must <strong>maintain separate record IDs</strong> for substantive claims and subsequent retaliatory acts. When an agency records a cross-report (e.g. a retaliatory counter-allegation filed 24 hours after a protective order petition), the intake must link the relationship without conflating the evidentiary files.
        </p>
      </div>
    </section>
  );
}
