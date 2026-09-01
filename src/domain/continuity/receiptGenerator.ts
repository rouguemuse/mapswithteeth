/**
 * MAPS WITH TEETH — DOMAIN: CONTINUITY RECEIPT GENERATOR
 * Generates survivor-controlled Continuity Receipts with transparent qualification traces,
 * required documentation checklists, and actionable next steps.
 */

import { Resource } from "@/types/resource";
import { ResourceQualificationTrace } from "../matching/types";
import { ContinuityReceipt } from "./types";
import { getVerificationProvenance } from "@/data/evidence/provenance";

export function generateContinuityReceipt(
  resource: Resource,
  trace: ResourceQualificationTrace
): ContinuityReceipt {
  const provenance = getVerificationProvenance(resource.id);

  // Determine survivor-controlled next action phrasing
  let nextAction = "";
  if (trace.matchCategory === "CONFIRMED_MATCH") {
    if (resource.isStatutoryRight) {
      nextAction = `Execute statutory remedy: Provide written notice and required documentation (${resource.statuteCitation || 'statute'}) to the landlord/utility/carrier.`;
    } else if (resource.howToApply) {
      nextAction = `Submit application directly to provider: ${resource.howToApply}`;
    } else {
      nextAction = `Initiate intake through ${resource.organization} via official portal or contact channel.`;
    }
  } else if (trace.matchCategory === "POSSIBLE_MATCH") {
    nextAction = `Clarify required prerequisite(s): Confirm ${trace.unknownFacts.slice(0, 2).join(" and ")} before submitting formal intake.`;
  } else {
    nextAction = `Review disqualifying factor: ${trace.failedBlockers.slice(0, 1).join("")}; explore alternative suggested levers.`;
  }

  // Determine what to ask or say
  let whatToSayOrAsk = "";
  if (resource.id === "tx-statute-lease-termination") {
    whatToSayOrAsk = "I am providing written notice of early lease termination pursuant to Texas Property Code § 92.016 along with the required statutory documentation.";
  } else if (resource.id === "tx-puct-utility-waiver") {
    whatToSayOrAsk = "I am requesting a residential electric deposit waiver under Public Utility Commission of Texas Substantive Rule 25.478(a)(3)(D) and have attached my victim advocate verification letter.";
  } else if (resource.id === "safe-connections-act-separation") {
    whatToSayOrAsk = "I am submitting a formal line separation request pursuant to 47 U.S.C. § 345 (Safe Connections Act) to separate my mobile line from the account holder.";
  } else if (resource.id === "face-to-face-reconstructive-surgery") {
    whatToSayOrAsk = "I am inquiring about the FACE TO FACE domestic violence program for low-cost or pro bono facial reconstructive surgery and have advocate verification of 12+ months separation.";
  } else if (resource.id === "removery-ink-tattoo-removal") {
    whatToSayOrAsk = "I am applying for the Removery INK-itiative for laser removal of a visible/trauma tattoo and have an advocate recommendation letter.";
  } else {
    whatToSayOrAsk = `I am inquiring about emergency assistance under the ${resource.name} for a domestic crisis and would like to confirm intake requirements.`;
  }

  // Processing timeline / follow-up checkpoint
  let followUpCheckpoint = "Follow up within 3–5 business days if no confirmation is received.";
  if (resource.id === "safe-connections-act-separation") {
    followUpCheckpoint = "Federal law requires wireless carriers to complete line separation within 2 business days.";
  } else if (resource.id === "usbg-bartender-emergency-assistance") {
    followUpCheckpoint = "USBG BEAP applications undergo committee review with an average approval timeline of 3–6 weeks.";
  } else if (resource.id === "entertainment-community-fund") {
    followUpCheckpoint = "Social services intake casework review typically takes 1–2 weeks.";
  } else if (resource.id === "cerf-plus-craft-emergency") {
    followUpCheckpoint = "Grantmaking suspended through September 30, 2026; resumes October 1, 2026.";
  } else if (resource.id === "operation-homefront-cfa") {
    followUpCheckpoint = "Intake opens on the 1st and closes on the 10th at 11:59 PM CST monthly; check portal for case status.";
  }

  return {
    receiptId: `receipt-${resource.id}-${Date.now().toString(36)}`,
    generatedAt: new Date().toISOString(),
    resourceId: resource.id,
    resourceName: resource.name,
    resourceType: resource.resourceType,
    provider: resource.organization,
    relevanceStatus: trace.relevanceStatus,
    relevanceReasonCode: trace.relevanceReasonCode,
    applicabilityStatus: trace.applicabilityStatus,
    eligibilityStatus: trace.eligibilityStatus,
    readinessStatus: trace.readinessStatus,
    availabilityStatus: trace.availabilityStatus,
    routeTier: trace.routeTier,
    matchCategory: trace.matchCategory,
    whyThisMayHelp: resource.whatItCanHelpWith,
    confirmedFacts: trace.confirmedFacts,
    unknownFacts: trace.unknownFacts,
    knownBlockers: trace.failedBlockers.length > 0 ? trace.failedBlockers : (resource.whatCanBlockAccess || []),
    documentsToGather: trace.missingDocumentation.length > 0 ? trace.missingDocumentation : (resource.documentationRequired || ["Photo ID", "Proof of address or crisis documentation"]),
    nextAction,
    contactMethod: resource.sourceUrl || "Official Provider Portal",
    handoffDestination: resource.organization,
    whatToSayOrAsk,
    followUpCheckpoint,
    sourceReferences: {
      sourceTitle: resource.primaryAuthoritativeSource || resource.name,
      sourceUrl: resource.sourceUrl || "https://statutes.capitol.texas.gov",
      sourceLocator: resource.statuteCitation || resource.primaryAuthoritativeSource || "Official Program Documentation",
      lastReviewed: resource.lastReviewedDate || "2026-08-31",
      semanticReviewStatus: (provenance?.claimEvidences?.[0]?.supportLevel as any) || "DIRECTLY_SUPPORTED"
    }
  };
}
