"use client";

import {
  ArrowUpRight,
  Box,
  Code2,
  ExternalLink,
  Github,
  LayoutTemplate,
  Smartphone,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Project } from "@/@types/project";
import { projects } from "@/constants/projects";

const getCategoryTheme = (category: string) => {
  switch (category) {
    case "Mobile":
      return {
        icon: Smartphone,
        textAccent: "group-hover:text-cyan-400",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(34,211,238,0.25)]",
        border: "group-hover:border-cyan-500/30",
        badge: "bg-cyan-950/40 text-cyan-300 border-cyan-500/20",
        glow: "from-cyan-500/10 via-cyan-900/5 to-transparent",
      };
    case "Frontend":
      return {
        icon: LayoutTemplate,
        textAccent: "group-hover:text-blue-400",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(96,165,250,0.25)]",
        border: "group-hover:border-blue-500/30",
        badge: "bg-blue-950/40 text-blue-300 border-blue-500/20",
        glow: "from-blue-500/10 via-blue-900/5 to-transparent",
      };
    case "Backend":
      return {
        icon: Terminal,
        textAccent: "group-hover:text-emerald-400",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(52,211,153,0.25)]",
        border: "group-hover:border-emerald-500/30",
        badge: "bg-emerald-950/40 text-emerald-300 border-emerald-500/20",
        glow: "from-emerald-500/10 via-emerald-900/5 to-transparent",
      };
    case "Package":
      return {
        icon: Box,
        textAccent: "group-hover:text-purple-400",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(192,132,252,0.25)]",
        border: "group-hover:border-purple-500/30",
        badge: "bg-purple-950/40 text-purple-300 border-purple-500/20",
        glow: "from-purple-500/10 via-purple-900/5 to-transparent",
      };
    default:
      return {
        icon: Box,
        textAccent: "group-hover:text-zinc-300",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(161,161,170,0.15)]",
        border: "group-hover:border-zinc-500/30",
        badge: "bg-zinc-800 text-zinc-300 border-zinc-700",
        glow: "from-zinc-500/10 via-zinc-900/5 to-transparent",
      };
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [imgSrc, setImgSrc] = useState(
    `/screenshots/${project.title
      .toLowerCase()
      .replaceAll(" ", "_")}_screenshot.png`
  );
  const [isLoading, setIsLoading] = useState(true);

  const theme = getCategoryTheme(project.category);
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

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#030303] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-250 h-125 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Code2 size={12} />
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                Digital Products.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Selected projects showcasing proficiency in full-stack
              development, mobile applications, and system architecture.
            </p>
          </div>

          <a
            href="https://github.com/dariomatias-dev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-blue-500 pb-0.5"
          >
            View GitHub <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <div className="mt-16 md:hidden flex justify-center">
          <a
            href="https://github.com/dariomatias-dev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#0E0E10] border border-white/10 text-sm font-bold text-white hover:bg-white/5 transition-all duration-300 active:scale-95"
          >
            <Github size={20} />
            Explore more projects
          </a>
        </div>
      </div>
    </section>
  );
};
