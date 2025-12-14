export type ProjectLinkType =
  | "github"
  | "site"
  | "playStore"
  | "pubDev"
  | "goDev";

export type ProjectCategory = 
  | "Frontend" 
  | "Backend" 
  | "Mobile" 
  | "Full Stack" 
  | "Package" 
  | "DevOps";

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  links: ProjectLink[];
}