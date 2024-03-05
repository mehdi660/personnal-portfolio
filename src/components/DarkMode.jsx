import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Code pour détecter si le mode sombre est activé ou désactivé
    // Par exemple, vous pouvez utiliser localStorage ou un autre moyen pour stocker l'état du mode sombre
    // Cela peut varier en fonction de la façon dont vous implémentez le mode sombre dans votre application
    // Dans cet exemple, j'utilise localStorage pour stocker l'état du mode sombre
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const handleMouseMove = (event) => {
    if (darkMode) {
      const target = event.target;
      target.classList.remove("ombre");
    }
  };

  const handleMouseOut = (event) => {
    if (darkMode) {
      event.target.classList.add("ombre");
    }
  };

  return (
    <div
      className={`App ${darkMode ? "dark-mode" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      {/* Bouton pour basculer le mode sombre */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Mode Lumière" : "Mode Sombre"}
      </button>
    </div>
  );
};

export default DarkMode;
