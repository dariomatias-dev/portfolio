"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Dropdown } from "../dropdown";

const schema = z.object({
  name: z.string().min(1, "contact.form.errors.name"),
  email: z.email("contact.form.errors.emailInvalid"),
  subject: z.string().min(1, "contact.form.errors.subject"),
  message: z.string().min(1, "contact.form.errors.message"),
});

type FormData = z.infer<typeof schema>;

export const ContactForm = () => {
  const t = useTranslations();

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const subjectOptions = [
    { id: "project", name: t("contact.subjects.project") },
    { id: "job", name: t("contact.subjects.job") },
    { id: "mentorship", name: t("contact.subjects.mentorship") },
    { id: "other", name: t("contact.subjects.other") },
  ];

  const onSubmit = async (data: FormData) => {
    setFormStatus("submitting");

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: data.name,
          subject: data.subject,
          message: data.message,
          email: data.email,
        },
        publicKey
      );

      setFormStatus("success");
      reset();

      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);

      setFormStatus("error");

      setTimeout(() => setFormStatus("idle"), 3000);
    }
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  {...register("name")}
                  type="text"
                  placeholder="Dário Matias"
                  className={cn(
                    "w-full pl-11 pr-4 py-3 bg-slate-50 hover:bg-slate-100 focus:bg-white rounded-xl border border-transparent focus:border-black/5 focus:shadow-md outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-sm font-medium",
                    errors.name && "border-red-200 bg-red-50/30"
                  )}
                />
              </div>

              {errors.name && (
                <p className="text-[10px] text-red-500 ml-1.5 font-medium">
                  {t(errors.name.message!)}
                </p>
              )}
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
                  {...register("email")}
                  type="email"
                  placeholder="dario@gmail.com"
                  className={cn(
                    "w-full pl-11 pr-4 py-3 bg-slate-50 hover:bg-slate-100 focus:bg-white rounded-xl border border-transparent focus:border-black/5 focus:shadow-md outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-sm font-medium",
                    errors.email && "border-red-200 bg-red-50/30"
                  )}
                />
              </div>

              {errors.email && (
                <p className="text-[10px] text-red-500 ml-1.5 font-medium">
                  {t(errors.email.message!)}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <Controller
              name="subject"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Dropdown
                    label={t("labels.subject")}
                    placeholder={t("labels.subject")}
                    icon={MessageSquare}
                    options={subjectOptions}
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />

                  {fieldState.error && (
                    <p className="text-[10px] text-red-500 ml-1.5 font-medium">
                      {t(fieldState.error.message!)}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide ml-1.5">
              {t("labels.message")}
            </label>

            <textarea
              {...register("message")}
              rows={4}
              placeholder={t("contact.placeholders.message")}
              className={cn(
                "w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 focus:bg-white rounded-xl border border-transparent focus:border-black/5 focus:shadow-md outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 text-sm font-medium resize-none",
                errors.message && "border-red-200 bg-red-50/30"
              )}
            />

            {errors.message && (
              <p className="text-[10px] text-red-500 ml-1.5 font-medium">
                {t(errors.message.message!)}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={formStatus === "submitting" || formStatus === "success"}
            className={cn(
              "group w-full py-3.5 rounded-full font-bold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-[0.98]",
              formStatus === "success"
                ? "bg-emerald-500 hover:bg-emerald-600"
                : formStatus === "error"
                ? "bg-red-500"
                : "bg-[#0F172A] hover:bg-black hover:shadow-lg hover:shadow-black/10"
            )}
          >
            {(formStatus === "idle" || formStatus === "error") && (
              <>
                {formStatus === "error"
                  ? t("contact.button.error")
                  : t("contact.button.idle")}

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
