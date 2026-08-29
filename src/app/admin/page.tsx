import React from "react";
import { SAMPLE_DOCKETS } from "@/data/sampleInvestigationDockets";
import { ALL_RESOURCES } from "@/data/resources";
import { TEXAS_STATUTES } from "@/data/texasData";
import {
  FileText,
  Shield,
  Layers,
  AlertCircle,
  CheckCircle2,
  Clock,
  MapPin,
  TrendingDown,
  Database,
} from "lucide-react";

export default function AdminPage() {
  const verifiedCount = ALL_RESOURCES.filter((r) => r.verificationStatus === "VERIFIED CURRENT").length;
  const leadCount = ALL_RESOURCES.filter((r) => r.isLead || r.verificationStatus === "UNVERIFIED LEAD").length;

  const failureReasons = [
    ["NO_FUNDS", "Out of funds / Budget exhausted", "42%"],
    ["SHELTER_STAY_REQUIRED", "Refused aid because survivor won't stay in shelter", "24%"],
    ["POLICE_REPORT_REQUIRED", "Required formal police report survivor didn't have", "18%"],
    ["WAITLIST", "Waitlist longer than 30 days", "11%"],
    ["CIVIL_MATTER_REFUSAL", "Police / agency dismissed dispute as 'civil matter'", "5%"],
  ];

  const pillars = [
    { name: "Legal Protections & Escape Statutes", tx: "100% (Verified)", national: "85%" },
    { name: "Housing Early Lease Break (§ 92.016)", tx: "100% (Verified)", national: "70%" },
    { name: "Utility Deposit Waivers (PUCT § 25.478)", tx: "100% (Verified)", national: "80%" },
    { name: "Crime Victims' Compensation (Up to $5k)", tx: "100% (Verified)", national: "75%" },
    { name: "Industry Hardship Funds (F&B, Music, Arts)", tx: "100% (Active)", national: "100%" },
    { name: "Safe Connections Act Line Separation", tx: "100% (Federal)", national: "100%" },
    { name: "Pet Safe Boarding & Foster Networks", tx: "100% (Verified)", national: "90%" },
    { name: "Taxes & Coerced Debt Relief (IRS IP PIN)", tx: "100% (Federal)", national: "100%" },
    { name: "County Emergency Micro-Aid (Travis/WilCo/Harris)", tx: "100% (Verified)", national: "Queue" },
    { name: "Unemployment Family Violence Exception", tx: "100% (Verified)", national: "65%" },
    { name: "Public School Student Family Resources", tx: "100% (Verified)", national: "80%" },
    { name: "Reconstructive Dental & Medical Repair", tx: "100% (Verified)", national: "95%" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-brand-ruby font-bold block mb-1">
            RESEARCH & RESOURCE INTELLIGENCE DASHBOARD
          </span>
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
            State Coverage & Systemic Failure Tracker
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Internal audit metrics, dead-end taxonomy patterns, and sample Resource Graph investigation dockets.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="px-3 py-1.5 bg-stone-900 border border-emerald-800 text-emerald-300 rounded">
            <strong>{verifiedCount}</strong> Verified Resources
          </div>
          <div className="px-3 py-1.5 bg-stone-900 border border-stone-700 text-stone-300 rounded">
            <strong>{ALL_RESOURCES.length}</strong> Total Records
          </div>
        </div>
      </div>

      {/* 12-Pillar Coverage Matrix */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-brand-ruby" />
            <h2 className="text-xl font-serif font-bold text-white">
              12-Pillar Resource Investigation Matrix
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-400">
            Gold-Standard Benchmark: <strong>Texas Pilot Region</strong>
          </span>
        </div>

        <div className="bg-brand-charcoal border border-stone-800 rounded-xl overflow-hidden shadow-md">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-950 text-stone-400 font-mono uppercase text-[10px] border-b border-stone-800">
              <tr>
                <th className="p-3">Research Pillar</th>
                <th className="p-3">Texas Pilot Depth</th>
                <th className="p-3">Nationwide Library Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800 text-stone-300 font-mono">
              {pillars.map((p, idx) => (
                <tr key={idx} className="hover:bg-stone-900/50">
                  <td className="p-3 font-sans font-medium text-white">{p.name}</td>
                  <td className="p-3 text-emerald-400">{p.tx}</td>
                  <td className="p-3 text-stone-400">{p.national}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Dead End Taxonomy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
          <TrendingDown className="w-5 h-5 text-brand-ruby" />
          <h2 className="text-xl font-serif font-bold text-white">
            Systemic Failure & Dead-End Taxonomy
          </h2>
        </div>
        <p className="text-xs text-stone-300">
          Tracking why traditional referral loops fail in order to refine our Resource Graph and inform future Gap Fund policies:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {failureReasons.map(([code, label, pct], idx) => (
            <div key={idx} className="p-3 bg-brand-charcoal border border-stone-800 rounded-lg space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-ruby font-bold">#{code}</span>
                <span className="text-xs font-mono text-amber-300 font-bold">{pct}</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Sample Resource Graph Dockets */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
          <FileText className="w-5 h-5 text-brand-ruby" />
          <h2 className="text-xl font-serif font-bold text-white">
            Sample Resource Graph Investigation Dockets
          </h2>
        </div>

        <div className="space-y-4">
          {SAMPLE_DOCKETS.map((doc) => (
            <div key={doc.docketId} className="bg-brand-charcoal border border-stone-800 rounded-xl p-5 space-y-4 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-stone-950 border border-stone-700 font-mono text-amber-300 font-bold text-[11px]">
                    {doc.docketId}
                  </span>
                  <span className="text-stone-300 font-bold">{doc.locationSummary}</span>
                </div>
                <span className="text-stone-400 font-mono text-[10px]">
                  Barrier: {doc.primaryBarrierSummary}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-[11px] font-mono uppercase text-stone-400 font-bold mb-1.5">
                    Identified Levers:
                  </h4>
                  <ul className="space-y-1 list-disc list-inside text-stone-300">
                    {doc.resourceLevers.map((l, i) => (
                      <li key={i}>
                        <strong className="text-white">{l.lever}:</strong> {l.whyItMatters}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono uppercase text-stone-400 font-bold mb-1.5">
                    Prioritized Research Pathway:
                  </h4>
                  <ol className="space-y-1 text-stone-300 font-mono text-[11px]">
                    {doc.researchPaths.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
