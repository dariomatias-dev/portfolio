"use client";

import { cn } from "@/lib/utils";
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
    <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em]">
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending || locale === "en"}
        className={cn(
          "transition-all duration-300",
          locale === "en"
            ? "text-white scale-110"
            : "text-zinc-600 hover:text-zinc-400 cursor-pointer"
        )}
      >
        EN
      </button>

      <span className="h-3 w-px bg-zinc-800" />

      <button
        onClick={() => switchLocale("pt")}
        disabled={isPending || locale === "pt"}
        className={cn(
          "transition-all duration-300",
          locale === "pt"
            ? "text-white scale-110"
            : "text-zinc-600 hover:text-zinc-400 cursor-pointer"
        )}
      >
        PT
      </button>
    </div>
  );
};
