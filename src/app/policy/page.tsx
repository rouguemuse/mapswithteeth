"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  Building2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Download,
  Send,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Lock,
  Layers,
  MapPin,
  CheckCircle2,
  Users,
  Activity,
  GitBranch,
  BookOpen,
  Calendar,
  Clock,
  Check,
  ExternalLink,
  Shield,
  HelpCircle as QuestionIcon
} from "lucide-react";
import { getPolicyLabRelatedArticles } from "@/domain/writing/queries";
import { ArticleCard } from "@/components/writing/ArticleCard";
import { ResourceMaterialsBlock } from "@/components/safeguards/ResourceMaterialsBlock";

export default function PolicyLabPage() {
  const relatedArticles = getPolicyLabRelatedArticles();
  const researchQuestions = [
    "When is one agency legally permitted or required to know that another related matter exists?",
    "What happens after an interagency referral is sent, and who verifies receipt?",
    "Who owns the next action when multiple agencies have jurisdiction?",
    "When should repeated fragmented reports trigger cumulative supervisory or multidisciplinary review?",
    "What information can legally follow a referral under existing Texas and federal statutes?",
    "How can continuity exist without creating an unsafe, centralized allegation dossier?",
    "How should agencies document related information they considered or did not consider before closure?",
    "Where do confidentiality statutes permit or prohibit interagency closed-loop confirmation?",
    "Which existing Texas multidisciplinary models (e.g. CACs, High-Risk Teams) can be extended rather than reinvented?",
    "How can survivor-held continuity receipts protect due process while preventing administrative runaround?"
  ];

  const precedentSources = [
    {
      claim: "DFPS and law enforcement already conduct certain joint investigations",
      authority: "Tex. Fam. Code §§ 261.301(f), 261.3011",
      dateReviewed: "October 2026",
      relevance: "Establishes Texas statutory precedent for defined cross-agency roles, mutual agreements, and joint guidelines.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Value=261.001"
    },
    {
      claim: "CAC participants operate under formalized interagency MOUs",
      authority: "Tex. Fam. Code § 264.403",
      dateReviewed: "October 2026",
      relevance: "Direct precedent for formalized interagency cooperation between DFPS, local law enforcement, and prosecutors.",
      url: "https://statutes.capitol.texas.gov/?artSec=264.181&chapter=FA.264&code=FA&tab=1"
    },
    {
      claim: "CAC working protocols govern referrals, intake, timely information exchange, case review and tracking",
      authority: "Tex. Fam. Code § 264.4031",
      dateReviewed: "October 2026",
      relevance: "Very close Texas precedent for several MWT continuity modules (intake, tracking, information exchange, conflict resolution).",
      url: "https://statutes.capitol.texas.gov/?artSec=264.181&chapter=FA.264&code=FA&tab=1"
    },
    {
      claim: "Multidisciplinary Teams (MDTs) coordinate agencies and conduct recurring case review",
      authority: "Tex. Fam. Code § 264.406",
      dateReviewed: "October 2026",
      relevance: "Statutory precedent for cumulative case review rather than isolated incident handling.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Date=4%2F16%2F2025&Value=264.166"
    },
    {
      claim: "Authorized MDT members may exchange defined confidential information",
      authority: "Tex. Fam. Code § 264.406(e)",
      dateReviewed: "October 2026",
      relevance: "Demonstrates that Texas already creates bounded, lawful information-sharing authority within defined multidisciplinary frameworks.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Date=4%2F16%2F2025&Value=264.166"
    },
    {
      claim: "Governmental entities can use interlocal cooperation contracts",
      authority: "Tex. Gov't Code §§ 791.003, 791.011",
      dateReviewed: "October 2026",
      relevance: "Potential administrative structure for a narrowly designed local pilot. (Note: potential vehicle for a pilot, not independent authorization to share confidential records; every exchange requires subject-specific review).",
      url: "https://statutes.capitol.texas.gov/Docs/GV/pdf/GV.791.pdf"
    },
    {
      claim: "Protective-order information already moves into statewide law-enforcement systems",
      authority: "Tex. Fam. Code § 86.0011; Tex. Code Crim. Proc. Art. 7B.104",
      dateReviewed: "October 2026",
      relevance: "Demonstrates existing statewide continuity infrastructure for specific civil/criminal safety information.",
      url: "https://statutes.capitol.texas.gov/Docs/FA/pdf/FA.86.pdf"
    },
    {
      claim: "Family-violence reports must be retrievable and officers must have PO access",
      authority: "Tex. Code Crim. Proc. Art. 5.06",
      dateReviewed: "October 2026",
      relevance: "Narrow statutory precedent requiring local law enforcement agencies to maintain retrievable family-violence incident records.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=CR&Value=5.06"
    },
    {
      claim: "Early residential lease termination for family violence without penal fee",
      authority: "Tex. Prop. Code § 92.016",
      dateReviewed: "October 2026",
      relevance: "Statutory tenant relief right based on advocate documentation, protective orders, or medical records.",
      url: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016"
    },
    {
      claim: "Utility security deposit waiver across deregulated Texas electric markets",
      authority: "16 TAC § 25.478",
      dateReviewed: "October 2026",
      relevance: "Mandatory waiver of retail electric deposit upon certified advocate verification.",
      url: "https://www.puc.texas.gov"
    },
    {
      claim: "Federal mobile telecommunication line separation for survivors",
      authority: "47 U.S.C. § 345 (Safe Connections Act)",
      dateReviewed: "October 2026",
      relevance: "Mandates mobile carriers complete line separation within two business days upon qualifying submission.",
      url: "https://www.fcc.gov"
    },
    {
      claim: "Strict federal non-disclosure and confidentiality protections for victim services",
      authority: "34 U.S.C. § 12291(b)(2) (VAWA Confidentiality)",
      dateReviewed: "October 2026",
      relevance: "Prohibits sharing personally identifying survivor information without informed, written, time-limited consent.",
      url: "https://www.justice.gov/ovw"
    }
  ];

  const currentVsProposed = [
    {
      dimension: "Outbound Referrals",
      current: "Referral ends at 'sent' (email or paper slip); sending agency closes file under 'referred out' with zero receipt confirmation.",
      proposed: "Closed-loop protocol requires electronic acknowledgment, capacity confirmation, and handler assignment (PILOT SERVICE TARGET — receiving acknowledgment within 48 hours. This is a proposed pilot benchmark, not an existing statutory requirement)."
    },
    {
      dimension: "Cross-Jurisdiction Context",
      current: "Adjacent municipal and county agencies operate in blind silos; cumulative stalking across county lines treated as isolated occurrences.",
      proposed: "Linked-matter review generates investigative signals prompting authorized officers to lawfully request existing records."
    },
    {
      dimension: "Fragmented Risk Patterns",
      current: "Minor individual encounters screened out repeatedly without supervisory awareness of parallel filings in family court or schools.",
      proposed: "Deterministic cumulative review triggers mandate supervisory or multidisciplinary elevation after 3 encounters in 90 days."
    },
    {
      dimension: "Decision Ownership",
      current: "Responsibility disappears between agencies; survivor left navigating circular 'talk to the other department' runarounds.",
      proposed: "Explicit decision owner and milestone deadline bound to every handoff stage until accepted by a successor entity."
    },
    {
      dimension: "Case Closure Auditing",
      current: "Cases closed unilaterally as 'unsubstantiated' without checking whether critical evidence was held by neighboring departments.",
      proposed: "Pre-closure accountability checklist documents what related records were examined, what was unreviewed, and closing rationale."
    },
    {
      dimension: "Survivor Documentation Burden",
      current: "Survivor acts as the sole integration layer, forced to carry paper folders and retell traumatic history at every intake door.",
      proposed: "Survivor holds portable, client-side cryptographic Continuity Contact Records (SHA-256) with segregated material review proofs."
    }
  ];

  const pilotMetrics = [
    { metric: "Acknowledgment Rate", question: "Did somebody confirm receipt?", target: "> 95% Rate" },
    { metric: "Time to Acknowledgment", question: "How long before confirmation?", target: "Pilot Target: < 48 Hours (Proposed Benchmark)" },
    { metric: "Decision-Owner Rate", question: "Is one next responsible actor identifiable?", target: "100% Bound" },
    { metric: "Re-Referral Rate", question: "How often is the participant bounced onward?", target: "Measured & Tracked" },
    { metric: "Repeat-Intake Rate", question: "How often must the same facts be re-entered?", target: "Minimized" },
    { metric: "Lost-Handoff Rate", question: "How often does no receiving owner emerge?", target: "0% (Alerted at 14d)" },
  ];

  const unresolvedDesignQuestions = [
    {
      title: "Record Control",
      question: "Participant-held by default? When does an agency copy become its own public record?",
      rationale: "Ensuring survivor retains data sovereignty client-side without unintentionally triggering public-record retention laws until an agency formally acts."
    },
    {
      title: "Acknowledgment Scope",
      question: "How to guarantee agency acknowledgment verifies only specifically marked administrative facts, never the participant's broader narrative?",
      rationale: "Protecting frontline intake staff from whole-matter representation liability or pretend evidentiary determinations."
    },
    {
      title: "Correction Integrity",
      question: "How to handle disputed or corrected intake facts?",
      rationale: "Prefer append-only versioned correction history instead of silently overwriting or erasing prior finalized records."
    },
    {
      title: "Linked Matters Privacy",
      question: "What minimum signal can be conveyed without disclosing underlying confidential information?",
      rationale: "Transmitting purely a cryptographic presence signal prompting lawful interagency inquiry rather than leaking private allegation text."
    },
    {
      title: "Retention Limits",
      question: "What are the strict expiration and retention boundaries for handoff metadata?",
      rationale: "Zero indefinite data hoarding simply because cloud storage is cheap. Enforcing bounded lifecycles on all routing records."
    },
    {
      title: "Deletion & Expungement",
      question: "How is participant-controlled deletion defined separately from government records legally retained elsewhere?",
      rationale: "Participant can delete their personal device vault at will, while agency-held administrative files remain subject to statutory record retention schedules."
    },
    {
      title: "Discovery & Legal Process",
      question: "How to clearly set expectations around subpoenas and court orders?",
      rationale: "Never promise that participant-held records are immune from subpoena, discovery, court order, or other lawful process."
    },
    {
      title: "Misuse & Anti-Surveillance",
      question: "How to structurally prevent weaponization or discriminatory targeting?",
      rationale: "Absolute prohibition on perpetrator lists, public accusation graphs, public individual heatmaps, credibility scores, or automated dangerousness scoring."
    },
    {
      title: "Minimum Necessary Standard",
      question: "How to restrict information flow during interagency transfers?",
      rationale: "A receiving party gets strictly the smallest amount of administrative metadata necessary to accomplish the defined referral handoff."
    }
  ];

  const adoptionMatrix = [
    {
      module: "02 Closed-Loop Referral",
      agencyPractice: "✅ Adoptable via internal SOP",
      interlocalPilot: "✅ Multi-agency MOU",
      sunsetRec: "✅ DFPS/HHSC reporting metric",
      stateLegislation: "Could mandate statewide"
    },
    {
      module: "03 Continuity Receipt",
      agencyPractice: "✅ Prototype (Client-side)",
      interlocalPilot: "✅ Pilot testing",
      sunsetRec: "✅ Standard practice recommendation",
      stateLegislation: "Could standardize statewide"
    },
    {
      module: "05 Decision Ownership",
      agencyPractice: "✅ Internal workflow assignment",
      interlocalPilot: "✅ Designated handoff lead",
      sunsetRec: "✅ Referral ownership requirement",
      stateLegislation: "Could mandate across agencies"
    },
    {
      module: "06 Context Before Closure",
      agencyPractice: "✅ Internally feasible checklist",
      interlocalPilot: "✅ Pilot evaluation",
      sunsetRec: "Strong Sunset fit (Closure audit)",
      stateLegislation: "Could mandate statutory pre-closure check"
    },
    {
      module: "04 Cumulative Review",
      agencyPractice: "Some internal supervisory use",
      interlocalPilot: "Possible within existing authority",
      sunsetRec: "Strong Sunset fit (Multi-contact review)",
      stateLegislation: "Needed for broad uniform mandate"
    },
    {
      module: "01 Linked-Matter Review",
      agencyPractice: "Limited internally",
      interlocalPilot: "Depends heavily on authority",
      sunsetRec: "Recommend study / pilot",
      stateLegislation: "Likely legislative territory for broad cross-system duty"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none font-sans">
      {/* 1. Header & Geographic Framing */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Scale className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              TEXAS POLICY & SYSTEMS LAB · PUBLIC-INTEREST RESEARCH
            </span>
          </div>
          <span className="coord-tick">[JURISDICTION: TEXAS 254 COUNTIES · FIELD VALIDATION: CENTRAL TX]</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
            Building the Bridges Between Existing Systems
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#971F26] uppercase font-bold">
            Statewide Statutory Mapping + Field Validation in Central Texas (Williamson, Travis, Bastrop, Burnet, Hays)
          </p>
        </div>

        {/* Central Thesis Callout */}
        <div className="p-5 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl space-y-2.5 shadow-2xs">
          <p className="text-base sm:text-lg font-serif italic text-stone-900 leading-relaxed font-semibold">
            &ldquo;The problem is not always that information does not exist. Sometimes it exists in five places, under five identifiers, with five separate decision-makers, and no mechanism requiring anyone to recognize the relationship between them.&rdquo;
          </p>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-stone-800 font-bold">
            Maps With Teeth does not propose merging those five systems. It asks what minimum continuity must survive when responsibility crosses from one to another.
          </p>
        </div>

        {/* Target Stakeholders Badge Strip */}
        <div className="p-3.5 bg-[#EEE8DD] rounded-lg border border-[#D9D1C4] text-xs font-mono space-y-1">
          <span className="text-stone-500 uppercase font-bold block">RESEARCH DESIGNED FOR:</span>
          <p className="text-stone-800">
            Texas Legislators · Sunset Advisory Staff · State & County Agency Leadership · Law Enforcement · DFPS/CPS · Children’s Advocacy Centers · Legal Aid · Policy Researchers
          </p>
        </div>
      </div>

      {/* 2. The Core Defensible Position: Texas Multidisciplinary Precedents */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm bg-grid-diagram">
        <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              TEXAS LEGAL FOUNDATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Texas Already Uses Multidisciplinary Continuity
          </h2>
          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed">
            <strong>Maps With Teeth is not proposing that Texas invent multidisciplinary continuity. Texas already uses it.</strong> MWT asks where equivalent continuity is absent when related matters cross systems, jurisdictions, or program boundaries outside those defined structures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-xs font-sans text-stone-800">
          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2">
            <span className="font-mono text-[11px] font-bold text-[#971F26] uppercase block">
              1. JOINT DFPS & LAW ENFORCEMENT INVESTIGATIONS
            </span>
            <p className="leading-relaxed">
              Texas Family Code § 261.301(f) requires certain serious child-abuse/neglect investigations to be conducted jointly by DFPS and local law enforcement. § 261.3011 separately requires DFPS and law enforcement to develop joint-investigation guidelines, clarify roles, implement mutual agreements, and collaborate on joint training.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2">
            <span className="font-mono text-[11px] font-bold text-[#971F26] uppercase block">
              2. CHILDREN&apos;S ADVOCACY CENTER (CAC) FRAMEWORK
            </span>
            <p className="leading-relaxed">
              Texas Family Code § 264.403 requires participating DFPS, law enforcement, and prosecutorial agencies to execute formal MOUs. § 264.4031 establishes working protocols for referral criteria, intake processes, timely information exchange, case tracking, and confidentiality.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2">
            <span className="font-mono text-[11px] font-bold text-[#971F26] uppercase block">
              3. MULTIDISCIPLINARY TEAMS & BOUNDED EXCHANGE
            </span>
            <p className="leading-relaxed">
              Texas Family Code § 264.406 mandates Multidisciplinary Teams (MDTs) coordinate participating agencies and periodically review appropriate cases. § 264.406(e) expressly authorizes MDT members to exchange defined confidential information within that statutory framework.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2">
            <span className="font-mono text-[11px] font-bold text-[#971F26] uppercase block">
              4. INTERLOCAL COOPERATION ACT PILOT VEHICLE
            </span>
            <p className="leading-relaxed">
              Texas Government Code §§ 791.003 & 791.011 authorize local governmental entities to execute interlocal cooperation contracts for police protection, public health/welfare, and records. <em>Important limitation:</em> Chapter 791 is a vehicle for administrative pilots, not independent authorization to share confidential records. Every data exchange requires subject-specific confidentiality review.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Primary Authority Source Register Table */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#971F26]">
              <BookOpen className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                PRIMARY AUTHORITY SOURCE REGISTER
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Texas & Federal Statutory Basis
            </h2>
          </div>
          <span className="px-3 py-1 bg-[#EEE8DD] border border-stone-400 rounded text-xs font-mono text-stone-700 font-bold">
            Last reviewed: October 2026
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1C1D1D] bg-[#EEE8DD]">
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">Claim / Proposition</th>
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">Primary Authority</th>
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">Why it Matters to MWT</th>
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">Review Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9D1C4] font-sans">
              {precedentSources.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/60 transition-colors">
                  <td className="p-3 font-bold text-stone-900 leading-snug">
                    {item.claim}
                  </td>
                  <td className="p-3 font-mono font-bold text-[#971F26] whitespace-nowrap">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      <span>{item.authority}</span>
                      <ExternalLink className="w-3 h-3 text-stone-500" />
                    </a>
                  </td>
                  <td className="p-3 text-stone-800 leading-relaxed text-[11.5px]">
                    {item.relevance}
                  </td>
                  <td className="p-3 font-mono text-[11px] text-stone-600 whitespace-nowrap">
                    {item.dateReviewed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Visual Comparison: Current State vs. Proposed State Policy */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm bg-grid-diagram">
        <div className="border-b border-[#D9D1C4] pb-4 space-y-1">
          <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider">
            POLICY ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Current-State vs. Proposed-State Policy Architecture
          </h2>
          <p className="text-stone-800 text-sm font-sans">
            How a standardized cross-system continuity layer transforms fragmented administrative seams into accountable handoffs.
          </p>
        </div>

        <div className="space-y-4">
          {currentVsProposed.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-4 sm:p-5 shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <span className="font-serif font-bold text-base text-[#1C1D1D]">
                  {idx + 1}. {item.dimension}
                </span>
                <span className="text-[10px] font-mono text-stone-600 font-bold uppercase">
                  DIMENSION COMPARISON
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-3 bg-[#FDF2F2] border border-[#971F26]/30 rounded-lg space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#971F26] uppercase block">
                    CURRENT STATE (SEAM DEFICIT)
                  </span>
                  <p className="text-stone-800 leading-relaxed">
                    {item.current}
                  </p>
                </div>

                <div className="p-3 bg-[#E8F3EB] border border-[#2D5A3D]/40 rounded-lg space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#2D5A3D] uppercase block">
                    PROPOSED STATE (CONTINUITY PROTOCOL)
                  </span>
                  <p className="text-stone-800 leading-relaxed">
                    {item.proposed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 90-Day Continuity Mechanics Pilot Specification */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase bg-[#2D5A3D] text-white px-2.5 py-1 rounded">
              PILOT SPECIFICATION
            </span>
            <span className="text-xs font-mono text-stone-600 font-bold">[METHOD: NARROW REFERRAL MECHANICS FIRST]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            90-Day Continuity Mechanics Pilot
          </h2>
          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed">
            A small, high-feasibility operational pilot. We are not starting with police + DFPS + court + school on day one. Instead, we prove that a single referral pathway can reliably arrive, acknowledge receipt, bind a next decision owner, and avoid loss.
          </p>
        </div>

        {/* Scope Cards */}
        <div className="grid md:grid-cols-3 gap-5 text-xs font-mono">
          <div className="p-4 bg-[#EEE8DD] rounded-xl border border-stone-300 space-y-2">
            <span className="font-bold text-[#971F26] uppercase block">PARTICIPANTS</span>
            <p className="font-sans text-stone-800 text-xs">
              <strong>2–3 Organizations</strong> (e.g. Victim-service navigator → civil legal-aid intake, or community organization → victim-services provider).
            </p>
          </div>

          <div className="p-4 bg-[#EEE8DD] rounded-xl border border-stone-300 space-y-2">
            <span className="font-bold text-[#971F26] uppercase block">DATA PRIVACY</span>
            <p className="font-sans text-stone-800 text-xs">
              <strong>Phase 1: 100% Synthetic Data.</strong> Test schemas and handoff mechanics without any live survivor PII.
            </p>
          </div>

          <div className="p-4 bg-[#EEE8DD] rounded-xl border border-stone-300 space-y-2">
            <span className="font-bold text-[#971F26] uppercase block">PATHWAY & FLOW</span>
            <p className="font-sans text-stone-800 text-xs">
              <strong>Single Referral Type:</strong> Referral sent → receipt → acknowledgment → ownership → disposition.
            </p>
          </div>
        </div>

        {/* 6 Quantitative Metrics Table */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold uppercase text-[#971F26] block">
            CORE PILOT MEASUREMENT METRICS
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            {pilotMetrics.map((m, idx) => (
              <div key={idx} className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1">
                <span className="text-stone-500 text-[10px] block font-bold uppercase">{m.metric}</span>
                <span className="text-base font-bold text-[#1C1D1D]">{m.target}</span>
                <span className="text-[11px] text-stone-600 block font-sans">{m.question}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-[#EEE8DD] rounded-xl border border-[#1C1D1D] text-xs font-mono text-stone-800 space-y-1">
          <strong className="text-stone-950 uppercase block">NEXT STEP EXPANSION:</strong>
          <p className="font-sans text-stone-700 leading-relaxed">
            After proving referral delivery mechanics in this narrow 90-day pilot, expand into legal/privacy testing of linked-matter and cumulative-review modules.
          </p>
        </div>
      </section>

      {/* 6. Official Unresolved Governance Design Questions */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              GOVERNANCE & DATA SOVEREIGNTY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Official Unresolved Governance Design Questions
          </h2>
          <p className="text-stone-800 text-sm font-sans">
            The difficult part of cross-system continuity is not storing data—it is governing power over data. We treat these core design questions as open public-interest inquiries for legal and privacy stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-xs">
          {unresolvedDesignQuestions.map((q, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="font-mono font-bold text-[#971F26] uppercase block text-[10px]">
                  0{idx + 1} · {q.title}
                </span>
                <p className="font-serif font-bold text-sm text-[#1C1D1D] leading-snug">
                  {q.question}
                </p>
              </div>
              <p className="font-sans text-stone-700 text-[11px] leading-relaxed pt-2 border-t border-stone-300">
                {q.rationale}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Realistic 4-Tier Adoption Path Table */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <GitBranch className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              INCREMENTAL ADOPTION PATHWAYS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Why Maps With Teeth Does Not Require One Giant Bill
          </h2>
          <p className="text-stone-800 text-sm font-sans">
            There are pieces that can be piloted administratively today and pieces for which statewide legislation becomes the eventual mechanism.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1C1D1D] bg-[#EEE8DD]">
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">Module</th>
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">Agency Practice</th>
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">Local / Interlocal Pilot</th>
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">Sunset Recommendation</th>
                <th className="p-3 font-bold text-[#1C1D1D] uppercase">State Legislation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9D1C4] font-sans">
              {adoptionMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/60 transition-colors">
                  <td className="p-3 font-mono font-bold text-[#1C1D1D] whitespace-nowrap">
                    {row.module}
                  </td>
                  <td className="p-3 text-stone-800 text-[11.5px]">
                    {row.agencyPractice}
                  </td>
                  <td className="p-3 text-stone-800 text-[11.5px]">
                    {row.interlocalPilot}
                  </td>
                  <td className="p-3 text-stone-800 font-bold text-[11.5px]">
                    {row.sunsetRec}
                  </td>
                  <td className="p-3 text-[#971F26] font-bold text-[11.5px]">
                    {row.stateLegislation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sunset Advisory Commission Timeliness Callout */}
        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl flex items-start gap-3">
          <Calendar className="w-5 h-5 text-[#971F26] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <span className="font-mono font-bold text-[#971F26] uppercase block">
              TEXAS SUNSET TIMELINESS (DFPS REVIEW 2026–2027)
            </span>
            <p className="font-sans text-stone-800 leading-relaxed">
              DFPS is currently under review by the Texas Sunset Advisory Commission and scheduled for public testimony on <strong>November 18, 2026</strong>. Maps With Teeth is formulating systemic testimony focused on closed-loop referral accountability and context-before-closure audits.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Related Systems Analysis & Policy Papers */}
      {relatedArticles.length > 0 && (
        <section className="space-y-6">
          <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-[#971F26] font-bold tracking-wider block">
                POLICY LAB PAPERS & FIELD NOTES
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
                Related Analysis
              </h2>
            </div>
            <Link
              href="/writing"
              className="text-xs font-mono font-bold text-[#971F26] hover:underline uppercase inline-flex items-center gap-1"
            >
              <span>View All Field Notes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 9. Evidentiary Safeguards & Traceability Callout */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm font-sans">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Scale className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED DESIGN SAFEGUARD
            </span>
          </div>
          <span className="coord-tick">[EVIDENTIARY INTEGRITY]</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Evidence Integrity &amp; Administrative Traceability
          </h3>
          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
            Continuity does not mean believing every report without scrutiny or aggregating accusations into a central dossier. Review our 8 cross-cutting safeguards, 9 Review Trace administrative disposition categories, and 7 locked principles of evidence integrity.
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

      {/* 10. Policy & Implementation Resources */}
      <ResourceMaterialsBlock />

      {/* 11. Partner & Policy Review CTA */}
      <section className="bg-[#1C1D1D] text-white rounded-2xl p-6 sm:p-10 space-y-6 shadow-md font-sans">
        <div className="space-y-2 border-b border-stone-700 pb-4">
          <span className="text-xs font-mono uppercase text-[#971F26] font-bold tracking-widest block">
            INVITATION FOR POLICYMAKERS & SCHOLARS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Collaborate on Policy & Systems Architecture
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm font-sans">
            We welcome policy analysts, legislative directors, judicial administrators, and academic researchers to pressure-test our statutory analyses, review draft pilot specifications, and co-design closed-loop protocols.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-stone-400">CONTACT: policy@mapswithteeth.org</span>
          <Link
            href="/for-partners"
            className="px-6 py-3 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-bold uppercase tracking-wider transition-colors"
          >
            Explore Partnership Roles →
          </Link>
        </div>
      </section>
    </div>
  );
}
