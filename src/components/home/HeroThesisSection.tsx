"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, ShieldAlert, Sparkles, CornerDownRight, CheckCircle2, XCircle } from "lucide-react";

export function HeroThesisSection() {
  return (
    <section className="relative border-b border-brand-sand bg-brand-paper overflow-hidden bg-grid-ledger min-h-[75vh] lg:min-h-[80vh] flex flex-col justify-between pt-10 sm:pt-14 pb-0">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-6 sm:py-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left 60%: Headline, Framing & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-ivory border border-stone-300 text-stone-800 rounded-md text-[11px] font-mono uppercase tracking-widest font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span>IN DEVELOPMENT · CENTRAL TEXAS PILOT</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-brand-charcoal tracking-tight leading-[1.12]">
                Help exists. <br />
                <span className="text-brand-oxblood italic font-serif font-normal">Access is another question.</span>
              </h1>
            </div>

            {/* Explanation Body */}
            <div className="space-y-3 text-stone-800 text-sm sm:text-base leading-relaxed font-sans">
              <p className="text-base sm:text-lg text-brand-charcoal font-semibold">
                Maps With Teeth maps the barriers between people and the help they’re supposed to be able to reach.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 font-mono leading-normal">
                Eligibility rules. Documentation. County lines. Waitlists. Referral requirements. Transportation. Shelter prerequisites. Programs that exist on paper but cannot actually be accessed.
              </p>
              <p className="text-xs sm:text-sm text-brand-charcoal font-medium">
                Not another resource directory. A map of what gets in the way—and the routes that may still be open.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/find-help"
                className="px-6 sm:px-7 py-3.5 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <span>EXPLORE THE RESOURCES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/how-we-research"
                className="px-6 sm:px-7 py-3.5 bg-brand-paper hover:bg-stone-200 border border-stone-400 text-brand-charcoal rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-sm"
              >
                <span>SEE HOW THE PILOT WORKS</span>
              </Link>
            </div>

            {/* Stakeholder Callout (Underneath, smaller) */}
            <div className="pt-2">
              <p className="text-xs text-stone-600 font-sans">
                For advocates, researchers, public agencies, labor, and community partners:{" "}
                <Link
                  href="/feedback"
                  className="text-brand-oxblood font-mono font-bold hover:underline inline-flex items-center gap-1"
                >
                  Help us pressure-test the model. Give Feedback →
                </Link>
              </p>
            </div>
          </div>

          {/* Right 40%: The Thesis System Diagram */}
          <div className="lg:col-span-5 relative">
            <div className="bg-brand-ivory border-2 border-stone-300 rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden">
              {/* Field Note Header Badge */}
              <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-4 font-mono text-[10px]">
                <span className="text-stone-500 font-bold uppercase tracking-wider">
                  [SYSTEM THESIS DIAGRAM]
                </span>
                <span className="px-1.5 py-0.5 rounded bg-brand-paper border border-stone-300 text-stone-600">
                  FIG. 01 · DEAD-END FUNNEL
                </span>
              </div>

              {/* Diagram Body */}
              <div className="relative space-y-2">
                {/* 1. Resource Found */}
                <div className="p-2.5 bg-brand-paper border border-stone-300 rounded-lg text-center font-mono text-xs font-bold text-brand-charcoal shadow-sm">
                  RESOURCE FOUND
                </div>

                <div className="flex justify-center text-stone-400">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 2. Eligible? */}
                <div className="p-2 bg-brand-paper/80 border border-stone-300 rounded text-center font-mono text-[11px] text-stone-700">
                  ELIGIBLE?
                </div>

                <div className="flex justify-center text-stone-400">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 3. Documents? */}
                <div className="p-2 bg-brand-paper/80 border border-stone-300 rounded text-center font-mono text-[11px] text-stone-700">
                  DOCUMENTS?
                </div>

                <div className="flex justify-center text-stone-400">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 4. Right County? with Lateral Breakout Fork */}
                <div className="relative">
                  <div className="p-2 bg-brand-paper/80 border border-stone-300 rounded text-center font-mono text-[11px] text-stone-700">
                    RIGHT COUNTY?
                  </div>

                  {/* Lateral Breakout Connector */}
                  <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-brand-oxblood" />
                </div>

                <div className="flex justify-center text-stone-400">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 5. Referral? */}
                <div className="p-2 bg-brand-paper/80 border border-stone-300 rounded text-center font-mono text-[11px] text-stone-700">
                  REFERRAL?
                </div>

                <div className="flex justify-center text-stone-400">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 6. Waitlist */}
                <div className="p-2 bg-brand-paper/80 border border-stone-300 rounded text-center font-mono text-[11px] text-stone-700">
                  WAITLIST
                </div>

                <div className="flex justify-center text-stone-400">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>

                {/* 7. Dead End Node */}
                <div className="p-2.5 bg-stone-200 border-2 border-stone-400 rounded-lg text-center font-mono text-xs font-bold text-stone-700 flex items-center justify-center gap-1.5 shadow-inner">
                  <XCircle className="w-3.5 h-3.5 text-stone-500" />
                  <span>DEAD END (SYSTEM BLOCKED)</span>
                </div>

                {/* OXBLOOD BREAKOUT PATH */}
                <div className="mt-4 pt-3 border-t-2 border-dashed border-brand-oxblood/40">
                  <Link
                    href="/other-ways-through"
                    className="group block p-3.5 bg-brand-paper border-2 border-brand-oxblood rounded-xl shadow-md hover:bg-brand-ivory transition-all"
                  >
                    <div className="flex items-center justify-between text-brand-oxblood font-mono font-bold text-xs">
                      <span className="flex items-center gap-1.5">
                        <CornerDownRight className="w-4 h-4 text-brand-oxblood" />
                        <span>OTHER WAY THROUGH →</span>
                      </span>
                      <span className="text-[10px] uppercase tracking-wider bg-red-100 text-brand-oxblood px-2 py-0.5 rounded font-mono">
                        LATERAL BYPASS
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-700 font-sans mt-1.5 leading-snug">
                      Statutory escape rights · Industry emergency funds · Pet foster networks · FCC phone line separations
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Restrained Info Strip (Moved out of emotional center) */}
      <div className="border-t border-brand-sand bg-brand-ivory/80 py-3 px-4 text-center mt-6">
        <p className="text-[11px] sm:text-xs font-mono text-stone-600 max-w-4xl mx-auto leading-relaxed">
          Maps With Teeth is an independent public-interest initiative in development. It is not currently a 501(c)(3), government agency, emergency service, or legal-services provider.
        </p>
      </div>
    </section>
  );
}
