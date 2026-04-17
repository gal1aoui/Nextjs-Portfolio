"use client";

import i18next from "i18next";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import {
  initReactI18next,
  useTranslation as useI18NextTranslation,
} from "react-i18next";

import { getI18nOptions } from "./options";
import { resources } from "./resources";
import {
  fallbackLng,
  isLanguage,
  languages,
  type AppNamespace,
} from "./settings";

if (!i18next.isInitialized) {
  void i18next.use(initReactI18next).init({
    ...getI18nOptions(),
    initAsync: false,
    preload: [...languages],
    resources,
  });
}

export function useTranslation(ns: AppNamespace | AppNamespace[] = "common") {
  const params = useParams<{ lng?: string }>();
  const lng =
    typeof params?.lng === "string" && isLanguage(params.lng)
      ? params.lng
      : fallbackLng;

  useEffect(() => {
    if (i18next.resolvedLanguage !== lng) {
      void i18next.changeLanguage(lng);
    }

    document.documentElement.lang = lng;
  }, [lng]);

  return useI18NextTranslation(ns, { lng });
}
