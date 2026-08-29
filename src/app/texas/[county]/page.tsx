import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountyBySlug, ALL_TEXAS_COUNTIES } from "@/data/texasCounties";
import { TEXAS_RESOURCES } from "@/data/resources/texas";
import { CountySelector } from "@/components/texas/CountySelector";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { MapPin, ArrowLeft, Building2, Home, Shield, DollarSign } from "lucide-react";

export function generateStaticParams() {
  return ALL_TEXAS_COUNTIES.map((c) => ({
    county: c.slug,
  }));
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div>
        <Link
          href="/texas"
          className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-brand-charcoal font-mono transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Texas Statewide Overview</span>
        </Link>
      </div>

      <div className="border-b border-brand-sand pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-oxblood font-bold">
            {county.region === "CENTRAL_TEXAS_PILOT" ? "Central Texas Pilot Region" : "Gulf Coast Deep Dive"}
          </span>
          {county.isPilotRegion && (
            <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-mono uppercase font-bold">
              Pilot Cohort
            </span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
          Help in {county.name}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 font-mono">
          County Seat: <strong>{county.seat}</strong> • Major Cities: {county.majorCities.join(", ")}
        </p>
      </div>

      <CountySelector currentSlug={county.slug} />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="bg-brand-paper border border-brand-sand rounded-xl p-4 space-y-1 shadow-sm">
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 flex items-center gap-1 font-bold">
            <Home className="w-3.5 h-3.5 text-brand-oxblood" />
            <span>Crisis Shelter Partner</span>
          </span>
          <p className="text-xs text-brand-charcoal font-bold font-sans">{county.emergencyShelterPartner}</p>
        </div>

        <div className="bg-brand-paper border border-brand-sand rounded-xl p-4 space-y-1 shadow-sm">
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 flex items-center gap-1 font-bold">
            <Shield className="w-3.5 h-3.5 text-brand-oxblood" />
            <span>Legal Aid Provider</span>
          </span>
          <p className="text-xs text-brand-charcoal font-bold font-sans">{county.legalAidProvider}</p>
        </div>

        <div className="bg-brand-paper border border-brand-sand rounded-xl p-4 space-y-1 shadow-sm">
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 flex items-center gap-1 font-bold">
            <Building2 className="w-3.5 h-3.5 text-brand-oxblood" />
            <span>Community Action (CSBG)</span>
          </span>
          <p className="text-xs text-brand-charcoal font-bold font-sans">{county.communityActionAgency}</p>
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-brand-sand pb-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-amber-700" />
            <h2 className="text-xl font-serif font-bold text-brand-charcoal">
              Emergency Funds & Micro-Aid in {county.name}
            </h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {county.keyLocalFunds.map((fund, idx) => (
            <div
              key={idx}
              className="bg-brand-paper border border-brand-sand rounded-xl p-4 space-y-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-brand-charcoal font-serif">{fund.name}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-ivory text-stone-800 border border-stone-300">
                  {fund.focus}
                </span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">{fund.description}</p>
              {fund.website && (
                <a
                  href={fund.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-oxblood hover:underline inline-block pt-1 font-bold font-mono"
                >
                  Visit Organization Portal →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {localResources.length > 0 && (
        <section className="space-y-4">
          <div className="border-b border-brand-sand pb-3">
            <h2 className="text-xl font-serif font-bold text-brand-charcoal">
              Verified County Directory Entries ({localResources.length})
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {localResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
