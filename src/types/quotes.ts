import { ImageType } from "./common";

export type QuotesType = {
  id: string;
  author: string;
  image: ImageType;
  position: string;
  quote: string;
  updatedAt: string;
};
