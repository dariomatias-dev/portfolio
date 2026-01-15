"use client";

import { Feather } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { QuoteItem } from "@/@types/quote";
import { quotes } from "@/constants/quotes";
import { BadgeSection } from "../badge-section";
import { PhilosophyCard } from "./philosophy-card";

export const PhilosophySection = () => {
  const t = useTranslations("philosophy");

  const [selectedQuotes, setSelectedQuotes] = useState<QuoteItem[]>([]);

  useEffect(() => {
    const shuffleQuotes = () => {
      const shuffled = [...quotes].sort(() => 0.5 - Math.random()).slice(0, 3);

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
          <BadgeSection icon={Feather}>{t("badge")}</BadgeSection>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                  {chunks}
                </span>
              ),
              br: () => <br className="hidden md:block" />,
            })}
          </h2>

          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedQuotes.map((quote, index) => (
            <PhilosophyCard key={quote.textKey} quote={quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
