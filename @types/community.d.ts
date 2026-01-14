export interface CommunityStats {
  stars: string;
  forks: string;
}

export interface ContributionItem {
  typeKey: string;
  title: string;
  descriptionKey: string;
  tagKeys: string;
  stats: CommunityStats;
  icon: IconType;
  color: string;
  bg: string;
  gradient: string;
  border: string;
  command: string;
  repoUrl: string;
}
