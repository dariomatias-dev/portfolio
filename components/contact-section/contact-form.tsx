"use client";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Dropdown } from "../dropdown";

export const ContactForm = () => {
  const t = useTranslations();
  const [formStatus, setFormStatus] = useState("idle");
  const [subject, setSubject] = useState("");

  const subjectOptions = [
    { id: "project", name: t("contact.subjects.project") },
    { id: "job", name: t("contact.subjects.job") },
    { id: "mentorship", name: t("contact.subjects.mentorship") },
    { id: "other", name: t("contact.subjects.other") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus("submitting");

    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="relative w-full">
      <div className="absolute -inset-2 bg-linear-to-r from-slate-200 to-slate-100 rounded-[2.5rem] blur-xl opacity-50" />

      <div className="relative bg-white p-6 md:p-8 rounded-4xl shadow-2xl shadow-slate-200/50 border border-white">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-slate-900">
            {t("contact.formTitle")}
          </h3>

          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
            <Send size={18} className="text-slate-400" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide ml-1.5">
                {t("labels.name")}
              </label>

              <div className="relative group">
                <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-black transition-colors duration-300">
                  <User size={18} />
                </div>

                <input
                  type="text"
                  placeholder="Dário Matias"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 hover:bg-slate-100 focus:bg-white rounded-xl border border-transparent focus:border-black/5 focus:shadow-md outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-sm font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide ml-1.5">
                {t("labels.email")}
              </label>

              <div className="relative group">
                <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-black transition-colors duration-300">
                  <Mail size={18} />
                </div>

                <input
                  type="email"
                  placeholder="dario@gmail.com"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 hover:bg-slate-100 focus:bg-white rounded-xl border border-transparent focus:border-black/5 focus:shadow-md outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-sm font-medium"
                  required
                />
              </div>
            </div>
          </div>

          <Dropdown
            label={t("labels.subject")}
            placeholder={t("labels.subject")}
            icon={MessageSquare}
            options={subjectOptions}
            value={subject}
            onChange={setSubject}
          />

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide ml-1.5">
              {t("labels.message")}
            </label>

            <textarea
              rows={4}
              placeholder={t("contact.placeholders.message")}
              className="w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 focus:bg-white rounded-xl border border-transparent focus:border-black/5 focus:shadow-md outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-sm font-medium resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={formStatus === "submitting" || formStatus === "success"}
            className={cn(
              "group w-full py-3.5 rounded-full font-bold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-[0.98]",
              formStatus === "success"
                ? "bg-emerald-500 hover:bg-emerald-600"
                : "bg-[#0F172A] hover:bg-black hover:shadow-lg hover:shadow-black/10"
            )}
          >
            {formStatus === "idle" && (
              <>
                {t("contact.button.idle")}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </>
            )}

            {formStatus === "submitting" && (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                {t("contact.button.submitting")}
              </span>
            )}

            {formStatus === "success" && (
              <>
                {t("contact.button.success")}

                <CheckCircle2 size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
