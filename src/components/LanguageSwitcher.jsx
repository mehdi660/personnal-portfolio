import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="btn_switcher">
      <button id="en" onClick={() => changeLanguage("en")}>
        En
      </button>
      <button id="fr" onClick={() => changeLanguage("fr")}>
        Fr
      </button>
    </div>
  );
};

export default LanguageSwitcher;
