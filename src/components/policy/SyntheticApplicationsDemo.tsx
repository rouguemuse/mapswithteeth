"use client";

import React, { useState } from "react";
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Building2,
  RefreshCw,
  GitBranch,
  FileText,
  Clock,
  Lock,
  UserCheck
} from "lucide-react";
import { syntheticApplications } from "@/data/policy/engagementRegistry";

export function SyntheticApplicationsDemo() {
  const [activeAppId, setActiveAppId] = useState<string>("APP-01");

  const activeApp =
    syntheticApplications.find((a) => a.id === activeAppId) ||
    syntheticApplications[0];

  return (
    <section id="synthetic-applications" className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Layers className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              OPERATIONAL PROTOTYPE · CONCRETE APPLICATIONS
            </span>
          </div>
          <span className="coord-tick bg-[#971F26] text-white px-2 py-0.5 rounded font-mono text-[10px] font-bold">
            SYNTHETIC DEMONSTRATION DATA (0% LIVE PII)
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          How Continuity Receipts &amp; Review Traces Work in Practice
        </h2>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          Four concrete, synthetic demonstrations showing how participant-held Continuity Receipts and agency-side Review Traces prevent information and responsibility from evaporating at institutional seams.
        </p>
        <p className="text-stone-600 text-xs font-mono leading-relaxed bg-[#F5F1E8] border border-stone-300 p-2.5 rounded-lg">
          <strong>NOTICE ON EVALUATION STANDARDS:</strong> Fictional demonstration data (0% live PII). All workflows, review trace statuses, and referral targets (including the 48-hour pilot acknowledgment benchmark) represent the initiative's proposed evaluation standard, not current statutory or agency requirements.
        </p>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
        {syntheticApplications.map((app, idx) => (
          <button
            key={app.id}
            onClick={() => setActiveAppId(app.id)}
            className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
              activeAppId === app.id
                ? "bg-[#1C1D1D] text-white border-[#1C1D1D] shadow-xs"
                : "bg-[#F5F1E8] hover:bg-white text-stone-800 border-stone-300"
            }`}
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#971F26] block">
                SCENARIO 0{idx + 1}
              </span>
              <span className="font-serif font-bold text-xs leading-snug line-clamp-2">
                {app.title.replace(/^Scenario \d+: /, "")}
              </span>
            </div>
            <span className="text-[10px] text-stone-500 font-mono mt-2 block">
              [INSPECT APPLICATION →]
            </span>
          </button>
        ))}
      </div>

      {/* Detailed Demonstration Panel */}
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-2xs">
        {/* Scenario Header */}
        <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold bg-[#1C1D1D] text-white px-2 py-0.5 rounded">
              {activeApp.id}
            </span>
            <span className="font-mono text-xs text-[#971F26] font-bold uppercase">
              SYNTHETIC APPLICATION
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            {activeApp.title}
          </h3>

          <p className="text-stone-800 text-xs sm:text-sm font-sans leading-relaxed">
            {activeApp.problemDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1 text-stone-600 font-mono text-[11px]">
            <span className="font-bold text-stone-800">ENTITIES INVOLVED:</span>
            {activeApp.participatingEntities.map((ent, idx) => (
              <span
                key={idx}
                className="bg-[#EEE8DD] border border-stone-300 px-2 py-0.5 rounded font-medium"
              >
                {ent}
              </span>
            ))}
          </div>
        </div>

        {/* Before vs. After Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-xs font-sans">
          {/* WITHOUT CONTINUITY (CURRENT BROKEN STATE) */}
          <div className="p-5 bg-[#FDF2F2] border-2 border-[#971F26] rounded-xl space-y-3">
            <div className="border-b border-[#971F26]/30 pb-2 flex items-center justify-between">
              <span className="font-mono font-bold text-[11px] text-[#971F26] uppercase">
                WITHOUT CONTINUITY (CURRENT SEAM DEFICIT)
              </span>
              <span className="text-[10px] font-mono text-stone-500 uppercase">
                STATUS QUO
              </span>
            </div>

            <ul className="space-y-2 text-stone-900 leading-relaxed">
              {activeApp.withoutContinuity.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#971F26] font-bold">✕</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WITH MAPS WITH TEETH (CONTINUITY RECEIPT & REVIEW TRACE) */}
          <div className="p-5 bg-[#E8F3EB] border-2 border-[#2D5A3D] rounded-xl space-y-3">
            <div className="border-b border-[#2D5A3D]/40 pb-2 flex items-center justify-between">
              <span className="font-mono font-bold text-[11px] text-[#2D5A3D] uppercase">
                WITH CONTINUITY RECEIPT &amp; REVIEW TRACE
              </span>
              <span className="text-[10px] font-mono text-[#2D5A3D] font-bold uppercase">
                PROPOSED STANDARD
              </span>
            </div>

            <div className="space-y-3 font-sans text-stone-900 text-xs">
              <div className="p-2.5 bg-white rounded border border-[#2D5A3D]/30 space-y-1">
                <span className="font-mono text-[10px] font-bold text-[#2D5A3D] uppercase block">
                  PARTICIPANT-HELD CONTINUITY RECEIPT
                </span>
                <p className="leading-relaxed">
                  {activeApp.withContinuityReceipt.participantView}
                </p>
              </div>

              <div className="p-2.5 bg-white rounded border border-[#2D5A3D]/30 space-y-1">
                <span className="font-mono text-[10px] font-bold text-[#1C1D1D] uppercase block">
                  AGENCY-SIDE REVIEW TRACE STATUS
                </span>
                <p className="font-mono text-[11px] leading-relaxed text-stone-800">
                  {activeApp.withContinuityReceipt.reviewTraceStatus}
                </p>
              </div>

              <div className="p-2.5 bg-white rounded border border-[#2D5A3D]/30 space-y-1">
                <span className="font-mono text-[10px] font-bold text-[#8F5A0A] uppercase block">
                  DECISION OWNERSHIP &amp; RESPONSIBILITY
                </span>
                <p className="leading-relaxed">
                  {activeApp.withContinuityReceipt.decisionOwnerBound}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway Banner */}
        <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl flex items-start gap-3 text-xs">
          <CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono font-bold text-[#1C1D1D] uppercase text-[11px] block">
              METHODOLOGICAL LESSON:
            </span>
            <p className="text-stone-800 leading-relaxed font-sans font-medium">
              {activeApp.keyTakeaway}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
