import { AdminType } from "./admin";
import { ImageType, RichTextType, StatusTypeEnum } from "./common";

export type ArticleType = {
  id: string;
  thumbnail: string;
  slug: string;
  title: RichTextType;
  region?: string;
  content: RichTextType;
  summary: string;
  image: ImageType;
  categoryId: ArticleCategoryType;
  subCategoryId: ArticleSubCategoryType;
  tagIds: ArticleTagType[];
  isTrending: boolean;
  publishedAt: string;
  status: StatusTypeEnum;
  trendingPosition: number;
  views: number;
  likes: number;
  comments: [];
  createdBy: AdminType;
  createdAt: Date;
  updatedAt: Date;
};

export type ArticleTagType = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type ArticleCategoryType = {
  id: string;
  name: string;
  slug: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
  subCategories: ArticleSubCategoryType[];
};

export type ArticleSubCategoryType = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
};
