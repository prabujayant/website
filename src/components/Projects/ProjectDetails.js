import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import { PROJECTS_DATA } from "../../Constants";
import Particle from "../Particle";

function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS_DATA.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <Container className="project-section text-center pt-5 mt-5">
        <h2 className="text-white">Project Not Found</h2>
        <Button as={Link} to="/project" className="btn-primary mt-3">Back to Projects</Button>
      </Container>
    );
  }

  const isInternal = typeof project.demoLink === "string" && project.demoLink.startsWith("/");

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="glass-card mt-5 position-relative" style={{ zIndex: 2 }}>
        <div className="mb-3">
          <Button as={Link} to="/project" variant="link" className="text-gold text-decoration-none p-0">
            ← Back to Projects
          </Button>
        </div>
        <p className="section-eyebrow">Case study</p>
        <h1 className="project-heading text-start mb-4" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>
          <strong>{project.title}</strong>
        </h1>

        {project.imgPath && (
          <img
            src={project.imgPath}
            alt={`${project.title} cover`}
            style={{ width: "100%", maxWidth: "880px", maxHeight: "320px", objectFit: "cover", borderRadius: "16px", margin: "0 auto 2rem", display: "block" }}
            loading="lazy"
          />
        )}
        
        <Row className="mb-4 g-4">
          <Col xs={12} md={8}>
            <h3 className="text-gold mb-3">Overview</h3>
            <p className="text-body-primary" style={{ whiteSpace: "pre-line" }}>{project.description}</p>
          </Col>
          <Col xs={12} md={4}>
            <div className="p-4 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.3)" }}>
              <h5 className="text-gold">Role</h5>
              <p className="text-white">UI/UX Designer & Researcher</p>
              <h5 className="text-gold mt-3">Focus</h5>
              <p className="text-white">User research, wireframing, prototyping</p>
              {project.demoLink && (
                isInternal ? (
                  <Button as={Link} to={project.demoLink} className="btn-gold mt-3 w-100">
                    {project.customButtonText || "View Live Prototype"}
                  </Button>
                ) : (
                  <Button href={project.demoLink} target="_blank" rel="noreferrer" className="btn-gold mt-3 w-100">
                    {project.customButtonText || "View Live Prototype"}
                  </Button>
                )
              )}
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.15)" }} />

        <Row className="mt-4 text-white">
          <Col xs={12}>
            <h3 className="text-gold mb-3">1. The Problem</h3>
            <p className="text-body-secondary">
              Users struggle with fragmented information and high cognitive load. This case study focuses on simplifying the journey into one clear, accessible flow.
            </p>

            <h3 className="text-gold mt-5 mb-3">2. Approach</h3>
            <p className="text-body-secondary">
              Research → synthesize insights → wireframe → prototype → test. Emphasis on readability, visual hierarchy, and mobile-first responsiveness.
            </p>

            <h3 className="text-gold mt-5 mb-3">3. Outcome</h3>
            <p className="text-body-secondary">
              A cleaner information architecture with measurable readability and engagement improvements. Full process documentation coming soon.
            </p>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default ProjectDetails;