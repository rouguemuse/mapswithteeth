import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, ShieldCheck, Clock } from "lucide-react";

export function ResourceMaterialsBlock() {
  const availableMaterials = [
    {
      title: "Cross-System Continuity Standard",
      subtitle: "Six core continuity modules & data interchange specification",
      desc: "The open Maps With Teeth continuity architecture covering linked-matter review, closed-loop referrals, continuity contact records, cumulative review, decision ownership, and context before closure.",
      tag: "STANDARD",
      href: "/continuity",
      icon: ShieldCheck
    },
    {
      title: "Evidence Integrity & Administrative Traceability",
      subtitle: "8 cross-cutting safeguards & Review Trace vocabulary",
      desc: "The public safeguard layer governing provenance, claim-evidence separation, barrier-aware cooperation, retaliation separation, rights-decision traceability, and observation-versus-disposition boundaries.",
      tag: "SAFEGUARDS",
      href: "/continuity/safeguards",
      icon: BookOpen
    },
    {
      title: "Texas Policy & Systems Lab",
      subtitle: "When the Human Becomes the Integration Layer & DFPS Sunset Review",
      desc: "Administrative continuity and evidence-traceability reform initiative, statutory analyses (Property, Family, Labor, Utility codes), and pilot evaluation criteria.",
      tag: "POLICY",
      href: "/policy#integration-layer-reform",
      icon: FileText
    }
  ];

  const inDevelopmentMaterials = [
    {
      title: "Initiative Overview",
      desc: "Central briefing on why Maps With Teeth exists and how the model develops."
    },
    {
      title: "Practitioner Brief",
      desc: "Review Trace and provenance pressure-test handout for multi-disciplinary teams."
    },
    {
      title: "Review Trace v0.1 Template",
      desc: "Administrative trace template for logging identified materials without merits pre-judgment."
    },
    {
      title: "Agency Implementation Playbook",
      desc: "Governance, synthetic testing protocols, pilot operations, and stop conditions."
    },
    {
      title: "Evidence Integrity Glossary",
      desc: "Defined terms for provenance, corroboration, barrier reporting, and dispositions."
    },
    {
      title: "Participant Continuity Guide",
      desc: "Survivor-held documentation guide and portable record keeping instructions."
    }
  ];

  return (
    <section id="resources" className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-8 shadow-sm font-sans scroll-mt-24">
      {/* Section Header */}
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileText className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PUBLIC INTEREST MATERIALS
            </span>
          </div>
          <span className="coord-tick">[RESOURCE STATUS IS EXPLICIT]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Policy &amp; Implementation Resources
        </h3>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          Live links point exclusively to completed specifications currently published on this site. In-progress documentation is consolidated below with explicit development status.
        </p>
      </div>

      {/* 1. Live Available Resources Grid (3 Cards) */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 block">
          Available on Site
        </span>
        <div className="grid md:grid-cols-3 gap-4">
          {availableMaterials.map((mat) => {
            const IconComponent = mat.icon;
            return (
              <Link
                key={mat.title}
                href={mat.href}
                className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-sm hover:border-[#971F26] transition group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-emerald-300 bg-emerald-50 text-emerald-800">
                      {mat.tag}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#971F26]" />
                  </div>

                  <h4 className="font-serif font-bold text-lg text-[#1C1D1D] group-hover:text-[#971F26] transition">
                    {mat.title}
                  </h4>

                  <p className="text-xs text-stone-800 font-sans leading-relaxed">
                    {mat.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-300 flex items-center justify-between text-xs font-mono font-bold text-[#1C1D1D] group-hover:text-[#971F26]">
                  <span>View Specification</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Consolidated In-Development Status List */}
      <div className="bg-[#EEE8DD] border border-stone-300 rounded-xl p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2.5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-stone-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
              Resources in Development (Planned Public Assets)
            </span>
          </div>
          <span className="text-[11px] font-mono text-stone-600">
            No placeholder downloads exposed
          </span>
        </div>

        <p className="text-xs text-stone-700 font-sans leading-relaxed">
          The following materials are currently undergoing practitioner review and editorial drafting. Downloadable PDF/packet links will be exposed only when final public production assets exist in the repository.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {inDevelopmentMaterials.map((item) => (
            <div
              key={item.title}
              className="p-3 bg-[#F5F1E8] border border-stone-300 rounded-lg space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#1C1D1D]">
                  {item.title}
                </span>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-stone-200 text-stone-700 font-bold">
                  DRAFTING
                </span>
              </div>
              <p className="text-[11.5px] text-stone-600 font-sans leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
