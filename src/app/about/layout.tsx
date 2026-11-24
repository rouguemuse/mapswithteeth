import React from "react";
import type { Metadata } from "next";

const CANONICAL_URL = "https://www.mapswithteeth.org/about";
const TITLE = "About Maps With Teeth: Mission, Methodology & Governance";
const DESCRIPTION =
  "Overview of Maps With Teeth, founded by Jayme Volstad. Inspect the two primary working models (Continuity Receipt & Personal Number Continuity), the 8-question diagnostic method, 4-tier epistemic boundaries, and founding governance.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `${TITLE} | Maps With Teeth`,
    description: DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "Maps With Teeth",
    type: "website",
    images: [
      {
        url: "/images/case-study/raw_art_courthouse_cartography_collage.jpg",
        width: 1200,
        height: 900,
        alt: "About Maps With Teeth — Public-Interest Systems Research & Accountability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Maps With Teeth`,
    description: DESCRIPTION,
    images: ["/images/case-study/raw_art_courthouse_cartography_collage.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${CANONICAL_URL}#aboutpage`,
        url: CANONICAL_URL,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: {
          "@id": "https://www.mapswithteeth.org/#website",
        },
        mainEntity: {
          "@id": "https://www.mapswithteeth.org/#organization",
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
            name: "About Maps With Teeth",
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
