import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const supportedLngs = ["en", "ar"] as const;
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // only use the language code (e.g. "en") and ignore region variants (e.g. "en-US", "en-AS")
    load: "languageOnly",

    // where translation files are served from
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    fallbackLng: "en",
    debug: true,
    supportedLngs,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
