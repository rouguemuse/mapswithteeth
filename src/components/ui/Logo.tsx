"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "full" | "mark";
}

export function LogoIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
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
        className="object-cover object-left h-full w-auto max-w-none mix-blend-multiply scale-125 origin-left"
        priority
      />
    </div>
  );
}

export function Logo({ size = "md", className = "", variant = "full" }: LogoProps) {
  const heightClasses = {
    xs: "h-8 sm:h-9",
    sm: "h-10 sm:h-12",
    md: "h-12 sm:h-14 md:h-16",
    lg: "h-16 sm:h-20",
    xl: "h-22 sm:h-28",
  };

  return (
    <div className={`flex items-center group select-none ${className}`}>
      <Image
        src="/logo.png"
        alt="Maps With Teeth — Barrier-First Resource Intelligence"
        width={800}
        height={500}
        className={`w-auto ${heightClasses[size]} object-contain mix-blend-multiply group-hover:opacity-95 transition-opacity`}
        priority
      />
    </div>
  );
}
