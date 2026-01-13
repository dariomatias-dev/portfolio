"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialGithub } from "react-icons/sl";

import { LanguageSwitcher } from "./language-switcher";

export const Header = () => {
  const t = useTranslations("header");

  const locale = useLocale();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { key: "engineering", hash: "engineering" },
    { key: "projects", hash: "projects" },
    { key: "stack", hash: "stack" },
    { key: "education", hash: "education" },
    { key: "career", hash: "experience" },
    { key: "community", hash: "community" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#02040a]/80 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-8 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="font-bold text-lg tracking-tight text-white uppercase">
              Dário<span className="text-zinc-500">Matias</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}/#${link.hash}`}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <LanguageSwitcher />

            <Link
              href={`/${locale}/#contact`}
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-2 text-[11px] font-black uppercase tracking-widest text-black hover:bg-zinc-200 transition-all"
            >
              <span>{t("contact")}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#02040a] transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-8 pt-28">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
              {t("navigation")}
            </p>

            <div className="h-px w-full bg-linear-to-r from-white/10 to-transparent" />

            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={`/${locale}/#${link.hash}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-lg font-bold uppercase tracking-[0.2em] text-zinc-300 active:text-white"
                >
                  {t(link.key)}
                  <ArrowRight size={18} className="text-zinc-800" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            <Link
              href={`/${locale}/#contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full rounded-full bg-white py-4 text-xs font-black uppercase tracking-[0.2em] text-black active:scale-[0.98] transition-transform"
            >
              {t("contact")}
            </Link>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-8 pb-10 border-t border-white/5 pt-8">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                {t("language")}
              </p>

              <LanguageSwitcher />
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                {t("connect")}
              </p>

              <div className="flex gap-6">
                <Link
                  href="#"
                  className="text-zinc-400 active:text-white transition-colors"
                >
                  <SlSocialGithub size={22} />
                </Link>

                <Link
                  href="#"
                  className="text-zinc-400 active:text-white transition-colors"
                >
                  <FiLinkedin size={22} />
                </Link>
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
    </header>
  );
};
