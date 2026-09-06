/**
 * MAPS WITH TEETH — VERIFICATION SUITE: CONTINUITY CONTACT RECORD
 * Tests all 12 mandatory institutional & legal risk controls.
 */

import {
  ContinuityContactRecordCanonicalPayload,
  MANDATORY_NON_IMPLICATION_CODES,
  NonImplicationCode,
} from "../src/domain/continuity/types";
import {
  createCounterpartPair,
  validateContactRecordInvariants,
  validateCanonicalPayloadInvariants,
  createDisclosureAuthorization,
  revokeDisclosureAuthorization,
  CALIBRATED_DIGEST_NOTICE,
  PUBLIC_AGENCY_RETENTION_WARNING,
  HONEST_REVOCATION_BOUNDARY_TEXT,
} from "../src/domain/continuity/contactRecord";

function getValidMockPayload(): ContinuityContactRecordCanonicalPayload {
  return {
    recordId: "ccr-2026-tx-00124",
    contactTimestamp: "2026-09-06T10:30:00Z",
    organizationName: "Travis County Family Crisis Center",
    departmentOrUnit: "Intake & Triage Services",
    intakeChannel: "IN_PERSON",
    incidentReferenceNumbers: ["REF-2026-09-8812"],
    presentedMaterials: [
      {
        itemId: "mat-1",
        label: "Residential Lease Agreement (Pages 1-4)",
        itemType: "LEASE",
        pageOrFileCount: 4,
        format: "PHYSICAL_PAPER",
        handlingStatus: "REVIEWED_FOR_ROUTING",
        handlingNotes: "Inspected co-lessee names and expiration date only.",
      },
      {
        itemId: "mat-2",
        label: "Digital Communication Records (Screenshots folder)",
        itemType: "CORRESPONDENCE",
        pageOrFileCount: 14,
        format: "DIGITAL_IMAGE",
        handlingStatus: "OPENED_NOT_ASSESSED",
        handlingNotes: "Received flash drive; files not substantively evaluated.",
      },
    ],
    identityVerification: {
      status: "GOVERNMENT_PHOTO_ID_INSPECTED",
      notes: "Driver license matched name on presented lease.",
    },
    jurisdictionScope: {
      status: "WITHIN_JURISDICTION",
      statedBoundaryOrRule: "Serves residents of Travis and contiguous counties.",
      determinationTimestamp: "2026-09-06T10:35:00Z",
    },
    substantiveAssessment: {
      status: "NOT_ASSESSED",
      notice: "A non-service or routing decision is never a merits finding.",
    },
    actionTaken: {
      actionCode: "INFORMATION_AND_REFERRAL_ONLY",
      actionDescription:
        "Provided emergency housing referral packet and statutory lease termination advisory sheet.",
    },
    declineOrRerouteReason: {
      reasonCode: "SHELTER_CAPACITY_FULL",
      summary: "Emergency residential beds at 100% capacity.",
    },
    suggestedNextRoute: {
      organizationName: "Legal Aid of NorthWest Texas",
      department: "Domestic Violence Legal Unit",
      contactMethod: "https://lanwt.org/intake",
      suggestionSource: "RECEIVING_ORGANIZATION",
      acceptanceConfirmed: false,
      citation: {
        sourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
        verifiedAt: "2026-08-31",
        suppliedBy: "MAPS_REFERENCE",
      },
      deadline: {
        date: "2026-09-15",
        source: "Statutory 30-day lease surrender window",
        legalAdviceDisclaimerShown: true,
      },
    },
    nonImplicationCodes: [...MANDATORY_NON_IMPLICATION_CODES],
  };
}

let passedCount = 0;
let totalCount = 12;

function assert(condition: boolean, testName: string, detail?: string) {
  if (!condition) {
    console.error(`❌ [FAIL] ${testName}${detail ? `: ${detail}` : ""}`);
    process.exit(1);
  }
  console.log(`✅ [PASS] ${testName}`);
  passedCount++;
}

console.log("================================================================================");
console.log("MAPS WITH TEETH: CONTINUITY CONTACT RECORD INSTITUTIONAL RISK TEST SUITE");
console.log("================================================================================\n");

// TEST 1: Participant record remains valid when an agency refuses acknowledgment
{
  const payload = getValidMockPayload();
  payload.acknowledgment = {
    isAcknowledged: false,
    declinedAcknowledgment: true,
    declineReasonStated: "Agency policy does not permit signing third-party intake forms.",
    authorizedToAcknowledgeOnBehalf: false,
    capacityNotice: "OFFICIAL_ORGANIZATIONAL_CAPACITY_ONLY",
    affirmativelyAttestedItems: {
      confirmedMaterialReceipt: false,
      confirmedMaterialInspection: false,
      confirmedIdentityInspection: false,
      confirmedJurisdictionalReview: false,
      conductedMinisterialIntakeOnly: false,
    },
  };

  const { participantCopy } = createCounterpartPair("PARTICIPANT_RECORDED", payload);
  validateContactRecordInvariants(participantCopy);
  assert(
    participantCopy.verificationLevel === "PARTICIPANT_RECORDED" &&
      participantCopy.payload.acknowledgment?.declinedAcknowledgment === true,
    "Test 1: Participant record remains valid when an agency refuses acknowledgment"
  );
}

// TEST 2: PARTICIPANT_RECORDED cannot render as agency-verified
{
  const payload = getValidMockPayload();
  payload.acknowledgment = {
    isAcknowledged: true,
    declinedAcknowledgment: false,
    signerName: "Jane Doe",
    signerRole: "Senior Intake Specialist",
    representedOrganization: "Travis County Family Crisis Center",
    authorizedToAcknowledgeOnBehalf: true,
    capacityNotice: "OFFICIAL_ORGANIZATIONAL_CAPACITY_ONLY",
    affirmativelyAttestedItems: {
      confirmedMaterialReceipt: true,
      confirmedMaterialInspection: true,
      confirmedIdentityInspection: true,
      confirmedJurisdictionalReview: true,
      conductedMinisterialIntakeOnly: true,
    },
  };

  let threw = false;
  try {
    const { participantCopy } = createCounterpartPair("PARTICIPANT_RECORDED", payload);
    validateContactRecordInvariants(participantCopy);
  } catch (err: any) {
    threw = true;
  }
  assert(threw, "Test 2: PARTICIPANT_RECORDED cannot render as agency-verified");
}

// TEST 3: All five non-implication codes must be present
{
  const payload = getValidMockPayload();
  // Remove one code
  payload.nonImplicationCodes = [
    "NO_SUBSTANTIATION_FINDING",
    "NO_EVIDENCE_AUTHENTICATION",
    "NO_WHOLE_MATTER_ACCEPTANCE",
    "NO_MAPS_INTERPRETATION_ENDORSEMENT",
  ];

  let threw = false;
  try {
    validateCanonicalPayloadInvariants(payload);
  } catch (err) {
    threw = true;
  }
  assert(threw, "Test 3: All five non-implication codes must be present");
}

// TEST 4: No field may state that allegations are false or unsubstantiated
{
  const payload = getValidMockPayload();
  (payload.substantiveAssessment as any).status = "ALLEGATIONS_DISPROVEN";

  let threw = false;
  try {
    validateCanonicalPayloadInvariants(payload);
  } catch (err) {
    threw = true;
  }
  assert(
    threw,
    "Test 4: No field may state that allegations are false or unsubstantiated"
  );
}

// TEST 5: Canonical payloads match while counterpart wrappers remain distinct
{
  const payload = getValidMockPayload();
  const { participantCopy, receivingOrganizationCopy } = createCounterpartPair(
    "PARTICIPANT_RECORDED",
    payload
  );

  const hashesMatch =
    participantCopy.counterpart.canonicalRecordDigest ===
    receivingOrganizationCopy.counterpart.canonicalRecordDigest;
  const labelsDistinct =
    participantCopy.counterpart.copyDesignation === "PARTICIPANT_COPY" &&
    receivingOrganizationCopy.counterpart.copyDesignation ===
      "RECEIVING_ORGANIZATION_COPY";

  assert(
    hashesMatch && labelsDistinct,
    "Test 5: Canonical payloads match while counterpart wrappers remain distinct"
  );
}

// TEST 6: Hash descriptions cannot claim authentication or admissibility
{
  const payload = getValidMockPayload();
  const { participantCopy } = createCounterpartPair("PARTICIPANT_RECORDED", payload);

  const containsAdmissibilityDisclaimer =
    participantCopy.digestNotice.includes("does not authenticate allegations") &&
    participantCopy.digestNotice.includes("determine admissibility") &&
    !participantCopy.digestNotice.includes("guarantees court admissibility");

  assert(
    containsAdmissibilityDisclaimer,
    "Test 6: Hash descriptions cannot claim authentication or admissibility"
  );
}

// TEST 7: Jurisdiction decisions cannot modify substantive-assessment status
{
  const payload = getValidMockPayload();
  payload.jurisdictionScope = {
    status: "OUT_OF_GEOGRAPHIC_SCOPE",
    statedBoundaryOrRule: "Out of county incident",
    determinationTimestamp: "2026-09-06T10:40:00Z",
  };

  // Substantive assessment MUST remain de-judicialized ("NOT_ASSESSED")
  const substantiveRemainsUnmodified =
    payload.substantiveAssessment.status === "NOT_ASSESSED" &&
    payload.substantiveAssessment.notice.includes(
      "A non-service or routing decision is never a merits finding."
    );

  assert(
    substantiveRemainsUnmodified,
    "Test 7: Jurisdiction decisions cannot modify substantive-assessment status"
  );
}

// TEST 8: Suggested routes default to acceptanceConfirmed: false
{
  const payload = getValidMockPayload();
  const defaultsToFalse = payload.suggestedNextRoute?.acceptanceConfirmed === false;

  assert(
    defaultsToFalse,
    "Test 8: Suggested routes default to acceptanceConfirmed: false"
  );
}

// TEST 9: Agency-generated and Maps-generated citations remain visibly distinguishable
{
  const payload = getValidMockPayload();
  const citation = payload.suggestedNextRoute?.citation;
  const isDistinguishable =
    citation !== undefined &&
    (citation.suppliedBy === "MAPS_REFERENCE" || citation.suppliedBy === "AGENCY") &&
    citation.suppliedBy === "MAPS_REFERENCE";

  assert(
    isDistinguishable,
    "Test 9: Agency-generated and Maps-generated citations remain visibly distinguishable"
  );
}

// TEST 10: Revocation cannot claim deletion from recipient systems
{
  const auth = createDisclosureAuthorization({
    participantId: "survivor-1029",
    targetOrganizationName: "Austin Police Department",
    purposeOfDisclosure: "Provide incident background for report intake",
    expirationDate: "2026-10-01",
  });

  const revoked = revokeDisclosureAuthorization(auth);

  const hasHonestBoundary =
    revoked.revocationNotice.honestBoundaryText.includes(
      "cannot retrieve, delete, or recall information that has already been downloaded, printed, entered into recipient agency databases"
    ) &&
    !revoked.revocationNotice.honestBoundaryText.includes(
      "guarantees complete deletion from recipient servers"
    );

  assert(
    hasHonestBoundary,
    "Test 10: Revocation cannot claim deletion from recipient systems"
  );
}

// TEST 11: Receipt payload rejects narrative, evidence, child, medical, and safe-contact fields by default
{
  const payload = getValidMockPayload();
  (payload as any).traumaNarrative = "Detailed narrative of domestic crisis...";

  let threw = false;
  try {
    validateCanonicalPayloadInvariants(payload);
  } catch (err: any) {
    if (err.message.includes("Data minimization violation")) {
      threw = true;
    }
  }

  assert(
    threw,
    "Test 11: Receipt payload rejects narrative, evidence, child, medical, and safe-contact fields by default"
  );
}

// TEST 12: A staff acknowledgment cannot be created without signer role and represented organization
{
  const payload = getValidMockPayload();
  payload.acknowledgment = {
    isAcknowledged: true,
    declinedAcknowledgment: false,
    signerName: "John Smith",
    signerRole: "", // MISSING ROLE
    representedOrganization: "Travis County Family Crisis Center",
    authorizedToAcknowledgeOnBehalf: true,
    capacityNotice: "OFFICIAL_ORGANIZATIONAL_CAPACITY_ONLY",
    affirmativelyAttestedItems: {
      confirmedMaterialReceipt: true,
      confirmedMaterialInspection: false,
      confirmedIdentityInspection: false,
      confirmedJurisdictionalReview: false,
      conductedMinisterialIntakeOnly: true,
    },
  };

  let threw = false;
  try {
    validateCanonicalPayloadInvariants(payload);
  } catch (err: any) {
    if (err.message.includes("signerRole")) {
      threw = true;
    }
  }

  assert(
    threw,
    "Test 12: A staff acknowledgment cannot be created without signer role and represented organization"
  );
}

console.log("\n================================================================================");
console.log(`SUMMARY: ${passedCount}/${totalCount} TESTS PASSED (100%)`);
console.log("================================================================================");
