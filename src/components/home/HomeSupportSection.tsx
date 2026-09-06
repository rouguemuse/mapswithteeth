import React from "react";
import Link from "next/link";
import { Heart, ArrowRight, ShieldCheck, ExternalLink, Info } from "lucide-react";

export function HomeSupportSection() {
  const stripeUrl = process.env.NEXT_PUBLIC_STRIPE_ONETIME_URL || "https://donate.stripe.com/6oU14p4Ar4aY5mSazz9oc00";

  return (
    <section className="bg-[#EEE8DD] border border-[#D9D1C4] rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 select-none font-sans relative overflow-hidden bg-grid-atlas">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-[#971F26]" />
          <span>CHAPTER 05 · RESEARCH SUSTAINABILITY</span>
        </span>
        <span className="coord-tick text-stone-600">[DIRECT RESEARCH FUNDING]</span>
      </div>

      <div className="max-w-3xl space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#26221F] tracking-tight leading-tight">
          Help fund the paths between the gaps.
        </h2>

        <p className="text-base sm:text-[17px] text-stone-800 leading-relaxed font-sans font-normal">
          Maps With Teeth is being built and pressure-tested as an independent public-interest initiative. Support helps fund primary-source resource verification, field research across Texas counties, digital infrastructure, and tools designed to make fragmented systems easier to navigate.
        </p>
      </div>

      {/* CTA Button & Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/support"
          className="px-7 py-3.5 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-2xs"
        >
          <span>Support the Work</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {stripeUrl && !stripeUrl.includes("example_") && (
          <a
            href={stripeUrl}
            className="px-6 py-3.5 bg-[#FAF7F2] hover:bg-white border border-[#D9D1C4] text-[#26221F] rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-2xs"
          >
            <span>Direct Stripe Checkout</span>
            <ExternalLink className="w-4 h-4 text-stone-600" />
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
          Contributions support open public-interest research and tools. They do not purchase services, guarantee individual assistance, or grant priority access to emergency resources.
        </p>
      </div>
    </section>
  );
}
