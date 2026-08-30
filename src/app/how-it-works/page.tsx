import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Layers,
  MapPin,
  Briefcase,
  Sparkles
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              SYSTEM THESIS & NAVIGATION WORKFLOW
            </span>
          </div>
          <span className="coord-tick">[ARCHITECTURE: BARRIER-FIRST-V0]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          How Maps With Teeth Works
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed font-sans">
          Most resource systems categorize help by agency type. Maps With Teeth maps help by the practical barriers standing between a person and safety.
        </p>
      </div>

      {/* 3-Pillar Core Mechanics */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Pillar 1 */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
            <span className="font-bold text-[#971F26]">PILLAR 01</span>
            <span className="stamp-verified text-[9px] py-0.5 px-1.5">CONDITIONS</span>
          </div>
          <h2 className="text-lg font-serif font-bold text-[#1C1D1D]">1. Exposing Access Friction</h2>
          <p className="text-xs text-stone-800 leading-relaxed font-sans">
            Every resource listing explicitly documents &ldquo;The Catch&rdquo;—advocate referral rules, congregate shelter requirements, income limits, and required paperwork—before you waste critical time.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
            <span className="font-bold text-[#971F26]">PILLAR 02</span>
            <span className="stamp-verified text-[9px] py-0.5 px-1.5">LATERAL BYPASS</span>
          </div>
          <h2 className="text-lg font-serif font-bold text-[#1C1D1D]">2. Finding Other Ways Through</h2>
          <p className="text-xs text-stone-800 leading-relaxed font-sans">
            When standard crisis hotlines are backlogged, we map condition-dependent funds tied to work background, companion animals, utility regulations, and federal statutory rights.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
            <span className="font-bold text-[#971F26]">PILLAR 03</span>
            <span className="stamp-alert text-[9px] py-0.5 px-1.5">FIELD AUDITED</span>
          </div>
          <h2 className="text-lg font-serif font-bold text-[#1C1D1D]">3. Investigative Verification</h2>
          <p className="text-xs text-stone-800 leading-relaxed font-sans">
            Every entry undergoes a 10-step newsroom audit protocol with transparent verification stamps, review timestamps, and strict 90-day staleness quarantines.
          </p>
        </div>
      </div>

      {/* The 3 Resource Layers Grid */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-diagram">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Three Distinct Resource Layers
            </h2>
          </div>
          <span className="coord-tick">[INDEX: CENTRAL TX PILOT & US]</span>
        </div>

        <div className="space-y-4">
          <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#971F26] uppercase">LAYER 01</span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">Texas Field Pilot & Statutory Remedies</h3>
              </div>
              <p className="text-xs text-stone-800 font-sans">
                County-specific intelligence across Travis, Williamson, Bastrop, Hays, and Harris counties + statutory escape rights under Texas Property Code § 92.016 and PUCT § 25.478.
              </p>
            </div>
            <Link
              href="/texas"
              className="px-4 py-2 bg-[#1C1D1D] hover:bg-stone-800 text-white rounded text-xs font-mono font-bold uppercase tracking-wider shrink-0 text-center"
            >
              Explore Texas Pilot →
            </Link>
          </div>

          <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#971F26] uppercase">LAYER 02</span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">Other Ways Through: Lateral Hardship Funds</h3>
              </div>
              <p className="text-xs text-stone-800 font-sans">
                Nationwide funds based on food/beverage tenure, music/craft occupations, companion animal boarding, telecom line separation (Safe Connections Act), and IRS IP PIN tax protections.
              </p>
            </div>
            <Link
              href="/other-ways-through"
              className="px-4 py-2 bg-[#1C1D1D] hover:bg-stone-800 text-white rounded text-xs font-mono font-bold uppercase tracking-wider shrink-0 text-center"
            >
              Browse Lateral Funds →
            </Link>
          </div>

          <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#971F26] uppercase">LAYER 03</span>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">Ask Us to Look: Structured Investigation Docket</h3>
              </div>
              <p className="text-xs text-stone-800 font-sans">
                Interactive discovery intake calculating immediate potential matching levers from your job, pets, and previous gatekeeper failures—without requiring an abuse narrative.
              </p>
            </div>
            <Link
              href="/ask-us-to-look"
              className="px-4 py-2 bg-[#971F26] hover:bg-red-900 text-white rounded text-xs font-mono font-bold uppercase tracking-wider shrink-0 text-center"
            >
              Start Investigation →
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Footer Strip */}
      <div className="border-t border-[#D9D1C4] pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/how-we-research"
          className="text-[#971F26] font-bold hover:underline inline-flex items-center gap-1"
        >
          <span>View 10-Step Research Methodology →</span>
        </Link>
        <Link
          href="/find-help"
          className="text-[#1C1D1D] font-bold hover:underline inline-flex items-center gap-1"
        >
          <span>Explore All Resources →</span>
        </Link>
      </div>
    </div>
  );
}
