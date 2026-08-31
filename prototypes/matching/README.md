# Prototype: Dynamic Fact-Based Qualifier Engine

- **Purpose**: Evaluates candidate intake profiles against discrete resource qualification rules and statutory triggers using deterministic rule matching.
- **Status**: PROMOTED_TO_PRODUCT
- **Production Relationship**: Core matching engine lives in `src/domain/matching/` (`matcher.ts`, `dynamicMatcher.ts`); data rules live in `src/data/taxonomy/` and `src/data/factsRegistry.ts`.
- **Dependencies**: TypeScript domain rules, `ALL_RESOURCES` registry.
- **Known Limitations**: Deterministic logic requires explicit fact definitions; does not perform natural language inference.
- **Next Decision**: Expand county-level jurisdiction evaluation rules for surrounding rural Central Texas counties.
