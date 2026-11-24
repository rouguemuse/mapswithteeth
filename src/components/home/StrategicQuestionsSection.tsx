"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type StrategicTab = "inquiries" | "diagnostic" | "roadmap";

export function StrategicQuestionsSection() {
  const [activeTab, setActiveTab] = useState<StrategicTab>("inquiries");
  const [openIndex, setOpenIndex] = useState<number>(0);

  const diagnosticQuestions = [
    {
      num: "01 · AUTHORITY ON PAPER",
      title: "What already exists?",
      body: "Audit exact statutes & rules (Tex. Prop. Code § 92.016, 16 TAC § 25.478, 47 U.S.C. § 345).",
    },
    {
      num: "02 · MANDATE vs. DISCRETION",
      title: "Required vs. permitted?",
      body: "Separate mandatory statutory duties from local desk customs and discretionary gatekeeping.",
    },
    {
      num: "03 · FRONTLINE REALITY",
      title: "What happens in practice?",
      body: "Map unlisted documentation hurdles, circular referral loops, and unannounced callback drops.",
    },
    {
      num: "04 · RESPONSIBILITY DROP",
      title: "Where does ownership vanish?",
      body: "Pinpoint the handoff where neither the referring nor receiving door owns the next step.",
    },
    {
      num: "05 · FLATTENED DISTINCTION",
      title: "What distinction was lost?",
      body: "Identify where the system conflated inability with refusal, billing with identity, or receipt with review.",
    },
    {
      num: "06 · DISTORTION AUDIT",
      title: "How does friction distort?",
      body: "Test whether administrative barriers manufacture delay or distress later held against the participant.",
    },
    {
      num: "07 · MINIMAL ARTIFACT",
      title: "What is the lightest fix?",
      body: "Preserve only the minimum metadata needed to bridge the seam—never a centralized dossier.",
    },
    {
      num: "08 · ADOPTION LEVER",
      title: "Which tier governs reform?",
      body: "Route to Agency SOP (Tier 1), Interlocal Pilot (Tier 2), Sunset Review (Tier 3), or Statute (Tier 4).",
    },
  ];

  const questions = [
    {
      num: "01",
      question: "What is failing?",
      deck: "The administrative seam deficit across public and civil institutions.",
      answer:
        "What is failing is not necessarily the good faith or individual procedural compliance of frontline caseworkers. What is failing is the continuity of information, unresolved risk, and decision ownership across institutional boundaries.",
      detail:
        "When a crisis touches child welfare, family violence response, police dispatch, criminal courts, civil family courts, housing authorities, and schools, each entity maintains a separate file under a different identifier. Because each system only measures its own internal checklist, crucial evidence and safety context evaporate in the seams between them.",
      takeaway:
        "The human is forced to become the physical integration layer, carrying paper records and recounting trauma at every door.",
    },
    {
      num: "02",
      question: "Why do existing institutional procedures fail to preserve continuity?",
      deck: "Procedural activity is mistaken for accountable continuity.",
      answer:
        "Current institutional architecture rewards internal file closure rather than verified cross-system handoffs. Agencies routinely mark an outbound referral as 'completed' the moment a form or email is dispatched, with zero verification of whether the receiving agency opened, accepted, or acted upon it.",
      detail:
        "Furthermore, strict jurisdictional mandates and liability concerns incentivize agencies to evaluate matters in atomized silos. An agency screens out report #4 as minor because it cannot see reports #1, #2, and #3 filed across municipal or county lines. Disputed claims are frequently erased or collapsed into subjective credibility impressions rather than documented as contested evidentiary traces.",
      takeaway:
        "Individual procedures conclude successfully on paper while the systemic outcome fails catastrophically.",
    },
    {
      num: "03",
      question: "What does Maps With Teeth propose?",
      deck: "A participant-held continuity layer and open administrative handoff standards.",
      answer:
        "Maps With Teeth proposes a lightweight, non-centralized continuity framework consisting of two complementary halves:",
      detail:
        "1. Participant-Held Continuity Receipts: A portable, client-side cryptographic record establishing what was presented, what was acknowledged, what decisions were made, and who owns the next milestone—without creating a central database.\n\n2. Seven Open Policy Protocols: Standardizing closed-loop referral acknowledgments, 9-status Review Trace logs, designated cross-agency liaison roles, cumulative review triggers, and context-before-closure audits.",
      takeaway:
        "Establishing what was received, reviewed, considered, referred, decided, and unresolved across transitions.",
    },
    {
      num: "04",
      question:
        "How would those mechanisms work without compromising evidence integrity or due process?",
      deck: "Strict non-claims boundaries, claim-evidence separation, and locked principles.",
      answer:
        "The framework is engineered with hard mathematical and legal boundaries to ensure that continuity does not become multi-agency surveillance or a tool for unfair prejudice.",
      detail:
        "• No Centralized Allegation Dossier: Receipts live on participant devices; inter-agency inquiries transmit minimum-necessary presence signals under existing statutory authority.\n• Locked Epistemic Safeguards: Related does not mean proven; repeated does not mean corroborated; demeanor is not provenance; could not is not would not.\n• Separation of Observation & Disposition: Caseworkers document what was reviewed and what governing authority was consulted without merging factual findings or using automated algorithmic credibility scoring.",
      takeaway:
        "Protecting procedural rights and preventing reputation scoring while ensuring critical records are not silently lost.",
    },
    {
      num: "05",
      question: "What must happen next to evaluate or adopt them?",
      deck: "Incremental administrative adoption, synthetic-data pilots, and oversight alignment.",
      answer:
        "Maps With Teeth does not require a single omnibus bill or multi-million-dollar software procurement to begin delivering value.",
      detail:
        "• Administrative Adoption: Agencies can adopt closed-loop referral acknowledgment and the 9-status Review Trace via internal standard operating procedures today.\n• Interlocal Pilot Trials: Local entities can structure narrow 90-day workflow trials under the Texas Interlocal Cooperation Act (Tex. Gov't Code § 791) using 100% synthetic demonstration data.\n• Sunset Advisory Commission Integration: Sunset staff can incorporate closed-loop handoff rates and context-before-closure checklists into agency review recommendations (e.g. Texas DFPS Sunset Review 2026–2027).",
      takeaway:
        "Pragmatic, peer-reviewed evaluation that proves administrative feasibility before statewide legislative mandates.",
    },
  ];

  return (
    <section id="strategic-standard" className="space-y-6 scroll-mt-36 lg:scroll-mt-28 font-sans select-none">
      {/* Section Header + Level 2 Tab Selector */}
      <div className="mwt-light-surface p-5 sm:p-8 lg:p-10 rounded-xs space-y-6 shadow-md">
        <div className="border-b-2 border-mwt-black pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="mwt-kicker text-mwt-crimson-seal block mb-1.5">
              § 05 · THE STRATEGIC STANDARD · METHODOLOGY &amp; FELLOWSHIP ROADMAP
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-mwt-black tracking-tight">
              The Five Core Inquiries &amp; System Change Map
            </h2>
          </div>
          <span className="coord-tick">[GUIDED EXPLORATION SUITE]</span>
        </div>

        {/* 3-Tab Switcher */}
        <div
          role="tablist"
          aria-label="Strategic Standard Exploration Tabs"
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-mwt-paper border border-mwt-black/20 rounded-xs"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "inquiries"}
            onClick={() => setActiveTab("inquiries")}
            className={`px-3.5 py-2.5 text-left rounded-xs font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "inquiries"
                ? "bg-mwt-ink text-white shadow-xs"
                : "text-mwt-black hover:bg-mwt-paper-muted"
            }`}
          >
            1. Five Core Inquiries (Q01–Q05)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "diagnostic"}
            onClick={() => setActiveTab("diagnostic")}
            className={`px-3.5 py-2.5 text-left rounded-xs font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "diagnostic"
                ? "bg-mwt-ink text-white shadow-xs"
                : "text-mwt-black hover:bg-mwt-paper-muted"
            }`}
          >
            2. System Change Map (8-Step Audit)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "roadmap"}
            onClick={() => setActiveTab("roadmap")}
            className={`px-3.5 py-2.5 text-left rounded-xs font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "roadmap"
                ? "bg-mwt-ink text-white shadow-xs"
                : "text-mwt-black hover:bg-mwt-paper-muted"
            }`}
          >
            3. Status &amp; 6-Month Fellowship
          </button>
        </div>

        {/* TAB 1: FIVE CORE INQUIRIES */}
        {activeTab === "inquiries" && (
          <div className="space-y-2.5">
            {questions.map((q, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={q.num}
                  className={`border-[1.5px] rounded-xs transition-all overflow-hidden ${
                    isOpen
                      ? "bg-mwt-paper-muted border-mwt-black shadow-sm"
                      : "bg-mwt-paper border-mwt-border-paper hover:border-mwt-black"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-bold text-mwt-crimson-seal">
                          QUESTION {q.num}
                        </span>
                        <span className="text-[10px] font-mono text-mwt-graphite uppercase">
                          [{q.deck}]
                        </span>
                      </div>
                      <h3 className="text-base sm:text-xl font-display font-extrabold text-mwt-black">
                        {q.question}
                      </h3>
                    </div>

                    <div className="p-1.5 rounded-xs bg-mwt-black/5 text-mwt-black shrink-0 mt-0.5">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-mwt-crimson-seal" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-mwt-border-paper space-y-3 text-xs sm:text-sm font-sans leading-relaxed text-mwt-black">
                      <p className="font-display text-sm sm:text-base font-bold text-mwt-crimson-seal">
                        {q.answer}
                      </p>

                      <div className="p-3.5 bg-mwt-paper border border-mwt-border-paper rounded-xs whitespace-pre-line text-mwt-graphite">
                        {q.detail}
                      </div>

                      <div className="p-3 bg-mwt-ink text-mwt-paper-display rounded-xs font-mono text-xs flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[#FBBF24] font-bold">CORE TAKEAWAY:</span>
                        <span className="text-[#D5CBB8]">{q.takeaway}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: SYSTEM CHANGE MAP (8 DIAGNOSTIC QUESTIONS & 3 FAILURE MODES) */}
        {activeTab === "diagnostic" && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-mwt-black/20 pb-3">
              <p className="text-xs sm:text-sm text-mwt-graphite font-sans">
                Before proposing code or policy, every Maps With Teeth investigation applies an 8-question diagnostic sequence and classifies failure into three distinct structural modes:
              </p>
              <Link
                href="/how-it-works"
                className="text-xs font-mono font-bold text-mwt-crimson-seal hover:text-mwt-black uppercase underline underline-offset-4 shrink-0"
              >
                Inspect Full System Change Map →
              </Link>
            </div>

            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-3">
              {diagnosticQuestions.map((dq) => (
                <div
                  key={dq.num}
                  className="p-3 sm:p-3.5 bg-mwt-paper border border-mwt-border-paper border-l-[3px] border-l-mwt-crimson-seal rounded-xs space-y-1"
                >
                  <div className="font-mono text-[9.5px] sm:text-[10px] font-bold tracking-[0.1em] text-mwt-crimson-seal">
                    {dq.num}
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-extrabold text-mwt-black leading-snug">
                    {dq.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-xs leading-[1.38] text-mwt-text-secondary font-sans">
                    {dq.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Three-Part Protection Failure Distinction */}
            <div className="grid md:grid-cols-3 gap-3.5 pt-2 border-t border-mwt-black/20">
              <div className="p-4 bg-mwt-ink text-mwt-paper-display rounded-xs space-y-1">
                <span className="font-mono text-[10px] text-[#FBBF24] font-bold uppercase block">
                  FAILURE MODE 01
                </span>
                <h4 className="font-display font-bold text-base text-white">Missing Protection</h4>
                <p className="text-xs text-[#D5CBB8] font-sans leading-relaxed">
                  Something does not exist in statute, agency rule, or institutional infrastructure.
                </p>
              </div>
              <div className="p-4 bg-mwt-ink text-mwt-paper-display rounded-xs space-y-1">
                <span className="font-mono text-[10px] text-[#FBBF24] font-bold uppercase block">
                  FAILURE MODE 02
                </span>
                <h4 className="font-display font-bold text-base text-white">
                  Inaccessible Protection
                </h4>
                <p className="text-xs text-[#D5CBB8] font-sans leading-relaxed">
                  Something exists on paper, but cannot realistically be reached due to waitlists, cost, documentation gates, or accessibility barriers.
                </p>
              </div>
              <div className="p-4 bg-mwt-ink text-mwt-paper-display rounded-xs space-y-1">
                <span className="font-mono text-[10px] text-[#FBBF24] font-bold uppercase block">
                  FAILURE MODE 03
                </span>
                <h4 className="font-display font-bold text-base text-white">Defeated Protection</h4>
                <p className="text-xs text-[#D5CBB8] font-sans leading-relaxed">
                  Something exists and could function, but the surrounding administrative or technical architecture prevents it from working as intended.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CURRENT WORK (3 BUCKETS) & SIX-MONTH FELLOWSHIP OBJECTIVES */}
        {activeTab === "roadmap" && (
          <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7 mwt-ledger-card-light p-5 space-y-3.5">
              <div className="border-b border-mwt-border-paper pb-2.5 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase text-mwt-crimson-seal">
                  CURRENT WORK &amp; DEVELOPMENT STATUS (3 BUCKETS)
                </span>
                <span className="font-mono text-[10px] text-mwt-graphite uppercase">
                  [EPISTEMIC TRANSPARENCY]
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-sans">
                <div className="p-3 bg-mwt-paper border border-mwt-border-paper rounded-xs space-y-1">
                  <strong className="font-mono text-[11px] uppercase text-mwt-black block">
                    1. Developed or Documented (Verifiable in Repository):
                  </strong>
                  <p className="text-mwt-graphite leading-relaxed">
                    47 audited Central Texas resources (470 material claim vectors / 1,070 provenance QA assertions); client-side Continuity Receipt prototype &amp; 15-invariant test suite; 9-status Review Trace &amp; AGY-003 specimen; designed Evidence Integrity safeguards; submitted Texas DFPS Sunset public input (POL-001A) and Policy Brief v0.1; flagship systems note.
                  </p>
                </div>

                <div className="p-3 bg-mwt-paper border border-mwt-border-paper rounded-xs space-y-1">
                  <strong className="font-mono text-[11px] uppercase text-mwt-crimson-seal block">
                    2. In Development:
                  </strong>
                  <p className="text-mwt-graphite leading-relaxed">
                    Comparative Personal Number Continuity policy and technical specification (6-dimension separation model); expanded System Change Map diagnostic case studies; bilateral inter-agency handoff simulation workflows; additional editorial field notes.
                  </p>
                </div>

                <div className="p-3 bg-mwt-paper border border-mwt-border-paper rounded-xs space-y-1">
                  <strong className="font-mono text-[11px] uppercase text-mwt-graphite block">
                    3. Requiring Independent Validation:
                  </strong>
                  <p className="text-mwt-graphite leading-relaxed">
                    External legal and statutory review; privacy, confidentiality, and due-process audit; compensated accessibility and survivor usability testing; adversarial threat modeling; frontline practitioner critique; real-world institutional feasibility evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Six-Month Fellowship Objectives */}
            <div className="lg:col-span-5 mwt-dark-surface p-5 rounded-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="border-b border-mwt-charcoal pb-2.5 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase text-[#FBBF24]">
                    SIX-MONTH FELLOWSHIP OBJECTIVES
                  </span>
                  <span className="font-mono text-[10px] text-[#C8BFA8]">[NEXT PHASE]</span>
                </div>

                <p className="text-xs sm:text-sm text-[#E2D7C3] font-display leading-relaxed">
                  Moving Maps With Teeth from founder-developed models toward independently scrutinized, adaptable public-interest specifications:
                </p>

                <ul className="space-y-1.5 text-xs text-[#D5CBB8] font-sans leading-snug">
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
            </div>
          </div>
        )}

        {/* Mandatory Restraint Notice & Level 3 Cross-Links Always Visible (GOV.UK Left-Rule Editorial Callout) */}
        <div className="mwt-callout-editorial flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-mwt-graphite">
          <div>
            <strong className="text-mwt-crimson-seal uppercase">Restraint Notice:</strong> Fellowship objectives represent planned validation and research milestones—not completed external audits or promised institutional deployment.
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/how-it-works"
              className="text-mwt-crimson-seal hover:text-mwt-black font-bold uppercase underline underline-offset-4"
            >
              System Change Map →
            </Link>
            <Link
              href="/about"
              className="text-mwt-black hover:text-mwt-crimson-seal font-bold uppercase underline underline-offset-4"
            >
              Mission &amp; Status →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
