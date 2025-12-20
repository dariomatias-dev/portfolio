"use client";

import { ArrowUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-black pt-14 md:pt-20 pb-10 overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-14 md:mb-16">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_15px_-5px_rgba(37,99,235,0.4)]"
          >
            <ArrowUp
              size={14}
              className="text-zinc-500 group-hover:text-blue-400 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-blue-200 transition-colors">
              Back to Top
            </span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12 mb-24 w-full">
          <div className="space-y-8 max-w-lg">
            <a href="#" className="inline-block group">
              <span className="font-bold text-3xl tracking-tight text-white group-hover:text-blue-50 transition-colors">
                Dário
                <span className="text-zinc-500 group-hover:text-blue-500/50 transition-colors">
                  Matias
                </span>
              </span>
            </a>

            <p className="text-zinc-400 text-sm leading-7 font-light">
              Designing interfaces that feel invisible and engineering systems
              that feel invincible. Focused on scalability, performance, and
              user-centric interactions.
            </p>

            <a
              href={"/#contact"}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-950/20 border border-emerald-500/20 cursor-pointer select-none hover:bg-emerald-950/30 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_12px_#10b981]" />
              </span>
              <span className="text-[11px] font-bold text-emerald-400 tracking-wide uppercase">
                Available for new projects
              </span>
            </a>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center gap-6">
            <h3 className="text-zinc-500 font-mono text-[11px] tracking-widest uppercase">
              Connect
            </h3>

            <div className="flex gap-4">
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/dariomatias-dev",
                  label: "GitHub",
                },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/dariomatias-dev/",
                  label: "LinkedIn",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/dariomatias_dev",
                  label: "Instagram",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-white/10 transition-all duration-300 hover:bg-white hover:border-white"
                >
                  <social.icon
                    size={20}
                    className="text-zinc-400 group-hover:text-black transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-zinc-500 text-xs font-mono">
            &copy; {currentYear} Dário Matias. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-zinc-600">Built with</span>

            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
              <span className="text-zinc-300 hover:text-white transition-colors">
                Next.js
              </span>

              <span className="text-zinc-700 text-[10px]">•</span>

              <span className="text-zinc-300 hover:text-cyan-400 transition-colors">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
