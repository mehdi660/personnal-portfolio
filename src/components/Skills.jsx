import React, { useEffect, useRef } from "react";
import { skillData, inComing, resume } from "../helpers/skill";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Element } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const skillRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".skills-list").forEach((skillsList) => {
      gsap.fromTo(
        skillsList,
        {
          opacity: 0,
          x: 100,
        },
        {
          scrollTrigger: {
            trigger: skillsList,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
        }
      );
    });
  }, [skillRef]);

  return (
    <Element name={"Skills"} id="skills">
      <section className="skills">
        <Container className="text-center">
          <h2 id="skill-title">{t("myskills_title")}</h2>
          <div className="underline"></div>

          <Row className="mt-3 align-items-center skills-list">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5 ">
                  <figure>
                    {skills.skill}
                    <figcaption className="skills">{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          <h2 className="incoming">{t("myskills_incoming")}</h2>
          <Row className="mt-3 align-items-center skills-list">
            {inComing.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5 ">
                  <figure>
                    {skills.skill}
                    <figcaption className="skills fig">
                      {skills.name}
                    </figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a href={resume} target="_blank" rel="noreferrer">
              <Button color="ffbf00" size="lg" className="mt-5 resume">
                {t("myskills_resume")}
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
};

export default Skills;
