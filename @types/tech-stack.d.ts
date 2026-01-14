import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export type TechStackCategoryType = "Frontend" | "Backend" | "Mobile" | "Database" | "DevOps" | "Design";

export interface TechStackItem {
  name: string;
  category: TechStackCategoryType;
  descriptionKey: string;
  url: string;
  docs: string;
  tags: string[];
  icon: IconType | LucideIcon;
}