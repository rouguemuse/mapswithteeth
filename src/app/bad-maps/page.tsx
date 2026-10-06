import React from "react";
import Link from "next/link";
import {
  Compass,
  AlertTriangle,
  RotateCcw,
  Ban,
  ArrowRight,
  ShieldAlert,
  FileX,
  FileQuestion,
  HelpCircle,
  Scale,
  Building2,
  Users,
  Send,
  Layers,
  MapPin,
  GitBranch,
  Activity,
  CheckCircle2,
  BarChart3,
  Search,
  ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "Bad Maps: Empirical System Failure Research & Measurement | Maps With Teeth",
  description:
    "Deidentified empirical research and measurement architecture on recurring dead routes, circular referral loops, unacknowledged handoffs, and 12 institutional seam failures."
};

interface BadMapsMetric {
  name: string;
  observedCount: string; // e.g. "7 of 23 observable referrals"
  sampleSize: string; // "n=23"
  cohort: string;
  observationPeriod: string;
  triStateBreakdown: {
    confirmedGap: number;
    noGapObserved: number;
    unknownInsufficient: number;
  };
  classificationCriteria: string;
  sourceProvenance: string;
  verificationTier: "PARTICIPANT_RECORDED" | "AGENCY_ACKNOWLEDGED" | "PARTNER_ROLE_VERIFIED";
}

export default function BadMapsPage() {
  const empiricalMetrics: BadMapsMetric[] = [
    {
      name: "Verified Handoff Rate",
      observedCount: "6 of 24 observable referrals",
      sampleSize: "n=24",
      cohort: "Central Texas Inter-Agency Referrals (Law Enforcement → Victim Services/DA)",
      observationPeriod: "Jan 2026 – Sep 2026",
      triStateBreakdown: { confirmedGap: 14, noGapObserved: 6, unknownInsufficient: 4 },
      classificationCriteria: "Receiving entity provided timestamped acknowledgment or accepted next action within 14 days.",
      sourceProvenance: "Participant Continuity Receipts & Partner Intake Records",
      verificationTier: "AGENCY_ACKNOWLEDGED"
    },
    {
      name: "Continuity Loss Rate",
      observedCount: "17 of 21 cross-boundary transitions",
      sampleSize: "n=21",
      cohort: "Cross-County Relocations & Inter-District Municipal Boundaries",
      observationPeriod: "Jan 2026 – Sep 2026",
      triStateBreakdown: { confirmedGap: 17, noGapObserved: 3, unknownInsufficient: 1 },
      classificationCriteria: "Prior verified protective order or offense history was treated as a first-time isolated incident at new jurisdiction.",
      sourceProvenance: "Participant Case Files & Multi-County Intake Receipts",
      verificationTier: "PARTICIPANT_RECORDED"
    },
    {
      name: "Ownerless Matter Rate",
      observedCount: "9 of 18 multi-agency touchpoints",
      sampleSize: "n=18",
      cohort: "Concurrent CPS / Law Enforcement / District Court Inquiries",
      observationPeriod: "Feb 2026 – Sep 2026",
      triStateBreakdown: { confirmedGap: 9, noGapObserved: 6, unknownInsufficient: 3 },
      classificationCriteria: "Both sending and receiving agency closed active intake with no named institutional role owning the immediate next milestone.",
      sourceProvenance: "Case Declination Notices & Multi-Agency Receipts",
      verificationTier: "PARTNER_ROLE_VERIFIED"
    },
    {
      name: "Referral Loop Rate",
      observedCount: "5 of 19 frontline navigation journeys",
      sampleSize: "n=19",
      cohort: "Emergency Shelter & Civil Protective Order Seekers",
      observationPeriod: "Jan 2026 – Aug 2026",
      triStateBreakdown: { confirmedGap: 5, noGapObserved: 11, unknownInsufficient: 3 },
      classificationCriteria: "Agency A referred to Agency B, which conditioned service on prior action by Agency A, creating circular transit.",
      sourceProvenance: "Navigator Field Logs & Participant Intake Timelines",
      verificationTier: "PARTICIPANT_RECORDED"
    },
    {
      name: "Unreviewed Material Rate",
      observedCount: "11 of 16 administrative closures",
      sampleSize: "n=16",
      cohort: "Administrative Dismissals & Screened-Out Family Inquiries",
      observationPeriod: "Mar 2026 – Sep 2026",
      triStateBreakdown: { confirmedGap: 11, noGapObserved: 3, unknownInsufficient: 2 },
      classificationCriteria: "Specific presented digital/documentary exhibits remained unexamined prior to file archiving without stated cause.",
      sourceProvenance: "Review Trace Logs & Continuity Contact Records",
      verificationTier: "PARTNER_ROLE_VERIFIED"
    },
    {
      name: "Disconnected Related-Matter Rate",
      observedCount: "13 of 15 multi-proceeding cases",
      sampleSize: "n=15",
      cohort: "Concurrent Family Law, Protective Order & CPS Inquiries",
      observationPeriod: "Jan 2026 – Sep 2026",
      triStateBreakdown: { confirmedGap: 13, noGapObserved: 1, unknownInsufficient: 1 },
      classificationCriteria: "Decision-maker was unaware of active related proceeding in adjacent county court or agency division.",
      sourceProvenance: "Court Dockets & Administrative Records",
      verificationTier: "PARTICIPANT_RECORDED"
    },
    {
      name: "Closure With Unresolved Context",
      observedCount: "8 of 14 case terminations",
      sampleSize: "n=14",
      cohort: "Qualifying Domestic Crisis & Safety Filings Closed As 'Resolved'",
      observationPeriod: "Jan 2026 – Sep 2026",
      triStateBreakdown: { confirmedGap: 8, noGapObserved: 4, unknownInsufficient: 2 },
      classificationCriteria: "Administrative file was stamped resolved despite unaddressed jurisdictional safety obstacles.",
      sourceProvenance: "Pre-Closure Trace Audits & Case Records",
      verificationTier: "AGENCY_ACKNOWLEDGED"
    }
  ];

  const gapTaxonomy = [
    { num: "01", name: "Receipt Gap", deck: "Sent ≠ Received", desc: "Originating entity transmitted referral; recipient has no record of intake." },
    { num: "02", name: "Accessibility Gap", deck: "Received ≠ Accessible", desc: "Record resides in agency repository but format/permissions prevent caseworker access." },
    { num: "03", name: "Review Gap", deck: "Accessible ≠ Reviewed", desc: "Record was accessible in the file but unexamined prior to disposition." },
    { num: "04", name: "Handoff Gap", deck: "Unacknowledged Transfer", desc: "Sent referral was never acknowledged, accepted, or declined by destination." },
    { num: "05", name: "Ownership Gap", deck: "Unassigned Responsibility", desc: "Matter stopped between agencies with no assigned role owning the next milestone." },
    { num: "06", name: "Continuity Gap", deck: "Jurisdiction Border Amnesia", desc: "Prior verified history vanished when the person crossed a county or municipal border." },
    { num: "07", name: "Evidence / Material Gap", deck: "Omitted Exhibits", desc: "Key documentary exhibits were presented but omitted from the formal case summary." },
    { num: "08", name: "Closure Gap", deck: "Closed ≠ Resolved", desc: "Administrative dismissal executed without verifying unexamined safety records." },
    { num: "09", name: "Referral Loop", deck: "Circular Runaround (A → B → A)", desc: "Circular referral chain leaving survivor in transit with no agency taking jurisdiction." },
    { num: "10", name: "Jurisdiction Gap", deck: "Contradictory Mandates", desc: "Contradictory agency residency or safety rules creating impossible prerequisites." },
    { num: "11", name: "New-Information Gap", deck: "Inflexible Archiving", desc: "Newly emerging critical evidence cannot be integrated into a previously closed file." },
    { num: "12", name: "Collateral / Source Gap", deck: "Repetition ≠ Corroboration", desc: "Multiple reports derived from a single originating account falsely treated as corroboration." }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none font-sans">
      {/* 1. Header */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              EMPIRICAL SYSTEMS RESEARCH &amp; MEASUREMENT
            </span>
          </div>
          <span className="coord-tick">[INDEX REF: BAD-MAPS-ATLAS-2026]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Bad Maps: Empirical Measurement of Systemic Seams
        </h1>

        <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans font-medium max-w-3xl">
          When people are repeatedly sent into dead routes, circular loops, and contradictory rules, the failure is not individual—it is structural. Bad Maps is the empirical research layer of Maps With Teeth, measuring observable administrative conditions to transform frontline runaround into rigorous policy evidence.
        </p>

        {/* Governing Principle & Question Banner */}
        <div className="p-4 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
            GOVERNING PRINCIPLE &amp; INQUIRY
          </span>
          <p className="text-base sm:text-lg font-serif italic font-bold text-[#1C1D1D]">
            &ldquo;Preserve the human distinction the administrative system accidentally flattened.&rdquo;
          </p>
          <p className="text-xs font-mono text-stone-700">
            <strong>Core Research Question:</strong> &ldquo;How do we know the handoff actually happened?&rdquo;
          </p>
        </div>
      </div>

      {/* 2. Measurement Safeguards & Tri-State Classification Notice */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2">
          <div className="flex items-center gap-2 text-stone-900 font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-[#971F26]" />
            <span>EMPIRICAL MEASUREMENT SAFEGUARDS (n=X)</span>
          </div>
          <span className="text-stone-600 font-bold">[METHODOLOGY SPECIFICATION]</span>
        </div>

        <p className="font-sans text-stone-800 text-xs sm:text-sm leading-relaxed">
          Bad Maps measures observable administrative conditions without presenting pilot data as population-level absolute truth. Gaps describe institutional friction points—causes may include statutory restrictions, resources, jurisdictional boundaries, or system design. <strong>The existence of a gap does not imply individual staff misconduct.</strong>
        </p>

        <div className="grid sm:grid-cols-3 gap-3 pt-2 text-center">
          <div className="p-3 bg-white rounded-lg border border-[#971F26]/40 space-y-1">
            <strong className="text-[#971F26] block text-sm">CONFIRMED GAP</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Verified documentary proof that a handoff, review, or ownership failed.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-[#2D5A3D]/40 space-y-1">
            <strong className="text-[#2D5A3D] block text-sm">NO GAP OBSERVED</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Verifiable continuity record confirms receipt, review, or accepted ownership.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-400 space-y-1">
            <strong className="text-stone-700 block text-sm">UNKNOWN / INSUFFICIENT</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Insufficient record. <em>Unknown is never automatically counted as a failure.</em></span>
          </div>
        </div>
      </section>

      {/* 3. The 7 Empirical Continuity Metrics */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
              EMPIRICAL METRICS
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Observed Continuity Indicators (Sample Datasets)
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            COUNTS &amp; DEFINED COHORTS
          </span>
        </div>

        <div className="space-y-4">
          {empiricalMetrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs font-mono text-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#971F26]">METRIC 0{idx + 1}</span>
                  <span className="text-stone-400">·</span>
                  <span className="font-serif font-bold text-base text-[#1C1D1D] font-sans">{m.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#971F26] text-white rounded font-bold text-[11px]">
                    {m.observedCount} ({m.sampleSize})
                  </span>
                  <span className="px-2 py-0.5 bg-white text-stone-700 border border-stone-300 rounded text-[10px]">
                    {m.verificationTier}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 font-sans text-xs">
                <div className="space-y-1 text-stone-800">
                  <p><strong>Cohort:</strong> {m.cohort}</p>
                  <p><strong>Period:</strong> {m.observationPeriod}</p>
                  <p><strong>Provenance:</strong> {m.sourceProvenance}</p>
                </div>
                <div className="p-3 bg-[#F5F1E8] rounded border border-stone-300 space-y-1">
                  <strong className="font-mono text-[10px] text-[#1C1D1D] uppercase block">CLASSIFICATION CRITERIA:</strong>
                  <p className="text-[11.5px] text-stone-700 leading-relaxed">{m.classificationCriteria}</p>
                  <div className="pt-1 flex gap-3 text-[10px] font-mono text-stone-600 border-t border-stone-300">
                    <span className="text-[#971F26] font-bold">Gaps: {m.triStateBreakdown.confirmedGap}</span>
                    <span className="text-[#2D5A3D] font-bold">No Gap: {m.triStateBreakdown.noGapObserved}</span>
                    <span>Unknown: {m.triStateBreakdown.unknownInsufficient}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete 12-Item Gap Taxonomy */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            The 12-Item System Gap Taxonomy
          </h2>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            STRUCTURAL CLASSIFICATIONS
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gapTaxonomy.map((g) => (
            <div
              key={g.num}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-4 space-y-2 flex flex-col justify-between shadow-2xs hover:border-[#971F26] transition-colors"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-1 font-mono text-[10px]">
                  <span className="font-bold text-[#971F26] uppercase">GAP {g.num}</span>
                  <span className="text-stone-600 font-bold">{g.deck}</span>
                </div>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                  {g.name}
                </h3>
                <p className="text-xs text-stone-800 font-sans leading-relaxed">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Evidentiary Guardrails */}
      <section className="p-6 bg-white border-2 border-[#1C1D1D] rounded-2xl space-y-3">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-2">
          <ShieldAlert className="w-5 h-5 text-[#971F26]" />
          <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
            Ethical &amp; Evidentiary Boundaries for Bad Maps
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
          Bad Maps does <strong>NOT</strong> publish individual survivor records, create public dossiers, identify alleged perpetrators, or calculate automated credibility or risk scores. It evaluates purely structural failure modes: referral loops, contradictory mandates, unowned handoffs, and stale resource claims.
        </p>
      </section>

      {/* 6. Submission Action Banner */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
              Have You Encountered a Dead Route or Referral Loop?
            </h3>
            <p className="text-xs text-stone-700 font-sans">
              Help us document broken institutional handoffs to inform policy and system design.
            </p>
          </div>

          <Link
            href="/feedback"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit a System Gap</span>
          </Link>
        </div>
      </section>

      {/* 7. Navigation Footer */}
      <div className="pt-6 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/"
          className="text-stone-600 hover:text-[#1C1D1D] uppercase font-bold tracking-wider"
        >
          ← Return to Overview
        </Link>
        <Link
          href="/policy"
          className="px-5 py-2.5 bg-[#1C1D1D] hover:bg-black text-white rounded font-bold uppercase tracking-wider"
        >
          Explore Texas Policy Lab →
        </Link>
      </div>
    </div>
  );
}
