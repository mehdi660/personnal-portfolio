import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
