import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { ResourceStackGenerator } from "@/components/resources/ResourceStackGenerator";
import { StageRoadmapSection } from "@/components/home/StageRoadmapSection";
import { StakeholderFeedbackSection } from "@/components/feedback/StakeholderFeedbackSection";
import {
  Compass,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Search,
  HelpCircle,
  CheckCircle2,
  Lock,
  Zap,
  MapPin,
  Briefcase,
  Dog,
  MessageSquareQuote,
  Scale,
  ShieldAlert,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Editorial Hero Section */}
      <section className="relative border-b border-stone-800 bg-brand-charcoal py-12 sm:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Logo & Restrained Status Marker */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-stone-900 border border-stone-700/80 p-2 shadow-2xl flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Maps With Teeth"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>

            {/* Restrained Stage Marker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-950 border border-stone-700 text-stone-300 rounded-full text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>IN DEVELOPMENT · CENTRAL TEXAS PILOT</span>
            </div>
          </div>

          {/* Substantive Hero Framing */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-[1.1]">
              Help exists. <br />
              <span className="text-brand-ruby italic font-serif">Access is another question.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed font-sans font-medium">
              Maps With Teeth is a barrier-first resource intelligence system that maps not only where help exists, but what it actually takes to reach it.
            </p>

            <p className="text-xs sm:text-sm text-stone-400 max-w-2xl mx-auto leading-relaxed font-mono">
              Eligibility rules · Documentation requirements · County boundaries · Waitlists · Transportation gaps · Referral loops · Dead ends
            </p>

            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto font-sans font-semibold pt-1 text-stone-200">
              &ldquo;We are building the missing layer between a resource directory and a successful handoff.&rdquo;
            </p>
          </div>

          {/* Restrained Organizational Disclosure */}
          <div className="max-w-2xl mx-auto p-3 bg-stone-950/80 rounded-lg border border-stone-800 text-[11px] text-stone-400 font-mono space-y-1">
            <p className="text-stone-300">
              Maps With Teeth is an independent public-interest initiative currently validating a barrier-first approach to resource navigation and systems accountability.
            </p>
            <p className="text-stone-500 text-[10px]">
              Disclosure: Maps With Teeth is not currently a 501(c)(3), government agency, emergency service, or legal-services provider.
            </p>
          </div>

          {/* Prioritized CTA Hierarchy */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* Primary Action 1: Explore the Pilot */}
            <Link
              href="/texas"
              className="px-6 py-3.5 bg-brand-ruby hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              <span>Explore the Pilot</span>
            </Link>

            {/* Primary Action 2: Partner / Give Feedback */}
            <Link
              href="/feedback"
              className="px-6 py-3.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageSquareQuote className="w-4 h-4 text-amber-400" />
              <span>Partner / Give Feedback</span>
            </Link>

            {/* Secondary Action 1: Find a Way Through Directory */}
            <Link
              href="/find-help"
              className="px-4 py-3 bg-transparent hover:bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <span>Barrier Explorer</span>
            </Link>

            {/* Secondary Action 2: Support the Build */}
            <Link
              href="/support"
              className="px-4 py-3 bg-transparent hover:bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors"
            >
              <span>Support the Build</span>
            </Link>
          </div>

          {/* Defining Idea Callout */}
          <div className="pt-6 max-w-2xl mx-auto">
            <div className="p-4 bg-stone-950/90 border-l-2 border-brand-ruby rounded text-left text-xs text-stone-300 leading-relaxed font-mono">
              <strong className="text-white block font-sans text-sm mb-1">The Core Principle:</strong>
              &ldquo;People do not experience their problem as a service category. They experience a barrier.&rdquo;
              <span className="block text-[11px] text-stone-400 mt-1 font-sans">
                Sometimes the resource you need isn&apos;t a domestic violence shelter—it&apos;s a $40 gas voucher, an electric deposit waiver, safe pet boarding, or a statutory lease termination.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT / TESTING / PROPOSED Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StageRoadmapSection />
      </section>

      {/* The 3 Resource Layers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-ruby font-bold block mb-1">
            Three Distinct Resource Layers
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Texas-First, But Not Texas-Only
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            A nationwide library of obscure funds, a deep statutory dive for our Texas pilot region, and structured research intake.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Layer 1: Texas */}
          <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-6 flex flex-col justify-between hover:border-stone-700 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center text-brand-ruby">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
                LAYER 1 • STATE & COUNTY PILOT
              </span>
              <h3 className="text-lg font-bold text-white">Texas Deep Dive</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Exhaustive statutory escape mechanisms (Tex. Prop. Code § 92.016 lease break, PUCT § 25.478 utility deposit waiver, CVC up to $5,000 relocation) + Travis, Williamson, Harris & Central Texas county funds.
              </p>
            </div>
            <Link
              href="/texas"
              className="mt-6 text-xs font-bold text-brand-ruby hover:text-red-400 flex items-center gap-1 group"
            >
              <span>Explore Texas Directory</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Layer 2: Other Ways Through */}
          <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-6 flex flex-col justify-between hover:border-stone-700 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center text-brand-ruby">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
                LAYER 2 • LOCATION-INDEPENDENT
              </span>
              <h3 className="text-lg font-bold text-white">Other Ways Through</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Nationwide searchable library of programs based on occupation (Southern Smoke, Giving Kitchen, MusiCares, CERF+), free vehicle repair, RedRover pet safe havens, and Safe Connections Act phone separation.
              </p>
            </div>
            <Link
              href="/other-ways-through"
              className="mt-6 text-xs font-bold text-brand-ruby hover:text-red-400 flex items-center gap-1 group"
            >
              <span>Browse National & Industry Library</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Layer 3: Ask Us to Look */}
          <div className="bg-brand-charcoal border border-brand-ruby/40 rounded-xl p-6 flex flex-col justify-between hover:border-brand-ruby transition-all shadow-md">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-ruby/20 border border-brand-ruby/50 flex items-center justify-center text-brand-ruby">
                <Sparkles className="w-5 h-5 text-brand-ruby" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">
                LAYER 3 • STRUCTURED INTAKE
              </span>
              <h3 className="text-lg font-bold text-white">Help Me Find a Way Through</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Tell us your specific barrier, recent jobs, pets, and what failed. Generates immediate potential pathways and a structured research docket without requiring an abuse narrative.
              </p>
            </div>
            <Link
              href="/ask-us-to-look"
              className="mt-6 text-xs font-bold text-white bg-brand-ruby hover:bg-red-700 px-3 py-2 rounded flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Start Resource Investigation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Combiner: Your Resource Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResourceStackGenerator />
      </section>

      {/* Barrier Explorer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-stone-800 pt-12">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                What are you trying to solve?
              </h2>
              <p className="text-xs text-stone-400 mt-1">
                Explore verified escape mechanisms categorized by concrete real-world barrier.
              </p>
            </div>
            <Link
              href="/find-help"
              className="text-xs font-mono text-brand-ruby hover:underline flex items-center gap-1"
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
                className="p-4 bg-brand-charcoal border border-stone-800 rounded-lg hover:border-stone-700 hover:bg-stone-900/80 transition-all group"
              >
                <div className="flex items-center justify-between text-stone-400 group-hover:text-brand-ruby mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider">{cat.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xs font-bold text-stone-200 group-hover:text-white leading-snug">
                  {cat.label}
                </h3>
                <p className="text-[11px] text-stone-500 line-clamp-2 mt-1 font-sans">
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
