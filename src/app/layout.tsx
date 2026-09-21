import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const SITE_URL = "https://www.mapswithteeth.org";
const SITE_TITLE = "Maps With Teeth | Survivor Continuity & Resource Intelligence";
const SITE_DESCRIPTION =
  "A portable continuity and accountability layer for people navigating abuse across disconnected legal, housing, and social support systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Maps With Teeth",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Maps With Teeth",
  authors: [{ name: "Maps With Teeth" }],
  generator: "Next.js",
  keywords: [
    "survivor continuity",
    "resource intelligence",
    "barrier navigation",
    "trauma-informed system navigation",
    "Texas resource directory",
    "crisis navigation",
    "legal aid navigation",
    "safe housing access",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Maps With Teeth",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Maps With Teeth — Barrier-First Resource Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1B1A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F1E8] text-[#1C1D1D] flex flex-col min-h-screen antialiased selection:bg-brand-ruby selection:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
