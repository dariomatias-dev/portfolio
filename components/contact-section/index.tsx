"use client";

import { Check, Copy, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { CONTACTS } from "@/constants/contacts";
import { ContactForm } from "./contact-form";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACTS.email);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-linear-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3" />

        <div className="absolute bottom-0 left-0 w-62.5 md:w-125 h-62.5 md:h-125 bg-linear-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              {t("status.availableForProjects")}
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
              {t.rich("contact.title", {
                remarkable: (chunks) => (
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                    {chunks}
                  </span>
                ),
                br: () => <br className="hidden md:block" />,
              })}
            </h2>

            <p className="text-slate-500 text-sm md:text-base mb-8 md:mb-10 max-w-md leading-relaxed font-medium">
              {t("contact.subtitle")}
            </p>

            <div className="flex flex-col gap-4 w-full items-center lg:items-start">
              <button
                onClick={copyEmail}
                className="group relative flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 w-full max-w-sm text-left overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                      {t("contact.emailLabel")}
                    </p>

                    <p className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all md:break-normal">
                      {CONTACTS.email}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pl-2 md:pr-4 flex items-center justify-center">
                  <div
                    className={cn(
                      "absolute text-emerald-500 transition-all duration-300 transform",
                      copied ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    )}
                  >
                    <Check size={20} />
                  </div>

                  <div
                    className={cn(
                      "text-slate-300 group-hover:text-blue-500 transition-all duration-300 transform",
                      copied ? "opacity-0 scale-50" : "opacity-100 scale-100"
                    )}
                  >
                    <Copy size={20} />
                  </div>
                </div>
              </button>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm w-full max-w-sm cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                  <MapPin size={20} />
                </div>

                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                    {t("contact.locationLabel")}
                  </p>

                  <p className="text-sm md:text-base font-bold text-slate-900">
                    {t("contact.locationValue")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
