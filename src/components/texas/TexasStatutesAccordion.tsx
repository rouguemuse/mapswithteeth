"use client";

import React, { useState } from "react";
import { TEXAS_STATUTES } from "@/data/texasData";
import { Scale, ChevronDown, ChevronUp, ExternalLink, ShieldCheck, FileText, AlertTriangle } from "lucide-react";

export function TexasStatutesAccordion() {
  const [openStatuteId, setOpenStatuteId] = useState<string>("tx-lease-termination");

  return (
    <div className="space-y-3 select-none">
      {TEXAS_STATUTES.map((statute) => {
        const isOpen = openStatuteId === statute.id;
        return (
          <div
            key={statute.id}
            className={`border-2 rounded-lg transition-all ${
              isOpen
                ? "bg-[#EEE8DD] border-[#1C1D1D] shadow-xs"
                : "bg-[#F5F1E8] border-[#1C1D1D] hover:border-[#971F26] shadow-2xs"
            }`}
          >
            <button
              onClick={() => setOpenStatuteId(isOpen ? "" : statute.id)}
              className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#F5F1E8] border border-[#1C1D1D] flex items-center justify-center text-[#971F26] shrink-0 shadow-2xs">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm sm:text-base font-bold font-serif text-[#1C1D1D]">{statute.title}</span>
                    <span className="stamp-verified text-[9px] py-0.5 px-2">
                      {statute.citation}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 mt-0.5 line-clamp-1 font-sans">{statute.summary}</p>
                </div>
              </div>

              <div className="text-stone-600">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-5 pt-2 border-t border-[#D9D1C4] text-xs text-stone-800 space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm leading-relaxed text-stone-900 font-sans">{statute.summary}</p>

                {/* Key Rights */}
                <div className="bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-3.5 shadow-2xs">
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#1C1D1D] mb-1.5 flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#971F26]" />
                    <span>Statutory Protections & Non-Discretionary Rights:</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-stone-900 font-sans">
                    {statute.keyRights.map((right, i) => (
                      <li key={i}>{right}</li>
                    ))}
                  </ul>
                </div>

                {/* Nuances & Exceptions */}
                <div className="bg-[#FDF2F2] border-2 border-[#971F26] rounded-md p-3.5 text-stone-900 shadow-2xs">
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] mb-1.5 flex items-center gap-1 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#971F26]" />
                    <span>Critical Legal Nuances & Exceptions:</span>
                  </h4>
                  <ul className="space-y-1 text-stone-900 font-sans">
                    {statute.nuancesAndExceptions.map((nuance, i) => (
                      <li key={i}>• {nuance}</li>
                    ))}
                  </ul>
                </div>

                {/* Requirements & Documents */}
                <div className="grid gap-3 sm:grid-cols-2 pt-1 font-mono text-[11px]">
                  <div className="bg-[#F5F1E8] p-3 rounded-md border border-[#D9D1C4]">
                    <strong className="text-[#1C1D1D] block mb-1 uppercase text-[10px]">
                      Required Documentation:
                    </strong>
                    <ul className="space-y-1 text-stone-800 font-sans">
                      {statute.requiredDocumentation.map((doc, i) => (
                        <li key={i}>• {doc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F5F1E8] p-3 rounded-md border border-[#D9D1C4]">
                    <strong className="text-[#1C1D1D] block mb-1 uppercase text-[10px]">
                      Enforcing Authority / Administering Agency:
                    </strong>
                    <p className="text-stone-800 font-sans">{statute.administeringAgency}</p>
                    <div className="mt-3">
                      <a
                        href={statute.authoritativeSourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#971F26] font-bold hover:underline font-mono text-[10px]"
                      >
                        <span>Official Texas Capitol Statute Text</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-[10px] font-mono text-stone-600 pt-1">
                  * Educational statutory summary only. Does not constitute formal legal counsel. Consult a qualified Texas family law attorney or legal aid provider for case representation.
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
