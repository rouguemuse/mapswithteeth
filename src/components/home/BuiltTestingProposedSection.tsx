import React from "react";
import { CheckCircle2, FlaskConical, Milestone, ShieldCheck } from "lucide-react";

export function BuiltTestingProposedSection() {
  return (
    <section className="space-y-8 select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold">
            STAGE DISCLOSURE & DEVELOPMENT HORIZON
          </span>
          <span className="coord-tick text-stone-700">[PROTOTYPE · FIELD VALIDATION · ROADMAP]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          What is built, what we&apos;re testing, and what comes next
        </h2>

        <p className="text-base sm:text-[17px] text-stone-900 max-w-3xl leading-relaxed font-sans font-medium">
          Maps With Teeth is in active development. We distinguish working prototype features from pilot research and future institutional ideas.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Column 1: Active in this prototype */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-7 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3 font-mono text-xs">
            <span className="text-emerald-900 font-bold uppercase flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>STAGE 01 · OPERATIONAL</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-[#F5F1E8] border border-[#1C1D1D] text-[#1C1D1D] font-bold text-[11px]">
              V0 LIVE
            </span>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Active in This Prototype
            </h3>
            <p className="text-sm text-stone-700 font-sans mt-0.5">
              Features currently functioning in this public release.
            </p>
          </div>

          <ul className="space-y-2.5 text-sm sm:text-[14.5px] text-stone-900 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Barrier-first resource search</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Texas Deep Dive (statutes & Central TX counties)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Other Ways Through (national & industry funds)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Friction tagging & access conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Verification & evidence status metadata</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Ask Us to Look (structured gap intake)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Community feedback & pressure testing</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Central Texas Field Validation */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-7 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3 font-mono text-xs">
            <span className="text-amber-950 font-bold uppercase flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4 text-amber-800" />
              <span>STAGE 02 · PILOT IN PROGRESS</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-[#F5F1E8] border border-[#1C1D1D] text-[#1C1D1D] font-bold text-[11px]">
              TESTING
            </span>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Central Texas Field Validation
            </h3>
            <p className="text-sm text-stone-700 font-sans mt-0.5">
              Active research with regional advocates and workers.
            </p>
          </div>

          <ul className="space-y-2.5 text-sm sm:text-[14.5px] text-stone-900 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Deeper county-level verification (Travis, WilCo, Harris)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Tracking where referrals fail in real-world practice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Eligibility and intake friction monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Resource availability & funding freeze changes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Pathway outcomes and verification auditing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Handoff and context-loss patterns across systems</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Future Institutional Roadmap */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-7 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3 font-mono text-xs">
            <span className="text-[#971F26] font-bold uppercase flex items-center gap-1.5">
              <Milestone className="w-4 h-4 text-[#971F26]" />
              <span>STAGE 03 · FUTURE PROPOSAL</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-[#F5F1E8] border border-[#1C1D1D] text-[#1C1D1D] font-bold text-[11px]">
              HORIZON
            </span>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Future Institutional Roadmap
            </h3>
            <p className="text-sm text-stone-700 font-sans mt-0.5">
              Proposed long-term systems infrastructure.
            </p>
          </div>

          <ul className="space-y-2.5 text-sm sm:text-[14.5px] text-stone-900 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Bridge / Continuity Receipt pilot</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Structured cross-agency handoff methods</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Survivor-controlled Organizer & context tools</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Institutional partner casework workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Stronger zero-knowledge privacy & security architecture</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
