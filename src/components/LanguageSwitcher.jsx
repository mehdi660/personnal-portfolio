import React from "react";
import { useTranslation } from "react-i18next";
import usa from "../assets/Flag_of_the_United_States.png";
import fr from "../assets/Flag_of_France.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="btn_switcher">
      <button
        className="btn_switch"
        id="en"
        onClick={() => changeLanguage("en")}
      >
        <img src={usa} alt="usa flag" />
      </button>

      <button
        className="btn_switch"
        id="fr"
        onClick={() => changeLanguage("fr")}
      >
        {" "}
        <img src={fr} alt="fr flag" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
