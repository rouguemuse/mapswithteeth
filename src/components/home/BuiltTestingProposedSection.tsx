"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, FileText, Shuffle, Scale, AlertTriangle, Building, ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export function BuiltTestingProposedSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const stages = [
    {
      stage: "STAGE 01",
      name: "Resource Intelligence & Statutory Catalog",
      status: "BUILT",
      statusBadge: "bg-[#2D5A3D] text-white",
      description: "47 canonical verified resource records cross-checked against authoritative statutory texts, agency rules, and official program sources.",
      deliverables: [
        "Texas 254-county statutory dockets (Tex. Prop. Code § 92.016, PUCT § 25.478)",
        "Lateral relief catalog (culinary, craft artists, companion animal foster)",
        "Zero schema or citation drift across 1,070 automated QA assertions",
      ],
    },
    {
      stage: "STAGE 02",
      name: "Deterministic Fact Matcher & Intake Slice",
      status: "BUILT",
      statusBadge: "bg-[#2D5A3D] text-white",
      description: "Client-side qualification engine evaluating work history, legal status, and barriers without centralized PII storage.",
      deliverables: [
        "158 tri-state intake qualification tests with strict boolean false preservation",
        "50 multi-industry conflict reconciliation tests (arts, culinary, general)",
        "29 automated deterministic matching scenario suites",
      ],
    },
    {
      stage: "STAGE 03",
      name: "Continuity Receipts & Bridge Navigation",
      status: "PILOT DESIGN",
      statusBadge: "bg-amber-800 text-white",
      description: "Standardized touchpoint receipt generation for survivor and advocate encounters.",
      deliverables: [
        "Documents who, when, reference #, unreviewed materials, and stated decline reasons",
        "Flags circular referral runarounds and surfaces next decision-owners",
        "Decentralized, survivor-held artifact with zero cloud database dependency",
      ],
    },
    {
      stage: "STAGE 04",
      name: "Survivor Organizer & Originals Vault",
      status: "PILOT DESIGN",
      statusBadge: "bg-amber-800 text-white",
      description: "Client-side encrypted timeline builder and cryptographic evidence hashing.",
      deliverables: [
        "SHA-256 evidence fingerprinting to preserve file provenance",
        "Scoped export packets for legal aid attorneys without exposing full archives",
        "100% client-side execution with zero cloud storage vulnerabilities",
      ],
    },
    {
      stage: "STAGE 05",
      name: "Survivor Gap Fund & 25-Person Pilot",
      status: "PILOT DESIGN",
      statusBadge: "bg-amber-800 text-white",
      description: "Direct micro-grant fund ($200–$800) under dual-approval controls across a 90-day Central Texas cohort.",
      deliverables: [
        "Rapid barrier dissolution (lock changes, storage units, car repairs, pet boarding)",
        "Fiscal sponsorship and dual-approval fiduciary oversight",
        "Empirical barrier-removal cost efficiency tracking",
      ],
    },
    {
      stage: "STAGE 06",
      name: "Bad Maps & Systemic Policy Intelligence",
      status: "PLANNED",
      statusBadge: "bg-stone-700 text-white",
      description: "Aggregated, deidentified pattern intelligence mapping where institutional routes repeatedly break down.",
      deliverables: [
        "Exposing ghost programs and defunded hotlines",
        "Tracking county-line jurisdictional disputes and statutory non-compliance",
        "Providing empirical evidence for legislative and administrative reform",
      ],
    },
  ];

  return (
    <section className="space-y-8 select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold">
            CHAPTER 04 · PRODUCT TRUTH & MATURITY MATRIX
          </span>
          <span className="coord-tick text-stone-600">[STAGE 01 TO STAGE 06]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#26221F] tracking-tight leading-tight">
          What is built, what we&apos;re testing, and what comes next
        </h2>

        <p className="text-base sm:text-[17px] text-stone-800 max-w-3xl leading-relaxed font-sans font-normal">
          Maps With Teeth is an end-to-end initiative combining Resource Intelligence and Continuity Infrastructure. We are transparent about what is operational today versus our pilot design and long-term roadmap.
        </p>
      </div>

      {/* 6-Stage Comprehensive Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {stages.map((st, idx) => {
          const isHiddenOnMobile = !showAllMobile && idx >= 3;

          return (
            <div
              key={st.stage}
              className={`bg-[#EEE8DD] border border-[#D9D1C4] rounded-xl p-5 sm:p-6 space-y-3.5 shadow-2xs flex flex-col justify-between ${
                isHiddenOnMobile ? "hidden sm:flex" : "flex"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-xs">
                  <span className="font-bold uppercase text-[#26221F]">
                    {st.stage}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-mono ${st.statusBadge}`}>
                    {st.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-[#26221F] leading-tight">
                    {st.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-800 font-sans mt-1.5 leading-snug">
                    {st.description}
                  </p>
                </div>

                <ul className="space-y-1.5 text-xs text-stone-800 font-sans pt-1 border-t border-[#D9D1C4]">
                  {st.deliverables.map((it, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-[#971F26] font-bold font-mono text-[10px] mt-0.5">•</span>
                      <span className="leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Progressive Disclosure Button */}
      <div className="sm:hidden pt-1">
        <button
          type="button"
          onClick={() => setShowAllMobile(!showAllMobile)}
          aria-expanded={showAllMobile}
          className="w-full py-3 px-4 bg-[#EEE8DD] hover:bg-stone-200 border border-[#D9D1C4] text-[#26221F] rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
        >
          {showAllMobile ? (
            <>
              <span>Show Fewer Stages</span>
              <ChevronUp className="w-4 h-4 text-[#971F26]" />
            </>
          ) : (
            <>
              <span>See All 6 Maturity Stages (+3 More)</span>
              <ChevronDown className="w-4 h-4 text-[#971F26]" />
            </>
          )}
        </button>
      </div>

      {/* Explicit Safety & Positioning Statement */}
      <div className="p-5 bg-[#FAF7F2] border border-[#D9D1C4] rounded-xl space-y-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#971F26] font-bold uppercase tracking-wider text-xs">
          <ShieldCheck className="w-4 h-4" />
          <span>Product Positioning & Boundaries</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs sm:text-sm">
          <div className="p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg space-y-1">
            <strong className="font-mono text-xs text-[#2D5A3D] uppercase block">
              ✓ What Maps With Teeth Is:
            </strong>
            <p className="text-stone-800 leading-snug">
              Barrier-first resource intelligence, survivor-controlled documentation, continuity receipt infrastructure, referral & handoff intelligence, and public-interest systems gap research.
            </p>
          </div>

          <div className="p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg space-y-1">
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
