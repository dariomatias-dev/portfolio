"use client";

import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

import { QuoteItem } from "@/@types/quote";
import { quaoteGradients } from "@/constants/quaote-gradients";

interface PhilosophyCardProps {
  quote: QuoteItem;
  index: number;
}

export const PhilosophyCard = ({ quote, index }: PhilosophyCardProps) => {
  const t = useTranslations("philosophy");

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden">
      <div
        className={`absolute inset-0 bg-linear-to-br ${quaoteGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out`}
      />

      <Quote
        className="absolute -bottom-4 -right-4 text-slate-100/80 group-hover:text-white/80 group-hover:scale-110 transition-all duration-700 -rotate-12"
        size={120}
        strokeWidth={1}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-blue-100 group-hover:shadow-sm transition-all duration-500">
          <Quote
            size={18}
            className="text-slate-400 group-hover:text-blue-600 transition-colors duration-500 fill-current"
          />
        </div>

        <blockquote className="grow">
          <p className="text-lg text-slate-700 font-medium leading-relaxed tracking-tight mb-6">
            &quot;{t(quote.textKey)}&quot;
          </p>
        </blockquote>

        <div className="flex items-center gap-3 pt-5 border-t border-slate-100/80 group-hover:border-slate-200/50 transition-colors">
          <div className="flex flex-col">
            <span className="text-slate-900 font-bold text-sm">
              {quote.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
