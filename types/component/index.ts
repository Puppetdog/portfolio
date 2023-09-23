import { PortableTextBlock } from "sanity";

export interface CardProps {
  ImageSrc: string;
  Heading: string;
  Body: string;
  Styling: string;
  ImWidth: number;
  ImHeight: number;
}

export type Project = {
  badges: string[];
  description: string;
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
