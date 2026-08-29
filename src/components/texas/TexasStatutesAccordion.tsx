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
            className={`border rounded-xl transition-all ${
              isOpen
                ? "bg-brand-paper border-stone-400 shadow-md"
                : "bg-brand-paper border-brand-sand hover:border-stone-400 shadow-sm"
            }`}
          >
            <button
              onClick={() => setOpenStatuteId(isOpen ? "" : statute.id)}
              className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-brand-ivory border border-stone-300 flex items-center justify-center text-brand-oxblood shrink-0 shadow-sm">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold font-serif text-brand-charcoal">{statute.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-ivory border border-stone-300 text-stone-800 font-bold">
                      {statute.citation}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 line-clamp-1 font-sans">{statute.summary}</p>
                </div>
              </div>

              <div className="text-stone-500">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-5 pt-2 border-t border-brand-sand text-xs text-stone-700 space-y-4 animate-fadeIn">
                <p className="text-sm leading-relaxed text-stone-800 font-sans">{statute.summary}</p>

                {/* Key Rights */}
                <div className="bg-brand-ivory border border-brand-sand rounded-lg p-3.5 shadow-sm">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-brand-charcoal mb-1.5 flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-oxblood" />
                    <span>Statutory Protections:</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-stone-800 font-sans">
                    {statute.keyRights.map((right, i) => (
                      <li key={i}>{right}</li>
                    ))}
                  </ul>
                </div>

                {/* Nuances & Exceptions */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 text-stone-800 shadow-sm">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-amber-900 mb-1.5 flex items-center gap-1 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                    <span>Critical Legal Nuances & Exceptions:</span>
                  </h4>
                  <ul className="space-y-1 text-stone-800 font-sans">
                    {statute.nuancesAndExceptions.map((nuance, i) => (
                      <li key={i}>• {nuance}</li>
                    ))}
                  </ul>
                </div>

                {/* Requirements & Documents */}
                <div className="grid gap-3 sm:grid-cols-2 pt-1 font-mono text-[11px]">
                  <div className="bg-brand-ivory p-3 rounded-lg border border-brand-sand">
                    <strong className="text-brand-charcoal block mb-1 uppercase text-[10px]">
                      Required Documentation:
                    </strong>
                    <ul className="space-y-1 text-stone-700 font-sans text-xs">
                      {statute.requiredDocumentation.map((doc, i) => (
                        <li key={i}>• {doc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-brand-ivory p-3 rounded-lg border border-brand-sand">
                    <strong className="text-brand-charcoal block mb-1 uppercase text-[10px]">
                      Statutory Procedure:
                    </strong>
                    <ul className="space-y-1 text-stone-700 font-sans text-xs">
                      {statute.procedureSteps.map((step, i) => (
                        <li key={i}>• {step}</li>
                      ))}
                    </ul>
                    {statute.authoritativeSourceUrl && (
                      <a
                        href={statute.authoritativeSourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2.5 text-brand-oxblood hover:underline font-bold"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Official Texas Capitol Statute →</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
