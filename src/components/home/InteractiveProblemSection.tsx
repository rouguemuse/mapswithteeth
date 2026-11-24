"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function InteractiveProblemSection() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Stage 03: The Seam Void

  const seamCallouts = [
    {
      code: "SEAM 01 · TRANSIT",
      title: "Referral ≠ Handoff",
      desc: "Handing out a phone number is logged as assistance without checking capacity, jurisdiction, or acceptance.",
    },
    {
      code: "SEAM 02 · ERASURE",
      title: "Submission ≠ Review",
      desc: "Controlling orders or logs enter a file, but closure never records whether anyone opened or read them.",
    },
    {
      code: "SEAM 03 · DISTORTION",
      title: "Access Barrier ≠ Refusal",
      desc: "Missed unannounced callbacks on a shared or monitored phone line are coded as “declined to participate.”",
    },
    {
      code: "SEAM 04 · ECHOES",
      title: "Repetition ≠ Proof",
      desc: "Multiple agencies repeat one unverified summary until volume is mistaken for independent corroboration.",
    },
  ];

  const stages = [
    {
      num: "01",
      shortLabel: "Intake",
      name: "Initial Intake",
      actor: "Person in Crisis",
      action: "Submits evidence and requests critical safety protections.",
      flaw: "Agency logs intake locally, but shares no structured receipt with the individual.",
      burden:
        "The applicant assumes the system now holds their record; in reality, no outside agency knows it exists.",
    },
    {
      num: "02",
      shortLabel: "Referral",
      name: "Outbound Referral",
      actor: "Agency A (Sender)",
      action: "Issues an unconfirmed referral slip and closes internal case file.",
      flaw: "Status is marked 'Completed / Referred Out' with zero verification of transmission.",
      burden:
        "Agency A counts this as successful disposition. The person is left to transit the void alone.",
    },
    {
      num: "03",
      shortLabel: "Seam Void",
      name: "The Seam Void",
      actor: "The Disconnected Gap",
      action: "Referral sits in unmonitored inbox; capacity queue quietly closed.",
      flaw: "Neither agency tracks whether the file was opened, assigned, or dropped.",
      burden:
        "THE HUMAN BECOMES THE INTEGRATION LAYER: Forced to physically carry the burden of disconnected systems.",
    },
    {
      num: "04",
      shortLabel: "Retelling",
      name: "The Repeat Intake",
      actor: "Agency B (Receiver)",
      action: "Demands fresh documentation and original testimony from scratch.",
      flaw: "Prior statements, exhibits, and urgency flags are completely invisible.",
      burden: "Person forced to retell trauma and reconstruct timeline from memory.",
    },
    {
      num: "05",
      shortLabel: "Loop",
      name: "The Circular Lockout",
      actor: "Agency B → Agency A",
      action: "Conditions aid on a verification form only issued by Agency A.",
      flaw: "Agency A states their file is closed and cannot issue post-intake verifications.",
      burden:
        "Person abandoned in circular loop; system logs them as 'failed to complete intake'.",
    },
  ];

  return (
    <section id="problem" className="relative font-sans select-none scroll-mt-36 lg:scroll-mt-28">
      <div className="mwt-folio-frame shadow-2xl">
        <div className="border-2 border-mwt-black overflow-hidden bg-mwt-ink">
          {/* 1. TOP NOCTURNAL WOODCUT URBAN GRID & SEAM PINS (FOLIO 01 REFERENCE) */}
          <div className="relative border-b-[3px] border-mwt-signal-red p-5 sm:p-9 lg:p-11 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src="/images/case-study/raw_art_urban_grid_crimson_route.jpg"
                alt="Woodcut Urban Street Grid with Crimson Continuity Route"
                fill
                className="object-cover object-center opacity-88"
                loading="eager"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(14, 13, 12, 0.94) 0%, rgba(14, 13, 12, 0.78) 42%, rgba(14, 13, 12, 0.35) 75%, rgba(14, 13, 12, 0.65) 100%)",
                }}
              />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Chapter Title Plaque */}
              <div className="max-w-3xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="mwt-kicker text-mwt-signal-bright">
                    FOLIO 01 · PROBLEM ARCHITECTURE &amp; SEAM TAXONOMY
                  </span>
                  <span className="mwt-coord-tag">
                    [TAXONOMY: 12 INSTITUTIONAL SEAM FAILURES]
                  </span>
                </div>

                <h2 className="mwt-chapter-title text-mwt-paper-display">
                  When the Human Becomes
                  <br />
                  <span className="italic text-mwt-signal-bright">the Integration Layer.</span>
                </h2>

                <p className="text-xs sm:text-base leading-[1.6] text-[#E2D7C3] border-l-[3px] border-mwt-signal-red pl-3.5 max-w-[64ch]">
                  A single human crisis crosses police, child protection, civil courts, utilities, housing, and telecom. When each institution sees only its own narrow intake slice, the human is forced to carry the burden of cross-system coordination—and institutional friction is misread as participant failure (<strong>process-induced distortion</strong>).
                </p>
              </div>

              {/* 4 Cartographic Callout Pins Along the Crimson Route (2x2 on >=360px mobile) */}
              <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                {seamCallouts.map((pin) => (
                  <div key={pin.code} className="mwt-exhibit-plaque p-3 sm:p-3.5 space-y-1">
                    <div className="font-mono text-[9.5px] sm:text-[10px] tracking-[0.12em] text-mwt-signal-bright font-bold uppercase">
                      {pin.code}
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-extrabold text-mwt-paper-display leading-snug">
                      {pin.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-xs leading-[1.38] text-[#D5CBB8] font-sans">
                      {pin.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. BOTTOM MONOGRAPH INTERACTIVE PIPELINE & EXHIBIT A */}
          <div className="bg-mwt-paper-muted text-mwt-black p-5 sm:p-9 lg:p-11 space-y-6">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Right/Top on Mobile: Interactive 5-Stage Seam Pipeline (7 Cols) */}
              <div className="lg:col-span-7 lg:order-2 space-y-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-mwt-black pb-2">
                  <div>
                    <span className="font-mono text-[10.5px] text-mwt-crimson-seal font-bold uppercase tracking-[0.12em]">
                      INTERACTIVE SEAM DIAGNOSTIC ·{" "}
                    </span>
                    <span className="font-display text-base sm:text-xl font-extrabold text-mwt-black">
                      Five Stages of an Unconfirmed Handoff
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-mwt-graphite uppercase">
                    [TAP STAGE 01–05]
                  </span>
                </div>

                {/* 5-Stage Selector Tabs (Fits 5 across cleanly even at 320px) */}
                <div
                  role="tablist"
                  aria-label="Five stages of an unconfirmed handoff"
                  className="grid grid-cols-5 gap-1 sm:gap-1.5 font-mono"
                >
                  {stages.map((stage, idx) => {
                    const isActive = activeStep === idx;
                    const isVoid = idx === 2;
                    return (
                      <button
                        key={stage.num}
                        role="tab"
                        aria-selected={isActive}
                        type="button"
                        onClick={() => setActiveStep(idx)}
                        className={`p-2 sm:p-2.5 text-left border-2 transition-all rounded-xs flex flex-col justify-between cursor-pointer min-h-[54px] ${
                          isActive
                            ? isVoid
                              ? "bg-mwt-crimson-seal text-white border-mwt-crimson-seal shadow-sm"
                              : "bg-mwt-ink text-mwt-paper-display border-mwt-ink shadow-sm"
                            : "bg-mwt-paper-warm text-mwt-black border-mwt-black/40 hover:border-mwt-black"
                        }`}
                      >
                        <span
                          className={`text-[9.5px] sm:text-[10px] font-bold block ${
                            isActive ? "text-white" : "text-mwt-crimson-seal"
                          }`}
                        >
                          {stage.num}
                        </span>
                        <span className="font-display font-bold text-[10.5px] sm:text-xs truncate mt-0.5 block w-full">
                          {stage.shortLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Stage Detailed Breakdown Panel */}
                <div
                  role="tabpanel"
                  className="mwt-ledger-card-light p-4 sm:p-6 space-y-4 shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mwt-border-paper pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-mwt-crimson-seal block tracking-[0.12em]">
                        STAGE {stages[activeStep].num} · {stages[activeStep].actor}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-mwt-black">
                        {stages[activeStep].name}
                      </h3>
                    </div>
                    {activeStep === 2 && (
                      <span className="bg-mwt-crimson-seal text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-xs uppercase tracking-wider">
                        CRITICAL SEAM FAILURE
                      </span>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="p-3.5 bg-mwt-paper border border-mwt-border-paper rounded-xs space-y-1.5">
                      <span className="text-[10px] font-mono uppercase text-mwt-graphite font-bold block tracking-wider">
                        WHAT THE AGENCY SYSTEM LOGS:
                      </span>
                      <p className="text-xs sm:text-sm text-mwt-black font-sans leading-relaxed">
                        {stages[activeStep].action}
                      </p>
                      <div className="pt-1.5 text-[11px] font-mono text-mwt-crimson-seal font-semibold border-t border-mwt-border-subtle">
                        Flaw: {stages[activeStep].flaw}
                      </div>
                    </div>

                    <div className="p-3.5 bg-mwt-ink text-mwt-paper-display border border-mwt-black rounded-xs space-y-1.5">
                      <span className="text-[10px] font-mono uppercase text-mwt-signal-bright font-bold block tracking-wider">
                        THE HUMAN COST (UNCOMPENSATED BURDEN):
                      </span>
                      <p className="text-xs sm:text-sm text-[#E2D7C3] font-sans leading-relaxed">
                        {stages[activeStep].burden}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-mwt-border-paper flex flex-wrap items-center justify-between gap-3">
                    <div className="text-[11px] text-mwt-graphite font-mono">
                      <span>ARCHITECTURAL FLOW: </span>
                      <strong className="text-mwt-black">
                        NAVIGATE → PRESERVE PATH → PRESERVE REVIEW → IDENTIFY SEAM
                      </strong>
                    </div>
                    <Link
                      href="/the-gap"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-mwt-crimson-seal hover:text-mwt-black transition"
                    >
                      <span>Inspect The Seam Deficit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Left Column: Exhibit A Forensic Diagram (5 Cols) */}
              <div className="lg:col-span-5 lg:order-1 bg-mwt-ink text-mwt-paper-display border-2 border-mwt-black p-4 sm:p-5 rounded-xs shadow-xl space-y-3.5">
                <div className="flex items-center justify-between border-b border-mwt-charcoal pb-2.5 text-[10px] font-mono uppercase text-[#C8BFA8]">
                  <span className="text-mwt-signal-bright font-bold">
                    EXHIBIT A · THE RESOURCE LOOP HELL
                  </span>
                  <span>FORENSIC VISUALIZATION</span>
                </div>

                <div className="relative bg-[#171615] border border-mwt-charcoal rounded-xs p-2.5 overflow-hidden">
                  <div className="relative h-48 sm:h-56 w-full">
                    <Image
                      src="/images/art/motif_seam_tangle_loop.png"
                      alt="Original Maps With Teeth Forensic Diagram: The Resource Loop Hell"
                      fill
                      className="object-contain contrast-125"
                      loading="eager"
                      unoptimized
                    />
                  </div>
                  <div className="mt-1.5 text-center font-mono text-[10px] text-[#C8BFA8]">
                    &ldquo;It&apos;s not that help doesn&apos;t exist. It&apos;s that it&apos;s impossible to reach.&rdquo;
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-base sm:text-lg text-mwt-paper-display">
                    The Fiction of the Outbound Referral
                  </h4>
                  <p className="text-xs text-[#D5CBB8] leading-relaxed font-sans">
                    Public directories list agencies as if referral arrows guaranteed transit. In practice, an unconfirmed referral is indistinguishable from an administrative drop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
