import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, FileText, Scale, ShieldCheck, ArrowRight } from "lucide-react";

export function ParticipateSection() {
  const pathways = [
    {
      title: "Partner With Us",
      deck: "Frontline advocates, legal aid counsel, and pilot agencies testing referral models.",
      href: "/for-partners",
      code: "ROLE 01",
    },
    {
      title: "Field Notes & Writing",
      deck: "Read our flagship analysis: 'The Human Becomes the Integration Layer.'",
      href: "/writing",
      code: "ROLE 02",
    },
    {
      title: "Texas Policy Lab",
      deck: "Review statutory frameworks across Property, Family, and Utility codes.",
      href: "/policy",
      code: "ROLE 03",
    },
    {
      title: "Evidence Safeguards",
      deck: "Explore the 8 core integrity safeguards and non-implication principles.",
      href: "/continuity/safeguards",
      code: "ROLE 04",
    },
  ];

  return (
    <section
      id="participate"
      className="bg-[#11100F] text-[#F8F5EE] border-4 border-[#11100F] p-8 sm:p-12 lg:p-16 space-y-10 shadow-2xl select-none font-sans scroll-mt-24 relative overflow-hidden"
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 opacity-10 bg-grid-ledger pointer-events-none" />

      {/* Header */}
      <div className="border-b border-[#2B2926] pb-8 space-y-4 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#E85D6B] bg-white/10 px-3 py-1 rounded-xs">
            PARTICIPATE · COLLABORATION &amp; FIELD REVIEW
          </span>
          <span className="font-mono text-xs text-[#A39E94]">[OPEN PUBLIC-INTEREST ARCHIVE]</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight">
          Pressure-test the continuity framework.
        </h2>

        <p className="text-[#D8D2C6] text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
          Maps With Teeth is an open public-interest initiative. We do not operate as a government agency or legal representation service. We invite frontline navigators, caseworkers, legal aid attorneys, and civic researchers to challenge, audit, and refine our schemas.
        </p>
      </div>

      {/* Pathways Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {pathways.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-[#1A1817] border border-[#332E29] hover:border-[#841F2B] p-6 rounded-xs transition-all flex flex-col justify-between space-y-4 hover:shadow-lg"
            >
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-[#E85D6B] font-bold block">
                  [{item.code}]
                </span>
                <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#E85D6B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A39E94] leading-relaxed font-sans">
                  {item.deck}
                </p>
              </div>

              <div className="pt-3 border-t border-[#262320] flex items-center justify-between text-xs font-mono text-[#E5DFC8] group-hover:text-[#E85D6B]">
                <span>ENGAGE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Closing Editorial Compass Horizon */}
      <div className="pt-6 border-t border-[#2B2926] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A39E94] relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 shrink-0">
            <Image
              src="/images/art/motif_compass.png"
              alt="Compass Rose"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <span>&ldquo;People shouldn&apos;t have to become an expert in broken systems just to find help.&rdquo;</span>
        </div>
        <div className="text-[#E85D6B] font-bold">
          MWT-SPEC-2026-V1.0
        </div>
      </div>
    </section>
  );
}
