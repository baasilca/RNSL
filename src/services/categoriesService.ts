import { QUERY_CATEGORIES, QUERY_SUB_CATEGORIES_BY_CATEGORY } from "@/graphql/categories";
import { ArticleCategoryType, ArticleSubCategoryType } from "@/types/article";

export const fetchCategories = async ({
  limit = 10,
  cache = "no-store",
}: {
  limit?: number;
  cache?: RequestCache;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_CATEGORIES,
        variables: {
          limit,
        },
      }),
      // cache,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const respData = await response.json();
    return (respData?.data?.Categories?.docs || []) as ArticleCategoryType[];
  } catch (err) {
    console.log(err);
  }
};

export const fetchSubCategories = async ({
  categoryId,
  limit = 10,
  cache = "no-store",
}: {
  categoryId: string;
  limit?: number;
  cache?: RequestCache;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_SUB_CATEGORIES_BY_CATEGORY,
        variables: {
          categoryId,
          limit,
        },
      }),
      // cache,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const respData = await response.json();
    return (respData?.data?.SubCategories?.docs || []) as ArticleSubCategoryType[];
  } catch (err) {
    console.log(err);
  }
};
