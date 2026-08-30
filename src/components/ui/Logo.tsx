"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

export function LogoIcon({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Maps With Teeth Identity Mark"
    >
      {/* Background Map Shape with Bite-like Torn Right Edge */}
      <path
        d="M4 6L14 3L26 6L38 3.5V11L35 14L39 18L34 22L38 27L33 31L37 35V39.5L26 37L14 40.5L4 37V6Z"
        fill="#F5F1E8"
        stroke="#1C1D1D"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Internal Fold Lines */}
      <line x1="14" y1="3" x2="14" y2="40.5" stroke="#1C1D1D" strokeWidth="1.5" strokeDasharray="1 0" />
      <line x1="26" y1="6" x2="26" y2="37" stroke="#1C1D1D" strokeWidth="1.5" strokeDasharray="1 0" />

      {/* Compass / Star Inside the Left Map Sector */}
      <g transform="translate(9, 13)">
        {/* 4-point star */}
        <path
          d="M0 -4.5L1.2 -1.2L4.5 0L1.2 1.2L0 4.5L-1.2 1.2L-4.5 0L-1.2 -1.2Z"
          fill="#1C1D1D"
        />
        <circle cx="0" cy="0" r="0.8" fill="#F5F1E8" />
      </g>

      {/* Red Dashed Route Line Across the Map */}
      <path
        d="M8 28C11 25 13 22 17 23C21 24 23 20 28 17C31 15 33 16 35 15"
        fill="none"
        stroke="#971F26"
        strokeWidth="2"
        strokeDasharray="2.5 2"
        strokeLinecap="round"
      />

      {/* Red X Destination / Blocked Marker */}
      <g transform="translate(35, 15)">
        <line x1="-2.5" y1="-2.5" x2="2.5" y2="2.5" stroke="#971F26" strokeWidth="2" strokeLinecap="round" />
        <line x1="2.5" y1="-2.5" x2="-2.5" y2="2.5" stroke="#971F26" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function Logo({ size = "md", showWordmark = true, className = "" }: LogoProps) {
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 52,
  };

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      <div className="p-1 rounded bg-[#F5F1E8] border border-[#D9D1C4] group-hover:border-[#971F26] transition-colors shadow-sm shrink-0 flex items-center justify-center">
        <LogoIcon size={iconSizes[size]} />
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <div className="leading-none">
            <span className="font-mono font-black text-xl sm:text-2xl tracking-[0.22em] text-[#1C1D1D] block uppercase">
              MAPS
            </span>
            <span className="font-mono font-bold text-xs sm:text-sm tracking-[0.28em] text-[#1C1D1D] block uppercase -mt-0.5">
              WITH TEETH
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-[#971F26] uppercase font-bold mt-1 block">
            BARRIER-FIRST RESOURCE INTELLIGENCE
          </span>
        </div>
      )}
    </div>
  );
}
