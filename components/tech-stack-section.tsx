"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers,
  Search,
} from "lucide-react";
import { useRef, useState } from "react";

import { TechStackItem } from "@/@types/tech-stack";
import { techStack } from "@/constants/technologies";
import { BadgeSection } from "./badge-section";

export const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<TechStackItem>(techStack[0]);

  const detailsRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "DevOps",
  ];

  const filteredTech = techStack.filter((tech) => {
    const matchesCategory = activeTab === "All" || tech.category === activeTab;
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

  const SelectedIcon = selectedTech.icon;

  return (
    <section
      id="stack"
      className="relative py-16 md:py-24 px-4 md:px-8 bg-slate-50 border-t border-slate-200 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl">
            <BadgeSection icon={Layers}>Tech Stack</BadgeSection>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Comprehensive Development Stack
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              A curated collection of tools and technologies to build scalable
              and robust digital solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-auto lg:h-162.5">
          <div className="lg:col-span-5 flex flex-col h-125 lg:h-full bg-white rounded-3xl md:rounded-4xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 md:p-6 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-20">
              <div className="relative group w-full mb-4">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>

                <input
                  type="text"
                  placeholder="Search technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-gray-500 transition-all placeholder:text-slate-400"
                />
              </div>

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
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              {filteredTech.length > 0 ? (
                filteredTech.map((tech) => {
                  const Icon = tech.icon;
                  const isSelected = selectedTech.name === tech.name;
                  return (
                    <button
                      key={tech.name}
                      onClick={() => handleTechClick(tech)}
                      className={`w-full text-left flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                        isSelected
                          ? "bg-slate-50 border-blue-200 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-slate-50"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-600 rounded-r-full" />
                      )}

                      <div
                        className={`p-2.5 rounded-lg transition-colors duration-300 shrink-0 ${
                          isSelected
                            ? "bg-white shadow-sm text-blue-600"
                            : "bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-slate-600"
                        }`}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="flex-1 z-10 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4
                            className={`font-bold text-sm truncate pr-2 ${
                              isSelected
                                ? "text-slate-900"
                                : "text-slate-500 group-hover:text-slate-700"
                            }`}
                          >
                            {tech.name}
                          </h4>
                          {isSelected && (
                            <ArrowRight
                              size={14}
                              className="text-blue-600 animate-in slide-in-from-left-2 fade-in shrink-0"
                            />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center h-40 text-center px-4">
                  <p className="text-slate-400 text-sm font-medium">
                    No technology found.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            className="lg:col-span-7 h-auto lg:h-full scroll-mt-24"
            ref={detailsRef}
          >
            <div
              key={selectedTech.name}
              className="relative bg-[#0B1120] rounded-3xl md:rounded-4xl border border-slate-800 p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden h-full flex flex-col animate-in fade-in zoom-in-95 duration-500 min-h-125"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-0 right-0 w-75 h-75 md:w-100 md:h-100 bg-linear-to-bl from-blue-600/20 via-indigo-600/10 to-transparent rounded-bl-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-37.5 h-37.5 md:w-50 md:h-50 bg-emerald-500/10 rounded-tr-full -ml-10 -mb-10 blur-3xl pointer-events-none" />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 md:mb-12 gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-2xl backdrop-blur-md shrink-0">
                    <SelectedIcon size={32} className="md:w-10 md:h-10" />
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 w-full sm:w-auto">
                    <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                      {selectedTech.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                      <CheckCircle2 size={12} /> Production Ready
                    </span>
                  </div>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
                    {selectedTech.name}
                  </h3>
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light border-l-2 border-blue-500/30 pl-4 md:pl-6">
                    {selectedTech.desc}
                  </p>
                </div>

                <div className="mb-auto">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Use Cases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-[11px] md:text-xs font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                  <a
                    href={selectedTech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl group text-sm md:text-base"
                  >
                    <span>Official Website</span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                  <a
                    href={selectedTech.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm text-sm md:text-base"
                  >
                    <Code2 size={18} />
                    <span>Documentation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
