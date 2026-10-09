"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Scale, MapPin, Calendar, FileText, CheckCircle2 } from "lucide-react";

export function WorkInPracticeSection() {
  return (
    <section id="work-in-practice" className="space-y-6 scroll-mt-24 font-sans select-none">
      {/* Section Header */}
      <div className="border-b border-[#C4B69E] pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono text-mwt-oxblood font-bold uppercase tracking-wider block">
            WORK IN PRACTICE · TWO DISTINCT APPLICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black tracking-tight">
            How the framework applies in practice
          </h2>
        </div>
        <span className="coord-tick">[APPLIED REFORM &amp; NAVIGATION]</span>
      </div>

      <p className="text-mwt-graphite text-sm sm:text-base max-w-3xl leading-relaxed">
        Maps With Teeth bridges research and real-world execution. The broader organizational mission is applied across two distinct, complementary tracks: frontline resource reachability and state-level administrative reform.
      </p>

      {/* Two Application Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Application 1: Central Texas Navigation Pilot */}
        <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#C4B69E] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-mwt-oxblood text-white px-2.5 py-1 rounded-xs">
                APPLICATION 01 · ACTIVE NAVIGATION PILOT
              </span>
              <span className="text-xs font-mono font-bold text-mwt-graphite flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-mwt-oxblood" />
                <span>Central Texas (5 Counties)</span>
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-mwt-black">
                Barrier-First Resource Intelligence
              </h3>
              <p className="text-xs font-mono uppercase font-bold text-mwt-oxblood">
                &ldquo;A directory is not a route.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-mwt-black leading-relaxed font-sans">
                Our working Central Texas pilot maps emergency shelter, utility security deposit waivers (16 TAC § 25.478), and statutory lease termination (Tex. Prop. Code § 92.016) across Travis, Williamson, Bastrop, Burnet, and Hays counties. It evaluates whether assistance is <em>actually reachable</em> given eligibility gates, waitlists, transit locks, and safety constraints.
              </p>
            </div>

            <div className="p-3 bg-mwt-ivory rounded-xs border border-[#C4B69E] text-xs font-mono space-y-1">
              <span className="text-mwt-graphite uppercase font-bold text-[10px] block">PILOT FOCUS:</span>
              <p className="text-mwt-black text-[11px]">
                Deterministic matching against real obstacles without algorithmic guessing or automated risk scores.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#C4B69E]">
            <Link
              href="/find-help"
              className="inline-flex items-center justify-between w-full p-3 bg-mwt-oxblood hover:bg-mwt-oxblood-dark text-white rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition shadow-xs focus:outline-none focus:ring-2 focus:ring-mwt-black"
            >
              <span>Launch Central Texas Matcher</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Application 2: Texas DFPS Sunset Review Proposal */}
        <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#C4B69E] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-mwt-black text-white px-2.5 py-1 rounded-xs">
                APPLICATION 02 · POLICY &amp; REFORM PROPOSAL
              </span>
              <span className="text-xs font-mono font-bold text-mwt-graphite flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-mwt-oxblood" />
                <span>Sunset Review 2026–27</span>
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-mwt-black">
                Texas DFPS Sunset Reform Initiative
              </h3>
              <p className="text-xs font-mono uppercase font-bold text-mwt-oxblood">
                &ldquo;When the Human Becomes the Integration Layer&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-mwt-black leading-relaxed font-sans">
                An independent structural reform proposal formulated for the Texas Sunset Advisory Commission&apos;s evaluation of the Department of Family and Protective Services. Proposes five core mechanisms: Review Trace, Closed-Loop Handoffs, Complaint Trace, Accountability Finding Trace, and Threshold Consistency Review.
              </p>
            </div>

            <div className="p-3 bg-mwt-ivory rounded-xs border border-[#C4B69E] text-xs font-mono space-y-1">
              <span className="text-mwt-graphite uppercase font-bold text-[10px] block">GOVERNING STANDARD:</span>
              <p className="text-mwt-black text-[11px]">
                Independent proposal; preserves strict boundaries against central allegation dossiers and automated child-safety scoring.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#C4B69E]">
            <Link
              href="/policy#integration-layer-reform"
              className="inline-flex items-center justify-between w-full p-3 bg-mwt-black hover:bg-[#2B2724] text-white rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition shadow-xs focus:outline-none focus:ring-2 focus:ring-mwt-oxblood"
            >
              <span>Explore DFPS Sunset Proposals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
