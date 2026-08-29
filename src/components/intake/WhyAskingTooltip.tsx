"use client";

import React, { useState } from "react";
import { HelpCircle, X } from "lucide-react";

export function WhyAskingTooltip({ explanation }: { explanation: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block ml-1.5 align-middle">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-stone-400 hover:text-brand-ruby transition-colors p-0.5"
        title="Why are we asking this question?"
        aria-label="Why are we asking this question?"
      >
        <HelpCircle className="w-3.5 h-3.5" />
      </button>

      {open && (
        <div className="absolute z-30 left-0 bottom-full mb-2 w-72 p-3 bg-stone-900 border border-stone-700 text-stone-200 text-[11px] rounded-lg shadow-2xl animate-fadeIn leading-relaxed">
          <div className="flex items-center justify-between font-semibold text-white mb-1 border-b border-stone-800 pb-1">
            <span className="text-[10px] uppercase font-mono text-brand-ruby">Why are we asking this?</span>
            <button
              onClick={() => setOpen(false)}
              className="text-stone-400 hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
