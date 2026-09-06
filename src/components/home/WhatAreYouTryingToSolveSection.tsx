"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  DollarSign,
  Zap,
  Home,
  ShieldAlert,
  Car,
  Smartphone,
  FileCheck,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export function WhatAreYouTryingToSolveSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const problems = [
    {
      title: "I need money right now",
      description: "Emergency cash, fees, deposits, transportation, replacement costs, or another immediate barrier.",
      icon: DollarSign,
      barrierQuery: "FINANCIAL",
    },
    {
      title: "I can't pay a utility deposit or reconnection fee",
      description: "PUCT electric deposit waivers, utility hardship funds, CSBG utility grants, and bill dispute protections.",
      icon: Zap,
      barrierQuery: "UTILITY",
    },
    {
      title: "I need somewhere safe to stay",
      description: "Hotel vouchers, rapid rehousing, shelter-independent navigation, and pet-friendly transitional safe havens.",
      icon: Home,
      barrierQuery: "HOUSING",
    },
    {
      title: "I'm trying to leave an unsafe situation",
      description: "Statutory lease break rights (Tex. Prop. Code § 92.016), confidential address programs, and emergency escape funds.",
      icon: ShieldAlert,
      barrierQuery: "SAFETY",
    },
    {
      title: "I need transportation to get through the next step",
      description: "Emergency auto repair grants, gas cards, intercity bus vouchers, and regional transit hardship routes.",
      icon: Car,
      barrierQuery: "TRANSPORTATION",
    },
    {
      title: "Someone is controlling my money, phone, documents, or access",
      description: "Federal Safe Connections Act line separation, confidential banking pathways, and digital safety protocols.",
      icon: Smartphone,
      barrierQuery: "PHONE_COMMUNICATION",
    },
    {
      title: "I need help replacing documents",
      description: "Certified birth certificate fee waivers, government ID replacement routes, and court record assistance.",
      icon: FileCheck,
      barrierQuery: "DOCUMENTATION",
    },
    {
      title: "The normal resources already told me no",
      description: "Industry benevolent funds (Southern Smoke, MusiCares), union relief, ministerial alliances, and mutual aid.",
      icon: HelpCircle,
      barrierQuery: "OTHER_WAYS",
    },
  ];

  return (
    <section className="bg-[#26221F] text-[#F5F1E8] rounded-2xl p-6 sm:p-10 border border-[#3D3732] shadow-lg space-y-8 select-none font-sans relative overflow-hidden">
      {/* Editorial Header */}
      <div className="border-b border-[#3D3732] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-wider text-red-400 font-bold">
            CHAPTER 01 · PROBLEM-FIRST NAVIGATION
          </span>
          <span className="coord-tick text-stone-400">[NO PREVIOUS SYSTEM KNOWLEDGE REQUIRED]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          What are you actually trying to solve?
        </h2>

        <p className="text-base sm:text-[17px] text-stone-300 max-w-3xl leading-relaxed font-sans font-normal">
          You should not need to know which agency, program category, or funding stream might apply before you can look for help.
        </p>
      </div>

      {/* 8 Problem Cards with Responsive Mobile Progressive Disclosure */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, idx) => {
          const Icon = p.icon;
          const isHiddenOnMobile = !showAllMobile && idx >= 4;

          return (
            <Link
              key={idx}
              href={`/find-help?barrier=${p.barrierQuery}`}
              className={`bg-[#2E2A27] hover:bg-[#38332E] border border-[#423C37] hover:border-red-400/80 rounded-xl p-5 flex flex-col justify-between transition-all group shadow-sm hover:-translate-y-0.5 ${
                isHiddenOnMobile ? "hidden sm:flex" : "flex"
              }`}
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded bg-[#26221F] border border-[#423C37] flex items-center justify-center text-red-400 group-hover:text-amber-300 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-[17px] font-bold text-white group-hover:text-amber-200 transition-colors font-serif leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#3D3732] flex items-center justify-between text-xs sm:text-[13px] font-mono font-bold text-stone-300 group-hover:text-white">
                <span className="tracking-wide">View Pathways</span>
                <ChevronRight className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile Progressive Disclosure Toggle */}
      <div className="sm:hidden pt-1">
        <button
          type="button"
          onClick={() => setShowAllMobile(!showAllMobile)}
          aria-expanded={showAllMobile}
          className="w-full py-3 px-4 bg-[#2E2A27] hover:bg-[#38332E] border border-[#423C37] text-stone-200 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
        >
          {showAllMobile ? (
            <>
              <span>Show Fewer Situations</span>
              <ChevronUp className="w-4 h-4 text-red-400" />
            </>
          ) : (
            <>
              <span>See All 8 Problem Situations (+4 More)</span>
              <ChevronDown className="w-4 h-4 text-red-400" />
            </>
          )}
        </button>
      </div>

      {/* Bottom Action Strip */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#3D3732] font-mono">
        <span className="text-xs sm:text-sm text-stone-300">
          Select any situation above to filter real-world solutions directly by problem type.
        </span>

        <Link
          href="/find-help"
          className="px-6 py-3.5 bg-[#971F26] hover:bg-red-700 text-white rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shrink-0"
        >
          <span>Show me possible ways through →</span>
        </Link>
      </div>
    </section>
  );
}
