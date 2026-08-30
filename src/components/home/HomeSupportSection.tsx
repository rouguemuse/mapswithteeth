import React from "react";
import Link from "next/link";
import { Heart, ArrowRight, ShieldCheck, ExternalLink, Info } from "lucide-react";

export function HomeSupportSection() {
  const stripeUrl = process.env.NEXT_PUBLIC_STRIPE_ONETIME_URL;

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 select-none font-sans relative overflow-hidden bg-grid-atlas">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-[#971F26]" />
          <span>INDEPENDENT PUBLIC-INTEREST SUSTAINABILITY</span>
        </span>
        <span className="coord-tick text-stone-700">[DIRECT RESEARCH FUNDING]</span>
      </div>

      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Help fund the paths between the gaps.
        </h2>

        <p className="text-base sm:text-[17px] text-stone-900 leading-relaxed font-sans font-medium">
          Maps With Teeth is being built and pressure-tested as an independent public-interest initiative. Support helps fund resource verification, field research, infrastructure, and the development of tools designed to make fragmented systems easier to navigate.
        </p>
      </div>

      {/* CTA Button & Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/support"
          className="px-7 py-3.5 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm transform hover:-translate-y-0.5 border border-[#7A2026]"
        >
          <span>Support the Work</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {stripeUrl && !stripeUrl.includes("example_") && (
          <a
            href={stripeUrl}
            className="px-6 py-3.5 bg-[#F5F1E8] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-2xs"
          >
            <span>Direct Stripe Checkout</span>
            <ExternalLink className="w-4 h-4 text-stone-700" />
          </a>
        )}
      </div>

      {/* Required Legal and Fiduciary Disclosure */}
      <div className="pt-4 border-t border-[#D9D1C4] space-y-1.5 text-xs text-stone-700 font-mono">
        <div className="flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Maps With Teeth is an independent public-interest initiative in development and is not currently a 501(c)(3). Contributions are not currently tax-deductible unless otherwise stated.
          </p>
        </div>
        <p className="text-[11px] text-stone-600 pl-5.5 italic">
          Contributions support ongoing independent research and open tools. They do not purchase services, guarantee individual assistance, or grant priority access to emergency resources.
        </p>
      </div>
    </section>
  );
}
