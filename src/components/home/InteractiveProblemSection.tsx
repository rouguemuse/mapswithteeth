"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle, ChevronRight, CheckCircle2 } from "lucide-react";

export function InteractiveProblemSection() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to stage 3: The Seam Void

  const stages = [
    {
      num: "01",
      name: "Initial Intake",
      actor: "Person in Crisis",
      action: "Submits evidence and requests critical safety protections.",
      flaw: "Agency logs intake locally, but shares no structured receipt with the individual.",
      burden: "The applicant assumes the system now holds their record; in reality, no outside agency knows it exists."
    },
    {
      num: "02",
      name: "Outbound Referral",
      actor: "Agency A (Sender)",
      action: "Issues an unconfirmed referral slip and closes internal case file.",
      flaw: "Status is marked 'Completed / Referred Out' with zero verification of transmission.",
      burden: "Agency A counts this as successful disposition. The person is left to transit the void alone."
    },
    {
      num: "03",
      name: "The Seam Void",
      actor: "The Disconnected Gap",
      action: "Referral sits in unmonitored inbox; capacity queue quietly closed.",
      flaw: "Neither agency tracks whether the file was opened, assigned, or dropped.",
      burden: "THE HUMAN BECOMES THE INTEGRATION LAYER: Forced to physically carry the burden of disconnected systems."
    },
    {
      num: "04",
      name: "The Repeat Intake",
      actor: "Agency B (Receiver)",
      action: "Demands fresh documentation and original testimony from scratch.",
      flaw: "Prior statements, exhibits, and urgency flags are completely invisible.",
      burden: "Person forced to retell trauma and reconstruct timeline from memory."
    },
    {
      num: "05",
      name: "The Circular Lockout",
      actor: "Agency B → Agency A",
      action: "Conditions aid on a verification form only issued by Agency A.",
      flaw: "Agency A states their file is closed and cannot issue post-intake verifications.",
      burden: "Person abandoned in circular loop; system logs them as 'failed to complete intake'."
    }
  ];

  return (
    <section id="problem" className="relative font-sans select-none scroll-mt-24">
      
      {/* Editorial Headline Spread - Full-Bleed Architectural Moment */}
      <div className="border-b-2 border-[#11100F] pb-8 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#841F2B] font-bold">
            <span>§ 01 · THE ADMINISTRATIVE SEAM DEFICIT</span>
          </div>
          <span className="font-mono text-xs text-[#4D4944] uppercase tracking-wider">
            [TAXONOMY: 12 INSTITUTIONAL SEAM FAILURES]
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#11100F] tracking-tight leading-[1.08] max-w-4xl">
          When institutions drop context, <br />
          <span className="text-[#841F2B] italic">the human carries the burden.</span>
        </h2>

        <p className="mt-4 text-lg sm:text-xl text-[#4D4944] font-serif max-w-3xl leading-relaxed">
          Across public safety, housing, civil courts, and healthcare, disconnected software databases treat human beings as physical couriers of their own trauma and evidentiary files.
        </p>
      </div>

      {/* Asymmetric Visual Composition: Authentic Seam Tangle Artwork + The 5-Stage Interactive Pipeline */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visual Manifestation of the Broken Seam (5 Cols) */}
        <div className="lg:col-span-5 bg-[#11100F] text-[#F8F5EE] border-2 border-[#11100F] p-6 rounded-xs shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#2B2926] pb-3 text-[10px] font-mono uppercase text-[#A39E94]">
            <span className="text-[#E85D6B] font-bold">EXHIBIT A · THE RESOURCE LOOP HELL</span>
            <span>FORENSIC VISUALIZATION</span>
          </div>

          {/* Authentic Concept Art: The Resource Loop Hell Tangle */}
          <div className="relative bg-[#171615] border border-[#332E29] rounded-xs p-3 overflow-hidden group">
            <div className="relative h-56 sm:h-64 w-full">
              <Image
                src="/images/art/motif_seam_tangle_loop.png"
                alt="Original Maps With Teeth Forensic Diagram: The Resource Loop Hell"
                fill
                className="object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="mt-2 text-center font-mono text-[10px] text-[#A39E94]">
              &ldquo;It&apos;s not that help doesn&apos;t exist. It&apos;s that it&apos;s impossible to reach.&rdquo;
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="font-serif font-bold text-lg text-white">
              The Fiction of the Outbound Referral
            </h4>
            <p className="text-xs sm:text-sm text-[#D8D2C6] leading-relaxed font-sans">
              Public service directories catalogue agencies as if referral arrows represented guaranteed transit. In empirical practice, an unconfirmed referral is indistinguishable from an administrative drop.
            </p>
          </div>

          <div className="pt-3 border-t border-[#2B2926] flex items-center justify-between font-mono text-[11px]">
            <span className="text-[#A39E94]">MEASURED FAILURE RATE:</span>
            <span className="text-[#E85D6B] font-bold">INDICATOR 04 (CIRCULAR LOOP)</span>
          </div>
        </div>

        {/* Right Column: Interactive 5-Stage Seam Pipeline (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-5 gap-1.5 font-mono text-xs">
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isVoid = idx === 2;
              return (
                <button
                  key={stage.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 text-left border-2 transition-all rounded-xs flex flex-col justify-between ${
                    isActive
                      ? isVoid 
                        ? "bg-[#841F2B] text-white border-[#841F2B] shadow-md"
                        : "bg-[#11100F] text-white border-[#11100F] shadow-md"
                      : "bg-[#EEE8DB] text-[#4D4944] border-[#C4B69E] hover:border-[#11100F]"
                  }`}
                >
                  <span className={`text-[10px] font-bold block ${isActive ? "text-white" : "text-[#841F2B]"}`}>
                    {stage.num}
                  </span>
                  <span className="font-serif font-bold text-xs truncate mt-1">
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="bg-[#EEE8DB] border-2 border-[#11100F] p-6 sm:p-8 rounded-xs shadow-md space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C4B69E] pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#841F2B] block tracking-wider">
                  STAGE {stages[activeStep].num} · {stages[activeStep].actor}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#11100F]">
                  {stages[activeStep].name}
                </h3>
              </div>
              {activeStep === 2 && (
                <span className="bg-[#841F2B] text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-xs uppercase tracking-wider">
                  CRITICAL SEAM FAILURE
                </span>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#F8F5EE] border border-[#C4B69E] rounded-xs space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#4D4944] font-bold block">
                  WHAT THE AGENCY SYSTEM DOES:
                </span>
                <p className="text-xs sm:text-sm text-[#11100F] font-sans leading-relaxed">
                  {stages[activeStep].action}
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#841F2B] font-semibold border-t border-[#E2DACB]">
                  Flaw: {stages[activeStep].flaw}
                </div>
              </div>

              <div className="p-4 bg-[#11100F] text-[#F8F5EE] border border-[#11100F] rounded-xs space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#E85D6B] font-bold block">
                  THE HUMAN COST (UNCOMPENSATED BURDEN):
                </span>
                <p className="text-xs sm:text-sm text-[#E5DFC8] font-sans leading-relaxed">
                  {stages[activeStep].burden}
                </p>
              </div>
            </div>

            {/* Bottom Callout & Action */}
            <div className="pt-4 border-t border-[#C4B69E] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#4D4944] font-mono">
                <span>REFORM PRESCRIPTION: </span>
                <strong className="text-[#11100F]">MANDATORY REVIEW TRACE &amp; CANONICAL RECEIPTS</strong>
              </div>
              <Link
                href="/continuity"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#841F2B] hover:text-[#11100F] transition"
              >
                <span>Read the Full Seam Standard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
