"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRACTITIONER_FIELD_NOTES } from "@/data/fieldNotes";
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

  return (
    <aside className="space-y-6 font-sans select-none">
      {/* Card 1: Why this is different */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-sm bg-grid-atlas">
        <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-3 mb-4">
          <div className="w-7 h-7 rounded-full bg-[#971F26] text-white flex items-center justify-center shrink-0">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C1D1D] leading-tight">
              Why this is different
            </h3>
            <span className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block">
              OPERATIONAL INTELLIGENCE STANDARD
            </span>
          </div>
        </div>

        <ul className="space-y-3 text-xs leading-relaxed text-stone-800">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1D1D] font-semibold">Shows access friction, not just listings:</strong>
              <p className="text-stone-700 mt-0.5">We surface the barriers, fine print, and real-world steps.</p>
            </div>
          </li>

          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1D1D] font-semibold">Includes tiny programs and unofficial routes:</strong>
              <p className="text-stone-700 mt-0.5">Mutual aid, exception policies, and creative workarounds.</p>
            </div>
          </li>

          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1D1D] font-semibold">Notes exceptions and warm-handoff paths:</strong>
              <p className="text-stone-700 mt-0.5">Who to ask, what to say, and when it might work.</p>
            </div>
          </li>

          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1D1D] font-semibold">Captures who can actually get through the door:</strong>
              <p className="text-stone-700 mt-0.5">Verified by practitioners and researchers, not just websites.</p>
            </div>
          </li>
        </ul>

        <div className="mt-4 pt-3 border-t border-[#D9D1C4]">
          <Link
            href="/how-we-research"
            className="text-xs font-mono font-bold text-[#971F26] hover:underline flex items-center gap-1"
          >
            <span>Learn more about our approach</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Card 2: Field Notes (from the field) */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#971F26]" />
            <h3 className="font-serif font-bold text-base text-[#1C1D1D]">
              Field Notes <span className="font-sans text-xs text-stone-600 font-normal">(from the field)</span>
            </h3>
          </div>
          <span className="coord-tick text-[9px]">[UNWRITTEN RULES]</span>
        </div>

        <p className="text-[11px] text-stone-700 mb-3 leading-snug">
          Informal institutional knowledge gathered from case workers, advocates, and navigators:
        </p>

        <div className="space-y-3">
          {filteredNotes.slice(0, 5).map((note) => (
            <div
              key={note.id}
              className="p-3 bg-[#F5F1E8] border border-[#D9D1C4] rounded-md text-xs space-y-1.5 shadow-2xs hover:border-[#1C1D1D] transition-colors"
            >
              <div className="flex items-start gap-2">
                <MessageSquareQuote className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
                <p className="text-stone-900 font-medium text-[11.5px] leading-relaxed">
                  &ldquo;{note.quote}&rdquo;
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono text-stone-600 pt-1 border-t border-[#E5DEC9]">
                <span className="font-bold text-[#1C1D1D]">
                  {note.sourceRole} · {note.location}
                </span>
                <span>{note.timeAgo}</span>
              </div>

              {note.verifiedStatuteOrProgram && (
                <div className="text-[9.5px] font-mono text-[#971F26] font-semibold flex items-center gap-1">
                  <Scale className="w-3 h-3" />
                  <span>Governing rule: {note.verifiedStatuteOrProgram}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-[#D9D1C4] flex items-center justify-between">
          <Link
            href="/feedback"
            className="text-[11px] font-mono font-bold text-stone-700 hover:text-[#971F26] transition-colors"
          >
            Submit a Field Note →
          </Link>
          <Link
            href="/how-we-research"
            className="text-[11px] font-mono font-bold text-[#971F26] hover:underline"
          >
            View all verification logs →
          </Link>
        </div>
      </div>
    </aside>
  );
}
