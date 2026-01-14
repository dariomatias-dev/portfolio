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
};
