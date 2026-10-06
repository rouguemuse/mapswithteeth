"use client";

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
  Activity
} from "lucide-react";

export function BadMapsSection() {
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
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-10 shadow-sm bg-grid-diagram select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26]">
            SECTION 06 · BAD MAPS INTELLIGENCE
          </span>
          <span className="coord-tick">[EMPIRICAL RESEARCH DATASET]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Bad Maps: Deidentified System Failure Intelligence
        </h2>

        <p className="text-stone-800 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
          When people are repeatedly sent into dead routes, broken referral loops, and conflicting bureaucratic rules, the failure is not individual—it is structural. Bad Maps catalogs recurring seam failures to transform frontline runaround into actionable policy evidence.
        </p>

        {/* Research Framing Notice */}
        <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 text-xs font-mono text-stone-700 flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#971F26] shrink-0" />
          <span>Gap events and metrics are treated as empirical research material with sample sizes (<em>n=X</em>), not validated public scoring engines.</span>
        </div>
      </div>

      {/* Failure Patterns Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {failurePatterns.map((pattern, idx) => (
          <div
            key={idx}
            className="bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl p-5 space-y-3 flex flex-col justify-between shadow-2xs hover:border-[#971F26] transition-colors"
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

              <div className="space-y-0.5">
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
              <strong>SYSTEM RESULT:</strong> {pattern.impact}
            </div>
          </div>
        ))}
      </div>

      {/* Strict Guardrail Box */}
      <div className="p-4 bg-white border border-[#1C1D1D] rounded-xl flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-[#971F26] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs font-mono text-stone-800">
          <span className="font-bold text-[#971F26] uppercase block">
            ETHICAL &amp; EVIDENTIARY BOUNDARIES FOR BAD MAPS:
          </span>
          <p className="font-sans text-stone-700 leading-relaxed">
            Bad Maps does <strong>NOT</strong> publish individual survivor records, identify alleged perpetrators, or adjudicate disputed facts. It tracks purely structural failure modes: referral loops, contradictory mandates, unowned handoffs, and stale resource claims.
          </p>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#D9D1C4]">
        <span className="text-xs font-mono text-stone-700">
          HAVE YOU ENCOUNTERED A SYSTEM SEAM FAILURE?
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/bad-maps"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1C1D1D] hover:text-[#971F26] uppercase tracking-wider"
          >
            <span>Explore Bad Maps Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/feedback"
            className="px-4 py-2 bg-[#971F26] hover:bg-[#7A181E] text-white rounded text-xs font-mono font-bold uppercase tracking-wider shadow-xs"
          >
            Submit a System Gap
          </Link>
        </div>
      </div>
    </section>
  );
}
