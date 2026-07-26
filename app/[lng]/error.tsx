"use client";

import { useEffect } from "react";
import { Button } from "@heroui/button";

import { Logo } from "@/components/icons";
import { useTranslation } from "@/i18n/client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { t } = useTranslation("common");

  useEffect(() => {
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="flex max-w-xl flex-col items-center text-center">
        <div className="mb-8 flex items-center rounded-full border border-default-200 bg-default-100/60 px-6 py-4 backdrop-blur-md">
          <Logo />
          <span className="text-3xl font-bold tracking-tight">
            {t("navbar.logo")}
          </span>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold md:text-4xl">
          {t("error.title")}
        </h1>
        <p className="mb-8 text-default-500">{t("error.description")}</p>

        <Button color="primary" radius="full" onPress={() => reset()}>
          {t("error.retry")}
        </Button>
      </div>
    </section>
  );
}
