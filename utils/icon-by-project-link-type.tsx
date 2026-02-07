import { ExternalLink, Globe, Package, Smartphone } from "lucide-react";
import { ElementType } from "react";
import { FiGithub } from "react-icons/fi";

import { ProjectLinkType } from "@/@types/project";

const iconMap: Record<ProjectLinkType, ElementType> = {
  github: FiGithub,
  site: Globe,
  playStore: Smartphone,
  pubDev: Package,
  goDev: Package,
};

export const getIconByProjectLinkType = (type: ProjectLinkType) => {
  return iconMap[type] ?? ExternalLink;
};
