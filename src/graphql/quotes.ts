export const QUERY_QUOTES = `
  query getQuotes($limit: Int = 5, $sort: String) {
    Quotes(limit: $limit, sort: $sort) {
      docs {
        author
        id
        image {
          alt
          url
          width
          height
        }
        position
        quote
        updatedAt
      }
    }
  }
`;
