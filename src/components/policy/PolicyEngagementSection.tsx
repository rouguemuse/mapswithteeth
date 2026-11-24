"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Scale,
  Activity,
  Layers,
  Send,
  Lock,
  GitBranch
} from "lucide-react";
import {
  TEXAS_POLICY_ENGAGEMENT_REGISTRY,
  OVERSIGHT_FAILURE_PATTERNS,
  EngagementTrackingStatus
} from "@/domain/policy/engagementRegistry";
import {
  CONCRETE_APPLICATION_SCENARIOS,
  ConcreteApplicationScenario
} from "@/domain/policy/concreteApplications";

function getStatusBadge(status: EngagementTrackingStatus) {
  switch (status) {
    case "PROPOSAL_DRAFTED":
      return {
        label: "PROPOSAL DRAFTED",
        className: "bg-stone-200 text-stone-800 border-stone-400",
        icon: FileText
      };
    case "SUBMITTED":
      return {
        label: "SUBMITTED",
        className: "bg-blue-100 text-blue-900 border-blue-400",
        icon: Send
      };
    case "RECEIPT_ACKNOWLEDGED":
      return {
        label: "RECEIPT ACKNOWLEDGED",
        className: "bg-amber-100 text-amber-900 border-amber-400",
        icon: Clock
      };
    case "UNDER_REVIEW_EXPLICITLY_CONFIRMED":
      return {
        label: "UNDER REVIEW (CONFIRMED)",
        className: "bg-purple-100 text-purple-900 border-purple-400",
        icon: Activity
      };
    case "RESPONSE_RECEIVED":
      return {
        label: "RESPONSE RECEIVED",
        className: "bg-emerald-100 text-emerald-900 border-emerald-400",
        icon: CheckCircle2
      };
    case "OUTCOME_DOCUMENTED":
      return {
        label: "OUTCOME DOCUMENTED",
        className: "bg-green-100 text-green-900 border-green-400",
        icon: ShieldCheck
      };
    case "UNRESOLVED_OR_UNKNOWN":
    default:
      return {
        label: "UNRESOLVED / UNKNOWN",
        className: "bg-stone-200 text-stone-700 border-stone-300",
        icon: HelpCircle
      };
  }
}

export function PolicyEngagementSection() {
  const [activeTab, setActiveTab] = useState<"records" | "patterns" | "scenarios">("records");
  const [expandedRecordId, setExpandedRecordId] = useState<string>(
    TEXAS_POLICY_ENGAGEMENT_REGISTRY[0]?.engagementId || "eng-sunset-dfps-2026"
  );
  const [expandedScenarioId, setExpandedScenarioId] = useState<string>("app-synth-01");

  return (
    <section id="policy-engagement" className="scroll-mt-36 lg:scroll-mt-28 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-5 sm:p-10 space-y-6 sm:space-y-8 shadow-sm font-sans">
      {/* Section Header */}
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Scale className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              POLICY ENGAGEMENT &amp; ADMINISTRATIVE OVERSIGHT
            </span>
          </div>
          <span className="coord-tick">[TRACEABLE ENGAGEMENT RECORD: 2026–27]</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Texas Policy Engagement &amp; Oversight Registry
        </h2>

        <p className="text-stone-800 text-sm sm:text-base leading-relaxed max-w-3xl">
          Independent, source-backed tracking of policy submissions, Sunset review input, and administrative oversight inquiries. Distinguishes observed events, documented agency responses, hypotheses, and proposed procedural reforms.
        </p>

        {/* Safeguard Notice */}
        <div className="p-3.5 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl flex items-start gap-3 text-xs font-mono">
          <Lock className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-[#971F26] uppercase block">
              NON-ENDORSEMENT &amp; PRIVACY BOUNDARY
            </span>
            <p className="text-stone-700 font-sans leading-relaxed">
              These records track public policy advocacy and structural administrative inquiries. Maps With Teeth does not claim agency endorsement, legislative adoption, or official validation. Unknown statuses remain unknown. Zero private case details, confidential witness identities, or sealed court records are published.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Policy Engagement Tabs"
        className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1.5 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg text-xs font-mono"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "records"}
          onClick={() => setActiveTab("records")}
          className={`px-3 py-2 text-left font-bold uppercase transition-colors rounded cursor-pointer ${
            activeTab === "records"
              ? "bg-[#971F26] text-white shadow-xs"
              : "text-stone-700 hover:bg-[#EEE8DD]"
          }`}
        >
          1. Engagement Records (3)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "patterns"}
          onClick={() => setActiveTab("patterns")}
          className={`px-3 py-2 text-left font-bold uppercase transition-colors rounded cursor-pointer ${
            activeTab === "patterns"
              ? "bg-[#971F26] text-white shadow-xs"
              : "text-stone-700 hover:bg-[#EEE8DD]"
          }`}
        >
          2. Oversight Failure Mechanisms (5)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "scenarios"}
          onClick={() => setActiveTab("scenarios")}
          className={`px-3 py-2 text-left font-bold uppercase transition-colors rounded cursor-pointer ${
            activeTab === "scenarios"
              ? "bg-[#971F26] text-white shadow-xs"
              : "text-stone-700 hover:bg-[#EEE8DD]"
          }`}
        >
          3. Concrete Scenarios (4)
        </button>
      </div>

      {/* TAB 1: ENGAGEMENT RECORDS */}
      {activeTab === "records" && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
                Formal Submissions &amp; Administrative Tracking
              </h3>
              <p className="text-xs sm:text-sm text-stone-700">
                Each submission maintains a verifiable provenance status from draft through acknowledged outcome. Select any record below to inspect its full proposals and statutory anchors.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setExpandedRecordId((prev) => (prev === "ALL" ? TEXAS_POLICY_ENGAGEMENT_REGISTRY[0]?.engagementId || "" : "ALL"))
              }
              className="px-3 py-1.5 bg-[#F5F1E8] hover:bg-white border border-[#1C1D1D] rounded text-[11px] font-mono font-bold uppercase text-[#1C1D1D] cursor-pointer"
            >
              {expandedRecordId === "ALL" ? "Collapse Secondary Records" : "Expand All 3 Records"}
            </button>
          </div>

          <div className="space-y-3.5">
            {TEXAS_POLICY_ENGAGEMENT_REGISTRY.map((record) => {
              const badge = getStatusBadge(record.trackingStatus);
              const BadgeIcon = badge.icon;
              const isExpanded =
                expandedRecordId === "ALL" || expandedRecordId === record.engagementId;
              return (
                <div
                  key={record.engagementId}
                  className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedRecordId(isExpanded && expandedRecordId !== "ALL" ? "" : record.engagementId)
                    }
                    className="w-full p-4 sm:p-5 text-left flex flex-wrap items-start justify-between gap-3 hover:bg-stone-100/70 transition cursor-pointer"
                  >
                    <div className="space-y-1 flex-1 min-w-[220px]">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 bg-[#1C1D1D] text-white font-mono text-[11px] font-bold rounded">
                          {record.trackingCode}
                        </span>
                        <span className="text-xs font-mono text-stone-600">
                          {record.targetReviewCycle}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-xl font-serif font-bold text-[#1C1D1D]">
                        {record.title}
                      </h4>
                      <p className="text-xs font-mono text-stone-700">
                        Target Body: <strong>{record.targetBody}</strong>{" "}
                        {record.submissionDate && `· Submitted: ${record.submissionDate}`}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div
                        className={`px-2.5 py-1 border rounded-lg flex items-center gap-1.5 font-mono text-[11px] font-bold ${badge.className}`}
                      >
                        <BadgeIcon className="w-3.5 h-3.5" />
                        <span>{badge.label}</span>
                      </div>
                      <span className="p-1.5 text-stone-700 bg-[#EEE8DD] border border-stone-300 rounded">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-6 pt-3 border-t border-[#D9D1C4] space-y-4 bg-[#F5F1E8]">
                      <div className="grid md:grid-cols-12 gap-4 text-xs font-sans">
                        <div className="md:col-span-7 space-y-3">
                          <div>
                            <span className="font-mono text-[10px] font-bold text-[#971F26] uppercase block">
                              SUMMARY OF STRUCTURAL INPUT:
                            </span>
                            <p className="text-stone-800 leading-relaxed pt-0.5">
                              {record.publicSummary}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-[10px] font-bold text-stone-600 uppercase block">
                              KEY PROPOSALS:
                            </span>
                            <ul className="list-disc pl-4 space-y-1 pt-1 text-stone-800">
                              {record.keyProposals.map((prop, idx) => (
                                <li key={idx}>{prop}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="md:col-span-5 bg-white p-4 rounded-lg border border-stone-300 space-y-3">
                          <div>
                            <span className="font-mono text-[10px] font-bold text-stone-600 uppercase block">
                              VERIFIED STATUS BASIS:
                            </span>
                            <p className="text-stone-800 leading-snug pt-0.5">
                              {record.statusVerificationBasis}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-[10px] font-bold text-[#2D5A3D] uppercase block">
                              DOCUMENTED OUTCOME / NEXT STEP:
                            </span>
                            <p className="text-stone-800 leading-snug pt-0.5 font-medium">
                              {record.verifiedOutcomes}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-[10px] font-bold text-stone-500 uppercase block">
                              STATUTORY ANCHORS:
                            </span>
                            <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10.5px]">
                              {record.statutoryFocus.map((stat, idx) => (
                                <span
                                  key={idx}
                                  className="bg-stone-100 px-1.5 py-0.5 border border-stone-300 rounded text-stone-700"
                                >
                                  {stat}
                                </span>
                              ))}
                            </div>
                          </div>

                          {record.officialSourceUrls && record.officialSourceUrls.length > 0 && (
                            <div className="pt-1 border-t border-stone-200">
                              <span className="font-mono text-[10px] font-bold text-stone-500 uppercase block mb-1">
                                OFFICIAL REFERENCES:
                              </span>
                              <div className="space-y-1">
                                {record.officialSourceUrls.map((link, idx) => (
                                  <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[#971F26] hover:underline font-mono text-[11px]"
                                  >
                                    <span>{link.label}</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#EEE8DD] border border-stone-300 rounded font-mono text-[11px] text-stone-600">
                        <span className="font-bold text-stone-700">Safeguard Boundary:</span>{" "}
                        {record.safeguardNotice}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: OVERSIGHT FAILURE MECHANISMS */}
      {activeTab === "patterns" && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Emerging Institutional Failure Mechanisms
            </h3>
            <p className="text-xs sm:text-sm text-stone-700">
              Grounded in administrative oversight inquiries, OCA complaints, and inter-jurisdictional referrals. Distinct structural failure modes that flatten human context.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {OVERSIGHT_FAILURE_PATTERNS.map((pat) => (
              <div
                key={pat.id}
                className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 space-y-3 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#971F26] uppercase">
                      {pat.patternCode}
                    </span>
                    <span className="px-2 py-0.5 bg-stone-200 font-mono text-[10px] text-stone-700 rounded font-bold">
                      {pat.category}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-base text-[#1C1D1D] leading-snug">
                    {pat.name}
                  </h4>

                  <div className="space-y-2 text-xs font-sans">
                    <div>
                      <strong className="text-stone-900 font-mono text-[10px] uppercase block">Observed Phenomenon:</strong>
                      <p className="text-stone-700 leading-relaxed">{pat.observedPhenomenon}</p>
                    </div>

                    <div>
                      <strong className="text-stone-900 font-mono text-[10px] uppercase block">Administrative Mechanism:</strong>
                      <p className="text-stone-700 leading-relaxed">{pat.administrativeMechanism}</p>
                    </div>

                    <div className="p-2.5 bg-red-50 border border-red-200 rounded">
                      <strong className="text-red-950 font-mono text-[10px] uppercase block">Resulting Risk:</strong>
                      <p className="text-red-900 leading-relaxed">{pat.resultingRiskOrHarm}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#D9D1C4] space-y-1.5 text-xs">
                  <div>
                    <strong className="text-[#2D5A3D] font-mono text-[10px] uppercase block">Proposed Procedural Reform:</strong>
                    <p className="text-stone-800 leading-snug">{pat.proposedProceduralReform}</p>
                  </div>
                  <div className="p-2 bg-white border border-stone-300 rounded font-mono text-[10.5px] text-stone-700">
                    <span className="text-[#971F26] font-bold">Traceability Rule:</span> {pat.traceableVerificationRule}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CONCRETE APPLICATION SCENARIOS */}
      {activeTab === "scenarios" && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Synthetic Application Demonstrations
            </h3>
            <p className="text-xs sm:text-sm text-stone-700">
              Examining how client-side Continuity Receipts and nine-status Review Traces make process failures visible across four synthetic scenarios.
            </p>
            <p className="text-[11px] font-mono text-stone-600 bg-[#EEE8DD] border border-stone-300 p-2 rounded-lg">
              <strong>EVALUATION STANDARDS NOTICE:</strong> Strictly fictional demonstration data (0% live PII). All workflows, review trace codes, and referral targets (such as the 48-hour pilot acknowledgment target) reflect the initiative&apos;s proposed evaluation framework, not existing statutory mandates or current agency operating standards.
            </p>
          </div>

          <div className="space-y-3">
            {CONCRETE_APPLICATION_SCENARIOS.map((scen) => {
              const isExpanded = expandedScenarioId === scen.id;
              return (
                <div
                  key={scen.id}
                  className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setExpandedScenarioId(isExpanded ? "" : scen.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 hover:bg-stone-50 transition"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="px-2 py-0.5 bg-[#971F26] text-white font-bold rounded text-[10px]">
                          {scen.scenarioCode}
                        </span>
                        <span className="text-stone-600 font-bold">
                          {scen.failurePattern}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-[#1C1D1D]">
                        {scen.title}
                      </h4>
                    </div>

                    <div className="p-1.5 text-stone-600 rounded hover:bg-stone-200">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-5 sm:p-6 border-t border-[#D9D1C4] space-y-5 bg-white text-xs font-sans">
                      {/* Scenario Narrative */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
                          <span className="font-mono text-[10px] font-bold text-[#971F26] uppercase block">
                            THE REALISTIC SCENARIO:
                          </span>
                          <p className="text-stone-800 leading-relaxed">
                            {scen.narrativeOverview}
                          </p>
                        </div>

                        <div className="p-3 bg-red-50 rounded-lg border border-red-200 space-y-1">
                          <span className="font-mono text-[10px] font-bold text-red-900 uppercase block">
                            CONVENTIONAL SYSTEM OUTCOME (WITHOUT TRACEABILITY):
                          </span>
                          <p className="text-red-950 leading-relaxed">
                            {scen.conventionalSystemBehavior}
                          </p>
                        </div>
                      </div>

                      {/* Side by side: Continuity Receipt vs Review Trace */}
                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        {/* Receipt Block */}
                        <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-3">
                          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                            <span className="font-mono text-[11px] font-bold text-[#1C1D1D] uppercase">
                              CONTINUITY RECEIPT (CLIENT-SIDE VAULT)
                            </span>
                            <span className="font-mono text-[10px] text-stone-600">
                              {scen.continuityReceiptApplication.receiptId}
                            </span>
                          </div>

                          <div className="space-y-1 text-stone-800">
                            <span className="font-mono text-[10px] text-stone-600 uppercase block">
                              Issuing Desk / Origin:
                            </span>
                            <p className="font-medium">{scen.continuityReceiptApplication.issuingParty}</p>
                          </div>

                          <div className="space-y-1">
                            <span className="font-mono text-[10px] text-stone-600 uppercase block">
                              Verified Metadata Logged:
                            </span>
                            <ul className="list-disc pl-4 space-y-0.5 text-stone-700">
                              {scen.continuityReceiptApplication.verifiedMetadataLogged.map((m, idx) => (
                                <li key={idx}>{m}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-2 bg-white rounded border border-stone-300 font-mono text-[10.5px] text-stone-600 space-y-0.5">
                            <span className="font-bold text-[#971F26] block">Non-Implication Boundaries:</span>
                            {scen.continuityReceiptApplication.nonImplicationNotices.map((n, idx) => (
                              <p key={idx}>• {n}</p>
                            ))}
                          </div>
                        </div>

                        {/* Review Trace Block */}
                        <div className="p-4 bg-[#1C1D1D] text-white rounded-xl border-2 border-[#1C1D1D] space-y-3">
                          <div className="flex items-center justify-between border-b border-stone-700 pb-2">
                            <span className="font-mono text-[11px] font-bold text-amber-300 uppercase">
                              ADMINISTRATIVE REVIEW TRACE
                            </span>
                            <span className="font-mono text-[10px] bg-red-900/60 px-2 py-0.5 rounded text-white font-bold">
                              CODE: {scen.reviewTraceApplication.assignedTraceCode}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <span className="font-mono text-[10px] text-stone-400 uppercase block">
                              Material Evaluated:
                            </span>
                            <p className="font-mono text-stone-200">{scen.reviewTraceApplication.materialDescription}</p>
                          </div>

                          <div className="space-y-1">
                            <span className="font-mono text-[10px] text-stone-400 uppercase block">
                              Administrative Rationale:
                            </span>
                            <p className="text-stone-300 leading-snug">{scen.reviewTraceApplication.administrativeRationale}</p>
                          </div>

                          <div className="space-y-1">
                            <span className="font-mono text-[10px] text-stone-400 uppercase block">
                              Next Decision Owner:
                            </span>
                            <p className="font-mono text-amber-200">{scen.reviewTraceApplication.nextDecisionOwner}</p>
                          </div>

                          <div className="p-2 bg-stone-900 rounded border border-stone-700 text-stone-300 text-[11px]">
                            <strong className="text-white block font-mono text-[10px] uppercase">Procedural Accountability Effect:</strong>
                            {scen.reviewTraceApplication.proceduralEffect}
                          </div>
                        </div>
                      </div>

                      {/* Policy Implication Footer */}
                      <div className="p-3 bg-stone-100 border border-stone-300 rounded font-mono text-xs text-stone-800 flex items-center justify-between">
                        <span><strong>Policy Insight:</strong> {scen.policyImplication}</span>
                        <span className="text-[10px] text-stone-500 uppercase">Synthetic Demonstration Specimen</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
