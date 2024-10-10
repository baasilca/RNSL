import { QUERY_PHOTO_STORIES, QUERY_SINGLE_PHOTO_STORY } from "@/graphql/photoStories";
import { PhotoStoryType } from "@/types/photoStory";

export const fetchPhotoStories = async ({
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
        query: QUERY_PHOTO_STORIES,
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
    return (respData?.data?.PhotoStories?.docs || []) as PhotoStoryType[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchSinglePhotoStory = async ({
  slug,
  cache = "no-store",
}: {
  slug: string;
  cache?: RequestCache;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_SINGLE_PHOTO_STORY,
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
    return respData?.data?.PhotoStories?.docs[0] as PhotoStoryType;
  } catch (err) {
    console.log(err);
  }
};
