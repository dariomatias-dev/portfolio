"use client";

import { Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { technologies } from "@/constants/technologies";
import { TechnologyId } from "@/enums/technology-id";
import { cn } from "@/lib/utils";
import { BadgeSection } from "../badge-section";
import { TechStackDetails } from "./tech-stack-details";
import { TechStackListItem } from "./tech-stack-list-item";
import { TechStackSearchInput } from "./tech-stack-search-input";

export const TechStackSection = () => {
  const t = useTranslations();

  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const techParam = searchParams.get("tech");

  const techEntries = useMemo(() => Object.entries(technologies), []);

  const currentId = useMemo(() => {
    if (!techParam) return "react" as TechnologyId;

    const decodedParam = decodeURIComponent(techParam).toLowerCase();

    const found = techEntries.find(([id, tech]) => {
      return (
        id.toLowerCase() === decodedParam ||
        tech.name.toLowerCase() === decodedParam
      );
    });

    return (found ? found[0] : "react") as TechnologyId;
  }, [techParam, techEntries]);

  const selectedTech = useMemo(() => technologies[currentId], [currentId]);

  const categories = [
    "all",
    "frontend",
    "backend",
    "mobile",
    "database",
    "devops",
  ];

  const filteredTech = useMemo(() => {
    return techEntries.filter(([, tech]) => {
      const matchesCategory =
        activeTab === "all" || tech.category.toLowerCase() === activeTab;

      const matchesSearch = tech.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [techEntries, activeTab, searchQuery]);

  useEffect(() => {
    if (!techParam) return;

    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const timer = setTimeout(() => {
      const container = scrollContainerRef.current;
      const escapedId = CSS.escape(currentId);
      const activeElement = container?.querySelector(
        `[data-tech-id="${escapedId}"]`,
      ) as HTMLElement;

      if (container && activeElement) {
        const elementOffsetTop = activeElement.offsetTop;
        const elementHeight = activeElement.offsetHeight;
        const containerHeight = container.offsetHeight;

        const scrollTarget =
          elementOffsetTop - containerHeight / 2 + elementHeight / 2;

        container.scrollTo({
          top: scrollTarget,
          behavior: "smooth",
        });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [currentId, techParam]);

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-auto lg:h-162.5 scroll-mt-24">
          <div className="lg:col-span-5 flex flex-col h-125 lg:h-full bg-white rounded-3xl md:rounded-4xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 md:p-6 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-20">
              <TechStackSearchInput
                placeholder={t("stack.searchPlaceholder")}
                value={searchQuery}
                onChange={setSearchQuery}
              />

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={cn(
                      "group relative flex items-center rounded-full border border-gray-200 px-3 py-1 text-[11px] font-semibold tracking-wide transition-colors duration-300 cursor-pointer",
                      activeTab === category
                        ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                        : "bg-white text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900",
                    )}
                  >
                    {t(`stack.categories.${category}`)}
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              className="relative flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
            >
              {filteredTech.length > 0 ? (
                filteredTech.map(([id, tech]) => (
                  <div key={id} data-tech-id={id}>
                    <TechStackListItem
                      tech={tech}
                      isSelected={currentId === id}
                    />
                  </div>
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
            ref={detailsRef}
            id="stack-details"
            className="lg:col-span-7 h-auto lg:h-full scroll-mt-24"
          >
            <TechStackDetails tech={selectedTech} />
          </div>
        </div>
      </div>
    </section>
  );
};
