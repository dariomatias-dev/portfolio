"use client";

import {
  Check,
  Copy,
  GitFork,
  HeartHandshake,
  Star,
  Terminal,
} from "lucide-react";
import { useState } from "react";

import { contributions } from "@/constants/community";
import { SlSocialGithub } from "react-icons/sl";
import { BadgeSection } from "./badge-section";

export const CommunitySection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(command);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="community"
      className="relative py-20 md:py-24 bg-[#02040A] overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-indigo-900/10 via-[#02040A] to-[#02040A]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <BadgeSection theme="dark" icon={HeartHandshake}>
              Community
            </BadgeSection>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Building for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                developers.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Contributions that accelerate development. From CLI tools to UI
              libraries and scalable architectures.
            </p>
          </div>

          <div className="flex gap-8 lg:border-l lg:border-white/10 lg:pl-8 w-full lg:w-auto mt-4 lg:mt-0">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white">
                17
              </span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider font-bold mt-1">
                Total Stars
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white">
                400+
              </span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider font-bold mt-1">
                Downloads
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {contributions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative flex flex-col bg-[#0A0C12] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl ${item.border}`}
              >
                <div
                  className={`absolute top-0 right-0 w-75 h-75 bg-linear-to-bl ${item.gradient} blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative p-6 md:p-8 flex flex-col h-full z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.bg} border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${item.color}`}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors cursor-default">
                        <Star size={12} className="fill-current" />{" "}
                        {item.stats.stars}
                      </span>
                      <div className="w-px h-3 bg-white/10" />
                      <span className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-default">
                        <GitFork size={12} /> {item.stats.forks}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-widest mb-2 ${item.color} opacity-90`}
                    >
                      {item.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed transition-all">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-5">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-zinc-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 h-auto sm:h-10">
                      <div className="relative group/cmd grow h-10 sm:h-full">
                        <div
                          className={`absolute -inset-0.5 bg-linear-to-r ${
                            item.gradient.split(" ")[1]
                          } to-transparent rounded-lg opacity-0 group-hover/cmd:opacity-20 blur transition duration-500`}
                        />
                        <div className="relative flex items-center justify-between bg-[#050505] border border-white/10 rounded-lg px-3 h-full font-mono text-xs text-zinc-300 shadow-inner">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <Terminal size={14} className={item.color} />
                            <span className="truncate select-all">
                              <span className="text-zinc-600 mr-2">$</span>
                              {item.command}
                            </span>
                          </div>

                          <button
                            onClick={() => handleCopy(item.command)}
                            className="relative text-zinc-500 hover:text-white transition-colors transform focus-visible:outline-0"
                          >
                            <div
                              className={`absolute inset-0 flex items-center justify-center text-emerald-500 transition-all duration-300 transform ${
                                copied === item.command
                                  ? "scale-100 opacity-100"
                                  : "scale-50 opacity-0"
                              }`}
                            >
                              <Check size={14} />
                            </div>

                            <div
                              className={`transition-all duration-300 transform ${
                                copied === item.command
                                  ? "opacity-0 scale-50"
                                  : "opacity-100 scale-100"
                              }`}
                            >
                              <Copy size={14} />
                            </div>
                          </button>
                        </div>
                      </div>

                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 sm:h-full w-full sm:w-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 shrink-0 gap-2"
                        title="View Source Code"
                      >
                        <SlSocialGithub size={18} />
                        <span className="sm:hidden text-xs font-bold">
                          Source
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
