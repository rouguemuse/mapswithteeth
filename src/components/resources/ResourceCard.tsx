"use client";

import React, { useState } from "react";
import { Resource } from "@/types/resource";
import { VerificationBadge } from "./VerificationBadge";
import { MatchReasonBadge } from "./MatchReasonBadge";
import { ResourceDetailModal } from "./ResourceDetailModal";
import { ExternalLink, ChevronRight, AlertTriangle, Scale, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";

export function ResourceCard({
  resource,
  matchReason,
  matchedTags,
}: {
  resource: Resource;
  matchReason?: string;
  matchedTags?: string[];
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const whatItHelps = resource.whatItCanHelpWith || resource.whatItActuallyProvides;
  const whatNext = resource.whatToDoNext || resource.howToApply;
  const blockReasons = resource.whatCanBlockAccess && resource.whatCanBlockAccess.length > 0
    ? resource.whatCanBlockAccess
    : resource.accessFrictions.map((f) => f.replace(/_/g, " "));

  return (
    <>
      <article className="bg-brand-paper border border-brand-sand rounded-xl p-5 sm:p-6 hover:border-stone-400 hover:shadow-md transition-all duration-200 shadow-sm flex flex-col justify-between group">
        <div className="space-y-4">
          {/* Header Metadata: Scope + Verification + Statutory Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-sand pb-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2 py-0.5 bg-brand-ivory border border-stone-300 text-stone-700 text-[10px] font-mono uppercase tracking-wider rounded font-medium">
                {resource.geography || resource.scope}
              </span>
              {resource.isStatutoryRight ? (
                <span className="px-2 py-0.5 bg-purple-50 border border-purple-200 text-purple-900 text-[10px] font-mono uppercase tracking-wider rounded font-bold">
                  Statutory Right
                </span>
              ) : (
                <span className="px-2 py-0.5 bg-stone-100 border border-stone-300 text-stone-700 text-[10px] font-mono uppercase tracking-wider rounded font-medium">
                  Discretionary Program
                </span>
              )}
            </div>

            <VerificationBadge
              status={resource.verificationStatus}
              lastVerifiedDate={resource.lastReviewedDate || resource.dateLastVerified}
              reopeningDate={resource.reopeningDate}
            />
          </div>

          {/* Program Name & Organization */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-brand-charcoal group-hover:text-black transition-colors font-serif leading-snug">
              {resource.name}
            </h3>
            <p className="text-xs text-stone-500 font-medium font-mono mt-0.5">
              {resource.organization} {resource.county ? `· ${resource.county} County` : ""}
            </p>
            {resource.statuteCitation && (
              <p className="text-[11px] font-mono text-purple-900 font-bold mt-1 flex items-center gap-1">
                <Scale className="w-3 h-3 text-purple-700" />
                <span>Citation: {resource.statuteCitation}</span>
              </p>
            )}
          </div>

          {/* Optional Match Reason Badge */}
          {matchReason && (
            <MatchReasonBadge reason={matchReason} matchedTags={matchedTags} />
          )}

          {/* 1. WHAT IT HELPS WITH */}
          <div className="p-3.5 bg-brand-ivory rounded-lg border-l-2 border-l-brand-oxblood border border-stone-200 text-xs text-stone-800 leading-relaxed shadow-sm space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-oxblood font-bold block">
              What It Helps With:
            </span>
            <p className="font-sans font-medium text-brand-charcoal">{whatItHelps}</p>
            {resource.knownFundingLimits && (
              <p className="text-[11px] text-amber-900 font-mono font-bold pt-1">
                Funding Cap / Value: {resource.knownFundingLimits}
              </p>
            )}
          </div>

          {/* 2. WHO CAN USE IT */}
          <div className="space-y-1 text-xs text-stone-700">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
              Who Can Use It:
            </span>
            <p className="font-sans text-xs text-stone-800 line-clamp-2">{resource.eligibility}</p>
          </div>

          {/* 3. WHAT CAN BLOCK ACCESS (THE CATCH) */}
          <div className="p-3 bg-red-50/70 border border-red-200 rounded-lg space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-brand-oxblood font-bold text-[10px] font-mono uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-brand-oxblood shrink-0" />
              <span>What Can Block Access (The Catch):</span>
            </div>
            <ul className="space-y-1 text-[11px] text-stone-800 font-sans">
              {blockReasons.slice(0, 3).map((block, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-brand-oxblood font-bold">•</span>
                  <span>{block}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. WHAT TO DO NEXT */}
          <div className="space-y-1 text-xs text-stone-700">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
              What To Do Next:
            </span>
            <p className="font-sans text-xs text-stone-800 line-clamp-2">{whatNext}</p>
          </div>
        </div>

        {/* Action Controls & Footer */}
        <div className="mt-5 pt-3.5 border-t border-brand-sand flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => setModalOpen(true)}
            className="text-xs font-semibold text-brand-charcoal hover:text-black flex items-center gap-1 font-mono group/btn"
          >
            <span>Full Requirements & Dossier</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-brand-oxblood" />
          </button>

          {resource.sourceUrl && (
            <a
              href={resource.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-oxblood hover:underline flex items-center gap-1 font-mono font-bold"
            >
              <span>Official Source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </article>

      {modalOpen && (
        <ResourceDetailModal
          resource={resource}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
