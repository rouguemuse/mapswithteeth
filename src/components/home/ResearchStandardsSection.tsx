import React from "react";
import Link from "next/link";
import { FileCheck, Activity, Scale, ArrowRight } from "lucide-react";

export function ResearchStandardsSection() {
  const cards = [
    {
      label: "SPECIFICATION",
      title: "Continuity Standard",
      icon: FileCheck,
      description:
        "Six canonical modules covering linked-matter signals, closed-loop referrals, participant-held receipts, cumulative review triggers, multi-system handoff manifests, and administrative review traces.",
      linkText: "Read 6-Module Standard",
      href: "/continuity"
    },
    {
      label: "EMPIRICAL RESEARCH",
      title: "Bad Maps Framework",
      icon: Activity,
      description:
        "A proposed audit methodology examining cross-system friction—evaluating verified handoffs, jurisdictional amnesia, circular referral runarounds, and ownerless matters without unverified cohort claims.",
      linkText: "Explore Bad Maps Research",
      href: "/bad-maps"
    },
    {
      label: "STATUTORY RESEARCH",
      title: "Texas Policy Lab",
      icon: Scale,
      description:
        "Analysis of statutory protections and administrative intersections across Texas Property Code § 92.016, PUCT rules, and family safety statutes—clarifying where state law creates existing relief.",
      linkText: "View Policy Research",
      href: "/policy"
    }
  ];

  return (
    <section id="research" className="space-y-6 scroll-mt-24 font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
            RESEARCH &amp; STANDARDS · METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            The underlying methodology
          </h2>
        </div>
        <span className="coord-tick">[RESEARCH SPECIFICATIONS]</span>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#971F26]">
                    {c.label}
                  </span>
                  <div className="p-2 bg-[#F5F1E8] border border-stone-300 rounded">
                    <Icon className="w-4 h-4 text-[#971F26]" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1C1D1D]">
                  {c.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {c.description}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-300">
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#1C1D1D] hover:text-[#971F26] transition"
                >
                  <span>{c.linkText}</span>
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
