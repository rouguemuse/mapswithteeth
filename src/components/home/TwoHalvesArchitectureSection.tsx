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
  ShieldCheck
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
      deck: "Participant-held Continuity Receipts and Personal Number separation that carry across boundaries.",
      icon: FileCheck
    },
    {
      num: "03",
      name: "Preserve the Review",
      deck: "Agency-side Review Trace recording what was examined, what was unreviewed, and why.",
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
          <span>SECTION 03 · PUBLIC-INTEREST FRAMEWORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Two Primary Working Models. One Architectural Flow.
        </h2>
        <p className="text-stone-800 text-sm sm:text-base font-sans max-w-3xl mx-auto leading-relaxed">
          Maps With Teeth is an overarching public-interest framework, not a case-management platform. It preserves human context across institutional boundaries without creating centralized dossiers or automated risk scoring.
        </p>

        {/* Governing Principle Callout */}
        <div className="p-4 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl max-w-3xl mx-auto text-left space-y-1 mt-4">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
            GOVERNING PRINCIPLE
          </span>
          <p className="text-base sm:text-lg font-serif italic font-bold text-[#1C1D1D]">
            &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
          </p>
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
            [END-TO-END CONTINUITY PROTOCOL]
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

      {/* Two Primary Working Models Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* MODEL 1: CONTINUITY RECEIPT */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm relative bg-grid-diagram">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2.5 py-1 rounded">
                WORKING MODEL 01 · PARTICIPANT-HELD
              </span>
              <FileCheck className="w-5 h-5 text-[#971F26]" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                CROSS-SYSTEM ADMINISTRATIVE CONTINUITY
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1D1D]">
                Continuity Receipt
              </h3>
            </div>

            <p className="text-stone-800 text-sm leading-relaxed font-sans font-medium">
              A participant-held cryptographic record preserving what occurred at each institutional encounter. Prevents repetitive retraumatization and lost records by verifying what was delivered, what was reviewed, and who owns the next action.
            </p>

            {/* Core Attributes */}
            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
                <span className="font-bold text-[#1C1D1D] block">1. PROVENANCE &amp; SHA-256 HASHING:</span>
                <span className="text-stone-700 font-sans">Every presented exhibit and receipt payload receives a client-side SHA-256 digest to prove uncorrupted provenance without uploading files to a public server.</span>
              </div>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
                <span className="font-bold text-[#1C1D1D] block">2. DECISION-OWNER ASSIGNMENT:</span>
                <span className="text-stone-700 font-sans">Explicitly records the specific institutional role and unit responsible for the immediate next action, eliminating unassigned handoffs.</span>
              </div>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
                <span className="font-bold text-[#1C1D1D] block">3. CONTEXT BEFORE CLOSURE:</span>
                <span className="text-stone-700 font-sans">Documents what materials were reviewed, what remained unexamined, and why a matter was closed before the file exits the system.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D9D1C4]">
            <Link
              href="/continuity"
              className="w-full py-3 bg-[#971F26] hover:bg-[#7A181E] text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>Explore Continuity Receipt Model</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* MODEL 2: PERSONAL NUMBER CONTINUITY */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm relative bg-grid-diagram">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-white px-2.5 py-1 rounded">
                WORKING MODEL 02 · STATUTORY AUTONOMY
              </span>
              <PhoneCall className="w-5 h-5 text-[#1C1D1D]" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                COMMUNICATION IDENTITY SEPARATION
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1D1D]">
                Personal Number Continuity
              </h3>
            </div>

            <p className="text-stone-800 text-sm leading-relaxed font-sans font-medium">
              Separates carrier account billing authority from adult communication identity under the federal Safe Connections Act (47 U.S.C. § 345). Protects a survivor’s phone number, two-factor authentication, and contact continuity without alerting the primary account holder.
            </p>

            {/* Core Attributes */}
            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
                <span className="font-bold text-[#1C1D1D] block">1. 47 U.S.C. § 345 STATUTORY PROTOCOL:</span>
                <span className="text-stone-700 font-sans">Provides structured notice templates and evidentiary standards (advocate verification, court orders) that mandate line separation within two business days.</span>
              </div>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
                <span className="font-bold text-[#1C1D1D] block">2. ZERO SURVEILLANCE &amp; NO NOTIFICATION:</span>
                <span className="text-stone-700 font-sans">Carriers are legally prohibited from notifying the primary account holder of the separation request or revealing the survivor’s new account info.</span>
              </div>

              <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
                <span className="font-bold text-[#1C1D1D] block">3. DIGITAL LIFELINE PRESERVATION:</span>
                <span className="text-stone-700 font-sans">Prevents sudden loss of banking 2FA, legal aid communications, school alerts, and medical portal access caused by unauthorized line cancellation.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D9D1C4]">
            <Link
              href="/other-ways-through#telecom"
              className="w-full py-3 bg-[#1C1D1D] hover:bg-black text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>See Safe Connections Act Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Review Trace Supporting Specification Box */}
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-3">
          <div className="flex items-center gap-2 text-stone-900 font-bold uppercase">
            <Activity className="w-4 h-4 text-[#971F26]" />
            <span>OPERATIONAL SPECIFICATION · REVIEW TRACE (AGENCY-SIDE SUPPORT)</span>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 bg-[#EEE8DD] text-stone-800 border border-stone-400 rounded font-bold">
            SUPPORTING SPECIFICATION · NOT A THIRD PRODUCT
          </span>
        </div>

        <p className="font-sans text-stone-800 text-xs sm:text-sm leading-relaxed">
          <strong>Review Trace</strong> is the agency-side operational and accountability specification that supports the Continuity Receipt. It defines a standardized administrative vocabulary so institutions can log how material was handled without pre-judging substantive merits.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
          <div className="p-2 bg-white rounded border border-stone-300">
            <strong className="text-[#2D5A3D] block">RECEIVED</strong>
            <span className="text-stone-600">Material logged in intake.</span>
          </div>
          <div className="p-2 bg-white rounded border border-stone-300">
            <strong className="text-[#1C1D1D] block">REVIEWED</strong>
            <span className="text-stone-600">Substantively evaluated.</span>
          </div>
          <div className="p-2 bg-white rounded border border-stone-300">
            <strong className="text-amber-700 block">UNAVAILABLE</strong>
            <span className="text-stone-600">Held by third party.</span>
          </div>
          <div className="p-2 bg-white rounded border border-stone-300">
            <strong className="text-[#971F26] block">UNREVIEWED (REASON)</strong>
            <span className="text-stone-600">Omitted with cause.</span>
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
