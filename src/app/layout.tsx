import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const SITE_URL = "https://www.mapswithteeth.org";
const SITE_TITLE = "Maps With Teeth | Public-Interest Systems Research & Accountability Initiative";
const SITE_DESCRIPTION =
  "An independent public-interest systems research and accountability initiative examining where responsibility, evidence, identity, or access disappears across institutional boundaries.";

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
  themeColor: "#0E0D0C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Maps With Teeth",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-full.png`,
        description: SITE_DESCRIPTION,
        founder: {
          "@type": "Person",
          name: "Jayme Volstad",
          jobTitle: "Founder & Project Director",
          url: `${SITE_URL}/writing/author`,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Texas",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Maps With Teeth",
        description: SITE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-K45FVDG7"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
`,
          }}
        />
      </head>
      <body className="bg-mwt-paper text-mwt-black flex flex-col min-h-screen antialiased selection:bg-mwt-oxblood selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
