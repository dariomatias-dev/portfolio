import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export type TechnologyCategoryType = "Frontend" | "Backend" | "Mobile" | "Database" | "DevOps" | "Design";

export interface Technology {
  name: string;
  category: TechnologyCategoryType;
  descriptionKey: string;
  url: string;
  docs: string;
  tags: string[];
  icon: IconType | LucideIcon;
}