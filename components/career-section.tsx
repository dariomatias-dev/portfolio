"use client";

import { Briefcase, Building2, Globe, MapPin } from "lucide-react";

import { careers } from "@/constants/careers";

export const CareerSection = () => {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-24 bg-slate-50 overflow-hidden border-t border-slate-200"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="absolute right-0 top-0 w-150 h-150 bg-blue-100/40 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 mb-4">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Professional evolution focused on technical impact and value
            delivery.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-12">
            {careers.map((career, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 z-20 shadow-[0_0_0_4px_rgba(255,255,255,1)] ${
                      career.current
                        ? "border-blue-600 shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_0_8px_rgba(37,99,235,0.2)]"
                        : "border-slate-300"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        career.current
                          ? "bg-blue-600 animate-pulse"
                          : "bg-slate-400"
                      }`}
                    />
                  </div>

                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-px bg-slate-200 z-0 ${
                      isEven ? "right-1/2" : "left-1/2"
                    }`}
                  />

                  <div className="hidden md:block w-full md:w-[calc(50%+4rem)]" />

                  <div className="w-full md:w-[calc(50%-3rem)] mt-12 md:mt-0 relative z-10">
                    <div className="relative p-6 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:border-blue-100 transition-all duration-300 group overflow-hidden">
                      <Globe className="absolute -right-4 -top-4 w-32 h-32 text-slate-50 -rotate-12 group-hover:text-blue-50/50 transition-colors duration-500" />

                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-slate-100 rotate-45 transform group-hover:border-blue-100 transition-colors duration-300 z-10 ${
                          isEven
                            ? "-right-2 border-l-0 border-b-0"
                            : "-left-2 border-t-0 border-r-0 border-l border-b"
                        }`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold border ${
                              career.current
                                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                                : "bg-slate-100 text-slate-600 border-slate-200"
                            }`}
                          >
                            {career.period}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {career.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium mb-5">
                          <div className="flex items-center gap-1.5">
                            <Building2 size={14} className="text-blue-500" />
                            {career.company}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-blue-500" />
                            {career.location}
                          </div>
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {career.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                          {career.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[11px] font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
