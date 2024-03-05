import Home from "./pages/Home";

function App({ handleMouseMove, handleMouseOut, darkMode }) {
  return (
    <div
      className={`App ${darkMode ? "dark-mode" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <Home />
    </div>
  );
}

export default App;
