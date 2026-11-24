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
  title: "Bad Maps: Systems Research & Seam Measurement",
  description:
    "Deidentified empirical measurement architecture for evaluating recurring dead routes, circular referral loops, unacknowledged handoffs, and 12 institutional seam failures.",
  alternates: {
    canonical: "/bad-maps",
  },
  openGraph: {
    title: "Bad Maps: Empirical Measurement of Institutional Seams | Maps With Teeth",
    description:
      "Deidentified empirical measurement architecture for evaluating recurring dead routes, circular referral loops, unacknowledged handoffs, and 12 institutional seam failures.",
    url: "https://www.mapswithteeth.org/bad-maps",
    siteName: "Maps With Teeth",
    type: "website",
  },
};

interface BadMapsProposedIndicator {
  num: string;
  name: string;
  conceptDeck: string;
  targetCohort: string;
  measurementCondition: string;
  formula: string;
  triStateCriteria: {
    confirmedGap: string;
    noGap: string;
    unknown: string;
  };
  provenanceRequirement: string;
}

export default function BadMapsPage() {
  const proposedIndicators: BadMapsProposedIndicator[] = [
    {
      num: "01",
      name: "Verified Handoff Rate",
      conceptDeck: "Sent ≠ Received / Acknowledged",
      targetCohort: "Cross-Agency Intake Referrals (e.g. Law Enforcement → Victim Services / Legal Aid)",
      measurementCondition: "Determines whether a dispatched referral received timestamped intake confirmation or milestone acceptance from the receiving entity.",
      formula: "Acknowledged Referrals ÷ Total Observable Referrals",
      triStateCriteria: {
        confirmedGap: "Sending entity marked file 'referred out' while receiving entity confirms no intake record exists.",
        noGap: "Receiving entity recorded timestamped receipt and accepted or formally redirected the intake.",
        unknown: "Transfer outcome unrecorded in one or both systems (never classified as failure)."
      },
      provenanceRequirement: "Matched sending transmission log and receiving intake docket."
    },
    {
      num: "02",
      name: "Continuity Loss Rate",
      conceptDeck: "County Line & Jurisdictional Amnesia",
      targetCohort: "Cross-Jurisdiction Transitions (Relocations across municipal/county boundaries)",
      measurementCondition: "Evaluates whether documented protective orders, active bail conditions, or stalking history carried into the new jurisdiction's initial case file.",
      formula: "Transitions With Preserved Safety History ÷ Total Observable Transitions",
      triStateCriteria: {
        confirmedGap: "Prior verified protective order or offense history was treated as a first-time isolated incident.",
        noGap: "Receiving jurisdiction formally recorded and acknowledged prior cross-county orders or records.",
        unknown: "Prior record status was not inquired into or cannot be verified."
      },
      provenanceRequirement: "Prior certified order/intake record and subsequent agency initial encounter log."
    },
    {
      num: "03",
      name: "Ownerless Matter Rate",
      conceptDeck: "Unassigned Responsibility Handoffs",
      targetCohort: "Multi-Agency Inquiries (Concurrent Child Safety / Civil Court / Law Enforcement)",
      measurementCondition: "Detects transitions where an active matter closed without an explicit, named institutional role assigned to the immediate next action.",
      formula: "Matters With Assigned Next Milestone ÷ Total Inter-Agency Transitions",
      triStateCriteria: {
        confirmedGap: "Both sending and receiving entity closed active intake with no named institutional role owning the next milestone.",
        noGap: "Explicit decision ownership transferred to a named unit and role with an acknowledged completion window.",
        unknown: "Internal delegation notes unavailable for administrative audit."
      },
      provenanceRequirement: "Formal declination notices, transfer logs, and agency closure metadata."
    },
    {
      num: "04",
      name: "Referral Loop Rate",
      conceptDeck: "Circular Transit (Agency A → Agency B → Agency A)",
      targetCohort: "Frontline Crisis Navigation (Emergency Shelter & Civil Protective Order Seekers)",
      measurementCondition: "Measures paths where an individual is redirected back to the originating agency due to conflicting intake prerequisites.",
      formula: "Circular Loops Detected ÷ Total Navigation Pathways Evaluated",
      triStateCriteria: {
        confirmedGap: "Agency A required action from Agency B, while Agency B conditioned assistance on prior action by Agency A.",
        noGap: "Handoff followed a forward linear path to intake, referral acceptance, or clear written declination.",
        unknown: "Sequential timeline of agency contacts cannot be reconstructed."
      },
      provenanceRequirement: "Timestamped intake receipts and navigator case logs."
    },
    {
      num: "05",
      name: "Unreviewed Material Rate",
      conceptDeck: "Accessible ≠ Reviewed",
      targetCohort: "Administrative Closures & Screened-Out Crisis Inquiries",
      measurementCondition: "Audits the frequency with which documentary or digital exhibits submitted by participants remain unexamined prior to case archiving.",
      formula: "Cases With Documented Material Review ÷ Total Closures With Submitted Materials",
      triStateCriteria: {
        confirmedGap: "Specific presented exhibits remained unopened or unexamined in file prior to closure without stated justification.",
        noGap: "Review Trace confirms each presented item was examined, determined outside authority, or noted unavailable.",
        unknown: "Intake record does not itemize materials presented by the participant."
      },
      provenanceRequirement: "Participant-held Continuity Contact Record compared against agency administrative closure file."
    },
    {
      num: "06",
      name: "Disconnected Related-Matter Rate",
      conceptDeck: "Parallel Blind Proceedings",
      targetCohort: "Concurrent Legal & Administrative Matters (Family Law, CPS, Protective Orders)",
      measurementCondition: "Documents how often decision-makers act without administrative awareness of active related proceedings in adjacent divisions.",
      formula: "Proceedings With Linked-Matter Check ÷ Total Multi-Proceeding Matters",
      triStateCriteria: {
        confirmedGap: "Custody or safety order issued without knowledge of an active protective order proceeding in adjacent court.",
        noGap: "Authorized related-matter inquiry was executed and noted in the administrative file.",
        unknown: "Cross-system search status was not logged."
      },
      provenanceRequirement: "Public court dockets, protective order registries, and administrative records."
    },
    {
      num: "07",
      name: "Closure With Unresolved Context",
      conceptDeck: "Closed ≠ Resolved",
      targetCohort: "Administrative Dismissals of Qualifying Safety Inquiries",
      measurementCondition: "Measures whether cases are archived as administratively complete while known safety obstacles or unaddressed files remain pending.",
      formula: "Closures With Pre-Closure Audit ÷ Total Administrative Dismissals",
      triStateCriteria: {
        confirmedGap: "File closed without examining pending cross-jurisdiction records or establishing a safe next route.",
        noGap: "Pre-closure audit documented process completeness and verified unexamined records before archiving.",
        unknown: "Closure rationale does not detail whether collateral records were checked."
      },
      provenanceRequirement: "Administrative closure checklist and case audit files."
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 select-none font-sans">
      {/* 1. Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              SYSTEMS RESEARCH &amp; SEAM MEASUREMENT
            </span>
          </div>
          <span className="coord-tick">[INDEX REF: BAD-MAPS-ATLAS-2026]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Bad Maps: Empirical Measurement of Institutional Seams
        </h1>

        <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans font-medium max-w-3xl">
          When people are repeatedly sent into dead routes, circular loops, and contradictory rules, the failure is not individual—it is structural. Bad Maps is the systems research layer of Maps With Teeth, defining observable administrative conditions to transform frontline runaround into rigorous policy evidence.
        </p>

        {/* Governing Principle & Question Banner + Quick Action Bar (GOV.UK Left-Rule Callout) */}
        <div className="mwt-callout-urgent flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
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
          <div className="flex flex-wrap items-center gap-2 shrink-0 font-mono text-xs">
            <a
              href="#gap-taxonomy"
              className="px-3 py-2 bg-[#F5F1E8] hover:bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded font-bold uppercase"
            >
              12 Gap Taxonomy ↓
            </a>
            <Link
              href="/feedback"
              className="px-3.5 py-2 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-bold uppercase flex items-center gap-1.5"
            >
              <Send className="w-3 h-3" />
              <span>Submit System Gap</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Measurement Safeguards & Tri-State Classification Notice (De-Weighted Left-Rule Callout) */}
      <section className="mwt-callout-ink space-y-4 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300/70 pb-2">
          <div className="flex items-center gap-2 text-stone-900 font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-[#971F26]" />
            <span>EMPIRICAL MEASUREMENT SAFEGUARDS</span>
          </div>
          <span className="text-stone-600 font-bold">[METHODOLOGY SPECIFICATION]</span>
        </div>

        <p className="font-sans text-stone-800 text-xs sm:text-sm leading-relaxed">
          Bad Maps defines measurable administrative conditions without presenting preliminary pilot concepts as population-level totals. Gaps describe observable institutional friction points—causes may include statutory restrictions, resources, jurisdictional boundaries, or system design. <strong>The existence of a gap does not imply individual staff misconduct.</strong>
        </p>

        <div className="grid sm:grid-cols-3 gap-3 pt-1 text-left">
          <div className="pl-3 py-1.5 border-l-2 border-[#971F26] bg-white/70 space-y-0.5">
            <strong className="text-[#971F26] block text-xs">CONFIRMED GAP</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Verified documentary proof that a handoff, review, or ownership failed.</span>
          </div>
          <div className="pl-3 py-1.5 border-l-2 border-[#2D5A3D] bg-white/70 space-y-0.5">
            <strong className="text-[#2D5A3D] block text-xs">NO GAP OBSERVED</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Verifiable continuity record confirms receipt, review, or accepted ownership.</span>
          </div>
          <div className="pl-3 py-1.5 border-l-2 border-stone-500 bg-white/70 space-y-0.5">
            <strong className="text-stone-700 block text-xs">UNKNOWN / INSUFFICIENT</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Insufficient record. <em>Unknown is never automatically counted as a failure.</em></span>
          </div>
        </div>
      </section>

      {/* 3. The 7 Proposed Continuity Measurement Indicators */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider block">
              RESEARCH ARCHITECTURE
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Seven Proposed Continuity Measurement Indicators
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            PROPOSED PILOT SPECIFICATIONS
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
          The indicators below are proposed measurement protocols designed for evaluation in upcoming Central Texas pilot trials. Each indicator requires a documented denominator, defined cohort, observation window, and verified source provenance.
        </p>

        <div className="space-y-3.5">
          {proposedIndicators.map((m, idx) => (
            <div
              key={m.num}
              className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-4 sm:p-5 space-y-3 shadow-2xs font-mono text-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#971F26]">INDICATOR {m.num}</span>
                  <span className="text-stone-400">·</span>
                  <span className="font-serif font-bold text-base text-[#1C1D1D] font-sans">{m.name}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 bg-stone-200 text-stone-800 rounded font-bold text-[10px] border border-stone-400 uppercase">
                    PROPOSED SPECIFICATION
                  </span>
                  <span className="text-xs text-stone-600 italic font-sans font-medium">
                    &ldquo;{m.conceptDeck}&rdquo;
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 font-sans text-xs text-stone-800">
                <p><strong>Target Cohort:</strong> {m.targetCohort}</p>
                <p><strong>Measurement Condition:</strong> {m.measurementCondition}</p>
                <p className="font-mono text-[11px] bg-[#F5F1E8] p-2 rounded border border-stone-300">
                  <strong>Formula:</strong> {m.formula}
                </p>
              </div>

              <details open={idx === 0} className="group border border-stone-300 rounded-lg bg-[#F5F1E8]">
                <summary className="cursor-pointer font-mono font-bold text-[11px] px-3.5 py-2.5 select-none flex items-center justify-between text-stone-900 hover:text-[#971F26]">
                  <span>Tri-State Classification Rules &amp; Provenance Requirement</span>
                  <span className="text-[10px] uppercase text-stone-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-3.5 pb-3.5 pt-2 border-t border-stone-200 space-y-2 font-sans text-[11.5px]">
                  <ul className="space-y-1.5 text-stone-700">
                    <li>
                      <span className="font-bold text-[#971F26] font-mono text-[10px] uppercase">Confirmed Gap:</span> {m.triStateCriteria.confirmedGap}
                    </li>
                    <li>
                      <span className="font-bold text-[#2D5A3D] font-mono text-[10px] uppercase">No Gap:</span> {m.triStateCriteria.noGap}
                    </li>
                    <li>
                      <span className="font-bold text-stone-600 font-mono text-[10px] uppercase">Unknown:</span> {m.triStateCriteria.unknown}
                    </li>
                  </ul>
                  <p className="pt-1 border-t border-stone-200 text-stone-800">
                    <strong>Provenance Requirement:</strong> {m.provenanceRequirement}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete 12-Item Gap Taxonomy */}
      <section id="gap-taxonomy" className="space-y-5 scroll-mt-36 lg:scroll-mt-28">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            The 12-Item System Gap Taxonomy
          </h2>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            STRUCTURAL CLASSIFICATIONS
          </span>
        </div>

        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-3 gap-3">
          {gapTaxonomy.map((g) => (
            <div
              key={g.num}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-3.5 space-y-1.5 flex flex-col justify-between shadow-2xs hover:border-[#971F26] transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-1 font-mono text-[10px]">
                  <span className="font-bold text-[#971F26] uppercase">GAP {g.num}</span>
                  <span className="text-stone-600 font-bold truncate ml-1">{g.deck}</span>
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D] leading-snug">
                  {g.name}
                </h3>
                <p className="text-[11.5px] sm:text-xs text-stone-800 font-sans leading-snug">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Evidentiary Guardrails (GOV.UK Left-Rule Editorial Callout) */}
      <section className="mwt-callout-urgent space-y-2">
        <div className="flex items-center gap-2.5">
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
