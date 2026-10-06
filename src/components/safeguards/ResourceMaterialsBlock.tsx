import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, ShieldCheck } from "lucide-react";

type Material = {
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  status: "AVAILABLE ON SITE" | "RESOURCE IN DEVELOPMENT";
  href?: string;
  icon: typeof FileText;
};

export function ResourceMaterialsBlock() {
  const materials: Material[] = [
    {
      title: "Cross-System Continuity Standard",
      subtitle: "Six core continuity modules",
      desc: "The live Maps With Teeth continuity architecture covering linked-matter review, closed-loop referrals, continuity receipts, cumulative review, decision ownership, and context before closure.",
      tag: "STANDARD",
      status: "AVAILABLE ON SITE",
      href: "/continuity",
      icon: ShieldCheck
    },
    {
      title: "Evidence Integrity & Administrative Traceability",
      subtitle: "Cross-cutting safeguards and Review Trace vocabulary",
      desc: "The live safeguard layer governing provenance, claim-evidence separation, barrier-aware cooperation, retaliation separation, rights-decision traceability, and observation-versus-disposition boundaries.",
      tag: "SAFEGUARDS",
      status: "AVAILABLE ON SITE",
      href: "/continuity/safeguards",
      icon: BookOpen
    },
    {
      title: "Texas Policy & Sunset Materials",
      subtitle: "Policy analysis and structural recommendations",
      desc: "Current policy materials are presented through the Policy & Systems Lab. Downloadable submission packets will be exposed only when final public assets exist in the production repository.",
      tag: "POLICY",
      status: "AVAILABLE ON SITE",
      href: "/policy",
      icon: FileText
    },
    {
      title: "Initiative Overview",
      subtitle: "Central explanation of why Maps With Teeth exists and how the model develops",
      desc: "Planned public resource. No download is exposed until the final production asset is present.",
      tag: "OVERVIEW",
      status: "RESOURCE IN DEVELOPMENT",
      icon: FileText
    },
    {
      title: "Practitioner Brief",
      subtitle: "Review Trace & Provenance pressure-test handout",
      desc: "Planned practitioner-facing resource for structured review conversations. No placeholder download is exposed.",
      tag: "PRACTITIONER",
      status: "RESOURCE IN DEVELOPMENT",
      icon: FileText
    },
    {
      title: "Review Trace v0.1",
      subtitle: "Proposed administrative trace template",
      desc: "Planned implementation artifact showing how identified material could be logged without deciding merits. No placeholder download is exposed.",
      tag: "TEMPLATE",
      status: "RESOURCE IN DEVELOPMENT",
      icon: FileText
    },
    {
      title: "Agency Implementation Playbook",
      subtitle: "Governance, synthetic testing, pilot operations, and stop conditions",
      desc: "Planned agency-facing implementation resource. No placeholder download is exposed.",
      tag: "IMPLEMENTATION",
      status: "RESOURCE IN DEVELOPMENT",
      icon: FileText
    },
    {
      title: "Evidence Integrity Glossary",
      subtitle: "Defined terms for provenance, corroboration, barriers, dispositions, and decision ownership",
      desc: "Planned methodology reference. No placeholder download is exposed.",
      tag: "GLOSSARY",
      status: "RESOURCE IN DEVELOPMENT",
      icon: BookOpen
    },
    {
      title: "Participant / Survivor & Parent Continuity Guide",
      subtitle: "Informational continuity and documentation guide",
      desc: "Planned participant-facing informational resource. No placeholder download is exposed.",
      tag: "GUIDE",
      status: "RESOURCE IN DEVELOPMENT",
      icon: FileText
    }
  ];

  return (
    <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
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
          Live materials link only to resources that currently exist on the site. Planned downloadable guides and implementation documents are labeled in development until a real production asset is present.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {materials.map((mat) => {
          const IconComponent = mat.icon;
          const available = mat.status === "AVAILABLE ON SITE" && mat.href;

          return (
            <div
              key={mat.title}
              className="p-5 bg-white border border-[#1C1D1D] rounded-xl space-y-3 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 bg-[#EEE8DD] text-[#1C1D1D] text-[10px] font-mono font-bold rounded">
                    {mat.tag}
                  </span>
                  <IconComponent className="w-4 h-4 text-stone-500" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#1C1D1D] leading-snug">
                  {mat.title}
                </h4>
                <p className="text-xs font-mono text-stone-600 font-medium">
                  {mat.subtitle}
                </p>
                <p className="text-xs font-sans text-stone-700 leading-relaxed pt-1">
                  {mat.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200 flex items-center justify-between gap-3">
                {available ? (
                  <Link
                    href={mat.href!}
                    className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1.5"
                  >
                    <span>Explore Resource</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-[10.5px] font-mono font-bold text-stone-500 uppercase">
                    Resource in development
                  </span>
                )}
                <span className={`text-[10px] font-mono font-bold uppercase ${available ? "text-emerald-700" : "text-stone-500"}`}>
                  {mat.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
