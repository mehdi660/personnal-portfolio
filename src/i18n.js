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
          aboutme_nav: "About me",
          skills_nav: "Skills",
          project_nav: "Project",
          contact_nav: "Contact",
        },
      },
      fr: {
        translation: {
          aboutme_nav: "À propos de moi",
          skills_nav: "Skill",
          project_nav: "Projet",
          contact_nav: "Contact",
        },
      },
    },
  });

export default i18n;
