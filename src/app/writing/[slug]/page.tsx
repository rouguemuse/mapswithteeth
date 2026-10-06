import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getPublicArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/domain/writing/queries";
import { ContentTypeBadge } from "@/components/writing/ContentTypeBadge";
import { WhatThisArticleDoesNotClaim } from "@/components/writing/WhatThisArticleDoesNotClaim";
import { SourceNotesSection } from "@/components/writing/SourceNotesSection";
import { PublicationHistorySection } from "@/components/writing/PublicationHistorySection";
import { CiteArticleSection } from "@/components/writing/CiteArticleSection";
import { AuthorBioCard } from "@/components/writing/AuthorBioCard";
import { ArticleCard } from "@/components/writing/ArticleCard";
import {
  Calendar,
  Clock,
  ExternalLink,
  ArrowLeft,
  Globe,
  Share2,
  Printer,
  BookOpen,
  Layers,
  ChevronRight,
} from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes for all public articles at build time
export async function generateStaticParams() {
  const articles = getPublicArticles();
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

// Generate SEO and OpenGraph metadata
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Maps With Teeth",
      description: "The requested article could not be found.",
    };
  }

  const isExternal = article.publicationOrigin === "external";
  const canonicalUrl = article.canonicalUrl || `https://mapswithteeth.org/writing/${article.slug}`;

  return {
    title: `${article.title} | Maps With Teeth Field Notes`,
    description: article.dek,
    authors: [{ name: article.author || "Jayme Volstad", url: "https://mapswithteeth.org/writing/author" }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | Maps With Teeth`,
      description: article.dek,
      url: canonicalUrl,
      siteName: "Maps With Teeth Field Notes",
      type: "article",
      publishedTime: article.publicationDate,
      modifiedTime: article.lastUpdated || article.publicationDate,
      authors: [article.author || "Jayme Volstad"],
      tags: article.topics,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const isExternal = article.publicationOrigin === "external";
  const isSyndicated = article.publicationOrigin === "syndicated";
  const relatedArticles = getRelatedArticles(article, 3);

  // Schema.org Article JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": article.contentType === "POLICY_ANALYSIS" ? "TechArticle" : "Article",
    headline: article.title,
    description: article.dek,
    author: {
      "@type": "Person",
      name: article.author || "Jayme Volstad",
      url: "https://mapswithteeth.org/writing/author",
    },
    publisher: {
      "@type": "Organization",
      name: isExternal && article.externalPublicationName ? article.externalPublicationName : "Maps With Teeth",
      url: isExternal && article.externalPublicationUrl ? article.externalPublicationUrl : "https://mapswithteeth.org",
    },
    datePublished: article.publicationDate,
    dateModified: article.lastUpdated || article.publicationDate,
    mainEntityOfPage: article.canonicalUrl,
    keywords: article.topics.join(", "),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans select-none">
      {/* Inject Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumb & Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-600">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-stone-700 hover:text-[#971F26] uppercase font-bold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Field Notes</span>
        </Link>

        <div className="flex items-center gap-2">
          <span>FIELD NOTES</span>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-[#1C1D1D] font-bold truncate max-w-[200px] sm:max-w-xs">
            {article.slug}
          </span>
        </div>
      </nav>

      {/* 2. Article Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ContentTypeBadge type={article.contentType} />
          <div className="flex items-center gap-3 text-xs font-mono text-stone-600">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-stone-500" />
              <span>{article.displayDate}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{article.readingTime}</span>
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] leading-tight tracking-tight">
            {article.title}
          </h1>
          <p className="text-lg sm:text-xl text-stone-800 font-serif italic leading-relaxed">
            {article.dek}
          </p>
        </div>

        {/* Author / Origin Sub-banner */}
        <div className="p-4 bg-[#EEE8DD] rounded-xl border border-[#D9D1C4] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-stone-500 uppercase font-bold block text-[10px]">
              AUTHOR
            </span>
            <Link
              href="/writing/author"
              className="text-[#1C1D1D] font-bold hover:text-[#971F26] text-sm font-sans"
            >
              {article.author}
            </Link>
            <span className="text-stone-600 block text-[11px]">
              {article.authorRole || "Founder / Project Director, Maps With Teeth"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {article.topics.map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 bg-white border border-stone-300 rounded text-[10.5px] text-stone-800"
              >
                #{topic}
              </span>
            ))}
          </div>
        </div>

        {/* External Publication Ribbon */}
        {isExternal && article.externalPublicationName && (
          <div className="p-4 bg-[#FDF2F2] border-2 border-[#971F26] rounded-xl space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#971F26] uppercase flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                ORIGINALLY PUBLISHED BY {article.externalPublicationName}
              </span>
              <span className="text-stone-600">{article.displayDate}</span>
            </div>
            <p className="font-sans text-stone-800 text-xs leading-relaxed">
              This research piece was originally commissioned and published by{" "}
              <strong>{article.externalPublicationName}</strong>. Maps With Teeth maintains an index record and abstract here while respecting the primary publisher&apos;s distribution rights.
            </p>
          </div>
        )}
      </header>

      {/* 3. Main Content Rendering */}
      {isExternal ? (
        /* EXTERNAL PUBLICATION EDITORIAL LANDING */
        <section className="space-y-8 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm">
          {/* Abstract / Summary */}
          {article.abstract && (
            <div className="space-y-2 border-b border-[#D9D1C4] pb-6">
              <span className="text-xs font-mono uppercase font-bold text-[#971F26] block tracking-wider">
                EXECUTIVE ABSTRACT
              </span>
              <p className="text-base sm:text-lg text-stone-900 font-sans leading-relaxed">
                {article.abstract}
              </p>
            </div>
          )}

          {/* Why it Matters */}
          {article.whyItMatters && (
            <div className="p-4 bg-[#EEE8DD] rounded-xl border border-stone-300 space-y-1 text-xs">
              <span className="font-mono font-bold text-stone-900 uppercase block">
                WHY THIS PIECE MATTERS TO MAPS WITH TEETH:
              </span>
              <p className="font-sans text-stone-800 text-sm leading-relaxed">
                {article.whyItMatters}
              </p>
            </div>
          )}

          {/* Permitted Excerpt */}
          {article.excerpt && (
            <div className="p-6 bg-white border-l-4 border-l-[#971F26] border border-stone-300 rounded-r-xl space-y-2">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">
                PERMITTED EXCERPT
              </span>
              <blockquote className="font-serif italic text-base sm:text-lg text-stone-900 leading-relaxed">
                {article.excerpt}
              </blockquote>
            </div>
          )}

          {/* Prominent External CTA */}
          <div className="p-6 bg-[#1C1D1D] text-white rounded-xl flex flex-wrap items-center justify-between gap-4 font-mono text-xs shadow-md">
            <div className="space-y-1">
              <span className="text-stone-400 uppercase text-[10px] block">
                PRIMARY PUBLICATION DESTINATION
              </span>
              <p className="font-serif font-bold text-base text-white">
                Read the full article at {article.externalPublicationName}
              </p>
            </div>

            <a
              href={article.externalPublicationUrl || article.canonicalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#971F26] hover:bg-[#7A181E] text-white font-bold rounded uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <span>READ AT {article.externalPublicationName?.toUpperCase()}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      ) : (
        /* MAPS WITH TEETH ORIGINAL ESSAY BODY */
        <section className="space-y-8">
          {/* Evidentiary Guardrail Box */}
          <WhatThisArticleDoesNotClaim claims={article.whatThisArticleDoesNotClaim} />

          {/* Article Markdown/Structured Body */}
          <div className="prose prose-stone max-w-none font-sans text-stone-900 leading-relaxed text-base sm:text-[17px] space-y-6">
            {article.body?.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();

              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D] pt-6 border-t border-[#D9D1C4] mt-8 tracking-tight"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }

              if (trimmed.startsWith("#### ")) {
                return (
                  <h4
                    key={idx}
                    className="text-base sm:text-lg font-serif font-bold text-[#971F26] pt-3 tracking-tight"
                  >
                    {trimmed.replace("#### ", "")}
                  </h4>
                );
              }

              if (trimmed.startsWith("```")) {
                const codeContent = trimmed.replace(/```[a-z]*\n?|\n?```/g, "");
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#EEE8DD] rounded-xl border border-[#1C1D1D] font-mono text-xs overflow-x-auto my-4 text-stone-900"
                  >
                    <pre className="whitespace-pre">{codeContent}</pre>
                  </div>
                );
              }

              if (trimmed.startsWith("- ")) {
                const listItems = trimmed.split("\n").map((line) => line.replace(/^- /, ""));
                return (
                  <ul key={idx} className="space-y-2 pl-4 list-disc marker:text-[#971F26] my-4 text-sm sm:text-base text-stone-800">
                    {listItems.map((item, lIdx) => (
                      <li key={lIdx} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
                    ))}
                  </ul>
                );
              }

              if (trimmed.startsWith("1. ")) {
                const listItems = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s*/, ""));
                return (
                  <ol key={idx} className="space-y-2 pl-4 list-decimal marker:text-[#971F26] font-bold my-4 text-sm sm:text-base text-stone-800">
                    {listItems.map((item, lIdx) => (
                      <li key={lIdx} className="font-normal" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
                    ))}
                  </ol>
                );
              }

              if (trimmed === "---") {
                return <hr key={idx} className="border-t border-[#D9D1C4] my-8" />;
              }

              return (
                <p
                  key={idx}
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }}
                />
              );
            })}
          </div>
        </section>
      )}

      {/* 4. Primary Source Notes & Disclosures */}
      <SourceNotesSection
        sourceNotes={article.sourceNotes}
        disclosureNote={article.disclosureNote}
      />

      {/* 5. Publication History & Canonical Registry */}
      <PublicationHistorySection
        origin={article.publicationOrigin}
        publicationDate={article.publicationDate}
        displayDate={article.displayDate}
        history={article.publicationHistory}
        externalName={article.externalPublicationName}
        externalUrl={article.externalPublicationUrl}
      />

      {/* 6. Cite This Article Block */}
      <CiteArticleSection article={article} />

      {/* 7. Author Bio Block */}
      <AuthorBioCard showFullDetails={false} />

      {/* 8. Related Writing */}
      {relatedArticles.length > 0 && (
        <section className="space-y-6 pt-6 border-t-2 border-[#1C1D1D]">
          <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#971F26] tracking-wider block">
                CONTINUE READING
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
                Related Field Notes & Analysis
              </h3>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} layout="compact" />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

/**
 * Simple inline formatter for bold text and italic highlights in markdown blocks.
 */
function formatInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 bg-[#EEE8DD] border border-stone-300 rounded font-mono text-xs text-stone-900">$1</code>');
}
