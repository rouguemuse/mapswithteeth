"use client";

import React, { useState } from "react";
import { SafetyBanner } from "./SafetyBanner";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SafeBrowsingModal } from "./SafeBrowsingModal";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [safeBrowsingOpen, setSafeBrowsingOpen] = useState(false);

  return (
    <>
      <SafetyBanner onOpenSafeBrowsing={() => setSafeBrowsingOpen(true)} />
      <Header onOpenSafeBrowsing={() => setSafeBrowsingOpen(true)} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <SafeBrowsingModal
        isOpen={safeBrowsingOpen}
        onClose={() => setSafeBrowsingOpen(false)}
      />
    </>
  );
}
