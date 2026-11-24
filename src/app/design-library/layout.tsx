import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Architecture & Container Pattern Workbench",
  description:
    "Original design principles, container hierarchy patterns, and W3C DTCG token infrastructure for high-density editorial and civic systems.",
  alternates: {
    canonical: "/design-library",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignLibraryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
