"use client";

import React from "react";
import Link from "next/link";
import {
  Scale,
  Building2,
  FileText,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Download,
  Send,
  Sparkles,
  MapPin
} from "lucide-react";

export function TexasPolicyProjectsSection() {
  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-10 shadow-sm bg-grid-diagram select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#971F26]">
            SECTION 07 · TEXAS POLICY & SYSTEMS LAB
          </span>
          <span className="coord-tick">[JURISDICTION: TEXAS 254-COUNTY STATUTES · CENTRAL TX FIELD VALIDATION]</span>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            Building the Bridges Between Existing Systems
          </h2>
          <p className="text-sm sm:text-base font-mono font-bold text-[#971F26] uppercase">
            Statewide statutory framework + deep field validation in Central Texas counties (Williamson, Travis, Bastrop, Burnet, Hays).
          </p>
        </div>

        <p className="text-stone-800 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          Texas already maintains specialized forms of multidisciplinary coordination (CACs, high-risk DV teams, statutory victim rights). Maps With Teeth explores how a broader cross-system continuity protocol could operate across Texas without creating a centralized allegation database or undermining agency independence.
        </p>
      </div>

      {/* Two Project Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* CARD 1: TEXAS CROSS-SYSTEM CONTINUITY PROJECT */}
        <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-5 flex flex-col justify-between shadow-xs">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#971F26] text-white px-2.5 py-1 rounded">
                RESEARCH & POLICY INITIATIVE
              </span>
              <span className="text-xs font-mono font-bold text-stone-600">[STAGE: RESEARCH + POLICY]</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl text-[#1C1D1D]">
                Texas Cross-System Continuity Project
              </h3>
              <p className="text-xs font-mono text-[#971F26] font-bold uppercase">
                CHILD SAFETY · FAMILY VIOLENCE · COURTS · SCHOOLS · LAW ENFORCEMENT
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Researching how related child-safety, stalking, protective-order, municipal criminal, family court, school district, and victim service encounters move across institutional and county lines in Texas.
            </p>

            {/* Core Research Questions Preview */}
            <div className="p-3.5 bg-[#EEE8DD] rounded-lg border border-stone-300 space-y-2 text-xs font-mono">
              <span className="font-bold text-stone-900 uppercase block">CORE RESEARCH QUESTIONS:</span>
              <ul className="space-y-1 text-stone-800">
                <li>• When is one Texas agency legally permitted or required to know another related matter exists?</li>
                <li>• What happens after an interagency referral is sent, and who verifies receipt?</li>
                <li>• Where do confidentiality statutes permit or prohibit closed-loop referral confirmation?</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/policy"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#971F26] hover:text-[#7A181E] uppercase tracking-wider"
            >
              <span>Explore Policy Lab</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => alert("Texas Cross-System Continuity Policy Brief (Draft v0.4) will be available upon peer review release.")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-400 rounded text-xs font-mono font-bold text-stone-800 hover:bg-stone-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Policy Brief (PDF)</span>
            </button>
          </div>
        </div>

        {/* CARD 2: DFPS SUNSET REVIEW 2026–27 */}
        <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-5 flex flex-col justify-between shadow-xs">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-white px-2.5 py-1 rounded">
                LEGISLATIVE HORIZON
              </span>
              <span className="text-xs font-mono font-bold text-stone-600">[TIMELINE: 2026–2027]</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl text-[#1C1D1D]">
                DFPS Sunset Review 2026–27
              </h3>
              <p className="text-xs font-mono text-stone-700 font-bold uppercase">
                INTERAGENCY CONTINUITY · CUMULATIVE CONTEXT · CLOSURE PRACTICES
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              Maps With Teeth is examining interagency handoffs, cumulative case context, referral accountability, and case closure practices as inputs into systemic analysis for the upcoming Texas Sunset Advisory Commission review.
            </p>

            {/* Methodology Note */}
            <div className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1 text-xs font-mono text-stone-800">
              <span className="font-bold text-stone-900 uppercase block">SYSTEMIC METHODOLOGY:</span>
              <p className="font-sans text-stone-700 text-[11px] leading-relaxed">
                Framing frontline practitioner interviews, public records, statutes, and documented administrative handoffs as inputs into structural systems engineering—not individual adjudication.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/policy#dfps-sunset"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1C1D1D] hover:text-[#971F26] uppercase tracking-wider"
            >
              <span>View Sunset Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/feedback"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded text-xs font-mono font-bold uppercase tracking-wider shadow-2xs"
            >
              <Send className="w-3 h-3" />
              <span>Submit a System Gap</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
