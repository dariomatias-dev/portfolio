"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Architecture", href: "/#architecture" },
    { name: "Projects", href: "/#projects" },
    { name: "Stack", href: "/#stack" },
    { name: "Education", href: "/#education" },
    { name: "Career", href: "/#experience" },
    { name: "Community", href: "/#community" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#02040a]/80 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-8 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="font-bold text-lg tracking-tight text-white">
              Dário<span className="text-zinc-500">Matias</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/#contact-area"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:bg-zinc-200"
            >
              <span>Contact</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#02040a] transition-all duration-500 md:hidden flex flex-col justify-center items-center ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,#1d4ed81a,transparent_100%)] pointer-events-none" />

        <div className="flex flex-col items-center gap-6 relative z-10 w-full px-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-bold text-zinc-500 hover:text-white transition-all duration-300 hover:scale-105 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}

          <div
            className={`mt-24 w-full max-w-xs transition-all duration-500 delay-300 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Link
              href="/#contact-area"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-zinc-200 active:scale-95"
            >
              <span>Contact</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
