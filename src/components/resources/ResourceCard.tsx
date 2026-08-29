"use client";

import React, { useState } from "react";
import { Resource } from "@/types/resource";
import { VerificationBadge } from "./VerificationBadge";
import { MatchReasonBadge } from "./MatchReasonBadge";
import { ResourceDetailModal } from "./ResourceDetailModal";
import { ExternalLink, ShieldCheck, DollarSign, ChevronRight, MapPin, Tag } from "lucide-react";

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

  return (
    <>
      <article className="bg-brand-charcoal border border-stone-800 rounded-lg p-5 hover:border-stone-700 transition-all duration-200 shadow-sm flex flex-col justify-between group">
        <div>
          {/* Scope & Verification Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <span className="inline-block px-2 py-0.5 bg-stone-900 border border-stone-700 text-stone-300 text-[10px] font-mono uppercase tracking-wider rounded">
              {resource.availabilityBadge || resource.scope}
            </span>
            <VerificationBadge
              status={resource.verificationStatus}
              lastVerifiedDate={resource.dateLastVerified}
              isLead={resource.isLead}
            />
          </div>

          {/* Title & Organization */}
          <h3 className="text-base font-bold text-white group-hover:text-stone-100 transition-colors">
            {resource.name}
          </h3>
          <p className="text-xs text-stone-400 font-medium mb-3">
            {resource.organization} {resource.county ? `• ${resource.county} County` : ""}
          </p>

          {/* Match Reason if populated */}
          {matchReason && (
            <MatchReasonBadge reason={matchReason} matchedTags={matchedTags} />
          )}

          {/* Deliverable - What You Actually Get */}
          <div className="my-3 p-3 bg-stone-900/60 rounded border-l-2 border-brand-ruby text-xs text-stone-300 leading-relaxed">
            <strong className="text-stone-200 block text-[11px] uppercase tracking-wider mb-1 font-mono">
              What you actually get:
            </strong>
            {resource.whatItActuallyProvides}
          </div>

          {/* Typical Amount & Friction Badges */}
          {resource.typicalAmount && (
            <div className="flex items-center gap-1 text-xs text-stone-300 mb-2 font-mono">
              <DollarSign className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{resource.typicalAmount}</span>
            </div>
          )}

          {/* Access Friction tags */}
          <div className="flex flex-wrap gap-1.5 my-2">
            {resource.accessFrictions.map((fric) => {
              const isPositive = fric.startsWith("NO_");
              return (
                <span
                  key={fric}
                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                    isPositive
                      ? "bg-emerald-950/40 text-emerald-300 border-emerald-800/60"
                      : "bg-stone-900 text-stone-400 border-stone-800"
                  }`}
                >
                  {fric.replace(/_/g, " ")}
                </span>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
          <button
            onClick={() => setModalOpen(true)}
            className="text-xs font-semibold text-stone-200 hover:text-white flex items-center gap-1 group/btn"
          >
            <span>View Full Requirements</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-brand-ruby" />
          </button>

          {resource.applicationLink || resource.website ? (
            <a
              href={resource.applicationLink || resource.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-ruby hover:text-red-400 underline underline-offset-2"
            >
              <span>Official Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : null}
        </div>
      </article>

      {modalOpen && (
        <ResourceDetailModal resource={resource} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
