import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Project } from "@/@types/project";
import { getProjectCategoryTheme } from "@/utils/get-project-category-theme";
import { FiGithub } from "react-icons/fi";

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
      className={`group relative flex flex-col h-full bg-[#09090b] rounded-3xl border border-white/5 overflow-hidden transition-colors duration-500 hover:border-white/10 antialiased transform-gpu ${theme.shadow}`}
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
          className={`object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 ${
            isLoading
              ? "opacity-0 blur-lg scale-110"
              : "opacity-90 group-hover:opacity-100 blur-0 scale-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImgSrc("/image_placeholder.png");
            setIsLoading(false);
          }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

        <div className="absolute top-4 right-4 z-20">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg ${theme.badge}`}
          >
            <Icon size={12} strokeWidth={2.5} />
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative flex flex-col grow p-6 -mt-12 z-20">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight leading-tight transition-all duration-300 group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-zinc-400 backface-hidden">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
            {project.description}
          </p>
        </div>

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

        <div className="flex gap-2 pt-5 border-t border-white/5">
          <a
            href={primaryLink?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-bold text-sm overflow-hidden transition-all duration-300 hover:bg-zinc-200 active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />

            <span className="relative z-10">View Project</span>
            <ArrowUpRight
              size={16}
              strokeWidth={2.5}
              className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            />
          </a>

          {repoLink ? (
            <a
              href={repoLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 rounded-xl bg-[#121212] border border-white/10 text-zinc-400 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 active:scale-[0.98]"
              title="View Source Code"
            >
              <FiGithub size={18} />
            </a>
          ) : (
            <div
              className="flex items-center justify-center w-12 rounded-xl bg-[#0F0F0F] border border-white/5 text-zinc-700 cursor-not-allowed opacity-50"
              title="Private Repository"
            >
              <FiGithub size={18} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
