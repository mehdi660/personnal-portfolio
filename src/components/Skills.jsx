import React from "react";
import { skillData, inComing, resume } from "../helpers/skill";
import { Col, Container, Row, Button } from "react-bootstrap";
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
          <h2 className="incoming">In coming...</h2>
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
          {resume && (
            <a href={resume} target="_blank" rel="noreferrer">
              <Button color="ffbf00" size="lg" className="mt-5">
                Resume
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
};

export default Skills;
