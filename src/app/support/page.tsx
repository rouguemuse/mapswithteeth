import React from "react";
import Link from "next/link";
import { PILOT_CONFIG } from "@/data/pilotBudget";
import { Shield, Building2, DollarSign, ArrowRight } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-brand-sand pb-6">
        <div className="flex items-center gap-2 text-brand-oxblood mb-2">
          <Shield className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            Governance & Funding Framework
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
          Support Maps With Teeth & Central Texas Pilot
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
          Maps With Teeth is currently an independent public-interest initiative preparing to launch its Central Texas pilot under comprehensive fiscal sponsorship. We believe in radical financial transparency, strict fiduciary oversight, and clear budgeting before accepting institutional or philanthropic contributions.
        </p>
      </div>

      {/* Planned Fiscal Sponsorship Model */}
      <section className="space-y-4 bg-brand-paper border border-brand-sand rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-brand-charcoal">
          <Building2 className="w-5 h-5 text-brand-oxblood" />
          <h2 className="text-xl font-serif font-bold">
            Organizational Structure: Fiscally Sponsored Launch
          </h2>
        </div>

        {/* Explicit Tax-Deductibility & Entity Disclosure */}
        <div className="p-3.5 bg-brand-ivory border border-stone-300 rounded-lg text-xs text-stone-700 font-mono space-y-1 shadow-sm">
          <strong className="text-amber-900 block uppercase text-[11px] font-bold">
            Institutional & Tax Disclosure:
          </strong>
          <p>
            Maps With Teeth is currently an independent public-interest initiative and is not currently a 501(c)(3) tax-exempt organization. Direct contributions made prior to the execution of formal fiscal sponsorship are not currently tax-deductible.
          </p>
        </div>

        <p className="text-xs text-stone-700 leading-relaxed font-sans">
          Rather than prematurely establishing an independent 501(c)(3), Maps With Teeth is structured to launch under comprehensive <strong>Fiscal Sponsorship</strong>. This model provides:
        </p>

        <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-800 font-mono">
          <div className="p-2.5 bg-brand-ivory rounded border border-brand-sand">
            ✓ 501(c)(3) tax-exempt donation administration
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-brand-sand">
            ✓ Independent fiduciary & grant accounting
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-brand-sand">
            ✓ Payroll, HR, and legal compliance oversight
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-brand-sand">
            ✓ Dual-approval controls for the Survivor Gap Fund
          </div>
        </div>

        <p className="text-[11px] text-stone-500 italic font-mono">
          *Notice: We do not process direct credit-card donations on this prototype until our formal fiscal sponsorship agreement is executed. Interested funders, labor funds, and institutional partners are invited to contact us directly.
        </p>
      </section>

      {/* Central Texas 6-Month Pilot Framework */}
      <section className="space-y-6">
        <div className="border-b border-brand-sand pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
              PROOF OF CONCEPT
            </span>
            <h2 className="text-xl font-serif font-bold text-brand-charcoal">
              Central Texas 6-Month Pilot (${PILOT_CONFIG.totalTarget.toLocaleString()} Target)
            </h2>
          </div>
          <div className="px-3 py-1 bg-brand-paper border border-stone-300 rounded text-xs font-mono text-brand-charcoal font-bold shadow-sm">
            Cohort: ~{PILOT_CONFIG.cohortSize} Participants
          </div>
        </div>

        <p className="text-xs text-stone-700 leading-relaxed font-sans">
          Operating in Travis, Williamson, Hays, and Bastrop counties, the 6-month pilot tests hands-on Bridge Navigation paired with our Survivor Gap Fund to demonstrate barrier-removal cost efficiency compared to traditional fragmented systems.
        </p>

        {/* Budget Categories Breakdown */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal font-mono">
            Transparent Budget Allocation:
          </h3>

          <div className="space-y-3">
            {PILOT_CONFIG.categories.map((cat) => (
              <div
                key={cat.id}
                className="p-4 bg-brand-paper border border-brand-sand rounded-xl space-y-2 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-brand-charcoal font-serif">{cat.name}</span>
                  <div className="text-xs font-mono text-amber-900 font-bold">
                    ${cat.amount.toLocaleString()} ({cat.percentage}%)
                  </div>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  {cat.description}
                </p>

                <ul className="text-[11px] text-stone-600 space-y-0.5 list-disc list-inside font-sans">
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
      <section className="bg-brand-paper border border-brand-sand rounded-xl p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-serif font-bold text-brand-charcoal">
          Interested in Funding or Sponsoring This Work?
        </h2>
        <p className="text-xs text-stone-700 leading-relaxed font-sans">
          If you represent a charitable foundation, fiscal sponsor, or philanthropic entity interested in reviewing our detailed project narrative and pilot milestones, please connect through our collaborator portal.
        </p>

        <Link
          href="/build-with-us"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold font-mono uppercase tracking-wider transition-colors shadow-sm"
        >
          <span>Contact Maps With Teeth / Funder Intake</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
