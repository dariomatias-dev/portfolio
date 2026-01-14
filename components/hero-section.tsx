"use client";

import { Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialGithub } from "react-icons/sl";

import { CONTACTS } from "@/constants/contacts";

const Typewriter = ({ words }: { words: string[] }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);

  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % words.length;
    const fullText = words[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }, [text, isDeleting, loopNum, words]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <span className="text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
      {text}
      <span className="animate-pulse ml-1 text-blue-500">|</span>
    </span>
  );
};

export const HeroSection = () => {
  const t = useTranslations("hero");

  const typewriterWords = useMemo(() => {
    return t("typewriter").split(",");
  }, [t]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden selection:bg-blue-500/30 selection:text-blue-100">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-72 h-48 sm:w-96 sm:h-64 md:w-120 md:h-80 lg:w-150 lg:h-100 bg-blue-700/20 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-[100%] mix-blend-screen animate-pulse-slow" />
      <div className="absolute top-[10%] right-[-5%] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-100 lg:h-100 bg-indigo-500/10 blur-[60px] sm:blur-[80px] lg:blur-[100px] rounded-full mix-blend-screen animate-blob" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <a
          href={"/#contact"}
          className="mb-8 group relative inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-950/10 backdrop-blur-xl shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)] hover:border-blue-500/40 hover:bg-blue-950/20 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
          </span>

          <span className="text-xs font-semibold text-blue-100/90 tracking-wide uppercase">
            {t("badge")}
          </span>
        </a>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-white to-slate-500 mb-6 leading-tight pb-2">
          {t("title")} <br />
          <Typewriter words={typewriterWords} />
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.rich("description", {
            design: (chunks) => (
              <span className="text-zinc-200 decoration-blue-500/40 underline underline-offset-4 decoration-1">
                {chunks}
              </span>
            ),
            technical: (chunks) => (
              <span className="text-zinc-200 decoration-blue-500/40 underline underline-offset-4 decoration-1">
                {chunks}
              </span>
            ),
          })}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 text-sm font-bold text-black transition-all hover:bg-blue-50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] active:scale-95"
          >
            <Download size={16} />
            <span>{t("download")}</span>
          </a>

          <div className="flex items-center gap-4 px-6 h-12 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md hover:border-zinc-700 transition-colors duration-300">
            <a
              href={CONTACTS.github}
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <SlSocialGithub size={20} />
            </a>

            <div className="w-px h-4 bg-zinc-800" />

            <a
              href={CONTACTS.linkedin}
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <a
        href={"/#engineering"}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity duration-500"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-500 uppercase group-hover:text-blue-400 transition-all duration-300">
          {t("explore")}
        </span>

        <div className="h-16 w-px bg-linear-to-b from-transparent via-blue-500/30 to-transparent relative overflow-hidden group-hover:via-blue-400/80 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-blue-500 animate-drop-light blur-[1px] group-hover:to-cyan-300 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>
      </a>
    </section>
  );
};
