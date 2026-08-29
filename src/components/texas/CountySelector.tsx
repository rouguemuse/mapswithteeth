"use client";

import React from "react";
import Link from "next/link";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { MapPin } from "lucide-react";

export function CountySelector({ currentSlug }: { currentSlug?: string }) {
  return (
    <div className="bg-brand-paper border border-brand-sand rounded-xl p-4 my-6 shadow-sm">
      <div className="flex items-center gap-2 text-brand-charcoal font-mono text-xs uppercase tracking-wider mb-3 font-bold">
        <MapPin className="w-3.5 h-3.5 text-brand-oxblood" />
        <span>Texas Priority Regions & Counties:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {ALL_TEXAS_COUNTIES.map((c) => {
          const isActive = currentSlug === c.slug;
          return (
            <Link
              key={c.slug}
              href={`/texas/${c.slug}`}
              className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 font-mono ${
                isActive
                  ? "bg-brand-oxblood text-white border-red-950 font-bold shadow-sm"
                  : "bg-brand-ivory text-stone-700 border-stone-300 hover:border-stone-400 hover:text-brand-charcoal"
              }`}
            >
              <span>{c.name}</span>
              <span className={`text-[10px] font-mono px-1 rounded ${
                c.isPilotRegion ? "bg-amber-100 text-amber-900 border border-amber-300 font-bold" : "bg-stone-200 text-stone-600"
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
