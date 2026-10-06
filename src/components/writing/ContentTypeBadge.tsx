import React from "react";
import { ContentType } from "@/domain/writing/types";
import { Scale, Layers, BookOpen, Feather, Sparkles } from "lucide-react";

interface ContentTypeBadgeProps {
  type: ContentType;
  size?: "sm" | "md";
  className?: string;
}

export function ContentTypeBadge({ type, size = "md", className = "" }: ContentTypeBadgeProps) {
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-[9.5px]" : "px-2.5 py-1 text-[10.5px]";

  switch (type) {
    case "POLICY_ANALYSIS":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider rounded border bg-[#FDF2F2] text-[#971F26] border-[#971F26]/40 ${sizeClasses} ${className}`}
        >
          <Scale className="w-3 h-3 text-[#971F26]" />
          <span>Policy Analysis</span>
        </span>
      );

    case "SYSTEMS_NOTE":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider rounded border bg-[#EEE8DD] text-[#1C1D1D] border-[#1C1D1D] ${sizeClasses} ${className}`}
        >
          <Layers className="w-3 h-3 text-[#1C1D1D]" />
          <span>Systems Note</span>
        </span>
      );

    case "RESEARCH_NOTE":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider rounded border bg-[#E8F3EB] text-[#2D5A3D] border-[#2D5A3D]/40 ${sizeClasses} ${className}`}
        >
          <BookOpen className="w-3 h-3 text-[#2D5A3D]" />
          <span>Research Note</span>
        </span>
      );

    case "FOUNDER_ESSAY":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider rounded border bg-[#F5F1E8] text-stone-800 border-stone-400 ${sizeClasses} ${className}`}
        >
          <Feather className="w-3 h-3 text-stone-600" />
          <span>Founder Essay</span>
        </span>
      );

    case "PROJECT_UPDATE":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider rounded border bg-stone-200 text-stone-900 border-stone-400 ${sizeClasses} ${className}`}
        >
          <Sparkles className="w-3 h-3 text-stone-700" />
          <span>Project Update</span>
        </span>
      );
  }
}
