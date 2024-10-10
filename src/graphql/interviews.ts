export const QUERY_INTERVIEWS = `
  query Interviews($limit: Int = 5, $sort: String) {
    Interviews(where: {}, limit: $limit, sort: $sort) {
      docs {
        id
        image {
          alt
          url
          width
          height
        }
        title
        content
        interviewee
        interviewer
        role
        updatedAt
      }
    }
  }
`;
