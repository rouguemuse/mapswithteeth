"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { EditorialDisclosure } from "@/components/shared/EditorialDisclosure";

export function WorkInPracticeSection() {
  const adoptionTiers = [
    {
      code: "TIER 01 · INTERNAL SOP",
      name: "Agency Practice Today",
      body: "Adopt pre-closure context checklists, the 9-status Review Trace, and 6-state barrier-aware coding via internal SOPs.",
    },
    {
      code: "TIER 02 · INTERLOCAL PILOT",
      name: "90-Day Synthetic Trials",
      body: "Test closed-loop referral acknowledgments under Tex. Gov’t Code Ch. 791 using 100% synthetic demonstration data.",
    },
    {
      code: "TIER 03 · SUNSET REVIEW",
      name: "Commission Management",
      body: "Incorporate handoff acknowledgment rates & pre-closure audits into the 2026–2027 Texas DFPS Sunset review.",
    },
    {
      code: "TIER 04 · STATUTORY",
      name: "Legislative Codification",
      body: "Extend Texas MDT/CAC statutes (Tex. Fam. Code §§ 261.301, 264.403, 264.406) & telecom continuity (Ch. 93).",
    },
  ];

  return (
    <section id="work-in-practice" className="scroll-mt-36 lg:scroll-mt-28 font-sans select-none">
      <div className="mwt-folio-frame shadow-2xl">
        <div className="border-2 border-mwt-black overflow-hidden bg-mwt-ink">
          {/* 1. TOP CONCENTRIC RADIAL WOODCUT MAP HEADER (FOLIO 04 REFERENCE) */}
          <div className="relative border-b-[3px] border-mwt-signal-red p-5 sm:p-10 lg:p-12 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src="/images/case-study/raw_art_radial_city_crimson_thread.jpg"
                alt="Concentric Radial Woodcut Map with Double Crimson Continuity Thread"
                fill
                className="object-cover object-center opacity-88"
                loading="eager"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(14, 13, 12, 0.94) 0%, rgba(14, 13, 12, 0.78) 48%, rgba(14, 13, 12, 0.35) 78%, rgba(14, 13, 12, 0.72) 100%)",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <div className="max-w-3xl space-y-2.5">
                <span className="mwt-kicker text-mwt-signal-bright block">
                  FOLIO 04 · APPLIED WORK IN PRACTICE &amp; INCREMENTAL ADOPTION
                </span>
                <h2 className="mwt-chapter-title text-mwt-paper-display">
                  From Primary-Source QA to
                  <br />
                  Incremental Institutional Adoption
                </h2>
                <p className="text-xs sm:text-sm text-[#E2D7C3] max-w-2xl leading-relaxed font-sans">
                  Two live applied contexts demonstrate how our Cross-System Continuity Standard operates today: an active barrier-first navigation pilot in Central Texas and submitted structural reform proposals for the Texas DFPS Sunset review.
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-block font-mono text-[10.5px] bg-mwt-signal-red text-white px-3 py-1.5 uppercase font-bold tracking-wider rounded-xs">
                  TIERS 1–2 REQUIRE ZERO NEW STATUTES
                </span>
              </div>
            </div>
          </div>

          {/* 2. BOTTOM MONOGRAPH: TWO COMPLEMENTARY APPLICATIONS (LEVEL 1) + 4-TIER ADOPTION MATRIX (LEVEL 2) */}
          <div className="bg-mwt-paper-muted text-mwt-black p-5 sm:p-10 lg:p-12 space-y-6">
            {/* Two Complementary Applications Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Application 1: Central Texas Frontline Navigation Pilot */}
              <div className="mwt-ledger-card-light p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-md">
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mwt-border-paper pb-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase bg-mwt-crimson-seal text-white px-2.5 py-1 rounded-xs">
                      APPLICATION 01 · IMPLEMENTED CODE
                    </span>
                    <span className="text-xs font-mono font-bold text-mwt-graphite flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-mwt-crimson-seal" />
                      <span>Central Texas (5 Counties)</span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-mwt-black">
                      Barrier-First Resource Intelligence
                    </h3>
                    <p className="text-xs font-mono uppercase font-bold text-mwt-crimson-seal">
                      &ldquo;A directory is not a route.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-mwt-graphite leading-relaxed font-sans pt-1">
                      Evaluates emergency shelter, utility security deposit waivers (16 TAC § 25.478), and statutory lease termination (Tex. Prop. Code § 92.016) across Travis, Williamson, Bastrop, Burnet, and Hays counties—testing whether help is <em>actually reachable</em> given eligibility gates, waitlists, transit locks, and safety constraints.
                    </p>
                  </div>

                  {/* Visual Thumbnail of Texas Route */}
                  <div className="p-3 bg-mwt-paper border border-mwt-border-paper rounded-xs flex items-center gap-3.5">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-mwt-parchment border border-mwt-border-paper rounded-xs overflow-hidden">
                      <Image
                        src="/images/art/motif_texas_route.png"
                        alt="Texas Regional Continuity Map"
                        fill
                        className="object-contain mix-blend-multiply"
                        loading="eager"
                        unoptimized
                      />
                    </div>
                    <div className="font-mono text-xs space-y-0.5">
                      <span className="text-mwt-crimson-seal font-bold block uppercase text-[10px]">
                        DETERMINISTIC MATCHING (47 AUDITED RESOURCES)
                      </span>
                      <span className="text-mwt-graphite text-[11px] block leading-snug">
                        Evaluates concrete statutory barriers without algorithmic guessing.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-mwt-border-paper">
                  <Link
                    href="/find-help"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-mwt-ink hover:bg-mwt-crimson-seal text-white rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <span>Launch Central Texas Matcher</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Application 2: Texas DFPS Sunset Review Reform Proposal */}
              <div className="mwt-ledger-card-light p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-md">
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mwt-border-paper pb-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase bg-mwt-ink text-white px-2.5 py-1 rounded-xs">
                      APPLICATION 02 · SUBMITTED SUNSET INPUT (POL-001A)
                    </span>
                    <span className="text-xs font-mono font-bold text-mwt-graphite flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-mwt-crimson-seal" />
                      <span>Dec 2–3, 2026</span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-mwt-black">
                      Texas DFPS Sunset &amp; Policy Lab
                    </h3>
                    <p className="text-xs font-mono uppercase font-bold text-mwt-crimson-seal">
                      &ldquo;When the human becomes the integration layer.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-mwt-graphite leading-relaxed font-sans pt-1">
                      Independent structural reform recommendations submitted to the Texas Sunset Advisory Commission&apos;s evaluation of DFPS (POL-001A, Oct 2026; Commission hearing rescheduled to <strong>December 2–3, 2026</strong>). Focuses on five operational mechanisms: <strong>linked-case review</strong>, <strong>pre-closure related-case checks</strong>, <strong>non-algorithmic cumulative-pattern review</strong>, <strong>designated responsibility and accountable handoffs</strong>, and <strong>preservation of review and decision history</strong>.
                    </p>
                  </div>

                  {/* Visual Thumbnail of Documentation Stack */}
                  <div className="p-3 bg-mwt-paper border border-mwt-border-paper rounded-xs flex items-center gap-3.5">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-mwt-parchment border border-mwt-border-paper rounded-xs overflow-hidden">
                      <Image
                        src="/images/art/motif_doc_stack.png"
                        alt="Documentation Stack for Statutory Reform"
                        fill
                        className="object-contain mix-blend-multiply"
                        loading="eager"
                        unoptimized
                      />
                    </div>
                    <div className="font-mono text-xs space-y-0.5">
                      <span className="text-mwt-crimson-seal font-bold block uppercase text-[10px]">
                        SUBMITTED INPUT ≠ ADOPTED POLICY
                      </span>
                      <span className="text-mwt-graphite text-[11px] block leading-snug">
                        Distinguishes submitted public-interest input from enacted statutes or confirmed testimony.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-mwt-border-paper">
                  <Link
                    href="/policy"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-mwt-ink hover:bg-mwt-crimson-seal text-white rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <span>Explore Sunset Reform Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Level 2 Guided Disclosure: 4-Tier Incremental Adoption Matrix */}
            <EditorialDisclosure
              kicker="LEVEL 2 · INCREMENTAL ADOPTION PATHWAYS"
              title="Inspect the 4-Tier Institutional Adoption Matrix (SOP, Interlocal Pilot, Sunset, Statute)"
              summary="Tiers 1 and 2 require zero new legislation and can be tested via agency standard operating procedures or 90-day synthetic Interlocal Cooperation Act trials."
              badge="4 ADOPTION TIERS"
              variant="light"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {adoptionTiers.map((tier) => (
                  <div key={tier.code} className="mwt-ledger-card-light p-4 space-y-1.5">
                    <div className="font-mono text-[10px] font-bold text-mwt-crimson-seal tracking-[0.12em] uppercase">
                      {tier.code}
                    </div>
                    <h3 className="font-display text-base font-extrabold text-mwt-black leading-snug">
                      {tier.name}
                    </h3>
                    <p className="text-xs leading-[1.42] text-mwt-text-secondary font-sans">
                      {tier.body}
                    </p>
                  </div>
                ))}
              </div>
            </EditorialDisclosure>
          </div>
        </div>
      </div>
    </section>
  );
}
