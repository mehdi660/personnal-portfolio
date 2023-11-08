import React from "react";
import bg from "../assets/milky-way-5295160_1920.jpg";

const Hero = () => {
  return (
    <main>
      <div className="hero_bnr">
        <img src={bg} alt="stars" />
        <h1>Welcome to my world !</h1>
      </div>
    </main>
  );
};

export default Hero;
