import React from "react";
import Link from "next/link";
import {
  Code2,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Database,
  Layers,
  ArrowRight,
  FileCheck
} from "lucide-react";

export const metadata = {
  title: "Technical Architecture & Quality Assurance | Maps With Teeth",
  description:
    "Technical verification suites, schema specifications, and automated evidence testing engines powering Maps With Teeth."
};

export default function TechnicalPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* 1. Header */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Terminal className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              TECHNICAL SPECIFICATIONS & QA SUITE
            </span>
          </div>
          <span className="coord-tick">[ENGINE: NEXT.JS 15 · TYPESCRIPT 5]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          System Architecture & Testing
        </h1>

        <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans max-w-3xl">
          Detailed technical specifications for our deterministic matching engines, cryptographic receipt hashing, and automated source-level evidence verification suites.
        </p>
      </div>

      {/* 2. Automated Test Engines */}
      <section className="bg-[#1C1D1D] text-white rounded-xl p-6 space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-700 pb-2 text-stone-300">
          <span className="font-bold text-white uppercase">AUTOMATED CI VERIFICATION SUITES</span>
          <span className="text-emerald-400">PASSING (0 REGRESSIONS)</span>
        </div>

        <div className="space-y-3 text-stone-300">
          <div className="p-3 bg-stone-900 rounded border border-stone-800 space-y-1">
            <span className="text-emerald-400 font-bold block">$ npm run audit:evidence</span>
            <p className="text-stone-400 font-sans text-xs">
              Validates 470 atomic material claims across 18 distinct vectors (program identity, availability, geography, eligibility, benefit amount, documentation, police report waivers, referral routes, access friction).
            </p>
          </div>

          <div className="p-3 bg-stone-900 rounded border border-stone-800 space-y-1">
            <span className="text-emerald-400 font-bold block">$ npm run audit:resources</span>
            <p className="text-stone-400 font-sans text-xs">
              Asserts that 100% of canonical resources are classified under authentic primary statutes or official operating documentation.
            </p>
          </div>

          <div className="p-3 bg-stone-900 rounded border border-stone-800 space-y-1">
            <span className="text-emerald-400 font-bold block">$ npm run audit:imports</span>
            <p className="text-stone-400 font-sans text-xs">
              Enforces architectural boundary integrity, ensuring zero deprecated compatibility shims or research leaks exist in production code.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Deterministic Matching Engine */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm">
        <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
          Deterministic Matching Architecture
        </h2>
        <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
          Unlike probabilistic LLMs or fuzzy keyword searches, Maps With Teeth evaluates resources deterministically against rigorous qualification profiles. Every match generates an explicit fact-audit sentence explaining which intake facts satisfied which statutory criteria, preventing false hopes or hallucinated aid.
        </p>
      </section>

      {/* 4. Footer */}
      <div className="pt-6 border-t border-[#D9D1C4] flex items-center justify-between font-mono text-xs">
        <Link href="/" className="text-stone-600 hover:text-[#1C1D1D] uppercase font-bold">
          ← Return to Overview
        </Link>
        <Link href="/for-partners" className="text-[#971F26] hover:underline uppercase font-bold">
          Collaborate as a Technical Partner →
        </Link>
      </div>
    </div>
  );
}
