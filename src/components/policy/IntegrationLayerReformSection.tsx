"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Eye,
  GitBranch,
  Scale,
  Calendar,
  Lock,
  Users,
  RefreshCw,
} from "lucide-react";

export function IntegrationLayerReformSection() {
  const [activeTab, setActiveTab] = useState<"mechanisms" | "safeguards" | "pilot" | "sunset">(
    "mechanisms"
  );

  const mechanisms = [
    {
      num: "01",
      title: "Linked-Case & Related-Record Review",
      subtitle: "Subject to lawful access and statutory privacy",
      description:
        "Determine whether an authorized related-matter inquiry is permitted and appropriate under existing statutory data-exchange provisions, without merging factual conclusions or presuming corroboration.",
      operationalNote:
        "Prompts authorized officers to verify whether parallel matters exist across municipal, county, or agency boundaries, without transmitting unvetted allegation text into outside files.",
      icon: GitBranch,
    },
    {
      num: "02",
      title: "Pre-Closure Context Checks",
      subtitle: "Verify process completeness before administrative exit",
      description:
        "Complete a standardized pre-closure audit recording whether identified related matters were examined, referred elsewhere, or deemed unreviewed with explicit reason prior to file closure.",
      operationalNote:
        "Prevents premature case dismissals where files close without verifying whether critical records were held elsewhere. Tracks process completeness without forcing substantive merits findings.",
      icon: FileCheck,
    },
    {
      num: "03",
      title: "Designated Cross-Agency Liaison Roles",
      subtitle: "Eliminating unassigned responsibility at system seams",
      description:
        "Designate clear administrative liaison responsibilities and named institutional decision-owners for the immediate next milestone at every inter-agency transition.",
      operationalNote:
        "Eliminates the 'nobody's case' failure mode. Re-assignment requires explicit bilateral handoff confirmation between designated roles, protecting frontline workers through role-based assignment.",
      icon: Users,
    },
    {
      num: "04",
      title: "Referral Acknowledgment & Traceability",
      subtitle: "A referral must not end at 'sent'",
      description:
        "Require receiving entities to execute timestamped electronic acknowledgment, indicating whether responsibility is accepted, declined, redirected, or pending.",
      operationalNote:
        "Binds transmission timestamp and recipient identifier. Proposes an evaluation pilot service target of receiving acknowledgment within 48 hours (a proposed pilot design benchmark, not an existing statutory requirement).",
      icon: RefreshCw,
    },
    {
      num: "05",
      title: "Cumulative-Pattern Review",
      subtitle: "Rather than exclusively isolated incident review",
      description:
        "Trigger human supervisory or multidisciplinary case conferences (extending CAC or High-Risk Team models) when multiple fragmented encounters occur within a defined timeframe.",
      operationalNote:
        "Prevents escalating harm from being atomized into unrelated minor incidents. Cumulative report counts serve exclusively to prompt human inquiry; they are strictly forbidden from being used as automated risk or credibility scores.",
      icon: Scale,
    },
    {
      num: "06",
      title: "Appropriate Information Exchange",
      subtitle: "Bounded exchange with strict privacy & due-process safeguards",
      description:
        "Ensure data exchange is bounded strictly to minimum-necessary administrative metadata under established legal authorities, preserving confidentiality and due process.",
      operationalNote:
        "Adheres strictly to applicable confidentiality boundaries (including 34 U.S.C. § 12291 VAWA non-disclosure, FERPA, and Texas statutory privileges). Strictly prohibits centralized surveillance dossiers or public registries.",
      icon: Lock,
    },
    {
      num: "07",
      title: "Documentation of Considered Information",
      subtitle: "Review Trace and recorded omission rationales",
      description:
        "Record what was received, what was actually reviewed, what was determined outside authority, and the explicit rationale if material was set aside.",
      operationalNote:
        "Implements the 9-status Review Trace standard. Distinguishes what a reviewer observed from institutional disposition, preventing silent disappearance of critical records.",
      icon: Eye,
    },
  ];

  const safeguards = [
    {
      title: "No Centralized Allegation Dossier",
      desc: "Information remains localized to authorized handlers and specific matters; no aggregate surveillance database.",
    },
    {
      title: "No Automated Risk or Credibility Scores",
      desc: "Strictly bans automated child-safety, abuse-risk, or algorithmic credibility rankings.",
    },
    {
      title: "No Assumption of Truth or Falsity Based on Report / Denial",
      desc: "No assumption that an allegation is true because it was reported or false because it was denied.",
    },
    {
      title: "No Unrestricted Cross-Agency Sharing",
      desc: "Strict adherence to statutory privacy boundaries, VAWA non-disclosure rules, and minimum-necessary standards.",
    },
    {
      title: "No Replacement of Professional Judgment",
      desc: "Technology acts solely as an audit and continuity ledger, never substituting for qualified caseworker or legal discretion.",
    },
    {
      title: "No Forced Disclosure of Legally Protected Information",
      desc: "Protects privileged survivor communications, work product, and statutory confidentiality protections.",
    },
    {
      title: "No Live Deployment Without Adversarial Review",
      desc: "Mandatory prior legal, privacy, survivor-practitioner, and adversarial pressure-testing before any production pilot.",
    },
  ];

  const pilotCriteria = [
    {
      num: "1",
      metric: "Trace Qualifying Evidence",
      description:
        "Trace the handling and explicit review disposition of qualifying, potentially material evidence.",
    },
    {
      num: "2",
      metric: "Identify Handoff Ownership",
      description:
        "Establish unambiguous operational ownership and next-action accountability for unresolved referrals.",
    },
    {
      num: "3",
      metric: "Distinguish Acknowledgment from Resolution",
      description:
        "Separate physical complaint intake confirmation from substantive investigative or administrative disposition.",
    },
    {
      num: "4",
      metric: "Document Governing Authority",
      description:
        "Document the legal and regulatory statutory authority supporting contested or challenged institutional actions.",
    },
    {
      num: "5",
      metric: "Detect Procedural Inconsistencies",
      description:
        "Detect unexplained procedural variances and threshold divergences across comparable matters.",
    },
    {
      num: "6",
      metric: "Reduce Retelling Burden",
      description:
        "Quantifiably reduce the need for people to repeatedly reconstruct previously submitted records and timelines.",
    },
  ];

  return (
    <section id="integration-layer-reform" className="space-y-6 scroll-mt-36 lg:scroll-mt-28 font-sans select-none">
      {/* 1. Header Banner */}
      <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-5 sm:p-8 space-y-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C4B69E] pb-3.5">
          <div className="flex items-center gap-2 text-mwt-oxblood">
            <Layers className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              MAPS WITH TEETH · POLICY &amp; REFORM INITIATIVE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-mwt-oxblood text-white rounded-xs text-[10.5px] font-mono font-bold uppercase tracking-wider">
              Independent Reform Proposal
            </span>
            <span className="coord-tick hidden sm:inline-block">[POLICY INITIATIVE: 2026–27]</span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-mwt-black tracking-tight leading-tight">
            When the Human Becomes the Integration Layer
          </h2>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-mwt-oxblood font-bold">
            An Administrative Continuity &amp; Accountability Reform Initiative
          </p>
        </div>

        {/* The Problem Narrative Block */}
        <div className="grid lg:grid-cols-12 gap-5 pt-1">
          <div className="lg:col-span-7 space-y-3 text-xs sm:text-sm text-mwt-black leading-relaxed">
            <div className="space-y-1.5 border-l-4 border-mwt-oxblood pl-3.5 py-0.5">
              <span className="text-[11px] font-mono font-bold uppercase text-mwt-oxblood block">
                THE PROBLEM
              </span>
              <p className="font-serif italic text-sm sm:text-base text-mwt-black">
                A person submits evidence. An agency acknowledges receiving it. Responsibility changes hands. A decision is made. But what happened in between?
              </p>
            </div>
            <p className="text-mwt-graphite">
              Across public systems, a record of contact is not necessarily a record of meaningful action. When information moves between workers, departments, jurisdictions, and institutions without clear ownership or traceability, the individual becomes responsible for maintaining the continuity the system should provide.
            </p>
          </div>

          <div className="lg:col-span-5 bg-mwt-ivory border border-mwt-black rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-mwt-oxblood block">
                THE PROPOSED REFORM
              </span>
              <p className="text-xs text-mwt-black leading-relaxed">
                Maps With Teeth proposes an <strong>administrative continuity and evidence-traceability framework</strong> asking whether authorized reviewers can establish what information was considered, how responsibility moved, which standards governed a decision, and what remained unresolved.
              </p>
            </div>

            <div className="p-2.5 bg-mwt-parchment rounded-xs border border-[#C4B69E] text-[11px] font-mono">
              <strong className="text-mwt-black">OBJECTIVE:</strong> Better institutional memory, clearer responsibility, and procedural accountability—never automated judgments or surveillance.
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Navigation Tabs (2x2 on mobile, 4-col on sm+) */}
      <div
        role="tablist"
        aria-label="Policy Reform Tabs"
        className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg text-xs font-mono"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "mechanisms"}
          onClick={() => setActiveTab("mechanisms")}
          className={`px-3 py-2.5 text-left font-bold uppercase tracking-wider transition-all rounded cursor-pointer ${
            activeTab === "mechanisms"
              ? "bg-[#971F26] text-white shadow-xs"
              : "text-mwt-black hover:bg-[#F5F1E8]"
          }`}
        >
          1. 7 Core Proposals
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "safeguards"}
          onClick={() => setActiveTab("safeguards")}
          className={`px-3 py-2.5 text-left font-bold uppercase tracking-wider transition-all rounded cursor-pointer ${
            activeTab === "safeguards"
              ? "bg-[#971F26] text-white shadow-xs"
              : "text-mwt-black hover:bg-[#F5F1E8]"
          }`}
        >
          2. 7 Safeguards
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "pilot"}
          onClick={() => setActiveTab("pilot")}
          className={`px-3 py-2.5 text-left font-bold uppercase tracking-wider transition-all rounded cursor-pointer ${
            activeTab === "pilot"
              ? "bg-[#971F26] text-white shadow-xs"
              : "text-mwt-black hover:bg-[#F5F1E8]"
          }`}
        >
          3. Pilot Evaluation (6)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "sunset"}
          onClick={() => setActiveTab("sunset")}
          className={`px-3 py-2.5 text-left font-bold uppercase tracking-wider transition-all rounded cursor-pointer ${
            activeTab === "sunset"
              ? "bg-[#971F26] text-white shadow-xs"
              : "text-mwt-black hover:bg-[#F5F1E8]"
          }`}
        >
          4. DFPS Sunset Window
        </button>
      </div>

      {/* 3. Tab Contents */}
      {/* TAB 1: 7 CORE PROPOSALS */}
      {activeTab === "mechanisms" && (
        <div className="space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              SYSTEMIC ARCHITECTURE &amp; STATUTORY DIRECTION
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-mwt-black">
              Seven Core Policy Proposals
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-3xl leading-relaxed">
              Concrete administrative proposals addressing linked matters, pre-closure audits, cross-agency liaison roles, closed-loop referrals, cumulative review, bounded data exchange, and Review Trace documentation.
            </p>
          </div>

          <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
            {mechanisms.map((mech) => {
              const Icon = mech.icon;
              return (
                <div
                  key={mech.num}
                  className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-4 flex flex-col justify-between space-y-3 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-[#C4B69E] pb-1.5">
                      <span className="font-mono text-xs font-bold text-mwt-oxblood">
                        MECHANISM {mech.num}
                      </span>
                      <Icon className="w-4 h-4 text-mwt-oxblood" aria-hidden="true" />
                    </div>

                    <h4 className="font-serif font-bold text-base sm:text-lg text-mwt-black leading-snug">
                      {mech.title}
                    </h4>

                    <p className="text-[11px] font-mono font-bold text-mwt-oxblood uppercase leading-tight">
                      {mech.subtitle}
                    </p>

                    <p className="text-xs text-mwt-black leading-relaxed">{mech.description}</p>
                  </div>

                  <details className="pt-2 border-t border-[#C4B69E] group">
                    <summary className="font-mono text-[10.5px] font-bold uppercase text-mwt-oxblood cursor-pointer list-none flex items-center justify-between">
                      <span>Operational Note &amp; Boundary</span>
                      <span className="group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <p className="text-[11px] text-mwt-graphite leading-relaxed font-sans pt-1.5">
                      {mech.operationalNote}
                    </p>
                  </details>
                </div>
              );
            })}

            {/* Read Safeguards Cross-Link Card */}
            <div className="bg-mwt-ivory border-2 border-dashed border-mwt-black rounded-lg p-4 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase text-mwt-oxblood block">
                  TECHNICAL COMPANION
                </span>
                <h4 className="font-serif font-bold text-base sm:text-lg text-mwt-black">
                  Evidence Safeguards &amp; Dispositions
                </h4>
                <p className="text-xs text-mwt-graphite leading-relaxed">
                  Deep dive into the 9 administrative disposition codes of Review Trace v0.1 and the 8 cross-cutting evidence integrity safeguards.
                </p>
              </div>

              <div className="pt-1">
                <Link
                  href="/continuity/safeguards"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-mwt-oxblood hover:bg-mwt-oxblood-dark text-white rounded-xs text-xs font-mono font-bold uppercase transition"
                >
                  <span>Review Safeguards Standard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SAFEGUARDS BY DESIGN */}
      {activeTab === "safeguards" && (
        <div className="space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              BOUNDARIES &amp; PROHIBITIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-mwt-black">
              Safeguards by Design: Strict Structural Boundaries
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-2xl">
              The reform is explicitly engineered with hard operational boundaries to prevent surveillance drift, algorithmic bias, or due-process erosion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {safeguards.map((sg, idx) => (
              <div
                key={idx}
                className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-4 space-y-1.5 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-mwt-oxblood font-mono text-[11px] font-bold uppercase">
                    <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Boundary 0{idx + 1}</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-mwt-black leading-snug">
                    {sg.title}
                  </h4>
                  <p className="text-xs text-mwt-graphite leading-relaxed">{sg.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Preservation of Process Facts Banner */}
          <div className="p-4 bg-mwt-ivory rounded-lg border border-mwt-black space-y-1.5">
            <span className="font-mono text-xs font-bold text-mwt-oxblood uppercase block">
              NON-CONVERSION PRINCIPLE:
            </span>
            <p className="text-xs sm:text-sm text-mwt-black leading-relaxed font-sans">
              Participation barriers, uncertainty, witness safety, conflicting evidence, and unresolved responsibility must be preserved as distinct <strong>process facts</strong> rather than silently converted into substantive conclusions or adverse inferences against the individual.
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: PILOT EVALUATION */}
      {activeTab === "pilot" && (
        <div className="space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              EVALUATION FRAMEWORK
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-mwt-black">
              How Implementation Could Be Evaluated
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-2xl">
              A limited, privacy-preserving pilot can assess whether participating agencies achieve observable process reliability across 6 core benchmarks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {pilotCriteria.map((item) => (
              <div
                key={item.num}
                className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-4 space-y-1.5 shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-[#C4B69E] pb-1.5">
                  <span className="font-mono text-xs font-bold text-mwt-oxblood">
                    BENCHMARK {item.num}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" aria-hidden="true" />
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-mwt-black">
                  {item.metric}
                </h4>
                <p className="text-xs text-mwt-graphite leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-mwt-ivory rounded-lg border-2 border-mwt-black text-xs sm:text-sm space-y-1">
            <span className="font-mono font-bold text-mwt-oxblood uppercase block">
              MEASUREMENT STANDARD:
            </span>
            <p className="text-mwt-black leading-relaxed">
              Success would be measured by <strong>process reliability and reviewability</strong>, not by increasing or decreasing any predetermined category of agency outcomes.
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: TEXAS SUNSET APPLICATION */}
      {activeTab === "sunset" && (
        <div className="space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              POLICY APPLICATION
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-mwt-black">
              Texas DFPS Sunset Review (2026–2027)
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-2xl">
              How this reform initiative applies specifically to the ongoing evaluation of the Texas Department of Family and Protective Services.
            </p>
          </div>

          <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-mwt-oxblood shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm">
                <span className="font-mono font-bold text-mwt-oxblood uppercase block">
                  STATUTORY REFORM WINDOW
                </span>
                <p className="text-mwt-black leading-relaxed">
                  DFPS is currently under review by the Texas Sunset Advisory Commission (commission meeting rescheduled for <strong>December 2–3, 2026</strong> from the tentative November 18–19 dates; DFPS Oct 2025 Self-Evaluation Report published; Sunset Staff Report pending publication). Maps With Teeth submitted this structural framework via the official public input portal as an independent proposal addressing administrative handoffs, closure integrity, and evidence preservation; witness testimony is not confirmed.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3.5 text-xs font-sans">
              <div className="p-4 bg-mwt-ivory rounded-lg border border-[#C4B69E] space-y-1.5">
                <span className="font-mono text-[11px] font-bold text-mwt-oxblood uppercase block">
                  1. CLOSED-LOOP INTERAGENCY REPORTING
                </span>
                <p className="text-mwt-black leading-relaxed">
                  Establish a mandatory reporting metric for interagency referrals (DFPS to law enforcement, prosecutors, and community service providers), auditing acknowledgment rates and ownership assignment within 48 hours.
                </p>
              </div>

              <div className="p-4 bg-mwt-ivory rounded-lg border border-[#C4B69E] space-y-1.5">
                <span className="font-mono text-[11px] font-bold text-mwt-oxblood uppercase block">
                  2. CONTEXT-BEFORE-CLOSURE CHECKLIST
                </span>
                <p className="text-mwt-black leading-relaxed">
                  Mandate administrative closure documentation verifying what related records were examined, what was unreviewed, and the governing legal rationale before closing contested child-safety inquiries.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-mwt-ivory rounded-lg border border-mwt-black text-xs font-mono text-mwt-graphite space-y-1">
              <span className="font-bold text-mwt-black uppercase block">
                DISCLAIMER &amp; NON-AFFILIATION:
              </span>
              <p>
                This initiative is an independent policy proposal formulated by Maps With Teeth. It is not currently adopted by DFPS or the Texas Sunset Advisory Commission as agency rule or statute.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
