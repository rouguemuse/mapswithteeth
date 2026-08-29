"use client";

import React, { useState } from "react";
import { TEXAS_STATUTES } from "@/data/texasData";
import { Scale, ChevronDown, ChevronUp, ExternalLink, ShieldCheck, FileText, AlertTriangle } from "lucide-react";

export function TexasStatutesAccordion() {
  const [openStatuteId, setOpenStatuteId] = useState<string>("tx-lease-termination");

  return (
    <div className="space-y-3">
      {TEXAS_STATUTES.map((statute) => {
        const isOpen = openStatuteId === statute.id;
        return (
          <div
            key={statute.id}
            className={`border rounded-lg transition-all ${
              isOpen
                ? "bg-brand-charcoal border-stone-700 shadow-md"
                : "bg-stone-900/60 border-stone-800 hover:border-stone-700"
            }`}
          >
            <button
              onClick={() => setOpenStatuteId(isOpen ? "" : statute.id)}
              className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-stone-950 border border-stone-800 flex items-center justify-center text-brand-ruby shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-white">{statute.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-950 border border-stone-800 text-amber-300">
                      {statute.citation}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">{statute.summary}</p>
                </div>
              </div>

              <div className="text-stone-400">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-5 pt-2 border-t border-stone-800 text-xs text-stone-300 space-y-4 animate-fadeIn">
                <p className="text-sm leading-relaxed text-stone-200">{statute.summary}</p>

                {/* Key Rights */}
                <div className="bg-stone-950/60 border border-stone-800 rounded p-3">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-ruby" />
                    <span>Statutory Protections:</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-stone-300">
                    {statute.keyRights.map((right, i) => (
                      <li key={i}>{right}</li>
                    ))}
                  </ul>
                </div>

                {/* Nuances & Exceptions */}
                <div className="bg-amber-950/20 border border-amber-900/40 rounded p-3 text-amber-200">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Critical Legal Nuances & Exceptions:</span>
                  </h4>
                  <ul className="space-y-1 text-stone-300">
                    {statute.nuancesAndExceptions.map((nuance, i) => (
                      <li key={i}>• {nuance}</li>
                    ))}
                  </ul>
                </div>

                {/* Required Documentation */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-brand-ruby" />
                    <span>Required Documentation:</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-400">
                    {statute.requiredDocumentation.map((doc, i) => (
                      <li key={i}>{doc}</li>
                    ))}
                  </ul>
                </div>

                {/* Authoritative Citation Link */}
                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Administering Agency: <strong>{statute.administeringAgency}</strong></span>
                  <a
                    href={statute.authoritativeSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-ruby hover:underline flex items-center gap-1"
                  >
                    <span>Official Texas Statute Text</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
