import { Resource, ResourceMatch } from "@/types/resource";
import { ResourceIntakeData, ResearchDocket } from "@/types/intake";
import { ALL_RESOURCES } from "./resources";
import { INDUSTRY_OPTIONS } from "./industries";

export interface MatchResult {
  matches: ResourceMatch[];
  docket: ResearchDocket;
  breakdown: {
    locationCount: number;
    workCount: number;
    petCount: number;
    utilityCount: number;
    nationwideCount: number;
  };
}

export function matchIntakeToResources(data: ResourceIntakeData): MatchResult {
  const matches: ResourceMatch[] = [];
  const matchedResourceIds = new Set<string>();

  const isTexas = data.state === "TX" || data.state?.toLowerCase() === "texas";
  const countyNormalized = data.county?.toLowerCase() || "";

  // 1. Check Work History Matches
  const selectedIndustries = [
    data.currentIndustry,
    ...(data.recentIndustries || []),
  ].filter(Boolean);

  const matchedWorkTags: string[] = [];
  selectedIndustries.forEach((indId) => {
    const indObj = INDUSTRY_OPTIONS.find((i) => i.id === indId);
    if (indObj) {
      matchedWorkTags.push(indObj.matchTag);
    }
  });

  ALL_RESOURCES.forEach((resource) => {
    if (matchedResourceIds.has(resource.id)) return;

    // Check Industry matches
    const hasWorkMatch = resource.matchTags.some((tag) =>
      matchedWorkTags.includes(tag)
    );
    if (hasWorkMatch) {
      matchedResourceIds.add(resource.id);
      matches.push({
        resource,
        matchedTags: resource.matchTags.filter((t) => matchedWorkTags.includes(t)),
        matchReason: `Potential match: Surfaced because you reported employment or recent work in ${resource.industrySpecific?.join(", ") || "a qualifying industry"}. Industry hardship funds operate outside standard DV networks.`,
        matchType: "WORK_HISTORY",
      });
    }
  });

  // 2. Check Pet Matches
  if (data.hasAnimal) {
    ALL_RESOURCES.forEach((resource) => {
      if (matchedResourceIds.has(resource.id)) return;

      if (resource.petSpecific || resource.matchTags.includes("PET")) {
        matchedResourceIds.add(resource.id);
        matches.push({
          resource,
          matchedTags: ["PET", "PET_BOARDING"],
          matchReason: "Potential match: Surfaced because you reported having a pet that needs safe boarding, foster care, or assistance during this transition.",
          matchType: "PET",
        });
      }
    });
  }

  // 3. Check Location & County Matches
  if (isTexas) {
    ALL_RESOURCES.forEach((resource) => {
      if (matchedResourceIds.has(resource.id)) return;

      // County specific check
      if (countyNormalized && resource.county) {
        if (resource.county.toLowerCase().includes(countyNormalized) || countyNormalized.includes(resource.county.toLowerCase())) {
          matchedResourceIds.add(resource.id);
          matches.push({
            resource,
            matchedTags: ["TEXAS", `${resource.county.toUpperCase()}_COUNTY`],
            matchReason: `Potential match: Local program serving ${resource.county} County residents for direct emergency support and stabilization.`,
            matchType: "LOCATION",
          });
          return;
        }
      }

      // Statewide Texas
      if (resource.scope === "TEXAS_STATEWIDE" && resource.state === "TX") {
        // Check barrier overlap
        const hasBarrierOverlap = resource.barrierCategories.some((b) =>
          data.primaryBarriers?.includes(b)
        );
        if (hasBarrierOverlap || data.primaryBarriers?.length === 0) {
          matchedResourceIds.add(resource.id);
          matches.push({
            resource,
            matchedTags: ["TEXAS", "TEXAS_STATEWIDE"],
            matchReason: "Potential match: Texas statewide statutory right or state-administered program applicable to your reported barriers.",
            matchType: "LOCATION",
          });
        }
      }
    });
  }

  // 4. Check Utility & Deposit Matches
  if (
    data.primaryBarriers?.includes("utility-deposit") ||
    data.acceptableSolutions?.includes("UTILITY_DEPOSIT_WAIVER")
  ) {
    ALL_RESOURCES.forEach((resource) => {
      if (matchedResourceIds.has(resource.id)) return;

      if (
        resource.assistanceShapes.includes("UTILITY_DEPOSIT_WAIVER") ||
        resource.matchTags.includes("UTILITY")
      ) {
        if (resource.state === "US" || (isTexas && resource.state === "TX")) {
          matchedResourceIds.add(resource.id);
          matches.push({
            resource,
            matchedTags: ["UTILITY", "DEPOSIT_WAIVER"],
            matchReason: "Potential match: Surfaced because you need electric/utility deposit relief or shutoff prevention.",
            matchType: "BARRIER_EXPENSE",
          });
        }
      }
    });
  }

  // 5. Check Transportation Matches
  if (
    data.primaryBarriers?.includes("gas-travel") ||
    data.primaryBarriers?.includes("car-repair-dispute") ||
    data.primaryBarriers?.includes("long-distance-relocation")
  ) {
    ALL_RESOURCES.forEach((resource) => {
      if (matchedResourceIds.has(resource.id)) return;

      if (
        resource.matchTags.includes("TRANSPORTATION") ||
        resource.matchTags.includes("VEHICLE") ||
        resource.assistanceShapes.includes("GAS_CARD") ||
        resource.assistanceShapes.includes("FREE_VEHICLE") ||
        resource.assistanceShapes.includes("BUS_TICKET")
      ) {
        if (resource.state === "US" || (isTexas && resource.state === "TX")) {
          matchedResourceIds.add(resource.id);
          matches.push({
            resource,
            matchedTags: ["TRANSPORTATION"],
            matchReason: "Potential match: Surfaced because you identified acute transportation, gas, vehicle, or relocation needs.",
            matchType: "TRANSPORTATION",
          });
        }
      }
    });
  }

  // 6. Add High-Confidence Nationwide Escape Tools
  ALL_RESOURCES.forEach((resource) => {
    if (matchedResourceIds.has(resource.id)) return;

    if (resource.scope === "NATIONWIDE" && !resource.industrySpecific) {
      const hasBarrierOverlap = resource.barrierCategories.some((b) =>
        data.primaryBarriers?.includes(b)
      );
      if (hasBarrierOverlap) {
        matchedResourceIds.add(resource.id);
        matches.push({
          resource,
          matchedTags: ["NATIONWIDE"],
          matchReason: "Potential match: Nationwide survivor protection tool or independent micro-relief foundation.",
          matchType: "NATIONWIDE",
        });
      }
    }
  });

  // Calculate Breakdown
  const breakdown = {
    locationCount: matches.filter((m) => m.matchType === "LOCATION").length,
    workCount: matches.filter((m) => m.matchType === "WORK_HISTORY").length,
    petCount: matches.filter((m) => m.matchType === "PET").length,
    utilityCount: matches.filter((m) => m.matchType === "BARRIER_EXPENSE").length,
    nationwideCount: matches.filter((m) => m.matchType === "NATIONWIDE" || m.matchType === "TRANSPORTATION").length,
  };

  // Build Structured Research Docket
  const resourceLevers: { lever: string; whyItMatters: string }[] = [];
  if (selectedIndustries.length > 0) {
    resourceLevers.push({
      lever: `Work history: ${selectedIndustries.join(", ")}`,
      whyItMatters: "Unlocks dedicated industry emergency relief funds outside DV networks (e.g. Southern Smoke, Giving Kitchen, MusiCares).",
    });
  }
  if (data.isUnionMember) {
    resourceLevers.push({
      lever: `Union membership: ${data.unionName || "Active/Recent Member"}`,
      whyItMatters: "Union benevolent funds and national hardship trusts offer strike/crisis assistance.",
    });
  }
  if (data.hasAnimal) {
    resourceLevers.push({
      lever: `Pet / Animal: ${data.animalType?.join(", ") || "Dog/Cat"}`,
      whyItMatters: "Enables pet boarding grants (RedRover Relief) and foster placement without forcing shelter entry.",
    });
  }
  if (data.childInPublicSchool) {
    resourceLevers.push({
      lever: "Dependent children enrolled in public school",
      whyItMatters: "Triggers investigation of school district family support, McKinney-Vento evaluation if nighttime housing is unstable, and district emergency funds.",
    });
  }
  if (data.transportationStatus === "NO_RELIABLE_TRANSPORT" || data.transportationStatus === "VEHICLE_UNAVAILABLE") {
    resourceLevers.push({
      lever: "Transportation deficit",
      whyItMatters: "Focus research on charitable gas vouchers, CapMetro/METRO pass partners, and Greyhound Home Free.",
    });
  }

  // Build Exhausted Pathways list
  const exhaustedPathways: { channel: string; note: string }[] = [];
  if (data.failedChannels?.length > 0) {
    data.failedChannels.forEach((ch) => {
      exhaustedPathways.push({
        channel: ch,
        note: data.failedReason ? `Reported outcome: ${data.failedReason}. Prioritize direct non-traditional alternatives.` : "Reported ineffective.",
      });
    });
  }

  // 10-Point Research Paths
  const researchPaths: string[] = [
    isTexas ? `1. Texas Statutory Protections (Lease Break § 92.016, PUCT § 25.478, CVC up to $5,000)` : `1. State-specific statutory protections for ${data.state || "target state"}`,
    data.county ? `2. ${data.county} County Community Action & Micro-aid Conferences (SVdP / CSBG)` : `2. Local municipal and county flexible emergency aid`,
    selectedIndustries.length > 0 ? `3. Direct industry hardship applications (${selectedIndustries.slice(0, 2).join(", ")})` : `3. Workforce supportive services & professional societies`,
    data.hasAnimal ? `4. RedRover Safe Escape advocate portal submission & confidential foster network` : `4. Temporary stabilization & safe stay alternatives`,
    data.childInPublicSchool ? `5. School district family resource liaison & McKinney-Vento housing evaluation` : `5. Family foundation & child crisis support`,
    `6. Safe Connections Act telecom separation (47 U.S.C. § 345) & Lifeline 6mo discount`,
    `7. PUCT / Utility provider deposit waiver letter from certified advocacy agency`,
    `8. Faith-based discretionary micro-funds (St. Vincent de Paul / Ministerial Alliances)`,
    `9. IRS IP PIN & Form 8857 Innocent Spouse tax liability separation`,
    `10. National survivor financial relief & credit rebuilding tools (FreeFrom / Modest Needs)`,
  ];

  const docket: ResearchDocket = {
    docketId: `MWT-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    locationSummary: `${data.county ? `${data.county} County, ` : ""}${data.state || "US"}`,
    primaryBarrierSummary: data.primaryBarriers?.join(", ") || "General crisis stabilization",
    requestedAmount: data.amountScale || "Unspecified",
    partialHelpAcceptable: data.partialHelpImpact === "YES" || data.partialHelpImpact === "MAYBE",
    resourceLevers,
    exhaustedPathways,
    researchPaths,
    matchedResourcesCount: matches.length,
  };

  return {
    matches,
    docket,
    breakdown,
  };
}
