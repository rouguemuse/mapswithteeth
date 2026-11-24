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
import { ArchivalCaseStudyGallery } from "@/components/home/ArchivalCaseStudyGallery";
import { GeneralContactModal } from "@/components/contact/GeneralContactModal";
import { FourTierDistinctionInventory } from "@/components/shared/FourTierDistinctionInventory";
import { EditorialDisclosure } from "@/components/shared/EditorialDisclosure";

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
          An independent public-interest systems research and accountability initiative examining where responsibility, evidence, identity, or access disappears across institutional boundaries.
        </p>

        {/* Central Premise Callout (GOV.UK Left-Rule Margin Note) */}
        <div className="mwt-callout-urgent space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
            CENTRAL PREMISE
          </span>
          <p className="font-serif italic text-base sm:text-lg text-[#1C1D1D]">
            &ldquo;People should not lose rights, safety, identity, evidence, or access simply because administrative systems divide authority differently than human lives do.&rdquo;
          </p>
        </div>

        {/* About Page Section Jump Bar */}
        <nav aria-label="About Page Sections" className="pt-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-2 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg text-[11px] sm:text-xs font-mono">
            <span className="font-bold text-stone-700 px-1.5 uppercase">Jump to:</span>
            <a
              href="#about-models"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              01. Models A &amp; B
            </a>
            <a
              href="#about-diagnostic"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              02. 8-Step Method
            </a>
            <a
              href="#about-founder"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              03. Founder
            </a>
            <a
              href="#about-distinction-inventory"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              04. 4-Tier Status
            </a>
            <a
              href="#case-study-folios"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              05. 4:3 Folios &amp; Slider
            </a>
            <a
              href="#about-governance"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              06. Founding Board
            </a>
          </div>
        </nav>
      </div>

      {/* 2. The Core Answers */}
      <div className="space-y-12">
        {/* Question 1: What is Maps With Teeth? */}
        <section id="about-models" className="space-y-4 scroll-mt-36 lg:scroll-mt-28">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              01 · INITIATIVE POSITIONING, NORMATIVE GROUNDING &amp; TWO WORKING MODELS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What is Maps With Teeth?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            Maps With Teeth is an <strong>independent public-interest systems research and accountability initiative</strong>. It is not exclusively a domestic-violence resource navigator, child-protection campaign, telecommunications project, or software product—those are concrete applications and research contexts within a broader diagnostic framework.
          </p>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            The initiative investigates what already exists, what institutions are required or permitted to do, what happens in practice, where responsibility or critical human distinctions disappear, and which intervention would address the actual failure. The work is grounded in <strong>collective liberation, institutional power analysis, accessibility, administrative accountability, strict data minimization, and participant autonomy</strong>.
          </p>

          {/* Two Primary Working Models */}
          <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-4 mt-2">
            <div className="border-b border-[#D9D1C4] pb-3 space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#971F26] block">
                TWO PRIMARY WORKING MODELS · ONE UNIFYING PRINCIPLE
              </span>
              <p className="text-xs sm:text-sm font-serif italic text-[#1C1D1D]">
                &ldquo;These two models demonstrate the same underlying principle in different environments: a change in administrative or financial authority should not automatically erase an individual’s continuity.&rdquo;
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase text-[#971F26] block">
                  MODEL A · PARTICIPANT-HELD CONTINUITY
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                  Continuity Receipt &amp; Review Trace
                </h3>
                <p className="text-stone-800 leading-relaxed">
                  A minimal, participant-held record of the administrative path preserving: (1) What was received, (2) What was actually reviewed, (3) What action occurred, (4) What was referred elsewhere, (5) What fell outside authority, (6) What remains unresolved, and (7) Who owns the next step.
                </p>
                <p className="text-[11px] font-mono text-stone-600 pt-1 border-t border-[#D9D1C4]">
                  Connects to the agency-side 9-status Review Trace (AGY-003 specimen) and Evidence Integrity safeguards. Not a truth engine, allegation database, or automated credibility score: submission ≠ review; referral ≠ assistance; administrative closure ≠ factual resolution.
                </p>
              </div>

              <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase text-[#971F26] block">
                  MODEL B · TELECOM &amp; IDENTITY CONTINUITY
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                  Personal Number Continuity
                </h3>
                <p className="text-stone-800 leading-relaxed">
                  Addresses the harm of conflating shared-account billing authority with control over another adult&apos;s mobile number (which connects employment, banking, healthcare, schools, government services, authentication, account recovery, and personal communication). Distinguishes: (1) Billing responsibility, (2) Authenticated adult line-user identity, (3) Number continuity and transfer, (4) Communication and security controls, (5) Device ownership, and (6) Device debt and contractual obligations.
                </p>
                <p className="text-[11px] font-mono text-stone-600 pt-1 border-t border-[#D9D1C4]">
                  A payer does not have to continue paying another adult&apos;s bill, legitimate debts do not disappear, and existing survivor protections do not cover every circumstance. Presented as policy research and proposed architecture, not an enacted entitlement or implemented carrier standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Question 2: Diagnostic Method (System Change Map) */}
        <section id="about-diagnostic" className="space-y-4 scroll-mt-36 lg:scroll-mt-28">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              02 · THE DIAGNOSTIC METHOD (SYSTEM CHANGE MAP)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            How do we diagnose where continuity fails?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            Sometimes the right answer is improving an existing system, not inventing something new. Before proposing a software tool, administrative rule, or statutory reform, Maps With Teeth applies an eight-question diagnostic method across institutional seams:
          </p>
          <div className="grid gap-2 grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 text-[11.5px] sm:text-xs font-mono text-[#1C1D1D]">
            <div className="p-2.5 sm:p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">1. What already exists?</div>
            <div className="p-2.5 sm:p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">2. What is legally required or permitted?</div>
            <div className="p-2.5 sm:p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">3. What technical &amp; operational capabilities exist?</div>
            <div className="p-2.5 sm:p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">4. What actually happens in practice?</div>
            <div className="p-2.5 sm:p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">5. Who can realistically access the existing remedy?</div>
            <div className="p-2.5 sm:p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">6. Where is responsibility, evidence, identity, or access lost?</div>
            <div className="p-2.5 sm:p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">7. Is the failure legal, technical, procedural, administrative, accessibility-related, or an enforcement issue?</div>
            <div className="p-2.5 sm:p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded">8. What is the smallest effective intervention?</div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 text-xs font-sans pt-2">
            <div className="p-3.5 sm:p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs space-y-1">
              <strong className="font-mono text-[11px] uppercase text-[#971F26] block">1. Missing Protection</strong>
              <p className="text-stone-800 leading-snug">Something does not exist at all in statute, rule, or institutional workflow.</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs space-y-1">
              <strong className="font-mono text-[11px] uppercase text-[#971F26] block">2. Inaccessible Protection</strong>
              <p className="text-stone-800 leading-snug">Something exists on paper, but cannot realistically be reached due to waitlists, cost, documentation gates, or accessibility barriers.</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs space-y-1">
              <strong className="font-mono text-[11px] uppercase text-[#971F26] block">3. Defeated Protection</strong>
              <p className="text-stone-800 leading-snug">Something exists and could function, but the surrounding administrative or technical architecture prevents it from working as intended (inducing <strong>process-induced distortion</strong>).</p>
            </div>
          </div>
        </section>

        {/* Question 3: Who built it? */}
        <section id="about-founder" className="space-y-4 scroll-mt-36 lg:scroll-mt-28">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              03 · FOUNDER &amp; PROJECT DIRECTION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Who built Maps With Teeth?
          </h2>
          <div className="p-6 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">Jayme Volstad · Founder &amp; Project Director</h3>
              <span className="text-xs font-mono text-stone-600 bg-[#F5F1E8] px-2.5 py-0.5 rounded border border-[#D9D1C4]">Central Texas</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Maps With Teeth was conceived and built by <strong>Jayme Volstad</strong>, drawing on extensive experience in operations, research, systems design, and direct analysis of how people move through fragmented public and nonprofit systems. Her work is also informed by firsthand navigation of criminal-justice, family-court, victim-service, housing, and public-assistance systems.
            </p>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Rather than treating the problem as a lack of awareness or another resource-directory problem, Volstad designed Maps With Teeth around a structural question: <strong>what happens to context, responsibility, identity, and next steps when a person has to move between systems that do not share the same map?</strong>
            </p>
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              She has led development of the project’s current specifications and prototypes, including the <strong>Continuity Receipt &amp; Review Trace architecture, the Personal Number Continuity policy model, 47 canonical resource records audited across 470 material claim vectors (1,070 provenance QA assertions), Evidence Integrity safeguards, and formal Texas DFPS Sunset review submissions.</strong>
            </p>
            <div className="pt-2 border-t border-[#D9D1C4] text-xs font-mono text-stone-700 italic">
              The project is developed around strict data minimization, source transparency, and a public-interest operating model.
            </div>
          </div>
        </section>

        {/* Question 4: Current Work (4-Tier Inventory + 3-Bucket Breakdown) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              04 · CURRENT WORK &amp; DEVELOPMENT STATUS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What is developed, in development, and requiring independent validation?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            To maintain strict epistemic honesty, Maps With Teeth separates existing statutory authority and repository-verifiable code from proposed policies, pilot targets, and safeguards requiring external scrutiny:
          </p>

          <FourTierDistinctionInventory id="about-distinction-inventory" compact />

          <EditorialDisclosure
            kicker="LEVEL 2 · THREE-BUCKET DEVELOPMENT AUDIT"
            title="Inspect the 3-Bucket Repository Audit (Developed, In Development, Requiring Validation)"
            summary="Detailed itemization of repository-verifiable artifacts, specifications in active refinement, and external legal/privacy/practitioner validation requirements."
            badge="3 EPISTEMIC BUCKETS"
            variant="light"
          >
            <div className="grid md:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase text-[#2D5A3D] bg-white px-2 py-0.5 rounded border border-stone-300 inline-block">
                  BUCKET 1 · DEVELOPED OR DOCUMENTED
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">Verifiable in Repository</h3>
                <ul className="space-y-1.5 text-stone-800 leading-relaxed">
                  <li>• Client-side Continuity Receipt prototype &amp; 15-invariant risk test suite</li>
                  <li>• 9-status Review Trace specification &amp; AGY-003 synthetic specimen</li>
                  <li>• Designed Evidence Integrity safeguards (6-stage Claim-Evidence Separation, 6-state Barrier-Aware Cooperation, 2-track Retaliation Separation)</li>
                  <li>• 47 audited Central Texas resource records (470 material claim vectors / 1,070 provenance QA assertions)</li>
                  <li>• Submitted Texas DFPS Sunset public input (POL-001A) &amp; Policy Brief v0.1</li>
                  <li>• Flagship systems note (<em>The Human Becomes the Integration Layer</em>)</li>
                </ul>
              </div>

              <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase text-[#8F5A0A] bg-white px-2 py-0.5 rounded border border-stone-300 inline-block">
                  BUCKET 2 · IN DEVELOPMENT
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">Active Refinement</h3>
                <ul className="space-y-1.5 text-stone-800 leading-relaxed">
                  <li>• Comparative Personal Number Continuity policy and technical architecture (6-dimension separation model)</li>
                  <li>• Expanded System Change Map diagnostic case studies across legal, telecom, and administrative seams</li>
                  <li>• Bilateral inter-agency handoff simulation workflows using synthetic data</li>
                  <li>• Additional editorial field notes and statutory comparisons</li>
                </ul>
              </div>

              <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase text-[#971F26] bg-white px-2 py-0.5 rounded border border-stone-300 inline-block">
                  BUCKET 3 · REQUIRING INDEPENDENT VALIDATION
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">External Scrutiny Needed</h3>
                <ul className="space-y-1.5 text-stone-800 leading-relaxed">
                  <li>• Independent legal, statutory, and public-records review</li>
                  <li>• Privacy, confidentiality, and due-process assessment</li>
                  <li>• Compensated accessibility and survivor usability testing</li>
                  <li>• Adversarial evaluation and abuse-case threat modeling</li>
                  <li>• Frontline practitioner critique and real-world institutional feasibility evaluation</li>
                </ul>
              </div>
            </div>
          </EditorialDisclosure>
        </section>

        {/* Question 5: Six-Month Fellowship Objectives */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              05 · SIX-MONTH FELLOWSHIP OBJECTIVES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What are the six-month fellowship objectives?
          </h2>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
            The six-month fellowship phase is designed to move Maps With Teeth from <strong>founder-developed models toward independently scrutinized, adaptable public-interest specifications</strong>.
          </p>

          <div className="mwt-callout-editorial font-mono text-[11px] text-stone-800">
            <strong className="text-[#971F26]">FELLOWSHIP SCOPE NOTICE:</strong> These nine objectives define planned six-month research, refinement, and validation work. They are not presented as already completed, nor does the initiative promise formal institutional adoption or widespread live deployment during the fellowship window.
          </div>

          <EditorialDisclosure
            kicker="LEVEL 2 · FELLOWSHIP MILESTONES"
            title="Inspect All 9 Six-Month Fellowship Validation & Research Objectives"
            summary="Pressure-testing Continuity Receipt & Review Trace, refining Evidence Safeguards, Personal Number Continuity specification, compensated accessibility feedback, synthetic adversarial testing, privacy/due-process audit, System Change Map, open publication of failure modes, and ethical validation blueprint."
            badge="9 OBJECTIVES"
            variant="light"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-xs font-sans">
              {[
                {
                  title: "1. Pressure-Test Continuity Models",
                  desc: "Rigorously stress-test the Continuity Receipt and 9-status Review Trace against realistic procedural edge cases."
                },
                {
                  title: "2. Refine Evidence Safeguards",
                  desc: "Harden Claim-Evidence Separation, Barrier-Aware Cooperation, and process-induced distortion safeguards."
                },
                {
                  title: "3. Personal Number Continuity Model",
                  desc: "Develop the comparative Personal Number Continuity policy and technical specification across the 6 separated dimensions."
                },
                {
                  title: "4. Compensated Accessibility & Practitioner Feedback",
                  desc: "Obtain compensated accessibility reviews and relevant frontline practitioner critique where feasible."
                },
                {
                  title: "5. Synthetic & Adversarial Testing",
                  desc: "Evaluate synthetic and adversarial abuse/retaliation scenarios strictly before any live case use."
                },
                {
                  title: "6. Privacy, Governance & Due-Process Audit",
                  desc: "Identify privacy, public-records, governance, due-process, and institutional implementation risks."
                },
                {
                  title: "7. Refine the System Change Map",
                  desc: "Expand the 8-question diagnostic framework distinguishing missing, inaccessible, and defeated protections."
                },
                {
                  title: "8. Publish Findings & Failure Modes",
                  desc: "Openly publish research findings, architectural limitations, negative results, and identified failure modes."
                },
                {
                  title: "9. Ethical Validation Blueprint",
                  desc: "Develop a bounded blueprint for one ethical research or validation partnership using non-PII synthetic protocols."
                }
              ].map((obj, idx) => (
                <div key={idx} className="p-3.5 bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
                  <strong className="text-sm font-serif text-[#1C1D1D] block">{obj.title}</strong>
                  <p className="text-stone-800 leading-snug">{obj.desc}</p>
                </div>
              ))}
            </div>
          </EditorialDisclosure>
        </section>

        {/* Question 6: What are our boundaries? (GOV.UK Left-Rule Editorial Callout) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold">
              06 · INSTITUTIONAL BOUNDARIES &amp; NON-CLAIMS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            What are our boundaries?
          </h2>
          <div className="mwt-callout-urgent space-y-4">
            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Maps With Teeth strictly maintains clear institutional non-claims and operational boundaries:
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2 text-xs font-mono text-[#1C1D1D] font-bold">
              <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/70">✕ NOT an Allegation-Reporting Platform</div>
              <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/70">✕ NOT a Replacement for Agency Investigation</div>
              <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/70">✕ NOT an Automated Credibility or Risk Engine</div>
              <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/70">✕ NOT Legal Representation or Court Adjudication</div>
            </div>
            <div className="text-[11px] text-stone-700 font-mono pt-2 border-t border-[#D9D1C4] space-y-1">
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

      {/* 2B. Archival Cartographic Monograph & Before/After Slider */}
      <section className="pt-2">
        <ArchivalCaseStudyGallery />
      </section>

      {/* 3. Governance & Founding Board Section */}
      <section id="about-governance" className="pt-4 scroll-mt-36 lg:scroll-mt-28">
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
