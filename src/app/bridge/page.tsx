import React from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Shuffle,
  ArrowRight,
  ShieldCheck,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Building2,
  Clock,
  Fingerprint,
  Layers,
  Lock,
  Compass,
  FolderArchive,
  FileCheck
} from "lucide-react";

export default function BridgePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 select-none font-sans">
      {/* 1. Hero */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Shuffle className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              CONTINUITY INFRASTRUCTURE LAYER · STAGE 03
            </span>
          </div>
          <StatusBadge type="product" status="PROTOTYPE" label="STAGE 03 PROTOTYPE" timestamp="FIELD SPECIFICATION" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Bridge: A referral is not a handoff.
        </h1>

        <p className="text-base sm:text-lg text-stone-900 max-w-3xl leading-relaxed font-sans font-medium">
          People are routinely sent from one institution to another while the context explaining why they are there disappears along the way. Finding the next door should not require starting the entire story over.
        </p>
      </div>

      {/* 2. The Problem: The Disconnected Institutional Loop */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-diagram">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              SYSTEMIC FAILURE POINT
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              The Problem: The Endless Referral Loop
            </h2>
          </div>
          <span className="coord-tick">[RUNAROUND CYCLE: A → B → C → A]</span>
        </div>

        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          Every handoff can mean another intake, another explanation, another document request, and another opportunity for critical context to vanish. When agencies operate in disconnected silos, people get caught in circular dead ends:
        </p>

        {/* Circular Loop Visual Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">TOUCHPOINT 01</span>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D]">Police / Crisis Hotline</h3>
            <p className="text-xs text-stone-800 font-sans leading-snug">
              Incident recorded. Labeled &ldquo;civil matter&rdquo; or out of jurisdiction. Referred to County Shelter.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">TOUCHPOINT 02</span>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D]">County Shelter</h3>
            <p className="text-xs text-stone-800 font-sans leading-snug">
              Capacity full; declines due to companion animal or address mismatch. Referred to Legal Aid.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">TOUCHPOINT 03</span>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D]">Legal Aid Office</h3>
            <p className="text-xs text-stone-800 font-sans leading-snug">
              Cannot assist without original offense report number. Told to return to Touchpoint 01.
            </p>
          </div>

          <div className="p-4 bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg space-y-1.5 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">THE DEAD END</span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#971F26]">Context Lost</h3>
              <p className="text-xs text-stone-900 font-sans leading-snug">
                40+ hours spent. Documents scattered. No single decision-owner identified.
              </p>
            </div>
            <span className="text-[9.5px] font-mono font-bold text-[#971F26] uppercase bg-white/90 px-2 py-0.5 rounded border border-[#971F26]/30 self-start mt-2">
              REPEAT CYCLE
            </span>
          </div>
        </div>
      </section>

      {/* 3. The Continuity Receipt */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
            CORE CONTINUITY SPECIFICATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            The Continuity Receipt
          </h2>
          <p className="text-sm sm:text-base text-stone-800 mt-1 leading-relaxed font-sans">
            A standardized, survivor-held record generated at each institutional encounter to stop context from vanishing.
          </p>
        </div>

        {/* Mock Continuity Receipt Display */}
        <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-dashed border-[#1C1D1D] pb-4">
            <div>
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                MAPS WITH TEETH CONTINUITY RECEIPT SPECIMEN · [PROTOTYPE]
              </span>
              <span className="font-bold text-base sm:text-lg text-[#1C1D1D] font-mono">
                RECEIPT ID: CR-2026-TX-08942
              </span>
            </div>
            <span className="px-2.5 py-1 bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] font-mono font-bold text-xs rounded-xs">
              ✓ CONTEXT DOCUMENTED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            {/* Left Column: Who / When / Reference / What was presented */}
            <div className="space-y-3.5">
              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">1. WHO & JURISDICTION</span>
                <p className="text-stone-900 font-bold font-sans text-sm">Austin Police Dept · Victim Services Unit</p>
                <p className="text-stone-700 text-xs font-sans">Officer J. Miller · Badge #4102 · Travis County, TX</p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">2. WHEN & CONTACT METHOD</span>
                <p className="text-stone-900 font-sans text-xs sm:text-sm">August 28, 2026 · 14:15 CST · In-Person Desk Intake</p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">3. REFERENCE & IDENTIFIER</span>
                <p className="text-stone-900 font-mono font-semibold text-xs">Incident Report #: APD-2026-0828-441</p>
                <p className="text-stone-600 font-mono text-[11px]">Original CAD Call Log: #26-240-0891</p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">4. WHAT WAS PRESENTED</span>
                <p className="text-stone-900 font-sans text-xs leading-snug">• Coercive phone tracking via shared cellular plan</p>
                <p className="text-stone-900 font-sans text-xs leading-snug">• Threat text messages & apartment lease copy</p>
                <p className="text-stone-700 text-xs italic font-sans pt-1 border-t border-[#D9D1C4]/60">
                  Evidence Offered: 14 screenshots, 1 lease agreement. Evidence Reviewed: Lease only.
                </p>
              </div>
            </div>

            {/* Right Column: What Happened / Why / What Happens Next */}
            <div className="space-y-3.5">
              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">5. WHAT HAPPENED & ACTION TAKEN</span>
                <p className="text-stone-900 font-bold font-sans text-sm">Action Declined · Labeled &ldquo;Civil Dispute&rdquo;</p>
                <p className="text-stone-700 text-xs font-sans">No formal protective order application initiated.</p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">6. WHY (STATED REASON)</span>
                <p className="text-stone-900 font-sans text-xs">Officer stated carrier account primary name is spouse.</p>
                <p className="text-[#971F26] text-xs font-sans font-semibold pt-1 border-t border-[#D9D1C4]/60">
                  System note: Fails to recognize federal Safe Connections Act (47 U.S.C. § 345) statutory remedy.
                </p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#FDF2F2] border border-[#971F26] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">7. WHAT HAPPENS NEXT</span>
                <p className="text-stone-900 font-bold font-sans text-xs sm:text-sm">Referral Destination: Legal Aid of NorthWest Texas</p>
                <p className="text-stone-800 text-xs font-sans">Next Decision-Owner: Staff Attorney / Intake Paralegal</p>
                <p className="text-stone-800 text-xs font-sans">Documents Needed: Signed advocate verification letter</p>
                <p className="text-[#971F26] font-bold font-mono text-xs pt-1">Deadline: September 4, 2026</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D9D1C4] pt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-600">
            <span>Prototype Format: Reference Record Only</span>
            <span>Controlled by user · Not automatically shared with any organization</span>
          </div>
        </div>
      </section>

      {/* 4. Context Before Closure */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
            CLOSURE VERIFICATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Context Before Closure
          </h2>
          <p className="text-sm sm:text-base text-stone-800 mt-1 leading-relaxed font-sans">
            &ldquo;Closed&rdquo; is not the same as &ldquo;resolved.&rdquo; When an agency closes a file or refers someone away, the system must capture what happened before the trail goes cold.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 sm:p-5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg space-y-2.5">
            <h3 className="font-mono font-bold text-xs uppercase text-[#1C1D1D] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />
              <span>What Standard Systems Show:</span>
            </h3>
            <div className="p-3 bg-[#1C1D1D] text-white rounded font-mono text-xs">
              STATUS: CASE CLOSED
            </div>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              No record of why it was closed, whether evidence was inspected, where the person was sent, or whether the new agency can actually help.
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-[#F5F1E8] border-2 border-[#971F26] rounded-lg space-y-2.5">
            <h3 className="font-mono font-bold text-xs uppercase text-[#971F26] flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#971F26]" />
              <span>What Bridge Captures:</span>
            </h3>
            <div className="p-3 bg-[#FDF2F2] border border-[#971F26] text-stone-900 rounded font-sans text-xs space-y-1">
              <p><strong>Closed by:</strong> Agency A (Austin PD)</p>
              <p><strong>Reason given:</strong> Jurisdiction / carrier policy</p>
              <p><strong>Unreviewed:</strong> Threat logs X & Y</p>
              <p><strong>Referred to:</strong> Agency B (declined: originated in Agency A)</p>
              <p className="text-[#971F26] font-bold font-mono uppercase text-[11px] pt-1">
                FLAG: NO FUNCTIONING DECISION-OWNER IDENTIFIED
              </p>
            </div>
            <p className="text-stone-800 text-xs sm:text-sm leading-relaxed">
              Surfaces procedural runarounds to legal advocates, identifying exactly where institutional responsibility evaporated.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Survivor-Controlled Documentation (Organizer & Originals Vault) */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
            DATA SOVEREIGNTY & PRIVACY
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Survivor-Controlled Documentation: Tell it once. Carry it forward.
          </h2>
          <p className="text-sm sm:text-base text-stone-800 mt-1 leading-relaxed font-sans">
            The record belongs entirely to the person navigating the system. Maps With Teeth does not decide whether allegations are true, does not report to government databases, and does not automatically share files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold text-xs uppercase">
              <FolderArchive className="w-4 h-4" />
              <span>SURVIVOR ORGANIZER</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-stone-800 leading-relaxed">
              Structure incidents, dates, communications, agencies contacted, people involved, report numbers, deadlines, and outcomes into a clear chronological timeline.
            </p>
          </div>

          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold text-xs uppercase">
              <Fingerprint className="w-4 h-4" />
              <span>ORIGINALS VAULT</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-stone-800 leading-relaxed">
              Preserve original evidence files with filenames and metadata intact. Generates SHA-256 cryptographic fingerprints to prove provenance without altering source materials.
            </p>
          </div>

          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold text-xs uppercase">
              <FileCheck className="w-4 h-4" />
              <span>SCOPED EXPORT PACKETS</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-stone-800 leading-relaxed">
              Generate tailored, clean summary packets for specific advocates, attorneys, or landlords without exposing an entire private archive.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Bad Maps & System-Level Intelligence */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-4 shadow-sm bg-grid-atlas">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              PUBLIC-INTEREST SYSTEMS INTELLIGENCE
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Bad Maps: Where the Route Keeps Breaking
            </h2>
          </div>
          <span className="coord-tick">[DEIDENTIFIED & AGGREGATED]</span>
        </div>

        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          <strong>Resource Intelligence maps where help is supposed to exist. Bad Maps maps where access repeatedly breaks.</strong>
        </p>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          Using strictly deidentified and aggregated pattern data, Bad Maps exposes recurring institutional failure points—such as county-line jurisdiction disputes, programs continually referring people to defunded hotlines, and statutory protections that frontline staff routinely mischaracterize.
        </p>

        <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-stone-800">
          <span className="px-2.5 py-1 bg-[#F5F1E8] border border-[#1C1D1D] rounded">
            • Referral-Loop Heatmaps
          </span>
          <span className="px-2.5 py-1 bg-[#F5F1E8] border border-[#1C1D1D] rounded">
            • County-Line Failure Points
          </span>
          <span className="px-2.5 py-1 bg-[#F5F1E8] border border-[#1C1D1D] rounded">
            • Ghost Program Detection
          </span>
          <span className="px-2.5 py-1 bg-[#F5F1E8] border border-[#1C1D1D] rounded">
            • Statutory Non-Compliance Trends
          </span>
        </div>
      </section>

      {/* 7. Next Actions & Roadmap */}
      <div className="border-t border-[#D9D1C4] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
        <div className="space-y-1 text-xs">
          <span className="font-bold text-[#971F26] uppercase block">STAGE 03 CONTINUITY PILOT</span>
          <p className="text-stone-700 font-sans">
            Currently testing Continuity Receipt protocols with Central Texas navigators.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/how-it-works"
            className="px-5 py-2.5 bg-[#1C1D1D] hover:bg-stone-800 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs transition-colors"
          >
            <span>Full System Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/ask-us-to-look"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-red-900 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs transition-colors"
          >
            <span>Ask Us to Look</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
