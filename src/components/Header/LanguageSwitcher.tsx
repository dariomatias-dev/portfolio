"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: string) => {
    startTransition(() => {
      const newPathname = `/${nextLocale}${pathname.replace(/^\/(en|pt)/, "")}`;
      router.replace(newPathname);
    });
  };

  return (
    <div className="flex items-center gap-1 text-md md:text-sm font-semibold">
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending || locale === "en"}
        className={`cursor-pointer transition-colors duration-300 ${
          locale === "en"
            ? "text-black dark:text-white"
            : "text-gray-500 hover:text-black dark:hover:text-white"
        }`}
      >
        EN
      </button>

      <span className="text-gray-300 dark:text-gray-600">/</span>

      <button
        onClick={() => switchLocale("pt")}
        disabled={isPending || locale === "pt"}
        className={`cursor-pointer transition-colors duration-300 ${
          locale === "pt"
            ? "text-black dark:text-white"
            : "text-gray-500 hover:text-black dark:hover:text-white"
        }`}
      >
        PT
      </button>
    </div>
  );
};
