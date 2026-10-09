"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  GitBranch,
  UserCheck,
  Lock,
  Layers,
  HelpCircle,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Eye,
  FileCheck,
  Scale
} from "lucide-react";

export type PipelineStage =
  | "SUBMISSION"
  | "RECEIPT"
  | "ASSIGNMENT"
  | "REVIEW"
  | "HANDOFF"
  | "DISPOSITION"
  | "FOLLOW_UP";

export function ContinuityReceiptInteractiveDemo() {
  const [currentStage, setCurrentStage] = useState<PipelineStage>("HANDOFF");
  const [modelType, setModelType] = useState<"PERSONAL" | "INSTITUTIONAL">("INSTITUTIONAL");
  const [copiedHash, setCopiedHash] = useState(false);

  const stages: { id: PipelineStage; label: string; num: string }[] = [
    { id: "SUBMISSION", label: "Submission", num: "01" },
    { id: "RECEIPT", label: "Receipt", num: "02" },
    { id: "ASSIGNMENT", label: "Assignment", num: "03" },
    { id: "REVIEW", label: "Review", num: "04" },
    { id: "HANDOFF", label: "Handoff (Stalled)", num: "05" },
    { id: "DISPOSITION", label: "Disposition", num: "06" },
    { id: "FOLLOW_UP", label: "Follow-up", num: "07" },
  ];

  const handleCopyHash = () => {
    navigator.clipboard.writeText("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // State-specific details for the fictional scenario
  const scenarioDetails: Record<
    PipelineStage,
    {
      knownFacts: string[];
      unknownFacts: string[];
      nextActor: string;
      actorRole: string;
      milestoneWindow: string;
      statusBadge: string;
      statusBadgeColor: string;
      operationalNarrative: string;
    }
  > = {
    SUBMISSION: {
      knownFacts: [
        "Synthetic Participant #P-882 presented intake documentation at regional support center.",
        "Physical items: 1x statutory lease termination letter, 1x utility security deposit waiver request.",
        "Intake clerk verified form completion; timestamp recorded at 09:15 CST."
      ],
      unknownFacts: [
        "Whether receiving legal aid department has active caseload capacity.",
        "Whether presented lease meets landlord formal notice period requirements."
      ],
      nextActor: "Regional Intake Desk Staff (Desk Clerk ID: 104)",
      actorRole: "Physical Intake Processing",
      milestoneWindow: "Immediate / Same-day logging",
      statusBadge: "SUBMITTED · AWAITING FORMAL RECEIPT",
      statusBadgeColor: "bg-blue-800 text-white",
      operationalNarrative:
        "The participant has handed over paperwork. At this moment in conventional systems, if the participant walks away, there is zero verifiable proof of what documents were handed over or who took physical custody."
    },
    RECEIPT: {
      knownFacts: [
        "Agency Intake Clerk formally logged delivery of 2 documents.",
        "Record ID 'SYNTH-REC-2026-9041' generated with SHA-256 cryptographic digest.",
        "Non-implication code NO_SUBSTANTIATION_FINDING attached by policy."
      ],
      unknownFacts: [
        "Whether substantive allegations in notice are verified or disputed.",
        "Which caseworker or attorney will be assigned to evaluate the file."
      ],
      nextActor: "Intake Triage Supervisor",
      actorRole: "Caseload Triage & Assignment",
      milestoneWindow: "24 business hours from receipt",
      statusBadge: "RECEIVED ≠ REVIEWED (LOGGED ONLY)",
      statusBadgeColor: "bg-amber-700 text-white",
      operationalNarrative:
        "The receipt acknowledges physical contact and item possession. Crucially, the system locks the invariant: 'Received does not mean reviewed.' Frontline staff did not assess merits, nor did they validate factual truth."
    },
    ASSIGNMENT: {
      knownFacts: [
        "File routed to Housing Stabilization Unit, Lead Advocate: 'Role ID: HSU-ADV-08'.",
        "Initial priority flag: Pending eviction risk (30-day timeline).",
        "Direct email/intercom notice delivered to caseworker inbox."
      ],
      unknownFacts: [
        "Caseworker review schedule or concurrent trial calendar.",
        "Whether additional police incident report numbers exist."
      ],
      nextActor: "Lead Housing Advocate (HSU-ADV-08)",
      actorRole: "Substantive Eligibility & Verification Review",
      milestoneWindow: "48 business hours from assignment",
      statusBadge: "ASSIGNED · PENDING SUBSTANTIVE REVIEW",
      statusBadgeColor: "bg-purple-800 text-white",
      operationalNarrative:
        "An individual role is now accountable for the next action. If the matter sits unreviewed, the receipt clearly shows whose desk currently holds decision responsibility."
    },
    REVIEW: {
      knownFacts: [
        "HSU Advocate completed preliminary document check.",
        "Lease notice verified to cite Tex. Prop. Code § 92.016.",
        "Determination: Advocate cannot provide direct litigation representation; referral to Regional Pro Bono Panel required."
      ],
      unknownFacts: [
        "Whether Pro Bono Panel has available volunteer attorneys this quarter.",
        "Who owns emergency communication if landlord attempts illegal lockout."
      ],
      nextActor: "Pro Bono Panel Referral Coordinator",
      actorRole: "External Referral Handoff Coordinator",
      milestoneWindow: "Referral dispatch within 2 business days",
      statusBadge: "REVIEWED FOR ROUTING ≠ ACCEPTED",
      statusBadgeColor: "bg-stone-700 text-white",
      operationalNarrative:
        "Review is complete, but the outcome is an external referral. This is the exact seam where the 'Human becomes the Integration Layer' if the referral is simply marked 'closed - referred out' without closed-loop confirmation."
    },
    HANDOFF: {
      knownFacts: [
        "Referral package sent via electronic transmission to 'External Volunteer Legal Clinic B'.",
        "Outbound timestamp: Oct 12, 2026, 14:22 CST.",
        "Sending agency marked local file as 'Referred Out'."
      ],
      unknownFacts: [
        "CRITICAL GAP: External Clinic B has NOT confirmed electronic receipt.",
        "CRITICAL GAP: No volunteer attorney assigned; capacity is UNKNOWN.",
        "CRITICAL GAP: Participant does not know if they must call Clinic B or wait for a call."
      ],
      nextActor: "External Volunteer Legal Clinic B (Intake Coordinator)",
      actorRole: "Receiving Entity Handoff Acceptance",
      milestoneWindow: "48-Hour Pilot Target EXPIRED (Unacknowledged: 96 hours elapsed)",
      statusBadge: "REFERRED ≠ ACCEPTED (STALLED HANDOFF)",
      statusBadgeColor: "bg-mwt-oxblood text-white animate-pulse",
      operationalNarrative:
        "THIS IS THE ARCHITECTURAL SEAM DEFICIT. The sending agency believes its job is finished ('Sent'). The receiving clinic hasn't opened the file. The participant is caught in the middle. The Institutional Continuity Receipt surfaces this stall explicitly, preventing silent amnesia."
    },
    DISPOSITION: {
      knownFacts: [
        "Following automated stall alert, receiving Clinic B confirmed capacity and accepted file.",
        "Staff Attorney assigned: 'Role ID: VLP-ATTY-14'.",
        "Administrative disposition code: HANDOFF_ACCEPTED_WITH_REPRESENTATION."
      ],
      unknownFacts: [
        "Substantive court outcome or mediation timing."
      ],
      nextActor: "Staff Attorney (VLP-ATTY-14) & Participant",
      actorRole: "Active Legal Representation",
      milestoneWindow: "Initial client conference scheduled within 3 business days",
      statusBadge: "CLOSED-LOOP COMPLETED · DISPOSITION RECORDED",
      statusBadgeColor: "bg-emerald-800 text-white",
      operationalNarrative:
        "Because the stall was visible on the Continuity Receipt, the handoff was actively closed. Responsibility was explicitly accepted, and an unambiguous next action was assigned to a named role."
    },
    FOLLOW_UP: {
      knownFacts: [
        "Formal client conference conducted; legal response served to property management.",
        "Landlord acknowledged statutory notice and waived penalty fees.",
        "Audit receipt permanently archived into participant-held vault."
      ],
      unknownFacts: [
        "None for this administrative transaction."
      ],
      nextActor: "Participant (Self-Custody)",
      actorRole: "Permanent Record Retention",
      milestoneWindow: "Case closed administratively",
      statusBadge: "RESOLVED · VERIFIED END-TO-END",
      statusBadgeColor: "bg-emerald-900 text-white",
      operationalNarrative:
        "The process is finalized. The participant retains an immutable client-side receipt with verifiable timestamps, proving every step occurred without ever needing to re-tell their story from scratch."
    }
  };

  const current = scenarioDetails[currentStage];

  return (
    <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-5 sm:p-8 space-y-8 shadow-sm font-sans select-none">
      {/* 1. Header & Concept Disclaimer */}
      <div className="space-y-3 border-b border-[#C4B69E] pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-mwt-oxblood">
            <Layers className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              INTERACTIVE DEMONSTRATION · PROPOSED SPECIFICATION
            </span>
          </div>
          <span className="px-2.5 py-1 bg-mwt-black text-white text-[10px] font-mono font-bold uppercase rounded-xs">
            100% Synthetic Fictional Data
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black tracking-tight">
            The Continuity Receipt Prototype
          </h3>
          <p className="text-xs sm:text-sm text-mwt-graphite font-serif italic">
            Explore how an institutional request progresses through 7 operational stages—and what happens when a referral stalls between agencies.
          </p>
        </div>

        {/* Mandatory Strict Boundary Notice */}
        <div className="p-3 bg-mwt-ivory rounded-xs border-l-4 border-mwt-oxblood border border-[#C4B69E] text-xs font-mono space-y-1">
          <span className="font-bold text-mwt-oxblood uppercase block">
            CONCEPT DEMONSTRATION · NOT A LIVE CASE-MANAGEMENT SYSTEM
          </span>
          <p className="text-mwt-graphite text-[11px] font-sans">
            This experience contains strictly fictional people, agencies, and IDs. It does not collect personal disclosures, process live casework, or connect to governmental databases.
          </p>
        </div>
      </div>

      {/* 2. Model Selector: Personal vs Institutional */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-mwt-ivory p-3.5 rounded-lg border border-mwt-black">
        <div className="space-y-0.5">
          <span className="text-xs font-mono font-bold uppercase text-mwt-black block">
            Select Continuity Receipt Model:
          </span>
          <span className="text-[11px] text-mwt-graphite font-sans">
            Compare the user-held documentation tool against the proposed inter-agency verified standard.
          </span>
        </div>

        <div className="inline-flex rounded-xs border border-mwt-black bg-mwt-parchment p-0.5 font-mono text-xs">
          <button
            onClick={() => setModelType("PERSONAL")}
            className={`px-3 py-1.5 font-bold uppercase rounded-xs transition-colors ${
              modelType === "PERSONAL"
                ? "bg-mwt-black text-white"
                : "text-mwt-graphite hover:text-mwt-black hover:bg-mwt-ivory"
            }`}
          >
            Personal Model (User-Held)
          </button>
          <button
            onClick={() => setModelType("INSTITUTIONAL")}
            className={`px-3 py-1.5 font-bold uppercase rounded-xs transition-colors ${
              modelType === "INSTITUTIONAL"
                ? "bg-mwt-black text-white"
                : "text-mwt-graphite hover:text-mwt-black hover:bg-mwt-ivory"
            }`}
          >
            Institutional Model (Agency-Verifiable)
          </button>
        </div>
      </div>

      {/* Model Definition Banner */}
      <div className="p-4 bg-mwt-ivory rounded-lg border border-[#C4B69E] text-xs space-y-1.5 font-sans">
        {modelType === "PERSONAL" ? (
          <>
            <span className="font-mono text-xs font-bold text-mwt-oxblood uppercase block">
              MODEL A: PERSONAL CONTINUITY RECEIPT (CLIENT-SIDE VAULT)
            </span>
            <p className="text-mwt-black leading-relaxed">
              A person-controlled record of their own interactions, submissions, responses, barriers, and outstanding questions. Preserves user-entered information locally on the participant&apos;s device.
            </p>
            <p className="text-mwt-graphite text-[11px] italic">
              Boundary: It does not independently bind agency action, authenticate evidence, or prove the underlying factual allegations.
            </p>
          </>
        ) : (
          <>
            <span className="font-mono text-xs font-bold text-mwt-oxblood uppercase block">
              MODEL B: INSTITUTIONAL CONTINUITY RECEIPT (INTERAGENCY VERIFIABLE)
            </span>
            <p className="text-mwt-black leading-relaxed">
              A proposed agency-generated or agency-verifiable record showing disclosable information about receipt confirmation, review status, role responsibility, handoffs, disposition, and next milestones.
            </p>
            <p className="text-mwt-graphite text-[11px] italic">
              Boundary: Requires institutional MOU adoption, statutory confidentiality compliance (VAWA / Family Code), and strict role-based access controls.
            </p>
          </>
        )}
      </div>

      {/* 3. Seven-Stage Pipeline Step Tracker */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-mwt-black uppercase tracking-wider block">
          Simulated Workflow Pipeline (Click any stage to examine process facts):
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 font-mono text-xs">
          {stages.map((stage) => {
            const isActive = currentStage === stage.id;
            const isStalled = stage.id === "HANDOFF";
            return (
              <button
                key={stage.id}
                onClick={() => setCurrentStage(stage.id)}
                className={`p-2.5 rounded-xs border-2 text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? isStalled
                      ? "border-mwt-oxblood bg-mwt-black text-white shadow-sm ring-2 ring-mwt-oxblood"
                      : "border-mwt-black bg-mwt-black text-white shadow-sm"
                    : isStalled
                    ? "border-mwt-oxblood/60 bg-red-50 text-mwt-oxblood hover:bg-red-100"
                    : "border-[#C4B69E] bg-mwt-ivory text-mwt-black hover:bg-mwt-parchment"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span>STAGE {stage.num}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-mwt-oxblood-light" />}
                </div>
                <span className="font-serif font-bold text-xs mt-1 leading-tight">
                  {stage.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. The Live Specimen Ledger Box */}
      <div className="bg-mwt-ivory border-2 border-mwt-black rounded-lg overflow-hidden shadow-md font-mono text-xs">
        {/* Specimen Header Strip */}
        <div className="bg-mwt-black text-mwt-ivory p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-mwt-aged-stone">
                SPECIMEN ID: SYNTH-REC-2026-9041
              </span>
              <span className={`px-2 py-0.5 rounded-xs text-[10px] font-bold uppercase ${current.statusBadgeColor}`}>
                {current.statusBadge}
              </span>
            </div>
            <h4 className="font-serif font-bold text-base text-white">
              Central Legal Aid &amp; Housing Stabilization Ledger
            </h4>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-mwt-aged-stone">
            <span>SHA-256 Digest:</span>
            <button
              onClick={handleCopyHash}
              className="px-2 py-1 bg-[#1F1C1A] border border-stone-600 rounded-xs hover:text-white transition flex items-center gap-1 font-mono text-[10px]"
              title="Click to copy hash"
            >
              <span>e3b0...b855</span>
              {copiedHash ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Specimen Metadata Ledger Grid */}
        <div className="p-5 space-y-6">
          {/* Top Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-4 border-b border-[#C4B69E] text-[11px]">
            <div>
              <span className="text-mwt-graphite uppercase font-bold block text-[10px]">Date Received</span>
              <span className="text-mwt-black font-sans font-bold">October 12, 2026 · 09:15 CST</span>
            </div>
            <div>
              <span className="text-mwt-graphite uppercase font-bold block text-[10px]">Request Category</span>
              <span className="text-mwt-black font-sans font-bold">Statutory Lease Relief</span>
            </div>
            <div>
              <span className="text-mwt-graphite uppercase font-bold block text-[10px]">Current Stage</span>
              <span className="text-mwt-oxblood font-mono font-bold uppercase">{currentStage}</span>
            </div>
            <div>
              <span className="text-mwt-graphite uppercase font-bold block text-[10px]">Controlling Authority</span>
              <span className="text-mwt-black font-sans font-bold">Tex. Prop. Code § 92.016</span>
            </div>
          </div>

          {/* Operational Narrative for this Stage */}
          <div className="p-4 bg-mwt-parchment rounded-xs border border-mwt-black space-y-1.5 font-sans">
            <span className="text-[11px] font-mono font-bold text-mwt-oxblood uppercase block">
              OPERATIONAL SITUATION AT STAGE [{currentStage}]:
            </span>
            <p className="text-xs sm:text-sm text-mwt-black leading-relaxed">
              {current.operationalNarrative}
            </p>
          </div>

          {/* Known Facts vs Unknown Facts (The Core Accountability Contrast) */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Known Facts */}
            <div className="p-4 bg-emerald-50/70 border border-emerald-900/40 rounded-xs space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-950 font-mono text-[11px] font-bold uppercase border-b border-emerald-800/20 pb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>WHAT IS OFFICIALLY DOCUMENTED (KNOWN)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-900 font-sans">
                {current.knownFacts.map((fact, idx) => (
                  <li key={idx} className="leading-snug">
                    • {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Unknown Facts / Unresolved Questions */}
            <div className="p-4 bg-red-50/80 border border-red-900/40 rounded-xs space-y-2">
              <div className="flex items-center gap-1.5 text-mwt-oxblood font-mono text-[11px] font-bold uppercase border-b border-red-800/20 pb-1">
                <AlertTriangle className="w-4 h-4 text-mwt-oxblood" />
                <span>CRITICAL GAPS / UNRESOLVED RESPONSIBILITY (UNKNOWN)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-900 font-sans">
                {current.unknownFacts.map((gap, idx) => (
                  <li key={idx} className="leading-snug">
                    • {gap}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Who Needs to Act Next & Milestone Window */}
          <div className="grid sm:grid-cols-3 gap-3 p-4 bg-mwt-parchment rounded-xs border border-[#C4B69E] text-xs">
            <div>
              <span className="text-mwt-oxblood font-mono text-[10px] font-bold uppercase block">
                NEXT RESPONSIBLE PARTY
              </span>
              <span className="text-mwt-black font-sans font-bold text-sm block">
                {current.nextActor}
              </span>
              <span className="text-mwt-graphite text-[11px] font-sans">
                Role: {current.actorRole}
              </span>
            </div>

            <div>
              <span className="text-mwt-oxblood font-mono text-[10px] font-bold uppercase block">
                MILESTONE WINDOW / SLA
              </span>
              <span className="text-mwt-black font-sans font-bold text-sm block">
                {current.milestoneWindow}
              </span>
              <span className="text-mwt-graphite text-[11px] font-sans">
                Proposed pilot standard: 48-hr max handoff window
              </span>
            </div>

            <div>
              <span className="text-mwt-oxblood font-mono text-[10px] font-bold uppercase block">
                CORRECTION / ESCALATION PATHWAY
              </span>
              <span className="text-mwt-black font-sans font-bold text-sm block">
                Administrative Ombudsman / Supervisor
              </span>
              <span className="text-mwt-graphite text-[11px] font-sans">
                Escalation Trigger: Unacknowledged &gt; 48 hours
              </span>
            </div>
          </div>
        </div>

        {/* Specimen Footer Guardrails */}
        <div className="bg-mwt-parchment border-t border-[#C4B69E] p-3 text-[11px] text-mwt-graphite font-mono flex flex-wrap items-center justify-between gap-2">
          <span>
            IMMUTABLE INVARIANTS: NO_SUBSTANTIATION_FINDING · RECEIVED ≠ REVIEWED · REFERRED ≠ ACCEPTED
          </span>
          <span className="text-stone-500">SPECIMEN REVISION: v0.3.1-SYNTH</span>
        </div>
      </div>

      {/* 5. Five Design Language Invariant Distinctions */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-mono font-bold text-mwt-oxblood uppercase tracking-wider block">
          THE FIVE CORE INVARIANT DISTINCTIONS
        </span>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
          <div className="p-3 bg-mwt-ivory border-2 border-mwt-black rounded-xs space-y-1">
            <span className="text-mwt-oxblood font-bold block text-sm">Received ≠ Reviewed</span>
            <p className="text-[11px] text-mwt-graphite font-sans">
              Intake physical custody does not equal substantive legal evaluation.
            </p>
          </div>
          <div className="p-3 bg-mwt-ivory border-2 border-mwt-black rounded-xs space-y-1">
            <span className="text-mwt-oxblood font-bold block text-sm">Referred ≠ Accepted</span>
            <p className="text-[11px] text-mwt-graphite font-sans">
              Sending a packet does not mean the receiving agency took responsibility.
            </p>
          </div>
          <div className="p-3 bg-mwt-ivory border-2 border-mwt-black rounded-xs space-y-1">
            <span className="text-mwt-oxblood font-bold block text-sm">Closed ≠ Resolved</span>
            <p className="text-[11px] text-mwt-graphite font-sans">
              Administrative checklist completion does not mean the safety crisis ended.
            </p>
          </div>
          <div className="p-3 bg-mwt-ivory border-2 border-mwt-black rounded-xs space-y-1">
            <span className="text-mwt-oxblood font-bold block text-sm">Contacted ≠ Answered</span>
            <p className="text-[11px] text-mwt-graphite font-sans">
              Dialing an agency or leaving voicemail does not confirm capacity.
            </p>
          </div>
          <div className="p-3 bg-mwt-ivory border-2 border-mwt-black rounded-xs space-y-1">
            <span className="text-mwt-oxblood font-bold block text-sm">Reported ≠ Proven</span>
            <p className="text-[11px] text-mwt-graphite font-sans">
              Documenting a report preserves process context without presuming truth or falsity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
