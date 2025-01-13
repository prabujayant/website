import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ backgroundColor: "#1a1a1a", padding: "20px" }}>
      <Row>
        <Col md="4" className="footer-copywright" style={{ color: "#d4af37" }}>
          <h3>Designed and Developed by Prabu Jayant</h3>
        </Col>
        <Col md="4" className="footer-copywright" style={{ color: "#d4af37" }}>
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ listStyle: "none", paddingLeft: 0 }}>
            <li className="social-icons" style={{ display: "inline", margin: "0 10px" }}>
              <a
                href="https://github.com/prabujayant"
                style={{ color: "#d4af37", fontSize: "1.5rem" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline", margin: "0 10px" }}>
              <a
                href="https://www.linkedin.com/in/prabu-jayant-6b316b251/"
                style={{ color: "#d4af37", fontSize: "1.5rem" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline", margin: "0 10px" }}>
              <a
                href="https://www.instagram.com/prabujayant17/"
                style={{ color: "#d4af37", fontSize: "1.5rem" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline", margin: "0 10px" }}>
              <a
                href="https://medium.com/@prabu.jayant2022"
                style={{ color: "#d4af37", fontSize: "1.5rem" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
