"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileSpreadsheet,
  MapPin,
  Clock,
  Ban,
  CheckCircle2,
  Compass,
  RotateCcw,
} from "lucide-react";

interface Step {
  stage: string;
  name: string;
  obstacleLabel: string;
  obstacleDetail: string;
  systemAction: string;
  alternativeRouteTitle: string;
  alternativeRouteDetail: string;
  alternativeRouteStatute: string;
  alternativeRouteHref: string;
}

export function BarrierFlowExperience() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showAlternative, setShowAlternative] = useState<boolean>(false);

  const steps: Step[] = [
    {
      stage: "01",
      name: "Documentation Gate",
      obstacleLabel: "POLICE REPORT MANDATE",
      obstacleDetail:
        "Applicant seeks immediate lease termination to escape violent stalking. Landlord demands an official law-enforcement offense report before acknowledging statutory escape rights.",
      systemAction:
        "Traditional hotline says: 'File a police report first, then call us back.' The person cannot safely involve law enforcement.",
      alternativeRouteTitle: "Statutory Advocate Verification Route",
      alternativeRouteDetail:
        "Under Texas Property Code § 92.016, a police report is NOT legally required. A documentation packet signed by a licensed healthcare provider, counselor, or certified advocate establishes statutory right to terminate the lease immediately without penalties.",
      alternativeRouteStatute: "Tex. Prop. Code § 92.016",
      alternativeRouteHref: "/texas",
    },
    {
      stage: "02",
      name: "Jurisdictional Boundary",
      obstacleLabel: "COUNTY LINE AMNESIA",
      obstacleDetail:
        "Applicant crosses the county line for temporary shelter. The new county's municipal court and social service agencies treat them as an out-of-jurisdiction resident without case history.",
      systemAction:
        "Intake worker states: 'You must apply in the county where the incident occurred.' Protective orders and case notes are not mirrored across county borders.",
      alternativeRouteTitle: "Inter-Jurisdictional Matter Linkage",
      alternativeRouteDetail:
        "The Continuity Standard's Linked-Matter Protocol (Module 01) links matter existence across county lines without forcing the survivor to re-prove traumatic incident facts from scratch.",
      alternativeRouteStatute: "Continuity Spec Module 01",
      alternativeRouteHref: "/continuity#module-01",
    },
    {
      stage: "03",
      name: "Referral Seam",
      obstacleLabel: "SENT ≠ RECEIVED / ACKNOWLEDGED",
      obstacleDetail:
        "Hospital social worker sends an electronic referral to emergency civil legal aid. The sending system marks the file 'complete and referred out.'",
      systemAction:
        "The receiving legal aid office never confirms delivery, has a closed intake queue, and assigns no caseworker. The referral evaporates in the seam.",
      alternativeRouteTitle: "Closed-Loop Referral Lifecycle",
      alternativeRouteDetail:
        "Module 02 mandates state-machine tracking: SENT → DELIVERY_CONFIRMED → RECEIPT_ACKNOWLEDGED → RESPONSIBILITY_ACCEPTED. A referral never terminates at 'sent' without an assigned owner.",
      alternativeRouteStatute: "Continuity Spec Module 02",
      alternativeRouteHref: "/continuity#module-02",
    },
    {
      stage: "04",
      name: "Resource Freeze",
      obstacleLabel: "WAITLIST & FUNDING EXHAUSTION",
      obstacleDetail:
        "County emergency rental deposit fund ran out of quarterly municipal allocation within 4 hours of portal opening on the first of the month.",
      systemAction:
        "Portal displays a generic rejection screen: 'Capacity reached. Check back next quarter.' No alternate lateral aid or benevolence pathways are offered.",
      alternativeRouteTitle: "Lateral Relief & Benevolence Funds",
      alternativeRouteDetail:
        "Maps With Teeth catalogs lateral emergency relief (culinary relief, craft artist hardship, trade benevolent funds, and utility deposit waivers) that bypass municipal queues entirely.",
      alternativeRouteStatute: "Lateral Aid Catalog",
      alternativeRouteHref: "/other-ways-through",
    },
    {
      stage: "05",
      name: "The Dead End",
      obstacleLabel: "SYSTEMIC RUNAROUND (A → B → A)",
      obstacleDetail:
        "Agency B conditions assistance on a document only issued by Agency A. Agency A conditions that document on ongoing housing stability verified by Agency B.",
      systemAction:
        "The individual gives up. The system records them as 'failed to complete intake' or 'non-compliant' rather than documenting an impossible institutional loop.",
      alternativeRouteTitle: "The Continuity Receipt & Review Trace",
      alternativeRouteDetail:
        "A client-side Continuity Contact Record preserves proof of what was presented and identifies the unassigned decision-owner, making administrative runarounds auditable by advocates and counsel.",
      alternativeRouteStatute: "Continuity Spec Module 03",
      alternativeRouteHref: "/continuity#receipt-specimen",
    },
  ];

  const current = steps[activeStep];

  return (
    <section
      id="barrier-flow"
      className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-6 sm:p-10 space-y-8 font-sans shadow-sm scroll-mt-24 select-none"
      aria-label="Signature barrier flow navigation experience"
    >
      {/* Editorial Section Header */}
      <div className="border-b border-[#C4B69E] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-mwt-oxblood bg-white/60 px-2.5 py-1 rounded-xs border border-[#C4B69E]">
            THE SEAM ANATOMY · SIGNATURE EXPERIENCE
          </span>
          <span className="coord-tick">[INTERACTIVE BARRIER PATHWAY]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-mwt-black tracking-tight leading-tight">
          How people disappear between institutional seams.
        </h2>

        <p className="text-mwt-graphite text-sm sm:text-base max-w-3xl leading-relaxed">
          In ordinary resource directories, listings exist as disconnected phone numbers. In lived reality, a person encounters a sequential gauntlet of administrative barriers. Step through the chain to see where accountability dissolves—and where a different route can still exist.
        </p>
      </div>

      {/* 5-Step Process Track */}
      <div className="space-y-3">
        <div className="text-[11px] font-mono uppercase font-bold text-mwt-graphite tracking-wider flex items-center justify-between">
          <span>SELECT A BARRIER MOMENT:</span>
          <span>STEP {activeStep + 1} OF 5</span>
        </div>

        <div
          role="tablist"
          aria-label="Barrier pipeline stages"
          className="grid grid-cols-5 gap-1.5 sm:gap-2.5"
        >
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.stage}
                role="tab"
                aria-selected={isActive}
                aria-controls={`step-panel-${idx}`}
                type="button"
                onClick={() => {
                  setActiveStep(idx);
                  setShowAlternative(false);
                }}
                className={`p-2 sm:p-3 rounded-xs border text-left transition-all font-mono focus:outline-none focus:ring-2 focus:ring-mwt-oxblood ${
                  isActive
                    ? "bg-mwt-black text-white border-mwt-black shadow-xs"
                    : "bg-mwt-ivory/80 hover:bg-white text-mwt-black border-[#C4B69E]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className={isActive ? "text-mwt-oxblood-light" : "text-mwt-oxblood"}>
                    {s.stage}
                  </span>
                  <span className="hidden sm:inline text-[9px] opacity-75">
                    {idx === 4 ? "DEAD END" : "SEAM"}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-sans font-bold truncate mt-1">
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Display */}
      <div
        id={`step-panel-${activeStep}`}
        role="tabpanel"
        className="bg-mwt-ivory border-2 border-mwt-black rounded-lg p-6 sm:p-8 space-y-6 shadow-xs animate-fadeIn"
      >
        {/* Stage Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2DACB] pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-mwt-oxblood font-bold block">
              BARRIER VECTOR {current.stage} · {current.obstacleLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-mwt-black">
              {current.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-mwt-oxblood text-white font-mono text-[10px] uppercase font-bold tracking-wider rounded-xs">
              ORDINARY FAILURE
            </span>
          </div>
        </div>

        {/* The Barrier Description */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 space-y-4">
            <div className="p-4 bg-white border border-[#C4B69E] rounded-xs space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-mwt-graphite block">
                THE LIVED OBSTACLE:
              </span>
              <p className="text-sm sm:text-base text-mwt-black font-sans leading-relaxed">
                {current.obstacleDetail}
              </p>
            </div>

            <div className="p-4 bg-[#FBEAEC] border-l-4 border-l-mwt-oxblood border border-[#ECA1A9] rounded-r-xs space-y-1 text-xs sm:text-sm text-mwt-black font-mono leading-relaxed">
              <span className="text-[10px] font-bold uppercase tracking-wider text-mwt-oxblood block">
                WHERE THE SYSTEM STALLS:
              </span>
              <p>{current.systemAction}</p>
            </div>
          </div>

          {/* Interactive Route Reveal Column */}
          <div className="md:col-span-5 bg-mwt-parchment border-2 border-mwt-black rounded-xs p-5 space-y-4">
            <div className="border-b border-[#C4B69E] pb-2.5 flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-mwt-black flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-mwt-oxblood" />
                <span>THE MAPS WITH TEETH ALTERNATIVE</span>
              </span>
            </div>

            {!showAlternative ? (
              <div className="space-y-3 py-2 text-center">
                <p className="text-xs text-mwt-graphite leading-relaxed">
                  A directory ends at the dead end. Maps With Teeth develops verifiable legal, administrative, and lateral alternatives.
                </p>
                <button
                  type="button"
                  onClick={() => setShowAlternative(true)}
                  className="w-full py-2.5 px-4 bg-mwt-oxblood hover:bg-mwt-oxblood-dark text-white font-mono text-xs uppercase font-bold tracking-wider rounded-xs transition-all shadow-xs flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-mwt-black"
                >
                  <span>Reveal the Alternative Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-mwt-oxblood uppercase block">
                    {current.alternativeRouteStatute}
                  </span>
                  <h4 className="font-serif font-bold text-base text-mwt-black">
                    {current.alternativeRouteTitle}
                  </h4>
                </div>

                <p className="text-xs text-mwt-black leading-relaxed font-sans">
                  {current.alternativeRouteDetail}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#C4B69E]">
                  <button
                    type="button"
                    onClick={() => setShowAlternative(false)}
                    className="text-[10px] font-mono text-mwt-graphite hover:text-mwt-black flex items-center gap-1 underline"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>

                  <Link
                    href={current.alternativeRouteHref}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-mwt-oxblood hover:text-mwt-oxblood-dark"
                  >
                    <span>Explore Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="pt-4 border-t border-[#E2DACB] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => {
                setActiveStep((prev) => Math.max(0, prev - 1));
                setShowAlternative(false);
              }}
              className="px-3 py-1.5 bg-white border border-[#C4B69E] hover:border-mwt-black disabled:opacity-40 disabled:cursor-not-allowed rounded-xs font-bold uppercase tracking-wider text-mwt-black"
            >
              ← Previous
            </button>
            <button
              type="button"
              disabled={activeStep === steps.length - 1}
              onClick={() => {
                setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
                setShowAlternative(false);
              }}
              className="px-3 py-1.5 bg-white border border-[#C4B69E] hover:border-mwt-black disabled:opacity-40 disabled:cursor-not-allowed rounded-xs font-bold uppercase tracking-wider text-mwt-black"
            >
              Next Barrier →
            </button>
          </div>

          <span className="text-[11px] text-mwt-graphite">
            &ldquo;A directory is not a route. A route requires an exit.&rdquo;
          </span>
        </div>
      </div>
    </section>
  );
}
