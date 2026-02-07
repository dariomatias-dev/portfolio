"use client";

import { ChevronLeft, ChevronRight, Code2, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { projects } from "@/constants/projects";
import { BadgeSection } from "../badge-section";
import { ProjectCard } from "./project-card";
import { ProjectSheet } from "./project-sheet";
import { Project } from "@/@types/project";
import { cn } from "@/lib/utils";

export const ProjectsSection = () => {
  const t = useTranslations();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsSheetOpen(true);
  };

  return (
    <section
      id="projects"
      className="relative py-32 bg-[#030303] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-250 h-125 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-10">
          <div className="max-w-2xl">
            <BadgeSection theme="dark" icon={Code2}>
              {t("navigation.projects")}
            </BadgeSection>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              {t.rich("projects.title", {
                highlight: (chunks) => (
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                    {chunks}
                  </span>
                ),
              })}
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </div>

          <a
            href="https://github.com/dariomatias-dev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-blue-500 pb-0.5"
          >
            {t("projects.viewRepositories")} <ExternalLink size={14} />
          </a>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            onSwiper={setSwiper}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            spaceBetween={32}
            slidesPerView={1}
            loop={false}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12!"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx} className="h-auto!">
                <div
                  className="h-full cursor-pointer outline-none group/slide"
                  onClick={(e) => {
                    handleOpenProject(project);

                    e.stopPropagation();
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center bg-[#0E0E10] border border-white/10 rounded-full p-1.5 shadow-2xl backdrop-blur-md">
            <button
              onClick={() => swiper?.slidePrev()}
              disabled={activeIndex === 0}
              className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed"
              aria-label={t("projects.prevSlide")}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="w-px h-6 bg-white/10 mx-2" />

            <div className="flex items-center gap-2 px-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => swiper?.slideTo(idx)}
                  className="group py-2 cursor-pointer"
                  aria-label={`${t("projects.goToSlide")} ${idx + 1}`}
                >
                  <div
                    className={cn(
                      "rounded-full transition-all duration-300",
                      idx === activeIndex
                        ? "w-3 h-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        : "w-1.5 h-1.5 bg-zinc-700 group-hover:bg-zinc-500",
                    )}
                  />
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-white/10 mx-2" />

            <button
              onClick={() => swiper?.slideNext()}
              disabled={
                swiper
                  ? activeIndex ===
                    projects.length -
                      ((swiper.params.slidesPerView as number) || 1)
                  : false
              }
              className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed"
              aria-label={t("projects.nextSlide")}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 md:hidden flex justify-center">
          <a
            href="https://github.com/dariomatias-dev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#0E0E10] border border-white/10 text-sm font-bold text-white hover:bg-white/5 transition-all duration-300 active:scale-95"
          >
            <FiGithub size={20} />
            {t("projects.exploreMore")}
          </a>
        </div>
      </div>

      <ProjectSheet
        project={selectedProject}
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />
    </section>
  );
};
