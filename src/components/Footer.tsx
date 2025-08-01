"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <motion.footer
      className="w-full border-t-[0.5px] border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 py-6 text-center text-sm text-gray-600 md:flex-row md:text-left dark:text-gray-400">
        <motion.div
          className="flex flex-col items-center gap-2 md:flex-row md:gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span>© {new Date().getFullYear()} Dário Matias</span>

          <span className="hidden md:inline">|</span>

          <span>{t("rights")}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("developedBy")}{" "}
          <Link
            href="https://github.com/dariomatias-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-gray-900 dark:hover:text-gray-200"
          >
            Dário Matias
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
};
