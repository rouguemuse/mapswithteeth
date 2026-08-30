"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRACTITIONER_FIELD_NOTES, CredibilityState } from "@/data/fieldNotes";
import {
  Target,
  CheckCircle2,
  FileText,
  MessageSquareQuote,
  ArrowRight,
  ShieldCheck,
  Compass,
  Sparkles,
  Scale
} from "lucide-react";

export function FieldNotesRail() {
  const [selectedCat, setSelectedCat] = useState<string>("ALL");

  const filteredNotes = PRACTITIONER_FIELD_NOTES.filter((n) => {
    if (selectedCat === "ALL") return true;
    return n.category === selectedCat;
  });

  const getCredibilityBadge = (state: CredibilityState, label: string) => {
    switch (state) {
      case "DIRECTLY_CONFIRMED":
        return (
          <span className="px-1.5 py-0.5 bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] font-mono text-[8.5px] font-bold rounded-xs">
            ✓ {label}
          </span>
        );
      case "PRACTITIONER_REPORTED":
        return (
          <span className="px-1.5 py-0.5 bg-[#FEF3C7] border border-[#D97706] text-[#92400E] font-mono text-[8.5px] font-bold rounded-xs">
            ● {label}
          </span>
        );
      case "UNCONFIRMED_FIELD_NOTE":
      default:
        return (
          <span className="px-1.5 py-0.5 bg-[#F5F1E8] border border-dashed border-stone-400 text-stone-600 font-mono text-[8.5px] font-semibold rounded-xs">
            ○ {label}
          </span>
        );
    }
  };

  return (
    <aside className="space-y-6 font-sans select-none lg:sticky lg:top-24">
      {/* Card 1: Why this is different */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-4 sm:p-5 shadow-xs bg-grid-atlas">
        <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2.5 mb-3">
          <div className="w-6 h-6 rounded-full bg-[#971F26] text-white flex items-center justify-center shrink-0">
            <Target className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D] leading-tight">
              Why this is different
            </h3>
            <span className="text-[9.5px] font-mono text-stone-600 uppercase tracking-widest block">
              OPERATIONAL INTELLIGENCE STANDARD
            </span>
          </div>
        </div>

        <ul className="space-y-2.5 text-xs leading-snug text-stone-800">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1D1D] font-semibold">Shows access friction, not just listings:</strong>
              <p className="text-stone-700 text-[11px] mt-0.5">Surfaces barriers, fine print, and real-world criteria.</p>
            </div>
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1D1D] font-semibold">Includes non-traditional routes:</strong>
              <p className="text-stone-700 text-[11px] mt-0.5">Private benevolence, industry funds, and statutory bypasses.</p>
            </div>
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1D1D] font-semibold">Notes warm referrals & unwritten steps:</strong>
              <p className="text-stone-700 text-[11px] mt-0.5">Who to ask, what to say, and how to verify access.</p>
            </div>
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1D1D] font-semibold">Primary-source verified:</strong>
              <p className="text-stone-700 text-[11px] mt-0.5">Eligibility and statutory citations verified with source links.</p>
            </div>
          </li>
        </ul>

        <div className="mt-3.5 pt-2.5 border-t border-[#D9D1C4]">
          <Link
            href="/how-we-research"
            className="text-[11px] font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1"
          >
            <span>Learn more about our verification standards</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Card 2: Field Notes (from the field) */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-4 sm:p-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#971F26]" />
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D]">
              Field Notes <span className="font-sans text-xs text-stone-600 font-normal">(from the field)</span>
            </h3>
          </div>
          <span className="coord-tick text-[8.5px]">[UNWRITTEN RULES]</span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1 mb-3">
          {["ALL", "LEGAL", "SHELTER", "PETS", "SCHOOLS", "HOSPITALITY", "UTILITIES"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-1.5 py-0.5 rounded-xs text-[9px] font-mono font-bold transition-colors ${
                selectedCat === cat
                  ? "bg-[#1C1D1D] text-white"
                  : "bg-[#F5F1E8] border border-[#D9D1C4] text-stone-700 hover:border-[#1C1D1D]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notes List with Credibility Badges */}
        <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="p-3 bg-[#F5F1E8] border border-[#D9D1C4] rounded-md space-y-1.5"
            >
              <div className="flex items-start justify-between gap-1">
                <div className="flex items-center gap-1 text-[#971F26] font-mono text-[9px] font-bold uppercase">
                  <MessageSquareQuote className="w-3 h-3 shrink-0" />
                  <span>{note.sourceRole} · {note.location}</span>
                </div>
                {getCredibilityBadge(note.credibilityState, note.credibilityLabel)}
              </div>

              <p className="text-[11px] text-[#1C1D1D] font-medium leading-snug font-serif italic">
                "{note.quote}"
              </p>

              {note.verifiedStatuteOrProgram && (
                <div className="flex items-center gap-1 text-[9.5px] font-mono text-stone-600 pt-0.5 border-t border-[#E5DEC9]">
                  <Scale className="w-2.5 h-2.5 text-stone-500" />
                  <span className="truncate">Ref: {note.verifiedStatuteOrProgram}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
