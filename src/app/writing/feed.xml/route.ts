import { NextResponse } from "next/server";
import { getPublicArticles } from "@/domain/writing/queries";

export const dynamic = "force-static";

export async function GET() {
  const articles = getPublicArticles();
  const siteUrl = "https://mapswithteeth.org";

  const rssItems = articles
    .map((article) => {
      const isExternal = article.publicationOrigin === "external";
      const itemUrl = isExternal && article.externalPublicationUrl
        ? article.externalPublicationUrl
        : `${siteUrl}/writing/${article.slug}`;
      const pubDate = new Date(article.publicationDate).toUTCString();

      return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${itemUrl}</link>
      <guid isPermaLink="true">${siteUrl}/writing/${article.slug}</guid>
      <description><![CDATA[${article.dek}]]></description>
      <author><![CDATA[${article.author}]]></author>
      <category><![CDATA[${article.contentType}]]></category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Maps With Teeth — Field Notes</title>
    <link>${siteUrl}/writing</link>
    <description>Writing, research, and analysis about institutional seams, public systems, continuity, technology, evidence, and what happens when responsibility crosses a boundary.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/writing/feed.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
