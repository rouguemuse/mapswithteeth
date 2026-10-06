"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Copy,
  Check,
  ArrowRight,
  Info,
  Layers,
  Building2,
  Calendar,
  Clock
} from "lucide-react";

export function InteractiveReceiptDemo() {
  const [copied, setCopied] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm bg-grid-diagram select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26]">
            SECTION 05 · CONTINUITY RECEIPT DEMO
          </span>
          <span className="coord-tick">[SPECIMEN: MWT-RECEIPT-2026-DEMO]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          What a Continuity Receipt Looks Like in Practice
        </h2>

        <p className="text-stone-800 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          A standardized, portable receipt held by the person. It documents what was presented, where it was routed, whether receipt was acknowledged, and who owns the next action—without compromising investigative autonomy or creating public records.
        </p>
      </div>

      {/* Interactive Mock Receipt Card */}
      <div className="max-w-4xl mx-auto bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl shadow-md overflow-hidden">
        {/* Prominent Fictional Disclaimer Banner */}
        <div className="bg-[#FEF3C7] border-b border-[#D97706] px-4 py-2 text-center text-xs font-mono text-[#92400E] font-bold">
          ⚠ FICTIONAL DEMONSTRATION RECORD — NOT AN OFFICIAL GOVERNMENT DOCUMENT · FOR PROTOCOL TESTING ONLY
        </div>

        {/* Receipt Header Banner */}
        <div className="bg-[#1C1D1D] text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#971F26] animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-sm">
              CONTINUITY CONTACT RECEIPT [DEMO SPECIMEN]
            </span>
          </div>
          <div className="text-stone-400 text-[11px]">
            HASH: <span className="text-stone-200">SHA256:e3b0c442...</span>
          </div>
        </div>

        {/* Receipt Content Body */}
        <div className="p-6 sm:p-8 space-y-6 font-mono text-xs">
          {/* Metadata Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#EEE8DD] rounded-lg border border-[#D9D1C4]">
            <div>
              <span className="text-stone-500 text-[10px] uppercase font-bold block">TOUCHPOINT ENTITY</span>
              <span className="font-bold text-[#1C1D1D] text-sm font-sans">DEMO COUNTY FAMILY SERVICES</span>
            </div>
            <div>
              <span className="text-stone-500 text-[10px] uppercase font-bold block">DEMO RECORD ID</span>
              <span className="font-bold text-[#971F26] text-sm">DEMO-000001</span>
            </div>
            <div>
              <span className="text-stone-500 text-[10px] uppercase font-bold block">CONTACT DATE</span>
              <span className="font-bold text-[#1C1D1D] text-sm">September 14, 2026</span>
            </div>
            <div>
              <span className="text-stone-500 text-[10px] uppercase font-bold block">PURPOSE</span>
              <span className="font-bold text-[#1C1D1D] text-sm font-sans">Safety report / referral</span>
            </div>
          </div>

          {/* Core Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column: What Was Provided & Routed */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-stone-600 text-[11px] font-bold uppercase tracking-wider block">
                  1. INFORMATION SUPPLIED
                </span>
                <div className="p-3 bg-white rounded border border-stone-300 space-y-1">
                  <div className="flex items-center gap-2 text-stone-800 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>3 Supporting Documents Attached</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-800 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>1 Prior Demo Case Reference (DEMO-PO-2025-001)</span>
                  </div>
                  <div className="text-[11px] text-stone-600 pt-1">
                    Fictional demonstration intake data for protocol testing.
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-stone-600 text-[11px] font-bold uppercase tracking-wider block">
                  2. ACTION TAKEN
                </span>
                <div className="p-3 bg-white rounded border border-stone-300">
                  <p className="text-stone-900 font-bold">
                    Forwarded to Regional Legal Aid / Family Services (Agency B)
                  </p>
                  <p className="text-[11px] text-stone-600 mt-1">
                    Interagency referral transmission dispatched via secure docket.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Accountability & Handoff Tracking */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-stone-600 text-[11px] font-bold uppercase tracking-wider block">
                  3. RECEIVING ACKNOWLEDGMENT
                </span>
                <div className="p-3 bg-amber-50 rounded border border-amber-300 flex items-center justify-between">
                  <span className="font-bold text-amber-900">PENDING CONFIRMATION</span>
                  <span className="text-[10px] bg-amber-200 text-amber-950 px-2 py-0.5 rounded font-bold uppercase">
                    Awaiting Sign-off
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-stone-600 text-[11px] font-bold uppercase tracking-wider block">
                  4. DECISION OWNER & NEXT ACTION
                </span>
                <div className="p-3 bg-white rounded border border-stone-300 space-y-2">
                  <div className="flex items-center justify-between text-stone-800">
                    <span>DECISION OWNER:</span>
                    <span className="text-rose-700 font-bold">[NOT YET IDENTIFIED]</span>
                  </div>
                  <div className="flex items-center justify-between text-stone-800 pt-1 border-t border-stone-200">
                    <span>NEXT ACTION:</span>
                    <span className="font-bold">Follow-up due by Oct 1, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unresolved Alert Banner */}
          <div className="p-4 bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#971F26] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs font-mono">
              <span className="font-bold text-[#971F26] uppercase block">
                UNRESOLVED ACCOUNTABILITY GAP DETECTED
              </span>
              <p className="text-stone-900 font-sans leading-relaxed">
                The receiving entity has not acknowledged responsibility for the referral. If the matter is not acknowledged within 14 days, the receipt flags a dead-route alert so the survivor is not left assuming help is in progress.
              </p>
            </div>
          </div>

          {/* Receipt Action Footer */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-600 border-t border-[#D9D1C4]">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-stone-500" />
              CLIENT-SIDE INTEGRITY DIGEST (SHA-256) · LOCAL CLIENT-SIDE GENERATION
            </span>
            <button
              onClick={handleCopyHash}
              className="inline-flex items-center gap-1 text-[#971F26] font-bold hover:underline"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Digest Copied" : "Copy Specimen Digest"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
