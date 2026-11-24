"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  Code2,
  FileText,
  Activity,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export interface DistinctionTierItem {
  id: string;
  tierNum: string;
  title: string;
  badgeLabel: string;
  badgeClass: string;
  accentBorderClass: string;
  plainSummary: string;
  icon: React.ComponentType<{ className?: string }>;
  detailsHeading: string;
  detailsItems: string[];
  caveat: string;
  docLinkHref: string;
  docLinkLabel: string;
}

const DISTINCTION_TIERS: DistinctionTierItem[] = [
  {
    id: "existing-law",
    tierNum: "01",
    title: "Existing Law",
    badgeLabel: "ENACTED STATUTE & RULE",
    badgeClass: "bg-[#1F6B38] text-white border-[#1F6B38]",
    accentBorderClass: "border-l-[#1F6B38]",
    plainSummary:
      "Enacted Texas and federal statutes that already authorize multidisciplinary coordination, protective records, lease termination, utility waivers, and phone line separation.",
    icon: Scale,
    detailsHeading: "Verified Statutory & Regulatory Authorities Relied Upon",
    detailsItems: [
      "Joint DFPS & Law Enforcement Investigations: Tex. Fam. Code §§ 261.301(f), 261.3011",
      "Children’s Advocacy Centers & Multidisciplinary Teams (MDTs): Tex. Fam. Code §§ 264.403, 264.4031, 264.406",
      "Interlocal Cooperation Act (pilot contracting vehicle, subject to confidentiality review): Tex. Gov’t Code §§ 791.003, 791.011",
      "Protective Order Registry & Family-Violence Incident Retrieval: Tex. Fam. Code § 86.0011; Tex. Code Crim. Proc. Arts. 5.05, 5.06, 7B.104",
      "Residential Lease Termination & Utility Deposit Waivers: Tex. Prop. Code §§ 92.016, 92.0161; 16 TAC § 25.478",
      "Federal Line Separation & Confidentiality Protections: 47 U.S.C. § 345 (Safe Connections Act); 34 U.S.C. § 12291(b)(2) (VAWA)",
    ],
    caveat:
      "Statutory existence on paper does not guarantee frontline reachability; many remedies remain inaccessible or defeated by administrative seams.",
    docLinkHref: "/policy#statutory-register",
    docLinkLabel: "Inspect Primary Authority Source Register",
  },
  {
    id: "implemented-code",
    tierNum: "02",
    title: "Implemented Code",
    badgeLabel: "VERIFIABLE IN REPOSITORY",
    badgeClass: "bg-mwt-ink text-mwt-paper-display border-mwt-ink",
    accentBorderClass: "border-l-mwt-ink",
    plainSummary:
      "Working client-side prototypes, deterministic qualification rules, and automated source-verification tests executing in this repository today without storing personal data.",
    icon: Code2,
    detailsHeading: "Repository-Verifiable Software & Audited Data Artifacts",
    detailsItems: [
      "Audited Resource Graph: 47 Central Texas resources verified across 470 material claim vectors and 1,070 automated provenance QA assertions",
      "Deterministic Tri-State Matcher: 158 tri-state qualification tests (CONFIRMED / POSSIBLE / BLOCKED) and 50 conflict-reconciliation suites",
      "Continuity Receipt Generator: Client-side 7-field encounter record builder with SHA-256 baseline digest and 15/15 automated risk invariants",
      "Review Trace & Safeguards Interactive Specimens: 9-status Review Trace state machine and synthetic multi-agency specimen (AGY-003)",
    ],
    caveat:
      "Implemented prototypes execute locally in the browser for demonstration and participant-held record generation; they are not deployed inside live government databases.",
    docLinkHref: "/technical",
    docLinkLabel: "Inspect Technical Architecture & QA Suites",
  },
  {
    id: "proposed-policy",
    tierNum: "03",
    title: "Proposed Policy",
    badgeLabel: "DISCUSSION & REFORM DRAFTS",
    badgeClass: "bg-mwt-crimson-seal text-white border-mwt-crimson-seal",
    accentBorderClass: "border-l-mwt-crimson-seal",
    plainSummary:
      "Independent administrative and statutory reform proposals—including closed-loop referrals, pre-closure checks, and Personal Number Continuity—submitted for public review, not enacted law.",
    icon: FileText,
    detailsHeading: "Independent Policy Proposals & Designed Safeguard Specifications",
    detailsItems: [
      "Cross-System Continuity Standard v0.1: 6 proposed modules (Linked-Matter Review, Closed-Loop Referrals, Continuity Receipt, Cumulative Review Triggers, Decision Ownership, Context Before Closure)",
      "Texas DFPS Sunset Submission (POL-001A): Independent public input submitted Oct 2026 for the Dec 2–3, 2026 Sunset Advisory Commission hearing",
      "Personal Number Continuity (Model B): Proposed 6-dimension separation of shared-account billing authority from adult communication identity",
      "Evidence Integrity Safeguards: Designed protocols for Claim-Evidence Separation, 6-state Barrier-Aware Cooperation, and Retaliation Separation",
    ],
    caveat:
      "Submitted public input and discussion drafts are not adopted agency rules, confirmed legislative testimony, or enacted carrier entitlements.",
    docLinkHref: "/policy",
    docLinkLabel: "Explore Texas Policy Lab & Sunset Brief",
  },
  {
    id: "pilot-targets",
    tierNum: "04",
    title: "Pilot Targets",
    badgeLabel: "EVALUATION BENCHMARKS",
    badgeClass: "bg-[#945700] text-white border-[#945700]",
    accentBorderClass: "border-l-[#945700]",
    plainSummary:
      "Proposed operational benchmarks and six-month fellowship validation milestones designed for synthetic-data trials—not population statistics or mandatory legal deadlines.",
    icon: Activity,
    detailsHeading: "Proposed Trial Benchmarks & Six-Month Validation Milestones",
    detailsItems: [
      "90-Day Synthetic-Data Pilot Benchmarks: < 48-hour referral acknowledgment target, 100% next-decision-owner assignment target, and 0% unflagged lost handoffs",
      "Bad Maps Empirical Indicators: 7 sample-based tri-state seam metrics (Confirmed Gap / No Gap Observed / Unknown — where Unknown is never counted as failure)",
      "External Scrutiny Roadmap: Independent legal/statutory review, privacy & due-process audit, adversarial threat modeling, and compensated survivor/practitioner usability testing",
    ],
    caveat:
      "All pilot metrics and fellowship objectives represent planned evaluation criteria requiring external validation prior to any live institutional use.",
    docLinkHref: "/bad-maps",
    docLinkLabel: "Inspect Bad Maps & Pilot Evaluation Criteria",
  },
];

interface FourTierDistinctionInventoryProps {
  id?: string;
  compact?: boolean;
  variant?: "light" | "dark";
}

export function FourTierDistinctionInventory({
  id = "distinction-inventory",
  compact = false,
  variant = "light",
}: FourTierDistinctionInventoryProps) {
  const [openTierId, setOpenTierId] = useState<string | null>(null);

  const toggleTier = (tierId: string) => {
    setOpenTierId((prev) => (prev === tierId ? null : tierId));
  };

  const isDark = variant === "dark";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-36 lg:scroll-mt-28 font-sans select-none ${
        isDark
          ? "mwt-dark-surface p-4 sm:p-7 rounded-xs border-2 border-mwt-charcoal"
          : "mwt-light-surface p-4 sm:p-7 rounded-xs shadow-md"
      }`}
    >
      {/* Header Bar */}
      <div
        className={`flex flex-wrap items-end justify-between gap-2.5 pb-3.5 border-b-[1.5px] ${
          isDark ? "border-mwt-charcoal" : "border-mwt-black"
        }`}
      >
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <ShieldCheck
              className={`w-4 h-4 shrink-0 ${
                isDark ? "text-mwt-signal-bright" : "text-mwt-crimson-seal"
              }`}
              aria-hidden="true"
            />
            <span
              className={`mwt-kicker ${
                isDark ? "text-mwt-signal-bright" : "text-mwt-crimson-seal"
              }`}
            >
              EPISTEMIC &amp; LEGAL BOUNDARIES · FOUR-TIER DISTINCTION INVENTORY
            </span>
          </div>
          <h2
            id={`${id}-heading`}
            className={`font-display font-black tracking-tight ${
              compact ? "text-lg sm:text-2xl" : "text-xl sm:text-3xl"
            } ${isDark ? "text-mwt-paper-display" : "text-mwt-black"}`}
          >
            What Exists in Law, What Runs in Code, and What Is Proposed
          </h2>
        </div>

        <span
          className={`font-mono text-[10px] sm:text-[10.5px] pl-2.5 py-0.5 uppercase font-bold border-l-2 border-mwt-crimson-seal ${
            isDark
              ? "text-mwt-paper-muted"
              : "text-mwt-black"
          }`}
        >
          PROPOSALS ≠ ENACTED LAW · TARGETS ≠ VALIDATED OUTCOMES
        </span>
      </div>

      {/* Four Overview Distinctions Grid (2x2 on mobile when compact, 4 across on lg) */}
      <div
        className={`grid ${
          compact
            ? "grid-cols-1 min-[375px]:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        } pt-4`}
      >
        {DISTINCTION_TIERS.map((tier) => {
          const Icon = tier.icon;
          const isOpen = openTierId === tier.id;
          const panelId = `${id}-panel-${tier.id}`;

          return (
            <div
              key={tier.id}
              className={`border ${
                isDark
                  ? "bg-[#171614] border-mwt-charcoal text-mwt-paper-display"
                  : "bg-mwt-paper border-mwt-black text-mwt-black"
              } border-l-4 ${tier.accentBorderClass} rounded-xs flex flex-col justify-between transition-colors`}
            >
              <div className={`${compact ? "p-3" : "p-3.5"} space-y-1.5`}>
                {/* Visual Identifier & Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9.5px] font-mono font-bold uppercase border rounded-xs ${tier.badgeClass}`}
                  >
                    <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
                    <span>TIER {tier.tierNum}</span>
                  </span>
                  <span
                    className={`font-mono text-[9px] font-bold uppercase tracking-wider ${
                      isDark ? "text-[#C8BFA8]" : "text-mwt-graphite"
                    }`}
                  >
                    {tier.badgeLabel}
                  </span>
                </div>

                {/* Concise Title */}
                <h3
                  className={`font-display ${
                    compact ? "text-base" : "text-base sm:text-lg"
                  } font-extrabold leading-snug ${
                    isDark ? "text-white" : "text-mwt-black"
                  }`}
                >
                  {tier.title}
                </h3>

                {/* Single Plain-Language Sentence */}
                <p
                  className={`text-[11.5px] sm:text-xs leading-[1.42] font-sans ${
                    isDark ? "text-[#D5CBB8]" : "text-mwt-graphite"
                  }`}
                >
                  {tier.plainSummary}
                </p>
              </div>

              {/* Accessible Option to Inspect Supporting Detail */}
              <div
                className={`border-t ${
                  isDark ? "border-mwt-charcoal" : "border-mwt-border-paper"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleTier(tier.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={`w-full px-3.5 py-2.5 min-h-[40px] text-left font-mono text-[10.5px] font-bold uppercase tracking-wider flex items-center justify-between gap-2 cursor-pointer transition-colors ${
                    isOpen
                      ? isDark
                        ? "bg-mwt-charcoal text-mwt-signal-bright"
                        : "bg-mwt-paper-muted text-mwt-crimson-seal"
                      : isDark
                      ? "hover:bg-mwt-charcoal/60 text-mwt-paper-muted"
                      : "hover:bg-mwt-paper-warm text-mwt-black"
                  }`}
                >
                  <span>{isOpen ? "Hide Detail" : "Inspect Detail"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Inline Detail Drawer for Mobile / Individual Card Inspection */}
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-label={`${tier.title} supporting detail`}
                    className={`p-4 border-t text-xs font-sans space-y-3 ${
                      isDark
                        ? "bg-[#11100F] border-mwt-charcoal text-[#E2D7C3]"
                        : "bg-mwt-paper-warm border-mwt-border-paper text-mwt-black"
                    }`}
                  >
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-mwt-crimson-seal">
                      {tier.detailsHeading}
                    </div>
                    <ul className="space-y-1.5 text-[11.5px] leading-relaxed">
                      {tier.detailsItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="font-mono font-bold text-mwt-crimson-seal shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`p-2.5 rounded-xs border font-mono text-[10.5px] leading-snug ${
                        isDark
                          ? "bg-mwt-charcoal border-mwt-paper-muted/20 text-[#C8BFA8]"
                          : "bg-mwt-paper border-mwt-border-paper text-mwt-graphite"
                      }`}
                    >
                      <strong className={isDark ? "text-white" : "text-mwt-black"}>
                        Boundary Qualification:{" "}
                      </strong>
                      {tier.caveat}
                    </div>
                    <div className="pt-1">
                      <Link
                        href={tier.docLinkHref}
                        className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase underline underline-offset-4 ${
                          isDark
                            ? "text-mwt-signal-bright hover:text-white"
                            : "text-mwt-crimson-seal hover:text-mwt-black"
                        }`}
                      >
                        <span>{tier.docLinkLabel}</span>
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
