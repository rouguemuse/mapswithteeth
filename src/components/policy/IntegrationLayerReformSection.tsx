"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Eye,
  GitBranch,
  FileText,
  Scale,
  Calendar,
  Lock,
  Compass,
  Building2,
  ChevronRight
} from "lucide-react";

export function IntegrationLayerReformSection() {
  const [activeTab, setActiveTab] = useState<"mechanisms" | "safeguards" | "pilot" | "sunset">("mechanisms");

  const mechanisms = [
    {
      num: "01",
      title: "Review Trace",
      subtitle: "Distinguish evidence being received from evidence being reviewed",
      description:
        "For specifically identified, potentially material information, preserve an authorized record of its handling and disposition without requiring the information to determine the outcome.",
      operationalNote:
        "Creates a clear evidentiary boundary between physical intake and authorized evaluation, recording explicit handling states (reviewed, disputed, derivative, unreviewed with reason) rather than silent disappearance.",
      icon: Eye
    },
    {
      num: "02",
      title: "Closed-Loop Handoffs",
      subtitle: "A referral should not be considered complete merely because it was sent",
      description:
        "Document whether the receiving entity acknowledged it, accepted or declined responsibility, and identified the next action.",
      operationalNote:
        "Prevents the administrative seam where sending agencies log 'referred out' while receiving agencies have zero active record, leaving the participant trapped in limbo.",
      icon: GitBranch
    },
    {
      num: "03",
      title: "Complaint Trace",
      subtitle: "Make administrative complaints traceable from receipt to disposition",
      description:
        "Preserve assignment, review scope, response, correction pathways, and formal redirection when another office has responsibility.",
      operationalNote:
        "Establishes a transparent audit chain for grievances, preventing inquiries from being dismissed without an assigned reviewer or formal jurisdictional transfer.",
      icon: FileText
    },
    {
      num: "04",
      title: "Accountability Finding Trace",
      subtitle: "Connect challenged actions to responsible roles and governing authority",
      description:
        "Create an institutional record connecting challenged actions to responsible roles, governing authority, review findings, and corrective steps while protecting confidential personnel information.",
      operationalNote:
        "Preserves answerability for public institutional actions without exposing protected personnel files or creating unreviewable administrative silos.",
      icon: ShieldCheck
    },
    {
      num: "05",
      title: "Threshold Consistency Review",
      subtitle: "Evaluate explainably consistent treatment across comparable matters",
      description:
        "Evaluate whether comparable categories of information receive explainably consistent treatment across similar matters. Different circumstances may justify different outcomes; the framework demands that meaningful differences have reviewable reasons.",
      operationalNote:
        "Does not force rigid or automated algorithmic uniformity. Instead, it ensures administrative discretion is supported by reviewable, articulate reasons.",
      icon: Scale
    }
  ];

  const safeguards = [
    {
      title: "No Centralized Allegation Dossier",
      desc: "Information remains localized to authorized handlers and specific matters; no aggregate surveillance database."
    },
    {
      title: "No Automated Risk or Credibility Scores",
      desc: "Strictly bans automated child-safety, abuse-risk, or algorithmic credibility rankings."
    },
    {
      title: "No Assumption of Truth or Falsity Based on Report / Denial",
      desc: "No assumption that an allegation is true because it was reported or false because it was denied."
    },
    {
      title: "No Unrestricted Cross-Agency Sharing",
      desc: "Strict adherence to statutory privacy boundaries, VAWA non-disclosure rules, and minimum-necessary standards."
    },
    {
      title: "No Replacement of Professional Judgment",
      desc: "Technology acts solely as an audit and continuity ledger, never substituting for qualified caseworker or legal discretion."
    },
    {
      title: "No Forced Disclosure of Legally Protected Information",
      desc: "Protects privileged survivor communications, work product, and statutory confidentiality protections."
    },
    {
      title: "No Live Deployment Without Adversarial Review",
      desc: "Mandatory prior legal, privacy, survivor-practitioner, and adversarial pressure-testing before any production pilot."
    }
  ];

  const pilotCriteria = [
    {
      num: "1",
      metric: "Trace Qualifying Evidence",
      description: "Trace the handling and explicit review disposition of qualifying, potentially material evidence."
    },
    {
      num: "2",
      metric: "Identify Handoff Ownership",
      description: "Establish unambiguous operational ownership and next-action accountability for unresolved referrals."
    },
    {
      num: "3",
      metric: "Distinguish Acknowledgment from Resolution",
      description: "Separate physical complaint intake confirmation from substantive investigative or administrative disposition."
    },
    {
      num: "4",
      metric: "Document Governing Authority",
      description: "Document the legal and regulatory statutory authority supporting contested or challenged institutional actions."
    },
    {
      num: "5",
      metric: "Detect Procedural Inconsistencies",
      description: "Detect unexplained procedural variances and threshold divergences across comparable matters."
    },
    {
      num: "6",
      metric: "Reduce Retelling Burden",
      description: "Quantifiably reduce the need for people to repeatedly reconstruct previously submitted records and timelines."
    }
  ];

  return (
    <section id="integration-layer-reform" className="space-y-8 scroll-mt-20 font-sans select-none">
      {/* 1. Header Banner */}
      <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#C4B69E] pb-4">
          <div className="flex items-center gap-2 text-mwt-oxblood">
            <Layers className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              MAPS WITH TEETH · POLICY &amp; REFORM INITIATIVE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-mwt-oxblood text-white rounded-xs text-[11px] font-mono font-bold uppercase tracking-wider">
              Independent Reform Proposal
            </span>
            <span className="coord-tick hidden sm:inline-block">[POLICY INITIATIVE: 2026–27]</span>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-mwt-black tracking-tight leading-tight">
            When the Human Becomes the Integration Layer
          </h2>
          <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-mwt-oxblood font-bold">
            An Administrative Continuity &amp; Accountability Reform Initiative
          </p>
        </div>

        {/* The Problem Narrative Block */}
        <div className="grid lg:grid-cols-12 gap-6 pt-2">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-mwt-black leading-relaxed">
            <div className="space-y-2 border-l-4 border-mwt-oxblood pl-4 py-1">
              <span className="text-xs font-mono font-bold uppercase text-mwt-oxblood block">THE PROBLEM</span>
              <p className="font-serif italic text-base sm:text-lg text-mwt-black">
                A person submits evidence. An agency acknowledges receiving it. Responsibility changes hands. A decision is made.
              </p>
              <p className="font-serif font-bold text-mwt-black">
                But what happened in between?
              </p>
            </div>
            <p className="text-mwt-graphite text-xs sm:text-sm">
              Was the information reviewed? Was a conflicting account evaluated? Did the receiving office accept responsibility? Was an unresolved question preserved? Can anyone reconstruct the decision without requiring the person to explain everything again?
            </p>
            <p className="text-mwt-graphite text-xs sm:text-sm">
              Across public systems, a record of contact is not necessarily a record of meaningful action. When information moves between workers, departments, jurisdictions, and institutions without clear ownership or traceability, the individual becomes responsible for maintaining the continuity the system should provide:
            </p>
            <p className="font-mono text-xs sm:text-sm font-bold text-mwt-black bg-mwt-ivory p-3 rounded-xs border border-[#C4B69E]">
              &ldquo;The human becomes the integration layer.&rdquo;
            </p>
          </div>

          <div className="lg:col-span-5 bg-mwt-ivory border border-mwt-black rounded-lg p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-mwt-oxblood block">
                THE PROPOSED REFORM
              </span>
              <p className="text-xs sm:text-sm text-mwt-black leading-relaxed">
                Maps With Teeth proposes an <strong>administrative continuity and evidence-traceability framework</strong> designed to make institutional processes more reviewable, consistent, and accountable.
              </p>
              <p className="text-xs text-mwt-graphite leading-relaxed">
                The framework does not require agencies to reach predetermined outcomes. It asks whether authorized reviewers can establish what information was considered, how responsibility moved, which standards governed a decision, and what remained unresolved.
              </p>
            </div>

            <div className="p-3 bg-mwt-parchment rounded-xs border border-[#C4B69E] text-xs font-mono space-y-1">
              <span className="font-bold text-mwt-black block">OBJECTIVE:</span>
              <p className="text-mwt-graphite text-[11px]">
                Not more surveillance or automated judgments—better institutional memory, clearer responsibility, and procedural accountability.
              </p>
            </div>
          </div>
        </div>

        {/* Core Movement Principle Banner */}
        <div className="p-4 sm:p-5 bg-mwt-black text-white rounded-lg border-2 border-mwt-black space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-mwt-aged-stone block">
            CORE FOUNDATIONAL PRINCIPLE
          </span>
          <p className="font-serif italic text-base sm:text-lg text-mwt-ivory leading-snug">
            &ldquo;A system should not require people to repeatedly prove that information exists simply because the institution failed to preserve what happened to it.&rdquo;
          </p>
        </div>
      </div>

      {/* 2. Interactive Navigation Tabs */}
      <div className="flex border-b border-[#C4B69E] gap-2 overflow-x-auto text-xs font-mono">
        <button
          onClick={() => setActiveTab("mechanisms")}
          className={`px-4 py-2.5 font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
            activeTab === "mechanisms"
              ? "border-mwt-oxblood text-mwt-oxblood bg-mwt-parchment"
              : "border-transparent text-mwt-graphite hover:text-mwt-black hover:bg-mwt-parchment/60"
          }`}
        >
          5 Core Mechanisms
        </button>
        <button
          onClick={() => setActiveTab("safeguards")}
          className={`px-4 py-2.5 font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
            activeTab === "safeguards"
              ? "border-mwt-oxblood text-mwt-oxblood bg-mwt-parchment"
              : "border-transparent text-mwt-graphite hover:text-mwt-black hover:bg-mwt-parchment/60"
          }`}
        >
          Safeguards by Design
        </button>
        <button
          onClick={() => setActiveTab("pilot")}
          className={`px-4 py-2.5 font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
            activeTab === "pilot"
              ? "border-mwt-oxblood text-mwt-oxblood bg-mwt-parchment"
              : "border-transparent text-mwt-graphite hover:text-mwt-black hover:bg-mwt-parchment/60"
          }`}
        >
          Pilot Evaluation (6 Criteria)
        </button>
        <button
          onClick={() => setActiveTab("sunset")}
          className={`px-4 py-2.5 font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
            activeTab === "sunset"
              ? "border-mwt-oxblood text-mwt-oxblood bg-mwt-parchment"
              : "border-transparent text-mwt-graphite hover:text-mwt-black hover:bg-mwt-parchment/60"
          }`}
        >
          Texas DFPS Sunset Application
        </button>
      </div>

      {/* 3. Tab Contents */}
      {/* TAB 1: 5 CORE MECHANISMS */}
      {activeTab === "mechanisms" && (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              SYSTEMIC ARCHITECTURE
            </span>
            <h3 className="text-2xl font-serif font-bold text-mwt-black">
              Five Core Reform Mechanisms
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-2xl">
              Concrete administrative mechanisms ensuring evidence handling, handoffs, complaints, findings, and thresholds remain reviewable.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mechanisms.map((mech) => {
              const Icon = mech.icon;
              return (
                <div
                  key={mech.num}
                  className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-5 flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#C4B69E] pb-2">
                      <span className="font-mono text-xs font-bold text-mwt-oxblood">
                        MECHANISM {mech.num}
                      </span>
                      <Icon className="w-4 h-4 text-mwt-oxblood" aria-hidden="true" />
                    </div>

                    <h4 className="font-serif font-bold text-lg text-mwt-black leading-snug">
                      {mech.title}
                    </h4>

                    <p className="text-xs font-mono font-bold text-mwt-oxblood uppercase leading-tight">
                      {mech.subtitle}
                    </p>

                    <p className="text-xs sm:text-[13px] text-mwt-black leading-relaxed">
                      {mech.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#C4B69E]">
                    <p className="text-[11px] text-mwt-graphite italic leading-relaxed font-sans">
                      <strong className="not-italic font-mono text-[10px] text-mwt-black uppercase block">Operational note:</strong>
                      {mech.operationalNote}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Read Safeguards Cross-Link Card */}
            <div className="bg-mwt-ivory border-2 border-dashed border-mwt-black rounded-lg p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-mwt-oxblood block">
                  TECHNICAL COMPANION
                </span>
                <h4 className="font-serif font-bold text-lg text-mwt-black">
                  Evidence Safeguards &amp; Dispositions
                </h4>
                <p className="text-xs text-mwt-graphite leading-relaxed">
                  Deep dive into the 9 administrative disposition codes of Review Trace v0.1 and the 8 cross-cutting evidence integrity safeguards.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/continuity/safeguards"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-mwt-oxblood hover:bg-mwt-oxblood-dark text-white rounded-xs text-xs font-mono font-bold uppercase transition"
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
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              BOUNDARIES &amp; PROHIBITIONS
            </span>
            <h3 className="text-2xl font-serif font-bold text-mwt-black">
              Safeguards by Design: Strict Structural Boundaries
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-2xl">
              The reform is explicitly engineered with hard operational boundaries to prevent surveillance drift, algorithmic bias, or due-process erosion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safeguards.map((sg, idx) => (
              <div
                key={idx}
                className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-4 space-y-2 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-mwt-oxblood font-mono text-[11px] font-bold uppercase">
                    <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Boundary 0{idx + 1}</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-mwt-black leading-snug">
                    {sg.title}
                  </h4>
                  <p className="text-xs text-mwt-graphite leading-relaxed">
                    {sg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Preservation of Process Facts Banner */}
          <div className="p-4 bg-mwt-ivory rounded-lg border border-mwt-black space-y-2">
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
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              EVALUATION FRAMEWORK
            </span>
            <h3 className="text-2xl font-serif font-bold text-mwt-black">
              How Implementation Could Be Evaluated
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-2xl">
              A limited, privacy-preserving pilot can assess whether participating agencies achieve observable process reliability across 6 core benchmarks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pilotCriteria.map((item) => (
              <div
                key={item.num}
                className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-5 space-y-2 shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-[#C4B69E] pb-2">
                  <span className="font-mono text-xs font-bold text-mwt-oxblood">
                    BENCHMARK {item.num}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" aria-hidden="true" />
                </div>
                <h4 className="font-serif font-bold text-base text-mwt-black">
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
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              POLICY APPLICATION
            </span>
            <h3 className="text-2xl font-serif font-bold text-mwt-black">
              Texas DFPS Sunset Review (2026–2027)
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-2xl">
              How this reform initiative applies specifically to the ongoing evaluation of the Texas Department of Family and Protective Services.
            </p>
          </div>

          <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 space-y-5">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-mwt-oxblood shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm">
                <span className="font-mono font-bold text-mwt-oxblood uppercase block">
                  STATUTORY REFORM WINDOW
                </span>
                <p className="text-mwt-black leading-relaxed">
                  DFPS is currently under review by the Texas Sunset Advisory Commission. Maps With Teeth submits this structural framework as an independent proposal addressing administrative handoffs, closure integrity, and evidence preservation.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 bg-mwt-ivory rounded-lg border border-[#C4B69E] space-y-2">
                <span className="font-mono text-[11px] font-bold text-mwt-oxblood uppercase block">
                  1. CLOSED-LOOP INTERAGENCY REPORTING
                </span>
                <p className="text-mwt-black leading-relaxed">
                  Establish a mandatory reporting metric for interagency referrals (DFPS to law enforcement, prosecutors, and community service providers), auditing acknowledgment rates and ownership assignment within 48 hours.
                </p>
              </div>

              <div className="p-4 bg-mwt-ivory rounded-lg border border-[#C4B69E] space-y-2">
                <span className="font-mono text-[11px] font-bold text-mwt-oxblood uppercase block">
                  2. CONTEXT-BEFORE-CLOSURE CHECKLIST
                </span>
                <p className="text-mwt-black leading-relaxed">
                  Mandate administrative closure documentation verifying what related records were examined, what was unreviewed, and the governing legal rationale before closing contested child-safety inquiries.
                </p>
              </div>
            </div>

            <div className="p-4 bg-mwt-ivory rounded-lg border border-mwt-black text-xs font-mono text-mwt-graphite space-y-1">
              <span className="font-bold text-mwt-black uppercase block">DISCLAIMER &amp; NON-AFFILIATION:</span>
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
