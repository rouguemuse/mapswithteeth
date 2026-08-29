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
        <title>Maps With Teeth | Barrier-First Resource Intelligence System</title>
        <meta
          name="description"
          content="A free nationwide resource directory and barrier-first resource intelligence system for people navigating domestic abuse, coercive control, financial abuse, and instability."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-brand-dark text-stone-100 flex flex-col min-h-screen antialiased selection:bg-brand-ruby selection:text-white">
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
