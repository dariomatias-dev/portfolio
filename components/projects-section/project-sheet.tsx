"use client";

import { ArrowRight, Box, Code2, Info, Link2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";

import { Project } from "@/@types/project";
import { cn } from "@/lib/utils";
import { getProjectCategoryTheme } from "@/utils/get-project-category-theme";
import { getIconByProjectLinkType } from "@/utils/icon-by-project-link-type";
import { toSnakeCase } from "@/utils/to-snake-case";
import { CloseButton } from "../close-button";

interface ProjectSheetProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectSheet = ({
  project,
  isOpen,
  onClose,
}: ProjectSheetProps) => {
  const t = useTranslations();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const theme = useMemo(
    () => (project ? getProjectCategoryTheme(project.category) : null),
    [project],
  );

  const Icon = theme?.icon || Box;

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 flex justify-end transition-all duration-500",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "relative w-full max-w-xl bg-[#050505] border-l border-white/10 h-full shadow-[0_0_80px_rgba(0,0,0,1)] transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-80 bg-linear-to-b from-blue-500/5 to-transparent pointer-events-none" />

        <div className="absolute right-6 top-6 z-50">
          <CloseButton onClick={onClose} />
        </div>

        <div className="flex-1 overflow-y-auto">
          {project && (
            <div className="flex flex-col">
              <div className="relative h-[42vh] w-full bg-[#050505] overflow-hidden">
                <Image
                  src={`/screenshots/${toSnakeCase(project.key)}_screenshot.png`}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/30 to-transparent" />

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/50 px-3 py-1.5 backdrop-blur-xl w-fit mb-5 shadow-2xl">
                    <Icon size={12} className="text-white" />

                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-100">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-5xl font-black text-white tracking-tighter leading-none">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="px-10 py-12 space-y-14">
                <section className="space-y-5">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <Info size={15} />

                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">
                      {t(`projects.sections.about`)}
                    </h3>
                  </div>

                  <p className="text-zinc-400 leading-relaxed text-[15px] font-normal whitespace-pre-line">
                    {t(`projects.list.${project.key}.long`)}
                  </p>
                </section>

                <section className="space-y-5">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <Code2 size={15} />

                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">
                      {t(`projects.sections.technologies`)}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Link
                        key={tech}
                        href={`?tech=${tech.toLowerCase()}#stack-details`}
                        onClick={onClose}
                        className="group/badge relative flex items-center rounded-full border border-white/5 bg-white/2 px-3 py-1 text-[11px] font-semibold tracking-wide text-zinc-500 transition-colors duration-300 hover:border-white/20 hover:bg-white/5 hover:text-zinc-200"
                      >
                        {tech}
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="pb-16 space-y-5">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <Link2 size={15} />

                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">
                      Links
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {project.links.map((link, idx) => {
                      const IconByProjectLinkType = getIconByProjectLinkType(
                        link.type,
                      );

                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all duration-300"
                        >
                          <div className="flex items-center gap-5">
                            <div className="p-2.5 rounded-xl bg-black/40 text-zinc-500 group-hover:text-white transition-colors">
                              <IconByProjectLinkType size={20} />
                            </div>

                            <div>
                              <span className="block font-bold text-zinc-200 text-[15px] capitalize tracking-tight group-hover:text-white transition-colors">
                                {link.type.replace(/([A-Z])/g, " $1")}
                              </span>

                              <span className="text-[11px] text-zinc-500 font-medium truncate max-w-64 block">
                                {link.url.replace(/^https?:\/\//, "")}
                              </span>
                            </div>
                          </div>

                          <ArrowRight
                            size={18}
                            className="text-zinc-800 group-hover:text-zinc-400 transition-all"
                          />
                        </a>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
