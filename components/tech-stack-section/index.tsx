"use client";

import { Layers } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { TechStackItem } from "@/@types/tech-stack";
import { techStack } from "@/constants/technologies";
import { BadgeSection } from "../badge-section";
import { TechStackDetails } from "./tech-stack-details";
import { TechStackListItem } from "./tech-stack-list-item";
import { TechStackSearchInput } from "./tech-stack-search-input";

export const TechStackSection = () => {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<TechStackItem>(techStack[0]);

  const detailsRef = useRef<HTMLDivElement>(null);

  const categories = [
    "all",
    "frontend",
    "backend",
    "mobile",
    "database",
    "devops",
  ];

  const filteredTech = techStack.filter((tech) => {
    const matchesCategory =
      activeTab === "all" || tech.category.toLowerCase() === activeTab;
    const matchesSearch = tech.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleTechClick = (tech: TechStackItem) => {
    setSelectedTech(tech);

    if (window.innerWidth < 1024 && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <section
      id="stack"
      className="relative py-16 md:py-24 px-4 md:px-8 bg-slate-50 border-t border-slate-200 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl">
            <BadgeSection icon={Layers}>{t("navigation.stack")}</BadgeSection>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {t("stack.title")}
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed">
              {t("stack.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-auto lg:h-162.5">
          <div className="lg:col-span-5 flex flex-col h-125 lg:h-full bg-white rounded-3xl md:rounded-4xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 md:p-6 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-20">
              <TechStackSearchInput
                placeholder={t("stack.searchPlaceholder")}
                value={searchQuery}
                onChange={setSearchQuery}
              />

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeTab === cat
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {t(`stack.categories.${cat}`)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              {filteredTech.length > 0 ? (
                filteredTech.map((tech) => (
                  <TechStackListItem
                    key={tech.name}
                    tech={tech}
                    isSelected={selectedTech.name === tech.name}
                    onClick={() => handleTechClick(tech)}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-40 text-center px-4">
                  <p className="text-slate-400 text-sm font-medium">
                    {t("stack.noResults")}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            className="lg:col-span-7 h-auto lg:h-full scroll-mt-24"
            ref={detailsRef}
          >
            <TechStackDetails tech={selectedTech} />
          </div>
        </div>
      </div>
    </section>
  );
};
