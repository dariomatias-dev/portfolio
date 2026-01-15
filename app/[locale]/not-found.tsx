"use client";

import { Activity, Binary, Home, ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = () => {
  const t = useTranslations("notFound");

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#030303] overflow-hidden selection:bg-blue-500/30 px-4 md:px-6 py-30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[3rem_3rem] md:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-120 sm:h-100 md:w-200 md:h-125 bg-blue-600/20 blur-[400px] rounded-full pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <div className="mb-4 md:mb-6 inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <span className="text-[9px] md:text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
              {t("badge")}
            </span>
          </div>

          <div className="relative">
            <h1 className="text-8xl sm:text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-white/80 to-white/5 opacity-90">
              404
            </h1>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-blue-500/20 blur-[60px] md:blur-[100px] -z-10" />
          </div>

          <div className="max-w-xl text-center -mt-4 sm:-mt-8 md:-mt-14 relative z-20">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="text-blue-500">{chunks}</span>
                ),
              })}
            </h2>

            <p className="text-zinc-400 text-sm md:text-xl font-light leading-relaxed px-4 md:px-0">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-3xl mb-10 md:mb-12">
          <div className="p-5 md:p-6 rounded-3xl md:rounded-4xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
            <Binary size={18} className="text-blue-500 mb-3" />

            <div className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase mb-1">
              {t("labels.statusCode")}
            </div>

            <div className="text-xs md:text-sm font-mono text-zinc-200 uppercase">
              {t("values.pathNotResolved")}
            </div>
          </div>

          <div className="p-5 md:p-6 rounded-3xl md:rounded-4xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
            <ShieldAlert size={18} className="text-blue-500 mb-3" />

            <div className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase mb-1">
              {t("labels.accessLevel")}
            </div>

            <div className="text-xs md:text-sm font-mono text-zinc-200 uppercase">
              {t("values.restrictedEntry")}
            </div>
          </div>

          <div className="p-5 md:p-6 rounded-3xl md:rounded-4xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
            <Activity size={18} className="text-blue-500 mb-3" />

            <div className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase mb-1">
              {t("labels.operation")}
            </div>

            <div className="text-xs md:text-sm font-mono text-zinc-200 uppercase">
              {t("values.haltedCore")}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center px-4">
          <Link
            href="/"
            className="group relative inline-flex h-12 md:h-14 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 md:px-12 text-xs md:text-sm font-black text-black transition-all hover:bg-blue-50 hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.6)] active:scale-95"
          >
            <Home className="size-4 sm:size-5" />

            <span className="uppercase">{t("backButton")}</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
