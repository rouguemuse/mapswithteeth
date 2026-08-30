"use client";

import React, { useState, useEffect } from "react";
import { ShieldAlert, LogOut, Eye, X } from "lucide-react";

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
    // Overwrite history and immediately redirect to safe neutral website
    window.location.replace("https://www.weather.com");
  };

  if (!showBanner) return null;

  return (
    <aside aria-label="Emergency safety bar" className="bg-[#1C1D1D] text-stone-400 border-b border-stone-800 text-[11px] px-3 py-1 sm:px-4 select-none z-50 font-mono">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-[11px]">
          <ShieldAlert className="w-3 h-3 text-[#971F26] shrink-0" />
          <span>
            <strong className="text-stone-300 font-bold uppercase">Safety notice:</strong> If device is monitored, press <kbd className="bg-stone-800 text-stone-300 px-1 py-0.2 rounded border border-stone-700 text-[9px] font-mono">ESC twice</kbd> to leave.
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <button
            onClick={onOpenSafeBrowsing}
            className="text-stone-400 hover:text-stone-200 underline text-[10px] sm:text-[11px] flex items-center gap-1 transition-colors"
          >
            <Eye className="w-3 h-3 text-stone-400" />
            <span>Digital Safety Guide</span>
          </button>

          <button
            onClick={triggerQuickExit}
            className="bg-[#971F26] hover:bg-red-900 text-white font-bold px-2 py-0.5 rounded text-[9px] sm:text-[10px] flex items-center gap-1 transition-all shadow-xs tracking-wider uppercase"
            title="Immediately redirect to Weather.com (Esc key twice)"
          >
            <LogOut className="w-2.5 h-2.5" />
            <span>QUICK EXIT</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
