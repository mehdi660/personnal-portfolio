/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from "react";
import { gsap } from "gsap/all";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  useEffect(() => {
    gsap.to(".h1", {
      stagger: 0.05,
      delay: 0.1,
      duration: 3,
      ease: "power3.inOut",

      text: {
        value: "Welcome to my world !",
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(".p", {
      stagger: 0.05,
      delay: 2.5,
      duration: 3,
      ease: "power3.inOut",

      text: {
        value: "Scroll down to learn more about me (:",
      },
    });
  }, []);

  return (
    <main>
      <div className="hero_bnr">
        <h1 className="h1"></h1>
        <p className="p"></p>

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
