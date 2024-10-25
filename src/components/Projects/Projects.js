import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eduTechImg from "../../Assets/Projects/eduTechImg.png";
import ticTacToeImg from "../../Assets/Projects/ticTacToeImg.png";
import randomPassImg from "../../Assets/Projects/medisync.png";
import bgmiProjectImg from "../../Assets/Projects/bookstore.png";
import parallaxImg from "../../Assets/Projects/parallaxImg.png";
import shoppingCartImg from "../../Assets/Projects/news.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgmiProjectImg}
              isBlog={false}
              title="Book Store MERN Stack Project"
              description="Book Store MERN Stack Project
Project Overview
A full-stack application built with MongoDB, Express.js, React, and Node.js (MERN) for managing a book store.

"
              ghLink="https://github.com/prabujayant/BookStore-MERN"
              //demoLink="https://www.bgmitournaments.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCartImg}
              isBlog={false}
              title="News App"
              description="A fully responsive News Application that fetches and displays real-time news articles using the News API."
              ghLink="https://github.com/prabujayant/NewsApp"
              demoLink="https://prabujayant.github.io/NewsApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="MediSync:Smart Health Monitoring using Machine Learning & IoT"
              description="•	OAn innovative smart health monitoring platform utilizing Machine Learning, TensorFlow, and IoT for early anomaly detection and data-driven decision-making."
              ghLink="https://github.com/prabujayant/MediSync-Smart-Health-Monitoring-System"
              demoLink=" https://drive.google.com/file/d/1KefmGBYEHOlIXaXR9JIy-E3E5xa_ijS1/view"            
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
