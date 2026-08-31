import React from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  Layers,
  MapPin,
  Briefcase,
  Sparkles,
  Shuffle,
  FolderArchive,
  Fingerprint,
  Scale,
  Building,
  FileText,
  FileCheck
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none font-sans">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              SYSTEM ARCHITECTURE & PRODUCT MODEL
            </span>
          </div>
          <span className="coord-tick">[FULL SYSTEM SPECIFICATION]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          How Maps With Teeth Works
        </h1>
        <p className="text-base sm:text-lg text-stone-900 mt-2 max-w-3xl leading-relaxed font-sans font-medium">
          Maps With Teeth is designed as an integrated system with two connected halves: <strong>Resource Intelligence</strong> to find a reachable way through, and <strong>Continuity Infrastructure</strong> to preserve and carry context through disconnected systems.
        </p>
      </div>

      {/* High-Level 2-Halves Visual Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-3 shadow-sm bg-grid-atlas flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase tracking-wider block">
              PART A · FRONT-END DISCOVERY
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Resource Intelligence
            </h2>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
              Traditional directories hand you eight phone numbers. Maps With Teeth surfaces the two obscure pathways you can actually access, the exact documentation you need, what could block you, and what to try if they say no.
            </p>
          </div>
          <div className="pt-3 border-t border-[#D9D1C4] flex items-center justify-between text-xs font-mono">
            <span className="text-[#2D5A3D] font-bold">STATUS: LIVE / ACTIVE BUILD</span>
            <Link href="/other-ways-through" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
              <span>Explore Routes</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-3 shadow-sm bg-grid-atlas flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase tracking-wider block">
              PART B · CONTINUITY INFRASTRUCTURE
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Context & Continuity Layer
            </h2>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
              A referral is not a handoff. Maps With Teeth preserves what happened at each institutional touchpoint, locks unreviewed evidence, identifies circular runarounds, and flags when no functioning decision-owner exists.
            </p>
          </div>
          <div className="pt-3 border-t border-[#D9D1C4] flex items-center justify-between text-xs font-mono">
            <span className="text-stone-800 font-bold">STATUS: PROTOTYPE & ROADMAP</span>
            <Link href="/bridge" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
              <span>Explore Bridge</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART A: RESOURCE INTELLIGENCE */}
      {/* ============================================================ */}
      <section className="space-y-8 pt-4">
        <div className="border-b border-[#D9D1C4] pb-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1C1D1D] text-white flex items-center justify-center font-mono text-sm font-bold">
            A
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              PART A: FINDING A WAY THROUGH
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Resource Intelligence Architecture
            </h2>
          </div>
        </div>

        <div className="p-5 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl font-sans space-y-2">
          <p className="text-sm sm:text-base font-serif italic text-[#1C1D1D]">
            &ldquo;Traditional directories tell you where doors are. Maps With Teeth asks whether they open.&rdquo;
          </p>
          <p className="text-xs text-stone-700 font-mono">
            Deterministic qualification · Access friction audits · Verification timestamps
          </p>
        </div>

        {/* 3 Resource Intelligence Layers */}
        <div className="space-y-4">
          {/* Layer 1 */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-xs">
              <span className="font-bold text-[#971F26] uppercase">LAYER 01 · STATE & LOCAL JURISDICTIONS</span>
              <StatusBadge type="product" status="LIVE" label="LIVE" timestamp="TEXAS 254-COUNTY" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
              Texas Deep Dive & Statutory Rights
            </h3>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
              Local shelter rosters and enforceable statutory protections that exist without municipal funding queues—including <strong>Texas Property Code § 92.016</strong> (lease termination without police reports), <strong>Texas PUC § 25.478</strong> (electric deposit waivers), and school district McKinney-Vento transport coordinators.
            </p>
            <div className="pt-2 border-t border-[#D9D1C4]/70 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-600">Explore Travis, Williamson, Bastrop, Hays & Statewide</span>
              <Link href="/texas" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
                <span>View Texas Deep Dive</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-xs">
              <span className="font-bold text-[#971F26] uppercase">LAYER 02 · LATERAL BYPASS & BENEVOLENCE</span>
              <StatusBadge type="product" status="LIVE" label="LIVE" timestamp="MULTI-STATE & INDUSTRY" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
              Other Ways Through: Lateral Hardship Funds
            </h3>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
              Condition-dependent relief pathways operating entirely outside conventional shelter backlogs—such as culinary hardship grants (Southern Smoke, CORE Gives, Giving Kitchen), craft artist aid (CERF+), companion animal foster boarding (RedRover Safe Escape, APA PASS), and federal telecom mandates (Safe Connections Act 47 U.S.C. § 345).
            </p>
            <div className="pt-2 border-t border-[#D9D1C4]/70 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-600">Audited Lateral Dockets with Friction Analysis</span>
              <Link href="/other-ways-through" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
                <span>Explore Other Ways Through</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Layer 3 */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-xs">
              <span className="font-bold text-[#971F26] uppercase">LAYER 03 · DETERMINISTIC QUALIFICATION</span>
              <StatusBadge type="product" status="LIVE" label="LIVE" timestamp="FACT MATCHER" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
              Ask Us to Look: Dynamic Intake & Audit Trails
            </h3>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
              Nothing surfaces without a reason. The matching engine evaluates candidate eligibility rules directly against verified user facts, dynamically prompting only for unresolved conditions and generating transparent factual audit trails.
            </p>
            <div className="pt-2 border-t border-[#D9D1C4]/70 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-600">Zero Generative Guesswork · Pure Resource Eligibility</span>
              <Link href="/ask-us-to-look" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
                <span>Launch Intake Engine</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PART B: CONTINUITY INFRASTRUCTURE */}
      {/* ============================================================ */}
      <section className="space-y-8 pt-4">
        <div className="border-b border-[#D9D1C4] pb-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#971F26] text-white flex items-center justify-center font-mono text-sm font-bold">
            B
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              PART B: PRESERVING AND CARRYING CONTEXT
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Continuity Infrastructure Architecture
            </h2>
          </div>
        </div>

        <div className="p-5 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl font-sans space-y-2">
          <p className="text-sm sm:text-base font-serif italic text-[#1C1D1D]">
            &ldquo;Tell it once. Carry it forward.&rdquo;
          </p>
          <p className="text-xs text-stone-700 font-mono">
            Survivor-controlled records · Provenance tracking · No functioning decision-owner detection
          </p>
        </div>

        {/* 4 Continuity Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1: Organizer & Originals Vault */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs font-bold uppercase">
                  <FolderArchive className="w-4 h-4" />
                  <span>1. SURVIVOR ORGANIZER & ORIGINALS VAULT</span>
                </div>
                <StatusBadge type="product" status="PROTOTYPE" label="PROTOTYPE" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                Organize What Happened
              </h3>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                Structure incidents, communications, agencies contacted, people involved, report numbers, and deadlines into a clear chronological timeline. The <strong>Originals Vault</strong> preserves original files, filenames, and metadata with cryptographic hashes (SHA-256) to maintain provenance without altering evidence.
              </p>
            </div>
            <div className="pt-3 border-t border-[#D9D1C4] flex items-center justify-between text-xs font-mono">
              <span className="text-stone-600">Zero Surveillance · Scoped Packets</span>
              <Link href="/bridge#organizer" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
                <span>View Organizer Model</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Bridge & Continuity Receipts */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs font-bold uppercase">
                  <Shuffle className="w-4 h-4" />
                  <span>2. BRIDGE & CONTINUITY RECEIPTS</span>
                </div>
                <StatusBadge type="product" status="PROTOTYPE" label="PROTOTYPE" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                Carry Context Forward
              </h3>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                Standardizes touchpoint records (Who, When, Reference #, What was presented, What happened, Why, and What happens next). When a referral occurs, the receipt ensures the receiving organization knows where the previous agency stopped.
              </p>
            </div>
            <div className="pt-3 border-t border-[#D9D1C4] flex items-center justify-between text-xs font-mono">
              <span className="text-stone-600">Standard Specimen & Handoff Chain</span>
              <Link href="/bridge" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
                <span>Explore Bridge Page</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Context Before Closure */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs font-bold uppercase">
                  <Scale className="w-4 h-4" />
                  <span>3. CONTEXT BEFORE CLOSURE</span>
                </div>
                <StatusBadge type="product" status="PROTOTYPE" label="PROTOTYPE" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                Verify What Was Actually Resolved
              </h3>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                Prevents premature case closure from masking unresolved crises. Records reviewed vs. unreviewed context, tracks where responsibility was transferred, detects circular runarounds, and flags when no functioning decision-owner exists.
              </p>
            </div>
            <div className="pt-3 border-t border-[#D9D1C4] flex items-center justify-between text-xs font-mono">
              <span className="text-stone-600">Decision-Owner Gap Detection</span>
              <Link href="/bridge#closure" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
                <span>View Closure Logic</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Pillar 4: Bad Maps */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
                <div className="flex items-center gap-2 text-[#971F26] font-mono text-xs font-bold uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>4. BAD MAPS (SYSTEMS INTELLIGENCE)</span>
                </div>
                <StatusBadge type="product" status="ACTIVE_RESEARCH" label="RESEARCH" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
                Expose Where Systems Break
              </h3>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                Deidentified and aggregated pattern analysis of recurring referral dead ends, county-line jurisdictional disputes, ghost program listings, and frontline statutory non-compliance. Provides empirical evidence for policy reform.
              </p>
            </div>
            <div className="pt-3 border-t border-[#D9D1C4] flex items-center justify-between text-xs font-mono">
              <span className="text-stone-600">Aggregated Systems Research</span>
              <Link href="/bridge#bad-maps" className="text-[#971F26] font-bold hover:underline flex items-center gap-1">
                <span>View Bad Maps Research</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Horizon: Partner Infrastructure */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
          <div className="flex items-center gap-2 text-stone-800 font-bold uppercase">
            <Building className="w-4 h-4 text-stone-700" />
            <span>STAGE 06 · PARTNER INFRASTRUCTURE</span>
          </div>
          <StatusBadge type="product" status="PLANNED" label="LONG HORIZON" />
        </div>
        <p className="font-sans text-xs sm:text-sm text-stone-800 leading-relaxed pt-1">
          Future components include consent-based partner handoffs, interoperable continuity packet standards, cryptographic access controls, and structured organizational workflows for allied agencies.
        </p>
      </section>

      {/* Bottom CTA Block */}
      <div className="border-t border-[#D9D1C4] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
        <div className="space-y-1 text-xs">
          <span className="font-bold text-[#1C1D1D] uppercase block">EXPLORE MAPS WITH TEETH</span>
          <p className="text-stone-700 font-sans">
            Test the live resource intelligence engine or review our dedicated Bridge documentation.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/bridge"
            className="px-5 py-2.5 bg-[#EEE8DD] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs"
          >
            <span>Bridge Continuity Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/ask-us-to-look"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-red-900 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs"
          >
            <span>Launch Intake Engine</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
