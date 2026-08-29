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
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-800 text-stone-300 border border-stone-700">
        <HelpCircle className="w-3 h-3 text-amber-400" />
        <span>Resource Lead</span>
      </span>
    );
  }

  switch (status) {
    case "VERIFIED CURRENT":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-emerald-950/70 text-emerald-300 border border-emerald-800">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>Verified Current {lastVerifiedDate ? `(${lastVerifiedDate})` : ""}</span>
        </span>
      );
    case "LOCAL / FUNDING DEPENDENT":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-950/70 text-amber-300 border border-amber-800">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>Funding Dependent</span>
        </span>
      );
    case "LIKELY CURRENT — NEEDS REVIEW":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-950/70 text-amber-300 border border-amber-800">
          <AlertCircle className="w-3 h-3 text-amber-400" />
          <span>Review Due</span>
        </span>
      );
    case "TEMPORARILY CLOSED":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-red-950/90 text-red-300 border border-brand-ruby">
          <AlertCircle className="w-3 h-3 text-red-400" />
          <span>Temporarily Suspended</span>
        </span>
      );
    case "WAITLIST":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-900 text-amber-300 border border-amber-800">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>Waitlist Active</span>
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-800 text-stone-300 border border-stone-700">
          <span>{status}</span>
        </span>
      );
  }
}
