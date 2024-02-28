import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer_container">
        <ul>
          <li>
            <a href="https://github.com/mehdi660" target="blank_">
              <FontAwesomeIcon color="#5350a8" size="3x" icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mehdi-belgoumri/"
              target="blank_"
            >
              <FontAwesomeIcon color="#5350a8" size="3x" icon={faLinkedin} />
            </a>
          </li>
        </ul>
        <div className="idk">
          <p>{t("footer_made")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
