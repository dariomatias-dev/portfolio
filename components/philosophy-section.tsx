"use client";

import { Feather, Quote } from "lucide-react";
import { useEffect, useState } from "react";

import { QuoteItem } from "@/@types/quote";
import { quaoteGradients } from "@/constants/quaote-gradients";
import { quotes } from "@/constants/quotes";
import { BadgeSection } from "./badge-section";

export const PhilosophySection = () => {
  const [selectedQuotes, setSelectedQuotes] = useState<QuoteItem[]>([]);

  useEffect(() => {
    const shuffleQuotes = () => {
      const shuffled = quotes.sort(() => 0.5 - Math.random()).slice(0, 3);

      setSelectedQuotes(shuffled);
    };

    shuffleQuotes();
  }, []);

  return (
    <section className="relative py-20 bg-white overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-linear-to-b from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <BadgeSection icon={Feather}>Philosophy & Inspiration</BadgeSection>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Principles that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              shape the future.
            </span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Our foundation is built on timeless ideas that bring together
            design, engineering, and a vision for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedQuotes.map((quote, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
            >
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
                    &quot;{quote.text}&quot;
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
          ))}
        </div>
      </div>
    </section>
  );
};
