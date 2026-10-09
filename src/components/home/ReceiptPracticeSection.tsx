import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ReceiptPracticeSection() {
  return (
    <section id="practice" className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-6 sm:p-8 space-y-6 shadow-sm font-sans scroll-mt-24 select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C4B69E] pb-4">
        <div>
          <span className="text-xs font-mono text-mwt-oxblood font-bold uppercase tracking-wider block">
            SEE IT IN PRACTICE · WORKING SPECIMEN
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black tracking-tight">
            The Continuity Receipt
          </h2>
        </div>
        <span className="coord-tick">[FICTIONAL DEMONSTRATION DATA]</span>
      </div>

      <p className="text-mwt-graphite text-sm sm:text-base leading-relaxed max-w-3xl">
        A Continuity Receipt gives the participant a client-side, portable record of an administrative encounter. It documents what was presented, the current acknowledgment status, and who owns the next milestone—without asserting legal authority, deciding claim merits, or binding an agency.
      </p>

      {/* Featured Fictional Ledger Specimen Card */}
      <div className="bg-mwt-ivory border-2 border-mwt-black rounded-lg overflow-hidden shadow-2xs font-mono text-xs">
        {/* Specimen Header & Status */}
        <div className="bg-mwt-black text-mwt-ivory px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-bold uppercase tracking-wider">
              DEMONSTRATION SPECIMEN — NOT AN ACTUAL CASE FILE
            </span>
          </div>
          <span className="text-[11px] text-[#A39E94]">ID: DEMO-2026-0814</span>
        </div>

        {/* Specimen Details Grid */}
        <div className="p-4 sm:p-5 space-y-4 text-mwt-black">
          <div className="grid sm:grid-cols-2 gap-3 pb-3 border-b border-[#C4B69E]">
            <div>
              <span className="text-[10px] text-mwt-graphite uppercase font-bold block">
                Encountering Entity
              </span>
              <span className="text-sm font-sans font-bold text-mwt-black">
                Central Legal Aid — Intake Desk
              </span>
            </div>
            <div>
              <span className="text-[10px] text-mwt-graphite uppercase font-bold block">
                Timestamp &amp; Setting
              </span>
              <span className="text-sm font-sans text-mwt-black">
                Aug 14, 2026 · In-Person Intake
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {/* 1. What was supplied */}
            <div className="p-3 bg-mwt-parchment rounded-xs border border-[#C4B69E] space-y-1">
              <span className="text-[10px] text-mwt-oxblood uppercase font-bold block">
                1. What Was Supplied
              </span>
              <ul className="space-y-1 font-sans text-[12px] text-mwt-black">
                <li>• Protective Order Exhibit (SHA-256 digest recorded for baseline comparison)</li>
                <li>• Lease Notice (Tex. Prop. Code § 92.016)</li>
              </ul>
            </div>

            {/* 2. Acknowledgment status */}
            <div className="p-3 bg-mwt-parchment rounded-xs border border-[#C4B69E] space-y-1">
              <span className="text-[10px] text-mwt-oxblood uppercase font-bold block">
                2. Acknowledgment Status
              </span>
              <div className="flex items-center gap-1.5 text-mwt-black font-sans text-[12px] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Acknowledged (Intake Document Handled Only)</span>
              </div>
              <p className="font-sans text-[11px] text-mwt-graphite">
                Procedural handling record only; merits not evaluated.
              </p>
            </div>

            {/* 3. Next responsible party */}
            <div className="p-3 bg-mwt-parchment rounded-xs border border-[#C4B69E] space-y-1">
              <span className="text-[10px] text-mwt-oxblood uppercase font-bold block">
                3. Next Decision Owner
              </span>
              <span className="font-sans text-[12px] font-bold text-mwt-black block">
                Housing Stabilization Unit · Triage Officer
              </span>
              <p className="font-sans text-[11px] text-mwt-graphite">
                Target milestone: Eligibility review within 5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Five Invariant Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-[#C4B69E] text-center font-mono text-[11px]">
          <div className="p-2 bg-mwt-parchment rounded-xs border border-[#C4B69E]">
            <span className="font-bold text-mwt-oxblood block">Received ≠ Reviewed</span>
          </div>
          <div className="p-2 bg-mwt-parchment rounded-xs border border-[#C4B69E]">
            <span className="font-bold text-mwt-oxblood block">Referred ≠ Accepted</span>
          </div>
          <div className="p-2 bg-mwt-parchment rounded-xs border border-[#C4B69E]">
            <span className="font-bold text-mwt-oxblood block">Closed ≠ Resolved</span>
          </div>
          <div className="p-2 bg-mwt-parchment rounded-xs border border-[#C4B69E]">
            <span className="font-bold text-mwt-oxblood block">Contacted ≠ Answered</span>
          </div>
          <div className="p-2 bg-mwt-parchment rounded-xs border border-[#C4B69E] col-span-2 sm:col-span-1">
            <span className="font-bold text-mwt-oxblood block">Reported ≠ Proven</span>
          </div>
        </div>

        {/* Specimen Notice Footer */}
        <div className="bg-mwt-parchment border-t border-[#C4B69E] px-4 py-2 text-[11px] text-mwt-graphite font-sans flex flex-wrap items-center justify-between gap-1">
          <span>Non-implication notice: Does not establish agency endorsement, tort liability, or judicial fact-finding.</span>
          <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Tier: PARTICIPANT_RECORDED</span>
        </div>
      </div>

      {/* Direct Links to Working Tools */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-mwt-graphite">
          Personal and institutional models preserve process facts client-side without storing private case files.
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/continuity#pipeline-demo"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-mwt-oxblood hover:bg-mwt-oxblood-dark text-white rounded-xs font-bold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-mwt-oxblood"
          >
            <span>Explore 7-Stage Pipeline Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/continuity#receipt-specimen"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-mwt-black hover:bg-[#2B2724] text-white rounded-xs font-bold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-mwt-oxblood"
          >
            <span>Inspect Specimen Ledger</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
