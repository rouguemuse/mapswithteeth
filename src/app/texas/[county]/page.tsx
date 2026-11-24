import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountyBySlug, ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { TEXAS_RESOURCES } from "@/data/resources/states/tx";
import { CountySelector } from "@/components/texas/CountySelector";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { MapPin, ArrowLeft, Building2, Home, Shield, DollarSign, Compass, AlertCircle } from "lucide-react";

export function generateStaticParams() {
  return ALL_TEXAS_COUNTIES.map((c) => ({
    county: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string }>;
}): Promise<Metadata> {
  const { county: countySlug } = await params;
  const county = getCountyBySlug(countySlug);

  if (!county) {
    return {
      title: "County Not Found",
      description: "The requested Texas county field profile could not be found.",
    };
  }

  const canonicalPath = `/texas/${county.slug}`;
  const canonicalUrl = `https://www.mapswithteeth.org${canonicalPath}`;
  const title = `${county.name}, Texas Field Intelligence & Verified Emergency Routes (${county.seat})`;
  const description = `Barrier-first field intelligence for ${county.name}, Texas (${county.majorCities.join(", ")}). Verified crisis shelter (${county.emergencyShelterPartner}), legal aid (${county.legalAidProvider}), local utility waivers, and discretionary micro-aid funds.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | Maps With Teeth`,
      description,
      url: canonicalUrl,
      siteName: "Maps With Teeth",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Maps With Teeth`,
      description,
    },
  };
}

export default async function CountyPage({ params }: { params: Promise<{ county: string }> }) {
  const { county: countySlug } = await params;
  const county = getCountyBySlug(countySlug);

  if (!county) {
    notFound();
  }

  const localResources = TEXAS_RESOURCES.filter(
    (r) => r.county && r.county.toLowerCase() === county.name.replace(" County", "").toLowerCase()
  );

  const canonicalUrl = `https://www.mapswithteeth.org/texas/${county.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Field Intelligence: ${county.name}, Texas`,
        description: `Barrier-first resource and statutory route intelligence for ${county.name} (${county.majorCities.join(", ")}).`,
        isPartOf: {
          "@id": "https://www.mapswithteeth.org/#website",
        },
        spatialCoverage: {
          "@type": "AdministrativeArea",
          name: `${county.name}, Texas`,
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
            name: "Texas Field Intelligence",
            item: "https://www.mapswithteeth.org/texas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: county.name,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 select-none font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Back Link */}
      <div>
        <Link
          href="/texas"
          className="inline-flex items-center gap-1.5 text-xs text-[#971F26] hover:underline font-mono font-bold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Texas Statewide Overview</span>
        </Link>
      </div>

      {/* County Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              {county.region === "CENTRAL_TEXAS_PILOT" ? "CENTRAL TEXAS PILOT FIELD PROFILE" : "GULF COAST FIELD PROFILE"}
            </span>
          </div>
          {county.isPilotRegion && (
            <span className="stamp-verified bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D] text-[10px] py-0.5 px-2 font-mono uppercase font-bold">
              [PILOT FOCUS REGION]
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Field Intelligence: {county.name}
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-1 font-mono">
          County Seat: <strong>{county.seat}</strong> • Municipal Centers: {county.majorCities.join(", ")}
        </p>
      </div>

      {/* County Switcher */}
      <CountySelector currentSlug={county.slug} />

      {/* Key Institutions Triad */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-4 space-y-1 shadow-2xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] flex items-center gap-1 font-bold">
            <Home className="w-3.5 h-3.5 text-[#971F26]" />
            <span>Crisis Shelter Partner</span>
          </span>
          <p className="text-xs text-[#1C1D1D] font-bold font-sans">{county.emergencyShelterPartner}</p>
        </div>

        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-4 space-y-1 shadow-2xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] flex items-center gap-1 font-bold">
            <Shield className="w-3.5 h-3.5 text-[#971F26]" />
            <span>Legal Aid Provider</span>
          </span>
          <p className="text-xs text-[#1C1D1D] font-bold font-sans">{county.legalAidProvider}</p>
        </div>

        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-4 space-y-1 shadow-2xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] flex items-center gap-1 font-bold">
            <Building2 className="w-3.5 h-3.5 text-[#971F26]" />
            <span>Community Action (CSBG)</span>
          </span>
          <p className="text-xs text-[#1C1D1D] font-bold font-sans">{county.communityActionAgency}</p>
        </div>
      </div>

      {/* Local Discretionary Funds */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              LOCAL DISCRETIONARY FUNDS
            </span>
            <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
              Emergency Micro-Aid in {county.name}
            </h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {county.keyLocalFunds.map((fund, idx) => (
            <div
              key={idx}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-4 space-y-2 shadow-2xs"
            >
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-1.5 font-mono text-[10px]">
                <span className="font-bold text-[#1C1D1D]">{fund.name}</span>
                <span className="stamp-verified text-[9px] py-0.5 px-1.5">{fund.focus}</span>
              </div>
              <p className="text-xs text-stone-800 font-sans leading-relaxed">{fund.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Local Resources */}
      {localResources.length > 0 && (
        <section className="space-y-4">
          <div className="border-b border-[#D9D1C4] pb-3">
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              LOCAL DIRECTORY
            </span>
            <h2 className="text-xl font-serif font-bold text-[#1C1D1D]">
              County Directory Entries ({localResources.length})
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}