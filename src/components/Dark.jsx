import React, { useState } from "react";
import "../styles/bg.css";

const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (!darkMode) {
      document.body.classList.toggle("dark");
    }
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default Dark;
