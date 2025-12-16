"use client";

import { Code2, ExternalLink, Github } from "lucide-react";

import { projects } from "@/constants/projects";
import { BadgeSection } from "../badge-section";
import { ProjectCard } from "./project-card";

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
            <BadgeSection theme="dark" icon={Code2}>
              Projects
            </BadgeSection>

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
