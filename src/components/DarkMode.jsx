import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [torchX, setTorchX] = useState(null);
  const [torchY, setTorchY] = useState(null);

  useEffect(() => {
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
      const { clientX, clientY } = event;
      setTorchX(clientX);
      setTorchY(clientY + window.scrollY); // Ajustement pour le défilement de la page
    }
  };

  const handleMouseOut = () => {
    if (darkMode) {
      setTorchX(null);
      setTorchY(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Mode Lumière" : "Mode Sombre"}
      </button>
      {darkMode && torchX !== null && torchY !== null && (
        <div className="torch" style={{ left: torchX, top: torchY }} />
      )}
    </div>
  );
};

export default DarkMode;
