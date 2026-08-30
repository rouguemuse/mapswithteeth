import React from "react";
import Link from "next/link";
import {
  Scale,
  CheckSquare,
  ShieldCheck,
  Clock,
  Compass,
  FileSearch,
  AlertCircle,
  FileText,
  PhoneCall,
  Calendar,
  HelpCircle,
  Users,
  RefreshCw,
  ArrowRight
} from "lucide-react";

export default function HowWeResearchPage() {
  const tenSteps = [
    {
      num: "01",
      title: "Resource Discovery",
      desc: "Identifying emergency relief programs, obscure statutory rights, and industry benevolence funds through primary public-interest filings, municipal registries, union charters, and field caseworker leads.",
      stamp: "EVIDENCE LEAD",
    },
    {
      num: "02",
      title: "Primary-Source Review",
      desc: "Reviewing original authorizing legal texts: Texas legislative statutes, Texas Administrative Code (TAC), FCC Federal Register orders, IRS internal revenue codes, or formal 501(c)(3) program bylaws.",
      stamp: "STATUTE AUDIT",
    },
    {
      num: "03",
      title: "Eligibility Extraction",
      desc: "Deconstructing exact qualifying thresholds (income percentages vs FPL, employment tenure, industry hours per week, household dependent definitions) rather than accepting marketing summaries.",
      stamp: "CRITERIA DECODED",
    },
    {
      num: "04",
      title: "Barrier Identification",
      desc: "Isolating 'The Catch' for every listing: mandatory advocate referral rules, police report mandates, congregate shelter prerequisites, vendor-only payment constraints, and out-of-pocket deposits.",
      stamp: "FRICTION TAGGED",
    },
    {
      num: "05",
      title: "Geographic Boundary Verification",
      desc: "Verifying exact parcel, municipal, and county service boundaries to eliminate suburban transfer traps and cross-county refusal loops.",
      stamp: "JURISDICTION MAPPED",
    },
    {
      num: "06",
      title: "Direct Agency Verification",
      desc: "Conducting periodic direct inquiries with provider leadership, intake coordinators, and legal advocates to confirm current open intake vs paused intake.",
      stamp: "AGENCY CONFIRMED",
    },
    {
      num: "07",
      title: "Last-Reviewed Timestamping",
      desc: "Every single resource card visibly displays its specific review date (e.g. August 2026). No un-dated or perpetual listings are permitted.",
      stamp: "TIMESTAMPED",
    },
    {
      num: "08",
      title: "Explicit Marking of Unknowns",
      desc: "If funding limits, waitlist durations, or discretionary approval ratios cannot be verified, they are prominently designated as [UNKNOWN / UNCONFIRMED] rather than guessed.",
      stamp: "HONEST GAPS",
    },
    {
      num: "09",
      title: "Community & Caseworker Corrections",
      desc: "Frontline advocates, survivors, and labor representatives submit real-world ground-truth updates when an agency changes intake rules or runs out of funds.",
      stamp: "PEER REVIEWED",
    },
    {
      num: "10",
      title: "Re-Verification & Staleness Cycle",
      desc: "Quarterly automated and manual audit schedules. Listings older than 90 days are flagged; listings older than 180 days are quarantined until re-verified.",
      stamp: "RE-AUDIT CYCLE",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* Investigative Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              INVESTIGATIVE METHODOLOGY & EVIDENCE STANDARD
            </span>
          </div>
          <span className="coord-tick">
            [PROTOCOL: NEWSROOM-STANDARDS-V0]
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          How We Research: Investigative Rigor
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed font-sans">
          Maps With Teeth operates with the evidentiary standards of an investigative newsroom. We do not use automated scrapers, unvetted 211 dumps, or promotional marketing summaries. We map what it actually takes to reach help in the real world.
        </p>
      </div>

      {/* 10-Step Investigative Methodology */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-atlas">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              THE 10-STAGE INVESTIGATION PROTOCOL
            </span>
            <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
              How Each Pathway Is Discovered, Audited, and Monitored
            </h2>
          </div>
          <div className="stamp-verified bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D] text-xs py-1 px-3">
            <strong>10 STAGES OF RIGOR</strong>
          </div>
        </div>

        <div className="space-y-4">
          {tenSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="font-mono font-bold text-lg sm:text-xl text-[#971F26] shrink-0 w-10">
                {step.num}
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
                    {step.title}
                  </h3>
                  <span className="stamp-verified text-[9px] py-0.5 px-2">
                    {step.stamp}
                  </span>
                </div>
                <p className="text-xs text-stone-800 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Tier Verification Levels */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-3">
          <ShieldCheck className="w-5 h-5 text-[#971F26]" />
          <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
            Research Verification Tiers
          </h2>
        </div>

        <p className="text-xs text-stone-700 font-sans">
          Never trust a generic &ldquo;Verified&rdquo; label without knowing what was actually verified. We distinguish among specific evidentiary tiers:
        </p>

        <div className="grid gap-4 sm:grid-cols-2 text-xs font-mono">
          <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
            <span className="stamp-verified text-[10px] py-0.5 mb-1">
              [AGENCY CONFIRMED]
            </span>
            <p className="text-stone-800 font-sans text-xs pt-1">
              Directly confirmed via written communication or interview with program leadership to confirm current budget availability and application criteria.
            </p>
          </div>

          <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
            <span className="stamp-verified text-[10px] py-0.5 mb-1">
              [OFFICIAL SOURCE CHECKED]
            </span>
            <p className="text-stone-800 font-sans text-xs pt-1">
              Verified against Texas Capitol statutes, Texas Administrative Code (TAC), FCC regulations, or IRS official publications.
            </p>
          </div>

          <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-1 shadow-2xs">
            <span className="stamp-verified text-[10px] py-0.5 mb-1">
              [PUBLIC SOURCE CHECKED]
            </span>
            <p className="text-stone-800 font-sans text-xs pt-1">
              Verified against active 501(c)(3) published charters, formal annual reports, and live application intake portals.
            </p>
          </div>

          <div className="p-4 bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg space-y-1 shadow-2xs">
            <span className="stamp-alert text-[10px] py-0.5 mb-1">
              [TEMPORARILY CLOSED]
            </span>
            <p className="text-stone-800 font-sans text-xs pt-1">
              Grantmaking or intake is actively paused (e.g. CERF+ through September 30, 2026), documented with expected reopening target dates.
            </p>
          </div>
        </div>
      </section>

      {/* Staleness Monitoring Thresholds */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-3">
          <Clock className="w-5 h-5 text-[#971F26]" />
          <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
            Staleness Monitoring & Quarantine Thresholds
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 text-xs font-mono">
          <div className="p-3 bg-[#F5F1E8] border border-[#1C1D1D] rounded">
            <strong className="text-emerald-900 block mb-1">● 0–90 DAYS: ACTIVE</strong>
            <p className="text-stone-700 text-[11px] font-sans">Audited within the past quarter. Operating normally.</p>
          </div>
          <div className="p-3 bg-[#FFFDF5] border border-amber-800 rounded">
            <strong className="text-amber-900 block mb-1">● 91–180 DAYS: REVIEW DUE</strong>
            <p className="text-stone-700 text-[11px] font-sans">Scheduled for quarterly re-audit to verify budget availability.</p>
          </div>
          <div className="p-3 bg-[#FDF2F2] border border-[#971F26] rounded">
            <strong className="text-[#971F26] block mb-1">● 180+ DAYS: QUARANTINED</strong>
            <p className="text-stone-700 text-[11px] font-sans">Automatically hidden from search until re-verified.</p>
          </div>
        </div>
      </section>

      {/* Persistent Educational Notice */}
      <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg text-xs text-stone-700 space-y-2 font-mono">
        <strong className="text-[#1C1D1D] block uppercase font-bold text-[11px]">
          [MANDATORY EDUCATIONAL INFORMATION NOTICE]
        </strong>
        <p className="font-sans leading-relaxed text-stone-800">
          The statutory summaries and directory entries on Maps With Teeth are provided for educational and navigational purposes only and do not constitute formal legal advice. Maps With Teeth is an independent public-interest initiative and is not a government agency, legal aid provider, or emergency crisis hotline.
        </p>
      </div>
    </div>
  );
}
