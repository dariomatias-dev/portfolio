"use client";

import Link from "next/link";

import { technologies } from "@/constants/technologies";
import { TechnologyId } from "@/enums/technology-id";
import { MouseEvent } from "react";

interface TechnologyBadgeProps {
  tech: TechnologyId;
  onClick: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void;
}

export const TechnologyBadge = ({ tech, onClick }: TechnologyBadgeProps) => {
  const displayName = technologies[tech]?.name || tech;

  return (
    <Link
      href={`?tech=${tech.toLowerCase()}#stack-details`}
      onClick={(e) => onClick(e)}
      className={
        "group/badge relative flex items-center rounded-full border border-white/5 bg-white/2 px-3 py-1 text-[11px] font-semibold tracking-wide text-zinc-500 transition-colors duration-300 hover:border-white/20 hover:bg-white/5 hover:text-zinc-200"
      }
    >
      {displayName}
    </Link>
  );
};
