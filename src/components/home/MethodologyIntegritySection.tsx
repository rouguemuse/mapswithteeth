"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Scale,
  Eye,
  Split,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  FileText
} from "lucide-react";
import { REVIEW_TRACE_STATUSES, ReviewTraceCode } from "@/components/safeguards/ReviewTraceComponent";

export function MethodologyIntegritySection() {
  const [selectedStatusCode, setSelectedStatusCode] = useState<ReviewTraceCode>("REVIEWED");

  const selectedStatus =
    REVIEW_TRACE_STATUSES.find((s) => s.code === selectedStatusCode) || REVIEW_TRACE_STATUSES[1];

  const coreMethodologies = [
    {
      num: "01",
      title: "Review Trace (9 Statuses)",
      concept: "Procedural Activity ≠ Substantive Examination",
      summary:
        "Standardizes how administrative material moves through review and decision processes without assuming receipt implies comprehension or merits finding.",
      linkHref: "/continuity/safeguards#review-trace"
    },
    {
      num: "02",
      title: "Barrier-Aware Cooperation",
      concept: "Could Not ≠ Would Not",
      summary:
        "Distinguishes logistical, safety, disability, or technological barriers from voluntary refusal to cooperate, preventing non-contact from being recoded as non-compliance.",
      linkHref: "/continuity/safeguards#barrier-cooperation"
    },
    {
      num: "03",
      title: "Retaliation Separation",
      concept: "Two-Track Independent Review",
      summary:
        "Keeps merits of an underlying dispute separate from the classification of subsequent conduct, without presuming either claim is substantiated.",
      linkHref: "/continuity/safeguards#retaliation-separation"
    },
    {
      num: "04",
      title: "Controlling-Document Verification",
      concept: "Authority Relied Upon Traceability",
      summary:
        "Traces legal-rights decisions to the actual order, statute, or regulation consulted, requiring clear authority and reviewable correction paths.",
      linkHref: "/continuity/safeguards#controlling-doc"
    },
    {
      num: "05",
      title: "Observation vs. Disposition",
      concept: "Observed Facts ≠ Formal Finding",
      summary:
        "Maintains a strict boundary between what frontline caseworkers observe, what evidence supports, and what formal administrative decision results.",
      linkHref: "/continuity/safeguards#observation-disposition"
    },
    {
      num: "06",
      title: "Demeanor vs. Provenance",
      concept: "Presentation ≠ Authenticity",
      summary:
        "Ensures distress, communication style, or perceived credibility never substitute for examining the provenance and evidentiary effect of underlying documents.",
      linkHref: "/continuity/safeguards#observation-disposition"
    }
  ];

  return (
    <section id="methodology-safeguards" className="space-y-10 scroll-mt-24 font-sans select-none">
      {/* Section Header */}
      <div className="border-b-2 border-[#11100F] pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#841F2B] font-bold uppercase tracking-widest block mb-2">
            § 03 · METHODOLOGY &amp; EVIDENCE INTEGRITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#11100F] tracking-tight">
            The Evidence Integrity Safeguards
          </h2>
        </div>
        <span className="font-mono text-xs text-[#4D4944] uppercase tracking-wider">
          [ARCHITECTURAL RESTRAINT &amp; DUE PROCESS]
        </span>
      </div>

      <p className="text-lg text-[#4D4944] font-serif max-w-3xl leading-relaxed">
        Maps With Teeth does not pool allegations or automate credibility scoring. Our methodology rests on six explicit disciplines designed to preserve institutional truth, protect due process, and prevent administrative flattening.
      </p>

      {/* Governing Principle Callout */}
      <div className="p-5 bg-[#11100F] text-[#F8F5EE] border-l-4 border-[#841F2B] rounded-xs space-y-2 shadow-lg">
        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
          GOVERNING PRINCIPLE OF RESTRAINT
        </span>
        <p className="font-serif italic text-lg sm:text-xl text-white leading-relaxed">
          &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
        </p>
        <p className="text-xs font-mono text-[#A39E94] pt-1">
          Related does not mean proven · Repeated does not mean corroborated · Demeanor is not provenance · Could not is not would not.
        </p>
      </div>

      {/* Interactive Review Trace Specimen Highlight */}
      <div className="bg-[#EEE8DB] border-2 border-[#11100F] p-6 sm:p-8 rounded-xs space-y-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C4B69E] pb-3">
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-[#841F2B] block tracking-wider">
              OPERATIONAL TAXONOMY · SPECIFICATION 01
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#11100F]">
              The Review Trace: Nine Standardized Administrative Statuses
            </h3>
          </div>
          <span className="coord-tick">[TRACE VOCABULARY: 9 CODES]</span>
        </div>

        <p className="text-xs sm:text-sm text-[#4D4944] font-sans leading-relaxed">
          In current administration, case files are often closed with binary labels (&ldquo;screened out&rdquo; or &ldquo;unsubstantiated&rdquo;) that obscure whether evidence was examined, unreadable, referred, or deemed outside statutory authority. The Review Trace establishes nine unambiguous statuses:
        </p>

        {/* 9 Status Buttons */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5 font-mono text-[11px]">
          {REVIEW_TRACE_STATUSES.map((status) => {
            const isSelected = selectedStatusCode === status.code;
            return (
              <button
                key={status.code}
                onClick={() => setSelectedStatusCode(status.code)}
                className={`p-2 rounded-xs border transition-all text-center flex flex-col items-center justify-center min-h-[54px] ${
                  isSelected
                    ? "bg-[#841F2B] text-white border-[#841F2B] font-bold shadow-xs"
                    : "bg-[#F8F5EE] text-[#11100F] border-[#C4B69E] hover:border-[#11100F]"
                }`}
              >
                <span className="text-[9.5px] leading-tight block truncate w-full">
                  {status.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Status Detail Panel */}
        <div className="p-4 sm:p-5 bg-[#F8F5EE] border border-[#C4B69E] rounded-xs space-y-3 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2DACB] pb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#841F2B]">
                STATUS: {selectedStatus.label}
              </span>
              <span className="text-[10px] bg-[#EEE8DB] px-2 py-0.5 rounded text-[#4D4944]">
                CATEGORY: {selectedStatus.category}
              </span>
            </div>
            <span className="text-[10px] text-stone-500">CODE: {selectedStatus.code}</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-stone-800 font-sans">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-[#4D4944] block">
                ADMINISTRATIVE DEFINITION:
              </span>
              <p className="text-xs leading-relaxed">{selectedStatus.definition}</p>
              <div className="pt-2 text-[11px] font-mono text-[#841F2B]">
                Example: {selectedStatus.exampleScenario}
              </div>
            </div>

            <div className="space-y-1 p-3 bg-white border border-[#E2DACB] rounded-xs">
              <span className="font-mono text-[10px] uppercase font-bold text-[#11100F] block">
                EVIDENTIARY BOUNDARY &amp; MEANING:
              </span>
              <p className="text-xs leading-relaxed text-[#4D4944]">
                {selectedStatus.evidentiaryMeaning}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of the 6 Safeguard Disciplines */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreMethodologies.map((m) => (
          <div
            key={m.num}
            className="bg-[#EEE8DB] border-2 border-[#11100F] p-5 sm:p-6 rounded-xs flex flex-col justify-between space-y-4 shadow-sm hover:border-[#841F2B] transition-colors"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-[#C4B69E] pb-2">
                <span className="font-mono text-xs font-bold text-[#841F2B]">
                  DISCIPLINE {m.num}
                </span>
                <span className="text-[10px] font-mono text-[#4D4944] uppercase">SAFEGUARD</span>
              </div>

              <h4 className="font-serif font-bold text-lg text-[#11100F] leading-snug">
                {m.title}
              </h4>

              <p className="text-xs font-mono font-bold text-[#841F2B] uppercase leading-tight">
                {m.concept}
              </p>

              <p className="text-xs text-[#4D4944] leading-relaxed font-sans">
                {m.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-[#C4B69E]">
              <Link
                href={m.linkHref}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#11100F] hover:text-[#841F2B] transition"
              >
                <span>Inspect Protocol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Full Safeguards Suite Link Bar */}
      <div className="p-4 bg-[#F8F5EE] border border-[#C4B69E] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <span className="text-[#4D4944]">
          Explore complete interactive demonstrations, statutory citations, and non-claims boundaries:
        </span>
        <Link
          href="/continuity/safeguards"
          className="px-5 py-2.5 bg-[#841F2B] hover:bg-[#661620] text-white rounded-xs font-bold uppercase tracking-wider transition shadow-xs whitespace-nowrap"
        >
          View All 8 Evidence Safeguards →
        </Link>
      </div>
    </section>
  );
}
