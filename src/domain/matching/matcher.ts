import {
  Resource,
  ResourceMatch,
  ResourceEligibilityCriterion,
  EvaluatedCriterion,
  MatchCertainty
} from "@/types/resource";
import { ResourceIntakeData, ResearchDocket } from "@/types/intake";
import { PUBLIC_RESOURCES } from "@/data/resources";
import { INDUSTRY_OPTIONS } from "@/data/taxonomy/industries";
import { VERIFIED_ELIGIBILITY_RULES } from "@/data/eligibilityRules";

export interface MatchResult {
  matches: ResourceMatch[];
  docket: ResearchDocket;
  breakdown: {
    likelyMatchCount: number;
    worthCheckingCount: number;
    statutoryCount: number;
    locationCount: number;
    workCount: number;
    petCount: number;
    utilityCount: number;
    telecomCount: number;
  };
}

// Evaluate a single criterion deterministically
function evaluateCriterion(
  criterion: ResourceEligibilityCriterion,
  data: ResourceIntakeData
): EvaluatedCriterion {
  const userValue = (data as any)[criterion.factKey];
  let isKnown = userValue !== undefined && userValue !== null && userValue !== "";
  let isSatisfied = false;
  let isExclusionaryTriggered = false;
  let auditExplanation = "";

  if (!isKnown) {
    return {
      criterion,
      isSatisfied: false,
      isKnown: false,
      isExclusionaryTriggered: false,
      userFactValue: undefined,
      auditExplanation: `Requires verification of: ${criterion.label}.`
    };
  }

  switch (criterion.operator) {
    case "BOOLEAN_TRUE":
      isSatisfied = userValue === true;
      break;
    case "BOOLEAN_FALSE":
      isSatisfied = userValue === false;
      break;
    case "EQUALS":
      if (typeof userValue === "string" && typeof criterion.expectedValue === "string") {
        isSatisfied = userValue.toLowerCase() === criterion.expectedValue.toLowerCase();
      } else {
        isSatisfied = userValue === criterion.expectedValue;
      }
      break;
    case "NOT_EQUALS":
      isSatisfied = userValue !== criterion.expectedValue;
      break;
    case "IN":
      if (Array.isArray(criterion.expectedValue)) {
        if (Array.isArray(userValue)) {
          isSatisfied = userValue.some((v) => criterion.expectedValue.includes(v));
        } else {
          isSatisfied = criterion.expectedValue.includes(userValue);
        }
      }
      break;
    case "EXISTS":
      isSatisfied = true;
      break;
    default:
      isSatisfied = false;
  }

  if (criterion.criterionType === "EXCLUSIONARY" && isSatisfied) {
    isExclusionaryTriggered = true;
  }

  return {
    criterion,
    isSatisfied,
    isKnown,
    isExclusionaryTriggered,
    userFactValue: userValue,
    auditExplanation: isSatisfied
      ? `Verified: ${criterion.label} matches program requirements.`
      : `Conflict: Reported value (${userValue}) does not meet ${criterion.label}.`
  };
}

// Build precise, factual audit sentences from actual user answers
function buildFactAuditSentence(
  resourceId: string,
  data: ResourceIntakeData,
  satisfied: EvaluatedCriterion[],
  unanswered: EvaluatedCriterion[]
): { sentence: string; triggeringFacts: string[] } {
  const triggeringFacts: string[] = [];

  // Program-specific precision sentences
  if (resourceId === "southern-smoke-foundation") {
    const facts: string[] = ["worked in food & beverage"];
    if (data.hospitalityHoursPerWeek === "30_PLUS") facts.push("average 30+ hours/week");
    if (data.hospitalityTenureMonths === "6_PLUS_MO") facts.push("6+ months in the industry");
    if (data.hospitalityCrisisWithin6Mo) facts.push("experienced an unexpected crisis within 6 months");
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts.join(", ")}. This qualifies you for direct vendor housing and emergency relief grants.`,
      triggeringFacts
    };
  }

  if (resourceId === "core-children-of-restaurant-employees") {
    const facts: string[] = ["support a dependent child"];
    if (data.hospitalityRecentWork90Days || data.currentIndustry === "restaurant-food-service") {
      facts.push("worked in food/beverage within the past 90 days");
    }
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts.join(" and ")}. This triggers CORE crisis grant evaluation outside traditional shelter networks.`,
      triggeringFacts
    };
  }

  if (resourceId === "giving-kitchen-crisis-grants") {
    const facts: string[] = ["work in food service"];
    if (data.hospitalityTenureMonths === "6_PLUS_MO") facts.push("have 6+ months tenure");
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts.join(" and ")}. Giving Kitchen pays rent and utilities directly to creditors.`,
      triggeringFacts
    };
  }

  if (resourceId === "musicares-emergency-financial") {
    const facts: string[] = ["work in the music industry"];
    if (data.musicTenureYears === "5_PLUS_YRS") facts.push("have 5+ years of music industry employment");
    if (data.musicCommercialReleases === "6_PLUS_RELEASES") facts.push("have 6+ commercial releases");
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts.join(" and ")}. MusiCares provides direct crisis grants for rent, medical, and dental care.`,
      triggeringFacts
    };
  }

  if (resourceId === "redrover-relief-safe-escape") {
    const facts: string[] = ["have a companion pet"];
    if (data.fleeingWithPet) facts.push("are escaping domestic violence with your pet");
    if (data.connectedWithDVAdvocate) facts.push("are connected with a DV shelter advocate");
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts.join(" and ")}. RedRover Safe Escape covers commercial pet boarding when emergency shelters cannot house animals.`,
      triggeringFacts
    };
  }

  if (resourceId === "safe-connections-act-separation") {
    const facts: string[] = ["share a mobile service contract with the person you are separating from"];
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts[0]}. Under federal law (47 U.S.C. § 345), carriers must separate your line within 2 business days with $0 fee and no primary account holder approval required. (Review carrier notification timing before submitting if discovery creates a safety risk).`,
      triggeringFacts
    };
  }

  if (resourceId === "tx-prop-code-92-016") {
    const facts: string[] = ["have a residential lease in Texas"];
    if (data.hasDocumentationForLeaseBreak) facts.push("have qualifying advocate, counselor, or protective documentation");
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts.join(" and ")}. Texas Property Code § 92.016 gives you the statutory right to terminate your lease immediately without future rent liability.`,
      triggeringFacts
    };
  }

  if (resourceId === "puc-subst-r-25-478") {
    const facts: string[] = ["have a Texas electric utility account"];
    if (data.hasSurvivorVerificationLetter) facts.push("have a victim certification letter");
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts.join(" and ")}. Texas PUC Rule § 25.478 prohibits retail electric providers from charging you a security deposit.`,
      triggeringFacts
    };
  }

  if (resourceId === "mckinney-vento-liaison") {
    const facts: string[] = ["have a child enrolled in public school"];
    if (data.childLacksFixedRegularNighttimeResidence) facts.push("are experiencing housing instability or displacement");
    triggeringFacts.push(...facts);
    return {
      sentence: `You told us you ${facts.join(" and ")}. McKinney-Vento mandates immediate school enrollment and transportation rights.`,
      triggeringFacts
    };
  }

  if (resourceId === "austin-pets-alive-pass") {
    triggeringFacts.push("have a pet in Central Texas");
    return {
      sentence: "You told us you have a companion animal in Central Texas. Austin Pets Alive PASS provides resource navigation, food, and rehoming assistance.",
      triggeringFacts
    };
  }

  // Fallback factual synthesis
  const satLabels = satisfied.map((s) => s.criterion.label);
  if (satLabels.length > 0) {
    triggeringFacts.push(...satLabels);
    return {
      sentence: `You told us: ${satLabels.join(", ")}. This matches verified program criteria.`,
      triggeringFacts
    };
  }

  return {
    sentence: `Surfaced based on your verified location and reported barriers.`,
    triggeringFacts: ["Location and Barrier Match"]
  };
}

export function matchIntakeToResources(data: ResourceIntakeData): MatchResult {
  const matches: ResourceMatch[] = [];
  const matchedResourceIds = new Set<string>();

  const isTexas = data.state === "TX" || data.state?.toLowerCase() === "texas";
  const countyNormalized = data.county?.toLowerCase() || "";

  // 1. Evaluate Candidate Resources with Verified Structured Rules
  PUBLIC_RESOURCES.forEach((resource) => {
    const rules = VERIFIED_ELIGIBILITY_RULES[resource.id];
    if (!rules || rules.length === 0) return;

    // Check if at least ONE triggering fact is present for this candidate family
    const hasAnyTrigger = rules.some((rule) => {
      const val = (data as any)[rule.factKey];
      return val !== undefined && val !== null && val !== "" && val !== false;
    });

    // Special trigger checks for compound families:
    // If food service selected -> triggers Southern Smoke, CORE, Giving Kitchen
    const isFoodWorker =
      data.currentIndustry === "restaurant-food-service" ||
      data.recentIndustries?.includes("restaurant-food-service") ||
      data.hospitalityRecentWork90Days === true;

    if (!hasAnyTrigger && !isFoodWorker) {
      return; // "No identified qualifier = no resource suggestion."
    }

    const evaluatedCriteria: EvaluatedCriterion[] = [];
    const satisfiedCriteria: EvaluatedCriterion[] = [];
    const unansweredCriteria: EvaluatedCriterion[] = [];
    const exclusionaryCriteria: EvaluatedCriterion[] = [];
    let hasConflictingRequired = false;

    rules.forEach((rule) => {
      const evalResult = evaluateCriterion(rule, data);
      evaluatedCriteria.push(evalResult);

      if (evalResult.isExclusionaryTriggered) {
        exclusionaryCriteria.push(evalResult);
      } else if (evalResult.isSatisfied) {
        satisfiedCriteria.push(evalResult);
      } else if (!evalResult.isKnown) {
        unansweredCriteria.push(evalResult);
      } else if (rule.criterionType === "REQUIRED") {
        hasConflictingRequired = true;
      }
    });

    // Determine Matching State
    let certainty: MatchCertainty;

    const isFullyActiveVerified = resource.verificationStatus === "ACTIVE_VERIFIED";

    if (hasConflictingRequired || exclusionaryCriteria.length > 0) {
      certainty = "FILTERED_OUT";
    } else if (
      resource.verificationStatus === "PAUSED" ||
      resource.verificationStatus === "TEMPORARILY_CLOSED" ||
      resource.verificationStatus === "ACTIVE_PARTIALLY_VERIFIED" ||
      resource.verificationStatus === "CONDITIONAL"
    ) {
      certainty = "WORTH_CHECKING";
    } else if (resource.isStatutoryRight && isFullyActiveVerified) {
      certainty = "LIKELY_MATCH";
    } else if (unansweredCriteria.length === 0 && satisfiedCriteria.length > 0 && isFullyActiveVerified) {
      certainty = "LIKELY_MATCH";
    } else if (satisfiedCriteria.length > 0) {
      certainty = "WORTH_CHECKING";
    } else {
      certainty = "NEEDS_INFORMATION";
    }

    // Do NOT display FILTERED_OUT resources in regular results
    if (certainty === "FILTERED_OUT") {
      return;
    }

    // Must have at least 1 verified satisfied or relevant condition
    if (satisfiedCriteria.length === 0 && !isFoodWorker) {
      return;
    }

    const { sentence, triggeringFacts } = buildFactAuditSentence(
      resource.id,
      data,
      satisfiedCriteria,
      unansweredCriteria
    );

    matchedResourceIds.add(resource.id);
    matches.push({
      resource,
      matchedTags: resource.matchTags || [],
      matchReason: sentence,
      matchCertainty: certainty,
      matchType: resource.isStatutoryRight ? "BARRIER_EXPENSE" : "WORK_HISTORY",
      evaluatedCriteria,
      satisfiedCriteria,
      unansweredCriteria,
      exclusionaryCriteria,
      auditSentences: [sentence],
      triggeringFacts
    });
  });

  // 2. Evaluate Texas Statutory Rights & County Level Resources
  if (isTexas) {
    PUBLIC_RESOURCES.forEach((resource) => {
      if (matchedResourceIds.has(resource.id)) return;

      // Texas Property Code § 92.016 (Statutory Lease Break)
      if (resource.id === "tx-prop-code-92-016") {
        if (data.housingStatus === "RENTAL_LEASE" || data.hasTexasLeaseAgreement || data.primaryBarriers?.includes("rent-deposit")) {
          matchedResourceIds.add(resource.id);
          const sentence = "You told us you have a residential lease in Texas and need to vacate due to family violence. Texas Property Code § 92.016 gives you the statutory right to terminate your lease immediately without future rent liability.";
          matches.push({
            resource,
            matchedTags: ["TEXAS", "STATUTORY_RIGHT", "LEASE_BREAK"],
            matchReason: sentence,
            matchCertainty: "LIKELY_MATCH",
            matchType: "BARRIER_EXPENSE",
            triggeringFacts: ["Texas Residential Lease", "Family Violence Relocation"]
          });
        }
      }

      // Texas PUC § 25.478 (Electric Utility Deposit Waiver)
      if (resource.id === "puc-subst-r-25-478") {
        if (data.primaryBarriers?.includes("utility-deposit") || data.electricUtilityInTexas) {
          matchedResourceIds.add(resource.id);
          const sentence = "You told us you are establishing electric utility service in Texas. Texas PUC Subst. R. § 25.478 prohibits electric providers from charging you a security deposit if you provide a survivor certification letter.";
          matches.push({
            resource,
            matchedTags: ["TEXAS", "STATUTORY_RIGHT", "UTILITY_WAIVER"],
            matchReason: sentence,
            matchCertainty: "LIKELY_MATCH",
            matchType: "BARRIER_EXPENSE",
            triggeringFacts: ["Texas Electric Account", "Survivor Deposit Protection"]
          });
        }
      }

      // County Specific Programs (Travis, Williamson, Harris)
      if (countyNormalized && resource.county) {
        if (resource.county.toLowerCase().includes(countyNormalized) || countyNormalized.includes(resource.county.toLowerCase())) {
          matchedResourceIds.add(resource.id);
          const sentence = `You told us you are in ${resource.county} County, TX. This local program provides county-funded emergency stabilization and housing support.`;
          matches.push({
            resource,
            matchedTags: ["TEXAS", `${resource.county.toUpperCase()}_COUNTY`],
            matchReason: sentence,
            matchCertainty: "WORTH_CHECKING",
            matchType: "LOCATION",
            triggeringFacts: [`${resource.county} County Residency`]
          });
        }
      }
    });
  }

  // 3. Evaluate Telecom Line Separation (Federal Safe Connections Act)
  if (data.sharedCellularPlan || data.sharesMobileContractWithAbuser || data.primaryBarriers?.includes("phone-tech-safety")) {
    const sca = PUBLIC_RESOURCES.find((r) => r.id === "safe-connections-act-separation" || r.id === "fcc-safe-connections-act");
    if (sca && !matchedResourceIds.has(sca.id)) {
      matchedResourceIds.add(sca.id);
      const sentence = "You told us you share a mobile service plan with the person you are separating from. Under the federal Safe Connections Act (47 U.S.C. § 345), carriers must separate your line within 2 business days with zero penalty fees and no account holder approval required. (Review carrier notification timing for safety).";
      matches.push({
        resource: sca,
        matchedTags: ["FEDERAL", "PHONE", "STATUTORY_RIGHT"],
        matchReason: sentence,
        matchCertainty: "LIKELY_MATCH",
        matchType: "BARRIER_EXPENSE",
        triggeringFacts: ["Shared Mobile Service Contract"]
      });
    }
  }

  // 4. Evaluate Public School Protections (McKinney-Vento)
  if (data.childInPublicSchool && (data.childLacksFixedRegularNighttimeResidence || data.housingStatus === "DOUBLED_UP_TEMPORARY" || data.housingStatus === "SHELTER")) {
    const mv = PUBLIC_RESOURCES.find((r) => r.id === "mckinney-vento-liaison");
    if (mv && !matchedResourceIds.has(mv.id)) {
      matchedResourceIds.add(mv.id);
      const sentence = "You told us you have a child enrolled in public school and are experiencing housing instability. Under the federal McKinney-Vento Act, your child has the right to immediate school enrollment and school-of-origin transportation protections.";
      matches.push({
        resource: mv,
        matchedTags: ["FEDERAL", "PUBLIC_SCHOOL", "EDUCATION_RIGHT"],
        matchReason: sentence,
        matchCertainty: "LIKELY_MATCH",
        matchType: "FAMILY",
        triggeringFacts: ["Child in Public School", "Housing Instability"]
      });
    }
  }

  // Sort matches: LIKELY_MATCH first, then WORTH_CHECKING, then NEEDS_INFORMATION
  matches.sort((a, b) => {
    const rank = {
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
  if (data.sharedCellularPlan || data.sharesMobileContractWithAbuser) {
    resourceLevers.push({
      lever: "Shared Mobile Cellular Contract",
      whyItMatters: "Unlocks federal statutory right to immediate mobile line separation under 47 U.S.C. § 345."
    });
  }
  if (isTexas && (data.housingStatus === "RENTAL_LEASE" || data.hasTexasLeaseAgreement)) {
    resourceLevers.push({
      lever: "Texas Residential Dwelling Lease",
      whyItMatters: "Unlocks statutory right to vacate without future rent liability under Tex. Prop. Code § 92.016."
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
    locationCount: matches.filter((m) => m.matchType === "LOCATION").length,
    workCount: matches.filter((m) => m.matchType === "WORK_HISTORY").length,
    petCount: matches.filter((m) => m.matchType === "PET").length,
    utilityCount: matches.filter((m) => m.resource.barrierCategories?.includes("utility-deposit") || m.resource.barrierCategories?.includes("UTILITY")).length,
    telecomCount: matches.filter((m) => m.resource.id.includes("connection") || m.resource.id.includes("phone")).length
  };

  return { matches, docket, breakdown };
}
