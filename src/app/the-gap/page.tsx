import React from "react";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Building2,
  Scale,
  GraduationCap,
  Users,
  Compass,
  FileText,
  FileSearch,
  CheckCircle2,
  HelpCircle,
  Lock
} from "lucide-react";

export const metadata = {
  title: "Why This Matters: The Seam Deficit | Maps With Teeth",
  description:
    "Why people move between systems while their information and accountability do not. Incident View vs. Pattern View across child safety, family violence, and legal systems."
};

export default function TheGapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 select-none font-sans">
      {/* 1. Hero / Opening Framing */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Layers className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              SYSTEMIC CONTEXT · THE SEAM DEFICIT
            </span>
          </div>
          <span className="coord-tick">[THE GAP ANALYSIS: MWT-GAP-2026]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          A person can contact five institutions about one crisis and create five unrelated records.
        </h1>

        <p className="text-lg sm:text-xl text-stone-900 leading-relaxed font-sans font-medium max-w-3xl">
          Each institution may act rationally on the fragment it sees. The combined system can still fail catastrophically.
        </p>

        {/* Conceptual Anchors Banner */}
        <div className="p-4 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-md space-y-1 text-sm font-mono uppercase tracking-wider text-stone-900 font-bold">
          <p>“PEOPLE MOVE BETWEEN SYSTEMS. THEIR INFORMATION AND ACCOUNTABILITY OFTEN DO NOT.”</p>
          <p className="text-xs text-stone-700 font-serif italic normal-case">
            The survivor should not be the only person holding the whole map.
          </p>
        </div>
      </div>

      {/* 2. Visual Comparison: Incident View vs. Pattern View */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm bg-grid-diagram">
        <div className="border-b border-[#D9D1C4] pb-4 space-y-1">
          <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider">
            EVIDENTIARY ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Incident View vs. Pattern View
          </h2>
          <p className="text-stone-800 text-sm font-sans">
            How institutional silos obscure escalating danger by treating continuous crises as disconnected isolated occurrences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* INCIDENT VIEW */}
          <div className="bg-[#FDF2F2] border-2 border-[#971F26] rounded-xl p-6 space-y-5 shadow-2xs">
            <div className="border-b border-[#971F26]/30 pb-3 flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-[#971F26]">
                1. The Incident View
              </h3>
              <span className="text-[10px] font-mono font-bold bg-[#971F26] text-white px-2 py-0.5 rounded uppercase">
                WHAT AGENCIES CURRENTLY SEE
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-white rounded border border-[#971F26]/30">
                <span className="font-bold text-[#1C1D1D] block">Report A · Municipal Police (July 2)</span>
                <span className="text-stone-600 text-[11px]">&ldquo;Verbal dispute at residence. No physical injuries reported. Parties separated.&rdquo;</span>
              </div>
              <div className="p-3 bg-white rounded border border-[#971F26]/30">
                <span className="font-bold text-[#1C1D1D] block">Report B · Elementary School (Sept 10)</span>
                <span className="text-stone-600 text-[11px]">&ldquo;Child absent 4 days; parent requested unannounced emergency pickup restriction.&rdquo;</span>
              </div>
              <div className="p-3 bg-white rounded border border-[#971F26]/30">
                <span className="font-bold text-[#1C1D1D] block">Report C · CPS / DFPS Intake (Oct 4)</span>
                <span className="text-stone-600 text-[11px]">&ldquo;Screened out due to insufficient immediate allegation threshold.&rdquo;</span>
              </div>
              <div className="p-3 bg-white rounded border border-[#971F26]/30">
                <span className="font-bold text-[#1C1D1D] block">Filing D · County Family Court (Nov 15)</span>
                <span className="text-stone-600 text-[11px]">&ldquo;Ex parte protective order requested without prior police offense report attached.&rdquo;</span>
              </div>
              <div className="p-3 bg-white rounded border border-[#971F26]/30">
                <span className="font-bold text-[#1C1D1D] block">Intake E · Adjacent County Sheriff (Dec 1)</span>
                <span className="text-stone-600 text-[11px]">&ldquo;Reported vehicle following across county line; logged as isolated suspicious person.&rdquo;</span>
              </div>
            </div>

            <div className="p-3 bg-white/90 border border-[#971F26] rounded text-xs text-[#971F26] font-mono leading-relaxed">
              <strong>THE ILLUSION:</strong> Each case worker and officer sees a minor, low-level event that does not cross their individual threshold for action.
            </div>
          </div>

          {/* PATTERN VIEW */}
          <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-5 shadow-2xs">
            <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                2. The Pattern View
              </h3>
              <span className="text-[10px] font-mono font-bold bg-[#1C1D1D] text-white px-2 py-0.5 rounded uppercase">
                WHAT IS ACTUALLY HAPPENING
              </span>
            </div>

            {/* Networked Linked Node Visual */}
            <div className="p-4 bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg font-mono text-xs space-y-3">
              <div className="text-center font-bold text-[#971F26] text-[11px] uppercase tracking-wider">
                SAME PARTIES · RELATED TIMELINE · MULTIPLE JURISDICTIONS
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center gap-2 bg-white p-2 rounded border border-stone-300">
                  <span className="w-5 h-5 rounded-full bg-[#971F26] text-white flex items-center justify-center font-bold text-[10px]">A</span>
                  <span>July 2 · Escalating coercive intimidation</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded border border-stone-300">
                  <span className="w-5 h-5 rounded-full bg-[#971F26] text-white flex items-center justify-center font-bold text-[10px]">B</span>
                  <span>Sept 10 · Threat directly affecting child safety</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded border border-stone-300">
                  <span className="w-5 h-5 rounded-full bg-[#971F26] text-white flex items-center justify-center font-bold text-[10px]">C</span>
                  <span>Oct 4 · CPS intake without police context</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded border border-stone-300">
                  <span className="w-5 h-5 rounded-full bg-[#971F26] text-white flex items-center justify-center font-bold text-[10px]">D</span>
                  <span>Nov 15 · Court filing without prior records</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded border border-stone-300">
                  <span className="w-5 h-5 rounded-full bg-[#971F26] text-white flex items-center justify-center font-bold text-[10px]">E</span>
                  <span>Dec 1 · Cross-jurisdiction stalking escalation</span>
                </div>
              </div>

              <div className="p-2.5 bg-[#1C1D1D] text-white rounded text-center text-xs font-serif font-bold">
                → POTENTIALLY RELATED EVENTS DISTRIBUTED ACROSS MULTIPLE INSTITUTIONS OR JURISDICTIONS
              </div>
            </div>

            <div className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded text-xs text-stone-900 font-mono leading-relaxed">
              <strong>SYSTEMIC SIGNIFICANCE:</strong> Viewed together, these reports indicate potentially related events across multiple institutions and jurisdictions that warrant lawful coordination and multidisciplinary review.
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Core Principle: Related Does Not Mean Proven */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#D9D1C4] pb-4">
          <ShieldCheck className="w-6 h-6 text-[#971F26]" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            &ldquo;Related Does Not Mean Proven.&rdquo;
          </h2>
        </div>

        <div className="space-y-4 text-stone-800 text-sm sm:text-base font-sans leading-relaxed">
          <p>
            The purpose of cross-system continuity is to make potentially relevant context discoverable to appropriately authorized decision-makers—<strong>not to predetermine findings or construct an automated judgment engine</strong>.
          </p>
          <p>
            When an authorized investigator, prosecutor, judge, or caseworker is evaluating a critical safety matter, knowing that three other related filings exist in adjacent jurisdictions allows them to request formal case files, verify facts through lawful due process, and assess cumulative risk.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
            <div className="p-4 bg-[#EEE8DD] rounded-lg border border-stone-300 space-y-1">
              <span className="font-bold text-[#971F26] uppercase block">WHAT CONTINUITY IS:</span>
              <p className="text-stone-800 font-sans">
                A signal prompting authorized personnel to check for related records, review prior evidence, and verify whether open referrals exist.
              </p>
            </div>
            <div className="p-4 bg-[#EEE8DD] rounded-lg border border-stone-300 space-y-1">
              <span className="font-bold text-stone-900 uppercase block">WHAT CONTINUITY IS NOT:</span>
              <p className="text-stone-800 font-sans">
                An automatic guilty finding, a public registry, an allegation database, or a replacement for thorough agency investigations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Navigation & Next Step CTAs */}
      <div className="pt-6 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/"
          className="text-stone-600 hover:text-[#1C1D1D] uppercase font-bold tracking-wider"
        >
          ← Return to Overview
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/continuity"
            className="px-5 py-2.5 bg-[#1C1D1D] hover:bg-black text-white rounded font-bold uppercase tracking-wider"
          >
            Explore Continuity Standard →
          </Link>
          <Link
            href="/policy"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-bold uppercase tracking-wider"
          >
            Texas Policy Lab →
          </Link>
        </div>
      </div>
    </div>
  );
}
