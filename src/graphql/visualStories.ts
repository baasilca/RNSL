export const QUERY_VISUAL_STORIES = `
  query VisualStories($limit: Int, $sort: String) {
    VisualStories(where: {}, limit: $limit, sort: $sort) {
      docs {
        id
        title
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

export const QUERY_SINGLE_VISUAL_STORY = `
  query VisualStory($id: String!) {
    VisualStory(id: $id) {
      id
      title
      content
      thumbnail {
        alt
        url
      }
      mediaItems {
        id
        media {
          alt
          url
        }
        caption
      }
      createdAt
    }
  }
`;
