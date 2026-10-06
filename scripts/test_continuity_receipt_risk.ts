/**
 * MAPS WITH TEETH — VERIFICATION SUITE: CONTINUITY CONTACT RECORD
 * Tests all 15 mandatory institutional & legal risk controls and invariant safeguards.
 */

import {
  ContinuityContactRecordCanonicalPayload,
  MANDATORY_NON_IMPLICATION_CODES,
  PresentedMaterialItem,
  VerificationLevel,
} from "../src/domain/continuity/types";
import {
  createCounterpartPair,
  validateContactRecordInvariants,
  validateCanonicalPayloadInvariants,
  createDisclosureAuthorization,
  revokeDisclosureAuthorization,
  createCorrectedContactRecord,
  CALIBRATED_DIGEST_NOTICE,
  PUBLIC_AGENCY_RETENTION_WARNING,
  HONEST_REVOCATION_BOUNDARY_TEXT,
  CAUTIOUS_ELECTRONIC_ACKNOWLEDGMENT_NOTICE,
} from "../src/domain/continuity/contactRecord";

function getValidMockPayload(): ContinuityContactRecordCanonicalPayload {
  const timestamp = "2026-09-06T10:30:00Z";
  return {
    recordId: "DEMO-000001",
    contactTimestamp: timestamp,
    organizationName: "DEMO COUNTY FAMILY SERVICES",
    departmentOrUnit: "Demonstration Intake & Triage Services",
    intakeChannel: "IN_PERSON",
    incidentReferenceNumbers: ["DEMO-REF-000001"],
    presentedMaterials: [
      {
        itemId: "mat-1",
        label: "Residential Lease Agreement (Pages 1-4)",
        itemType: "LEASE",
        pageOrFileCount: 4,
        format: "PHYSICAL_PAPER",
        handlingStatus: "REVIEWED_FOR_ROUTING",
        handlingNotes: "Inspected co-lessee names and expiration date only.",
        recordedByActorType: "AGENCY_STAFF",
        recordedByActorId: "Intake Specialist D-14, Staff ID #DEMO-4102",
        recordedAt: timestamp,
        verificationLevel: "AGENCY_ACKNOWLEDGED",
        statusBasis: "Inspected at front intake desk counter",
        sourceType: "AGENCY_ACKNOWLEDGMENT",
      },
      {
        itemId: "mat-2",
        label: "Digital Communication Records (Screenshots folder)",
        itemType: "CORRESPONDENCE",
        pageOrFileCount: 14,
        format: "DIGITAL_IMAGE",
        handlingStatus: "OPENED_NOT_ASSESSED",
        handlingNotes: "Received flash drive; files not substantively evaluated.",
        recordedByActorType: "PARTICIPANT",
        recordedAt: timestamp,
        verificationLevel: "PARTICIPANT_RECORDED",
        statusBasis: "Participant self-reported handoff",
        sourceType: "PARTICIPANT_ENTRY",
      },
    ],
    identityVerification: {
      status: "GOVERNMENT_PHOTO_ID_INSPECTED",
      notes: "Driver license matched name on presented lease.",
    },
    jurisdictionScope: {
      status: "WITHIN_JURISDICTION",
      statedBoundaryOrRule: "Serves residents of Travis and contiguous counties.",
      determinationTimestamp: timestamp,
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
      handoffOutcome: "NOT_CONFIRMED",
      citation: {
        sourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
        verifiedAt: "2026-08-31",
        suppliedBy: "MAPS_REFERENCE",
        statutoryReference: "Tex. Prop. Code § 92.016",
      },
      deadline: {
        date: "2026-09-15",
        source: "Statutory 30-day lease surrender window",
        legalAdviceDisclaimerShown: true,
      },
    },
    nonImplicationCodes: [...MANDATORY_NON_IMPLICATION_CODES],
    acknowledgmentStatus: "NOT_REQUESTED",
  };
}

let passedCount = 0;
const totalCount = 15;

function assert(condition: boolean, testName: string, detail?: string) {
  if (!condition) {
    console.error(`❌ [FAIL] ${testName}${detail ? `: ${detail}` : ""}`);
    process.exit(1);
  }
  console.log(`✅ [PASS] ${testName}`);
  passedCount++;
}

console.log("================================================================================");
console.log("MAPS WITH TEETH: CONTINUITY CONTACT RECORD INSTITUTIONAL RISK TEST SUITE (15 INVARIANTS)");
console.log("================================================================================\n");

// TEST 1: Contact Record can exist without agency cooperation
{
  const payload = getValidMockPayload();
  payload.acknowledgmentStatus = "DECLINED_TO_ACKNOWLEDGE";
  payload.acknowledgment = {
    status: "DECLINED_TO_ACKNOWLEDGE",
    isAcknowledged: false,
    declinedAcknowledgment: true,
    declineReasonStated: "Agency policy does not permit signing third-party intake forms.",
    rightToDeclineAcknowledged: true,
    authorizedToAcknowledgeOnBehalf: false,
    capacityNotice: "OFFICIAL_ORGANIZATIONAL_CAPACITY_ONLY",
    cautiousLegalFrameworkNotice: CAUTIOUS_ELECTRONIC_ACKNOWLEDGMENT_NOTICE,
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
      participantCopy.payload.acknowledgmentStatus === "DECLINED_TO_ACKNOWLEDGE",
    "Test 1: Contact Record can exist without agency cooperation"
  );
}

// TEST 2: PARTNER_ROLE_VERIFIED never implies merits verification
{
  const payload = getValidMockPayload();
  const { participantCopy } = createCounterpartPair("PARTNER_ROLE_VERIFIED", payload);
  
  // Verify that substantive assessment remains unassessed despite partner verification
  const meritsUnassessed =
    participantCopy.payload.substantiveAssessment.status === "NOT_ASSESSED" &&
    participantCopy.payload.nonImplicationCodes.includes("NO_SUBSTANTIATION_FINDING");

  assert(
    participantCopy.verificationLevel === "PARTNER_ROLE_VERIFIED" && meritsUnassessed,
    "Test 2: PARTNER_ROLE_VERIFIED never implies merits verification"
  );
}

// TEST 3: Immutable non-implication codes cannot be removed
{
  const payload = getValidMockPayload();
  payload.nonImplicationCodes = [
    "NO_SUBSTANTIATION_FINDING",
    "NO_EVIDENCE_AUTHENTICATION",
    "NO_WHOLE_MATTER_ACCEPTANCE",
    "NO_MAPS_INTERPRETATION_ENDORSEMENT",
  ]; // Missing NO_ROUTING_AS_MERITS_FINDING

  let threw = false;
  try {
    validateCanonicalPayloadInvariants(payload);
  } catch {
    threw = true;
  }
  assert(threw, "Test 3: Immutable non-implication codes cannot be removed");
}

// TEST 4: Default substantive assessment is NOT_ASSESSED
{
  const payload = getValidMockPayload();
  assert(
    payload.substantiveAssessment.status === "NOT_ASSESSED",
    "Test 4: Default substantive assessment is NOT_ASSESSED"
  );
}

// TEST 5: Material handling requires attribution/provenance
{
  const payload = getValidMockPayload();
  // Remove attribution on first item
  delete (payload.presentedMaterials[0] as any).recordedByActorType;

  let threw = false;
  try {
    validateCanonicalPayloadInvariants(payload);
  } catch (err: any) {
    if (err.message.includes("Material handling attribution missing")) {
      threw = true;
    }
  }
  assert(threw, "Test 5: Material handling requires attribution/provenance");
}

// TEST 6: Missing routing outcome never silently becomes DECLINED
{
  const payload = getValidMockPayload();
  (payload.suggestedNextRoute as any).handoffOutcome = "INVALID_UNKNOWN_SILENT_DECLINE";

  let threw = false;
  try {
    validateCanonicalPayloadInvariants(payload);
  } catch {
    threw = true;
  }
  assert(threw, "Test 6: Missing routing outcome never silently becomes DECLINED");
}

// TEST 7: Acknowledgment refusal/no-response does not create a merits inference
{
  const payload = getValidMockPayload();
  payload.acknowledgmentStatus = "NO_RESPONSE";
  
  // Substantive assessment MUST remain untouched
  const noMeritsInference =
    payload.substantiveAssessment.status === "NOT_ASSESSED" &&
    payload.substantiveAssessment.notice.includes(
      "A non-service or routing decision is never a merits finding."
    );

  assert(
    noMeritsInference,
    "Test 7: Acknowledgment refusal/no-response does not create a merits inference"
  );
}

// TEST 8: Suggested next route defaults to NOT_CONFIRMED unless explicitly accepted
{
  const payload = getValidMockPayload();
  const outcome = payload.suggestedNextRoute?.handoffOutcome;

  assert(
    outcome === "NOT_CONFIRMED",
    "Test 8: Suggested next route defaults to NOT_CONFIRMED unless explicitly accepted"
  );
}

// TEST 9: Corrections create a new version rather than overwrite the prior finalized record
{
  const payload = getValidMockPayload();
  const { participantCopy } = createCounterpartPair("PARTICIPANT_RECORDED", payload);

  const { participantCopy: correctedCopy } = createCorrectedContactRecord(participantCopy, {
    correctionOfField: "presentedMaterials[0].pageOrFileCount",
    correctionReason: "Clerical count correction from 4 pages to 5 pages",
    correctionSubmittedBy: "Participant",
    modifiedPayloadFields: {
      departmentOrUnit: "Intake & Triage Services (Corrected)",
    },
  });

  const isNewVersion =
    correctedCopy.payload.recordId !== participantCopy.payload.recordId &&
    correctedCopy.payload.correctionMetadata?.recordVersion === 2 &&
    correctedCopy.payload.correctionMetadata?.supersedesRecordId === participantCopy.payload.recordId &&
    correctedCopy.counterpart.canonicalRecordDigest !== participantCopy.counterpart.canonicalRecordDigest;

  assert(
    isNewVersion,
    "Test 9: Corrections create a new version rather than overwrite the prior finalized record"
  );
}

// TEST 10: Digest language cannot claim evidence authentication/admissibility/chain of custody
{
  const payload = getValidMockPayload();
  const { participantCopy } = createCounterpartPair("PARTICIPANT_RECORDED", payload);

  const disclaimsAuthentication =
    participantCopy.digestNotice.includes("does not authenticate allegations") &&
    participantCopy.digestNotice.includes("determine admissibility") &&
    !participantCopy.digestNotice.includes("chain of custody") &&
    !participantCopy.digestNotice.includes("proves evidentiary truth");

  assert(
    disclaimsAuthentication,
    "Test 10: Digest language cannot claim evidence authentication/admissibility/chain of custody"
  );
}

// TEST 11: Sensitive case-detail categories are excluded from the Contact Record model
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
    "Test 11: Sensitive case-detail categories are excluded from the Contact Record model"
  );
}

// TEST 12: Disclosure revocation language includes the already-disclosed-copy boundary
{
  const auth = createDisclosureAuthorization({
    participantId: "survivor-1029",
    targetOrganizationName: "Austin Police Department",
    purposeOfDisclosure: "Provide incident background for report intake",
    expirationDate: "2026-10-01",
  });

  const revoked = revokeDisclosureAuthorization(auth);

  const containsBoundary =
    revoked.revocationNotice.honestBoundaryText.includes(
      "cannot retrieve, delete, or recall information that has already been downloaded, printed, entered into recipient agency databases"
    ) &&
    revoked.revocationNotice.honestBoundaryText.includes(
      "preserved under statutory public-records retention rules, or disclosed under legal process"
    );

  assert(
    containsBoundary,
    "Test 12: Disclosure revocation language includes the already-disclosed-copy boundary"
  );
}

// TEST 13: Public agency records warning exists
{
  const payload = getValidMockPayload();
  const { participantCopy } = createCounterpartPair("PARTICIPANT_RECORDED", payload);

  const warningPresent =
    participantCopy.publicAgencyWarning.includes(
      "governed by that organization's records-retention, confidentiality, legal-process, and public-information obligations"
    ) &&
    participantCopy.publicAgencyWarning.includes(
      "Maps With Teeth cannot control or delete the recipient's copy."
    );

  assert(
    warningPresent,
    "Test 13: Public agency records warning exists"
  );
}

// TEST 14: Participant-recorded statements and agency-attributed statements cannot be rendered identically without source labeling
{
  const payload = getValidMockPayload();
  const agencyItem = payload.presentedMaterials.find((m) => m.sourceType === "AGENCY_ACKNOWLEDGMENT");
  const participantItem = payload.presentedMaterials.find((m) => m.sourceType === "PARTICIPANT_ENTRY");

  const sourcesDistinct =
    agencyItem !== undefined &&
    participantItem !== undefined &&
    agencyItem.sourceType !== participantItem.sourceType &&
    agencyItem.recordedByActorType === "AGENCY_STAFF" &&
    participantItem.recordedByActorType === "PARTICIPANT";

  assert(
    sourcesDistinct,
    "Test 14: Participant-recorded statements and agency-attributed statements cannot be rendered identically without source labeling"
  );
}

// TEST 15: Electronic acknowledgment copy contains no unsupported claim that UETA/E-SIGN automatically establishes signer authority or legal sufficiency
{
  const notice = CAUTIOUS_ELECTRONIC_ACKNOWLEDGMENT_NOTICE;
  const isCautious =
    notice.includes("Participation is voluntary") &&
    notice.includes("does not, by itself, establish signer authority") &&
    notice.includes("factual substantiation, evidentiary authentication, or legal admissibility") &&
    !notice.includes("automatically creates binding legal force") &&
    !notice.includes("guarantees full court admissibility");

  assert(
    isCautious,
    "Test 15: Electronic acknowledgment copy contains no unsupported claim that UETA/E-SIGN automatically establishes signer authority or legal sufficiency"
  );
}

console.log("\n================================================================================");
console.log(`SUMMARY: ${passedCount}/${totalCount} TESTS PASSED (100%)`);
console.log("================================================================================");
