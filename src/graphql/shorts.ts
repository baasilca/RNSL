export const SHORTS = `
  query Shorts($limit: Int, $sort: String) {
    Shorts(where: {}, limit: $limit, sort: $sort) {
      docs {
        id
        content
        thumbnail {
          alt
          url
          height
          width
        }
      }
    }
  }
`;
