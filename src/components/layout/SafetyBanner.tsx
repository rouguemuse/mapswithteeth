"use client";

import React, { useState, useEffect } from "react";
import { ShieldAlert, LogOut, ArrowRight } from "lucide-react";

export function SafetyBanner({ onOpenSafeBrowsing }: { onOpenSafeBrowsing: () => void }) {
  const [showBanner, setShowBanner] = useState(true);

  // Quick exit trigger: Press Escape key twice or click
  useEffect(() => {
    let lastEscapeTime = 0;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const now = Date.now();
        if (now - lastEscapeTime < 600) {
          triggerQuickExit();
        }
        lastEscapeTime = now;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerQuickExit = () => {
    window.location.replace("https://www.weather.com");
  };

  if (!showBanner) return null;

  return (
    <aside aria-label="Emergency safety bar" className="bg-[#1C1B1A] text-stone-300 border-b border-stone-800 text-[11px] px-3 py-1.5 sm:px-4 select-none z-50 font-mono">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] text-stone-300">
          <ShieldAlert className="w-3.5 h-3.5 text-[#7A2026] shrink-0" />
          <span>
            <strong className="text-stone-200 font-bold uppercase tracking-wider">SAFETY ALERT:</strong> If someone monitors your device, browsing history may remain visible. Press <kbd className="bg-stone-800 text-stone-200 px-1 py-0.5 rounded border border-stone-700 text-[10px] font-mono">ESC</kbd> twice or click Quick Exit to leave instantly.
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <button
            onClick={onOpenSafeBrowsing}
            className="text-stone-300 hover:text-white underline text-[11px] transition-colors"
          >
            Digital Safety Guide
          </button>

          <button
            onClick={triggerQuickExit}
            className="bg-[#7A2026] hover:bg-[#5C181D] text-white font-bold px-2.5 py-1 rounded text-[10px] flex items-center gap-1.5 transition-all shadow-xs tracking-wider uppercase"
            title="Immediately redirect to Weather.com (Esc key twice)"
          >
            <ArrowRight className="w-3 h-3" />
            <span>QUICK EXIT</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
