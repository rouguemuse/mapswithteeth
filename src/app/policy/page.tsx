"use client";

import React from "react";
import Link from "next/link";
import {
  Scale,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Calendar,
  ExternalLink,
  Shield,
  GitBranch,
} from "lucide-react";
import { getPolicyLabRelatedArticles } from "@/domain/writing/queries";
import { ArticleCard } from "@/components/writing/ArticleCard";
import { ResourceMaterialsBlock } from "@/components/safeguards/ResourceMaterialsBlock";
import { IntegrationLayerReformSection } from "@/components/policy/IntegrationLayerReformSection";
import { PolicyEngagementSection } from "@/components/policy/PolicyEngagementSection";
import { FourTierDistinctionInventory } from "@/components/shared/FourTierDistinctionInventory";
import { EditorialDisclosure } from "@/components/shared/EditorialDisclosure";

export default function PolicyLabPage() {
  const relatedArticles = getPolicyLabRelatedArticles();

  const precedentSources = [
    {
      claim: "DFPS and law enforcement already conduct certain joint investigations",
      authority: "Tex. Fam. Code §§ 261.301(f), 261.3011",
      dateReviewed: "October 2026",
      relevance:
        "Establishes Texas statutory precedent for defined cross-agency roles, mutual agreements, and joint guidelines.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Value=261.001",
    },
    {
      claim: "CAC participants operate under formalized interagency MOUs",
      authority: "Tex. Fam. Code § 264.403",
      dateReviewed: "October 2026",
      relevance:
        "Direct precedent for formalized interagency cooperation between DFPS, local law enforcement, and prosecutors.",
      url: "https://statutes.capitol.texas.gov/?artSec=264.181&chapter=FA.264&code=FA&tab=1",
    },
    {
      claim:
        "CAC working protocols govern referrals, intake, timely information exchange, case review and tracking",
      authority: "Tex. Fam. Code § 264.4031",
      dateReviewed: "October 2026",
      relevance:
        "Very close Texas precedent for several MWT continuity modules (intake, tracking, information exchange, conflict resolution).",
      url: "https://statutes.capitol.texas.gov/?artSec=264.181&chapter=FA.264&code=FA&tab=1",
    },
    {
      claim: "Multidisciplinary Teams (MDTs) coordinate agencies and conduct recurring case review",
      authority: "Tex. Fam. Code § 264.406",
      dateReviewed: "October 2026",
      relevance:
        "Statutory precedent for cumulative case review rather than isolated incident handling.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Date=4%2F16%2F2025&Value=264.166",
    },
    {
      claim: "Authorized MDT members may exchange defined confidential information",
      authority: "Tex. Fam. Code § 264.406(e)",
      dateReviewed: "October 2026",
      relevance:
        "Demonstrates that Texas already creates bounded, lawful information-sharing authority within defined multidisciplinary frameworks.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Date=4%2F16%2F2025&Value=264.166",
    },
    {
      claim: "Governmental entities can use interlocal cooperation contracts",
      authority: "Tex. Gov't Code §§ 791.003, 791.011",
      dateReviewed: "October 2026",
      relevance:
        "Potential administrative structure for a narrowly designed local pilot. (Note: potential vehicle for a pilot, not independent authorization to share confidential records; every exchange requires subject-specific review).",
      url: "https://statutes.capitol.texas.gov/Docs/GV/pdf/GV.791.pdf",
    },
    {
      claim: "Protective-order information already moves into statewide law-enforcement systems",
      authority: "Tex. Fam. Code § 86.0011; Tex. Code Crim. Proc. Art. 7B.104",
      dateReviewed: "October 2026",
      relevance:
        "Demonstrates existing statewide continuity infrastructure for specific civil/criminal safety information.",
      url: "https://statutes.capitol.texas.gov/Docs/FA/pdf/FA.86.pdf",
    },
    {
      claim: "Family-violence reports must be retrievable and officers must have PO access",
      authority: "Tex. Code Crim. Proc. Art. 5.06",
      dateReviewed: "October 2026",
      relevance:
        "Narrow statutory precedent requiring local law enforcement agencies to maintain retrievable family-violence incident records.",
      url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=CR&Value=5.06",
    },
    {
      claim: "Early residential lease termination for family violence without penal fee",
      authority: "Tex. Prop. Code § 92.016",
      dateReviewed: "October 2026",
      relevance:
        "Statutory tenant relief right based on advocate documentation, protective orders, or medical records.",
      url: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
    },
    {
      claim: "Utility security deposit waiver across deregulated Texas electric markets",
      authority: "16 TAC § 25.478",
      dateReviewed: "October 2026",
      relevance:
        "Mandatory waiver of retail electric deposit upon certified advocate verification.",
      url: "https://www.puc.texas.gov",
    },
    {
      claim: "Federal mobile telecommunication line separation for survivors",
      authority: "47 U.S.C. § 345 (Safe Connections Act)",
      dateReviewed: "October 2026",
      relevance:
        "Mandates mobile carriers complete line separation within two business days upon qualifying submission.",
      url: "https://www.fcc.gov",
    },
    {
      claim: "Strict federal non-disclosure and confidentiality protections for victim services",
      authority: "34 U.S.C. § 12291(b)(2) (VAWA Confidentiality)",
      dateReviewed: "October 2026",
      relevance:
        "Prohibits sharing personally identifying survivor information without informed, written, time-limited consent.",
      url: "https://www.justice.gov/ovw",
    },
  ];

  const currentVsProposed = [
    {
      dimension: "Outbound Referrals",
      current:
        "Referral ends at 'sent' (email or paper slip); sending agency closes file under 'referred out' with zero receipt confirmation.",
      proposed:
        "Closed-loop protocol requires electronic acknowledgment, capacity confirmation, and handler assignment (PILOT SERVICE TARGET — receiving acknowledgment within 48 hours. This is a proposed pilot benchmark, not an existing statutory requirement).",
    },
    {
      dimension: "Cross-Jurisdiction Context",
      current:
        "Adjacent municipal and county agencies operate in blind silos; cumulative stalking across county lines treated as isolated occurrences.",
      proposed:
        "Linked-matter review generates investigative signals prompting authorized officers to lawfully request existing records.",
    },
    {
      dimension: "Fragmented Risk Patterns",
      current:
        "Minor individual encounters screened out repeatedly without supervisory awareness of parallel filings in family court or schools.",
      proposed:
        "Deterministic cumulative review triggers mandate supervisory or multidisciplinary elevation after 3 encounters in 90 days.",
    },
    {
      dimension: "Decision Ownership",
      current:
        "Responsibility disappears between agencies; survivor left navigating circular 'talk to the other department' runarounds.",
      proposed:
        "Explicit decision owner and milestone deadline bound to every handoff stage until accepted by a successor entity.",
    },
    {
      dimension: "Case Closure Auditing",
      current:
        "Cases closed unilaterally as 'unsubstantiated' without checking whether critical evidence was held by neighboring departments.",
      proposed:
        "Pre-closure accountability checklist documents what related records were examined, what was unreviewed, and closing rationale.",
    },
    {
      dimension: "Survivor Documentation Burden",
      current:
        "Survivor acts as the sole integration layer, forced to carry paper folders and retell traumatic history at every intake door.",
      proposed:
        "Survivor holds portable, client-side Continuity Contact Records with SHA-256 baseline digests and segregated material review logs.",
    },
  ];

  const pilotMetrics = [
    {
      metric: "Acknowledgment Rate",
      question: "Did somebody confirm receipt?",
      target: "> 95% Rate",
    },
    {
      metric: "Time to Acknowledgment",
      question: "How long before confirmation?",
      target: "Pilot Target: < 48 Hours (Proposed Benchmark)",
    },
    {
      metric: "Decision-Owner Rate",
      question: "Is one next responsible actor identifiable?",
      target: "100% Assigned (Design Target)",
    },
    {
      metric: "Re-Referral Rate",
      question: "How often is the participant bounced onward?",
      target: "Measured & Tracked",
    },
    {
      metric: "Repeat-Intake Rate",
      question: "How often must the same facts be re-entered?",
      target: "Minimized",
    },
    {
      metric: "Lost-Handoff Rate",
      question: "How often does no receiving owner emerge?",
      target: "Target: 0% (Proposed 14d Pilot Flag)",
    },
  ];

  const unresolvedDesignQuestions = [
    {
      title: "Record Control",
      question:
        "Participant-held by default? When does an agency copy become its own public record?",
      rationale:
        "Ensuring survivor retains data sovereignty client-side without unintentionally triggering public-record retention laws until an agency formally acts.",
    },
    {
      title: "Acknowledgment Scope",
      question:
        "How to ensure agency acknowledgment addresses only specifically marked administrative handling facts, never the participant's broader narrative?",
      rationale:
        "Protecting frontline intake staff from whole-matter representation liability or pretend evidentiary determinations.",
    },
    {
      title: "Correction Integrity",
      question: "How to handle disputed or corrected intake facts?",
      rationale:
        "Prefer append-only versioned correction history instead of silently overwriting or erasing prior finalized records.",
    },
    {
      title: "Linked Matters Privacy",
      question:
        "What minimum signal can be conveyed without disclosing underlying confidential information?",
      rationale:
        "Transmitting purely a cryptographic presence signal prompting lawful interagency inquiry rather than leaking private allegation text.",
    },
    {
      title: "Retention Limits",
      question: "What are the strict expiration and retention boundaries for handoff metadata?",
      rationale:
        "Zero indefinite data hoarding simply because cloud storage is cheap. Enforcing bounded lifecycles on all routing records.",
    },
    {
      title: "Deletion & Expungement",
      question:
        "How is participant-controlled deletion defined separately from government records legally retained elsewhere?",
      rationale:
        "Participant can delete their personal device vault at will, while agency-held administrative files remain subject to statutory record retention schedules.",
    },
    {
      title: "Discovery & Legal Process",
      question: "How to clearly set expectations around subpoenas and court orders?",
      rationale:
        "Never promise that participant-held records are immune from subpoena, discovery, court order, or other lawful process.",
    },
    {
      title: "Misuse & Anti-Surveillance",
      question: "How to structurally prevent weaponization or discriminatory targeting?",
      rationale:
        "Absolute prohibition on perpetrator lists, public accusation graphs, public individual heatmaps, credibility scores, or automated dangerousness scoring.",
    },
    {
      title: "Minimum Necessary Standard",
      question: "How to restrict information flow during interagency transfers?",
      rationale:
        "A receiving party gets strictly the smallest amount of administrative metadata necessary to accomplish the defined referral handoff.",
    },
  ];

  const adoptionMatrix = [
    {
      module: "02 Closed-Loop Referral",
      agencyPractice: "✅ Adoptable via internal SOP",
      interlocalPilot: "✅ Multi-agency MOU",
      sunsetRec: "✅ DFPS/HHSC reporting metric",
      stateLegislation: "Could mandate statewide",
    },
    {
      module: "03 Continuity Receipt",
      agencyPractice: "✅ Prototype (Client-side)",
      interlocalPilot: "✅ Pilot testing",
      sunsetRec: "✅ Standard practice recommendation",
      stateLegislation: "Could standardize statewide",
    },
    {
      module: "05 Decision Ownership",
      agencyPractice: "✅ Internal workflow assignment",
      interlocalPilot: "✅ Designated handoff lead",
      sunsetRec: "✅ Referral ownership requirement",
      stateLegislation: "Could mandate across agencies",
    },
    {
      module: "06 Context Before Closure",
      agencyPractice: "✅ Internally feasible checklist",
      interlocalPilot: "✅ Pilot evaluation",
      sunsetRec: "Strong Sunset fit (Closure audit)",
      stateLegislation: "Could mandate statutory pre-closure check",
    },
    {
      module: "04 Cumulative Review",
      agencyPractice: "Some internal supervisory use",
      interlocalPilot: "Possible within existing authority",
      sunsetRec: "Strong Sunset fit (Multi-contact review)",
      stateLegislation: "Needed for broad uniform mandate",
    },
    {
      module: "01 Linked-Matter Review",
      agencyPractice: "Limited internally",
      interlocalPilot: "Depends heavily on authority",
      sunsetRec: "Recommend study / pilot",
      stateLegislation: "Likely legislative territory for broad cross-system duty",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-14 select-none font-sans">
      {/* 1. Header & Geographic Framing */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Scale className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              TEXAS POLICY &amp; SYSTEMS LAB · PUBLIC-INTEREST RESEARCH
            </span>
          </div>
          <span className="coord-tick">
            [JURISDICTION: TEXAS 254 COUNTIES · FIELD VALIDATION: CENTRAL TX]
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
            Building the Bridges Between Existing Systems
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#971F26] uppercase font-bold">
            Statewide Statutory Mapping + Field Validation in Central Texas (Williamson, Travis, Bastrop, Burnet, Hays)
          </p>
        </div>

        {/* Central Thesis Callout (GOV.UK Left-Rule Margin Note) */}
        <div className="mwt-callout-urgent space-y-2">
          <p className="text-sm sm:text-lg font-serif italic text-stone-900 leading-relaxed font-semibold">
            &ldquo;The problem is not always that information does not exist. Sometimes it exists in five places, under five identifiers, with five separate decision-makers, and no mechanism requiring anyone to recognize the relationship between them.&rdquo;
          </p>
          <p className="text-xs font-mono uppercase tracking-wider text-stone-800 font-bold">
            Maps With Teeth does not propose merging those five systems. It asks what minimum continuity must survive when responsibility crosses from one to another.
          </p>
        </div>

        {/* Policy Page Section Jump Bar */}
        <nav aria-label="Policy Lab Sections" className="pt-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-2 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg text-[11px] sm:text-xs font-mono">
            <span className="font-bold text-stone-700 px-1.5 uppercase">Jump to:</span>
            <a
              href="#policy-distinction-inventory"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              1. 4-Tier Boundaries
            </a>
            <a
              href="#integration-layer-reform"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              2. 7 Reform Proposals
            </a>
            <a
              href="#policy-engagement"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              3. Engagement Registry
            </a>
            <a
              href="#statutory-register"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              4. TX Legal Precedents (12)
            </a>
            <a
              href="#incremental-adoption"
              className="px-2.5 py-1 bg-[#F5F1E8] hover:bg-white text-[#1C1D1D] hover:text-[#971F26] border border-[#D9D1C4] rounded font-bold transition"
            >
              5. Sunset &amp; Pilot Matrix
            </a>
          </div>
        </nav>
      </div>

      {/* 2. Prominent Four-Tier Distinction Inventory (Phase 3 Requirement) */}
      <FourTierDistinctionInventory id="policy-distinction-inventory" compact />

      {/* 3. Flagship Policy Reform Initiative: When the Human Becomes the Integration Layer */}
      <IntegrationLayerReformSection />

      {/* 4. Source-Backed Policy Engagement, Oversight Registry & Concrete Applications */}
      <PolicyEngagementSection />

      {/* 5. The Core Defensible Position: Texas Multidisciplinary Precedents (Level 1) + Source Register (Level 2) */}
      <section
        id="statutory-register"
        className="scroll-mt-36 lg:scroll-mt-28 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-5 sm:p-8 space-y-6 shadow-sm bg-grid-diagram"
      >
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
          <p className="text-stone-800 text-xs sm:text-base font-sans leading-relaxed">
            <strong>
              Maps With Teeth is not proposing that Texas invent multidisciplinary continuity. Texas already uses it.
            </strong>{" "}
            MWT asks where equivalent continuity is absent when related matters cross systems, jurisdictions, or program boundaries outside those defined structures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3.5 text-xs font-sans text-stone-800">
          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-1.5">
            <span className="font-mono text-[11px] font-bold text-[#971F26] uppercase block">
              1. JOINT DFPS &amp; LAW ENFORCEMENT INVESTIGATIONS
            </span>
            <p className="leading-relaxed">
              Texas Family Code § 261.301(f) requires certain serious child-abuse/neglect investigations to be conducted jointly by DFPS and local law enforcement. § 261.3011 separately requires DFPS and law enforcement to develop joint-investigation guidelines, clarify roles, implement mutual agreements, and collaborate on joint training.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-1.5">
            <span className="font-mono text-[11px] font-bold text-[#971F26] uppercase block">
              2. CHILDREN&apos;S ADVOCACY CENTER (CAC) FRAMEWORK
            </span>
            <p className="leading-relaxed">
              Texas Family Code § 264.403 requires participating DFPS, law enforcement, and prosecutorial agencies to execute formal MOUs. § 264.4031 establishes working protocols for referral criteria, intake processes, timely information exchange, case tracking, and confidentiality.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-1.5">
            <span className="font-mono text-[11px] font-bold text-[#971F26] uppercase block">
              3. MULTIDISCIPLINARY TEAMS &amp; BOUNDED EXCHANGE
            </span>
            <p className="leading-relaxed">
              Texas Family Code § 264.406 mandates Multidisciplinary Teams (MDTs) coordinate participating agencies and periodically review appropriate cases. § 264.406(e) expressly authorizes MDT members to exchange defined confidential information within that statutory framework.
            </p>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-1.5">
            <span className="font-mono text-[11px] font-bold text-[#971F26] uppercase block">
              4. INTERLOCAL COOPERATION ACT PILOT VEHICLE
            </span>
            <p className="leading-relaxed">
              Texas Government Code §§ 791.003 &amp; 791.011 authorize local governmental entities to execute interlocal cooperation contracts for police protection, public health/welfare, and records.{" "}
              <em>Important limitation:</em> Chapter 791 is a vehicle for administrative pilots, not independent authorization to share confidential records. Every data exchange requires subject-specific confidentiality review.
            </p>
          </div>
        </div>

        {/* Level 2 Disclosure: Primary Authority Source Register (12 Statutes) */}
        <EditorialDisclosure
          kicker="LEVEL 2 · STATUTORY REFERENCE REGISTER"
          title="Inspect the 12-Statute Primary Authority Source Register (Texas & Federal)"
          summary="Complete table of Texas Family Code, Property Code, Government Code, Code of Criminal Procedure, PUC 16 TAC § 25.478, Safe Connections Act, and VAWA confidentiality citations."
          badge="12 STATUTORY SOURCES"
          variant="light"
        >
          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-2.5">
            {precedentSources.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-stone-300 rounded-lg space-y-1.5 text-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-[#971F26] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{item.authority}</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                  <span className="font-mono text-[10px] text-stone-500">{item.dateReviewed}</span>
                </div>
                <p className="font-bold text-stone-900 leading-snug">{item.claim}</p>
                <p className="text-stone-700 leading-relaxed text-[11.5px]">{item.relevance}</p>
              </div>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1C1D1D] bg-[#EEE8DD]">
                  <th className="p-3 font-bold text-[#1C1D1D] uppercase">Claim / Proposition</th>
                  <th className="p-3 font-bold text-[#1C1D1D] uppercase">Primary Authority</th>
                  <th className="p-3 font-bold text-[#1C1D1D] uppercase">Why it Matters to MWT</th>
                  <th className="p-3 font-bold text-[#1C1D1D] uppercase">Review Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9D1C4] font-sans bg-white">
                {precedentSources.map((item, idx) => (
                  <tr key={idx} className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 font-bold text-stone-900 leading-snug">{item.claim}</td>
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
        </EditorialDisclosure>
      </section>

      {/* 6. Incremental Adoption & Texas Sunset Window + Level 2 Deep Dives */}
      <section
        id="incremental-adoption"
        className="scroll-mt-36 lg:scroll-mt-28 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-5 sm:p-8 space-y-5 shadow-sm"
      >
        <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <GitBranch className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              INCREMENTAL ADOPTION &amp; EVALUATION ARCHITECTURE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Why Maps With Teeth Does Not Require One Giant Bill
          </h2>
          <p className="text-stone-800 text-xs sm:text-sm font-sans">
            Modules can be adopted via internal SOPs today, tested in 90-day synthetic Interlocal pilots, incorporated into Sunset Commission management recommendations, or codified by statute.
          </p>
        </div>

        {/* Sunset Advisory Commission Timeliness Callout — Always Visible at Level 1 */}
        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl flex items-start gap-3">
          <Calendar className="w-5 h-5 text-[#971F26] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <span className="font-mono font-bold text-[#971F26] uppercase block">
              TEXAS SUNSET TIMELINESS (DFPS REVIEW 2026–2027 · RESCHEDULED DEC 2–3, 2026)
            </span>
            <p className="font-sans text-stone-800 leading-relaxed">
              DFPS is currently under review by the Texas Sunset Advisory Commission. Per the Commission&apos;s official schedule notice, the tentative November 18–19 Sunset meeting has been rescheduled for <strong>December 2–3, 2026</strong> (Public Hearing on December 2; Decision Meeting on December 3), with the DFPS Self-Evaluation Report published (Oct 2025) and the Sunset Staff Report pending publication. Maps With Teeth has submitted independent public input via the official Sunset input portal focused on closed-loop referral accountability and context-before-closure audits; individual witness appearance or testimony is not confirmed, and no institutional adoption is claimed.
            </p>
          </div>
        </div>

        {/* Level 2 Disclosures for Adoption Matrix, Current-vs-Proposed, 90-Day Pilot, and 9 Governance Questions */}
        <div className="space-y-3">
          <EditorialDisclosure
            kicker="LEVEL 2 · 4-TIER ADOPTION MATRIX"
            title="Inspect the 6-Module Incremental Adoption Path Matrix"
            summary="Compares how each of the 6 continuity modules maps across Agency SOP, Interlocal Pilot, Sunset Recommendation, and State Legislation."
            badge="6 MODULES × 4 TIERS"
            variant="light"
          >
            {/* Mobile Cards */}
            <div className="md:hidden space-y-2.5">
              {adoptionMatrix.map((row, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white border border-stone-300 rounded-lg space-y-1.5 text-xs"
                >
                  <div className="font-mono font-bold text-[#1C1D1D] border-b border-stone-200 pb-1">
                    {row.module}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="font-mono text-[9.5px] uppercase text-stone-500 block">
                        Agency SOP:
                      </span>
                      <span className="text-stone-800">{row.agencyPractice}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9.5px] uppercase text-stone-500 block">
                        Interlocal Pilot:
                      </span>
                      <span className="text-stone-800">{row.interlocalPilot}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9.5px] uppercase text-stone-500 block">
                        Sunset Rec:
                      </span>
                      <span className="font-bold text-stone-900">{row.sunsetRec}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9.5px] uppercase text-stone-500 block">
                        Statute:
                      </span>
                      <span className="font-bold text-[#971F26]">{row.stateLegislation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1C1D1D] bg-[#EEE8DD]">
                    <th className="p-3 font-bold text-[#1C1D1D] uppercase">Module</th>
                    <th className="p-3 font-bold text-[#1C1D1D] uppercase">Agency Practice</th>
                    <th className="p-3 font-bold text-[#1C1D1D] uppercase">
                      Local / Interlocal Pilot
                    </th>
                    <th className="p-3 font-bold text-[#1C1D1D] uppercase">
                      Sunset Recommendation
                    </th>
                    <th className="p-3 font-bold text-[#1C1D1D] uppercase">State Legislation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9D1C4] font-sans bg-white">
                  {adoptionMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 transition-colors">
                      <td className="p-3 font-mono font-bold text-[#1C1D1D] whitespace-nowrap">
                        {row.module}
                      </td>
                      <td className="p-3 text-stone-800 text-[11.5px]">{row.agencyPractice}</td>
                      <td className="p-3 text-stone-800 text-[11.5px]">{row.interlocalPilot}</td>
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
          </EditorialDisclosure>

          <EditorialDisclosure
            kicker="LEVEL 2 · ARCHITECTURAL COMPARISON"
            title="Inspect Current-State vs. Proposed-State Policy Comparison (6 Dimensions)"
            summary="Side-by-side comparison of Outbound Referrals, Cross-Jurisdiction Context, Fragmented Risk Patterns, Decision Ownership, Case Closure Auditing, and Survivor Documentation Burden."
            badge="6 DIMENSIONS"
            variant="light"
          >
            <div className="space-y-3">
              {currentVsProposed.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-stone-300 rounded-lg p-4 space-y-2.5"
                >
                  <div className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D] border-b border-stone-200 pb-1.5">
                    {idx + 1}. {item.dimension}
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-xs font-sans">
                    <div className="p-3 bg-[#FDF2F2] border border-[#971F26]/30 rounded space-y-1">
                      <span className="font-mono text-[10px] font-bold text-[#971F26] uppercase block">
                        CURRENT STATE (SEAM DEFICIT)
                      </span>
                      <p className="text-stone-800 leading-relaxed">{item.current}</p>
                    </div>
                    <div className="p-3 bg-[#E8F3EB] border border-[#2D5A3D]/40 rounded space-y-1">
                      <span className="font-mono text-[10px] font-bold text-[#2D5A3D] uppercase block">
                        PROPOSED STATE (CONTINUITY PROTOCOL)
                      </span>
                      <p className="text-stone-800 leading-relaxed">{item.proposed}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </EditorialDisclosure>

          <EditorialDisclosure
            kicker="LEVEL 2 · PILOT SPECIFICATION"
            title="Inspect the 90-Day Continuity Mechanics Pilot & 6 Evaluation Targets"
            summary="Phase 1 uses 100% synthetic demonstration data across 2–3 organizations to evaluate referral arrival, 48-hour acknowledgment targets, and decision-owner assignment."
            badge="90-DAY SYNTHETIC PILOT"
            variant="light"
          >
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-3.5 text-xs font-mono">
                <div className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1">
                  <span className="font-bold text-[#971F26] uppercase block">PARTICIPANTS</span>
                  <p className="font-sans text-stone-800 text-xs">
                    <strong>2–3 Organizations</strong> (e.g. Victim-service navigator → civil legal-aid intake).
                  </p>
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1">
                  <span className="font-bold text-[#971F26] uppercase block">DATA PRIVACY</span>
                  <p className="font-sans text-stone-800 text-xs">
                    <strong>Phase 1: 100% Synthetic Data.</strong> Test schemas and handoff mechanics without any live survivor PII.
                  </p>
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1">
                  <span className="font-bold text-[#971F26] uppercase block">PATHWAY &amp; FLOW</span>
                  <p className="font-sans text-stone-800 text-xs">
                    <strong>Single Referral Type:</strong> Referral sent → receipt → acknowledgment → ownership → disposition.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
                {pilotMetrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-lg border border-stone-300 space-y-1"
                  >
                    <span className="text-stone-500 text-[10px] block font-bold uppercase">
                      {m.metric}
                    </span>
                    <span className="text-sm font-bold text-[#1C1D1D] block">{m.target}</span>
                    <span className="text-[11px] text-stone-600 block font-sans">{m.question}</span>
                  </div>
                ))}
              </div>
            </div>
          </EditorialDisclosure>

          <EditorialDisclosure
            kicker="LEVEL 2 · GOVERNANCE & DATA SOVEREIGNTY"
            title="Inspect the 9 Official Unresolved Governance Design Questions"
            summary="Open public-interest inquiries covering Record Control, Acknowledgment Scope, Correction Integrity, Linked Matters Privacy, Retention, Deletion, Discovery/Subpoenas, Anti-Surveillance, and Minimum Necessary Flow."
            badge="9 OPEN QUESTIONS"
            variant="light"
          >
            <div className="grid md:grid-cols-3 gap-3.5 text-xs">
              {unresolvedDesignQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white border border-stone-300 rounded-lg space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="font-mono font-bold text-[#971F26] uppercase block text-[10px]">
                      0{idx + 1} · {q.title}
                    </span>
                    <p className="font-serif font-bold text-sm text-[#1C1D1D] leading-snug">
                      {q.question}
                    </p>
                  </div>
                  <p className="font-sans text-stone-700 text-[11px] leading-relaxed pt-2 border-t border-stone-200">
                    {q.rationale}
                  </p>
                </div>
              ))}
            </div>
          </EditorialDisclosure>
        </div>
      </section>

      {/* 7. Related Systems Analysis & Policy Papers */}
      {relatedArticles.length > 0 && (
        <section className="space-y-5">
          <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-[#971F26] font-bold tracking-wider block">
                POLICY LAB PAPERS &amp; FIELD NOTES
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

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 8. Policy & Implementation Resources (Includes Evidence Integrity & Traceability Standard) */}
      <ResourceMaterialsBlock />

      {/* 9. Partner & Policy Review CTA */}
      <section className="bg-[#1C1D1D] text-white rounded-2xl p-5 sm:p-8 space-y-5 shadow-md font-sans">
        <div className="space-y-2 border-b border-stone-700 pb-4">
          <span className="text-xs font-mono uppercase text-[#971F26] font-bold tracking-widest block">
            INVITATION FOR POLICYMAKERS &amp; SCHOLARS
          </span>
          <h2 className="text-xl sm:text-3xl font-serif font-bold">
            Collaborate on Policy &amp; Systems Architecture
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm font-sans">
            We welcome policy analysts, legislative directors, judicial administrators, and academic researchers to pressure-test our statutory analyses, review draft pilot specifications, and co-design closed-loop protocols.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-stone-400">CONTACT: policy@mapswithteeth.org</span>
          <Link
            href="/for-partners"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-bold uppercase tracking-wider transition-colors"
          >
            Explore Partnership Roles →
          </Link>
        </div>
      </section>
    </div>
  );
}
