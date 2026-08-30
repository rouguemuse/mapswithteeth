import React from "react";
import { TEXAS_RESOURCES } from "@/data/resources/texas";
import { TexasStatutesAccordion } from "@/components/texas/TexasStatutesAccordion";
import { CountySelector } from "@/components/texas/CountySelector";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { MapPin, Scale } from "lucide-react";

export default function TexasPage() {
  const statewideResources = TEXAS_RESOURCES.filter((r) => r.scope === "TEXAS_STATEWIDE");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-brand-sand pb-6">
        <div className="flex items-center gap-2 text-brand-oxblood mb-2">
          <MapPin className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            LAYER 1 · STATEWIDE REFERENCE STANDARD · CENTRAL TEXAS PILOT
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
          Texas Pilot: Statutory Rights & Resources
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed font-sans">
          Texas is the initial operating region and pilot location for Maps With Teeth. Resources are reviewed individually and display their current verification status and review date. Below is the audited statutory escape framework alongside statewide resources and county pilot directories.
        </p>
      </div>

      {/* Priority Counties Switcher */}
      <div>
        <CountySelector />
      </div>

      {/* Statutory Escape Frameworks Section */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-sand pb-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-brand-oxblood" />
            <h2 className="text-xl font-serif font-bold text-brand-charcoal">
              Texas Statutory Escape Routes & Legal Protections
            </h2>
          </div>
          <span className="text-[11px] font-mono text-stone-500">
            Statutory Framework Checked (Audit: August 2026)
          </span>
        </div>

        <p className="text-xs text-stone-700 max-w-3xl font-sans">
          Texas statutes grant specific rights to terminate residential leases without penalty (§ 92.016), waive electric security deposits (16 TAC § 25.478), maintain confidential substitute addresses on public records (CCP Ch. 58), and access up to $5,000 in Crime Victims&apos; Compensation relocation reimbursement for qualifying crimes occurring after August 31, 2023.
        </p>

        <TexasStatutesAccordion />
      </section>

      {/* Statewide Verified Texas Resources */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-brand-sand pb-3">
          <h2 className="text-xl font-serif font-bold text-brand-charcoal">
            Statewide Texas Programs & Direct Services
          </h2>
          <span className="text-xs font-mono text-stone-500">
            {statewideResources.length} Statewide Reviewed Programs
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {statewideResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      </section>
    </div>
  );
}
