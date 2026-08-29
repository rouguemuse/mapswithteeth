import React from "react";
import Link from "next/link";
import { PILOT_CONFIG } from "@/data/pilotBudget";
import { Shield, Building2, DollarSign, ArrowRight, CheckCircle2, FileText, Scale } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-stone-800 pb-6">
        <div className="flex items-center gap-2 text-brand-ruby mb-2">
          <Shield className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            Governance & Funding Framework
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Support Maps With Teeth & Central Texas Pilot
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
          Maps With Teeth is currently an independent public-interest initiative preparing to launch its Central Texas pilot under comprehensive fiscal sponsorship. We believe in radical financial transparency, strict fiduciary oversight, and clear budgeting before accepting institutional or philanthropic contributions.
        </p>
      </div>

      {/* Planned Fiscal Sponsorship Model */}
      <section className="space-y-4 bg-brand-charcoal border border-stone-800 rounded-xl p-6">
        <div className="flex items-center gap-2 text-white">
          <Building2 className="w-5 h-5 text-brand-ruby" />
          <h2 className="text-xl font-serif font-bold">
            Organizational Structure: Fiscally Sponsored Launch
          </h2>
        </div>

        {/* Explicit Tax-Deductibility & Entity Disclosure */}
        <div className="p-3 bg-stone-900 border border-stone-700 rounded-lg text-xs text-stone-300 font-mono space-y-1">
          <strong className="text-amber-400 block uppercase text-[11px]">
            Institutional & Tax Disclosure:
          </strong>
          <p>
            Maps With Teeth is currently an independent public-interest initiative and is not currently a 501(c)(3) tax-exempt organization. Direct contributions made prior to the execution of formal fiscal sponsorship are not currently tax-deductible.
          </p>
        </div>

        <p className="text-xs text-stone-300 leading-relaxed">
          Rather than prematurely establishing an independent 501(c)(3), Maps With Teeth is structured to launch under comprehensive <strong>Fiscal Sponsorship</strong>. This model provides:
        </p>

        <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300 font-mono">
          <div className="p-2.5 bg-stone-900/80 rounded border border-stone-800">
            ✓ 501(c)(3) tax-exempt donation administration
          </div>
          <div className="p-2.5 bg-stone-900/80 rounded border border-stone-800">
            ✓ Independent fiduciary & grant accounting
          </div>
          <div className="p-2.5 bg-stone-900/80 rounded border border-stone-800">
            ✓ Payroll, HR, and legal compliance oversight
          </div>
          <div className="p-2.5 bg-stone-900/80 rounded border border-stone-800">
            ✓ Dual-approval controls for the Survivor Gap Fund
          </div>
        </div>

        <p className="text-[11px] text-stone-400 italic">
          *Notice: We do not process direct credit-card donations on this prototype until our formal fiscal sponsorship agreement is executed. Interested funders, labor funds, and institutional partners are invited to contact us directly.
        </p>
      </section>

      {/* Central Texas 6-Month Pilot Framework */}
      <section className="space-y-6">
        <div className="border-b border-stone-800 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
              PROOF OF CONCEPT
            </span>
            <h2 className="text-xl font-serif font-bold text-white">
              Central Texas 6-Month Pilot (${PILOT_CONFIG.totalTarget.toLocaleString()} Target)
            </h2>
          </div>
          <div className="px-3 py-1 bg-stone-900 border border-stone-700 rounded text-xs font-mono text-stone-300">
            Cohort: ~{PILOT_CONFIG.cohortSize} Participants
          </div>
        </div>

        <p className="text-xs text-stone-300 leading-relaxed">
          Operating in Travis, Williamson, Hays, and Bastrop counties, the 6-month pilot tests hands-on Bridge Navigation paired with our Survivor Gap Fund to demonstrate barrier-removal cost efficiency compared to traditional fragmented systems.
        </p>

        {/* Budget Categories Breakdown */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-300 font-mono">
            Transparent Budget Allocation:
          </h3>

          <div className="space-y-3">
            {PILOT_CONFIG.categories.map((cat) => (
              <div
                key={cat.id}
                className="p-4 bg-brand-charcoal border border-stone-800 rounded-lg space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-white">{cat.name}</span>
                  <div className="text-xs font-mono text-amber-300 font-bold">
                    ${cat.amount.toLocaleString()} ({cat.percentage}%)
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  {cat.description}
                </p>

                <ul className="text-[11px] text-stone-400 space-y-0.5 list-disc list-inside">
                  {cat.deliverables.map((del, i) => (
                    <li key={i}>{del}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funder & Sponsor Contact CTA */}
      <section className="bg-stone-900/80 border border-brand-ruby/50 rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-serif font-bold text-white">
          Interested in Funding or Sponsoring This Work?
        </h2>
        <p className="text-xs text-stone-300 leading-relaxed">
          If you represent a charitable foundation, fiscal sponsor, or philanthropic entity interested in reviewing our detailed project narrative and pilot milestones, please connect through our collaborator portal.
        </p>

        <Link
          href="/build-with-us"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-ruby hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors shadow-md"
        >
          <span>Contact Maps With Teeth / Funder Intake</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
