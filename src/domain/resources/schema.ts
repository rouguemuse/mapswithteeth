import { Resource } from "./types";

export function validateResource(resource: Partial<Resource>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!resource.id) errors.push("Resource id is required");
  if (!resource.name) errors.push("Resource name is required");
  if (!resource.organization) errors.push("Resource organization is required");
  if (!resource.category) errors.push("Resource category is required");
  if (!resource.sourceUrl) errors.push("sourceUrl is required");
  if (!resource.primaryAuthoritativeSource) errors.push("primaryAuthoritativeSource is required");
  return { valid: errors.length === 0, errors };
}
