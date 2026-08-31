# EVIDENCE & PROVENANCE DATA MODEL

Maps With Teeth enforces claim-level evidence tracing.

```ts
export interface ClaimEvidence {
  claimId: string;
  claim: string;
  sourceUrl: string;
  sourceTitle: string;
  sourcePublisher: string;
  sourceType: "PRIMARY_STATUTE" | "GOVERNMENT_PORTAL" | "501C3_STANDARDS" | "AGENCY_STAFF" | "PUBLIC_AUDIT";
  checkedAt: string;
  effectiveDateOrPublishedDate: string;
  sourceLocator: string; // e.g. "Tex. Prop. Code § 92.156(a)", "POMS RM 10220.200"
  supportLevel: "DIRECTLY_SUPPORTED" | "PARTIALLY_SUPPORTED" | "INFERRED" | "UNVERIFIED";
  quotedOrParaphrasedEvidence: string;
  reviewerNote?: string;
}
```
