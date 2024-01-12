import React from "react";
import { skillData, inComing } from "../helpers/skill";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element name={"Skills"} id="skills">
      <section className="skills">
        <Container className="text-center">
          <h2>Skills</h2>
          <div className="underline"></div>

          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5 ">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          <h2>In coming...</h2>
          <Row className="mt-3 align-items-center">
            {inComing.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5 ">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Element>
  );
};

export default Skills;
