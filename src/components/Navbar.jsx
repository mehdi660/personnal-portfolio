import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarr from "react-bootstrap/Navbar";
import Avatar from "@mui/joy/Avatar";
import moi from "../assets/moi.jpg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import DarkMode from "./DarkMode";

function Navbar() {
  const { t } = useTranslation();
  return (
    <header>
      <Navbarr
        data-bs-theme="dark"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <Container className="d-flex justify-content-center">
          <Nav className="me-auto d-flex align-items-center">
            <div className="avatar-container">
              <Avatar className="avatar" src={moi} alt="moi" />
            </div>
            <Nav.Link className="a_nav" href="#about">
              {t("aboutme_nav")}
            </Nav.Link>
            <Nav.Link className="a_nav" href="#skills">
              {t("skills_nav")}
            </Nav.Link>
            <Nav.Link className="a_nav" href="#project">
              {t("project_nav")}
            </Nav.Link>
            <Nav.Link className="a_nav" href="#contact">
              {t("contact_nav")}
            </Nav.Link>
          </Nav>
          <DarkMode />
          <LanguageSwitcher />
        </Container>
      </Navbarr>
    </header>
  );
}

export default Navbar;
