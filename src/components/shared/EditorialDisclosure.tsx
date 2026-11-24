"use client";

import React, { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

interface EditorialDisclosureProps {
  kicker?: string;
  title: string;
  summary?: string;
  badge?: string;
  defaultOpen?: boolean;
  variant?: "light" | "dark";
  children: React.ReactNode;
}

export function EditorialDisclosure({
  kicker,
  title,
  summary,
  badge,
  defaultOpen = false,
  variant = "light",
  children,
}: EditorialDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const isDark = variant === "dark";

  return (
    <div
      className={`border-[1.5px] rounded-xs transition-colors overflow-hidden ${
        isDark
          ? "bg-[rgba(18,17,16,0.94)] border-mwt-paper-muted/35 text-mwt-paper-display"
          : "bg-mwt-paper-warm border-mwt-black text-mwt-black"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className={`w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer transition-colors ${
          isDark
            ? "hover:bg-mwt-charcoal/80"
            : "hover:bg-mwt-paper-muted/70"
        }`}
      >
        <div className="space-y-1 flex-1 min-w-0">
          {(kicker || badge) && (
            <div className="flex flex-wrap items-center gap-2">
              {kicker && (
                <span
                  className={`font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] ${
                    isDark ? "text-mwt-signal-bright" : "text-mwt-crimson-seal"
                  }`}
                >
                  {kicker}
                </span>
              )}
              {badge && (
                <span
                  className={`font-mono text-[10px] px-2 py-0.5 uppercase font-bold rounded-xs ${
                    isDark
                      ? "bg-mwt-charcoal text-[#C8BFA8] border border-mwt-paper-muted/20"
                      : "bg-mwt-paper border border-mwt-border-paper text-mwt-graphite"
                  }`}
                >
                  {badge}
                </span>
              )}
            </div>
          )}

          <div
            className={`font-display text-base sm:text-lg font-extrabold leading-snug ${
              isDark ? "text-mwt-paper-display" : "text-mwt-black"
            }`}
          >
            {title}
          </div>

          {summary && (
            <p
              className={`text-xs font-sans leading-relaxed ${
                isDark ? "text-[#C8BFA8]" : "text-mwt-graphite"
              }`}
            >
              {summary}
            </p>
          )}
        </div>

        <div
          className={`px-2.5 py-1.5 rounded-xs font-mono text-[10.5px] font-bold uppercase tracking-wider shrink-0 inline-flex items-center gap-1.5 border mt-0.5 ${
            isDark
              ? "bg-mwt-charcoal border-mwt-paper-muted/30 text-mwt-paper-muted"
              : "bg-mwt-paper border-mwt-black/40 text-mwt-black"
          }`}
        >
          <span className="hidden sm:inline">{isOpen ? "Hide" : "Inspect"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-mwt-signal-bright" : ""
            }`}
            aria-hidden="true"
          />
        </div>
      </button>

      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-label={title}
          className={`p-4 sm:p-6 border-t ${
            isDark
              ? "border-mwt-charcoal bg-[#0E0D0C]/95"
              : "border-mwt-border-paper bg-mwt-paper"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
