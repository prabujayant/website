import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { PROJECTS_DATA } from "../../Constants";

function Projects() {
  return (
    <Container
      fluid
      className="project-section"
    >
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>
        <h1 className="project-heading">
          Annisa's Recent <strong>Works</strong>
        </h1>
        <p className="project-description">
          Here are a few projects I've worked on recently.
        </p>
        <Row className="projects-row">
                    {PROJECTS_DATA.map((project) => (
            <Col md={4} className="project-card d-flex justify-content-center" key={project.id}>
              <ProjectCard
                isBlog={project.isBlog || false}
                title={project.title}
                description={
                  project.description.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))
                }
                demoLink={project.demoLink}
                customButtonText={project.customButtonText}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;