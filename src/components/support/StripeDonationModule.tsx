"use client";

import React, { useState } from "react";
import { Heart, ShieldCheck, DollarSign, Calendar, ArrowRight, Sparkles, ExternalLink, Info } from "lucide-react";

interface DonationTier {
  id: string;
  amount: number;
  label: string;
  description: string;
  stripeUrl?: string;
}

export function StripeDonationModule() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  // Default Stripe Payment Links (read from environment variables with fallback)
  const defaultOneTimeCustomUrl = process.env.NEXT_PUBLIC_STRIPE_ONETIME_URL || "https://buy.stripe.com/example_onetime";
  const defaultMonthlyCustomUrl = process.env.NEXT_PUBLIC_STRIPE_MONTHLY_URL || "https://buy.stripe.com/example_monthly";

  const oneTimeTiers: DonationTier[] = [
    {
      id: "ot-25",
      amount: 25,
      label: "$25",
      description: "Covers vital records replacement or certified transcript fees for one person.",
    },
    {
      id: "ot-50",
      amount: 50,
      label: "$50",
      description: "Funds emergency transit cards, gas vouchers, or secure communication access.",
    },
    {
      id: "ot-100",
      amount: 100,
      label: "$100",
      description: "Direct assistance towards utility reconnection fees or lock rekeying under § 92.153.",
    },
    {
      id: "ot-250",
      amount: 250,
      label: "$250",
      description: "Subsidizes emergency companion pet foster boarding during immediate transitional relocation.",
    },
  ];

  const monthlyTiers: DonationTier[] = [
    {
      id: "mo-10",
      amount: 10,
      label: "$10 / mo",
      description: "Sustaining research support to audit and verify county-level resource availability monthly.",
    },
    {
      id: "mo-25",
      amount: 25,
      label: "$25 / mo",
      description: "Continuously funds field verification phone calls and unadvertised requirement audits.",
    },
    {
      id: "mo-50",
      amount: 50,
      label: "$50 / mo",
      description: "Directly contributes to the Central Texas Survivor Gap Fund operating reserves.",
    },
    {
      id: "mo-100",
      amount: 100,
      label: "$100 / mo",
      description: "Institutional guardian tier: sustains independent data hosting and zero-tracking privacy tools.",
    },
  ];

  const activeTiers = frequency === "one-time" ? oneTimeTiers : monthlyTiers;

  const getDonationLink = () => {
    // If specific tier has a URL, return it
    if (typeof selectedAmount === "number") {
      const tier = activeTiers.find((t) => t.amount === selectedAmount);
      if (tier?.stripeUrl) return tier.stripeUrl;
    }
    // Otherwise return custom payment link for the selected frequency
    return frequency === "one-time" ? defaultOneTimeCustomUrl : defaultMonthlyCustomUrl;
  };

  const handleProceedToStripe = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getDonationLink();
    if (url.includes("example_")) {
      alert(
        "Stripe Payment Link Configuration:\n\nTo wire live donations, create a Payment Link in your Stripe Dashboard (with 'Customers choose what to pay' enabled) and set NEXT_PUBLIC_STRIPE_ONETIME_URL and NEXT_PUBLIC_STRIPE_MONTHLY_URL in your environment."
      );
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 bg-grid-atlas select-none font-sans">
      {/* Editorial Section Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#971F26]" />
            <span>DIRECT CONTRIBUTIONS & SUSTAINING MEMBERSHIP</span>
          </span>
          <span className="coord-tick">[SECURE STRIPE PROCESSING]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Fund Independent Barrier Intelligence
        </h2>

        <p className="text-xs sm:text-sm text-stone-700 max-w-3xl leading-relaxed font-sans">
          Maps With Teeth is independent and ad-free. We do not sell user data, charge frontline caseworkers, or accept pay-for-placement directory sponsorships. Community contributions directly fund rigorous field verification and the Central Texas Survivor Gap Fund.
        </p>
      </div>

      {/* Interactive Stripe Contribution Card */}
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs max-w-2xl mx-auto">
        {/* Frequency Tabs (One-Time vs. Monthly Subscription) */}
        <div className="grid grid-cols-2 gap-2 bg-[#EEE8DD] p-1.5 rounded-lg border border-[#D9D1C4] font-mono text-xs">
          <button
            type="button"
            onClick={() => {
              setFrequency("one-time");
              setSelectedAmount(50);
            }}
            className={`py-2.5 px-4 rounded-md font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
              frequency === "one-time"
                ? "bg-[#1C1D1D] text-white shadow-xs"
                : "text-stone-700 hover:text-[#1C1D1D]"
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>One-Time Contribution</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setFrequency("monthly");
              setSelectedAmount(25);
            }}
            className={`py-2.5 px-4 rounded-md font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
              frequency === "monthly"
                ? "bg-[#971F26] text-white shadow-xs"
                : "text-stone-700 hover:text-[#1C1D1D]"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Monthly Sustainer</span>
          </button>
        </div>

        {/* Preset Amount Grid */}
        <div className="space-y-3">
          <label className="block text-xs font-mono uppercase font-bold text-stone-800">
            Select Contribution Level:
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {activeTiers.map((tier) => {
              const isSelected = selectedAmount === tier.amount;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(tier.amount);
                    setCustomAmount("");
                  }}
                  className={`py-3 px-2 rounded-lg border-2 font-mono text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                    isSelected
                      ? frequency === "monthly"
                        ? "bg-[#971F26] border-[#971F26] text-white shadow-xs"
                        : "bg-[#1C1D1D] border-[#1C1D1D] text-white shadow-xs"
                      : "bg-[#EEE8DD] border-[#D9D1C4] text-[#1C1D1D] hover:border-[#1C1D1D]"
                  }`}
                >
                  <span className="text-sm sm:text-base font-bold">{tier.label}</span>
                </button>
              );
            })}
          </div>

          {/* Custom Amount / Pick Your Amount Input */}
          <div className="pt-2">
            <div
              onClick={() => setSelectedAmount("custom")}
              className={`p-3 rounded-lg border-2 transition-all flex items-center gap-3 cursor-pointer ${
                selectedAmount === "custom"
                  ? "bg-[#EEE8DD] border-[#1C1D1D]"
                  : "bg-[#F5F1E8] border-[#D9D1C4] hover:border-stone-400"
              }`}
            >
              <span className="font-mono text-xs font-bold uppercase text-stone-800 shrink-0">
                Or Pick Your Own Amount:
              </span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 font-mono text-xs font-bold">
                  $
                </span>
                <input
                  type="number"
                  min="5"
                  step="1"
                  placeholder="Custom amount"
                  value={customAmount}
                  onFocus={() => setSelectedAmount("custom")}
                  onChange={(e) => {
                    setSelectedAmount("custom");
                    setCustomAmount(e.target.value);
                  }}
                  className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded pl-7 pr-3 py-1.5 text-xs font-mono text-[#1C1D1D] focus:outline-none focus:border-[#971F26]"
                />
              </div>
            </div>
          </div>

          {/* Selected Tier Impact Description */}
          {typeof selectedAmount === "number" && (
            <div className="p-3 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg text-xs text-stone-800 font-sans leading-relaxed flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
              <span>
                <strong>Impact: </strong>
                {activeTiers.find((t) => t.amount === selectedAmount)?.description}
              </span>
            </div>
          )}
        </div>

        {/* Action Button: Checkout with Stripe */}
        <form onSubmit={handleProceedToStripe} className="pt-2">
          <button
            type="submit"
            className="w-full py-4 bg-[#971F26] hover:bg-[#5C181D] text-white font-mono font-bold uppercase tracking-wider text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 border border-[#971F26] transform hover:-translate-y-0.5"
          >
            <span>
              {frequency === "monthly" ? "Start Monthly Sustaining Donation" : "Proceed to Secure Stripe Donation"}
            </span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <p className="text-[10px] text-stone-500 font-mono text-center mt-2.5 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 inline" />
            <span>256-bit encrypted checkout handled securely by Stripe. No card info stored on our servers.</span>
          </p>
        </form>
      </div>

      {/* Financial Transparency & Fiduciary Notice */}
      <div className="max-w-2xl mx-auto p-4 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xl text-xs text-stone-700 font-mono space-y-1.5 shadow-2xs">
        <div className="flex items-center gap-1.5 text-[#1C1D1D] font-bold uppercase text-[10px]">
          <Info className="w-3.5 h-3.5 text-[#971F26]" />
          <span>Fiduciary Disclosure & Receipt Protocol</span>
        </div>
        <p className="text-[11px] leading-relaxed font-sans text-stone-700">
          Maps With Teeth is currently preparing its launch under comprehensive fiscal sponsorship. Stripe receipts are automatically generated and emailed immediately upon checkout. For institutional grants, corporate matching, or donor-advised funds (DAFs), please contact <strong>hello@mapswithteeth.org</strong>.
        </p>
      </div>
    </div>
  );
}
