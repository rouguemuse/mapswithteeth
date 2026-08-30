import React from "react";
import Link from "next/link";
import { PILOT_CONFIG } from "@/data/pilotBudget";
import { Shield, Building2, DollarSign, ArrowRight, Heart, Info } from "lucide-react";
import { StripeDonationModule } from "@/components/support/StripeDonationModule";
import { SupportInquiryForm } from "@/components/support/SupportInquiryForm";

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14 select-none font-sans">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-[#971F26] mb-1">
          <Heart className="w-5 h-5 text-[#971F26]" />
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-wider uppercase">
            CONTRIBUTIONS & RESEARCH SUSTAINABILITY
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Support the Work
        </h1>
        <p className="text-base sm:text-[17px] text-stone-900 leading-relaxed font-sans font-medium">
          Maps With Teeth is an independent public-interest initiative in development. Support helps fund resource verification, field research, infrastructure, and the development of tools designed to make fragmented systems easier to navigate.
        </p>
      </div>

      {/* Stripe Donation & Sustaining Membership Module */}
      <section>
        <StripeDonationModule />
      </section>

      {/* Planned Fiscal Sponsorship Model & Clear Disclosures */}
      <section className="space-y-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-[#1C1D1D]">
          <Building2 className="w-5 h-5 text-[#971F26]" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold">
            Organizational Structure & Fiduciary Standards
          </h2>
        </div>

        {/* Explicit Tax-Deductibility & Entity Disclosure */}
        <div className="p-4 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg text-xs sm:text-sm text-stone-800 font-mono space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#971F26] uppercase text-xs">
            <Info className="w-4 h-4" />
            <span>Institutional & Tax Disclosure</span>
          </div>
          <p className="font-sans leading-relaxed text-stone-800">
            Maps With Teeth is an independent public-interest initiative in development and is not currently a 501(c)(3). Contributions are not currently tax-deductible unless otherwise stated.
          </p>
          <p className="text-xs font-sans text-stone-600 italic pt-1 border-t border-[#D9D1C4]">
            Contributions do not purchase services, guarantee individual assistance, or grant priority access to emergency resources.
          </p>
        </div>

        <p className="text-sm text-stone-800 leading-relaxed font-sans">
          Rather than prematurely establishing a disconnected bureaucracy, Maps With Teeth is structured to launch under comprehensive <strong>Fiscal Sponsorship</strong>. This model provides:
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-stone-800 font-mono">
          <div className="p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4]">
            ✓ 501(c)(3) tax-exempt donation administration
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4]">
            ✓ Independent fiduciary & grant accounting
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4]">
            ✓ Payroll, HR, and legal compliance oversight
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded border border-[#D9D1C4]">
            ✓ Dual-approval controls for the Survivor Gap Fund
          </div>
        </div>
      </section>

      {/* Central Texas 6-Month Pilot Framework */}
      <section className="space-y-6">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold block">
              PROOF OF CONCEPT
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Central Texas 6-Month Pilot (${PILOT_CONFIG.totalTarget.toLocaleString()} Target)
            </h2>
          </div>
          <div className="px-3 py-1.5 bg-[#EEE8DD] border border-[#1C1D1D] rounded text-xs font-mono text-[#1C1D1D] font-bold shadow-2xs">
            Cohort: ~{PILOT_CONFIG.cohortSize} Participants
          </div>
        </div>

        <p className="text-sm text-stone-800 leading-relaxed font-sans">
          Operating in Travis, Williamson, Hays, and Bastrop counties, the 6-month pilot tests hands-on Bridge Navigation paired with our Survivor Gap Fund to demonstrate barrier-removal cost efficiency compared to traditional fragmented systems.
        </p>

        {/* Budget Categories Breakdown */}
        <div className="space-y-3">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1C1D1D] font-mono">
            Transparent Budget Allocation:
          </h3>

          <div className="space-y-3">
            {PILOT_CONFIG.categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg p-4 space-y-2 shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-sm text-[#1C1D1D] font-serif">
                    {cat.name}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold">
                    <span className="text-[#971F26]">
                      ${cat.amount.toLocaleString()}
                    </span>
                    <span className="text-stone-500">
                      ({cat.percentage}%)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-stone-700 font-sans leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Inquiry Form */}
      <section className="space-y-4">
        <div className="border-b border-[#D9D1C4] pb-3">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            Institutional, Foundation & DAF Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 mt-1 font-sans">
            For institutional foundations, donor-advised funds (DAFs), and corporate matching grants. All inquiries route directly to <strong>hello@mapswithteeth.org</strong>.
          </p>
        </div>
        <SupportInquiryForm />
      </section>
    </div>
  );
}
