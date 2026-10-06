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
  const proposedIndicators = [
    {
      title: "Verified Handoff Rate",
      status: "PROPOSED PILOT SPECIFICATION",
      deck: "Sent ≠ Received / Acknowledged",
      triState: "Confirmed Gap · No Gap Observed · Unknown / Insufficient",
      impact: "Measures whether referrals marked 'referred out' received timestamped confirmation or milestone acceptance from the receiving entity."
    },
    {
      title: "Continuity Loss Rate",
      status: "PROPOSED PILOT SPECIFICATION",
      deck: "County Line & Jurisdictional Amnesia",
      triState: "Confirmed Gap · No Gap Observed · Unknown / Insufficient",
      impact: "Evaluates whether cumulative protective orders, safety plans, and offense history carried into a new jurisdiction's initial file."
    },
    {
      title: "Ownerless Matter Rate",
      status: "PROPOSED PILOT SPECIFICATION",
      deck: "Nobody's Decision Ownership",
      triState: "Confirmed Gap · No Gap Observed · Unknown / Insufficient",
      impact: "Detects inter-agency handoffs where an intake closed without a named institutional role assigned to the immediate next milestone."
    },
    {
      title: "Unreviewed Material Rate",
      status: "PROPOSED PILOT SPECIFICATION",
      deck: "Accessible ≠ Reviewed",
      triState: "Confirmed Gap · No Gap Observed · Unknown / Insufficient",
      impact: "Audits whether presented documentary or digital exhibits remained unexamined prior to administrative case archiving."
    },
    {
      title: "Referral Loop Rate",
      status: "PROPOSED PILOT SPECIFICATION",
      deck: "Circular Runaround (A → B → A)",
      triState: "Confirmed Gap · No Gap Observed · Unknown / Insufficient",
      impact: "Measures circular referral transit where agency assistance is conditioned on prerequisites held by the referring agency."
    },
    {
      title: "Disconnected Related Matters",
      status: "PROPOSED PILOT SPECIFICATION",
      deck: "Parallel Blind Proceedings",
      triState: "Confirmed Gap · No Gap Observed · Unknown / Insufficient",
      impact: "Documents when adjacent court or agency divisions act without administrative awareness of active related safety proceedings."
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-10 shadow-sm bg-grid-diagram select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26]">
            BAD MAPS RESEARCH LAYER
          </span>
          <span className="coord-tick">[PROPOSED PILOT METHODOLOGY]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Bad Maps: Systems Research &amp; Seam Measurement
        </h2>

        <p className="text-stone-800 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
          When people are repeatedly sent into dead routes, broken referral loops, and conflicting bureaucratic rules, the failure is not individual—it is structural. Bad Maps defines observable administrative conditions to transform frontline runaround into rigorous policy evidence.
        </p>

        {/* Tri-State Methodology Strip */}
        <div className="p-3.5 bg-[#F5F1E8] rounded-xl border border-stone-300 text-xs font-mono text-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#971F26]" />
            <span className="font-bold uppercase">TRI-STATE RESEARCH METHODOLOGY:</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#971F26] font-bold">1. Confirmed Gap</span>
            <span className="text-stone-400">·</span>
            <span className="text-emerald-800 font-bold">2. No Gap Observed</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-600 font-bold">3. Unknown / Insufficient Record</span>
          </div>
        </div>
      </div>

      {/* Indicator Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {proposedIndicators.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl flex flex-col justify-between space-y-3 shadow-2xs font-mono text-xs"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-stone-500 font-bold text-[10px]">INDICATOR 0{idx + 1}</span>
                <span className="px-1.5 py-0.5 rounded bg-stone-200 text-stone-700 text-[9px] font-bold uppercase">
                  PROPOSED SPEC
                </span>
              </div>

              <h3 className="font-serif font-bold text-base text-[#1C1D1D] font-sans">
                {item.title}
              </h3>

              <div className="text-[11px] font-bold text-[#971F26]">
                &ldquo;{item.deck}&rdquo;
              </div>

              <p className="text-[11.5px] font-sans text-stone-700 leading-snug">
                {item.impact}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-300 text-[10px] text-stone-600">
              {item.triState}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="pt-4 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <span className="text-stone-600">
          The existence of an administrative gap does not imply individual staff misconduct.
        </span>
        <Link
          href="/bad-maps"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#971F26] text-white rounded font-bold uppercase tracking-wider hover:bg-[#7A181E] transition"
        >
          <span>Explore Bad Maps Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
