export interface CommunityStats {
  stars: string;
  forks: string;
}

export interface ContributionItem {
  type: string;
  title: string;
  description: string;
  tags: string[];
  stats: CommunityStats;
  icon: IconType;
  color: string;
  bg: string;
  gradient: string;
  border: string;
  command: string;
  repoUrl: string;
}
