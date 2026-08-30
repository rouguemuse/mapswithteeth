"use client";

import React, { useState } from "react";
import { MatchResult } from "@/data/matcher";
import { ResourceCard } from "../resources/ResourceCard";
import { DenseResourceCard } from "@/components/other-ways-through/DenseResourceCard";
import { FileText, Compass, ArrowRight, CornerDownRight, ShieldCheck, CheckCircle2, Loader2, Send } from "lucide-react";

export function InstantResults({
  matchResult,
  onReset,
}: {
  matchResult: MatchResult;
  onReset: () => void;
}) {
  const [emailContact, setEmailContact] = useState("");
  const [optInConfirmation, setOptInConfirmation] = useState(false);
  const [isRouting, setIsRouting] = useState(false);
  const [docketTransmitted, setDocketTransmitted] = useState(false);
  const [routingError, setRoutingError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const handleTransmitDocket = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRouting(true);
    setRoutingError(null);

    try {
      // Strictly non-identifying metadata payload
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "RESOURCE_DISCOVERY",
          data: {
            docketId: matchResult.docket.docketId,
            state: matchResult.docket.locationSummary.split(" · ")[0] || "TX",
            county: matchResult.docket.locationSummary.split(" · ")[1] || "Regional",
            primaryBarriers: matchResult.docket.resourceLevers.map((l) => l.lever),
            matchCount: matchResult.matches.length,
            email: emailContact.trim() || undefined,
            optInConfirmation: optInConfirmation && emailContact.trim().length > 0,
            contactPreference: emailContact.trim() ? "Follow-up email requested" : "Anonymous log / No contact",
            timestamp: new Date().toISOString(),
          },
          _hp: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to transmit docket reference.");
      }

      setDocketTransmitted(true);
    } catch (err: any) {
      setRoutingError(err.message || "An error occurred while routing the docket.");
    } finally {
      setIsRouting(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn select-none font-sans">
      {/* Header Summary Banner */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 shadow-sm bg-grid-atlas">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D1C4] pb-4 mb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#971F26] font-bold block mb-1">
              ✓ INSTANT MATCHING DOCKET COMPILED
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#1C1D1D]">
              We found {matchResult.matches.length} potential pathways worth checking:
            </h2>
          </div>
          <button
            onClick={onReset}
            className="text-xs text-[#971F26] hover:underline font-mono font-bold"
          >
            ← Modify Levers / Search Again
          </button>
        </div>

        {/* Match Breakdown Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono text-stone-800">
          {matchResult.breakdown.likelyMatchCount > 0 && (
            <span className="stamp-verified bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] font-bold">
              ✓ {matchResult.breakdown.likelyMatchCount} Likely Matches (All Criteria Met)
            </span>
          )}
          {matchResult.breakdown.worthCheckingCount > 0 && (
            <span className="stamp-verified bg-[#FEF3C7] border border-[#D97706] text-[#92400E] font-bold">
              ◐ {matchResult.breakdown.worthCheckingCount} Worth Checking
            </span>
          )}
          {matchResult.breakdown.statutoryCount > 0 && (
            <span className="stamp-verified bg-[#1C1D1D] text-white font-bold">
              ⚖ {matchResult.breakdown.statutoryCount} Statutory Rights
            </span>
          )}
          {matchResult.breakdown.workCount > 0 && (
            <span className="stamp-verified bg-[#F5F1E8]">
              💼 {matchResult.breakdown.workCount} Industry Relief Funds
            </span>
          )}
          {matchResult.breakdown.petCount > 0 && (
            <span className="stamp-verified bg-[#F5F1E8]">
              🐕 {matchResult.breakdown.petCount} Pet Safe Boarding
            </span>
          )}
          {matchResult.breakdown.telecomCount > 0 && (
            <span className="stamp-verified bg-[#F5F1E8]">
              📱 {matchResult.breakdown.telecomCount} Line Separation Protections
            </span>
          )}
        </div>
      </div>

      {/* Generated Research Docket */}
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <FileText className="w-5 h-5" />
            <h3 className="font-serif font-bold text-lg text-[#1C1D1D]">
              Generated Investigation Docket #{matchResult.docket.docketId}
            </h3>
          </div>
          <span className="coord-tick">
            [{matchResult.docket.locationSummary}]
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              Identified Resource Levers:
            </span>
            <div className="space-y-2 text-xs font-sans">
              {matchResult.docket.resourceLevers.map((lever, i) => (
                <div key={i} className="p-3 bg-[#EEE8DD] border border-[#1C1D1D] rounded-md space-y-0.5">
                  <p className="font-bold text-[#1C1D1D]">{lever.lever}</p>
                  <p className="text-stone-700">{lever.whyItMatters}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] font-bold block">
              Recommended Investigation Steps:
            </span>
            <ul className="space-y-2 text-xs font-sans text-stone-900">
              {matchResult.docket.researchPaths.map((p, i) => (
                <li key={i} className="p-2.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded flex items-start gap-2">
                  <span className="font-mono font-bold text-[#971F26]">{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optional Follow-up Routing Card */}
        <div className="pt-4 border-t border-[#D9D1C4]">
          {!docketTransmitted ? (
            <form onSubmit={handleTransmitDocket} className="bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg p-4 space-y-3">
              <input
                type="text"
                name="_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-[#971F26]" />
                <span className="text-xs font-bold font-mono text-[#1C1D1D] uppercase">
                  Transmit Docket Reference to Research Team (Optional)
                </span>
              </div>
              <p className="text-[11px] text-stone-700 font-sans leading-relaxed">
                If you would like our research team to investigate additional obscure funds for Docket #{matchResult.docket.docketId}, you can transmit this non-identifying reference. <em>No personal narrative, SSN, or address is ever transmitted.</em>
              </p>

              {routingError && (
                <div className="p-2 bg-[#FDF2F2] border border-[#971F26] text-xs text-[#971F26] font-mono">
                  {routingError}
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-12 items-center">
                <div className="sm:col-span-7">
                  <input
                    type="email"
                    maxLength={150}
                    placeholder="Optional: Enter email if you want follow-up..."
                    value={emailContact}
                    onChange={(e) => setEmailContact(e.target.value)}
                    className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] placeholder-stone-500 font-mono focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-5">
                  <button
                    type="submit"
                    disabled={isRouting}
                    className="w-full py-2 px-3 bg-[#971F26] hover:bg-red-900 disabled:opacity-60 text-white rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    {isRouting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Routing...</span>
                      </>
                    ) : (
                      <>
                        <span>Route Docket to Research</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {emailContact.trim().length > 0 && (
                <label className="flex items-center gap-2 text-[11px] text-stone-700 cursor-pointer pt-1 font-mono">
                  <input
                    type="checkbox"
                    checked={optInConfirmation}
                    onChange={(e) => setOptInConfirmation(e.target.checked)}
                    className="accent-[#971F26]"
                  />
                  <span>Send me an email confirmation containing this docket reference ID</span>
                </label>
              )}
            </form>
          ) : (
            <div className="p-4 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg text-center space-y-1.5 animate-fadeIn">
              <div className="flex items-center justify-center gap-1.5 text-[#971F26] font-bold text-xs font-mono uppercase">
                <CheckCircle2 className="w-4 h-4 text-[#971F26]" />
                <span>Docket Reference Routed to resources@mapswithteeth.org</span>
              </div>
              <p className="text-[11px] text-stone-700 font-sans">
                Reference ID <strong>#{matchResult.docket.docketId}</strong> has been logged for our researchers. Zero identifying personal records were transmitted.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Matched Resources Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-3">
          <h3 className="text-xl font-serif font-bold text-[#1C1D1D]">
            Surfaced Pathways ({matchResult.matches.length})
          </h3>
          <span className="coord-tick">[REVIEW ACCESS CONDITIONS CAREFULLY]</span>
        </div>

        {matchResult.matches.length > 0 ? (
          <div className="space-y-3.5">
            {matchResult.matches.map((m) => (
              <DenseResourceCard
                key={m.resource.id}
                resource={m.resource}
                whySurfacedFact={m.matchReason}
                matchCertainty={m.matchCertainty || (m.resource.isStatutoryRight ? "STATUTORY_RIGHT" : "LIKELY_MATCH")}
                matchedTags={m.matchedTags}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-8 text-center space-y-3">
            <p className="text-base font-bold text-[#1C1D1D] font-serif">No immediate match surfaced for this specific combination.</p>
            <button
              onClick={onReset}
              className="px-4 py-2 bg-[#971F26] text-white rounded-md text-xs font-mono font-bold uppercase"
            >
              Modify Levers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
