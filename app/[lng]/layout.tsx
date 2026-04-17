import { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { ToastProvider } from "@heroui/toast";
import { ReactNode } from "react";

import { Providers } from "@/app/providers";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { getAbsoluteLocalizedUrl } from "@/i18n/routing";
import { getTranslator } from "@/i18n/server";
import { isLanguage, languages } from "@/i18n/settings";
import { ModalProvider } from "@/providers/modal-provider";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    lng: string;
  }>;
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    return {};
  }

  const { t } = await getTranslator(lng, "seo");
  const title = t("seo:siteTitle") as string;
  const description = t("seo:siteDescription") as string;
  const keywords = t("seo:keywords", { returnObjects: true }) as string[];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s - ${title}`,
    },
    description,
    keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: lng === "fr" ? "fr_FR" : "en_US",
      url: getAbsoluteLocalizedUrl(lng, "/"),
      title,
      description,
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: getAbsoluteLocalizedUrl(lng, "/"),
      languages: {
        en: getAbsoluteLocalizedUrl("en", "/"),
        fr: getAbsoluteLocalizedUrl("fr", "/"),
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    notFound();
  }

  return (
    <>
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <ModalProvider>
          <Navbar />
          <main className="p-0 md:px-4 md:pt-6">{children}</main>
        </ModalProvider>
      </Providers>
      <ToastProvider />
    </>
  );
}
