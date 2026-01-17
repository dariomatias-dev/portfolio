"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SlSocialGithub } from "react-icons/sl";

import { Project } from "@/@types/project";
import { cn } from "@/lib/utils";
import { getProjectCategoryTheme } from "@/utils/get-project-category-theme";
import { LinkButton } from "../buttons/link-button";

export const ProjectCard = ({ project }: { project: Project }) => {
  const t = useTranslations();
  const initialImage = `/screenshots/${project.title
    .toLowerCase()
    .replace(/\s+/g, "_")}_screenshot.png`;

  const [imgSrc, setImgSrc] = useState(initialImage);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useMemo(
    () => getProjectCategoryTheme(project.category),
    [project.category]
  );

  const Icon = theme.icon;

  const primaryLink = useMemo(
    () =>
      project.links.find((l) =>
        ["site", "playStore", "pubDev"].includes(l.type)
      ) || project.links[0],
    [project.links]
  );

  const repoLink = useMemo(
    () => project.links.find((l) => l.type === "github"),
    [project.links]
  );

  return (
    <article
      className={`group relative flex flex-col h-full bg-[#09090b] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10 transform-gpu ${theme.shadow}`}
    >
      <div
        className={`absolute inset-0 bg-linear-to-b ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`}
      />

      <div className="h-56 w-full relative overflow-hidden bg-zinc-950 border-b border-white/5 z-10">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-1000 ease-out group-hover:scale-105 ${
            isLoading
              ? "opacity-0 blur-lg"
              : "opacity-90 group-hover:opacity-100 blur-0"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImgSrc("/image_placeholder.png");
            setIsLoading(false);
          }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        <div className="absolute top-4 right-4 z-20">
          <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/50 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div
              className={cn(
                "absolute inset-0 rounded-full opacity-20 blur-md",
                theme.glow
              )}
            />

            <Icon
              size={12}
              strokeWidth={3}
              className="relative z-10 text-white"
            />

            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.15em] text-zinc-100">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col grow p-6 -mt-12 z-20">
        <header className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight transition-all duration-300 group-hover:text-zinc-200">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm font-medium leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
            {t(`projects.list.${project.descriptionKey}.description`)}
          </p>
        </header>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#121212] border border-white/5 text-zinc-500 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:border-white/10 group-hover:text-zinc-300 group-hover:bg-[#18181b]"
            >
              {tech}
            </span>
          ))}
        </div>

        <footer className="flex flex-col sm:flex-row gap-3 sm:gap-2 pt-5 border-t border-white/5">
          <LinkButton
            href={primaryLink?.url ?? "#"}
            target="_blank"
            className="flex-1 text-sm justify-center px-4 py-2.5 rounded-full group/btn"
          >
            <span className="relative z-10">{t("actions.viewProject")}</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2.5}
              className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            />
          </LinkButton>

          <LinkButton
            href={repoLink?.url ?? "#"}
            target="_blank"
            disabled={!repoLink}
            className={cn(
              "flex items-center justify-center h-10 sm:h-full w-full sm:w-12 rounded-full border text-white gap-2 shrink-0 px-0 transition-all duration-300 active:scale-95",
              repoLink
                ? "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                : "border-white/10 bg-zinc-900/50 text-zinc-500"
            )}
          >
            <SlSocialGithub size={18} />

            <span className="sm:hidden text-xs font-bold">
              {t("actions.source")}
            </span>
          </LinkButton>
        </footer>
      </div>
    </article>
  );
};
