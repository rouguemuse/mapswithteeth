"use client";

import React, { useState, useEffect } from "react";
import { ShieldAlert, ArrowRight } from "lucide-react";

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
    <aside
      aria-label="Emergency safety bar"
      className="bg-mwt-black text-mwt-ivory border-b border-[#2B2926] text-[11px] px-3 py-1.5 sm:px-4 select-none z-50 font-mono"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] text-[#D8D2C6]">
          <ShieldAlert className="w-3.5 h-3.5 text-mwt-oxblood shrink-0" aria-hidden="true" />
          <span>
            <strong className="text-white font-bold uppercase tracking-wider">SAFETY NOTICE:</strong>{" "}
            Browsing history remains on monitored devices. Press{" "}
            <kbd className="bg-[#24211E] text-white px-1.5 py-0.5 rounded-xs border border-[#3E3A35] text-[10px] font-mono">
              ESC
            </kbd>{" "}
            twice or click Quick Exit to redirect immediately.
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <button
            type="button"
            onClick={onOpenSafeBrowsing}
            className="text-[#D8D2C6] hover:text-white underline text-[11px] transition-colors focus:outline-none focus:ring-1 focus:ring-mwt-oxblood"
          >
            Digital Safety Guide
          </button>

          <button
            type="button"
            onClick={triggerQuickExit}
            className="bg-mwt-oxblood hover:bg-mwt-oxblood-dark text-white font-bold px-3 py-1 rounded-xs text-[10px] flex items-center gap-1.5 transition-all shadow-xs tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-white"
            title="Immediately redirect to Weather.com (or press Esc twice)"
          >
            <span>QUICK EXIT</span>
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
}
