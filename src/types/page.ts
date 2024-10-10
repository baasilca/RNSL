export type PageType = {
  id: string;
  fullTitle: string;
  layout: PageLayoutType[];
  slug: string;
  showTrendingNews: boolean;
};

export type PageLayoutType = {
  id: string;
  blockName: string;
  blockType: string;
  section: PageColumnType[];
  layoutWidth: "container" | "fullScreen";
};

export type PageColumnType = {
  id: string;
  width: string;
  blockType: string;
  Blocks: PageBlockType[];
};

export type PageBlockType =
  | HeroBlockType
  | FeaturedNewsWithThumbnailsType
  | SpecialBlockType
  | NewsLetterBlockType
  | TitleNewsBlockType
  | ShortsBlockType
  | FeaturedVideoNewsBlockType
  | SubCategoryWiseNewsBlockType
  | FeaturedNewsOverImageBlockType
  | VisualStoriesBlockType;

export type PageBaseBlockType = {
  id: string;
  blockType: string;
};

export type HeroBlockType = PageBaseBlockType & {
  categories: CategoryType[];
  carousel: Partial<NewsSelectionType>;
  highlight: Partial<NewsSelectionType>;
};

export type FeaturedNewsWithThumbnailsType = PageBaseBlockType & {
  title?: string;
  category: string;
};

export type SpecialBlockType = PageBaseBlockType & {
  title: string;
};

export type CategoryType = { category: string; id: string };

export type NewsSelectionType = {
  isTrending: boolean;
  isSpecificCategory: boolean;
  isSpecificTags: boolean;
  specificCategory?: string[] | null;
  specificTags?: string[] | null;
  limit: number;
  image: boolean;
  title: boolean | string;
  summary: boolean;
  layoutAlignment: string;
};

export type NewsLetterBlockType = PageBaseBlockType & {};

export type AdvertisementBlockType = PageBaseBlockType & {
  adType: "vertical" | "horizontal" | "square";
};

export type TitleNewsBlockType = PageBaseBlockType & {
  title: string;
  orderBy: "latest" | "oldest" | "trending";
  limit: number;
};

export type ShortsBlockType = PageBaseBlockType & {
  title: string;
  orderBy: "latest" | "oldest" | "trending";
};

export type FeaturedVideoNewsBlockType = PageBaseBlockType & {
  title: string;
  isTrending: boolean;
  category: string;
};

export type SubCategoryWiseNewsBlockType = PageBaseBlockType & {
  title: string;
  category: string;
  orderBy: "latest" | "oldest";
};

export type NewsGridBlockType = PageBaseBlockType & {
  title: string;
  category: string;
  orderBy: "latest" | "oldest";
  maxColumns: number;
  limit: number;
};

export type NewsListBlockType = PageBaseBlockType & {
  title: string;
  category: string;
  orderBy: "latest" | "oldest";
  maxColumns: number;
  limit: number;
};

export type SidebarNewsGridBlockType = PageBaseBlockType & {
  title: string;
  showLogo?: boolean;
  category?: string;
  orderBy: "latest" | "oldest" | "views";
  newsTitlePosition: "below" | "overlay";
  limit: number;
};

export type SidebarNewsListBlockType = PageBaseBlockType & {
  title: string;
  category?: string;
  orderBy: "latest" | "oldest" | "views";
  limit: number;
  showNumber: boolean;
};

export type FeaturedNewsOverImageBlockType = PageBaseBlockType & {
  title: string;
  category: string;
  limit: number;
};

export type ArticlesAndPeriodicalsBlockType = PageBaseBlockType & {
  title: string;
  limit: number;
};

export type InterviewBlockType = PageBaseBlockType & {
  title: string;
  limit: number;
};

export type VisualStoriesBlockType = PageBaseBlockType & {
  title: string;
  sortBy: "latest" | "oldest";
};

export type NewsListUnderImageBlockType = PageBaseBlockType & {
  title: string;
};
