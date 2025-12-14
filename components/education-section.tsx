"use client";

import { Award, GraduationCap } from "lucide-react";

import { educations } from "@/constants/educations";

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative py-20 md:py-24 bg-slate-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="absolute left-0 top-0 w-125 h-125 bg-blue-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-125 h-125 bg-indigo-100/50 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Education & Certifications
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A solid foundation built through continuous learning and technical
            validation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-12">
            {educations.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-blue-500 z-20 shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_0_8px_rgba(59,130,246,0.1)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  </div>

                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-px bg-blue-200 z-0 ${
                      isEven ? "right-1/2" : "left-1/2"
                    }`}
                  />

                  <div className="hidden md:block w-full md:w-[calc(50%+4rem)]" />

                  <div className="w-full md:w-[calc(50%-3rem)] mt-12 md:mt-0 relative z-10">
                    <div className="relative p-6 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:border-blue-100 transition-all duration-300 group overflow-hidden">
                      <Award className="absolute -right-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 text-slate-50 rotate-12 group-hover:text-blue-50/50 transition-colors duration-500" />

                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-slate-100 rotate-45 transform group-hover:border-blue-100 transition-colors duration-300 z-10 ${
                          isEven
                            ? "-right-2 border-l-0 border-b-0"
                            : "-left-2 border-t-0 border-r-0 border-l border-b"
                        }`}
                      />

                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
                            {edu.year}
                          </span>
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            {edu.type}
                          </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-500 font-medium text-sm mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          {edu.institution}
                        </p>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {edu.description}
                        </p>

                        {edu.tags.length != 0 && (
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                            {edu.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all cursor-default"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
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
