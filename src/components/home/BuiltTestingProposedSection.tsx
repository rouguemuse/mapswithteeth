import React from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { PRODUCT_MATURITY_STAGES } from "@/data/taxonomy/productMaturity";
import { CheckCircle2, FileText, Shuffle, Scale, AlertTriangle, Building, ArrowRight, ShieldCheck } from "lucide-react";

export function BuiltTestingProposedSection() {
  const getStageIcon = (stageId: string) => {
    switch (stageId) {
      case "stage-01":
        return <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />;
      case "stage-02":
        return <FileText className="w-4 h-4 text-[#92400E]" />;
      case "stage-03":
        return <Shuffle className="w-4 h-4 text-[#971F26]" />;
      case "stage-04":
        return <Scale className="w-4 h-4 text-[#1C1D1D]" />;
      case "stage-05":
        return <AlertTriangle className="w-4 h-4 text-[#971F26]" />;
      case "stage-06":
      default:
        return <Building className="w-4 h-4 text-stone-600" />;
    }
  };

  const stages = PRODUCT_MATURITY_STAGES.map((s) => ({
    stage: s.stageCode,
    name: s.title,
    status: s.status,
    statusLabel: s.statusLabel,
    icon: getStageIcon(s.stageId),
    description: s.description,
    items: s.deliverables,
  }));

  return (
    <section className="space-y-8 select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold">
            STAGE DISCLOSURE & FULL PRODUCT ROADMAP
          </span>
          <span className="coord-tick text-stone-700">[STAGE 01 TO STAGE 06]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          What is built, what we&apos;re testing, and what comes next
        </h2>

        <p className="text-base sm:text-[17px] text-stone-900 max-w-3xl leading-relaxed font-sans font-medium">
          Maps With Teeth is an end-to-end initiative combining Resource Intelligence and Continuity Infrastructure. We are transparent about what is operational today versus our pilot and development roadmap.
        </p>
      </div>

      {/* 6-Stage Comprehensive Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stages.map((st) => (
          <div
            key={st.stage}
            className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3.5 shadow-2xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-xs">
                <span className="font-bold uppercase flex items-center gap-1.5 text-stone-900">
                  {st.icon}
                  <span>{st.stage}</span>
                </span>
                <StatusBadge type="product" status={st.status} label={st.statusLabel} />
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-[#1C1D1D] leading-tight">
                  {st.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-800 font-sans mt-1.5 leading-snug">
                  {st.description}
                </p>
              </div>

              <ul className="space-y-1.5 text-xs text-stone-900 font-sans pt-1 border-t border-[#D9D1C4]/70">
                {st.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#971F26] font-bold font-mono text-[10px] mt-0.5">•</span>
                    <span className="leading-snug">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Explicit Safety & Positioning Statement */}
      <div className="p-5 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl space-y-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#971F26] font-bold uppercase tracking-wider text-xs">
          <ShieldCheck className="w-4 h-4" />
          <span>Product Positioning & Boundaries</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs sm:text-sm">
          <div className="p-3 bg-[#EEE8DD] border border-[#D9D1C4] rounded space-y-1">
            <strong className="font-mono text-xs text-[#2D5A3D] uppercase block">
              ✓ What Maps With Teeth Is:
            </strong>
            <p className="text-stone-800 leading-snug">
              Barrier-first resource intelligence, survivor-controlled documentation, continuity receipt infrastructure, referral & handoff intelligence, and public-interest systems gap research.
            </p>
          </div>

          <div className="p-3 bg-[#EEE8DD] border border-[#D9D1C4] rounded space-y-1">
            <strong className="font-mono text-xs text-[#971F26] uppercase block">
              ✕ What Maps With Teeth Is Not:
            </strong>
            <p className="text-stone-800 leading-snug">
              Not an emergency 911 service, legal-services provider, law enforcement database, allegation adjudication engine, surveillance tool, or automatic cross-agency sharing system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
