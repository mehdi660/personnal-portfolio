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

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* Bouton pour basculer le mode sombre */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Mode Lumière" : "Mode Sombre"}
      </button>
      <h1>Mon Portfolio</h1>
      {/* Contenu de votre portfolio */}
    </div>
  );
};

export default DarkMode;
