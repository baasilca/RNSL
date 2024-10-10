export const getListQuery = async <T>(query: string): Promise<T> => {
  try {
    return await fetch(`${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`, {
      method: "POST",
      body: JSON.stringify({
        query,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async res => await res.json());
  } catch (error) {
    console.error(error);
    throw Error("API Error");
  }
};

export const getWithVariablesQuery = (query: string, variables: any) => {
  try {
    return fetch(`${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`, {
      method: "POST",
      body: JSON.stringify({
        query,
        variables,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async res => await res.json());
  } catch (er) {
    console.error(er);
    throw Error("API Error");
  }
};
