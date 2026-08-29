import { Resource } from "@/types/resource";
import { TEXAS_RESOURCES } from "./texas";
import { OTHER_WAYS_THROUGH_RESOURCES } from "../otherWaysThrough";

export const ALL_RESOURCES: Resource[] = [
  ...TEXAS_RESOURCES,
  ...OTHER_WAYS_THROUGH_RESOURCES,
];

export function getResourceById(id: string): Resource | undefined {
  return ALL_RESOURCES.find((r) => r.id === id);
}
