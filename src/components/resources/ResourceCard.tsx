"use client";

import React, { useState } from "react";
import { Resource } from "@/types/resource";
import { VerificationBadge } from "./VerificationBadge";
import { MatchReasonBadge } from "./MatchReasonBadge";
import { ResourceDetailModal } from "./ResourceDetailModal";
import { ExternalLink, DollarSign, ChevronRight, MapPin } from "lucide-react";

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
      <article className="bg-brand-paper border border-brand-sand rounded-xl p-5 hover:border-stone-400 hover:shadow-md transition-all duration-200 shadow-sm flex flex-col justify-between group">
        <div>
          {/* Scope & Verification Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <span className="inline-block px-2 py-0.5 bg-brand-ivory border border-stone-300 text-stone-700 text-[10px] font-mono uppercase tracking-wider rounded">
              {resource.availabilityBadge || resource.scope}
            </span>
            <VerificationBadge
              status={resource.verificationStatus}
              lastVerifiedDate={resource.dateLastVerified}
              isLead={resource.isLead}
            />
          </div>

          {/* Title & Organization */}
          <h3 className="text-base font-bold text-brand-charcoal group-hover:text-black transition-colors font-serif leading-snug">
            {resource.name}
          </h3>
          <p className="text-xs text-stone-500 font-medium mb-3 font-mono">
            {resource.organization} {resource.county ? `• ${resource.county} County` : ""}
          </p>

          {/* Match Reason if populated */}
          {matchReason && (
            <MatchReasonBadge reason={matchReason} matchedTags={matchedTags} />
          )}

          {/* Deliverable - What You Actually Get */}
          <div className="my-3 p-3 bg-brand-ivory rounded border-l-2 border-brand-oxblood text-xs text-brand-slate leading-relaxed shadow-sm">
            <strong className="text-brand-charcoal block text-[10px] uppercase tracking-wider mb-1 font-mono">
              Deliverable / Direct Relief:
            </strong>
            {resource.whatItActuallyProvides}
          </div>

          {/* Typical Amount & Friction Badges */}
          {resource.typicalAmount && (
            <div className="flex items-center gap-1 text-xs text-stone-700 mb-2 font-mono">
              <DollarSign className="w-3.5 h-3.5 text-amber-700 shrink-0" />
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
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                      : "bg-brand-ivory text-stone-600 border-stone-300"
                  }`}
                >
                  {fric.replace(/_/g, " ")}
                </span>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3 border-t border-brand-sand flex items-center justify-between gap-2">
          <button
            onClick={() => setModalOpen(true)}
            className="text-xs font-semibold text-brand-charcoal hover:text-black flex items-center gap-1 group/btn font-mono"
          >
            <span>View Requirements</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-brand-oxblood" />
          </button>

          {resource.applicationLink && (
            <a
              href={resource.applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-brand-oxblood flex items-center gap-1 font-mono transition-colors"
              title="Open external application portal"
            >
              <span>Apply</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </article>

      {/* Detail Modal */}
      <ResourceDetailModal
        resource={resource}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
