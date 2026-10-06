import React from "react";
import { PublicationHistoryEntry, PublicationOrigin } from "@/domain/writing/types";
import { GitBranch, Globe, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

interface PublicationHistorySectionProps {
  origin: PublicationOrigin;
  publicationDate: string;
  displayDate: string;
  history?: PublicationHistoryEntry[];
  externalName?: string;
  externalUrl?: string;
  className?: string;
}

export function PublicationHistorySection({
  origin,
  displayDate,
  history,
  externalName,
  externalUrl,
  className = ""
}: PublicationHistorySectionProps) {
  return (
    <section
      aria-label="Publication history"
      className={`bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 sm:p-6 space-y-4 font-mono text-xs ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[#D9D1C4] pb-2 text-[#971F26]">
        <GitBranch className="w-4 h-4" />
        <h3 className="font-bold uppercase tracking-wider text-xs">
          PUBLICATION HISTORY & CANONICAL RECORD
        </h3>
      </div>

      <div className="space-y-3">
        {origin === "external" ? (
          <div className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1">
            <span className="text-[10px] font-bold text-[#971F26] uppercase block">
              ORIGINAL PUBLISHER:
            </span>
            <p className="font-bold text-stone-900 text-sm font-serif">
              {externalName}
            </p>
            <p className="text-stone-600 text-[11px]">
              First published: {displayDate} ·{" "}
              {externalUrl && (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#971F26] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>View Original Publication</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </p>
          </div>
        ) : (
          <div className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1">
            <span className="text-[10px] font-bold text-[#2D5A3D] uppercase block flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#2D5A3D]" />
              ORIGINALLY PUBLISHED:
            </span>
            <p className="font-bold text-stone-900 text-sm font-serif">
              Maps With Teeth Field Notes — {displayDate}
            </p>
            <p className="text-stone-600 text-[11px]">
              Maps With Teeth is the primary permanent archive and canonical source.
            </p>
          </div>
        )}

        {history && history.length > 1 && (
          <div className="pt-2 border-t border-[#D9D1C4] space-y-2">
            <span className="text-[10px] font-bold text-stone-700 uppercase block">
              ALSO PUBLISHED / ADAPTED AT:
            </span>
            <ul className="space-y-1.5">
              {history
                .filter((h) => h.relationship !== "ORIGINAL")
                .map((entry, idx) => (
                  <li
                    key={idx}
                    className="p-2.5 bg-[#F5F1E8] rounded border border-stone-300 flex flex-wrap items-center justify-between gap-2 text-[11px]"
                  >
                    <div>
                      <span className="font-bold text-stone-900">
                        {entry.platformOrOutlet}
                      </span>
                      {entry.note && (
                        <span className="text-stone-600 block text-[10.5px]">
                          {entry.note}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-stone-500">{entry.date}</span>
                      {entry.url && (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#971F26] hover:underline inline-flex items-center gap-0.5 font-bold"
                        >
                          <span>Visit</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
