import React from "react";
import { CheckCircle2, AlertCircle, Clock, ShieldCheck, Scale, FileText, AlertTriangle } from "lucide-react";
import { VerificationStatus } from "@/types/resource";

export function VerificationBadge({
  status,
  lastVerifiedDate,
  reopeningDate,
  customTag,
}: {
  status: VerificationStatus | string;
  lastVerifiedDate?: string;
  reopeningDate?: string;
  customTag?: string;
}) {
  switch (status) {
    case "AGENCY_CONFIRMED":
    case "VERIFIED":
      return (
        <span className="stamp-verified bg-[#EEE8DD] border-[#1C1D1D] text-[#1C1D1D] text-[9px] sm:text-[10px] py-0.5 px-2 font-mono uppercase font-bold tracking-wider shadow-2xs">
          <ShieldCheck className="w-3 h-3 text-[#1C1D1D]" />
          <span>[AGENCY CONFIRMED{lastVerifiedDate ? ` · ${lastVerifiedDate}` : ""}]</span>
        </span>
      );
    case "OFFICIAL_SOURCE_CHECKED":
    case "STATUTORY_RIGHT":
      return (
        <span className="stamp-verified bg-[#EEE8DD] border-[#1C1D1D] text-[#1C1D1D] text-[9px] sm:text-[10px] py-0.5 px-2 font-mono uppercase font-bold tracking-wider shadow-2xs">
          <Scale className="w-3 h-3 text-[#1C1D1D]" />
          <span>[OFFICIAL SOURCE CHECKED{lastVerifiedDate ? ` · ${lastVerifiedDate}` : ""}]</span>
        </span>
      );
    case "PUBLIC_SOURCE_CHECKED":
    case "WEB_VERIFIED":
      return (
        <span className="stamp-verified bg-[#F5F1E8] border-stone-600 text-stone-800 text-[9px] sm:text-[10px] py-0.5 px-2 font-mono uppercase font-bold tracking-wider shadow-2xs">
          <FileText className="w-3 h-3 text-stone-700" />
          <span>[PUBLIC SOURCE CHECKED{lastVerifiedDate ? ` · ${lastVerifiedDate}` : ""}]</span>
        </span>
      );
    case "TEMPORARILY_CLOSED":
    case "WAITLIST":
      return (
        <span className="stamp-alert bg-[#FDF2F2] border-[#971F26] text-[#971F26] text-[9px] sm:text-[10px] py-0.5 px-2 font-mono uppercase font-bold tracking-wider shadow-2xs">
          <AlertCircle className="w-3 h-3 text-[#971F26]" />
          <span>[TEMPORARILY CLOSED{reopeningDate ? ` · REOPENS ${reopeningDate}` : ""}]</span>
        </span>
      );
    case "CALL_TO_CONFIRM":
    case "ELIGIBILITY_UNCLEAR":
      return (
        <span className="stamp-alert bg-[#FFFDF5] border-amber-800 text-amber-900 text-[9px] sm:text-[10px] py-0.5 px-2 font-mono uppercase font-bold tracking-wider">
          <AlertTriangle className="w-3 h-3 text-amber-800" />
          <span>[CALL TO CONFIRM · ELIGIBILITY COMPLEX]</span>
        </span>
      );
    default:
      return (
        <span className="stamp-verified bg-[#EEE8DD] border-stone-500 text-stone-700 text-[9px] sm:text-[10px] py-0.5 px-2 font-mono uppercase font-bold tracking-wider">
          <span>[{customTag || status}]</span>
        </span>
      );
  }
}
