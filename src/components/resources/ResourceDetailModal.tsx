"use client";

import React from "react";
import { Resource } from "@/types/resource";
import { VerificationBadge } from "./VerificationBadge";
import { X, ExternalLink, ShieldCheck, FileCheck, AlertTriangle, Scale } from "lucide-react";

export function ResourceDetailModal({
  resource,
  isOpen,
  onClose,
}: {
  resource: Resource;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-brand-paper border border-brand-sand text-brand-charcoal rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-brand-charcoal p-1.5 rounded-lg hover:bg-stone-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-brand-sand pb-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-brand-ivory border border-stone-300 text-stone-700 text-xs font-mono rounded">
              {resource.availabilityBadge || resource.scope}
            </span>
            <VerificationBadge
              status={resource.verificationStatus}
              lastVerifiedDate={resource.dateLastVerified}
              isLead={resource.isLead}
            />
          </div>
          <h2 className="text-2xl font-bold font-serif text-brand-charcoal tracking-tight">{resource.name}</h2>
          <p className="text-sm text-stone-600 font-mono">{resource.organization}</p>
        </div>

        {/* Content Body */}
        <div className="space-y-4 text-xs leading-relaxed text-stone-700 font-sans">
          {/* What It Provides */}
          <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-brand-charcoal mb-1 font-bold">
              What This Program Actually Provides:
            </h3>
            <p className="text-sm text-brand-charcoal font-sans font-medium">{resource.whatItActuallyProvides}</p>
            {resource.typicalAmount && (
              <p className="mt-2 text-amber-900 font-mono font-bold">
                <strong>Typical Amount/Grant:</strong> {resource.typicalAmount}
              </p>
            )}
          </div>

          {/* Eligibility & Documentation */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-brand-charcoal text-xs mb-1.5 flex items-center gap-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-oxblood" />
                <span>Eligibility Criteria</span>
              </h3>
              <p className="text-stone-700 font-sans">{resource.eligibility}</p>
            </div>

            <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-brand-charcoal text-xs mb-1.5 flex items-center gap-1 font-mono">
                <FileCheck className="w-3.5 h-3.5 text-brand-oxblood" />
                <span>Documentation Required</span>
              </h3>
              {resource.documentationRequired.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 text-stone-700 font-sans">
                  {resource.documentationRequired.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-stone-500 italic font-sans">No formal documentation required for initial contact.</p>
              )}
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-brand-charcoal mb-1 font-bold">
              How to Apply / Practical Route:
            </h3>
            <p className="text-stone-800 font-sans">{resource.howToApply}</p>
          </div>

          {/* Limitations & Caveats */}
          {resource.importantLimitations && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-stone-800 shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-xs mb-1 text-amber-900 font-mono">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                <span>Important Limitations & Caveats:</span>
              </div>
              <p className="text-stone-800 font-sans">{resource.importantLimitations}</p>
            </div>
          )}

          {/* Authoritative Source Citation */}
          <div className="border-t border-brand-sand pt-3 flex flex-col gap-1 text-[11px] text-stone-600 font-mono">
            <div className="flex items-center gap-1 text-brand-charcoal font-bold">
              <Scale className="w-3.5 h-3.5 text-brand-oxblood" />
              <span>Primary Authoritative Source:</span>
            </div>
            <p>{resource.primaryAuthoritativeSource}</p>
            {resource.sourceUrl && (
              <a
                href={resource.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-oxblood hover:underline flex items-center gap-1 w-fit mt-1 font-bold"
              >
                <span>Direct Primary Source URL</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 border-t border-brand-sand pt-4 flex flex-wrap items-center justify-between gap-3 font-mono">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-brand-paper hover:bg-stone-200 border border-stone-300 text-brand-charcoal rounded text-xs font-bold shadow-sm"
          >
            Close
          </button>

          {resource.applicationLink || resource.website ? (
            <a
              href={resource.applicationLink || resource.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-oxblood hover:bg-red-900 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
            >
              <span>Open Official Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
