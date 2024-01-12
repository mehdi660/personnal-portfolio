import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="hero_bnr">
        <h1>Welcome to my world !</h1>
        <p>Scroll down to learn more about me (:</p>
        <div className="scroll">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text">Scroll down</span>
        </div>
      </div>
    </main>
  );
};

export default Hero;
