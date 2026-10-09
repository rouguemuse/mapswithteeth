"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "full" | "mark";
  inverted?: boolean;
}

export function LogoIcon({
  size = 48,
  className = "",
  inverted = false,
}: {
  size?: number;
  className?: string;
  inverted?: boolean;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`bg-mwt-oxblood text-white font-serif font-bold rounded-xs flex items-center justify-center text-xs select-none ${className}`}
        aria-label="Maps With Teeth"
      >
        MWT
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative overflow-hidden shrink-0 flex items-center justify-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Maps With Teeth Icon"
        width={600}
        height={400}
        className={`object-cover object-left h-full w-auto max-w-none scale-125 origin-left ${
          inverted ? "filter invert hue-rotate-180 brightness-110" : "mix-blend-multiply"
        }`}
        priority
        unoptimized
        onError={() => setError(true)}
      />
    </div>
  );
}

export function Logo({
  size = "md",
  className = "",
  variant = "full",
  inverted = false,
}: LogoProps) {
  const [error, setError] = useState(false);

  const heightClasses = {
    xs: "h-8 sm:h-9",
    sm: "h-10 sm:h-12",
    md: "h-12 sm:h-14 md:h-16",
    lg: "h-16 sm:h-20",
    xl: "h-22 sm:h-28",
  };

  if (error) {
    return (
      <div className={`flex flex-col justify-center select-none py-1 ${className}`}>
        <span
          className={`font-serif font-bold text-lg sm:text-xl tracking-tight uppercase leading-none ${
            inverted ? "text-mwt-ivory" : "text-mwt-black"
          }`}
        >
          Maps With Teeth
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-mwt-oxblood font-semibold mt-0.5">
          Civic Systems Continuity
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center group select-none ${className}`}>
      <Image
        src="/logo.png"
        alt="Maps With Teeth — Civic Systems Reform & Resource Intelligence"
        width={800}
        height={450}
        className={`w-auto ${heightClasses[size]} object-contain group-hover:opacity-95 transition-opacity ${
          inverted ? "filter brightness-125 contrast-125" : "mix-blend-multiply"
        }`}
        priority
        unoptimized
        onError={() => setError(true)}
      />
    </div>
  );
}
