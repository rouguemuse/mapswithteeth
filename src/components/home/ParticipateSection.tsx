import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ParticipateSection() {
  const pathways = [
    {
      title: "Find Reachable Help",
      deck: "Immediate, accessible Texas resource & statutory remedy navigation with zero personal-data collection.",
      href: "/find-help",
      code: "JOURNEY 01 · SEEKING HELP",
    },
    {
      title: "Policy & Evidence Lab",
      deck: "Inspect primary-source evidence, methodology, statutory citations, limitations, and submitted Sunset proposals.",
      href: "/policy",
      code: "JOURNEY 02 · RESEARCH & POLICY",
    },
    {
      title: "Partners & Co-Design",
      deck: "Review proposed pilot scope, repository-verifiable work, governance boundaries, and submit a collaboration inquiry.",
      href: "/for-partners",
      code: "JOURNEY 03 · INSTITUTIONAL PARTNERS",
    },
    {
      title: "Founding Budget & Support",
      deck: "Inspect the planned $100,000 six-month founding budget specification, fiscal sponsorship status, and funder inquiry.",
      href: "/support",
      code: "JOURNEY 03B · FUNDERS & DAFS",
    },
  ];

  return (
    <section
      id="participate"
      className="mwt-folio-frame shadow-2xl select-none font-sans scroll-mt-36 lg:scroll-mt-28"
    >
      <div className="mwt-dark-surface p-5 sm:p-10 lg:p-12 space-y-6 relative overflow-hidden">
        {/* Subtle Cartographic Hairline Grid */}
        <div className="absolute inset-0 mwt-carto-hairs pointer-events-none" />

        {/* Header */}
        <div className="border-b border-mwt-charcoal pb-4 space-y-2 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="mwt-kicker text-mwt-signal-bright">
              PARTICIPATE · COLLABORATION &amp; FIELD REVIEW
            </span>
            <span className="mwt-coord-tag">[OPEN PUBLIC-INTEREST ARCHIVE]</span>
          </div>

          <h2 className="mwt-chapter-title text-mwt-paper-display">
            Pressure-test the continuity framework.
          </h2>

          <p className="text-[#D5CBB8] text-xs sm:text-base max-w-[65ch] leading-relaxed font-sans">
            Maps With Teeth is an open public-interest initiative. We do not operate as a government agency or legal representation service. We invite frontline navigators, caseworkers, legal aid attorneys, and civic researchers to challenge, audit, and refine our schemas.
          </p>
        </div>

        {/* Pathways Grid (2x2 on >=360px mobile, 4 across on lg) */}
        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative z-10">
          {pathways.map((item) => {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group mwt-ledger-card-dark p-3.5 sm:p-5 transition-all flex flex-col justify-between space-y-3 hover:border-mwt-signal-bright"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-mwt-signal-bright font-bold block tracking-[0.14em]">
                    [{item.code}]
                  </span>
                  <h3 className="font-display font-extrabold text-base sm:text-xl text-mwt-paper-display group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-xs text-[#C8BFA8] leading-snug font-sans">
                    {item.deck}
                  </p>
                </div>

                <div className="pt-2 border-t border-[rgba(232,222,200,0.14)] flex items-center justify-between text-[11px] font-mono text-mwt-paper-muted group-hover:text-mwt-signal-bright">
                  <span>ENGAGE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Closing Editorial Compass Horizon */}
        <div className="pt-4 border-t border-mwt-charcoal flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] sm:text-xs text-[#C8BFA8] relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-white/10 shrink-0">
              <Image
                src="/images/art/motif_compass.png"
                alt="Compass Rose"
                fill
                className="object-contain"
                loading="eager"
                unoptimized
              />
            </div>
            <span>
              &ldquo;People shouldn&apos;t have to become an expert in broken systems just to find help.&rdquo;
            </span>
          </div>
          <div className="text-mwt-signal-bright font-bold tracking-[0.14em]">
            MWT-SPEC-2026-V2.1
          </div>
        </div>
      </div>
    </section>
  );
}
