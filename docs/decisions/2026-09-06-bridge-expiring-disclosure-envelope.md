# ADR 006: Bridge Expiring Disclosure Envelope Architecture

## Status
Proposed — pending Source of Truth adoption and legal, survivor-safety, accessibility, and technical review.

## Context
Continuity Bridge navigation requires transferring sensitive referral packets and touchpoint receipts across independent service providers without creating a centralized cross-agency surveillance database, without facilitating unlawful redisclosure under VAWA, and without making false cryptographic promises of remote file destruction.

## Decision
All proposed operational referral dispatches via the Continuity Bridge must implement the Expiring Disclosure Envelope specification:

1. **Single-Recipient Consent:** Every disclosure envelope is cryptographically and operationally targeted to exactly one designated recipient endpoint. Wildcard, multi-agency broadcast, or pooled intake routing is strictly prohibited.
2. **Explicit Elimination of `allowRedisclosure`:** The receiving agency is bound to a single-use, non-transferable intake license. If a receiving agency cannot serve the survivor, they cannot forward or reroute the envelope. A brand-new disclosure envelope with newly executed survivor consent is required for any lateral transfer.
3. **Honest Expiration Semantics:** Expiration terminates Maps-mediated retrieval and deletes the relay copy but cannot invalidate ciphertext or files already acquired by a recipient. Digital expiration limits the window during which the encrypted envelope may be fetched from relay infrastructure; it cannot reach into recipient systems to delete or invalidate materials that have already been opened, downloaded, or ingested into third-party case management systems.
4. **Active Revocation:** Survivors maintain the unilateral ability to revoke an unretrieved envelope before its retrieval window expires, immediately terminating access keys and marking the envelope as revoked in the event stream.
5. **Cryptographic Binding of Consent:** Each envelope cryptographically binds the exact consent terms, version identifier, and participant authorization method to the pre-send payload.
6. **Authenticated Encryption & Tamper-Evident Previews:** 
   - Payloads in transit must use Authenticated Encryption with Associated Data (AEAD) targeting the verified recipient public key, cryptographically authenticating both the ciphertext and associated routing metadata. Plain SHA-256 hashes must not be presented as authenticated integrity or digital signatures.
   - Client-side pre-send snapshots and hashes are strictly tamper-evident administrative records to confirm that the transmitted payload matches what was displayed to the user; they do not constitute authenticated legal evidence or judicial exhibits.
7. **Append-Only Relay Event Stream:** Relay infrastructure maintains an append-only, pseudonymous log of lifecycle events (`ENVELOPE_CREATED`, `DISPATCHED`, `RETRIEVED`, `REVOKED_BY_SENDER`, `RESPONSE_RECORDED`, and `EXPIRED`).
8. **Decoupled Lifecycle Timing (`expiresAt` vs. `responseDueAt`):**
   - Every envelope specifies two distinct timestamps:
     - `responseDueAt`: The administrative deadline by which the receiving agency is expected to review the referral and record an initial intake response or acknowledgment.
     - `expiresAt`: The hard technical cutoff timestamp after which Maps-mediated retrieval terminates and the relay copy is deleted from the server.
   - A status of `NO_RESPONSE` must derive strictly from the expiration of `responseDueAt` (when no partner response is recorded before that deadline), not from envelope expiration (`expiresAt`), ensuring that agency accountability is decoupled from technical message retention.
9. **Authenticated Encryption Architecture:** 
   - Envelopes in transit are end-to-end encrypted using verified recipient public keys (`recipientKeyId`).
   - Relay infrastructure operates solely as an oblivious transport conduit and possesses no private decryption keys, escrow keys, or plaintext access.
   - Upon reaching `expiresAt` or receipt of a sender revocation, the relay copy is immediately deleted from relay storage.
10. **Compelled-Disclosure Response Protocol:**
    - The operational response protocol for subpoenas, court orders, warrants, or discovery requests served on relay infrastructure is strictly separated from encryption architecture.
    - Because relay operators possess no private decryption keys, hold no plaintext, and retain only pseudonymous, append-only metadata with minimal retention windows, the protocol mandates:
      - Prompt legal assertion of technical impossibility and lack of possession, custody, or control of plaintext communications.
      - Immediate notice to the affected survivor and sending advocate/counsel to the maximum extent permitted by law.
      - Refusal of any request or demand to modify code, weaken cryptographic primitives, introduce escrow keys, or install backdoors.
      - Regular publication of transparency reports documenting all legal process received.
11. **Comprehensive Partner Key Management:** 
    Partner agency public keys must be managed through an audited lifecycle encompassing:
    - *Verified Key Origin:* Strict out-of-band verification of partner agency identity, authorized key custodian, and public key fingerprint before enrollment.
    - *Explicit Key Binding (`recipientKeyId`):* Each key must be assigned an explicit `recipientKeyId` tied to verified agency endpoints, preventing ambiguous recipient routing.
    - *Versioning & Expiration:* Strict cryptographic key versioning with mandatory expiration dates requiring periodic re-enrollment.
    - *Revocation & Emergency Compromise Response:* Immediate revocation mechanisms for reported key compromise, including automated suspension of new dispatches to compromised keys and direct notification to affected agency coordinators.
    - *Pending-Envelope Behavior:* Any unretrieved envelopes addressed to a revoked or compromised `recipientKeyId` must be immediately invalidated, blocked from retrieval, and deleted from the relay.
    - *Scheduled Rotation:* Enforced scheduled key rotation cycles with clear transition windows.
    - *Partner Offboarding:* Documented offboarding procedures that permanently revoke key identifiers, disable endpoint authorization, purge pending envelopes, and archive pseudonymous audit logs without retaining cryptographic materials or survivor payloads.
12. **Automated Address Detection as Preview Assistance:** 
    - Automated detection of sensitive physical addresses, contact information, or location markers operates strictly as client-side preview assistance to aid survivors in identifying potential accidental disclosures.
    - Automated pattern detection is heuristic and must never be represented as an infallible security boundary.
    - All detected items require explicit survivor review, confirmation, and manual redaction control prior to export or dispatch.
13. **Strict Separation of Simulation vs. Relay:** Client-side docket previews (local simulations) are strictly partitioned in code, data models, and UI from operational relay transmissions.
14. **Non-Evidentiary Disclaimer:** Every Continuity Receipt and envelope header must prominently state: **“This continuity package is an administrative communication record; it does not constitute authenticated legal evidence or an agency merits determination.”**

## Consequences
- Prevents Maps With Teeth from becoming an unauthorized cross-agency tracking hub.
- Enforces statutory compliance with VAWA 34 U.S.C. § 12291(b)(2) non-disclosure mandates.
- Aligns technical mechanics with survivor autonomy and informed consent reality.
