import React from "react";
import { skillData } from "../helpers/skill";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
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
        </Container>
      </section>
    </Element>
  );
};

export default Skills;
