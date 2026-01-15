"use client";

import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

import { educations } from "@/constants/educations";
import { BadgeSection } from "../badge-section";
import { EducationCard } from "./education-card";

export const EducationSection = () => {
  const t = useTranslations("education");

  return (
    <section
      id="education"
      className="relative py-20 md:py-24 bg-slate-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="absolute left-0 top-0 w-125 h-125 bg-blue-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="absolute right-0 bottom-0 w-125 h-125 bg-indigo-100/50 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <BadgeSection icon={GraduationCap}>{t("badge")}</BadgeSection>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-12">
            {educations.map((education, index) => (
              <EducationCard key={index} education={education} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
