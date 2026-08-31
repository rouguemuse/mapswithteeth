"use client";

import React, { useState } from "react";
import { Resource } from "@/types/resource";
import { VerificationBadge } from "./VerificationBadge";
import { ResourceSuggestionModal } from "./ResourceSuggestionModal";
import { X, ExternalLink, ShieldCheck, FileCheck, AlertTriangle, Scale, CheckCircle2, DollarSign, Info, Edit3 } from "lucide-react";

export function ResourceDetailModal({
  resource,
  isOpen,
  onClose,
}: {
  resource: Resource;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [correctionModalOpen, setCorrectionModalOpen] = useState(false);
  if (!isOpen) return null;

  const whatItHelps = resource.whatItCanHelpWith || resource.whatItActuallyProvides;
  const whatNext = resource.whatToDoNext || resource.howToApply;
  const blockReasons = resource.whatCanBlockAccess && resource.whatCanBlockAccess.length > 0
    ? resource.whatCanBlockAccess
    : resource.accessFrictions.map((f) => f.replace(/_/g, " "));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn select-none font-sans">
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative bg-grid-atlas">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-600 hover:text-[#1C1D1D] p-1.5 rounded-md hover:bg-[#EEE8DD] transition-colors border border-[#D9D1C4]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-[#D9D1C4] pb-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[10px]">
            <span className="px-2 py-0.5 bg-[#EEE8DD] border border-[#1C1D1D] text-[#1C1D1D] font-bold rounded-xs">
              {resource.geography || resource.scope}
            </span>
            {resource.isStatutoryRight ? (
              <span className="px-2 py-0.5 bg-[#1C1D1D] text-white font-bold rounded-xs">
                STATUTORY RIGHT / ENFORCEABLE REMEDY
              </span>
            ) : (
              <span className="px-2 py-0.5 bg-[#EEE8DD] border border-[#D9D1C4] text-stone-800 font-bold rounded-xs">
                DISCRETIONARY AID
              </span>
            )}
            <VerificationBadge
              status={resource.verificationStatus}
              lastVerifiedDate={resource.lastReviewedDate || resource.dateLastVerified}
              reopeningDate={resource.reopeningDate}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1C1D1D] tracking-tight">{resource.name}</h2>
          <p className="text-xs text-stone-700 font-mono mt-0.5 font-bold">{resource.organization}</p>
          {resource.statuteCitation && (
            <p className="text-xs font-mono text-[#971F26] font-bold mt-1 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#971F26]" />
              <span>Statutory Citation: {resource.statuteCitation}</span>
            </p>
          )}
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-xs leading-relaxed text-stone-800 font-sans">
          {/* 1. What It Actually Provides */}
          <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-4 shadow-2xs space-y-2">
            <h3 className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] font-bold">
              1. What This Program Actually Provides:
            </h3>
            <p className="text-xs sm:text-sm text-stone-900 font-medium leading-relaxed">{whatItHelps}</p>
            {resource.knownFundingLimits && (
              <p className="text-xs text-[#1C1D1D] font-mono font-bold pt-1">
                • Funding Limits: {resource.knownFundingLimits}
              </p>
            )}
            {resource.paymentMethod && (
              <p className="text-[11px] text-stone-700 font-mono">
                • Payment Mechanics: {resource.paymentMethod.replace(/_/g, " ")}
              </p>
            )}
          </div>

          {/* 2. THE CATCH - What Can Block Access */}
          <div className="bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg p-4 shadow-2xs space-y-2">
            <h3 className="text-[10px] font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#971F26]" />
              <span>2. What Can Block Access (The Catch & Access Friction):</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-stone-900">
              {blockReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#971F26] font-bold font-mono">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Detailed Eligibility & Documentation */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg p-4 space-y-1.5">
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#1C1D1D] font-bold">
                Who Is Eligible:
              </h4>
              <p className="text-xs text-stone-800 font-sans">{resource.eligibility}</p>
              {resource.incomeRestriction && (
                <p className="text-[11px] font-mono text-stone-700 pt-1">
                  <strong>Income:</strong> {resource.incomeRestriction}
                </p>
              )}
            </div>

            <div className="bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg p-4 space-y-1.5">
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#1C1D1D] font-bold">
                Required Documentation:
              </h4>
              {resource.documentationRequired && resource.documentationRequired.length > 0 ? (
                <ul className="space-y-1 text-xs text-stone-800">
                  {resource.documentationRequired.map((doc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-stone-500">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-stone-600">Standard identity and crisis documentation.</p>
              )}
            </div>
          </div>

          {/* 4. Action Steps */}
          <div className="bg-[#EEE8DD] border border-[#1C1D1D] rounded-lg p-4 space-y-1.5">
            <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#1C1D1D] font-bold">
              Immediate Action Step / What To Do Next:
            </h4>
            <p className="text-xs text-stone-800 font-sans">{whatNext}</p>
          </div>

          {/* 5. Verification Provenance & Audit Trail */}
          {resource.provenance && (
            <div className="p-3 bg-[#E8F3EB] border border-[#2D5A3D] rounded text-[11px] text-stone-800 space-y-1 font-mono">
              <div className="flex items-center gap-1.5 text-[#2D5A3D] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>VERIFICATION PROVENANCE & AUDIT TRAIL:</span>
              </div>
              <p>• Verified Date: {resource.provenance.verificationDate} via {resource.provenance.verificationMethod.replace(/_/g, " ")}</p>
              <p>• Confirming Entity: {resource.provenance.confirmingEntity} {resource.provenance.confirmingRole ? `(${resource.provenance.confirmingRole})` : ""}</p>
              <p>• Audit Notes: {resource.provenance.verificationNotes}</p>
              <p>• Next Scheduled Review: {resource.provenance.nextScheduledReviewDate}</p>
            </div>
          )}

          {/* 6. Legal Disclaimer Notice */}
          <div className="p-3 bg-[#F5F1E8] border border-[#D9D1C4] rounded text-[11px] text-stone-600 space-y-1 font-mono">
            <strong>Informational Summary Only:</strong> Maps With Teeth provides navigational intelligence and does not provide formal legal advice, direct crisis hotline staffing, or guaranteed grant approvals.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[#D9D1C4] flex flex-wrap items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#EEE8DD] hover:bg-stone-300 text-[#1C1D1D] rounded-md text-xs font-bold uppercase tracking-wider border border-[#1C1D1D]"
            >
              Close Dossier
            </button>
            <button
              onClick={() => setCorrectionModalOpen(true)}
              className="px-3 py-2 text-stone-700 hover:text-[#971F26] text-xs font-mono font-bold flex items-center gap-1.5 hover:underline"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Suggest Update / Correction</span>
            </button>
          </div>

          {(resource.website || resource.sourceUrl || resource.applicationLink) && (
            <a
              href={resource.applicationLink || resource.website || resource.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs"
            >
              <span>Visit Official Source Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      <ResourceSuggestionModal
        isOpen={correctionModalOpen}
        onClose={() => setCorrectionModalOpen(false)}
        initialResourceName={resource.name}
      />
    </div>
  );
}
