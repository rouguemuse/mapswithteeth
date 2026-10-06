import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Scale,
  FileCheck,
  ArrowRight,
  GitBranch,
  Layers,
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Lock,
  ExternalLink,
  ChevronRight
} from "lucide-react";

import { ReviewTraceComponent } from "@/components/safeguards/ReviewTraceComponent";
import { ProvenanceVisual } from "@/components/safeguards/ProvenanceVisual";
import { ClaimEvidenceSeparation } from "@/components/safeguards/ClaimEvidenceSeparation";
import { BarrierAwareCooperation } from "@/components/safeguards/BarrierAwareCooperation";
import { RetaliationSeparation } from "@/components/safeguards/RetaliationSeparation";
import { ControllingDocumentVerification } from "@/components/safeguards/ControllingDocumentVerification";
import { ObservationVsDisposition } from "@/components/safeguards/ObservationVsDisposition";
import { LockedPrinciplesBanner } from "@/components/safeguards/LockedPrinciplesBanner";
import { WhatThisStandardDoesNotClaim } from "@/components/safeguards/WhatThisStandardDoesNotClaim";
import { ResourceMaterialsBlock } from "@/components/safeguards/ResourceMaterialsBlock";

export const metadata: Metadata = {
  title: "Evidence Integrity & Administrative Traceability | Maps With Teeth",
  description:
    "Cross-cutting evidentiary safeguards, Review Trace administrative vocabulary, and provenance architecture for multi-agency continuity."
};

export default function SafeguardsPage() {
  const primarySources = [
    {
      citation: "Tex. Fam. Code §§ 261.301(f), 261.3011",
      domain: "Joint DFPS & Law Enforcement Protocols",
      relevance: "Governs structured coordination, distinct investigatory roles, and mandatory inter-agency information handoffs without blurring legal responsibilities.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Value=261.001"
    },
    {
      citation: "Tex. Fam. Code §§ 264.403, 264.4031, 264.406",
      domain: "Children's Advocacy Centers & Multidisciplinary Teams",
      relevance: "Authoritative model for inter-agency MOUs, bounded information exchange, and cumulative multidisciplinary case reviews.",
      url: "https://statutes.capitol.texas.gov/?artSec=264.181&chapter=FA.264&code=FA&tab=1"
    },
    {
      citation: "Tex. Gov't Code §§ 791.003, 791.011",
      domain: "Interlocal Cooperation Act",
      relevance: "Authorizes governmental entities and administrative subdivisions to contract for joint governmental functions and shared protocol standards.",
      url: "https://statutes.capitol.texas.gov/Docs/GV/pdf/GV.791.pdf"
    },
    {
      citation: "Tex. Fam. Code § 86.0011 / Code Crim. Proc. Art. 7B.104",
      domain: "Protective Order Registry & Enforceability",
      relevance: "Establishes statewide law-enforcement accessibility for controlling orders and requires immediate verification of operative restraints.",
      url: "https://statutes.capitol.texas.gov/Docs/FA/pdf/FA.86.pdf"
    },
    {
      citation: "Tex. Code Crim. Proc. Art. 5.05",
      domain: "Family Violence Incident Reporting & Tracking",
      relevance: "Requires law enforcement agencies to maintain retrievable records and make incident reports accessible to investigating officers.",
      url: "https://statutes.capitol.texas.gov/Docs/CR/pdf/CR.5.pdf"
    },
    {
      citation: "Tex. Prop. Code §§ 92.016, 92.0161",
      domain: "Statutory Lease Termination on Domestic Violence",
      relevance: "Requires specific documentary provenance (protective orders, medical documentation) for rights-exercising notices without subjective discretion.",
      url: "https://statutes.capitol.texas.gov/Docs/PR/pdf/PR.92.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#1C1D1D] font-sans pb-24 selection:bg-[#971F26] selection:text-white">
      {/* Top Header / Breadcrumbs */}
      <div className="border-b border-[#D9D1C4] bg-[#EEE8DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-stone-600">
            <Link href="/" className="hover:underline">
              MAPS WITH TEETH
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link href="/continuity" className="hover:underline">
              CONTINUITY STANDARD
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#971F26] font-bold">SAFEGUARDS &amp; TRACEABILITY</span>
          </div>

          <span className="hidden sm:inline-block px-2.5 py-0.5 bg-stone-200 text-stone-800 rounded font-bold">
            CROSS-CUTTING SAFEGUARDS
          </span>
        </div>
      </div>

      {/* Main Page Hero */}
      <section className="border-b border-[#D9D1C4] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Scale className="w-6 h-6" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED DESIGN STANDARD · CROSS-CUTTING FRAMEWORK
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#1C1D1D] max-w-4xl">
            Evidence Integrity &amp; Administrative Traceability
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-[#971F26] max-w-3xl leading-snug">
            &ldquo;Continuity should make review more disciplined, not make allegations easier to count.&rdquo;
          </p>

          <p className="text-stone-700 text-base sm:text-lg font-sans max-w-3xl leading-relaxed">
            Multi-agency continuity does not mean believing every report without scrutiny, aggregating unverified accusations into a central dossier, or treating repeated hearsay as independent proof. It means preserving enough <strong>provenance, chain-of-custody, and decision metadata</strong> to know what material existed, what was reviewed, what was not, why, and who owned the next action.
          </p>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap gap-2 pt-4 text-xs font-mono">
            <a
              href="#principles"
              className="px-3 py-1.5 bg-[#1C1D1D] text-[#F5F1E8] rounded-lg hover:bg-stone-800 transition"
            >
              Evidence Integrity Principles ↓
            </a>
            <a
              href="#review-trace"
              className="px-3 py-1.5 bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded-lg hover:bg-[#EEE8DD] transition"
            >
              Review Trace Vocabulary ↓
            </a>
            <a
              href="#provenance"
              className="px-3 py-1.5 bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded-lg hover:bg-[#EEE8DD] transition"
            >
              Provenance vs Volume ↓
            </a>
            <a
              href="#claim-separation"
              className="px-3 py-1.5 bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded-lg hover:bg-[#EEE8DD] transition"
            >
              Claim-Evidence Separation ↓
            </a>
            <a
              href="#cooperation"
              className="px-3 py-1.5 bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded-lg hover:bg-[#EEE8DD] transition"
            >
              Barrier-Aware Cooperation ↓
            </a>
            <a
              href="#retaliation"
              className="px-3 py-1.5 bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded-lg hover:bg-[#EEE8DD] transition"
            >
              Retaliation Separation ↓
            </a>
            <a
              href="#controlling-docs"
              className="px-3 py-1.5 bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded-lg hover:bg-[#EEE8DD] transition"
            >
              Controlling Documents ↓
            </a>
            <a
              href="#observation"
              className="px-3 py-1.5 bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded-lg hover:bg-[#EEE8DD] transition"
            >
              Observation &amp; Demeanor ↓
            </a>
            <a
              href="#non-claims"
              className="px-3 py-1.5 bg-[#971F26] text-white rounded-lg hover:bg-red-800 transition"
            >
              Non-Claims Boundaries ↓
            </a>
          </div>
        </div>
      </section>

      {/* Core Body Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Section 1: Evidence Integrity Principles */}
        <div id="principles" className="scroll-mt-12">
          <LockedPrinciplesBanner />
        </div>

        {/* Section 2: Review Trace Administrative Vocabulary */}
        <div id="review-trace" className="scroll-mt-12 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider">
              SAFEGUARD PROTOCOL 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Review Trace &amp; Administrative Disposition Logging
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans max-w-3xl">
              The proposed Review Trace preserves how identified material was handled without deciding the merits. It records whether material was received, reviewed, unavailable, referred, disputed, derivative, outside authority, or left unreviewed for a stated reason.
            </p>
          </div>
          <ReviewTraceComponent />
        </div>

        {/* Section 3: Provenance Before Volume */}
        <div id="provenance" className="scroll-mt-12 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider">
              SAFEGUARD PROTOCOL 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Provenance Before Volume: De-Escalating Echo Loops
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans max-w-3xl">
              Systems can mistake repeated retellings of the same originating statement for independent corroboration. The proposed provenance model preserves source relationships and then evaluates each independent record for its actual claim-specific effect.
            </p>
          </div>
          <ProvenanceVisual />
        </div>

        {/* Section 4: Claim-Evidence Separation */}
        <div id="claim-separation" className="scroll-mt-12 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider">
              SAFEGUARD PROTOCOL 03
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Claim-Evidence Separation: De-Judicializing Case Data
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans max-w-3xl">
              Complex disputes should not be collapsed into global character judgments. The proposed method separates specific claims, sources, provenance, supporting or contradictory material, status, and unresolved questions.
            </p>
          </div>
          <ClaimEvidenceSeparation />
        </div>

        {/* Section 5: Barrier-Aware Cooperation */}
        <div id="cooperation" className="scroll-mt-12 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider">
              SAFEGUARD PROTOCOL 04
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Barrier-Aware Cooperation Distinction
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans max-w-3xl">
              A barrier is not a refusal. The proposed statuses distinguish express refusal, unavailability, reported access barriers, reported fear or safety barriers, partial cooperation, and unknown reasons without inferring motive.
            </p>
          </div>
          <BarrierAwareCooperation />
        </div>

        {/* Section 6: Retaliation & Interference Separation */}
        <div id="retaliation" className="scroll-mt-12 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider">
              SAFEGUARD PROTOCOL 05
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Retaliation &amp; Interference Separation
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans max-w-3xl">
              Underlying allegations and subsequent conduct should remain on separate analytical tracks. Later conduct may be alleged or potentially relevant as retaliation, interference, intimidation, or lawful responsive action; chronology alone does not classify it.
            </p>
          </div>
          <RetaliationSeparation />
        </div>

        {/* Section 7: Controlling-Document Verification */}
        <div id="controlling-docs" className="scroll-mt-12 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider">
              SAFEGUARD PROTOCOL 06
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Controlling-Document Verification for Rights Decisions
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans max-w-3xl">
              For rights-limiting administrative decisions, the proposed safeguard records the authority relied upon, the document or rule reviewed, the provision understood to control, when it was verified, the resulting action, and a correction or review path.
            </p>
          </div>
          <ControllingDocumentVerification />
        </div>

        {/* Section 8: Observation vs Disposition & Demeanor vs Provenance */}
        <div id="observation" className="scroll-mt-12 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider">
              SAFEGUARD PROTOCOL 07 &amp; 08
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Observation vs. Disposition &amp; Demeanor vs. Provenance
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans max-w-3xl">
              Demeanor, distress, communication style, or generalized credibility impressions should not substitute for review of independently verifiable material. Observation, inference, provenance, and evidentiary effect remain separate.
            </p>
          </div>
          <ObservationVsDisposition />
        </div>

        {/* Section 9: Primary Source Legal Authorities */}
        <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#971F26]">
                <Scale className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest">
                  PRIMARY LEGAL AUTHORITIES &amp; TEXAS PRECEDENT
                </span>
              </div>
              <span className="coord-tick">[STATUTORY BASIS]</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Governing Texas Statutes &amp; Legal Framework
            </h3>

            <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
              The Cross-System Continuity Standard builds upon existing Texas statutory authorizations for multidisciplinary coordination, interlocal agreements, and structured record exchange.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            {primarySources.map((src, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2.5 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-1.5">
                  <span className="px-2 py-0.5 bg-[#1C1D1D] text-amber-300 text-[10px] rounded font-bold block w-fit">
                    {src.citation}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#1C1D1D]">
                    {src.domain}
                  </h4>
                  <p className="font-sans text-stone-700 text-[11.5px] leading-relaxed">
                    {src.relevance}
                  </p>
                </div>

                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-2 border-t border-stone-300 text-[11px] font-mono text-[#971F26] hover:underline flex items-center gap-1"
                >
                  <span>Inspect Texas Statute</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: What This Standard Does Not Claim */}
        <div id="non-claims" className="scroll-mt-12">
          <WhatThisStandardDoesNotClaim />
        </div>

        {/* Section 11: Public Interest Resources Block */}
        <ResourceMaterialsBlock />

        {/* Bottom Navigation CTA */}
        <div className="p-8 bg-[#1C1D1D] text-[#F5F1E8] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Explore the Six Core Continuity Modules
            </h4>
            <p className="text-sm font-sans text-stone-300 max-w-xl">
              Review the operational architecture for universal minimum intake, closed-loop confirmation receipts, and cumulative review escalation.
            </p>
          </div>

          <Link
            href="/continuity"
            className="px-6 py-3.5 bg-[#971F26] text-white text-sm font-mono font-bold rounded-xl hover:bg-red-800 transition flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>View Full Continuity Standard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
