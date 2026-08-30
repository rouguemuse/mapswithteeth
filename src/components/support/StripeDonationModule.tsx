"use client";

import React, { useState } from "react";
import { Heart, ShieldCheck, DollarSign, Calendar, ArrowRight, Sparkles, ExternalLink, Info, AlertCircle } from "lucide-react";

interface DonationTier {
  id: string;
  amount: number;
  label: string;
  description: string;
  envKey: string;
}

export function StripeDonationModule() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  // Universal Stripe Payment Links (read from environment variables)
  const universalOneTimeUrl = process.env.NEXT_PUBLIC_STRIPE_ONETIME_URL;
  const universalMonthlyUrl = process.env.NEXT_PUBLIC_STRIPE_MONTHLY_URL;

  const oneTimeTiers: DonationTier[] = [
    {
      id: "ot-25",
      amount: 25,
      label: "$25",
      description: "Covers vital records replacement or certified transcript fees for one person.",
      envKey: "NEXT_PUBLIC_STRIPE_OT_25",
    },
    {
      id: "ot-50",
      amount: 50,
      label: "$50",
      description: "Funds emergency transit cards, gas vouchers, or secure communication access.",
      envKey: "NEXT_PUBLIC_STRIPE_OT_50",
    },
    {
      id: "ot-100",
      amount: 100,
      label: "$100",
      description: "Direct assistance towards utility reconnection fees or lock rekeying under § 92.153.",
      envKey: "NEXT_PUBLIC_STRIPE_OT_100",
    },
    {
      id: "ot-250",
      amount: 250,
      label: "$250",
      description: "Subsidizes emergency companion pet foster boarding during immediate transitional relocation.",
      envKey: "NEXT_PUBLIC_STRIPE_OT_250",
    },
  ];

  const monthlyTiers: DonationTier[] = [
    {
      id: "mo-10",
      amount: 10,
      label: "$10 / mo",
      description: "Sustaining research support to audit and verify county-level resource availability monthly.",
      envKey: "NEXT_PUBLIC_STRIPE_MO_10",
    },
    {
      id: "mo-25",
      amount: 25,
      label: "$25 / mo",
      description: "Continuously funds field verification phone calls and unadvertised requirement audits.",
      envKey: "NEXT_PUBLIC_STRIPE_MO_25",
    },
    {
      id: "mo-50",
      amount: 50,
      label: "$50 / mo",
      description: "Directly contributes to the Central Texas Survivor Gap Fund operating reserves.",
      envKey: "NEXT_PUBLIC_STRIPE_MO_50",
    },
    {
      id: "mo-100",
      amount: 100,
      label: "$100 / mo",
      description: "Institutional guardian tier: sustains independent data hosting and zero-tracking privacy tools.",
      envKey: "NEXT_PUBLIC_STRIPE_MO_100",
    },
  ];

  const activeTiers = frequency === "one-time" ? oneTimeTiers : monthlyTiers;

  const getDonationLink = (): string | null => {
    // 1. Check for specific tier link if preset is chosen
    if (typeof selectedAmount === "number") {
      const tier = activeTiers.find((t) => t.amount === selectedAmount);
      if (tier) {
        const specificUrl = (process.env as any)[tier.envKey];
        if (specificUrl && !specificUrl.includes("example_")) return specificUrl;
      }
    }

    // 2. Otherwise use universal "Customers choose what to pay" link
    const universalUrl = frequency === "one-time" ? universalOneTimeUrl : universalMonthlyUrl;
    if (universalUrl && !universalUrl.includes("example_")) {
      return universalUrl;
    }

    return null;
  };

  const handleProceedToStripe = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getDonationLink();
    if (!url) {
      setShowConfigNotice(true);
      return;
    }
    // Open checkout in the same tab as requested
    window.location.href = url;
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
          <span className="coord-tick text-stone-700">[SECURE STRIPE PROCESSING]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Help fund the paths between the gaps.
        </h2>

        <p className="text-base text-stone-800 max-w-3xl leading-relaxed font-sans font-medium">
          Maps With Teeth is being built and pressure-tested as an independent public-interest initiative. Support helps fund resource verification, field research, infrastructure, and the development of tools designed to make fragmented systems easier to navigate.
        </p>
      </div>

      {/* Interactive Stripe Contribution Card */}
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs max-w-2xl mx-auto">
        {/* Frequency Tabs (One-Time vs. Monthly Subscription) */}
        <div className="grid grid-cols-2 gap-2 bg-[#EEE8DD] p-1.5 rounded-lg border border-[#D9D1C4] font-mono text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => {
              setFrequency("one-time");
              setSelectedAmount(50);
              setShowConfigNotice(false);
            }}
            className={`py-3 px-4 rounded-md font-bold uppercase transition-all flex items-center justify-center gap-2 ${
              frequency === "one-time"
                ? "bg-[#1C1D1D] text-white shadow-xs"
                : "text-stone-700 hover:text-[#1C1D1D]"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>One-Time Contribution</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setFrequency("monthly");
              setSelectedAmount(25);
              setShowConfigNotice(false);
            }}
            className={`py-3 px-4 rounded-md font-bold uppercase transition-all flex items-center justify-center gap-2 ${
              frequency === "monthly"
                ? "bg-[#971F26] text-white shadow-xs"
                : "text-stone-700 hover:text-[#1C1D1D]"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Monthly Sustainer</span>
          </button>
        </div>

        {/* Preset Amount Grid */}
        <div className="space-y-3">
          <label className="block text-xs sm:text-[13px] font-mono uppercase font-bold text-stone-900">
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
                    setShowConfigNotice(false);
                  }}
                  className={`py-3.5 px-2 rounded-lg border-2 font-mono text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                    isSelected
                      ? frequency === "monthly"
                        ? "bg-[#971F26] border-[#971F26] text-white shadow-xs"
                        : "bg-[#1C1D1D] border-[#1C1D1D] text-white shadow-xs"
                      : "bg-[#EEE8DD] border-[#D9D1C4] text-[#1C1D1D] hover:border-[#1C1D1D]"
                  }`}
                >
                  <span className="text-base font-bold">{tier.label}</span>
                </button>
              );
            })}
          </div>

          {/* Custom Amount / Pick Your Amount Input (One-time) */}
          <div className="pt-2">
            <div
              onClick={() => {
                setSelectedAmount("custom");
                setShowConfigNotice(false);
              }}
              className={`p-3.5 rounded-lg border-2 transition-all flex items-center gap-3 cursor-pointer ${
                selectedAmount === "custom"
                  ? "bg-[#EEE8DD] border-[#1C1D1D]"
                  : "bg-[#F5F1E8] border-[#D9D1C4] hover:border-stone-400"
              }`}
            >
              <span className="font-mono text-xs sm:text-[13px] font-bold uppercase text-stone-900 shrink-0">
                Or Pick Your Own Amount:
              </span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-600 font-mono text-sm font-bold">
                  $
                </span>
                <input
                  type="number"
                  min="5"
                  step="1"
                  placeholder="Custom amount"
                  value={customAmount}
                  onFocus={() => {
                    setSelectedAmount("custom");
                    setShowConfigNotice(false);
                  }}
                  onChange={(e) => {
                    setSelectedAmount("custom");
                    setCustomAmount(e.target.value);
                    setShowConfigNotice(false);
                  }}
                  className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded pl-7 pr-3 py-2 text-sm font-mono text-[#1C1D1D] placeholder:text-stone-500 focus:outline-none focus:border-[#971F26]"
                />
              </div>
            </div>
          </div>

          {/* Selected Tier Impact Description */}
          {typeof selectedAmount === "number" && (
            <div className="p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg text-xs sm:text-sm text-stone-800 font-sans leading-relaxed flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
              <span>
                <strong className="text-stone-900">Impact: </strong>
                {activeTiers.find((t) => t.amount === selectedAmount)?.description}
              </span>
            </div>
          )}
        </div>

        {/* Configuration Notice if links are not yet set */}
        {showConfigNotice && (
          <div className="p-4 bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg text-xs text-[#971F26] font-mono space-y-2">
            <div className="flex items-center gap-2 font-bold uppercase">
              <AlertCircle className="w-4 h-4" />
              <span>Stripe Payment Link Required</span>
            </div>
            <p className="font-sans leading-relaxed text-stone-800">
              To activate direct checkout, create a Payment Link in your Stripe Dashboard and set <code>NEXT_PUBLIC_STRIPE_ONETIME_URL</code> and <code>NEXT_PUBLIC_STRIPE_MONTHLY_URL</code> in your environment variables.
            </p>
          </div>
        )}

        {/* Action Button: Checkout with Stripe (Same Tab) */}
        <form onSubmit={handleProceedToStripe} className="pt-2">
          <button
            type="submit"
            className="w-full py-4 bg-[#971F26] hover:bg-[#5C181D] text-white font-mono font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 border border-[#7A2026] transform hover:-translate-y-0.5"
          >
            <span>
              {frequency === "monthly" ? "Start Monthly Sustaining Donation" : "Proceed to Secure Stripe Donation"}
            </span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <p className="text-xs text-stone-600 font-mono text-center mt-3 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700 inline" />
            <span>256-bit encrypted checkout hosted securely by Stripe. No card information is collected on our servers.</span>
          </p>
        </form>
      </div>

      {/* Required Legal Disclosure and Fiduciary Boundary */}
      <div className="max-w-2xl mx-auto p-5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-xl text-xs sm:text-[13px] text-stone-800 font-mono space-y-2 shadow-2xs">
        <div className="flex items-center gap-2 text-[#1C1D1D] font-bold uppercase text-xs">
          <Info className="w-4 h-4 text-[#971F26]" />
          <span>Fiduciary Disclosure & Tax Notice</span>
        </div>
        <p className="leading-relaxed font-sans text-stone-800">
          Maps With Teeth is an independent public-interest initiative in development and is not currently a 501(c)(3). Contributions are not currently tax-deductible unless otherwise stated.
        </p>
        <p className="text-[11px] font-sans text-stone-600 italic pt-1 border-t border-[#D9D1C4]">
          Contributions support ongoing open research, verification, and digital safety tools. They do not purchase services, guarantee individual assistance, or grant priority access to emergency resources.
        </p>
      </div>
    </div>
  );
}
