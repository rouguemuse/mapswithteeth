import React from "react";
import { SAMPLE_DOCKETS } from "@/data/sampleInvestigationDockets";
import { ALL_RESOURCES, PUBLIC_RESOURCES } from "@/data/resources";
import { MasterReconciliationLedger } from "@/components/admin/MasterReconciliationLedger";
import {
  FileText,
  TrendingDown,
  Database,
  ShieldCheck,
  Scale,
  FileCheck,
  AlertCircle,
  Compass
} from "lucide-react";

export default function AdminPage() {
  const agencyConfirmedCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "AGENCY_CONFIRMED").length;
  const officialSourceCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "OFFICIAL_SOURCE_CHECKED").length;
  const publicSourceCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "PUBLIC_SOURCE_CHECKED").length;
  const tempClosedCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "TEMPORARILY_CLOSED").length;

  const failureReasons = [
    ["NO_FUNDS", "Out of funds / Budget exhausted", "42%"],
    ["SHELTER_STAY_REQUIRED", "Refused aid because survivor won't stay in shelter", "24%"],
    ["POLICE_REPORT_REQUIRED", "Required formal police report survivor didn't have", "18%"],
    ["WAITLIST", "Waitlist longer than 30 days", "11%"],
    ["CIVIL_MATTER_REFUSAL", "Police / agency dismissed dispute as 'civil matter'", "5%"],
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 font-sans select-none">
      {/* 1. Master Research Reconciliation Ledger (Inventory Control) */}
      <section>
        <MasterReconciliationLedger />
      </section>

      {/* 2. Verification Tier Breakdown Stats */}
      <section className="space-y-6 pt-6 border-t-2 border-[#1C1D1D]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D1C4] pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold block mb-1">
              DEMONSTRATION SET BREAKDOWN
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#1C1D1D] tracking-tight">
              Active Resource Graph Telemetry
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <div className="px-3 py-1.5 bg-[#EEE8DD] border border-[#1C1D1D] text-[#1C1D1D] font-bold rounded shadow-2xs">
              <strong>{PUBLIC_RESOURCES.length}</strong> Public Demonstration Resources
            </div>
            <div className="px-3 py-1.5 bg-[#EEE8DD] border border-[#1C1D1D] text-stone-700 rounded shadow-2xs">
              <strong>{ALL_RESOURCES.length}</strong> Total Records Audited
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#EEE8DD] border-2 border-emerald-700 rounded-xl p-4 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Directly Confirmed</span>
            </span>
            <p className="text-2xl font-serif font-bold text-[#1C1D1D]">{agencyConfirmedCount}</p>
            <p className="text-[11px] text-stone-700 font-sans">Directly confirmed with provider leadership</p>
          </div>

          <div className="bg-[#EEE8DD] border-2 border-blue-700 rounded-xl p-4 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono uppercase text-blue-900 font-bold flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-blue-700" />
              <span>Primary Source Verified</span>
            </span>
            <p className="text-2xl font-serif font-bold text-[#1C1D1D]">{officialSourceCount}</p>
            <p className="text-[11px] text-stone-700 font-sans">Verified against statutes, TAC, PUCT, FCC, IRS</p>
          </div>

          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-4 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono uppercase text-stone-800 font-bold flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5 text-stone-700" />
              <span>Public Source Checked</span>
            </span>
            <p className="text-2xl font-serif font-bold text-[#1C1D1D]">{publicSourceCount}</p>
            <p className="text-[11px] text-stone-700 font-sans">Verified against active 501(c)(3) program standards</p>
          </div>

          <div className="bg-[#EEE8DD] border-2 border-[#971F26] rounded-xl p-4 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#971F26] font-bold flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-[#971F26]" />
              <span>Temporarily Closed</span>
            </span>
            <p className="text-2xl font-serif font-bold text-[#1C1D1D]">{tempClosedCount}</p>
            <p className="text-[11px] text-stone-700 font-sans">Grantmaking paused (e.g. CERF+ thru Sept 30, 2026)</p>
          </div>
        </div>
      </section>

      {/* 3. Dead-End Failure Taxonomy */}
      <section className="space-y-4 pt-6 border-t border-[#D9D1C4]">
        <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-3">
          <TrendingDown className="w-5 h-5 text-[#971F26]" />
          <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
            Primary Structural Dead-Ends Encountered by Survivors
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {failureReasons.map(([code, label, pct], idx) => (
            <div key={idx} className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-4 space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#971F26] font-bold">{code}</span>
                <span className="text-xs font-bold text-stone-800 font-mono">{pct}</span>
              </div>
              <p className="text-xs text-[#1C1D1D] font-medium font-sans">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sample Investigation Dockets */}
      <section className="space-y-4 pt-6 border-t border-[#D9D1C4]">
        <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-3">
          <FileText className="w-5 h-5 text-[#971F26]" />
          <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
            Sample Research Graph Investigation Dockets
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SAMPLE_DOCKETS.map((docket) => (
            <div
              key={docket.docketId}
              className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 space-y-4 shadow-sm hover:border-[#971F26] transition-all"
            >
              <div className="border-b border-[#D9D1C4] pb-3">
                <span className="text-[10px] font-mono text-stone-600 uppercase tracking-wider block">
                  Docket #{docket.docketId} · {docket.locationSummary}
                </span>
                <h3 className="text-base font-bold font-serif text-[#1C1D1D] mt-1">{docket.primaryBarrierSummary}</h3>
                <p className="text-xs text-stone-700 font-mono mt-1">Requested Scale: {docket.requestedAmount}</p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#971F26] uppercase tracking-wider font-bold block">
                  Reported Institutional Failures & Exhausted Channels:
                </span>
                <ul className="space-y-1 text-xs text-stone-800 font-sans">
                  {docket.exhaustedPathways.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#971F26] font-bold">•</span>
                      <span><strong>{f.channel}:</strong> {f.note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg text-xs space-y-1 font-sans">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-900 font-bold block">
                  Recommended Alternate Action Steps:
                </span>
                <ul className="space-y-1 text-stone-900 font-sans">
                  {docket.researchPaths.slice(0, 3).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
