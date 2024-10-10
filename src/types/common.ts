export enum RichTextTypeEnum {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  quote = "quote",
  ul = "ul",
  ol = "ol",
  li = "li",
  link = "link",
  label = "label",
  largeBody = "large-body",
}

export enum StatusTypeEnum {
  approved = "approved",
  rejected = "rejected",
  draft = "draft",
  published = "published",
}

export type RichTextType = {
  type?: RichTextTypeEnum;
  children: {
    text: string;
    bold?: boolean;
  }[];
}[];

export type ImageType = {
  id: string;
  alt: string;
  path: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  createdAt: string;
  updatedAt: string;
  url: string;
};

export type SocialLinkType = {
  platform: string;
  url: string;
};
