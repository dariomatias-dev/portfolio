import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore projects, skills, and experiences of Dário Matias.",
};

interface RootLayoutProps {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
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
