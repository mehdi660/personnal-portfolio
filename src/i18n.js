import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
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
          welcome: "Welcome to my world !",
          scroll: "Scroll down to learn more about me (:",
          aboutme_title: "About me 🕶",
          aboutme_desc:
            "Hello! My name is Mehdi, I'm 22 years old, and I was born on 26/09/2002 in Belfort (France). Since September 2022, I've started coding, and since then, I haven't stopped. Coding, for me, is a form of relaxation that allows me to unwind and think about something else, much like sports or video games. I have a passion for creating new things, solving problems, and the satisfaction of seeing the results of my creations.",
          myskills_title: "My skills 💪🏻",
          myskills_incoming: "In coming...",
          myskills_resume: "Resume",
          myproject_title: "My project 🚀",
          myproject_debog:
            "In this project, I learn how to use unit test and integration test with jest, the goal of this project was to find bugs and correct them",
          myproject_argent:
            "In this project, I learned how to display back end data on the interface via API calls, configure API routes for client/server communication, and implement data management with Redux to keep the front running",
          myproject_kasa:
            "In this project, I learned to use React for the first time",
          myproject_nina:
            "In this project, I learned how to optimize the performance of a website, with the lighthouse and wave tools",
          myproject_omf:
            "In this project, I learned how to Implement CSS animations and Integrate a mobile-first mockup",
          myproject_booki:
            "In this projetc, I learned for the first time to use HTML and CSS",
          hmu_title: " Hit me up !  📞",
          hmu_mail: "Email Address",
          hmu_submit: "Submit",
          footer_made: "made with 💜 by @mehdi660",
        },
      },
      fr: {
        translation: {
          aboutme_nav: "À propos de moi",
          skills_nav: "Skill",
          project_nav: "Projet",
          contact_nav: "Contact",
          welcome: "Bienvenue dans mon monde !",
          scroll: "Descendez pour en apprendre plus sur moi (:",
          aboutme_title: "À propos de moi🕶",
          aboutme_desc:
            "Bonjour ! Je m’appelle Mehdi, j’ai 22 ans et je suis né le 26/09/2002 à Belfort. Depuis septembre 2022, j'ai commencé à écrire du code, et depuis lors, je n'ai jamais arrêté. Pour moi, écrire du code est une forme de relaxation qui me permet de me détendre et de penser à autre chose, un peu comme le sport ou les jeux vidéo. J'ai une passion pour la création de nouvelles choses, la résolution de problèmes et la satisfaction de voir le résultat de mes créations.",
          myskills_title: "Mes skills 💪🏻",
          myskills_incoming: "À venir...",
          myskills_resume: "CV",
          myproject_title: "Mes projets 🚀",
          myproject_debog:
            "Dans ce projet, j'ai appris à utiliser des tests unitaires et des tests d'intégration avec jest, l'objectif de ce projet était de trouver des bugs et de les corriger",
          myproject_argent:
            "Dans ce projet, j'ai appris à afficher les données back-end sur l'interface via des appels API, à configurer les routes API pour la communication client/serveur et à implémenter la gestion des données avec Redux pour que le front continue de fonctionner.",
          myproject_kasa:
            "Dans ce projet, j'ai appris à utiliser React pour la première fois",
          myproject_nina:
            "Dans ce projet, j'ai appris à optimiser les performances d'un site internet, avec les outils lighthouse et wave",
          myproject_omf:
            "Dans ce projet, j'ai appris à implémenter des animations CSS et à intégrer une maquette mobile.",
          myproject_booki:
            "Dans ce projet, j'ai appris pour la première fois à utiliser HTML et CSS",
          hmu_title: "Contactez moi !  📞",
          hmu_mail: "Adresse mail",
          hmu_submit: "Envoyer",
          footer_made: "Fait avec 💜 par @mehdi660",
        },
      },
    },
  });

export default i18n;
