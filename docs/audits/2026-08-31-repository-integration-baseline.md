# Maps With Teeth — Repository Integration Baseline Audit

**Date:** August 31, 2026  
**Commit Baseline:** `6b3ade8` (Branch: `main`)  
**Status:** ESTABLISHED INTEGRATION BASELINE  

---

## 1. Executive Summary

This document records the foundational integration baseline for Maps With Teeth. Prior to this milestone, project data, historical field research, prototypes, and production routes had accumulated across overlapping shims and unsynchronized data structures.

With the completion and verification of `chore/repository-organization`, Maps With Teeth has transitioned into a strictly bounded, evidence-backed software system.

### Key Architectural Boundaries Established

1. **47 Canonical Live Resources:** Exactly 47 verified public resources are partitioned into `src/data/resources/states/tx/` (16 records) and `src/data/resources/national/` (31 records), indexed via `src/data/resources/registry.ts`. Non-published leads (28 records) are isolated within internal administrative/research ledger data.
2. **1,070 Atomic Material Claims:** Every populated material field (eligibility, documentation, deadlines, amounts, payment paths, police-report requirements, frictions) is extracted into an atomic claim structure in `src/data/evidence/claims.ts` with claim-specific provenance in `src/data/evidence/provenance.ts`.
3. **Strict Boundary Isolation:** No production application code in `src/` can import from `research/`, `archive/`, or `prototypes/`. All legacy compatibility shims have been deleted.

---

## 2. Evidence Matrix & Claim Classification Metrics

Automated evidence validation evaluated all 1,070 populated atomic material claims against authoritative sources:

| Metric | Count / Percentage | Definition & Scope |
|---|---|---|
| **Total Populated Material Claims** | **1,070** | Full atomic extraction across all 47 canonical resources |
| **Structurally Valid Claims** | **1,070 (100.0%)** | Valid HTTPS URLs, non-empty locators, complete metadata objects |
| **Directly Supported (Automated Classification)** | **1,066 (99.6%)** | Classified by automated audit as directly matching primary source documentation; semantic human/source verification remains separately trackable |
| **Partially Supported (Nuanced / Variances)** | **4 (0.4%)** | FACE TO FACE facility fee nuances, Salvation Army rural committee variances, SVdP conference funding variances |
| **Inferred Claims** | **0 (0.0%)** | Zero ungrounded assumptions |
| **Unverified Claims** | **0 (0.0%)** | Zero unverified claims in canonical registry |
| **Stale Claims (>12 Months)** | **0 (0.0%)** | Zero stale claims; all reviewed within active cycle |

> [!IMPORTANT]
> **Precision Distinction:** Structural completeness and automated evidence alignment prove that a claim has an authoritative source, locator, valid URL, and non-generic rationale. Semantic human/source verification (proving an authoritative primary text explicitly justifies every nuance of public wording) is tracked as a distinct dimension.

---

## 3. Factual & Regulatory Corrections Applied

During this baseline pass, six critical factual corrections were made to align canonical public resources with primary sources:

1. **USBG Bartender Emergency Assistance (`usbg-bartender-emergency-assistance`):**
   - Corrected application review timeline to **3–6 weeks** per official USBG BEAP FAQ (replaced outdated 2–4 weeks).
2. **Entertainment Community Fund (`entertainment-community-fund`):**
   - Freelance dancers criteria updated to **5 consecutive years documented with at least $5,000 annual earnings in 3 separate years of the most recent 5**.
   - Removed unsupported $2,000/year and 100-day dancer thresholds.
3. **Removery INK-itiative (`removery-ink-tattoo-removal`):**
   - Conformed eligibility strictly to provider criteria: eligible populations (DV, trafficking, formerly incarcerated, former gang members) with visible placement (**hands, neck, face**) or **hate/gang subject matter**, requiring an official advocate recommendation letter.
   - Removed blanket assumptions that any abuser name or trauma reminder qualifies without meeting placement/subject-matter rules.
4. **FACE TO FACE Reconstructive Surgery (`face-to-face-reconstructive-surgery`):**
   - Adopted official AAFPRS formulation: **"Provides low-cost or pro bono facial plastic and reconstructive surgery. Individual applicants should confirm any costs not covered with the participating physician/program."**
   - Removed unqualified claims guaranteeing 100% waived facility/anesthesia fees.
5. **Operation Homefront Critical Financial Assistance (`operation-homefront-cfa`):**
   - Preserved monthly 1st–10th application window closing at 11:59 PM CST across three distinct pathways (Wounded/Ill/Injured, Deployed, Enlisted E-1 to E-6).
6. **CERF+ Emergency Relief (`cerf-plus-craft-emergency`):**
   - Phrased temporary closure accurately: **"Grantmaking suspended through September 30, 2026. CERF+ states grantmaking will resume October 1, 2026 with an updated approach."**

---

## 4. Deletion of Legacy Compatibility Shims

All internal consumers were migrated to canonical import paths. Seven legacy compatibility shims were permanently deleted:

- `src/data/otherWaysThrough.ts`
- `src/data/resources/texas.ts`
- `src/data/texasData.ts`
- `src/data/matcher.ts`
- `src/data/dynamicMatcher.ts`
- `src/data/fieldNotes.ts`
- `src/data/provenanceRegistry.ts`

**Remaining compatibility shims:** **0**.

---

## 5. Verification & Build Gate Results

Post-merge verification confirmed 100% green status across all quality gates:

- `npm run audit:duplicates`: **PASS** (0 duplicate IDs across 47 records)
- `npm run audit:imports`: **PASS** (0 deprecated imports, 0 research/archive leaks)
- `npm run audit:evidence`: **PASS** (1,070 atomic claims verified)
- `npx tsc --noEmit`: **PASS** (0 TypeScript errors)
- `npm run build`: **PASS** (26/26 static/dynamic routes compiled in 2.8s)

---

## 6. Rules for Future Engineering

1. **Architecture Freeze:** Do not add new structural architecture or reorganize folders. All future development must conform to [`docs/architecture/REPO_MAP.md`](../architecture/REPO_MAP.md).
2. **Canonical Matching:** The Phase 1 matching prototype must execute solely against [`src/data/resources/registry.ts`](../../src/data/resources/registry.ts).
3. **No Assumed Qualifications:** The matcher must never convert an unknown qualification into an assumed "yes." Match receipts must clearly articulate confirmed qualifications, unknown parameters, potential blockers, and next actionable steps.
4. **Controlled Catalog Expansion:** Do not expand the 47-resource catalog until prototype matching against realistic survivor scenarios reveals a verified route gap.
