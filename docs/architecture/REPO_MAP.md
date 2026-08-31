# REPOSITORY ORIENTATION MAP

Quick reference guide for navigating the Maps With Teeth codebase.

## Where Does Everything Belong?

| Task / Question | Canonical Destination |
| :--- | :--- |
| **Where do I put a new Texas resource?** | `src/data/resources/states/tx/texasResources.ts` |
| **Where do I put a national / federal resource?** | `src/data/resources/national/nationalResources.ts` |
| **Where do I put an unverified candidate lead?** | `research/resources/leads/` |
| **Where do I record source verification / provenance?** | `src/data/evidence/provenance.ts` |
| **Where does matching business logic live?** | `src/domain/matching/matcher.ts` |
| **Where does resource filtering / publication rules live?** | `src/domain/resources/publicationRules.ts` |
| **Where do Resource selectors live?** | `src/domain/resources/selectors.ts` |
| **Where do Field Notes live?** | `src/content/field-notes/` |
| **Where do long-form Articles live?** | `src/content/articles/` |
| **Where do Legal/System Explainers live?** | `src/content/explainers/` |
| **Where do reusable UI primitives live?** | `src/components/ui/` |
| **Where do Resource Cards / Modal UI live?** | `src/components/resources/` |
| **Where do experimental product prototypes live?** | `prototypes/` |
| **Where do architecture decision records live?** | `docs/decisions/` |
| **Where do active roadmaps live?** | `docs/roadmaps/active/` |
| **Where does superseded/deprecated material go?** | `archive/` |
