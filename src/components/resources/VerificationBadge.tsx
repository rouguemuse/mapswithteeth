import React from "react";
import { CheckCircle2, AlertCircle, Clock, ShieldCheck, Scale, FileText } from "lucide-react";
import { VerificationStatus } from "@/types/resource";

export function VerificationBadge({
  status,
  lastVerifiedDate,
  reopeningDate,
}: {
  status: VerificationStatus;
  lastVerifiedDate?: string;
  reopeningDate?: string;
}) {
  switch (status) {
    case "AGENCY_CONFIRMED":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold shadow-sm">
          <ShieldCheck className="w-3 h-3 text-emerald-700" />
          <span>Agency Confirmed {lastVerifiedDate ? `· ${lastVerifiedDate}` : ""}</span>
        </span>
      );
    case "OFFICIAL_SOURCE_CHECKED":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200 font-bold shadow-sm">
          <Scale className="w-3 h-3 text-blue-700" />
          <span>Official Source Checked {lastVerifiedDate ? `· ${lastVerifiedDate}` : ""}</span>
        </span>
      );
    case "PUBLIC_SOURCE_CHECKED":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-100 text-stone-800 border border-stone-300 font-semibold shadow-sm">
          <FileText className="w-3 h-3 text-stone-600" />
          <span>Public Source Checked {lastVerifiedDate ? `· ${lastVerifiedDate}` : ""}</span>
        </span>
      );
    case "TEMPORARILY_CLOSED":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-red-50 text-brand-oxblood border border-red-300 font-bold shadow-sm">
          <AlertCircle className="w-3 h-3 text-brand-oxblood" />
          <span>Temporarily Closed {reopeningDate ? `(Reopening: ${reopeningDate})` : ""}</span>
        </span>
      );
    case "NEEDS_REVERIFICATION":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-300 font-semibold">
          <Clock className="w-3 h-3 text-amber-700" />
          <span>Needs Re-verification (Hidden from Public)</span>
        </span>
      );
    case "CLOSED":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-200 text-stone-700 border border-stone-400">
          <AlertCircle className="w-3 h-3 text-stone-600" />
          <span>Program Terminated / Closed</span>
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-300">
          <span>{status}</span>
        </span>
      );
  }
}
