"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, ArrowRight, CheckCircle2 } from "lucide-react";

export function PremiumHero() {
  return (
    <section className="relative bg-mwt-ink text-mwt-paper-display overflow-hidden border-b-[3px] border-mwt-signal-red select-none font-sans min-h-[600px] lg:min-h-[740px] flex flex-col justify-between">
      {/* 1. BACKGROUND ARCHIVAL COURTHOUSE & CARTOGRAPHIC COLLAGE (FOLIO 00) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/case-study/raw_art_courthouse_cartography_collage.jpg"
            alt="Maps With Teeth Architectural Photomontage — Classical Courthouse, Radial Cartography, and Broken Red Continuity Route"
            fill
            className="object-cover object-right center opacity-95 contrast-105"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(12, 11, 10, 0.97) 0%, rgba(12, 11, 10, 0.92) 38%, rgba(12, 11, 10, 0.42) 58%, rgba(12, 11, 10, 0.04) 78%)",
            }}
          />
          <div className="absolute inset-0 mwt-carto-hairs" />
        </div>
      </div>

      {/* 2. TOP MONOGRAPH RAIL (FOLIO 00 REFERENCE BAR) */}
      <div className="relative z-20 border-b border-[rgba(232,222,200,0.16)] bg-[#0C0B0A]/85 backdrop-blur-xs">
        <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-2">
          <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] uppercase font-semibold text-mwt-paper-muted border-l-[3px] border-mwt-signal-red pl-3 leading-snug">
            INDEPENDENT PUBLIC-INTEREST SYSTEMS RESEARCH &amp; ACCOUNTABILITY INITIATIVE
          </div>
          <div className="mwt-coord-tag hidden sm:inline-block">
            FOLIO 00 · CASE STUDY MONOGRAPH [30.2672° N, 97.7431° W]
          </div>
        </div>
      </div>

      {/* 3. HERO EDITORIAL SPREAD */}
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10 lg:py-14 relative z-10 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* LEFT 7 COLS: HEADLINE DOMINANCE, THESIS & TWO WORKING MODELS LEDGER */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 max-w-[740px]">
            {/* Folio Kicker */}
            <div className="inline-flex items-center gap-2.5 mwt-kicker text-mwt-signal-bright">
              <span className="w-7 sm:w-9 h-[2px] bg-mwt-signal-red inline-block shrink-0" aria-hidden="true" />
              <span>WHEN THE HUMAN BECOMES THE INTEGRATION LAYER</span>
            </div>

            {/* Monumental Display Headline (Playfair Display 900) */}
            <h1 className="mwt-display-hero">
              People shouldn’t
              <br />
              disappear <em>between</em>
              <br />
              <em>systems.</em>
            </h1>

            {/* Core Premise Quote */}
            <p className="mwt-quote-rule text-[#E2D7C3]">
              &ldquo;People should not lose rights, safety, identity, evidence, or access simply because administrative systems divide authority differently than human lives do.&rdquo;
            </p>

            {/* Concise Level 1 Monograph Summary */}
            <p className="text-xs sm:text-[15px] leading-[1.58] text-[rgba(232,222,200,0.88)] max-w-[64ch] font-sans">
              Maps With Teeth investigates where responsibility, evidence, or identity vanishes across institutional boundaries—designing lightweight, participant-held continuity protocols without building centralized surveillance dossiers.
            </p>

            {/* Folio 00 Two Primary Working Models Ledger */}
            <div className="grid sm:grid-cols-2 gap-3 pt-0.5 max-w-[720px]">
              <Link
                href="/continuity"
                className="group mwt-ledger-card-dark p-3.5 sm:p-4 transition-all hover:border-mwt-signal-bright flex flex-col justify-between space-y-2"
              >
                <div className="space-y-1">
                  <div className="font-mono text-[10px] tracking-[0.14em] text-mwt-signal-bright font-bold uppercase flex items-center justify-between gap-2">
                    <span>MODEL A · IMPLEMENTED PROTOTYPE</span>
                    <Compass className="w-3.5 h-3.5 text-mwt-signal-bright shrink-0" />
                  </div>
                  <h2 className="font-display text-base sm:text-[18px] font-extrabold text-mwt-paper-display group-hover:text-white leading-snug">
                    Continuity Receipt &amp; Review Trace
                  </h2>
                  <p className="text-xs leading-[1.42] text-[rgba(232,222,200,0.82)] font-sans">
                    Participant-held 7-field record of what was received, reviewed, referred, and left unresolved—paired with the 9-status Review Trace (AGY-003).
                  </p>
                </div>
                <div className="pt-2 border-t border-[rgba(232,222,200,0.14)] font-mono text-[11px] font-bold uppercase tracking-wider text-mwt-paper-muted group-hover:text-mwt-signal-bright flex items-center justify-between">
                  <span>Inspect Model A &amp; Prototype</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </Link>

              <Link
                href="/protection#digital"
                className="group mwt-ledger-card-dark p-3.5 sm:p-4 transition-all hover:border-mwt-signal-bright flex flex-col justify-between space-y-2"
              >
                <div className="space-y-1">
                  <div className="font-mono text-[10px] tracking-[0.14em] text-mwt-signal-bright font-bold uppercase flex items-center justify-between gap-2">
                    <span>MODEL B · PROPOSED POLICY MODEL</span>
                    <ArrowRight className="w-3.5 h-3.5 text-mwt-signal-bright shrink-0" />
                  </div>
                  <h2 className="font-display text-base sm:text-[18px] font-extrabold text-mwt-paper-display group-hover:text-white leading-snug">
                    Personal Number Continuity
                  </h2>
                  <p className="text-xs leading-[1.42] text-[rgba(232,222,200,0.82)] font-sans">
                    Separating shared-account telecom billing authority from control over another adult’s communication identity across 6 distinct dimensions.
                  </p>
                </div>
                <div className="pt-2 border-t border-[rgba(232,222,200,0.14)] font-mono text-[11px] font-bold uppercase tracking-wider text-mwt-paper-muted group-hover:text-mwt-signal-bright flex items-center justify-between">
                  <span>Inspect 6-Dimension Model</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </Link>
            </div>

            {/* 3 Differentiated Visitor Journeys (Priority 2 Conversion Architecture) */}
            <div className="pt-1 max-w-[740px]">
              <div className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.14em] text-[#C8BFA8] mb-2">
                SELECT YOUR PATHWAY · THREE PUBLIC-INTEREST JOURNEYS
              </div>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {/* Journey 1: People Seeking Help */}
                <Link
                  href="/find-help"
                  className="group bg-mwt-crimson-seal hover:bg-mwt-oxblood-dark border border-[rgba(232,222,200,0.3)] p-3 rounded-xs transition-all flex flex-col justify-between space-y-1.5"
                >
                  <div>
                    <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-white/90 block">
                      01 · SEEKING HELP
                    </span>
                    <span className="font-display font-bold text-sm text-white block leading-snug">
                      Find Reachable Resources
                    </span>
                    <span className="text-[11px] text-white/85 font-sans block leading-tight mt-0.5">
                      47 audited TX routes &amp; statutory waivers. Zero personal data stored.
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase text-white flex items-center justify-between pt-1 border-t border-white/20">
                    <span>Start Matcher</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>

                {/* Journey 2: Researchers & Policymakers */}
                <Link
                  href="/policy"
                  className="group bg-[#141312]/90 hover:bg-[#1C1A17] border border-[rgba(232,222,200,0.28)] hover:border-mwt-signal-bright p-3 rounded-xs transition-all flex flex-col justify-between space-y-1.5"
                >
                  <div>
                    <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-mwt-signal-bright block">
                      02 · POLICY &amp; RESEARCH
                    </span>
                    <span className="font-display font-bold text-sm text-mwt-paper-display group-hover:text-white block leading-snug">
                      Evidence &amp; Policy Lab
                    </span>
                    <span className="text-[11px] text-[#C8BFA8] font-sans block leading-tight mt-0.5">
                      Methodology, 12 TX statutes, limitations &amp; submitted Sunset brief (POL-001A).
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase text-mwt-paper-muted group-hover:text-mwt-signal-bright flex items-center justify-between pt-1 border-t border-[rgba(232,222,200,0.14)]">
                    <span>Inspect Evidence</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>

                {/* Journey 3: Institutional Partners & Funders */}
                <Link
                  href="/for-partners"
                  className="group bg-[#141312]/90 hover:bg-[#1C1A17] border border-[rgba(232,222,200,0.28)] hover:border-mwt-signal-bright p-3 rounded-xs transition-all flex flex-col justify-between space-y-1.5"
                >
                  <div>
                    <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#4ADE80] block">
                      03 · PARTNERS &amp; FUNDERS
                    </span>
                    <span className="font-display font-bold text-sm text-mwt-paper-display group-hover:text-white block leading-snug">
                      Pilot Scope &amp; Governance
                    </span>
                    <span className="text-[11px] text-[#C8BFA8] font-sans block leading-tight mt-0.5">
                      Repository-verified work, planned $100k budget, &amp; co-design inquiry.
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase text-mwt-paper-muted group-hover:text-[#4ADE80] flex items-center justify-between pt-1 border-t border-[rgba(232,222,200,0.14)]">
                    <span>Partner Briefing</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Secondary Methodological Entry Links */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-0.5 text-[11px] sm:text-xs font-mono">
              <Link
                href="#distinction-inventory"
                className="py-1 text-mwt-signal-bright hover:text-white underline decoration-mwt-signal-red underline-offset-4 uppercase tracking-wider font-bold"
              >
                Law vs. Code vs. Proposal ↓
              </Link>
              <Link
                href="/how-it-works"
                className="py-1 text-mwt-paper-muted hover:text-white underline decoration-mwt-signal-red underline-offset-4 uppercase tracking-wider font-semibold"
              >
                System Change Map →
              </Link>
              <Link
                href="/support"
                className="py-1 text-mwt-paper-muted hover:text-white underline decoration-mwt-signal-red underline-offset-4 uppercase tracking-wider font-semibold"
              >
                Founding Budget &amp; Support →
              </Link>
            </div>
          </div>

          {/* TABLET COLLAGE PLATE (Hidden on small <640px phones to preserve first-two-screenfuls clarity) */}
          <div className="hidden sm:block lg:hidden col-span-12">
            <div className="mwt-folio-frame">
              <div className="relative h-56 w-full bg-mwt-ink overflow-hidden border border-mwt-charcoal">
                <Image
                  src="/images/case-study/raw_art_courthouse_cartography_collage.jpg"
                  alt="Maps With Teeth Architectural Photomontage — Classical Courthouse and Radial Cartography"
                  fill
                  className="object-cover object-right contrast-105"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between font-mono text-[10px] text-mwt-paper-muted bg-[#0E0D0C]/90 px-2.5 py-1.5 border border-[rgba(232,222,200,0.3)]">
                  <span className="text-mwt-signal-bright font-bold">FOLIO 00 · ARCHIVAL COLLAGE</span>
                  <span>TX-254 CADASTRAL ARCHIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP RIGHT 5 COLS: OPEN NEGATIVE SPACE FOR COURTHOUSE & RADIAL MAP + MINIMAL ARCHIVAL CAPTION */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-end justify-end">
            <div className="bg-[#0E0D0C]/88 border border-[rgba(232,222,200,0.32)] border-l-[3px] border-l-mwt-signal-red px-4 py-3 backdrop-blur-md max-w-xs text-right space-y-1">
              <div className="font-mono text-[10px] uppercase text-mwt-signal-bright font-bold tracking-[0.14em]">
                [PLATE 00 · MONUMENTAL DISCONTINUITY]
              </div>
              <p className="text-xs font-display italic text-[#E2D7C3] leading-relaxed">
                &ldquo;A person moves through the courts, the streets, and the shelter doors. But the paper tears, the county line forgets, and the route fractures.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM COLOPHON METRICS BAR (FOLIO 00 REFERENCE) */}
      <div className="relative z-20 bg-[#0E0D0C]/94 border-t border-[rgba(232,222,200,0.24)] backdrop-blur-md">
        <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            <div>
              <span className="font-display text-base sm:text-lg font-extrabold text-mwt-paper-display block sm:inline sm:mr-2">
                47 / 1,070
              </span>
              <span className="font-mono text-[9.5px] sm:text-[10.5px] tracking-[0.08em] text-[#C8BFA8] uppercase block sm:inline">
                Source-Audited Records &amp; Repo QA
              </span>
            </div>
            <div>
              <span className="font-display text-base sm:text-lg font-extrabold text-mwt-paper-display block sm:inline sm:mr-2">
                158
              </span>
              <span className="font-mono text-[9.5px] sm:text-[10.5px] tracking-[0.08em] text-[#C8BFA8] uppercase block sm:inline">
                Internal Matcher Test Assertions
              </span>
            </div>
            <div>
              <span className="font-display text-base sm:text-lg font-extrabold text-mwt-paper-display block sm:inline sm:mr-2">
                15 / 15
              </span>
              <span className="font-mono text-[9.5px] sm:text-[10.5px] tracking-[0.08em] text-[#C8BFA8] uppercase block sm:inline">
                Prototype Risk Invariant Tests
              </span>
            </div>
            <div>
              <span className="font-display text-base sm:text-lg font-extrabold text-mwt-paper-display block sm:inline sm:mr-2">
                POL-001A
              </span>
              <span className="font-mono text-[9.5px] sm:text-[10.5px] tracking-[0.08em] text-[#C8BFA8] uppercase block sm:inline">
                Submitted Input (Not Adopted Law)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[10.5px] font-mono text-[#C8BFA8] pt-2 lg:pt-0 border-t lg:border-t-0 border-[rgba(232,222,200,0.14)]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
              <span>Zero Surveillance Dossiers</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
              <span>No Algorithmic Risk Scoring</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
