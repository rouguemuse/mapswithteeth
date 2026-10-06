import { ARTICLES } from "../src/data/writing/articles";
import {
  getPublicArticles,
  getArticleBySlug,
  getFeaturedArticle,
  getExternalArticles,
  getPolicyAndResearchArticles,
  getArticlesByTopic,
  getRelatedArticles,
} from "../src/domain/writing/queries";
import {
  generateArticleCitation,
  generateBibtexCitation,
} from "../src/domain/writing/citation";
import { JAYME_VOLSTAD_AUTHOR } from "../src/data/writing/author";

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ [FAIL] ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ [PASS] ${message}`);
  }
}

console.log("==================================================");
console.log("MAPS WITH TEETH — EDITORIAL & PUBLICATION LAYER QA");
console.log("==================================================");

// 1. Total Articles in Registry
const totalArticles = ARTICLES.length;
assert(totalArticles >= 5, `Article registry contains at least 5 records (found ${totalArticles})`);

// 2. Draft / Pitch Hold Exclusivity Guard
const pitchHoldArticles = ARTICLES.filter((a) => a.status === "pitch_hold");
assert(pitchHoldArticles.length >= 1, "At least one article is explicitly held in PITCH_HOLD status");

const publicArticles = getPublicArticles();
const publicSlugs = new Set(publicArticles.map((a) => a.slug));

pitchHoldArticles.forEach((ph) => {
  assert(!publicSlugs.has(ph.slug), `PITCH_HOLD article '${ph.slug}' is NEVER exposed in public articles list`);
  assert(getArticleBySlug(ph.slug) === null, `getArticleBySlug('${ph.slug}') returns null for PITCH_HOLD article`);
});

// 3. Three Publication Origins Supported
const mwtOriginals = publicArticles.filter((a) => a.publicationOrigin === "maps_with_teeth");
const externalPubs = publicArticles.filter((a) => a.publicationOrigin === "external");
const syndicatedPubs = publicArticles.filter((a) => a.publicationOrigin === "syndicated");

assert(mwtOriginals.length > 0, `Maps With Teeth original articles exist (${mwtOriginals.length} found)`);
assert(externalPubs.length > 0, `External publication records exist (${externalPubs.length} found)`);
assert(syndicatedPubs.length > 0, `Syndicated / adapted articles exist (${syndicatedPubs.length} found)`);

// 4. Content Types Validation
const validContentTypes = new Set([
  "POLICY_ANALYSIS",
  "SYSTEMS_NOTE",
  "RESEARCH_NOTE",
  "FOUNDER_ESSAY",
  "PROJECT_UPDATE",
]);

ARTICLES.forEach((article) => {
  assert(
    validContentTypes.has(article.contentType),
    `Article '${article.slug}' has valid content type '${article.contentType}'`
  );
  assert(article.title.length > 0, `Article '${article.slug}' has non-empty title`);
  assert(article.dek.length > 0, `Article '${article.slug}' has non-empty dek`);
  assert(article.readingTime.includes("min read"), `Article '${article.slug}' has reading time`);
});

// 5. External Publication Attribution Integrity
externalPubs.forEach((ext) => {
  assert(!!ext.externalPublicationName, `External article '${ext.slug}' specifies externalPublicationName`);
  assert(!!ext.externalPublicationUrl, `External article '${ext.slug}' specifies externalPublicationUrl`);
  assert(!!ext.abstract, `External article '${ext.slug}' provides an abstract`);
  
  const citation = generateArticleCitation(ext);
  assert(
    citation.includes(ext.externalPublicationName!),
    `External citation attributes '${ext.externalPublicationName}' rather than claiming MWT as publisher`
  );
});

// 6. Citation Generation Format
const sampleOriginal = mwtOriginals[0];
const originalCitation = generateArticleCitation(sampleOriginal);
assert(originalCitation.includes("Jayme Volstad"), "Citation includes author Jayme Volstad");
assert(originalCitation.includes(sampleOriginal.title), "Citation includes article title");
assert(originalCitation.includes("Maps With Teeth Field Notes"), "Original citation includes Maps With Teeth Field Notes");
assert(originalCitation.includes(sampleOriginal.canonicalUrl), "Citation includes canonical URL");

const bibtex = generateBibtexCitation(sampleOriginal);
assert(bibtex.startsWith("@article{"), "BibTeX citation generates valid @article structure");
assert(bibtex.includes("author = {"), "BibTeX includes author field");

// 7. Author Bio Integrity
assert(JAYME_VOLSTAD_AUTHOR.name === "Jayme Volstad", "Author is Jayme Volstad");
assert(JAYME_VOLSTAD_AUTHOR.role === "Founder / Project Director", "Author role is accurate");
assert(
  !JAYME_VOLSTAD_AUTHOR.bio.includes("certified") && !JAYME_VOLSTAD_AUTHOR.bio.includes("licensed attorney"),
  "Author bio avoids inflated credentials"
);

// 8. Policy & Research Filtering
const policyAndResearch = getPolicyAndResearchArticles();
policyAndResearch.forEach((pr) => {
  assert(
    pr.contentType === "POLICY_ANALYSIS" || pr.contentType === "RESEARCH_NOTE",
    `Policy & Research query returns only policy or research notes (found ${pr.contentType})`
  );
});

// 9. Topic Filtering
const continuityArticles = getArticlesByTopic("Continuity");
assert(continuityArticles.length > 0, "Topic filter for 'Continuity' returns matching articles");
continuityArticles.forEach((a) => {
  assert(a.topics.includes("Continuity"), `Article '${a.slug}' contains 'Continuity' topic`);
});

// 10. Evidentiary Disclaimers Check
mwtOriginals
  .filter((a) => a.contentType === "POLICY_ANALYSIS" || a.contentType === "SYSTEMS_NOTE")
  .forEach((a) => {
    assert(
      a.whatThisArticleDoesNotClaim && a.whatThisArticleDoesNotClaim.length > 0,
      `Policy/Systems article '${a.slug}' includes 'whatThisArticleDoesNotClaim' guardrail`
    );
  });

console.log("==================================================");
console.log("SUMMARY: ALL EDITORIAL QA INVARIANTS PASSED (100%)");
console.log("==================================================");
