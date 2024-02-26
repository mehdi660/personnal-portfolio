/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import "../styles/dark.css";

const Hero = ({ darkMode }) => {
  gsap.registerPlugin(TextPlugin);
  useEffect(() => {
    gsap.to(".title", {
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
    gsap.to(".desc", {
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
      <div className={`hero_bnr ${darkMode ? "dark" : "light"}`}>
        <h1 className="title"></h1>
        <p className="desc"></p>

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
