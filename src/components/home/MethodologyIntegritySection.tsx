"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REVIEW_TRACE_STATUSES, ReviewTraceCode } from "@/components/safeguards/ReviewTraceComponent";

export function MethodologyIntegritySection() {
  const [activeExplorerTab, setActiveExplorerTab] = useState<"disciplines" | "trace">("disciplines");
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
      linkHref: "/continuity/safeguards#review-trace",
    },
    {
      num: "02",
      title: "Barrier-Aware Cooperation",
      concept: "Could Not ≠ Would Not",
      summary:
        "Distinguishes logistical, safety, disability, or technological barriers from voluntary refusal to cooperate, preventing non-contact from being recoded as non-compliance.",
      linkHref: "/continuity/safeguards#cooperation",
    },
    {
      num: "03",
      title: "Retaliation Separation",
      concept: "Two-Track Independent Review",
      summary:
        "Keeps merits of an underlying dispute separate from the classification of subsequent conduct, without presuming either claim is substantiated.",
      linkHref: "/continuity/safeguards#retaliation",
    },
    {
      num: "04",
      title: "Controlling-Document Verification",
      concept: "Authority Relied Upon Traceability",
      summary:
        "Traces legal-rights decisions to the actual order, statute, or regulation consulted, requiring clear authority and reviewable correction paths.",
      linkHref: "/continuity/safeguards#controlling-docs",
    },
    {
      num: "05",
      title: "Observation vs. Disposition",
      concept: "Observed Facts ≠ Formal Finding",
      summary:
        "Maintains a strict boundary between what frontline caseworkers observe, what evidence supports, and what formal administrative decision results.",
      linkHref: "/continuity/safeguards#observation",
    },
    {
      num: "06",
      title: "Demeanor vs. Provenance",
      concept: "Presentation ≠ Authenticity",
      summary:
        "Ensures distress, communication style, or perceived credibility never substitute for examining the provenance and evidentiary effect of underlying documents.",
      linkHref: "/continuity/safeguards#observation",
    },
  ];

  return (
    <section id="methodology-safeguards" className="space-y-6 scroll-mt-36 lg:scroll-mt-28 font-sans select-none">
      {/* Section Header */}
      <div className="border-b-2 border-mwt-black pb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="mwt-kicker text-mwt-crimson-seal block mb-1.5">
            § 03 · METHODOLOGY &amp; EVIDENCE INTEGRITY (DESIGNED &amp; DEVELOPING SAFEGUARDS)
          </span>
          <h2 className="mwt-chapter-title text-mwt-black">
            The Evidence Integrity Safeguards
          </h2>
        </div>
        <span className="coord-tick">
          [DESIGNED SPECIFICATIONS · REQUIRING INDEPENDENT VALIDATION]
        </span>
      </div>

      {/* Level 1: Governing Principle, Process-Induced Distortion & 10 Preserved Distinctions (GOV.UK Left-Rule Editorial Callout) */}
      <div className="mwt-callout-urgent space-y-4">
        <div className="space-y-1.5">
          <span className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.14em] text-mwt-crimson-seal font-bold block">
            GOVERNING PRINCIPLE OF RESTRAINT &amp; PROCESS-INDUCED DISTORTION
          </span>
          <p className="mwt-quote-rule text-mwt-black">
            &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
          </p>
          <p className="text-xs sm:text-sm font-sans text-mwt-text-secondary leading-relaxed pt-1 max-w-[68ch]">
            <strong>Process-Induced Distortion:</strong> Institutional friction—such as unannounced callback drops, repeated trauma retellings across disconnected desks, safety-driven reluctance, or shared-phone interception—can produce delay, withdrawal, or distress that is subsequently interpreted negatively by the institution without accounting for the administrative barriers that caused it.
          </p>
        </div>

        {/* 10 Non-Collapsible Distinctions */}
        <div className="pt-3 border-t border-mwt-border-paper space-y-2">
          <span className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.12em] text-mwt-crimson-seal font-bold block">
            TEN PRESERVED ADMINISTRATIVE &amp; EVIDENTIARY DISTINCTIONS:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 text-[10.5px] sm:text-[11px] font-mono text-mwt-black font-semibold">
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Allegation ≠ Evidence
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Repetition ≠ Corroboration
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Submission ≠ Review
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Notice ≠ Proof
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Inability ≠ Refusal
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Response ≠ Consent
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Ownership ≠ Authority
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Referral ≠ Assistance
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Observation ≠ Disposition
            </span>
            <span className="border-l-2 border-mwt-crimson-seal pl-2 py-1 bg-mwt-paper/80">
              Closure ≠ Exoneration
            </span>
          </div>
        </div>
      </div>

      {/* Level 2 Guided Exploration: Tabbed Safeguard Disciplines & 9-Status Review Trace Explorer */}
      <div className="mwt-light-surface p-4 sm:p-7 rounded-xs space-y-5 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mwt-border-paper pb-3">
          <div
            role="tablist"
            aria-label="Evidence integrity exploration tabs"
            className="flex flex-wrap gap-2 font-mono text-xs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeExplorerTab === "disciplines"}
              onClick={() => setActiveExplorerTab("disciplines")}
              className={`px-3.5 py-2 rounded-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                activeExplorerTab === "disciplines"
                  ? "bg-mwt-ink text-mwt-paper-display border-mwt-ink"
                  : "bg-mwt-paper text-mwt-black border-mwt-border-paper hover:border-mwt-black"
              }`}
            >
              1. Six Safeguard Disciplines
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeExplorerTab === "trace"}
              onClick={() => setActiveExplorerTab("trace")}
              className={`px-3.5 py-2 rounded-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                activeExplorerTab === "trace"
                  ? "bg-mwt-crimson-seal text-white border-mwt-crimson-seal"
                  : "bg-mwt-paper text-mwt-black border-mwt-border-paper hover:border-mwt-black"
              }`}
            >
              2. Interactive 9-Status Review Trace
            </button>
          </div>

          <Link
            href="/continuity/safeguards"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-mwt-crimson-seal hover:text-mwt-black underline underline-offset-4"
          >
            <span>Inspect All 8 Safeguards</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* TAB 1: 6 Safeguard Disciplines (Compact 2-Col / 3-Col Grid) */}
        {activeExplorerTab === "disciplines" && (
          <div
            role="tabpanel"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
          >
            {coreMethodologies.map((m) => (
              <div
                key={m.num}
                className="mwt-ledger-card-light p-4 flex flex-col justify-between space-y-2.5 shadow-2xs hover:border-mwt-crimson-seal transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between border-b border-mwt-border-paper pb-1.5">
                    <span className="font-mono text-[11px] font-bold text-mwt-crimson-seal">
                      DISCIPLINE {m.num}
                    </span>
                    <span className="text-[9.5px] font-mono text-mwt-graphite uppercase">
                      SAFEGUARD
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-base text-mwt-black leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-[11px] font-mono font-bold text-mwt-crimson-seal uppercase leading-tight">
                    {m.concept}
                  </p>

                  <p className="text-xs text-mwt-graphite leading-relaxed font-sans">
                    {m.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-mwt-border-paper">
                  <Link
                    href={m.linkHref}
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase text-mwt-black hover:text-mwt-crimson-seal transition"
                  >
                    <span>Inspect Protocol</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Interactive 9-Status Review Trace Explorer */}
        {activeExplorerTab === "trace" && (
          <div role="tabpanel" className="space-y-4">
            <p className="text-xs sm:text-sm text-mwt-graphite font-sans leading-relaxed max-w-[68ch]">
              In current administration, case files are often closed with binary labels (&ldquo;screened out&rdquo; or &ldquo;unsubstantiated&rdquo;) that obscure whether evidence was examined, unreadable, referred, or deemed outside statutory authority. Select any of the nine Review Trace statuses below:
            </p>

            {/* 9 Status Buttons — 2 cols on 320px/375px so text never truncates unintelligibly */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-1.5 font-mono text-[11px]">
              {REVIEW_TRACE_STATUSES.map((status) => {
                const isSelected = selectedStatusCode === status.code;
                return (
                  <button
                    key={status.code}
                    type="button"
                    onClick={() => setSelectedStatusCode(status.code)}
                    className={`p-2 rounded-xs border transition-all text-center flex flex-col items-center justify-center min-h-[48px] cursor-pointer ${
                      isSelected
                        ? "bg-mwt-crimson-seal text-white border-mwt-crimson-seal font-bold shadow-xs"
                        : "bg-mwt-paper-warm text-mwt-black border-mwt-border-paper hover:border-mwt-black"
                    }`}
                  >
                    <span className="text-[10.5px] leading-tight block">
                      {status.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Status Detail Panel */}
            <div className="p-4 bg-mwt-paper border border-mwt-border-paper rounded-xs space-y-3 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mwt-border-subtle pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-mwt-crimson-seal">
                    STATUS: {selectedStatus.label}
                  </span>
                  <span className="text-[10px] bg-mwt-parchment px-2 py-0.5 rounded-xs text-mwt-graphite">
                    CATEGORY: {selectedStatus.category}
                  </span>
                </div>
                <span className="text-[10px] text-mwt-graphite">CODE: {selectedStatus.code}</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-mwt-black font-sans">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold text-mwt-graphite block">
                    ADMINISTRATIVE DEFINITION:
                  </span>
                  <p className="text-xs leading-relaxed">{selectedStatus.definition}</p>
                  <div className="pt-1.5 text-[11px] font-mono text-mwt-crimson-seal">
                    Example: {selectedStatus.exampleScenario}
                  </div>
                </div>

                <div className="space-y-1 p-3 bg-mwt-paper-warm border border-mwt-border-subtle rounded-xs">
                  <span className="font-mono text-[10px] uppercase font-bold text-mwt-black block">
                    EVIDENTIARY BOUNDARY &amp; MEANING:
                  </span>
                  <p className="text-xs leading-relaxed text-mwt-graphite">
                    {selectedStatus.evidentiaryMeaning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
