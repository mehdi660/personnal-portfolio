import React, { useEffect, useRef } from "react";
import Avatar from "@mui/joy/Avatar";
import moi from "../assets/moi.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const aboutMeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".about_me",
      {
        opacity: 0,
        x: 100,
      },
      {
        scrollTrigger: {
          trigger: aboutMeRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
        x: 0,
        opacity: 1,
      }
    );
  }, [aboutMeRef]);

  return (
    <section className="about" id="about">
      <h2>{t("aboutme_nav")}</h2>

      <div className="about_me" ref={aboutMeRef}>
        <Avatar
          id="avatar"
          src={moi}
          alt="moi"
          sx={{
            "--Avatar-size": "20%",
          }}
        />
        <p>{t("aboutme_desc")}</p>
      </div>
    </section>
  );
};

export default About;
