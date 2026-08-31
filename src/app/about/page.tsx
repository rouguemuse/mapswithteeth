"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, ArrowRight, ShieldCheck, Scale, AlertCircle, Mail } from "lucide-react";
import { FoundingBoardSection } from "@/components/governance/FoundingBoardSection";
import { GeneralContactModal } from "@/components/contact/GeneralContactModal";

export default function AboutPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              INITIATIVE & PHILOSOPHY · CENTRAL TEXAS PILOT
            </span>
          </div>
          <span className="coord-tick">
            [CHARTER: PUBLIC-INTEREST-V0]
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          About Maps With Teeth
        </h1>
        <p className="text-base sm:text-[17px] text-stone-900 mt-2 max-w-3xl leading-relaxed font-sans font-medium">
          An independent public-interest initiative building the missing intelligence layer between people and the help they are supposed to be able to reach.
        </p>
      </div>

      {/* The Problem */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
          The Problem: Fragmented & Siloed Gateways
        </h2>
        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          Survivors attempting to stabilize or leave are frequently sent in circles through siloed, disconnected bureaucracies:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-stone-900 font-sans">
          <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
            • One agency handles legal services, but cannot pay a rental deposit.
          </div>
          <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
            • Another operates emergency shelter, but requires leaving a companion animal behind.
          </div>
          <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
            • A restaurant-worker hardship fund could pay the rent, but nobody mentions it.
          </div>
          <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg shadow-2xs leading-snug">
            • A federal telecom statute could separate a phone line, but police dismiss it as a &ldquo;civil matter.&rdquo;
          </div>
        </div>
      </section>

      {/* Defining Philosophy Callout */}
      <section className="space-y-4 p-6 sm:p-8 bg-[#EEE8DD] border-2 border-[#1C1D1D] border-l-6 border-l-[#971F26] rounded-r-xl shadow-xs bg-grid-atlas">
        <h2 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#971F26] font-bold">
          Our Defining Principle
        </h2>
        <p className="text-lg sm:text-xl text-[#1C1D1D] leading-relaxed font-serif italic">
          &ldquo;Help may technically exist. Maps With Teeth shows whether a person can actually reach it.&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
          People do not experience crisis as an administrative category. They experience a specific barrier—a $600 deposit, a tracked phone, a dog with nowhere to go, or $40 of gas to reach family. Maps With Teeth maps solutions to specific obstacles.
        </p>
      </section>

      {/* Governance & Founding Board Section */}
      <section className="pt-2">
        <FoundingBoardSection />
      </section>

      {/* Institutional Disclaimer Strip */}
      <div className="p-4 sm:p-5 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg text-xs text-stone-800 space-y-2 font-mono shadow-2xs">
        <strong className="text-[#1C1D1D] block uppercase font-bold text-xs">
          [INSTITUTIONAL STATUS & LEGAL DISCLAIMER]
        </strong>
        <p className="font-sans leading-relaxed text-stone-900 text-xs sm:text-sm">
          Maps With Teeth is an independent public-interest initiative in development. It is not currently a 501(c)(3) nonprofit, government agency, emergency service, or legal-services provider.
        </p>
      </div>

      {/* Next Step CTAs */}
      <div className="border-t border-[#D9D1C4] pt-6 flex flex-wrap items-center justify-between gap-4 font-mono">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/feedback"
            className="px-5 py-2.5 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs transition-colors"
          >
            <span>Give Strategic Feedback</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/build-with-us"
            className="px-5 py-2.5 bg-[#EEE8DD] hover:bg-stone-200 border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xs transition-colors"
          >
            <span>Build With Us</span>
          </Link>
        </div>

        <button
          onClick={() => setContactModalOpen(true)}
          className="px-4 py-2.5 text-stone-700 hover:text-[#971F26] text-xs font-mono font-bold flex items-center gap-1.5 hover:underline"
        >
          <Mail className="w-4 h-4 text-[#971F26]" />
          <span>General Contact / Inquiries</span>
        </button>
      </div>

      <GeneralContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
