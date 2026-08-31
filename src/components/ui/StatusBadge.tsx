import React from "react";
import { CheckCircle2, ShieldCheck, Scale, FileText, AlertCircle, AlertTriangle, Clock, FlaskConical, Milestone, Sparkles } from "lucide-react";

export type ProductStatus =
  | "LIVE"
  | "ACTIVE_RESEARCH"
  | "PILOT"
  | "PROTOTYPE"
  | "PLANNED";

export type VerificationStatus =
  | "DIRECTLY_CONFIRMED"
  | "PRIMARY_SOURCE_VERIFIED"
  | "PUBLIC_SOURCE_CHECKED"
  | "TEMPORARILY_CLOSED"
  | "UNCONFIRMED";

interface StatusBadgeProps {
  type?: "product" | "verification";
  status: ProductStatus | VerificationStatus | string;
  label?: string;
  timestamp?: string;
  size?: "sm" | "md";
  className?: string;
}

export function StatusBadge({
  type = "product",
  status,
  label,
  timestamp,
  size = "sm",
  className = "",
}: StatusBadgeProps) {
  const norm = (status || "").toUpperCase().replace(/\s+/g, "_");
  const sizeClasses = size === "sm" ? "text-[9px] sm:text-[10px] py-0.5 px-2" : "text-xs py-1 px-2.5";

  // Product Lifecycle Statuses
  if (type === "product" || ["LIVE", "ACTIVE_RESEARCH", "PILOT", "PROTOTYPE", "PLANNED"].includes(norm)) {
    switch (norm) {
      case "LIVE":
        return (
          <span className={`inline-flex items-center gap-1 font-mono uppercase font-bold tracking-wider rounded-xs border bg-[#E8F3EB] border-[#2D5A3D] text-[#2D5A3D] ${sizeClasses} ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D]" />
            <span>{label || "LIVE"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
      case "ACTIVE_RESEARCH":
      case "ACTIVE":
        return (
          <span className={`inline-flex items-center gap-1 font-mono uppercase font-bold tracking-wider rounded-xs border bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D] ${sizeClasses} ${className}`}>
            <FlaskConical className="w-3 h-3 text-[#971F26]" />
            <span>{label || "ACTIVE RESEARCH"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
      case "PILOT":
        return (
          <span className={`inline-flex items-center gap-1 font-mono uppercase font-bold tracking-wider rounded-xs border bg-[#FEF3C7] border-[#D97706] text-[#92400E] ${sizeClasses} ${className}`}>
            <Milestone className="w-3 h-3 text-[#D97706]" />
            <span>{label || "PILOT"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
      case "PROTOTYPE":
        return (
          <span className={`inline-flex items-center gap-1 font-mono uppercase font-bold tracking-wider rounded-xs border bg-[#F5F1E8] border-dashed border-stone-500 text-stone-800 ${sizeClasses} ${className}`}>
            <Sparkles className="w-3 h-3 text-stone-600" />
            <span>{label || "PROTOTYPE"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
      case "PLANNED":
      default:
        return (
          <span className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border bg-[#EEE8DD] border-stone-400 text-stone-600 ${sizeClasses} ${className}`}>
            <Clock className="w-3 h-3 text-stone-500" />
            <span>{label || "PLANNED"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
    }
  }

  // Research Verification Statuses
  switch (norm) {
    case "DIRECTLY_CONFIRMED":
    case "AGENCY_CONFIRMED":
      return (
        <span className={`inline-flex items-center gap-1 font-mono uppercase font-bold tracking-wider rounded-xs border bg-[#E8F3EB] border-[#2D5A3D] text-[#2D5A3D] ${sizeClasses} ${className}`}>
          <ShieldCheck className="w-3 h-3 text-[#2D5A3D]" />
          <span>{label || "DIRECTLY CONFIRMED"}{timestamp ? ` · ${timestamp}` : ""}</span>
        </span>
      );
    case "PRIMARY_SOURCE_VERIFIED":
    case "OFFICIAL_SOURCE_CHECKED":
    case "STATUTORY_RIGHT":
      return (
        <span className={`inline-flex items-center gap-1 font-mono uppercase font-bold tracking-wider rounded-xs border bg-[#EEE8DD] border-[#1C1D1D] text-[#1C1D1D] ${sizeClasses} ${className}`}>
          <Scale className="w-3 h-3 text-[#1C1D1D]" />
          <span>{label || "PRIMARY SOURCE VERIFIED"}{timestamp ? ` · ${timestamp}` : ""}</span>
        </span>
      );
    case "PUBLIC_SOURCE_CHECKED":
    case "WEB_VERIFIED":
      return (
        <span className={`inline-flex items-center gap-1 font-mono uppercase font-bold tracking-wider rounded-xs border bg-[#F5F1E8] border-stone-600 text-stone-800 ${sizeClasses} ${className}`}>
          <FileText className="w-3 h-3 text-stone-700" />
          <span>{label || "PUBLIC SOURCE CHECKED"}{timestamp ? ` · ${timestamp}` : ""}</span>
        </span>
      );
    case "TEMPORARILY_CLOSED":
    case "WAITLIST":
      return (
        <span className={`inline-flex items-center gap-1 font-mono uppercase font-bold tracking-wider rounded-xs border bg-[#FDF2F2] border-[#971F26] text-[#971F26] ${sizeClasses} ${className}`}>
          <AlertCircle className="w-3 h-3 text-[#971F26]" />
          <span>{label || "TEMPORARILY CLOSED"}{timestamp ? ` · REOPENS ${timestamp}` : ""}</span>
        </span>
      );
    case "UNCONFIRMED":
    case "CALL_TO_CONFIRM":
    default:
      return (
        <span className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border bg-[#FFFDF5] border-amber-800 text-amber-900 ${sizeClasses} ${className}`}>
          <AlertTriangle className="w-3 h-3 text-amber-800" />
          <span>{label || "UNCONFIRMED"}{timestamp ? ` · ${timestamp}` : ""}</span>
        </span>
      );
  }
}
