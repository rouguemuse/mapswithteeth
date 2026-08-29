"use client";

import React from "react";
import Link from "next/link";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { MapPin, ArrowRight } from "lucide-react";

export function CountySelector({ currentSlug }: { currentSlug?: string }) {
  return (
    <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 my-6">
      <div className="flex items-center gap-2 text-stone-300 font-mono text-xs uppercase tracking-wider mb-3">
        <MapPin className="w-3.5 h-3.5 text-brand-ruby" />
        <span>Texas Priority Regions & Counties:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {ALL_TEXAS_COUNTIES.map((c) => {
          const isActive = currentSlug === c.slug;
          return (
            <Link
              key={c.slug}
              href={`/texas/${c.slug}`}
              className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-brand-ruby text-white border-red-700 font-bold shadow-sm"
                  : "bg-stone-950/80 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white"
              }`}
            >
              <span>{c.name}</span>
              <span className={`text-[10px] font-mono px-1 rounded ${
                c.isPilotRegion ? "bg-red-950 text-red-300 border border-red-800" : "bg-stone-800 text-stone-400"
              }`}>
                {c.isPilotRegion ? "Pilot" : "Gulf Coast"}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
