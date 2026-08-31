# CANONICAL RESOURCE DATA MODEL

Every structured resource in `src/data/resources/` conforms to the canonical `Resource` interface defined in `src/domain/resources/types.ts`.

## Core Attributes
- **Identity & Organization**: `id`, `name`, `organization`, `state`, `scope`
- **Categorization**: `category`, `barrierCategories`, `matchTags`
- **Core Value Proposition**: `whatItCanHelpWith`, `whatItActuallyProvides`, `assistanceShapes`, `typicalAmount`
- **Real Eligibility & Documentation**: `eligibility`, `documentationRequired`, `referralRequirement`, `policeReportRequired`
- **Access Friction ("The Catch")**: `whatCanBlockAccess`, `accessFrictions`
- **Action Mechanics**: `whatToDoNext`, `howToApply`
- **Authoritative Provenance**: `sourceUrl`, `primaryAuthoritativeSource`, `verificationStatus`, `provenance`, `claimEvidences`
