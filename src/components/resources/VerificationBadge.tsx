import React from "react";
import { CheckCircle2, AlertCircle, Clock, HelpCircle } from "lucide-react";
import { VerificationStatus } from "@/types/resource";

export function VerificationBadge({
  status,
  lastVerifiedDate,
  isLead,
}: {
  status: VerificationStatus;
  lastVerifiedDate?: string;
  isLead?: boolean;
}) {
  if (isLead || status === "UNVERIFIED LEAD") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-100 text-stone-600 border border-stone-300">
        <HelpCircle className="w-3 h-3 text-stone-500" />
        <span>Resource Lead</span>
      </span>
    );
  }

  switch (status) {
    case "VERIFIED CURRENT":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          <span>Verified Current {lastVerifiedDate ? `(${lastVerifiedDate})` : ""}</span>
        </span>
      );
    case "LOCAL / FUNDING DEPENDENT":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300">
          <Clock className="w-3 h-3 text-amber-600" />
          <span>Funding Dependent</span>
        </span>
      );
    case "LIKELY CURRENT — NEEDS REVIEW":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-300">
          <AlertCircle className="w-3 h-3 text-stone-600" />
          <span>Review Due</span>
        </span>
      );
    case "TEMPORARILY CLOSED":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-red-50 text-brand-oxblood border border-red-300 font-bold">
          <AlertCircle className="w-3 h-3 text-brand-oxblood" />
          <span>Temporarily Suspended</span>
        </span>
      );
    case "WAITLIST":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-100 text-amber-800 border border-amber-300">
          <Clock className="w-3 h-3 text-amber-600" />
          <span>Waitlist Active</span>
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-100 text-stone-600 border border-stone-300">
          <span>{status}</span>
        </span>
      );
  }
}
