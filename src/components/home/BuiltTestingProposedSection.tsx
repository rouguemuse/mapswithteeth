import React from "react";
import Link from "next/link";
import { CheckCircle2, FlaskConical, Milestone, ShieldCheck, ArrowRight, Layers, FileText, Shuffle, Scale, AlertTriangle, Building } from "lucide-react";

export function BuiltTestingProposedSection() {
  const stages = [
    {
      stage: "STAGE 01",
      name: "Resource Intelligence",
      status: "LIVE / ACTIVE BUILD",
      statusBadge: "V0 LIVE",
      statusClass: "bg-[#E8F3EB] border-[#2D5A3D] text-[#2D5A3D]",
      icon: <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />,
      description: "Barrier-first discovery for when conventional crisis hotlines fail or stall.",
      items: [
        "Barrier-first resource search (No ID, pets, transit, after-hours)",
        "Texas Deep Dive (statutory rights & 254-county scope)",
        "Other Ways Through (nationwide & industry benevolence funds)",
        "Access friction tagging & unadvertised condition rules",
        "Deterministic progressive qualification engine",
        "Ask Us to Look (structured investigation intake)",
      ],
    },
    {
      stage: "STAGE 02",
      name: "Survivor Organizer & Originals Vault",
      status: "PROTOTYPE / DEVELOPMENT ROADMAP",
      statusBadge: "PROTOTYPE",
      statusClass: "bg-[#FEF3C7] border-[#D97706] text-[#92400E]",
      icon: <FileText className="w-4 h-4 text-[#92400E]" />,
      description: "Survivor-controlled documentation architecture. Tell it once. Carry it forward.",
      items: [
        "Personal chronology (incidents, dates, communications, agencies)",
        "Originals Vault: cryptographic file hashing & metadata preservation",
        "Distinguish original proof from annotations and summaries",
        "Provenance tracking: record where every document originated",
        "Exportable scoped packets (share only what is needed)",
        "Zero surveillance: zero automatic sharing with agencies",
      ],
    },
    {
      stage: "STAGE 03",
      name: "Bridge & Continuity Receipts",
      status: "CONTINUITY PILOT ROADMAP",
      statusBadge: "PILOT ROADMAP",
      statusClass: "bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D]",
      icon: <Shuffle className="w-4 h-4 text-[#971F26]" />,
      description: "Stopping context from vanishing when moving between agencies or counties.",
      items: [
        "Continuity Receipts: Who, When, Reference, What was presented",
        "Referral-chain tracking (Agency A → Receipt → Agency B)",
        "Preserve what action was taken vs. declined with stated reasons",
        "Cross-county jurisdictional handoff preservation",
        "Next decision-owner identification and pending document checklists",
        "Survivor-held continuity receipts (user controls what follows)",
      ],
    },
    {
      stage: "STAGE 04",
      name: "Context Before Closure",
      status: "FIELD PILOT ROADMAP",
      statusBadge: "FIELD PILOT",
      statusClass: "bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D]",
      icon: <Scale className="w-4 h-4 text-[#1C1D1D]" />,
      description: "Documenting why cases stop, what was left unreviewed, and where responsibility moved.",
      items: [
        "Decision & decline documentation (jurisdiction, eligibility, capacity)",
        "Reviewed vs. unreviewed context logging",
        "Detect circular referral runarounds (A sends to B, B sends to A)",
        "Escalation signal: 'No Functioning Decision-Owner Identified'",
        "Closed is not the same as resolved tracking",
        "Procedural gap identification for legal and advocacy escalations",
      ],
    },
    {
      stage: "STAGE 05",
      name: "Bad Maps — System Intelligence",
      status: "SYSTEM INTELLIGENCE ROADMAP",
      statusBadge: "SYSTEMS RESEARCH",
      statusClass: "bg-[#FDF2F2] border-[#971F26] text-[#971F26]",
      icon: <AlertTriangle className="w-4 h-4 text-[#971F26]" />,
      description: "Aggregated, deidentified pattern analysis of where institutional pathways break.",
      items: [
        "Deidentified referral-loop and dead-end mapping",
        "County-line failure tracking across municipal borders",
        "Ghost programs (published eligibility vs. real-world access)",
        "Conflicting jurisdiction instruction heatmaps",
        "Public-interest systems research (never scoring individual survivors)",
        "Actionable reform evidence for policy advocates and funders",
      ],
    },
    {
      stage: "STAGE 06",
      name: "Partner Infrastructure",
      status: "LONG HORIZON",
      statusBadge: "LONG HORIZON",
      statusClass: "bg-stone-200 border-stone-400 text-stone-700",
      icon: <Building className="w-4 h-4 text-stone-600" />,
      description: "Interoperable, consent-based partner handoff standards for allied organizations.",
      items: [
        "Consent-based partner handoff protocols",
        "Interoperable continuity packets for participating agencies",
        "Strict governance and role-based cryptographic access controls",
        "Advocate and navigator verification workflows",
        "High-assurance privacy architecture",
        "Institutional continuity integration",
      ],
    },
  ];

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
                <span className={`px-2 py-0.5 rounded border text-[10px] font-bold font-mono ${st.statusClass}`}>
                  {st.statusBadge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-[#1C1D1D] leading-tight">
                  {st.name}
                </h3>
                <span className="text-[10px] font-mono text-stone-600 block mt-0.5 uppercase tracking-wider font-semibold">
                  STATUS: {st.status}
                </span>
                <p className="text-xs text-stone-800 font-sans mt-1.5 leading-snug">
                  {st.description}
                </p>
              </div>

              <ul className="space-y-1.5 text-xs text-stone-900 font-sans pt-1 border-t border-[#D9D1C4]/70">
                {st.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#971F26] font-bold font-mono text-[10px] mt-0.5">•</span>
                    <span className="leading-tight">{it}</span>
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
