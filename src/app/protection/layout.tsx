import React from "react";
import type { Metadata } from "next";

const CANONICAL_URL = "https://www.mapswithteeth.org/protection";
const TITLE = "Protection Without Continuity: Cumulative Harm & Personal Number Continuity";
const DESCRIPTION =
  "Systems research examining how repeated harm is processed as disconnected incidents, distinguishing participant inability from refusal, and proposing the 6-dimension Personal Number Continuity telecom policy model.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/protection",
  },
  openGraph: {
    title: `${TITLE} | Maps With Teeth`,
    description: DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "Maps With Teeth",
    type: "website",
    images: [
      {
        url: "/images/case-study/raw_art_telecom_signal_knot_4x3.jpg",
        width: 1200,
        height: 900,
        alt: "Maps With Teeth — Protection Without Continuity & Personal Number Continuity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Maps With Teeth`,
    description: DESCRIPTION,
    images: ["/images/case-study/raw_art_telecom_signal_knot_4x3.jpg"],
  },
};

export default function ProtectionLayout({ children }: { children: React.ReactNode }) {
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
            name: "Protection Without Continuity",
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
