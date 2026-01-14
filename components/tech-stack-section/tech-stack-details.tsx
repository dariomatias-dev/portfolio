import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";

import { TechStackItem } from "@/@types/tech-stack";

interface TechStackDetailsProps {
  tech: TechStackItem;
}

export const TechStackDetails = ({ tech }: TechStackDetailsProps) => {
  const Icon = tech.icon;

  return (
    <div className="relative bg-[#0B1120] rounded-3xl md:rounded-4xl border border-slate-800 p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden h-full flex flex-col animate-in fade-in zoom-in-95 duration-500 min-h-125">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="absolute top-0 right-0 w-75 h-75 md:w-100 md:h-100 bg-linear-to-bl from-blue-600/20 via-indigo-600/10 to-transparent rounded-bl-full -mr-20 -mt-20 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-37.5 h-37.5 md:w-50 md:h-50 bg-emerald-500/10 rounded-tr-full -ml-10 -mb-10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 md:mb-12 gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-2xl backdrop-blur-md shrink-0">
            <Icon size={32} className="md:w-10 md:h-10" />
          </div>

          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 w-full sm:w-auto">
            <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
              {tech.category}
            </span>

            <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
              <CheckCircle2 size={12} /> Production Ready
            </span>
          </div>
        </div>

        <div className="mb-8 md:mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
            {tech.name}
          </h3>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light border-l-2 border-blue-500/30 pl-4 md:pl-6">
            {tech.desc}
          </p>
        </div>

        <div className="mb-auto">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
            Use Cases
          </h4>

          <div className="flex flex-wrap gap-2">
            {tech.tags.map((tag) => (
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
            href={tech.url}
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
            href={tech.docs}
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
  );
};
