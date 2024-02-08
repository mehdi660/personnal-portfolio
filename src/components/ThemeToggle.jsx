import React, { useState } from "react";

function ThemeToggle() {
  // État pour suivre le mode (clair ou sombre)
  const [darkMode, setDarkMode] = useState(false);

  // Fonction pour basculer entre les modes clair et sombre
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
