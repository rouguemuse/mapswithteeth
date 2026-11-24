import React from "react";
import type { Metadata } from "next";

const CANONICAL_URL = "https://www.mapswithteeth.org/policy";
const TITLE = "Texas Policy & Systems Lab: Cross-System Continuity & DFPS Sunset Review";
const DESCRIPTION =
  "Independent systems research and reform proposals for Texas public administration: submitted Texas DFPS Sunset review input (POL-001A, Dec 2–3, 2026), 12 Texas statutory precedents, and closed-loop referral accountability.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/policy",
  },
  openGraph: {
    title: `${TITLE} | Maps With Teeth`,
    description: DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "Maps With Teeth",
    type: "website",
    images: [
      {
        url: "/images/case-study/raw_art_radial_city_crimson_thread.jpg",
        width: 1200,
        height: 900,
        alt: "Maps With Teeth — Texas Policy & Systems Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Maps With Teeth`,
    description: DESCRIPTION,
    images: ["/images/case-study/raw_art_radial_city_crimson_thread.jpg"],
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
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
        about: {
          "@type": "ResearchProject",
          name: "Maps With Teeth — Texas Policy & Systems Lab",
          description:
            "Public-interest policy research analyzing statutory continuity precedents across the Texas Family Code, Property Code, and DFPS Sunset Review (2026–2027).",
          founder: {
            "@type": "Person",
            name: "Jayme Volstad",
          },
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
            name: "Texas Policy & Systems Lab",
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
