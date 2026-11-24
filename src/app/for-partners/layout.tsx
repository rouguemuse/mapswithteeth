import React from "react";
import type { Metadata } from "next";

const CANONICAL_URL = "https://www.mapswithteeth.org/for-partners";
const TITLE = "Call for Partners: Co-Design & Pressure-Test the Continuity Model";
const DESCRIPTION =
  "Collaborate with Maps With Teeth across five stakeholder tracks: policymakers and oversight bodies, frontline practitioners, legal aid attorneys, systems researchers, and public-interest funders.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/for-partners",
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
        alt: "Partner with Maps With Teeth — Public-Interest Continuity Research",
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

export default function ForPartnersLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${CANONICAL_URL}#contactpage`,
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
            name: "Call for Partners",
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
