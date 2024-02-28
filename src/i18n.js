import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Importation du détecteur de langue

i18n
  .use(LanguageDetector) // Utilisation du détecteur de langue
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",

    resources: {
      en: {
        translation: {
          greeting: "Hello world",
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour le monde",
        },
      },
    },
  });

export default i18n;
