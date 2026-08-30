import React from "react";
import { SAMPLE_DOCKETS } from "@/data/sampleInvestigationDockets";
import { ALL_RESOURCES, PUBLIC_RESOURCES } from "@/data/resources";
import {
  FileText,
  TrendingDown,
  Database,
  ShieldCheck,
  Scale,
  FileCheck,
  AlertCircle
} from "lucide-react";

export default function AdminPage() {
  const agencyConfirmedCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "AGENCY_CONFIRMED").length;
  const officialSourceCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "OFFICIAL_SOURCE_CHECKED").length;
  const publicSourceCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "PUBLIC_SOURCE_CHECKED").length;
  const tempClosedCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "TEMPORARILY_CLOSED").length;
  const needsReverificationCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "NEEDS_REVERIFICATION").length;
  const closedCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "CLOSED").length;

  const failureReasons = [
    ["NO_FUNDS", "Out of funds / Budget exhausted", "42%"],
    ["SHELTER_STAY_REQUIRED", "Refused aid because survivor won't stay in shelter", "24%"],
    ["POLICE_REPORT_REQUIRED", "Required formal police report survivor didn't have", "18%"],
    ["WAITLIST", "Waitlist longer than 30 days", "11%"],
    ["CIVIL_MATTER_REFUSAL", "Police / agency dismissed dispute as 'civil matter'", "5%"],
  ];

  const pillars = [
    { name: "Legal Protections & Escape Statutes", status: "Official Source Checked", tier: "State Law" },
    { name: "Housing Early Lease Break (§ 92.016)", status: "Official Source Checked", tier: "Statutory Right" },
    { name: "Utility Deposit Waivers (PUCT § 25.478)", status: "Official Source Checked", tier: "PUCT Rule" },
    { name: "Crime Victims' Compensation (Up to $5k)", status: "Official Source Checked", tier: "OAG Program" },
    { name: "Industry Hardship Funds (F&B, Music, Arts)", status: "Public Source Checked", tier: "501(c)(3)" },
    { name: "Safe Connections Act Line Separation", status: "Official Source Checked", tier: "Federal 47 U.S.C." },
    { name: "Pet Safe Boarding & Foster Networks", status: "Public Source Checked", tier: "501(c)(3)" },
    { name: "Taxes & Coerced Debt Relief (IRS IP PIN / § 6015)", status: "Official Source Checked", tier: "IRC Code" },
    { name: "County Emergency Micro-Aid (Travis/WilCo/Harris)", status: "Public Source Checked", tier: "County/Local" },
    { name: "Unemployment Family Violence Exception", status: "Official Source Checked", tier: "Labor Code" },
    { name: "Crisis Shelter & Legal Representation", status: "Agency Confirmed", tier: "Direct Provider" },
    { name: "Reconstructive Dental Repair (Give Back a Smile)", status: "Public Source Checked", tier: "Foundation" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header */}
      <div className="border-b border-brand-sand pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-brand-oxblood font-bold block mb-1">
            RESEARCH & RESOURCE INTELLIGENCE DASHBOARD
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
            Verification Tiers & Systemic Failure Tracker
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Internal audit metrics, verification state breakdown, and sample Resource Graph investigation dockets.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-1.5 bg-brand-paper border border-stone-300 text-brand-charcoal font-bold rounded shadow-sm">
            <strong>{PUBLIC_RESOURCES.length}</strong> Public Demonstration Resources
          </div>
          <div className="px-3 py-1.5 bg-brand-paper border border-stone-300 text-stone-600 rounded shadow-sm">
            <strong>{ALL_RESOURCES.length}</strong> Total Records Audited
          </div>
        </div>
      </div>

      {/* Verification Tier Breakdown Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-brand-paper border border-emerald-300 rounded-xl p-4 shadow-sm space-y-1">
          <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agency Confirmed</span>
          </span>
          <p className="text-2xl font-serif font-bold text-brand-charcoal">{agencyConfirmedCount}</p>
          <p className="text-[11px] text-stone-600 font-sans">Directly confirmed with shelter/advocate leadership</p>
        </div>

        <div className="bg-brand-paper border border-blue-200 rounded-xl p-4 shadow-sm space-y-1">
          <span className="text-[10px] font-mono uppercase text-blue-900 font-bold flex items-center gap-1">
            <Scale className="w-3.5 h-3.5 text-blue-700" />
            <span>Official Source Checked</span>
          </span>
          <p className="text-2xl font-serif font-bold text-brand-charcoal">{officialSourceCount}</p>
          <p className="text-[11px] text-stone-600 font-sans">Verified against statutes, PUCT rules, OAG, FCC, IRS</p>
        </div>

        <div className="bg-brand-paper border border-stone-300 rounded-xl p-4 shadow-sm space-y-1">
          <span className="text-[10px] font-mono uppercase text-stone-700 font-bold flex items-center gap-1">
            <FileCheck className="w-3.5 h-3.5 text-stone-600" />
            <span>Public Source Checked</span>
          </span>
          <p className="text-2xl font-serif font-bold text-brand-charcoal">{publicSourceCount}</p>
          <p className="text-[11px] text-stone-600 font-sans">Verified against published 501(c)(3) program standards</p>
        </div>

        <div className="bg-brand-paper border border-red-300 rounded-xl p-4 shadow-sm space-y-1">
          <span className="text-[10px] font-mono uppercase text-brand-oxblood font-bold flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-brand-oxblood" />
            <span>Temporarily Closed</span>
          </span>
          <p className="text-2xl font-serif font-bold text-brand-charcoal">{tempClosedCount}</p>
          <p className="text-[11px] text-stone-600 font-sans">Grantmaking paused (e.g. CERF+ thru Sept 30, 2026)</p>
        </div>
      </div>

      {/* Verification Pillar Matrix */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-brand-sand pb-3">
          <Database className="w-5 h-5 text-brand-oxblood" />
          <h2 className="text-xl font-serif font-bold text-brand-charcoal">
            Standard Demonstration Set Breakdown
          </h2>
        </div>

        <div className="bg-brand-paper border border-brand-sand rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-brand-ivory border-b border-brand-sand text-stone-700 uppercase">
                <tr>
                  <th className="p-3">Resource Domain / Category</th>
                  <th className="p-3">Verification Tier</th>
                  <th className="p-3">Governance / Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-sand">
                {pillars.map((p, idx) => (
                  <tr key={idx} className="hover:bg-brand-ivory/50 transition-colors">
                    <td className="p-3 font-medium text-brand-charcoal font-sans">{p.name}</td>
                    <td className="p-3 font-mono text-emerald-800 font-bold">{p.status}</td>
                    <td className="p-3 text-stone-600">{p.tier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dead-End Failure Taxonomy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-brand-sand pb-3">
          <TrendingDown className="w-5 h-5 text-brand-oxblood" />
          <h2 className="text-xl font-serif font-bold text-brand-charcoal">
            Primary Structural Dead-Ends Encountered by Survivors
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {failureReasons.map(([code, label, pct], idx) => (
            <div key={idx} className="bg-brand-paper border border-brand-sand rounded-xl p-4 space-y-1.5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-oxblood font-bold">{code}</span>
                <span className="text-xs font-bold text-stone-700 font-mono">{pct}</span>
              </div>
              <p className="text-xs text-brand-charcoal font-medium font-sans">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Investigation Dockets */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-brand-sand pb-3">
          <FileText className="w-5 h-5 text-brand-oxblood" />
          <h2 className="text-xl font-serif font-bold text-brand-charcoal">
            Sample Research Graph Investigation Dockets
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SAMPLE_DOCKETS.map((docket) => (
            <div
              key={docket.docketId}
              className="bg-brand-paper border border-brand-sand rounded-xl p-6 space-y-4 shadow-sm hover:border-stone-400 transition-all"
            >
              <div className="border-b border-brand-sand pb-3">
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                  Docket #{docket.docketId} · {docket.locationSummary}
                </span>
                <h3 className="text-base font-bold font-serif text-brand-charcoal mt-1">{docket.primaryBarrierSummary}</h3>
                <p className="text-xs text-stone-600 font-mono mt-1">Requested Scale: {docket.requestedAmount}</p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-brand-oxblood uppercase tracking-wider font-bold block">
                  Reported Institutional Failures & Exhausted Channels:
                </span>
                <ul className="space-y-1 text-xs text-stone-700 font-sans">
                  {docket.exhaustedPathways.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-oxblood font-bold">•</span>
                      <span><strong>{f.channel}:</strong> {f.note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-brand-ivory border border-stone-300 rounded-lg text-xs space-y-1 font-sans">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                  Recommended Alternate Action Steps:
                </span>
                <ul className="space-y-1 text-stone-800 font-sans">
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
