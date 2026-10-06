"use client";

import React, { useState } from "react";
import { Article } from "@/domain/writing/types";
import { generateArticleCitation, generateBibtexCitation } from "@/domain/writing/citation";
import { Copy, Check, Quote, Code } from "lucide-react";

interface CiteArticleSectionProps {
  article: Article;
  className?: string;
}

export function CiteArticleSection({ article, className = "" }: CiteArticleSectionProps) {
  const [copiedText, setCopiedText] = useState(false);
  const [format, setFormat] = useState<"standard" | "bibtex">("standard");

  const standardCitation = generateArticleCitation(article);
  const bibtexCitation = generateBibtexCitation(article);

  const activeText = format === "standard" ? standardCitation : bibtexCitation;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeText);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      aria-label="Citation section"
      className={`bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 font-sans ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
        <div className="flex items-center gap-2 text-[#971F26]">
          <Quote className="w-4 h-4" />
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider">
            CITE THIS ARTICLE
          </h3>
        </div>

        {/* Format toggle */}
        <div className="inline-flex rounded border border-[#1C1D1D] bg-[#EEE8DD] p-0.5 text-[10px] font-mono">
          <button
            type="button"
            onClick={() => setFormat("standard")}
            className={`px-2 py-0.5 rounded font-bold transition-colors ${
              format === "standard"
                ? "bg-[#1C1D1D] text-white"
                : "text-stone-700 hover:text-stone-900"
            }`}
          >
            Standard
          </button>
          <button
            type="button"
            onClick={() => setFormat("bibtex")}
            className={`px-2 py-0.5 rounded font-bold transition-colors ${
              format === "bibtex"
                ? "bg-[#1C1D1D] text-white"
                : "text-stone-700 hover:text-stone-900"
            }`}
          >
            BibTeX
          </button>
        </div>
      </div>

      <div className="p-3.5 bg-[#EEE8DD] rounded-lg border border-stone-300 font-mono text-xs text-stone-900 leading-relaxed overflow-x-auto">
        <pre className="whitespace-pre-wrap font-mono text-[11.5px] select-all">
          {activeText}
        </pre>
      </div>

      <div className="flex items-center justify-between font-mono text-[11px] text-stone-600 pt-1">
        <span>
          {article.publicationOrigin === "external"
            ? "Citing original publishing outlet"
            : "Canonical digital publication"}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-[#1C1D1D] text-[#1C1D1D] hover:bg-stone-100 font-bold rounded text-xs transition-colors shadow-2xs"
        >
          {copiedText ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#2D5A3D]" />
              <span className="text-[#2D5A3D]">Citation Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Citation</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
