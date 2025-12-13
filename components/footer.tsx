"use client";

import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-[#020617] pt-12 pb-8 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-600/40 to-transparent shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
      <div className="absolute -top-75 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-12">
          <button
            onClick={scrollToTop}
            className="group relative px-4 py-2 rounded-full bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_15px_-5px_rgba(37,99,235,0.3)] backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-1.5 w-1.5 shrink-0 items-center justify-center align-middle mb-0.5">
                <span className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>

              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 group-hover:text-blue-200 transition-colors">
                Back to Top
              </span>

              <ArrowUp
                size={12}
                className="inline-flex align-middle text-zinc-500 group-hover:text-blue-400 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </div>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 w-full">
          <div className="space-y-6">
            <a href="#" className="inline-block group">
              <span className="font-bold text-3xl tracking-tight text-white">
                Dário<span className="text-zinc-500">Matias</span>
              </span>
            </a>

            <p className="text-zinc-400 text-sm leading-7 mb-8 font-light max-w-xl">
              I work on developing complete, scalable solutions that are easy to
              maintain, with a focus on quality, performance, and usability.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md cursor-default transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-center font-bold text-zinc-300 tracking-wider uppercase">
                Available for new projects
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            <h3 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-2">
              Connect
            </h3>

            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/dariomatias-dev",
                  label: "GitHub",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/dariomatias_dev",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/dariomatias-dev/",
                  label: "LinkedIn",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  className="group flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600 hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 relative overflow-hidden"
                >
                  <social.icon
                    size={20}
                    className="relative z-10 group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm border-t border-white/5 pt-10">
          <p className="text-zinc-500 font-medium">
            &copy; {currentYear} Dário Matias. All rights reserved.
          </p>

          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
            <span className="leading-none text-zinc-500 text-xs uppercase tracking-wider font-bold">
              Built with
            </span>

            <span className="leading-none text-zinc-200 font-bold hover:text-blue-400 transition-colors cursor-default mb-0.5">
              Next.js & Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
