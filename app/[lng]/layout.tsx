import { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { ToastProvider } from "@heroui/toast";
import { ReactNode } from "react";

import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
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

  // Site-wide defaults only — canonical/alternates and per-page titles are
  // owned by each page's generateMetadata.
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

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    image: `${siteConfig.url}/avatar-profile.webp`,
    jobTitle:
      lng === "fr"
        ? "Ingénieur Logiciel Fullstack"
        : "Fullstack Software Engineer",
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.medium,
    ],
    knowsAbout: [
      "Node.js",
      "React",
      "TypeScript",
      "Next.js",
      "Angular",
      "PostgreSQL",
      "Supabase",
      "Docker",
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        type="application/ld+json"
      />
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <ModalProvider>{children}</ModalProvider>
        <ToastProvider />
      </Providers>
    </>
  );
}
