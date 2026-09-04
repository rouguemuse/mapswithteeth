"use client";

import React from "react";
import Link from "next/link";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { MapPin, Compass } from "lucide-react";

export function CountySelector({ currentSlug }: { currentSlug?: string }) {
  return (
    <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-4 my-6 shadow-2xs select-none">
      <div className="flex items-center gap-2 text-[#1C1D1D] font-mono text-xs uppercase tracking-wider mb-3 font-bold">
        <Compass className="w-3.5 h-3.5 text-[#971F26]" />
        <span>SELECT JURISDICTION / PILOT COUNTY:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {ALL_TEXAS_COUNTIES.map((c) => {
          const isActive = currentSlug === c.slug;
          return (
            <Link
              key={c.slug}
              href={`/texas/${c.slug}`}
              className={`px-3 py-1.5 rounded-md border text-xs font-mono transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#1C1D1D] text-white border-[#1C1D1D] font-bold shadow-2xs"
                  : "bg-[#F5F1E8] text-[#1C1D1D] border-[#1C1D1D] hover:border-[#971F26]"
              }`}
            >
              <span>{c.name}</span>
              <span className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold uppercase ${
                c.isPilotRegion ? "bg-amber-100 text-amber-950 border border-amber-400" : "bg-stone-200 text-stone-700"
              }`}>
                {c.isPilotRegion ? "PILOT" : "GULF"}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
