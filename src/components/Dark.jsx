import React, { useState } from "react";

const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("true");
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default Dark;
