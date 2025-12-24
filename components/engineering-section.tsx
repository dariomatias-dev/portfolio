import {
  Cloud,
  Code2,
  Layout,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { BadgeSection } from "./badge-section";

export const EngineeringSection = () => {
  return (
    <section
      id="engineering"
      className="relative py-32 px-4 md:px-8 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-[0.4]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <BadgeSection icon={Terminal}>Engineering</BadgeSection>

            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Systems built for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600">
                Performance & Longevity.
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-xl leading-relaxed">
              Engineering driven by architecture, clarity, and maintainability.
              Technical decisions focused on scalability, simplicity, and
              continuous evolution.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-32 h-px bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-3 group relative p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-50 to-transparent rounded-bl-[100%] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Layout size={28} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Frontend Engineering
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                High-performance, accessible, and consistent interfaces.
                Component architecture, design systems, and a strong focus on
                real user experience.
              </p>

              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Next.js", "TailwindCSS", "shadcn/ui"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-mono font-medium text-slate-600 group-hover:border-blue-200 group-hover:bg-blue-50/50 group-hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 group relative p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-indigo-50 to-transparent rounded-bl-[100%] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Server size={28} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Backend Architecture
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                Robust APIs and scalable services. Data modeling, modular
                architecture, and a focus on consistency, performance, and
                observability.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Fastify",
                  "NestJS",
                  "Go",
                  "PostgreSQL",
                  "SQLite",
                  "Prisma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-mono font-medium text-slate-600 group-hover:border-indigo-200 group-hover:bg-indigo-50/50 group-hover:text-indigo-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 group relative p-8 rounded-[2.5rem] bg-[#0F172A] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-50" />
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-white mb-6">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Mobile Engineering
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Native mobile applications focused on performance,
                  predictability, and offline-first user experience.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-500 rounded-full group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 group relative p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Cloud size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                DevOps
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Reproducible environments, automated pipelines, and simple
                infrastructure designed to scale and remain maintainable.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 group relative p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                Code Quality
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Readable, predictable, and sustainable code. Best practices,
                consistency, and a long-term maintenance mindset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
