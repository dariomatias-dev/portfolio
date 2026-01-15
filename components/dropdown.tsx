"use client";

import { Check, ChevronDown, LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface DropdownOption {
  id: string;
  name: string;
}

interface DropdownProps {
  label?: string;
  icon?: LucideIcon;
  options: DropdownOption[];
  value?: string;
  onChange: (id: string) => void;
  placeholder?: string;
  className?: string;
}

export const Dropdown = ({
  label,
  icon: Icon,
  options,
  value,
  onChange,
  placeholder,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.id === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`space-y-1.5 ${className}`} ref={containerRef}>
      {label && (
        <label className="ml-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-2">
          {label}
        </label>
      )}

      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between rounded-xl border py-3 px-4 transition-all duration-300 cursor-pointer outline-none",
            isOpen
              ? "border-slate-900 bg-white shadow-md"
              : "border-transparent bg-slate-50 hover:bg-slate-100"
          )}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <Icon
                size={18}
                className={cn(
                  "transition-colors duration-300",
                  isOpen ? "text-slate-900" : "text-slate-400"
                )}
              />
            )}

            <span
              className={cn(
                "text-[11px] font-black uppercase italic tracking-wider",
                selectedOption ? "text-slate-950" : "text-slate-400"
              )}
            >
              {selectedOption ? selectedOption.name : placeholder}
            </span>
          </div>

          <ChevronDown
            size={16}
            className={cn(
              "transition-transform duration-300",
              isOpen ? "rotate-180 text-slate-900" : "text-slate-400"
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50 overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="max-h-60 overflow-y-auto">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    onChange(opt.id);

                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between rounded-lg px-4 py-3 text-[10px] font-black uppercase italic tracking-widest transition-all cursor-pointer",
                    value === opt.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {opt.name}
                  {value === opt.id && <Check size={14} strokeWidth={4} />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
