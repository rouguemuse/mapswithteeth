import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { JAYME_VOLSTAD_AUTHOR } from "@/data/writing/author";
import { getPublicArticles, getExternalArticles } from "@/domain/writing/queries";
import { ArticleCard } from "@/components/writing/ArticleCard";
import {
  User,
  ArrowLeft,
  BookOpen,
  Globe,
  Layers,
  CheckCircle2,
  ExternalLink,
  Scale,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jayme Volstad | Author & Systems Researcher | Maps With Teeth",
  description:
    "Author profile and systems research index for Jayme Volstad, Founder & Project Director of Maps With Teeth.",
  alternates: {
    canonical: "https://mapswithteeth.org/writing/author",
  },
};

export default function AuthorPage() {
  const author = JAYME_VOLSTAD_AUTHOR;
  const publicArticles = getPublicArticles();
  const externalArticles = getExternalArticles();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans select-none">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-[#D9D1C4] pb-4 flex items-center justify-between text-xs font-mono text-stone-600">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-stone-700 hover:text-[#971F26] uppercase font-bold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Field Notes</span>
        </Link>
        <span className="coord-tick">[AUTHOR: JAYME VOLSTAD]</span>
      </nav>

      {/* Author Hero Block */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-5 border-b border-[#D9D1C4] pb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1C1D1D] text-white flex items-center justify-center font-serif font-bold text-2xl sm:text-3xl shadow-sm">
            JV
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold block">
              FOUNDER & PRINCIPAL INVESTIGATOR
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D]">
              {author.name}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-stone-700 font-bold">
              {author.role} · {author.affiliation}
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-stone-900 font-serif leading-relaxed">
            {author.bio}
          </p>

          <div className="p-4 bg-[#F5F1E8] rounded-xl border border-stone-300 space-y-2 text-xs">
            <span className="font-mono font-bold text-[#971F26] uppercase block">
              SYSTEMS POSITIONING & PHILOSOPHY
            </span>
            <p className="font-sans text-stone-800 leading-relaxed">
              Jayme approaches public technology not as marketing software or isolated portals, but as cross-system infrastructure. His research focuses on eliminating the human cost of administrative seams—where individuals in crisis are forced to act as unpaid integration layers between uncoordinated courts, child welfare agencies, law enforcement, and victim services.
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="pt-2 border-t border-[#D9D1C4] space-y-2 font-mono text-xs">
          <span className="font-bold text-stone-900 uppercase block">
            CORE DOMAINS & INVESTIGATION AREAS:
          </span>
          <div className="flex flex-wrap gap-2">
            {author.focusAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white border border-stone-300 rounded text-xs text-stone-800"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Authored Writing Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono">
          <div className="flex items-center gap-2 text-[#971F26]">
            <BookOpen className="w-4 h-4" />
            <h2 className="text-xs font-bold uppercase tracking-wider">
              ALL WRITING & RESEARCH BY JAYME VOLSTAD ({publicArticles.length})
            </h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {publicArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Relevant Project Work */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-5 font-sans">
        <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-3 text-[#971F26]">
          <Layers className="w-5 h-5" />
          <h2 className="text-lg font-serif font-bold text-[#1C1D1D]">
            Key Systems & Architecture Contributions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-xs font-sans text-stone-800">
          <div className="p-4 bg-[#EEE8DD] rounded-xl border border-stone-300 space-y-1.5">
            <span className="font-mono font-bold text-[#1C1D1D] uppercase block text-[11px]">
              1. CROSS-SYSTEM CONTINUITY STANDARD (v0.1)
            </span>
            <p className="leading-relaxed">
              Designed the 6-module protocol for interagency referral tracking, decision ownership, client-side cryptographic receipts, and context-before-closure audits.
            </p>
            <Link href="/continuity" className="text-[#971F26] hover:underline font-mono text-[11px] font-bold block pt-1">
              Explore Specification →
            </Link>
          </div>

          <div className="p-4 bg-[#EEE8DD] rounded-xl border border-stone-300 space-y-1.5">
            <span className="font-mono font-bold text-[#1C1D1D] uppercase block text-[11px]">
              2. TEXAS POLICY & SYSTEMS LAB
            </span>
            <p className="leading-relaxed">
              Synthesized Texas Family Code and Government Code precedents into an actionable 4-tier incremental adoption framework for county-level pilots and Sunset staff.
            </p>
            <Link href="/policy" className="text-[#971F26] hover:underline font-mono text-[11px] font-bold block pt-1">
              Explore Policy Lab →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
