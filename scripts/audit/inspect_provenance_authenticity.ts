import { ALL_RESOURCES } from "../../src/data/resources/index.ts";
import { RESOURCE_PROVENANCE_REGISTRY } from "../../src/data/evidence/provenance.ts";

console.log("==================================================");
console.log("PROVENANCE INTEGRITY & AUTHENTICITY AUDIT");
console.log("==================================================\n");

const syntheticPatterns = [
  "mapswithteeth.org/sources",
  "Published Operating Standards & Guidelines",
  "Material eligibility criteria verified against primary source",
  "Audited and verified against authoritative primary documentation for"
];

const results: {
  id: string;
  name: string;
  status: "COMPLETE" | "PARTIAL" | "MISSING" | "SYNTHETIC_REMOVED";
  reasons: string[];
  sourceUrl: string;
  sourceType: string;
  confirmingEntity: string;
}[] = [];

ALL_RESOURCES.forEach((r) => {
  const p = RESOURCE_PROVENANCE_REGISTRY[r.id];
  const reasons: string[] = [];

  if (!p) {
    results.push({
      id: r.id,
      name: r.name,
      status: "MISSING",
      reasons: ["No provenance entry in registry"],
      sourceUrl: r.sourceUrl || "",
      sourceType: "NONE",
      confirmingEntity: "NONE"
    });
    return;
  }

  const pStr = JSON.stringify(p);
  const hasSynthetic = syntheticPatterns.some((pat) => pStr.includes(pat));

  if (hasSynthetic) {
    if (pStr.includes("mapswithteeth.org/sources")) reasons.push("Contains fake internal URL: mapswithteeth.org/sources/*");
    if (pStr.includes("Published Operating Standards & Guidelines")) reasons.push("Generic source title: 'Published Operating Standards & Guidelines'");
    if (pStr.includes("Material eligibility criteria verified against primary source")) reasons.push("Generic evidence claim text");
    if (pStr.includes("Audited and verified against authoritative primary documentation")) reasons.push("Generic audit note");

    results.push({
      id: r.id,
      name: r.name,
      status: "SYNTHETIC_REMOVED",
      reasons,
      sourceUrl: p.claimEvidences?.[0]?.sourceUrl || r.sourceUrl || "",
      sourceType: p.sourceType,
      confirmingEntity: p.confirmingEntity
    });
    return;
  }

  // Check authenticity of actual fields
  if (!p.claimEvidences || p.claimEvidences.length === 0) {
    results.push({
      id: r.id,
      name: r.name,
      status: "PARTIAL",
      reasons: ["Provenance exists but has 0 claim-level evidence entries"],
      sourceUrl: r.sourceUrl,
      sourceType: p.sourceType,
      confirmingEntity: p.confirmingEntity
    });
    return;
  }

  // Check if all claim evidences have real external sourceUrls or real statute locators
  const unverifiedClaims = p.claimEvidences.filter(c => !c.sourceUrl || c.sourceUrl.includes("mapswithteeth.org") || c.supportLevel === "UNVERIFIED");
  if (unverifiedClaims.length > 0) {
    results.push({
      id: r.id,
      name: r.name,
      status: "PARTIAL",
      reasons: [`${unverifiedClaims.length} claims are unverified or missing authentic external source URL`],
      sourceUrl: p.claimEvidences[0].sourceUrl,
      sourceType: p.sourceType,
      confirmingEntity: p.confirmingEntity
    });
    return;
  }

  results.push({
    id: r.id,
    name: r.name,
    status: "COMPLETE",
    reasons: ["Authentic primary source and claim-level evidence confirmed"],
    sourceUrl: p.claimEvidences[0].sourceUrl,
    sourceType: p.sourceType,
    confirmingEntity: p.confirmingEntity
  });
});

console.log("--- AUDIT RESULTS PER RESOURCE ---\n");
results.forEach(res => {
  console.log(`[${res.status}] ${res.id}`);
  console.log(`  Name: ${res.name}`);
  console.log(`  Source: ${res.sourceUrl} (${res.sourceType})`);
  console.log(`  Entity: ${res.confirmingEntity}`);
  if (res.reasons.length > 0) {
    console.log(`  Notes: ${res.reasons.join("; ")}`);
  }
  console.log("");
});

console.log("==================================================");
console.log("SUMMARY BREAKDOWN");
console.log("==================================================");
const complete = results.filter(r => r.status === "COMPLETE");
const partial = results.filter(r => r.status === "PARTIAL");
const missing = results.filter(r => r.status === "MISSING");
const synthetic = results.filter(r => r.status === "SYNTHETIC_REMOVED");

console.log(`Total Canonical Resources: ${results.length}`);
console.log(`COMPLETE:                 ${complete.length}`);
console.log(`PARTIAL:                  ${partial.length}`);
console.log(`MISSING:                  ${missing.length}`);
console.log(`SYNTHETIC_REMOVED:        ${synthetic.length}`);
console.log("==================================================");
