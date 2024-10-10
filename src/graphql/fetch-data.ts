import { gql } from "@apollo/client";
import { getClient } from "./client";
import { QUERY_ALL_NEWS } from "./query";

export async function queryAllNews() {
  const { data } = await getClient().query({
    query: gql(QUERY_ALL_NEWS),
  });

  return data.characters.results;
}
