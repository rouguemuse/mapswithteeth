"use client";

import React, { useState, useMemo } from "react";
import {
  MASTER_RECONCILIATION_LEDGER,
  MasterLedgerItem,
  MasterLedgerStatus,
  MasterLedgerCategory,
} from "@/data/masterReconciliationLedger";
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
} from "lucide-react";

export function MasterReconciliationLedger() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");

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
    { id: "PUBLISHED", label: "PUBLISHED" },
    { id: "VERIFIED_NEEDS_ENTRY", label: "VERIFIED — NEEDS ENTRY" },
    { id: "RESEARCHING", label: "RESEARCHING" },
    { id: "CONDITIONAL", label: "CONDITIONAL" },
    { id: "TEMPORARILY_CLOSED", label: "TEMPORARILY CLOSED" },
    { id: "STALE", label: "STALE" },
    { id: "PROGRAM_CONCEPT_NOT_RESOURCE", label: "PROGRAM CONCEPT" },
  ];

  const stats = useMemo(() => {
    const total = MASTER_RECONCILIATION_LEDGER.length;
    const published = MASTER_RECONCILIATION_LEDGER.filter((i) => i.status === "PUBLISHED").length;
    const needsEntry = MASTER_RECONCILIATION_LEDGER.filter((i) => i.status === "VERIFIED_NEEDS_ENTRY").length;
    const researching = MASTER_RECONCILIATION_LEDGER.filter((i) => i.status === "RESEARCHING").length;
    const conditionalOrPaused = MASTER_RECONCILIATION_LEDGER.filter(
      (i) => i.status === "CONDITIONAL" || i.status === "TEMPORARILY_CLOSED" || i.status === "STALE"
    ).length;
    const concepts = MASTER_RECONCILIATION_LEDGER.filter((i) => i.status === "PROGRAM_CONCEPT_NOT_RESOURCE").length;

    return { total, published, needsEntry, researching, conditionalOrPaused, concepts };
  }, []);

  const filteredItems = useMemo(() => {
    return MASTER_RECONCILIATION_LEDGER.filter((item) => {
      const matchesCat = selectedCategory === "ALL" || item.category === selectedCategory;
      const matchesStatus = selectedStatus === "ALL" || item.status === selectedStatus;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.leadName.toLowerCase().includes(q) ||
        item.whyNotOrNotes.toLowerCase().includes(q) ||
        item.nextAction.toLowerCase().includes(q) ||
        item.authoritativeSource.toLowerCase().includes(q) ||
        item.targetAudienceOrGeography.toLowerCase().includes(q);

      return matchesCat && matchesStatus && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: MasterLedgerStatus) => {
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
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-red-100 text-[#971F26] border border-red-300">
            <AlertCircle className="w-3 h-3 text-[#971F26]" />
            <span>PAUSED / CLOSED</span>
          </span>
        );
      case "STALE":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-200 text-stone-700 border border-stone-400">
            <Archive className="w-3 h-3 text-stone-600" />
            <span>STALE</span>
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
              MASTER RESEARCH RECONCILIATION LEDGER
            </span>
          </div>
          <span className="coord-tick">[INVENTORY CONTROL · 60+ LEADS TRACKED]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Master Lead Pipeline & Verification Audit
        </h2>
        <p className="text-xs sm:text-sm text-stone-700 max-w-4xl leading-relaxed font-sans">
          This ledger tracks every discovered candidate lead from the recovered master research archive. Rather than blindly publishing unverified claims or losing leads between cycles, each item carries an explicit verification status, current live presence, publication barrier analysis, and next research action.
        </p>
      </div>

      {/* Summary Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[10px] font-mono uppercase text-stone-600 font-bold block">
            Total Leads
          </span>
          <p className="text-2xl font-serif font-bold text-[#1C1D1D]">{stats.total}</p>
          <span className="text-[10px] text-stone-600 font-mono">11 categories</span>
        </div>

        <div className="bg-[#F5FDF7] border-2 border-emerald-600 rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold block">
            Published Live
          </span>
          <p className="text-2xl font-serif font-bold text-emerald-950">{stats.published}</p>
          <span className="text-[10px] text-emerald-700 font-mono">Audited & active</span>
        </div>

        <div className="bg-[#F0F7FF] border-2 border-blue-600 rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[10px] font-mono uppercase text-blue-800 font-bold block">
            Verified · Queue
          </span>
          <p className="text-2xl font-serif font-bold text-blue-950">{stats.needsEntry}</p>
          <span className="text-[10px] text-blue-700 font-mono">Needs entry card</span>
        </div>

        <div className="bg-[#FFFDF5] border-2 border-amber-600 rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[10px] font-mono uppercase text-amber-800 font-bold block">
            Researching
          </span>
          <p className="text-2xl font-serif font-bold text-amber-950">{stats.researching}</p>
          <span className="text-[10px] text-amber-700 font-mono">Checking criteria</span>
        </div>

        <div className="bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[10px] font-mono uppercase text-[#971F26] font-bold block">
            Conditional / Paused
          </span>
          <p className="text-2xl font-serif font-bold text-stone-900">{stats.conditionalOrPaused}</p>
          <span className="text-[10px] text-stone-600 font-mono">High-friction / stale</span>
        </div>

        <div className="bg-[#1C1D1D] border-2 border-[#1C1D1D] text-white rounded-lg p-3 space-y-0.5 shadow-2xs">
          <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
            Program Concepts
          </span>
          <p className="text-2xl font-serif font-bold text-amber-300">{stats.concepts}</p>
          <span className="text-[10px] text-stone-400 font-mono">Gap interventions</span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search lead name, notes, next action..."
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

        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-stone-600 pt-1 border-t border-[#D9D1C4]">
          <span>
            Showing <strong>{filteredItems.length}</strong> of {stats.total} master leads
          </span>
          {(searchQuery || selectedCategory !== "ALL" || selectedStatus !== "ALL") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
                setSelectedStatus("ALL");
              }}
              className="text-[#971F26] hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto border-2 border-[#1C1D1D] rounded-xl bg-[#F5F1E8] shadow-sm">
        <table className="w-full text-left border-collapse font-sans text-xs">
          <thead>
            <tr className="border-b-2 border-[#1C1D1D] bg-[#1C1D1D] text-white font-mono text-[11px]">
              <th className="p-3 font-bold uppercase tracking-wider w-[22%]">Master Lead & Category</th>
              <th className="p-3 font-bold uppercase tracking-wider w-[16%] border-l border-stone-700">Pipeline Status</th>
              <th className="p-3 font-bold uppercase tracking-wider w-[32%] border-l border-stone-700">Audit Notes & Why Not Live</th>
              <th className="p-3 font-bold uppercase tracking-wider w-[30%] border-l border-stone-700 bg-[#971F26] text-[#F5F1E8]">Next Action</th>
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
                {/* 1. Lead Name & Category */}
                <td className="p-3.5 align-top space-y-1">
                  <span className="font-serif font-bold text-sm text-[#1C1D1D] block leading-tight">
                    {item.leadName}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-stone-600">
                    <span className="px-1.5 py-0.5 rounded bg-stone-200/80 border border-stone-300">
                      {item.categoryLabel}
                    </span>
                    <span>• {item.targetAudienceOrGeography}</span>
                  </div>
                  <div className="text-[10px] font-mono text-stone-500 pt-0.5 truncate max-w-xs">
                    Src: {item.authoritativeSource}
                  </div>
                </td>

                {/* 2. Pipeline Status */}
                <td className="p-3.5 align-top border-l border-[#D9D1C4] space-y-2">
                  <div>{getStatusBadge(item.status)}</div>
                  <div className="text-[10px] font-mono text-stone-600 space-y-0.5">
                    <div>Live On Site: <strong>{item.isLiveOnSite ? "✓ YES" : "✗ NO"}</strong></div>
                    <div>Verified: <strong>{item.isVerified ? "✓ YES" : "— PENDING"}</strong></div>
                  </div>
                </td>

                {/* 3. Audit Notes & Why Not Live */}
                <td className="p-3.5 align-top border-l border-[#D9D1C4] leading-relaxed text-stone-800 text-xs font-sans">
                  {item.whyNotOrNotes}
                </td>

                {/* 4. Next Action */}
                <td className="p-3.5 align-top border-l border-[#D9D1C4] bg-[#FDFBF7] leading-relaxed font-medium text-[#1C1D1D] text-xs font-sans">
                  <div className="flex items-start gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
                    <span>{item.nextAction}</span>
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
