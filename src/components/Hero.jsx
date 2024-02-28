/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  gsap.registerPlugin(TextPlugin);
  useEffect(() => {
    gsap.to(".title", {
      stagger: 0.05,
      delay: 0.1,
      duration: 3,
      ease: "power3.inOut",

      text: {
        value: t("welcome"),
      },
    });
  }, [t]);

  useEffect(() => {
    gsap.to(".desc", {
      stagger: 0.05,
      delay: 2.5,
      duration: 3,
      ease: "power3.inOut",

      text: {
        value: t("scroll"),
      },
    });
  }, [t]);

  return (
    <main>
      <div className="hero_bnr">
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
