# MAPS WITH TEETH

> **A portable continuity and accountability layer for people navigating abuse across systems that do not share one case file, one jurisdiction, or one map.**

*“The survivor should not be the only person holding the whole map.”*

Maps With Teeth is an investigative intelligence initiative and public-interest software infrastructure designed to help survivors and advocates bypass conventional shelter gridlock through lateral statutory remedies, industry benevolence funds, deposit waivers, and confidential relocation protections—while preserving intake context and unreviewed evidence across disconnected institutions.

---

## 🎯 Current Product Maturity & Verified Quality Gates

- **Stage 1 (Canonical Resource Intelligence)**: 47 Audited Public Records with 100% primary source statutory, regulatory, and 501(c)(3) citations.
- **Stage 2 (Deterministic Fact Matcher)**: Pure client-side qualification engine evaluating work history, legal status, and family levers without centralized PII storage.
  - **158 Tri-State Intake Tests**: Strict boolean `false` preservation across all qualification gates.
  - **50 Reconciliation Engine Tests**: Multi-industry clarification and evidence collection verified.
  - **29 Matching Scenario Tests**: Comprehensive deterministic qualification regression suite.
  - **1,070 Semantic QA Assertions**: Zero schema, citation, or evidence drift.
- **Stage 3 (Continuity Infrastructure)**: Portable continuity infrastructure, survivor-held Continuity Receipts, and scoped export packets (In Active Pilot Design).

---

## 🧭 Repository Orientation

The repository is strictly structured into clear domain and architectural layers:

- **`src/app/`**: Public Next.js web application routes (including `/for-partners`, `/find-help`, `/bridge`, `/texas`, `/other-ways-through`).
- **`src/components/`**: Interface components organized by domain (`ui/`, `layout/`, `resources/`, `intake/`, `governance/`, `support/`).
- **`src/domain/`**: Pure business logic, qualification rules, matching engines, and intake reconciliation.
- **`src/data/`**: Canonical structured resource records (`resources/states/tx/`, `resources/national/`), evidence provenance, and taxonomy.
- **`src/content/`**: Public editorial content, practitioner field notes, and statutory explainers.
- **`research/`**: Non-public investigative files, candidate leads, and interview notes.
- **`prototypes/`**: Experimental product prototypes (Continuity Receipts, routing graphs).
- **`docs/`**: Initiative vision, architecture standards, roadmaps, and decision records.
- **`archive/`**: Historical records, superseded plans, and deprecated research snapshots.

📖 **For full directory mappings, see [REPO_MAP.md](file:///docs/architecture/REPO_MAP.md).**

---

## ⚡ Development & Quality Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run full TypeScript typecheck & production build
npm run build

# Run all test and audit suites
npm run test:tristate
npm run test:reconciliation
npm run test:matching
npm run test:ui
npm run audit:drift
npm run audit:resources
npm run audit:evidence
```

---

## ⚠️ Verification & Data Standard

Every public operational claim in Maps With Teeth is verified against primary statutes, administrative regulations, or official 501(c)(3) standards.

- Read our [Verification Standard](file:///docs/standards/VERIFICATION_STANDARD.md).
- Read our [Resource Publication Standard](file:///docs/standards/RESOURCE_PUBLICATION.md).

---

## 📚 Key Links & Documentation

- [Partner Briefing & Specification (`/for-partners`)](file:///src/app/for-partners/page.tsx)
- [Initiative Vision & Principles](file:///docs/initiative/VISION.md)
- [Active Workstreams Map](file:///docs/initiative/WORKSTREAMS.md)
- [Canonical Resource Model](file:///docs/architecture/RESOURCE_MODEL.md)
- [Evidence & Provenance Model](file:///docs/architecture/EVIDENCE_MODEL.md)
- [Active Roadmaps Index](file:///docs/roadmaps/ROADMAP_INDEX.md)
- [Architecture Decision Log](file:///docs/decisions/README.md)
