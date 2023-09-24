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
  challenges: string[];
  learnings: string[];
  description: string;
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  probState: PortableTextBlock[];
  endDate: Date;
  startDate: Date;
  hfDesign: string;
  role: string;
};

export type Service = {
  name: string;
  description: string;
};
