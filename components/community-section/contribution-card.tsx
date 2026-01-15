"use client";

import { Check, Copy, GitFork, Star, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SlSocialGithub } from "react-icons/sl";

import { ContributionItem } from "@/@types/community";
import { cn } from "@/lib/utils";

interface ContributionCardProps {
  item: ContributionItem;
}

export const ContributionCard = ({ item }: ContributionCardProps) => {
  const t = useTranslations("community");

  const [copied, setCopied] = useState(false);

  const Icon = item.icon;
  const tags = t.raw(item.tagKeys) as string[];

  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-[#0A0C12] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl",
        item.border
      )}
    >
      <div
        className={cn(
          "absolute top-0 right-0 w-75 h-75 bg-linear-to-bl blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none",
          item.gradient
        )}
      />

      <div className="relative p-6 md:p-8 flex flex-col h-full z-10">
        <div className="flex justify-between items-start mb-6">
          <div
            className={cn(
              "w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500",
              item.bg,
              item.color
            )}
          >
            <Icon size={24} />
          </div>

          <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors cursor-default">
              <Star size={12} className="fill-current" /> {item.stats.stars}
            </span>

            <div className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-default">
              <GitFork size={12} /> {item.stats.forks}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <span
            className={cn(
              "inline-block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-90",
              item.color
            )}
          >
            {t(item.typeKey)}
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
            {item.title}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed transition-all">
            {t(item.descriptionKey)}
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-zinc-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 h-auto sm:h-10">
            <div className="relative group/cmd grow h-10 sm:h-full">
              <div
                className={cn(
                  "absolute -inset-0.5 bg-linear-to-r to-transparent rounded-lg opacity-0 group-hover/cmd:opacity-20 blur transition duration-500",
                  item.gradient.split(" ")[1]
                )}
              />

              <div className="relative flex items-center justify-between bg-[#050505] border border-white/10 rounded-lg px-3 h-full font-mono text-xs text-zinc-300 shadow-inner">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Terminal size={14} className={item.color} />

                  <span className="truncate select-all">
                    <span className="text-zinc-600 mr-2">$</span>

                    {item.command}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(item.command)}
                  className="relative text-zinc-500 hover:text-white transition-colors transform focus-visible:outline-0"
                >
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center text-emerald-500 transition-all duration-300 transform",
                      copied ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    )}
                  >
                    <Check size={14} />
                  </div>

                  <div
                    className={cn(
                      "transition-all duration-300 transform",
                      copied ? "opacity-0 scale-50" : "opacity-100 scale-100"
                    )}
                  >
                    <Copy size={14} />
                  </div>
                </button>
              </div>
            </div>

            <a
              href={item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 sm:h-full w-full sm:w-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 shrink-0 gap-2"
              title={t("source")}
            >
              <SlSocialGithub size={18} />
              <span className="sm:hidden text-xs font-bold">{t("source")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
