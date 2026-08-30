import React from "react";
import Link from "next/link";
import { MapPin, Globe, Compass, ArrowRight } from "lucide-react";

export function TexasVsNationwideSection() {
  return (
    <section className="space-y-8 select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-5 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold">
            GEOGRAPHIC STRATEGY · TEXAS-FIRST, NOT TEXAS-ONLY
          </span>
          <span className="coord-tick">[PILOT DEPTH + NATIONWIDE SCOPE]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Starting deep in Texas. Looking far beyond it.
        </h2>

        <p className="text-xs sm:text-sm text-stone-800 max-w-4xl leading-relaxed font-sans">
          Maps With Teeth is being built and pressure-tested first in Central Texas because barrier-first resource research requires depth, not just volume. But the resource system is not limited to Texas. Alongside the Texas Deep Dive, we collect unusual, overlooked, national, multi-state, and location-specific programs that may offer another route when the obvious options fail.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1: Texas Deep Dive */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all shadow-2xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2.5 font-mono text-[10px]">
              <span className="font-bold text-[#971F26] uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>STATE & COUNTY DEPTH</span>
              </span>
              <span className="stamp-verified text-[9px] py-0.5 px-1.5">PILOT REGION</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">TEXAS DEEP DIVE</h3>
            <p className="text-xs font-bold text-[#1C1D1D] font-mono">
              Research one region deeply enough to expose the real barriers.
            </p>
            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              Statewide and local programs, county differences, referral rules, documentation requirements, funding status, service gaps, and routes that fail differently depending on where you live.
            </p>
          </div>

          <Link
            href="/texas"
            className="mt-6 text-xs font-bold font-mono text-[#971F26] hover:underline flex items-center gap-1.5 group"
          >
            <span>Explore Texas →</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 2: Other Ways Through */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all shadow-2xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2.5 font-mono text-[10px]">
              <span className="font-bold text-[#971F26] uppercase flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>NATIONWIDE & MULTI-STATE</span>
              </span>
              <span className="stamp-verified text-[9px] py-0.5 px-1.5">ALL 50 STATES</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">OTHER WAYS THROUGH</h3>
            <p className="text-xs font-bold text-[#971F26] font-mono">
              National, multi-state, and location-specific resources beyond the Texas pilot.
            </p>
            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              A growing collection of national programs, uncommon assistance, specialized funds, industry-specific help, unusual eligibility routes, and programs discovered outside the Texas pilot.
            </p>
          </div>

          <Link
            href="/other-ways-through"
            className="mt-6 text-xs font-bold font-mono text-[#971F26] hover:underline flex items-center gap-1.5 group"
          >
            <span>Explore resources beyond Texas →</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 3: Ask Us to Look */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all shadow-2xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2.5 font-mono text-[10px]">
              <span className="font-bold text-[#971F26] uppercase flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>CUSTOM RESEARCH DOCKET</span>
              </span>
              <span className="stamp-alert text-[9px] py-0.5 px-1.5">GAP INTAKE</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">ASK US TO LOOK</h3>
            <p className="text-xs font-bold text-[#1C1D1D] font-mono">
              Can&apos;t find the kind of help you need? Give us the problem, not the program name.
            </p>
            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              Tell us what you&apos;re trying to solve and where you&apos;re located. Research gaps help us decide what to investigate next.
            </p>
          </div>

          <Link
            href="/ask-us-to-look"
            className="mt-6 text-xs font-bold font-mono text-[#971F26] hover:underline flex items-center gap-1.5 group"
          >
            <span>Ask us to research a gap →</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
