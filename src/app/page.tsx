import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { ResourceStackGenerator } from "@/components/resources/ResourceStackGenerator";
import { StageRoadmapSection } from "@/components/home/StageRoadmapSection";
import { StakeholderFeedbackSection } from "@/components/feedback/StakeholderFeedbackSection";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Briefcase,
  MessageSquareQuote,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Simplified Hero Section */}
      <section className="relative border-b border-brand-sand bg-brand-paper py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-ledger">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo & Restrained Stage Marker */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-ivory border border-stone-300 p-2 shadow-sm flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Maps With Teeth"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>

            {/* Stage Marker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-ivory border border-stone-300 text-stone-800 rounded-full text-xs font-mono uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>IN DEVELOPMENT · CENTRAL TEXAS PILOT</span>
            </div>
          </div>

          {/* Core Substantive Framing */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-brand-charcoal tracking-tight leading-[1.12]">
              Help exists. <br />
              <span className="text-brand-oxblood italic font-serif">Access is another question.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-800 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
              Maps With Teeth is a barrier-first resource intelligence system that maps not only where help exists, but what it actually takes to reach it.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed font-mono">
              Eligibility rules · Documentation requirements · County boundaries · Waitlists · Transportation gaps · Referral loops · Dead ends
            </p>
          </div>

          {/* Two Primary Stakeholder CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/texas"
              className="px-7 py-3.5 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              <span>Explore the Pilot</span>
            </Link>

            <Link
              href="/feedback"
              className="px-7 py-3.5 bg-brand-paper hover:bg-stone-200 border border-stone-300 text-brand-charcoal rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageSquareQuote className="w-4 h-4 text-amber-700" />
              <span>Partner / Give Feedback</span>
            </Link>
          </div>

          {/* Compact Framing & Disclosure Note */}
          <div className="pt-4 max-w-2xl mx-auto space-y-2 text-center text-xs text-stone-600 font-mono">
            <p className="text-brand-charcoal font-sans font-medium text-xs">
              &ldquo;We are building the missing layer between a resource directory and a successful handoff.&rdquo;
            </p>
            <p className="text-[10px] text-stone-500">
              Maps With Teeth is an independent public-interest initiative · Not currently a 501(c)(3), government agency, or legal-services provider.
            </p>
          </div>
        </div>
      </section>

      {/* BUILT / TESTING / PROPOSED Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StageRoadmapSection />
      </section>

      {/* The 3 Resource Layers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-oxblood font-bold block">
            Three Distinct Resource Layers
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
            Texas-First, But Not Texas-Only
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            A nationwide library of obscure funds, a deep statutory dive for our Texas pilot region, and structured research intake.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Layer 1: Texas */}
          <div className="bg-brand-paper border border-brand-sand rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-stone-400 hover:shadow-md transition-all shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-ivory border border-stone-300 flex items-center justify-center text-brand-oxblood shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest font-bold block">
                LAYER 1 • STATE & COUNTY PILOT
              </span>
              <h3 className="text-lg font-serif font-bold text-brand-charcoal">Texas Deep Dive</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Exhaustive statutory escape mechanisms (Tex. Prop. Code § 92.016 lease break, PUCT § 25.478 utility deposit waiver, CVC up to $5,000 relocation) + Travis, Williamson, Harris & Central Texas county funds.
              </p>
            </div>
            <Link
              href="/texas"
              className="mt-6 text-xs font-bold font-mono text-brand-oxblood hover:underline flex items-center gap-1 group"
            >
              <span>Explore Texas Directory</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Layer 2: Other Ways Through */}
          <div className="bg-brand-paper border border-brand-sand rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-stone-400 hover:shadow-md transition-all shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-ivory border border-stone-300 flex items-center justify-center text-brand-oxblood shadow-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest font-bold block">
                LAYER 2 • LOCATION-INDEPENDENT
              </span>
              <h3 className="text-lg font-serif font-bold text-brand-charcoal">Other Ways Through</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Nationwide searchable library of programs based on occupation (Southern Smoke, Giving Kitchen, MusiCares, CERF+), free vehicle repair, RedRover pet safe havens, and Safe Connections Act phone separation.
              </p>
            </div>
            <Link
              href="/other-ways-through"
              className="mt-6 text-xs font-bold font-mono text-brand-oxblood hover:underline flex items-center gap-1 group"
            >
              <span>Browse National & Industry Library</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Layer 3: Ask Us to Look */}
          <div className="bg-brand-paper border border-brand-sand rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-oxblood hover:shadow-md transition-all shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-brand-oxblood shadow-sm">
                <Sparkles className="w-5 h-5 text-brand-oxblood" />
              </div>
              <span className="text-[10px] font-mono text-emerald-800 uppercase tracking-widest font-bold block">
                LAYER 3 • STRUCTURED INTAKE
              </span>
              <h3 className="text-lg font-serif font-bold text-brand-charcoal">Help Me Find a Way Through</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Tell us your specific barrier, recent jobs, pets, and what failed. Generates immediate potential pathways and a structured research docket without requiring an abuse narrative.
              </p>
            </div>
            <Link
              href="/ask-us-to-look"
              className="mt-6 text-xs font-bold font-mono text-white bg-brand-oxblood hover:bg-red-900 px-3 py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <span>Start Resource Investigation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Resource Intelligence / Directory Area: 6 Representative Cards + Prominent Directory CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResourceStackGenerator maxCards={6} />
      </section>

      {/* Barrier Explorer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-brand-sand pt-16 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
                What are you trying to solve?
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
                Explore verified escape mechanisms categorized by concrete real-world barrier.
              </p>
            </div>
            <Link
              href="/find-help"
              className="text-xs font-mono text-brand-oxblood hover:underline flex items-center gap-1 font-bold"
            >
              <span>View All Barriers & Directory Filters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {BARRIER_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/find-help?barrier=${cat.id}`}
                className="p-4 bg-brand-paper border border-brand-sand rounded-xl hover:border-stone-400 hover:shadow-sm transition-all group shadow-sm"
              >
                <div className="flex items-center justify-between text-stone-500 group-hover:text-brand-oxblood mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider">{cat.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-oxblood" />
                </div>
                <h3 className="text-xs font-bold text-brand-charcoal group-hover:text-black leading-snug font-sans">
                  {cat.label}
                </h3>
                <p className="text-[11px] text-stone-600 line-clamp-2 mt-1 font-sans">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Pressure-Testing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <StakeholderFeedbackSection />
      </section>
    </div>
  );
}
