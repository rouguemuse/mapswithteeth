"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h2 className="text-2xl font-serif font-bold text-[#1C1D1D]">Something went wrong</h2>
      <p className="text-sm text-stone-600 max-w-md">An unexpected error occurred. Please try again or return to the homepage.</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-[#971F26] text-white rounded font-mono text-xs font-bold hover:bg-[#7a181e] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}