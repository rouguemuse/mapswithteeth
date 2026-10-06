"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  Layers,
  ArrowRight,
  ShieldAlert,
  FileCheck,
  CheckCircle2,
  Clock,
  MapPin,
  FileText,
  Building2,
  Scale,
  Sparkles,
  PhoneCall,
  Activity,
  AlertOctagon,
  Search,
  FolderArchive,
  GitBranch,
  ShieldCheck,
  Code2
} from "lucide-react";

export function TwoHalvesArchitectureSection() {
  const architecturalSteps = [
    {
      num: "01",
      name: "Navigate",
      deck: "Barrier-first discovery of reachable statutory protections, relief funds, and legal pathways.",
      icon: Search
    },
    {
      num: "02",
      name: "Preserve the Path",
      deck: "Participant-held Continuity Receipts that carry verified encounter records across institutional silos.",
      icon: FileCheck
    },
    {
      num: "03",
      name: "Preserve the Review",
      deck: "Agency-side Review Trace logging what was examined, what was unreviewed, and why.",
      icon: Activity
    },
    {
      num: "04",
      name: "Identify the Seam",
      deck: "Detecting unacknowledged referrals, circular loops, and unassigned decision ownership.",
      icon: AlertOctagon
    },
    {
      num: "05",
      name: "Test the Pattern Across Systems",
      deck: "Bad Maps research aggregating deidentified friction points to pressure-test public policy.",
      icon: Layers
    }
  ];

  const responsibilitySequence = [
    "WHAT WAS SENT?",
    "WHAT WAS RECEIVED?",
    "WHAT WAS ACCESSIBLE?",
    "WHAT WAS REVIEWED?",
    "WHAT WAS DECIDED?",
    "WHO OWNS THE NEXT ACTION?",
    "DID THAT ENTITY ACCEPT RESPONSIBILITY?"
  ];

  const lockedDistinctions = [
    { left: "referral", right: "successful handoff", note: "Dispatching an email does not confirm receipt or acceptance." },
    { left: "receipt", right: "accessibility", note: "Having a record in a building does not mean it can be opened." },
    { left: "accessibility", right: "review", note: "Having access to a file does not mean anyone examined its contents." },
    { left: "closure", right: "factual resolution", note: "Closing a file due to workload does not resolve the danger." },
    { left: "repetition", right: "independent corroboration", note: "Recounting the same origin across files is not independent proof." },
    { left: "association", right: "proof", note: "A link between proceedings prompts review, not automatic guilt." },
    { left: "fear / barrier", right: "refusal", note: "Logistical or safety hurdles must not be recorded as non-cooperation." },
    { left: "administrative ownership", right: "factual authority", note: "Routing authority does not determine the underlying truth." }
  ];

  return (
    <section className="space-y-12 select-none font-sans">
      {/* Section Eyebrow & Title */}
      <div className="text-center space-y-3 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEE8DD] border border-[#1C1B1A] text-[#1C1B1A] rounded-full text-xs font-mono uppercase tracking-widest font-bold shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#971F26]" />
          <span>SECTION 03 · OPERATIONAL ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Principal Model. Operational Trace. Empirical Research.
        </h2>
        <p className="text-stone-800 text-sm sm:text-base font-sans max-w-3xl mx-auto leading-relaxed">
          Maps With Teeth is an overarching public-interest framework centered on the <strong>Continuity Receipt</strong> as its principal working model, supported by the <strong>Review Trace</strong> operational specification and <strong>Bad Maps</strong> systems research.
        </p>

        {/* Dual Goals Banner */}
        <div className="grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto text-left pt-2">
          <div className="p-3.5 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-lg space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
              GOVERNING GOAL
            </span>
            <p className="text-sm font-serif italic font-bold text-[#1C1D1D]">
              &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
            </p>
          </div>

          <div className="p-3.5 bg-[#F5F1E8] border-l-4 border-l-[#1C1D1D] border border-[#D9D1C4] rounded-r-lg space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-700 block">
              EXPANDED INSTITUTIONAL GOAL
            </span>
            <p className="text-sm font-serif italic font-bold text-[#1C1D1D]">
              &ldquo;Preserve enough continuity that a boundary between systems does not automatically become a boundary in accountability.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* The Core Public-Interest Question Strip */}
      <div className="p-4 bg-[#1C1D1D] text-[#F5F1E8] rounded-2xl border-2 border-[#1C1D1D] space-y-2 shadow-md">
        <div className="flex items-center justify-between border-b border-stone-700 pb-2">
          <span className="text-[11px] font-mono uppercase font-bold text-amber-300">
            THE CORE PUBLIC-INTEREST QUESTION
          </span>
          <span className="text-[10px] font-mono text-stone-400">[MWT-CORE-QUESTION]</span>
        </div>
        <p className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
          &ldquo;How do we know the handoff actually happened?&rdquo;
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-xs text-stone-300 pt-1">
          <span>• What was received?</span>
          <span>• What was reviewed?</span>
          <span>• What remained unresolved?</span>
          <span>• Who owned the next action?</span>
          <span>• Was responsibility actually accepted?</span>
        </div>
      </div>

      {/* 5-Step Architectural Flow */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-diagram">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#971F26]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C1D1D]">
              ARCHITECTURAL FLOW SEQUENCE
            </span>
          </div>
          <span className="text-[11px] font-mono text-stone-600 font-bold">
            [NAVIGATE → PRESERVE → REVIEW → SEAM → TEST]
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {architecturalSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl p-4 space-y-2.5 flex flex-col justify-between shadow-2xs relative"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between border-b border-stone-300 pb-1.5 font-mono text-[11px]">
                    <span className="font-bold text-[#971F26]">{step.num}</span>
                    <Icon className="w-3.5 h-3.5 text-stone-600" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">
                    {step.name}
                  </h3>
                  <p className="text-xs text-stone-700 font-sans leading-snug">
                    {step.deck}
                  </p>
                </div>
                {idx < architecturalSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#971F26] font-bold text-xs">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Continuity of Responsibility Sequence */}
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-300 pb-2">
          <div className="flex items-center gap-2 text-stone-900 font-bold uppercase">
            <Activity className="w-4 h-4 text-[#971F26]" />
            <span>CONTINUITY OF RESPONSIBILITY SEQUENCE</span>
          </div>
          <span className="text-[#971F26] font-bold">referral ≠ successful handoff</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
          {responsibilitySequence.map((q, idx) => (
            <div key={idx} className="p-2.5 bg-white rounded border border-stone-300 text-center space-y-1">
              <span className="text-[10px] text-[#971F26] font-bold block">STEP 0{idx + 1}</span>
              <span className="font-bold text-[#1C1D1D] text-[11px] block leading-tight">{q}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRIMARY WORKING MODEL: CONTINUITY RECEIPT (Hero Feature Card) */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-diagram">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2.5 py-1 rounded">
              PRINCIPAL WORKING MODEL · PARTICIPANT-HELD
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Continuity Receipt
            </h3>
          </div>
          <FileCheck className="w-8 h-8 text-[#971F26]" />
        </div>

        <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-sans font-medium max-w-3xl">
          The <strong>Continuity Receipt</strong> is the primary working model of Maps With Teeth. It is a client-side cryptographic record carried by the participant to establish what occurred at each institutional encounter—documenting what was sent, what was received, what was reviewed, and who owns the next action.
        </p>

        <div className="grid md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-3.5 bg-[#F5F1E8] rounded-xl border border-stone-300 space-y-1">
            <span className="font-bold text-[#1C1D1D] block">1. PROVENANCE &amp; SHA-256 HASHES:</span>
            <span className="text-stone-700 font-sans text-[12px] block">Client-side SHA-256 digests verify record authenticity without uploading private survivor files to a central server.</span>
          </div>

          <div className="p-3.5 bg-[#F5F1E8] rounded-xl border border-stone-300 space-y-1">
            <span className="font-bold text-[#1C1D1D] block">2. NEXT-DECISION OWNERSHIP:</span>
            <span className="text-stone-700 font-sans text-[12px] block">Explicitly binds a specific institutional role and unit to the next action, preventing unowned handoffs.</span>
          </div>

          <div className="p-3.5 bg-[#F5F1E8] rounded-xl border border-stone-300 space-y-1">
            <span className="font-bold text-[#1C1D1D] block">3. CONTEXT BEFORE CLOSURE:</span>
            <span className="text-stone-700 font-sans text-[12px] block">Logs reviewed vs. unexamined materials before administrative file exit, preventing false closure conclusions.</span>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#D9D1C4]">
          <span className="text-xs font-mono text-stone-600">Standard Specimen · Client-Side Digest</span>
          <Link
            href="/continuity"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs"
          >
            <span>Explore Continuity Receipt Model</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Review Trace & Personal Number Continuity Implementation Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Review Trace Supporting Specification */}
        <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-stone-300 pb-2">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-white px-2 py-0.5 rounded">
                SUPPORTING SPECIFICATION · AGENCY SIDE
              </span>
              <Activity className="w-4 h-4 text-[#1C1D1D]" />
            </div>

            <h4 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Review Trace Specification
            </h4>

            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              The institutional counterpart supporting the Continuity Receipt. Provides standardized administrative statuses (Received, Accessible, Reviewed, Unreviewed Reason, Unavailable) so agencies can account for what they did with identified material without pre-judging substantive claim merits.
            </p>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-[#2D5A3D] block">RECEIVED</strong>
                <span className="text-stone-600">In agency custody.</span>
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-[#1C1D1D] block">REVIEWED</strong>
                <span className="text-stone-600">Substantively examined.</span>
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-amber-700 block">UNAVAILABLE</strong>
                <span className="text-stone-600">Held by third party.</span>
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-[#971F26] block">UNREVIEWED (REASON)</strong>
                <span className="text-stone-600">Omitted with stated cause.</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-stone-300">
            <Link
              href="/continuity/safeguards#review-trace"
              className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1"
            >
              <span>View Review Trace Vocabulary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Personal Number Continuity (Worked Implementation Example) */}
        <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-stone-300 pb-2">
              <span className="text-[10px] font-mono font-bold uppercase bg-stone-700 text-white px-2 py-0.5 rounded">
                APPLICATION EXAMPLE · SAFE CONNECTIONS ACT
              </span>
              <PhoneCall className="w-4 h-4 text-stone-800" />
            </div>

            <h4 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Personal Number Continuity
            </h4>

            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              A concrete application of the continuity standard under the Safe Connections Act (47 U.S.C. § 345). Demonstrates how a distinction that an administrative carrier system normally collapses—separating billing authority from adult communication identity—is preserved across boundaries to protect banking 2FA and emergency contact access.
            </p>

            <div className="p-3 bg-white rounded border border-stone-200 font-mono text-xs space-y-1">
              <span className="font-bold text-[#1C1D1D] block">WORKED APPLICATION ATTRIBUTES:</span>
              <span className="text-stone-600 font-sans text-[11px] block">
                • 47 U.S.C. § 345 statutory line separation notice templates<br />
                • Zero account-holder notification or data leakage<br />
                • Preserves vital two-factor auth for benefits, banks &amp; courts
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-stone-300">
            <Link
              href="/other-ways-through#telecom"
              className="text-xs font-mono font-bold text-[#1C1D1D] hover:underline flex items-center gap-1"
            >
              <span>Explore Safe Connections Act Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 8 Locked Institutional Distinctions Grid */}
      <div className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
        <div className="border-b border-stone-700 pb-4 space-y-1">
          <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>INSTITUTIONAL DISTINCTIONS</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
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
      </div>

      {/* Supporting Capabilities Strip */}
      <div className="p-6 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl space-y-3 font-mono text-xs text-stone-800">
        <div className="flex items-center justify-between border-b border-stone-300 pb-2">
          <span className="font-bold text-[#1C1D1D] uppercase">
            SUPPORTING CAPABILITIES (NOT STANDALONE PRODUCT PILLARS)
          </span>
          <span className="text-[10px] text-stone-600">[INTEGRATED TOOLS]</span>
        </div>

        <div className="grid sm:grid-cols-5 gap-3 pt-1 text-center">
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="block text-[#1C1D1D]">1. Resource Navigation</strong>
            <span className="text-[10px] text-stone-600 font-sans">Friction-audited directory &amp; statutory rules</span>
          </div>
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="block text-[#1C1D1D]">2. Related-Matter Association</strong>
            <span className="text-[10px] text-stone-600 font-sans">Linking existence without merging facts</span>
          </div>
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="block text-[#1C1D1D]">3. Bad Maps Analysis</strong>
            <span className="text-[10px] text-stone-600 font-sans">Deidentified seam &amp; loop research (n=X)</span>
          </div>
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="block text-[#1C1D1D]">4. Responsibility Mapping</strong>
            <span className="text-[10px] text-stone-600 font-sans">Statutory authority vs. handoff requirements</span>
          </div>
          <div className="p-2.5 bg-white rounded border border-stone-300">
            <strong className="block text-[#1C1D1D]">5. Policy Exports</strong>
            <span className="text-[10px] text-stone-600 font-sans">Structured legislative &amp; oversight briefs</span>
          </div>
        </div>

        <p className="text-[11px] font-sans text-stone-600 pt-2 text-center">
          <strong>Strict Architectural Boundary:</strong> Zero case-management features, zero cumulative report risk scoring, zero centralized dossiers, and zero automated credibility/safety judgments.
        </p>
      </div>
    </section>
  );
}
