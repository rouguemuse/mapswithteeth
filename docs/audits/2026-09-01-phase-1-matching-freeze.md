# MAPS WITH TEETH — PHASE 1 DETERMINISTIC MATCHING BASELINE & FREEZE

**Date:** September 1, 2026  
**Milestone:** Phase 1 Deterministic Matching Prototype & Semantic Hardening Freeze  
**Commit SHA:** `bceb3c7`  
**Branch:** `main`  
**Repository State:** Frozen baseline for Phase 2 UI and Intake integration

---

## 1. Executive Summary

Phase 1 establishes a deterministic, explainable routing engine evaluated against the frozen 47-resource canonical registry. The matcher models five independent truth dimensions (`relevanceStatus`, `applicabilityStatus`, `eligibilityStatus`, `readinessStatus`, `availabilityStatus`), preventing the conflation of eligibility, evidence, and operational capacity. 

Unknown facts are strictly preserved as unknown, ensuring that absence of information never creates inferred qualification or premature false positives.

---

## 2. Catalog & Verification Metrics

### Canonical Registry Totals
* **Total Canonical Resources:** 47
* **Publicly Visible Resources:** 47
* **Currently Operational / ACTIVE:** 46
* **Temporarily Closed:** 1 (`cerf-plus-craft-emergency` — scheduled reopening October 1, 2026)
* **Duplicate Resource IDs:** 0

### Evidence & Semantic Claim Accounting (Single Denominator Model)
* **Total Material Semantic Claim Vectors:** 470 (10 standardized criteria vectors per canonical resource across 47 records)
  * **Directly Supported (Authoritative Statute / Primary Source):** 449 (95.5%)
  * **Partially Supported (Discretionary Local Variance / Facility Fees):** 21 (4.5%)
  * **Inferred Claims:** 0 (0.0%)
  * **Unverified Claims:** 0 (0.0%)
  * **Stale Citations:** 0 (0.0%)
* **Total Structural QA Assertions:** 1,070 (Atomic field, URL, locator, and provenance checks)
  * **Passed Structural QA:** 1,070 (100.0%)
  * **Failed Structural QA:** 0 (0.0%)

---

## 3. Disposition of Key Qualification-Governing Claims

| Resource ID | Governing Condition / Citation | Reconciliation Status | Verification Notes |
|---|---|---|---|
| `tx-oag-cvc-relocation` | Tex. Code Crim. Proc. Art. 56B.053 & Art. 56B.106(c-3) | `DIRECTLY_VERIFIED` | **Art. 56B.053(a):** Reasonable-period reporting requirement.<br>**Art. 56B.053(b):** Attorney General discretionary extension for extraordinary circumstances (discretionary review; never automatically assumed granted without agency determination).<br>**Art. 56B.053(c):** Child-victim statutory exemption from reporting requirement.<br>**Art. 56B.106(c)/(c-1):** Relocation and housing-rental compensation eligibility.<br>**Art. 56B.106(c-3):** $5,000 aggregate relocation/housing-rental compensation cap.<br>Art. 56B.054 governs application review/investigation (not a reporting deadline). |
| `safe-connections-act-separation` | 47 U.S.C. § 345 / 47 CFR § 64.6402 | `DIRECTLY_VERIFIED` | 2-business-day line separation timeline and advocate/court documentation options verified from FCC and federal statute. |
| `usbg-bartender-emergency-assistance` | USBG BEAP Guidelines (2026) | `DIRECTLY_VERIFIED` | 12-month (1 year) regular full- or part-time beverage service work history rule verified from USBG National Charity Foundation standards. |
| `entertainment-community-fund` | ECF Emergency Financial Guidelines | `DIRECTLY_VERIFIED` | Earnings thresholds ($10,000/yr in 3 of 5 yrs general; $5,000/yr in 3 of 5 yrs for dancers) verified from foundation rules. |
| `removery-ink-tattoo-removal` | Removery INK-itiative Program Rules | `PARTIALLY_VERIFIED` | Advocate recommendation letter requirement directly verified; local clinical studio scheduling and intake capacity are facility-variable. |
| `face-to-face-reconstructive-surgery` | AAFPRS Foundation Guidelines | `PARTIALLY_VERIFIED` | 12-month physical separation rule directly verified; surgeon time is 100% pro bono but hospital facility and anesthesia fee waivers vary by facility. |

---

## 4. Matcher Architecture & State Model

### 5-Dimensional State Flow

1. **`relevanceStatus` (`RELEVANT` | `NOT_RELEVANT`):**
   * Reason Codes: `RELEVANCE_EXPLICIT_NEED`, `RELEVANCE_CONTEXTUAL_TRIGGER`, `RELEVANCE_STATUTORY_TRIGGER`, `RELEVANCE_NOT_ESTABLISHED`.
   * Requires direct alignment with stated barriers or narrow contextual triggers (e.g., tax controversy for innocent spouse relief; job separation for unemployment).
2. **`availabilityStatus` (`CONFIRMED_AVAILABLE` | `CONDITIONAL` | `UNKNOWN` | `CLOSED` | `NOT_APPLICABLE`):**
   * Directories (`safe-havens-for-pets`) evaluate as `UNKNOWN` (cannot guarantee live bed capacity).
   * Time-gated or discretionary funds evaluate as `CONDITIONAL`.
3. **`applicabilityStatus` (`CONFIRMED` | `POSSIBLE` | `FAILED` | `NOT_APPLICABLE`):**
   * Evaluates geographic jurisdiction (State/County) and tenancy/employment prerequisites.
4. **`eligibilityStatus` (`CONFIRMED` | `POSSIBLE` | `FAILED` | `NOT_APPLICABLE`):**
   * Evaluates mandatory program rules (income thresholds, qualifying crisis criteria, work history).
5. **`readinessStatus` (`READY` | `MISSING_INFORMATION` | `MISSING_DOCUMENTATION` | `NOT_APPLICABLE`):**
   * Distinguishes missing user facts from evidence needed in hand for submission.

### Route Tier Mapping
* **`STRONG_ROUTE`:** RELEVANT + Applicability CONFIRMED + Eligibility CONFIRMED + Availability CONFIRMED_AVAILABLE + (READY | MISSING_DOC).
* **`CONDITIONAL_ROUTE`:** RELEVANT + Applicability CONFIRMED + Eligibility CONFIRMED + Availability (CONDITIONAL | UNKNOWN).
* **`POSSIBLE_ROUTE`:** RELEVANT + (Applicability POSSIBLE | Eligibility POSSIBLE | Readiness MISSING_INFO) + 0 Blockers.
* **`BLOCKED`:** Applicability FAILED | Eligibility FAILED | Availability CLOSED | NOT_RELEVANT.

---

## 5. Resource Types

Every canonical record is tagged with a typed `ResourceType`:
1. `STATUTORY_RIGHT` (e.g., Tex. Prop. Code § 92.016, Safe Connections Act)
2. `DIRECT_SERVICE` (e.g., SAFE Alliance, HAWC, Texas ACP)
3. `FINANCIAL_ASSISTANCE` (e.g., Southern Smoke, Giving Kitchen, Operation Homefront)
4. `REFERRAL_NETWORK`
5. `DIRECTORY` (e.g., Safe Havens for Pets)
6. `SELF_SERVICE_TOOL` (e.g., AirGuard BLE Tracker Detection, FreeFrom Debt Toolkit)
7. `INFORMATION_ROUTE`

---

## 6. Test Suite Results (29/29 Tests Passed)

### Realistic Multi-Problem Scenarios (Part 1: 8/8 Passed)
* **Scenario A (DV + Housing + Kids, No Police Report):** Matched Texas lease termination with advocate letter; correctly blocked police-mandated CVC for adult.
* **Scenario B (Stalking + Phone Control + Relocation):** Matched Safe Connections Act, Texas ACP, AirGuard BLE.
* **Scenario C (Pet Safety + Houston Shelter):** Matched RedRover Relief, Safe Havens directory; surfaced vehicle gap.
* **Scenario D (F&B Worker + Financial Emergency):** Matched Southern Smoke, USBG BEAP; blocked Entertainment Community Fund.
* **Scenario E (Custody Conflict + Bastrop Legal):** Matched Texas Legal Aid, Bastrop CCA; surfaced McKinney-Vento educational rights.
* **Scenario F (No Tenancy in Texas):** Blocked Texas lease termination and rekeying.
* **Scenario G (All Unknown Input Facts):** Produced **0 confirmed matches** and 28 possible routes (zero inferred eligibility).
* **Scenario H (Out-of-Scope Commercial Dispute):** Produced **0 confirmed and 0 possible matches**; recorded catalog gap.

### Adversarial False-Positive Prevention & Boundary Tests (Part 2: 21/21 Passed)
* **ADV 1 (Employed DV Survivor, No Job Disruption):** TWC Unemployment correctly excluded.
* **ADV 2 (DV Survivor, No Tax Dispute):** IRS Innocent Spouse Relief correctly excluded (`NOT_RELEVANT`).
* **ADV 3 (F&B Worker, No Qualifying Medical/Disaster Crisis):** Giving Kitchen direct grant kept as provisional `POSSIBLE` (Stability Network).
* **ADV 4 (Non-Tenant):** Texas residential rekeying correctly `BLOCKED`.
* **ADV 5 (Shared Phone, Missing Documents):** Safe Connections Act classified as `MISSING_DOCUMENTATION`.
* **ADV 6 (Directory Route):** `safe-havens-for-pets` classified as `availabilityStatus: "UNKNOWN"` (never confirmed available).
* **ADV 7 (Dynamic Income Not Evaluated):** Modest Needs classified as `POSSIBLE` with `MISSING_DOCUMENTATION` pending paystubs.
* **ADV 8 (Ambiguous Rural County):** Salvation Army Texas Service Extension classified as `CONDITIONAL` / `POSSIBLE`.
* **ADV 9 (Deployed Military E-7):** Operation Homefront Deployed pathway correctly `BLOCKED` for exceeding E1-E6 rank limit.
* **ADV 10 (Wounded Post-9/11 E-7 Veteran):** Operation Homefront Wounded/Ill pathway correctly `CONFIRMED` across all ranks.
* **ADV 11 (Active Duty Junior Enlisted Without Dependents):** Operation Homefront Active Duty pathway correctly `BLOCKED` for lack of DEERS dependents.
* **USBG_11_MONTHS:** F&B bartender with 11 months tenure correctly `BLOCKED` / `FAILED` for not meeting 12-month tenure prerequisite.
* **USBG_12_MONTHS:** F&B bartender with 12 months tenure correctly `CONFIRMED` for 12-month qualifying tenure.
* **USBG_TENURE_UNKNOWN:** F&B bartender with UNKNOWN tenure kept as `POSSIBLE` with `MISSING_INFORMATION` (never confirmed).
* **CVC_AFTER_72_HOURS:** Texas CVC correctly `CONFIRMED` for crime report filed after 30 days within reasonable period (no 72-hour cutoff enforced).
* **CVC_NO_REPORT:** Texas CVC correctly `BLOCKED` for adult victim with known absence of police report (Art. 56B.053).
* **CVC_REPORT_UNKNOWN:** Texas CVC kept as `POSSIBLE` with `MISSING_DOCUMENTATION` when reporting is unknown (never confirmed).
* **CVC_CHILD_REPORTING_EXCEPTION:** Texas CVC correctly `CONFIRMED` for child victim without police report under Art. 56B.053(c) statutory exemption.
* **CVC_EXTRAORDINARY_CIRCUMSTANCES:** Texas CVC kept as `POSSIBLE` with `MISSING_DOCUMENTATION` when extraordinary circumstances are claimed but AG extension is not yet granted (Art. 56B.053(b)). Discretionary extension is never assumed automatically granted.
* **CVC_REPORTING_EXTENSION_GRANTED:** Texas CVC correctly `CONFIRMED` when OAG reporting extension is verified as granted under Art. 56B.053(b).
* **CVC_WRONG_STATUTE_GUARD:** Offense reporting authority verified as Art. 56B.053 (rejecting Art. 56B.054) and relocation cap verified as Art. 56B.106(c-3) (rejecting Art. 56B.106(a)(3)).

---

## 7. Quality Gate Verification

| Gate Command | Result | Details |
|---|---|---|
| `npm run audit:resources` | **PASS** | 47/47 canonical resources verified; 0 quarantined. |
| `npm run audit:duplicates` | **PASS** | 0 duplicate identifiers or claims. |
| `npm run audit:imports` | **PASS** | 0 deprecated compatibility imports or research leaks. |
| `npm run audit:evidence` | **PASS** | 470 Material Semantic Claim Vectors reconciled (449 directly supported, 21 partially supported). |
| `npm run audit:drift` | **PASS** | 15/15 checks verified across 6 rule types (numeric, jurisdiction, rank, reporting, citation, documentation). |
| `npm run test:matching` | **PASS** | 29/29 scenarios and adversarial tests passed (100%). |
| `npx tsc --noEmit` | **PASS** | 0 TypeScript compilation errors. |
| `npm run build` | **PASS** | Next.js 15 compiled in 2.2s; 26/26 static/dynamic routes generated. |

---

## 8. Explicit Known Limitations

1. **Partially Supported Facility / Discretionary Variances (4.5%):**
   * `removery-ink-tattoo-removal`: Clinical intake queues and appointment availability depend on individual regional studio capacity.
   * `face-to-face-reconstructive-surgery`: Volunteer surgeon time is 100% pro bono; operating hospital facility and anesthesia fee waivers vary by surgical facility.
   * `salvation-army-service-extension-tx` & `svdp-austin-microgrants`: Grant approvals depend on local volunteer committee review and real-time funding availability.
2. **Catalog Gaps Identified:**
   * Direct vehicle repair / title loan relief for rural survivors (mitigated via McKinney-Vento transport or CVC relocation when applicable).
   * Standalone pro bono emergency childcare networks (mitigated via shelter child advocacy and McKinney-Vento educational continuity).
