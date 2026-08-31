import { VerificationStatus, VerificationProvenance } from "./types";
import { Resource } from "../resources/types";

export function deriveResourceVerificationStatus(
  resource: Partial<Resource>,
  provenance?: VerificationProvenance
): VerificationStatus {
  if (resource.verificationStatus === "PAUSED" || resource.verificationStatus === "TEMPORARILY_CLOSED") {
    return resource.verificationStatus;
  }
  if (provenance?.verificationMethod === "DIRECT_AGENCY_INTERVIEW") return "AGENCY_CONFIRMED";
  if (resource.isStatutoryRight || provenance?.sourceType === "PRIMARY_STATUTE") return "ACTIVE_VERIFIED";
  if (provenance?.sourceType === "501C3_STANDARDS" || provenance?.sourceType === "GOVERNMENT_PORTAL") return "ACTIVE_VERIFIED";
  return resource.verificationStatus || "PUBLIC_SOURCE_CHECKED";
}
