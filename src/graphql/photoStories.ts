export const QUERY_PHOTO_STORIES = `
  query PhotoStories($limit: Int, $sort: String) {
    PhotoStories(where: {}, limit: $limit, sort: $sort) {
      docs {
        id
        title
        slug
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

export const QUERY_SINGLE_PHOTO_STORY = `
  query PhotoStories($slug: String) {
    PhotoStories(
      where: { slug: { equals: $slug } }, 
    ) {
      docs {
        id
        title
        slug
        content
        thumbnail {
          alt
          url
          height
          width
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
  }
`;
