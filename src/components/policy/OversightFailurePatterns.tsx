"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  FileCheck,
  Scale,
  Eye,
  RefreshCw,
  Clock,
  Layers,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  FileX,
  Lock
} from "lucide-react";
import { oversightFailurePatterns } from "@/data/policy/engagementRegistry";

export function OversightFailurePatterns() {
  const [activePatternId, setActivePatternId] = useState<string>("FAIL-01");

  const activePattern =
    oversightFailurePatterns.find((p) => p.id === activePatternId) ||
    oversightFailurePatterns[0];

  return (
    <section id="oversight-patterns" className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              OVERSIGHT RESEARCH · EMERGING SYSTEMIC FAILURE PATTERNS
            </span>
          </div>
          <span className="coord-tick">[MECHANISM ANALYSIS: 6 PATTERNS]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Why Procedures Complete While Evidence &amp; Accountability Evaporate
        </h2>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          Derived from empirical analysis of administrative complaint closures, internal consumer affairs reviews, and multi-system triage practices. These six patterns demonstrate how agencies can execute their individual procedures flawlessly while critical child-safety context disappears between them.
        </p>

        {/* Four-Part Analytical Framework Tag */}
        <div className="p-3.5 bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg text-xs font-mono space-y-1">
          <span className="font-bold text-[#971F26] uppercase block">
            FOUR-TIER ANALYTICAL DISCIPLINE:
          </span>
          <p className="text-stone-800 font-sans">
            Every pattern below strictly separates <strong>(1) Observed Event</strong>, <strong>(2) Documented Agency Response</strong>, <strong>(3) Working Hypothesis</strong>, and <strong>(4) Proposed Procedural Reform</strong>. Private case details are excluded to protect confidentiality and due process.
          </p>
        </div>
      </div>

      {/* Pattern Selector Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
        {oversightFailurePatterns.map((pattern, idx) => (
          <button
            key={pattern.id}
            onClick={() => setActivePatternId(pattern.id)}
            className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-all ${
              activePatternId === pattern.id
                ? "bg-[#1C1D1D] text-white border-[#1C1D1D] shadow-xs"
                : "bg-[#EEE8DD] hover:bg-white text-stone-800 border-stone-300"
            }`}
          >
            <span className="text-[10px] font-bold text-[#971F26] block">
              0{idx + 1}
            </span>
            <span className="font-serif font-bold text-xs mt-1 leading-tight line-clamp-2">
              {pattern.name}
            </span>
          </button>
        ))}
      </div>

      {/* Active Pattern Card */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-2xs">
        {/* Title and Tagline */}
        <div className="border-b border-[#D9D1C4] pb-4 space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold bg-[#971F26] text-white px-2 py-0.5 rounded">
              {activePattern.id}
            </span>
            <span className="font-mono text-xs text-stone-600 font-bold uppercase">
              INSTITUTIONAL BREAKDOWN MECHANISM
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            {activePattern.name}
          </h3>
          <p className="text-xs sm:text-sm font-sans italic text-stone-700">
            &ldquo;{activePattern.tagline}&rdquo;
          </p>
        </div>

        {/* The 4-Tier Breakdown Grid */}
        <div className="grid md:grid-cols-2 gap-5 text-xs font-sans">
          {/* 1. Observed Administrative Event */}
          <div className="p-4 bg-white rounded-lg border border-stone-300 space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#1C1D1D] uppercase border-b border-stone-200 pb-1.5">
              <Eye className="w-3.5 h-3.5 text-[#971F26]" />
              <span>1. Observed Administrative Event</span>
            </div>
            <p className="text-stone-800 leading-relaxed">
              {activePattern.observedEvent}
            </p>
          </div>

          {/* 2. Documented Agency Response */}
          <div className="p-4 bg-[#FDF2F2] rounded-lg border border-[#971F26]/30 space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#971F26] uppercase border-b border-[#971F26]/20 pb-1.5">
              <FileX className="w-3.5 h-3.5 text-[#971F26]" />
              <span>2. Documented Agency Response</span>
            </div>
            <p className="text-stone-900 leading-relaxed">
              {activePattern.administrativeResponse}
            </p>
          </div>

          {/* 3. Working Hypothesis */}
          <div className="p-4 bg-[#FEF7E6] rounded-lg border border-[#8F5A0A]/30 space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#8F5A0A] uppercase border-b border-[#8F5A0A]/20 pb-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8F5A0A]" />
              <span>3. Working Hypothesis (Systemic Cause)</span>
            </div>
            <p className="text-stone-900 leading-relaxed">
              {activePattern.workingHypothesis}
            </p>
          </div>

          {/* 4. Proposed Procedural Reform */}
          <div className="p-4 bg-[#E8F3EB] rounded-lg border border-[#2D5A3D]/40 space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#2D5A3D] uppercase border-b border-[#2D5A3D]/20 pb-1.5">
              <Scale className="w-3.5 h-3.5 text-[#2D5A3D]" />
              <span>4. Proposed Procedural Reform</span>
            </div>
            <p className="text-stone-900 leading-relaxed font-medium">
              {activePattern.proposedReform}
            </p>
          </div>
        </div>

        {/* Review Trace & Continuity Implication Footer */}
        <div className="p-4 bg-[#F5F1E8] rounded-lg border border-[#1C1D1D] space-y-2 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2">
            <span className="font-mono font-bold text-[#971F26] uppercase text-[11px]">
              HOW THE REVIEW TRACE PREVENTS THIS FAILURE:
            </span>
            <div className="flex flex-wrap gap-1">
              {activePattern.relevantModules.map((mod, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] bg-white border border-stone-300 px-2 py-0.5 rounded text-stone-700 font-bold"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>
          <p className="text-stone-800 leading-relaxed font-sans">
            {activePattern.reviewTraceImplication}
          </p>
        </div>
      </div>
    </section>
  );
}
