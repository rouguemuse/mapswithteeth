"use client";

import React, { useState } from "react";
import registry from "@/design-intelligence/token-registry.json";

type ViewMode = "specimens" | "containers" | "tokens" | "governance";

export default function DesignLibraryPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("specimens");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArchetypeFilter, setSelectedArchetypeFilter] = useState<string>("ALL");
  const [activeTabA, setActiveTabA] = useState(0);
  const [activeTabB, setActiveTabB] = useState(0);
  const [activeTabC, setActiveTabC] = useState(0);
  const [activeTabD, setActiveTabD] = useState(0);

  const tabs = ["01. Linked-Matter Review", "02. Closed-Loop Referral", "03. Context Before Closure"];
  const archetypes = Object.values(registry.archetypes);

  const allTokens: Array<{
    archetypeId: string;
    archetypeName: string;
    category: string;
    tokenName: string;
    cssVar: string;
    value: string;
  }> = [];

  for (const arch of archetypes) {
    const tokenGroups = (arch.tokens || {}) as Record<string, Record<string, string>>;
    for (const [cat, entries] of Object.entries(tokenGroups)) {
      for (const [tKey, tVal] of Object.entries(entries)) {
        allTokens.push({
          archetypeId: arch.id,
          archetypeName: arch.name,
          category: cat,
          tokenName: tKey,
          cssVar: `--di-${arch.id}-${cat}-${tKey}`,
          value: String(tVal),
        });
      }
    }
  }

  const filteredTokens = allTokens.filter((t) => {
    const matchesArch = selectedArchetypeFilter === "ALL" || t.archetypeId === selectedArchetypeFilter;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      !q ||
      t.cssVar.toLowerCase().includes(q) ||
      t.value.toLowerCase().includes(q) ||
      t.archetypeName.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q);
    return matchesArch && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-sans select-none bg-[#F4F2ED]">
      {/* Standalone Civic vs. Design Infrastructure Separation Banner (Priority 4) */}
      <div className="mwt-callout-ink text-xs font-mono space-y-1">
        <span className="font-bold text-[#971F26] uppercase block">
          SEPARATION OF PUBLIC-INTEREST CIVIC WORK &amp; DESIGN INFRASTRUCTURE:
        </span>
        <p className="font-sans text-stone-800 leading-relaxed">
          This route documents original design principles, container patterns, and implementation recipes developed while engineering high-density public-interest specifications. It is kept distinct from Maps With Teeth&apos;s primary civic navigation and does not redistribute third-party trademarked brand kits or proprietary external stylesheets.
        </p>
      </div>

      {/* Top Library Header */}
      <div className="border-b-2 border-[#11100F] pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <span className="text-[#971F26] font-bold uppercase tracking-widest">
            ORIGINAL DESIGN ARCHITECTURE CORPUS v3.0 · W3C DTCG REGISTRY
          </span>
          <span className="px-2.5 py-1 bg-[#11100F] text-[#F8F5EE] font-bold">
            {archetypes.length} ARCHITECTURAL ARCHETYPES · 5 CONTAINER PATTERNS
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#11100F] tracking-tight">
              Design Architecture &amp; Container Pattern Library
            </h1>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Dual-indexed by <strong>Axis 1: Original Architectural Archetype</strong> (<code>--di-&lt;archetype&gt;-*</code>) and <strong>Axis 2: Validated Container &amp; UX Pattern</strong> (<code>--pattern-*</code>).
            </p>
          </div>

          {/* 4-Mode Navigation Bar */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#E4DDD0] rounded-md font-mono text-xs shrink-0">
            {[
              { id: "specimens", label: "1. Editorial Archetypes (A–D)" },
              { id: "containers", label: "2. Container Hierarchy Recipes" },
              { id: "tokens", label: `3. Token Registry (${allTokens.length})` },
              { id: "governance", label: "4. Architecture & IP Principles" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setViewMode(tab.id as ViewMode)}
                className={`px-3 py-2 rounded font-bold transition cursor-pointer ${
                  viewMode === tab.id
                    ? "bg-[#11100F] text-[#FAF8F3] shadow-xs"
                    : "text-[#4D4944] hover:text-[#11100F]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODE 1: 4 ORIGINAL EDITORIAL ARCHETYPE SPECIMENS */}
      {viewMode === "specimens" && (
        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-2 border-b border-stone-300 pb-3">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#971F26] block">
                LIVE COMPONENT WORKBENCH · 4 ARCHITECTURAL ARCHETYPES
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#11100F]">
                Compare 4 De-Weighted Editorial Systems Side-by-Side
              </h2>
            </div>
            <span className="font-mono text-xs text-stone-600">
              Click tabs inside any specimen to test interactive state
            </span>
          </div>

          <div id="four-new-directions-grid" className="grid lg:grid-cols-2 gap-7">
            {/* ARCHETYPE A: SWISS HAIRLINE EDITORIAL GRID */}
            <div className="bg-[#FDFCFA] text-[#111111] p-7 sm:p-8 flex flex-col justify-between border border-stone-200 shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-[#111111] pb-2.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#D02028]">
                    ARCHETYPE A · SWISS HAIRLINE EDITORIAL GRID
                  </span>
                  <span className="font-mono text-[10px] text-stone-500">
                    Zero Boxes · 1px Hairline Columns
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-mono text-[10.5px] tracking-widest uppercase text-stone-500">
                    <span className="text-[#D02028] font-bold">§ 02</span>
                    <span>/</span>
                    <span>AGY-003 SPECIMEN</span>
                    <span>/</span>
                    <span className="text-[#111111] font-semibold underline decoration-[#D02028] underline-offset-4">
                      TIER 02: IMPLEMENTED CODE
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-[34px] font-bold tracking-tight leading-[1.06] text-[#111111]">
                    When the Human Becomes the Integration Layer
                  </h3>
                </div>

                <div className="border-y border-[#111111]/20 py-3.5 flex items-start gap-3">
                  <span className="font-serif text-3xl leading-none text-[#D02028] font-bold select-none">
                    “
                  </span>
                  <p className="font-serif italic text-[15px] text-stone-800 leading-snug">
                    Submission ≠ Review · Referral ≠ Assistance · Administrative Closure ≠ Factual Resolution.
                  </p>
                </div>

                <div className="border-b border-stone-200 flex gap-6 font-mono text-[11px]">
                  {tabs.map((t, i) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setActiveTabA(i)}
                      className={`pb-2.5 uppercase tracking-wider transition cursor-pointer -mb-px ${
                        activeTabA === i
                          ? "border-b-2 border-[#D02028] text-[#111111] font-bold"
                          : "text-stone-400 hover:text-stone-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 pt-1">
                  <div className="pb-4 sm:pb-0 sm:pr-5 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-2xl font-bold text-[#D02028]">01</span>
                      <span className="font-mono text-[10px] text-stone-400">#CR-2026-0814</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#111111]">
                      Participant-Held Continuity Receipt
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Preserves the 7 administrative handling facts at every door without creating a central surveillance dossier.
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-0 sm:pl-5 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-2xl font-bold text-[#111111]">02</span>
                      <span className="font-mono text-[10px] text-stone-400">47 U.S.C. § 345</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#111111]">
                      Personal Number Continuity
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Separates shared-account billing responsibility from adult communication identity across 6 dimensions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ARCHETYPE B: BORDERLESS TONAL GALLERY */}
            <div className="bg-[#F6F4EF] text-[#1E1D1B] p-7 sm:p-8 flex flex-col justify-between border border-[#E5E0D5] shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#DFD9CC] pb-2.5">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8C2D2B]">
                    ARCHETYPE B · BORDERLESS TONAL GALLERY
                  </span>
                  <span className="font-mono text-[10px] text-[#7A746B]">
                    Zero Borders · Soft Surface Wells
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EAE5D9] text-[#5C564E] font-mono text-[10px]">
                      § 02 · AGY-003
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E3ECE6] text-[#28593A] font-mono text-[10px] font-medium">
                      Tier 02 · Implemented
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-[34px] font-normal tracking-tight leading-[1.12] text-[#1E1D1B]">
                    When the Human Becomes the <em className="italic text-[#8C2D2B]">Integration Layer</em>
                  </h3>
                </div>

                <div className="bg-[#ECE8DF] rounded-xl px-5 py-3.5">
                  <p className="text-xs text-[#3D3A35] leading-relaxed">
                    <strong className="font-medium text-[#8C2D2B] uppercase font-mono text-[10px] tracking-wider block mb-0.5">
                      Epistemic Boundary
                    </strong>
                    Submission ≠ Review · Referral ≠ Assistance · Closure ≠ Resolution.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 font-sans text-xs">
                  {tabs.map((t, i) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setActiveTabB(i)}
                      className={`px-4 py-2 rounded-full transition cursor-pointer ${
                        activeTabB === i
                          ? "bg-[#1E1D1B] text-[#F6F4EF] font-medium"
                          : "bg-[#EAE5D9]/70 text-[#5C564E] hover:bg-[#EAE5D9]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#FDFBF7] rounded-2xl p-5 space-y-2 shadow-[0_2px_12px_rgba(30,29,27,0.03)]">
                    <span className="font-mono text-[10px] text-[#8C2D2B] tracking-wider uppercase block">
                      Model A · #CR-2026-0814
                    </span>
                    <h4 className="font-serif font-medium text-lg text-[#1E1D1B]">
                      Participant-Held Continuity Receipt
                    </h4>
                    <p className="text-xs text-[#666057] leading-relaxed">
                      Preserves the 7 administrative handling facts at every door without creating a central surveillance dossier.
                    </p>
                  </div>

                  <div className="bg-[#FDFBF7] rounded-2xl p-5 space-y-2 shadow-[0_2px_12px_rgba(30,29,27,0.03)]">
                    <span className="font-mono text-[10px] text-[#7A746B] tracking-wider uppercase block">
                      Model B · 47 U.S.C. § 345
                    </span>
                    <h4 className="font-serif font-medium text-lg text-[#1E1D1B]">
                      Personal Number Continuity
                    </h4>
                    <p className="text-xs text-[#666057] leading-relaxed">
                      Separates shared-account billing responsibility from adult communication identity across 6 dimensions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ARCHETYPE C: TACTILE TECHNICAL SPECIFICATION & FIELD MANUAL */}
            <div className="bg-[#EFEFE9] text-[#181817] p-7 sm:p-8 flex flex-col justify-between border border-[#D4D4CC] shadow-xs">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-dashed border-[#A8A89E] pb-2.5 font-mono text-[10px]">
                  <span className="font-bold uppercase tracking-wider text-[#E03C26]">
                    ARCHETYPE C · TACTILE TECHNICAL SPECIFICATION MANUAL
                  </span>
                  <span className="text-[#66665E]">
                    Technical Paper · Dashed Spec Grid
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#5C5C54]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E03C26] inline-block" />
                      <span>SPEC_ID: AGY-003 // REV 2026.11</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white border border-[#CCCCC2] rounded-xs text-[#181817]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                      <span>TIER_02: ACTIVE</span>
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#181817]">
                    When the Human Becomes the Integration Layer
                  </h3>
                </div>

                <div className="bg-[#E4E4DC] border border-[#CCCCC2] px-3.5 py-2.5 font-mono text-[11px] flex items-center justify-between">
                  <span className="text-[#181817]">
                    <strong className="text-[#E03C26]">INVARIANT:</strong> SUBMISSION != REVIEW // REFERRAL != ASSISTANCE
                  </span>
                  <span className="text-[9.5px] text-[#66665E]">[LOCKED]</span>
                </div>

                <div className="flex flex-wrap gap-1.5 font-mono text-[10.5px]">
                  {tabs.map((t, i) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setActiveTabC(i)}
                      className={`px-3 py-1.5 rounded-xs border transition flex items-center gap-2 cursor-pointer ${
                        activeTabC === i
                          ? "bg-white border-[#181817] text-[#181817] font-bold shadow-[0_2px_0_#181817]"
                          : "bg-[#E4E4DC] border-[#CCCCC2] text-[#66665E] hover:bg-white/60"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          activeTabC === i ? "bg-[#E03C26]" : "bg-[#B8B8AE]"
                        }`}
                      />
                      <span>{t}</span>
                    </button>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white border border-[#CCCCC2] p-4 space-y-2">
                    <div className="flex items-center justify-between border-b border-dashed border-[#D4D4CC] pb-1.5 font-mono text-[10px]">
                      <span className="text-[#E03C26] font-bold">MOD_A</span>
                      <span className="text-[#66665E]">#CR-2026-0814</span>
                    </div>
                    <h4 className="font-sans font-bold text-base text-[#181817]">
                      Participant-Held Continuity Receipt
                    </h4>
                    <p className="text-xs text-[#52524B] leading-relaxed">
                      Preserves the 7 administrative handling facts at every door without creating a central surveillance dossier.
                    </p>
                  </div>

                  <div className="bg-white border border-[#CCCCC2] p-4 space-y-2">
                    <div className="flex items-center justify-between border-b border-dashed border-[#D4D4CC] pb-1.5 font-mono text-[10px]">
                      <span className="text-[#181817] font-bold">MOD_B</span>
                      <span className="text-[#66665E]">47 U.S.C. § 345</span>
                    </div>
                    <h4 className="font-sans font-bold text-base text-[#181817]">
                      Personal Number Continuity
                    </h4>
                    <p className="text-xs text-[#52524B] leading-relaxed">
                      Separates shared-account billing responsibility from adult communication identity across 6 dimensions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ARCHETYPE D: OPEN-CANVAS ESSAY WITH FLOATING SPECIMEN SHEETS */}
            <div className="bg-[#F9F6F0] text-[#171513] p-7 sm:p-8 flex flex-col justify-between border border-[#DFD7C8] shadow-xs">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#DFD7C8] pb-2.5 font-mono text-[10px]">
                  <span className="font-bold uppercase tracking-wider text-[#971F26]">
                    ARCHETYPE D · OPEN-CANVAS ESSAY + FLOATING SPECIMEN SHEET
                  </span>
                  <span className="text-stone-500">
                    No Outer Wrapper · Shadow-Lifted Specimens
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-[10.5px] uppercase tracking-widest text-[#971F26] font-bold">
                    CHAPTER 02 · CONTINUITY SPECIMEN AGY-003
                  </span>
                  <h3 className="font-serif text-3xl sm:text-[34px] font-bold text-[#171513] leading-tight">
                    When the Human Becomes the Integration Layer
                  </h3>
                  <p className="text-xs text-stone-600 font-mono pt-0.5">
                    <span className="text-[#971F26] font-bold">Note:</span> Submission ≠ Review · Referral ≠ Assistance · Closure ≠ Resolution.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-[0_10px_30px_-5px_rgba(23,21,19,0.08)] border border-[#E6DFD3] overflow-hidden">
                  <div className="grid grid-cols-3 bg-[#F2ECE1] border-b border-[#E6DFD3] font-mono text-[10.5px]">
                    {tabs.map((t, i) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setActiveTabD(i)}
                        className={`py-2.5 px-2 text-center transition cursor-pointer ${
                          activeTabD === i
                            ? "bg-white text-[#971F26] font-bold border-t-2 border-t-[#971F26]"
                            : "text-stone-600 hover:bg-white/50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="p-5 grid sm:grid-cols-2 gap-5 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEAE0]">
                    <div className="space-y-1.5 sm:pr-3">
                      <span className="font-mono text-[10px] text-[#971F26] font-bold uppercase block">
                        MODEL A · #CR-2026-0814
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#171513]">
                        Participant-Held Continuity Receipt
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Preserves the 7 administrative handling facts at every door without creating a central surveillance dossier.
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-0 sm:pl-5 space-y-1.5">
                      <span className="font-mono text-[10px] text-stone-500 font-bold uppercase block">
                        MODEL B · 47 U.S.C. § 345
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#171513]">
                        Personal Number Continuity
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Separates shared-account billing responsibility from adult communication identity across 6 dimensions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MODE 2: CONTAINER & DATA HIERARCHY RECIPES */}
      {viewMode === "containers" && (
        <section className="space-y-8">
          <div className="border-b border-stone-300 pb-3">
            <span className="font-mono text-xs font-bold uppercase text-[#971F26] block">
              VALIDATED CONTAINER &amp; DATA HIERARCHY RECIPES
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#11100F]">
              3 Reusable Container Architecture Patterns (Zero Box-in-Box Fatigue)
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* PATTERN 1: SHARED 1PX WALL GRID */}
            <div className="bg-white border border-stone-300 p-5 space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold uppercase text-[#971F26]">
                  1. SHARED-1PX-WALL RELATIONAL GRID (`gap-px bg-border`)
                </span>
                <h3 className="font-serif font-bold text-lg text-[#11100F]">
                  Shared 1px Walls Instead of Separate Card Boxes
                </h3>
                <p className="text-xs text-stone-600">
                  Adjacent cells share a single 1px wall (`bg-[#D8D0C0] gap-px`), cutting parallel border lines by 50%.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#D8D0C0] border border-[#D8D0C0] font-mono text-xs">
                <div className="bg-[#FAF8F3] p-3.5 space-y-1">
                  <span className="text-[10px] text-[#971F26] font-bold">TIER 01</span>
                  <div className="font-serif font-bold text-sm text-[#11100F]">Existing Law</div>
                  <p className="font-sans text-[11px] text-stone-600">12 Texas &amp; federal statutes.</p>
                </div>
                <div className="bg-[#FAF8F3] p-3.5 space-y-1">
                  <span className="text-[10px] text-[#1F6B38] font-bold">TIER 02</span>
                  <div className="font-serif font-bold text-sm text-[#11100F]">Implemented Code</div>
                  <p className="font-sans text-[11px] text-stone-600">47 records · 1,070 repo QA checks.</p>
                </div>
                <div className="bg-[#FAF8F3] p-3.5 space-y-1">
                  <span className="text-[10px] text-[#971F26] font-bold">TIER 03</span>
                  <div className="font-serif font-bold text-sm text-[#11100F]">Proposed Policy</div>
                  <p className="font-sans text-[11px] text-stone-600">7 integration-layer reforms.</p>
                </div>
                <div className="bg-[#FAF8F3] p-3.5 space-y-1">
                  <span className="text-[10px] text-[#945700] font-bold">TIER 04</span>
                  <div className="font-serif font-bold text-sm text-[#11100F]">Pilot Targets</div>
                  <p className="font-sans text-[11px] text-stone-600">Synthetic 90-day benchmarks.</p>
                </div>
              </div>
            </div>

            {/* PATTERN 2: 3-WEIGHT HORIZONTAL RULE CODING */}
            <div className="bg-white border border-stone-300 p-5 space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold uppercase text-[#971F26]">
                  2. THREE-WEIGHT HORIZONTAL RULE HIERARCHY
                </span>
                <h3 className="font-serif font-bold text-lg text-[#11100F]">
                  3px Top Anchor · 1px Solid Subhead · 1px Dotted Rows
                </h3>
                <p className="text-xs text-stone-600">
                  Zero vertical side borders. Hierarchy is communicated entirely by horizontal rule weight.
                </p>
              </div>

              <div className="border-t-[3px] border-t-[#11100F] pt-2.5 space-y-2 font-mono text-xs">
                <div className="flex justify-between items-baseline border-b border-[#11100F] pb-1.5">
                  <span className="font-bold text-[#11100F]">SPECIMEN AGY-003</span>
                  <span className="text-[10px] text-[#971F26] font-bold">REVIEW TRACE</span>
                </div>
                <div className="divide-y divide-dotted divide-stone-300 text-[11px]">
                  <div className="py-1.5 flex justify-between">
                    <span className="text-stone-700">DOC-01 Protective Order</span>
                    <span className="font-bold text-[#1F6B38]">REVIEWED</span>
                  </div>
                  <div className="py-1.5 flex justify-between">
                    <span className="text-stone-700">DOC-02 School Attendance</span>
                    <span className="font-bold text-[#945700]">RECEIVED ONLY</span>
                  </div>
                  <div className="py-1.5 flex justify-between">
                    <span className="text-stone-700">DOC-03 Neighbor Affidavit</span>
                    <span className="font-bold text-[#B31B2A]">UNREVIEWED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PATTERN 3: DOCKED PROVENANCE FOOTER */}
            <div className="bg-white border border-stone-300 p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold uppercase text-[#971F26]">
                  3. SINGLE EXHIBIT FRAME + DOCKED PROVENANCE FOOTER
                </span>
                <h3 className="font-serif font-bold text-lg text-[#11100F]">
                  Integrated Citation &amp; Verification Strip
                </h3>
                <p className="text-xs text-stone-600">
                  Eliminates separate floating disclaimer boxes by docking citations &amp; non-claims into the card footer.
                </p>
              </div>

              <div className="border border-[#C4B69E] rounded-md overflow-hidden">
                <div className="p-3.5 bg-[#FAF8F3] space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#971F26] uppercase">
                    STATUTORY REMEDY · TEX. PROP. CODE § 92.016
                  </span>
                  <div className="font-serif font-bold text-sm text-[#11100F]">
                    Early Residential Lease Termination
                  </div>
                  <p className="text-[11px] text-stone-600">
                    Allows survivors to terminate a residential lease without penalty upon delivering qualifying documentation.
                  </p>
                </div>
                <div className="px-3.5 py-2 bg-[#ECE6DA] border-t border-[#C4B69E] flex items-center justify-between font-mono text-[10px] text-stone-700">
                  <span>Source: Texas Property Code Ch. 92</span>
                  <span className="font-bold text-[#1F6B38]">DIRECTLY VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MODE 3: SEARCHABLE & FILTERABLE MASTER TOKEN TABLE */}
      {viewMode === "tokens" && (
        <section className="space-y-6">
          <div className="bg-white border border-[#C4B69E] p-4 sm:p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase text-[#971F26] block">
                  AXIS 1 · MASTER TOKEN EXPLORER
                </span>
                <h2 className="text-xl font-serif font-bold text-[#11100F]">
                  Search &amp; Filter All {allTokens.length} Original Tokens Across {archetypes.length} Archetypes
                </h2>
              </div>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search token name, hex, or archetype..."
                className="px-3 py-2 border border-stone-300 rounded text-xs font-mono w-full sm:w-72 bg-[#FAF8F3]"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <button
                type="button"
                onClick={() => setSelectedArchetypeFilter("ALL")}
                className={`px-2.5 py-1 rounded cursor-pointer ${
                  selectedArchetypeFilter === "ALL"
                    ? "bg-[#971F26] text-white font-bold"
                    : "bg-[#F4F2ED] text-stone-700 hover:bg-stone-200"
                }`}
              >
                ALL ({allTokens.length})
              </button>
              {archetypes.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setSelectedArchetypeFilter(a.id)}
                  className={`px-2.5 py-1 rounded cursor-pointer ${
                    selectedArchetypeFilter === a.id
                      ? "bg-[#971F26] text-white font-bold"
                      : "bg-[#F4F2ED] text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {a.id}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto border-t border-stone-200 pt-2">
              <table className="w-full text-left border-collapse font-mono text-xs">
                <thead>
                  <tr className="border-b border-stone-300 text-[10px] text-stone-500 uppercase">
                    <th className="py-2 pr-3">Archetype</th>
                    <th className="py-2 pr-3">Category</th>
                    <th className="py-2 pr-3">CSS Custom Property</th>
                    <th className="py-2 pr-3">Preview</th>
                    <th className="py-2">Raw Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {filteredTokens.map((t) => {
                    const isColor = t.value.startsWith("#") || t.value.startsWith("rgb");
                    return (
                      <tr key={t.cssVar} className="hover:bg-[#FAF8F3]">
                        <td className="py-2 pr-3 font-bold text-[#971F26]">{t.archetypeId}</td>
                        <td className="py-2 pr-3 text-stone-600">{t.category}</td>
                        <td className="py-2 pr-3 font-semibold text-[#11100F]">{t.cssVar}</td>
                        <td className="py-2 pr-3">
                          {isColor ? (
                            <span
                              className="inline-block w-5 h-5 rounded-xs border border-stone-300 align-middle"
                              style={{ backgroundColor: t.value }}
                            />
                          ) : (
                            <span className="text-[10px] text-stone-400">SPEC</span>
                          )}
                        </td>
                        <td className="py-2 text-stone-700">{t.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* MODE 4: ARCHITECTURE, IP GOVERNANCE & PRODUCT REQUIREMENTS */}
      {viewMode === "governance" && (
        <section className="bg-[#11100F] text-[#F8F5EE] p-7 sm:p-10 space-y-6 border-t-4 border-t-[#971F26]">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D83B44]">
              PRODUCT ARCHITECTURE · IP BOUNDARIES &amp; DIFFERENTIATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Original Principles &amp; Validated Container Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-[#E2D7C3] leading-relaxed">
              Raw token extraction alone does not establish commercial differentiation or product-market fit, and redistributing third-party brand names or proprietary stylesheets creates intellectual-property risk. Any standalone commercial design product must be built around <strong>original design principles, validated container patterns, implementation recipes, and reusable component infrastructure</strong>—and maintained separately from Maps With Teeth&apos;s public-interest civic identity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 font-sans">
            <div className="bg-[#1C1A17] border border-[#2B2926] p-5 space-y-2">
              <span className="font-mono text-[10px] text-[#D83B44] font-bold uppercase">
                PILLAR 01 · CLEAN-ROOM IP &amp; NAMING
              </span>
              <h3 className="font-serif font-bold text-lg text-white">
                Archetype-Based W3C DTCG Tokens
              </h3>
              <p className="text-xs text-[#C8BFA8] leading-relaxed">
                Tokens are organized by functional design archetype (<code>archival-monograph</code>, <code>swiss-hairline-editorial</code>, <code>trauma-informed-civic</code>) rather than third-party trademarks.
              </p>
            </div>

            <div className="bg-[#1C1A17] border border-[#2B2926] p-5 space-y-2">
              <span className="font-mono text-[10px] text-[#4ADE80] font-bold uppercase">
                PILLAR 02 · VALIDATED CONTAINER RECIPES
              </span>
              <h3 className="font-serif font-bold text-lg text-white">
                Anti-Box-Fatigue Layout Rules
              </h3>
              <p className="text-xs text-[#C8BFA8] leading-relaxed">
                Reusable structural patterns for dense legal, policy, and research interfaces: Shared-1px-Wall Grids, Three-Weight Horizontal Rule Coding, and Docked Provenance Footers.
              </p>
            </div>

            <div className="bg-[#1C1A17] border border-[#2B2926] p-5 space-y-2">
              <span className="font-mono text-[10px] text-[#FBBF24] font-bold uppercase">
                PILLAR 03 · CIVIC SEPARATION
              </span>
              <h3 className="font-serif font-bold text-lg text-white">
                Protected Public-Interest Mission
              </h3>
              <p className="text-xs text-[#C8BFA8] leading-relaxed">
                Maps With Teeth&apos;s primary navigation and survivor/policy journeys remain 100% non-commercial and focused on cross-system continuity and accountability.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
