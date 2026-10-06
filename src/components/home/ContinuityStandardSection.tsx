"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  Link2,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Users,
  Building2,
  ArrowRight,
  ShieldCheck,
  FolderArchive,
  RefreshCw,
  Lock,
  Compass,
  Activity
} from "lucide-react";

export function ContinuityStandardSection() {
  const modules = [
    {
      num: "01",
      title: "LINKED-MATTER REVIEW",
      tagline: "Related does not mean proven.",
      description:
        "When defined indicators exist, authorized personnel should be able to determine whether potentially related matters already exist in another relevant agency or jurisdiction.",
      mechanism:
        "Acts strictly as a signal to review—NOT a determination that any allegation is true. Links matter existence without merging factual conclusions.",
      icon: Link2
    },
    {
      num: "02",
      title: "CLOSED-LOOP REFERRALS",
      tagline: "A referral should not end at 'sent.'",
      description:
        "Structured lifecycle tracking for every interagency handoff to prevent matters from falling into the jurisdictional void.",
      mechanism:
        "SENT → DELIVERY_CONFIRMED → RECEIPT_ACKNOWLEDGED → RESPONSIBILITY_ACCEPTED (referral ≠ successful handoff).",
      icon: RefreshCw
    },
    {
      num: "03",
      title: "CONTINUITY RECEIPT",
      tagline: "Principal working model: portable encounter proof.",
      description:
        "A standardized participant-held receipt containing essential metadata and SHA-256 digests needed to carry context forward across institutional boundaries.",
      mechanism:
        "Preserves: Agency, Date, Ref #, Submitted materials with SHA-256, Action taken, Review status, Next decision owner.",
      icon: FileText
    },
    {
      num: "04",
      title: "CUMULATIVE REVIEW TRIGGERS",
      tagline: "Recognizing fragmented patterns without automated risk scoring.",
      description:
        "Certain combinations prompt human supervisory or multidisciplinary review when repeated contacts across agencies indicate systemic risk.",
      mechanism:
        "Prompted when fragmented evaluation obscures cross-agency context. (Zero automated risk scoring or credibility ratings).",
      icon: AlertTriangle
    },
    {
      num: "05",
      title: "DECISION OWNERSHIP",
      tagline: "Eliminating unassigned responsibility.",
      description:
        "At every stage, explicitly identify which institution and role owns the immediate next milestone action.",
      mechanism:
        "Exposes situations where every agency has referred elsewhere, but no institution has accepted responsibility for the next step.",
      icon: Users
    },
    {
      num: "06",
      title: "CONTEXT BEFORE CLOSURE",
      tagline: "Accountability metadata before case exit.",
      description:
        "Before a qualifying matter is closed, preserve an administrative record of what was examined and what remained unreviewed.",
      mechanism:
        "Records: What was reviewed, what was unavailable, what was not reviewed with stated cause, and why the matter was closed.",
      icon: FolderArchive
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-10 shadow-sm bg-grid-diagram select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26]">
            SECTION 04 · THE CONTINUITY STANDARD
          </span>
          <span className="coord-tick">[PROTOCOL REF: MWT-STD-2026-06]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          The Cross-System Continuity Standard
        </h2>

        <p className="text-stone-800 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
          A proposed public-interest framework for preventing related matters from disappearing between institutional boundaries. Built on six core protocols that bridge agencies without compromising due process, creating centralized dossiers, or flattening institutional distinctions.
        </p>
      </div>

      {/* 6 Modules Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.num}
              className="bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl p-5 space-y-4 flex flex-col justify-between shadow-2xs hover:border-[#971F26] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                  <span className="text-xs font-mono font-bold text-[#971F26]">
                    MODULE {m.num}
                  </span>
                  <Icon className="w-4 h-4 text-stone-700" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                    {m.title}
                  </h3>
                  <p className="text-xs font-mono text-[#971F26] font-bold">
                    &ldquo;{m.tagline}&rdquo;
                  </p>
                </div>

                <p className="text-xs text-stone-800 leading-relaxed font-sans">
                  {m.description}
                </p>
              </div>

              <div className="p-2.5 bg-[#EEE8DD] rounded border border-stone-300 text-[11px] font-mono text-stone-900 leading-tight">
                <strong className="text-stone-950 block mb-0.5">PROTOCOL:</strong>
                {m.mechanism}
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Action */}
      <div className="pt-4 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs font-mono text-stone-700">
          STATUS: PROPOSED CONTINUITY PROTOCOL · OPEN FOR PEER REVIEW
        </div>
        <Link
          href="/continuity"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1D1D] hover:bg-black text-white rounded-md text-xs font-mono uppercase font-bold tracking-wider shadow-xs transition-colors"
        >
          <span>Read Full Continuity Standard</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
