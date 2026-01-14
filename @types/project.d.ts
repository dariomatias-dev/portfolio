export type ProjectLinkType =
  | "github"
  | "site"
  | "playStore"
  | "pubDev"
  | "goDev";

export type ProjectCategory = 
  | "frontend" 
  | "backend" 
  | "mobile" 
  | "fullstack" 
  | "package" 
  | "devops";

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface Project {
  title: string;
  descriptionKey: string;
  technologies: string[];
  category: ProjectCategory;
  links: ProjectLink[];
}