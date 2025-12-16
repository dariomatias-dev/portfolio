import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Project } from "@/@types/project";
import { getProjectCategoryTheme } from "@/utils/get-project-category-theme";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [imgSrc, setImgSrc] = useState(
    `/screenshots/${project.title
      .toLowerCase()
      .replaceAll(" ", "_")}_screenshot.png`
  );
  const [isLoading, setIsLoading] = useState(true);

  const theme = getProjectCategoryTheme(project.category);
  const Icon = theme.icon;

  const primaryLink =
    project.links.find(
      (l) => l.type === "site" || l.type === "playStore" || l.type === "pubDev"
    ) || project.links[0];
  const repoLink = project.links.find((l) => l.type === "github");

  return (
    <div
      className={`group relative flex flex-col h-full bg-[#080808] rounded-4xl border border-white/5 overflow-hidden transition-all duration-700 ease-out ${theme.border} ${theme.shadow}`}
    >
      <div
        className={`absolute inset-0 bg-linear-to-b ${theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`}
      />

      <div className="h-52 w-full relative overflow-hidden bg-zinc-950 border-b border-white/5 z-10">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
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

        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />

        <div className="absolute top-5 right-6 z-20">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-xl text-[10px] font-bold uppercase tracking-widest shadow-lg ${theme.badge}`}
          >
            <Icon size={12} strokeWidth={2.5} />
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative flex flex-col grow p-6 -mt-10 z-20">
        <div className="mb-3">
          <h3
            className={`text-xl font-bold text-white mb-2 tracking-tight leading-tight transition-colors duration-500 ${theme.textAccent}`}
          >
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-500">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-[#121212] border border-white/5 text-zinc-500 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:border-white/10 group-hover:text-zinc-300 group-hover:bg-[#151515]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-5 border-t border-white/5">
          <a
            href={primaryLink?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 active:scale-95"
          >
            View Project
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>

          {repoLink ? (
            <a
              href={repoLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 rounded-xl bg-[#121212] border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 active:scale-95"
              title="View Source Code"
            >
              <Github size={18} />
            </a>
          ) : (
            <div
              className="flex items-center justify-center w-12 rounded-xl bg-[#0F0F0F] border border-white/5 text-zinc-700 cursor-not-allowed opacity-50"
              title="Private Repository"
            >
              <Github size={18} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
