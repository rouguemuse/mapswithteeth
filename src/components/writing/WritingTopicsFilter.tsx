"use client";

import React from "react";
import { Article, ArticleTopic, ContentType } from "@/domain/writing/types";
import { WRITING_TOPICS } from "@/domain/writing/queries";
import { ArticleCard } from "./ArticleCard";
import { Filter, Sparkles, Layers, Scale, BookOpen, Feather } from "lucide-react";

interface WritingTopicsFilterProps {
  articles: Article[];
}

export function WritingTopicsFilter({ articles }: WritingTopicsFilterProps) {
  const [selectedTopic, setSelectedTopic] = React.useState<ArticleTopic | "All">("All");
  const [selectedType, setSelectedType] = React.useState<ContentType | "ALL">("ALL");

  const filteredArticles = React.useMemo(() => {
    return articles.filter((article) => {
      const matchesTopic =
        selectedTopic === "All" || article.topics.includes(selectedTopic);
      const matchesType =
        selectedType === "ALL" || article.contentType === selectedType;
      return matchesTopic && matchesType;
    });
  }, [articles, selectedTopic, selectedType]);

  const contentTypes: { label: string; value: ContentType | "ALL" }[] = [
    { label: "All Formats", value: "ALL" },
    { label: "Policy Analysis", value: "POLICY_ANALYSIS" },
    { label: "Systems Notes", value: "SYSTEMS_NOTE" },
    { label: "Research Notes", value: "RESEARCH_NOTE" },
    { label: "Founder Essays", value: "FOUNDER_ESSAY" },
  ];

  return (
    <div className="space-y-6 select-none font-sans">
      {/* Filter Control Bar */}
      <div className="p-4 sm:p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-3">
          <div className="flex items-center gap-2 text-stone-900 font-mono text-xs font-bold uppercase">
            <Filter className="w-4 h-4 text-[#971F26]" />
            <span>FILTER BY TOPIC & FORMAT</span>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold">
            SHOWING {filteredArticles.length} OF {articles.length} PIECES
          </span>
        </div>

        {/* Topics Row */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase font-bold text-stone-500 block">
            Topics:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {WRITING_TOPICS.map((topic) => {
              const count =
                topic === "All"
                  ? articles.length
                  : articles.filter((a) => a.topics.includes(topic)).length;

              if (count === 0 && topic !== "All") return null;

              const isSelected = selectedTopic === topic;
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-1 rounded text-xs font-mono font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#1C1D1D] text-white"
                      : "bg-[#F5F1E8] border border-stone-300 text-stone-800 hover:bg-[#D9D1C4]"
                  }`}
                >
                  <span>{topic}</span>
                  <span
                    className={`ml-1.5 text-[10px] ${
                      isSelected ? "text-stone-300" : "text-stone-500"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Type Filter */}
        <div className="space-y-1.5 pt-2 border-t border-[#D9D1C4]/70">
          <span className="text-[10px] font-mono uppercase font-bold text-stone-500 block">
            Format / Classification:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {contentTypes.map((ct) => {
              const count =
                ct.value === "ALL"
                  ? articles.length
                  : articles.filter((a) => a.contentType === ct.value).length;

              if (count === 0 && ct.value !== "ALL") return null;

              const isSelected = selectedType === ct.value;
              return (
                <button
                  key={ct.value}
                  type="button"
                  onClick={() => setSelectedType(ct.value)}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#971F26] text-white font-bold"
                      : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <span>{ct.label}</span>
                  <span className="ml-1 text-[9.5px] opacity-80">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Filtered Articles */}
      {filteredArticles.length === 0 ? (
        <div className="p-10 text-center bg-[#F5F1E8] rounded-xl border border-stone-300 font-mono text-xs text-stone-600 space-y-2">
          <p className="font-bold text-stone-800 text-sm">No articles match the selected filters.</p>
          <button
            onClick={() => {
              setSelectedTopic("All");
              setSelectedType("ALL");
            }}
            className="text-[#971F26] underline font-bold uppercase cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
