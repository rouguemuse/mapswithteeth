import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Scale, CheckCircle2, ShieldCheck } from "lucide-react";

export function NavigationComparisonSection() {
  const comparisons = [
    {
      need: "Phone & digital safety",
      traditional: "Gives a list of hotlines or device-safety resources.",
      mwt: "Shows available device, carrier, privacy, tech-safety and account-separation routes — including eligibility, restrictions and less-obvious options.",
    },
    {
      need: "Emergency money",
      traditional: "Lists grant programs and assistance organizations.",
      mwt: "Identifies which programs may actually fit the situation, what documentation they require, how quickly they operate, and alternatives when the obvious program is inaccessible.",
    },
    {
      need: "Vehicle access",
      traditional: "Sends the person to legal aid, police, transportation assistance or a generic resource list.",
      mwt: "Maps the separate problems involved — ownership, keys, insurance, towing, transportation, safety and legal access — and surfaces routes for each.",
    },
    {
      need: "Suspected vehicle tracking",
      traditional: "“Contact police” or “check your vehicle.”",
      mwt: "Surfaces tech-safety guidance, qualified inspection options, documentation steps and relevant legal/safety resources without pretending every tracking concern has the same solution.",
    },
    {
      need: "Housing / lock access",
      traditional: "Provides tenant-rights and shelter numbers.",
      mwt: "Identifies jurisdiction-specific tenant remedies, emergency housing routes, documentation requirements, legal-aid options and what to try when the first route fails.",
    },
    {
      need: "Pets during escape",
      traditional: "Lists shelters, many of which cannot accept animals.",
      mwt: "Looks across pet-safe shelters, confidential fostering, boarding assistance, veterinary programs and national/local escape resources.",
    },
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 select-none font-sans relative overflow-hidden bg-grid-diagram">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#971F26]" />
            <span>NAVIGATION METHODOLOGY · HOW INFORMATION IS HANDLED</span>
          </span>
          <span className="coord-tick text-stone-700">[METHODOLOGY COMPARISON]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Traditional Resource Navigation vs. Maps With Teeth
        </h2>

        <p className="text-base sm:text-[17px] text-stone-900 max-w-3xl leading-relaxed font-sans font-medium">
          The difference is not a longer directory. The difference is how navigation obstacles, qualification criteria, and systemic handoffs are analyzed and carried forward.
        </p>
      </div>

      {/* Comparison Grid / Table (Responsive on all screen sizes) */}
      <div className="overflow-x-auto border-2 border-[#1C1D1D] rounded-xl bg-[#F5F1E8] shadow-2xs">
        <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
          <thead>
            <tr className="border-b-2 border-[#1C1D1D] bg-[#1C1D1D] text-white font-mono text-xs">
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
                className={idx % 2 === 0 ? "bg-[#F5F1E8]" : "bg-[#EEE8DD]"}
              >
                <td className="p-3.5 sm:p-4 font-bold text-[#1C1D1D] font-serif align-top text-xs sm:text-sm">
                  {row.need}
                </td>
                <td className="p-3.5 sm:p-4 text-stone-700 border-l border-[#D9D1C4] align-top leading-relaxed text-xs sm:text-[13px]">
                  {row.traditional}
                </td>
                <td className="p-3.5 sm:p-4 text-stone-900 font-medium border-l border-[#D9D1C4] bg-[#FDFBF7] align-top leading-relaxed text-xs sm:text-[13px]">
                  {row.mwt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Core Philosophical Framing Underneath */}
      <div className="space-y-5 pt-2">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            The difference isn&apos;t a bigger list.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 sm:p-5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xl space-y-2">
            <span className="font-mono text-xs uppercase font-bold text-stone-600 block">
              Traditional directories answer:
            </span>
            <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-snug">
              &ldquo;Who helps with this?&rdquo;
            </p>
          </div>

          <div className="p-4 sm:p-5 bg-[#F5F1E8] border-2 border-[#971F26] rounded-xl space-y-2 shadow-2xs">
            <span className="font-mono text-xs uppercase font-bold text-[#971F26] block">
              Maps With Teeth also asks:
            </span>
            <p className="font-serif italic text-base sm:text-lg text-[#1C1D1D] leading-snug">
              &ldquo;Can you actually use that help? What will block you? What do you need before you call? What happens if they say no? And where does the context go when you are sent somewhere else?&rdquo;
            </p>
          </div>
        </div>

        {/* 5-Phase Sequence Connection Banner */}
        <div className="p-5 sm:p-6 bg-[#1C1D1D] text-white rounded-xl space-y-3 shadow-sm font-mono">
          <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold block">
            THE FIVE-STAGE CONTINUITY PIPELINE
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold tracking-wider">
            <span className="text-stone-200">FIND THE ROUTE</span>
            <span className="text-red-400">→</span>
            <span className="text-stone-200">DOCUMENT THE CONTACT</span>
            <span className="text-red-400">→</span>
            <span className="text-stone-200">CARRY THE CONTEXT</span>
            <span className="text-red-400">→</span>
            <span className="text-stone-200">IDENTIFY THE DEAD END</span>
            <span className="text-red-400">→</span>
            <span className="text-white bg-[#971F26] px-2 py-0.5 rounded">FIND THE NEXT WAY THROUGH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
