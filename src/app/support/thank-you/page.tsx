import React from "react";
import Link from "next/link";
import { CheckCircle2, Heart, ArrowRight, ShieldCheck, FileText, Compass } from "lucide-react";

export default function SupportThankYouPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 select-none font-sans">
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#971F26] font-bold">
          <Heart className="w-4 h-4 text-[#971F26]" />
          <span>CONTRIBUTION ACKNOWLEDGEMENT · TRANSACTION PROCESSED</span>
        </div>
        <span className="coord-tick text-stone-700">[STRIPE RECEIPT GENERATED]</span>
      </div>

      {/* Main Confirmation Card */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-12 shadow-sm space-y-8 bg-grid-atlas relative overflow-hidden text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center text-emerald-800 shrink-0">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
              Thank you for supporting the work.
            </h1>
            <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans font-medium">
              Your contribution directly funds independent barrier-first resource intelligence, field verification, and open civic research.
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid gap-4 sm:grid-cols-2 pt-2 text-left">
          <div className="p-5 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <span className="text-xs font-mono uppercase font-bold text-[#971F26] block">
              RECEIPT PROTOCOL
            </span>
            <p className="text-sm text-stone-800 font-sans leading-relaxed">
              An itemized transaction receipt has been sent to the email address you entered during checkout directly from Stripe.
            </p>
          </div>

          <div className="p-5 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
            <span className="text-xs font-mono uppercase font-bold text-[#971F26] block">
              RESEARCH IMPACT
            </span>
            <p className="text-sm text-stone-800 font-sans leading-relaxed">
              Funds sustain rigorous human verification of eligibility rules, county borders, waitlists, and legal escape rights.
            </p>
          </div>
        </div>

        {/* Fiduciary and Operational Disclosure */}
        <div className="p-5 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl text-left space-y-1.5 font-mono text-xs text-stone-800">
          <span className="font-bold text-[#1C1D1D] uppercase block">
            Initiative Notice & Fiduciary Boundary:
          </span>
          <p className="font-sans leading-relaxed text-stone-700">
            Maps With Teeth is an independent public-interest initiative in development and is not currently a 501(c)(3). Contributions are not currently tax-deductible unless otherwise stated. Contributions support research infrastructure and do not purchase services, guarantee individual assistance, or grant priority access to emergency resources.
          </p>
        </div>

        {/* Return & Next Steps Action Strip */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D9D1C4] font-mono">
          <Link
            href="/find-help"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xs transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Ways Through</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#F5F1E8] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
          >
            <span>Return to Homepage →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
