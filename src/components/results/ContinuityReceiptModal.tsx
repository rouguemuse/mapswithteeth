"use client";

import React, { useState } from "react";
import { ContinuityReceipt } from "@/domain/continuity/types";
import {
  X,
  Printer,
  Copy,
  Check,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
  FileText,
  MessageSquare,
  Clock,
  ExternalLink,
  ChevronLeft
} from "lucide-react";
import { getPresentedFollowUpTimeline } from "@/domain/presentation/receiptPresentation";

interface ContinuityReceiptModalProps {
  receipt: ContinuityReceipt | null;
  onClose: () => void;
}

export function ContinuityReceiptModal({ receipt, onClose }: ContinuityReceiptModalProps) {
  const [copied, setCopied] = useState(false);

  if (!receipt) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = async () => {
    const plainText = `
MAPS WITH TEETH — ACTION CONTINUITY RECEIPT
==================================================
Resource: ${receipt.resourceName}
Provider: ${receipt.provider}
Status: ${receipt.routeTier} | Eligibility: ${receipt.eligibilityStatus} | Readiness: ${receipt.readinessStatus}
Generated: ${new Date(receipt.generatedAt).toLocaleString()}

WHY THIS MAY HELP:
${receipt.whyThisMayHelp}

WHAT IS ALREADY KNOWN:
${receipt.confirmedFacts.map((f) => `✓ ${f}`).join("\n") || "None listed"}

WHAT STILL NEEDS CLARIFICATION:
${receipt.unknownFacts.map((f) => `? ${f}`).join("\n") || "None"}

KNOWN BLOCKERS / GATES:
${receipt.knownBlockers.map((b) => `× ${b}`).join("\n") || "None identified"}

DOCUMENTS TO GATHER:
${receipt.documentsToGather.map((d) => `[ ] ${d}`).join("\n") || "None required up front"}

WHAT YOU CONTROL NEXT:
${receipt.nextAction}

WHAT TO SAY OR ASK:
"${receipt.whatToSayOrAsk}"

CHECK-BACK CHECKPOINT:
${receipt.followUpCheckpoint}

AUTHORITATIVE SOURCE:
${receipt.sourceReferences.sourceTitle} (${receipt.sourceReferences.sourceLocator})
URL: ${receipt.sourceReferences.sourceUrl}
Last Reviewed: ${receipt.sourceReferences.lastReviewed}
==================================================
`;
    try {
      await navigator.clipboard.writeText(plainText.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API unavailable
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-0 sm:p-4 font-sans select-none">
      {/* Container: Full-screen sheet on mobile, centered modal on desktop */}
      <div className="bg-[#EEE8DD] border-0 sm:border-2 sm:border-[#1C1D1D] rounded-none sm:rounded-xl w-full sm:max-w-3xl min-h-screen sm:min-h-0 sm:max-h-[90vh] overflow-y-auto shadow-2xl bg-grid-atlas flex flex-col">
        {/* Sticky Mobile/Desktop Top Header */}
        <div className="sticky top-0 bg-[#EEE8DD]/95 backdrop-blur-xs border-b-2 border-[#1C1D1D] p-4 sm:p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="sm:hidden p-2 -ml-2 text-stone-700 hover:text-[#1C1D1D] flex items-center gap-1 font-mono text-xs font-bold"
              aria-label="Back to results"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#971F26] font-bold block">
                ACTION CONTINUITY RECEIPT
              </span>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1C1D1D] leading-tight">
                {receipt.resourceName}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 bg-[#F5F1E8] hover:bg-stone-200 border border-[#1C1D1D] rounded text-xs font-mono font-bold text-[#1C1D1D] flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Copy receipt text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2D5A3D]" />
                  <span className="hidden sm:inline text-[#2D5A3D]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#F5F1E8] hover:bg-stone-200 border border-[#1C1D1D] rounded text-xs font-mono font-bold text-[#1C1D1D] flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="hidden sm:flex p-1.5 text-stone-600 hover:text-[#1C1D1D] hover:bg-stone-200 rounded cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Receipt Body */}
        <div className="p-5 sm:p-7 space-y-6 flex-1 print:p-0">
          {/* Status Banner */}
          <div className="p-3.5 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg text-xs flex flex-wrap items-center justify-between gap-2 font-mono">
            <div>
              Provider: <strong>{receipt.provider}</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#1C1D1D] text-white rounded text-[10px] font-bold uppercase">
                {receipt.routeTier.replace("_", " ")}
              </span>
              <span className="text-stone-600 text-[11px]">
                {receipt.resourceType || "RESOURCE"}
              </span>
            </div>
          </div>

          {/* Section 1: Why this may help */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#971F26] font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Why This May Help</span>
            </h3>
            <p className="text-sm text-stone-900 leading-relaxed font-sans bg-[#F5F1E8] p-3.5 rounded-lg border border-[#D9D1C4]">
              {receipt.whyThisMayHelp}
            </p>
          </div>

          {/* Section 2: Known Facts & Uncertainties */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* What we know */}
            <div className="space-y-2 bg-[#F5F1E8] p-4 rounded-lg border border-[#D9D1C4]">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#2D5A3D] flex items-center gap-1.5">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>What Is Already Known</span>
              </h4>
              {receipt.confirmedFacts.length === 0 ? (
                <p className="text-xs text-stone-500 italic">No specific confirmed facts recorded.</p>
              ) : (
                <ul className="space-y-1.5 text-xs text-stone-800">
                  {receipt.confirmedFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#2D5A3D] font-bold">✓</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* What we still don't know */}
            <div className="space-y-2 bg-[#F5F1E8] p-4 rounded-lg border border-[#D9D1C4]">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#92400E] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>What Still Needs Clarification</span>
              </h4>
              {receipt.unknownFacts.length === 0 ? (
                <p className="text-xs text-stone-500 italic">All qualification conditions are known.</p>
              ) : (
                <ul className="space-y-1.5 text-xs text-stone-800">
                  {receipt.unknownFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#92400E] font-bold">?</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Section 3: Known Blockers (if any) */}
          {receipt.knownBlockers.length > 0 && (
            <div className="space-y-2 bg-[#FDF2F2] p-4 rounded-lg border-2 border-[#971F26]">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#971F26] flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>What Could Block This Route</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#1C1D1D]">
                {receipt.knownBlockers.map((blocker, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#971F26] font-bold">×</span>
                    <span>{blocker}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section 4: What to gather */}
          <div className="space-y-2 bg-[#F5F1E8] p-4 rounded-lg border border-[#D9D1C4]">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1C1D1D] flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#971F26]" />
              <span>Documents or Proof to Gather</span>
            </h4>
            {receipt.documentsToGather.length === 0 ? (
              <p className="text-xs text-stone-600">No specific documentation required prior to first contact.</p>
            ) : (
              <ul className="space-y-1.5 text-xs text-stone-900">
                {receipt.documentsToGather.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-stone-500 font-bold">[ ]</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Section 5: What you control next & What to say */}
          <div className="space-y-4 bg-[#F5F1E8] p-4 sm:p-5 rounded-lg border-2 border-[#1C1D1D]">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#971F26] mb-1">
                What You Control Next:
              </h4>
              <p className="text-xs sm:text-sm font-medium text-[#1C1D1D] leading-relaxed">
                {receipt.nextAction}
              </p>
            </div>

            {receipt.whatToSayOrAsk && (
              <div className="bg-[#EEE8DD] p-3.5 rounded border border-[#D9D1C4] space-y-1">
                <div className="text-[11px] font-mono font-bold text-stone-800 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#971F26]" />
                  <span>Conversation Script / What to Say:</span>
                </div>
                <p className="text-xs italic text-[#1C1D1D] font-serif leading-relaxed">
                  "{receipt.whatToSayOrAsk}"
                </p>
              </div>
            )}

            {receipt.followUpCheckpoint && (
              <div className="text-[11px] font-mono text-stone-700 flex items-start gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
                <span>
                  <strong>Check-Back Timeline:</strong> {getPresentedFollowUpTimeline(receipt)}
                </span>
              </div>
            )}
          </div>

          {/* Section 6: Authoritative Source Disclosure */}
          <div className="border-t border-[#D9D1C4] pt-4 text-[11px] font-mono text-stone-600 space-y-1">
            <div>
              Authoritative Source: <strong>{receipt.sourceReferences.sourceTitle}</strong> ({receipt.sourceReferences.sourceLocator})
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <a
                href={receipt.sourceReferences.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#971F26] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Visit Official Program Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>Last Reviewed: {receipt.sourceReferences.lastReviewed}</span>
            </div>
          </div>
        </div>

        {/* Footer for mobile sheet */}
        <div className="sm:hidden p-4 bg-[#EEE8DD] border-t-2 border-[#1C1D1D] sticky bottom-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 bg-[#1C1D1D] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-lg"
          >
            Back to Results
          </button>
        </div>
      </div>
    </div>
  );
}
