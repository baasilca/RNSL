// import { ArticleDetailType, ArticleListType } from "@/features/home/services/types";
import { ArticleListType ,ArticleDetailType} from "../types/type";
import { NEWS, NEWS_BY_ID, NEWS_TITLES } from "../graphql/news";

export const fetchNews = async ({
  categoryId,
  subCategoryId,
  limit = 10,
  sort = "-publishedAt",
  cache = "no-store",
}: {
  categoryId?: string;
  subCategoryId?: string;
  limit?: number;
  sort?: "publishedAt" | "-publishedAt";
  cache?: RequestCache;
}) => {
  try {
    const response = await fetch(`https://admin-dev.deshabhimani.info/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: NEWS({ categoryId, subCategoryId }),
        variables: {
          limit,
          sort,
        },
      }),
      cache,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const respData = await response.json();
    return (respData?.data?.allNews?.docs || []) as ArticleListType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchNewsTitles = async ({
  limit = 10,
  sort = "-publishedAt",
  cache = "no-store",
}: {
  limit?: number;
  sort?: "publishedAt" | "-publishedAt" | "-trendingPosition";
  cache?: RequestCache;
}) => {
  try {
    const response = await fetch(`https://admin-dev.deshabhimani.info/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: NEWS_TITLES,
        variables: {
          limit,
          sort,
          ...(sort === "-trendingPosition" ? { isTrending: true } : {}),
        },
      }),
      cache,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const respData = await response.json();
    return (respData?.data?.allNews?.docs || []) as ArticleListType[];
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleDetailNews = async ({
  slug,
  cache,
}: {
  slug: string;
  cache?: RequestCache;
}) => {
  try {
    const response = await fetch(`https://admin-dev.deshabhimani.info/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: NEWS_BY_ID(),
        variables: {
          slug,
        },
      }),
      cache,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const respData = await response.json();
    return (respData?.data?.allNews?.docs[0] || {}) as ArticleDetailType;
  } catch (err) {
    console.log(err);
  }
};
