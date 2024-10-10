export const QUERY_ALL_NEWS = `
  query {
    allNews( where : { status: { equals: approved }}) {
      docs {
        id
        title
        content
        isTrending
        image{
          alt
          url
          height
          width
        }
        categoryId{
          name
        }
        subCategoryId{
          name
        }
        publishedAt
        summary
        tagIds{
          name
        }
      }
    }
  }
`;

export const queryAllNews = ({
  categoryId,
  subCategoryId,
  limit = 10,
  sort = "-publishedAt",
}: {
  categoryId?: string;
  subCategoryId?: string;
  limit?: number;
  sort?: "publishedAt" | "-publishedAt" | "views" | "-views";
}) => {
  return `
   query {
    allNews( where : { 
      status: { equals: approved },
      ${categoryId ? `categoryId: { equals: "${categoryId}" }` : ""}
      ${subCategoryId ? `subCategoryId: { equals: "${subCategoryId}" }` : ""}
    },
    limit: ${limit},
    sort: "${sort}"
    ) {
      docs {
        id
        title
        slug
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
  }
`;
};

export const queryLatestNewsTitles = ({ limit = 4 }: { limit?: number }) => {
  return `
   query {
    allNews( where : { 
      status: { equals: approved },
    },
    limit: ${limit},
    sort: "-publishedAt"
    ) {
      docs {
        id
        title
        publishedAt
      }
    }
  }
`;
};

export const queryHeroSectionNews = ({
  categoryId = "66c878ced29927af6420a760",
  trendingNewsLimit = 3,
  latestNewsLimit = 3,
  categoryNewsLimit = 3,
}: {
  categoryId?: string;
  trendingNewsLimit?: number;
  latestNewsLimit?: number;
  categoryNewsLimit?: number;
}) => {
  return `
    query {
    trendingNews: allNews(
      where: {
        status: { equals: approved }
      },
      limit: ${trendingNewsLimit},
      sort: "publishedAt: -1"
    ) {
      docs {
        id
        title
        content
        image {
          alt
          url
          height
          width
        }
      }
    }
    lastUpdatedNews: allNews(
      where: {
        status: { equals: approved }
      },
      limit: ${latestNewsLimit},
      sort: "publishedAt: -1"
    ) {
      docs {
        id
        title
        content
        publishedAt
        categoryId {
          name
        }
        subCategoryId{
          name
        }
        image {
          alt
          url
          height
          width
        }
      }
    }
  }
  `;
};

export const QUERY_TOP_BAR = `
  query {
    Topbar {
      mainNavLinks {
        category {
          id
          name
        }
      }
      subNavLinks{
          header
          navItems{
              category{
                  name
                  id
              }
              id
          }
      }
      socialLinks{
          id
          link{
              label
              logo{
                  alt
                  id
                  filesize
                  filename
              }
          }
      }
    }
  }`;

export const GET_NEWS_BY_ID = `
  query getNewsById($id:String!){
    News(id:$id) {
      content
      comments{
        comment
        createdAt
        userId{
          firstName
          lastName
        }
      }
      createdBy{
        firstName
        lastName
      }
      categoryId{
        name
      }
      subCategoryId{
        name
      }
      image{
        alt
        url
        height
        width
      }
      likes
      publishedAt
      trendingPosition
      summary
      tagIds{
        name
      }
      title
    }
  }
`;

export const QUERY_CATEGORICAL_NEWS = `
  query getLatestCategoricalNews($id: JSON!,$limit:Int=10) {
    allNews(
      where: { categoryId: { in: [$id] } },
      limit: $limit,
      sort: "publishedAt_DESC"
    ) {
      docs {
        id
        title
        content(depth: 1)
        isTrending
        approvedBy {
          firstName
          lastName
          id
          role
          email
        }
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
        subCategoryId{
          name
          id
        }
        createdBy {
          firstName
          id
          lastName
          email
          role
        }
        likes
        publishedAt
        summary
        tagIds {
          name
        }
        views
      }
    }
  }
`;

export const QUERY_ALL_TAGS = `
  query {
    Tags {
      docs {
        id
        name
      }
    }
}`;

export const QUERY_TAGS_NEWS = `
  query getLatestTaggedNews($id: JSON!,$limit:Int=10) {
    allNews(
      where: { tagIds: { in: [$id] } },
      limit: $limit,
      sort: "publishedAt_DESC"
    ) {
      docs {
        id
        title
        content(depth: 1)
        isTrending
        image {
          alt
          url
          height
          width
        }
        categoryId {
          name
        }
        subCategoryId{
          name
        }
        createdBy {
          firstName
          lastName
        }
        likes
        publishedAt
        summary
        tagIds {
          name
        }
        views
      }
    }
  }
`;

export const QUERY_ALL_SUB_CATEGORY = `
  query {
    SubCategories {
      docs {
        id
        name
        categoryId{
            name
            id
        }
      }
    }
}
`;

export const QUERY_CATEGORY_BY_NAME = `
  query getByName($name:String){
    Categories(where:{name:{contains:$name}}) {
      docs {
        name
        id
      }
    }
  }
`;

export const QUERY_TAGS_BY_NAME = `
  query getByName($name:String){
    Tags(where:{name:{contains:$name}}) {
      docs {
        name
        id
      }
    }
  }
`;

export const queryBlock4Data = () => {
  return `query {
  popularNews: allNews(where: { status: { equals:  approved} }, limit: 5, sort: "-views") {
    docs {
      id
      title
      publishedAt
      image {
        url
      }
    }
  }
}`;
};

export const queryAllShorts = ({
  limit = 4,
  sort = "-createdAt",
}: {
  limit?: number;
  sort?: "createdAt" | "-createdAt";
}) => {
  return `
   query {
    Shorts(where: {}, limit: ${limit}, sort: "${sort}") {
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
};

export const queryRecentNews = ({ where = "{}", limit = 10, sort = "-publishedAt" }) => {
  return `
  query {
   allNews( where : ${where},
   limit: ${limit},
   sort: "${sort}"
   ) {
     docs {
       id
       title
       slug
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
       status
       tagIds {
          name
          slug
       }
     }
   }
 }
`;
};
