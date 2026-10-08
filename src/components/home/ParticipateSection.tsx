import React from "react";
import Link from "next/link";
import { Users, FileText, Scale, ShieldCheck, ArrowRight } from "lucide-react";

export function ParticipateSection() {
  const pathways = [
    {
      title: "Partner With Us",
      deck: "Frontline advocates, legal aid counsel, and pilot agencies reviewing workflows.",
      href: "/for-partners",
      icon: Users
    },
    {
      title: "Field Notes & Writing",
      deck: "Read our flagship analysis: \"The Human Becomes the Integration Layer.\"",
      href: "/writing",
      icon: FileText
    },
    {
      title: "Texas Policy Lab",
      deck: "Review statutory frameworks across Property, Family, and Utility codes.",
      href: "/policy",
      icon: Scale
    },
    {
      title: "Evidence Safeguards",
      deck: "Explore the 8 core integrity safeguards and non-implication principles.",
      href: "/continuity/safeguards",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="participate" className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-md select-none font-sans scroll-mt-24">
      {/* Header */}
      <div className="border-b border-stone-800 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26] bg-white/10 px-2.5 py-1 rounded">
            PARTICIPATE · COLLABORATION &amp; FIELD REVIEW
          </span>
          <span className="coord-tick text-stone-400">[PUBLIC-INTEREST REVIEW]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
          Pressure-test the continuity framework
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          Maps With Teeth is an open public-interest initiative. We do not operate as a government agency or legal representation service. We invite frontline navigators, caseworkers, legal aid attorneys, and civic researchers to challenge, audit, and refine our schemas.
        </p>
      </div>

      {/* Pathways Grid (Responsive, max 4 items) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pathways.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="p-4 bg-stone-900 border border-stone-800 hover:border-[#971F26] rounded-xl flex flex-col justify-between space-y-3 group transition shadow-2xs hover:shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Icon className="w-4 h-4 text-[#971F26]" />
                  <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="font-serif font-bold text-base text-stone-100 group-hover:text-[#971F26] transition">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-stone-400 leading-snug">
                {item.deck}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
