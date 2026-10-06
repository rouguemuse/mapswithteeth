# ADR: Continuity Contact Record Institutional & Legal Risk Safeguards

- **Date**: 2026-09-06
- **Status**: ACCEPTED / STAGE-LOCKED
- **Context**:
  The early "Continuity Receipt" concept was one of the most powerful ideas in Maps With Teeth, capturing context across fragmented agency touchpoints. However, early designs risked critical failure modes:
  1. Conflating physical custody of documents with cognitive review or evidence authentication.
  2. Spooking institutional partners by using court-flavored legal terminology ("evidentiary hearing", "without prejudice", "covenants", "warranties").
  3. Making the participant's record dependent on agency cooperation, rendering the tool useless if risk-averse staff refuse to sign.
  4. Overstating the legal effect of cryptographic digests (e.g., claiming SHA-256 establishes "evidentiary parity" or authenticates allegations).
  5. Buried consent and unsafe over-disclosure (turning an administrative touchpoint receipt into a miniature case file containing vulnerable survivor PII).

- **Decisions**:
  1. **Three-Tier Verification**: Adopt `PARTICIPANT_RECORDED`, `AGENCY_ACKNOWLEDGED`, and `PARTNER_ROLE_VERIFIED`. The participant's record is completely self-sustaining and never invalidated by agency silence or refusal. `PARTNER_ROLE_VERIFIED` strictly verifies staff credential origin and never implies merits/factual substantiation.
  2. **Public Designation**: Lock the public artifact name as **"Continuity Contact Record"** with subtitle *"A standardized record of an institutional touchpoint"*. Eliminate "Continuity Receipt" as the public-facing product name.
  3. **Five Mandatory Non-Implication Notices**: Enforce immutable notice codes (`NO_SUBSTANTIATION_FINDING`, `NO_EVIDENCE_AUTHENTICATION`, `NO_WHOLE_MATTER_ACCEPTANCE`, `NO_MAPS_INTERPRETATION_ENDORSEMENT`, `NO_ROUTING_AS_MERITS_FINDING`) rather than boolean flags.
  4. **Substantive Assessment Status**: Replace court terminology with `NOT_ASSESSED`, `ASSESSMENT_PENDING_OUTSIDE_THIS_RECORD`, and `SEPARATE_OFFICIAL_DECISION_REFERENCED` (external tracking ID only, no characterization).
  5. **Granular Material Handling**: Implement 7 distinct handling states (`PRESENTED_NOT_ACCEPTED`, `ACCEPTED_INTO_CUSTODY`, `OPENED_NOT_ASSESSED`, `PARTIALLY_REVIEWED_FOR_ROUTING`, `REVIEWED_FOR_ROUTING`, `SUBSTANTIVE_REVIEW_OCCURS_SEPARATELY`, `STATUS_UNKNOWN`) with mandatory attribution (WHAT, WHO, HOW, WHEN).
  6. **Calibrated Digest Claim**: Frame SHA-256 strictly as detecting later differences between copies of the canonical payload, explicitly stating it does not authenticate facts, prove signer authority, or determine court admissibility.
  7. **Cautious Electronic Acknowledgment Language**: Adopt cautious framework acknowledging Texas UETA and E-SIGN design principles without claiming automatic legal sufficiency; require official role and represented entity; protect staff from personal-capacity liability; establish explicit right to decline without reason.
  8. **Suggested Next Contact or Process**: Rename from "Next responsible route"; enforce explicit `handoffOutcome` enum (`ACCEPTED`, `DECLINED`, `PENDING`, `NOT_CONFIRMED`, `NOT_APPLICABLE`, `STATUS_UNKNOWN`, defaulting to `NOT_CONFIRMED`); distinguish agency-supplied from Maps-reference citations; permit `NOT_PROVIDED`.
  9. **Decoupled Disclosure & Honest Revocation**: Separate disclosure authorization from intake record; state upfront that revocation cannot recall records already processed, printed, retained under public records laws, or subpoenaed.
  10. **Data Minimization**: Strictly filter out trauma narratives, evidence files, children's PII, safe addresses, and medical info.
  11. **Public Agency Warning**: Warn survivors before transmission that copies delivered to government entities may become subject to state public information and retention rules.
  12. **Append-Only Corrections & Versioning**: Finalized records are never overwritten; corrections produce superseding records with incremented `recordVersion` and prior digest links.

- **Consequences**:
  Agencies can safely engage without fear of runaway tort liability or evidence co-optation. Survivors retain sovereign, tamper-evident administrative records whether or not an intake worker agrees to sign.
