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
  Link2
} from "lucide-react";

export const metadata = {
  title: "How Maps With Teeth Works | Public-Interest Continuity Framework",
  description:
    "System architecture and product model for Maps With Teeth. Two primary working models: Continuity Receipt and Personal Number Continuity, supported by Review Trace and Bad Maps research."
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
      deck: "Participant-Held Continuity & Communication Autonomy",
      desc: "Generate client-side Continuity Receipts with cryptographic SHA-256 integrity and execute Personal Number separation under 47 U.S.C. § 345 to carry context and protect digital lifelines across boundaries.",
      status: "PRIMARY MODEL",
      icon: FileCheck,
      href: "/continuity"
    },
    {
      step: "03",
      name: "Preserve the Review",
      deck: "Agency-Side Operational Review Trace Specification",
      desc: "Log standardized administrative handling metadata (Received, Reviewed, Unavailable, Outside Authority, Unreviewed with reason) without pre-judging substantive claim merits or inflating risk.",
      status: "SUPPORTING SPEC",
      icon: Activity,
      href: "/continuity/safeguards#review-trace"
    },
    {
      step: "04",
      name: "Identify the Seam",
      deck: "Closed-Loop Referrals & Decision-Owner Tracking",
      desc: "Expose where referrals disappear (Sent ≠ Received), detect circular runaround loops, and explicitly bind decision ownership to prevent the 'nobody's case' administrative failure.",
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
    { left: "receipt", right: "accessibility", note: "Physical or digital receipt inside an agency does not mean investigators or caseworkers can access the file." },
    { left: "accessibility", right: "review", note: "Having technical access to an intake record does not establish that anyone substantively examined its contents." },
    { left: "closure", right: "factual resolution", note: "Administrative file closure due to staffing or procedural limits does not resolve the underlying safety crisis." },
    { left: "repetition", right: "independent corroboration", note: "Repeating a single originating narrative across multiple case files does not constitute independent verification." },
    { left: "association", right: "proof", note: "Linking related proceedings documents that multiple matters exist; it does not predetermine factual guilt or liability." },
    { left: "fear / barrier", right: "refusal", note: "Logistical hurdles, transportation deficits, trauma, or safety fears must never be recoded as voluntary non-cooperation." },
    { left: "administrative ownership", right: "factual authority", note: "Routing authority over a file does not establish substantive authority over historical truth." }
  ];

  const supportingCapabilities = [
    {
      title: "1. Resource Navigation",
      role: "Front-end discovery of verified aid, statutory rights, lateral funds, and audited friction constraints.",
      boundary: "Deterministic rules only; zero generative AI fabrication."
    },
    {
      title: "2. Related-Matter Association",
      role: "Prompts authorized personnel to check for related filings across silos without merging facts or records.",
      boundary: "Never creates a centralized public dossier or merges case merits."
    },
    {
      title: "3. Bad Maps Analysis",
      role: "Catalogs recurring dead routes and circular loops to pressure-test institutional design with empirical sample sizes (n=X).",
      boundary: "Deidentified structural research; never scores individual people."
    },
    {
      title: "4. Responsibility Mapping",
      role: "Distinguishes statutory authority, required inputs, handoff rules, and escalation paths across agencies.",
      boundary: "Maps administrative jurisdiction; does not issue judicial orders."
    },
    {
      title: "5. Policy & Legislative Exports",
      role: "Generates structured system failure briefs for Sunset reviews, legislative committees, and agency ombudsmen.",
      boundary: "Structured policy briefs derived from documented procedural gaps."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none font-sans">
      {/* 1. Header & Governing Principle */}
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
          Maps With Teeth is an overarching public-interest framework designed to carry context and preserve administrative accountability across fragmented public institutions. It maintains <strong>two primary working models</strong> supported by operational specifications, without expanding into a case-management platform or surveillance tool.
        </p>

        {/* Governing Principle Banner */}
        <div className="p-4 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
            GOVERNING PRINCIPLE
          </span>
          <p className="text-base sm:text-lg font-serif italic font-bold text-[#1C1D1D]">
            &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
          </p>
        </div>
      </div>

      {/* 2. The 5-Step Architectural Flow */}
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

      {/* 3. The Two Primary Working Models */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#D9D1C4] pb-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#971F26] text-white flex items-center justify-center font-mono text-sm font-bold">
            2M
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              CORE IMPLEMENTATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Two Primary Working Models
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Model 1: Continuity Receipt */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2.5 py-1 rounded">
                  WORKING MODEL 01 · PARTICIPANT-HELD
                </span>
                <FileCheck className="w-5 h-5 text-[#971F26]" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                  ADMINISTRATIVE CONTINUITY
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
                  Continuity Receipt
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                A standardized participant-held receipt documenting encounter date, institutional entity, exhibits provided with client-side SHA-256 integrity hashes, review disposition statuses, ministerial actions taken, and the assigned next decision owner.
              </p>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 font-mono text-xs space-y-1">
                <span className="font-bold text-[#1C1D1D] block">KEY CHARACTERISTICS:</span>
                <span className="text-stone-700 font-sans block text-[12px]">
                  • Client-side SHA-256 integrity digest (zero server file storage)<br />
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

          {/* Model 2: Personal Number Continuity */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-white px-2.5 py-1 rounded">
                  WORKING MODEL 02 · STATUTORY AUTONOMY
                </span>
                <PhoneCall className="w-5 h-5 text-[#1C1D1D]" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                  COMMUNICATION IDENTITY SEPARATION
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
                  Personal Number Continuity
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                Separating carrier account billing authority from adult communication identity under the federal Safe Connections Act (47 U.S.C. § 345). Protects phone numbers, banking 2FA, and agency contacts without notifying the account holder.
              </p>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 font-mono text-xs space-y-1">
                <span className="font-bold text-[#1C1D1D] block">KEY CHARACTERISTICS:</span>
                <span className="text-stone-700 font-sans block text-[12px]">
                  • 47 U.S.C. § 345 line separation notice templates<br />
                  • Complete protection against account-holder notification<br />
                  • Preserves vital two-factor auth for benefits, banks &amp; courts<br />
                  • Independent communication identity separate from billing rights
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D9D1C4]">
              <Link
                href="/other-ways-through#telecom"
                className="w-full py-2.5 bg-[#1C1D1D] hover:bg-black text-white rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2"
              >
                <span>View Safe Connections Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Review Trace as Supporting Specification */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-4 font-mono text-xs shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-3">
          <div className="flex items-center gap-2 text-stone-900 font-bold uppercase">
            <Activity className="w-4 h-4 text-[#971F26]" />
            <span>OPERATIONAL SPECIFICATION · REVIEW TRACE (AGENCY-SIDE SUPPORT)</span>
          </div>
          <span className="px-2.5 py-0.5 bg-[#EEE8DD] text-stone-800 border border-stone-400 rounded font-bold">
            SUPPORTING SPECIFICATION · NOT A THIRD FLAGSHIP PRODUCT
          </span>
        </div>

        <p className="font-sans text-stone-800 text-xs sm:text-sm leading-relaxed">
          <strong>Review Trace</strong> is an operational accountability specification that supports the Continuity Receipt. It establishes a standardized administrative vocabulary so institutions can log how identified materials were handled without forcing subjective findings of fact.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-[11px]">
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="text-[#2D5A3D] block">RECEIVED</strong>
            <span className="text-stone-600 font-sans">Material logged in intake.</span>
          </div>
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="text-[#1C1D1D] block">REVIEWED</strong>
            <span className="text-stone-600 font-sans">Substantively examined.</span>
          </div>
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="text-amber-700 block">UNAVAILABLE</strong>
            <span className="text-stone-600 font-sans">Held by third party.</span>
          </div>
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="text-[#971F26] block">UNREVIEWED (REASON)</strong>
            <span className="text-stone-600 font-sans">Omitted with stated cause.</span>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Link
            href="/continuity/safeguards#review-trace"
            className="text-[#971F26] font-bold hover:underline flex items-center gap-1"
          >
            <span>Read Complete Review Trace Specification</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. Supporting Capabilities */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            Integrated Supporting Capabilities
          </h2>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            NOT STANDALONE PRODUCT PILLARS
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportingCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl p-4 space-y-2.5 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-1.5">
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                  {cap.title}
                </h3>
                <p className="text-xs text-stone-800 font-sans leading-relaxed">
                  {cap.role}
                </p>
              </div>

              <div className="p-2 bg-[#F5F1E8] rounded border border-stone-300 text-[11px] font-mono text-stone-700">
                <strong>BOUNDARY:</strong> {cap.boundary}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Locked Institutional Distinctions Grid */}
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

      {/* 7. Strict Non-Claims & Architectural Guardrails */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#971F26] font-bold uppercase border-b border-[#D9D1C4] pb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>STRICT ARCHITECTURAL BOUNDARIES &amp; RESEARCH PROTOCOLS</span>
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
            <strong className="font-mono text-[#971F26] uppercase block">GAP TAXONOMY AS RESEARCH (n=X):</strong>
            <p>The 12 gap taxonomy classifications and metrics are empirical pressure-test materials, not validated public statistics, until sufficient observations and formal definitions exist.</p>
          </div>

          <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
            <strong className="font-mono text-[#971F26] uppercase block">ZERO FACT PRE-DETERMINATION:</strong>
            <p>A continuity receipt records that an encounter occurred and what documents were presented—it does not certify the substantive truth of any contested allegation.</p>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Block */}
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
