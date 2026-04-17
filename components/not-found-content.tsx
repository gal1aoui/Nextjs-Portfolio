"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/icons";
import { localizePath, getLanguageFromPathname } from "@/i18n/routing";
import { useTranslation } from "@/i18n/client";

export default function NotFoundContent() {
  const pathname = usePathname();
  const language = getLanguageFromPathname(pathname);
  const { t } = useTranslation("common");

  return (
    <section className="min-h-[70vh] px-4 py-16">
      <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
        <div className="mb-8 flex items-center rounded-full border border-default-200 bg-default-100/60 px-6 py-4 backdrop-blur-md">
          <Logo />
          <span className="text-3xl font-bold tracking-tight">
            {t("navbar.logo")}
          </span>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          404
        </p>
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
          {t("notFound.title")}
        </h1>
        <p className="mb-8 max-w-xl text-default-500">
          {t("notFound.description")}
        </p>

        <NextLink
          className="inline-flex h-10 min-w-20 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          href={localizePath(language, "/")}
        >
          {t("notFound.cta")}
        </NextLink>
      </div>
    </section>
  );
}
