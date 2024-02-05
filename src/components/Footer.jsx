import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <ul>
          <li>
            <a href="https://github.com/mehdi660" target="blank_">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mehdi-belgoumri/"
              target="blank_"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
