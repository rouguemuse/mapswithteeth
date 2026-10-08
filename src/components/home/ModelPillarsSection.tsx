import React from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, FileCheck, ShieldCheck } from "lucide-react";

export function ModelPillarsSection() {
  const pillars = [
    {
      num: "01",
      title: "Continuity of Care & Handoffs",
      icon: RefreshCw,
      lead: "Closed-loop transitions across administrative silos.",
      description:
        "Replacing unconfirmed referrals with verifiable lifecycle states (Sent → Delivery Confirmed → Receipt Acknowledged → Responsibility Accepted). Prevents individuals from vanishing into institutional boundaries.",
      linkText: "View Module 02",
      href: "/continuity#module-02"
    },
    {
      num: "02",
      title: "Evidence Integrity & Baseline Preserves",
      icon: FileCheck,
      lead: "Participant-held artifacts with tamper detection.",
      description:
        "Using SHA-256 cryptographic digests strictly as baseline mathematical comparisons to detect unauthorized post-intake record modification, without asserting automatic proof of veracity, authorship, or legal admissibility.",
      linkText: "View Module 03",
      href: "/continuity#module-03"
    },
    {
      num: "03",
      title: "Accountability & Traceability",
      icon: ShieldCheck,
      lead: "Explicit milestone ownership without merit pre-judgment.",
      description:
        "The Review Trace records exactly which materials were presented, who reviewed them, what remained unexamined, and which official role owns the next milestone—creating clear accountability across administrative handoffs.",
      linkText: "View Review Trace Spec",
      href: "/continuity#receipt-specimen"
    }
  ];

  return (
    <section id="model" className="space-y-6 scroll-mt-24 font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
            THE MODEL · THREE FOUNDATIONAL PILLARS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            How the continuity layer works
          </h2>
        </div>
        <span className="coord-tick">[CORE PILLARS]</span>
      </div>

      {/* 3 Pillar Cards (Desktop 3-column max, responsive stacking on mobile) */}
      <div className="grid md:grid-cols-3 gap-5">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#971F26]">
                    PILLAR {p.num}
                  </span>
                  <div className="p-2 bg-[#F5F1E8] border border-stone-300 rounded">
                    <Icon className="w-4 h-4 text-[#971F26]" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1C1D1D] leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#1C1D1D]">
                  {p.lead}
                </p>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-300">
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D1D] hover:text-[#971F26] transition"
                >
                  <span>{p.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
