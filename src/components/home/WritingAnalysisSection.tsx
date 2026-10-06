import React from "react";
import Link from "next/link";
import { getPublicArticles } from "@/domain/writing/queries";
import { ArticleCard } from "@/components/writing/ArticleCard";
import { BookOpen, ArrowRight, Layers } from "lucide-react";

export function WritingAnalysisSection() {
  // Show up to 3 published pieces
  const recentArticles = getPublicArticles().slice(0, 3);

  if (recentArticles.length === 0) return null;

  return (
    <section
      aria-label="Writing and systems analysis"
      className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm bg-grid-diagram select-none font-sans"
    >
      {/* Section Header */}
      <div className="border-b border-[#D9D1C4] pb-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-bold">
              SECTION 08 · FIELD NOTES & ESSAYS
            </span>
          </div>
          <span className="coord-tick">[INDEX: /WRITING]</span>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            Writing & Systems Analysis
          </h2>
          <p className="text-sm sm:text-base font-mono font-bold text-[#971F26] uppercase">
            Original essays, policy analysis, and research on institutional seams.
          </p>
        </div>

        <p className="text-stone-800 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
          In addition to software and protocol prototypes, Maps With Teeth publishes rigorous systems analysis examining what happens when human lives and legal cases cross institutional boundaries.
        </p>
      </div>

      {/* 3 Articles Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} layout="standard" />
        ))}
      </div>

      {/* Section Footer / CTA */}
      <div className="pt-4 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <span className="text-stone-600">
          Permanent canonical archive of Jayme Volstad&apos;s research and field notes.
        </span>
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white font-bold rounded uppercase tracking-wider transition-colors shadow-2xs"
        >
          <span>Explore Field Notes</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
