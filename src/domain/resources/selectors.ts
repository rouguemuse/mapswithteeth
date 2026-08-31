import { Resource, ResourceCategory } from "./types";
import { isPubliclyDemonstrable, isActiveUsable } from "./publicationRules";

export function getPublishedResources(resources: Resource[]): Resource[] {
  return resources.filter(isPubliclyDemonstrable);
}

export function getActiveUsableResources(resources: Resource[]): Resource[] {
  return resources.filter(isActiveUsable);
}

export function getTemporarilyUnavailableResources(resources: Resource[]): Resource[] {
  return resources.filter(
    (r) => r.verificationStatus === "PAUSED" || r.verificationStatus === "TEMPORARILY_CLOSED"
  );
}

export function getResourcesByState(resources: Resource[], stateCode: string): Resource[] {
  return resources.filter(
    (r) => r.state?.toUpperCase() === stateCode.toUpperCase() || r.scope === "TEXAS_STATEWIDE" || r.scope === "NATIONWIDE"
  );
}

export function getTexasResources(resources: Resource[]): Resource[] {
  return resources.filter(
    (r) => r.state === "TX" || r.scope === "TEXAS_STATEWIDE" || r.scope === "CENTRAL_TEXAS"
  );
}

export function getNationalResources(resources: Resource[]): Resource[] {
  return resources.filter(
    (r) => r.scope === "NATIONWIDE" || r.state === "US" || !r.state
  );
}
