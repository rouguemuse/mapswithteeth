import React from "react";
import Link from "next/link";
import {
  Shuffle,
  ArrowRight,
  ShieldCheck,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Building2,
  Clock,
  Fingerprint,
  Layers,
  Lock,
  Compass,
  FolderArchive,
  FileCheck,
  RefreshCw,
  Users,
  Link2,
  Tag,
  GitBranch,
  Check,
  PhoneCall,
  Activity,
  Code2
} from "lucide-react";
import { ContinuityContactRecordSpecimen } from "@/components/bridge/ContinuityContactRecordSpecimen";
import { ContinuityInterchangeSpecComponent } from "@/components/continuity/ContinuityInterchangeSpecComponent";
import { ResourceMaterialsBlock } from "@/components/safeguards/ResourceMaterialsBlock";

export const metadata = {
  title: "Cross-System Continuity Standard v0.1 | Maps With Teeth",
  description:
    "Cross-System Continuity Standard Version 0.1 — Discussion Draft (October 2026). A 6-module open protocol for preventing related child-safety, family violence, and legal matters from disappearing between institutional boundaries."
};

interface ContinuityModule {
  num: string;
  title: string;
  tagline: string;
  maturity: "IMPLEMENTED" | "PROTOTYPE" | "PROPOSED" | "REQUIRES LEGAL REVIEW" | "REQUIRES SECURITY REVIEW";
  purpose: string;
  trigger: string;
  requiredAction: string;
  minimumRecord: string;
  safeguards: string;
  completionCondition: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ContinuityStandardPage() {
  const modules: ContinuityModule[] = [
    {
      num: "01",
      title: "LINKED-MATTER REVIEW",
      tagline: "Related does not mean proven.",
      maturity: "PROPOSED",
      purpose:
        "Prevent potentially relevant matters from becoming invisible solely because another authorized system holds them.",
      trigger:
        "Defined indicators suggesting a related matter may exist across agencies or jurisdictions.",
      requiredAction:
        "Determine whether an authorized related-matter inquiry is permitted and appropriate under existing statutory data-exchange provisions.",
      minimumRecord:
        "Inquiry made / source checked / result available, unavailable, or not authorized. (Zero substantive allegation text or evidentiary files stored in index).",
      safeguards:
        "Related matters may be linked to document that multiple proceedings exist, but the system must never merge their factual conclusions or imply corroboration merely because multiple records exist. Access restricted exclusively to authorized personnel with statutory jurisdiction.",
      completionCondition:
        "Review documented or legal inability to review documented.",
      icon: Link2
    },
    {
      num: "02",
      title: "CLOSED-LOOP REFERRALS",
      tagline: "A referral should not end at 'sent.'",
      maturity: "PROTOTYPE",
      purpose:
        "Prevent referrals from disappearing into the administrative void between agencies.",
      trigger:
        "Qualifying referral or case handoff dispatched from one entity to another.",
      requiredAction:
        "Receiving entity executes electronic acknowledgment and disposition within a defined administrative window (PILOT SERVICE TARGET — receiving acknowledgment within 48 hours. This is a proposed pilot benchmark, not an existing statutory requirement).",
      minimumRecord:
        "Sender, recipient, date, reference, received status, acceptance/decline, next owner.",
      safeguards:
        "Receipt confirms administrative transfer only. Failure to acknowledge within 14 days triggers an automated dead-route alert.",
      completionCondition:
        "Accepted, declined, redirected, or returned with documented decision ownership.",
      icon: RefreshCw
    },
    {
      num: "03",
      title: "CONTINUITY RECEIPT",
      tagline: "Standardized portable encounter proof.",
      maturity: "IMPLEMENTED",
      purpose:
        "Preserve the administrative path. Provide the individual with portable proof of their encounter to prevent repetitive retelling of trauma.",
      trigger:
        "Any frontline institutional encounter, desk intake, document submission, or referral interaction.",
      requiredAction:
        "Generate a client-side cryptographic Continuity Contact Record containing segregated material review statuses, routing decisions, and deadlines.",
      minimumRecord:
        "Record ID (DEMO-000001), encounter date, agency entity, SHA-256 integrity hash, presented material list with per-item review statuses, ministerial action taken, next decision owner.",
      safeguards:
        "Participant-held by default during the prototype stage; agency integration is not a prerequisite. 5 mandatory non-implication notices prevent tort liability or merits findings.",
      completionCondition:
        "Receipt compiled, SHA-256 cryptographic digest calculated client-side, and exported or printed directly into participant custody.",
      icon: FileText
    },
    {
      num: "04",
      title: "CUMULATIVE REVIEW TRIGGERS",
      tagline: "Recognizing fragmented risk patterns without automated scoring.",
      maturity: "PROPOSED",
      purpose:
        "Identify when isolated incident handling may obscure relevant cumulative context across systems.",
      trigger:
        "Defined trigger categories (e.g. 3 fragmented institutional encounters or declined intakes within 90 days across 2+ jurisdictions).",
      requiredAction:
        "Mandates human supervisory review or multidisciplinary case conference (CAC, High-Risk Team) before administrative dismissal.",
      minimumRecord:
        "Encounter count, participating agency types, supervisory review log timestamp, supervisor staff ID, review disposition code.",
      safeguards:
        "Zero automated abuse-risk scoring or credibility algorithms. Cumulative report counts are never used as risk or credibility metrics. Triggers serve exclusively to prompt human multidisciplinary inquiry.",
      completionCondition:
        "Designated supervisor or multidisciplinary team lead documents that cumulative multi-agency context was formally evaluated.",
      icon: AlertTriangle
    },
    {
      num: "05",
      title: "DECISION OWNERSHIP",
      tagline: "Eliminating unassigned responsibility.",
      maturity: "PROTOTYPE",
      purpose:
        "Eliminate the 'nobody's case' failure mode. At every transition, explicitly answer: Who owns the next action? (Not 'who owns the entire case').",
      trigger:
        "Dispatched referral, multi-agency investigation, or concurrent court/agency filings.",
      requiredAction:
        "Explicitly bind a named institution and role as the primary decision owner for the immediate next milestone.",
      minimumRecord:
        "Assigned agency identifier, responsible unit/role, primary handler ID, action milestone description, target completion deadline.",
      safeguards:
        "Role-based assignment protects frontline staff from personal liability; re-assignment requires explicit bilateral handoff confirmation.",
      completionCondition:
        "Assigned decision owner executes the milestone action or formally transfers ownership to an accepting successor agency.",
      icon: Users
    },
    {
      num: "06",
      title: "CONTEXT BEFORE CLOSURE",
      tagline: "Accountability metadata before case exit.",
      maturity: "PROPOSED",
      purpose:
        "Track process completeness before case exit. Prevent premature case closures where files are closed without checking whether critical records were held elsewhere.",
      trigger:
        "Initiation of administrative closure, declination, or dismissal of a qualifying family violence or child safety matter.",
      requiredAction:
        "Complete a standardized pre-closure audit recording process completeness without forcing substantive merits findings.",
      minimumRecord:
        "Reviewed / unavailable / outside authority / not reviewed / referred elsewhere / reason for closure.",
      safeguards:
        "Tracks process completeness, does not force substantive findings. Does not require an agency to explain whether another allegation was 'credible.'",
      completionCondition:
        "Authorizing supervisor certifies completion of the pre-closure audit before file archiving.",
      icon: FolderArchive
    }
  ];

  const getMaturityBadge = (status: ContinuityModule["maturity"]) => {
    switch (status) {
      case "IMPLEMENTED":
        return "bg-emerald-100 text-emerald-900 border-emerald-300";
      case "PROTOTYPE":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "PROPOSED":
        return "bg-stone-200 text-stone-800 border-stone-400";
      case "REQUIRES LEGAL REVIEW":
        return "bg-rose-100 text-rose-900 border-rose-300";
      case "REQUIRES SECURITY REVIEW":
        return "bg-purple-100 text-purple-900 border-purple-300";
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 select-none font-sans">
      {/* 1. Header & Version / Discussion Draft Banner */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Layers className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              CROSS-SYSTEM CONTINUITY STANDARD · SPECIFICATION
            </span>
          </div>
          <span className="coord-tick">[SPEC: MWT-STD-2026-V0.1]</span>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEE8DD] border border-[#1C1B1A] text-[#1C1B1A] rounded text-xs font-mono font-bold uppercase">
            <GitBranch className="w-3.5 h-3.5 text-[#971F26]" />
            <span>Version 0.1 — Discussion Draft (October 2026)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
            Cross-System Continuity Standard
          </h1>
        </div>

        <p className="text-base sm:text-lg text-stone-900 max-w-3xl leading-relaxed font-sans font-medium">
          A proposed public-interest framework for preventing related matters from disappearing between institutional boundaries. Built on six open protocols designed to bridge agencies without creating centralized surveillance dossiers or infringing due process.
        </p>

        {/* Dual Goals Banner */}
        <div className="grid sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
              GOVERNING GOAL
            </span>
            <p className="text-sm font-serif italic font-bold text-[#1C1D1D]">
              &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
            </p>
          </div>

          <div className="p-3.5 bg-[#EEE8DD] border-l-4 border-l-[#1C1D1D] border border-[#D9D1C4] rounded-r-xl space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-700 block">
              EXPANDED INSTITUTIONAL GOAL
            </span>
            <p className="text-sm font-serif italic font-bold text-[#1C1D1D]">
              &ldquo;Preserve enough continuity that a boundary between systems does not automatically become a boundary in accountability.&rdquo;
            </p>
          </div>
        </div>

        {/* Principal Model & Worked Application Callout */}
        <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
          <div className="p-4 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <div className="flex items-center gap-2 text-[#971F26] font-bold uppercase">
              <FileCheck className="w-4 h-4" />
              <span>PRINCIPAL WORKING MODEL: CONTINUITY RECEIPT</span>
            </div>
            <p className="font-sans text-stone-700 text-[12px]">
              Participant-held cryptographic encounter proof with client-side SHA-256 hashing, segregated material reviews, and next decision-owner logging.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <div className="flex items-center gap-2 text-stone-800 font-bold uppercase">
              <PhoneCall className="w-4 h-4" />
              <span>WORKED APPLICATION: PERSONAL NUMBER CONTINUITY</span>
            </div>
            <p className="font-sans text-stone-700 text-[12px]">
              A concrete application of the standard separating carrier billing authority from adult communication identity under the Safe Connections Act (47 U.S.C. § 345).
            </p>
          </div>
        </div>
      </div>

      {/* 2. The 6 Modules Deep Dive */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
              PROTOCOL ARCHITECTURE
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              The Six Core Continuity Modules
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            6 MANDATORY ATTRIBUTES PER MODULE
          </span>
        </div>

        <div className="space-y-8">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.num}
                className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm"
              >
                {/* Module Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#971F26]">
                        MODULE {m.num}
                      </span>
                      <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border ${getMaturityBadge(m.maturity)}`}>
                        {m.maturity}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1C1D1D]">
                      {m.title}
                    </h3>
                    <p className="text-xs font-mono text-[#971F26] font-bold">
                      &ldquo;{m.tagline}&rdquo;
                    </p>
                  </div>
                  <div className="p-3 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg">
                    <Icon className="w-6 h-6 text-[#971F26]" />
                  </div>
                </div>

                {/* 6 Mandatory Module Attributes Grid */}
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  {/* 1. Purpose */}
                  <div className="p-3.5 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
                    <span className="font-mono font-bold text-stone-900 uppercase block text-[10px]">
                      1. PURPOSE &amp; SEAM DEFICIT ADDRESSED
                    </span>
                    <p className="font-sans text-stone-800 text-[11.5px] leading-relaxed">
                      {m.purpose}
                    </p>
                  </div>

                  {/* 2. Trigger */}
                  <div className="p-3.5 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
                    <span className="font-mono font-bold text-[#971F26] uppercase block text-[10px]">
                      2. INSTITUTIONAL TRIGGER
                    </span>
                    <p className="font-sans text-stone-800 text-[11.5px] leading-relaxed">
                      {m.trigger}
                    </p>
                  </div>

                  {/* 3. Required Action */}
                  <div className="p-3.5 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
                    <span className="font-mono font-bold text-stone-900 uppercase block text-[10px]">
                      3. MANDATED ACTION / WORKFLOW
                    </span>
                    <p className="font-sans text-stone-800 text-[11.5px] leading-relaxed">
                      {m.requiredAction}
                    </p>
                  </div>

                  {/* 4. Minimum Record */}
                  <div className="p-3.5 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
                    <span className="font-mono font-bold text-stone-900 uppercase block text-[10px]">
                      4. MINIMUM NECESSARY RECORD
                    </span>
                    <p className="font-sans text-stone-800 text-[11.5px] leading-relaxed">
                      {m.minimumRecord}
                    </p>
                  </div>

                  {/* 5. Safeguards */}
                  <div className="p-3.5 bg-white rounded-lg border border-[#971F26]/30 space-y-1">
                    <span className="font-mono font-bold text-[#971F26] uppercase block text-[10px]">
                      5. SAFEGUARDS &amp; DUE PROCESS BOUNDARIES
                    </span>
                    <p className="font-sans text-stone-800 text-[11.5px] leading-relaxed">
                      {m.safeguards}
                    </p>
                  </div>

                  {/* 6. Completion Condition */}
                  <div className="p-3.5 bg-[#E8F3EB] rounded-lg border border-[#2D5A3D]/40 space-y-1">
                    <span className="font-mono font-bold text-[#2D5A3D] uppercase block text-[10px]">
                      6. VERIFIABLE COMPLETION CONDITION
                    </span>
                    <p className="font-sans text-stone-800 text-[11.5px] leading-relaxed">
                      {m.completionCondition}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Continuity Interchange Specification */}
      <ContinuityInterchangeSpecComponent />

      {/* 4. Interactive Specimen Demo */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#971F26] font-bold tracking-wider block">
              PORTABLE ARTIFACT
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Interactive Continuity Receipt Specimen
            </h2>
          </div>
          <span className="coord-tick">[CLIENT-SIDE SPECIMEN]</span>
        </div>

        <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed max-w-3xl">
          Below is a working demonstration specimen of a Continuity Contact Record. Test different verification tiers to see how administrative encounters are preserved without creating agency liability or pretend judicial findings.
        </p>

        <ContinuityContactRecordSpecimen />
      </section>

      {/* 5. Cross-Cutting Safeguards Callout Banner */}
      <section className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-700 pb-3">
          <div className="flex items-center gap-2 text-amber-300">
            <Scale className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              CROSS-CUTTING SAFEGUARDS SPECIFICATION
            </span>
          </div>
          <span className="text-[10px] font-mono text-stone-400 uppercase">
            [EVIDENTIARY TRACEABILITY]
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Evidence Integrity &amp; Administrative Traceability
          </h3>
          <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
            Continuity does not mean believing every report, aggregating accusations, or treating repetition as proof. Explore the 8 cross-cutting safeguards, Review Trace administrative disposition statuses, and locked principles governing evidence interpretation.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/continuity/safeguards"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#971F26] text-white text-xs font-mono font-bold uppercase rounded-lg hover:bg-red-800 transition"
          >
            <span>Explore Safeguards &amp; Review Trace Standard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. Privacy & Due Process Guardrails */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3 border-b border-[#D9D1C4] pb-3">
          <Lock className="w-5 h-5 text-[#971F26]" />
          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1C1D1D]">
            Anti-Surveillance &amp; Evidentiary Guardrails
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono text-stone-800">
          <div className="p-3.5 bg-[#EEE8DD] rounded border border-stone-300 space-y-1">
            <span className="font-bold text-[#971F26] uppercase block">WHAT WE DO NOT DO:</span>
            <ul className="space-y-1 font-sans text-stone-700 text-[11.5px]">
              <li>• We do not maintain a centralized database of allegations or dossiers.</li>
              <li>• We do not perform automated risk scoring or credibility ratings on individuals.</li>
              <li>• We do not merge factual conclusions across linked proceedings.</li>
              <li>• We do not substitute software for judicial fact-finding or casework discretion.</li>
            </ul>
          </div>

          <div className="p-3.5 bg-[#EEE8DD] rounded border border-stone-300 space-y-1">
            <span className="font-bold text-stone-900 uppercase block">WHAT WE PROVIDE INSTEAD:</span>
            <ul className="space-y-1 font-sans text-stone-700 text-[11.5px]">
              <li>• Participant-held cryptographic receipts of contacts (SHA-256 digest).</li>
              <li>• Protocols for closed-loop interagency referral tracking.</li>
              <li>• Prompts for authorized personnel to verify related files without merging facts.</li>
              <li>• Accountability metadata documenting next decision ownership.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Policy & Implementation Resources */}
      <ResourceMaterialsBlock />

      {/* 8. Navigation Footer */}
      <div className="pt-6 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/the-gap"
          className="text-stone-600 hover:text-[#1C1D1D] uppercase font-bold tracking-wider"
        >
          ← Read &ldquo;The Seam Deficit&rdquo;
        </Link>
        <Link
          href="/policy"
          className="px-5 py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-bold uppercase tracking-wider shadow-xs"
        >
          Explore Texas Policy Lab →
        </Link>
      </div>
    </div>
  );
}
