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
  ChevronRight,
  Users,
  RefreshCw
} from "lucide-react";

export function IntegrationLayerReformSection() {
  const [activeTab, setActiveTab] = useState<"mechanisms" | "safeguards" | "pilot" | "sunset">("mechanisms");

  const mechanisms = [
    {
      num: "01",
      title: "Linked-Case & Related-Record Review",
      subtitle: "Subject to lawful access and statutory privacy",
      description:
        "Determine whether an authorized related-matter inquiry is permitted and appropriate under existing statutory data-exchange provisions, without merging factual conclusions or presuming corroboration.",
      operationalNote:
        "Prompts authorized officers to verify whether parallel matters exist across municipal, county, or agency boundaries, without transmitting unvetted allegation text into outside files.",
      icon: GitBranch
    },
    {
      num: "02",
      title: "Pre-Closure Context Checks",
      subtitle: "Verify process completeness before administrative exit",
      description:
        "Complete a standardized pre-closure audit recording whether identified related matters were examined, referred elsewhere, or deemed unreviewed with explicit reason prior to file closure.",
      operationalNote:
        "Prevents premature case dismissals where files close without verifying whether critical records were held elsewhere. Tracks process completeness without forcing substantive merits findings.",
      icon: FileCheck
    },
    {
      num: "03",
      title: "Designated Cross-Agency Liaison Roles",
      subtitle: "Eliminating unassigned responsibility at system seams",
      description:
        "Designate clear administrative liaison responsibilities and named institutional decision-owners for the immediate next milestone at every inter-agency transition.",
      operationalNote:
        "Eliminates the 'nobody's case' failure mode. Re-assignment requires explicit bilateral handoff confirmation between designated roles, protecting frontline workers through role-based assignment.",
      icon: Users
    },
    {
      num: "04",
      title: "Referral Acknowledgment & Traceability",
      subtitle: "A referral must not end at 'sent'",
      description:
        "Require receiving entities to execute timestamped electronic acknowledgment, indicating whether responsibility is accepted, declined, redirected, or pending.",
      operationalNote:
        "Binds transmission timestamp and recipient identifier. Proposes an evaluation pilot service target of receiving acknowledgment within 48 hours (a proposed pilot design benchmark, not an existing statutory requirement).",
      icon: RefreshCw
    },
    {
      num: "05",
      title: "Cumulative-Pattern Review",
      subtitle: "Rather than exclusively isolated incident review",
      description:
        "Trigger human supervisory or multidisciplinary case conferences (extending CAC or High-Risk Team models) when multiple fragmented encounters occur within a defined timeframe.",
      operationalNote:
        "Prevents escalating harm from being atomized into unrelated minor incidents. Cumulative report counts serve exclusively to prompt human inquiry; they are strictly forbidden from being used as automated risk or credibility scores.",
      icon: Scale
    },
    {
      num: "06",
      title: "Appropriate Information Exchange",
      subtitle: "Bounded exchange with strict privacy & due-process safeguards",
      description:
        "Ensure data exchange is bounded strictly to minimum-necessary administrative metadata under established legal authorities, preserving confidentiality and due process.",
      operationalNote:
        "Adheres strictly to VAWA confidentiality (34 U.S.C. § 12291), FERPA, HIPAA, and Texas state privacy rules. Strictly prohibits centralized surveillance dossiers or public registries.",
      icon: Lock
    },
    {
      num: "07",
      title: "Documentation of Considered Information",
      subtitle: "Review Trace and recorded omission rationales",
      description:
        "Record what was received, what was actually reviewed, what was determined outside authority, and the explicit rationale if material was set aside.",
      operationalNote:
        "Implements the 9-status Review Trace standard. Distinguishes what a reviewer observed from institutional disposition, preventing silent disappearance of critical records.",
      icon: Eye
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
          7 Core Proposals
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
      {/* TAB 1: 7 CORE PROPOSALS */}
      {activeTab === "mechanisms" && (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-mwt-oxblood font-bold tracking-wider block">
              SYSTEMIC ARCHITECTURE &amp; STATUTORY DIRECTION
            </span>
            <h3 className="text-2xl font-serif font-bold text-mwt-black">
              Seven Core Policy Proposals
            </h3>
            <p className="text-xs sm:text-sm text-mwt-graphite max-w-3xl leading-relaxed">
              Concrete administrative proposals addressing linked matters, pre-closure audits, cross-agency liaison roles, closed-loop referrals, cumulative review, bounded data exchange, and Review Trace documentation.
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

          {/* Distinction Inventory Block */}
          <div className="bg-[#1C1D1D] text-[#F8F5EE] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-700 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                METHODOLOGICAL INTEGRITY · FOUR-TIER DISTINCTION INVENTORY
              </span>
              <span className="text-[10px] font-mono text-stone-400 uppercase">
                [LEGAL VS. IMPLEMENTED VS. PROPOSED]
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              To protect credibility and avoid overstating authority, Maps With Teeth strictly demarcates where current statutory law ends, what software currently executes, and what remains a policy proposal for future evaluation:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
              <div className="p-4 bg-stone-900 border border-stone-700 rounded-lg space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 block">
                  TIER 1 · EXISTING LAW
                </span>
                <h4 className="font-serif font-bold text-sm text-white">Current Legal Authorities</h4>
                <p className="text-stone-300 leading-relaxed text-[11.5px]">
                  Established Texas statutes authorizing joint LE/DFPS protocols (§ 261.301), CAC multidisciplinary team MOUs (§§ 264.403, 264.406), family violence records (CCP Art. 5), lease termination (§ 92.016), and federal VAWA non-disclosure.
                </p>
              </div>

              <div className="p-4 bg-stone-900 border border-stone-700 rounded-lg space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-blue-400 block">
                  TIER 2 · IMPLEMENTED CODE
                </span>
                <h4 className="font-serif font-bold text-sm text-white">Tested Software Mechanisms</h4>
                <p className="text-stone-300 leading-relaxed text-[11.5px]">
                  Functional, testable algorithms in this repository: client-side deterministic fact matcher (158 tri-state tests), cryptographic SHA-256 receipt generation, and zero-PII data minimization engines.
                </p>
              </div>

              <div className="p-4 bg-stone-900 border border-stone-700 rounded-lg space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-amber-300 block">
                  TIER 3 · PROPOSED POLICY
                </span>
                <h4 className="font-serif font-bold text-sm text-white">Discussion Proposals</h4>
                <p className="text-stone-300 leading-relaxed text-[11.5px]">
                  The 7 systemic proposals above (e.g. pre-closure checks, cross-agency liaison mandates, closed-loop tracking). These are discussion drafts and legislative recommendations awaiting adoption, not current statutory duties.
                </p>
              </div>

              <div className="p-4 bg-stone-900 border border-stone-700 rounded-lg space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-purple-400 block">
                  TIER 4 · PILOT TARGETS
                </span>
                <h4 className="font-serif font-bold text-sm text-white">Evaluation Benchmarks</h4>
                <p className="text-stone-300 leading-relaxed text-[11.5px]">
                  Design targets (such as receiving referral acknowledgment within 48 hours). These are trial evaluation benchmarks for controlled pilots—not validated population-level statistics or legal deadlines.
                </p>
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
