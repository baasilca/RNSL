import { ArticleType } from "./article";

export type ArticleListType = Pick<
  ArticleType,
  | "id"
  | "slug"
  | "title"
  | "summary"
  | "isTrending"
  | "image"
  | "categoryId"
  | "subCategoryId"
  | "createdBy"
  | "likes"
  | "publishedAt"
  | "tagIds"
  | "views"
>;

export type NewsHomeListTypes = {
  data: {
    allNews: {
      docs: Pick<
        ArticleType,
        | "id"
        | "title"
        | "summary"
        | "isTrending"
        | "image"
        | "categoryId"
        | "createdBy"
        | "likes"
        | "publishedAt"
        | "tagIds"
        | "views"
      >[];
    };
  };
};

export type NewsHeroSectionType = {
  data: {
    trendingNews: {
      docs: Pick<ArticleType, "id" | "title" | "content" | "image" | "categoryId">[];
    };
    lastUpdatedNews: {
      docs: Pick<
        ArticleType,
        "id" | "title" | "content" | "image" | "categoryId" | "publishedAt"
      >[];
    };
  };
};

export type NewsList = {
  id: string;
  title: any;
  content: any;
  isTrending: boolean;
  image: any;
  categoryId: any[];
  createdBy: { firstName: string; lastName: string };
  likes: number;
  publishedAt: string;
  summary: string;
  tagIds: any[];
  views: number;
};

export type NewsListResponse = {
  response: { data: { allNews: { docs: NewsList[] } } };
};

export type ArticleDetailType = Pick<
  ArticleType,
  | "id"
  | "title"
  | "content"
  | "summary"
  | "isTrending"
  | "image"
  | "categoryId"
  | "subCategoryId"
  | "createdBy"
  | "likes"
  | "publishedAt"
  | "tagIds"
  | "views"
>;
