import { Resource, VerificationStatus } from "@/types/resource";
import { TEXAS_RESOURCES } from "./texas";
import { OTHER_WAYS_THROUGH_RESOURCES } from "../otherWaysThrough";
import { getVerificationProvenance } from "../provenanceRegistry";

export const ALL_RESOURCES: Resource[] = [
  ...TEXAS_RESOURCES,
  ...OTHER_WAYS_THROUGH_RESOURCES,
].map((r) => ({
  ...r,
  provenance: r.provenance || getVerificationProvenance(r.id),
}));

export function isPublicResource(r: Resource): boolean {
  return (
    r.verificationStatus !== "FIELD_REPORTED_UNCONFIRMED" &&
    r.verificationStatus !== "RESEARCHING" &&
    r.verificationStatus !== "STALE" &&
    r.verificationStatus !== "NEEDS_REVERIFICATION" &&
    r.verificationStatus !== "CLOSED"
  );
}

export const PUBLIC_RESOURCES: Resource[] = ALL_RESOURCES.filter(isPublicResource);

export function getResourceById(id: string): Resource | undefined {
  return ALL_RESOURCES.find((r) => r.id === id);
}
