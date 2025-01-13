import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { FaHtml5, FaCss3, FaShieldAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiThealgorithms, SiVite, SiDocker } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";

function Techstack() {
  return (
    <Container style={{ paddingTop: "50px", textAlign: "center" }}>
      <h2 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "30px" }}>
        My Technical Skills
      </h2>

      {/* Programming Languages Section */}
      <h3 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "20px" }}>
        Programming Languages
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={6} md={2} className="tech-icons">
          {/* Python icon from an external URL */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" style={{ width: "50px", height: "50px" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Python
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <CgCPlusPlus style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              C++
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <DiJavascript1 style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              JavaScript
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <FaHtml5 style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              HTML
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <FaCss3 style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              CSS
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <DiNodejs style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Node.js
            </Card.Title>
          </Card.Body>
        </Col>
      </Row>

      {/* AI/ML Frameworks & Libraries Section */}
      <h3 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "20px" }}>
        AI/ML Frameworks & Libraries
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={6} md={2} className="tech-icons">
          <SiThealgorithms style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              TensorFlow
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <SiExpress style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              PyTorch
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <DiReact style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Scikit-learn
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <DiNodejs style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              NumPy
            </Card.Title>
          </Card.Body>
        </Col>
      </Row>

      {/* Web Development Section */}
      <h3 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "20px" }}>
        Web Development
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={6} md={2} className="tech-icons">
          <SiVite style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Vite
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <SiTailwindcss style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Tailwind CSS
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <DiMongodb style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              MongoDB
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <SiDocker style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Docker
            </Card.Title>
          </Card.Body>
        </Col>
      </Row>

      {/* Tools & Technologies Section */}
      <h3 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "20px" }}>
        Tools & Technologies
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={6} md={2} className="tech-icons">
          <IoLogoGithub style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              GitHub
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <DiGit style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Git
            </Card.Title>
          </Card.Body>
        </Col>
      </Row>

      {/* Cybersecurity Section */}
      <h3 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "20px" }}>
        Cybersecurity Tools
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={6} md={2} className="tech-icons">
          <FaShieldAlt style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Burp Suite
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <FaShieldAlt style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              Wireshark
            </Card.Title>
          </Card.Body>
        </Col>
        <Col xs={6} md={2} className="tech-icons">
          <FaShieldAlt style={{ color: "#d4af37", fontSize: "3rem" }} />
          <Card.Body style={{ backgroundColor: "#2e2e2e", borderRadius: "10px" }}>
            <Card.Title style={{ color: "#d4af37", fontWeight: "bold" }}>
              AnyProxy
            </Card.Title>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
