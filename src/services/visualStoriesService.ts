import { QUERY_SINGLE_VISUAL_STORY, QUERY_VISUAL_STORIES } from "@/graphql/visualStories";
import { VisualStoryType } from "@/types/visualStory";

export const fetchVisualStories = async ({
  limit = 10,
  sort = "-createdAt",
  cache = "no-store",
}: {
  limit?: number;
  sort?: "createdAt" | "-createdAt";
  cache?: RequestCache;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_VISUAL_STORIES,
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
    return (respData?.data?.VisualStories?.docs || []) as VisualStoryType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchSingleVisualStory = async ({
  id,
  cache = "no-store",
}: {
  id: string;
  cache?: RequestCache;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_SINGLE_VISUAL_STORY,
        variables: {
          id,
        },
      }),
      cache,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const respData = await response.json();
    return respData?.data?.VisualStory as VisualStoryType;
  } catch (err) {
    console.log(err);
  }
};
