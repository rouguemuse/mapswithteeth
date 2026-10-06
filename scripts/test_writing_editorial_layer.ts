import { ARTICLES } from "../src/data/writing/articles";
import {
  getPublicArticles,
  getArticleBySlug,
  getFeaturedArticle,
  getExternalArticles,
  getPolicyAndResearchArticles,
  getArticlesByTopic,
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

assert(ARTICLES.length === 5, `Registry contains exactly the 5 authorized editorial records (found ${ARTICLES.length})`);

const publicArticles = getPublicArticles();
assert(publicArticles.length === 1, `Exactly one article is public (found ${publicArticles.length})`);
assert(
  publicArticles[0]?.slug === "the-human-becomes-the-integration-layer",
  "The Human Becomes the Integration Layer is the only public article"
);

const drafts = ARTICLES.filter((a) => a.status === "draft");
const pitchHolds = ARTICLES.filter((a) => a.status === "pitch_hold");

assert(drafts.length === 3, `Three planned pieces remain DRAFT (found ${drafts.length})`);
assert(pitchHolds.length === 1, `One planned piece remains PITCH_HOLD (found ${pitchHolds.length})`);

[...drafts, ...pitchHolds].forEach((article) => {
  assert(!getArticleBySlug(article.slug), `Non-public article '${article.slug}' cannot be retrieved publicly`);
  assert(!article.body, `Non-public article '${article.slug}' has no implementation-generated body copy`);
});

assert(
  pitchHolds[0]?.slug === "related-does-not-mean-proven",
  "Related Does Not Mean Proven remains PITCH_HOLD"
);

assert(getExternalArticles().length === 0, "No fictional external publication records are public");
assert(
  !ARTICLES.some((a) => a.publicationOrigin === "external" || a.publicationOrigin === "syndicated"),
  "Registry contains no fictional external or syndicated records"
);
assert(
  !JSON.stringify(ARTICLES).includes("/example-") && !JSON.stringify(ARTICLES).includes("Tech Policy & Public Systems"),
  "Registry contains no demo publication URLs or invented outlet names"
);

const flagship = getArticleBySlug("the-human-becomes-the-integration-layer");
assert(!!flagship, "Approved flagship article is publicly retrievable");
assert(
  flagship?.body?.startsWith("A person can do everything they are told to do and still disappear between systems.") === true,
  "Flagship body begins with the approved editorial copy"
);
assert(
  !flagship?.body?.includes("The Architecture of the Administrative Void"),
  "Implementation-generated substitute article body is removed"
);

const featured = getFeaturedArticle();
assert(featured?.slug === flagship?.slug, "Approved flagship article is the featured article");

const validContentTypes = new Set([
  "POLICY_ANALYSIS",
  "SYSTEMS_NOTE",
  "RESEARCH_NOTE",
  "FOUNDER_ESSAY",
  "PROJECT_UPDATE",
]);

ARTICLES.forEach((article) => {
  assert(validContentTypes.has(article.contentType), `Article '${article.slug}' has a valid content type`);
  assert(article.title.length > 0, `Article '${article.slug}' has a non-empty title`);
  assert(article.dek.length > 0, `Article '${article.slug}' has a non-empty dek`);
});

const originalCitation = generateArticleCitation(flagship!);
assert(originalCitation.includes("Jayme Volstad"), "Citation includes author Jayme Volstad");
assert(originalCitation.includes(flagship!.title), "Citation includes flagship title");
assert(originalCitation.includes("Maps With Teeth Field Notes"), "Citation identifies Maps With Teeth Field Notes");
assert(originalCitation.includes(flagship!.canonicalUrl), "Citation includes canonical URL");

const bibtex = generateBibtexCitation(flagship!);
assert(bibtex.startsWith("@article{"), "BibTeX citation generates @article structure");

assert(JAYME_VOLSTAD_AUTHOR.name === "Jayme Volstad", "Author is Jayme Volstad");
assert(JAYME_VOLSTAD_AUTHOR.role === "Founder / Project Director", "Author role is Founder / Project Director");
assert(
  JAYME_VOLSTAD_AUTHOR.selectedPublications.length === 1 &&
    JAYME_VOLSTAD_AUTHOR.selectedPublications[0]?.title === flagship?.title,
  "Author profile lists only the genuinely published article"
);

const policyAndResearch = getPolicyAndResearchArticles();
assert(policyAndResearch.length === 0, "Draft policy analyses are not exposed as published policy writing");

const continuityArticles = getArticlesByTopic("Continuity");
assert(continuityArticles.length === 1, "Continuity filter returns only the published flagship article");

assert(
  flagship?.whatThisArticleDoesNotClaim && flagship.whatThisArticleDoesNotClaim.length > 0,
  "Flagship systems note includes explicit non-claims guardrails"
);

console.log("==================================================");
console.log("SUMMARY: EDITORIAL INTEGRITY INVARIANTS PASSED");
console.log("==================================================");
