import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, DollarSign, Zap, Home, ShieldAlert, Car, Smartphone, FileCheck, HelpCircle } from "lucide-react";

export function WhatAreYouTryingToSolveSection() {
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
    <section className="bg-[#1C1D1D] text-[#F5F1E8] rounded-2xl p-6 sm:p-10 border-2 border-stone-800 shadow-xl space-y-8 select-none font-sans relative overflow-hidden">
      <div className="border-b border-stone-800 pb-5 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold">
            PROBLEM-FIRST NAVIGATION
          </span>
          <span className="coord-tick text-stone-400">[NO PREVIOUS SYSTEM KNOWLEDGE REQUIRED]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          What are you actually trying to solve?
        </h2>

        <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed font-sans">
          You should not need to know which agency, program category, or funding stream might apply before you can look for help.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, idx) => {
          const Icon = p.icon;
          return (
            <Link
              key={idx}
              href={`/find-help?barrier=${p.barrierQuery}`}
              className="bg-[#242424] hover:bg-[#2D2D2D] border border-stone-700 hover:border-[#971F26] rounded-xl p-5 flex flex-col justify-between transition-all group shadow-sm hover:-translate-y-0.5"
            >
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded bg-[#1C1D1D] border border-stone-700 flex items-center justify-center text-[#971F26] group-hover:text-red-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors font-serif leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed font-sans line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400 group-hover:text-white">
                <span>View Pathways</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#971F26] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800 font-mono">
        <span className="text-xs text-stone-400">
          Select any situation above to filter real-world solutions directly by problem type.
        </span>

        <Link
          href="/find-help"
          className="px-6 py-3 bg-[#971F26] hover:bg-red-800 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shrink-0"
        >
          <span>Show me possible ways through →</span>
        </Link>
      </div>
    </section>
  );
}
