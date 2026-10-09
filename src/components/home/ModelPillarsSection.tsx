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
        "Replacing unconfirmed referrals with verifiable state-machine transitions (Sent → Delivery Confirmed → Receipt Acknowledged → Responsibility Accepted). Prevents individuals from evaporating into jurisdictional seams.",
      linkText: "View Module 02 Specification",
      href: "/continuity#module-02",
    },
    {
      num: "02",
      title: "Evidence Integrity & Baseline Preserves",
      icon: FileCheck,
      lead: "Participant-held artifacts with tamper comparison.",
      description:
        "Using SHA-256 cryptographic digests strictly as baseline mathematical comparisons to detect unauthorized post-intake record modification, without asserting automatic proof of veracity, authorship, or legal admissibility.",
      linkText: "View Module 03 Specification",
      href: "/continuity#module-03",
    },
    {
      num: "03",
      title: "Accountability & Traceability",
      icon: ShieldCheck,
      lead: "Explicit milestone ownership without merit pre-judgment.",
      description:
        "The Review Trace records exactly which materials were presented, who reviewed them, what remained unexamined, and which official role owns the next milestone—creating clear accountability across administrative handoffs.",
      linkText: "View Review Trace Spec",
      href: "/continuity#receipt-specimen",
    },
  ];

  return (
    <section id="model" className="space-y-6 scroll-mt-24 font-sans select-none">
      {/* Header */}
      <div className="border-b border-[#C4B69E] pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono text-mwt-oxblood font-bold uppercase tracking-wider block">
            THE MODEL · THREE FOUNDATIONAL PILLARS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black tracking-tight">
            How the continuity layer works
          </h2>
        </div>
        <span className="coord-tick">[INFRASTRUCTURE PILLARS]</span>
      </div>

      {/* 3 Pillar Cards (Desktop 3-column max, responsive stacking on mobile) */}
      <div className="grid md:grid-cols-3 gap-5">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-mwt-oxblood">
                    PILLAR {p.num}
                  </span>
                  <div className="p-2 bg-mwt-ivory border border-[#C4B69E] rounded-xs">
                    <Icon className="w-4 h-4 text-mwt-oxblood" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-mwt-black leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-mwt-black">
                  {p.lead}
                </p>

                <p className="text-xs sm:text-sm text-mwt-graphite leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#C4B69E]">
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-mwt-black hover:text-mwt-oxblood transition"
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
