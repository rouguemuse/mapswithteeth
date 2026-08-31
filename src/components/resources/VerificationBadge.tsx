import React from "react";
import { StatusBadge, VerificationStatus } from "@/components/ui/StatusBadge";

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
  return (
    <StatusBadge
      type="verification"
      status={status}
      label={customTag}
      timestamp={reopeningDate || lastVerifiedDate}
    />
  );
}
