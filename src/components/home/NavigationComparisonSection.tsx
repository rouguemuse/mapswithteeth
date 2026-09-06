"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Scale, CheckCircle2, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export function NavigationComparisonSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const comparisons = [
    {
      need: "Phone & digital safety",
      traditional: "Gives a list of hotlines or general device-safety advice.",
      mwt: "Surfaces federal Safe Connections Act line separation (47 U.S.C. § 345), carrier notice deadlines, privacy remedies, and tech-safety protocols.",
    },
    {
      need: "Emergency money & deposits",
      traditional: "Lists generic grant programs and charity hotlines with closed waitlists.",
      mwt: "Identifies lateral benevolence funds (culinary, craft artists, trade relief), PUCT deposit waivers, and exact documentation needed.",
    },
    {
      need: "Housing & lease escape",
      traditional: "Provides shelter numbers and generic tenant hotlines.",
      mwt: "Maps statutory lease break rights (Tex. Prop. Code § 92.016 without police reports), rekeying remedies, and advocate verification templates.",
    },
    {
      need: "Pets during escape",
      traditional: "Lists standard shelters, the vast majority of which cannot accept animals.",
      mwt: "Cross-matches pet foster networks (RedRover, APA PASS), confidential boarding, veterinary aid, and safe havens.",
    },
    {
      need: "Vehicle access & locks",
      traditional: "Sends the person to police, legal aid, or generic transit assistance.",
      mwt: "Maps distinct sub-problems: title ownership, key replacement, impound fees, tracking inspections, and emergency fuel routes.",
    },
    {
      need: "Suspected vehicle tracking",
      traditional: "“Contact local police” or “inspect your vehicle.”",
      mwt: "Surfaces specialized tech-safety inspection protocols, evidence documentation steps, and statutory remedies without generic guesswork.",
    },
  ];

  return (
    <section className="bg-[#EEE8DD] border border-[#D9D1C4] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8 select-none font-sans relative overflow-hidden bg-grid-atlas">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#971F26]" />
            <span>CHAPTER 02 · NAVIGATION METHODOLOGY COMPARISON</span>
          </span>
          <span className="coord-tick text-stone-600">[METHODOLOGY COMPARISON]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#26221F] tracking-tight leading-tight">
          Traditional Resource Navigation vs. Maps With Teeth
        </h2>

        <p className="text-base sm:text-[17px] text-stone-800 max-w-3xl leading-relaxed font-sans font-normal">
          The difference is not a longer directory. The difference is how navigation obstacles, qualification criteria, and systemic handoffs are analyzed and carried forward.
        </p>
      </div>

      {/* Desktop / Tablet Table Presentation (hidden on small mobile < 640px) */}
      <div className="hidden sm:block overflow-x-auto border border-[#D9D1C4] rounded-xl bg-[#F5F1E8] shadow-2xs">
        <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-[#D9D1C4] bg-[#26221F] text-white font-mono text-xs">
              <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider w-[24%]">
                When someone needs…
              </th>
              <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider w-[36%] border-l border-stone-700 text-stone-300">
                Traditional resource search
              </th>
              <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider w-[40%] border-l border-stone-700 text-[#F5F1E8] bg-[#971F26]">
                Maps With Teeth
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D9D1C4]">
            {comparisons.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-[#FAF7F2]" : "bg-[#F5F1E8]"}
              >
                <td className="p-3.5 sm:p-4 font-bold text-[#26221F] font-serif align-top text-xs sm:text-sm">
                  {row.need}
                </td>
                <td className="p-3.5 sm:p-4 text-stone-700 border-l border-[#D9D1C4] align-top leading-relaxed text-xs sm:text-[13px]">
                  {row.traditional}
                </td>
                <td className="p-3.5 sm:p-4 text-stone-900 font-medium border-l border-[#D9D1C4] bg-[#FFF] align-top leading-relaxed text-xs sm:text-[13px]">
                  {row.mwt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Paired Cards Presentation (visible only on < 640px) */}
      <div className="sm:hidden space-y-4">
        {comparisons.map((row, idx) => {
          const isHidden = !showAllMobile && idx >= 3;
          if (isHidden) return null;

          return (
            <div
              key={idx}
              className="bg-[#FAF7F2] border border-[#D9D1C4] rounded-xl p-4 space-y-3 shadow-2xs"
            >
              <div className="font-serif font-bold text-base text-[#26221F] border-b border-[#D9D1C4] pb-1.5">
                {row.need}
              </div>

              <div className="space-y-2 text-xs">
                {/* Traditional */}
                <div className="p-3 bg-[#EEE8DD] rounded-md border border-[#D9D1C4] space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold text-stone-600 block">
                    Traditional Directory:
                  </span>
                  <p className="text-stone-700 leading-snug font-sans">{row.traditional}</p>
                </div>

                {/* Maps With Teeth */}
                <div className="p-3 bg-[#FFF] rounded-md border-l-4 border-l-[#971F26] border border-[#D9D1C4] space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#971F26] block">
                    Maps With Teeth:
                  </span>
                  <p className="text-stone-900 leading-snug font-sans font-medium">{row.mwt}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Mobile Progressive Disclosure Button */}
        <button
          type="button"
          onClick={() => setShowAllMobile(!showAllMobile)}
          aria-expanded={showAllMobile}
          className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-white border border-[#D9D1C4] text-[#26221F] rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
        >
          {showAllMobile ? (
            <>
              <span>Show Fewer Comparisons</span>
              <ChevronUp className="w-4 h-4 text-[#971F26]" />
            </>
          ) : (
            <>
              <span>See Full Comparison (+3 More)</span>
              <ChevronDown className="w-4 h-4 text-[#971F26]" />
            </>
          )}
        </button>
      </div>

      {/* Core Philosophical Framing Underneath */}
      <div className="space-y-4 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 sm:p-5 bg-[#FAF7F2] border border-[#D9D1C4] rounded-xl space-y-1.5">
            <span className="font-mono text-xs uppercase font-bold text-stone-600 block">
              Traditional directories answer:
            </span>
            <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-snug">
              &ldquo;Who helps with this?&rdquo;
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-[#FAF7F2] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-mono text-xs uppercase font-bold text-[#971F26] block">
              Maps With Teeth also asks:
            </span>
            <p className="font-serif italic text-base sm:text-lg text-[#26221F] leading-snug">
              &ldquo;Can you actually use that help? What will block you? What do you need before you call? What happens if they say no? And where does the context go when you are sent somewhere else?&rdquo;
            </p>
          </div>
        </div>

        {/* 5-Phase Sequence Connection Banner */}
        <div className="p-4 sm:p-5 bg-[#26221F] text-white rounded-xl space-y-2.5 shadow-xs font-mono">
          <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold block">
            THE FIVE-STAGE CONTINUITY PIPELINE
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold tracking-wider">
            <span className="text-stone-300">FIND THE ROUTE</span>
            <span className="text-red-400">→</span>
            <span className="text-stone-300">DOCUMENT TOUCHPOINT</span>
            <span className="text-red-400">→</span>
            <span className="text-stone-300">CARRY CONTEXT</span>
            <span className="text-red-400">→</span>
            <span className="text-stone-300">IDENTIFY BOTTLENECK</span>
            <span className="text-red-400">→</span>
            <span className="text-white bg-[#971F26] px-2 py-0.5 rounded">FIND NEXT ROUTE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
