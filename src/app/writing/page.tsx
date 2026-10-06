import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  getPublicArticles,
  getFeaturedArticle,
  getExternalArticles,
  getPolicyAndResearchArticles,
} from "@/domain/writing/queries";
import { ArticleCard } from "@/components/writing/ArticleCard";
import { WritingTopicsFilter } from "@/components/writing/WritingTopicsFilter";
import { FeaturedElsewhereSection } from "@/components/writing/FeaturedElsewhereSection";
import { AuthorBioCard } from "@/components/writing/AuthorBioCard";
import { BookOpen, Layers, Scale, Sparkles, Rss, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Field Notes & Systems Analysis | Maps With Teeth",
  description:
    "Writing, research, and analysis about institutional seams, public systems, continuity, technology, evidence, and what happens when responsibility crosses a boundary.",
  alternates: {
    canonical: "https://mapswithteeth.org/writing",
    types: {
      "application/rss+xml": "https://mapswithteeth.org/writing/feed.xml",
    },
  },
  openGraph: {
    title: "Field Notes & Systems Analysis | Maps With Teeth",
    description:
      "Writing, research, and analysis about institutional seams, public systems, continuity, technology, evidence, and what happens when responsibility crosses a boundary.",
    url: "https://mapswithteeth.org/writing",
    siteName: "Maps With Teeth",
    type: "website",
  },
};

export default function WritingIndexPage() {
  const allPublicArticles = getPublicArticles();
  const featuredArticle = getFeaturedArticle();
  const externalArticles = getExternalArticles();
  const policyAndResearchArticles = getPolicyAndResearchArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none font-sans">
      {/* 1. Header Block */}
      <div className="border-b border-[#D9D1C4] pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              EDITORIAL & SYSTEMS ARCHIVE
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/writing/feed.xml"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EEE8DD] border border-[#1C1D1D] rounded text-xs font-mono font-bold text-stone-800 hover:bg-[#D9D1C4] transition-colors"
              title="Subscribe via RSS feed"
            >
              <Rss className="w-3.5 h-3.5 text-[#971F26]" />
              <span>RSS Feed</span>
            </Link>
            <span className="coord-tick">[INDEX: /WRITING]</span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-none">
            Field Notes
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-800 font-serif italic max-w-3xl leading-relaxed">
            Writing, research, and analysis about institutional seams, public systems, continuity, technology, evidence, and what happens when responsibility crosses a boundary.
          </p>
        </div>

        <div className="p-3.5 bg-[#EEE8DD] rounded-lg border border-[#D9D1C4] text-xs font-mono text-stone-700 flex flex-wrap items-center justify-between gap-2">
          <span>
            Authored by <strong>Jayme Volstad</strong> · Permanent canonical home for Maps With Teeth research.
          </span>
          <Link
            href="/writing/author"
            className="text-[#971F26] hover:underline font-bold uppercase"
          >
            View Author Profile →
          </Link>
        </div>
      </div>

      {/* 2. Featured Article Section */}
      {featuredArticle && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
            <span className="text-xs font-mono uppercase font-bold text-[#971F26] tracking-wider">
              FEATURED ESSAY
            </span>
            <span className="text-xs font-mono text-stone-600 font-bold">
              CANONICAL ORIGINAL
            </span>
          </div>
          <ArticleCard article={featuredArticle} layout="featured" />
        </section>
      )}

      {/* 3. Interactive Filter & Latest Chronological Feed */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
          <div>
            <span className="text-xs font-mono uppercase font-bold text-[#971F26] tracking-wider block">
              CATALOG & ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
              All Field Notes & Articles
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold">
            {allPublicArticles.length} PUBLISHED PIECES
          </span>
        </div>

        {/* Client-side Topic & Type Filter */}
        <WritingTopicsFilter articles={allPublicArticles} />
      </section>

      {/* 4. Published Elsewhere Section */}
      {externalArticles.length > 0 && (
        <FeaturedElsewhereSection
          title="Published in Outside Outlets"
          subtitle="Selected research commentaries and articles originally published by outside journals and policy platforms."
        />
      )}

      {/* 5. Author Biography Card */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
          <span className="text-xs font-mono uppercase font-bold text-stone-600 tracking-wider">
            AUTHOR & PRINCIPAL INVESTIGATOR
          </span>
        </div>
        <AuthorBioCard showFullDetails={true} />
      </section>
    </div>
  );
}
