import React from "react";
import Link from "next/link";
import { Users, FileText, Scale, ShieldCheck, ArrowRight } from "lucide-react";

export function ParticipateSection() {
  const pathways = [
    {
      title: "Partner With Us",
      deck: "Frontline advocates, legal aid counsel, and pilot agencies testing referral models.",
      href: "/for-partners",
      icon: Users,
    },
    {
      title: "Field Notes & Writing",
      deck: "Read our flagship analysis: \"The Human Becomes the Integration Layer.\"",
      href: "/writing",
      icon: FileText,
    },
    {
      title: "Texas Policy Lab",
      deck: "Review statutory frameworks across Property, Family, and Utility codes.",
      href: "/policy",
      icon: Scale,
    },
    {
      title: "Evidence Safeguards",
      deck: "Explore the 8 core integrity safeguards and non-implication principles.",
      href: "/continuity/safeguards",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="participate"
      className="bg-mwt-black text-mwt-ivory border-2 border-mwt-black rounded-lg p-6 sm:p-10 space-y-8 shadow-md select-none font-sans scroll-mt-24"
    >
      {/* Header */}
      <div className="border-b border-[#2B2926] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-mwt-oxblood-light bg-white/10 px-2.5 py-1 rounded-xs">
            PARTICIPATE · COLLABORATION &amp; FIELD REVIEW
          </span>
          <span className="coord-tick text-[#A39E94]">[PUBLIC-INTEREST INVITATION]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
          Pressure-test the continuity framework
        </h2>

        <p className="text-[#D8D2C6] text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          Maps With Teeth is an open public-interest initiative. We do not operate as a government agency or legal representation service. We invite frontline navigators, caseworkers, legal aid attorneys, and civic researchers to challenge, audit, and refine our schemas.
        </p>
      </div>

      {/* Pathways Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pathways.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="p-4 bg-[#1A1817] border border-[#2B2926] hover:border-mwt-oxblood-light rounded-xs flex flex-col justify-between space-y-3 group transition shadow-2xs hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-mwt-oxblood-light"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Icon className="w-4 h-4 text-mwt-oxblood-light" aria-hidden="true" />
                  <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="font-serif font-bold text-base text-white group-hover:text-mwt-oxblood-light transition">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#A39E94] leading-snug">
                {item.deck}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
