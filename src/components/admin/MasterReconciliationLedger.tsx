"use client";

import React, { useState, useMemo } from "react";
import {
  MASTER_RECONCILIATION_LEDGER,
  getMasterLedgerItem,
  getMasterLedgerByStatus
} from "@/data/masterReconciliationLedger";
import { MasterLedgerItem, MasterLedgerStatus, MasterLedgerCategory, SourceOrigin } from "@/types/masterLedger";
import {
  FileText,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  ShieldCheck,
  Compass,
  ArrowRight,
  Layers,
  Sparkles,
  HelpCircle,
  Archive,
  RefreshCw,
  SlidersHorizontal,
  Globe,
  Tag,
  Building,
  Ban
} from "lucide-react";

export function MasterReconciliationLedger() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("ALL");
  const [selectedPublicFilter, setSelectedPublicFilter] = useState<string>("ALL");
  const [selectedTier, setSelectedTier] = useState<string>("ALL");

  const categories: { id: string; label: string }[] = [
    { id: "ALL", label: "All Categories" },
    { id: "TRANSPORTATION_MOBILITY", label: "Transportation & Mobility" },
    { id: "EMPLOYMENT_INDUSTRY_RELIEF", label: "Employment & Industry Relief" },
    { id: "MILITARY_VETERAN", label: "Military & Veteran" },
    { id: "HOUSING_PORTABILITY", label: "Housing & Portability" },
    { id: "MONEY_DEBT_IDENTITY", label: "Money, Debt & Identity" },
    { id: "TELECOM_DIGITAL_SAFETY", label: "Telecom & Digital Safety" },
    { id: "IMMIGRATION_LEGAL_RIGHTS", label: "Immigration & Legal Rights" },
    { id: "PHYSICAL_RESTORATION", label: "Physical Restoration" },
    { id: "COMPANION_ANIMALS", label: "Companion Animals" },
    { id: "HYPERLOCAL_MICRO_AID", label: "Hyperlocal Micro-Aid" },
    { id: "PROGRAM_CONCEPT_GAP_INTERVENTION", label: "Program Concepts (Gap Interventions)" },
  ];

  const statuses: { id: string; label: string }[] = [
    { id: "ALL", label: "All Statuses" },
    { id: "PUBLISHED", label: "PUBLISHED (Active in Graph)" },
    { id: "VERIFIED_NEEDS_ENTRY", label: "VERIFIED — NEEDS ENTRY" },
    { id: "RESEARCHING", label: "RESEARCHING (Criteria Checking)" },
    { id: "CONDITIONAL", label: "CONDITIONAL (High Friction/Discretionary)" },
    { id: "NEEDS_REVERIFICATION", label: "NEEDS REVERIFICATION" },
    { id: "TEMPORARILY_CLOSED", label: "TEMPORARILY CLOSED" },
    { id: "CLOSED", label: "CLOSED / DEFUNDED" },
    { id: "DUPLICATE", label: "DUPLICATE (Merged)" },
    { id: "UNVERIFIABLE", label: "UNVERIFIABLE" },
    { id: "NOT_CURRENTLY_ACCESSIBLE", label: "NOT CURRENTLY ACCESSIBLE" },
    { id: "PROGRAM_CONCEPT_NOT_RESOURCE", label: "PROGRAM CONCEPT (MWT Design)" },
  ];

  const origins: { id: string; label: string }[] = [
    { id: "ALL", label: "All Source Origins" },
    { id: "current catalog", label: "Current Catalog" },
    { id: "Texas statutory research", label: "Texas Statutory Research" },
    { id: "historical resource research", label: "Historical Resource Research" },
    { id: "field lead", label: "Field Lead" },
    { id: "community submission", label: "Community Submission" },
    { id: "partner lead", label: "Partner Lead" },
  ];

  const tiers: { id: string; label: string }[] = [
    { id: "ALL", label: "All Verification Tiers" },
    { id: "PRIMARY_STATUTE", label: "Primary Statute / Admin Code" },
    { id: "OFFICIAL_GOVERNMENT_PORTAL", label: "Official Government Portal" },
    { id: "OFFICIAL_501C3_STANDARDS", label: "Official 501(c)(3) Standards" },
    { id: "PUBLIC_RECORD_AUDIT", label: "Public Record Audit" },
    { id: "UNVERIFIED_HISTORICAL_LEAD", label: "Unverified Historical Lead" },
    { id: "PROGRAM_CONCEPT", label: "Program Concept (Non-Resource)" },
  ];

  const stats = useMemo(() => {
    const total = MASTER_RECONCILIATION_LEDGER.length;
    const published = MASTER_RECONCILIATION_LEDGER.filter((i) => i.currentStatus === "PUBLISHED" || i.status === "PUBLISHED").length;
    const needsEntry = MASTER_RECONCILIATION_LEDGER.filter((i) => i.currentStatus === "VERIFIED_NEEDS_ENTRY").length;
    const researching = MASTER_RECONCILIATION_LEDGER.filter(
      (i) => i.currentStatus === "RESEARCHING" || i.status === "RESEARCHING"
    ).length;
    const conditional = MASTER_RECONCILIATION_LEDGER.filter(
      (i) => i.currentStatus === "CONDITIONAL" || i.status === "CONDITIONAL"
    ).length;
    const closedOrStale = MASTER_RECONCILIATION_LEDGER.filter(
      (i) => i.currentStatus === "TEMPORARILY_CLOSED" || i.currentStatus === "CLOSED" || i.status === "TEMPORARILY_CLOSED" || i.status === "STALE"
    ).length;
    const rejectedOrDuplicate = MASTER_RECONCILIATION_LEDGER.filter(
      (i) => i.currentStatus === "DUPLICATE" || i.currentStatus === "UNVERIFIABLE" || i.currentStatus === "NOT_CURRENTLY_ACCESSIBLE"
    ).length;
    const concepts = MASTER_RECONCILIATION_LEDGER.filter(
      (i) => i.currentStatus === "PROGRAM_CONCEPT_NOT_RESOURCE" || i.status === "PROGRAM_CONCEPT_NOT_RESOURCE"
    ).length;

    return { total, published, needsEntry, researching, conditional, closedOrStale, rejectedOrDuplicate, concepts };
  }, []);

  const filteredItems = useMemo(() => {
    return MASTER_RECONCILIATION_LEDGER.filter((item) => {
      const matchesCat = selectedCategory === "ALL" || item.category === selectedCategory;
      const itemStatus = item.currentStatus || item.status;
      const matchesStatus = selectedStatus === "ALL" || itemStatus === selectedStatus;
      const matchesOrigin = selectedOrigin === "ALL" || item.sourceOrigin === selectedOrigin;
      const matchesTier = selectedTier === "ALL" || item.verificationTier === selectedTier;

      let matchesPublic = true;
      if (selectedPublicFilter === "PUBLIC_ONLY") {
        matchesPublic = item.isLiveOnSite === true || item.currentStatus === "PUBLISHED";
      } else if (selectedPublicFilter === "NON_PUBLIC_ONLY") {
        matchesPublic = item.isLiveOnSite !== true && item.currentStatus !== "PUBLISHED";
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        (item.canonicalName && item.canonicalName.toLowerCase().includes(q)) ||
        (item.leadName && item.leadName.toLowerCase().includes(q)) ||
        (item.provider && item.provider.toLowerCase().includes(q)) ||
        (item.notes && item.notes.toLowerCase().includes(q)) ||
        (item.whyNotOrNotes && item.whyNotOrNotes.toLowerCase().includes(q)) ||
        (item.nextResearchAction && item.nextResearchAction.toLowerCase().includes(q)) ||
        (item.primarySource && item.primarySource.toLowerCase().includes(q)) ||
        (item.geography && item.geography.toLowerCase().includes(q));

      return matchesCat && matchesStatus && matchesOrigin && matchesTier && matchesPublic && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedStatus, selectedOrigin, selectedTier, selectedPublicFilter]);

  const getStatusBadge = (status: MasterLedgerStatus | string) => {
    switch (status) {
      case "PUBLISHED":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-700" />
            <span>PUBLISHED</span>
          </span>
        );
      case "VERIFIED_NEEDS_ENTRY":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-100 text-blue-900 border border-blue-300">
            <Clock className="w-3 h-3 text-blue-700" />
            <span>VERIFIED · NEEDS ENTRY</span>
          </span>
        );
      case "RESEARCHING":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300">
            <Search className="w-3 h-3 text-amber-700" />
            <span>RESEARCHING</span>
          </span>
        );
      case "CONDITIONAL":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-purple-100 text-purple-900 border border-purple-300">
            <SlidersHorizontal className="w-3 h-3 text-purple-700" />
            <span>CONDITIONAL</span>
          </span>
        );
      case "TEMPORARILY_CLOSED":
      case "PAUSED":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-red-100 text-[#971F26] border border-red-300">
            <AlertCircle className="w-3 h-3 text-[#971F26]" />
            <span>TEMP CLOSED</span>
          </span>
        );
      case "CLOSED":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-300 text-stone-800 border border-stone-400">
            <Ban className="w-3 h-3 text-stone-700" />
            <span>CLOSED</span>
          </span>
        );
      case "DUPLICATE":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-200 text-stone-600 border border-stone-300">
            <Archive className="w-3 h-3 text-stone-500" />
            <span>DUPLICATE</span>
          </span>
        );
      case "UNVERIFIABLE":
      case "NOT_CURRENTLY_ACCESSIBLE":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-200 text-stone-700 border border-stone-400">
            <AlertCircle className="w-3 h-3 text-stone-600" />
            <span>UNVERIFIABLE</span>
          </span>
        );
      case "PROGRAM_CONCEPT_NOT_RESOURCE":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#1C1D1D] text-amber-300 border border-amber-500/50">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>PROGRAM CONCEPT</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-100 text-stone-700 border border-stone-300">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 select-none font-sans">
      {/* Header Info */}
      <div className="border-b border-[#D9D1C4] pb-5 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              MASTER RESOURCE RECONCILIATION LEDGER
            </span>
          </div>
          <span className="coord-tick">[INTERNAL RESEARCH INVENTORY CONTROL · {stats.total} TOTAL LEADS]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Resource Pipeline & Ingestion Audit
        </h2>
        <p className="text-xs sm:text-sm text-stone-700 max-w-4xl leading-relaxed font-sans">
          This internal reconciliation ledger maintains complete provenance across live published resources, historical research backlogs, conditional routes, and internal program concepts. Unverified leads are strictly quarantined from public discovery until verified.
        </p>
      </div>

      {/* Summary Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[9.5px] font-mono uppercase text-stone-600 font-bold block">
            Known Leads
          </span>
          <p className="text-2xl font-serif font-bold text-[#1C1D1D]">{stats.total}</p>
          <span className="text-[9.5px] text-stone-600 font-mono">11 categories</span>
        </div>

        <div className="bg-[#F5FDF7] border-2 border-emerald-600 rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[9.5px] font-mono uppercase text-emerald-800 font-bold block">
            Published Live
          </span>
          <p className="text-2xl font-serif font-bold text-emerald-950">{stats.published}</p>
          <span className="text-[9.5px] text-emerald-700 font-mono">Audited in graph</span>
        </div>

        <div className="bg-[#F0F7FF] border-2 border-blue-600 rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[9.5px] font-mono uppercase text-blue-800 font-bold block">
            Needs Entry
          </span>
          <p className="text-2xl font-serif font-bold text-blue-950">{stats.needsEntry}</p>
          <span className="text-[9.5px] text-blue-700 font-mono">Verified · queue</span>
        </div>

        <div className="bg-[#FFFDF5] border-2 border-amber-600 rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[9.5px] font-mono uppercase text-amber-800 font-bold block">
            Researching
          </span>
          <p className="text-2xl font-serif font-bold text-amber-950">{stats.researching}</p>
          <span className="text-[9.5px] text-amber-700 font-mono">Under audit</span>
        </div>

        <div className="bg-[#FDF4FF] border-2 border-purple-600 rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[9.5px] font-mono uppercase text-purple-800 font-bold block">
            Conditional
          </span>
          <p className="text-2xl font-serif font-bold text-purple-950">{stats.conditional}</p>
          <span className="text-[9.5px] text-purple-700 font-mono">Discretionary aid</span>
        </div>

        <div className="bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[9.5px] font-mono uppercase text-[#971F26] font-bold block">
            Temp Closed
          </span>
          <p className="text-2xl font-serif font-bold text-stone-900">{stats.closedOrStale}</p>
          <span className="text-[9.5px] text-stone-600 font-mono">Paused grants</span>
        </div>

        <div className="bg-[#1C1D1D] border-2 border-[#1C1D1D] text-white rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[9.5px] font-mono uppercase text-amber-400 font-bold block">
            Concepts
          </span>
          <p className="text-2xl font-serif font-bold text-amber-300">{stats.concepts}</p>
          <span className="text-[9.5px] text-stone-400 font-mono">Gap interventions</span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-3 shadow-sm">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search lead, provider, geography, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#F5F1E8] border border-[#1C1D1D] rounded-md text-xs font-mono focus:border-[#971F26] focus:outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#F5F1E8] border border-[#1C1D1D] rounded-md text-xs font-mono font-bold focus:border-[#971F26] focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Status Dropdown */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full p-2 bg-[#F5F1E8] border border-[#1C1D1D] rounded-md text-xs font-mono font-bold focus:border-[#971F26] focus:outline-none"
            >
              {statuses.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Secondary Filter Bar */}
        <div className="grid gap-3 sm:grid-cols-3 pt-2 border-t border-[#D9D1C4]">
          {/* Source Origin Dropdown */}
          <div>
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="w-full p-1.5 bg-[#F5F1E8] border border-[#1C1D1D] rounded text-xs font-mono focus:outline-none"
            >
              {origins.map((o) => (
                <option key={o.id} value={o.id}>
                  Origin: {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Verification Tier Dropdown */}
          <div>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="w-full p-1.5 bg-[#F5F1E8] border border-[#1C1D1D] rounded text-xs font-mono focus:outline-none"
            >
              {tiers.map((t) => (
                <option key={t.id} value={t.id}>
                  Tier: {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Public vs Non-Public Filter */}
          <div>
            <select
              value={selectedPublicFilter}
              onChange={(e) => setSelectedPublicFilter(e.target.value)}
              className="w-full p-1.5 bg-[#F5F1E8] border border-[#1C1D1D] rounded text-xs font-mono focus:outline-none"
            >
              <option value="ALL">Public Visibility: All Records</option>
              <option value="PUBLIC_ONLY">Live in Public Graph (Published)</option>
              <option value="NON_PUBLIC_ONLY">Quarantined / Research Backlog</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-stone-600 pt-1">
          <span>
            Showing <strong>{filteredItems.length}</strong> of {stats.total} master records
          </span>
          {(searchQuery || selectedCategory !== "ALL" || selectedStatus !== "ALL" || selectedOrigin !== "ALL" || selectedTier !== "ALL" || selectedPublicFilter !== "ALL") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
                setSelectedStatus("ALL");
                setSelectedOrigin("ALL");
                setSelectedTier("ALL");
                setSelectedPublicFilter("ALL");
              }}
              className="text-[#971F26] hover:underline font-bold"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto border-2 border-[#1C1D1D] rounded-xl bg-[#F5F1E8] shadow-sm">
        <table className="w-full text-left border-collapse font-sans text-xs">
          <thead>
            <tr className="border-b-2 border-[#1C1D1D] bg-[#1C1D1D] text-white font-mono text-[11px]">
              <th className="p-3 font-bold uppercase tracking-wider w-[24%]">Master Lead & Origin</th>
              <th className="p-3 font-bold uppercase tracking-wider w-[16%] border-l border-stone-700">Status & Tier</th>
              <th className="p-3 font-bold uppercase tracking-wider w-[32%] border-l border-stone-700">Audit Notes / Reason Not Live</th>
              <th className="p-3 font-bold uppercase tracking-wider w-[28%] border-l border-stone-700 bg-[#971F26] text-[#F5F1E8]">Next Research Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D9D1C4]">
            {filteredItems.map((item, idx) => (
              <tr
                key={item.id}
                className={`transition-colors ${
                  item.category === "PROGRAM_CONCEPT_GAP_INTERVENTION"
                    ? "bg-[#FFFDF5]"
                    : idx % 2 === 0
                    ? "bg-[#F5F1E8]"
                    : "bg-[#EEE8DD]"
                } hover:bg-stone-200/60`}
              >
                {/* 1. Lead Name & Details */}
                <td className="p-3.5 align-top space-y-1">
                  <span className="font-serif font-bold text-sm text-[#1C1D1D] block leading-tight">
                    {item.canonicalName || item.leadName}
                  </span>
                  <div className="text-[11px] font-mono text-stone-700 font-medium">
                    {item.provider}
                  </div>
                  <div className="flex flex-wrap items-center gap-1 font-mono text-[9.5px] text-stone-600 pt-0.5">
                    <span className="px-1.5 py-0.2 rounded bg-stone-200 border border-stone-300">
                      {item.categoryLabel}
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-stone-100 border border-stone-300">
                      {item.coverageType}
                    </span>
                    <span>• {item.geography || item.targetAudienceOrGeography}</span>
                  </div>
                  <div className="text-[9.5px] font-mono text-stone-500 pt-0.5 truncate max-w-xs">
                    Origin: {item.sourceOrigin}
                  </div>
                </td>

                {/* 2. Pipeline Status & Tier */}
                <td className="p-3.5 align-top border-l border-[#D9D1C4] space-y-2">
                  <div>{getStatusBadge(item.currentStatus || item.status || "RESEARCHING")}</div>
                  <div className="text-[10px] font-mono text-stone-700 space-y-0.5">
                    <div>Public: <strong>{item.isLiveOnSite || item.currentStatus === "PUBLISHED" ? "✓ LIVE" : "— QUARANTINED"}</strong></div>
                    <div className="truncate text-stone-500 max-w-[140px]" title={item.verificationTier}>Tier: {item.verificationTier}</div>
                    {item.existingPublicResourceId && (
                      <div className="text-[9px] text-emerald-800 font-bold truncate">ID: {item.existingPublicResourceId}</div>
                    )}
                  </div>
                </td>

                {/* 3. Audit Notes & Reason Not Published */}
                <td className="p-3.5 align-top border-l border-[#D9D1C4] leading-relaxed text-stone-800 text-xs font-sans space-y-1">
                  <p>{item.notes || item.whyNotOrNotes}</p>
                  {item.primarySource && (
                    <p className="text-[10px] font-mono text-stone-500 truncate">
                      Src: {item.primarySource}
                    </p>
                  )}
                </td>

                {/* 4. Next Action */}
                <td className="p-3.5 align-top border-l border-[#D9D1C4] bg-[#FDFBF7] leading-relaxed font-medium text-[#1C1D1D] text-xs font-sans">
                  <div className="flex items-start gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
                    <span>{item.nextResearchAction || item.nextAction}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}