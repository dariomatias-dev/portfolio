"use client";

import { HeartHandshake } from "lucide-react";
import { useTranslations } from "next-intl";

import { contributions } from "@/constants/community";
import { BadgeSection } from "../badge-section";
import { ContributionCard } from "./contribution-card";

export const CommunitySection = () => {
  const t = useTranslations("community");

  const totalStars = contributions.reduce(
    (acc, item) => acc + item.stats.stars,
    0
  );

  const stats = [
    { value: totalStars.toString(), labelKey: "stars" },
    { value: `400+`, labelKey: "downloads" },
  ];

  return (
    <section
      id="community"
      className="relative py-20 md:py-24 bg-[#02040A] overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-indigo-900/10 via-[#02040A] to-[#02040A]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <BadgeSection theme="dark" icon={HeartHandshake}>
              {t("badge")}
            </BadgeSection>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                    {chunks}
                  </span>
                ),
              })}
            </h2>

            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex gap-8 lg:border-l lg:border-white/10 lg:pl-8 w-full lg:w-auto mt-4 lg:mt-0">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </span>

                <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider font-bold mt-1">
                  {t(stat.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {contributions.map((item, idx) => (
            <ContributionCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
