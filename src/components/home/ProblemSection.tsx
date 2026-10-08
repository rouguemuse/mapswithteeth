import React from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, FileSpreadsheet, UserCheck, XCircle } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm font-sans scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-4">
        <div className="flex items-center gap-2 text-[#971F26]">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest">
            THE PROBLEM · THE SEAM DEFICIT
          </span>
        </div>
        <span className="coord-tick">[INSTITUTIONAL RECORD ≠ LIVED OUTCOME]</span>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          When a referral ends at &ldquo;sent&rdquo;
        </h2>
        <p className="text-stone-800 text-base sm:text-lg leading-relaxed max-w-3xl">
          Across crisis navigation, institutions treat case-file closure as task completion. When systems don’t exchange verified handoffs, the person in crisis becomes the integration layer.
        </p>
      </div>

      {/* Focused Visual Comparison: Institutional Record vs. Lived Reality */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Left Column: Institutional Record */}
        <div className="bg-[#F5F1E8] border border-stone-300 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
              <FileSpreadsheet className="w-3.5 h-3.5 text-stone-500" />
              <span>Institutional Record</span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase bg-stone-200 text-stone-700 px-2 py-0.5 rounded">
              FILE: CLOSED
            </span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-mono">
            <li className="flex items-start gap-2">
              <span className="text-stone-400 shrink-0">•</span>
              <span><strong>Status:</strong> Dispatched referral to secondary agency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-stone-400 shrink-0">•</span>
              <span><strong>Metric:</strong> Intake marked &ldquo;Referred Out / Complete&rdquo;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-stone-400 shrink-0">•</span>
              <span><strong>Liability:</strong> Responsibility discharged at outbound transmission</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Lived Reality */}
        <div className="bg-[#FDF2F2] border border-[#971F26]/30 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#971F26]/20 pb-2.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#971F26] flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5 text-[#971F26]" />
              <span>Lived Outcome</span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2 py-0.5 rounded">
              SEAM COLLAPSE
            </span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-900 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold shrink-0">•</span>
              <span><strong>No Reception:</strong> Receiving agency has full waitlists or dropped intake</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold shrink-0">•</span>
              <span><strong>Retraumatization:</strong> Individual forced to re-tell traumatic facts from scratch</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#971F26] font-bold shrink-0">•</span>
              <span><strong>Zero Trace:</strong> No acknowledgment or assigned next milestone owner</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Concrete Example Note & Link */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-t border-[#D9D1C4]">
        <span className="text-stone-700">
          A referral dispatched is not a handoff completed.
        </span>
        <Link
          href="/the-gap"
          className="inline-flex items-center gap-1.5 text-[#971F26] hover:text-[#7A181E] font-bold uppercase tracking-wider transition"
        >
          <span>Read &ldquo;The Seam Deficit&rdquo; Analysis</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
