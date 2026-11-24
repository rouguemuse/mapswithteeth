import React from "react";
import type { Metadata } from "next";

const CANONICAL_URL = "https://www.mapswithteeth.org/find-help";
const TITLE = "Find Reachable Help: Barrier-First Texas Resource & Statutory Matcher";
const DESCRIPTION =
  "Navigate 47 primary-source-verified emergency shelter, legal aid, utility deposit waiver (16 TAC § 25.478), lease termination (Tex. Prop. Code § 92.016), and phone separation (47 U.S.C. § 345) routes with zero server-side personal data storage.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/find-help",
  },
  openGraph: {
    title: `${TITLE} | Maps With Teeth`,
    description: DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "Maps With Teeth",
    type: "website",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Maps With Teeth — Barrier-First Resource & Statutory Matcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Maps With Teeth`,
    description: DESCRIPTION,
    images: ["/logo-full.png"],
  },
};

export default function FindHelpLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        url: CANONICAL_URL,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: {
          "@id": "https://www.mapswithteeth.org/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.mapswithteeth.org",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Find Help (Resource Matcher)",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
