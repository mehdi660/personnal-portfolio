/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from "react";
import { gsap } from "gsap/all";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  useEffect(() => {
    gsap.to(".split", {
      stagger: 0.05,
      delay: 0.1,
      duration: 3,
      ease: "power3.inOut", // Use a standard ease for the entire animation
      text: {
        value: "Welcome to my world !",
      },
    });
  }, []);

  return (
    <main>
      <div className="hero_bnr">
        <h1 className="split"></h1>
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
