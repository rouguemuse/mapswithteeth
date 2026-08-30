import React from "react";
import Link from "next/link";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { HeroThesisSection } from "@/components/home/HeroThesisSection";
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
      {/* 60/40 Asymmetric Hero with System Thesis Diagram */}
      <HeroThesisSection />

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
                Audited statutory escape mechanisms (Tex. Prop. Code § 92.016 lease break, PUCT § 25.478 utility deposit waiver, CVC up to $5,000 relocation) + Travis, Williamson, Harris & Central Texas county pilot funds.
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
