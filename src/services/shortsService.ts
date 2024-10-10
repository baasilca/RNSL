import { SHORTS } from "@/graphql/shorts";
import { ShortType } from "@/types/shorts";

export const fetchShorts = async ({
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
        query: SHORTS,
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
    return (respData?.data?.Shorts?.docs || []) as ShortType[];
  } catch (err) {
    console.log(err);
  }
};
