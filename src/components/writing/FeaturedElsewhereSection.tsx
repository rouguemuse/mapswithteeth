import React from "react";
import { ExternalLink, Globe, BookOpen } from "lucide-react";
import { getExternalArticles } from "@/domain/writing/queries";

interface FeaturedElsewhereSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

export function FeaturedElsewhereSection({
  title = "Published & Featured Elsewhere",
  subtitle = "External articles, policy commentaries, and systems analysis authored for outside publications.",
  limit = 3,
  className = ""
}: FeaturedElsewhereSectionProps) {
  const externalArticles = getExternalArticles().slice(0, limit);

  if (externalArticles.length === 0) return null;

  return (
    <section
      aria-label="Featured Elsewhere"
      className={`bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-sm select-none font-sans ${className}`}
    >
      <div className="border-b border-[#D9D1C4] pb-4 space-y-1">
        <div className="flex items-center gap-2 text-[#971F26]">
          <Globe className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            EXTERNAL PUBLICATIONS & DISPATCHES
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-stone-700 font-sans max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {externalArticles.map((item) => (
          <div
            key={item.slug}
            className="bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl p-5 space-y-3 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-xs">
                <span className="font-bold text-[#971F26] uppercase">
                  {item.externalPublicationName}
                </span>
                <span className="text-stone-500 text-[11px]">{item.displayDate}</span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C1D1D] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-700 font-sans mt-1.5 leading-relaxed line-clamp-3">
                  {item.dek}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D9D1C4] flex items-center justify-between font-mono text-xs">
              <a
                href={item.externalPublicationUrl || item.canonicalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#971F26] hover:text-[#7A181E] uppercase tracking-wider"
              >
                <span>Read at {item.externalPublicationName}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
