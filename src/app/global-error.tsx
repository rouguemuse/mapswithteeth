"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F1E8] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#1C1D1D]">System Error</h2>
        <p className="text-sm text-stone-600 max-w-md">A critical error occurred. Please refresh the page.</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-[#971F26] text-white rounded font-mono text-xs font-bold hover:bg-[#7a181e] transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}