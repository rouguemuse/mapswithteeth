"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Building2,
  Clock,
  Fingerprint,
  Layers,
  Lock,
  FolderArchive,
  FileCheck,
  FileText,
  Users,
  Search,
  SlidersHorizontal,
  XOctagon,
  Shuffle,
  ShieldAlert,
  HelpCircle,
  Code2,
  Terminal,
  ExternalLink
} from "lucide-react";

export default function ForPartnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none font-sans">
      {/* SECTION 1: HERO */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEE8DD] border border-[#1C1D1D] text-[#1C1D1D] rounded-full text-xs font-mono uppercase tracking-widest font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#971F26] animate-pulse" />
            <span>IN DEVELOPMENT · CENTRAL TEXAS PILOT DESIGN</span>
          </div>
          <span className="coord-tick">[PARTNER BRIEFING · SPECIFICATION V0]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          A portable continuity and accountability layer for people navigating abuse.
        </h1>

        <p className="text-base sm:text-xl text-stone-900 max-w-3xl leading-relaxed font-sans font-medium">
          Maps With Teeth is building infrastructure for people navigating domestic abuse, coercive control, and instability across systems that do not share one case file, one jurisdiction, or one map.
        </p>

        {/* North Star Callout */}
        <div className="p-4 sm:p-5 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-lg font-serif italic text-base sm:text-lg text-[#1C1D1D] shadow-2xs">
          &ldquo;The survivor should not be the only person holding the whole map.&rdquo;
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2 font-mono">
          <a
            href="#pressure-test"
            className="px-6 py-3 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs transition-all flex items-center gap-2"
          >
            <span>Pressure-Test the Model</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/find-help"
            className="px-6 py-3 bg-[#EEE8DD] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs transition-colors flex items-center gap-2"
          >
            <span>View Working Prototype</span>
          </Link>
          <Link
            href="/how-it-works"
            className="px-5 py-3 text-stone-700 hover:text-[#1C1D1D] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:underline"
          >
            <span>Full Architecture Spec →</span>
          </Link>
        </div>
      </div>

      {/* SECTION 2: THE SYSTEMIC FAILURE MODE */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-diagram">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              DIAGNOSTIC ANALYSIS
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              The Problem: Disconnected Silos & The Endless Runaround Loop
            </h2>
          </div>
          <span className="coord-tick">[RUNAROUND CYCLE: A → B → C → A]</span>
        </div>

        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          When a survivor seeks safety or financial stabilization, they encounter a maze of separate institutions: law enforcement, domestic violence shelters, legal aid, social services, utility providers, and landlords. <strong>None of these systems share records or coordinate handoffs.</strong>
        </p>

        {/* 4-Step Failure Cycle Visual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">TOUCHPOINT 01</span>
            <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">Police / Crisis Desk</h3>
            <p className="text-stone-800 font-sans leading-snug">
              Incident logged. Labeled &ldquo;civil dispute.&rdquo; Evidence unreviewed. Advised to call county shelter.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">TOUCHPOINT 02</span>
            <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">Shelter / Helpline</h3>
            <p className="text-stone-800 font-sans leading-snug">
              Capacity full; barred due to pet or county line. Context lost. Re-referred to legal aid.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">TOUCHPOINT 03</span>
            <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">Legal Aid Intake</h3>
            <p className="text-stone-800 font-sans leading-snug">
              Intake window closes without police report number. Survivor told to return to Touchpoint 01.
            </p>
          </div>

          <div className="p-4 bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg space-y-1.5 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">THE RESULT</span>
              <h3 className="font-serif font-bold text-sm text-[#971F26]">Context Evaporates</h3>
              <p className="text-stone-900 font-sans leading-snug">
                40+ hours spent. Story repeated 5 times. Documents scattered. Zero functioning decision-owner identified.
              </p>
            </div>
            <span className="text-[9.5px] font-mono font-bold text-[#971F26] uppercase bg-white/90 px-2 py-0.5 rounded border border-[#971F26]/30 self-start mt-2">
              CLOSED ≠ RESOLVED
            </span>
          </div>
        </div>

        <div className="p-4 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg text-xs font-mono text-stone-800 space-y-1">
          <strong className="text-[#1C1D1D] uppercase">The Structural Trap:</strong>
          <p className="font-sans text-stone-700">
            Every agency records a &ldquo;referral&rdquo; as a completed action in its own database. For the survivor, it is not a handoff—it is starting completely over at zero.
          </p>
        </div>
      </section>

      {/* SECTION 3: THE HYPOTHESIS */}
      <section className="space-y-4">
        <div className="border-b border-[#D9D1C4] pb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
            THE HYPOTHESIS & CORE DESIGN
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Minimal Footprint, Independent Continuity
          </h2>
        </div>

        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          Most institutional reform proposals attempt to build massive centralized government data lakes or unified surveillance registries. In domestic violence and coercive control, centralized databases create profound safety hazards, data breach vectors, and inter-agency bureaucratic paralysis.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 pt-2 text-xs">
          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <h3 className="font-mono font-bold text-xs uppercase text-[#971F26]">1. Survivor-Held Record</h3>
            <p className="font-sans text-stone-800 leading-relaxed">
              The continuity layer is owned, held, and controlled by the survivor—not hosted in a centralized state repository. The survivor decides what to disclose, when, and to whom.
            </p>
          </div>

          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <h3 className="font-mono font-bold text-xs uppercase text-[#971F26]">2. Zero PII Verification</h3>
            <p className="font-sans text-stone-800 leading-relaxed">
              Qualification logic runs deterministically in the client browser. No personal identifiable information (PII) is stored or tracked across our servers during eligibility evaluation.
            </p>
          </div>

          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <h3 className="font-mono font-bold text-xs uppercase text-[#971F26]">3. Structured Interoperability</h3>
            <p className="font-sans text-stone-800 leading-relaxed">
              Standardized touchpoint receipts provide receiving advocates with instant, structured context without requiring bilateral IT integrations between incompatible legacy systems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT EXISTS TODAY (VERIFIED BUILT STATE) */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#2D5A3D] text-white rounded text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
              <span>VERIFIED BUILT TODAY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              What Exists and Is Testable Today
            </h2>
          </div>
          <span className="coord-tick">[QA AUDITED · 100% PASSING]</span>
        </div>

        <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
          Maps With Teeth is not a pitch deck or concept mockup. The core resource intelligence engine, statutory database, and intake logic are fully implemented and verified against rigorous automated test suites:
        </p>

        {/* Verified Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold text-[#971F26]">47</div>
            <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Audited Records</div>
            <div className="text-[9.5px] text-stone-500 mt-0.5">100% primary statutes & 501(c)(3) standards</div>
          </div>

          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold text-[#971F26]">29</div>
            <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Matching Scenarios</div>
            <div className="text-[9.5px] text-stone-500 mt-0.5">Automated regression suites</div>
          </div>

          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold text-[#971F26]">158</div>
            <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Tri-State Tests</div>
            <div className="text-[9.5px] text-stone-500 mt-0.5">Strict false preservation verified</div>
          </div>

          <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold text-[#971F26]">1,070</div>
            <div className="text-[11px] text-stone-700 font-bold uppercase mt-1">Evidence Claims</div>
            <div className="text-[9.5px] text-stone-500 mt-0.5">0 schema or citation drift</div>
          </div>
        </div>

        {/* List of Working Features */}
        <div className="space-y-2.5 pt-2 text-xs font-sans text-stone-900">
          <div className="p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0 mt-0.5" />
            <div>
              <strong>Texas 254-County Deep Dive:</strong> Direct statutory navigation for lease termination without police reports (Tex. Prop. Code § 92.016), electric deposit waivers (Tex. PUC § 25.478), address confidentiality, and school McKinney-Vento transport.
            </div>
          </div>

          <div className="p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0 mt-0.5" />
            <div>
              <strong>Lateral Relief & Hardship Catalog:</strong> Verified bypass routes across culinary relief (Southern Smoke, Giving Kitchen), craft artist aid (CERF+), companion animal boarding (RedRover, APA PASS), and federal telecom line separation (47 U.S.C. § 345).
            </div>
          </div>

          <div className="p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0 mt-0.5" />
            <div>
              <strong>Deterministic Qualification Engine:</strong> Evaluates complex multi-barrier situations without generative hallucination, generating transparent factual audit trails for every recommendation.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT IS PROPOSED (IN PILOT DESIGN) */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-800 text-white rounded text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
              <span>PROPOSED · IN ACTIVE DESIGN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              What Is Proposed & In Pilot Design
            </h2>
          </div>
          <span className="coord-tick">[CENTRAL TEXAS 6-MONTH PILOT]</span>
        </div>

        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          The following components are fully specified architectural prototypes slated for field testing in our prospective Central Texas pilot cohort:
        </p>

        <div className="grid gap-4 sm:grid-cols-2 text-xs">
          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold uppercase">
              <Shuffle className="w-4 h-4" />
              <span>Live Bridge Navigation & Receipts</span>
            </div>
            <p className="text-stone-800 font-sans leading-relaxed">
              Standardized touchpoint receipt generation for survivor and advocate encounters, documenting what happened, unreviewed files, stated reasons, and the next responsible decision-owner.
            </p>
          </div>

          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold uppercase">
              <Building2 className="w-4 h-4" />
              <span>Survivor Gap Fund ($45,000 Model)</span>
            </div>
            <p className="text-stone-800 font-sans leading-relaxed">
              Direct micro-grant fund ($200–$800) under dual-approval controls to instantly dissolve friction barriers (lock changes, storage units, car repairs, pet boarding) that stall stabilization.
            </p>
          </div>

          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold uppercase">
              <FolderArchive className="w-4 h-4" />
              <span>Survivor Organizer & Originals Vault</span>
            </div>
            <p className="text-stone-800 font-sans leading-relaxed">
              Client-side encrypted timeline builder and SHA-256 evidence hashing tool. Allows survivors to generate scoped export packets for attorneys without exposing unreviewed personal archives.
            </p>
          </div>

          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold uppercase">
              <AlertTriangle className="w-4 h-4" />
              <span>Bad Maps (Systemic Intelligence)</span>
            </div>
            <p className="text-stone-800 font-sans leading-relaxed">
              Aggregated, deidentified pattern intelligence mapping where referrals repeatedly break down, identifying ghost programs, defunded hotlines, and frontline statutory non-compliance across counties.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTINUITY VISUAL COMPARISON */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
            WORKFLOW COMPARISON
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            System Comparison: Without Continuity vs. With Maps With Teeth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
          {/* Column A: Without Continuity */}
          <div className="p-5 bg-[#FDF2F2] border-2 border-[#971F26] rounded-xl space-y-4">
            <div className="border-b border-[#971F26]/30 pb-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">
                CURRENT REALITY
              </span>
              <h3 className="font-serif font-bold text-base text-[#971F26]">
                Without Continuity Layer
              </h3>
            </div>
            <ul className="space-y-3 text-stone-900 leading-snug">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#971F26]">✕</span>
                <span><strong>Story Repeated at Every Desk:</strong> Survivor must re-narrate trauma, re-explain complex timelines, and submit the same documents repeatedly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#971F26]">✕</span>
                <span><strong>Evidence Ignored Without Record:</strong> Frontline workers decline to look at evidence (e.g. threat logs), but record the file as &ldquo;insufficient information.&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#971F26]">✕</span>
                <span><strong>Circular Dead-Ends:</strong> Agency A refers to Agency B, which refers back to Agency A. Neither agency knows the other declined.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#971F26]">✕</span>
                <span><strong>No Functioning Decision-Owner:</strong> Responsibility dissolves across agency boundaries; no one is accountable for the next step.</span>
              </li>
            </ul>
          </div>

          {/* Column B: With Tested Model */}
          <div className="p-5 bg-[#E8F3EB] border-2 border-[#2D5A3D] rounded-xl space-y-4">
            <div className="border-b border-[#2D5A3D]/30 pb-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#2D5A3D] block">
                MAPS WITH TEETH CONTINUITY LAYER
              </span>
              <h3 className="font-serif font-bold text-base text-[#2D5A3D]">
                With Tested Continuity Model
              </h3>
            </div>
            <ul className="space-y-3 text-stone-900 leading-snug">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A3D]">✓</span>
                <span><strong>Portable Continuity Receipt:</strong> Survivor carries a standardized touchpoint receipt documenting dates, agency, officer badge, and CAD/case IDs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A3D]">✓</span>
                <span><strong>Unreviewed Material Documented:</strong> Formally records what was presented vs. what was actually reviewed before case disposition.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A3D]">✓</span>
                <span><strong>Actionable Next Hand-off:</strong> Identifies the specific receiving advocate, required documents, and critical statutory deadlines.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#2D5A3D]">✓</span>
                <span><strong>Clear Decision Ownership:</strong> Flags referral loops instantly and highlights when no functioning decision-owner exists.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTINUITY RECEIPT SPECIMEN WITH STRICT GUARDRAILS */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
            CONCRETE ARTIFACT SPECIFICATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            The Continuity Receipt Specimen
          </h2>
          <p className="text-sm sm:text-base text-stone-800 mt-1 leading-relaxed font-sans">
            Below is the operational specimen of a survivor-held Continuity Receipt generated following an institutional encounter:
          </p>
        </div>

        {/* Specimen Box */}
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
              ✓ TOUCHPOINT RECORDED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            {/* Left Column */}
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
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">3. REFERENCE & IDENTIFIERS</span>
                <p className="text-stone-900 font-mono font-semibold text-xs">Incident Report #: APD-2026-0828-441</p>
                <p className="text-stone-600 font-mono text-[11px]">CAD Log #: 26-240-0891 · Desk Log: VSU-88</p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">4. MATERIAL RECEIVED / REVIEWED</span>
                <p className="text-stone-900 font-sans text-xs leading-snug">• 14 threat message screenshots offered (Unreviewed by intake)</p>
                <p className="text-stone-900 font-sans text-xs leading-snug">• Residential apartment lease agreement (Reviewed)</p>
                <p className="text-stone-900 font-sans text-xs leading-snug">• Cell carrier billing statement showing account line (Reviewed)</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3.5">
              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">5. ACTION TAKEN</span>
                <p className="text-stone-900 font-bold font-sans text-sm">Action Declined · Labeled &ldquo;Civil Dispute&rdquo;</p>
                <p className="text-stone-700 text-xs font-sans">No protective order packet initiated; referral given to legal aid.</p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">6. STATED REASON</span>
                <p className="text-stone-900 font-sans text-xs">Officer noted cell account in spouse name; advised dispute is civil.</p>
                <p className="text-[#971F26] text-xs font-sans font-semibold pt-1 border-t border-[#D9D1C4]/60">
                  Advocate note: Overlooks federal Safe Connections Act (47 U.S.C. § 345) statutory remedy.
                </p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#FDF2F2] border border-[#971F26] rounded-md">
                <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">7. NEXT DECISION-OWNER & ACTION</span>
                <p className="text-stone-900 font-bold font-sans text-xs sm:text-sm">Legal Aid of NorthWest Texas · Intake Staff</p>
                <p className="text-stone-800 text-xs font-sans">Action: Direct application for § 92.016 lease termination & line separation.</p>
                <p className="text-[#971F26] font-bold font-mono text-xs pt-1">Target Action Date: September 4, 2026</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D9D1C4] pt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-600">
            <span>Prototype Format: Survivor-Controlled Artifact</span>
            <span>Zero server upload · Exportable as scoped PDF or secure text record</span>
          </div>
        </div>

        {/* STRICT DEFENSIBLE GUARDRAILS NOTICE */}
        <div className="p-4 sm:p-5 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl text-xs space-y-2 font-mono shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#971F26] uppercase text-xs">
            <ShieldAlert className="w-4 h-4" />
            <span>Strict Evidentiary & Legal Guardrails</span>
          </div>
          <p className="font-sans leading-relaxed text-stone-900 text-xs sm:text-sm">
            <strong>What the Continuity Receipt IS and IS NOT:</strong>
          </p>
          <ul className="font-sans text-xs text-stone-800 space-y-1 list-disc pl-4">
            <li><strong>It DOES:</strong> Document the factual occurrence of an administrative touchpoint, agency identifiers, materials presented vs. inspected, stated reasons, and next referral targets.</li>
            <li><strong>It DOES NOT:</strong> Authenticate case allegations, prove the truth of survivor claims, or serve as judicial verification.</li>
            <li><strong>It DOES NOT:</strong> Establish a formal evidentiary chain of custody in court or bind any external agency.</li>
            <li><strong>Purpose:</strong> Serves exclusively as an independent, survivor-held procedural record to prevent information loss, document systemic bottlenecks, and stop endless referral runarounds.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8: WHAT WE WANT FROM PROFESSIONALS (PRESSURE-TESTING) */}
      <section id="pressure-test" className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              COLLABORATION & FEEDBACK
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              What We Want From Outside Professionals
            </h2>
          </div>
          <span className="coord-tick">[20–30 MINUTE EXPERT INTERVIEWS]</span>
        </div>

        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          We are seeking 20–30 minute pressure-testing conversations with advocates, attorneys, shelter directors, navigators, and systems researchers. We want direct, critical feedback on our model:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs font-sans">
          <div className="p-4 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg space-y-1.5 shadow-2xs">
            <h4 className="font-mono font-bold text-xs uppercase text-[#971F26] flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Taxonomy & Eligibility Accuracy</span>
            </h4>
            <p className="text-stone-800 leading-snug">
              Where does our resource categorization or qualification logic fail to reflect the practical reality of intake in your county or organization?
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg space-y-1.5 shadow-2xs">
            <h4 className="font-mono font-bold text-xs uppercase text-[#971F26] flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Missing Lateral Levers</span>
            </h4>
            <p className="text-stone-800 leading-snug">
              What obscure statutory remedies, utility waivers, industry relief funds, or local mutual aid pathways are we currently omitting?
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg space-y-1.5 shadow-2xs">
            <h4 className="font-mono font-bold text-xs uppercase text-[#971F26] flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Advocate Workflow Usability</span>
            </h4>
            <p className="text-stone-800 leading-snug">
              How can Continuity Receipts be structured so receiving staff can read and trust them in 60 seconds without creating administrative burden?
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg space-y-1.5 shadow-2xs">
            <h4 className="font-mono font-bold text-xs uppercase text-[#971F26] flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Risk & Safety Blindspots</span>
            </h4>
            <p className="text-stone-800 leading-snug">
              What digital safety, legal liability, or evidentiary risks must be hardened before this enters pilot testing with Central Texas survivors?
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3 font-mono">
          <Link
            href="/feedback"
            className="px-6 py-3 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider shadow-2xs transition-colors flex items-center gap-2"
          >
            <span>Submit Strategic Feedback</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/build-with-us"
            className="px-6 py-3 bg-[#F5F1E8] hover:bg-stone-200 border border-[#1C1D1D] text-[#1C1D1D] rounded-md text-xs font-bold uppercase tracking-wider shadow-2xs transition-colors"
          >
            <span>Join Working Coalition Intake</span>
          </Link>
        </div>
      </section>

      {/* SECTION 9: FOUNDER EXECUTION */}
      <section className="space-y-4">
        <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              FOUNDER & LEAD ARCHITECT
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Founder Execution & Architectural Rigor
            </h2>
          </div>
          <span className="coord-tick">[JAYME VOLSTAD · INITIATIVE LEAD]</span>
        </div>

        <div className="p-6 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#D9D1C4] pb-3">
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">Jayme Volstad</h3>
              <p className="text-xs font-mono text-stone-700">Systems & Software Architecture · Workflow Engineering · Public-Interest Design</p>
            </div>
            <div className="text-xs font-mono text-stone-600 bg-[#F5F1E8] px-3 py-1 rounded border border-[#D9D1C4]">
              Central Texas Focus
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
            Maps With Teeth was conceived and built by <strong>Jayme Volstad</strong> from direct analysis of institutional failure patterns across criminal justice, family court, shelter bureaucracy, and municipal welfare systems. Rather than treating fragmented systems as a marketing problem, Volstad approached the issue as a formal systems architecture and workflow defect.
          </p>

          <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
            Every piece of Maps With Teeth—from the 47-record statutory database, the deterministic fact-matcher, the tri-state intake reconciliation engine, to the automated semantic audit pipelines—was designed and implemented with deep engineering discipline. The initiative operates with zero venture-capital surveillance incentives, prioritizing survivor sovereignty and strict empirical rigor.
          </p>

          <div className="grid gap-2 sm:grid-cols-3 pt-2 text-xs font-mono text-stone-800">
            <div className="p-2.5 bg-[#F5F1E8] rounded border border-[#D9D1C4]">
              • Pure Deterministic Domain Logic
            </div>
            <div className="p-2.5 bg-[#F5F1E8] rounded border border-[#D9D1C4]">
              • 100% Primary-Source Statutory Citations
            </div>
            <div className="p-2.5 bg-[#F5F1E8] rounded border border-[#D9D1C4]">
              • Zero Centralized Survivor PII
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CLEAR BOUNDARIES & NON-GOALS */}
      <section className="bg-[#1C1D1D] text-stone-200 border-2 border-stone-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-stone-700 pb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold block">
            DEFENSIBLE SCOPE & GOVERNANCE
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Clear Boundaries, Institutional Notice & Non-Goals
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
          To maintain absolute trust with survivor-service organizations, legal bodies, and funders, Maps With Teeth operates within strictly defined institutional boundaries:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs font-sans text-stone-300">
          <div className="p-3.5 bg-stone-900 border border-stone-700 rounded-lg space-y-1">
            <strong className="text-white font-mono uppercase block text-xs">NOT an Emergency Service</strong>
            <p className="leading-snug text-stone-400">
              Maps With Teeth is not a 911 dispatch, emergency crisis hotline, or immediate physical rescue organization.
            </p>
          </div>

          <div className="p-3.5 bg-stone-900 border border-stone-700 rounded-lg space-y-1">
            <strong className="text-white font-mono uppercase block text-xs">NOT Legal Counsel</strong>
            <p className="leading-snug text-stone-400">
              We provide statutory and resource intelligence. We do not provide licensed legal representation or formal legal advice.
            </p>
          </div>

          <div className="p-3.5 bg-stone-900 border border-stone-700 rounded-lg space-y-1">
            <strong className="text-white font-mono uppercase block text-xs">NOT Law Enforcement or CPS</strong>
            <p className="leading-snug text-stone-400">
              We do not report users to law enforcement, child protective agencies, or state welfare surveillance registries.
            </p>
          </div>

          <div className="p-3.5 bg-stone-900 border border-stone-700 rounded-lg space-y-1">
            <strong className="text-white font-mono uppercase block text-xs">NOT an Adjudicative Authority</strong>
            <p className="leading-snug text-stone-400">
              We do not judge, evaluate, or authenticate the veracity of survivor allegations. We document administrative touchpoints.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs font-mono text-stone-400 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>Maps With Teeth is an independent public-interest initiative in development.</span>
          <Link href="/about" className="text-red-400 hover:text-red-300 font-bold uppercase underline">
            Learn More About Governance →
          </Link>
        </div>
      </section>

      {/* FOOTER CTA STRIP */}
      <div className="border-t border-[#D9D1C4] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
        <div className="space-y-1 text-xs">
          <span className="font-bold text-[#971F26] uppercase block">EXPLORE THE WORKING APPLICATION</span>
          <p className="text-stone-700 font-sans">
            Ready to test the interactive intake qualification engine or explore verified lateral dockets?
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/find-help"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-red-900 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs transition-colors"
          >
            <span>Find a Way Through</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/other-ways-through"
            className="px-5 py-2.5 bg-[#EEE8DD] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs"
          >
            <span>Lateral Relief Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
