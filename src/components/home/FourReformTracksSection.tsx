"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FourReformTracksSection() {
  const dimensions = [
    {
      idx: "DIM 01",
      name: "Billing Responsibility",
      text: "Who pays monthly service charges going forward.",
    },
    {
      idx: "DIM 02",
      name: "Adult Line-User Identity",
      text: "The human whose 2FA, work, & callbacks use the number.",
    },
    {
      idx: "DIM 03",
      name: "Number Continuity",
      text: "Porting or separating the number to an independent line.",
    },
    {
      idx: "DIM 04",
      name: "Security Controls",
      text: "Isolating call logs, location, SIM swaps, & recovery PINs.",
    },
    {
      idx: "DIM 05",
      name: "Device Ownership",
      text: "Physical possession and title to the handset hardware.",
    },
    {
      idx: "DIM 06",
      name: "Contractual Debt",
      text: "Installment & balance rules allocated without trapping identity.",
    },
  ];

  return (
    <section id="tracks" className="scroll-mt-36 lg:scroll-mt-28 font-sans select-none">
      {/* FOLIO 03 EDITORIAL CHAPTER: PERSONAL NUMBER CONTINUITY (MODEL B) */}
      <div className="mwt-folio-frame shadow-2xl">
        <div className="border-2 border-mwt-charcoal overflow-hidden bg-mwt-ink text-mwt-paper-display">
          {/* Nocturnal Woodcut Entanglement Knot to Signal Line Canvas */}
          <div className="relative p-5 sm:p-9 lg:p-11 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src="/images/case-study/raw_art_telecom_signal_knot_4x3.jpg"
                alt="Nocturnal Woodcut Cartography: Entangled Billing Knot Resolving into Clean Crimson Signal Line"
                fill
                className="object-cover object-center opacity-90"
                loading="eager"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 24% 26%, rgba(14, 13, 12, 0.95) 0%, rgba(14, 13, 12, 0.84) 38%, rgba(14, 13, 12, 0.28) 76%)",
                }}
              />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Top Row: Kicker, Title, Quote & Non-Entitlement Boundary Badge */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                <div className="max-w-3xl space-y-3.5">
                  <span className="mwt-kicker text-mwt-signal-bright block">
                    FOLIO 03 · PRIMARY WORKING MODEL B (POLICY RESEARCH &amp; ARCHITECTURE)
                  </span>

                  <h2 className="mwt-chapter-title text-mwt-paper-display">
                    Personal Number
                    <br />
                    Continuity
                  </h2>

                  <p className="mwt-quote-rule text-mwt-paper-muted">
                    &ldquo;A change in administrative or financial authority should not automatically erase an individual’s continuity.&rdquo;
                  </p>

                  <p className="text-xs sm:text-[15px] leading-[1.6] text-[rgba(232,222,200,0.88)] max-w-[65ch] font-sans">
                    Consumer wireless carriers routinely conflate <strong>shared-account billing authority</strong> with <strong>control over another adult’s communication identity</strong>. When a primary bill payer can unilaterally suspend service, inspect call logs, or block portability, billing structure becomes an instrument of administrative erasure—severing 2FA recovery, employment, healthcare, school alerts, and court callbacks overnight.
                  </p>
                </div>

                {/* Non-Entitlement Architectural Boundary Badge (Left-Rule Callout) */}
                <div className="mwt-callout-dark font-mono text-[10px] sm:text-[10.5px] tracking-[0.12em] uppercase shrink-0 self-start">
                  <div className="text-mwt-signal-bright font-bold">
                    ARCHITECTURAL BOUNDARY
                  </div>
                  <div className="text-mwt-paper-display font-semibold mt-0.5">
                    PROPOSED POLICY &amp; TECH MODEL
                  </div>
                  <div className="text-[#C8BFA8] text-[9.5px] mt-0.5">
                    NOT AN ENACTED CARRIER ENTITLEMENT
                  </div>
                </div>
              </div>

              {/* Spatial Cartographic Callouts: The Entanglement Knot vs. The Separated Continuity Line */}
              <div className="grid md:grid-cols-2 gap-4 pt-1">
                <div className="bg-[rgba(14,13,12,0.82)] border-l-[3px] border-l-mwt-signal-red pl-4 py-3 pr-3 space-y-1.5">
                  <div className="font-mono text-[10px] text-mwt-signal-bright font-bold tracking-[0.12em] uppercase">
                    THE ENTANGLEMENT KNOT · CURRENT CARRIER DEFAULT
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-mwt-paper-display">
                    Shared-Account Billing Control
                  </h3>
                  <p className="text-xs leading-[1.45] text-[#D5CBB8] font-sans">
                    Primary account holder controls line suspension, call/text logs, SIM swaps, and porting PINs—trapping the adult line user inside an account they do not control.
                  </p>
                </div>

                <div className="bg-[rgba(14,13,12,0.82)] border-l-[3px] border-l-[#4ADE80] pl-4 py-3 pr-3 space-y-1.5">
                  <div className="font-mono text-[10px] text-[#4ADE80] font-bold tracking-[0.12em] uppercase">
                    THE SEPARATED CONTINUITY LINE · PROPOSED STANDARD
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-mwt-paper-display">
                    Portable Adult Civic Identity
                  </h3>
                  <p className="text-xs leading-[1.45] text-[#D5CBB8] font-sans">
                    Bridges <strong>47 U.S.C. § 345</strong> (Safe Connections Act) &amp; <strong>Tex. Fam. Code Ch. 93</strong>: no forced third-party bill payment, and valid device debts remain governed by contract law.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Deck: 6 Separated Dimensions (Compact 2-Col Mobile / 6-Col Desktop) */}
          <div className="bg-[rgba(14,13,12,0.96)] border-t-2 border-mwt-signal-red px-5 sm:px-9 lg:px-11 py-5 space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-mono text-[10.5px] sm:text-[11px] font-bold text-mwt-signal-bright tracking-[0.12em] uppercase">
                SIX DIMENSIONS SEPARATED BY THE PERSONAL NUMBER CONTINUITY ARCHITECTURE
              </span>
              <span className="font-mono text-[10px] text-mwt-paper-muted uppercase">
                [NO FORCED THIRD-PARTY PAYMENT · LEGITIMATE DEBTS DO NOT DISAPPEAR]
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-1">
              {dimensions.map((dim) => (
                <div
                  key={dim.idx}
                  className="border-l-2 border-[rgba(232,222,200,0.3)] pl-3 space-y-0.5"
                >
                  <div className="font-mono text-[10px] font-bold text-mwt-signal-bright tracking-[0.12em]">
                    {dim.idx}
                  </div>
                  <h4 className="font-display text-xs sm:text-sm font-extrabold text-mwt-paper-display leading-tight">
                    {dim.name}
                  </h4>
                  <p className="text-[11px] leading-[1.35] text-[#C8BFA8] font-sans">
                    {dim.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[rgba(232,222,200,0.16)] flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[10.5px] text-[#C8BFA8]">
                Presented as policy research and proposed architecture—not an enacted general entitlement or carrier standard.
              </span>
              <Link
                href="/protection#digital"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-mwt-signal-bright hover:text-white transition"
              >
                <span>Inspect Full Personal Number Continuity Model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
