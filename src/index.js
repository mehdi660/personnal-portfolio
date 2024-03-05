import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bg.css";
import "./styles/about.css";
import "./styles/index.css";
import "./styles/skills.css";
import "./styles/project.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/nav.css";
import "./styles/dark.css";
import i18n from "./i18n";
import "./styles/languageswitcher.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
