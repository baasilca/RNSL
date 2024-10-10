export type VisualStoryType = {
  id: string;
  title: string;
  content: string;
  thumbnail: {
    url: string;
  };
  mediaItems: {
    id: string;
    media: { url: string };
    caption: string;
  }[];
  createdAt: Date;
};
