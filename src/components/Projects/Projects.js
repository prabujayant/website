import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medisyncImg from "../../Assets/Projects/medisync.png";
import bookstoreImg from "../../Assets/Projects/bookstore.png";
import newsImg from "../../Assets/Projects/news.png";
// Add placeholder images for new projects or use actual image imports
import defensysImg from "../../Assets/Projects/defensys.png"; // Add your DefenSys image
import terraImg from "../../Assets/Projects/terra.png"; // Add your Terra image

function Projects() {
  return (
    <Container fluid className="project-section" style={{ backgroundColor: "#1d1d1d", paddingTop: "50px" }}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "30px" }}>
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.2em", marginBottom: "50px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defensysImg}
              isBlog={false}
              title="DefenSys - Integrated Deep Learning Platform"
              description="A comprehensive cyber defense platform integrating malware detection with dynamic attack simulation, achieving 95%+ classification accuracy across 25+ malware families using Docker, Python, React, TensorFlow, and ResNet."
              ghLink="https://github.com/prabujayant/DefenSys" // Update with actual GitHub link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terraImg}
              isBlog={false}
              title="Terra - AI-based Personalized Carbon Footprint Companion"
              description="AI-powered mobile application integrating RAG with Llama 3.2 3B Instruct model for personalized carbon emission tracking. Features OCR-based eco-shopping assistant and comprehensive carbon footprint calculator with Firebase integration."
              ghLink="https://github.com/prabujayant/Terra" // Update with actual GitHub link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstoreImg}
              isBlog={false}
              title="Book Store MERN Stack Project"
              description="A full-stack application built with MongoDB, Express.js, React, and Node.js (MERN) for managing a book store."
              ghLink="https://github.com/prabujayant/BookStore-MERN"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsImg}
              isBlog={false}
              title="News App"
              description="A fully responsive News Application that fetches and displays real-time news articles using the News API."
              ghLink="https://github.com/prabujayant/NewsApp"
              viewLink="https://prabujayant.github.io/NewsApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medisyncImg}
              isBlog={false}
              title="MediSync: Smart Health Monitoring using Machine Learning & IoT"
              description="An innovative smart health monitoring platform utilizing Machine Learning, TensorFlow, and IoT for early anomaly detection and data-driven decision-making."
              ghLink="https://github.com/prabujayant/MediSync-Smart-Health-Monitoring-System"
              viewLink="https://drive.google.com/file/d/1KefmGBYEHOlIXaXR9JIy-E3E5xa_ijS1/view"
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ color: "#d4af37", fontWeight: "bold", marginTop: "50px", marginBottom: "30px" }}>
          My <strong className="purple">Research Works</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.2em", marginBottom: "50px" }}>
          These are some of my recent research publications.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Adaptive ML Framework for SaaS Traffic Classification in Cloud Ecosystem"
              description="ICWIHI 2025. Presented at the International Conference on Web Intelligence and Human-Machine Interaction, organized by R P Sarathy Institute of Technology, Salem, Tamil Nadu, India."
              viewLink="https://drive.google.com/file/d/1B3tt_W8u3wbktvR13hm7hObToNdV87Ww/view"
              isBlog={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Smart Health Monitoring and Anomaly Detection Using IoT and AI"
              description="ICoICI 2024. This paper focuses on leveraging IoT and AI for health monitoring and anomaly detection."
              viewLink="https://ieeexplore.ieee.org/document/10724486"
              isBlog={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Intrusion Detection Using LSTM and Deep Learning"
              description="ICCCNT 2024. A deep learning approach for intrusion detection using LSTM models."
              viewLink="https://ieeexplore.ieee.org/document/10696283"
              isBlog={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;