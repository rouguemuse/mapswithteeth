"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Scale,
  GraduationCap,
  Users,
  Layers,
  FileText,
  Clock,
  Sparkles,
  Activity,
  AlertOctagon,
  FileCheck
} from "lucide-react";

export function HumanAsIntegrationLayerSection() {
  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-10 shadow-sm bg-grid-diagram select-none font-sans">
      {/* Section Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26]">
            SECTION 02 · THE SYSTEMIC BREAKPOINT
          </span>
          <span className="coord-tick">[ARCHITECTURE DEFICIT: SILO RUNAROUND]</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          When Systems Don’t Talk, The Person Becomes the Wire.
        </h2>
        <p className="text-stone-800 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
          A person can contact five distinct institutions about one developing crisis. Each institution acts on its own isolated fragment. The combined system can still fail catastrophically because accountability evaporates at the seams.
        </p>
      </div>

      {/* Comparison Grid: The Broken Reality vs. The Continuity Layer */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: The Broken Model (6 Cols) */}
        <div className="lg:col-span-6 bg-[#FDF2F2] border-2 border-[#971F26] rounded-xl p-5 sm:p-7 space-y-6 shadow-sm">
          <div className="border-b border-[#971F26]/30 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#971F26]" />
              <h3 className="font-serif font-bold text-lg text-[#971F26]">
                The Broken Reality
              </h3>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2 py-0.5 rounded">
              CURRENT FAILURE
            </span>
          </div>

          <div className="text-xs sm:text-sm font-mono text-stone-900 font-bold uppercase tracking-wider bg-white/80 p-3 rounded border border-[#971F26]/30 text-center">
            THE HUMAN BECOMES THE INTEGRATION LAYER.
          </div>

          {/* Sequential Disconnected Chain */}
          <div className="space-y-3 font-mono text-xs">
            {/* Step 1 */}
            <div className="p-3 bg-white rounded border border-[#971F26]/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-[#971F26]/10 text-[#971F26] flex items-center justify-center font-bold shrink-0">
                1
              </div>
              <div>
                <span className="font-bold text-[#1C1D1D] block">POLICE / LAW ENFORCEMENT</span>
                <span className="text-stone-600 text-[11px]">Generates case number &amp; offense report. Closed as &ldquo;civil matter&rdquo; or referred out.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#971F26]">
              <span className="text-[10px] uppercase font-bold bg-[#FDF2F2] px-2 py-0.5 border border-[#971F26]/20 rounded">
                ↓ survivor carries story &amp; files manually
              </span>
            </div>

            {/* Step 2 */}
            <div className="p-3 bg-white rounded border border-[#971F26]/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-[#971F26]/10 text-[#971F26] flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div>
                <span className="font-bold text-[#1C1D1D] block">CPS / DFPS</span>
                <span className="text-stone-600 text-[11px]">Separate intake, separate screening standard. No automated visibility into prior police evidence.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#971F26]">
              <span className="text-[10px] uppercase font-bold bg-[#FDF2F2] px-2 py-0.5 border border-[#971F26]/20 rounded">
                ↓ survivor re-explains trauma from scratch
              </span>
            </div>

            {/* Step 3 */}
            <div className="p-3 bg-white rounded border border-[#971F26]/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-[#971F26]/10 text-[#971F26] flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <span className="font-bold text-[#1C1D1D] block">SCHOOL DISTRICT</span>
                <span className="text-stone-600 text-[11px]">Attendance flags, safety transfer request, emergency contact update. No link to active protective orders.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#971F26]">
              <span className="text-[10px] uppercase font-bold bg-[#FDF2F2] px-2 py-0.5 border border-[#971F26]/20 rounded">
                ↓ unacknowledged referral loop
              </span>
            </div>

            {/* Step 4 */}
            <div className="p-3 bg-white rounded border border-[#971F26]/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-[#971F26]/10 text-[#971F26] flex items-center justify-center font-bold shrink-0">
                4
              </div>
              <div>
                <span className="font-bold text-[#1C1D1D] block">FAMILY &amp; DISTRICT COURTS</span>
                <span className="text-stone-600 text-[11px]">Protective order or custody filing. Case files cannot see cross-jurisdictional municipal charges.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#971F26]">
              <span className="text-[10px] uppercase font-bold bg-[#FDF2F2] px-2 py-0.5 border border-[#971F26]/20 rounded">
                ↓ referral sent without receipt or owner
              </span>
            </div>

            {/* Step 5 */}
            <div className="p-3 bg-white rounded border border-[#971F26]/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-[#971F26]/10 text-[#971F26] flex items-center justify-center font-bold shrink-0">
                5
              </div>
              <div>
                <span className="font-bold text-[#1C1D1D] block">VICTIM SERVICES / NONPROFITS</span>
                <span className="text-stone-600 text-[11px]">Separate case notes, different documentation hurdles, capacity waitlist.</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-white/90 border border-[#971F26] rounded text-xs text-[#971F26] font-mono leading-relaxed">
            <strong>CONSEQUENCE:</strong> The person is forced to carry proof of their own crisis across every boundary. If they miss one detail, the case stalls. If an agency drops the referral, nobody knows.
          </div>
        </div>

        {/* RIGHT COLUMN: The Maps With Teeth Continuity Layer (6 Cols) */}
        <div className="lg:col-span-6 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-7 space-y-6 shadow-sm">
          <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1C1D1D]" />
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                The Continuity Layer
              </h3>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-white px-2 py-0.5 rounded">
              STRUCTURED PROTOCOL
            </span>
          </div>

          <div className="text-xs sm:text-sm font-mono text-stone-900 font-bold uppercase tracking-wider bg-[#EEE8DD] p-3 rounded border border-[#1C1D1D] text-center">
            CLOSED-LOOP ACCOUNTABILITY &amp; PORTABLE CONTEXT
          </div>

          {/* Networked Architecture Diagram */}
          <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg space-y-3 font-mono text-xs">
            <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
              <div className="p-2 bg-white rounded border border-stone-300 font-bold">POLICE ↘</div>
              <div className="p-2 bg-white rounded border border-stone-300 font-bold">↙ CPS / DFPS</div>
            </div>

            <div className="p-3.5 bg-[#1C1D1D] text-white rounded text-center space-y-1 shadow-xs">
              <span className="text-[10px] tracking-widest text-[#971F26] uppercase font-bold block">
                MAPS WITH TEETH CONTINUITY LAYER
              </span>
              <span className="text-xs font-serif font-bold">
                Structured Handoffs · Closed-Loop Referrals · Context Receipts
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2 bg-white rounded border border-stone-300 font-bold">↗ COURTS</div>
              <div className="p-2 bg-white rounded border border-stone-300 font-bold">↑ SCHOOLS</div>
              <div className="p-2 bg-white rounded border border-stone-300 font-bold">↖ VICTIM SVCS</div>
            </div>
          </div>

          {/* What the Continuity Layer Actually Records */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold text-stone-900 uppercase tracking-wider block">
              CONTINUITY OF RESPONSIBILITY QUESTIONS:
            </span>
            <ul className="space-y-1.5 text-xs text-stone-800 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-[#971F26] font-bold">✓</span>
                <span><strong>What was sent:</strong> Verified materials, SHA-256 hashes, and notice records.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#971F26] font-bold">✓</span>
                <span><strong>What was received:</strong> Custody timestamp confirmed by receiving entity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#971F26] font-bold">✓</span>
                <span><strong>What was reviewed:</strong> Specific documents examined under agency authority.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#971F26] font-bold">✓</span>
                <span><strong>What remained unreviewed:</strong> Unexamined evidence or unaddressed jurisdictional issues.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#971F26] font-bold">✓</span>
                <span><strong>Decision ownership:</strong> Explicit institutional role owning the next milestone.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#971F26] font-bold">✓</span>
                <span><strong>Responsibility accepted:</strong> Acknowledgment confirming next-step ownership.</span>
              </li>
            </ul>
          </div>

          {/* Anti-Surveillance Boundary Notice */}
          <div className="p-3 bg-white rounded border border-stone-300 text-[11px] font-sans text-stone-700 leading-snug">
            <strong className="text-stone-900">Privacy Standard:</strong> Does NOT create a public allegation repository or government surveillance database. Maintains strict survivor agency and evidentiary boundaries.
          </div>
        </div>
      </div>

      {/* Action Prompt */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#D9D1C4]">
        <span className="text-xs font-mono text-stone-700">
          EXPLORE THE DETAILED SYSTEM BREAKDOWN:
        </span>
        <Link
          href="/the-gap"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#971F26] hover:text-[#7A181E] uppercase tracking-wider"
        >
          <span>Read &ldquo;Why This Matters: The Seam Deficit&rdquo;</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
