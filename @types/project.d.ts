import { TechnologyId } from "@/enums/technology-id";

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
  key: string;
  title: string;
  technologies: TechnologyId[];
  category: ProjectCategory;
  links: ProjectLink[];
}
