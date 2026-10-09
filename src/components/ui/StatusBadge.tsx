import React from "react";
import {
  CheckCircle2,
  FileText,
  AlertTriangle,
  FlaskConical,
  Scale,
  Clock,
  ShieldCheck,
} from "lucide-react";

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
  const sizeClasses =
    size === "sm"
      ? "text-[9px] sm:text-[10px] py-0.5 px-2"
      : "text-xs py-1 px-2.5";

  // Product Lifecycle Statuses
  if (
    type === "product" ||
    ["LIVE", "ACTIVE_RESEARCH", "PILOT", "PROTOTYPE", "PLANNED"].includes(norm)
  ) {
    switch (norm) {
      case "LIVE":
        return (
          <span
            className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-[#92C6A3] bg-[#E6F1EA] text-[#1F6B38] ${sizeClasses} ${className}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F6B38]" />
            <span>{label || "LIVE"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
      case "ACTIVE_RESEARCH":
      case "ACTIVE":
        return (
          <span
            className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-mwt-black bg-mwt-ivory text-mwt-black ${sizeClasses} ${className}`}
          >
            <FlaskConical className="w-3 h-3 text-mwt-oxblood" />
            <span>{label || "ACTIVE RESEARCH"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
      case "PILOT":
        return (
          <span
            className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-[#E8B957] bg-[#FEF3D6] text-[#945700] ${sizeClasses} ${className}`}
          >
            <Clock className="w-3 h-3" />
            <span>{label || "PILOT SPECIFICATION"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
      case "PROTOTYPE":
        return (
          <span
            className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-[#B5A58E] bg-mwt-parchment text-mwt-black ${sizeClasses} ${className}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mwt-oxblood" />
            <span>{label || "WORKING PROTOTYPE"}</span>
            {timestamp && <span className="text-stone-600 font-normal">· {timestamp}</span>}
          </span>
        );
      case "PLANNED":
      default:
        return (
          <span
            className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-stone-300 bg-stone-100 text-stone-600 ${sizeClasses} ${className}`}
          >
            <span>{label || "PROPOSED REFORM"}</span>
            {timestamp && <span className="text-stone-500 font-normal">· {timestamp}</span>}
          </span>
        );
    }
  }

  // Verification Tiers
  switch (norm) {
    case "DIRECTLY_CONFIRMED":
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-[#92C6A3] bg-[#E6F1EA] text-[#1F6B38] ${sizeClasses} ${className}`}
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>{label || "DIRECTLY CONFIRMED"}</span>
        </span>
      );
    case "PRIMARY_SOURCE_VERIFIED":
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-stone-400 bg-mwt-parchment text-mwt-black ${sizeClasses} ${className}`}
        >
          <Scale className="w-3 h-3 text-mwt-oxblood" />
          <span>{label || "STATUTE VERIFIED"}</span>
        </span>
      );
    case "TEMPORARILY_CLOSED":
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-[#ECA1A9] bg-[#FBEAEC] text-[#B31B2A] ${sizeClasses} ${className}`}
        >
          <AlertTriangle className="w-3 h-3" />
          <span>{label || "TEMPORARILY PAUSED"}</span>
        </span>
      );
    case "PUBLIC_SOURCE_CHECKED":
    default:
      return (
        <span
          className={`inline-flex items-center gap-1 font-mono uppercase font-semibold tracking-wider rounded-xs border border-stone-300 bg-stone-50 text-stone-700 ${sizeClasses} ${className}`}
        >
          <FileText className="w-3 h-3" />
          <span>{label || "PUBLIC RECORD"}</span>
        </span>
      );
  }
}
