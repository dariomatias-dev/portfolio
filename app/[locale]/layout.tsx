import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore projects, skills, and experiences of Dário Matias.",
};

interface RootLayoutProps {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

const RootLayout = async ({ params, children }: RootLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
