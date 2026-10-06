import React from "react";
import Link from "next/link";
import { Compass, FileCheck, Activity, ArrowRight } from "lucide-react";

export function CompactWorkSection() {
  const cards = [
    {
      label: "FRONT-LINE NAVIGATION",
      title: "Reachable Resources",
      icon: Compass,
      description:
        "Verified frontline assistance, lateral benevolence funds, and statutory protections—such as emergency lease breaks under Texas Property Code § 92.016 and utility disconnect protections—matched directly to concrete obstacles without algorithmic guessing.",
      linkText: "Find Reachable Resources",
      href: "/find-help"
    },
    {
      label: "CONTINUITY TOOLS",
      title: "Continuity Tools & Standards",
      icon: FileCheck,
      description:
        "Open specifications designed to bridge institutional silos. The Continuity Receipt gives the participant a client-side record of what was submitted and who owns the next milestone; the Review Trace logs administrative handling without prejudging claim merits.",
      linkText: "Explore Continuity Standard",
      href: "/continuity"
    },
    {
      label: "SYSTEMS RESEARCH",
      title: "Systems Research",
      icon: Activity,
      description:
        "Bad Maps examines where public systems break down—documenting circular referral loops, unacknowledged transfers, and cross-boundary amnesia across agency lines to inform legislative and administrative reform.",
      linkText: "Explore Bad Maps Research",
      href: "/bad-maps"
    }
  ];

  return (
    <section id="the-work" className="space-y-6 scroll-mt-24 font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
            THE WORK · THREE CONNECTED APPROACHES
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            How the pieces fit together
          </h2>
        </div>
        <span className="coord-tick">[NAVIGATION GROUPINGS]</span>
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

                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
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
