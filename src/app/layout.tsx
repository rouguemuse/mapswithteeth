"use client";

import React, { useState } from "react";
import "./globals.css";
import { SafetyBanner } from "@/components/layout/SafetyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SafeBrowsingModal } from "@/components/layout/SafeBrowsingModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [safeBrowsingOpen, setSafeBrowsingOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Maps With Teeth | Survivor Continuity & Resource Intelligence</title>
        <meta
          name="description"
          content="Maps With Teeth is a portable continuity and accountability layer for people navigating abuse across systems that do not share one case file, one jurisdiction, or one map."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#F5F1E8] text-[#1C1D1D] flex flex-col min-h-screen antialiased selection:bg-brand-ruby selection:text-white">
        <SafetyBanner onOpenSafeBrowsing={() => setSafeBrowsingOpen(true)} />
        <Header onOpenSafeBrowsing={() => setSafeBrowsingOpen(true)} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <SafeBrowsingModal
          isOpen={safeBrowsingOpen}
          onClose={() => setSafeBrowsingOpen(false)}
        />
      </body>
    </html>
  );
}
