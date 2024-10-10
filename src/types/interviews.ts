import { ImageType } from "./common";

export type InterviewType = {
  id: string;
  image: ImageType;
  title: string;
  content: string;
  interviewee: string;
  interviewer: string;
  role: string;
  updatedAt: string;
};
