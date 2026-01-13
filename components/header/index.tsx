"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

import { HeaderMobileMenu } from "./header-mobile-menu";
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

      <HeaderMobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        locale={locale}
        navLinks={navLinks}
      />
    </header>
  );
};
