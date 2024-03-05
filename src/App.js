import Home from "./pages/Home";

function App({ handleMouseMove, handleMouseOut }) {
  return (
    <div
      className="dark-mode ombre "
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <Home />
    </div>
  );
}

export default App;
