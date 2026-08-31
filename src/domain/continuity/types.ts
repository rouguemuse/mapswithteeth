import { ResearchDocket } from "../intake/types";
import { ResourceMatch } from "../resources/types";

export interface ContinuityHandoffPackage {
  packageId: string;
  generatedAt: string;
  docket: ResearchDocket;
  matchedRoutes: ResourceMatch[];
  verificationSnapshots: Record<string, string>;
  privacyNotice: string;
}
