import React from "react";
import Link from "next/link";
import {
  Compass,
  AlertTriangle,
  RotateCcw,
  Ban,
  ArrowRight,
  ShieldAlert,
  FileX,
  FileQuestion,
  HelpCircle,
  Scale,
  Building2,
  Users,
  Send,
  Layers,
  MapPin,
  GitBranch,
  Activity
} from "lucide-react";

export const metadata = {
  title: "Bad Maps: Empirical System Failure Research | Maps With Teeth",
  description:
    "Deidentified empirical research and pressure-testing on recurring dead routes, circular referral loops, unacknowledged handoffs, and institutional seam failures."
};

export default function BadMapsPage() {
  const failurePatterns = [
    {
      title: "Circular Referral Loops",
      tag: "DEAD ROUTE: A → B → A",
      sample: "n=14 observed cases",
      description:
        "Police refer survivor to a shelter; shelter requires a civil protective order from court; court clerk instructs survivor to file an offense report with police first.",
      impact: "Survivor spends days in transit; no agency takes initial jurisdiction."
    },
    {
      title: "Unacknowledged Handoffs",
      tag: "SEAM GAP: SENT ≠ RECEIVED",
      sample: "n=22 observed cases",
      description:
        "An investigator or advocate emails a case summary to an adjacent county department. The email is never acknowledged, assigned, or opened.",
      impact: "The sending agency closes their file under 'referred out,' while the recipient never opens one."
    },
    {
      title: "Conflicting Agency Rules",
      tag: "IMPOSSIBLE PREREQUISITE",
      sample: "n=9 observed cases",
      description:
        "Housing authority requires survivor to maintain continuous county residence for emergency voucher; safety plan requires immediate relocation out of county.",
      impact: "Following the safety order forfeits housing; following housing rules creates severe physical peril."
    },
    {
      title: "Statutory Waiver Denial",
      tag: "FICTIONAL PREREQUISITE",
      sample: "n=18 observed cases",
      description:
        "Utility provider or landlord demands a formal police report to waive deposits, ignoring Texas statutes (16 TAC § 25.478 / Prop. Code § 92.016) that permit advocate letters.",
      impact: "Survivor without police reports is unlawfully turned away."
    },
    {
      title: "Phantom Available Programs",
      tag: "STALE DIRECTORY DATA",
      sample: "n=31 observed listings",
      description:
        "A 211 directory lists an active emergency travel grant; survivor visits in person only to learn application intake was paused 8 months prior.",
      impact: "Survivor expends their last $20 of fuel reaching an inactive resource."
    },
    {
      title: "Interstate / Cross-County Amnesia",
      tag: "JURISDICTION TRANSFER LOSS",
      sample: "n=12 observed cases",
      description:
        "Survivor moves across county lines to escape stalking. New law enforcement agency treats each subsequent breach as an isolated 'first-time noise disturbance.'",
      impact: "Cumulative pattern and history of protective order violations vanish at the county line."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 select-none font-sans">
      {/* 1. Header */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              EMPIRICAL SYSTEMS RESEARCH &amp; PRESSURE-TESTING
            </span>
          </div>
          <span className="coord-tick">[INDEX REF: BAD-MAPS-ATLAS-2026]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Bad Maps: Mapping Where the Routes Break
        </h1>

        <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans font-medium max-w-3xl">
          When people are repeatedly sent into dead routes, circular loops, and contradictory rules, the failure is not individual—it is structural. Bad Maps catalogs recurring seam failures across institutional boundaries to transform frontline runaround into actionable policy evidence.
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

        {/* Research Status Notice */}
        <div className="p-3.5 bg-[#F5F1E8] rounded-lg border border-stone-300 text-xs font-mono text-stone-800 space-y-1">
          <div className="flex items-center gap-2 font-bold text-[#971F26]">
            <Activity className="w-4 h-4" />
            <span>RESEARCH METHODOLOGY NOTE:</span>
          </div>
          <p className="font-sans text-stone-700 text-[12px] leading-relaxed">
            All gap event taxonomies, friction patterns, and metric indicators are treated as empirical research and pressure-test material with sample sizes (<em>n=X</em>), not finalized scoring engines or validated public statistics, until standard definitions and comprehensive observations exist across Texas jurisdictions.
          </p>
        </div>
      </div>

      {/* 2. Failure Patterns Catalog */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            Catalog of Recurring System Seam Failures
          </h2>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            EMPIRICAL STRUCTURAL RESEARCH
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {failurePatterns.map((pattern, idx) => (
            <div
              key={idx}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 space-y-3 flex flex-col justify-between shadow-2xs hover:border-[#971F26] transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
                  <span className="font-bold uppercase bg-[#971F26] text-white px-2 py-0.5 rounded">
                    PATTERN 0{idx + 1}
                  </span>
                  <span className="text-stone-600 font-bold">
                    {pattern.sample}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-stone-600 font-bold uppercase block">
                    {pattern.tag}
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                    {pattern.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-800 leading-relaxed font-sans">
                  {pattern.description}
                </p>
              </div>

              <div className="p-2.5 bg-[#FDF2F2] rounded border border-[#971F26]/30 text-[11px] font-mono text-[#971F26] leading-tight">
                <strong>SYSTEM IMPACT:</strong> {pattern.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Evidentiary Guardrails */}
      <section className="p-6 bg-white border-2 border-[#1C1D1D] rounded-2xl space-y-3">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-2">
          <ShieldAlert className="w-5 h-5 text-[#971F26]" />
          <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
            Ethical &amp; Evidentiary Standard for Bad Maps
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
          Bad Maps does <strong>NOT</strong> publish individual survivor records, create public dossiers, identify alleged perpetrators, or calculate automated credibility or risk scores. It evaluates purely structural failure modes: referral loops, contradictory mandates, unowned handoffs, and stale resource claims.
        </p>
      </section>

      {/* 4. Submission Action Banner */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
              Have You Encountered a Dead Route or Referral Loop?
            </h3>
            <p className="text-xs text-stone-700 font-sans">
              Help us document broken institutional handoffs to inform policy and system design.
            </p>
          </div>

          <Link
            href="/feedback"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit a System Gap</span>
          </Link>
        </div>
      </section>

      {/* 5. Navigation Footer */}
      <div className="pt-6 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/"
          className="text-stone-600 hover:text-[#1C1D1D] uppercase font-bold tracking-wider"
        >
          ← Return to Overview
        </Link>
        <Link
          href="/policy"
          className="px-5 py-2.5 bg-[#1C1D1D] hover:bg-black text-white rounded font-bold uppercase tracking-wider"
        >
          Explore Texas Policy Lab →
        </Link>
      </div>
    </div>
  );
}
