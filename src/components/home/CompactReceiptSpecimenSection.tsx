import React from "react";
import Link from "next/link";
import { ArrowRight, FileCheck, CheckCircle2 } from "lucide-react";

export function CompactReceiptSpecimenSection() {
  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm font-sans">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-4">
        <div>
          <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
            PRACTICAL SPECIMEN · WHAT IT LOOKS LIKE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            One practical example: The Continuity Contact Record
          </h2>
        </div>
        <span className="coord-tick">[FICTIONAL DEMONSTRATION]</span>
      </div>

      <p className="text-stone-800 text-sm sm:text-base leading-relaxed max-w-3xl">
        A Continuity Contact Record gives the participant a structured, client-side receipt of an administrative encounter. It documents what was presented and who owns the next action—without asserting legal authority, determining credibility, or binding an agency to substantive claims.
      </p>

      {/* Compact Fictional Ledger Specimen */}
      <div className="bg-[#F5F1E8] border-2 border-stone-800 rounded-xl overflow-hidden shadow-2xs font-mono text-xs">
        {/* Specimen Header & Status */}
        <div className="bg-[#1C1D1D] text-[#F5F1E8] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-bold uppercase tracking-wider">
              DEMONSTRATION SPECIMEN — NOT AN ACTUAL CASE FILE
            </span>
          </div>
          <span className="text-[11px] text-stone-300">ID: DEMO-2026-0814</span>
        </div>

        {/* Specimen Details Grid */}
        <div className="p-4 sm:p-5 space-y-4 text-stone-800">
          <div className="grid sm:grid-cols-2 gap-3 pb-3 border-b border-stone-300">
            <div>
              <span className="text-[10px] text-stone-600 uppercase font-bold block">
                Encountering Entity
              </span>
              <span className="text-sm font-sans font-bold text-[#1C1D1D]">
                Central Legal Aid — Intake Desk
              </span>
            </div>
            <div>
              <span className="text-[10px] text-stone-600 uppercase font-bold block">
                Timestamp &amp; Setting
              </span>
              <span className="text-sm font-sans text-[#1C1D1D]">
                Aug 14, 2026 · In-Person Intake
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {/* 1. What was supplied */}
            <div className="p-3 bg-[#EEE8DD] rounded border border-stone-300 space-y-1">
              <span className="text-[10px] text-[#971F26] uppercase font-bold block">
                1. What Was Supplied
              </span>
              <ul className="space-y-1 font-sans text-[12px] text-stone-800">
                <li>• Protective Order Exhibit (SHA-256 digest recorded for baseline comparison)</li>
                <li>• Lease Notice (Tex. Prop. Code § 92.016)</li>
              </ul>
            </div>

            {/* 2. Acknowledgment status */}
            <div className="p-3 bg-[#EEE8DD] rounded border border-stone-300 space-y-1">
              <span className="text-[10px] text-[#971F26] uppercase font-bold block">
                2. Acknowledgment Status
              </span>
              <div className="flex items-center gap-1.5 text-stone-900 font-sans text-[12px] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Acknowledged (Intake Document Handled Only)</span>
              </div>
              <p className="font-sans text-[11px] text-stone-600">
                Merits not evaluated; procedural receipt only.
              </p>
            </div>

            {/* 3. Next responsible party */}
            <div className="p-3 bg-[#EEE8DD] rounded border border-stone-300 space-y-1">
              <span className="text-[10px] text-[#971F26] uppercase font-bold block">
                3. Next Decision Owner
              </span>
              <span className="font-sans text-[12px] font-bold text-stone-900 block">
                Housing Stabilization Unit · Triage Officer
              </span>
              <p className="font-sans text-[11px] text-stone-600">
                Target milestone: Eligibility review within 5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Specimen Notice Footer */}
        <div className="bg-[#EEE8DD] border-t border-stone-300 px-4 py-2 text-[11px] text-stone-600 font-sans flex items-center justify-between">
          <span>Non-implication notice: Does not establish agency endorsement, tort liability, or judicial fact-finding.</span>
          <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Tier: PARTICIPANT_RECORDED</span>
        </div>
      </div>

      {/* Link to Full Demonstration */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-stone-700">
          Encounter data is compiled client-side in the browser; no private files are stored centrally.
        </span>
        <Link
          href="/continuity#receipt-specimen"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1C1D1D] hover:bg-stone-800 text-white rounded font-bold uppercase tracking-wider transition"
        >
          <span>Test Interactive Specimen &amp; Export</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
