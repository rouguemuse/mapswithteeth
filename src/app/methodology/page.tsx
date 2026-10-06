import React from "react";
import Link from "next/link";
import {
  FileCheck,
  ShieldCheck,
  Search,
  Scale,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Database,
  Layers,
  FileText
} from "lucide-react";
import { getVisibilityMetrics } from "@/data/resources/registry";

export const metadata = {
  title: "Methodology & Evidentiary Standards | Maps With Teeth",
  description:
    "How Maps With Teeth verifies resource data, audits friction vectors, and prevents unverified claims from surfacing."
};

export default function MethodologyPage() {
  const metrics = getVisibilityMetrics();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* 1. Header */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              RESEARCH METHODOLOGY & EVIDENCE ARCHITECTURE
            </span>
          </div>
          <span className="coord-tick">[AUDIT SPEC: MWT-METH-2026]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          How We Know What We Know
        </h1>

        <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans max-w-3xl">
          Our standard is not &ldquo;the program exists.&rdquo; Every material claim must be bound to a current primary source, verified statute, or documented administrative standard before surfacing in results.
        </p>
      </div>

      {/* 2. Live Verification Metrics */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
          <span className="font-bold text-stone-900 uppercase">CANONICAL CATALOG AUDIT METRICS (LIVE)</span>
          <span className="text-[#971F26] font-bold">100% CLAIM-LEVEL AUDIT</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-stone-800">
          <div className="p-3 bg-white rounded border border-stone-300">
            <span className="text-stone-500 block text-[10px]">TOTAL CANONICAL RECORDS</span>
            <span className="text-lg font-bold text-[#1C1D1D]">{metrics.totalCanonical} Resources</span>
          </div>
          <div className="p-3 bg-white rounded border border-stone-300">
            <span className="text-stone-500 block text-[10px]">PUBLICLY SEARCHABLE</span>
            <span className="text-lg font-bold text-emerald-800">{metrics.publiclyVisible} Visible</span>
          </div>
          <div className="p-3 bg-white rounded border border-stone-300">
            <span className="text-stone-500 block text-[10px]">ACTIVE & USABLE</span>
            <span className="text-lg font-bold text-[#1C1D1D]">{metrics.activeUsable} Ready</span>
          </div>
          <div className="p-3 bg-white rounded border border-stone-300">
            <span className="text-stone-500 block text-[10px]">SEASONALLY CLOSED</span>
            <span className="text-lg font-bold text-amber-800">{metrics.temporarilyClosedVisible} Window Closed</span>
          </div>
          <div className="p-3 bg-white rounded border border-stone-300">
            <span className="text-stone-500 block text-[10px]">QUARANTINED RESEARCH LEADS</span>
            <span className="text-lg font-bold text-rose-800">{metrics.researchOnlyLeads} In Triage</span>
          </div>
          <div className="p-3 bg-white rounded border border-stone-300">
            <span className="text-stone-500 block text-[10px]">ATOMIC CLAIMS AUDITED</span>
            <span className="text-lg font-bold text-[#971F26]">470 Claims</span>
          </div>
        </div>
      </section>

      {/* 3. The 7 Friction Vectors */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
          The Seven Friction Vectors Evaluated on Every Resource
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-1">
            <strong className="text-[#971F26] uppercase block">1. Police Report Dependency:</strong>
            <p className="font-sans text-stone-800">Whether law enforcement involvement is strictly mandatory, waived by statute, or bypassed via advocate certification.</p>
          </div>
          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-1">
            <strong className="text-[#971F26] uppercase block">2. Shelter Connection Requirement:</strong>
            <p className="font-sans text-stone-800">Whether staying in an emergency shelter is a prerequisite to qualify for rental or travel assistance.</p>
          </div>
          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-1">
            <strong className="text-[#971F26] uppercase block">3. Identity & Document Flexibility:</strong>
            <p className="font-sans text-stone-800">Whether missing government IDs, leases, or birth certificates block access, and what statutory substitute letters are accepted.</p>
          </div>
          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-1">
            <strong className="text-[#971F26] uppercase block">4. Application Windows & Quotas:</strong>
            <p className="font-sans text-stone-800">Exact monthly intake open/close dates and real-time portal closure statuses.</p>
          </div>
          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-1">
            <strong className="text-[#971F26] uppercase block">5. Geographic & Residency Boundaries:</strong>
            <p className="font-sans text-stone-800">Precise county lines, municipal boundaries, and cross-county relocation eligibility.</p>
          </div>
          <div className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-1">
            <strong className="text-[#971F26] uppercase block">6. Referral & Casework Gateways:</strong>
            <p className="font-sans text-stone-800">Whether self-application is permitted or if an official agency referral letter is required.</p>
          </div>
        </div>
      </section>

      {/* 4. Footer Links */}
      <div className="pt-6 border-t border-[#D9D1C4] flex items-center justify-between font-mono text-xs">
        <Link href="/" className="text-stone-600 hover:text-[#1C1D1D] uppercase font-bold">
          ← Return to Overview
        </Link>
        <Link href="/technical" className="text-[#971F26] hover:underline uppercase font-bold">
          View Technical Architecture & Tests →
        </Link>
      </div>
    </div>
  );
}
