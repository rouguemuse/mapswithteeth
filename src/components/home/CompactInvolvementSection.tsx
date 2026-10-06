import React from "react";
import Link from "next/link";
import { Users, FileText, Scale, ShieldCheck, ArrowRight } from "lucide-react";

export function CompactInvolvementSection() {
  const links = [
    {
      title: "Partner With Us",
      subtitle: "Frontline advocates, legal counsel, and pilot agencies",
      href: "/for-partners",
      icon: Users
    },
    {
      title: "Field Notes & Writing",
      subtitle: "Flagship analysis: \"The Human Becomes the Integration Layer\"",
      href: "/writing",
      icon: FileText
    },
    {
      title: "Texas Policy Lab",
      subtitle: "Statutory analyses across Property, Family, and Utility codes",
      href: "/policy",
      icon: Scale
    },
    {
      title: "Evidence Safeguards",
      subtitle: "8 core integrity principles and Review Trace metadata",
      href: "/continuity/safeguards",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm font-sans">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-4">
        <div>
          <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
            GET INVOLVED · COLLABORATION &amp; FIELD REVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            Pressure-test the framework
          </h2>
        </div>
        <span className="coord-tick">[PUBLIC-INTEREST REVIEW]</span>
      </div>

      <p className="text-stone-800 text-sm sm:text-base leading-relaxed max-w-3xl">
        Maps With Teeth is developed in the public interest. We invite frontline navigators, shelter staff, legal aid attorneys, state agency analysts, and civic technologists to review our schemas, test referral workflows, and help audit statutory interpretations.
      </p>

      {/* 4 Compact Action Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="p-4 bg-[#F5F1E8] border border-stone-300 hover:border-[#1C1D1D] rounded-xl flex flex-col justify-between space-y-2 group transition shadow-2xs hover:shadow-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <Icon className="w-4 h-4 text-[#971F26]" />
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#1C1D1D] group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D] group-hover:text-[#971F26] transition">
                  {item.title}
                </h3>
              </div>
              <p className="text-[12px] text-stone-600 leading-snug">
                {item.subtitle}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
