import React from "react";
import Link from "next/link";
import { Article } from "@/domain/writing/types";
import { ContentTypeBadge } from "./ContentTypeBadge";
import { Clock, Calendar, ExternalLink, ArrowRight, Globe } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  layout?: "standard" | "featured" | "compact";
  className?: string;
}

export function ArticleCard({ article, layout = "standard", className = "" }: ArticleCardProps) {
  const isExternal = article.publicationOrigin === "external";
  const isSyndicated = article.publicationOrigin === "syndicated";
  const articleUrl = `/writing/${article.slug}`;

  if (layout === "featured") {
    return (
      <article
        className={`bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-6 flex flex-col justify-between transition-all hover:shadow-md ${className}`}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-3">
            <div className="flex items-center gap-2">
              <ContentTypeBadge type={article.contentType} />
              <span className="px-2 py-0.5 bg-[#971F26] text-white text-[10px] font-mono font-bold uppercase rounded">
                FEATURED ESSAY
              </span>
            </div>
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

          <div className="space-y-2">
            <Link href={articleUrl} className="group block">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1D1D] group-hover:text-[#971F26] transition-colors leading-tight tracking-tight">
                {article.title}
              </h2>
            </Link>
            <p className="text-sm sm:text-base text-stone-800 font-sans leading-relaxed">
              {article.dek}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed pt-2 border-t border-[#D9D1C4]">
            {article.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            {article.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 bg-[#F5F1E8] border border-stone-300 rounded text-[10.5px] text-stone-700"
              >
                #{topic}
              </span>
            ))}
          </div>

          <Link
            href={articleUrl}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1C1D1D] hover:bg-[#971F26] text-white font-bold rounded uppercase tracking-wider transition-colors shadow-2xs"
          >
            <span>Read Complete Essay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </article>
    );
  }

  if (layout === "compact") {
    return (
      <article
        className={`bg-[#F5F1E8] border border-[#D9D1C4] rounded-xl p-4 space-y-3 shadow-2xs hover:border-[#1C1D1D] transition-colors flex flex-col justify-between ${className}`}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
            <ContentTypeBadge type={article.contentType} size="sm" />
            <span className="text-[11px] font-mono text-stone-600">{article.displayDate}</span>
          </div>

          <div>
            <Link href={articleUrl} className="group">
              <h3 className="font-serif font-bold text-base text-[#1C1D1D] group-hover:text-[#971F26] transition-colors leading-snug">
                {article.title}
              </h3>
            </Link>
            <p className="text-xs text-stone-700 font-sans mt-1 line-clamp-2 leading-relaxed">
              {article.dek}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#D9D1C4] flex items-center justify-between text-[11px] font-mono">
          {isExternal ? (
            <span className="text-[#971F26] font-bold flex items-center gap-1">
              <span>{article.externalPublicationName}</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          ) : (
            <span className="text-stone-600">{article.readingTime}</span>
          )}

          <Link
            href={articleUrl}
            className="text-stone-900 hover:text-[#971F26] font-bold inline-flex items-center gap-0.5"
          >
            <span>Read</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </article>
    );
  }

  // Default: Standard Article Card
  return (
    <article
      className={`bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 ${className}`}
    >
      <div className="space-y-3">
        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2.5">
          <ContentTypeBadge type={article.contentType} />
          <div className="flex items-center gap-2 text-[11px] font-mono text-stone-600">
            <span>{article.displayDate}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
        </div>

        {/* External Publication Ribbon if applicable */}
        {isExternal && article.externalPublicationName && (
          <div className="px-2.5 py-1 bg-[#EEE8DD] border border-stone-300 rounded text-[11px] font-mono text-stone-800 flex items-center justify-between">
            <span className="font-bold uppercase tracking-wider text-[#971F26]">
              Originally Published by {article.externalPublicationName}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
          </div>
        )}

        {isSyndicated && (
          <div className="px-2.5 py-0.5 bg-[#EEE8DD] border border-stone-300 rounded text-[10.5px] font-mono text-stone-700 flex items-center gap-1">
            <Globe className="w-3 h-3 text-stone-500" />
            <span>Maps With Teeth Original · Syndicated</span>
          </div>
        )}

        {/* Title & Dek */}
        <div className="space-y-1.5">
          <Link href={articleUrl} className="group block">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1C1D1D] group-hover:text-[#971F26] transition-colors leading-snug">
              {article.title}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
            {article.dek}
          </p>
        </div>

        {/* Topic Badges */}
        <div className="flex flex-wrap items-center gap-1 pt-1">
          {article.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded text-[10px] font-mono text-stone-700"
            >
              #{topic}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer / CTA */}
      <div className="pt-3 border-t border-[#D9D1C4] flex items-center justify-between font-mono text-xs">
        <span className="text-stone-600 text-[11px]">By {article.author}</span>
        <Link
          href={articleUrl}
          className="inline-flex items-center gap-1 font-bold text-[#971F26] hover:text-[#7A181E] uppercase tracking-wider"
        >
          {isExternal ? (
            <>
              <span>Read Abstract & Link</span>
              <ExternalLink className="w-3 h-3" />
            </>
          ) : (
            <>
              <span>Read Note</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </Link>
      </div>
    </article>
  );
}
