"use client";

import { Download, Terminal } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);

  const toRotate = useMemo(
    () => ["Digital Experience.", "Scalable Systems.", "Future Tech."],
    []
  );

  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
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
  }, [text, isDeleting, loopNum, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <span className="relative inline">
      <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-white animate-text-shimmer">
        {text}
      </span>
      <span className="inline-block w-1 h-[0.9em] bg-blue-500 ml-2 animate-pulse rounded-full shadow-[0_0_15px_#3b82f6] align-middle" />
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#02040a] pt-16 md:pt-0"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-150 h-100 bg-blue-600/20 blur-[120px] rounded-[100%] mix-blend-screen animate-pulse-slow" />
        <div className="absolute top-[10%] right-[-5%] w-100 h-100 bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-100 h-100 bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a0a0a]/80 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-500 cursor-default backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 group-hover:text-white transition-colors">
              Open for Opportunities
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.95] drop-shadow-2xl relative z-20 min-h-[1.8em]">
          Crafting <br />
          <Typewriter />
        </h1>

        <p className="text-base md:text-xl text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
          Full Stack Developer transforming complex challenges into
          <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors cursor-default">
            {" "}
            scalable
          </span>
          ,
          <span className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors cursor-default">
            {" "}
            high-performance
          </span>
          , and
          <span className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors cursor-default">
            {" "}
            elegant{" "}
          </span>
          software solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto relative z-30">
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 text-sm font-bold text-white shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_50px_-12px_rgba(37,99,235,0.8)] border border-blue-500/50 focus-visible:outline-0"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20" />
            </div>
            <span className="flex items-center gap-2 relative z-10 tracking-wide">
              <Terminal size={16} />
              View Projects
            </span>
          </a>

          <a
            href="/cv.pdf"
            className="group relative inline-flex h-12 items-center justify-center gap-2 px-8 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg overflow-hidden backdrop-blur-md focus-visible:outline-0"
          >
            <Download className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="relative z-10 group-hover:text-white transition-colors">
              Download CV
            </span>
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity duration-500">
        <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-500 uppercase group-hover:text-blue-400 transition-all duration-300">
          Explore
        </span>
        <div className="h-16 w-px bg-linear-to-b from-transparent via-blue-500/30 to-transparent relative overflow-hidden group-hover:via-blue-400/80 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-blue-500 animate-drop-light blur-[1px] group-hover:to-cyan-300 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>
      </div>
    </section>
  );
};
