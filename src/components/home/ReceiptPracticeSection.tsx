"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditorialDisclosure } from "@/components/shared/EditorialDisclosure";

export function ReceiptPracticeSection() {
  const touchpoints = [
    { num: "TOUCHPOINT 01", name: "LAW ENFORCEMENT" },
    { num: "TOUCHPOINT 02", name: "CHILD PROTECTION" },
    { num: "TOUCHPOINT 03", name: "CIVIL / FAMILY COURT" },
    { num: "TOUCHPOINT 04", name: "HOUSING & LEGAL AID" },
  ];

  const traceRows = [
    {
      id: "DOC-01",
      name: "Custody / Protective Order",
      status: "REVIEWED_CONSIDERED",
      statusClass: "text-[#4ADE80] font-bold",
      safeguard: "Operative terms verified prior to routing",
    },
    {
      id: "DOC-02",
      name: "Certified Attendance Log",
      status: "IDENTIFIED_UNAVAILABLE",
      statusClass: "text-[#FBBF24] font-bold",
      safeguard: "Blocks “no basis” closure until obtained",
    },
    {
      id: "DOC-03",
      name: "Prior Agency Summary",
      status: "DERIVATIVE_SUMMARY",
      statusClass: "text-[#F87171] font-bold",
      safeguard: "Linked to origin; barred from echo count",
    },
    {
      id: "WIT-01",
      name: "Direct Witness Route",
      status: "UNREVIEWED_STATED_REASON",
      statusClass: "text-mwt-signal-bright font-bold",
      safeguard: "Requires explicit supervisor rationale",
    },
  ];

  return (
    <section id="practice" className="scroll-mt-36 lg:scroll-mt-28 font-sans select-none">
      <div className="mwt-folio-frame shadow-2xl">
        <div className="border-2 border-mwt-charcoal overflow-hidden bg-mwt-ink text-mwt-paper-display">
          {/* 1. TOP FOLIO RAIL */}
          <div className="border-b border-[rgba(232,222,200,0.16)] px-5 sm:px-9 lg:px-11 py-3.5 flex flex-wrap items-center justify-between gap-2 bg-[#0E0D0C]/90">
            <span className="mwt-kicker text-mwt-signal-bright">
              FOLIO 02 · PRIMARY WORKING MODEL A (IMPLEMENTED PROTOTYPE &amp; SPEC)
            </span>
            <span className="mwt-coord-tag">
              SPEC: MWT-STD-2026-03 · SPECIMEN AGY-003 · 15/15 INVARIANTS
            </span>
          </div>

          {/* 2. STITCHED-MAP SPREAD & SEVEN ADMINISTRATIVE FACTS (FOLIO 02 REFERENCE) */}
          <div className="relative p-5 sm:p-9 lg:p-11 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src="/images/case-study/raw_art_stitched_map_seams_4x3.jpg"
                alt="Four Torn Archival Map Strips Stitched Together by Crimson Thread"
                fill
                className="object-cover object-right opacity-90"
                loading="eager"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(14, 13, 12, 0.96) 0%, rgba(14, 13, 12, 0.91) 44%, rgba(14, 13, 12, 0.35) 72%, rgba(14, 13, 12, 0.65) 100%)",
                }}
              />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-7 lg:gap-8 items-start">
              {/* Left 7 Cols: Folio 02 Core Narrative + Guided Exploration */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-3">
                  <h2 className="mwt-chapter-title text-mwt-paper-display">
                    Continuity Receipt &amp;
                    <br />
                    9-Status Review Trace
                  </h2>

                  <p className="text-xs sm:text-base leading-[1.6] text-[#E2D7C3] border-l-[3px] border-mwt-signal-red pl-3.5 max-w-[62ch]">
                    Instead of pooling sensitive survivor histories into a centralized government database, the <strong>Continuity Receipt</strong> stitches the administrative path across disconnected doors—giving the participant a tamper-evident, client-side record of each encounter. It is not a truth engine, allegation database, or automated credibility assessment.
                  </p>
                </div>

                {/* Level 1: Seven Administrative Facts Preserved at Every Touchpoint */}
                <div className="mwt-evidence-panel p-4 sm:p-5 space-y-2.5 shadow-xl">
                  <div className="font-mono text-[10px] sm:text-[10.5px] font-bold text-mwt-crimson-seal tracking-[0.12em] uppercase">
                    SEVEN ADMINISTRATIVE FACTS PRESERVED AT EVERY TOUCHPOINT
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-5 gap-y-1.5 text-xs sm:text-[13px] font-semibold text-mwt-black font-sans">
                    <div>01. What material was received</div>
                    <div>02. What was actually reviewed</div>
                    <div>03. What action occurred</div>
                    <div>04. What was referred elsewhere</div>
                    <div>05. What fell outside authority</div>
                    <div>06. What remains unresolved</div>
                    <div className="sm:col-span-2 text-mwt-crimson-seal font-bold pt-1.5 border-t border-mwt-black/15">
                      07. Who owns the next action (and whether the receiving agency acknowledged the handoff)
                    </div>
                  </div>
                </div>

                {/* Primary Action Bar (Left-Rule Dark Callout) */}
                <div className="mwt-callout-dark flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[10px] font-bold text-mwt-signal-bright uppercase block tracking-wider">
                      CLIENT-SIDE PROTOTYPE · ZERO SERVER PII
                    </span>
                    <span className="font-mono text-[11px] text-[#C8BFA8]">
                      Submission ≠ Review · Referral ≠ Assistance · Closure ≠ Exoneration
                    </span>
                  </div>
                  <Link
                    href="/continuity#receipt-specimen"
                    className="px-4 py-2.5 bg-mwt-crimson-seal hover:bg-mwt-oxblood-dark text-white rounded-xs text-xs font-bold uppercase tracking-wider font-mono inline-flex items-center gap-2 transition shadow-md"
                  >
                    <span>Test Receipt Prototype</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Level 2 Guided Exploration: Agency Counterpart Review Trace (AGY-003) & Touchpoint Journey */}
                <EditorialDisclosure
                  variant="dark"
                  kicker="AGENCY COUNTERPART · SPECIMEN AGY-003"
                  badge="4 RECORDS · 9 STATUSES"
                  title="Inspect Pre-Closure Review Trace Table & Four-Touchpoint Journey"
                  summary="See how the agency-side Review Trace logs whether submitted orders, attendance logs, and witness routes were actually examined before case closure."
                >
                  <div className="space-y-5">
                    {/* Mobile-Friendly Stack + Desktop Table for AGY-003 */}
                    <div className="space-y-2.5 sm:hidden">
                      {traceRows.map((row) => (
                        <div
                          key={row.id}
                          className="p-3 bg-[#171614] border border-mwt-charcoal rounded-xs space-y-1 font-mono text-xs"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-white font-bold">
                              {row.id} · {row.name}
                            </span>
                          </div>
                          <div className={`text-[11px] ${row.statusClass}`}>
                            {row.status}
                          </div>
                          <div className="text-[11px] text-[#D5CBB8] font-sans">
                            Safeguard: {row.safeguard}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="hidden sm:block overflow-x-auto">
                      <table className="w-full text-left border-collapse font-mono text-xs">
                        <thead>
                          <tr className="border-b border-[rgba(232,222,200,0.25)] text-mwt-signal-bright text-[10px] tracking-[0.1em] uppercase">
                            <th className="pb-2 pr-3">IDENTIFIED RECORD</th>
                            <th className="pb-2 pr-3">REVIEW TRACE STATUS</th>
                            <th className="pb-2">PRE-CLOSURE SAFEGUARD</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[rgba(232,222,200,0.12)] text-mwt-paper-muted">
                          {traceRows.map((row) => (
                            <tr key={row.id}>
                              <td className="py-2.5 pr-3">
                                <strong className="text-white">{row.id}</strong> {row.name}
                              </td>
                              <td className={`py-2.5 pr-3 ${row.statusClass}`}>
                                {row.status}
                              </td>
                              <td className="py-2.5 text-[#D5CBB8] font-sans text-xs">
                                {row.safeguard}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* 4 Stitched Touchpoint Coordinate Plaques + Journey Strip */}
                    <div className="pt-3 border-t border-mwt-charcoal space-y-3">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
                        {touchpoints.map((tp) => (
                          <div
                            key={tp.num}
                            className="bg-[#171614] border border-mwt-signal-red/70 px-2.5 py-1.5 text-center"
                          >
                            <div className="text-[9.5px] font-bold text-mwt-signal-bright tracking-[0.1em]">
                              {tp.num}
                            </div>
                            <div className="text-[10.5px] font-semibold text-mwt-paper-display">
                              {tp.name}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 bg-mwt-paper text-mwt-black rounded-xs space-y-1">
                        <span className="text-[10px] font-mono uppercase text-mwt-crimson-seal font-bold block tracking-wider">
                          FOUR-TOUCHPOINT JOURNEY MODEL
                        </span>
                        <div className="relative h-16 sm:h-20 w-full overflow-hidden">
                          <Image
                            src="/images/art/specimen_touchpoints_strip.png"
                            alt="Four-Touchpoint Journey Across Police, DV, Legal Aid, and Housing"
                            fill
                            className="object-contain mix-blend-multiply"
                            loading="lazy"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </EditorialDisclosure>
              </div>

              {/* Right 5 Cols: Physical Specimen Exhibit */}
              <div className="lg:col-span-5">
                <div className="bg-mwt-paper-muted text-mwt-black border-2 border-mwt-black p-3.5 sm:p-4 rounded-xs shadow-2xl space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-mwt-border-paper font-mono text-[10px] text-mwt-graphite uppercase">
                    <span className="font-bold text-mwt-crimson-seal">
                      SPECIMEN ARCHIVE #CR-2026-0814 · PAIRED WITH AGY-003
                    </span>
                    <span>PORTABLE RECORD</span>
                  </div>

                  <div className="relative rounded-xs overflow-hidden border border-mwt-charcoal bg-white">
                    <div className="relative h-[300px] sm:h-[380px] w-full">
                      <Image
                        src="/images/art/specimen_receipt_perfect_final.png"
                        alt="Physical Continuity Receipt Document Specimen"
                        fill
                        className="object-contain object-top"
                        loading="eager"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. BOTTOM DISCLOSURE RAIL (Always Visible Legal Qualification) */}
          <div className="bg-[#0E0D0C]/95 border-t border-[rgba(232,222,200,0.22)] px-5 sm:px-9 lg:px-11 py-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10.5px] sm:text-[11px] text-[#C8BFA8]">
            <span>
              MANDATORY DISCLOSURES: NOT_LEGAL_COUNSEL · NOT_MERITS_FINDING · NOT_EVIDENTIARY_AUTHENTICATION
            </span>
            <span className="text-mwt-paper-muted font-semibold">
              SHA-256 CANONICAL DIGEST VERIFIED CLIENT-SIDE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
