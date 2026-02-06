"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { SlSocialGithub } from "react-icons/sl";

import { Project } from "@/@types/project";
import { cn } from "@/lib/utils";
import { getProjectCategoryTheme } from "@/utils/get-project-category-theme";
import { LinkButton } from "../buttons/link-button";
import { ImageViewer } from "./image-viewer";

export const ProjectCard = ({ project }: { project: Project }) => {
  const t = useTranslations();

  const initialImage = `/screenshots/${project.title
    .toLowerCase()
    .replace("-", "")
    .replace(/\s+/g, "_")}_screenshot.png`;

  const [imgSrc, setImgSrc] = useState(initialImage);
  const [isLoading, setIsLoading] = useState(true);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openViewer = useCallback(() => setIsViewerOpen(true), []);
  const closeViewer = useCallback(() => setIsViewerOpen(false), []);

  const theme = useMemo(
    () => getProjectCategoryTheme(project.category),
    [project.category],
  );

  const Icon = theme.icon;

  const primaryLink = useMemo(
    () =>
      project.links.find((l) =>
        ["site", "playStore", "pubDev"].includes(l.type),
      ) || project.links[0],
    [project.links],
  );

  const repoLink = useMemo(
    () => project.links.find((l) => l.type === "github"),
    [project.links],
  );

  return (
    <>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#09090b] transition-all duration-500 hover:border-white/10 transform-gpu ${theme.shadow}`}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-linear-to-b ${theme.glow} z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
        />

        <button
          onClick={openViewer}
          aria-label={`Visualizar imagem do projeto ${project.title}`}
          className="relative z-10 h-56 w-full overflow-hidden border-b border-white/5 bg-zinc-950 outline-none"
        >
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-1000 ease-out group-hover:scale-105 ${
              isLoading
                ? "opacity-0 blur-lg"
                : "opacity-90 blur-0 group-hover:opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setImgSrc("/image_placeholder.png");
              setIsLoading(false);
            }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

          <div className="absolute right-4 top-4 z-20">
            <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/50 px-3 py-1.5 backdrop-blur-xl shadow-2xl">
              <div
                className={cn(
                  "absolute inset-0 rounded-full opacity-20 blur-md",
                  theme.glow,
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
        </button>

        <div className="relative z-20 -mt-12 flex grow flex-col p-6">
          <header className="mb-4">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-white transition-all duration-300 group-hover:text-zinc-200">
              {project.title}
            </h3>

            <p className="line-clamp-3 text-sm font-medium leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
              {t(`projects.list.${project.descriptionKey}.description`)}
            </p>
          </header>

          <div className="mb-6 mt-auto flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/5 bg-[#121212] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 transition-all duration-300 group-hover:border-white/10 group-hover:bg-[#18181b] group-hover:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <footer className="flex flex-col gap-3 border-t border-white/5 pt-5 sm:flex-row sm:gap-2">
            <LinkButton
              href={primaryLink?.url ?? "#"}
              target="_blank"
              className="group/btn flex-1 justify-center rounded-full px-4 py-2.5 text-sm"
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
                "flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-full border px-0 text-white transition-all duration-300 active:scale-95 sm:h-full sm:w-12",
                repoLink
                  ? "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  : "border-white/10 bg-zinc-900/50 text-zinc-500",
              )}
            >
              <SlSocialGithub size={18} />

              <span className="text-xs font-bold sm:hidden">
                {t("actions.source")}
              </span>
            </LinkButton>
          </footer>
        </div>
      </article>

      {isViewerOpen && (
        <ImageViewer
          src={imgSrc}
          alt={`${project.title} image`}
          onClose={closeViewer}
        />
      )}
    </>
  );
};
