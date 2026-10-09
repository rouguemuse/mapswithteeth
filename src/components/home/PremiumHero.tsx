"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";

export function PremiumHero() {
  return (
    <section className="relative bg-[#11100F] text-[#F8F5EE] overflow-hidden border-b-4 border-[#841F2B] select-none font-sans min-h-[640px] lg:min-h-[720px] flex flex-col justify-between">
      
      {/* 1. TOP METADATA REFERENCE BAR */}
      <div className="border-b border-[#282522] py-2 px-4 sm:px-6 lg:px-8 font-mono text-[11px] text-[#A39E94] bg-[#0C0B0A]/90 relative z-20 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="coord-tick text-[#A39E94]">[SYS REF: MWT-EDITORIAL-2026]</span>
          <span className="coord-tick hidden md:inline text-[#A39E94]">
            [CIVIC SYSTEMS REFORM · CONTINUITY ARCHITECTURE &amp; EVIDENCE PROVENANCE]
          </span>
          <span className="coord-tick text-[#E85D6B] font-bold">[AUDITED JURISDICTIONS: TX-254]</span>
        </div>
      </div>

      {/* 2. THE MUSEUM-QUALITY EDITORIAL PHOTOMONTAGE ENVIRONMENT */}
      {/* Desktop Background: 16:9 full-bleed mural aligned right with left-to-right atmospheric gradient masking */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/art/mwt_hero_montage.jpg"
            alt="Maps With Teeth Architectural Photomontage — Classical Courthouse, Radial Cartography, and Broken Red Continuity Route"
            fill
            className="object-cover object-right-top opacity-90 filter contrast-105 brightness-95"
            priority
            unoptimized
          />
          {/* Deep charcoal vignette & gradient mask: Left 45% is dark & quiet for headline legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#11100F] via-[#11100F]/85 via-45% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11100F] via-transparent to-transparent opacity-80" />
        </div>
      </div>

      {/* 3. HERO CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT 7 COLS: MONUMENTAL TYPOGRAPHY & EDITORIAL THESIS */}
          <div className="lg:col-span-7 space-y-7 max-w-2xl">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#1A1817]/90 border border-[#3E3A35] rounded-xs text-xs font-mono uppercase tracking-widest text-[#E5DFC8] backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#841F2B] animate-pulse" />
              <span>CIVIC SYSTEMS REFORM &amp; CONTINUITY</span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.02]">
                People shouldn’t disappear <br />
                <span className="text-[#E85D6B] italic underline decoration-[#841F2B] decoration-4 underline-offset-8">
                  between systems.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-[#E5DFC8] font-serif leading-relaxed pt-2">
                Maps With Teeth examines the unmapped voids between institutions, courts, and technologies—developing practical mechanisms for evidence traceability, survivor continuity, and institutional handoffs.
              </p>
            </div>

            {/* The Paradox Reality Box */}
            <div className="p-5 sm:p-6 bg-[#171615]/95 border-l-4 border-[#841F2B] border-y border-r border-[#2C2825] rounded-xs space-y-3 backdrop-blur-sm shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono text-[#E85D6B] font-bold uppercase tracking-wider">
                <span>THE PARADOX OF PUBLIC ASSISTANCE</span>
                <span>[REALITY CHECK]</span>
              </div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                Help exists. <span className="text-stone-400 font-normal">Access has conditions.</span>
              </div>
              <p className="text-sm sm:text-base text-[#D4CDBE] font-sans leading-relaxed">
                Services can exist on paper yet remain practically unreachable due to geographic locks, unconfirmed referrals, waitlists, and documentation hurdles. A directory listing is not a route.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/find-help"
                className="px-6 py-3.5 bg-[#841F2B] hover:bg-[#661620] text-white rounded-xs text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all border border-[#9E2837] focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>Find Help (Central Texas Pilot)</span>
              </Link>

              <a
                href="#problem"
                className="px-6 py-3.5 bg-[#1F1C1A]/90 hover:bg-[#2B2724] border border-[#3E3A35] text-[#F8F5EE] rounded-xs text-xs sm:text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#841F2B]"
              >
                <span>Inspect The Seam Deficit</span>
                <ArrowDown className="w-4 h-4 text-[#E85D6B]" />
              </a>
            </div>

            {/* Invariant Trust Tags */}
            <div className="pt-3 border-t border-[#262320]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-[#A39E94]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3FA662]" />
                <span>Zero Surveillance Dossiers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3FA662]" />
                <span>Client-Side Cryptographic Receipts</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3FA662]" />
                <span>Independent Public-Interest Research</span>
              </span>
            </div>

          </div>

          {/* MOBILE ONLY / TABLET VIEW: SEPARATELY CONSIDERED PORTRAIT COMPOSITION */}
          <div className="lg:hidden col-span-12 space-y-4">
            <div className="relative rounded-xs border-2 border-[#332E29] overflow-hidden shadow-2xl bg-[#1A1817]">
              <div className="flex items-center justify-between px-3 py-2 bg-[#0C0B0A] border-b border-[#282522] font-mono text-[10px] text-[#A39E94] uppercase">
                <span className="text-[#E85D6B] font-bold">PLATE 01 · SYSTEM PHOTOMONTAGE</span>
                <span>ARCHIVAL COMPOSITION</span>
              </div>
              <div className="relative h-72 sm:h-84 w-full">
                <Image
                  src="/images/art/mwt_hero_montage_mobile.jpg"
                  alt="Maps With Teeth Architectural Photomontage — Portrait Composition"
                  fill
                  className="object-cover object-center filter contrast-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100F] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-3 bg-[#1A1817] border-t border-[#2B2926] font-mono text-[10px] text-[#A39E94] flex justify-between">
                <span>FRAGMENTED JURISDICTIONS</span>
                <span className="text-[#E85D6B] font-bold">DISCONTINUITY ROUTE</span>
              </div>
            </div>
          </div>

          {/* DESKTOP RIGHT 5 COLS: CURATED ARCHIVAL CAPTION BADGE */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-end justify-end h-full">
            <div className="bg-[#11100F]/85 border border-[#3E3A35] p-4 rounded-xs shadow-2xl backdrop-blur-md max-w-sm space-y-2 text-right">
              <div className="font-mono text-[10px] uppercase text-[#E85D6B] font-bold tracking-wider">
                [PLATE 01 · MONUMENTAL DISCONTINUITY]
              </div>
              <p className="text-xs font-serif italic text-[#E5DFC8] leading-relaxed">
                &ldquo;A person moves through the courts, the streets, and the shelter doors. But the paper tears, the county line forgets, and the route fractures.&rdquo;
              </p>
              <div className="font-mono text-[9px] text-[#A39E94] pt-1 border-t border-[#262320]">
                LAT 30.2672° N · LON 97.7431° W · TX-254 CADASTRAL ARCHIVE
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
