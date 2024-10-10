export const NEWS_TITLES = `
  query NewsTitles($limit: Int, $sort: String, $isTrending: Boolean) {
    allNews(
      where: { 
        isTrending: { equals: $isTrending } 
      },
      limit: $limit,
      sort: $sort
    ) {
      docs {
        id
        title
        slug
        publishedAt
        isTrending
        trendingPosition
        categoryId {
          slug
        }
        subCategoryId {
          slug
        }
      }
    }
  }
`;

export const NEWS = ({
  categoryId,
  subCategoryId,
}: {
  categoryId?: string;
  subCategoryId?: string;
}): string => {
  return `
  query News($limit: Int, $sort: String) {
    allNews(
      where: {
        status: {  },
        ${categoryId ? `categoryId: { equals: "${categoryId}" }` : ""}
        ${subCategoryId ? `subCategoryId: { equals: "${subCategoryId}" }` : ""}
      },
      limit: $limit,
      sort: $sort
    ) {
      docs {
        id
        slug
        title
        summary
        isTrending
        image {
          alt
          url
          height
          width
        }
        categoryId {
          name
          slug
        }
        subCategoryId {
          name
          slug
        }
        publishedAt
      }
    }
  }`;
};

export const NEWS_BY_ID = (): string => {
  return `
   query getNewsBySlug($slug: String!) {
   allNews(where: { slug: { equals: $slug } }) {
    docs {
      title
      content
      summary
      image {
        alt
        url
        height
        width
      }
      categoryId {
        name
        id
      }
      subCategoryId {
        name
      }
      tagIds {
        name
      }
      isTrending
      trendingPosition
      status
      publishedAt
      likes
      views
      comments {
        comment
        userId {
          firstName
          lastName
        }
        createdAt
      }
      createdBy {
        firstName
        lastName
      }
    }
  }
}`;
};
