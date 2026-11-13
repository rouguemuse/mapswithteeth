"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Scale,
  CheckCircle2,
  FileCheck,
  Building2,
  Layers
} from "lucide-react";

export function StrategicQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const questions = [
    {
      num: "01",
      question: "What is failing?",
      deck: "The administrative seam deficit across public and civil institutions.",
      answer:
        "What is failing is not necessarily the good faith or individual procedural compliance of frontline caseworkers. What is failing is the continuity of information, unresolved risk, and decision ownership across institutional boundaries.",
      detail:
        "When a crisis touches child welfare, family violence response, police dispatch, criminal courts, civil family courts, housing authorities, and schools, each entity maintains a separate file under a different identifier. Because each system only measures its own internal checklist, crucial evidence and safety context evaporate in the seams between them.",
      takeaway: "The human is forced to become the physical integration layer, carrying paper records and recounting trauma at every door."
    },
    {
      num: "02",
      question: "Why do existing institutional procedures fail to preserve continuity?",
      deck: "Procedural activity is mistaken for accountable continuity.",
      answer:
        "Current institutional architecture rewards internal file closure rather than verified cross-system handoffs. Agencies routinely mark an outbound referral as 'completed' the moment a form or email is dispatched, with zero verification of whether the receiving agency opened, accepted, or acted upon it.",
      detail:
        "Furthermore, strict jurisdictional mandates and liability concerns incentivize agencies to evaluate matters in atomized silos. An agency screens out report #4 as minor because it cannot see reports #1, #2, and #3 filed across municipal or county lines. Disputed claims are frequently erased or collapsed into subjective credibility impressions rather than documented as contested evidentiary traces.",
      takeaway: "Individual procedures conclude successfully on paper while the systemic outcome fails catastrophically."
    },
    {
      num: "03",
      question: "What does Maps With Teeth propose?",
      deck: "A participant-held continuity layer and open administrative handoff standards.",
      answer:
        "Maps With Teeth proposes a lightweight, non-centralized continuity framework consisting of two complementary halves:",
      detail:
        "1. Participant-Held Continuity Receipts: A portable, client-side cryptographic record establishing what was presented, what was acknowledged, what decisions were made, and who owns the next milestone—without creating a central database.\n\n2. Seven Open Policy Protocols: Standardizing closed-loop referral acknowledgments, 9-status Review Trace logs, designated cross-agency liaison roles, cumulative review triggers, and context-before-closure audits.",
      takeaway: "Establishing what was received, reviewed, considered, referred, decided, and unresolved across transitions."
    },
    {
      num: "04",
      question: "How would those mechanisms work without compromising evidence integrity or due process?",
      deck: "Strict non-claims boundaries, claim-evidence separation, and locked principles.",
      answer:
        "The framework is engineered with hard mathematical and legal boundaries to ensure that continuity does not become multi-agency surveillance or a tool for unfair prejudice.",
      detail:
        "• No Centralized Allegation Dossier: Receipts live on participant devices; inter-agency inquiries transmit minimum-necessary presence signals under existing statutory authority.\n• Locked Epistemic Safeguards: Related does not mean proven; repeated does not mean corroborated; demeanor is not provenance; could not is not would not.\n• Separation of Observation & Disposition: Caseworkers document what was reviewed and what governing authority was consulted without merging factual findings or using automated algorithmic credibility scoring.",
      takeaway: "Protecting procedural rights and preventing reputation scoring while ensuring critical records are not silently lost."
    },
    {
      num: "05",
      question: "What must happen next to evaluate or adopt them?",
      deck: "Incremental administrative adoption, synthetic-data pilots, and oversight alignment.",
      answer:
        "Maps With Teeth does not require a single omnibus bill or multi-million-dollar software procurement to begin delivering value.",
      detail:
        "• Administrative Adoption: Agencies can adopt closed-loop referral acknowledgment and the 9-status Review Trace via internal standard operating procedures today.\n• Interlocal Pilot Trials: Local entities can structure narrow 90-day workflow trials under the Texas Interlocal Cooperation Act (Tex. Gov't Code § 791) using 100% synthetic demonstration data.\n• Sunset Advisory Commission Integration: Sunset staff can incorporate closed-loop handoff rates and context-before-closure checklists into agency review recommendations (e.g. Texas DFPS Sunset Review 2026–2027).",
      takeaway: "Pragmatic, peer-reviewed evaluation that proves administrative feasibility before statewide legislative mandates."
    }
  ];

  return (
    <section id="strategic-standard" className="space-y-8 scroll-mt-24 font-sans select-none">
      {/* Header */}
      <div className="border-b-2 border-[#11100F] pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#841F2B] font-bold uppercase tracking-widest block mb-2">
            § 05 · THE STRATEGIC STANDARD · FIVE CORE INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#11100F] tracking-tight">
            The Five Questions the Initiative Answers
          </h2>
        </div>
        <span className="font-mono text-xs text-[#4D4944] uppercase tracking-wider">
          [SYSTEMIC BRIEFING FOR LEADERSHIP]
        </span>
      </div>

      <p className="text-lg text-[#4D4944] font-serif max-w-3xl leading-relaxed">
        Whether you are a legislator, agency director, judge, caseworker, researcher, or civic funder, the viability of Maps With Teeth rests on five fundamental questions:
      </p>

      {/* Accordion / Tab Display of 5 Strategic Questions */}
      <div className="space-y-3 pt-2">
        {questions.map((q, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={q.num}
              className={`border-2 rounded-xs transition-all overflow-hidden ${
                isOpen
                  ? "bg-[#EEE8DB] border-[#11100F] shadow-md"
                  : "bg-[#F8F5EE] border-[#C4B69E] hover:border-[#11100F]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#841F2B]"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#841F2B]">
                      QUESTION {q.num}
                    </span>
                    <span className="text-[10px] font-mono text-[#4D4944] uppercase">
                      [{q.deck}]
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#11100F]">
                    {q.question}
                  </h3>
                </div>

                <div className="p-2 rounded-full bg-[#11100F]/5 text-[#11100F] shrink-0 mt-1">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#841F2B]" : ""
                    }`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#C4B69E] space-y-4 text-xs sm:text-sm font-sans leading-relaxed text-[#11100F]">
                  <p className="font-serif text-base sm:text-lg font-bold text-[#841F2B]">
                    {q.answer}
                  </p>

                  <div className="p-4 bg-[#F8F5EE] border border-[#C4B69E] rounded-xs space-y-2 whitespace-pre-line text-[#4D4944]">
                    {q.detail}
                  </div>

                  <div className="p-3 bg-[#11100F] text-[#F8F5EE] rounded-xs font-mono text-xs flex items-center justify-between gap-2">
                    <span className="text-amber-300 font-bold">CORE TAKEAWAY:</span>
                    <span className="text-[#D8D2C6] text-right">{q.takeaway}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* System Change Map: 8 Diagnostic Questions & 3 Failure Modes */}
      <div className="bg-[#EEE8DB] border-2 border-[#11100F] p-6 sm:p-8 rounded-xs space-y-6 shadow-md mt-8">
        <div className="border-b border-[#C4B69E] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-[#841F2B] block tracking-wider">
              DIAGNOSTIC METHODOLOGY · THE SYSTEM CHANGE MAP
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#11100F]">
              Eight Diagnostic Questions Before Any Intervention
            </h3>
          </div>
          <Link
            href="/how-it-works"
            className="text-xs font-mono font-bold text-[#841F2B] hover:text-[#11100F] uppercase underline underline-offset-4"
          >
            Inspect Full System Change Map →
          </Link>
        </div>

        <p className="text-sm text-[#4D4944] font-sans leading-relaxed">
          Sometimes the right answer is improving an existing system rather than inventing something new. Before proposing a tool, rule, or statute, Maps With Teeth evaluates every institutional boundary against eight diagnostic questions:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          {[
            "1. What already exists?",
            "2. What is legally required or permitted?",
            "3. What technical and operational capabilities exist?",
            "4. What actually happens in practice?",
            "5. Who can realistically access the existing remedy?",
            "6. Where is responsibility, evidence, identity, or access lost?",
            "7. Is the failure legal, technical, procedural, administrative, accessibility-related, or an enforcement issue?",
            "8. What is the smallest effective intervention?",
          ].map((dq, i) => (
            <div key={i} className="p-3 bg-[#F8F5EE] border border-[#C4B69E] rounded-xs text-[#11100F] font-bold leading-snug">
              {dq}
            </div>
          ))}
        </div>

        {/* Three-Part Protection Failure Distinction */}
        <div className="grid md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-[#11100F] text-[#F8F5EE] rounded-xs space-y-1">
            <span className="font-mono text-[10px] text-amber-300 font-bold uppercase block">FAILURE MODE 01</span>
            <h4 className="font-serif font-bold text-base text-white">Missing Protection</h4>
            <p className="text-xs text-[#D4CDBE] font-sans leading-relaxed">
              Something does not exist in statute, agency rule, or institutional infrastructure.
            </p>
          </div>
          <div className="p-4 bg-[#11100F] text-[#F8F5EE] rounded-xs space-y-1">
            <span className="font-mono text-[10px] text-amber-300 font-bold uppercase block">FAILURE MODE 02</span>
            <h4 className="font-serif font-bold text-base text-white">Inaccessible Protection</h4>
            <p className="text-xs text-[#D4CDBE] font-sans leading-relaxed">
              Something exists on paper, but cannot realistically be reached due to waitlists, cost, documentation gates, or accessibility barriers.
            </p>
          </div>
          <div className="p-4 bg-[#11100F] text-[#F8F5EE] rounded-xs space-y-1">
            <span className="font-mono text-[10px] text-amber-300 font-bold uppercase block">FAILURE MODE 03</span>
            <h4 className="font-serif font-bold text-base text-white">Defeated Protection</h4>
            <p className="text-xs text-[#D4CDBE] font-sans leading-relaxed">
              Something exists and could function, but the surrounding administrative or technical architecture prevents it from working as intended.
            </p>
          </div>
        </div>
      </div>

      {/* Concise Current Work (3 Buckets) & Six-Month Fellowship Objectives */}
      <div className="grid lg:grid-cols-12 gap-6 pt-4">
        {/* Current Work Status */}
        <div className="lg:col-span-7 bg-[#F8F5EE] border-2 border-[#11100F] p-6 sm:p-7 rounded-xs space-y-4 shadow-sm">
          <div className="border-b border-[#C4B69E] pb-3 flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase text-[#841F2B]">
              CURRENT WORK &amp; DEVELOPMENT STATUS
            </span>
            <span className="font-mono text-[10px] text-[#4D4944] uppercase">[EPISTEMIC TRANSPARENCY]</span>
          </div>

          <div className="space-y-3 text-xs font-sans">
            <div className="p-3.5 bg-[#EEE8DB] border border-[#C4B69E] rounded-xs space-y-1">
              <strong className="font-mono text-[11px] uppercase text-[#11100F] block">
                1. Developed or Documented (Verifiable in Repository):
              </strong>
              <p className="text-[#4D4944] leading-relaxed">
                47 audited Central Texas resources (470 material claim vectors / 1,070 provenance QA assertions); client-side Continuity Receipt prototype &amp; 15-invariant test suite; 9-status Review Trace &amp; AGY-003 specimen; designed Evidence Integrity safeguards; submitted Texas DFPS Sunset public input (POL-001A) and Policy Brief v0.1; flagship systems note.
              </p>
            </div>

            <div className="p-3.5 bg-[#EEE8DB] border border-[#C4B69E] rounded-xs space-y-1">
              <strong className="font-mono text-[11px] uppercase text-[#841F2B] block">
                2. In Development:
              </strong>
              <p className="text-[#4D4944] leading-relaxed">
                Comparative Personal Number Continuity policy and technical specification (6-dimension separation model); expanded System Change Map diagnostic case studies; bilateral inter-agency handoff simulation workflows; additional editorial field notes.
              </p>
            </div>

            <div className="p-3.5 bg-[#EEE8DB] border border-[#C4B69E] rounded-xs space-y-1">
              <strong className="font-mono text-[11px] uppercase text-[#4D4944] block">
                3. Requiring Independent Validation:
              </strong>
              <p className="text-[#4D4944] leading-relaxed">
                External legal and statutory review; privacy, confidentiality, and due-process audit; compensated accessibility and survivor usability testing; adversarial threat modeling; frontline practitioner critique; real-world institutional feasibility evaluation.
              </p>
            </div>
          </div>
        </div>

        {/* Six-Month Fellowship Objectives */}
        <div className="lg:col-span-5 bg-[#11100F] text-[#F8F5EE] border-2 border-[#11100F] p-6 sm:p-7 rounded-xs space-y-4 shadow-md flex flex-col justify-between">
          <div className="space-y-3">
            <div className="border-b border-[#2C2825] pb-3 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-amber-300">
                SIX-MONTH FELLOWSHIP OBJECTIVES
              </span>
              <span className="font-mono text-[10px] text-[#A39E94]">[NEXT PHASE]</span>
            </div>

            <p className="text-xs sm:text-sm text-[#E5DFC8] font-serif leading-relaxed">
              Moving Maps With Teeth from founder-developed models toward independently scrutinized, adaptable public-interest specifications:
            </p>

            <ul className="space-y-1.5 text-xs text-[#D4CDBE] font-sans leading-snug">
              <li>• Pressure-test the Continuity Receipt &amp; Review Trace</li>
              <li>• Refine Evidence Integrity safeguards</li>
              <li>• Develop the comparative Personal Number Continuity policy model</li>
              <li>• Obtain compensated accessibility &amp; practitioner feedback where feasible</li>
              <li>• Test synthetic and adversarial scenarios before any live case use</li>
              <li>• Identify privacy, governance, due-process, and implementation risks</li>
              <li>• Refine the System Change Map</li>
              <li>• Publish findings, limitations, and failure modes</li>
              <li>• Develop a bounded blueprint for one ethical research or validation partnership</li>
            </ul>
          </div>

          <div className="pt-3 border-t border-[#2C2825] text-[11px] font-mono text-[#A39E94]">
            <strong>Restraint Notice:</strong> Fellowship objectives represent planned validation and research milestones—not completed external audits or promised institutional deployment.
          </div>
        </div>
      </div>

      {/* Cross-Link Bar to Policy Lab */}
      <div className="pt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/policy"
          className="inline-flex items-center gap-1.5 text-[#841F2B] hover:text-[#11100F] font-bold uppercase transition"
        >
          <span>Review Full Texas Policy Brief &amp; Sunset Submission Memo →</span>
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-[#11100F] hover:text-[#841F2B] font-bold uppercase transition"
        >
          <span>Inspect Full Project Mission, Status &amp; Fellowship Roadmap →</span>
        </Link>
      </div>
    </section>
  );
}
