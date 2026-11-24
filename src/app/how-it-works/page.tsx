import React from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  Layers,
  MapPin,
  Briefcase,
  Sparkles,
  Shuffle,
  FolderArchive,
  Fingerprint,
  Scale,
  Building,
  FileText,
  FileCheck,
  PhoneCall,
  Activity,
  GitBranch,
  ShieldAlert,
  AlertOctagon,
  Users,
  RefreshCw,
  Link2,
  Code2
} from "lucide-react";
import { ContinuityInterchangeSpecComponent } from "@/components/continuity/ContinuityInterchangeSpecComponent";
import { EditorialDisclosure } from "@/components/shared/EditorialDisclosure";

export const metadata = {
  title: "How Maps With Teeth Works: Public-Interest Continuity Framework",
  description:
    "System architecture and product model for Maps With Teeth. Principal model: Continuity Receipt. Supporting specification: Review Trace. Empirical research: Bad Maps.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How Maps With Teeth Works | Maps With Teeth",
    description:
      "System architecture and 8-question diagnostic method for Maps With Teeth: Continuity Receipt, Review Trace, and Bad Maps.",
    url: "https://www.mapswithteeth.org/how-it-works",
    siteName: "Maps With Teeth",
    type: "website",
  },
};

export default function HowItWorksPage() {
  const architecturalSteps = [
    {
      step: "01",
      name: "Navigate",
      deck: "Barrier-First Discovery & Statutory Protections",
      desc: "Evaluate reachable resources, enforceable statutory waivers (Texas Prop. Code § 92.016, 16 TAC § 25.478), lateral benevolence funds, and deterministic matching without generative guesswork.",
      status: "LIVE / ACTIVE",
      icon: Search,
      href: "/find-help"
    },
    {
      step: "02",
      name: "Preserve the Path",
      deck: "Participant-Held Continuity & Baseline Verification",
      desc: "Generate client-side Continuity Contact Records with SHA-256 baseline digests to carry context, presented exhibits, and decision ownership across institutional silos.",
      status: "PRINCIPAL MODEL",
      icon: FileCheck,
      href: "/continuity"
    },
    {
      step: "03",
      name: "Preserve the Review",
      deck: "Agency-Side Operational Review Trace Specification",
      desc: "Log standardized administrative handling metadata (Received, Accessible, Reviewed, Unreviewed Reason, Unavailable) without pre-judging substantive claim merits or inflating risk.",
      status: "SUPPORTING SPEC",
      icon: Activity,
      href: "/continuity/safeguards#review-trace"
    },
    {
      step: "04",
      name: "Identify the Seam",
      deck: "Closed-Loop Referrals & Responsibility Handoffs",
      desc: "Expose where referrals disappear (Sent ≠ Received), detect circular runaround loops, and explicitly document next decision ownership to eliminate the 'nobody's case' failure mode.",
      status: "PROTOTYPE SPEC",
      icon: AlertOctagon,
      href: "/the-gap"
    },
    {
      step: "05",
      name: "Test the Pattern Across Systems",
      deck: "Bad Maps Systems Research & Seam Measurement",
      desc: "Aggregate deidentified structural friction observations to pressure-test public administration, inform Sunset reviews, and generate structured legislative and oversight policy briefs.",
      status: "RESEARCH SPEC",
      icon: Layers,
      href: "/bad-maps"
    }
  ];

  const lockedDistinctions = [
    { left: "allegation", right: "evidence", note: "Unverified assertions never automatically elevate into substantiated facts." },
    { left: "repetition", right: "independent corroboration", note: "Repeating a single originating narrative across multiple case files does not constitute independent verification." },
    { left: "submission", right: "review", note: "Physical or digital receipt inside an agency does not establish that anyone substantively examined its contents." },
    { left: "notice", right: "proof", note: "Issuing an administrative notice or contact record does not substantiate underlying merits." },
    { left: "inability / barrier", right: "refusal", note: "Logistical hurdles, transportation deficits, phone cutoffs, trauma, or safety fears must never be recoded as willful refusal." },
    { left: "response", right: "consent", note: "Complying with an administrative intake demand does not constitute broad waiver of privacy or autonomy." },
    { left: "ownership", right: "authority", note: "Holding a routing task or paying a shared phone bill does not confer factual or communication-identity authority." },
    { left: "referral", right: "successful assistance", note: "Dispatching an email or reading a phone number aloud does not confirm receipt, capacity, or completed help." },
    { left: "observation", right: "disposition", note: "Logging an intake encounter or frontline observation is distinct from a formal legal or administrative ruling." },
    { left: "administrative closure", right: "factual exoneration", note: "Closing a file due to scope, capacity, or procedural limits does not resolve or disprove the underlying concern." }
  ];

  const crossJurisdictionSilos = [
    "School & McKinney-Vento Transport",
    "Municipal Police & County Sheriff",
    "Child Welfare (CPS / DFPS)",
    "Family & District Courts",
    "Protective Order Divisions",
    "Victim Services & Shelters",
    "Emergency Housing Authorities",
    "Civil Rights & Discrimination Intake",
    "State Administrative Complaints",
    "Healthcare & Emergency Medicine"
  ];

  const gapTaxonomyItems = [
    { name: "Receipt Gap", desc: "Originating entity transmitted referral; recipient has no record of intake." },
    { name: "Accessibility Gap", desc: "Record resides in agency repository but format/permissions prevent caseworker access." },
    { name: "Review Gap", desc: "Record was accessible in the file but unexamined prior to disposition." },
    { name: "Handoff Gap", desc: "Sent referral was never acknowledged, accepted, or declined by destination." },
    { name: "Ownership Gap", desc: "Matter stopped between agencies with no assigned role owning the next milestone." },
    { name: "Continuity Gap", desc: "Prior verified history vanished when the person crossed a county or municipal border." },
    { name: "Evidence / Material Gap", desc: "Key documentary exhibits were presented but omitted from the formal case summary." },
    { name: "Closure Gap", desc: "Administrative dismissal executed without verifying unexamined safety records." },
    { name: "Referral Loop", desc: "Circular referral chain (Agency A → Agency B → Agency A) leaving survivor in transit." },
    { name: "Jurisdiction Gap", desc: "Contradictory agency residency or safety mandates creating impossible prerequisites." },
    { name: "New-Information Gap", desc: "Newly emerging critical evidence cannot be integrated into a previously closed file." },
    { name: "Collateral / Source Gap", desc: "Multiple reports derived from a single originating account falsely treated as corroboration." }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none font-sans">
      {/* 1. Header & Dual Goals */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              SYSTEM CHANGE MAP &amp; CONTINUITY ARCHITECTURE
            </span>
          </div>
          <span className="coord-tick">[FULL SYSTEM SPECIFICATION]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          How Maps With Teeth Works (The System Change Map)
        </h1>

        <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans font-medium max-w-3xl">
          Maps With Teeth is an <strong>independent public-interest systems research and accountability initiative</strong>. Rather than assuming every failure requires a new software platform, it applies an eight-question diagnostic method to determine where responsibility, evidence, identity, or access disappears across institutional boundaries—and advances two primary working models: <strong>Model A (Continuity Receipt &amp; Review Trace)</strong> and <strong>Model B (Personal Number Continuity)</strong>.
        </p>

        {/* Central Premise & Dual Goals Banner (GOV.UK Left-Rule Editorial Callouts) */}
        <div className="mwt-callout-urgent space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
            CENTRAL PREMISE
          </span>
          <p className="text-sm sm:text-base font-serif italic font-bold text-[#1C1D1D]">
            &ldquo;People should not lose rights, safety, identity, evidence, or access simply because administrative systems divide authority differently than human lives do.&rdquo;
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 pt-1">
          <div className="mwt-callout-editorial space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
              GOVERNING GOAL
            </span>
            <p className="text-sm font-serif italic font-bold text-[#1C1D1D]">
              &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
            </p>
          </div>

          <div className="mwt-callout-ink space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-700 block">
              EXPANDED INSTITUTIONAL GOAL
            </span>
            <p className="text-sm font-serif italic font-bold text-[#1C1D1D]">
              &ldquo;Preserve enough continuity that a boundary between systems does not automatically become a boundary in accountability.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* 1B. The Broader Diagnostic Method: 8 Questions & 3 Failure Modes */}
      <section id="system-change-map" className="scroll-mt-36 lg:scroll-mt-28 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-5 sm:p-8 space-y-5 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-[#971F26] tracking-wider block">
              DIAGNOSTIC METHODOLOGY · SYSTEM CHANGE MAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Eight Diagnostic Questions Before Any Intervention
            </h2>
          </div>
          <span className="coord-tick">[DIAGNOSTIC FIRST · INTERVENTION SECOND]</span>
        </div>

        <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
          Sometimes the right answer is improving an existing system, not inventing something new. Across child protection, domestic violence response, telecommunications, courts, housing, and administrative oversight, Maps With Teeth evaluates every institutional seam through eight questions:
        </p>

        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-[11.5px] sm:text-xs font-mono">
          {[
            "1. What already exists?",
            "2. What is legally required or permitted?",
            "3. What technical and operational capabilities exist?",
            "4. What actually happens in practice?",
            "5. Who can realistically access the existing remedy?",
            "6. Where is responsibility, evidence, identity, or access lost?",
            "7. Is the failure legal, technical, procedural, administrative, accessibility-related, or an enforcement issue?",
            "8. What is the smallest effective intervention?",
          ].map((q, idx) => (
            <div key={idx} className="p-3 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl font-bold text-[#1C1D1D] leading-snug">
              {q}
            </div>
          ))}
        </div>

        {/* Three-Part Protection Failure Distinction */}
        <div className="grid md:grid-cols-3 gap-4 pt-2 text-xs font-sans">
          <div className="p-4 bg-[#1C1D1D] text-[#F5F1E8] rounded-xl space-y-1.5">
            <span className="font-mono text-[10px] font-bold uppercase text-amber-300 block">DIAGNOSTIC CLASS 01</span>
            <h3 className="font-serif font-bold text-base text-white">Missing Protection</h3>
            <p className="text-stone-300 leading-relaxed">
              Something does not exist at all in statute, agency operating procedure, or technical infrastructure.
            </p>
          </div>
          <div className="p-4 bg-[#1C1D1D] text-[#F5F1E8] rounded-xl space-y-1.5">
            <span className="font-mono text-[10px] font-bold uppercase text-amber-300 block">DIAGNOSTIC CLASS 02</span>
            <h3 className="font-serif font-bold text-base text-white">Inaccessible Protection</h3>
            <p className="text-stone-300 leading-relaxed">
              Something exists on paper, but cannot realistically be reached due to waitlists, cost, residency gates, or accessibility barriers.
            </p>
          </div>
          <div className="p-4 bg-[#1C1D1D] text-[#F5F1E8] rounded-xl space-y-1.5">
            <span className="font-mono text-[10px] font-bold uppercase text-amber-300 block">DIAGNOSTIC CLASS 03</span>
            <h3 className="font-serif font-bold text-base text-white">Defeated Protection</h3>
            <p className="text-stone-300 leading-relaxed">
              Something exists and could function, but the surrounding administrative or technical architecture prevents it from working as intended—often producing <strong>process-induced distortion</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Core Public-Interest Question */}
      <section className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-700 pb-3">
          <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest">
            <Activity className="w-4 h-4" />
            <span>THE CORE PUBLIC-INTEREST QUESTION</span>
          </div>
          <span className="text-[10px] font-mono text-stone-400">[MWT-ACCOUNTABILITY-ANCHOR]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          &ldquo;How do we know the handoff actually happened?&rdquo;
        </h2>

        <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          Texas public systems frequently report that agencies &ldquo;collaborate&rdquo; and &ldquo;refer.&rdquo; Maps With Teeth provides the missing operational proof by asking:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 font-mono text-xs text-amber-100">
          <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
            <strong className="block text-amber-300">1. What was received?</strong>
            <span className="text-[11px] text-stone-400 font-sans">Physical or electronic custody confirmed.</span>
          </div>
          <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
            <strong className="block text-amber-300">2. What was reviewed?</strong>
            <span className="text-[11px] text-stone-400 font-sans">Substantively examined under authority.</span>
          </div>
          <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
            <strong className="block text-amber-300">3. What was unresolved?</strong>
            <span className="text-[11px] text-stone-400 font-sans">Unexamined records &amp; pending needs.</span>
          </div>
          <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
            <strong className="block text-amber-300">4. Was responsibility accepted?</strong>
            <span className="text-[11px] text-stone-400 font-sans">Explicit decision ownership confirmed.</span>
          </div>
        </div>
      </section>

      {/* 3. The 5-Step Architectural Flow */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
              SYSTEM LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              The Architectural Flow
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            NAVIGATE → PRESERVE → REVIEW → SEAM → TEST
          </span>
        </div>

        <div className="space-y-4">
          {architecturalSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#971F26] text-sm">STEP {step.step}</span>
                    <span className="text-stone-400">·</span>
                    <span className="font-bold text-[#1C1D1D] uppercase">{step.name}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#F5F1E8] border border-stone-400 rounded text-[10px] font-bold text-stone-800">
                    {step.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                    {step.deck}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D9D1C4]/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-600">Architectural Stage {step.step} Specification</span>
                  <Link href={step.href} className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
                    <span>Explore {step.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Two Primary Working Models Breakdown */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              OPERATIONAL STRUCTURE · TWO PRIMARY WORKING MODELS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Two Primary Working Models. One Unifying Principle.
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            MODEL A (ADMINISTRATIVE PATH) · MODEL B (COMMUNICATION IDENTITY)
          </span>
        </div>

        <div className="p-4 bg-[#1C1D1D] text-[#F5F1E8] rounded-xl font-serif italic text-sm sm:text-base">
          &ldquo;These two models demonstrate the same underlying principle in different environments: a change in administrative or financial authority should not automatically erase an individual’s continuity.&rdquo;
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MODEL A: Continuity Receipt */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2.5 py-1 rounded">
                  MODEL A · PRIMARY WORKING MODEL
                </span>
                <FileCheck className="w-5 h-5 text-[#971F26]" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                  PARTICIPANT-HELD ADMINISTRATIVE PATH + REVIEW TRACE
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
                  Continuity Receipt
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                A minimal, participant-held record of the administrative path paired with the agency-side 9-status Review Trace (AGY-003 specimen) and Evidence Integrity safeguards. It is not a truth engine, allegation database, or automated credibility assessment.
              </p>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 font-mono text-xs space-y-1">
                <span className="font-bold text-[#1C1D1D] block">PRESERVES 7 PATH ELEMENTS:</span>
                <span className="text-stone-700 font-sans block text-[12px] leading-relaxed">
                  (1) What was received · (2) What was actually reviewed · (3) What action occurred · (4) What was referred elsewhere · (5) What fell outside authority · (6) What remains unresolved · (7) Who owns the next step.<br />
                  <strong>Boundaries:</strong> Submission ≠ review; referral ≠ assistance; closure ≠ resolution. Client-side SHA-256 digest supports change detection against a recorded baseline, not independent authentication.
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D9D1C4]">
              <Link
                href="/continuity"
                className="w-full py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2"
              >
                <span>View Model A: Continuity Standard Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* MODEL B: Personal Number Continuity */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-white px-2.5 py-1 rounded">
                  MODEL B · PRIMARY WORKING MODEL
                </span>
                <PhoneCall className="w-5 h-5 text-[#971F26]" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                  DECOUPLING BILLING AUTHORITY FROM COMMUNICATION IDENTITY
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
                  Personal Number Continuity
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                Addresses the structural harm caused by conflating shared-account billing authority with control over another adult&apos;s mobile number—which connects employment, banking, healthcare, schools, government services, 2FA authentication, account recovery, and personal communication.
              </p>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 font-mono text-xs space-y-1">
                <span className="font-bold text-[#1C1D1D] block">SEPARATES 6 DISTINCT DIMENSIONS:</span>
                <span className="text-stone-700 font-sans block text-[12px] leading-relaxed">
                  (1) Billing responsibility · (2) Authenticated adult line-user identity · (3) Number continuity &amp; transfer · (4) Communication &amp; security controls · (5) Device ownership · (6) Device debt &amp; contractual obligations.<br />
                  <strong>Boundaries:</strong> A payer does not have to continue paying another adult&apos;s bill; legitimate debts do not disappear; existing survivor protections do not cover every circumstance. Policy research &amp; proposed architecture (not an enacted entitlement).
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D9D1C4]">
              <Link
                href="/protection#digital"
                className="w-full py-2.5 bg-[#1C1D1D] hover:bg-black text-white rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2"
              >
                <span>Examine Model B: Personal Number Continuity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5–8. Level 2 Guided Disclosures for Technical Interchange Spec, Cross-Jurisdiction Scope, 12-Item Gap Taxonomy & 10 Locked Distinctions */}
      <div className="space-y-4">
        <EditorialDisclosure
          kicker="LEVEL 2 · INTERCHANGE SPECIFICATION"
          title="Inspect the Continuity Interchange Schema & 7-Step Responsibility Sequence"
          summary="Portable administrative schema (continuity_id, material_manifest[], handoff_status, review_status, next_decision_owner) and JSON payload specimen."
          badge="MWT-INTERCHANGE-V0.1"
          variant="light"
        >
          <ContinuityInterchangeSpecComponent />
        </EditorialDisclosure>

        <EditorialDisclosure
          kicker="LEVEL 2 · CROSS-JURISDICTIONAL SCOPE & EMPIRICAL GAP TAXONOMY"
          title="Inspect Multi-Agency Scope (10 Domains) & the 12-Item Bad Maps Gap Taxonomy"
          summary="Applicable institutional silos, Related Matters association rules, and the 12 observable administrative seam definitions."
          badge="12 SEAM DEFINITIONS"
          variant="light"
        >
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#EEE8DD] rounded-xl border border-stone-300 space-y-2">
                <strong className="text-[#971F26] uppercase block">APPLICABLE INSTITUTIONAL DOMAINS:</strong>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-stone-700 font-sans">
                  {crossJurisdictionSilos.map((silo, idx) => (
                    <div key={idx} className="p-1.5 bg-white rounded border border-stone-200">
                      • {silo}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#EEE8DD] rounded-xl border border-stone-300 space-y-2">
                <strong className="text-[#1C1D1D] uppercase block">RELATED MATTERS EVOLVING RULE:</strong>
                <p className="text-stone-800 font-sans text-xs leading-relaxed">
                  <strong>Related Matter association means only:</strong> &ldquo;another identified matter may be relevant to continuity.&rdquo;
                </p>
                <p className="text-stone-800 font-sans text-xs leading-relaxed">
                  <strong>It must NEVER mean:</strong> &ldquo;another allegation corroborates this allegation.&rdquo;
                </p>
                <div className="p-2.5 bg-white rounded border border-stone-300 text-[11px] text-stone-700 space-y-1 font-mono">
                  <div>• association ≠ proof</div>
                  <div>• repetition ≠ independent corroboration</div>
                  <div>• administrative ownership ≠ factual authority</div>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-[#F5F1E8] border border-stone-300 rounded-xl space-y-1.5 text-xs font-mono text-stone-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <strong className="text-[#971F26] uppercase">EMPIRICAL MEASUREMENT SAFEGUARDS:</strong>
                <Link href="/bad-maps" className="text-[#971F26] underline font-bold">
                  Inspect Full Bad Maps Spec →
                </Link>
              </div>
              <p className="font-sans text-stone-700 text-[12px] leading-relaxed">
                Every published Bad Maps metric requires an explicit numerator, denominator, defined cohort, observation period, and verified provenance. Metrics distinguish between <strong>CONFIRMED GAP</strong>, <strong>NO GAP OBSERVED</strong>, and <strong>UNKNOWN / INSUFFICIENT RECORD</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
              {gapTaxonomyItems.map((g, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl space-y-1.5 flex flex-col justify-between shadow-2xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between border-b border-stone-300 pb-1 text-[10px]">
                      <span className="font-bold text-[#971F26]">GAP {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                      <span className="text-stone-500">[TAXONOMY]</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#1C1D1D]">
                      {g.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-stone-700 font-sans leading-snug">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </EditorialDisclosure>

        <EditorialDisclosure
          kicker="LEVEL 2 · LOCKED INSTITUTIONAL DISTINCTIONS"
          title="Inspect the 10 Locked Non-Equivalence Distinctions"
          summary="Formal definitions preventing the conflation of allegation with evidence, repetition with corroboration, submission with review, or barrier with refusal."
          badge="10 DISTINCTIONS"
          variant="dark"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
            {lockedDistinctions.map((d, i) => (
              <div
                key={i}
                className="p-3.5 bg-stone-900 border border-stone-700 rounded-xl space-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-amber-300 font-bold block text-[13px] leading-snug">
                    {d.left} <span className="text-red-400">≠</span> {d.right}
                  </span>
                </div>
                <p className="text-stone-400 text-[11px] font-sans leading-relaxed">
                  {d.note}
                </p>
              </div>
            ))}
          </div>
        </EditorialDisclosure>
      </div>

      {/* 9. Strict Non-Claims & Anti-Surveillance Guardrails (GOV.UK Left-Rule Callouts) */}
      <section className="mwt-callout-urgent space-y-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#971F26] font-bold uppercase border-b border-[#D9D1C4] pb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>STRICT ANTI-SURVEILLANCE &amp; LEGAL BOUNDARIES</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-stone-800 font-sans text-xs leading-relaxed">
          <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/60 space-y-1">
            <strong className="font-mono text-[#971F26] uppercase block">NO CASE MANAGEMENT OR DOSSIERS:</strong>
            <p>Maps With Teeth is not a caseworker ticketing platform, CRM, or shared government surveillance system. It issues participant-held receipts and publishes structural research.</p>
          </div>

          <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/60 space-y-1">
            <strong className="font-mono text-[#971F26] uppercase block">NO CUMULATIVE RISK SCORING:</strong>
            <p>Related matters may be linked to prompt authorized inquiries, but the system must never merge factual conclusions or calculate automated credibility or danger scores.</p>
          </div>

          <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/60 space-y-1">
            <strong className="font-mono text-[#971F26] uppercase block">ZERO FACT PRE-DETERMINATION:</strong>
            <p>A continuity receipt records that an encounter occurred and what documents were presented—it does not certify the substantive truth of any contested allegation.</p>
          </div>

          <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/60 space-y-1">
            <strong className="font-mono text-[#971F26] uppercase block">NO REPLACEMENT FOR LEGAL AUTHORITY:</strong>
            <p>The framework preserves administrative relationships and provenance without overriding statutory discretion or judicial proceedings.</p>
          </div>
        </div>
      </section>

      {/* 10. Bottom CTA Block */}
      <div className="border-t border-[#D9D1C4] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
        <div className="space-y-1 text-xs">
          <span className="font-bold text-[#1C1D1D] uppercase block">EXPLORE MAPS WITH TEETH</span>
          <p className="text-stone-700 font-sans">
            Review the complete Continuity Standard specification or test the live resource finder.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/continuity"
            className="px-5 py-2.5 bg-[#EEE8DD] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs"
          >
            <span>Continuity Standard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/find-help"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-red-900 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs"
          >
            <span>Resource Finder</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
