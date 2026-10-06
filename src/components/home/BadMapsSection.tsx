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
  Activity,
  BarChart3,
  Layers,
  ShieldCheck
} from "lucide-react";

export function BadMapsSection() {
  const empiricalSamples = [
    {
      title: "Verified Handoff Rate",
      count: "6 of 24 observable referrals",
      sample: "n=24 cohort",
      deck: "Sent ≠ Received / Acknowledged",
      triState: "14 Confirmed Gaps · 6 No Gap · 4 Unknown",
      impact: "Sending agency closes file as 'referred out' while receiving agency has no record of intake."
    },
    {
      title: "Continuity Loss Rate",
      count: "17 of 21 cross-boundary cases",
      sample: "n=21 cohort",
      deck: "County Line Amnesia",
      triState: "17 Confirmed Gaps · 3 No Gap · 1 Unknown",
      impact: "Cumulative protective order violations and stalking history vanish at municipal/county boundaries."
    },
    {
      title: "Ownerless Matter Rate",
      count: "9 of 18 multi-agency touchpoints",
      sample: "n=18 cohort",
      deck: "Nobody's Decision Ownership",
      triState: "9 Confirmed Gaps · 6 No Gap · 3 Unknown",
      impact: "Matter stopped between agencies with no named role or unit assigned to the next milestone."
    },
    {
      title: "Unreviewed Material Rate",
      count: "11 of 16 administrative closures",
      sample: "n=16 cohort",
      deck: "Accessible ≠ Reviewed",
      triState: "11 Confirmed Gaps · 3 No Gap · 2 Unknown",
      impact: "Exhibits presented by participant remained unexamined prior to file archiving without stated cause."
    },
    {
      title: "Referral Loop Rate",
      count: "5 of 19 navigation pathways",
      sample: "n=19 cohort",
      deck: "Circular Runaround (A → B → A)",
      triState: "5 Confirmed Gaps · 11 No Gap · 3 Unknown",
      impact: "Police require shelter intake; shelter requires court order; court clerk directs back to police."
    },
    {
      title: "Disconnected Related Matters",
      count: "13 of 15 multi-proceeding cases",
      sample: "n=15 cohort",
      deck: "Parallel Blind Proceedings",
      triState: "13 Confirmed Gaps · 1 No Gap · 1 Unknown",
      impact: "Caseworker or court acts without awareness of active related safety matters in adjacent jurisdiction."
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-10 shadow-sm bg-grid-diagram select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26]">
            SECTION 06 · BAD MAPS RESEARCH LAYER
          </span>
          <span className="coord-tick">[EMPIRICAL MEASUREMENT DATASET]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Bad Maps: Empirical Measurement of Institutional Seams
        </h2>

        <p className="text-stone-800 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
          When people are repeatedly sent into dead routes, broken referral loops, and conflicting bureaucratic rules, the failure is not individual—it is structural. Bad Maps is the empirical research layer measuring where public systems lose continuity across institutional boundaries.
        </p>

        {/* Tri-State Methodology Strip */}
        <div className="p-3.5 bg-[#F5F1E8] rounded-xl border border-stone-300 text-xs font-mono text-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#971F26]" />
            <span className="font-bold uppercase">TRI-STATE EMPIRICAL METHODOLOGY:</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#971F26] font-bold">1. CONFIRMED GAP</span>
            <span className="text-[#2D5A3D] font-bold">2. NO GAP OBSERVED</span>
            <span className="text-stone-600">3. UNKNOWN / INSUFFICIENT RECORD</span>
          </div>
        </div>
      </div>

      {/* Observed Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {empiricalSamples.map((sample, idx) => (
          <div
            key={idx}
            className="bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl p-5 space-y-3 flex flex-col justify-between shadow-2xs hover:border-[#971F26] transition-colors font-mono text-xs"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
                <span className="font-bold uppercase bg-[#971F26] text-white px-2 py-0.5 rounded">
                  METRIC 0{idx + 1}
                </span>
                <span className="text-stone-600 font-bold">
                  {sample.sample}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] text-stone-600 font-bold uppercase block">
                  {sample.deck}
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D] font-sans">
                  {sample.title}
                </h3>
                <span className="text-xs font-bold text-[#971F26] block">
                  {sample.count}
                </span>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed font-sans pt-1">
                {sample.impact}
              </p>
            </div>

            <div className="p-2 bg-white rounded border border-stone-300 text-[10px] text-stone-600 leading-tight">
              <strong>BREAKDOWN:</strong> {sample.triState}
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
            Bad Maps does <strong>NOT</strong> publish individual survivor records, create public dossiers, identify alleged perpetrators, or calculate automated credibility scores. Gaps describe observable administrative conditions (causes include statutory rules, resource limits, and system design), not accusations of staff misconduct.
          </p>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#D9D1C4]">
        <span className="text-xs font-mono text-stone-700">
          EXPLORE COMPLETE 12-ITEM GAP TAXONOMY:
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
