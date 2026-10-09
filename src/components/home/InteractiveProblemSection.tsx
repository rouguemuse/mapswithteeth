"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, AlertTriangle, ShieldCheck, UserCheck, FileText } from "lucide-react";

export function InteractiveProblemSection() {
  const [activeTab, setActiveTab] = useState<"loop" | "contrast">("loop");
  const [activeStep, setActiveStep] = useState<number>(2); // Default to the handoff stall

  const stages = [
    {
      num: "01",
      name: "Reporting",
      actor: "Person in Crisis",
      action: "Submits documentation & requests urgent protection",
      flaw: "Told: 'We only handle the initial report. Contact Agency B for housing.'",
      humanBurden: "Person must independently identify and travel to Agency B."
    },
    {
      num: "02",
      name: "Outbound Referral",
      actor: "Agency A (Sender)",
      action: "Transmits electronic referral slip and closes intake",
      flaw: "Status marked 'Complete / Referred Out' with zero receipt confirmation.",
      humanBurden: "Person assumes Agency B has their file; in reality, no one is assigned."
    },
    {
      num: "03",
      name: "The Seam Stall",
      actor: "The Institutional Void",
      action: "Referral sits in unmonitored inbox; capacity queue closed",
      flaw: "Neither agency tracks whether the file was opened, reviewed, or dropped.",
      humanBurden: "THE HUMAN BECOMES THE INTEGRATION LAYER: Forced to coordinate agencies that do not speak."
    },
    {
      num: "04",
      name: "The Repeat Intake",
      actor: "Agency B (Receiver)",
      action: "Demands fresh documentation and original testimony from scratch",
      flaw: "Prior statements, exhibits, and urgency flags are completely invisible.",
      humanBurden: "Person forced to retell trauma and reconstruct timeline from memory."
    },
    {
      num: "05",
      name: "The Circular Runaround",
      actor: "Agency B → Agency A",
      action: "Conditions aid on a verification form only issued by Agency A",
      flaw: "Agency A states their file is closed and cannot issue post-intake verifications.",
      humanBurden: "Person abandoned in circular loop; system logs them as 'failed to complete intake'."
    }
  ];

  return (
    <section id="problem" className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 sm:p-10 space-y-8 font-sans shadow-sm scroll-mt-24 select-none">
      {/* 1. Header */}
      <div className="border-b border-[#C4B69E] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-mwt-oxblood bg-mwt-ivory px-2.5 py-1 rounded-xs border border-[#C4B69E]">
            THE PROBLEM · THE SEAM DEFICIT
          </span>
          <span className="coord-tick">[WHEN INSTITUTIONS LOSE CONTEXT]</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-mwt-black tracking-tight leading-tight">
          When institutions lose context, <br />
          <span className="text-mwt-oxblood italic">the human carries the consequences.</span>
        </h2>

        <p className="text-mwt-graphite text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
          A person reports a concern, provides documentation, or seeks assistance. An agency acknowledges receiving it. Responsibility moves between offices, workers, or jurisdictions. Each agency completes its own administrative step while the underlying need remains unresolved.
        </p>
      </div>

      {/* 2. Interactive Switcher */}
      <div className="flex border-b border-[#C4B69E] gap-2 overflow-x-auto text-xs font-mono">
        <button
          onClick={() => setActiveTab("loop")}
          className={`px-4 py-2 font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
            activeTab === "loop"
              ? "border-mwt-oxblood text-mwt-oxblood bg-mwt-ivory"
              : "border-transparent text-mwt-graphite hover:text-mwt-black"
          }`}
        >
          1. The 5-Stage Seam Breakdown
        </button>
        <button
          onClick={() => setActiveTab("contrast")}
          className={`px-4 py-2 font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
            activeTab === "contrast"
              ? "border-mwt-oxblood text-mwt-oxblood bg-mwt-ivory"
              : "border-transparent text-mwt-graphite hover:text-mwt-black"
          }`}
        >
          2. Administrative Metric vs. Lived Reality
        </button>
      </div>

      {/* TAB 1: 5-Stage Interactive Breakdown */}
      {activeTab === "loop" && (
        <div className="space-y-6">
          {/* Timeline Step Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs">
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isStall = idx === 2;
              return (
                <button
                  key={stage.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xs border-2 text-left transition-all flex flex-col justify-between ${
                    isActive
                      ? "bg-mwt-black text-white border-mwt-black shadow-xs"
                      : isStall
                      ? "bg-red-50 text-mwt-oxblood border-mwt-oxblood/60 hover:bg-red-100"
                      : "bg-mwt-ivory text-mwt-black border-[#C4B69E] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span>STEP {stage.num}</span>
                    {isStall && <span className="text-[9px] uppercase font-bold text-mwt-oxblood">CRITICAL SEAM</span>}
                  </div>
                  <span className="font-serif font-bold text-sm mt-1">{stage.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Card */}
          <div className="bg-mwt-ivory border-2 border-mwt-black rounded-lg p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#C4B69E] pb-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase font-bold text-mwt-oxblood block">
                  STAGE {stages[activeStep].num} · ACTOR: {stages[activeStep].actor}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-mwt-black">
                  {stages[activeStep].name}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold bg-mwt-parchment px-2.5 py-1 rounded-xs border border-[#C4B69E] text-mwt-black">
                {activeStep === 2 ? "THE DISAPPEARANCE SEAM" : "DISCONNECTED INSTITUTIONAL STEP"}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-4 bg-white rounded-xs border border-[#C4B69E] space-y-2 font-sans">
                <span className="text-[10px] font-mono uppercase font-bold text-mwt-graphite block">
                  WHAT THE AGENCY DOES:
                </span>
                <p className="text-mwt-black leading-relaxed font-semibold">
                  {stages[activeStep].action}
                </p>
                <p className="text-mwt-graphite text-xs pt-1 border-t border-stone-200">
                  <strong className="text-mwt-oxblood">The Flaw:</strong> {stages[activeStep].flaw}
                </p>
              </div>

              <div className="p-4 bg-red-50/80 rounded-xs border-2 border-mwt-oxblood space-y-2 font-sans">
                <span className="text-[10px] font-mono uppercase font-bold text-mwt-oxblood block">
                  WHERE THE HUMAN BECOMES THE INTEGRATION LAYER:
                </span>
                <p className="text-stone-900 leading-relaxed font-semibold">
                  {stages[activeStep].humanBurden}
                </p>
                <p className="text-xs text-stone-700 pt-1 border-t border-red-200 font-mono">
                  Preserved across the Maps With Teeth Continuity Standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Contrast View */}
      {activeTab === "contrast" && (
        <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
          {/* Institutional Metric */}
          <div className="bg-mwt-ivory border-2 border-mwt-black rounded-lg p-6 space-y-4">
            <div className="border-b border-[#C4B69E] pb-2 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-mwt-graphite">
                The Administrative View
              </span>
              <span className="px-2 py-0.5 bg-stone-200 text-stone-800 text-[10px] font-mono font-bold uppercase rounded-xs">
                FILE: CLOSED
              </span>
            </div>
            <ul className="space-y-2.5 font-mono text-xs text-mwt-black">
              <li className="flex items-start gap-2">
                <span className="text-stone-400">•</span>
                <span><strong>Record:</strong> Outbound referral marked &quot;Sent / Complete&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-400">•</span>
                <span><strong>Metric:</strong> Intake volume counted toward monthly quota</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-400">•</span>
                <span><strong>Liability:</strong> Responsibility terminated at outbound transmission</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-400">•</span>
                <span><strong>Outcome:</strong> System registers process compliance</span>
              </li>
            </ul>
            <p className="text-xs text-mwt-graphite italic border-t border-[#C4B69E] pt-3">
              Every participating department meets its statutory checklist while the person falls through the seam.
            </p>
          </div>

          {/* Lived Reality */}
          <div className="bg-red-50/70 border-2 border-mwt-oxblood rounded-lg p-6 space-y-4">
            <div className="border-b border-red-200 pb-2 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-mwt-oxblood">
                The Lived Human Reality
              </span>
              <span className="px-2 py-0.5 bg-mwt-oxblood text-white text-[10px] font-mono font-bold uppercase rounded-xs">
                OUTCOME: ABANDONED
              </span>
            </div>
            <ul className="space-y-2.5 font-mono text-xs text-stone-900">
              <li className="flex items-start gap-2">
                <span className="text-mwt-oxblood">•</span>
                <span><strong>Handoff:</strong> Receiving agency has no record of the file</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mwt-oxblood">•</span>
                <span><strong>Experience:</strong> Must re-prove trauma at every intake door</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mwt-oxblood">•</span>
                <span><strong>Responsibility:</strong> No single entity owns the next milestone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mwt-oxblood">•</span>
                <span><strong>Result:</strong> Individual is logged as &quot;non-compliant&quot;</span>
              </li>
            </ul>
            <p className="text-xs text-stone-800 italic border-t border-red-200 pt-3">
              The person becomes the integration layer between agencies that do not communicate.
            </p>
          </div>
        </div>
      )}

      {/* Footer Banner */}
      <div className="p-4 bg-mwt-black text-white rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-mwt-aged-stone">
          OUR MISSION: Prevent people from disappearing between institutional seams.
        </span>
        <Link
          href="/the-gap"
          className="text-white hover:text-mwt-oxblood-light font-bold uppercase tracking-wider inline-flex items-center gap-1"
        >
          <span>Read The Seam Deficit Analysis →</span>
        </Link>
      </div>
    </section>
  );
}
