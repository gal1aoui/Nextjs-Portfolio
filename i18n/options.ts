import type { InitOptions } from "i18next";

import {
  defaultNS,
  fallbackLng,
  languages,
  namespaces,
  type AppLanguage,
  type AppNamespace,
} from "./settings";

export function getI18nOptions(
  lng: AppLanguage = fallbackLng,
  ns: AppNamespace | AppNamespace[] = defaultNS,
): InitOptions {
  return {
    supportedLngs: [...languages],
    fallbackLng,
    lng,
    defaultNS,
    fallbackNS: defaultNS,
    ns: Array.isArray(ns) ? ns : [...namespaces],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  };
}
