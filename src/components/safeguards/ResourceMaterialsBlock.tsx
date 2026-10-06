import React from "react";
import Link from "next/link";
import { FileText, Download, ExternalLink, ArrowRight, ShieldCheck, BookOpen, Layers } from "lucide-react";

export function ResourceMaterialsBlock() {
  const materials = [
    {
      title: "Texas Policy Brief (v0.1)",
      subtitle: "Cross-System Case Continuity & Administrative Traceability",
      desc: "Model legislative memo and statutory analysis establishing statutory precedents (Tex. Fam. Code §§ 261, 264; Tex. Gov't Code § 791) for multidisciplinary continuity and survivor-held receipts.",
      tag: "POLICY BRIEF",
      href: "/policy",
      downloadName: "texas_policy_brief_v0.1.md",
      icon: FileText
    },
    {
      title: "DFPS Sunset Submission Memo",
      subtitle: "Structural Recommendations for Inter-Agency Handoffs",
      desc: "Formal administrative memo prepared for the Texas Sunset Advisory Commission review of child and family safety agencies, addressing intake fragmentation and closed-loop verification.",
      tag: "SUNSET MEMO",
      href: "/policy",
      downloadName: "dfps_sunset_submission_memo.md",
      icon: Layers
    },
    {
      title: "Cross-System Continuity Standard (v1.0-draft)",
      subtitle: "Six Core Operational Modules & Safeguard Architecture",
      desc: "Full open standard specification spanning Universal Invariant Minimum Intake, Bi-Directional Closed-Loop Confirmation, Cumulative Escalation, and Data Minimization.",
      tag: "SPECIFICATION",
      href: "/continuity",
      icon: ShieldCheck
    },
    {
      title: "Evidence Integrity & Administrative Traceability",
      subtitle: "Review Trace Vocabulary & Epistemic Safeguards",
      desc: "Proposed administrative vocabulary with 9 disposition statuses, provenance tracking protocols, and 7 locked principles of evidence integrity.",
      tag: "SAFEGUARDS",
      href: "/continuity/safeguards",
      icon: BookOpen
    }
  ];

  return (
    <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileText className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PUBLIC INTEREST MATERIALS
            </span>
          </div>
          <span className="coord-tick">[POLICY &amp; TECHNICAL MEMOS]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Policy &amp; Implementation Resources
        </h3>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          Authoritative policy briefs, sunset submissions, standard specifications, and administrative trace guidelines for legislative staff, agency legal counsel, researchers, and community navigators.
        </p>
      </div>

      {/* Grid of Materials */}
      <div className="grid sm:grid-cols-2 gap-4">
        {materials.map((mat, idx) => {
          const IconComponent = mat.icon;
          return (
            <div
              key={idx}
              className="p-5 bg-white border border-[#1C1D1D] rounded-xl space-y-3 flex flex-col justify-between shadow-2xs hover:border-[#971F26] transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
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

              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <Link
                  href={mat.href}
                  className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1.5"
                >
                  <span>Explore Document</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {mat.downloadName && (
                  <span className="text-[10.5px] font-mono text-stone-500">
                    Ref: {mat.downloadName}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
