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

export const metadata = {
  title: "How Maps With Teeth Works | Public-Interest Continuity Framework",
  description:
    "System architecture and product model for Maps With Teeth. Principal model: Continuity Receipt. Supporting specification: Review Trace. Empirical research: Bad Maps."
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
      deck: "Participant-Held Continuity & Cryptographic Verification",
      desc: "Generate client-side Continuity Receipts with cryptographic SHA-256 integrity to carry context, presented exhibits, and decision ownership across institutional silos.",
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
      desc: "Expose where referrals disappear (Sent ≠ Received), detect circular runaround loops, and explicitly bind next decision ownership to eliminate the 'nobody's case' failure mode.",
      status: "PROTOTYPE SPEC",
      icon: AlertOctagon,
      href: "/the-gap"
    },
    {
      step: "05",
      name: "Test the Pattern Across Systems",
      deck: "Bad Maps Empirical Systems Research (n=X)",
      desc: "Aggregate deidentified structural friction events to pressure-test public administration, inform Sunset reviews, and generate structured legislative and oversight policy briefs.",
      status: "RESEARCH SPEC",
      icon: Layers,
      href: "/bad-maps"
    }
  ];

  const lockedDistinctions = [
    { left: "referral", right: "successful handoff", note: "Dispatching an email or notice does not confirm receipt, capacity, or acceptance by the recipient." },
    { left: "receipt", right: "accessibility", note: "Physical or digital receipt inside an agency does not mean caseworkers can access or open the file." },
    { left: "accessibility", right: "review", note: "Having technical access to an intake record does not establish that anyone substantively examined its contents." },
    { left: "closure", right: "factual resolution", note: "Administrative file closure due to staffing or procedural limits does not resolve the underlying safety crisis." },
    { left: "repetition", right: "independent corroboration", note: "Repeating a single originating narrative across multiple case files does not constitute independent verification." },
    { left: "association", right: "proof", note: "Linking related proceedings documents that multiple matters exist; it does not predetermine factual guilt or liability." },
    { left: "fear / barrier", right: "refusal", note: "Logistical hurdles, transportation deficits, trauma, or safety fears must never be recoded as voluntary non-cooperation." },
    { left: "administrative ownership", right: "factual authority", note: "Routing authority over a file does not establish substantive authority over historical truth." }
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
              OVERARCHING PUBLIC-INTEREST FRAMEWORK
            </span>
          </div>
          <span className="coord-tick">[FULL SYSTEM SPECIFICATION]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          How Maps With Teeth Works
        </h1>

        <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans font-medium max-w-3xl">
          Maps With Teeth is an overarching public-interest framework designed to carry context and preserve administrative accountability across fragmented public institutions. It establishes the <strong>Continuity Receipt</strong> as its principal working model, supported by the <strong>Review Trace</strong> operational specification and <strong>Bad Maps</strong> systems research.
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
      </div>

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

      {/* 4. Product Hierarchy Breakdown */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              OPERATIONAL STRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Product Hierarchy &amp; Working Models
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            PRINCIPAL · SUPPORTING · RESEARCH
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PRINCIPAL MODEL: Continuity Receipt */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between md:col-span-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2.5 py-1 rounded">
                  PRINCIPAL WORKING MODEL · PARTICIPANT-HELD
                </span>
                <FileCheck className="w-5 h-5 text-[#971F26]" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                  CROSS-SYSTEM ADMINISTRATIVE CONTINUITY
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
                  Continuity Receipt
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                The flagship operational mechanism of Maps With Teeth. A participant-held, client-side cryptographic receipt documenting encounter date, institutional entity, presented materials with SHA-256 integrity digests, review disposition statuses, ministerial actions taken, and the assigned next decision owner.
              </p>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 font-mono text-xs space-y-1">
                <span className="font-bold text-[#1C1D1D] block">CORE INVARIANTS:</span>
                <span className="text-stone-700 font-sans block text-[12px]">
                  • Participant-held by default (zero server file storage or dossier)<br />
                  • Segregated material review logging (Received vs. Reviewed vs. Unexamined)<br />
                  • 5 mandatory non-implication notices preventing tort claims<br />
                  • Context Before Closure verification before file exit
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D9D1C4]">
              <Link
                href="/continuity"
                className="w-full py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2"
              >
                <span>View Continuity Standard Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* APPLICATION EXAMPLE: Personal Number Continuity */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-stone-700 text-white px-2 py-0.5 rounded">
                  WORKED APPLICATION EXAMPLE
                </span>
                <PhoneCall className="w-4 h-4 text-stone-800" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                  SAFE CONNECTIONS ACT
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
                  Personal Number Continuity
                </h3>
              </div>

              <p className="text-xs text-stone-800 leading-relaxed font-sans">
                A worked implementation example under 47 U.S.C. § 345 showing how a distinction that an administrative system normally collapses—separating carrier billing authority from adult communication identity—can be preserved across boundaries to protect banking 2FA and digital lifelines.
              </p>
            </div>

            <div className="pt-3 border-t border-[#D9D1C4]">
              <Link
                href="/other-ways-through#telecom"
                className="w-full py-2 bg-[#1C1D1D] hover:bg-black text-white rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2"
              >
                <span>Explore Telecom Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Continuity Interchange Specification (Interactive Component) */}
      <ContinuityInterchangeSpecComponent />

      {/* 6. Formalizing Cross-Jurisdiction Continuity (Without Merging Facts) */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
          <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs font-bold uppercase">
            <Link2 className="w-4 h-4" />
            <span>CROSS-JURISDICTIONAL BOUNDARIES</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Multi-Agency Scope Without Merging Merits
          </h3>
          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
            Continuity may span multiple agencies, courts, or institutional silos without merging their factual conclusions or pre-determining guilt.
          </p>
        </div>

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
      </section>

      {/* 7. Bad Maps Measurement Architecture & 12-Item Gap Taxonomy */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
              EMPIRICAL RESEARCH LAYER
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Bad Maps Measurement Architecture &amp; Gap Taxonomy
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            12 OBSERVABLE ADMINISTRATIVE SEAMS
          </span>
        </div>

        {/* Methodology Notice */}
        <div className="p-4 bg-[#F5F1E8] border border-stone-300 rounded-xl space-y-2 text-xs font-mono text-stone-800">
          <div className="flex items-center justify-between">
            <strong className="text-[#971F26] uppercase">EMPIRICAL MEASUREMENT SAFEGUARDS (n=X):</strong>
            <span className="text-stone-600">Sample-Based · Counts Over Unsupported Percentages</span>
          </div>
          <p className="font-sans text-stone-700 text-[12px] leading-relaxed">
            Every published Bad Maps metric supports explicit numerator, denominator, sample size (<em>n=X</em>), defined cohort, observation period, and provenance. Metrics distinguish between <strong>CONFIRMED GAP</strong>, <strong>NO GAP OBSERVED</strong>, and <strong>UNKNOWN / INSUFFICIENT RECORD</strong>. (Unknown is never automatically classified as failure). Gaps describe observable administrative conditions, not misconduct accusations.
          </p>
        </div>

        {/* 12-Item Gap Taxonomy Grid */}
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
      </section>

      {/* 8. Locked Institutional Distinctions Grid */}
      <section className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
        <div className="border-b border-stone-700 pb-4 space-y-1">
          <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>INSTITUTIONAL DISTINCTIONS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Locked Institutional Distinctions
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm font-sans">
            Administrative systems frequently conflate these concepts. Maps With Teeth enforces strict separation between them.
          </p>
        </div>

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
      </section>

      {/* 9. Strict Non-Claims & Anti-Surveillance Guardrails */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#971F26] font-bold uppercase border-b border-[#D9D1C4] pb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>STRICT ANTI-SURVEILLANCE &amp; LEGAL BOUNDARIES</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-stone-800 font-sans text-xs leading-relaxed">
          <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
            <strong className="font-mono text-[#971F26] uppercase block">NO CASE MANAGEMENT OR DOSSIERS:</strong>
            <p>Maps With Teeth is not a caseworker ticketing platform, CRM, or shared government surveillance system. It issues participant-held receipts and publishes structural research.</p>
          </div>

          <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
            <strong className="font-mono text-[#971F26] uppercase block">NO CUMULATIVE RISK SCORING:</strong>
            <p>Related matters may be linked to prompt authorized inquiries, but the system must never merge factual conclusions or calculate automated credibility or danger scores.</p>
          </div>

          <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
            <strong className="font-mono text-[#971F26] uppercase block">ZERO FACT PRE-DETERMINATION:</strong>
            <p>A continuity receipt records that an encounter occurred and what documents were presented—it does not certify the substantive truth of any contested allegation.</p>
          </div>

          <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
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
