import { ArrowRight } from "lucide-react";

import { TechStackItem } from "@/@types/tech-stack";

interface TechStackListItemProps {
  tech: TechStackItem;
  isSelected: boolean;
  onClick: () => void;
}

export const TechStackListItem = ({
  tech,
  isSelected,
  onClick,
}: TechStackListItemProps) => {
  const Icon = tech.icon;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
        isSelected
          ? "bg-slate-50 border-blue-200 shadow-sm"
          : "bg-transparent border-transparent hover:bg-slate-50"
      }`}
    >
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-blue-600 rounded-r-full origin-center transition-all duration-300 ease-out ${
          isSelected ? "h-8 scale-y-100 opacity-100" : "h-0 scale-y-0 opacity-0"
        }`}
      />

      <div
        className={`p-2.5 rounded-lg transition-all duration-300 shrink-0 ${
          isSelected
            ? "bg-white shadow-sm text-blue-600 scale-105"
            : "bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-slate-600 group-hover:scale-105"
        }`}
      >
        <Icon size={18} />
      </div>

      <div className="flex-1 z-10 min-w-0">
        <div className="flex items-center justify-between">
          <h4
            className={`font-bold text-sm truncate pr-2 transition-colors duration-300 ${
              isSelected
                ? "text-slate-900"
                : "text-slate-500 group-hover:text-slate-700"
            }`}
          >
            {tech.name}
          </h4>

          <ArrowRight
            size={14}
            className={`shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1 ${
              isSelected
                ? "text-blue-600 opacity-100 translate-x-0"
                : "text-blue-600 opacity-0 -translate-x-2"
            }`}
          />
        </div>
      </div>
    </button>
  );
};
