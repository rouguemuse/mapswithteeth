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
    <aside aria-label="Emergency safety bar" className="bg-brand-dark text-stone-200 border-b border-stone-800 text-xs px-3 py-2 sm:px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-brand-ruby shrink-0" />
          <span>
            <strong className="text-white font-medium">Safety Alert:</strong> If someone monitors your device, browsing history may remain visible. Press <kbd className="bg-stone-800 text-stone-300 px-1 py-0.5 rounded border border-stone-700 text-[10px] font-mono">ESC</kbd> twice or click Quick Exit to leave instantly.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSafeBrowsing}
            className="text-stone-300 hover:text-white underline text-xs flex items-center gap-1 font-medium transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Digital Safety Guide</span>
          </button>

          <button
            onClick={triggerQuickExit}
            className="bg-brand-ruby hover:bg-red-700 text-white font-bold px-3 py-1 rounded text-xs flex items-center gap-1 transition-colors shadow-sm"
            title="Immediately redirect to Weather.com (Esc key twice)"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>QUICK EXIT</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
