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
        <p className="section-eyebrow" style={{ display: "table", margin: "0 auto 1rem" }}>Portfolio</p>
        <h1 className="project-heading">
          Annisa's Recent <strong>Works</strong>
        </h1>
        <p className="project-description">
          A selection of research, UI/UX case studies, and educational platforms — focused on clarity, accessibility, and real user impact.
        </p>
        <Row className="projects-row g-4">
                    {PROJECTS_DATA.map((project) => (
            <Col xs={12} md={6} lg={4} className="project-card d-flex justify-content-center" key={project.id}>
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
                imgPath={project.imgPath}
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