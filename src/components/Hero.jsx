import React from "react";
import scroll from "../assets/scroll-bar.png";

const Hero = () => {
  return (
    <main>
      <div className="hero_bnr">
        <h1>Welcome to my world !</h1>
        <p>Scroll down to learn more about me (:</p>
        <img src={scroll} alt="scroll" width={50} />
      </div>
    </main>
  );
};

export default Hero;
