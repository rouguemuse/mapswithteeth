import {
  Resource,
  ResourceMatch,
  MatchCertainty
} from "@/types/resource";
import {
  ResourceTrigger,
  ResourceRequirement,
  ResourceExclusion,
  EvaluatedRequirementResult,
  EvaluatedExclusionResult,
  EvaluatedResourceResult
} from "@/types/qualification";
import { ResourceIntakeData, ResearchDocket } from "@/types/intake";
import { PUBLIC_RESOURCES } from "./resources";
import { FACT_DEFINITIONS } from "./factsRegistry";
import { PROGRAM_QUALIFICATION_PROFILES, ProgramQualificationProfile } from "./resourceQualificationRules";
import { INDUSTRY_OPTIONS } from "./industries";

export interface MatchResult {
  matches: ResourceMatch[];
  docket: ResearchDocket;
  breakdown: {
    likelyMatchCount: number;
    worthCheckingCount: number;
    statutoryCount: number;
    workCount: number;
    petCount: number;
    utilityCount: number;
    locationCount: number;
    telecomCount: number;
  };
}

// Evaluate operator logic cleanly
export function evaluateCondition(operator: string, userValue: any, expectedValue: any): boolean {
  if (userValue === undefined || userValue === null || userValue === "") {
    return false;
  }

  switch (operator) {
    case "BOOLEAN_TRUE":
      return userValue === true;
    case "BOOLEAN_FALSE":
      return userValue === false;
    case "EQUALS":
      if (typeof userValue === "string" && typeof expectedValue === "string") {
        return userValue.toLowerCase() === expectedValue.toLowerCase();
      }
      return userValue === expectedValue;
    case "NOT_EQUALS":
      if (typeof userValue === "string" && typeof expectedValue === "string") {
        return userValue.toLowerCase() !== expectedValue.toLowerCase();
      }
      return userValue !== expectedValue;
    case "IN":
      if (Array.isArray(expectedValue)) {
        if (Array.isArray(userValue)) {
          return userValue.some((v) => expectedValue.includes(v));
        }
        return expectedValue.includes(userValue);
      }
      return false;
    case "NOT_IN":
      if (Array.isArray(expectedValue)) {
        return !expectedValue.includes(userValue);
      }
      return true;
    case "CONTAINS":
      if (Array.isArray(userValue)) {
        return userValue.includes(expectedValue);
      }
      if (typeof userValue === "string") {
        return userValue.includes(expectedValue);
      }
      return false;
    case "EXISTS":
      return true;
    default:
      return false;
  }
}

// 1. Get all candidate profiles triggered by known facts
export function getTriggeredCandidateProfiles(knownFacts: Record<string, any>): ProgramQualificationProfile[] {
  const triggered: ProgramQualificationProfile[] = [];

  Object.values(PROGRAM_QUALIFICATION_PROFILES).forEach((profile) => {
    const isTriggered = profile.triggers.some((trig) =>
      evaluateCondition(trig.operator, knownFacts[trig.fact], trig.value)
    );
    if (isTriggered) {
      triggered.push(profile);
    }
  });

  return triggered;
}

// 2. Get deduplicated list of unresolved fact keys required by triggered candidates
export function getUnresolvedFactKeys(
  candidateProfiles: ProgramQualificationProfile[],
  knownFacts: Record<string, any>
): string[] {
  const neededFactKeys = new Set<string>();

  candidateProfiles.forEach((profile) => {
    profile.requirements.forEach((req) => {
      const val = knownFacts[req.fact];
      const isResolved = val !== undefined && val !== null && val !== "";
      if (!isResolved) {
        neededFactKeys.add(req.fact);
      }
    });
  });

  return Array.from(neededFactKeys);
}

// 3. Build a precise factual audit sentence from actual user answers
function buildFactAuditSentence(
  resourceId: string,
  data: ResourceIntakeData,
  satisfiedReqs: EvaluatedRequirementResult[],
  triggeringFacts: string[]
): string {
  if (resourceId === "southern-smoke-foundation") {
    const facts: string[] = ["worked in food and beverage"];
    if (data.hospitalityWeeklyHours === "30_PLUS") facts.push("average 30+ hours per week");
    if (data.hospitalityTenureMonths === "6_PLUS_MO") facts.push("have 6+ months continuous industry tenure");
    if (data.hospitalityCrisisWithin6Mo) facts.push("experienced an unexpected crisis within 6 months");
    return `You told us you ${facts.join(", ")}. This qualifies you for direct vendor housing and emergency relief grants.`;
  }

  if (resourceId === "core-children-of-restaurant-employees") {
    const facts: string[] = ["support a dependent child"];
    if (data.hospitalityRecentWork90Days || data.currentIndustry === "restaurant-food-service") {
      facts.push("worked in food/beverage within the past 90 days");
    }
    return `You told us you ${facts.join(" and ")}. This triggers CORE crisis grant evaluation outside traditional shelter networks.`;
  }

  if (resourceId === "giving-kitchen-crisis-grants") {
    const facts: string[] = ["work in food service"];
    if (data.hospitalityTenureMonths === "6_PLUS_MO") facts.push("have 6+ continuous months tenure");
    return `You told us you ${facts.join(" and ")}. Giving Kitchen pays rent and utilities directly to creditors.`;
  }

  if (resourceId === "musicares-emergency-financial") {
    const facts: string[] = ["work in the music industry"];
    if (data.musicTenureYears === "5_PLUS_YRS") facts.push("have 5+ years of music industry employment");
    if (data.musicCommercialReleases === "6_PLUS_RELEASES") facts.push("have 6+ commercial releases");
    return `You told us you ${facts.join(" and ")}. MusiCares provides direct crisis grants for rent, medical, and dental care.`;
  }

  if (resourceId === "redrover-relief-safe-escape") {
    const facts: string[] = ["have a companion pet"];
    if (data.fleeingWithPet) facts.push("are escaping domestic violence with your pet");
    if (data.connectedWithDVAdvocate) facts.push("are connected with a DV shelter advocate");
    return `You told us you ${facts.join(" and ")}. RedRover Safe Escape covers commercial pet boarding when emergency shelters cannot house animals.`;
  }

  if (resourceId === "safe-connections-act-separation") {
    return "You told us you share a mobile service contract with the person you are separating from. Under federal law (47 U.S.C. § 345), carriers must separate your line within 2 business days with $0 fee and zero abuser notification.";
  }

  if (resourceId === "tx-prop-code-92-016") {
    const facts: string[] = ["have an active residential lease in Texas"];
    if (data.hasDocumentationForLeaseBreak) facts.push("have qualifying advocate, counselor, or protective documentation");
    return `You told us you ${facts.join(" and ")}. Texas Property Code § 92.016 gives you the statutory right to terminate your lease immediately without future rent liability.`;
  }

  if (resourceId === "puc-subst-r-25-478") {
    const facts: string[] = ["have a Texas electric utility account"];
    if (data.hasSurvivorVerificationLetter) facts.push("have a victim certification letter");
    return `You told us you ${facts.join(" and ")}. Texas PUC Rule § 25.478 prohibits retail electric providers from charging you a security deposit.`;
  }

  if (resourceId === "mckinney-vento-liaison") {
    const facts: string[] = ["have a child enrolled in public school"];
    if (data.childLacksFixedRegularNighttimeResidence) facts.push("are experiencing housing instability or displacement");
    return `You told us you ${facts.join(" and ")}. McKinney-Vento mandates immediate school enrollment and transportation rights.`;
  }

  if (resourceId === "austin-pets-alive-pass") {
    return "You told us you have a companion animal in Central Texas. Austin Pets Alive PASS provides resource navigation, pet food, and rehoming assistance.";
  }

  // Fallback audit trail from satisfied requirement labels
  if (satisfiedReqs.length > 0) {
    const labels = satisfiedReqs.map((r) => r.requirement.label);
    return `You told us: ${labels.join("; ")}. This satisfies verified program criteria.`;
  }

  return `Surfaced based on your verified location and reported barriers.`;
}

// 4. Evaluate candidate profile deterministically
export function evaluateCandidateProfile(
  profile: ProgramQualificationProfile,
  resource: Resource,
  knownFacts: Record<string, any>
): EvaluatedResourceResult {
  const triggeringFacts: string[] = [];
  profile.triggers.forEach((t) => {
    if (evaluateCondition(t.operator, knownFacts[t.fact], t.value)) {
      triggeringFacts.push(t.reason || `${t.fact}: ${knownFacts[t.fact]}`);
    }
  });

  const isTriggered = triggeringFacts.length > 0;

  // Check exclusions
  const triggeredExclusions: EvaluatedExclusionResult[] = [];
  profile.exclusions.forEach((ex) => {
    const isDisqualified = evaluateCondition(ex.operator, knownFacts[ex.fact], ex.value);
    if (isDisqualified) {
      triggeredExclusions.push({
        exclusion: ex,
        isDisqualified: true,
        userValue: knownFacts[ex.fact],
        disqualificationReason: ex.reason
      });
    }
  });

  // Check requirements
  const satisfiedRequirements: EvaluatedRequirementResult[] = [];
  const unresolvedRequirements: EvaluatedRequirementResult[] = [];
  let hasFailedRequired = false;

  profile.requirements.forEach((req) => {
    const userVal = knownFacts[req.fact];
    const isKnown = userVal !== undefined && userVal !== null && userVal !== "";

    if (!isKnown) {
      unresolvedRequirements.push({
        requirement: req,
        isSatisfied: false,
        isKnown: false,
        userValue: undefined
      });
    } else {
      const isSatisfied = evaluateCondition(req.operator, userVal, req.value);
      if (isSatisfied) {
        satisfiedRequirements.push({
          requirement: req,
          isSatisfied: true,
          isKnown: true,
          userValue: userVal
        });
      } else if (req.importance === "REQUIRED") {
        hasFailedRequired = true;
      }
    }
  });

  let matchCertainty: MatchCertainty;

  const isFullyActiveVerified =
    resource.verificationStatus === "ACTIVE_VERIFIED" ||
    resource.verificationStatus === "AGENCY_CONFIRMED" ||
    resource.verificationStatus === "OFFICIAL_SOURCE_CHECKED";

  if (triggeredExclusions.length > 0 || hasFailedRequired) {
    matchCertainty = "FILTERED_OUT";
  } else if (resource.verificationStatus === "PAUSED") {
    matchCertainty = "WORTH_CHECKING";
  } else if (resource.isStatutoryRight && isFullyActiveVerified) {
    matchCertainty = "LIKELY_MATCH";
  } else if (unresolvedRequirements.length === 0 && satisfiedRequirements.length > 0 && isFullyActiveVerified) {
    matchCertainty = "LIKELY_MATCH";
  } else if (satisfiedRequirements.length > 0 || resource.isStatutoryRight) {
    matchCertainty = "WORTH_CHECKING";
  } else {
    matchCertainty = "NEEDS_INFORMATION";
  }

  const auditSentence = buildFactAuditSentence(
    resource.id,
    knownFacts as ResourceIntakeData,
    satisfiedRequirements,
    triggeringFacts
  );

  return {
    resourceId: resource.id,
    isTriggered,
    triggeringFacts,
    matchCertainty,
    satisfiedRequirements,
    unresolvedRequirements,
    triggeredExclusions,
    auditSentences: [auditSentence],
    evidenceRequired: profile.evidenceRequired || resource.documentationRequired || []
  };
}

// 5. Main dynamic matching entrypoint
export function matchIntakeDynamically(data: ResourceIntakeData): MatchResult {
  const matches: ResourceMatch[] = [];
  const matchedResourceIds = new Set<string>();

  // 1. Evaluate profiles with resource qualification rules
  Object.values(PROGRAM_QUALIFICATION_PROFILES).forEach((profile) => {
    const resource = PUBLIC_RESOURCES.find((r) => r.id === profile.resourceId);
    if (!resource) return;

    const evaluation = evaluateCandidateProfile(profile, resource, data as any);

    if (!evaluation.isTriggered) return; // "No identified qualifier = no resource suggestion."
    if (evaluation.matchCertainty === "FILTERED_OUT") return; // Hidden from regular view

    matchedResourceIds.add(resource.id);
    matches.push({
      resource,
      matchedTags: resource.matchTags || [],
      matchReason: evaluation.auditSentences[0],
      matchCertainty: evaluation.matchCertainty,
      matchType: resource.isStatutoryRight ? "BARRIER_EXPENSE" : "WORK_HISTORY",
      auditSentences: evaluation.auditSentences,
      triggeringFacts: evaluation.triggeringFacts,
      evidenceRequired: evaluation.evidenceRequired
    });
  });

  // 2. Evaluate Texas County and Regional Programs
  const isTexas = data.state === "TX" || data.state?.toLowerCase() === "texas";
  const countyNormalized = data.county?.toLowerCase() || "";

  if (isTexas) {
    PUBLIC_RESOURCES.forEach((resource) => {
      if (matchedResourceIds.has(resource.id)) return;

      if (countyNormalized && resource.county) {
        if (
          resource.county.toLowerCase().includes(countyNormalized) ||
          countyNormalized.includes(resource.county.toLowerCase())
        ) {
          matchedResourceIds.add(resource.id);
          const sentence = `You told us you are located in ${resource.county} County, TX. This local program provides county-funded emergency stabilization and housing support.`;
          matches.push({
            resource,
            matchedTags: ["TEXAS", `${resource.county.toUpperCase()}_COUNTY`],
            matchReason: sentence,
            matchCertainty: "WORTH_CHECKING",
            matchType: "LOCATION",
            triggeringFacts: [`${resource.county} County Residency`],
            evidenceRequired: resource.documentationRequired || []
          });
        }
      }
    });
  }

  // Sort matches: LIKELY_MATCH first, then WORTH_CHECKING, then NEEDS_INFORMATION
  matches.sort((a, b) => {
    const rank: Record<MatchCertainty, number> = {
      LIKELY_MATCH: 1,
      WORTH_CHECKING: 2,
      NEEDS_INFORMATION: 3,
      FILTERED_OUT: 4
    };
    return (rank[a.matchCertainty] || 5) - (rank[b.matchCertainty] || 5);
  });

  // Compile Investigation Docket
  const locationSummary = data.county ? `${data.state} · ${data.county} County` : data.state || "National Scope";
  const docketId = Math.random().toString(36).substring(2, 8).toUpperCase();

  const resourceLevers: { lever: string; whyItMatters: string }[] = [];
  if (data.currentIndustry) {
    const ind = INDUSTRY_OPTIONS.find((i) => i.id === data.currentIndustry)?.name || data.currentIndustry;
    resourceLevers.push({
      lever: `Work History: ${ind}`,
      whyItMatters: "Unlocks industry-specific benevolence funds and non-DV emergency grants."
    });
  }
  if (data.hasDependentChildren) {
    resourceLevers.push({
      lever: "Dependent Minor Children in Household",
      whyItMatters: "Unlocks dedicated family relief funds like CORE and specialized crisis childcare."
    });
  }
  if (data.hasAnimal) {
    resourceLevers.push({
      lever: "Companion Animal Present",
      whyItMatters: "Unlocks confidential pet boarding grants (RedRover Safe Escape) and foster networks."
    });
  }
  if (data.sharedCellularPlan) {
    resourceLevers.push({
      lever: "Shared Mobile Cellular Contract",
      whyItMatters: "Unlocks federal statutory right to immediate mobile line separation under 47 U.S.C. § 345."
    });
  }

  const exhaustedPathways = (data.failedChannels || []).map((ch) => ({
    channel: ch,
    note: data.failedReason ? `Reported barrier: ${data.failedReason}` : "Previous attempt failed or exhausted"
  }));

  const docket: ResearchDocket = {
    docketId,
    createdAt: new Date().toISOString(),
    locationSummary,
    primaryBarrierSummary: (data.primaryBarriers || []).join(", ") || "Emergency Stabilization",
    requestedAmount: data.amountScale || "Unspecified",
    partialHelpAcceptable: data.partialHelpImpact === "YES",
    resourceLevers,
    exhaustedPathways,
    researchPaths: matches.map((m) => m.resource.name),
    matchedResourcesCount: matches.length
  };

  const breakdown = {
    likelyMatchCount: matches.filter((m) => m.matchCertainty === "LIKELY_MATCH").length,
    worthCheckingCount: matches.filter((m) => m.matchCertainty === "WORTH_CHECKING").length,
    statutoryCount: matches.filter((m) => m.resource.isStatutoryRight).length,
    workCount: matches.filter((m) => m.matchType === "WORK_HISTORY").length,
    petCount: matches.filter((m) => m.matchType === "PET").length,
    utilityCount: matches.filter((m) => m.resource.id.includes("utility") || m.resource.id.includes("puc")).length,
    locationCount: matches.filter((m) => m.matchType === "LOCATION").length,
    telecomCount: matches.filter((m) => m.resource.id.includes("connection") || m.resource.id.includes("phone")).length
  };

  return { matches, docket, breakdown };
}
