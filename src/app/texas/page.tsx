import React from "react";
import Link from "next/link";
import { TEXAS_RESOURCES } from "@/data/resources/states/tx";
import { TexasStatutesAccordion } from "@/components/texas/TexasStatutesAccordion";
import { CountySelector } from "@/components/texas/CountySelector";
import { ResourceCard } from "@/components/resources/ResourceCard";
import {
  MapPin,
  Scale,
  Compass,
  AlertTriangle,
  HelpCircle,
  MessageSquarePlus,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileSearch,
  Check
} from "lucide-react";

export default function TexasPage() {
  const statewideResources = TEXAS_RESOURCES.filter((r) => r.scope === "TEXAS_STATEWIDE");

  const pilotCounties = [
    { name: "Travis County", code: "TRAVIS", coverage: "94% Audited", status: "PILOT CORE", focus: "Austin Metro · Municipal Utility · Rapid Rekeying" },
    { name: "Williamson County", code: "WILCO", coverage: "90% Audited", status: "PILOT CORE", focus: "Round Rock / Georgetown · Suburban Housing Barriers" },
    { name: "Bastrop County", code: "BASTROP", coverage: "82% Audited", status: "PILOT CORE", focus: "Rural Emergency Assistance · Transit Deficits" },
    { name: "Hays County", code: "HAYS", coverage: "78% Audited", status: "FIELD TESTING", focus: "San Marcos / Kyle · Student / Renter Insecurity" },
    { name: "Harris County", code: "HARRIS", coverage: "75% Audited", status: "GULF EXPANSION", focus: "Houston Metro · Multi-Jurisdiction Fragmentation" },
  ];

  const knownGaps = [
    {
      title: "The Sub-$100 Micro-Cash Desert",
      description: "Almost zero formal Texas agencies disburse immediate non-vendor cash for $30 gas, $45 bus passes, or $75 locksmith rekeying fees without a 2-week intake cycle.",
      status: "CRITICAL FAILURE POINT"
    },
    {
      title: "County Line Boundary Traps",
      description: "Survivors residing in suburban enclaves (e.g. Austin addresses inside Williamson County) are routinely bounced back and forth between municipal and county jurisdictions.",
      status: "DOCUMENTED DEAD-END"
    },
    {
      title: "Communal Shelter Prerequisite Lockouts",
      description: "Over 60% of discretionary emergency housing funds in Central Texas require active residency in a congregate DV shelter, locking out shift workers and pet owners.",
      status: "STRUCTURAL BARRIER"
    },
  ];

  const openIntelligenceQuestions = [
    "Are there active ministerial alliance discretionary funds in Elgin or Bastrop paying direct utility deposits without church membership?",
    "Which electric retail providers (REPs) in the Oncor service territory currently reject TCFV 16 TAC § 25.478 deposit waiver letters via online portals?",
    "What is the actual average turnaround time for Austin Victims Services lock rekeying dispatches under Tex. Prop. Code § 92.153?",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* Field Operation Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              FIELD OPERATION · CENTRAL TEXAS PILOT REGION
            </span>
          </div>
          <span className="coord-tick">
            [SURVEY GRID: CENTRAL TX · LAT 30°16'N / LON 97°44'W]
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Texas Deep Dive: Field Intelligence & Statutory Routes
        </h1>
        <p className="text-sm sm:text-base text-stone-800 mt-2 max-w-4xl leading-relaxed font-sans font-medium">
          <strong>Texas-first, not Texas-only:</strong> Central Texas is where we&apos;re testing the model deeply to expose real frontline barriers—mapping statewide statutes (Tex. Prop. Code § 92.016, PUCT § 25.478, CVC) alongside county-level referral gates, funding status, and municipal failure points.
        </p>
      </div>

      {/* Quick Orientation Layer: What are you looking for? */}
      <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-3 shadow-2xs">
        <span className="text-xs font-mono font-bold text-[#971F26] uppercase tracking-wider block">
          ORIENTATION · WHAT ARE YOU LOOKING FOR?
        </span>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <a
            href="#statutes"
            className="px-3 py-2 bg-[#F5F1E8] border border-[#1C1D1D] hover:bg-[#1C1D1D] hover:text-white rounded transition-colors font-bold shadow-2xs flex items-center gap-1.5"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>FIND A STATUTORY RIGHT</span>
          </a>
          <a
            href="#counties"
            className="px-3 py-2 bg-[#F5F1E8] border border-[#1C1D1D] hover:bg-[#1C1D1D] hover:text-white rounded transition-colors font-bold shadow-2xs flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>FIND HELP IN MY COUNTY</span>
          </a>
          <a
            href="#statewide-dockets"
            className="px-3 py-2 bg-[#F5F1E8] border border-[#1C1D1D] hover:bg-[#1C1D1D] hover:text-white rounded transition-colors font-bold shadow-2xs flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>SEE PROGRAMS WITH UNUSUAL ELIGIBILITY</span>
          </a>
          <a
            href="#service-gaps"
            className="px-3 py-2 bg-[#F5F1E8] border border-[#1C1D1D] hover:bg-[#1C1D1D] hover:text-white rounded transition-colors font-bold shadow-2xs flex items-center gap-1.5"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>SEE KNOWN SERVICE GAPS</span>
          </a>
          <a
            href="#full-docket"
            className="px-3 py-2 bg-[#971F26] text-white border border-[#971F26] hover:bg-red-900 rounded transition-colors font-bold shadow-2xs flex items-center gap-1.5"
          >
            <FileSearch className="w-3.5 h-3.5" />
            <span>EXPLORE THE FULL RESEARCH DOCKET</span>
          </a>
        </div>
      </section>

      {/* Field Operation Canvas: Regional Coverage Dossier */}
      <section id="counties" className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-diagram">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D1C4] pb-4">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase tracking-wider font-bold block">
              RESEARCH REGISTRY · AUGUST 2026 AUDIT
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Central Texas Pilot Counties & Coverage Matrix
            </h2>
          </div>
          <div className="stamp-verified bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D] text-xs py-1 px-3">
            <strong>5 COUNTIES MONITORED</strong>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pilotCounties.map((c, i) => (
            <div
              key={i}
              className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg p-4 space-y-2.5 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2 font-mono text-[10px]">
                <span className="font-bold text-[#1C1D1D] uppercase">[{c.code}]</span>
                <span className="stamp-verified text-[9px] py-0.5 px-1.5">{c.status}</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#1C1D1D]">{c.name}</h3>
                <p className="text-xs text-stone-700 font-sans mt-0.5 leading-snug">{c.focus}</p>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono pt-1 border-t border-[#D9D1C4]/60">
                <span className="text-stone-600">Coverage Level:</span>
                <span className="font-bold text-[#1C1D1D]">{c.coverage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Priority County Switcher */}
        <div className="pt-2">
          <CountySelector />
        </div>
      </section>

      {/* Statutory Escape Frameworks Section */}
      <section id="statutes" className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#971F26]" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Texas Statutory Escape Routes (Non-Discretionary Rights)
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-600 font-bold">
            Audited Against Texas Statutes · August 2026
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-800 max-w-3xl font-sans leading-relaxed">
          Unlike discretionary charities with exhausted budgets, statutory escape mechanisms are enforceable rights established in the Texas Property Code, Utilities Code, and Code of Criminal Procedure.
        </p>

        <TexasStatutesAccordion />
      </section>

      {/* Documented Failure Points & Known Gaps */}
      <section id="service-gaps" className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4">
          <div className="flex items-center gap-2 text-[#971F26] mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase">
              DOCUMENTED FAILURE POINTS
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            Known Gaps & Institutional Bottlenecks in Central Texas
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 mt-1 font-sans leading-relaxed">
            Our fieldwork identifies specific points where survivor navigation breaks down. These failure modes inform alternate route recommendations.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {knownGaps.map((gap, idx) => (
            <div key={idx} className="bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg p-4 space-y-2 shadow-2xs">
              <span className="stamp-alert text-[9px] py-0.5">{gap.status}</span>
              <h3 className="font-serif font-bold text-sm text-[#1C1D1D]">{gap.title}</h3>
              <p className="text-xs text-stone-800 font-sans leading-relaxed">{gap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* “What We Still Don’t Know” & Request for Local Intelligence */}
      <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-4">
          <div>
            <div className="flex items-center gap-2 text-stone-700 mb-1">
              <HelpCircle className="w-4 h-4 text-[#971F26]" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                OPEN INVESTIGATION DOCKETS
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              What We Still Don’t Know (Community Intelligence Wanted)
            </h2>
          </div>
          <Link
            href="/feedback"
            className="px-4 py-2 bg-[#971F26] text-white rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-red-900 shadow-2xs transition-colors"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Submit Local Intel →</span>
          </Link>
        </div>

        <div className="space-y-3">
          {openIntelligenceQuestions.map((q, idx) => (
            <div key={idx} className="p-3.5 bg-[#EEE8DD] border border-[#1C1D1D] rounded-md flex items-start gap-3 text-xs sm:text-sm text-stone-900 font-sans leading-snug">
              <span className="font-mono font-bold text-[#971F26] shrink-0 text-xs">[INTEL #{idx + 1}]</span>
              <p className="font-medium">{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statewide Verified Texas Resources */}
      <section id="statewide-dockets" className="space-y-4">
        <div id="full-docket" className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#971F26] uppercase font-bold tracking-wider block">
              STATEWIDE AUDITED CATALOG
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Statewide Texas Programs & Direct Services
            </h2>
          </div>
          <span className="coord-tick">
            [{statewideResources.length} STATEWIDE RECORDS]
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {statewideResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      </section>
    </div>
  );
}
