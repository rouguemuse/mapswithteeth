"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Scale, Calendar, FileText, CheckCircle2 } from "lucide-react";

export function WorkInPracticeSection() {
  return (
    <section id="work-in-practice" className="space-y-8 scroll-mt-24 font-sans select-none">
      
      {/* Header */}
      <div className="border-b-2 border-[#11100F] pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#841F2B] font-bold uppercase tracking-widest block mb-2">
            § 04 · WORK IN PRACTICE · TWO COMPLEMENTARY APPLICATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#11100F] tracking-tight">
            How the Framework Applies in Practice
          </h2>
        </div>
        <span className="font-mono text-xs text-[#4D4944] uppercase tracking-wider">
          [FRONTLINE EXECUTION &amp; STATE-LEVEL POLICY]
        </span>
      </div>

      <p className="text-lg text-[#4D4944] font-serif max-w-3xl leading-relaxed">
        Maps With Teeth does not remain in theoretical abstraction. The initiative operates across two distinct, complementary tracks: frontline resource reachability and state-level administrative reform.
      </p>

      {/* Two Application Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Application 1: Central Texas Frontline Navigation Pilot */}
        <div className="bg-[#EEE8DB] border-2 border-[#11100F] rounded-xs p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-5">
            
            <div className="flex items-center justify-between border-b border-[#C4B69E] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#841F2B] text-white px-2.5 py-1 rounded-xs">
                APPLICATION 01 · ACTIVE NAVIGATION PILOT
              </span>
              <span className="text-xs font-mono font-bold text-[#4D4944] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#841F2B]" />
                <span>Central Texas (5 Counties)</span>
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#11100F]">
                Barrier-First Resource Intelligence
              </h3>
              <p className="text-xs font-mono uppercase font-bold text-[#841F2B]">
                &ldquo;A directory is not a route.&rdquo;
              </p>
              <p className="text-sm text-[#4D4944] leading-relaxed font-sans pt-1">
                Our active Central Texas pilot maps emergency shelter, utility security deposit waivers (16 TAC § 25.478), and statutory lease termination (Tex. Prop. Code § 92.016) across Travis, Williamson, Bastrop, Burnet, and Hays counties. It evaluates whether assistance is <em>actually reachable</em> given eligibility gates, waitlists, transit locks, and safety constraints.
              </p>
            </div>

            {/* Visual Thumbnail of Texas Route */}
            <div className="p-3 bg-[#F8F5EE] border border-[#C4B69E] rounded-xs flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 bg-[#EEE8DB] border border-[#C4B69E] rounded-xs overflow-hidden">
                <Image
                  src="/images/art/motif_texas_route.png"
                  alt="Texas Regional Continuity Map"
                  fill
                  className="object-contain mix-blend-multiply"
                  unoptimized
                />
              </div>
              <div className="font-mono text-xs space-y-1">
                <span className="text-[#841F2B] font-bold block uppercase text-[10px]">DETERMINISTIC MATCHING</span>
                <span className="text-[#4D4944] text-[11px] block">
                  Evaluates concrete statutory barriers without algorithmic guessing.
                </span>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-[#C4B69E]">
            <Link
              href="/find-help"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#11100F] hover:bg-[#841F2B] text-white rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>Launch Central Texas Matcher</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Application 2: Texas DFPS Sunset Review Reform Proposal */}
        <div className="bg-[#EEE8DB] border-2 border-[#11100F] rounded-xs p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-5">
            
            <div className="flex items-center justify-between border-b border-[#C4B69E] pb-3">
              <span className="text-[10px] font-mono font-bold uppercase bg-[#11100F] text-white px-2.5 py-1 rounded-xs">
                APPLICATION 02 · POLICY &amp; REFORM PROPOSAL
              </span>
              <span className="text-xs font-mono font-bold text-[#4D4944] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#841F2B]" />
                <span>Sunset Review 2026–27</span>
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#11100F]">
                Texas DFPS Sunset Reform Initiative
              </h3>
              <p className="text-xs font-mono uppercase font-bold text-[#841F2B]">
                &ldquo;When the human becomes the integration layer.&rdquo;
              </p>
              <p className="text-sm text-[#4D4944] leading-relaxed font-sans pt-1">
                An independent structural reform proposal formulated for the Texas Sunset Advisory Commission&apos;s evaluation of the Department of Family and Protective Services. Proposes five core mechanisms: Review Trace, Closed-Loop Handoffs, Complaint Trace, Accountability Finding Trace, and Threshold Consistency Review.
              </p>
            </div>

            {/* Visual Thumbnail of Documentation Stack */}
            <div className="p-3 bg-[#F8F5EE] border border-[#C4B69E] rounded-xs flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 bg-[#EEE8DB] border border-[#C4B69E] rounded-xs overflow-hidden">
                <Image
                  src="/images/art/motif_doc_stack.png"
                  alt="Documentation Stack for Statutory Reform"
                  fill
                  className="object-contain mix-blend-multiply"
                  unoptimized
                />
              </div>
              <div className="font-mono text-xs space-y-1">
                <span className="text-[#841F2B] font-bold block uppercase text-[10px]">STATUTORY COMPLIANCE</span>
                <span className="text-[#4D4944] text-[11px] block">
                  Preserves strict boundaries against centralized dossiers &amp; automated child scoring.
                </span>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-[#C4B69E]">
            <Link
              href="/policy"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#11100F] hover:bg-[#841F2B] text-white rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>Explore Sunset Reform Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
