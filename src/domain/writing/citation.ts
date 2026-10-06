import { Article } from "./types";

/**
 * Generates an authoritative, human-readable bibliographic citation string for an article.
 * For MWT originals: cites Jayme Volstad, title, Maps With Teeth Field Notes, date, and canonical URL.
 * For external publications: cites the original publisher rather than falsely presenting Maps With Teeth as publisher.
 */
export function generateArticleCitation(article: Article): string {
  const author = article.author || "Jayme Volstad";
  const title = `"${article.title}"`;
  
  if (article.publicationOrigin === "external" && article.externalPublicationName) {
    const pubName = article.externalPublicationName;
    const date = article.displayDate;
    const url = article.canonicalUrl || article.externalPublicationUrl || "https://mapswithteeth.org";
    return `${author}. ${title}. ${pubName}, ${date}. ${url}`;
  }

  const pubName = "Maps With Teeth Field Notes";
  const date = article.displayDate;
  const url = article.canonicalUrl || `https://mapswithteeth.org/writing/${article.slug}`;

  return `${author}. ${title}. ${pubName}, ${date}. ${url}`;
}

/**
 * Generates BibTeX format citation for researchers and academics.
 */
export function generateBibtexCitation(article: Article): string {
  const citeKey = `volstad${article.publicationDate.slice(0, 4)}_${article.slug.replace(/-/g, "_")}`;
  const author = article.author || "Jayme Volstad";
  const title = article.title;
  const year = article.publicationDate.slice(0, 4);
  const publisher =
    article.publicationOrigin === "external" && article.externalPublicationName
      ? article.externalPublicationName
      : "Maps With Teeth Field Notes";
  const url = article.canonicalUrl || `https://mapswithteeth.org/writing/${article.slug}`;

  return `@article{${citeKey},
  author = {${author}},
  title = {${title}},
  journal = {${publisher}},
  year = {${year}},
  url = {${url}}
}`;
}
