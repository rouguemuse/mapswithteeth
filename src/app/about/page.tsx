"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Scale,
  AlertCircle,
  Mail,
  CheckCircle2,
  AlertTriangle,
  Building2,
  FolderArchive,
  Layers,
  Shuffle,
  Users,
  Code2
} from "lucide-react";
import { FoundingBoardSection } from "@/components/governance/FoundingBoardSection";
import { GeneralContactModal } from "@/components/contact/GeneralContactModal";

export default function AboutPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none font-sans">
      {/* 1. Header & Canonical Positioning */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              INITIATIVE OVERVIEW & ARCHITECTURAL BRIEFING
            </span>
          </div>
          <span className="coord-tick">
            [CHARTER: PUBLIC-INTEREST-V0]
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          About Maps With Teeth
        </h1>
        <p className="text-base sm:text-xl text-stone-900 max-w-3xl leading-relaxed font-sans font-medium">
          A portable continuity and accountability layer for people navigating abuse across systems that do not share one case file, one jurisdiction, or one map.
        </p>

        {/* North Star Callout */}
        <div className="p-4 sm:p-5 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-lg font-serif italic text-base sm:text-lg text-[#1C1D1D] shadow-2xs">
          &ldquo;The survivor should not be the only person holding the whole map.&rdquo;
        </div>
      </div>

      {/* 2. The Six Core Answers */}
      <div className="space-y-12">
        {/* Question 1: What is Maps With Teeth? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              01 · DEFINITION & ARCHITECTURE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What is Maps With Teeth?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            Maps With Teeth is an independent public-interest technology initiative built around two integrated halves:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
            <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">
                PART A: FRONT-END DISCOVERY
              </span>
              <h3 className="font-serif font-bold text-base text-[#1C1D1D]">Resource Intelligence</h3>
              <p className="text-stone-800 font-sans leading-relaxed">
                Maps enforceable statutory rights, industry hardship funds, utility waivers, and bypass routes around conventional shelter gridlock. Evaluates eligibility deterministically without storing PII.
              </p>
            </div>

            <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">
                PART B: SURVIVOR CONTINUITY
              </span>
              <h3 className="font-serif font-bold text-base text-[#1C1D1D]">Continuity Infrastructure</h3>
              <p className="text-stone-800 font-sans leading-relaxed">
                Provides survivor-held touchpoint documentation (Continuity Receipts) that preserve context, unreviewed evidence, and next decision-owners across disconnected agency handoffs.
              </p>
            </div>
          </div>
        </section>

        {/* Question 2: Why does it exist? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              02 · THE SYSTEMIC PROBLEM
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Why does it exist?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            People navigating abuse encounter a fragmented landscape of independent bureaucracies—police departments, shelters, civil legal aid, welfare agencies, and landlords—that do not communicate.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-stone-900 font-sans">
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
              • <strong>Context Loss:</strong> Every referral forces the survivor to recount trauma, gather the same paperwork, and start over from scratch.
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
              • <strong>Fine-Print Barriers:</strong> Programs exist on paper but fail in practice due to pet restrictions, county lines, or income calculation quirks.
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
              • <strong>Circular Runarounds:</strong> Agency A refers to Agency B, which refers back to Agency A, with zero functioning decision-owner identified.
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
              • <strong>Overlooked Legal Remedies:</strong> Rights like lease termination without police reports (Tex. Prop. Code § 92.016) or phone separation (47 U.S.C. § 345) are routinely missed.
            </div>
          </div>
        </section>

        {/* Question 3: Who built it? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              03 · FOUNDER EXECUTION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Who built Maps With Teeth?
          </h2>
          <div className="p-6 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-3 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">Jayme Volstad · Founder & Lead Architect</h3>
              <span className="text-xs font-mono text-stone-600 bg-[#F5F1E8] px-2.5 py-0.5 rounded border border-[#D9D1C4]">Central Texas</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Maps With Teeth was conceived, designed, and engineered by <strong>Jayme Volstad</strong> from direct analysis of institutional failure points across criminal justice, family court, shelter intake, and municipal assistance systems.
            </p>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Approaching the problem as a structural systems and workflow defect rather than an awareness campaign, Volstad architected the deterministic matching engine, the 47-record primary statutory database, the tri-state intake reconciliation engine, and automated semantic verification test suites. Maps With Teeth is built with strict public-interest integrity—zero surveillance capitalism, zero venture extraction, and 100% verifiable primary-source citations.
            </p>
          </div>
        </section>

        {/* Question 4: What exists today? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              04 · VERIFIED PRODUCT STATE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What exists and is testable today?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            Maps With Teeth is a fully functional software prototype backed by comprehensive test and audit suites:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
              <div className="text-2xl font-bold text-[#971F26]">47</div>
              <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Audited Records</div>
              <div className="text-[9.5px] text-stone-500 mt-0.5">100% primary source citations</div>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
              <div className="text-2xl font-bold text-[#971F26]">29</div>
              <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Matching Scenarios</div>
              <div className="text-[9.5px] text-stone-500 mt-0.5">Automated regression tests</div>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
              <div className="text-2xl font-bold text-[#971F26]">158</div>
              <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Tri-State Tests</div>
              <div className="text-[9.5px] text-stone-500 mt-0.5">Strict boolean false preservation</div>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
              <div className="text-2xl font-bold text-[#971F26]">1,070</div>
              <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Evidence Claims</div>
              <div className="text-[9.5px] text-stone-500 mt-0.5">0 schema or citation drift</div>
            </div>
          </div>
        </section>

        {/* Question 5: What is next? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              05 · PILOT ROADMAP
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What is next?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            We are actively designing a <strong>Six-Month Central Texas Pilot</strong> across Travis, Williamson, Hays, and Bastrop counties to field-test:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-xs font-sans">
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
              <strong className="text-sm font-serif text-[#1C1D1D] block">• Live Bridge Continuity Receipts</strong>
              <p className="text-stone-800 leading-snug">Testing standardized touchpoint receipt exchange with frontline victim navigators and legal aid advocates.</p>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
              <strong className="text-sm font-serif text-[#1C1D1D] block">• Survivor Gap Fund ($45,000 Allocation)</strong>
              <p className="text-stone-800 leading-snug">Administering direct friction-removal micro-grants ($200–$800) under dual-approval controls to break stabilization deadlocks.</p>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
              <strong className="text-sm font-serif text-[#1C1D1D] block">• Survivor Organizer & Originals Vault</strong>
              <p className="text-stone-800 leading-snug">Testing client-side cryptographic hashing (SHA-256) and scoped export packets for legal representation.</p>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
              <strong className="text-sm font-serif text-[#1C1D1D] block">• Bad Maps Systems Research</strong>
              <p className="text-stone-800 leading-snug">Aggregating deidentified referral failure points to provide empirical policy data on statutory non-compliance.</p>
            </div>
          </div>
        </section>

        {/* Question 6: What are our boundaries? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              06 · INSTITUTIONAL BOUNDARIES & NON-GOALS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What are our boundaries?
          </h2>
          <div className="p-5 bg-[#1C1D1D] text-stone-200 border-2 border-stone-800 rounded-xl space-y-3 shadow-xs">
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Maps With Teeth strictly maintains clear institutional non-goals:
            </p>
            <div className="grid gap-2 sm:grid-cols-2 text-xs font-mono">
              <div className="p-2.5 bg-stone-900 rounded border border-stone-700">✕ NOT 911 / Emergency Crisis Dispatch</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-700">✕ NOT a Law Firm or Legal Counsel</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-700">✕ NOT Law Enforcement or CPS</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-700">✕ NOT an Adjudicative Authority</div>
            </div>
            <p className="text-[11px] text-stone-400 font-mono pt-1">
              No centralized PII storage · No automated data sharing without explicit survivor control.
            </p>
          </div>
        </section>
      </div>

      {/* 3. Governance & Founding Board Section */}
      <section className="pt-4">
        <FoundingBoardSection />
      </section>

      {/* 4. Next Step CTAs */}
      <div className="border-t border-[#D9D1C4] pt-8 flex flex-wrap items-center justify-between gap-4 font-mono">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/for-partners"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs transition-colors"
          >
            <span>Partner Briefing & Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/feedback"
            className="px-5 py-2.5 bg-[#EEE8DD] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs transition-colors"
          >
            <span>Give Strategic Feedback</span>
          </Link>
        </div>

        <button
          onClick={() => setContactModalOpen(true)}
          className="px-4 py-2.5 text-stone-700 hover:text-[#971F26] text-xs font-mono font-bold flex items-center gap-1.5 hover:underline"
        >
          <Mail className="w-4 h-4 text-[#971F26]" />
          <span>General Contact / Inquiries</span>
        </button>
      </div>

      <GeneralContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
