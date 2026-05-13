import NewsArticle from "@/views/NewsArticle";
import { NEWS_ARTICLES, getNewsArticle } from "@/content/news";

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }) {
  const article = getNewsArticle(params.slug);

  if (!article) {
    return {
      title: "ไม่พบบทความข่าวสาร",
    };
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `https://www.aileensolutions.com/news/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Aileen Solutions`,
      description: article.summary,
      url: `https://www.aileensolutions.com/news/${article.slug}`,
    },
  };
}

export default function NewsArticlePage({ params }) {
  return <NewsArticle slug={params.slug} />;
}
