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
              01 · INITIATIVE POSITIONING & PURPOSE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What is Maps With Teeth?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            Maps With Teeth is a public-interest systems initiative focused on <strong>cross-system continuity, evidence integrity, and institutional accountability</strong>.
          </p>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            Its central concern is that institutions may each complete their individual procedures while important information, unresolved risks, and responsibility disappear between them. The initiative addresses coordination and continuity failures across:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono text-[#1C1D1D] pt-1">
            <div className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">Child Protection &amp; Welfare</div>
            <div className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">Family Violence Response</div>
            <div className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">Law Enforcement &amp; Dispatch</div>
            <div className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">Civil &amp; Criminal Courts</div>
            <div className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">Schools &amp; Custody Portals</div>
            <div className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">Administrative Oversight</div>
          </div>

          <div className="p-4 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-lg space-y-2 mt-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#971F26] block">
              THE EVIDENTIARY OBJECTIVE
            </span>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              The initiative does not presume that every allegation is substantiated or that every adverse outcome proves misconduct. Its objective is to make it possible to establish:
            </p>
            <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono text-stone-800 pt-1">
              <div>• What information was received</div>
              <div>• What was actually reviewed</div>
              <div>• What evidence was considered</div>
              <div>• What was referred elsewhere</div>
              <div>• Which decisions were made and on what basis</div>
              <div>• What remained unresolved</div>
              <div className="sm:col-span-2">• Who, if anyone, assumed responsibility for follow-up</div>
            </div>
            <p className="text-[11px] font-mono font-bold text-[#1C1D1D] pt-1">
              The central distinction is between procedural activity and accountable continuity.
            </p>
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
            Why does existing administration fail continuity?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            When multiple agencies touch parts of a shared crisis, each operates within its statutory silo, evaluating only the fragment presented at its desk:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-stone-900 font-sans">
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
              • <strong>Context Evaporation:</strong> Every referral forces the person to recount history, re-gather records, and restart from zero while prior exhibits sit unexamined.
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
              • <strong>Sent ≠ Received:</strong> Agencies log outbound handoffs as &ldquo;completed&rdquo; upon clicking send, with zero confirmation that the receiving entity opened or accepted the file.
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
              • <strong>Circular Referral Loops:</strong> Agency A requires a form from Agency B, while Agency B conditioned assistance on an active case with Agency A.
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
              • <strong>Isolated Incident Tunnel Vision:</strong> A fourth report is screened out as low priority because none of the agencies see the cumulative cross-county pattern.
            </div>
          </div>
        </section>

        {/* Question 3: Who built it? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              03 · FOUNDER & PROJECT DIRECTION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Who built Maps With Teeth?
          </h2>
          <div className="p-6 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">Jayme Volstad · Founder & Project Director</h3>
              <span className="text-xs font-mono text-stone-600 bg-[#F5F1E8] px-2.5 py-0.5 rounded border border-[#D9D1C4]">Central Texas</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Maps With Teeth was conceived and built by <strong>Jayme Volstad</strong>, drawing on extensive experience in operations, research, systems design, and direct analysis of how people move through fragmented public and nonprofit systems. Her work is also informed by firsthand navigation of criminal-justice, family-court, victim-service, housing, and public-assistance systems.
            </p>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Rather than treating the problem as a lack of awareness or another resource-directory problem, Volstad designed Maps With Teeth around a structural question: <strong>what happens to context, responsibility, and next steps when a person has to move between systems that do not share the same map?</strong>
            </p>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              She has led development of the project’s current prototype, including its <strong>deterministic matching system, 47 canonical resource records with documented source provenance and review timestamps, progressive survivor intake, evidence and source-quality controls, and the broader Bridge continuity model being prepared for a Central Texas founding pilot.</strong>
            </p>
            <div className="pt-2 border-t border-[#D9D1C4] text-xs font-mono text-stone-700 italic">
              The project is being developed around privacy-conscious data practices, source transparency, and a public-interest operating model.
            </div>
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
            Functional prototype with automated regression, schema, provenance-field, and evidence-structure checks. The system has not undergone independent external security or legal validation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
              <div className="text-2xl font-bold text-[#971F26]">47</div>
              <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Audited Records</div>
              <div className="text-[9.5px] text-stone-500 mt-0.5">Documented provenance</div>
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
            We are actively designing a <strong>Central Texas Continuity Pilot</strong> across Travis, Williamson, Hays, and Bastrop counties to field-test:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-xs font-sans">
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
              <strong className="text-sm font-serif text-[#1C1D1D] block">• Live Bridge Continuity Contact Records</strong>
              <p className="text-stone-800 leading-snug">Seeking qualified Central Texas practitioners to pressure-test the proposed Continuity Receipt protocol using synthetic demonstration cases before any live-data pilot.</p>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
              <strong className="text-sm font-serif text-[#1C1D1D] block">• Survivor Gap Fund ($45,000 Allocation)</strong>
              <p className="text-stone-800 leading-snug">Administering direct friction-removal micro-grants ($200–$800) under dual-approval controls to break stabilization deadlocks.</p>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
              <strong className="text-sm font-serif text-[#1C1D1D] block">• Survivor Organizer & Originals Vault</strong>
              <p className="text-stone-800 leading-snug">Testing client-side SHA-256 baseline digests and scoped export packets for legal representation.</p>
            </div>
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
              <strong className="text-sm font-serif text-[#1C1D1D] block">• Bad Maps Systems Research</strong>
              <p className="text-stone-800 leading-snug">Aggregating deidentified referral failure points to provide empirical policy data on documented discrepancies between published requirements and reported or observed implementation.</p>
            </div>
          </div>
        </section>

        {/* Question 6: What are our boundaries? */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              06 · INSTITUTIONAL BOUNDARIES & NON-CLAIMS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What are our boundaries?
          </h2>
          <div className="p-5 bg-[#1C1D1D] text-stone-200 border-2 border-stone-800 rounded-xl space-y-4 shadow-xs">
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Maps With Teeth strictly maintains clear institutional non-claims and operational boundaries:
            </p>
            <div className="grid gap-2 sm:grid-cols-2 text-xs font-mono">
              <div className="p-2.5 bg-stone-900 rounded border border-stone-700">✕ NOT an Allegation-Reporting Platform</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-700">✕ NOT a Replacement for Agency Investigation</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-700">✕ NOT an Automated Credibility or Risk Engine</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-700">✕ NOT Legal Representation or Court Adjudication</div>
            </div>
            <div className="text-[11px] text-stone-400 font-mono pt-2 border-t border-stone-700/80 space-y-1">
              <p>• Zero centralized surveillance dossiers · Zero central database storage for client-side receipt builder.</p>
              <p>• Documentation alone does not guarantee intervention or improved outcomes; it establishes an auditable administrative record.</p>
            </div>
          </div>
        </section>

        {/* Question 7: Legibility Across Audiences */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              07 · LEGIBILITY ACROSS AUDIENCES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            How Different Audiences Can Engage
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            The initiative provides rigorous, role-appropriate entry points without fragmenting into competing identities:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#971F26] block">FOR POLICYMAKERS</span>
              <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">Statutory Mechanisms</h3>
              <p className="text-stone-800 leading-relaxed">
                Clear administrative mechanisms (pre-closure checklists, referral acknowledgment benchmarks, cross-agency liaison roles) grounded in existing statutory precedents (Tex. Fam. Code §§ 261, 264; Interlocal Cooperation Act).
              </p>
            </div>

            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#971F26] block">FOR PRACTITIONERS</span>
              <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">Procedural Clarity</h3>
              <p className="text-stone-800 leading-relaxed">
                Specific operational boundaries: separating receipt from review, distinguishing inability from refusal, and eliminating circular referral ping-pong so frontline staff know who owns the next action.
              </p>
            </div>

            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#971F26] block">FOR RESEARCHERS</span>
              <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">Testable Hypotheses</h3>
              <p className="text-stone-800 leading-relaxed">
                Formal gap taxonomy, measurable seam indicators (unacknowledged handoff rates, loop rates), clear evidentiary constraints, and empirical evaluation frameworks for multi-agency administration.
              </p>
            </div>

            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#971F26] block">FOR FUNDERS &amp; PARTNERS</span>
              <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">Credible Theory of Change</h3>
              <p className="text-stone-800 leading-relaxed">
                Demonstrated development status (1,070 audited claims, 158 tri-state tests), high-leverage civic technology architecture, and distinct non-duplicative contribution to public administration.
              </p>
            </div>

            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 sm:col-span-2 lg:col-span-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#971F26] block">FOR THE GENERAL PUBLIC</span>
              <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">Plain-Language Integrity</h3>
              <p className="text-stone-800 leading-relaxed">
                Understandable explanations: why agencies drop information between doors, how participant-held receipts protect context without technical jargon, and why documentation alone cannot guarantee specific case outcomes.
              </p>
            </div>
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
