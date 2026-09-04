/**
 * MAPS WITH TEETH — PHASE 2 PRESENTATION ADAPTER
 * 
 * Adapts frozen Phase 1 canonical ContinuityReceipt data into survivor-facing
 * display copy and accessibility labels without modifying underlying Phase 1 semantics.
 */

import { ContinuityReceipt } from "../continuity/types";

export interface PresentationBadge {
  label: string;
  style: string;
}

/**
 * Returns formatted status badges for a route card.
 */
export function getPresentedBadges(receipt: ContinuityReceipt): {
  tierBadge: PresentationBadge;
  readinessBadge: PresentationBadge | null;
} {
  // Primary Tier Badge
  let tierBadge: PresentationBadge = {
    label: "WORTH CHECKING",
    style: "bg-[#FEF3C7] text-[#92400E] border-[#D97706]",
  };

  if (receipt.routeTier === "STRONG_ROUTE") {
    tierBadge = {
      label: "GOOD ROUTE",
      style: "bg-[#E8F3EB] text-[#2D5A3D] border-[#2D5A3D]",
    };
  } else if (receipt.routeTier === "CONDITIONAL_ROUTE") {
    tierBadge = {
      label: "WORTH CHECKING",
      style: "bg-[#FEF3C7] text-[#92400E] border-[#D97706]",
    };
  } else if (receipt.routeTier === "POSSIBLE_ROUTE") {
    tierBadge = {
      label: "MORE INFO NEEDED",
      style: "bg-[#F3E8FF] text-[#6B21A8] border-[#9333EA]",
    };
  } else if (receipt.routeTier === "BLOCKED") {
    tierBadge = {
      label: "HAS A BLOCKER",
      style: "bg-[#FEE2E2] text-[#991B1B] border-[#DC2626]",
    };
  }

  // Derived Readiness / Capacity Sub-badge
  let readinessBadge: PresentationBadge | null = null;

  if (receipt.routeTier === "STRONG_ROUTE") {
    if (receipt.readinessStatus === "READY") {
      readinessBadge = {
        label: "READY TO TRY",
        style: "bg-[#E8F3EB] text-[#2D5A3D] border-[#2D5A3D]",
      };
    } else if (receipt.readinessStatus === "MISSING_DOCUMENTATION") {
      readinessBadge = {
        label: "DOCUMENTATION STILL NEEDED",
        style: "bg-[#FEF3C7] text-[#92400E] border-[#D97706]",
      };
    }
  } else if (receipt.routeTier === "CONDITIONAL_ROUTE") {
    if (receipt.availabilityStatus === "UNKNOWN") {
      readinessBadge = {
        label: "DIRECTORY · LIVE CAPACITY UNCONFIRMED",
        style: "bg-[#F5F1E8] text-stone-700 border-[#D9D1C4]",
      };
    } else {
      readinessBadge = {
        label: "AVAILABILITY / DISCRETION VARIES",
        style: "bg-[#FEF3C7] text-[#92400E] border-[#D97706]",
      };
    }
  } else if (receipt.routeTier === "POSSIBLE_ROUTE") {
    readinessBadge = {
      label: "UNKNOWN FACT TO CLARIFY",
      style: "bg-[#F3E8FF] text-[#6B21A8] border-[#9333EA]",
    };
  }

  return { tierBadge, readinessBadge };
}

/**
 * Returns survivor-facing follow-up timeline text with completed-request qualification.
 */
export function getPresentedFollowUpTimeline(receipt: ContinuityReceipt): string {
  if (receipt.resourceId === "safe-connections-act-separation") {
    return "After receiving a completed qualifying line-separation request, a covered provider generally must complete the separation within two business days. If separation is technically or operationally infeasible, different notice/timing rules can apply.";
  }
  return receipt.followUpCheckpoint;
}
