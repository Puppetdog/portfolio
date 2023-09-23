import { Project } from "../types/component";
import { client } from "./lib/client";
import { groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    url,
    content

  }`);
}
