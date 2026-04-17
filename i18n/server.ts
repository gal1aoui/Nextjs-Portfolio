import "server-only";

import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

import { getI18nOptions } from "./options";
import { defaultNS, type AppLanguage, type AppNamespace } from "./settings";

async function initI18next(
  lng: AppLanguage,
  ns: AppNamespace | AppNamespace[] = defaultNS,
) {
  const instance = createInstance();

  await instance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: AppLanguage, namespace: AppNamespace) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getI18nOptions(lng, ns));

  return instance;
}

export async function getTranslator(
  lng: AppLanguage,
  ns: AppNamespace | AppNamespace[] = defaultNS,
) {
  const i18n = await initI18next(lng, ns);
  const defaultNamespace = Array.isArray(ns) ? ns[0] : ns;

  return {
    i18n,
    t: i18n.getFixedT(lng, defaultNamespace),
  };
}
