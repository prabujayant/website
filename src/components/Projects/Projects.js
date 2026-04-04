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
      style={{
        background: "linear-gradient(180deg, #1d1d1d 0%, #0a0a0a 100%)", // Darker, more gradient background
        paddingTop: "80px", // More padding at the top
        paddingBottom: "80px", // More padding at the bottom
        position: "relative",
        overflow: "hidden", // Ensure particles and effects stay within
      }}
    >
      <Particle /> {/* Assuming Particle component adds background animations */}
      <Container style={{ position: "relative", zIndex: 1 }}> {/* Ensure content is above particles */}
        <h1
          className="project-heading"
          style={{
            color: "#ffd700", // Brighter gold for heading
            fontWeight: "bold",
            marginBottom: "20px", // Adjusted margin
            fontSize: "3.2em", // Larger font size for impact
            textShadow: "0 0 15px rgba(255, 215, 0, 0.3)", // Subtle glow effect
            letterSpacing: "1px", // Slight letter spacing
            textAlign: "center", // Center align heading
          }}
        >
          Annisa's Recent <strong style={{ color: "#c770f0" }}>Works</strong> {/* Highlight "Works" in purple */}
        </h1>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.9)", // Slightly less bright white for description
            fontSize: "1.3em", // Slightly larger font size
            marginBottom: "70px", // Increased margin below description
            lineHeight: "1.6", // Improved readability
            maxWidth: "800px", // Limit width for better readability on large screens
            margin: "0 auto 70px auto", // Center the paragraph
            textAlign: "center", // Center align paragraph
            opacity: 0.9,
          }}
        >
          Here are a few projects I've worked on recently.
        </p>
                <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            gap: "30px", // Add gap between project cards for better spacing
            display: "flex",
            flexWrap: "wrap", // Allow cards to wrap on smaller screens
          }}
        >
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

        {/* CSS for responsive adjustments and animations (if any specific to Projects.js) */}
        <style>{`
          /* Add any specific styles for Project.js here if needed, e.g., animations for the section */
          .project-section {
            animation: fadeIn 1s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Ensure project cards are centered and spaced on smaller screens */
          @media (max-width: 768px) {
            .project-card {
              margin-bottom: 30px; /* Add margin between cards for vertical spacing */
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Projects;