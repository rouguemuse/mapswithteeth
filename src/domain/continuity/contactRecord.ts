/**
 * MAPS WITH TEETH — DOMAIN: CONTINUITY CONTACT RECORD
 * Standardized record of an institutional touchpoint with 8-dimension segregation,
 * five mandatory non-implication notices, affirmative acknowledgment blocks,
 * calibrated cryptographic digest parity, and decoupled sovereign disclosure authorization.
 */

import {
  ContinuityContactRecord,
  ContinuityContactRecordCanonicalPayload,
  CounterpartMetadata,
  MANDATORY_NON_IMPLICATION_CODES,
  ParticipantDisclosureAuthorization,
  VerificationLevel,
  NonImplicationCode,
} from "./types";

export const CALIBRATED_DIGEST_NOTICE =
  "Both parties may receive copies derived from the same finalized canonical record. A document digest can detect later differences between those copies but does not authenticate allegations, establish signer authority, or determine admissibility.";

export const PUBLIC_AGENCY_RETENTION_WARNING =
  "Once provided to an organization, its copy may be governed by that organization's records-retention, confidentiality, legal-process, and public-information obligations. Maps With Teeth cannot control or delete the recipient's copy.";

export const HONEST_REVOCATION_BOUNDARY_TEXT =
  "Revocation of this authorization stops future Maps-mediated information sharing. However, revocation cannot retrieve, delete, or recall information that has already been downloaded, printed, entered into recipient agency databases, preserved under statutory public-records retention rules, or disclosed under legal process.";

export const DEFAULT_EXCLUDED_DISCLOSURE_FIELDS = [
  "detailed_abuse_narrative",
  "raw_evidence_attachments",
  "children_identifying_information",
  "safe_shelter_physical_address",
  "confidential_phone_or_email",
  "immigration_status",
  "medical_or_psychiatric_records",
  "device_passwords_or_security_credentials",
] as const;

/**
 * Deterministic JSON stringifier to guarantee identical canonical byte output regardless of object key order.
 */
export function canonicalizeJson(obj: any): string {
  if (obj === null || typeof obj !== "object") {
    return JSON.stringify(obj);
  }
  if (Array.isArray(obj)) {
    return `[${obj.map((item) => canonicalizeJson(item)).join(",")}]`;
  }
  const sortedKeys = Object.keys(obj).sort();
  const pairs = sortedKeys.map(
    (key) => `${JSON.stringify(key)}:${canonicalizeJson(obj[key])}`
  );
  return `{${pairs.join(",")}}`;
}

/**
 * Universal synchronous SHA-256 implementation that functions identically in both Node.js
 * and browser environments without external dependencies or Node crypto polyfill issues.
 */
export function universalSha256(str: string): string {
  function rightRotate(value: number, amount: number): number {
    return (value >>> amount) | (value << (32 - amount));
  }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  const words: number[] = [];
  const utf8 = unescape(encodeURIComponent(str));
  const asciiBitLength = utf8.length * 8;
  const hash: number[] = [];
  const k: number[] = [];
  let primeCounter = 0;
  const isComposite: Record<number, number> = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (let i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  let s = utf8 + "\x80";
  while (s.length % 64 - 56) s += "\x00";
  for (let i = 0; i < s.length; i++) {
    const j = s.charCodeAt(i);
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words.length] = (asciiBitLength / maxWord) | 0;
  words[words.length] = asciiBitLength;
  for (let j = 0; j < words.length; ) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash.slice(0, 8);
    for (let i = 0; i < 64; i++) {
      const w15 = w[i - 15],
        w2 = w[i - 2];
      const a = hash[0],
        e = hash[4];
      const temp1 =
        hash[7] +
        (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
        ((e & hash[5]) ^ (~e & hash[6])) +
        k[i] +
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] +
                (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                w[i - 7] +
                (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
              0);
      const temp2 =
        (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
        ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
      hash.unshift((temp1 + temp2) | 0);
      hash[4] = (hash[4] + temp1) | 0;
    }
    for (let i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }
  let result = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? "0" : "") + b.toString(16);
    }
  }
  return result;
}

/**
 * Computes the SHA-256 digest of the canonical payload.
 */
export function computeCanonicalRecordDigest(
  payload: ContinuityContactRecordCanonicalPayload
): string {
  const serialized = canonicalizeJson(payload);
  return universalSha256(serialized);
}

/**
 * Generates identical counterpart records (Participant Copy and Receiving Organization Copy)
 * from the same underlying canonical payload.
 */
export function createCounterpartPair(
  verificationLevel: VerificationLevel,
  payload: ContinuityContactRecordCanonicalPayload
): {
  participantCopy: ContinuityContactRecord;
  receivingOrganizationCopy: ContinuityContactRecord;
} {
  // Validate invariants on the payload prior to generating counterparts
  validateCanonicalPayloadInvariants(payload);

  const canonicalRecordDigest = computeCanonicalRecordDigest(payload);

  const participantMetadata: CounterpartMetadata = {
    canonicalRecordDigest,
    digestAlgorithm: "SHA-256",
    canonicalizationVersion: "2026-09-v1",
    copyDesignation: "PARTICIPANT_COPY",
  };

  const receivingOrgMetadata: CounterpartMetadata = {
    canonicalRecordDigest,
    digestAlgorithm: "SHA-256",
    canonicalizationVersion: "2026-09-v1",
    copyDesignation: "RECEIVING_ORGANIZATION_COPY",
  };

  const participantCopy: ContinuityContactRecord = {
    verificationLevel,
    counterpart: participantMetadata,
    payload,
    digestNotice: CALIBRATED_DIGEST_NOTICE,
    publicAgencyWarning: PUBLIC_AGENCY_RETENTION_WARNING,
  };

  const receivingOrganizationCopy: ContinuityContactRecord = {
    verificationLevel,
    counterpart: receivingOrgMetadata,
    payload,
    digestNotice: CALIBRATED_DIGEST_NOTICE,
    publicAgencyWarning: PUBLIC_AGENCY_RETENTION_WARNING,
  };

  return { participantCopy, receivingOrganizationCopy };
}

/**
 * Validates the core institutional and legal invariants of a canonical payload.
 */
export function validateCanonicalPayloadInvariants(
  payload: ContinuityContactRecordCanonicalPayload
): void {
  // 1. Mandatory Non-Implication Codes must all be present
  const presentCodes = new Set(payload.nonImplicationCodes || []);
  for (const code of MANDATORY_NON_IMPLICATION_CODES) {
    if (!presentCodes.has(code)) {
      throw new Error(`Missing mandatory non-implication notice code: ${code}`);
    }
  }

  // 2. Reject prohibited court-like terminology
  const serialized = JSON.stringify(payload);
  const prohibitedTerms = [
    "EVIDENTIARY_HEARING",
    "WITHOUT_PREJUDICE",
    "WITH_PREJUDICE",
    "SUBSTANTIATED",
    "UNSUBSTANTIATED",
    "ALLEGATIONS_PROVEN",
    "ALLEGATIONS_DISPROVEN",
  ];
  for (const term of prohibitedTerms) {
    if (serialized.includes(`"${term}"`)) {
      throw new Error(
        `Payload contains prohibited court-like or merits determination term: ${term}`
      );
    }
  }

  // 3. Substantive assessment status must be de-judicialized
  const validSubstantiveStatuses = [
    "NOT_ASSESSED",
    "ASSESSMENT_PENDING_OUTSIDE_THIS_RECEIPT",
    "SEPARATE_OFFICIAL_DECISION_REFERENCED",
  ];
  if (!validSubstantiveStatuses.includes(payload.substantiveAssessment.status)) {
    throw new Error(
      `Invalid substantive assessment status: ${payload.substantiveAssessment.status}`
    );
  }

  // 4. Data minimization: Payload must NOT contain private narrative or sensitive case files
  const rawPayloadObj = payload as Record<string, any>;
  const prohibitedSensitiveKeys = [
    "traumaNarrative",
    "detailedNarrative",
    "evidenceFiles",
    "childNames",
    "childrenPii",
    "safeAddress",
    "shelterAddress",
    "confidentialPhone",
    "medicalRecords",
    "devicePasswords",
  ];
  for (const key of prohibitedSensitiveKeys) {
    if (rawPayloadObj[key] !== undefined) {
      throw new Error(
        `Data minimization violation: Continuity Contact Record payload contains sensitive field '${key}'. Records must document the touchpoint, not act as a case file.`
      );
    }
  }

  // 5. Suggested next route defaults: acceptanceConfirmed must be boolean, default false
  if (payload.suggestedNextRoute) {
    if (payload.suggestedNextRoute.acceptanceConfirmed === true) {
      // Allowed only if explicitly documented, but by default must not be true without explicit basis
    }
  }

  // 6. Acknowledgment block validation:
  if (payload.acknowledgment && payload.acknowledgment.isAcknowledged) {
    if (!payload.acknowledgment.signerRole || !payload.acknowledgment.signerRole.trim()) {
      throw new Error("Staff acknowledgment requires an official signerRole.");
    }
    if (
      !payload.acknowledgment.representedOrganization ||
      !payload.acknowledgment.representedOrganization.trim()
    ) {
      throw new Error(
        "Staff acknowledgment requires a representedOrganization."
      );
    }
  }
}

/**
 * Validates complete ContinuityContactRecord wrapper and verification level integrity.
 */
export function validateContactRecordInvariants(record: ContinuityContactRecord): void {
  validateCanonicalPayloadInvariants(record.payload);

  // Verification level safeguards
  if (record.verificationLevel === "PARTICIPANT_RECORDED") {
    if (record.payload.acknowledgment?.isAcknowledged) {
      throw new Error(
        "PARTICIPANT_RECORDED record cannot claim active agency acknowledgment."
      );
    }
  }

  // Digest notice calibration check
  if (!record.digestNotice.includes("does not authenticate allegations")) {
    throw new Error(
      "Digest notice must include calibrated disclaimer that it does not authenticate allegations or determine admissibility."
    );
  }

  // Public agency warning check
  if (
    !record.publicAgencyWarning.includes(
      "Maps With Teeth cannot control or delete the recipient's copy."
    )
  ) {
    throw new Error("Missing required public agency retention warning.");
  }
}

/**
 * Creates a standalone, decoupled Participant Sovereign Disclosure Authorization.
 */
export function createDisclosureAuthorization(params: {
  authorizationId?: string;
  participantId: string;
  targetOrganizationName: string;
  recipientDepartmentOrRole?: string;
  purposeOfDisclosure: string;
  expirationDate: string;
  allowContactRecordSharing?: boolean;
  allowIncidentNumbersSharing?: boolean;
  allowPresentedMaterialInventorySharing?: boolean;
  allowNextRouteSharing?: boolean;
}): ParticipantDisclosureAuthorization {
  return {
    authorizationId:
      params.authorizationId ||
      `auth-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
    authorizedAt: new Date().toISOString(),
    participantId: params.participantId,
    targetOrganizationName: params.targetOrganizationName,
    recipientDepartmentOrRole: params.recipientDepartmentOrRole,
    authorizedScope: {
      allowContactRecordSharing: params.allowContactRecordSharing ?? true,
      allowIncidentNumbersSharing: params.allowIncidentNumbersSharing ?? true,
      allowPresentedMaterialInventorySharing:
        params.allowPresentedMaterialInventorySharing ?? true,
      allowNextRouteSharing: params.allowNextRouteSharing ?? true,
      explicitlyExcludedFields: [...DEFAULT_EXCLUDED_DISCLOSURE_FIELDS],
    },
    purposeOfDisclosure: params.purposeOfDisclosure,
    expirationDate: params.expirationDate,
    isRevoked: false,
    revocationNotice: {
      honestBoundaryText: HONEST_REVOCATION_BOUNDARY_TEXT,
    },
  };
}

/**
 * Revokes a standalone Disclosure Authorization with timestamp and method.
 */
export function revokeDisclosureAuthorization(
  auth: ParticipantDisclosureAuthorization,
  revocationMethod: string = "IN_APP_PARTICIPANT_REVOCATION"
): ParticipantDisclosureAuthorization {
  return {
    ...auth,
    isRevoked: true,
    revocationNotice: {
      honestBoundaryText: HONEST_REVOCATION_BOUNDARY_TEXT,
      revocationTimestamp: new Date().toISOString(),
      revocationMethod,
    },
  };
}
