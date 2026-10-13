"use client";

import React, { useState } from "react";
import {
  FileText,
  Calendar,
  Building2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  HelpCircle,
  Lock,
  ChevronDown,
  ChevronUp,
  Tag
} from "lucide-react";
import { policyEngagementRecords } from "@/data/policy/engagementRegistry";
import { EngagementTrackingStatus } from "@/types/policyEngagement";

export function PolicyEngagementTracker() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [expandedId, setExpandedId] = useState<string | null>("POL-001");

  const statusBadges: Record<
    EngagementTrackingStatus,
    { label: string; bg: string; text: string; border: string }
  > = {
    PROPOSAL_DRAFTED: {
      label: "Proposal Drafted",
      bg: "bg-[#EEE8DD]",
      text: "text-stone-800",
      border: "border-stone-400"
    },
    SUBMITTED: {
      label: "Submitted",
      bg: "bg-[#EBF3FA]",
      text: "text-[#1C4E80]",
      border: "border-[#1C4E80]"
    },
    RECEIPT_ACKNOWLEDGED: {
      label: "Receipt Acknowledged",
      bg: "bg-[#FEF7E6]",
      text: "text-[#8F5A0A]",
      border: "border-[#8F5A0A]"
    },
    UNDER_REVIEW: {
      label: "Under Review (Confirmed)",
      bg: "bg-[#FDF2E9]",
      text: "text-[#A84A02]",
      border: "border-[#A84A02]"
    },
    RESPONSE_RECEIVED: {
      label: "Response Received",
      bg: "bg-[#E8F3EB]",
      text: "text-[#2D5A3D]",
      border: "border-[#2D5A3D]"
    },
    OUTCOME_DOCUMENTED: {
      label: "Outcome Documented",
      bg: "bg-[#E8F3EB]",
      text: "text-[#2D5A3D]",
      border: "border-[#2D5A3D]"
    },
    UNRESOLVED_OR_UNKNOWN: {
      label: "Unresolved / Unknown",
      bg: "bg-[#F5EBEB]",
      text: "text-[#971F26]",
      border: "border-[#971F26]"
    }
  };

  const filteredRecords =
    selectedFilter === "ALL"
      ? policyEngagementRecords
      : policyEngagementRecords.filter((r) => r.category === selectedFilter);

  return (
    <section id="engagement-docket" className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileText className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              INSTITUTIONAL ENGAGEMENT REGISTRY · REPRODUCIBLE PUBLIC RECORD
            </span>
          </div>
          <span className="coord-tick">[ENGAGEMENT DOCKET: 2026 CYCLE]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Policy Engagement &amp; Oversight Docket
        </h2>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          A source-backed, auditable record of Maps With Teeth&apos;s structural policy submissions, Sunset inputs, and administrative oversight filings. Every milestone distinguishes between documented submissions, acknowledged reviews, and outcomes that remain unresolved or unknown.
        </p>

        {/* Boundary & Framework Distinction Callout */}
        <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2 text-xs font-sans">
          <div className="flex items-center gap-2 font-mono font-bold text-[#971F26] uppercase text-[11px]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Methodological Boundary &amp; Distinction</span>
          </div>
          <p className="text-stone-800 leading-relaxed">
            <strong>Engagement Tracking Statuses vs. Operational Review Trace:</strong> The 7 statuses below track external policy filings and institutional communications. They are distinct from the 9-status operational Review Trace, which governs individual casework evidence handling.
          </p>
          <p className="text-stone-700 italic text-[11.5px]">
            Maps With Teeth does not claim agency endorsement, statutory adoption, or official validation. Unknown statuses remain explicitly marked unknown.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
        <span className="text-stone-600 font-bold uppercase mr-1">FILTER:</span>
        {[
          { key: "ALL", label: "All Records (5)" },
          { key: "SUNSET_REVIEW", label: "Sunset Review (2)" },
          { key: "ADMINISTRATIVE_OVERSIGHT", label: "Oversight / OCA (1)" },
          { key: "LEGISLATIVE_BRIEF", label: "Policy Briefs (1)" },
          { key: "PILOT_SPECIFICATION", label: "Pilot Specs (1)" }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedFilter(tab.key)}
            className={`px-3 py-1.5 rounded-md font-bold uppercase transition-colors ${
              selectedFilter === tab.key
                ? "bg-[#1C1D1D] text-white"
                : "bg-white/80 hover:bg-white text-stone-700 border border-stone-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Record Cards */}
      <div className="space-y-4">
        {filteredRecords.map((record) => {
          const badge = statusBadges[record.status];
          const isExpanded = expandedId === record.id;

          return (
            <div
              key={record.id}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl shadow-2xs overflow-hidden transition-all"
            >
              {/* Card Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : record.id)}
                className="p-5 flex flex-wrap items-start justify-between gap-4 cursor-pointer hover:bg-black/[0.02]"
              >
                <div className="space-y-2 flex-1 min-w-[280px]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold bg-[#1C1D1D] text-white px-2 py-0.5 rounded">
                      {record.id}
                    </span>
                    <span
                      className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded border ${badge.bg} ${badge.text} ${badge.border}`}
                    >
                      {badge.label}
                    </span>
                    <span className="font-mono text-[11px] text-stone-600">
                      {record.dateSubmitted || record.dateDrafted}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#1C1D1D] leading-snug">
                    {record.title}
                  </h3>

                  <p className="text-xs text-stone-700 font-sans">
                    <strong>Target:</strong> {record.targetEntity} ({record.targetRole})
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-mono text-stone-600 font-bold uppercase hidden sm:inline">
                    {isExpanded ? "Collapse" : "Inspect Record"}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-stone-700" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-700" />
                  )}
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="border-t border-[#D9D1C4] p-5 bg-[#EEE8DD] space-y-5 text-xs font-sans">
                  {/* Verified Outcome & Status Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-stone-300 space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#971F26] uppercase block">
                        VERIFIED STATUS &amp; OUTCOME
                      </span>
                      <p className="text-stone-900 leading-relaxed font-medium">
                        {record.verifiedOutcome}
                      </p>
                      <p className="text-[11px] text-stone-600 pt-1 border-t border-stone-200">
                        {record.statusDetails}
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-stone-300 space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-stone-700 uppercase block">
                        CONFIDENTIALITY &amp; PUBLIC BOUNDARY
                      </span>
                      <p className="text-stone-800 leading-relaxed">
                        {record.confidentialityBoundary}
                      </p>
                      <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-[10px] text-stone-500">
                          {record.sourceCitation}
                        </span>
                        {record.officialReferenceUrl && (
                          <a
                            href={record.officialReferenceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] font-bold text-[#971F26] hover:underline inline-flex items-center gap-1"
                          >
                            <span>Official Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Key Proposals Summary */}
                  <div className="p-4 bg-white rounded-lg border border-stone-300 space-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#1C1D1D] uppercase block">
                      CORE SUBMISSION MECHANISMS &amp; DIRECTIVES
                    </span>
                    <ul className="space-y-1.5 list-disc list-inside text-stone-800">
                      {record.keyProposals.map((prop, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Status Legend */}
      <div className="p-4 bg-[#F5F1E8] border border-stone-300 rounded-xl space-y-2 text-xs">
        <span className="font-mono font-bold text-[#1C1D1D] uppercase text-[11px] block">
          POLICY ENGAGEMENT STATUS TAXONOMY (NON-OPERATIONAL)
        </span>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 font-mono text-[11px]">
          <div>
            <strong>PROPOSAL_DRAFTED:</strong> Published for public discussion.
          </div>
          <div>
            <strong>SUBMITTED:</strong> Formally delivered to official body.
          </div>
          <div>
            <strong>RECEIPT_ACKNOWLEDGED:</strong> Agency logged written receipt.
          </div>
          <div>
            <strong>UNDER_REVIEW:</strong> Explicitly confirmed active evaluation.
          </div>
          <div>
            <strong>RESPONSE_RECEIVED:</strong> Formal agency reply documented.
          </div>
          <div>
            <strong>OUTCOME_DOCUMENTED:</strong> Statutory / rule outcome known.
          </div>
          <div className="sm:col-span-2 text-[#971F26]">
            <strong>UNRESOLVED_OR_UNKNOWN:</strong> Status is unconfirmed; no assumptions made.
          </div>
        </div>
      </div>
    </section>
  );
}
