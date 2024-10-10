export const QUERY_SUB_CATEGORIES_BY_CATEGORY = `
  query getSubCategoryById($categoryId: JSON!, $limit: Int) {
    SubCategories(where: { categoryId: { in: [$categoryId] } }, limit: $limit) {
      docs {
        id
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = `
  query Categories($limit: Int) {
    Categories(limit: $limit) {
      docs {
        id
        name
      }
    }
  }
`;
