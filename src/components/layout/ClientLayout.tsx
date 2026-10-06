"use client";

import React, { useState } from "react";
import Script from "next/script";
import { SafetyBanner } from "./SafetyBanner";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SafeBrowsingModal } from "./SafeBrowsingModal";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [safeBrowsingOpen, setSafeBrowsingOpen] = useState(false);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q33EE72XJM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q33EE72XJM');
        `}
      </Script>

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
