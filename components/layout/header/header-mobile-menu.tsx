"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialGithub } from "react-icons/sl";

import { CONTACTS } from "@/constants/contacts";
import { navLinks } from "@/constants/nav-links";
import { LanguageSwitcher } from "./language-switcher";

interface HeaderMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

export const HeaderMobileMenu = ({
  isOpen,
  onClose,
  locale,
}: HeaderMobileMenuProps) => {
  const tNav = useTranslations("navigation");
  const tLabels = useTranslations("labels");

  return (
    <div
      className={`fixed inset-0 z-40 bg-[#02040a] transition-transform duration-500 md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col p-8 pt-28">
        <div className="space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
            {tLabels("navigation")}
          </p>

          <div className="h-px w-full bg-linear-to-r from-white/10 to-transparent" />

          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}/#${link.hash}`}
                onClick={onClose}
                className="flex items-center justify-between py-3.5 text-lg font-bold uppercase tracking-[0.2em] text-zinc-300 active:text-white"
              >
                {tNav(link.key)}
                <ArrowRight size={18} className="text-zinc-800" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          <Link
            href={`/${locale}/#contact`}
            onClick={onClose}
            className="flex items-center justify-center w-full rounded-full bg-white py-4 text-xs font-black uppercase tracking-[0.2em] text-black active:scale-[0.98] transition-transform"
          >
            {tNav("contact")}
          </Link>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-8 pb-10 border-t border-white/5 pt-8">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              {tLabels("language")}
            </p>

            <LanguageSwitcher />
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              {tLabels("connect")}
            </p>

            <div className="flex gap-6">
              <a
                href={CONTACTS.github}
                target="_blank"
                className="text-zinc-400 active:text-white transition-colors"
              >
                <SlSocialGithub size={22} />
              </a>

              <a
                href={CONTACTS.linkedin}
                target="_blank"
                className="text-zinc-400 active:text-white transition-colors"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="pb-4 text-center">
          <p className="text-[9px] text-zinc-700 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Dário Matias
          </p>
        </div>
      </div>
    </div>
  );
};
