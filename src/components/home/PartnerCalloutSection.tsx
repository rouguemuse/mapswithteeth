"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Scale,
  Building2,
  FileCheck,
  ArrowRight,
  Sparkles,
  Lock,
  Compass,
  CheckCircle2
} from "lucide-react";

export function PartnerCalloutSection() {
  const roles = [
    { title: "Frontline Validation", desc: "Advocates, caseworkers, and navigators testing if resource friction data matches reality." },
    { title: "Policy Review", desc: "Legislative and agency analysts evaluating statutory referral and data-exchange boundaries." },
    { title: "Privacy Review", desc: "Civil liberties and data-ethics experts stress-testing our anti-surveillance protocols." },
    { title: "Legal Review", desc: "Family, criminal, and administrative attorneys auditing evidentiary and due-process standards." },
    { title: "Pilot Design", desc: "County and municipal partners collaborating on Central Texas closed-loop trial workflows." },
    { title: "Referral-Flow Analysis", desc: "Organizations mapping how their incoming and outgoing handoffs currently succeed or stall." },
    { title: "Systems Research", desc: "Academic and institutional researchers analyzing multidisciplinary coordination models." },
    { title: "Technical Interoperability", desc: "Engineers reviewing cryptographic digest hashing and client-side privacy architecture." },
    { title: "Philanthropic Support", desc: "Public-interest foundations funding open-source infrastructure and field research." }
  ];

  return (
    <section className="bg-[#1C1D1D] text-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-md select-none font-sans">
      {/* Header */}
      <div className="border-b border-stone-700 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26] bg-white/10 px-2.5 py-1 rounded">
            COLLABORATION & CO-DESIGN
          </span>
          <span className="coord-tick text-stone-400">[CALL FOR PARTNERS: 2026]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
          We Are Looking for Partners to Pressure-Test the Continuity Model.
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          Maps With Teeth is an open public-interest initiative. We do not pretend to hold all the answers in isolation. We invite frontline practitioners, legal scholars, technologists, agency leaders, and funders to challenge and refine our specifications.
        </p>
      </div>

      {/* 9 Roles Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((r, idx) => (
          <div
            key={idx}
            className="p-4 bg-stone-900 border border-stone-800 rounded-lg space-y-1.5 hover:border-[#971F26] transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-[#971F26]">0{idx + 1}.</span>
              <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-stone-200">
                {r.title}
              </h3>
            </div>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              {r.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs font-mono text-stone-400">
          WE DO NOT CLAIM PARTNERSHIPS UNTIL FORMALLY ESTABLISHED.
        </div>
        <Link
          href="/for-partners"
          className="px-6 py-3 bg-[#971F26] hover:bg-[#7A181E] text-white rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors"
        >
          <span>Explore Partnership Opportunities</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
