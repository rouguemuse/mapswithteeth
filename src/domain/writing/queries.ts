import { Article, ArticleTopic, ContentType } from "./types";
import { ARTICLES } from "@/data/writing/articles";

/**
 * Returns all publicly visible articles (published or syndicated).
 * DRAFT and PITCH_HOLD articles are strictly filtered out and never exposed.
 */
export function getPublicArticles(): Article[] {
  return ARTICLES.filter(
    (article) => article.status === "published" || article.status === "syndicated"
  ).sort(
    (a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime()
  );
}

/**
 * Retrieves a single article by slug.
 * Returns null if not found or if the article is in DRAFT or PITCH_HOLD.
 */
export function getArticleBySlug(slug: string): Article | null {
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return null;
  if (article.status !== "published" && article.status !== "syndicated") {
    return null;
  }
  return article;
}

/**
 * Returns the primary featured article for the /writing index.
 */
export function getFeaturedArticle(): Article | null {
  const publicArticles = getPublicArticles();
  const featured = publicArticles.find((a) => a.featured);
  return featured || publicArticles[0] || null;
}

/**
 * Returns articles that were originally published by an external outlet.
 */
export function getExternalArticles(): Article[] {
  return getPublicArticles().filter(
    (article) => article.publicationOrigin === "external"
  );
}

/**
 * Returns articles that are either Policy Analysis or Research Notes.
 */
export function getPolicyAndResearchArticles(): Article[] {
  return getPublicArticles().filter(
    (article) =>
      article.contentType === "POLICY_ANALYSIS" ||
      article.contentType === "RESEARCH_NOTE"
  );
}

/**
 * Returns articles filtered by topic.
 */
export function getArticlesByTopic(topic: ArticleTopic | "All"): Article[] {
  const publicArticles = getPublicArticles();
  if (topic === "All") return publicArticles;
  return publicArticles.filter((article) => article.topics.includes(topic));
}

/**
 * Returns articles filtered by content type.
 */
export function getArticlesByContentType(type: ContentType | "ALL"): Article[] {
  const publicArticles = getPublicArticles();
  if (type === "ALL") return publicArticles;
  return publicArticles.filter((article) => article.contentType === type);
}

/**
 * Returns up to N related articles for a given article based on shared topics or explicit slugs.
 */
export function getRelatedArticles(article: Article, limit: number = 3): Article[] {
  const publicArticles = getPublicArticles().filter((a) => a.slug !== article.slug);
  
  // First priority: explicitly declared related slugs
  if (article.relatedArticleSlugs && article.relatedArticleSlugs.length > 0) {
    const explicitRelated = publicArticles.filter((a) =>
      article.relatedArticleSlugs?.includes(a.slug)
    );
    if (explicitRelated.length >= limit) {
      return explicitRelated.slice(0, limit);
    }
  }

  // Second priority: shared topics
  const withTopicOverlap = publicArticles.map((a) => {
    const overlap = a.topics.filter((t) => article.topics.includes(t)).length;
    return { article: a, overlap };
  });

  withTopicOverlap.sort((a, b) => b.overlap - a.overlap);

  return withTopicOverlap.map((item) => item.article).slice(0, limit);
}

/**
 * Returns published Policy Analysis and Research Note articles specifically for /policy.
 */
export function getPolicyLabRelatedArticles(): Article[] {
  return getPolicyAndResearchArticles().slice(0, 4);
}

/**
 * Returns all unique topics present across public articles.
 */
export const WRITING_TOPICS: (ArticleTopic | "All")[] = [
  "All",
  "Continuity",
  "Public Systems",
  "Texas",
  "Policy",
  "Privacy & Governance",
  "Resource Access",
  "Bad Maps",
  "Technology",
  "Founder Essays"
];
