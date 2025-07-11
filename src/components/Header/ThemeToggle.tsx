"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative rounded-full bg-transparent focus-visible:ring-0"
      variant="ghost"
      aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute"
        >
          {isDark ? (
            <Sun className="size-5 text-gray-100 md:size-[1.1rem]" />
          ) : (
            <Moon className="size-5 text-gray-800 md:size-[1.1rem]" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
};
