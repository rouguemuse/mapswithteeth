"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, MoveHorizontal, FileText, Eye } from "lucide-react";

const FOLIOS = [
  {
    id: "folio-00",
    code: "FOLIO 00 · COVER MONOGRAPH",
    title: "When the Human Becomes the Integration Layer",
    subtitle: "Archival Courthouse & Radial Cartography Collage (4:3)",
    src: "/images/case-study/mwt_case_study_cover_4x3.png",
    rawArtSrc: "/images/case-study/raw_art_courthouse_cartography_collage.jpg",
    beforeSrc: "/images/art/mwtbetterstandrd.png",
    caption:
      "Full-bleed mixed-media archival collage pairing classical courthouse steps, crimson-tinted institutional columns, and radial street cartography with the two primary working models of Maps With Teeth.",
  },
  {
    id: "folio-01",
    code: "FOLIO 01 · PROBLEM ARCHITECTURE",
    title: "Five Institutional Seams & 8-Question Diagnostic Method",
    subtitle: "Woodcut Urban Grid & Crimson Arterial Route (4:3)",
    src: "/images/case-study/mwt_case_study_01_system_seams_4x3.png",
    rawArtSrc: "/images/case-study/raw_art_urban_grid_crimson_route.jpg",
    beforeSrc: "/images/art/infographic.png",
    caption:
      "Pins the recurring handoff failures (Referral ≠ Handoff, Submission ≠ Review, Access Barrier ≠ Refusal, Repetition ≠ Corroboration) along a single crimson route cutting across a woodcut urban street grid.",
  },
  {
    id: "folio-02",
    code: "FOLIO 02 · PRIMARY MODEL A",
    title: "Continuity Receipt & 9-Status Review Trace (AGY-003)",
    subtitle: "Four Torn Map Strips Stitched by Crimson Thread (4:3)",
    src: "/images/case-study/mwt_case_study_02_continuity_receipt_4x3.png",
    rawArtSrc: "/images/case-study/raw_art_stitched_map_seams_4x3.jpg",
    beforeSrc: "/images/art/continuity_receipt.png",
    caption:
      "Illustrates how the participant-held 7-field Continuity Receipt and agency-side 9-status Review Trace stitch the administrative path across four disconnected institutional doors without a centralized surveillance database.",
  },
  {
    id: "folio-03",
    code: "FOLIO 03 · PRIMARY MODEL B",
    title: "Personal Number Continuity: Separating Billing from Identity",
    subtitle: "Engraved Entanglement Knot to Unbroken Crimson Signal Line (4:3)",
    src: "/images/case-study/mwt_case_study_03_personal_number_continuity_4x3.png",
    rawArtSrc: "/images/case-study/raw_art_telecom_signal_knot_4x3.jpg",
    beforeSrc: "/images/art/digital_abuse_mwt.png",
    caption:
      "Visualizes the 6-dimension separation of shared-account telecom billing authority (the tangled knot) from an adult's portable communication identity (the unbroken crimson signal line across the city).",
  },
  {
    id: "folio-04",
    code: "FOLIO 04 · VERIFICATION & POLICY LAB",
    title: "Primary-Source QA, 4-Tier Adoption Matrix & Texas Sunset Review",
    subtitle: "Concentric Radial Woodcut Map & Double Crimson Thread (4:3)",
    src: "/images/case-study/mwt_case_study_04_verification_and_sunset_4x3.png",
    rawArtSrc: "/images/case-study/raw_art_radial_city_crimson_thread.jpg",
    beforeSrc: "/images/art/mwtbetterstandrd.png",
    caption:
      "Connects the 1,070 automated provenance QA assertions and 158 tri-state matcher tests to the 4-Tier Incremental Adoption Matrix (Agency SOP → Interlocal Pilot → Texas DFPS Sunset Review → Statutory Reform).",
  },
];

export function ArchivalCaseStudyGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"folio" | "slider" | "raw">("folio");
  const [sliderPos, setSliderPos] = useState(50);

  const activeFolio = FOLIOS[activeIndex];

  return (
    <section
      id="case-study-folios"
      className="bg-[#11100F] text-[#F5F1E8] border-2 border-[#11100F] rounded-xs p-5 sm:p-8 space-y-6 shadow-xl select-none font-sans"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#2C2825] pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[#E0525C] font-mono text-xs font-bold uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>ARCHIVAL CARTOGRAPHIC MONOGRAPH · 4:3 CASE STUDY PLATES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#F5F1E8] tracking-tight">
            Visual Case Study Folios &amp; Before/After Aesthetic Slider
          </h2>
          <p className="text-xs sm:text-sm text-[#D6D0C4] max-w-3xl leading-relaxed">
            Explore the five 4:3 museum-grade editorial plates combining woodcut urban cartography, torn archival seams, and crimson continuity threads—or toggle the interactive <strong>Before / After Slider</strong> to compare the composed monograph plates with the raw woodcut cartography and prior poster layouts.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#1C1917] p-1.5 rounded-xs border border-[#3F3A36] font-mono text-xs">
          <button
            type="button"
            onClick={() => setViewMode("folio")}
            className={`px-3 py-1.5 rounded-xs font-bold uppercase transition cursor-pointer flex items-center gap-1.5 ${
              viewMode === "folio"
                ? "bg-[#971F26] text-white"
                : "text-[#D6D0C4] hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>4:3 Monograph Plate</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("slider")}
            className={`px-3 py-1.5 rounded-xs font-bold uppercase transition cursor-pointer flex items-center gap-1.5 ${
              viewMode === "slider"
                ? "bg-[#971F26] text-white"
                : "text-[#D6D0C4] hover:text-white"
            }`}
          >
            <MoveHorizontal className="w-3.5 h-3.5" />
            <span>Before / After Slider</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("raw")}
            className={`px-3 py-1.5 rounded-xs font-bold uppercase transition cursor-pointer flex items-center gap-1.5 ${
              viewMode === "raw"
                ? "bg-[#971F26] text-white"
                : "text-[#D6D0C4] hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Raw Woodcut Art</span>
          </button>
        </div>
      </div>

      {/* Folio Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {FOLIOS.map((item, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-3 rounded-xs border transition cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-[#E8DEC8] text-[#11100F] border-[#971F26] border-t-4 shadow-md"
                  : "bg-[#1C1917] text-[#D6D0C4] border-[#332E29] hover:border-[#841F2B]"
              }`}
            >
              <span
                className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                  isSelected ? "text-[#971F26]" : "text-[#E0525C]"
                }`}
              >
                {item.code.split("·")[0]}
              </span>
              <span className="font-serif font-bold text-xs sm:text-sm leading-snug mt-1 line-clamp-2">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main 4:3 Viewport */}
      <div className="relative w-full aspect-[4/3] bg-[#0C0B0A] border-2 border-[#E8DEC8] rounded-xs overflow-hidden shadow-2xl">
        {viewMode === "folio" && (
          <Image
            src={activeFolio.src}
            alt={activeFolio.title}
            fill
            className="object-contain"
            unoptimized
          />
        )}

        {viewMode === "raw" && (
          <Image
            src={activeFolio.rawArtSrc}
            alt={`${activeFolio.title} — Raw Woodcut Cartography`}
            fill
            className="object-cover"
            unoptimized
          />
        )}

        {viewMode === "slider" && (
          <div className="relative w-full h-full select-none">
            {/* AFTER (Full Layer underneath: New 4:3 Archival Cartographic Monograph Plate) */}
            <div className="absolute inset-0">
              <Image
                src={activeFolio.src}
                alt={`After: ${activeFolio.title}`}
                fill
                className="object-cover"
                unoptimized
              />
              <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#971F26] text-white font-mono text-xs font-bold uppercase tracking-wider border border-[#E8DEC8] shadow">
                AFTER · 4:3 ARCHIVAL CARTOGRAPHIC MONOGRAPH
              </span>
            </div>

            {/* BEFORE (Clipped Left Layer: Raw Woodcut Cartography Canvas / Prior Poster) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src={activeFolio.rawArtSrc}
                alt={`Before: Raw Cartographic Canvas`}
                fill
                className="object-cover"
                unoptimized
              />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#11100F]/90 text-[#E8DEC8] font-mono text-xs font-bold uppercase tracking-wider border border-[#E8DEC8] shadow">
                BASE CANVAS · RAW WOODCUT CARTOGRAPHY &amp; COLLAGE
              </span>
            </div>

            {/* Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#E8DEC8] shadow-[0_0_15px_rgba(0,0,0,0.9)] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#971F26] border-2 border-[#E8DEC8] text-white flex items-center justify-center shadow-lg">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Range Input Overlay for Dragging */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Before and after comparison slider"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
        )}
      </div>

      {/* Caption & Metadata Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#1C1917] border border-[#332E29] p-4 rounded-xs">
        <div className="space-y-1 max-w-3xl">
          <div className="text-xs font-mono font-bold text-[#E0525C] uppercase tracking-wider">
            {activeFolio.code} — {activeFolio.subtitle}
          </div>
          <p className="text-xs sm:text-sm text-[#E8DEC8] leading-relaxed">
            {activeFolio.caption}
          </p>
        </div>

        <a
          href={activeFolio.src}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#E8DEC8] hover:bg-white text-[#11100F] font-mono text-xs font-bold uppercase tracking-wider rounded-xs transition shrink-0"
        >
          Open Full 3200×2400 Plate ↗
        </a>
      </div>
    </section>
  );
}
