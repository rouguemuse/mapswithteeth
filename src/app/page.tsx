import React from "react";
import Link from "next/link";
import { BARRIER_CATEGORIES } from "@/data/barriers";
import { HeroThesisSection } from "@/components/home/HeroThesisSection";
import { ResourceStackGenerator } from "@/components/resources/ResourceStackGenerator";
import { StageRoadmapSection } from "@/components/home/StageRoadmapSection";
import { StakeholderFeedbackSection } from "@/components/feedback/StakeholderFeedbackSection";
import {
  ArrowRight,
  Compass,
  MapPin,
  Briefcase,
  Sparkles,
  MessageSquareQuote,
  Layers,
  ChevronRight
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24 select-none font-sans">
      {/* 60/40 Asymmetric Hero with System Thesis Diagram */}
      <HeroThesisSection />

      {/* BUILT / TESTING / PROPOSED Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StageRoadmapSection />
      </section>

      {/* The 3 Resource Layers (Atlas Field Guide Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#971F26] font-bold block mb-1">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              Three Distinct Resource Layers
            </h2>
          </div>
          <span className="coord-tick">
            [LAYER 1: TX · LAYER 2: NATIONAL · LAYER 3: INTAKE]
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Layer 1: Texas */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
                <span className="font-bold text-[#971F26] uppercase">LAYER 01</span>
                <span className="stamp-verified text-[9px] py-0.5 px-1.5">STATE & COUNTY</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">Texas Deep Dive</h3>
              <p className="text-xs text-stone-800 leading-relaxed font-sans">
                Audited statutory escape mechanisms (Tex. Prop. Code § 92.016 lease break, PUCT § 25.478 utility deposit waiver, CVC up to $5,000 relocation) + Travis, Williamson, Harris & Central Texas county pilot funds.
              </p>
            </div>
            <Link
              href="/texas"
              className="mt-6 text-xs font-bold font-mono text-[#971F26] hover:underline flex items-center gap-1.5 group"
            >
              <span>Explore Texas Directory</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Layer 2: Other Ways Through */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
                <span className="font-bold text-[#971F26] uppercase">LAYER 02</span>
                <span className="stamp-verified text-[9px] py-0.5 px-1.5">LOCATION-INDEPENDENT</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">Other Ways Through</h3>
              <p className="text-xs text-stone-800 leading-relaxed font-sans">
                Nationwide searchable library of programs based on occupation (Southern Smoke, Giving Kitchen, MusiCares, CERF+), companion animal safe havens, and federal Safe Connections Act phone separation.
              </p>
            </div>
            <Link
              href="/other-ways-through"
              className="mt-6 text-xs font-bold font-mono text-[#971F26] hover:underline flex items-center gap-1.5 group"
            >
              <span>Browse National & Industry Library</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Layer 3: Ask Us to Look */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
                <span className="font-bold text-[#971F26] uppercase">LAYER 03</span>
                <span className="stamp-alert text-[9px] py-0.5 px-1.5">INTAKE DOCKET</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">Ask Us to Look</h3>
              <p className="text-xs text-stone-800 leading-relaxed font-sans">
                Tell us your specific barrier, recent jobs, companion animals, and what failed. Generates immediate potential pathways and a structured research docket without requiring an abuse narrative.
              </p>
            </div>
            <Link
              href="/ask-us-to-look"
              className="mt-6 text-xs font-bold font-mono text-white bg-[#971F26] hover:bg-red-900 px-3.5 py-2.5 rounded-md flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <span>Start Resource Investigation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Resource Intelligence Stack Generator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResourceStackGenerator maxCards={6} />
      </section>

      {/* Barrier Explorer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#971F26] font-bold block mb-1">
              OBSTACLE MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              What are you trying to solve?
            </h2>
          </div>
          <Link
            href="/find-help"
            className="text-xs font-mono text-[#971F26] hover:underline flex items-center gap-1 font-bold"
          >
            <span>View All Barrier Filters & Full Directory →</span>
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {BARRIER_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/find-help?barrier=${cat.id}`}
              className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg hover:shadow-sm transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-stone-600 group-hover:text-[#971F26] mb-2 font-mono text-[10px]">
                <span className="uppercase font-bold">[{cat.category}]</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#971F26]" />
              </div>
              <h3 className="text-xs font-bold text-[#1C1D1D] group-hover:text-[#971F26] leading-snug font-sans">
                {cat.label}
              </h3>
              <p className="text-[11px] text-stone-700 line-clamp-2 mt-1 font-sans">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stakeholder Feedback Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StakeholderFeedbackSection />
      </section>
    </div>
  );
}
