import React from "react";
import { SourceNote } from "@/domain/writing/types";
import { BookOpen, ExternalLink, Scale, FileText } from "lucide-react";

interface SourceNotesSectionProps {
  sourceNotes?: SourceNote[];
  disclosureNote?: string;
  className?: string;
}

export function SourceNotesSection({
  sourceNotes,
  disclosureNote,
  className = ""
}: SourceNotesSectionProps) {
  if ((!sourceNotes || sourceNotes.length === 0) && !disclosureNote) return null;

  return (
    <section
      aria-label="Source notes and references"
      className={`bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-7 space-y-5 font-sans ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-3">
        <div className="flex items-center gap-2 text-[#971F26]">
          <BookOpen className="w-4 h-4" />
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider">
            PRIMARY SOURCES & CITATIONS
          </h3>
        </div>
        <span className="text-[10px] font-mono text-stone-600 font-bold uppercase">
          EVIDENTIARY TRANSPARENCY
        </span>
      </div>

      {sourceNotes && sourceNotes.length > 0 && (
        <ul className="space-y-3 text-xs">
          {sourceNotes.map((note, idx) => (
            <li
              key={idx}
              className="p-3 bg-white rounded-lg border border-stone-300 space-y-1"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-stone-950 font-serif text-[13px]">
                  {note.url ? (
                    <a
                      href={note.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#971F26] inline-flex items-center gap-1.5"
                    >
                      <span>{note.citation}</span>
                      <ExternalLink className="w-3 h-3 text-stone-500" />
                    </a>
                  ) : (
                    note.citation
                  )}
                </span>
                {note.authorityType && (
                  <span className="px-2 py-0.5 bg-[#EEE8DD] border border-stone-300 rounded text-[9.5px] font-mono font-bold text-stone-700 uppercase">
                    {note.authorityType.replace(/_/g, " ")}
                  </span>
                )}
              </div>
              {note.note && (
                <p className="text-stone-700 text-[11.5px] leading-relaxed font-sans">
                  {note.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      {disclosureNote && (
        <p className="text-[11px] font-mono text-stone-600 italic border-t border-[#D9D1C4] pt-3 leading-relaxed">
          {disclosureNote}
        </p>
      )}
    </section>
  );
}
