"use client";

import React from "react";
import { Resource } from "@/types/resource";
import { VerificationBadge } from "./VerificationBadge";
import { X, ExternalLink, ShieldCheck, FileCheck, AlertTriangle, Scale, CheckCircle2, DollarSign, Info } from "lucide-react";

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

  const whatItHelps = resource.whatItCanHelpWith || resource.whatItActuallyProvides;
  const whatNext = resource.whatToDoNext || resource.howToApply;
  const blockReasons = resource.whatCanBlockAccess && resource.whatCanBlockAccess.length > 0
    ? resource.whatCanBlockAccess
    : resource.accessFrictions.map((f) => f.replace(/_/g, " "));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-brand-paper border border-brand-sand text-brand-charcoal rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-brand-charcoal p-1.5 rounded-lg hover:bg-stone-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-brand-sand pb-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-brand-ivory border border-stone-300 text-stone-700 text-xs font-mono rounded font-medium">
              {resource.geography || resource.scope}
            </span>
            {resource.isStatutoryRight ? (
              <span className="px-2 py-0.5 bg-purple-50 border border-purple-200 text-purple-900 text-xs font-mono rounded font-bold">
                Statutory Right / Legal Remedy
              </span>
            ) : (
              <span className="px-2 py-0.5 bg-stone-100 border border-stone-300 text-stone-700 text-xs font-mono rounded font-medium">
                Discretionary Program
              </span>
            )}
            <VerificationBadge
              status={resource.verificationStatus}
              lastVerifiedDate={resource.lastReviewedDate || resource.dateLastVerified}
              reopeningDate={resource.reopeningDate}
            />
          </div>
          <h2 className="text-2xl font-bold font-serif text-brand-charcoal tracking-tight">{resource.name}</h2>
          <p className="text-sm text-stone-600 font-mono mt-0.5">{resource.organization}</p>
          {resource.statuteCitation && (
            <p className="text-xs font-mono text-purple-900 font-bold mt-1 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-purple-700" />
              <span>Statutory Citation: {resource.statuteCitation}</span>
            </p>
          )}
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-xs leading-relaxed text-stone-700 font-sans">
          {/* 1. What It Actually Provides */}
          <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm space-y-2">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-brand-oxblood font-bold">
              What This Program Actually Provides:
            </h3>
            <p className="text-sm text-brand-charcoal font-medium leading-relaxed">{whatItHelps}</p>
            {resource.knownFundingLimits && (
              <p className="text-xs text-amber-900 font-mono font-bold pt-1">
                <strong>Funding Limits / Amount:</strong> {resource.knownFundingLimits}
              </p>
            )}
            {resource.paymentMethod && (
              <p className="text-[11px] text-stone-600 font-mono">
                <strong>Payment Mechanics:</strong> {resource.paymentMethod.replace(/_/g, " ")}
              </p>
            )}
          </div>

          {/* 2. THE CATCH - What Can Block Access */}
          <div className="bg-red-50/80 border border-red-200 rounded-xl p-4 shadow-sm space-y-2">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-brand-oxblood font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-brand-oxblood" />
              <span>What Can Block Access (The Catch & Friction Points):</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-stone-800">
              {blockReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-oxblood font-bold">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Eligibility & Documentation Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm space-y-2">
              <h3 className="font-bold text-brand-charcoal text-xs flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-4 h-4 text-brand-oxblood" />
                <span>Eligibility Criteria:</span>
              </h3>
              <p className="text-stone-700 leading-relaxed">{resource.eligibility}</p>
              {resource.incomeRestriction && (
                <p className="text-[11px] text-stone-600 font-mono pt-1">
                  <strong>Income Restriction:</strong> {resource.incomeRestriction}
                </p>
              )}
              {resource.employmentDependency && (
                <p className="text-[11px] text-stone-600 font-mono">
                  <strong>Employment Dependency:</strong> {resource.employmentDependency}
                </p>
              )}
            </div>

            <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm space-y-2">
              <h3 className="font-bold text-brand-charcoal text-xs flex items-center gap-1.5 font-mono">
                <FileCheck className="w-4 h-4 text-brand-oxblood" />
                <span>Documentation Required:</span>
              </h3>
              {resource.documentationRequired && resource.documentationRequired.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 text-stone-700">
                  {resource.documentationRequired.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-stone-500 italic">No formal documentary proof required for initial inquiry.</p>
              )}
            </div>
          </div>

          {/* 4. Concrete Access Requirements Table */}
          <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-brand-charcoal mb-2 font-bold">
              Access Gateways & Referral Rules:
            </h3>
            <div className="grid gap-2 sm:grid-cols-3 text-[11px] font-mono text-stone-700">
              <div className="p-2 bg-brand-paper rounded border border-stone-200">
                <span className="text-stone-500 block text-[10px]">Advocate Referral:</span>
                <span className="font-bold text-brand-charcoal">
                  {resource.referralRequirement || (resource.accessFrictions.includes("ADVOCATE_REFERRAL_REQUIRED") ? "Required" : "Not Required / Self-Apply")}
                </span>
              </div>
              <div className="p-2 bg-brand-paper rounded border border-stone-200">
                <span className="text-stone-500 block text-[10px]">DV Shelter Connection:</span>
                <span className="font-bold text-brand-charcoal">
                  {resource.shelterConnectionRequired || resource.accessFrictions.includes("DV_SHELTER_CONNECTION_REQUIRED") ? "Required" : "No Shelter Stay Required"}
                </span>
              </div>
              <div className="p-2 bg-brand-paper rounded border border-stone-200">
                <span className="text-stone-500 block text-[10px]">Police Report:</span>
                <span className="font-bold text-brand-charcoal">
                  {resource.policeReportRequired || resource.accessFrictions.includes("POLICE_REPORT_REQUIRED") ? "Required" : "No Police Report Required"}
                </span>
              </div>
            </div>
          </div>

          {/* 5. What To Do Next / Application Route */}
          <div className="bg-brand-ivory border border-brand-sand rounded-xl p-4 shadow-sm space-y-1.5">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-emerald-900 font-bold">
              What To Do Next (How To Reach This Help):
            </h3>
            <p className="text-stone-800 leading-relaxed font-medium">{whatNext}</p>
          </div>

          {/* 6. Legal / Statutory Disclaimer */}
          {resource.isStatutoryRight && (
            <div className="p-3 bg-purple-50/80 border border-purple-200 rounded-lg text-purple-950 text-[11px] leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
              <p>
                <strong>Legal Notice:</strong> This summary provides educational information on statutory protections under {resource.statuteCitation || "state/federal law"}. It does not constitute individual legal advice or attorney representation. Consult a qualified legal aid organization or private attorney for case-specific counsel.
              </p>
            </div>
          )}

          {/* 7. Authoritative Source Audit Citation */}
          <div className="border-t border-brand-sand pt-3 flex flex-col gap-1 text-[11px] text-stone-600 font-mono">
            <div className="flex items-center gap-1 text-brand-charcoal font-bold">
              <Scale className="w-3.5 h-3.5 text-brand-oxblood" />
              <span>Primary Authoritative Source:</span>
            </div>
            <p>{resource.primaryAuthoritativeSource}</p>
            <p className="text-[10px] text-stone-500">
              Reviewed Date: {resource.lastReviewedDate || resource.dateLastVerified} · Status: {resource.verificationStatus.replace(/_/g, " ")}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 border-t border-brand-sand pt-4 flex flex-wrap items-center justify-between gap-3 font-mono">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-brand-paper hover:bg-stone-200 border border-stone-300 text-brand-charcoal rounded text-xs font-bold shadow-sm"
          >
            Close Dossier
          </button>

          {resource.sourceUrl && (
            <a
              href={resource.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-oxblood hover:bg-red-900 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <span>Open Official Source Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
