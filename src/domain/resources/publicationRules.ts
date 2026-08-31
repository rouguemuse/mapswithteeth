import { Resource, VerificationStatus } from "./types";

export const PUBLIC_VERIFICATION_STATUSES: VerificationStatus[] = [
  "ACTIVE_VERIFIED",
  "ACTIVE_PARTIALLY_VERIFIED",
  "PAUSED",
  "TEMPORARILY_CLOSED",
  "OFFICIAL_SOURCE_CHECKED",
  "AGENCY_CONFIRMED",
  "PUBLIC_SOURCE_CHECKED"
];

export function isPubliclyDemonstrable(resource: Resource): boolean {
  if (resource.isLead) return false;
  return PUBLIC_VERIFICATION_STATUSES.includes(resource.verificationStatus);
}

export function isActiveUsable(resource: Resource): boolean {
  if (!isPubliclyDemonstrable(resource)) return false;
  return resource.verificationStatus !== "PAUSED" && resource.verificationStatus !== "TEMPORARILY_CLOSED";
}

export function isFullyActiveVerified(resource: Resource): boolean {
  return (
    resource.verificationStatus === "ACTIVE_VERIFIED" ||
    resource.verificationStatus === "AGENCY_CONFIRMED" ||
    resource.verificationStatus === "OFFICIAL_SOURCE_CHECKED"
  );
}
