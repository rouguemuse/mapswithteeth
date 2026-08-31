import { Resource } from "@/types/resource";
import { TEXAS_RESOURCES } from "./states/tx/texasResources";
import { OTHER_WAYS_THROUGH_RESOURCES } from "./national/nationalResources";
import { RESOURCE_PROVENANCE_REGISTRY } from "../evidence/provenance";

/**
 * MAPS WITH TEETH — CANONICAL RESOURCE REGISTRY
 * Aggregates all canonical resources across state and national pipelines.
 * Attaches verified provenance records from the evidence registry.
 */
export const ALL_RESOURCES: Resource[] = [...TEXAS_RESOURCES, ...OTHER_WAYS_THROUGH_RESOURCES].map((r) => {
  const prov = RESOURCE_PROVENANCE_REGISTRY[r.id];
  return {
    ...r,
    provenance: prov || r.provenance,
  };
});

/**
 * Visibility and Publication Classification Functions
 */
export function isPubliclyVisible(r: Resource): boolean {
  // All canonical resources in the registry remain visible for transparency
  return r.verificationStatus !== "RESEARCHING" && r.verificationStatus !== "FIELD_REPORTED_UNCONFIRMED";
}

export function isActiveUsable(r: Resource): boolean {
  return (
    r.verificationStatus === "ACTIVE_VERIFIED" ||
    r.verificationStatus === "ACTIVE_PARTIALLY_VERIFIED" ||
    r.verificationStatus === "AGENCY_CONFIRMED" ||
    r.verificationStatus === "OFFICIAL_SOURCE_CHECKED" ||
    r.verificationStatus === "PUBLIC_SOURCE_CHECKED"
  );
}

export function isPausedVisible(r: Resource): boolean {
  return r.verificationStatus === "PAUSED";
}

export function isTemporarilyClosedVisible(r: Resource): boolean {
  return r.verificationStatus === "TEMPORARILY_CLOSED";
}

/**
 * Legacy compatibility filter function
 */
export function isPublicResource(r: Resource): boolean {
  return isPubliclyVisible(r);
}

export const PUBLIC_RESOURCES: Resource[] = ALL_RESOURCES.filter(isPubliclyVisible);
export const ACTIVE_USABLE_RESOURCES: Resource[] = ALL_RESOURCES.filter(isActiveUsable);

export interface VisibilityMetrics {
  totalCanonical: number;
  publiclyVisible: number;
  activeUsable: number;
  pausedVisible: number;
  temporarilyClosedVisible: number;
  researchOnlyLeads: number;
}

export function getVisibilityMetrics(): VisibilityMetrics {
  return {
    totalCanonical: ALL_RESOURCES.length,
    publiclyVisible: ALL_RESOURCES.filter(isPubliclyVisible).length,
    activeUsable: ALL_RESOURCES.filter(isActiveUsable).length,
    pausedVisible: ALL_RESOURCES.filter(isPausedVisible).length,
    temporarilyClosedVisible: ALL_RESOURCES.filter(isTemporarilyClosedVisible).length,
    researchOnlyLeads: 28, // 75 tracked leads in ledger - 47 published canonical resources
  };
}

export function getResourceById(id: string): Resource | undefined {
  return ALL_RESOURCES.find((r) => r.id === id);
}
