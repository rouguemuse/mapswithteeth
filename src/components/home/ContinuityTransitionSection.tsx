import React from "react";
import Link from "next/link";
import { Search, FolderArchive, Shuffle, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

export function ContinuityTransitionSection() {
  const steps = [
    {
      step: "01",
      title: "FIND IT",
      action: "Find a reachable route.",
      detail: "Search around barriers, discover unlisted lateral funds, and verify true access conditions before wasting critical time.",
      icon: <Search className="w-4 h-4 text-white" />,
      tag: "RESOURCE INTELLIGENCE",
      link: "/other-ways-through",
      linkText: "Find Routes",
    },
    {
      step: "02",
      title: "ORGANIZE IT",
      action: "Preserve what happened and the documents that matter.",
      detail: "A survivor-controlled chronology and Originals Vault to store dates, agencies, evidence hashes, and communications.",
      icon: <FolderArchive className="w-4 h-4 text-white" />,
      tag: "SURVIVOR ORGANIZER",
      link: "/bridge#organizer",
      linkText: "View Organizer",
    },
    {
      step: "03",
      title: "CARRY IT",
      action: "Move context forward without starting from zero.",
      detail: "Generate Continuity Receipts between agencies and counties so critical facts don't vanish with every referral.",
      icon: <Shuffle className="w-4 h-4 text-white" />,
      tag: "BRIDGE CONTINUITY",
      link: "/bridge",
      linkText: "Explore Bridge",
    },
    {
      step: "04",
      title: "CLOSE THE LOOP",
      action: "Record where responsibility stopped, moved, or remained unresolved.",
      detail: "Preserve what was reviewed vs. unreviewed, stated reasons for denial, and flag when no functioning decision-owner exists.",
      icon: <CheckCircle className="w-4 h-4 text-white" />,
      tag: "CONTEXT BEFORE CLOSURE",
      link: "/bridge#closure",
      linkText: "View Closure",
    },
    {
      step: "05",
      title: "MAP THE FAILURE",
      action: "Use recurring dead ends to expose where systems need repair.",
      detail: "Aggregated, deidentified intelligence that tracks systemic referral loops, jurisdiction runarounds, and procedural gaps.",
      icon: <AlertTriangle className="w-4 h-4 text-white" />,
      tag: "BAD MAPS",
      link: "/bridge#bad-maps",
      linkText: "View Systems Intel",
    },
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 select-none font-sans relative overflow-hidden bg-grid-atlas">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold">
          TWO CONNECTED HALVES · ONE INITIATIVE
        </span>
        <span className="coord-tick text-stone-700">[SYSTEM CONTINUITY MODEL]</span>
      </div>

      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Getting through the door isn&apos;t the end of the problem.
        </h2>

        <div className="text-base sm:text-[17px] text-stone-900 leading-relaxed font-sans font-medium space-y-3">
          <p>
            <strong>Finding help is one problem. Carrying context between disconnected systems is another.</strong>
          </p>
          <p className="text-stone-800 text-sm sm:text-base">
            Every new agency, county, program, advocate, court, school, shelter, or institution can mean another explanation, another intake, another pile of documents, another referral, and another chance for critical context to disappear.
          </p>
          <p className="text-[#971F26] font-semibold text-sm sm:text-base">
            Maps With Teeth is being built to address both problems.
          </p>
        </div>
      </div>

      {/* 5-Step Route Pipeline (Desktop Horizontal / Mobile Stack with Red-Thread Connection) */}
      <div className="relative pt-4">
        {/* Red Thread Connecting Bar on Desktop */}
        <div className="hidden lg:block absolute top-[46px] left-6 right-6 h-0.5 bg-[#971F26] z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-2xs hover:border-[#971F26] transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#1C1D1D] text-white flex items-center justify-center font-mono text-xs font-bold shadow-2xs border-2 border-[#F5F1E8]">
                    {item.step}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#971F26] uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C1D1D] leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-stone-900 font-bold mt-1 leading-snug">
                    {item.action}
                  </p>
                </div>

                <p className="text-xs sm:text-[12.5px] text-stone-700 font-sans leading-relaxed pt-1">
                  {item.detail}
                </p>
              </div>

              <div className="pt-2 border-t border-[#D9D1C4]">
                <Link
                  href={item.link}
                  className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Banner */}
      <div className="p-4 sm:p-5 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <p className="font-serif font-bold text-base sm:text-lg text-[#1C1D1D]">
            &ldquo;Finding the next door should not require starting the entire story over.&rdquo;
          </p>
          <p className="text-xs font-mono text-stone-600">
            Tell it once. Carry it forward.
          </p>
        </div>

        <Link
          href="/how-it-works"
          className="px-5 py-2.5 bg-[#1C1D1D] hover:bg-stone-800 text-white rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs shrink-0 transition-colors"
        >
          <span>Full Architecture Spec</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
