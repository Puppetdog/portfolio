import { Project, Service } from "../types/component";
import { client } from "./lib/client";
import { groq } from "next-sanity";

export async function getServices(): Promise<Service[]> {
  return client.fetch(groq`*[_type == "service" ]{
    name,
    description
  }`);
}

export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    url,
    "image": image.asset -> url,
    badges,
    challenges,
    learnings,
    description,
    content,
    probState,
    endDate,
    startDate,
    "hfDesign": hfDesign.asset -> url,
    role

  }`);
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    url,
    "image": image.asset -> url,
    badges,
    challenges,
    learnings,
    description,
    content,
    
    probState,
    endDate,
    startDate,
    "hfDesign": hfDesign.asset -> url,
    role

  }`,
    // eslint-disable-next-line prettier/prettier
    { slug }
  );
}
