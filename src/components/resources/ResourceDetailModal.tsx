"use client";

import React from "react";
import { Resource } from "@/types/resource";
import { VerificationBadge } from "./VerificationBadge";
import { X, ExternalLink, ShieldCheck, FileCheck, Phone, Mail, Globe, AlertTriangle, Scale } from "lucide-react";

export function ResourceDetailModal({
  resource,
  onClose,
}: {
  resource: Resource;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-brand-charcoal border border-stone-700 text-stone-200 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1.5 rounded hover:bg-stone-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-stone-800 pb-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-stone-900 border border-stone-700 text-stone-300 text-xs font-mono rounded">
              {resource.availabilityBadge || resource.scope}
            </span>
            <VerificationBadge
              status={resource.verificationStatus}
              lastVerifiedDate={resource.dateLastVerified}
              isLead={resource.isLead}
            />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">{resource.name}</h2>
          <p className="text-sm text-stone-400">{resource.organization}</p>
        </div>

        {/* Content Body */}
        <div className="space-y-4 text-xs leading-relaxed text-stone-300">
          {/* What It Provides */}
          <div className="bg-stone-900/80 border border-stone-800 rounded p-3.5">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-1">
              What This Program Actually Provides:
            </h3>
            <p className="text-sm text-stone-200 font-sans font-medium">{resource.whatItActuallyProvides}</p>
            {resource.typicalAmount && (
              <p className="mt-2 text-amber-300 font-mono">
                <strong>Typical Amount/Grant:</strong> {resource.typicalAmount}
              </p>
            )}
          </div>

          {/* Eligibility & Documentation */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-stone-900/50 border border-stone-800 rounded p-3">
              <h3 className="font-semibold text-white text-xs mb-1.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-ruby" />
                <span>Eligibility Criteria</span>
              </h3>
              <p className="text-stone-300">{resource.eligibility}</p>
            </div>

            <div className="bg-stone-900/50 border border-stone-800 rounded p-3">
              <h3 className="font-semibold text-white text-xs mb-1.5 flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-brand-ruby" />
                <span>Documentation Required</span>
              </h3>
              {resource.documentationRequired.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 text-stone-300">
                  {resource.documentationRequired.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-stone-400 italic">No formal documentation required for initial contact.</p>
              )}
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-stone-900/50 border border-stone-800 rounded p-3.5">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-1">
              How to Apply / Next Step:
            </h3>
            <p className="text-stone-200">{resource.howToApply}</p>
          </div>

          {/* Limitations & Caveats */}
          {resource.importantLimitations && (
            <div className="bg-amber-950/20 border border-amber-900/40 rounded p-3 text-amber-200">
              <div className="flex items-center gap-1.5 font-semibold text-xs mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>Important Limitations:</span>
              </div>
              <p className="text-stone-300">{resource.importantLimitations}</p>
            </div>
          )}

          {/* Authoritative Source Citation */}
          <div className="border-t border-stone-800 pt-3 flex flex-col gap-1 text-[11px] text-stone-400">
            <div className="flex items-center gap-1 text-stone-300 font-semibold">
              <Scale className="w-3.5 h-3.5 text-brand-ruby" />
              <span>Primary Authoritative Source:</span>
            </div>
            <p>{resource.primaryAuthoritativeSource}</p>
            {resource.sourceUrl && (
              <a
                href={resource.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-ruby hover:underline flex items-center gap-1 w-fit mt-1"
              >
                <span>Direct Source URL</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 border-t border-stone-800 pt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs font-medium"
          >
            Close
          </button>

          {resource.applicationLink || resource.website ? (
            <a
              href={resource.applicationLink || resource.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-ruby hover:bg-red-700 text-white rounded text-xs font-bold flex items-center gap-1.5 shadow-md"
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
